import express from 'express'
import matter from 'gray-matter'
import multer from 'multer'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs/promises'
import { createReadStream, existsSync } from 'node:fs'
import yaml from 'js-yaml'
import { createServer as createViteServer } from 'vite'
import { LANGUAGES, DEFAULT_LOCALE, isLocaleCode } from '../shared/languages.js'
import { buildLocalePath, buildTranslationsMap, buildMigratedCanonicalPath, getCanonicalPath, getLocaleFromPath } from './lib/locale.js'
import { translatePage } from './lib/translate.js'
import { ingestPdf } from './lib/pdfIngest.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const APP_ROOT = path.resolve(__dirname, '..')

async function loadEnv() {
  const envPath = path.join(APP_ROOT, '.env')
  if (!existsSync(envPath)) return
  const raw = await fs.readFile(envPath, 'utf8')
  for (const line of raw.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq === -1) continue
    const key = trimmed.slice(0, eq).trim()
    let value = trimmed.slice(eq + 1).trim()
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    if (!process.env[key]) process.env[key] = value
  }
}
const SITE_ROOT = path.resolve(APP_ROOT, '..')
const DOCS_ROOT = path.join(SITE_ROOT, 'docs')
const DOCS_VERSION_ROOT = path.join(SITE_ROOT, 'docs', '2')
const MENU_PATH = path.join(SITE_ROOT, '_data', 'docs.yml')
const ASSETS_IMG_ROOT = path.join(SITE_ROOT, 'assets', 'img')
const PORT = Number(process.env.PORT || 5174)
const isProduction = process.env.NODE_ENV === 'production'

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 50 * 1024 * 1024 },
})

const pdfUpload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 50 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (file.mimetype === 'application/pdf') cb(null, true)
    else cb(new Error('Only PDF files are supported'))
  },
})

