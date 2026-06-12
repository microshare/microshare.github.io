;(function () {
  function readI18n() {
    var node = document.getElementById('not-found-i18n')
    if (!node) return null
    try {
      return JSON.parse(node.textContent || '{}')
    } catch (error) {
      return null
    }
  }

  function detectLocale() {
    var supported = { fr: true, de: true, es: true }
    var ref = document.referrer || ''
    var refMatch = ref.match(/\/docs\/2\/(fr|de|es)(?:\/|$)/)
    if (refMatch && supported[refMatch[1]]) return refMatch[1]

    var pathMatch = window.location.pathname.match(/\/docs\/2\/(fr|de|es)(?:\/|$)/)
    if (pathMatch && supported[pathMatch[1]]) return pathMatch[1]

    var browser = (navigator.language || '').slice(0, 2).toLowerCase()
    if (supported[browser]) return browser
    return 'en'
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
  var locale = detectLocale()
  var labels = (i18n && i18n[locale]) || (i18n && i18n.en) || null
  applyLabels(locale, labels)

  var target = homePath(locale)
  window.setTimeout(function () {
    window.location = target
  }, 2500)
})()
