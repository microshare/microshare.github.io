export function escapeTableCell(value) {
  return String(value ?? '').replace(/\|/g, '\\|').trim()
}

export function createEmptyTable(rows, cols, headerRow = true) {
  const safeRows = Math.max(1, Number(rows) || 1)
  const safeCols = Math.max(1, Number(cols) || 1)
  return Array.from({ length: safeRows }, (_, rowIndex) =>
    Array.from({ length: safeCols }, (_, colIndex) => (headerRow && rowIndex === 0 ? `Column ${colIndex + 1}` : '')),
  )
}

export function resizeTableCells(cells, rows, cols, headerRow = true) {
  const next = createEmptyTable(rows, cols, headerRow)
  for (let row = 0; row < next.length; row += 1) {
    for (let col = 0; col < next[row].length; col += 1) {
      next[row][col] = cells?.[row]?.[col] ?? next[row][col]
    }
  }
  return next
}

export function buildMarkdownTable(cells, { headerRow = true } = {}) {
  if (!cells?.length || !cells[0]?.length) return ''
  const rows = cells.map((row) => `| ${row.map(escapeTableCell).join(' | ')} |`)
  if (!headerRow) return rows.join('\n')
  const separator = `| ${cells[0].map(() => '---').join(' | ')} |`
  return [rows[0], separator, ...rows.slice(1)].join('\n')
}

function isTableRow(line) {
  return /^\s*\|(.+)\|\s*$/.test(String(line || ''))
}

function isSeparatorRow(line) {
  return /^\s*\|(?:\s*:?-+:?\s*\|)+\s*$/.test(String(line || ''))
}

function parseTableRow(line) {
  return String(line || '')
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim().replace(/\\\|/g, '|'))
}

export function findMarkdownTableBlocks(markdown) {
  const source = String(markdown || '')
  if (!source) return []
  const lines = source.split('\n')
  const lineStarts = []
  let offset = 0
  for (const line of lines) {
    lineStarts.push(offset)
    offset += line.length + 1
  }

  const blocks = []
  let index = 0
  while (index < lines.length) {
    if (!isTableRow(lines[index])) {
      index += 1
      continue
    }
    const startLine = index
    const tableLines = []
    while (index < lines.length && isTableRow(lines[index])) {
      tableLines.push(lines[index])
      index += 1
    }
    const headerRow = tableLines.length >= 2 && isSeparatorRow(tableLines[1])
    const start = lineStarts[startLine]
    const end = index < lines.length ? lineStarts[index] : source.length
    blocks.push({
      start,
      end,
      lines: tableLines,
      headerRow,
      raw: tableLines.join('\n'),
    })
  }
  return blocks
}

export function parseMarkdownTableCells(lines, headerRow = true) {
  const cells = []
  for (let index = 0; index < lines.length; index += 1) {
    if (headerRow && index === 1 && isSeparatorRow(lines[index])) continue
    cells.push(parseTableRow(lines[index]))
  }
  return cells
}

export function removeTableAt(markdown, tableIndex) {
  const blocks = findMarkdownTableBlocks(markdown)
  const block = blocks[Number(tableIndex)]
  if (!block) return markdown
  const before = markdown.slice(0, block.start).replace(/\n$/, '')
  const after = markdown.slice(block.end).replace(/^\n/, '')
  return [before, after].filter(Boolean).join('\n\n').trimEnd()
}

export function replaceTableAt(markdown, tableIndex, snippet) {
  const blocks = findMarkdownTableBlocks(markdown)
  const block = blocks[Number(tableIndex)]
  if (!block) return markdown
  return `${markdown.slice(0, block.start)}${String(snippet || '').trim()}${markdown.slice(block.end)}`
}

export function normalizeYoutubeEmbedUrl(input) {
  const raw = String(input || '').trim()
  if (!raw) return ''
  try {
    const url = new URL(raw)
    if (url.hostname.includes('youtu.be')) {
      const id = url.pathname.replace(/^\/+/, '').split('/')[0]
      return id ? `https://www.youtube.com/embed/${id}` : ''
    }
    if (url.hostname.includes('youtube.com') || url.hostname.includes('youtube-nocookie.com')) {
      if (url.pathname.startsWith('/embed/')) return raw
      const id = url.searchParams.get('v')
      if (id) return `https://www.youtube.com/embed/${id}`
      const shortsMatch = url.pathname.match(/^\/shorts\/([^/?]+)/)
      if (shortsMatch?.[1]) return `https://www.youtube.com/embed/${shortsMatch[1]}`
    }
  } catch {
    return ''
  }
  return raw
}

