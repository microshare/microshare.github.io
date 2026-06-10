import { marked } from 'marked'
import TurndownService from 'turndown'
import { gfm } from 'turndown-plugin-gfm'

marked.setOptions({
  gfm: true,
  breaks: false,
})

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
})

turndown.use(gfm)
turndown.addRule('productBadge', {
  filter: (node) => node.nodeName === 'SPAN' && node.classList?.contains('product-badge'),
  replacement: (_content, node) => {
    if (node.classList.contains('product-badge-pest')) return ' [pest]'
    if (node.classList.contains('product-badge-clean')) return ' [clean]'
    return ''
  },
})
turndown.addRule('lineBreaks', {
  filter: 'br',
  replacement: () => '<br>\n',
})
turndown.addRule('liquidComponent', {
  filter: (node) => node.nodeType === 1 && node.getAttribute?.('data-liquid'),
  replacement: (_content, node) => `\n\n${decodeLiquid(node.getAttribute('data-liquid'))}\n\n`,
})

const patterns = [
  {
    type: 'accordion',
    regex:
      /\{%\s*capture\s+title\s*%\}([\s\S]*?)\{%\s*endcapture\s*%\}\s*\{%\s*capture\s+content\s*%\}([\s\S]*?)\{%\s*endcapture\s*%\}\s*\{%\s*include\s+accordion\.html\s+([^%]*?)%\}/g,
    build(match) {
      const attrs = parseAttrs(match[3])
      return {
        type: 'accordion',
        title: trimCapture(match[1]),
        content: trimCapture(match[2]),
        key: attrs.key || makeKey(match[1]),
      }
    },
  },
  {
    type: 'highlight',
    regex: /\{%\s*highlight\s+([^%\s]+)\s*%\}\n?([\s\S]*?)\n?\{%\s*endhighlight\s*%\}/g,
    build(match) {
      return {
        type: 'code',
        language: match[1] || 'text',
        code: match[2] || '',
      }
    },
  },
  {
    type: 'image',
    regex: /\{%\s*include\s+image\.html\s+([^%]*?)%\}/g,
    build(match) {
      const attrs = parseAttrs(match[1])
      return {
        type: 'image',
        url: normalizeAssetUrl(attrs.url || ''),
        description: attrs.description || '',
        width: attrs.width || '',
        height: attrs.height || '',
      }
    },
  },
  {
    type: 'youtube',
    regex: /\{%\s*include\s+youtube_video\.html\s+([^%]*?)%\}/g,
    build(match) {
      const attrs = parseAttrs(match[1])
      return {
        type: 'youtube',
        url: attrs.url || '',
        description: attrs.description || '',
      }
    },
  },
  {
    type: 'link',
    regex: /\{%\s*include\s+link\.html\s+([^%]*?)%\}/g,
    build(match) {
      const attrs = parseAttrs(match[1])
      return {
        type: 'link',
        url: attrs.url || '',
        title: attrs.title || '',
        subtitle: attrs.subtitle || 'Microshare Documentation',
        icon: attrs.icon || 'link',
      }
    },
  },
]

export function parseContentBlocks(markdown) {
  const source = String(markdown || '')
  const blocks = []
  let cursor = 0

  while (cursor < source.length) {
    const next = findNextPattern(source, cursor)
    if (!next) {
      appendMarkdownBlock(blocks, source.slice(cursor))
      break
    }
    appendMarkdownBlock(blocks, source.slice(cursor, next.index))
    blocks.push(withId(next.pattern.build(next.match), blocks.length))
    cursor = next.end
  }

  return blocks.length ? blocks : [withId({ type: 'markdown', markdown: '' }, 0)]
}

export function serializeContentBlocks(blocks) {
  return blocks
    .map((block) => serializeBlock(block).trimEnd())
    .filter((value) => value.length > 0)
    .join('\n\n')
    .concat('\n')
}

export function renderMarkdown(markdown) {
  const withBadges = String(markdown || '')
    .replace(/\[pest\]/gi, '<span class="product-badge product-badge-pest">Pest</span>')
    .replace(/\[clean\]/gi, '<span class="product-badge product-badge-clean">Clean</span>')
  return marked.parse(withBadges)
}

export function renderEditorMarkdown(markdown) {
  return wrapEditorTables(wrapInlineLinks(renderMarkdown(protectLiquid(String(markdown || '')))))
}

function wrapEditorTables(html) {
  let tableIndex = 0
  return String(html || '').replace(/<table\b[^>]*>[\s\S]*?<\/table>/gi, (match) => {
    const index = tableIndex
    tableIndex += 1
    return `<div class="liquid-component liquid-table" data-table-index="${index}" contenteditable="false"><div class="liquid-table-actions"><button type="button" data-table-edit="true">Edit</button><button type="button" class="danger" data-table-remove="true">Remove</button></div><div class="liquid-table-content">${match}</div></div>`
  })
}

