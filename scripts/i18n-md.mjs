#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import Anthropic from '@anthropic-ai/sdk'
import matter from 'gray-matter'

const SUPPORTED_LOCALES = ['fr', 'de', 'es']
const LANGUAGE_NAMES = {
  fr: 'French',
  de: 'German',
  es: 'Spanish',
}

const DEFAULT_MODEL = 'claude-sonnet-4-20250514'
const DOCS_PREFIX = 'docs/2/'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(__dirname, '..')

function usage() {
  console.error(`Usage: ANTHROPIC_API_KEY=... node scripts/i18n-md.mjs <source.md> <lang> [options]

Arguments:
  source.md   English source page under docs/2/ (not under docs/2/fr|de|es/)
  lang        Target locale: ${SUPPORTED_LOCALES.join(', ')}

Options:
  --model=<id>   Anthropic model (default: ${DEFAULT_MODEL})
  --dry-run      Print translated output without writing a file
  --force        Overwrite an existing translated file
  --help         Show this help

Example:
  ANTHROPIC_API_KEY=sk-ant-... node scripts/i18n-md.mjs docs/2/general/welcome.md fr
`)
}

function parseArgs(argv) {
  const positional = []
  const options = {
    model: DEFAULT_MODEL,
    dryRun: false,
    force: false,
  }

  for (const arg of argv) {
    if (arg === '--help' || arg === '-h') {
      usage()
      process.exit(0)
    }
    if (arg === '--dry-run') {
      options.dryRun = true
      continue
    }
    if (arg === '--force') {
      options.force = true
      continue
    }
    if (arg.startsWith('--model=')) {
      options.model = arg.slice('--model='.length)
      continue
    }
    positional.push(arg)
  }

  if (positional.length !== 2) {
    usage()
    process.exit(1)
  }

  return { sourceArg: positional[0], lang: positional[1].toLowerCase(), options }
}

function resolveSourcePath(sourceArg) {
  const absolute = path.isAbsolute(sourceArg)
    ? sourceArg
    : path.resolve(REPO_ROOT, sourceArg)

  const relative = path.relative(REPO_ROOT, absolute).split(path.sep).join('/')
  if (!relative.startsWith(DOCS_PREFIX) || !relative.endsWith('.md')) {
    throw new Error(`Source must be a markdown file under ${DOCS_PREFIX}`)
  }

  const afterDocs = relative.slice(DOCS_PREFIX.length)
  const firstSegment = afterDocs.split('/')[0]
  if (SUPPORTED_LOCALES.includes(firstSegment)) {
    throw new Error('Source must be an English page, not an existing locale file')
  }

  return { absolute, relative, relativeFromDocs2: afterDocs }
}

function docsUrl(relativeFromDocs2) {
  return `/docs/2/${relativeFromDocs2.replace(/\.md$/, '')}`
}

function localeUrl(lang, relativeFromDocs2) {
  return `/docs/2/${lang}/${relativeFromDocs2.replace(/\.md$/, '')}`
}

function outputPath(lang, relativeFromDocs2) {
  return path.join(REPO_ROOT, DOCS_PREFIX, lang, relativeFromDocs2)
}

function buildSystemPrompt(lang) {
  const language = LANGUAGE_NAMES[lang]

  return `You internationalize Microshare documentation markdown for a Jekyll site.

Translate the page into ${language}.

Return ONLY the complete translated markdown file. No preamble, no code fences around the file.

Frontmatter rules:
- Keep existing keys (layout, toc, group, embed, pdf, redirect_from, etc.) unless they must change for locale.
- Set lang: ${lang}
- Set translation_of to the English source path (e.g. docs/2/general/welcome.md)
- Set translations with URL paths (no .md suffix, no trailing slash):
    en: /docs/2/<path-without-locale>
    ${lang}: /docs/2/${lang}/<path-without-locale>
- Translate title and description into ${language}.

Body rules:
- Translate all user-facing prose, headings, table headers, and link labels into ${language}.
- Do NOT translate or alter:
  - Liquid tags: {% include ... %}, {% highlight ... %}, {% capture ... %}, {% endhighlight %}, etc.
  - Code blocks and inline code content
  - JSON examples, API endpoints, recTypes, DevEUI values, hostnames
  - Product/brand names: Microshare, React-M, Deploy-M, EverSmart, LoRaWAN, etc.
  - UI labels that appear in screenshots when they are literal button text (e.g. login, Save, Add)
  - URLs (https://..., mailto:...)
- Internal doc links may stay as /docs/2/... (locale rewriting is handled by the site).
- Preserve markdown structure, anchor link targets in headings, images, tables, and horizontal rules.
- In {% include image.html ... description="..." %}, you may translate the description attribute.

Match the tone and formatting of existing Microshare French docs: professional, clear technical French.`
}

