;(function () {
  var SESSION_KEY = 'microshare-docs-lang'
  var SUPPORTED = { fr: true, de: true, es: true }

  function readI18n() {
    var node = document.getElementById('not-found-i18n')
    if (!node) return null
    try {
      return JSON.parse(node.textContent || '{}')
    } catch (error) {
      return null
    }
  }

  function normalizeLang(value) {
    if (!value) return 'en'
    var lang = String(value).toLowerCase().split('-')[0]
    if (lang === 'en' || SUPPORTED[lang]) return lang
    return 'en'
  }

  function detectLocale() {
    var source = 'browser'

    try {
      var sessionChoice = sessionStorage.getItem(SESSION_KEY)
      if (sessionChoice) {
        source = 'session'
        return { locale: normalizeLang(sessionChoice), source: source }
      }
    } catch (error) {}

    var ref = document.referrer || ''
    var refMatch = ref.match(/\/docs\/2\/(fr|de|es)(?:\/|$)/)
    if (refMatch && SUPPORTED[refMatch[1]]) {
      source = 'referrer'
      return { locale: refMatch[1], source: source }
    }

    var pathMatch = window.location.pathname.match(/\/docs\/2\/(fr|de|es)(?:\/|$)/)
    if (pathMatch && SUPPORTED[pathMatch[1]]) {
      source = 'url'
      return { locale: pathMatch[1], source: source }
    }

    var browser = (navigator.language || '').slice(0, 2).toLowerCase()
    if (SUPPORTED[browser]) {
      source = 'browser'
      return { locale: browser, source: source }
    }

    return { locale: 'en', source: 'default' }
  }

  function homePath(locale) {
    return locale === 'en' ? '/docs/2/' : '/docs/2/' + locale + '/'
  }

  function applyLabels(locale, labels) {
    if (!labels) return
    if (labels.title) document.title = labels.title
    var heading = document.getElementById('not-found-heading')
    var message = document.getElementById('not-found-message')
    var image = document.getElementById('not-found-image')
    var logo = document.getElementById('not-found-logo')
    if (heading && labels.heading) heading.textContent = labels.heading
    if (message && labels.message) message.textContent = labels.message
    if (image && labels.image_alt_404) image.alt = labels.image_alt_404
    if (logo && labels.image_alt_logo) logo.alt = labels.image_alt_logo
  }

  var i18n = readI18n()
  var detected = detectLocale()
  var locale = detected.locale
  var labels = (i18n && i18n[locale]) || (i18n && i18n.en) || null
  applyLabels(locale, labels)

  try {
    sessionStorage.setItem(SESSION_KEY, locale)
  } catch (error) {}

  var target = homePath(locale)

  if (typeof console !== 'undefined' && console.info) {
    console.info('[Microshare i18n]', '404 page locale', {
      seen: {
        browser: navigator.language || navigator.userLanguage || null,
        languages: navigator.languages || [],
        path: window.location.pathname,
        referrer: document.referrer || null
      },
      used: locale,
      source: detected.source,
      redirectTo: target
    })
  }

  window.setTimeout(function () {
    window.location = target
  }, 2500)
})()
