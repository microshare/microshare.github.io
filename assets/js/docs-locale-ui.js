;(function () {
  function readLabels() {
    var node = document.getElementById('docs-locale-labels')
    if (!node) return null
    try {
      return JSON.parse(node.textContent || '{}')
    } catch (error) {
      return null
    }
  }

  function uiLang() {
    var fromDom = document.documentElement.getAttribute('data-docs-ui-lang')
    if (fromDom) return fromDom
    try {
      return sessionStorage.getItem('microshare-docs-ui-lang')
    } catch (error) {
      return null
    }
  }

  function labelFor(labels, key, fallback) {
    if (!labels || !key) return fallback
    var entry = labels[key]
    if (entry && entry.title) return entry.title
    return fallback
  }

  function prefixDocsPath(path, lang) {
    if (!path || !lang || lang === 'en') return path
    if (path.indexOf('/docs/2/' + lang + '/') === 0) return path
  if (path.indexOf('/docs/2/') !== 0) return path
    return path.replace('/docs/2/', '/docs/2/' + lang + '/')
  }

  function applyMenuLabels() {
    var lang = uiLang()
    if (!lang || lang === 'en') return

    var locales = readLabels()
    var localeLabels = locales && locales[lang] && locales[lang].labels
    if (!localeLabels) return

    document.querySelectorAll('[data-docs-menu-key]').forEach(function (node) {
      var key = node.getAttribute('data-docs-menu-key')
      var fallback = node.getAttribute('data-docs-menu-default') || node.textContent
      var translated = labelFor(localeLabels, key, fallback)
      if (translated && translated !== node.textContent) node.textContent = translated
    })

    document.querySelectorAll('.sidebar-menu a[href*="/docs/2/"]').forEach(function (link) {
      link.setAttribute('href', prefixDocsPath(link.getAttribute('href'), lang))
    })

    var ui = locales && locales[lang] && locales[lang].ui
    if (ui && ui.search_placeholder) {
      var searchInput = document.getElementById('search')
      if (searchInput) searchInput.setAttribute('placeholder', ui.search_placeholder)
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyMenuLabels)
  } else {
    applyMenuLabels()
  }
})()
