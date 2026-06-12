;(function () {
  var STORAGE_KEY = 'microshare-docs-lang'
  var SUPPORTED = ['fr', 'de', 'es']

  function normalizeLang(value) {
    if (!value) return ''
    return String(value).toLowerCase().split('-')[0]
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
    if (htmlLang && htmlLang !== 'en') return htmlLang

    var path = normalizePath(window.location.pathname)
    var parts = path.split('/').filter(Boolean)
    var docsIndex = parts.indexOf('docs')
    if (docsIndex !== -1 && parts[docsIndex + 1] === '2' && SUPPORTED.indexOf(parts[docsIndex + 2]) !== -1) {
      return parts[docsIndex + 2]
    }
    return 'en'
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
    if (!manifest || !target) return true
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
    if (currentLang() !== 'en') return

    var saved = localStorage.getItem(STORAGE_KEY)
    var preferred = normalizeLang(saved || navigator.language || navigator.userLanguage)
    if (!preferred || preferred === 'en' || SUPPORTED.indexOf(preferred) === -1) return
    if (sessionStorage.getItem('docs-locale-checked')) return

    var translations = readTranslations()
    var manifest = readManifest()
    var target = resolveTarget(preferred, translations, manifest)
    var current = normalizePath(window.location.pathname)
    if (!target || normalizePath(target) === current) return

    sessionStorage.setItem('docs-locale-checked', '1')
    window.location.replace(target)
  }

  function bindSwitcher() {
    document.querySelectorAll('[data-docs-lang]').forEach(function (button) {
      button.addEventListener('click', function () {
        var lang = button.getAttribute('data-docs-lang')
        if (lang) localStorage.setItem(STORAGE_KEY, lang)
      })
    })
  }

  document.addEventListener('DOMContentLoaded', function () {
    bindSwitcher()
    maybeRedirect()
  })
})()
