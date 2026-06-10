import { DEFAULT_LOCALE, isLocaleCode } from '../../shared/languages.js'

export function normalizeRelativePath(input) {
  return String(input || '')
    .replace(/\\/g, '/')
    .replace(/^\/+/, '')
    .replace(/\/+$/, '')
}

export function getLocaleFromPath(relPath) {
  const parts = normalizeRelativePath(relPath).split('/')
  if (parts[0] === 'docs' && parts[1] === '2' && isLocaleCode(parts[2])) {
    return parts[2]
  }
  return DEFAULT_LOCALE
}

export function getCanonicalPath(relPath) {
  const normalized = normalizeRelativePath(relPath)
  const parts = normalized.split('/')
  if (parts[0] === 'docs' && parts[1] === '2' && isLocaleCode(parts[2])) {
    parts.splice(2, 1)
    return parts.join('/')
  }
  return normalized
}

export function buildLocalePath(canonicalPath, locale) {
  let rel = normalizeRelativePath(canonicalPath)
  if (!rel.endsWith('.md')) rel = `${rel}.md`
  if (!rel.startsWith('docs/')) rel = `docs/${rel}`
  if (!rel.startsWith('docs/2/')) throw new Error('Only docs/2 pages are supported')

  if (locale === DEFAULT_LOCALE) return rel

  const parts = rel.split('/')
  if (parts[0] === 'docs' && parts[1] === '2') {
    if (isLocaleCode(parts[2])) parts[2] = locale
    else parts.splice(2, 0, locale)
    return parts.join('/')
  }
  return rel
}

export function filePathToUrl(filePath) {
  return `/${normalizeRelativePath(filePath).replace(/\.md$/, '')}`
}

export function buildTranslationsMap(localesByCode) {
  const translations = {}
  for (const [code, entry] of Object.entries(localesByCode)) {
    if (entry?.url) translations[code] = entry.url
  }
  return translations
}

export function slugifySegment(value) {
  return String(value || '')
    .normalize('NFKD')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function buildMigratedCanonicalPath(canonicalPath, groupTitle, subgroupTitle = '') {
  const fileName = normalizeRelativePath(canonicalPath).split('/').pop()
  if (!fileName) throw new Error('Invalid page path')
  const group = slugifySegment(groupTitle || 'general')
  const subgroup = String(subgroupTitle || '').trim()
  if (subgroup) return `docs/2/${group}/${slugifySegment(subgroup)}/${fileName}`
  return `docs/2/${group}/${fileName}`
}
