;(function () {
  var params = new URLSearchParams(window.location.search)
  var view = params.get('view')
  if (view !== 'embed' && view !== 'pdf') return

  var root = document.documentElement
  root.classList.add('docs-view-' + view)

  if (view === 'embed') return

  var sourcePdfUrl = root.getAttribute('data-pdf-url')
  if (sourcePdfUrl) {
    window.location.replace(sourcePdfUrl)
    return
  }

  root.classList.add('docs-pdf-loading')

  whenReady(function () {
    renderArticlePdf().catch(showPdfError)
  })

  function whenReady(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback, { once: true })
      return
    }

    callback()
  }

  async function renderArticlePdf() {
    var article = document.querySelector('#docs-article-view .main-content')
      || document.querySelector('article.main-content')

    if (!article) {
      throw new Error('This page does not contain a documentation article.')
    }

    showPdfStatus('Preparing your document...')
    await loadPdfEngine()

    var exportRoot = createExportRoot(article)
    var imageLibrary = await loadImageLibrary(exportRoot)
    var imageCount = Array.from(imageLibrary.values()).filter(Boolean).length

    showPdfStatus('Building PDF...')

    var content = await convertChildren(exportRoot, {
      imageLibrary: imageLibrary,
      listDepth: 0,
    })
    content = keepHeadingsWithFollowingImage(content)

    if (!content.length) {
      throw new Error('The article does not contain exportable content.')
    }

    var title = root.getAttribute('data-pdf-title') || document.title || 'Document'
    var documentDefinition = {
      pageSize: 'A4',
      pageMargins: [34, 32, 34, 38],
      info: {
        title: title,
        author: 'Microshare',
        subject: 'Microshare documentation',
      },
      defaultStyle: {
        font: 'Roboto',
        fontSize: 10,
        color: '#263238',
        lineHeight: 1.28,
      },
      styles: {
        h1: {
          fontSize: 25,
          bold: true,
          color: '#143f52',
          margin: [0, 0, 0, 8],
        },
        h2: {
          fontSize: 18,
          bold: true,
          color: '#143f52',
          margin: [0, 14, 0, 6],
        },
        h3: {
          fontSize: 15,
          bold: true,
          color: '#215b7a',
          margin: [0, 12, 0, 5],
        },
        h4: {
          fontSize: 13,
          bold: true,
          color: '#215b7a',
          margin: [0, 10, 0, 4],
        },
        h5: {
          fontSize: 11,
          bold: true,
          color: '#215b7a',
          margin: [0, 8, 0, 4],
        },
        h6: {
          fontSize: 10,
          bold: true,
          color: '#5d727c',
          margin: [0, 6, 0, 4],
        },
        paragraph: {
          margin: [0, 0, 0, 7],
        },
        codeBlock: {
          fontSize: 8,
          color: '#173848',
          lineHeight: 1.15,
        },
        quote: {
          italics: true,
          color: '#4c626d',
        },
        tableHeader: {
          bold: true,
          color: '#ffffff',
          fillColor: '#215b7a',
        },
        tableCell: {
          fontSize: 7.5,
          lineHeight: 1.1,
        },
      },
      content: content,
      pageBreakBefore: function (currentNode, nodeContainer) {
        var followingNodes = nodeContainer.getFollowingNodesOnPage()
        return (
          currentNode.headlineLevel
          && !followingNodes.some(function (node) {
            return !node.canvas
          })
        )
      },
      footer: function (currentPage, pageCount) {
        return {
          text: currentPage + ' / ' + pageCount,
          alignment: 'center',
          color: '#87969d',
          fontSize: 8,
          margin: [0, 10, 0, 0],
        }
      },
    }

    var pdfDocument = window.pdfMake.createPdf(documentDefinition)
    var blob = await pdfDocument.getBlob()
    showPdfViewer(blob, buildFilename(title), {
      contentNodeCount: content.length,
      imageCount: imageCount,
      imageTotal: imageLibrary.size,
    })
  }

  async function loadPdfEngine() {
    if (window.pdfMake && typeof window.pdfMake.createPdf === 'function') return

    var libraryUrl = root.getAttribute('data-pdf-library-url')
    var fontsUrl = root.getAttribute('data-pdf-fonts-url')

    if (!libraryUrl || !fontsUrl) {
      throw new Error('The PDF renderer is not configured.')
    }

    await loadScript(libraryUrl, 'data-docs-pdf-library')
    await loadScript(fontsUrl, 'data-docs-pdf-fonts')

    if (!window.pdfMake || typeof window.pdfMake.createPdf !== 'function') {
      throw new Error('The PDF renderer did not start correctly.')
    }
  }

  function loadScript(url, attribute) {
    return new Promise(function (resolve, reject) {
      var existing = document.querySelector('script[' + attribute + ']')
      if (existing) {
        if (existing.getAttribute('data-loaded') === 'true') {
          resolve()
        } else {
          existing.addEventListener('load', resolve, { once: true })
          existing.addEventListener('error', reject, { once: true })
        }
        return
      }

      var script = document.createElement('script')
      script.src = url
      script.async = true
      script.setAttribute(attribute, '')
      script.onload = function () {
        script.setAttribute('data-loaded', 'true')
        resolve()
      }
      script.onerror = function () {
        reject(new Error('A required PDF component could not be loaded.'))
      }
      document.head.appendChild(script)
    })
  }

  function createExportRoot(article) {
    var exportRoot = article.cloneNode(true)

    removeAll(exportRoot, [
      '.docs-content-footer',
      '.accordion-control',
      'script',
      'style',
    ])

    Array.prototype.forEach.call(exportRoot.querySelectorAll('.collapse'), function (node) {
      node.classList.add('show')
    })

    Array.prototype.forEach.call(exportRoot.querySelectorAll('details'), function (node) {
      node.open = true
    })

    return exportRoot
  }

  function removeAll(container, selectors) {
    selectors.forEach(function (selector) {
      Array.prototype.forEach.call(container.querySelectorAll(selector), function (node) {
        node.remove()
      })
    })
  }

  async function loadImageLibrary(container) {
    var images = Array.prototype.slice.call(container.querySelectorAll('img'))
    var library = new Map()

    await Promise.all(images.map(async function (image) {
      var source = image.currentSrc || image.getAttribute('src')
      if (!source) return

      var absoluteUrl = new URL(source.replace(/\\/g, '/'), window.location.href).href
      if (library.has(absoluteUrl)) return

      try {
        library.set(absoluteUrl, await imageUrlToDataUrl(absoluteUrl))
      } catch (error) {
        library.set(absoluteUrl, null)
      }
    }))

    return library
  }

  async function imageUrlToDataUrl(url) {
    var response = await fetch(url, {
      credentials: new URL(url).origin === window.location.origin ? 'same-origin' : 'omit',
      mode: 'cors',
    })

    if (!response.ok) {
      throw new Error('Image request failed with status ' + response.status)
    }

    var blob = await response.blob()
    if (blob.type !== 'image/png' && blob.type !== 'image/jpeg') {
      throw new Error('Unsupported image format: ' + blob.type)
    }

    var dataUrl = await new Promise(function (resolve, reject) {
      var reader = new FileReader()
      reader.onload = function () {
        resolve(reader.result)
      }
      reader.onerror = reject
      reader.readAsDataURL(blob)
    })

    var dimensions = await readImageDimensions(dataUrl)
    return {
      dataUrl: dataUrl,
      height: dimensions.height,
      width: dimensions.width,
    }
  }

  function readImageDimensions(dataUrl) {
    return new Promise(function (resolve, reject) {
      var image = new Image()
      image.onload = function () {
        resolve({
          height: image.naturalHeight || image.height || 1,
          width: image.naturalWidth || image.width || 1,
        })
      }
      image.onerror = function () {
        reject(new Error('The image dimensions could not be read.'))
      }
      image.src = dataUrl
    })
  }

  async function convertChildren(container, context) {
    var output = []

    for (var index = 0; index < container.childNodes.length; index += 1) {
      var converted = await convertNode(container.childNodes[index], context)
      appendConverted(output, converted)
    }

    return output
  }

  async function convertNode(node, context) {
    if (node.nodeType === Node.TEXT_NODE) {
      var text = normalizeBlockText(node.nodeValue)
      return text ? { text: text, style: 'paragraph' } : null
    }

    if (node.nodeType !== Node.ELEMENT_NODE) return null

    var tag = node.tagName.toLowerCase()
    if (tag === 'script' || tag === 'style' || tag === 'noscript') return null

    if (/^h[1-6]$/.test(tag)) {
      return {
        text: inlineContent(node),
        style: tag,
        headlineLevel: Number(tag.slice(1)),
      }
    }

    if (tag === 'p') return convertParagraph(node, context)
    if (tag === 'br') return null
    if (tag === 'hr') return horizontalRule()
    if (tag === 'img') return convertImage(node, context)
    if (tag === 'pre') return convertCodeBlock(node)
    if (tag === 'blockquote') return convertBlockquote(node)
    if (tag === 'ul' || tag === 'ol') return convertList(node, context)
    if (tag === 'table') return convertTable(node)
    if (tag === 'svg') return convertSvg(node)
    if (tag === 'iframe' || tag === 'video' || tag === 'audio') {
      return interactiveContentNotice()
    }
    if (tag === 'details') return convertDetails(node, context)
    if (node.classList.contains('card')) return convertCard(node, context)

    var children = await convertChildren(node, context)
    if (!children.length) {
      var fallbackText = normalizeBlockText(node.textContent)
      return fallbackText ? { text: fallbackText, style: 'paragraph' } : null
    }

    return children
  }

  async function convertParagraph(node, context) {
    var significantChildren = Array.prototype.filter.call(node.childNodes, function (child) {
      if (child.nodeType === Node.TEXT_NODE) {
        return normalizeBlockText(child.nodeValue)
      }

      return !(
        child.nodeType === Node.ELEMENT_NODE
        && child.tagName.toLowerCase() === 'br'
      )
    })

    if (
      significantChildren.length === 1
      && significantChildren[0].nodeType === Node.ELEMENT_NODE
      && significantChildren[0].tagName.toLowerCase() === 'img'
    ) {
      return convertImage(significantChildren[0], context)
    }

    var text = inlineContent(node)
    if (!inlineHasText(text)) return null

    return {
      text: text,
      style: 'paragraph',
    }
  }

  function inlineContent(container, inheritedStyle) {
    var output = []
    var style = inheritedStyle || {}

    Array.prototype.forEach.call(container.childNodes, function (node) {
      if (node.nodeType === Node.TEXT_NODE) {
        var text = cleanSourceText(node.nodeValue).replace(/\s+/g, ' ')
        if (text) output.push(applyInlineStyle({ text: text }, style))
        return
      }

      if (node.nodeType !== Node.ELEMENT_NODE) return

      var tag = node.tagName.toLowerCase()
      if (tag === 'br') {
        output.push({ text: '\n' })
        return
      }

      if (tag === 'img' || tag === 'svg') {
        var alt = node.getAttribute('alt')
        if (alt) output.push(applyInlineStyle({ text: '[' + alt + ']' }, style))
        return
      }

      var nextStyle = Object.assign({}, style)
      if (tag === 'strong' || tag === 'b') nextStyle.bold = true
      if (tag === 'em' || tag === 'i') nextStyle.italics = true
      if (tag === 'code') {
        nextStyle.fontSize = 8.5
        nextStyle.color = '#8a294f'
        nextStyle.background = '#f3f5f6'
      }
      if (tag === 'a') {
        nextStyle.link = absoluteHref(node.getAttribute('href'))
        nextStyle.color = '#07678a'
        nextStyle.decoration = 'underline'
      }

      output.push.apply(output, inlineContent(node, nextStyle))
    })

    trimInlineWhitespace(output)
    return output
  }

  function applyInlineStyle(fragment, style) {
    return Object.assign(fragment, style)
  }

  function trimInlineWhitespace(fragments) {
    if (!fragments.length) return

    fragments[0].text = fragments[0].text.replace(/^\s+/, '')
    fragments[fragments.length - 1].text = fragments[fragments.length - 1].text.replace(/\s+$/, '')

    for (var index = fragments.length - 1; index >= 0; index -= 1) {
      if (!fragments[index].text) fragments.splice(index, 1)
    }
  }

  function inlineHasText(fragments) {
    return fragments.some(function (fragment) {
      return fragment.text && fragment.text.trim()
    })
  }

  function absoluteHref(href) {
    if (!href || href === '#') return undefined

    try {
      return new URL(href, window.location.href).href
    } catch (error) {
      return href
    }
  }

  function normalizeBlockText(text) {
    return cleanSourceText(text).replace(/\s+/g, ' ').trim()
  }

  function cleanSourceText(text) {
    return String(text || '').replace(/EditRemove/g, '')
  }

  function horizontalRule() {
    return {
      canvas: [
        {
          type: 'line',
          x1: 0,
          y1: 0,
          x2: 527,
          y2: 0,
          lineWidth: 0.7,
          lineColor: '#d5dde1',
        },
      ],
      margin: [0, 5, 0, 9],
    }
  }

  function convertImage(image, context) {
    var source = image.currentSrc || image.getAttribute('src')
    if (!source) return null

    var absoluteUrl = new URL(source.replace(/\\/g, '/'), window.location.href).href
    var imageData = context.imageLibrary.get(absoluteUrl)

    if (!imageData) {
      return {
        text: image.getAttribute('alt')
          ? '[Image: ' + image.getAttribute('alt') + ']'
          : '[Image unavailable in PDF]',
        italics: true,
        color: '#73858e',
        margin: [0, 4, 0, 8],
      }
    }

    var maximumWidth = 527
    var maximumHeight = 500
    var ratio = Math.min(
      1,
      maximumWidth / imageData.width,
      maximumHeight / imageData.height
    )

    return {
      image: imageData.dataUrl,
      width: Math.max(1, imageData.width * ratio),
      height: Math.max(1, imageData.height * ratio),
      alignment: 'center',
      margin: [0, 6, 0, 10],
    }
  }

  function convertCodeBlock(node) {
    var code = node.textContent.replace(/^\n+|\n+$/g, '')
    return {
      table: {
        widths: ['*'],
        body: [
          [
            {
              text: code,
              style: 'codeBlock',
              fillColor: '#f3f6f7',
              margin: [6, 5, 6, 5],
            },
          ],
        ],
      },
      layout: {
        hLineColor: function () { return '#d5dde1' },
        vLineColor: function () { return '#d5dde1' },
        hLineWidth: function () { return 0.6 },
        vLineWidth: function () { return 0.6 },
        paddingLeft: function () { return 0 },
        paddingRight: function () { return 0 },
        paddingTop: function () { return 0 },
        paddingBottom: function () { return 0 },
      },
      margin: [0, 3, 0, 9],
    }
  }

  function convertBlockquote(node) {
    return {
      table: {
        widths: [4, '*'],
        body: [
          [
            { text: '', fillColor: '#2d89a7' },
            {
              text: inlineContent(node),
              style: 'quote',
              fillColor: '#f5f8f9',
              margin: [8, 5, 8, 5],
            },
          ],
        ],
      },
      layout: 'noBorders',
      margin: [0, 3, 0, 9],
    }
  }

  async function convertList(node, context) {
    var items = []
    var listItems = Array.prototype.filter.call(node.children, function (child) {
      return child.tagName && child.tagName.toLowerCase() === 'li'
    })

    for (var index = 0; index < listItems.length; index += 1) {
      var listItem = listItems[index]
      var nestedLists = Array.prototype.filter.call(listItem.children, function (child) {
        var tag = child.tagName.toLowerCase()
        return tag === 'ul' || tag === 'ol'
      })

      var clone = listItem.cloneNode(true)
      Array.prototype.forEach.call(clone.querySelectorAll('ul, ol'), function (nested) {
        nested.remove()
      })

      var itemStack = []
      var itemText = inlineContent(clone)
      if (inlineHasText(itemText)) itemStack.push({ text: itemText })

      for (var nestedIndex = 0; nestedIndex < nestedLists.length; nestedIndex += 1) {
        var nestedList = await convertList(nestedLists[nestedIndex], {
          imageLibrary: context.imageLibrary,
          listDepth: context.listDepth + 1,
        })
        if (nestedList) itemStack.push(nestedList)
      }

      if (itemStack.length === 1) {
        items.push(itemStack[0])
      } else if (itemStack.length) {
        items.push({ stack: itemStack })
      }
    }

    if (!items.length) return null

    var definition = {
      margin: [context.listDepth * 7, 1, 0, 8],
      markerColor: '#215b7a',
    }
    definition[node.tagName.toLowerCase()] = items
    return definition
  }

  function convertTable(table) {
    var rows = Array.prototype.slice.call(table.querySelectorAll('tr'))
    if (!rows.length) return null

    var body = rows.map(function (row, rowIndex) {
      return Array.prototype.slice.call(row.children).map(function (cell) {
        var content = inlineContent(cell)
        return {
          text: inlineHasText(content) ? content : ' ',
          style: rowIndex === 0 ? ['tableCell', 'tableHeader'] : 'tableCell',
          fillColor: rowIndex === 0
            ? '#215b7a'
            : rowIndex % 2 === 0 ? '#f4f7f8' : '#ffffff',
          margin: [3, 3, 3, 3],
        }
      })
    })

    var columnCount = body.reduce(function (maximum, row) {
      return Math.max(maximum, row.length)
    }, 0)

    body.forEach(function (row) {
      while (row.length < columnCount) {
        row.push({ text: ' ', style: 'tableCell' })
      }
    })

    return {
      table: {
        headerRows: 1,
        widths: new Array(columnCount).fill('*'),
        body: body,
      },
      layout: {
        hLineColor: function () { return '#c9d4d9' },
        vLineColor: function () { return '#c9d4d9' },
        hLineWidth: function () { return 0.5 },
        vLineWidth: function () { return 0.5 },
        paddingLeft: function () { return 0 },
        paddingRight: function () { return 0 },
        paddingTop: function () { return 0 },
        paddingBottom: function () { return 0 },
      },
      margin: [0, 4, 0, 10],
    }
  }

  function convertSvg(svg) {
    try {
      return {
        svg: svg.outerHTML,
        fit: [527, 360],
        alignment: 'center',
        margin: [0, 5, 0, 9],
      }
    } catch (error) {
      return null
    }
  }

  async function convertDetails(details, context) {
    var summary = details.querySelector(':scope > summary')
    var output = []

    if (summary) {
      output.push({
        text: inlineContent(summary),
        bold: true,
        color: '#215b7a',
        margin: [0, 5, 0, 3],
      })
    }

    for (var index = 0; index < details.childNodes.length; index += 1) {
      var child = details.childNodes[index]
      if (child === summary) continue
      appendConverted(output, await convertNode(child, context))
    }

    return output
  }

  async function convertCard(card, context) {
    var header = card.querySelector(':scope > .card-header')
    var body = card.querySelector(':scope > .collapse .card-body, :scope > .card-body')
    var stack = []

    if (header) {
      stack.push({
        text: inlineContent(header),
        bold: true,
        color: '#215b7a',
        fillColor: '#eef4f6',
        margin: [7, 6, 7, 6],
      })
    }

    if (body) {
      var bodyContent = await convertChildren(body, context)
      if (bodyContent.length) {
        stack.push({
          stack: bodyContent,
          margin: [7, 6, 7, 2],
        })
      }
    }

    if (!stack.length) return convertChildren(card, context)

    return {
      table: {
        widths: ['*'],
        body: stack.map(function (item) { return [item] }),
      },
      layout: {
        hLineColor: function () { return '#ccd8dd' },
        vLineColor: function () { return '#ccd8dd' },
        hLineWidth: function () { return 0.6 },
        vLineWidth: function () { return 0.6 },
        paddingLeft: function () { return 0 },
        paddingRight: function () { return 0 },
        paddingTop: function () { return 0 },
        paddingBottom: function () { return 0 },
      },
      margin: [0, 4, 0, 9],
    }
  }

  function interactiveContentNotice() {
    return {
      text: [
        'Interactive content is available in the ',
        {
          text: 'online article',
          link: buildArticleUrl(),
          color: '#07678a',
          decoration: 'underline',
        },
        '.',
      ],
      italics: true,
      color: '#607681',
      margin: [0, 5, 0, 9],
    }
  }

  function appendConverted(output, converted) {
    if (!converted) return

    if (Array.isArray(converted)) {
      converted.forEach(function (item) {
        appendConverted(output, item)
      })
      return
    }

    output.push(converted)
  }

  function keepHeadingsWithFollowingImage(content) {
    var output = []

    for (var index = 0; index < content.length; index += 1) {
      var item = content[index]
      var imageIndex = index + 1

      if (item.headlineLevel) {
        while (content[imageIndex] && content[imageIndex].canvas) {
          imageIndex += 1
        }

        if (content[imageIndex] && content[imageIndex].image) {
          output.push({
            stack: content.slice(index, imageIndex + 1),
            unbreakable: true,
          })
          index = imageIndex
          continue
        }
      }

      output.push(item)
    }

    return output
  }

  function buildFilename(title) {
    var slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')

    return (slug || 'document') + '.pdf'
  }

  function buildArticleUrl() {
    var url = new URL(window.location.href)
    url.searchParams.delete('view')
    url.searchParams.delete('embed')
    return url.toString()
  }

  function getShell() {
    var shell = document.getElementById('docs-pdf-shell')
    if (shell) return shell

    shell = document.createElement('main')
    shell.id = 'docs-pdf-shell'
    shell.className = 'docs-pdf-shell'
    shell.setAttribute('aria-live', 'polite')
    document.body.appendChild(shell)
    return shell
  }

  function showPdfStatus(message) {
    var shell = getShell()
    shell.replaceChildren()

    var panel = document.createElement('div')
    panel.className = 'docs-pdf-status'

    var spinner = document.createElement('span')
    spinner.className = 'docs-pdf-spinner'
    spinner.setAttribute('aria-hidden', 'true')

    var text = document.createElement('p')
    text.textContent = message

    panel.appendChild(spinner)
    panel.appendChild(text)
    shell.appendChild(panel)
  }

  function showPdfViewer(blob, filename, metrics) {
    var shell = getShell()
    var blobUrl = URL.createObjectURL(blob)
    shell.replaceChildren()
    shell.classList.add('docs-pdf-shell-ready')
    shell.setAttribute('data-pdf-bytes', String(blob.size))
    shell.setAttribute('data-pdf-type', blob.type || 'application/pdf')
    shell.setAttribute('data-pdf-filename', filename)
    shell.setAttribute('data-pdf-content-nodes', String(metrics.contentNodeCount))
    shell.setAttribute('data-pdf-images', String(metrics.imageCount))
    shell.setAttribute('data-pdf-image-total', String(metrics.imageTotal))

    if (params.get('capture') === '1') {
      var reader = new FileReader()
      reader.onload = function () {
        shell.setAttribute('data-pdf-capture', String(reader.result).split(',')[1])
      }
      reader.readAsDataURL(blob)
    }

    var viewer = document.createElement('iframe')
    viewer.className = 'docs-pdf-frame'
    viewer.src = blobUrl + '#zoom=page-width&view=FitH'
    viewer.title = (root.getAttribute('data-pdf-title') || 'Document') + ' PDF'

    shell.appendChild(viewer)
    root.classList.remove('docs-pdf-loading')

    window.addEventListener('pagehide', function () {
      URL.revokeObjectURL(blobUrl)
    }, { once: true })
  }

  function showPdfError(error) {
    var shell = getShell()
    shell.replaceChildren()
    shell.classList.add('docs-pdf-shell-error')

    var panel = document.createElement('div')
    panel.className = 'docs-pdf-error'

    var heading = document.createElement('h1')
    heading.textContent = 'The PDF could not be created'

    var message = document.createElement('p')
    message.textContent = error && error.message
      ? error.message
      : 'An unexpected rendering error occurred.'

    var actions = document.createElement('div')
    actions.className = 'docs-pdf-error-actions'

    var retry = document.createElement('button')
    retry.type = 'button'
    retry.textContent = 'Try again'
    retry.addEventListener('click', function () {
      window.location.reload()
    })

    var articleLink = document.createElement('a')
    articleLink.href = buildArticleUrl()
    articleLink.textContent = 'View article'

    actions.appendChild(retry)
    actions.appendChild(articleLink)
    panel.appendChild(heading)
    panel.appendChild(message)
    panel.appendChild(actions)
    shell.appendChild(panel)

    root.classList.remove('docs-pdf-loading')
    console.error('PDF rendering failed:', error)
  }
})()