export function htmlToMarkdown(html) {
  return turndown.turndown(html || '').trim()
}

export function decodeEditorLiquid(value) {
  return decodeLiquid(value)
}

export function blockLabel(block) {
  if (block.type === 'markdown') return 'Text'
  if (block.type === 'image') return 'Image'
  if (block.type === 'code') return 'Code'
  if (block.type === 'accordion') return 'Accordion'
  if (block.type === 'youtube') return 'YouTube'
  if (block.type === 'link') return 'Link card'
  return 'Raw snippet'
}

export function blankBlock(type) {
  if (type === 'image') {
    return withId({ type, url: '', description: '', width: '', height: '' })
  }
  if (type === 'code') {
    return withId({ type, language: 'text', code: '' })
  }
  if (type === 'accordion') {
    return withId({ type, title: 'Question', content: 'Answer', key: 'question' })
  }
  if (type === 'youtube') {
    return withId({ type, url: '', description: '' })
  }
  if (type === 'raw') {
    return withId({ type, raw: '' })
  }
  return withId({ type: 'markdown', markdown: '' })
}

export function normalizeAssetUrl(url) {
  const normalized = String(url || '').replace(/\\/g, '/')
  if (normalized.startsWith('assets/')) return `/${normalized}`
  return normalized
}

function findNextPattern(source, cursor) {
  let winner = null
  for (const pattern of patterns) {
    pattern.regex.lastIndex = cursor
    const match = pattern.regex.exec(source)
    if (!match) continue
    const candidate = {
      pattern,
      match,
      index: match.index,
      end: pattern.regex.lastIndex,
    }
    if (!winner || candidate.index < winner.index) winner = candidate
  }
  return winner
}

function appendMarkdownBlock(blocks, markdown) {
  if (!markdown) return
  blocks.push(withId({ type: 'markdown', markdown }, blocks.length))
}

function serializeBlock(block) {
  if (block.type === 'markdown') return block.markdown || ''
  if (block.type === 'image') {
    const attrs = {
      url: normalizeAssetUrl(block.url),
      description: block.description || '',
      width: block.width || '',
      height: block.height || '',
    }
    return `{% include image.html ${serializeAttrs(attrs)} %}`
  }
  if (block.type === 'code') {
    return `{% highlight ${block.language || 'text'} %}\n${block.code || ''}\n{% endhighlight %}`
  }
  if (block.type === 'accordion') {
    return `{% capture title %}\n${block.title || ''}\n{% endcapture %}\n\n{% capture content %}\n${block.content || ''}\n{% endcapture %}\n\n{% include accordion.html title=title content=content key="${block.key || makeKey(block.title)}" %}`
  }
  if (block.type === 'youtube') {
    return `{% include youtube_video.html ${serializeAttrs({
      url: block.url || '',
      description: block.description || '',
    })} %}`
  }
  if (block.type === 'link') {
    return `{% include link.html ${serializeAttrs({
      url: block.url || '',
      title: block.title || '',
      subtitle: block.subtitle || 'Microshare Documentation',
      icon: block.icon || 'link',
    })} %}`
  }
  if (block.type === 'raw') return block.raw || ''
  return ''
}

function parseAttrs(input) {
  const attrs = {}
  const regex = /([A-Za-z_][\w-]*)=("([^"]*)"|'([^']*)'|([^\s%]+))/g
  let match
  while ((match = regex.exec(input || ''))) {
    attrs[match[1]] = match[3] ?? match[4] ?? match[5] ?? ''
  }
  return attrs
}

function wrapInlineLinks(html) {
  let linkIndex = 0
  return String(html || '').replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi, (match, attrs, inner) => {
    if (/\bliquid-component\b|\bliquid-link-card\b/.test(attrs)) return match
    const hrefMatch = attrs.match(/\bhref=["']([^"']*)["']/i)
    const url = hrefMatch?.[1] || ''
    const text = inner.replace(/<[^>]+>/g, '').trim() || url
    const currentIndex = linkIndex
    linkIndex += 1
    return `<span class="liquid-component liquid-inline-link" data-link-index="${currentIndex}" data-link-kind="inline" contenteditable="false"><span class="liquid-link-actions"><button type="button" data-link-edit="true">Edit</button><button type="button" class="danger" data-link-remove="true">Remove</button></span><a${attrs}>${inner}</a></span>`
  })
}

