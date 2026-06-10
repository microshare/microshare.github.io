import Anthropic from '@anthropic-ai/sdk'
import { parseContentBlocks, serializeContentBlocks } from '../../src/lib/contentBlocks.js'
import { getLanguage } from '../../shared/languages.js'
import { buildLocalePath, filePathToUrl } from './locale.js'

const TRANSLATABLE_LAYOUT_KEYS = new Set(['title', 'description'])

function getClient() {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) throw new Error('ANTHROPIC_API_KEY is not set. Add it to m-content/.env')
  return new Anthropic({ apiKey })
}

function buildTranslationPrompt(targetLang, segments) {
  const lang = getLanguage(targetLang)
  return `You are translating Microshare technical documentation from English to ${lang.label} (${lang.code}).

Rules:
- Translate natural language only. Preserve all Liquid/Jekyll syntax, code, URLs, API paths, JSON keys, and product names (Microshare™, React-M) unchanged.
- Keep [clean] and [pest] badges exactly as-is.
- Keep markdown structure (headings, lists, links). Translate link text but not URLs.
- Return valid JSON only: { "segments": [ { "id": "...", "text": "..." }, ... ] }
- One output entry per input segment id, same order.

Segments to translate:
${JSON.stringify(segments, null, 2)}`
}

async function translateSegments(segments, targetLang) {
  if (!segments.length) return {}
  const client = getClient()
  const response = await client.messages.create({
    model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-20250514',
    max_tokens: 8192,
    messages: [
      {
        role: 'user',
        content: buildTranslationPrompt(targetLang, segments),
      },
    ],
  })

  const text = response.content
    .filter((block) => block.type === 'text')
    .map((block) => block.text)
    .join('\n')
  const jsonMatch = text.match(/\{[\s\S]*\}/)
  if (!jsonMatch) throw new Error('Translation model did not return JSON')
  const parsed = JSON.parse(jsonMatch[0])
  const output = {}
  for (const item of parsed.segments || []) {
    if (item?.id) output[item.id] = item.text ?? ''
  }
  return output
}

function collectSegments(sourcePage) {
  const segments = []

  function add(id, text) {
    const value = String(text || '').trim()
    if (!value) return
    segments.push({ id, text: value })
  }

  add('fm_title', sourcePage.frontmatter?.title || sourcePage.title)
  add('fm_desc', sourcePage.frontmatter?.description || sourcePage.description)

  const blocks = parseContentBlocks(sourcePage.body || '')
  blocks.forEach((block, blockIndex) => {
    if (block.type === 'markdown') {
      add(`block_${blockIndex}_md`, block.markdown)
    } else if (block.type === 'accordion') {
      add(`block_${blockIndex}_acc_title`, block.title)
      add(`block_${blockIndex}_acc_content`, block.content)
    } else if (block.type === 'image') {
      add(`block_${blockIndex}_img_desc`, block.description)
    } else if (block.type === 'youtube') {
      add(`block_${blockIndex}_yt_desc`, block.description)
    }
  })

  return { segments, blocks }
}

function applyTranslations(blocks, translations) {
  return blocks.map((block, blockIndex) => {
    if (block.type === 'markdown') {
      return { ...block, markdown: translations[`block_${blockIndex}_md`] ?? block.markdown }
    }
    if (block.type === 'accordion') {
      return {
        ...block,
        title: translations[`block_${blockIndex}_acc_title`] ?? block.title,
        content: translations[`block_${blockIndex}_acc_content`] ?? block.content,
      }
    }
    if (block.type === 'image') {
      return { ...block, description: translations[`block_${blockIndex}_img_desc`] ?? block.description }
    }
    if (block.type === 'youtube') {
      return { ...block, description: translations[`block_${blockIndex}_yt_desc`] ?? block.description }
    }
    return block
  })
}

export async function translatePage(sourcePage, targetLang) {
  const { segments, blocks } = collectSegments(sourcePage)
  const translated = await translateSegments(segments, targetLang)

  const targetPath = buildLocalePath(sourcePage.path, targetLang)
  const frontmatter = {
    ...sourcePage.frontmatter,
    title: translated.fm_title ?? sourcePage.frontmatter?.title ?? sourcePage.title,
    description: translated.fm_desc ?? sourcePage.frontmatter?.description ?? '',
    lang: targetLang,
    translation_of: sourcePage.path,
  }

  delete frontmatter.translations

  const body = serializeContentBlocks(applyTranslations(blocks, translated))

  return {
    path: targetPath,
    url: filePathToUrl(targetPath),
    frontmatter,
    body,
    sourcePath: sourcePage.path,
    targetLang,
  }
}
