;(function () {
  var STORAGE_KEY = 'microshare-docs-lang'
  var EXPLICIT_KEY = STORAGE_KEY + ':explicit'
  var SUPPORTED = ['fr', 'de', 'es']

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

  function readTranslations() {
    var node = document.getElementById('docs-translations-data')
    if (!node) return {}
    try {
      return JSON.parse(node.textContent || '{}')
    } catch (error) {
      return {}
    }
  }

  function readManifest() {
    var node = document.getElementById('docs-locale-manifest')
    if (!node) return null
    try {
      var paths = JSON.parse(node.textContent || '[]')
      return new Set(paths.map(normalizePath))
    } catch (error) {
      return null
    }
  }

  function currentLang() {
    var htmlLang = document.documentElement.getAttribute('lang')
    if (htmlLang && htmlLang !== 'en') return normalizeLang(htmlLang)

    var path = normalizePath(window.location.pathname)
    var parts = path.split('/').filter(Boolean)
    var docsIndex = parts.indexOf('docs')
    if (docsIndex !== -1 && parts[docsIndex + 1] === '2' && SUPPORTED.indexOf(parts[docsIndex + 2]) !== -1) {
      return parts[docsIndex + 2]
    }
    return 'en'
  }

  function preferredLang() {
    if (localStorage.getItem(EXPLICIT_KEY) === '1') {
      return normalizeLang(localStorage.getItem(STORAGE_KEY))
    }
    return normalizeLang(navigator.language || navigator.userLanguage)
  }

  function navigationKind() {
    var entries = performance.getEntriesByType && performance.getEntriesByType('navigation')
    return entries && entries[0] && entries[0].type ? entries[0].type : 'unknown'
  }

  function isExternalEntry() {
    var referrer = document.referrer
    if (!referrer) return true
    try {
      return new URL(referrer).origin !== window.location.origin
    } catch (error) {
      return true
    }
  }

  function shouldApplyLocaleRedirect() {
    var kind = navigationKind()
    if (kind === 'reload') return true
    if (kind === 'back_forward') return false
    return isExternalEntry()
  }

  function buildLocalePath(pathname, locale) {
    var path = normalizePath(pathname)
    var parts = path.split('/').filter(Boolean)
    var docsIndex = parts.indexOf('docs')
    if (docsIndex === -1 || parts[docsIndex + 1] !== '2') return null

    var rest = parts.slice(docsIndex + 2)
    if (rest.length && SUPPORTED.indexOf(rest[0]) !== -1) rest = rest.slice(1)

    var base = '/' + parts.slice(0, docsIndex + 2).join('/')
    if (locale === 'en') {
      return rest.length ? base + '/' + rest.join('/') : base + '/'
    }
    return rest.length ? base + '/' + locale + '/' + rest.join('/') : base + '/' + locale + '/'
  }

  function manifestHas(manifest, target) {
    if (!target) return false
    if (!manifest) return false
    var normalized = normalizePath(target)
    return manifest.has(normalized) || manifest.has(normalized + '/')
  }

  function resolveTarget(preferred, translations, manifest) {
    if (translations && translations[preferred]) {
      var explicit = normalizePath(translations[preferred])
      if (manifestHas(manifest, explicit)) return explicit
    }

    var built = buildLocalePath(window.location.pathname, preferred)
    if (built && manifestHas(manifest, built)) return normalizePath(built)

    return null
  }

  function maybeRedirect() {
    if (!shouldApplyLocaleRedirect()) return

    var preferred = preferredLang()
    var active = currentLang()
    if (preferred === active) return

    var translations = readTranslations()
    var manifest = readManifest()
    if (!manifest) return

    var target = resolveTarget(preferred, translations, manifest)
    var currentPath = normalizePath(window.location.pathname)
    if (!target || normalizePath(target) === currentPath) return

    window.location.replace(target)
  }

  function bindSwitcher() {
    document.querySelectorAll('[data-docs-lang]').forEach(function (link) {
      link.addEventListener('click', function () {
        var lang = link.getAttribute('data-docs-lang')
        if (!lang) return
        localStorage.setItem(STORAGE_KEY, lang)
        localStorage.setItem(EXPLICIT_KEY, '1')
      })
    })
  }

  document.addEventListener('DOMContentLoaded', function () {
    bindSwitcher()
    maybeRedirect()
  })
})()