function protectLiquid(markdown) {
  let imageIndex = 0
  let linkIndex = 0
  let output = markdown
    .replace(
      /\{%\s*capture\s+title\s*%\}([\s\S]*?)\{%\s*endcapture\s*%\}\s*\{%\s*capture\s+content\s*%\}([\s\S]*?)\{%\s*endcapture\s*%\}\s*\{%\s*include\s+accordion\.html\s+([^%]*?)%\}/g,
      (raw, title, content) => {
        const label = trimCapture(title) || 'Accordion'
        const body = trimCapture(content)
        return `<details class="liquid-component liquid-accordion" data-liquid="${encodeLiquid(raw)}" contenteditable="false" open><summary>${escapeHtml(label)}</summary><div>${renderMarkdown(body)}</div></details>`
      },
    )
    .replace(/\{%\s*highlight\s+([^%\s]+)\s*%\}\n?([\s\S]*?)\n?\{%\s*endhighlight\s*%\}/g, (raw, language, code) => {
      return `<div class="liquid-component liquid-code" data-liquid="${encodeLiquid(raw)}" contenteditable="false"><div class="liquid-kicker">Code block: ${escapeHtml(language || 'text')}</div><pre><code>${escapeHtml(code || '')}</code></pre></div>`
    })
    .replace(/\{%\s*include\s+image\.html\s+([^%]*?)%\}/g, (raw, attrsText) => {
      const attrs = parseAttrs(attrsText)
      const url = normalizeAssetUrl(attrs.url || '')
      const description = attrs.description || attrs.url || 'Image'
      const index = imageIndex
      imageIndex += 1
      return `<figure class="liquid-component liquid-image" data-liquid="${encodeLiquid(raw)}" data-liquid-index="${index}" contenteditable="false"><div class="liquid-image-actions"><button type="button" data-image-edit="true">Edit</button><button type="button" class="danger" data-image-remove="true">Remove</button></div><img src="${escapeHtml(url)}" alt="${escapeHtml(description)}"><figcaption>${escapeHtml(description)}</figcaption></figure>`
    })
    .replace(/\{%\s*include\s+youtube_video\.html\s+([^%]*?)%\}/g, (raw, attrsText) => {
      const attrs = parseAttrs(attrsText)
      const url = attrs.url || ''
      const description = attrs.description || 'YouTube video'
      return `<div class="liquid-component liquid-youtube" data-liquid="${encodeLiquid(raw)}" contenteditable="false"><div class="liquid-kicker">YouTube video</div><div class="youtube-insert-frame"><iframe title="${escapeHtml(description)}" src="${escapeHtml(url)}" loading="lazy"></iframe></div>${description ? `<div class="liquid-caption">${escapeHtml(description)}</div>` : ''}</div>`
    })
    .replace(/\{%\s*include\s+link\.html\s+([^%]*?)%\}/g, (raw, attrsText) => {
      const attrs = parseAttrs(attrsText)
      const title = attrs.title || attrs.url || 'Link'
      const subtitle = attrs.subtitle || 'Microshare Documentation'
      const icon = attrs.icon || 'link'
      const index = linkIndex
      linkIndex += 1
      return `<div class="liquid-component liquid-link-card" data-liquid="${encodeLiquid(raw)}" data-link-index="${index}" data-link-kind="card" contenteditable="false"><div class="liquid-link-actions"><button type="button" data-link-edit="true">Edit</button><button type="button" class="danger" data-link-remove="true">Remove</button></div><div class="liquid-link-card-content"><span class="liquid-link-card-icon"><i class="far fa-${escapeHtml(icon)}"></i></span><span class="liquid-link-card-body"><strong>${escapeHtml(title)}</strong><small>${escapeHtml(subtitle)}</small></span></div></div>`
    })

  output = output.replace(/\{%\s*[^%]+%\}/g, (raw) => {
    return `<span class="liquid-chip" data-liquid="${encodeLiquid(raw)}" contenteditable="false">${escapeHtml(raw.replace(/\s+/g, ' ').trim())}</span>`
  })

  return output
}

function serializeAttrs(attrs) {
  return Object.entries(attrs)
    .filter(([, value]) => value !== undefined && value !== null && value !== '')
    .map(([key, value]) => `${key}="${String(value).replace(/"/g, '&quot;')}"`)
    .join(' ')
}

function encodeLiquid(value) {
  return btoa(unescape(encodeURIComponent(value || '')))
}

function decodeLiquid(value) {
  try {
    return decodeURIComponent(escape(atob(value || '')))
  } catch {
    return ''
  }
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function trimCapture(value) {
  return String(value || '').replace(/^\n+|\n+$/g, '')
}

function makeKey(value) {
  return (
    String(value || 'item')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '') || 'item'
  )
}

function withId(block, index = 0) {
  return {
    id: `${block.type}_${Date.now()}_${index}_${Math.random().toString(36).slice(2)}`,
    ...block,
  }
}
