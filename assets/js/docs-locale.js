;(function () {
  var STORAGE_KEY = 'microshare-docs-lang'
  var SUPPORTED = ['fr', 'de', 'es']

  function normalizeLang(value) {
    if (!value) return ''
    return String(value).toLowerCase().split('-')[0]
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

  function currentLang() {
    var htmlLang = document.documentElement.getAttribute('lang')
    if (htmlLang && htmlLang !== 'en') return htmlLang
    var path = window.location.pathname.replace(/\/+$/, '')
    var parts = path.split('/')
    var docsIndex = parts.indexOf('docs')
    if (docsIndex !== -1 && parts[docsIndex + 1] === '2' && SUPPORTED.indexOf(parts[docsIndex + 2]) !== -1) {
      return parts[docsIndex + 2]
    }
    return 'en'
  }

  function maybeRedirect() {
    if (currentLang() !== 'en') return
    var saved = localStorage.getItem(STORAGE_KEY)
    var preferred = normalizeLang(saved || navigator.language || navigator.userLanguage)
    if (!preferred || preferred === 'en' || SUPPORTED.indexOf(preferred) === -1) return
    if (sessionStorage.getItem('docs-locale-checked')) return

    var translations = readTranslations()
    var target = translations[preferred]
    if (!target || target === window.location.pathname.replace(/\/+$/, '')) return

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
