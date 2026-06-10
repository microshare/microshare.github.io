const DEFAULT_REPO = 'microshare/microshare.github.io'
const CONTENT_LABEL = 'content-package'

function getConfig() {
  const token = process.env.GITHUB_TOKEN || ''
  const repo = process.env.GITHUB_REPO || DEFAULT_REPO
  const defaultBranch = process.env.GITHUB_DEFAULT_BRANCH || 'master'
  const [owner, name] = repo.split('/')
  if (!token) {
    return { configured: false, token: '', owner, name, repo, defaultBranch }
  }
  return { configured: true, token, owner, name, repo, defaultBranch }
}

async function githubRequest(pathname, options = {}) {
  const config = getConfig()
  if (!config.configured) {
    throw new Error('GITHUB_TOKEN is not configured')
  }
  const base = pathname.startsWith('/search/') ? 'https://api.github.com' : `https://api.github.com/repos/${config.owner}/${config.name}`
  const response = await fetch(`${base}${pathname}`, {
    ...options,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${config.token}`,
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  })
  const text = await response.text()
  let data = null
  try {
    data = text ? JSON.parse(text) : null
  } catch {
    data = { message: text }
  }
  if (!response.ok) {
    const message = data?.message || `GitHub API error (${response.status})`
    throw new Error(message)
  }
  return data
}

export function getGithubStatus() {
  const config = getConfig()
  return {
    configured: config.configured,
    repo: config.repo,
    defaultBranch: config.defaultBranch,
    label: CONTENT_LABEL,
  }
}

export async function ensureContentLabel() {
  const config = getConfig()
  try {
    await githubRequest(`/labels/${encodeURIComponent(CONTENT_LABEL)}`)
  } catch {
    await githubRequest('/labels', {
      method: 'POST',
      body: JSON.stringify({
        name: CONTENT_LABEL,
        color: '1f6feb',
        description: 'Documentation change package from m-content',
      }),
    })
  }
  return CONTENT_LABEL
}

export async function createPullRequest({ title, body, head, base }) {
  await ensureContentLabel()
  const config = getConfig()
  const pr = await githubRequest('/pulls', {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
      head,
      base: base || config.defaultBranch,
      maintainer_can_modify: true,
    }),
  })
  await githubRequest(`/issues/${pr.number}/labels`, {
    method: 'POST',
    body: JSON.stringify({ labels: [CONTENT_LABEL] }),
  })
  return pr
}

export async function mergePullRequest(prNumber, { commitTitle, commitMessage } = {}) {
  const config = getConfig()
  return githubRequest(`/pulls/${prNumber}/merge`, {
    method: 'PUT',
    body: JSON.stringify({
      merge_method: 'squash',
      commit_title: commitTitle,
      commit_message: commitMessage,
    }),
  })
}

export async function closePullRequest(prNumber) {
  return githubRequest(`/pulls/${prNumber}`, {
    method: 'PATCH',
    body: JSON.stringify({ state: 'closed' }),
  })
}

export async function getPullRequest(prNumber) {
  return githubRequest(`/pulls/${prNumber}`)
}

export async function listContentPullRequests({ state = 'open' } = {}) {
  const config = getConfig()
  if (!config.configured) return []
  const query = `repo:${config.repo} is:pr label:${CONTENT_LABEL} state:${state}`
  const result = await githubRequest(`/search/issues?q=${encodeURIComponent(query)}&per_page=50&sort=updated`)
  return (result.items || []).map((item) =>
    mapPullRequest({
      number: item.number,
      title: item.title,
      state: item.state,
      html_url: item.html_url,
      created_at: item.created_at,
      updated_at: item.updated_at,
      merged_at: item.pull_request?.merged_at || null,
      user: item.user,
      head: { ref: item.pull_request?.head?.ref || '' },
    }),
  )
}

export async function getPullRequestDiff(prNumber) {
  const files = await githubRequest(`/pulls/${prNumber}/files?per_page=100`)
  const stats = files.reduce(
    (acc, file) => {
      acc.files += 1
      acc.insertions += file.additions
      acc.deletions += file.deletions
      return acc
    },
    { files: 0, insertions: 0, deletions: 0 },
  )
  return {
    files: files.map((file) => ({
      path: file.filename,
      insertions: file.additions,
      deletions: file.deletions,
      binary: file.status === 'added' && file.patch == null && file.additions === 0,
      changeType: file.status,
      patch: file.patch || '',
    })),
    patch: files.map((file) => file.patch || '').filter(Boolean).join('\n'),
    stats,
  }
}

function mapPullRequest(pr) {
  return {
    id: pr.head?.ref || String(pr.number),
    branch: pr.head?.ref || '',
    title: pr.title,
    author: pr.user?.login || 'unknown',
    status: pr.merged_at ? 'published' : pr.state === 'open' ? 'review' : 'closed',
    prNumber: pr.number,
    prUrl: pr.html_url,
    createdAt: pr.created_at,
    updatedAt: pr.updated_at,
    publishedAt: pr.merged_at,
    htmlUrl: pr.html_url,
  }
}
