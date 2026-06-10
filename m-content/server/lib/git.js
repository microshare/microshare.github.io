import simpleGit from 'simple-git'
import path from 'node:path'

const CONTENT_GLOBS = ['docs/', '_data/', 'assets/img/']

export function createGitClient(siteRoot) {
  const git = simpleGit(siteRoot)
  return {
    git,
    siteRoot,
    async currentBranch() {
      const status = await git.status()
      return status.current || null
    },
    async isRepo() {
      try {
        await git.revparse(['--is-inside-work-tree'])
        return true
      } catch {
        return false
      }
    },
    async fetchOrigin() {
      await git.fetch(['origin'])
    },
    async checkoutBranch(branch) {
      await git.checkout(branch)
    },
    async checkoutDefault(defaultBranch) {
      await checkoutTrackingBranch(git, defaultBranch)
    },
    async pullDefault(defaultBranch) {
      try {
        await git.pull('origin', defaultBranch)
      } catch (error) {
        const message = String(error?.message || error)
        if (!message.includes('Already up to date')) throw error
      }
    },
    async createBranch(branch, defaultBranch) {
      await checkoutTrackingBranch(git, defaultBranch)
      await git.checkoutLocalBranch(branch)
    },
    async deleteLocalBranch(branch, defaultBranch) {
      await checkoutTrackingBranch(git, defaultBranch)
      await git.deleteLocalBranch(branch, true)
    },
    async deleteRemoteBranch(branch) {
      try {
        await git.push(['origin', '--delete', branch])
      } catch (error) {
        const message = String(error?.message || error)
        if (message.includes('remote ref does not exist')) return
        throw error
      }
    },
    async pushBranch(branch) {
      await git.push(['-u', 'origin', branch])
    },
    async hasLocalBranch(branch) {
      const branches = await git.branchLocal()
      return branches.all.includes(branch)
    },
    async stashIfDirty() {
      const status = await git.status()
      if (status.isClean()) return false
      await git.stash(['push', '-u', '-m', 'm-content:auto-stash'])
      return true
    },
    async applyStash() {
      const list = await git.stashList()
      const entry = list.all.find((item) => item.message === 'm-content:auto-stash')
      if (!entry) return false
      try {
        await git.stash(['apply', entry.hash])
        await git.stash(['drop', entry.hash])
        return true
      } catch (error) {
        throw new Error(`Could not restore stashed changes: ${error.message}`)
      }
    },
    async commitContentChanges(message, author) {
      await git.add(CONTENT_GLOBS)
      const staged = await git.diff(['--cached', '--name-only'])
      if (!staged.trim()) return null
      const authorLine = formatAuthor(author)
      await git.commit(message, undefined, {
        '--author': authorLine,
      })
      const log = await git.log({ maxCount: 1 })
      return log.latest || null
    },
    async diffAgainst(baseBranch) {
      const summary = await git.diffSummary([`${baseBranch}...HEAD`])
      const patch = await git.diff([`${baseBranch}...HEAD`])
      const files = summary.files.map((file) => ({
        path: file.file,
        insertions: file.insertions,
        deletions: file.deletions,
        binary: file.binary,
        changeType: inferChangeType(file),
      }))
      return {
        files,
        patch,
        stats: {
          files: files.length,
          insertions: summary.insertions,
          deletions: summary.deletions,
        },
      }
    },
    async logSince(baseBranch, limit = 20) {
      const log = await git.log({ from: baseBranch, to: 'HEAD', maxCount: limit })
      return log.all.map((entry) => ({
        hash: entry.hash,
        message: entry.message,
        author: entry.author_name,
        date: entry.date,
      }))
    },
    async workingTreeDirty() {
      const status = await git.status()
      return !status.isClean()
    },
    async remoteUrl() {
      try {
        return (await git.remote(['get-url', 'origin'])) || null
      } catch {
        return null
      }
    },
  }
}

async function checkoutTrackingBranch(git, branch) {
  const branches = await git.branchLocal()
  if (branches.all.includes(branch)) {
    await git.checkout(branch)
    return
  }
  try {
    await git.checkout(['-B', branch, `origin/${branch}`])
  } catch {
    await git.checkoutLocalBranch(branch)
  }
}

function formatAuthor(author) {
  const name = String(author?.name || process.env.CONTENT_AUTHOR_NAME || 'm-content').trim() || 'm-content'
  const email = String(author?.email || process.env.CONTENT_AUTHOR_EMAIL || 'm-content@microshare.io').trim()
  return `${name} <${email}>`
}

function inferChangeType(file) {
  if (file.insertions > 0 && file.deletions === 0) return 'added'
  if (file.deletions > 0 && file.insertions === 0) return 'deleted'
  return 'modified'
}

export function slugifyBranchPart(value) {
  return String(value || '')
    .normalize('NFKD')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 48)
}

export function buildBranchName(title) {
  const slug = slugifyBranchPart(title) || 'update'
  const stamp = new Date().toISOString().slice(0, 10)
  return `content/${slug}-${stamp}`
}
