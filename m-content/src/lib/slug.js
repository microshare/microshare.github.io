export function slugify(value) {
  return String(value || '')
    .normalize('NFKD')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function titleFromPath(path) {
  return String(path || '')
    .split('/')
    .pop()
    ?.replace(/\.md$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

export function inferDocPath({ groupTitle, subgroupTitle, title }) {
  const group = slugify(groupTitle || 'general')
  const page = slugify(title || 'new-page')
  if (subgroupTitle) return `docs/2/${group}/${slugify(subgroupTitle)}/${page}.md`
  return `docs/2/${group}/${page}.md`
}

export function inferDocUrl({ groupTitle, subgroupTitle, title }) {
  return `/${inferDocPath({ groupTitle, subgroupTitle, title }).replace(/\.md$/, '')}`
}

export function buildMigratedPath(canonicalPath, { groupTitle, subgroupTitle = '' }) {
  const fileName = String(canonicalPath || '').split('/').pop()
  if (!fileName) return ''
  const group = slugify(groupTitle || 'general')
  const subgroup = String(subgroupTitle || '').trim()
  if (subgroup) return `docs/2/${group}/${slugify(subgroup)}/${fileName}`
  return `docs/2/${group}/${fileName}`
}
