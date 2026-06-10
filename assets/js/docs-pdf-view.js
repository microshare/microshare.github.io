;(function () {
  var params = new URLSearchParams(window.location.search)
  if (params.get('view') !== 'pdf') return

  var pdfView = document.getElementById('docs-pdf-view')
  var articleView = document.getElementById('docs-article-view')
  var embed = params.get('embed') === 'true' || params.get('embed') === '1'

  if (pdfView) {
    if (articleView) articleView.hidden = true
    pdfView.hidden = false
  } else if (articleView) {
    var notice = document.createElement('div')
    notice.className = 'alert alert-warning mt-3'
    notice.setAttribute('role', 'status')
    notice.textContent = 'No PDF is available for this page.'
    articleView.insertBefore(notice, articleView.firstChild)
  }

  if (!embed) return

  var chromeSelectors = [
    '.navbar',
    '#sidebar-wrapper',
    '#docs-aside',
    '.docs-aside',
  ]

  chromeSelectors.forEach(function (selector) {
    document.querySelectorAll(selector).forEach(function (node) {
      node.style.display = 'none'
    })
  })

  var pageWrapper = document.querySelector('.page-wrapper')
  if (pageWrapper) pageWrapper.style.paddingTop = '0'

  document.querySelectorAll('.docs-pdf-iframe-container').forEach(function (node) {
    node.style.height = '100vh'
  })
})()
