export const LANGUAGES = [
  { code: 'en', label: 'English', default: true },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'es', label: 'Español' },
]

export const LOCALE_CODES = LANGUAGES.map((lang) => lang.code)
export const NON_DEFAULT_LOCALES = LANGUAGES.filter((lang) => !lang.default).map((lang) => lang.code)
export const DEFAULT_LOCALE = 'en'

const localeSet = new Set(LOCALE_CODES)

export function isLocaleCode(value) {
  return localeSet.has(String(value || '').toLowerCase())
}

export function getLanguage(code) {
  return LANGUAGES.find((lang) => lang.code === code) || LANGUAGES[0]
}
