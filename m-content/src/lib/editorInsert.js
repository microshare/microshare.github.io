import { htmlToMarkdown, renderEditorMarkdown } from './contentBlocks'

let savedRange = null

export function saveEditorSelection(containerEl) {
  const sel = window.getSelection()
  if (!sel?.rangeCount || !containerEl) {
    savedRange = null
    return
  }
  const range = sel.getRangeAt(0)
  if (!containerEl.contains(range.commonAncestorContainer)) {
    savedRange = null
    return
  }
  savedRange = range.cloneRange()
}

function insertInTextarea(textarea, markdown, onChange) {
  const start = textarea.selectionStart ?? textarea.value.length
  const end = textarea.selectionEnd ?? start
  const value = textarea.value
  const needsGapBefore = start > 0 && value[start - 1] !== '\n'
  const needsGapAfter = end < value.length && value[end] !== '\n'
  const insert = `${needsGapBefore ? '\n\n' : ''}${markdown}${needsGapAfter ? '\n' : '\n'}`
  const next = `${value.slice(0, start)}${insert}${value.slice(end)}`
  onChange(next)
  requestAnimationFrame(() => {
    textarea.focus()
    const cursor = start + insert.length
    textarea.setSelectionRange(cursor, cursor)
  })
}

function insertInRendered(containerEl, markdown, onChange) {
  containerEl.focus()
  const sel = window.getSelection()
  if (savedRange) {
    sel.removeAllRanges()
    sel.addRange(savedRange)
    savedRange = null
  }

  if (!sel.rangeCount || !containerEl.contains(sel.anchorNode)) {
    onChange(`${htmlToMarkdown(containerEl.innerHTML).trimEnd()}\n\n${markdown}\n`)
    return
  }

  const range = sel.getRangeAt(0)
  range.deleteContents()

  const temp = document.createElement('div')
  temp.innerHTML = renderEditorMarkdown(markdown)
  const nodes = [...temp.childNodes]
  let lastNode = null
  for (const node of nodes) {
    lastNode = node
    range.insertNode(node)
    range.setStartAfter(node)
    range.collapse(true)
  }

  if (lastNode) {
    const nextRange = document.createRange()
    nextRange.setStartAfter(lastNode)
    nextRange.collapse(true)
    sel.removeAllRanges()
    sel.addRange(nextRange)
  }

  onChange(htmlToMarkdown(containerEl.innerHTML))
}

export function insertMarkdownAtCursor({ mode, renderedEl, textareaEl, markdown, currentMarkdown, onChange }) {
  const snippet = String(markdown || '').trim()
  if (!snippet) return

  if (mode === 'raw' && textareaEl) {
    insertInTextarea(textareaEl, snippet, onChange)
    return
  }

  if (mode === 'rendered' && renderedEl) {
    insertInRendered(renderedEl, snippet, onChange)
    return
  }

  onChange(`${String(currentMarkdown || '').trimEnd()}\n\n${snippet}\n`)
}
