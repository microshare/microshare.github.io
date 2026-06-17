;(function () {
  var SESSION_KEY = 'microshare-docs-lang'
  var UI_SESSION_KEY = 'microshare-docs-ui-lang'
  var SUPPORTED = ['fr', 'de', 'es']
  var URL_PREFIX_LOCALES = ['en', 'fr', 'de', 'es']
  var ALL_LOCALES = ['en'].concat(SUPPORTED)

  function normalizeLang(value) {
    if (!value) return 'en'
    var lang = String(value).toLowerCase().split('-')[0]
    if (lang === 'en' || SUPPORTED.indexOf(lang) !== -1) return lang
    return 'en'
  }

  function normalizePath(pathname) {
    var path = String(pathname || '').replace(/\/+$/, '').replace(/\.html$/, '')
    return path || '/'
  }

  function readManifest() {
    var node = document.getElementById('docs-locale-manifest')
    if (!node) return { error: 'docs-locale-manifest element missing' }
    var raw = (node.textContent || '').trim()
    if (!raw || raw === 'null') return { error: 'manifest is empty (build may be missing site.pages data)' }
    try {
      var paths = JSON.parse(raw)
      if (!Array.isArray(paths) || !paths.length) {
        return { error: 'manifest has no paths', raw: raw.slice(0, 80) }
      }
      return { paths: new Set(paths.map(normalizePath)) }
    } catch (error) {
      return { error: 'manifest JSON parse failed', raw: raw.slice(0, 80) }
    }
  }

  function stripUrlLocale(rest) {
    if (rest.length && URL_PREFIX_LOCALES.indexOf(rest[0]) !== -1) return rest.slice(1)
    return rest
  }

  function currentLang() {
    var path = normalizePath(window.location.pathname)
    var parts = path.split('/').filter(Boolean)
    var docsIndex = parts.indexOf('docs')
    if (docsIndex !== -1 && parts[docsIndex + 1] === '2') {
      var maybeLocale = parts[docsIndex + 2]
      if (maybeLocale === 'en') return 'en'
      if (SUPPORTED.indexOf(maybeLocale) !== -1) return maybeLocale
    }

    var htmlLang = document.documentElement.getAttribute('lang')
    if (htmlLang) return normalizeLang(htmlLang)
    return 'en'
  }

  function navigationKind() {
    var entries = performance.getEntriesByType && performance.getEntriesByType('navigation')
    return entries && entries[0] && entries[0].type ? entries[0].type : 'unknown'
  }

  function isInternalNavigation() {
    var referrer = document.referrer
    if (!referrer) return false
    try {
      return new URL(referrer).origin === window.location.origin
    } catch (error) {
      return false
    }
  }

  function shouldApplyLocaleRedirect() {
    return navigationKind() !== 'back_forward'
  }

  function buildLocalePath(pathname, locale) {
    var path = normalizePath(pathname)
    var parts = path.split('/').filter(Boolean)
    var docsIndex = parts.indexOf('docs')
    if (docsIndex === -1 || parts[docsIndex + 1] !== '2') return null

    var rest = parts.slice(docsIndex + 2)
    rest = stripUrlLocale(rest)

    var base = '/' + parts.slice(0, docsIndex + 2).join('/')
    if (locale === 'en') {
      return rest.length ? base + '/' + rest.join('/') : base + '/'
    }
    return rest.length ? base + '/' + locale + '/' + rest.join('/') : base + '/' + locale + '/'
  }

  function manifestHas(manifest, target) {
    if (!target || !manifest) return false
    var normalized = normalizePath(target)
    return manifest.has(normalized) || manifest.has(normalized + '/')
  }

  function availableLocales(manifest) {
    var locales = []
    for (var i = 0; i < ALL_LOCALES.length; i++) {
      var locale = ALL_LOCALES[i]
      var path = normalizePath(buildLocalePath(window.location.pathname, locale))
      if (manifestHas(manifest, path)) locales.push(locale)
    }
    return locales
  }

  function browserLanguagePreferences() {
    var preferences = []
    if (navigator.languages && navigator.languages.length) {
      for (var i = 0; i < navigator.languages.length; i++) {
        preferences.push(navigator.languages[i])
      }
    } else {
      preferences.push(navigator.language || navigator.userLanguage || 'en')
    }
    return preferences
  }

  function negotiateLocale(manifest) {
    var available = availableLocales(manifest)
    if (!available.length) return currentLang()

    var preferences = browserLanguagePreferences()

    for (var i = 0; i < preferences.length; i++) {
      var lang = normalizeLang(preferences[i])
      if (available.indexOf(lang) !== -1) return lang
    }

    if (available.indexOf('en') !== -1) return 'en'
    return available[0]
  }

  function persistLocale(lang) {
    try {
      sessionStorage.setItem(SESSION_KEY, lang)
      sessionStorage.setItem(UI_SESSION_KEY, lang)
    } catch (error) {}
  }

  function applyUiLocale(lang) {
    if (!lang || lang === 'en') return
    try {
      document.documentElement.setAttribute('data-docs-ui-lang', lang)
    } catch (error) {}
  }

  function logLocale(event, details) {
    if (typeof console === 'undefined' || !console.info) return
    console.info('[Microshare i18n]', event, details)
  }

  function maybeRedirect(manifest) {
    if (!shouldApplyLocaleRedirect()) {
      logLocale('redirect skipped', {
        reason: 'back_forward navigation',
        used: currentLang(),
        path: normalizePath(window.location.pathname)
      })
      return false
    }

    var negotiated = negotiateLocale(manifest)
    var active = currentLang()
    if (negotiated === active) return false

    var target = normalizePath(buildLocalePath(window.location.pathname, negotiated))
    if (!manifestHas(manifest, target)) {
      logLocale('redirect skipped', {
        reason: 'no localized page in manifest',
        seen: active,
        wanted: negotiated,
        target: target,
        available: availableLocales(manifest)
      })
      return false
    }

    var currentPath = normalizePath(window.location.pathname)
    if (target === currentPath) return false

    logLocale('redirect to locale', {
      seen: active,
      used: negotiated,
      from: currentPath,
      to: target,
      reason: isInternalNavigation() ? 'browser language (internal link)' : 'browser language',
      browser: browserLanguagePreferences()
    })
    window.location.replace(target + window.location.search + window.location.hash)
    return true
  }

  var manifestResult = readManifest()
  if (!manifestResult || !manifestResult.paths) {
    logLocale('locale script inactive', {
      reason: (manifestResult && manifestResult.error) || 'docs-locale-manifest not found on page',
      path: normalizePath(window.location.pathname),
      detail: manifestResult && manifestResult.raw
    })
    return
  }
  var manifest = manifestResult.paths

  var pageLang = currentLang()
  var browserLangs = browserLanguagePreferences()
  var sessionLang = null
  try {
    sessionLang = sessionStorage.getItem(SESSION_KEY)
  } catch (error) {}

  if (maybeRedirect(manifest)) return

  var negotiated = negotiateLocale(manifest)
  var usedLang = currentLang()
  persistLocale(usedLang)
  applyUiLocale(negotiated)

  logLocale('locale active', {
    seen: {
      url: pageLang,
      html: document.documentElement.getAttribute('lang') || null,
      browser: browserLangs,
      session: sessionLang
    },
    used: usedLang,
    ui: negotiated,
    contentFallback: document.documentElement.getAttribute('data-locale-fallback') === 'true',
    available: availableLocales(manifest),
    navigation: navigationKind(),
    internal: isInternalNavigation(),
    path: normalizePath(window.location.pathname)
  })
})()
