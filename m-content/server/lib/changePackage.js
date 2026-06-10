import fs from 'node:fs/promises'
import path from 'node:path'
import { existsSync } from 'node:fs'
import { buildBranchName, createGitClient } from './git.js'
import {
  closePullRequest,
  createPullRequest,
  getGithubStatus,
  getPullRequest,
  getPullRequestDiff,
  listContentPullRequests,
  mergePullRequest,
} from './github.js'

const STATE_FILE = '.change-package.json'

export function createChangePackageService({ siteRoot, appRoot }) {
  const statePath = path.join(appRoot, STATE_FILE)
  const git = createGitClient(siteRoot)
  const github = getGithubStatus()

  async function readState() {
    if (!existsSync(statePath)) return null
    const raw = await fs.readFile(statePath, 'utf8')
    return JSON.parse(raw)
  }

  async function writeState(state) {
    await fs.writeFile(statePath, `${JSON.stringify(state, null, 2)}\n`, 'utf8')
  }

  async function clearState() {
    if (existsSync(statePath)) await fs.unlink(statePath)
  }

  async function ensureGitReady() {
    if (!(await git.isRepo())) {
      throw new Error('This workspace is not a git repository')
    }
  }

  async function syncBranchWithState(state) {
    if (!state?.branch) return state
    const current = await git.currentBranch()
    if (current !== state.branch && (await git.hasLocalBranch(state.branch))) {
      await git.checkoutBranch(state.branch)
    }
    return state
  }

  async function getActivePackage() {
    const state = await readState()
    if (!state) return null
    await ensureGitReady()
    await syncBranchWithState(state)
    return enrichPackage(state)
  }

  async function enrichPackage(state) {
    const diff =
      state.status === 'draft'
        ? await git.diffAgainst(github.defaultBranch).catch(() => null)
        : null
    return {
      ...state,
      github,
      currentBranch: await git.currentBranch().catch(() => null),
      dirty: await git.workingTreeDirty().catch(() => false),
      diffStats: diff?.stats || null,
      commitCount: state.status === 'draft' ? (await git.logSince(github.defaultBranch).catch(() => [])).length : null,
    }
  }

  async function listPackages() {
    await ensureGitReady()
    const active = await getActivePackage()
    const remoteOpen = github.configured ? await listContentPullRequests({ state: 'open' }) : []
    const remoteClosed = github.configured ? await listContentPullRequests({ state: 'closed' }).then((items) => items.slice(0, 10)) : []

    const packages = []
    if (active) {
      packages.push({
        ...active,
        isActive: true,
        source: 'local',
      })
    }

    for (const pr of remoteOpen) {
      if (active?.prNumber === pr.prNumber) continue
      packages.push({ ...pr, isActive: false, source: 'github' })
    }

    for (const pr of remoteClosed) {
      if (packages.some((item) => item.prNumber === pr.prNumber)) continue
      packages.push({ ...pr, isActive: false, source: 'github' })
    }

    return {
      packages,
      active,
      github,
      currentBranch: await git.currentBranch().catch(() => null),
    }
  }

  async function startPackage({ title, author }) {
    const cleanTitle = String(title || '').trim()
    const cleanAuthor = String(author || '').trim()
    if (!cleanTitle) throw new Error('Change package title is required')
    if (!cleanAuthor) throw new Error('Your name is required')

    await ensureGitReady()
    const existing = await readState()
    if (existing && ['draft', 'review'].includes(existing.status)) {
      throw new Error(`A change package is already active: "${existing.title}"`)
    }

    const branch = buildBranchName(cleanTitle)
    const stashed = await git.stashIfDirty()
    try {
      await git.fetchOrigin()
      await git.checkoutDefault(github.defaultBranch)
      await git.pullDefault(github.defaultBranch)
      await git.createBranch(branch, github.defaultBranch)
      if (stashed) await git.applyStash()
    } catch (error) {
      if (stashed) {
        try {
          await git.checkoutDefault(github.defaultBranch)
          await git.applyStash()
        } catch (restoreError) {
          console.warn('Could not restore stash after failed package start:', restoreError.message)
        }
      }
      throw error
    }
    await git.commitContentChanges(`Start change package: ${cleanTitle}`, { name: cleanAuthor })

    const state = {
      id: branch,
      title: cleanTitle,
      author: cleanAuthor,
      branch,
      status: 'draft',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      prNumber: null,
      prUrl: null,
      submittedAt: null,
      publishedAt: null,
    }
    await writeState(state)
    return enrichPackage(state)
  }

  async function recordChange(summary, authorName) {
    const state = await readState()
    if (!state || state.status === 'published' || state.status === 'closed') return null
    await ensureGitReady()
    await syncBranchWithState(state)
    const commit = await git.commitContentChanges(summary, { name: authorName || state.author })
    if (commit) {
      state.updatedAt = new Date().toISOString()
      await writeState(state)
    }
    return commit
  }

  async function getPackageDiff({ prNumber } = {}) {
    await ensureGitReady()
    const state = await readState()
    if (prNumber || state?.status === 'review') {
      const number = prNumber || state?.prNumber
      if (!number) throw new Error('No pull request found for this change package')
      const diff = await getPullRequestDiff(number)
      const pr = await getPullRequest(number)
      return {
        source: 'github',
        prNumber: number,
        prUrl: pr.html_url,
        title: pr.title,
        ...diff,
        commits: [],
      }
    }

    if (!state) throw new Error('No active change package')
    const diff = await git.diffAgainst(github.defaultBranch)
    const commits = await git.logSince(github.defaultBranch)
    return {
      source: 'local',
      title: state.title,
      branch: state.branch,
      ...diff,
      commits,
    }
  }

  async function submitPackage() {
    const state = await readState()
    if (!state) throw new Error('No active change package')
    if (state.status === 'review') throw new Error('This change package is already submitted for review')
    if (!github.configured) throw new Error('GITHUB_TOKEN is not configured')

    await ensureGitReady()
    await syncBranchWithState(state)
    await git.commitContentChanges(`Submit change package: ${state.title}`, { name: state.author })
    await git.pushBranch(state.branch)

    const prBody = [
      `Change package submitted from m-content.`,
      '',
      `**Author:** ${state.author}`,
      `**Branch:** \`${state.branch}\``,
      '',
      'Review the changes in m-content or on GitHub, then publish to go live.',
    ].join('\n')

    const pr = await createPullRequest({
      title: state.title,
      body: prBody,
      head: state.branch,
      base: github.defaultBranch,
    })

    state.status = 'review'
    state.prNumber = pr.number
    state.prUrl = pr.html_url
    state.submittedAt = new Date().toISOString()
    state.updatedAt = state.submittedAt
    await writeState(state)
    return enrichPackage(state)
  }

  async function publishPackage({ prNumber, author } = {}) {
    const state = await readState()
    const number = prNumber || state?.prNumber
    if (!number) throw new Error('No pull request to publish')
    if (!github.configured) throw new Error('GITHUB_TOKEN is not configured')

    const pr = await getPullRequest(number)
    if (pr.merged_at) {
      await finalizePublished(state, pr)
      return { ok: true, alreadyMerged: true, prNumber: number, prUrl: pr.html_url }
    }
    if (pr.state !== 'open') throw new Error('This pull request is not open')

    const publisher = String(author || 'm-content').trim()
    await mergePullRequest(number, {
      commitTitle: pr.title,
      commitMessage: `Published by ${publisher} via m-content`,
    })

    await finalizePublished(state, pr)
    return {
      ok: true,
      prNumber: number,
      prUrl: pr.html_url,
      publishedAt: new Date().toISOString(),
    }
  }

  async function finalizePublished(state, pr) {
    await ensureGitReady()
    const branch = state?.branch || pr.head?.ref
    await git.fetchOrigin()
    await git.checkoutDefault(github.defaultBranch)
    await git.pullDefault(github.defaultBranch)
    if (branch && (await git.hasLocalBranch(branch))) {
      await git.deleteLocalBranch(branch, github.defaultBranch)
    }
    if (state) {
      state.status = 'published'
      state.publishedAt = pr.merged_at || new Date().toISOString()
      state.updatedAt = state.publishedAt
      await writeState(state)
      await clearState()
    }
  }

  async function abandonPackage({ prNumber } = {}) {
    const state = await readState()
    const number = prNumber || state?.prNumber
    if (number && github.configured) {
      try {
        const pr = await getPullRequest(number)
        if (pr.state === 'open') await closePullRequest(number)
      } catch (error) {
        console.warn('Could not close pull request:', error.message)
      }
    }

    if (state?.branch) {
      await ensureGitReady()
      await git.fetchOrigin()
      await git.checkoutDefault(github.defaultBranch)
      if (await git.hasLocalBranch(state.branch)) {
        await git.deleteLocalBranch(state.branch, github.defaultBranch)
      }
      if (github.configured) {
        await git.deleteRemoteBranch(state.branch)
      }
    }

    await clearState()
    return { ok: true }
  }

  async function resumeDraftPackage() {
    const state = await readState()
    if (!state) throw new Error('No change package to resume')
    if (state.status !== 'draft') throw new Error('Only draft packages can be resumed as active')
    await syncBranchWithState(state)
    return enrichPackage(state)
  }

  return {
    getActivePackage,
    listPackages,
    startPackage,
    recordChange,
    getPackageDiff,
    submitPackage,
    publishPackage,
    abandonPackage,
    resumeDraftPackage,
    getGithubStatus: () => github,
  }
}
