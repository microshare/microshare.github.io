import { DEFAULT_LOCALE, isLocaleCode, LANGUAGES } from '../../shared/languages.js'

export { LANGUAGES, DEFAULT_LOCALE, isLocaleCode }

export function getLocaleFromPath(relPath) {
  const parts = String(relPath || '').split('/')
  if (parts[0] === 'docs' && parts[1] === '2' && isLocaleCode(parts[2])) return parts[2]
  return DEFAULT_LOCALE
}

export function formatLocaleDate(value) {
  if (!value) return '—'
  return new Date(value).toLocaleString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function getTranslationEntry(page, locale) {
  return page?.translationGroup?.locales?.[locale] || null
}

export function buildLocalePathFromCanonical(canonicalPath, locale) {
  const parts = String(canonicalPath || '').split('/')
  if (locale === DEFAULT_LOCALE) return canonicalPath
  if (parts[0] === 'docs' && parts[1] === '2') {
    if (isLocaleCode(parts[2])) parts[2] = locale
    else parts.splice(2, 0, locale)
    return parts.join('/')
  }
  return canonicalPath
}