export function linkSnippet({ url, title, subtitle = 'Microshare Documentation', icon = 'link' }) {
  const attrs = {
    url: String(url || '').trim(),
    title: String(title || '').trim(),
    subtitle: String(subtitle || '').trim(),
    icon: String(icon || 'link').trim(),
  }
  return `{% include link.html ${serializeLiquidAttrs(attrs)} %}`
}

export function buildLinkMarkdown({ text, url, format = 'inline', subtitle, icon }) {
  const cleanUrl = String(url || '').trim()
  const label = String(text || cleanUrl).trim()
  if (format === 'card') return linkSnippet({ url: cleanUrl, title: label, subtitle, icon })
  return `[${label}](${cleanUrl})`
}

export function replaceInlineLinkAt(markdown, linkIndex, snippet) {
  const source = String(markdown || '')
  const regex = /\[([^\]]*)\]\(([^)]+)\)/g
  let index = 0
  let match
  while ((match = regex.exec(source))) {
    if (index === linkIndex) {
      return `${source.slice(0, match.index)}${snippet}${source.slice(match.index + match[0].length)}`
    }
    index += 1
  }
  return source
}

export function removeInlineLinkAt(markdown, linkIndex) {
  const source = String(markdown || '')
  const regex = /\[([^\]]*)\]\(([^)]+)\)/g
  let index = 0
  let match
  while ((match = regex.exec(source))) {
    if (index === linkIndex) {
      const before = source.slice(0, match.index).replace(/\s$/, '')
      const after = source.slice(match.index + match[0].length).replace(/^\s/, '')
      return [before, after].filter(Boolean).join(' ').trimEnd()
    }
    index += 1
  }
  return source
}

export function replaceLinkIncludeAt(markdown, linkIndex, snippet) {
  const source = String(markdown || '')
  const regex = /\{%\s*include\s+link\.html\s+[^%]*?%\}/g
  let index = 0
  let match
  while ((match = regex.exec(source))) {
    if (index === linkIndex) {
      return `${source.slice(0, match.index)}${snippet}${source.slice(match.index + match[0].length)}`
    }
    index += 1
  }
  return source
}

export function removeLinkIncludeAt(markdown, linkIndex) {
  const source = String(markdown || '')
  const regex = /\{%\s*include\s+link\.html\s+[^%]*?%\}/g
  let index = 0
  let match
  while ((match = regex.exec(source))) {
    if (index === linkIndex) {
      const before = source.slice(0, match.index).replace(/\n$/, '')
      const after = source.slice(match.index + match[0].length).replace(/^\n/, '')
      return [before, after].filter(Boolean).join('\n\n').trimEnd()
    }
    index += 1
  }
  return source
}

export function replaceLinkAt(markdown, target, payload) {
  const snippet = buildLinkMarkdown(payload)
  if (target.kind === 'card') return replaceLinkIncludeAt(markdown, target.index, snippet)
  return replaceInlineLinkAt(markdown, target.index, snippet)
}

export function removeLinkAt(markdown, target) {
  if (target.kind === 'card') return removeLinkIncludeAt(markdown, target.index)
  return removeInlineLinkAt(markdown, target.index)
}

export function youtubeSnippet({ url, description = '' }) {
  const embedUrl = normalizeYoutubeEmbedUrl(url)
  if (!embedUrl) return ''
  const attrs = {
    url: embedUrl,
    description: String(description || '').trim(),
  }
  return `{% include youtube_video.html ${serializeLiquidAttrs(attrs)} %}`
}

function serializeLiquidAttrs(attrs) {
  return Object.entries(attrs)
    .filter(([, value]) => value !== undefined && value !== null && value !== '')
    .map(([key, value]) => `${key}="${String(value).replace(/"/g, '&quot;')}"`)
    .join(' ')
}