function slugify(value) {
  return String(value || '')
    .normalize('NFKD')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function titleFromSlug(value) {
  return String(value || '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

function ensureInside(base, target) {
  const resolvedBase = path.resolve(base)
  const resolvedTarget = path.resolve(target)
  if (resolvedTarget !== resolvedBase && !resolvedTarget.startsWith(`${resolvedBase}${path.sep}`)) {
    throw new Error(`Path escapes ${resolvedBase}`)
  }
  return resolvedTarget
}

function normalizeRelativePath(input) {
  return String(input || '')
    .replace(/\\/g, '/')
    .replace(/^\/+/, '')
    .replace(/\/+$/, '')
}

function normalizeDocPath(input) {
  let rel = normalizeRelativePath(input)
  if (!rel) throw new Error('Missing page path')
  if (!rel.startsWith('docs/')) rel = `docs/${rel}`
  if (!rel.endsWith('.md')) rel = `${rel}.md`
  if (!rel.startsWith('docs/2/')) throw new Error('Only docs/2 pages can be edited')
  const parts = rel.split('/')
  if (parts.length > 3 && isLocaleCode(parts[2]) && parts[2] !== parts[2].toLowerCase()) {
    parts[2] = parts[2].toLowerCase()
    rel = parts.join('/')
  }
  return rel
}

function docPathToAbsolute(relPath) {
  return ensureInside(DOCS_ROOT, path.join(SITE_ROOT, normalizeDocPath(relPath)))
}

function urlToDocPath(url) {
  const cleanUrl = String(url || '').replace(/\\/g, '/').split(/[?#]/)[0].replace(/\/+$/, '')
  if (!cleanUrl.startsWith('/docs/2/')) return null
  return normalizeDocPath(`${cleanUrl.replace(/^\/+/, '')}.md`)
}

function getEnglishSourcePath(pagePath) {
  const canonical = getCanonicalPath(pagePath)
  return buildLocalePath(canonical, DEFAULT_LOCALE)
}

function filePathToUrl(filePath) {
  return `/${normalizeRelativePath(filePath).replace(/\.md$/, '')}`
}

function inferMenuUrl(group, subgroup, item) {
  const groupSlug = slugify(group.title)
  const itemSlug = slugify(item.title)
  if (subgroup) {
    return `/docs/2/${groupSlug}/${slugify(subgroup.title)}/${itemSlug}`
  }
  return `/docs/2/${groupSlug}/${itemSlug}`
}

function menuItemDocPath(group, subgroup, item) {
  return urlToDocPath(item.url) || normalizeDocPath(`${inferMenuUrl(group, subgroup, item)}.md`)
}

async function walk(dir, predicate, output = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(fullPath, predicate, output)
    } else if (!predicate || predicate(fullPath)) {
      output.push(fullPath)
    }
  }
  return output
}

async function readMenu() {
  const raw = await fs.readFile(MENU_PATH, 'utf8')
  return yaml.load(raw) || []
}

async function writeMenu(menu) {
  const dumped = yaml.dump(cleanMenu(menu), {
    lineWidth: 120,
    noRefs: true,
    sortKeys: false,
    quotingType: '"',
  })
  await fs.writeFile(MENU_PATH, dumped, 'utf8')
}

function cleanMenu(value) {
  if (Array.isArray(value)) return value.map(cleanMenu).filter((entry) => entry !== undefined)
  if (!value || typeof value !== 'object') return value
  const output = {}
  for (const [key, child] of Object.entries(value)) {
    if (key.startsWith('_')) continue
    if (child === undefined || child === null || child === '') continue
    output[key] = cleanMenu(child)
  }
  return output
}

function orderedFrontmatter(data) {
  const preferred = [
    'layout',
    'title',
    'description',
    'lang',
    'translation_of',
    'translations',
    'toc',
    'pdf',
    'src',
    'embed',
    'permalink',
    'redirect_from',
    'group',
  ]
  const output = {}
  for (const key of preferred) {
    if (data[key] !== undefined && data[key] !== null && data[key] !== '') output[key] = coerceFrontmatterValue(data[key])
  }
  for (const [key, value] of Object.entries(data)) {
    if (!preferred.includes(key) && value !== undefined && value !== null && value !== '') {
      output[key] = coerceFrontmatterValue(value)
    }
  }
  return output
}

function coerceFrontmatterValue(value) {
  if (value === 'true') return true
  if (value === 'false') return false
  return value
}

async function readPageFile(relPath) {
  const normalized = normalizeDocPath(relPath)
  const absolute = docPathToAbsolute(normalized)
  const raw = await fs.readFile(absolute, 'utf8')
  const stat = await fs.stat(absolute)
  const hasFrontmatter = /^---\s*\n/.test(raw)
  const parsed = matter(raw)
  const fileName = path.basename(normalized, '.md')
  const locale = getLocaleFromPath(normalized)
  const canonicalPath = getCanonicalPath(normalized)
  return {
    path: normalized,
    url: filePathToUrl(normalized),
    canonicalPath,
    locale,
    fileName,
    hasFrontmatter,
    frontmatter: parsed.data || {},
    body: parsed.content || '',
    title: parsed.data?.title || titleFromSlug(fileName),
    description: parsed.data?.description || '',
    layout: parsed.data?.layout || 'docs',
    updatedAt: stat.mtime.toISOString(),
  }
}

async function listMarkdownPages() {
  const files = await walk(DOCS_VERSION_ROOT, (filePath) => filePath.endsWith('.md'))
  const pages = []
  for (const file of files.sort()) {
    const relPath = normalizeRelativePath(path.relative(SITE_ROOT, file))
    try {
      pages.push(await readPageFile(relPath))
    } catch (error) {
      pages.push({
        path: relPath,
        url: filePathToUrl(relPath),
        hasFrontmatter: false,
        frontmatter: {},
        body: '',
        title: titleFromSlug(path.basename(relPath, '.md')),
        layout: 'docs',
        readError: error.message,
      })
    }
  }
  return pages
}

function collectMenuEntries(menu) {
  const entries = []
  menu.forEach((group, groupIndex) => {
    ;(group.pages || []).forEach((item, itemIndex) => {
      entries.push({
        path: menuItemDocPath(group, null, item),
        url: item.url || inferMenuUrl(group, null, item),
        groupTitle: group.title,
        groupIndex,
        subgroupTitle: '',
        subgroupIndex: -1,
        itemIndex,
        menuItem: item,
      })
    })
    ;(group.subpages || []).forEach((subgroup, subgroupIndex) => {
      ;(subgroup.pages || []).forEach((item, itemIndex) => {
        entries.push({
          path: menuItemDocPath(group, subgroup, item),
          url: item.url || inferMenuUrl(group, subgroup, item),
          groupTitle: group.title,
          groupIndex,
          subgroupTitle: subgroup.title,
          subgroupIndex,
          itemIndex,
          menuItem: item,
        })
      })
    })
  })
  return entries
}

async function listAssets() {
  if (!existsSync(ASSETS_IMG_ROOT)) return []
  const files = await walk(ASSETS_IMG_ROOT, (filePath) => /\.(png|jpe?g|gif|webp|svg)$/i.test(filePath))
  const assets = await Promise.all(
    files.sort().map(async (filePath) => {
      const stat = await fs.stat(filePath)
      const relPath = normalizeRelativePath(path.relative(SITE_ROOT, filePath))
      return {
        path: relPath,
        url: `/${relPath}`,
        name: path.basename(filePath),
        folder: normalizeRelativePath(path.dirname(path.relative(ASSETS_IMG_ROOT, filePath))),
        size: stat.size,
        updatedAt: stat.mtime.toISOString(),
      }
    }),
  )
  return assets
}

function buildTranslationGroups(filePages) {
  const groups = new Map()
  for (const page of filePages) {
    const canonicalPath = page.canonicalPath || getCanonicalPath(page.path)
    if (!groups.has(canonicalPath)) {
      groups.set(canonicalPath, { canonicalPath, locales: {} })
    }
    const locale = page.locale || getLocaleFromPath(page.path)
    groups.get(canonicalPath).locales[locale] = {
      path: page.path,
      url: page.url,
      title: page.title,
      updatedAt: page.updatedAt,
      locale,
    }
  }
  return groups
}

function attachTranslationMeta(page, translationGroups) {
  const canonicalPath = page.canonicalPath || getCanonicalPath(page.path)
  const group = translationGroups.get(canonicalPath) || { canonicalPath, locales: {} }
  const locales = group.locales
  const englishEntry = locales[DEFAULT_LOCALE]
  const sourceUpdatedAt = englishEntry?.updatedAt || null
  const translations = Object.entries(locales).map(([code, entry]) => {
    const outdated =
      code !== DEFAULT_LOCALE && sourceUpdatedAt && entry.updatedAt
        ? new Date(sourceUpdatedAt) > new Date(entry.updatedAt)
        : false
    return { ...entry, code, outdated }
  })

  return {
    ...page,
    canonicalPath,
    locale: page.locale || getLocaleFromPath(page.path),
    translationGroup: {
      canonicalPath,
      locales,
      translations,
      translationCount: translations.length,
      availableLocales: Object.keys(locales),
      sourceUpdatedAt,
    },
  }
}

async function syncTranslationFrontmatter(canonicalPath, translationGroups) {
  const group = translationGroups.get(canonicalPath)
  if (!group) return
  const translations = buildTranslationsMap(group.locales)
  for (const [locale, entry] of Object.entries(group.locales)) {
    if (!entry?.path) continue
    try {
      const page = await readPageFile(entry.path)
      const nextFrontmatter = orderedFrontmatter({
        ...page.frontmatter,
        lang: locale === DEFAULT_LOCALE ? page.frontmatter.lang || DEFAULT_LOCALE : locale,
        translation_of:
          locale === DEFAULT_LOCALE ? undefined : page.frontmatter.translation_of || getEnglishSourcePath(entry.path),
        translations,
      })
      if (locale === DEFAULT_LOCALE) delete nextFrontmatter.translation_of
      const raw = matter.stringify(page.body || '', nextFrontmatter)
      await fs.writeFile(docPathToAbsolute(entry.path), raw, 'utf8')
    } catch (error) {
      console.warn(`Could not sync translations for ${entry.path}:`, error.message)
    }
  }
}

async function buildSiteSnapshot() {
  const [menu, filePages, assets] = await Promise.all([readMenu(), listMarkdownPages(), listAssets()])
  const translationGroups = buildTranslationGroups(filePages)
  const entries = collectMenuEntries(menu)
  const pagesByPath = new Map(
    filePages.map((page) => [page.path, attachTranslationMeta({ ...page, inMenu: false, menu: null }, translationGroups)]),
  )

  for (const entry of entries) {
    const existing = pagesByPath.get(entry.path)
    if (existing) {
      pagesByPath.set(entry.path, {
        ...existing,
        inMenu: true,
        menu: entry,
        menuTitle: entry.menuItem.title,
        url: entry.url,
      })
    } else {
      pagesByPath.set(entry.path, {
        path: entry.path,
        url: entry.url,
        canonicalPath: getCanonicalPath(entry.path),
        locale: DEFAULT_LOCALE,
        exists: false,
        hasFrontmatter: false,
        frontmatter: {},
        body: '',
        title: entry.menuItem.title,
        description: '',
        layout: 'docs',
        inMenu: true,
        menu: entry,
        menuTitle: entry.menuItem.title,
        translationGroup: translationGroups.get(entry.path) || {
          canonicalPath: entry.path,
          locales: {},
          translations: [],
          translationCount: 0,
          availableLocales: [],
          sourceUpdatedAt: null,
        },
      })
    }
  }

  const allPages = [...pagesByPath.values()]
  const primaryPaths = new Set()
  const pages = []

  for (const page of allPages) {
    const canonical = page.canonicalPath || getCanonicalPath(page.path)
    if (primaryPaths.has(canonical)) continue
    const group = translationGroups.get(canonical)
    const primary =
      allPages.find((item) => item.path === canonical) ||
      allPages.find((item) => (item.locale || getLocaleFromPath(item.path)) === DEFAULT_LOCALE && item.canonicalPath === canonical) ||
      page
    primaryPaths.add(canonical)
    pages.push(attachTranslationMeta({ ...primary, translationGroup: group }, translationGroups))
  }

  for (const page of allPages) {
    const canonical = page.canonicalPath || getCanonicalPath(page.path)
    if (!primaryPaths.has(canonical) && page.locale !== DEFAULT_LOCALE) {
      primaryPaths.add(canonical)
      pages.push(attachTranslationMeta(page, translationGroups))
    }
  }

  pages.sort((a, b) => {
    if (a.inMenu && b.inMenu) {
      return (
        a.menu.groupIndex - b.menu.groupIndex ||
        a.menu.subgroupIndex - b.menu.subgroupIndex ||
        a.menu.itemIndex - b.menu.itemIndex
      )
    }
    if (a.inMenu) return -1
    if (b.inMenu) return 1
    return a.path.localeCompare(b.path)
  })

  return {
    siteRoot: SITE_ROOT,
    docsVersion: '2',
    languages: LANGUAGES,
    menu,
    pages,
    allPages,
    assets,
    layouts: ['docs', 'pdf_viewer', 'iframe', 'index', 'release-notes', 'api', 'generic_rest_api', 'demo'],
    stats: {
      pageCount: filePages.length,
      menuPageCount: entries.length,
      imageCount: assets.length,
      languageCount: LANGUAGES.length,
    },
  }
}

function removeMenuItemForPath(menu, paths) {
  let removed = null
  const targets = new Set(paths.filter(Boolean).map(normalizeDocPath))
  menu.forEach((group) => {
    group.pages = (group.pages || []).filter((item, index) => {
      const itemPath = menuItemDocPath(group, null, item)
      const keep = !targets.has(itemPath)
      if (!keep) removed = { groupTitle: group.title, subgroupTitle: '', index, item }
      return keep
    })
    ;(group.subpages || []).forEach((subgroup) => {
      subgroup.pages = (subgroup.pages || []).filter((item, index) => {
        const itemPath = menuItemDocPath(group, subgroup, item)
        const keep = !targets.has(itemPath)
        if (!keep) removed = { groupTitle: group.title, subgroupTitle: subgroup.title, index, item }
        return keep
      })
    })
  })
  return removed
}

function normalizeKeywords(value) {
  if (Array.isArray(value)) return value.map(String).map((item) => item.trim()).filter(Boolean)
  return String(value || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
}

function buildMenuItem(item) {
  const output = {}
  for (const [key, value] of Object.entries(item || {})) {
    if (key.startsWith('_')) continue
    if (key === 'keywords' || key === 'keyword') {
      const keywords = normalizeKeywords(value)
      if (keywords.length) output.keywords = keywords
      continue
    }
    if (key === 'top_clean' || key === 'top_pest') {
      if (value === true || value === 'true') output[key] = true
      continue
    }
    if (value !== undefined && value !== null && value !== '') output[key] = value
  }
  if (!output.title) output.title = 'Untitled'
  return output
}

function ensureMenuPlacement(menu, placement) {
  let group = menu.find((item) => item.title === placement.groupTitle)
  if (!group) {
    group = {
      title: placement.groupTitle || 'New Section',
      desc: '',
      color: 'text-microshare-dark',
      logo: 'file',
      subpages: [],
    }
    menu.push(group)
  }
  if (placement.subgroupTitle) {
    group.subpages = group.subpages || []
    let subgroup = group.subpages.find((item) => item.title === placement.subgroupTitle)
    if (!subgroup) {
      subgroup = { title: placement.subgroupTitle, pages: [] }
      group.subpages.push(subgroup)
    }
    subgroup.pages = subgroup.pages || []
    return subgroup.pages
  }
  group.pages = group.pages || []
  return group.pages
}

async function savePage(payload) {
  const newPath = normalizeDocPath(payload.path)
  const previousPath = payload.previousPath ? normalizeDocPath(payload.previousPath) : newPath
  const absolutePath = docPathToAbsolute(newPath)
  await fs.mkdir(path.dirname(absolutePath), { recursive: true })

  const frontmatter = orderedFrontmatter(payload.frontmatter || {})
  const body = String(payload.body || '')
  const raw = matter.stringify(body, frontmatter)
  await fs.writeFile(absolutePath, raw, 'utf8')

  if (payload.moveFile && previousPath !== newPath) {
    const previousAbsolute = docPathToAbsolute(previousPath)
    if (existsSync(previousAbsolute)) {
      await fs.unlink(previousAbsolute)
    }
  }

  if (payload.menu) {
    const menu = await readMenu()
    removeMenuItemForPath(menu, [previousPath, newPath])
    if (payload.menu.includeInMenu) {
      const targetPages = ensureMenuPlacement(menu, payload.menu)
      targetPages.push(buildMenuItem(payload.menu.item))
    }
    await writeMenu(menu)
  }

  const filePages = await listMarkdownPages()
  const translationGroups = buildTranslationGroups(filePages)
  const canonicalPath = getCanonicalPath(newPath)
  await syncTranslationFrontmatter(canonicalPath, translationGroups)

  return readPageFile(newPath)
}

async function migratePage({ sourcePath, targetGroupTitle, targetSubgroupTitle = '' }) {
  const englishPath = normalizeDocPath(getEnglishSourcePath(sourcePath))
  const canonicalPath = getCanonicalPath(englishPath)
  const groupTitle = String(targetGroupTitle || '').trim()
  if (!groupTitle) throw new Error('Target section is required')

  const subgroupTitle = String(targetSubgroupTitle || '').trim()
  const newCanonicalPath = buildMigratedCanonicalPath(canonicalPath, groupTitle, subgroupTitle)
  if (newCanonicalPath === canonicalPath) {
    throw new Error('Page is already in this section')
  }

  const filePages = await listMarkdownPages()
  const translationGroups = buildTranslationGroups(filePages)
  const translationGroup = translationGroups.get(canonicalPath)
  if (!translationGroup?.locales?.[DEFAULT_LOCALE]) {
    throw new Error('English source page not found')
  }

  const moves = []
  for (const [locale, entry] of Object.entries(translationGroup.locales)) {
    if (!entry?.path) continue
    const newPath = buildLocalePath(newCanonicalPath, locale)
    if (newPath === entry.path) continue
    const targetAbsolute = docPathToAbsolute(newPath)
    if (existsSync(targetAbsolute)) {
      throw new Error(`Target path already exists: ${newPath}`)
    }
    moves.push({ from: entry.path, to: newPath, locale })
  }

  if (!moves.length) throw new Error('Nothing to migrate')

  for (const move of moves) {
    const fromAbsolute = docPathToAbsolute(move.from)
    const toAbsolute = docPathToAbsolute(move.to)
    const page = await readPageFile(move.from)
    await fs.mkdir(path.dirname(toAbsolute), { recursive: true })
    const raw = matter.stringify(page.body || '', orderedFrontmatter(page.frontmatter))
    await fs.writeFile(toAbsolute, raw, 'utf8')
    if (existsSync(fromAbsolute)) await fs.unlink(fromAbsolute)
  }

  const menu = await readMenu()
  const removed = removeMenuItemForPath(
    menu,
    moves.map((move) => move.from),
  )
  const englishPage = await readPageFile(buildLocalePath(newCanonicalPath, DEFAULT_LOCALE))
  const menuItem = buildMenuItem({
    ...(removed?.item || {}),
    title: removed?.item?.title || englishPage.title || titleFromSlug(path.basename(newCanonicalPath, '.md')),
    url: filePathToUrl(newCanonicalPath),
  })
  const targetPages = ensureMenuPlacement(menu, { groupTitle, subgroupTitle: subgroupTitle || undefined })
  targetPages.push(menuItem)
  await writeMenu(menu)

  const updatedFilePages = await listMarkdownPages()
  const updatedGroups = buildTranslationGroups(updatedFilePages)
  await syncTranslationFrontmatter(newCanonicalPath, updatedGroups)

  return {
    canonicalPath: newCanonicalPath,
    moves,
    page: await readPageFile(buildLocalePath(newCanonicalPath, DEFAULT_LOCALE)),
  }
}

function sanitizeAssetFolder(folder) {
  return normalizeRelativePath(folder)
    .split('/')
    .map((part) => slugify(part) || 'uploads')
    .join('/')
}

function sanitizeFileName(name) {
  const ext = path.extname(name).toLowerCase()
  const base = path.basename(name, ext)
  return `${slugify(base) || 'image'}${ext}`
}

async function uniqueAssetPath(folder, originalName) {
  const cleanFolder = sanitizeAssetFolder(folder || 'uploads')
  const cleanName = sanitizeFileName(originalName)
  const targetDir = ensureInside(ASSETS_IMG_ROOT, path.join(ASSETS_IMG_ROOT, cleanFolder))
  await fs.mkdir(targetDir, { recursive: true })

  const ext = path.extname(cleanName)
  const base = path.basename(cleanName, ext)
  let candidate = path.join(targetDir, cleanName)
  let index = 1
  while (existsSync(candidate)) {
    candidate = path.join(targetDir, `${base}-${index}${ext}`)
    index += 1
  }
  return candidate
}

async function start() {
  await loadEnv()
  const app = express()
  app.use(express.json({ limit: '10mb' }))
  app.use('/assets', express.static(path.join(SITE_ROOT, 'assets')))

  app.get('/api/site', async (_req, res, next) => {
    try {
      res.json(await buildSiteSnapshot())
    } catch (error) {
      next(error)
    }
  })

  app.get('/api/page', async (req, res, next) => {
    try {
      res.json(await readPageFile(req.query.path))
    } catch (error) {
      next(error)
    }
  })

  app.post('/api/page', async (req, res, next) => {
    try {
      const page = await savePage(req.body)
      res.json({ ok: true, page, site: await buildSiteSnapshot() })
    } catch (error) {
      next(error)
    }
  })

  app.post('/api/page/migrate', async (req, res, next) => {
    try {
      const result = await migratePage({
        sourcePath: req.body.sourcePath,
        targetGroupTitle: req.body.targetGroupTitle,
        targetSubgroupTitle: req.body.targetSubgroupTitle || '',
      })
      res.json({ ok: true, ...result, site: await buildSiteSnapshot() })
    } catch (error) {
      next(error)
    }
  })

  app.post('/api/menu', async (req, res, next) => {
    try {
      await writeMenu(req.body.menu || [])
      res.json({ ok: true, site: await buildSiteSnapshot() })
    } catch (error) {
      next(error)
    }
  })

  app.get('/api/assets', async (_req, res, next) => {
    try {
      res.json(await listAssets())
    } catch (error) {
      next(error)
    }
  })

  app.post('/api/assets/upload', upload.array('files'), async (req, res, next) => {
    try {
      const folder = req.body.folder || 'uploads'
      const saved = []
      for (const file of req.files || []) {
        if (!/^image\/(png|jpe?g|gif|webp|svg\+xml)$/i.test(file.mimetype)) {
          throw new Error(`${file.originalname} is not a supported image`)
        }
        const target = await uniqueAssetPath(folder, file.originalname)
        await fs.writeFile(target, file.buffer)
        const relPath = normalizeRelativePath(path.relative(SITE_ROOT, target))
        saved.push({
          path: relPath,
          url: `/${relPath}`,
          name: path.basename(target),
          folder: normalizeRelativePath(path.dirname(path.relative(ASSETS_IMG_ROOT, target))),
          size: file.size,
        })
      }
      res.json({ ok: true, assets: saved, allAssets: await listAssets() })
    } catch (error) {
      next(error)
    }
  })

  app.get('/api/file', async (req, res, next) => {
    try {
      const relPath = normalizeDocPath(req.query.path)
      const absolutePath = docPathToAbsolute(relPath)
      res.type('text/plain')
      createReadStream(absolutePath).pipe(res)
    } catch (error) {
      next(error)
    }
  })

  app.get('/api/languages', (_req, res) => {
    res.json({ languages: LANGUAGES })
  })

  app.post('/api/translate', async (req, res, next) => {
    try {
      const sourcePath = normalizeDocPath(req.body.sourcePath || req.body.path)
      const targetLang = String(req.body.targetLang || '').toLowerCase()
      if (!isLocaleCode(targetLang) || targetLang === DEFAULT_LOCALE) {
        throw new Error('Invalid target language')
      }
      const englishPath = getEnglishSourcePath(sourcePath)
      const sourcePage = await readPageFile(englishPath)
      const draft = await translatePage(sourcePage, targetLang)

      if (req.body.save) {
        const saved = await savePage({
          path: draft.path,
          previousPath: draft.path,
          frontmatter: draft.frontmatter,
          body: draft.body,
          moveFile: false,
          menu: null,
        })
        res.json({ ok: true, draft, page: saved, site: await buildSiteSnapshot() })
        return
      }

      res.json({ ok: true, draft })
    } catch (error) {
      next(error)
    }
  })

  app.post('/api/pdf/ingest', pdfUpload.single('file'), async (req, res, next) => {
    try {
      if (!req.file?.buffer) throw new Error('PDF file is required')
      const suggestedPath = req.body.suggestedPath || ''
      const assetFolder =
        req.body.assetFolder ||
        (suggestedPath
          ? `uploads/${slugify(path.basename(normalizeDocPath(suggestedPath), '.md')) || 'import'}`
          : 'uploads')
      const context = {
        title: req.body.title || '',
        description: req.body.description || '',
        suggestedPath,
        assetFolder,
      }
      console.log('[pdf-ingest] API request received', {
        fileName: req.file.originalname,
        fileSize: req.file.size,
        assetFolder,
        suggestedPath,
      })
      const result = await ingestPdf(req.file.buffer, context, {
        saveImage: async (buffer, originalName) => {
          const target = await uniqueAssetPath(assetFolder, originalName)
          await fs.writeFile(target, buffer)
          const relPath = normalizeRelativePath(path.relative(SITE_ROOT, target))
          return {
            path: relPath,
            url: `/${relPath}`,
            name: path.basename(target),
            folder: normalizeRelativePath(path.dirname(path.relative(ASSETS_IMG_ROOT, target))),
            size: buffer.length,
          }
        },
      })
      console.log('[pdf-ingest] API request complete', {
        imageCount: result.imageCount,
        bodyLength: result.body?.length || 0,
      })
      res.json({ ok: true, ...result, allAssets: await listAssets() })
    } catch (error) {
      console.error('[pdf-ingest] API request failed:', error)
      next(error)
    }
  })

  app.use((error, _req, res, _next) => {
    console.error(error)
    res.status(400).json({ ok: false, error: error.message || 'Unexpected error' })
  })

  if (isProduction) {
    app.use(express.static(path.join(APP_ROOT, 'dist')))
    app.use((_req, res) => {
      res.sendFile(path.join(APP_ROOT, 'dist', 'index.html'))
    })
  } else {
    const vite = await createViteServer({
      root: APP_ROOT,
      server: { middlewareMode: true },
      appType: 'spa',
    })
    app.use(vite.middlewares)
    app.use(async (req, res, next) => {
      try {
        const template = await fs.readFile(path.join(APP_ROOT, 'index.html'), 'utf8')
        const html = await vite.transformIndexHtml(req.originalUrl, template)
        res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
      } catch (error) {
        vite.ssrFixStacktrace(error)
        next(error)
      }
    })
  }

  app.listen(PORT, () => {
    console.log(`m-content is running at http://localhost:${PORT}`)
    console.log(`Editing docs at ${SITE_ROOT}`)
  })
}

start()