function buildUserPrompt({ relative, relativeFromDocs2, lang, content }) {
  return `English source path: ${relative}
translation_of value: ${relative}
English URL: ${docsUrl(relativeFromDocs2)}
${lang} URL: ${localeUrl(lang, relativeFromDocs2)}

--- ENGLISH SOURCE FILE ---
${content}
--- END SOURCE FILE ---`
}

function stripResponseFences(text) {
  const trimmed = text.trim()
  const fenced = trimmed.match(/^```(?:markdown|md)?\s*\n([\s\S]*?)\n```$/i)
  return fenced ? fenced[1].trimEnd() : trimmed
}

function validateOutput(output, lang) {
  const parsed = matter(output)
  if (!parsed.data.lang || parsed.data.lang !== lang) {
    throw new Error(`Output frontmatter is missing lang: ${lang}`)
  }
  if (!parsed.data.translation_of) {
    throw new Error('Output frontmatter is missing translation_of')
  }
  if (!parsed.data.translations || typeof parsed.data.translations !== 'object') {
    throw new Error('Output frontmatter is missing translations')
  }
  return parsed
}

async function main() {
  const { sourceArg, lang, options } = parseArgs(process.argv.slice(2))

  if (!SUPPORTED_LOCALES.includes(lang)) {
    console.error(`Unsupported language "${lang}". Use one of: ${SUPPORTED_LOCALES.join(', ')}`)
    process.exit(1)
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('Missing ANTHROPIC_API_KEY environment variable.')
    process.exit(1)
  }

  let paths
  try {
    paths = resolveSourcePath(sourceArg)
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }

  const destination = outputPath(lang, paths.relativeFromDocs2)
  if (fs.existsSync(destination) && !options.force && !options.dryRun) {
    console.error(`Output already exists: ${path.relative(REPO_ROOT, destination)}`)
    console.error('Use --force to overwrite.')
    process.exit(1)
  }

  const sourceContent = fs.readFileSync(paths.absolute, 'utf8')
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

  console.error(`Translating to ${LANGUAGE_NAMES[lang]} (${lang})...`)
  console.error(`  Source: ${paths.relative}`)
  console.error(`  Model:  ${options.model}`)

  const message = await client.messages.create({
    model: options.model,
    max_tokens: 16384,
    system: buildSystemPrompt(lang),
    messages: [
      {
        role: 'user',
        content: buildUserPrompt({
          relative: paths.relative,
          relativeFromDocs2: paths.relativeFromDocs2,
          lang,
          content: sourceContent,
        }),
      },
    ],
  })

  const textBlock = message.content.find((block) => block.type === 'text')
  if (!textBlock) {
    throw new Error('Anthropic response contained no text block')
  }

  const output = stripResponseFences(textBlock.text)
  validateOutput(output, lang)

  if (options.dryRun) {
    process.stdout.write(output)
    if (!output.endsWith('\n')) process.stdout.write('\n')
    return
  }

  fs.mkdirSync(path.dirname(destination), { recursive: true })
  fs.writeFileSync(destination, output.endsWith('\n') ? output : `${output}\n`, 'utf8')

  console.error(`Wrote ${path.relative(REPO_ROOT, destination)}`)
}

main().catch((error) => {
  console.error(error.message || error)
  process.exit(1)
})
