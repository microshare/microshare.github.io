import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import {
  AlertTriangle,
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  Bold,
  CheckCircle2,
  Code,
  FilePlus2,
  FileText,
  FolderTree,
  Heading2,
  Image as ImageIcon,
  Italic,
  Languages,
  Link,
  List,
  GitBranch,
  LoaderCircle,
  Package,
  Plus,
  Quote,
  RefreshCcw,
  Rocket,
  Save,
  Search,
  Sparkles,
  Table2,
  Trash2,
  Upload,
  Video,
  X,
  XCircle,
} from 'lucide-react'
import { decodeEditorLiquid, htmlToMarkdown, normalizeAssetUrl, renderEditorMarkdown } from './lib/contentBlocks'
import {
  buildLocalePathFromCanonical,
  DEFAULT_LOCALE,
  formatLocaleDate,
  getLocaleFromPath,
  getTranslationEntry,
  LANGUAGES,
} from './lib/locale'
import { insertMarkdownAtCursor, saveEditorSelection } from './lib/editorInsert'
import {
  buildLinkMarkdown,
  buildMarkdownTable,
  createEmptyTable,
  findMarkdownTableBlocks,
  normalizeYoutubeEmbedUrl,
  parseMarkdownTableCells,
  removeLinkAt,
  removeTableAt,
  replaceLinkAt,
  replaceTableAt,
  resizeTableCells,
  youtubeSnippet,
} from './lib/insertSnippets'
import { inferDocPath, buildMigratedPath, titleFromPath } from './lib/slug'
import './App.css'

const defaultFrontmatter = {
  layout: 'docs',
  title: '',
  description: '',
  toc: true,
  pdf: '',
  src: '',
  embed: false,
}

function App() {
  const [site, setSite] = useState(null)
  const [view, setView] = useState('pages')
  const [page, setPage] = useState(null)
  const [frontmatter, setFrontmatter] = useState(defaultFrontmatter)
  const [docPath, setDocPath] = useState('')
  const [body, setBody] = useState('')
  const [editorMode, setEditorMode] = useState('rendered')
  const [pageQuery, setPageQuery] = useState('')
  const [assetQuery, setAssetQuery] = useState('')
  const [menuDraft, setMenuDraft] = useState([])
  const [dirty, setDirty] = useState(false)
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [translatingLang, setTranslatingLang] = useState(null)
  const [migratePageTarget, setMigratePageTarget] = useState(null)
  const [changePackage, setChangePackage] = useState(null)
  const [packagesData, setPackagesData] = useState(null)
  const [packageDiff, setPackageDiff] = useState(null)
  const [packageBusy, setPackageBusy] = useState(false)
  const [authorName, setAuthorName] = useState(() => localStorage.getItem('m-content-author') || '')

  useEffect(() => {
    loadSite()
    loadChangePackages()
    // Initial workspace load only; explicit buttons handle refreshes afterward.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    localStorage.setItem('m-content-author', authorName)
  }, [authorName])

  const pageSections = useMemo(() => buildPageSections(site?.pages || [], pageQuery), [site, pageQuery])
  const pageOptions = useMemo(() => (site?.pages || []).filter((item) => item.exists !== false), [site])

  async function loadSite(nextPagePath = page?.path) {
    setStatus({ type: 'busy', message: 'Loading docs workspace...' })
    try {
      const nextSite = await api('/api/site')
      setSite(nextSite)
      setMenuDraft(structuredClone(nextSite.menu || []))
      if (nextPagePath) await loadPage(nextPagePath, nextSite)
      setStatus({ type: 'success', message: 'Workspace loaded' })
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    }
  }

  async function loadChangePackages() {
    try {
      const [activeResult, listResult] = await Promise.all([
        api('/api/packages/active'),
        api('/api/packages'),
      ])
      setChangePackage(activeResult.package)
      setPackagesData(listResult)
    } catch (error) {
      console.warn('Could not load change packages:', error.message)
    }
  }

  async function loadPackageDiff(prNumber) {
    setPackageBusy(true)
    try {
      const query = prNumber ? `?prNumber=${encodeURIComponent(prNumber)}` : ''
      const diff = await api(`/api/packages/diff${query}`)
      setPackageDiff(diff)
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    } finally {
      setPackageBusy(false)
    }
  }

  async function startChangePackage(title) {
    if (!authorName.trim()) {
      setStatus({ type: 'error', message: 'Enter your name in the Changes section first' })
      setView('changes')
      return
    }
    setPackageBusy(true)
    setStatus({ type: 'busy', message: 'Starting change package...' })
    try {
      const result = await api('/api/packages/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, author: authorName.trim() }),
      })
      setChangePackage(result.package)
      await loadChangePackages()
      setPackageDiff(null)
      setView('changes')
      setStatus({ type: 'success', message: `Change package started: ${title}` })
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    } finally {
      setPackageBusy(false)
    }
  }

  async function submitChangePackage() {
    if (!window.confirm('Submit this change package for review? You can still make updates until it is published.')) return
    setPackageBusy(true)
    setStatus({ type: 'busy', message: 'Uploading changes for review...' })
    try {
      const result = await api('/api/packages/submit', { method: 'POST' })
      setChangePackage(result.package)
      await loadChangePackages()
      await loadPackageDiff(result.package.prNumber)
      setStatus({ type: 'success', message: 'Changes submitted for review' })
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    } finally {
      setPackageBusy(false)
    }
  }

  async function publishChangePackage(prNumber) {
    if (!window.confirm('Publish these changes to the live documentation site?')) return
    setPackageBusy(true)
    setStatus({ type: 'busy', message: 'Publishing changes...' })
    try {
      const result = await api('/api/packages/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prNumber, author: authorName.trim() || 'm-content' }),
      })
      setChangePackage(null)
      setPackageDiff(null)
      if (result.site) {
        setSite(result.site)
        setMenuDraft(structuredClone(result.site.menu || []))
      }
      await loadChangePackages()
      setStatus({ type: 'success', message: 'Changes published — the site will update shortly' })
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    } finally {
      setPackageBusy(false)
    }
  }

  async function abandonChangePackage(prNumber) {
    if (!window.confirm('Abandon this change package? Unpublished work on this branch will be discarded.')) return
    setPackageBusy(true)
    setStatus({ type: 'busy', message: 'Abandoning change package...' })
    try {
      const result = await api('/api/packages/abandon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prNumber }),
      })
      setChangePackage(null)
      setPackageDiff(null)
      if (result.site) {
        setSite(result.site)
        setMenuDraft(structuredClone(result.site.menu || []))
      }
      await loadChangePackages()
      setStatus({ type: 'success', message: 'Change package abandoned' })
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    } finally {
      setPackageBusy(false)
    }
  }

  async function loadPage(path, currentSite = site) {
    if (!path) return
    setStatus({ type: 'busy', message: 'Opening page...' })
    try {
      const nextPage = await api(`/api/page?path=${encodeURIComponent(path)}`)
      const pageInfo = currentSite?.pages?.find((item) => item.path === path)
      setPage({ ...nextPage, previousPath: nextPage.path })
      setDocPath(nextPage.path)
      setFrontmatter({
        ...defaultFrontmatter,
        ...nextPage.frontmatter,
        title: nextPage.frontmatter.title || pageInfo?.menuTitle || nextPage.title || titleFromPath(nextPage.path),
        description: nextPage.frontmatter.description || '',
        layout: nextPage.frontmatter.layout || 'docs',
      })
      setBody(nextPage.body || '')
      setEditorMode('rendered')
      setDirty(false)
      setView('editor')
      setStatus({ type: 'success', message: 'Page ready' })
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    }
  }

  function createPage() {
    const groupTitle = site?.menu?.[0]?.title || 'General'
    const title = 'New page'
    const path = inferDocPath({ groupTitle, title })
    setPage({ path, previousPath: '', frontmatter: {}, body: '' })
    setDocPath(path)
    setFrontmatter({ ...defaultFrontmatter, title, description: '' })
    setBody('Start writing this page here.')
    setEditorMode('rendered')
    setDirty(true)
    setView('editor')
    setStatus({ type: 'success', message: 'New page draft created' })
  }

  async function savePage() {
    if (!page) return
    const payload = {
      previousPath: page.previousPath || page.path || docPath,
      path: docPath,
      frontmatter: cleanFrontmatter(frontmatter),
      body,
      moveFile: false,
      menu: null,
      author: authorName.trim() || undefined,
    }
    setStatus({ type: 'busy', message: 'Saving page...' })
    try {
      const result = await api('/api/page', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      setSite(result.site)
      setMenuDraft(structuredClone(result.site.menu || []))
      setPage({ ...result.page, previousPath: result.page.path })
      setDocPath(result.page.path)
      setFrontmatter({ ...defaultFrontmatter, ...result.page.frontmatter })
      setBody(result.page.body || body)
      setDirty(false)
      await loadChangePackages()
      setStatus({
        type: 'success',
        message: result.commit ? 'Page saved and recorded in change package' : 'Page saved locally',
      })
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    }
  }

  async function saveMenu() {
    setStatus({ type: 'busy', message: 'Saving menu...' })
    try {
      const result = await api('/api/menu', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ menu: menuDraft, author: authorName.trim() || undefined }),
      })
      setSite(result.site)
      setMenuDraft(structuredClone(result.site.menu || []))
      setDirty(false)
      await loadChangePackages()
      setStatus({
        type: 'success',
        message: result.commit ? 'Menu saved and recorded in change package' : 'Menu saved locally',
      })
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    }
  }

  async function translatePageLocale(targetLang, { save = true, regenerate = false, sourcePagePath = null } = {}) {
    const activePath = sourcePagePath || page?.path
    if (!activePath) {
      setStatus({ type: 'error', message: 'No page selected for translation' })
      return
    }
    if (translatingLang) return

    const sourcePath = getEnglishPath(activePath)
    const canonical = getCanonical(activePath)
    const existing = getTranslationEntry(
      site?.pages?.find((item) => item.canonicalPath === canonical) ||
        site?.allPages?.find((item) => item.canonicalPath === canonical),
      targetLang,
    )
    if (existing && !regenerate) {
      await loadPage(existing.path)
      return
    }
    if (existing && regenerate && !window.confirm(`Regenerate the ${targetLang.toUpperCase()} translation? This overwrites existing content.`)) {
      return
    }

    if (needsSaveBeforeTranslate(activePath)) {
      const shouldSave = window.confirm(
        'You have unsaved changes. Translation uses the last saved version on disk — your current edits will not be included.\n\nSave your changes now before translating?',
      )
      if (!shouldSave) {
        setStatus({ type: 'error', message: 'Save your changes first, then translate again.' })
        return
      }
      await savePage()
      if (dirty) return
    }

    setTranslatingLang(targetLang)
    setStatus({ type: 'busy', message: `Generating ${targetLang.toUpperCase()} translation...` })
    try {
      const result = await api('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sourcePath, targetLang, save, author: authorName.trim() || undefined }),
      })
      if (save && result.page) {
        setSite(result.site)
        await loadChangePackages()
        setPage({ ...result.page, previousPath: result.page.path })
        setDocPath(result.page.path)
        setFrontmatter({ ...defaultFrontmatter, ...result.page.frontmatter })
        setBody(result.page.body || '')
        setDirty(false)
        setView('editor')
        setStatus({ type: 'success', message: `${targetLang.toUpperCase()} translation saved` })
      } else {
        setFrontmatter((current) => ({
          ...current,
          ...result.draft.frontmatter,
        }))
        setBody(result.draft.body || '')
        setDocPath(result.draft.path)
        setDirty(true)
        setStatus({ type: 'success', message: `${targetLang.toUpperCase()} draft ready — review and save` })
      }
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    } finally {
      setTranslatingLang(null)
    }
  }

  function needsSaveBeforeTranslate(sourcePagePath) {
    if (!dirty || !page) return false
    return getCanonical(sourcePagePath) === getCanonical(page.path || docPath)
  }

  async function ingestPdf(file, { mode = 'replace' } = {}) {
    if (!file) return
    setStatus({ type: 'busy', message: 'Extracting content from PDF...' })
    try {
      const form = new FormData()
      form.append('file', file)
      form.append('title', frontmatter.title || '')
      form.append('description', frontmatter.description || '')
      form.append('suggestedPath', docPath || page?.path || '')
      const response = await fetch('/api/pdf/ingest', { method: 'POST', body: form })
      const json = await response.json()
      if (!response.ok) throw new Error(json.error || 'PDF import failed')

      if (json.title) updateFrontmatter('title', json.title)
      if (json.description) updateFrontmatter('description', json.description)
      if (frontmatter.layout === 'pdf_viewer') updateFrontmatter('layout', 'docs')

      if (mode === 'append') {
        setBody((current) => `${current.trimEnd()}\n\n${json.body || ''}`.trim())
      } else {
        setBody(json.body || '')
      }
      if (json.allAssets) {
        setSite((current) => ({ ...current, assets: json.allAssets }))
      }
      setEditorMode('raw')
      setDirty(true)
      const imageNote =
        json.imageCount > 0 ? ` (${json.imageCount} image${json.imageCount === 1 ? '' : 's'} extracted)` : ''
      setStatus({ type: 'success', message: `PDF content imported${imageNote} — review and save` })
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    }
  }

  async function uploadAssets(files, folder) {
    if (!files?.length) return
    const form = new FormData()
    for (const file of files) form.append('files', file)
    form.append('folder', folder || 'uploads')
    if (authorName.trim()) form.append('author', authorName.trim())
    setStatus({ type: 'busy', message: 'Uploading images...' })
    try {
      const response = await fetch('/api/assets/upload', { method: 'POST', body: form })
      const json = await response.json()
      if (!response.ok) throw new Error(json.error || 'Upload failed')
      setSite((current) => ({ ...current, assets: json.allAssets }))
      await loadChangePackages()
      setStatus({ type: 'success', message: `${json.assets.length} image saved` })
      return json.assets
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
      return []
    }
  }

  async function migratePageSection(targetPage, { targetGroupTitle, targetSubgroupTitle }) {
    if (!targetPage?.path) return
    setStatus({ type: 'busy', message: 'Moving page and translations...' })
    try {
      const result = await api('/api/page/migrate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sourcePath: targetPage.path,
          targetGroupTitle,
          targetSubgroupTitle,
          author: authorName.trim() || undefined,
        }),
      })
      setSite(result.site)
      await loadChangePackages()
      setMenuDraft(structuredClone(result.site.menu || []))
      setMigratePageTarget(null)
      if (page?.path && result.moves?.some((move) => move.from === page.path || move.to === page.path)) {
        await loadPage(result.page.path, result.site)
      }
      const localeCount = result.moves?.length || 0
      setStatus({
        type: 'success',
        message: `Moved ${localeCount} file${localeCount === 1 ? '' : 's'} to ${targetGroupTitle}${
          targetSubgroupTitle ? ` / ${targetSubgroupTitle}` : ''
        }`,
      })
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    }
  }

  function updateFrontmatter(key, value) {
    setFrontmatter((current) => ({ ...current, [key]: value }))
    setDirty(true)
  }

  function replaceImage(imageRef, asset, options = {}) {
    const caption = options.caption?.trim() || imageRef?.attrs?.description || asset.name.replace(/\.[^.]+$/, '')
    const snippet = imageSnippet(asset, caption, imageRef?.attrs)
    setBody((current) => replaceImageIncludeAt(current, Number(imageRef?.imageIndex || 0), snippet))
    setEditorMode('rendered')
    setDirty(true)
  }

  function updateMenu(mutator) {
    setMenuDraft((current) => {
      const next = structuredClone(current || [])
      mutator(next)
      return next
    })
    setDirty(true)
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="brand-button" type="button" onClick={() => setView('pages')}>
          <div className="brand-mark">M</div>
          <div>
            <h1>m-content</h1>
            <p>Docs CMS for Microshare</p>
          </div>
        </button>
        <div className="topbar-actions">
          <button type="button" onClick={() => loadSite()}>
            <RefreshCcw size={16} />
            Reload
          </button>
          <button type="button" onClick={createPage}>
            <FilePlus2 size={16} />
            New page
          </button>
          <button className="primary" type="button" onClick={view === 'menu' ? saveMenu : savePage} disabled={view === 'pages' || (!page && view === 'editor')}>
            <Save size={16} />
            Save
          </button>
        </div>
      </header>

      <div className="status-strip" data-kind={status.type}>
        {status.type === 'busy' ? (
          <LoaderCircle size={16} className="spin" />
        ) : status.type === 'error' ? (
          <AlertTriangle size={16} />
        ) : (
          <CheckCircle2 size={16} />
        )}
        <span>{status.message || 'Ready'}</span>
        {dirty && <strong>Unsaved changes</strong>}
        {changePackage && (
          <button className="package-strip-link" type="button" onClick={() => setView('changes')}>
            <Package size={14} />
            {changePackage.title}
            <span className={`package-status-pill status-${changePackage.status}`}>{packageStatusLabel(changePackage.status)}</span>
          </button>
        )}
      </div>

      {view === 'pages' && (
        <PagesDashboard
          sections={pageSections}
          query={pageQuery}
          setQuery={setPageQuery}
          site={site}
          onOpenPage={loadPage}
          onCreatePage={createPage}
          onOpenMenu={() => setView('menu')}
          onOpenChanges={() => setView('changes')}
          onTranslate={translatePageLocale}
          translatingLang={translatingLang}
          onMigratePage={setMigratePageTarget}
        />
      )}

      {view === 'editor' && page && (
        <PageEditor
          page={page}
          site={site}
          frontmatter={frontmatter}
          updateFrontmatter={updateFrontmatter}
          docPath={docPath}
          setDocPath={(value) => {
            setDocPath(value)
            setDirty(true)
          }}
          body={body}
          setBody={(value) => {
            setBody(value)
            setDirty(true)
          }}
          mode={editorMode}
          setMode={setEditorMode}
          assets={site?.assets || []}
          assetQuery={assetQuery}
          setAssetQuery={setAssetQuery}
          uploadAssets={uploadAssets}
          replaceImage={replaceImage}
          pageOptions={pageOptions}
          onBack={() => setView('pages')}
          savePage={savePage}
          dirty={dirty}
          onOpenLocale={loadPage}
          onTranslate={translatePageLocale}
          translatingLang={translatingLang}
          onIngestPdf={ingestPdf}
          onMigratePage={setMigratePageTarget}
        />
      )}

      {view === 'menu' && (
        <MenuBuilder
          menuDraft={menuDraft}
          updateMenu={updateMenu}
          pages={pageOptions}
          saveMenu={saveMenu}
          onOpenPage={loadPage}
          onOpenPages={() => setView('pages')}
          onOpenChanges={() => setView('changes')}
        />
      )}

      {view === 'changes' && (
        <ChangesPanel
          changePackage={changePackage}
          packagesData={packagesData}
          packageDiff={packageDiff}
          packageBusy={packageBusy}
          authorName={authorName}
          setAuthorName={setAuthorName}
          onStartPackage={startChangePackage}
          onSubmitPackage={submitChangePackage}
          onPublishPackage={publishChangePackage}
          onAbandonPackage={abandonChangePackage}
          onLoadDiff={loadPackageDiff}
          onRefresh={loadChangePackages}
          onOpenPages={() => setView('pages')}
          onOpenMenu={() => setView('menu')}
        />
      )}

      {migratePageTarget && (
        <MigratePageModal
          page={migratePageTarget}
          menu={site?.menu || []}
          onClose={() => setMigratePageTarget(null)}
          onConfirm={(placement) => migratePageSection(migratePageTarget, placement)}
        />
      )}
    </div>
  )
}

function PagesDashboard({ sections, query, setQuery, site, onOpenPage, onCreatePage, onOpenMenu, onOpenChanges, onTranslate, translatingLang, onMigratePage }) {
  const [selectedCategory, setSelectedCategory] = useState('All pages')
  const allRows = flattenPageSections(sections)
  const selectedSection = sections.find((section) => section.title === selectedCategory)
  const rows = selectedCategory === 'All pages' || !selectedSection ? allRows : flattenPageSections([selectedSection])

  return (
    <main className="enterprise-layout">
      <aside className="side-nav">
        <WorkspaceSideNav active="pages" onOpenPages={() => {}} onOpenMenu={onOpenMenu} onOpenChanges={onOpenChanges} />
        <div className="side-nav-header">
          <h2>Pages</h2>
          <span>{site?.stats?.pageCount || 0}</span>
        </div>
        <label className="search-field">
          <Search size={16} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search pages" />
        </label>
        <nav className="category-nav" aria-label="Page categories">
          <button className={selectedCategory === 'All pages' ? 'active' : ''} type="button" onClick={() => setSelectedCategory('All pages')}>
            <span>All pages</span>
            <strong>{allRows.length}</strong>
          </button>
          {sections.map((section) => (
            <button
              className={selectedCategory === section.title ? 'active' : ''}
              type="button"
              key={section.title}
              onClick={() => setSelectedCategory(section.title)}
            >
              <span>{section.title}</span>
              <strong>{section.count}</strong>
            </button>
          ))}
        </nav>
      </aside>

      <section className="work-area">
        <header className="work-header">
          <div>
            <h2>{selectedCategory}</h2>
            <p>
              {rows.length} pages
              {selectedCategory !== 'All pages' ? ` in ${selectedCategory}` : ''}. Click a row to edit.
            </p>
          </div>
          <button className="primary" type="button" onClick={onCreatePage}>
            <FilePlus2 size={16} />
            New page
          </button>
        </header>
        <PageTable rows={rows} onOpenPage={onOpenPage} onTranslate={onTranslate} translatingLang={translatingLang} onMigratePage={onMigratePage} />
      </section>
    </main>
  )
}

function PageTable({ rows, onOpenPage, onTranslate, translatingLang, onMigratePage }) {
  return (
    <div className="table-shell">
      <table className="data-table">
        <thead>
          <tr>
            <th>Page</th>
            <th>Category</th>
            <th>Type</th>
            <th>Languages</th>
            <th>Product</th>
            <th>Status</th>
            <th aria-label="Actions" />
          </tr>
        </thead>
        <tbody>
          {rows.map((page) => {
            const product = page.menu?.menuItem?.product
            return (
              <tr key={page.path} onClick={() => onOpenPage(page.path)}>
                <td>
                  <button className="table-title" type="button" onClick={() => onOpenPage(page.path)}>
                    <span>{pageTitle(page)}</span>
                    <small>{page.description || page.path}</small>
                  </button>
                </td>
                <td>
                  <span>{page._section}</span>
                  <small>{page._subgroup}</small>
                </td>
                <td>{page.layout || page.frontmatter?.layout || 'docs'}</td>
                <td onClick={(event) => event.stopPropagation()}>
                  <LanguageSummary page={page} onOpenPage={onOpenPage} onTranslate={onTranslate} translatingLang={translatingLang} />
                </td>
                <td>{product ? <span className={`status-pill badge-${product}`}>{product}</span> : <span className="muted">None</span>}</td>
                <td>{page.inMenu ? <span className="status-pill">In menu</span> : <span className="status-pill quiet">Unlisted</span>}</td>
                <td onClick={(event) => event.stopPropagation()}>
                  <button
                    className="icon-only"
                    type="button"
                    title="Move to another section"
                    onClick={() => onMigratePage(page)}
                  >
                    <FolderTree size={15} />
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function LanguageSummary({ page, onOpenPage, onTranslate, translatingLang }) {
  const [open, setOpen] = useState(false)
  const group = page.translationGroup || {}
  const count = group.translationCount || group.availableLocales?.length || 1
  const total = LANGUAGES.length
  const missing = LANGUAGES.filter((lang) => !group.locales?.[lang.code])
  const outdated = (group.translations || []).filter((item) => item.outdated)

  return (
    <div className="language-summary">
      <button className="language-count-pill" type="button" onClick={() => setOpen((value) => !value)}>
        <Languages size={14} />
        {count}/{total}
        {outdated.length > 0 && <span className="language-warning-dot" title="Outdated translations" />}
      </button>
      {open && (
        <div className="language-popover">
          {LANGUAGES.map((lang) => {
            const entry = group.locales?.[lang.code]
            return (
              <div className="language-popover-row" key={lang.code}>
                <div>
                  <strong>{lang.label}</strong>
                  <small>{entry ? formatLocaleDate(entry.updatedAt) : 'Not translated'}</small>
                  {entry && group.translations?.find((item) => item.code === lang.code)?.outdated && (
                    <span className="language-outdated">Outdated</span>
                  )}
                </div>
                {entry ? (
                  <button type="button" onClick={() => onOpenPage(entry.path)}>
                    Open
                  </button>
                ) : lang.code === DEFAULT_LOCALE ? (
                  <button type="button" onClick={() => onOpenPage(page.path)}>
                    Open
                  </button>
                ) : (
                  <button
                    type="button"
                    className={translatingLang === lang.code ? 'translating' : ''}
                    disabled={Boolean(translatingLang)}
                    onClick={() => onTranslate(lang.code, { save: true, sourcePagePath: page.path })}
                  >
                    {translatingLang === lang.code ? (
                      <>
                        <LoaderCircle size={14} className="spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles size={14} />
                        Add
                      </>
                    )}
                  </button>
                )}
              </div>
            )
          })}
          {missing.length > 0 && (
            <p className="language-popover-hint">English is the source for AI translations.</p>
          )}
        </div>
      )}
    </div>
  )
}

function PageEditor({
  page,
  site,
  frontmatter,
  updateFrontmatter,
  docPath,
  setDocPath,
  body,
  setBody,
  mode,
  setMode,
  assets,
  assetQuery,
  setAssetQuery,
  uploadAssets,
  replaceImage,
  pageOptions,
  onBack,
  savePage,
  dirty,
  onOpenLocale,
  onTranslate,
  translatingLang,
  onIngestPdf,
  onMigratePage,
}) {
  const [imageDialog, setImageDialog] = useState(null)
  const [linkDialog, setLinkDialog] = useState(null)
  const [tableDialog, setTableDialog] = useState(null)
  const [addLangOpen, setAddLangOpen] = useState(false)
  const documentEditorRef = useRef(null)
  const prevTranslatingLang = useRef(null)

  useEffect(() => {
    if (prevTranslatingLang.current && !translatingLang) {
      setAddLangOpen(false)
    }
    prevTranslatingLang.current = translatingLang
  }, [translatingLang])
  const canonicalPath = page.canonicalPath || getCanonical(page.path)
  const listPage = site?.pages?.find((item) => item.canonicalPath === canonicalPath) || page
  const translationGroup = listPage.translationGroup || page.translationGroup || {}

  function insertImageAtCursor(asset, options = {}) {
    const caption = options.caption?.trim() || asset.name.replace(/\.[^.]+$/, '')
    const snippet = imageSnippet(asset, caption)
    documentEditorRef.current?.insertMarkdown(snippet)
    setMode('rendered')
  }

  function insertLinkAtCursor(payload) {
    const snippet = buildLinkMarkdown(payload)
    if (!snippet) return
    documentEditorRef.current?.insertMarkdown(snippet)
    setMode('rendered')
  }

  function saveLink(payload) {
    if (linkDialog?.mode === 'edit') {
      setBody((current) =>
        replaceLinkAt(current, { kind: linkDialog.linkKind, index: Number(linkDialog.index) }, payload),
      )
      setMode('rendered')
    } else {
      insertLinkAtCursor(payload)
    }
    setLinkDialog(null)
  }

  function editLink({ kind, index, liquid, text, url }) {
    if (kind === 'card') {
      const attrs = parseLiquidAttrs(decodeEditorLiquid(liquid || ''))
      setLinkDialog({
        mode: 'edit',
        linkKind: 'card',
        index: Number(index),
        text: attrs.title || '',
        url: attrs.url || '',
        format: 'card',
        subtitle: attrs.subtitle || 'Microshare Documentation',
        icon: attrs.icon || 'link',
      })
      return
    }
    setLinkDialog({
      mode: 'edit',
      linkKind: 'inline',
      index: Number(index),
      text: text || '',
      url: url || '',
      format: 'inline',
      subtitle: 'Microshare Documentation',
      icon: 'link',
    })
  }

  function removeLink({ kind, index }) {
    if (!window.confirm('Remove this link from the page?')) return
    setBody((current) => removeLinkAt(current, { kind, index: Number(index) }))
    setMode('rendered')
  }

  function prepareInsert() {
    documentEditorRef.current?.saveSelection()
  }

  function insertAtCursor(snippet) {
    if (!String(snippet || '').trim()) return
    documentEditorRef.current?.insertMarkdown(snippet)
    setMode('rendered')
  }

  function saveTable(preview) {
    const snippet = String(preview || '').trim()
    if (!snippet) return
    if (tableDialog?.mode === 'edit') {
      setBody((current) => replaceTableAt(current, Number(tableDialog.index), snippet))
      setMode('rendered')
    } else {
      insertAtCursor(`\n${snippet}\n`)
    }
    setTableDialog(null)
  }

  function editTable(tableIndex) {
    const blocks = findMarkdownTableBlocks(body)
    const block = blocks[Number(tableIndex)]
    if (!block) return
    const cells = parseMarkdownTableCells(block.lines, block.headerRow)
    setTableDialog({
      mode: 'edit',
      index: Number(tableIndex),
      rowCount: cells.length,
      colCount: cells[0]?.length || 1,
      headerRow: block.headerRow,
      cells,
    })
  }

  function removeTable(tableIndex) {
    if (!window.confirm('Remove this table from the page?')) return
    setBody((current) => removeTableAt(current, Number(tableIndex)))
    setMode('rendered')
  }

  function removeImage(imageIndex) {
    if (!window.confirm('Remove this image from the page?')) return
    setBody((current) => removeImageIncludeAt(current, Number(imageIndex)))
    setMode('rendered')
  }

  function openImageEditor(encodedLiquid, imageIndex) {
    const liquid = decodeEditorLiquid(encodedLiquid)
    setAssetQuery('')
    setImageDialog({
      kind: 'replace',
      imageIndex,
      liquid,
      attrs: parseLiquidAttrs(liquid),
    })
  }

  function openImageInsert() {
    documentEditorRef.current?.saveSelection()
    setAssetQuery('')
    setImageDialog({ kind: 'insert', attrs: {} })
  }

  function selectImage(asset, options = {}) {
    if (imageDialog?.kind === 'replace') {
      replaceImage(imageDialog, asset, options)
    } else {
      insertImageAtCursor(asset, options)
    }
    setImageDialog(null)
  }

  return (
    <main className="editor-screen">
      <div className="editor-workspace">
        <div className="editor-primary">
          <section className="editor-header">
            <button type="button" onClick={onBack}>
              <ArrowLeft size={16} />
              Pages
            </button>
            <div className="editor-header-main">
              <span className="eyebrow">Editing page</span>
              <h2>{frontmatter.title || 'Untitled page'}</h2>
              <p>{frontmatter.description || 'Add a clear one-line description for this page.'}</p>
              <LanguageSwitcher
                currentPath={docPath}
                translationGroup={translationGroup}
                onOpenLocale={onOpenLocale}
                onTranslate={onTranslate}
                translatingLang={translatingLang}
                addLangOpen={addLangOpen}
                setAddLangOpen={setAddLangOpen}
              />
            </div>
            <button className="primary" type="button" onClick={savePage}>
              <Save size={16} />
              Save page
            </button>
          </section>

          <article className="document-panel">
            <PageDetails frontmatter={frontmatter} updateFrontmatter={updateFrontmatter} docPath={docPath} setDocPath={setDocPath} />
            <DocumentEditor
              ref={documentEditorRef}
              markdown={body}
              onChange={setBody}
              mode={mode}
              setMode={setMode}
              onEditImage={openImageEditor}
              onRemoveImage={removeImage}
              onEditLink={editLink}
              onRemoveLink={removeLink}
              onEditTable={editTable}
              onRemoveTable={removeTable}
            />
          </article>
        </div>

        <aside className="editor-aside">
          <EditorAssistant
            onAddImage={openImageInsert}
            onPrepareInsert={prepareInsert}
            onInsertAtCursor={insertAtCursor}
            onOpenLinkInsert={() => setLinkDialog({ mode: 'insert' })}
            onOpenTableInsert={() => setTableDialog({ mode: 'insert' })}
            savePage={savePage}
            dirty={dirty}
            pages={pageOptions}
            menu={site?.menu || []}
            onIngestPdf={onIngestPdf}
            currentLocale={getLocaleFromPath(docPath)}
            onRegenerate={() => {
              const locale = getLocaleFromPath(docPath)
              if (locale !== DEFAULT_LOCALE) onTranslate(locale, { save: true, regenerate: true })
            }}
            translatingLang={translatingLang}
            onMigratePage={() => onMigratePage(listPage)}
          />
        </aside>
      </div>

      {linkDialog && (
        <LinkInsertModal
          pages={pageOptions}
          menu={site?.menu || []}
          initial={linkDialog.mode === 'edit' ? linkDialog : null}
          onClose={() => setLinkDialog(null)}
          onInsert={saveLink}
        />
      )}

      {tableDialog && (
        <TableInsertModal
          initial={tableDialog.mode === 'edit' ? tableDialog : null}
          onClose={() => setTableDialog(null)}
          onInsert={saveTable}
        />
      )}

      {imageDialog && (
        <ImageLibraryModal
          assets={assets}
          query={assetQuery}
          setQuery={setAssetQuery}
          imageRef={imageDialog}
          onClose={() => setImageDialog(null)}
          onSelect={selectImage}
          onUpload={uploadAssets}
        />
      )}
    </main>
  )
}

function PageDetails({ frontmatter, updateFrontmatter, docPath, setDocPath }) {
  return (
    <section className="page-details">
      <label>
        Page title
        <input value={frontmatter.title || ''} onChange={(event) => updateFrontmatter('title', event.target.value)} />
      </label>
      <label>
        Description
        <input value={frontmatter.description || ''} onChange={(event) => updateFrontmatter('description', event.target.value)} />
      </label>
      <label>
        Page type
        <select value={frontmatter.layout || 'docs'} onChange={(event) => updateFrontmatter('layout', event.target.value)}>
          <option value="docs">Article</option>
          <option value="pdf_viewer">PDF viewer</option>
          <option value="iframe">Embedded app</option>
          <option value="release-notes">Release notes</option>
          <option value="index">Index page</option>
          <option value="api">API page</option>
          <option value="generic_rest_api">REST API page</option>
          <option value="demo">Demo page</option>
        </select>
      </label>
      {(frontmatter.layout === 'docs' || frontmatter.layout === 'pdf_viewer') && (
        <label>
          PDF URL
          <input
            value={frontmatter.pdf || ''}
            onChange={(event) => updateFrontmatter('pdf', event.target.value)}
            placeholder={frontmatter.layout === 'docs' ? 'Optional — append ?view=pdf to the page URL' : ''}
          />
        </label>
      )}
      {frontmatter.layout === 'iframe' && (
        <label>
          Embed URL
          <input value={frontmatter.src || ''} onChange={(event) => updateFrontmatter('src', event.target.value)} />
        </label>
      )}
      <details className="advanced-details">
        <summary>Advanced page settings</summary>
        <label>
          Local file
          <input value={docPath} onChange={(event) => setDocPath(event.target.value)} />
        </label>
        <label className="checkbox-line">
          <input type="checkbox" checked={Boolean(frontmatter.toc)} onChange={(event) => updateFrontmatter('toc', event.target.checked)} />
          Show table of contents
        </label>
        <label className="checkbox-line">
          <input type="checkbox" checked={Boolean(frontmatter.embed)} onChange={(event) => updateFrontmatter('embed', event.target.checked)} />
          Embed mode
        </label>
      </details>
    </section>
  )
}

const DocumentEditor = forwardRef(function DocumentEditor(
  { markdown, onChange, mode, setMode, onEditImage, onRemoveImage, onEditLink, onRemoveLink, onEditTable, onRemoveTable },
  ref,
) {
  const renderedRef = useRef(null)
  const textareaRef = useRef(null)

  useImperativeHandle(
    ref,
    () => ({
      saveSelection() {
        if (mode === 'rendered' && renderedRef.current) {
          saveEditorSelection(renderedRef.current)
        }
      },
      insertMarkdown(snippet) {
        insertMarkdownAtCursor({
          mode,
          renderedEl: renderedRef.current,
          textareaEl: textareaRef.current,
          markdown: snippet,
          currentMarkdown: markdown,
          onChange,
        })
      },
    }),
    [mode, markdown, onChange],
  )

  return (
    <section className="document-editor">
      <div className="editor-toolbar">
        <div>
          <button className={mode === 'rendered' ? 'active' : ''} type="button" onClick={() => setMode('rendered')}>
            <FileText size={16} />
            Rendered
          </button>
          <button className={mode === 'raw' ? 'active' : ''} type="button" onClick={() => setMode('raw')}>
            <Code size={16} />
            Raw markdown
          </button>
        </div>
      </div>
      {mode === 'raw' ? (
        <textarea
          ref={textareaRef}
          className="raw-document"
          value={markdown}
          onChange={(event) => onChange(event.target.value)}
          spellCheck={false}
        />
      ) : (
        <RenderedMarkdownEditor
          ref={renderedRef}
          markdown={markdown}
          onChange={onChange}
          onEditImage={onEditImage}
          onRemoveImage={onRemoveImage}
          onEditLink={onEditLink}
          onRemoveLink={onRemoveLink}
          onEditTable={onEditTable}
          onRemoveTable={onRemoveTable}
        />
      )}
    </section>
  )
})

const RenderedMarkdownEditor = forwardRef(function RenderedMarkdownEditor(
  { markdown, onChange, onEditImage, onRemoveImage, onEditLink, onRemoveLink, onEditTable, onRemoveTable },
  ref,
) {
  const localRef = useRef(null)
  const editorRef = ref || localRef

  useEffect(() => {
    if (!editorRef.current || document.activeElement === editorRef.current) return
    editorRef.current.innerHTML = renderEditorMarkdown(markdown || '')
  }, [markdown, editorRef])

  function run(command, value = null) {
    editorRef.current?.focus()
    document.execCommand(command, false, value)
    if (editorRef.current) onChange(htmlToMarkdown(editorRef.current.innerHTML))
  }

  function insertLink() {
    const url = window.prompt('Paste the link URL')
    if (url) run('createLink', url)
  }

  function handleClick(event) {
    const removeTableButton = event.target.closest?.('[data-table-remove="true"]')
    if (removeTableButton) {
      const host = removeTableButton.closest('[data-table-index]')
      if (!host?.dataset?.tableIndex) return
      event.preventDefault()
      event.stopPropagation()
      onRemoveTable?.(host.dataset.tableIndex)
      return
    }

    const editTableButton = event.target.closest?.('[data-table-edit="true"]')
    if (editTableButton) {
      const host = editTableButton.closest('[data-table-index]')
      if (!host?.dataset?.tableIndex) return
      event.preventDefault()
      event.stopPropagation()
      onEditTable?.(host.dataset.tableIndex)
      return
    }

    const removeLinkButton = event.target.closest?.('[data-link-remove="true"]')
    if (removeLinkButton) {
      const host = removeLinkButton.closest('[data-link-kind]')
      if (!host?.dataset?.linkIndex) return
      event.preventDefault()
      event.stopPropagation()
      onRemoveLink?.({
        kind: host.dataset.linkKind,
        index: host.dataset.linkIndex,
      })
      return
    }

    const editLinkButton = event.target.closest?.('[data-link-edit="true"]')
    if (editLinkButton) {
      const host = editLinkButton.closest('[data-link-kind]')
      if (!host?.dataset?.linkIndex) return
      event.preventDefault()
      event.stopPropagation()
      const anchor = host.querySelector('a')
      onEditLink?.({
        kind: host.dataset.linkKind,
        index: host.dataset.linkIndex,
        liquid: host.dataset.liquid,
        text: anchor?.textContent?.trim(),
        url: anchor?.getAttribute('href') || '',
      })
      return
    }

    const removeButton = event.target.closest?.('[data-image-remove="true"]')
    if (removeButton) {
      const figure = removeButton.closest('.liquid-image')
      if (!figure?.dataset?.liquidIndex) return
      event.preventDefault()
      event.stopPropagation()
      onRemoveImage?.(figure.dataset.liquidIndex)
      return
    }

    const button = event.target.closest?.('[data-image-edit="true"]')
    if (!button) return
    const figure = button.closest('.liquid-image')
    if (!figure?.dataset?.liquid) return
    event.preventDefault()
    event.stopPropagation()
    onEditImage?.(figure.dataset.liquid, figure.dataset.liquidIndex)
  }

  return (
    <div className="rendered-editor-shell">
      <div className="mini-toolbar">
        <button type="button" title="Heading" onClick={() => run('formatBlock', 'h2')}>
          <Heading2 size={15} />
        </button>
        <button type="button" title="Bold" onClick={() => run('bold')}>
          <Bold size={15} />
        </button>
        <button type="button" title="Italic" onClick={() => run('italic')}>
          <Italic size={15} />
        </button>
        <button type="button" title="Bullet list" onClick={() => run('insertUnorderedList')}>
          <List size={15} />
        </button>
        <button type="button" title="Quote" onClick={() => run('formatBlock', 'blockquote')}>
          <Quote size={15} />
        </button>
        <button type="button" title="Link" onClick={insertLink}>
          <Link size={15} />
        </button>
      </div>
      <div
        ref={editorRef}
        className="rendered-document markdown-body"
        contentEditable
        suppressContentEditableWarning
        onClick={handleClick}
        onInput={(event) => onChange(htmlToMarkdown(event.currentTarget.innerHTML))}
      />
    </div>
  )
})

function LanguageSwitcher({ currentPath, translationGroup, onOpenLocale, onTranslate, translatingLang, addLangOpen, setAddLangOpen }) {
  const currentLocale = getLocaleFromPath(currentPath)
  const locales = translationGroup?.locales || {}
  const isTranslating = Boolean(translatingLang)

  return (
    <div className={`language-switcher${isTranslating ? ' is-translating' : ''}`}>
      {LANGUAGES.map((lang) => {
        const entry = locales[lang.code]
        const active = currentLocale === lang.code
        const generating = translatingLang === lang.code
        if (!entry && lang.code !== DEFAULT_LOCALE && !generating) return null
        const targetPath =
          entry?.path || (lang.code === DEFAULT_LOCALE ? translationGroup?.canonicalPath || currentPath : null)
        return (
          <button
            key={lang.code}
            className={[active ? 'active' : '', generating ? 'translating' : ''].filter(Boolean).join(' ')}
            type="button"
            disabled={isTranslating}
            title={generating ? 'Generating translation...' : entry ? formatLocaleDate(entry.updatedAt) : 'English source'}
            onClick={() => targetPath && onOpenLocale(targetPath)}
          >
            {generating ? (
              <>
                <LoaderCircle size={12} className="spin" />
                {lang.code.toUpperCase()}
                <small>Generating...</small>
              </>
            ) : (
              <>
                {lang.code.toUpperCase()}
                {entry && <small>{formatLocaleDate(entry.updatedAt)}</small>}
              </>
            )}
          </button>
        )
      })}
      <div className="language-add-wrap">
        <button type="button" disabled={isTranslating} onClick={() => setAddLangOpen((value) => !value)}>
          <Plus size={14} />
          Add language
        </button>
        {addLangOpen && (
          <div className="language-add-menu">
            {LANGUAGES.filter((lang) => lang.code !== DEFAULT_LOCALE && !locales[lang.code]).map((lang) => {
              const generating = translatingLang === lang.code
              return (
                <button
                  key={lang.code}
                  type="button"
                  className={generating ? 'translating' : ''}
                  disabled={isTranslating}
                  onClick={() => onTranslate(lang.code, { save: true })}
                >
                  {generating ? (
                    <>
                      <LoaderCircle size={14} className="spin" />
                      Generating {lang.label}...
                    </>
                  ) : (
                    <>
                      <Sparkles size={14} />
                      {lang.label}
                    </>
                  )}
                </button>
              )
            })}
            {LANGUAGES.filter((lang) => lang.code !== DEFAULT_LOCALE && !locales[lang.code]).length === 0 && (
              <p>All supported languages exist for this page.</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function EditorAssistant({
  onAddImage,
  onPrepareInsert,
  onInsertAtCursor,
  onOpenLinkInsert,
  onOpenTableInsert,
  savePage,
  dirty,
  pages,
  menu,
  onIngestPdf,
  currentLocale,
  onRegenerate,
  translatingLang,
  onMigratePage,
}) {
  const [youtubeModalOpen, setYoutubeModalOpen] = useState(false)
  const [pdfImportMode, setPdfImportMode] = useState(null)

  function openInsertModal(setOpen) {
    onPrepareInsert?.()
    setOpen(true)
  }

  return (
    <div className="editor-helper">
      <section className="helper-section">
        <h3>Insert</h3>
        <p className="helper-hint">Place the cursor in the content, then insert.</p>
        <div className="helper-actions">
          <button type="button" onClick={onAddImage}>
            <ImageIcon size={16} />
            Add image at cursor
          </button>
          <button
            type="button"
            onClick={() => {
              onPrepareInsert?.()
              onOpenLinkInsert?.()
            }}
          >
            <Link size={16} />
            Add link
          </button>
          <button
            type="button"
            onClick={() => {
              onPrepareInsert?.()
              onOpenTableInsert?.()
            }}
          >
            <Table2 size={16} />
            Add table
          </button>
          <button type="button" onClick={() => openInsertModal(setYoutubeModalOpen)}>
            <Video size={16} />
            Add YouTube video
          </button>
        </div>
      </section>

      <section className="helper-section">
        <h3>Import from PDF</h3>
        <p>Use AI to extract content from a ScribeHow or documentation PDF.</p>
        <div className="helper-actions">
          <button type="button" onClick={() => setPdfImportMode('replace')}>
            <Upload size={16} />
            Replace content with PDF
          </button>
          <button type="button" onClick={() => setPdfImportMode('append')}>
            <FilePlus2 size={16} />
            Add PDF content
          </button>
        </div>
      </section>

      {youtubeModalOpen && (
        <YoutubeInsertModal
          onClose={() => setYoutubeModalOpen(false)}
          onInsert={(snippet) => {
            onInsertAtCursor(snippet)
            setYoutubeModalOpen(false)
          }}
        />
      )}

      {pdfImportMode && (
        <PdfImportModal
          mode={pdfImportMode}
          onClose={() => setPdfImportMode(null)}
          onIngest={onIngestPdf}
        />
      )}

      {currentLocale !== DEFAULT_LOCALE && (
        <section className="helper-section">
          <h3>Translation</h3>
          <p>Regenerate this locale from the current English version.</p>
          <button
            type="button"
            className={translatingLang === currentLocale ? 'translating' : ''}
            disabled={Boolean(translatingLang)}
            onClick={onRegenerate}
          >
            {translatingLang === currentLocale ? (
              <>
                <LoaderCircle size={16} className="spin" />
                Generating translation...
              </>
            ) : (
              <>
                <RefreshCcw size={16} />
                Regenerate translation
              </>
            )}
          </button>
        </section>
      )}

      <section className="helper-section">
        <h3>Page actions</h3>
        <p>Move this page and all translations to another menu section.</p>
        <button type="button" onClick={onMigratePage}>
          <FolderTree size={16} />
          Move to section
        </button>
      </section>

      <section className="helper-section publish-section">
        <h3>Saving</h3>
        <p>{dirty ? 'This page has unsaved edits.' : 'This page is saved on disk.'}</p>
        <button className="primary" type="button" onClick={savePage}>
          <Save size={16} />
          Save page
        </button>
        <p className="helper-hint">To publish online, use the Changes section to start a change package, then submit and approve.</p>
      </section>
    </div>
  )
}

const LINK_ICON_OPTIONS = [
  { value: 'wrench', label: 'Wrench' },
  { value: 'check-circle', label: 'Check circle' },
  { value: 'id-card', label: 'ID card' },
  { value: 'edit', label: 'Edit' },
  { value: 'chart-bar', label: 'Chart' },
  { value: 'link', label: 'Link' },
  { value: 'book', label: 'Book' },
  { value: 'cog', label: 'Settings' },
]

function menuLogoForPage(page, menu) {
  const groupTitle = page?.menu?.groupTitle
  const group = (menu || []).find((item) => item.title === groupTitle)
  return group?.logo || 'link'
}

function LinkInsertModal({ pages, menu, onClose, onInsert, initial = null }) {
  const isEdit = initial?.mode === 'edit'
  const [pageLinkQuery, setPageLinkQuery] = useState(initial?.text || '')
  const [linkText, setLinkText] = useState(initial?.text || '')
  const [linkUrl, setLinkUrl] = useState(initial?.url || '')
  const [linkSubtitle, setLinkSubtitle] = useState(initial?.subtitle || 'Microshare Documentation')
  const [linkIcon, setLinkIcon] = useState(initial?.icon || 'link')
  const [linkFormat, setLinkFormat] = useState(initial?.format || 'inline')

  const linkablePages = useMemo(() => {
    const text = pageLinkQuery.trim().toLowerCase()
    return (pages || [])
      .filter((item) => item.exists !== false)
      .filter((item) => {
        if (!text) return true
        return `${pageTitle(item)} ${item.path} ${item.url || ''}`.toLowerCase().includes(text)
      })
      .slice(0, 40)
  }, [pages, pageLinkQuery])

  function selectPageLink(path) {
    const selected = (pages || []).find((item) => item.path === path)
    if (!selected) return
    setLinkUrl(selected.url || filePathToUrl(selected.path))
    if (!linkText.trim()) setLinkText(pageTitle(selected))
    setPageLinkQuery(pageTitle(selected))
    setLinkIcon(menuLogoForPage(selected, menu))
  }

  function resolvePageFromSearch() {
    const query = pageLinkQuery.trim().toLowerCase()
    if (!query) return
    const selected =
      (pages || []).find((item) => pageTitle(item).toLowerCase() === query) ||
      (pages || []).find((item) => item.path.toLowerCase().includes(query))
    if (selected) selectPageLink(selected.path)
  }

  function submit(event) {
    event.preventDefault()
    if (!linkUrl.trim()) return
    onInsert({
      text: linkText,
      url: linkUrl,
      format: linkFormat,
      subtitle: linkSubtitle,
      icon: linkIcon,
    })
  }

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="image-modal link-insert-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="link-insert-title"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="modal-header">
          <div>
            <span className="eyebrow">{isEdit ? 'Edit link' : 'Insert link'}</span>
            <h3 id="link-insert-title">{isEdit ? 'Edit link' : 'Add link at cursor'}</h3>
            <p className="modal-lead">Choose a page or paste any URL, then pick inline text or a card button.</p>
          </div>
          <button className="icon-only" type="button" title="Close" onClick={onClose}>
            <X size={16} />
          </button>
        </header>

        <form className="link-insert-form" onSubmit={submit}>
          <label>
            Link to page
            <input
              value={pageLinkQuery}
              onChange={(event) => setPageLinkQuery(event.target.value)}
              onBlur={resolvePageFromSearch}
              placeholder="Search pages..."
              list="link-insert-page-links"
            />
            <datalist id="link-insert-page-links">
              {linkablePages.map((item) => (
                <option key={item.path} value={pageTitle(item)}>
                  {item.path}
                </option>
              ))}
            </datalist>
          </label>

          <label>
            Link text
            <input value={linkText} onChange={(event) => setLinkText(event.target.value)} placeholder="Display text" />
          </label>

          <label>
            URL
            <input value={linkUrl} onChange={(event) => setLinkUrl(event.target.value)} placeholder="/docs/2/... or https://..." />
          </label>

          <fieldset className="link-format-fieldset">
            <legend>Format</legend>
            <div className="link-format-options">
              <label className={`link-format-option${linkFormat === 'inline' ? ' active' : ''}`}>
                <input
                  type="radio"
                  name="link-format"
                  value="inline"
                  checked={linkFormat === 'inline'}
                  onChange={() => setLinkFormat('inline')}
                />
                <span>
                  <strong>Inline text</strong>
                  <small>Standard markdown link in the sentence flow.</small>
                </span>
              </label>
              <label className={`link-format-option${linkFormat === 'card' ? ' active' : ''}`}>
                <input
                  type="radio"
                  name="link-format"
                  value="card"
                  checked={linkFormat === 'card'}
                  onChange={() => setLinkFormat('card')}
                />
                <span>
                  <strong>Card button</strong>
                  <small>Large linked card with icon, like the docs index tiles.</small>
                </span>
              </label>
            </div>
          </fieldset>

          {linkFormat === 'card' && (
            <>
              <label>
                Card subtitle
                <input value={linkSubtitle} onChange={(event) => setLinkSubtitle(event.target.value)} placeholder="Microshare Documentation" />
              </label>
              <label>
                Icon
                <select value={linkIcon} onChange={(event) => setLinkIcon(event.target.value)}>
                  {LINK_ICON_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <div className="link-card-preview">
                <span className="migrate-label">Preview</span>
                <a className="liquid-link-card" href={linkUrl || '#'} onClick={(event) => event.preventDefault()}>
                  <span className="liquid-link-card-icon">
                    <i className={`far fa-${linkIcon}`} />
                  </span>
                  <span className="liquid-link-card-body">
                    <strong>{linkText || 'Link title'}</strong>
                    <small>{linkSubtitle || 'Microshare Documentation'}</small>
                  </span>
                </a>
              </div>
            </>
          )}

          <div className="migrate-actions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button className="primary" type="submit" disabled={!linkUrl.trim()}>
              <Link size={16} />
              {isEdit ? 'Save link' : 'Insert link'}
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

function TableInsertModal({ onClose, onInsert, initial = null }) {
  const isEdit = initial?.mode === 'edit'
  const [rowCount, setRowCount] = useState(initial?.rowCount ?? 3)
  const [colCount, setColCount] = useState(initial?.colCount ?? 3)
  const [headerRow, setHeaderRow] = useState(initial?.headerRow ?? true)
  const [cells, setCells] = useState(() => initial?.cells ?? createEmptyTable(3, 3, true))

  function updateDimensions(nextRows, nextCols) {
    const rows = Math.min(12, Math.max(1, Number(nextRows) || 1))
    const cols = Math.min(8, Math.max(1, Number(nextCols) || 1))
    setRowCount(rows)
    setColCount(cols)
    setCells((current) => resizeTableCells(current, rows, cols, headerRow))
  }

  function updateCell(rowIndex, colIndex, value) {
    setCells((current) =>
      current.map((row, r) => (r === rowIndex ? row.map((cell, c) => (c === colIndex ? value : cell)) : row)),
    )
  }

  function toggleHeaderRow(checked) {
    setHeaderRow(checked)
    setCells((current) => {
      const next = current.map((row) => [...row])
      if (checked && next[0]) {
        next[0] = next[0].map((cell, index) => cell || `Column ${index + 1}`)
      }
      return next
    })
  }

  const preview = buildMarkdownTable(cells, { headerRow })

  function submit(event) {
    event.preventDefault()
    if (!preview.trim()) return
    onInsert(preview)
  }

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="image-modal table-insert-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="table-insert-title"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="modal-header">
          <div>
            <span className="eyebrow">{isEdit ? 'Edit table' : 'Insert table'}</span>
            <h3 id="table-insert-title">{isEdit ? 'Edit table' : 'Add table at cursor'}</h3>
            <p className="modal-lead">Configure the table size and cell content before inserting.</p>
          </div>
          <button className="icon-only" type="button" title="Close" onClick={onClose}>
            <X size={16} />
          </button>
        </header>

        <form className="table-insert-form" onSubmit={submit}>
          <div className="table-insert-controls">
            <label>
              Rows
              <input
                type="number"
                min="1"
                max="12"
                value={rowCount}
                onChange={(event) => updateDimensions(event.target.value, colCount)}
              />
            </label>
            <label>
              Columns
              <input
                type="number"
                min="1"
                max="8"
                value={colCount}
                onChange={(event) => updateDimensions(rowCount, event.target.value)}
              />
            </label>
            <label className="checkbox-line">
              <input type="checkbox" checked={headerRow} onChange={(event) => toggleHeaderRow(event.target.checked)} />
              First row is header
            </label>
          </div>

          <div className="table-insert-grid-wrap">
            <table className="table-insert-grid">
              <tbody>
                {cells.map((row, rowIndex) => (
                  <tr key={`row-${rowIndex}`}>
                    {row.map((cell, colIndex) => (
                      <td key={`cell-${rowIndex}-${colIndex}`}>
                        <input
                          value={cell}
                          onChange={(event) => updateCell(rowIndex, colIndex, event.target.value)}
                          placeholder={headerRow && rowIndex === 0 ? `Column ${colIndex + 1}` : 'Cell'}
                          aria-label={`Row ${rowIndex + 1}, column ${colIndex + 1}`}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="migrate-actions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button className="primary" type="submit">
              <Table2 size={16} />
              {isEdit ? 'Save table' : 'Insert table'}
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

function YoutubeInsertModal({ onClose, onInsert }) {
  const [videoUrl, setVideoUrl] = useState('')
  const [description, setDescription] = useState('')
  const embedUrl = useMemo(() => normalizeYoutubeEmbedUrl(videoUrl), [videoUrl])
  const snippet = useMemo(() => youtubeSnippet({ url: videoUrl, description }), [videoUrl, description])

  function submit(event) {
    event.preventDefault()
    if (!embedUrl || !snippet) return
    onInsert(`\n${snippet}\n`)
  }

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="image-modal youtube-insert-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="youtube-insert-title"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="modal-header">
          <div>
            <span className="eyebrow">Insert video</span>
            <h3 id="youtube-insert-title">Add YouTube video at cursor</h3>
            <p className="modal-lead">Paste a YouTube watch, Shorts, or embed URL.</p>
          </div>
          <button className="icon-only" type="button" title="Close" onClick={onClose}>
            <X size={16} />
          </button>
        </header>

        <form className="link-insert-form" onSubmit={submit}>
          <label>
            YouTube URL
            <input
              value={videoUrl}
              onChange={(event) => setVideoUrl(event.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
            />
          </label>
          <label>
            Description
            <input
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Optional caption for accessibility"
            />
          </label>

          {embedUrl ? (
            <div className="youtube-insert-preview">
              <span className="migrate-label">Preview</span>
              <div className="youtube-insert-frame">
                <iframe title="YouTube preview" src={embedUrl} allowFullScreen />
              </div>
            </div>
          ) : (
            videoUrl.trim() && <p className="migrate-warning">Enter a valid YouTube URL.</p>
          )}

          <div className="migrate-actions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button className="primary" type="submit" disabled={!embedUrl}>
              <Video size={16} />
              Insert video
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

function PdfImportModal({ mode, onClose, onIngest }) {
  const [busy, setBusy] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const fileInputRef = useRef(null)
  const isReplace = mode === 'replace'

  async function handleFile(file) {
    if (!file || file.type !== 'application/pdf') return
    setBusy(true)
    try {
      await onIngest(file, { mode })
      onClose()
    } finally {
      setBusy(false)
    }
  }

  function handleDrop(event) {
    event.preventDefault()
    setDragOver(false)
    const file = event.dataTransfer.files?.[0]
    handleFile(file)
  }

  return (
    <div className="modal-backdrop" role="presentation" onClick={busy ? undefined : onClose}>
      <section
        className="image-modal pdf-import-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pdf-import-title"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="modal-header">
          <div>
            <span className="eyebrow">Import from PDF</span>
            <h3 id="pdf-import-title">{isReplace ? 'Replace content with PDF' : 'Add PDF content'}</h3>
            <p className="modal-lead">
              {isReplace
                ? 'The current page content will be replaced with AI-extracted content from the PDF.'
                : 'PDF content will be appended to the end of the current page.'}
            </p>
          </div>
          <button className="icon-only" type="button" title="Close" disabled={busy} onClick={onClose}>
            <X size={16} />
          </button>
        </header>

        <div
          className={`pdf-drop-zone${dragOver ? ' drag-over' : ''}${busy ? ' busy' : ''}`}
          onDragOver={(event) => {
            event.preventDefault()
            setDragOver(true)
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
        >
          {busy ? (
            <>
              <LoaderCircle className="spin" size={28} />
              <span>Processing PDF with AI...</span>
              <small>This may take a minute.</small>
            </>
          ) : (
            <>
              <Upload size={28} />
              <span>Drag and drop a PDF here</span>
              <small>or</small>
              <button className="primary" type="button" onClick={() => fileInputRef.current?.click()}>
                Choose file
              </button>
            </>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="application/pdf"
            hidden
            onChange={(event) => {
              const file = event.target.files?.[0]
              handleFile(file)
              event.target.value = ''
            }}
          />
        </div>
      </section>
    </div>
  )
}

function MigratePageModal({ page, menu, onClose, onConfirm }) {
  const currentSection = page.inMenu ? page.menu?.groupTitle || 'Unlisted pages' : 'Unlisted pages'
  const currentSubgroup = page.inMenu ? page.menu?.subgroupTitle || 'Top level' : folderLabel(page.path)
  const availableGroups = useMemo(() => (menu || []).map((group) => group.title).filter(Boolean), [menu])
  const [targetGroupTitle, setTargetGroupTitle] = useState(
    availableGroups.find((title) => title !== currentSection) || availableGroups[0] || '',
  )
  const [targetSubgroupTitle, setTargetSubgroupTitle] = useState('Top level')
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    setTargetSubgroupTitle('Top level')
  }, [targetGroupTitle])

  const selectedGroup = (menu || []).find((group) => group.title === targetGroupTitle)
  const subgroupOptions = useMemo(() => {
    const titles = (selectedGroup?.subpages || []).map((subgroup) => subgroup.title).filter(Boolean)
    return ['Top level', ...titles]
  }, [selectedGroup])

  const canonicalPath = page.canonicalPath || getCanonical(page.path)
  const newPath = buildMigratedPath(canonicalPath, {
    groupTitle: targetGroupTitle,
    subgroupTitle: targetSubgroupTitle === 'Top level' ? '' : targetSubgroupTitle,
  })
  const translationCount = page.translationGroup?.translationCount || page.translationGroup?.availableLocales?.length || 1
  const sameSection =
    targetGroupTitle === currentSection &&
    (targetSubgroupTitle === 'Top level' ? currentSubgroup === 'Top level' : targetSubgroupTitle === currentSubgroup)

  async function submit(event) {
    event.preventDefault()
    if (!targetGroupTitle || sameSection) return
    const confirmed = window.confirm(
      `Move "${pageTitle(page)}" and ${translationCount} language file${translationCount === 1 ? '' : 's'} to ${targetGroupTitle}${
        targetSubgroupTitle && targetSubgroupTitle !== 'Top level' ? ` / ${targetSubgroupTitle}` : ''
      }?\n\nNew path: ${newPath}`,
    )
    if (!confirmed) return
    setBusy(true)
    try {
      await onConfirm({
        targetGroupTitle,
        targetSubgroupTitle: targetSubgroupTitle === 'Top level' ? '' : targetSubgroupTitle,
      })
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="image-modal migrate-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="migrate-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="modal-header">
          <div>
            <span className="eyebrow">Move page</span>
            <h3 id="migrate-modal-title">Move to another section</h3>
            <p className="modal-lead">
              Moves the English page, all translations, and the menu entry together.
            </p>
          </div>
          <button className="icon-only" type="button" title="Close" onClick={onClose}>
            <X size={16} />
          </button>
        </header>

        <form className="migrate-form" onSubmit={submit}>
          <div className="migrate-summary">
            <div>
              <span className="migrate-label">Page</span>
              <strong>{pageTitle(page)}</strong>
              <small>{page.path}</small>
            </div>
            <div>
              <span className="migrate-label">Current section</span>
              <strong>{currentSection}</strong>
              <small>{currentSubgroup}</small>
            </div>
            <div>
              <span className="migrate-label">Languages</span>
              <strong>{translationCount}</strong>
              <small>{(page.translationGroup?.availableLocales || [DEFAULT_LOCALE]).join(', ')}</small>
            </div>
          </div>

          <label>
            Target section
            <select value={targetGroupTitle} onChange={(event) => setTargetGroupTitle(event.target.value)} required>
              {availableGroups.map((title) => (
                <option key={title} value={title}>
                  {title}
                </option>
              ))}
            </select>
          </label>

          <label>
            Target subgroup
            <select value={targetSubgroupTitle} onChange={(event) => setTargetSubgroupTitle(event.target.value)}>
              {subgroupOptions.map((title) => (
                <option key={title} value={title}>
                  {title}
                </option>
              ))}
            </select>
          </label>

          <div className="migrate-preview">
            <span className="migrate-label">New file path</span>
            <code>{newPath || '—'}</code>
            {sameSection && <p className="migrate-warning">Choose a different section or subgroup.</p>}
          </div>

          <div className="migrate-actions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button className="primary" type="submit" disabled={busy || !targetGroupTitle || sameSection}>
              {busy ? <LoaderCircle size={16} className="spin" /> : <FolderTree size={16} />}
              Move page
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

function ImageLibraryModal({ assets, query, setQuery, imageRef, onClose, onSelect, onUpload }) {
  const [folder, setFolder] = useState('uploads')
  const [caption, setCaption] = useState(imageRef?.attrs?.description || '')
  const filteredAssets = useMemo(() => {
    const text = query.trim().toLowerCase()
    return (assets || []).filter((asset) => {
      if (!text) return true
      return `${asset.path} ${asset.name} ${asset.folder}`.toLowerCase().includes(text)
    })
  }, [assets, query])
  const currentUrl = imageRef?.attrs?.url ? normalizeAssetUrl(imageRef.attrs.url) : ''

  async function uploadAndUse(files) {
    const uploaded = await onUpload(files, folder)
    if (uploaded?.[0]) onSelect(uploaded[0], { caption })
  }

  return (
    <div className="modal-backdrop" role="presentation">
      <section className="image-modal" role="dialog" aria-modal="true" aria-labelledby="image-modal-title">
        <header className="modal-header">
          <div>
            <span className="eyebrow">{imageRef?.kind === 'replace' ? 'Edit image' : 'Add image'}</span>
            <h3 id="image-modal-title">{imageRef?.kind === 'replace' ? 'Choose a replacement image' : 'Choose an image to insert'}</h3>
          </div>
          <button className="icon-only" type="button" title="Close" onClick={onClose}>
            <X size={16} />
          </button>
        </header>

        {currentUrl && (
          <div className="current-image-preview">
            <img src={currentUrl} alt="" />
            <div>
              <strong>Current image</strong>
              <span>{imageRef.attrs.description || imageRef.attrs.url}</span>
            </div>
          </div>
        )}

        <div className="modal-tools">
          <label className="search-field">
            <Search size={16} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search available images" />
          </label>
          <label>
            Caption / alt text
            <input value={caption} onChange={(event) => setCaption(event.target.value)} placeholder="Use image filename by default" />
          </label>
          <div className="upload-row">
            <input value={folder} onChange={(event) => setFolder(event.target.value)} aria-label="Upload folder" />
            <label className="upload-button">
              <Upload size={16} />
              Upload and use
              <input type="file" accept="image/*" onChange={(event) => uploadAndUse(event.target.files)} />
            </label>
          </div>
        </div>

        <div className="asset-grid modal-asset-grid">
          {filteredAssets.map((asset) => (
            <button type="button" className="asset-tile" key={asset.path} onClick={() => onSelect(asset, { caption })}>
              <img src={normalizeAssetUrl(asset.url)} alt="" loading="lazy" />
              <span>{asset.name}</span>
            </button>
          ))}
        </div>
        {filteredAssets.length === 0 && <div className="empty-table-state">No images match this search.</div>}
      </section>
    </div>
  )
}

function MenuBuilder({ menuDraft, updateMenu, pages, saveMenu, onOpenPage, onOpenPages, onOpenChanges }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const activeIndex = Math.min(selectedIndex, Math.max(menuDraft.length - 1, 0))
  const activeGroup = menuDraft[activeIndex]

  return (
    <main className="enterprise-layout">
      <aside className="side-nav">
        <WorkspaceSideNav active="menu" onOpenPages={onOpenPages} onOpenMenu={() => {}} onOpenChanges={onOpenChanges} />
        <div className="side-nav-header">
          <h2>Menu</h2>
          <span>{menuDraft.length}</span>
        </div>
        <nav className="category-nav" aria-label="Menu categories">
          {menuDraft.map((group, index) => (
            <button className={activeIndex === index ? 'active' : ''} type="button" key={`${group.title}-${index}`} onClick={() => setSelectedIndex(index)}>
              <span>{group.title || 'Untitled category'}</span>
              <strong>{countMenuPages(group)}</strong>
            </button>
          ))}
        </nav>
        <div className="side-actions">
          <button
            type="button"
            onClick={() =>
              updateMenu((menu) => {
                menu.push({ title: 'New category', desc: '', color: 'text-microshare-dark', logo: 'file', pages: [], subpages: [] })
                setSelectedIndex(menu.length - 1)
              })
            }
          >
            <Plus size={16} />
            Category
          </button>
        </div>
      </aside>

      <section className="work-area">
        <header className="work-header">
          <div>
            <h2>{activeGroup?.title || 'Menu category'}</h2>
            <p>Choose existing pages for this menu category. Page links are generated automatically.</p>
          </div>
          <button className="primary" type="button" onClick={saveMenu}>
            <Save size={16} />
            Save menu
          </button>
        </header>
        {activeGroup ? (
          <MenuCategory
            group={activeGroup}
            groupIndex={activeIndex}
            pages={pages}
            updateMenu={updateMenu}
            onOpenPage={onOpenPage}
            onRemove={() => {
              updateMenu((menu) => menu.splice(activeIndex, 1))
              setSelectedIndex(Math.max(activeIndex - 1, 0))
            }}
          />
        ) : (
          <div className="empty-table-state">Create a category to start building the menu.</div>
        )}
      </section>
    </main>
  )
}

function WorkspaceSideNav({ active, onOpenPages, onOpenMenu, onOpenChanges }) {
  return (
    <nav className="workspace-side-nav" aria-label="Workspace">
      <button className={active === 'pages' ? 'active' : ''} type="button" onClick={onOpenPages}>
        <FileText size={16} />
        Pages
      </button>
      <button className={active === 'menu' ? 'active' : ''} type="button" onClick={onOpenMenu}>
        <FolderTree size={16} />
        Menu
      </button>
      <button className={active === 'changes' ? 'active' : ''} type="button" onClick={onOpenChanges}>
        <Package size={16} />
        Changes
      </button>
    </nav>
  )
}

function packageStatusLabel(status) {
  if (status === 'draft') return 'Draft'
  if (status === 'review') return 'Awaiting review'
  if (status === 'published') return 'Published'
  return 'Closed'
}

function ChangesPanel({
  changePackage,
  packagesData,
  packageDiff,
  packageBusy,
  authorName,
  setAuthorName,
  onStartPackage,
  onSubmitPackage,
  onPublishPackage,
  onAbandonPackage,
  onLoadDiff,
  onRefresh,
  onOpenPages,
  onOpenMenu,
}) {
  const [newTitle, setNewTitle] = useState('')
  const [selectedPr, setSelectedPr] = useState(null)
  const [expandedFile, setExpandedFile] = useState(null)
  const packages = packagesData?.packages || []
  const github = packagesData?.github || changePackage?.github

  useEffect(() => {
    if (changePackage?.status === 'draft' && !packageDiff && !packageBusy) {
      onLoadDiff()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changePackage?.id])

  async function handleReviewPackage(pkg) {
    setSelectedPr(pkg.prNumber || null)
    await onLoadDiff(pkg.prNumber || undefined)
  }

  return (
    <main className="enterprise-layout changes-layout">
      <aside className="side-nav">
        <WorkspaceSideNav active="changes" onOpenPages={onOpenPages} onOpenMenu={onOpenMenu} onOpenChanges={() => {}} />
        <div className="side-nav-header">
          <h2>Changes</h2>
          <button type="button" className="icon-only" title="Refresh" onClick={onRefresh}>
            <RefreshCcw size={15} />
          </button>
        </div>

        <label className="field-block">
          Your name
          <input
            value={authorName}
            onChange={(event) => setAuthorName(event.target.value)}
            placeholder="Used for change history"
          />
        </label>

        {!changePackage && (
          <div className="side-actions stack">
            <label className="field-block">
              New change package
              <input
                value={newTitle}
                onChange={(event) => setNewTitle(event.target.value)}
                placeholder="e.g. Welcome page updates"
                onKeyDown={(event) => {
                  if (event.key === 'Enter' && newTitle.trim()) onStartPackage(newTitle.trim())
                }}
              />
            </label>
            <button
              className="primary"
              type="button"
              disabled={packageBusy || !newTitle.trim() || !authorName.trim()}
              onClick={() => onStartPackage(newTitle.trim())}
            >
              <Plus size={16} />
              Start change package
            </button>
          </div>
        )}

        <nav className="package-list" aria-label="Change packages">
          {packages.length === 0 && <p className="muted-copy">No change packages yet.</p>}
          {packages.map((pkg) => (
            <button
              key={`${pkg.id || pkg.branch}-${pkg.prNumber || 'local'}`}
              type="button"
              className={`package-list-item ${pkg.isActive ? 'active' : ''} ${selectedPr === pkg.prNumber ? 'selected' : ''}`}
              onClick={() => handleReviewPackage(pkg)}
            >
              <strong>{pkg.title}</strong>
              <span>{pkg.author || 'unknown'}</span>
              <span className={`package-status-pill status-${pkg.status}`}>{packageStatusLabel(pkg.status)}</span>
            </button>
          ))}
        </nav>
      </aside>

      <section className="work-area changes-work-area">
        <header className="work-header">
          <div>
            <h2>Change packages</h2>
            <p>Start a package, edit pages, submit for review, then publish to the live site.</p>
          </div>
        </header>

        <div className="changes-steps">
          <div className={`change-step ${changePackage ? 'done' : 'current'}`}>
            <span>1</span>
            <div>
              <strong>Start</strong>
              <p>Create a named change package</p>
            </div>
          </div>
          <div className={`change-step ${changePackage?.diffStats?.files ? 'done' : changePackage ? 'current' : ''}`}>
            <span>2</span>
            <div>
              <strong>Edit</strong>
              <p>Update pages, menu, and images</p>
            </div>
          </div>
          <div className={`change-step ${changePackage?.status === 'review' ? 'current' : changePackage?.status === 'published' ? 'done' : ''}`}>
            <span>3</span>
            <div>
              <strong>Submit</strong>
              <p>Upload changes for review</p>
            </div>
          </div>
          <div className={`change-step ${packageDiff ? 'current' : ''}`}>
            <span>4</span>
            <div>
              <strong>Review</strong>
              <p>Validate what changed</p>
            </div>
          </div>
          <div className="change-step">
            <span>5</span>
            <div>
              <strong>Publish</strong>
              <p>Go live on the documentation site</p>
            </div>
          </div>
        </div>

        {changePackage && (
          <section className="changes-card active-package-card">
            <header>
              <div>
                <h3>{changePackage.title}</h3>
                <p>
                  <GitBranch size={14} />
                  {changePackage.branch}
                  {changePackage.author ? ` · ${changePackage.author}` : ''}
                </p>
              </div>
              <span className={`package-status-pill status-${changePackage.status}`}>{packageStatusLabel(changePackage.status)}</span>
            </header>

            <div className="package-meta-grid">
              <div>
                <span>Files changed</span>
                <strong>{changePackage.diffStats?.files ?? packageDiff?.stats?.files ?? 0}</strong>
              </div>
              <div>
                <span>Additions</span>
                <strong>{changePackage.diffStats?.insertions ?? packageDiff?.stats?.insertions ?? 0}</strong>
              </div>
              <div>
                <span>Deletions</span>
                <strong>{changePackage.diffStats?.deletions ?? packageDiff?.stats?.deletions ?? 0}</strong>
              </div>
              <div>
                <span>Commits</span>
                <strong>{changePackage.commitCount ?? packageDiff?.commits?.length ?? 0}</strong>
              </div>
            </div>

            <div className="package-actions">
              {changePackage.status === 'draft' && (
                <>
                  <button type="button" onClick={() => onLoadDiff()} disabled={packageBusy}>
                    <Search size={16} />
                    Preview changes
                  </button>
                  <button className="primary" type="button" onClick={onSubmitPackage} disabled={packageBusy || !github?.configured}>
                    <Rocket size={16} />
                    Request upload
                  </button>
                  <button type="button" className="danger" onClick={() => onAbandonPackage()} disabled={packageBusy}>
                    <XCircle size={16} />
                    Abandon
                  </button>
                </>
              )}
              {changePackage.status === 'review' && (
                <>
                  <button type="button" onClick={() => onLoadDiff(changePackage.prNumber)} disabled={packageBusy}>
                    <Search size={16} />
                    Review changes
                  </button>
                  {changePackage.prUrl && (
                    <a className="button-link" href={changePackage.prUrl} target="_blank" rel="noreferrer">
                      Open on GitHub
                    </a>
                  )}
                  <button className="primary" type="button" onClick={() => onPublishPackage(changePackage.prNumber)} disabled={packageBusy}>
                    <CheckCircle2 size={16} />
                    Approve &amp; publish
                  </button>
                  <button type="button" className="danger" onClick={() => onAbandonPackage(changePackage.prNumber)} disabled={packageBusy}>
                    <XCircle size={16} />
                    Abandon
                  </button>
                </>
              )}
            </div>
            {!github?.configured && changePackage.status === 'draft' && (
              <p className="helper-hint warning-copy">Add GITHUB_TOKEN to .env to submit and publish changes.</p>
            )}
          </section>
        )}

        {packageBusy && (
          <div className="changes-busy">
            <LoaderCircle size={18} className="spin" />
            Working...
          </div>
        )}

        {packageDiff && (
          <section className="changes-card diff-card">
            <header>
              <div>
                <h3>What changed</h3>
                <p>
                  {packageDiff.stats.files} file{packageDiff.stats.files === 1 ? '' : 's'} · +{packageDiff.stats.insertions} / -{packageDiff.stats.deletions}
                </p>
              </div>
              {packageDiff.prUrl && (
                <a className="button-link" href={packageDiff.prUrl} target="_blank" rel="noreferrer">
                  View pull request
                </a>
              )}
            </header>

            {packageDiff.commits?.length > 0 && (
              <div className="commit-list">
                {packageDiff.commits.map((commit) => (
                  <div key={commit.hash} className="commit-item">
                    <strong>{commit.message}</strong>
                    <span>{commit.author} · {formatLocaleDate(commit.date)}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="diff-file-list">
              {packageDiff.files.map((file) => (
                <div key={file.path} className="diff-file-item">
                  <button type="button" className="diff-file-header" onClick={() => setExpandedFile(expandedFile === file.path ? null : file.path)}>
                    <span className={`diff-change-type type-${file.changeType}`}>{file.changeType}</span>
                    <span className="diff-file-path">{file.path}</span>
                    <span className="diff-file-stats">+{file.insertions} -{file.deletions}</span>
                  </button>
                  {expandedFile === file.path && file.patch && (
                    <pre className="diff-patch">{file.patch}</pre>
                  )}
                  {expandedFile === file.path && !file.patch && (
                    <p className="muted-copy diff-binary-note">Binary or large file — no text preview available.</p>
                  )}
                </div>
              ))}
            </div>

            {changePackage?.status === 'review' && (
              <div className="diff-publish-bar">
                <p>Anyone can approve this change package to publish it live.</p>
                <button className="primary" type="button" onClick={() => onPublishPackage(changePackage.prNumber)} disabled={packageBusy}>
                  <CheckCircle2 size={16} />
                  Approve &amp; publish
                </button>
              </div>
            )}

            {!changePackage && selectedPr && (
              <div className="diff-publish-bar">
                <p>This change package is awaiting review.</p>
                <button className="primary" type="button" onClick={() => onPublishPackage(selectedPr)} disabled={packageBusy}>
                  <CheckCircle2 size={16} />
                  Approve &amp; publish
                </button>
                <button type="button" className="danger" onClick={() => onAbandonPackage(selectedPr)} disabled={packageBusy}>
                  <XCircle size={16} />
                  Abandon
                </button>
              </div>
            )}
          </section>
        )}
      </section>
    </main>
  )
}

function MenuCategory({ group, groupIndex, pages, updateMenu, onOpenPage, onRemove }) {
  return (
    <div className="menu-editor">
      <div className="menu-category-meta">
        <label>
          Category name
          <input value={group.title || ''} onChange={(event) => updateMenu((menu) => (menu[groupIndex].title = event.target.value))} />
        </label>
        <label>
          Description
          <input value={group.desc || ''} onChange={(event) => updateMenu((menu) => (menu[groupIndex].desc = event.target.value))} />
        </label>
        <label>
          Icon
          <input value={group.logo || ''} onChange={(event) => updateMenu((menu) => (menu[groupIndex].logo = event.target.value))} />
        </label>
        <div className="inline-actions">
          <button className="icon-only" type="button" title="Move category up" onClick={() => updateMenu((menu) => replaceArray(menu, moveItem(menu, groupIndex, -1)))}>
            <ArrowUp size={15} />
          </button>
          <button className="icon-only" type="button" title="Move category down" onClick={() => updateMenu((menu) => replaceArray(menu, moveItem(menu, groupIndex, 1)))}>
            <ArrowDown size={15} />
          </button>
          <button className="icon-only danger" type="button" title="Remove category" onClick={onRemove}>
            <Trash2 size={15} />
          </button>
        </div>
      </div>

      <MenuPageSelection
        title="Top-level pages"
        group={group}
        pages={group.pages || []}
        pageOptions={pages}
        onOpenPage={onOpenPage}
        onChange={(nextPages) => updateMenu((menu) => (menu[groupIndex].pages = nextPages))}
      />

      <div className="subsection-stack">
        {(group.subpages || []).map((subgroup, subgroupIndex) => (
          <section className="menu-subsection-section" key={`${subgroup.title}-${subgroupIndex}`}>
            <div className="subsection-title-row">
              <label>
                Subcategory
                <input
                  value={subgroup.title || ''}
                  onChange={(event) => updateMenu((menu) => (menu[groupIndex].subpages[subgroupIndex].title = event.target.value))}
                />
              </label>
              <button className="icon-only danger" type="button" onClick={() => updateMenu((menu) => menu[groupIndex].subpages.splice(subgroupIndex, 1))}>
                <Trash2 size={15} />
              </button>
            </div>
            <MenuPageSelection
              title="Pages"
              group={group}
              subgroup={subgroup}
              pages={subgroup.pages || []}
              pageOptions={pages}
              onOpenPage={onOpenPage}
              onChange={(nextPages) => updateMenu((menu) => (menu[groupIndex].subpages[subgroupIndex].pages = nextPages))}
            />
          </section>
        ))}
      </div>

      <div className="table-actions">
        <button
          type="button"
          onClick={() =>
            updateMenu((menu) => {
              menu[groupIndex].subpages = menu[groupIndex].subpages || []
              menu[groupIndex].subpages.push({ title: 'New subcategory', pages: [] })
            })
          }
        >
          <Plus size={16} />
          Add subcategory
        </button>
      </div>
    </div>
  )
}

function MenuPageSelection({ title, group, subgroup, pages, pageOptions, onChange, onOpenPage }) {
  const pageByPath = new Map(pageOptions.map((page) => [page.path, page]))

  function addPage(path) {
    const selectedPage = pageByPath.get(path)
    if (!selectedPage) return
    onChange([...(pages || []), menuItemFromPage(selectedPage)])
  }

  return (
    <section className="menu-selection">
      <div className="selection-header">
        <h3>{title}</h3>
        <select value="" onChange={(event) => addPage(event.target.value)}>
          <option value="">Add an existing page...</option>
          {pageOptions.map((page) => (
            <option key={page.path} value={page.path}>
              {pageTitle(page)} - {page.path}
            </option>
          ))}
        </select>
      </div>
      <div className="table-shell">
        <table className="data-table menu-table">
          <thead>
            <tr>
              <th>Page</th>
              <th>Product</th>
              <th>Order</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {(pages || []).map((item, index) => {
              const path = menuItemPath(group, subgroup, item)
              const matchedPage = pageByPath.get(path)
              return (
                <tr key={`${item.title}-${index}`}>
                  <td>
                    <button type="button" className="table-title" onClick={() => matchedPage && onOpenPage(matchedPage.path)}>
                      <span>{matchedPage ? pageTitle(matchedPage) : item.title}</span>
                      <small>{matchedPage ? matchedPage.path : `Missing page: ${path}`}</small>
                    </button>
                  </td>
                  <td>
                    <select value={item.product || ''} onChange={(event) => onChange(updateAt(pages, index, { ...item, product: event.target.value }))}>
                      <option value="">No badge</option>
                      <option value="clean">Clean</option>
                      <option value="pest">Pest</option>
                    </select>
                  </td>
                  <td>
                    <div className="inline-actions">
                      <button className="icon-only" type="button" onClick={() => onChange(moveItem(pages, index, -1))}>
                        <ArrowUp size={15} />
                      </button>
                      <button className="icon-only" type="button" onClick={() => onChange(moveItem(pages, index, 1))}>
                        <ArrowDown size={15} />
                      </button>
                    </div>
                  </td>
                  <td>
                    <button className="icon-only danger" type="button" onClick={() => onChange(pages.filter((_, itemIndex) => itemIndex !== index))}>
                      <Trash2 size={15} />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function getCanonical(path) {
  const parts = String(path || '').split('/')
  if (parts[0] === 'docs' && parts[1] === '2' && getLocaleFromPath(path) !== DEFAULT_LOCALE) {
    parts.splice(2, 1)
    return parts.join('/')
  }
  return path
}

function getEnglishPath(path) {
  return buildLocalePathFromCanonical(getCanonical(path), DEFAULT_LOCALE)
}

function buildPageSections(pages, query) {
  const text = query.trim().toLowerCase()
  const sections = new Map()

  for (const page of pages) {
    if (page.exists === false) continue
    if (getLocaleFromPath(page.path) !== DEFAULT_LOCALE) continue
    const haystack = `${pageTitle(page)} ${page.description || ''} ${page.path} ${page.menu?.groupTitle || ''} ${page.menu?.subgroupTitle || ''} ${
      page.menu?.menuItem?.product || ''
    }`.toLowerCase()
    if (text && !haystack.includes(text)) continue

    const groupTitle = page.inMenu ? page.menu.groupTitle : 'Unlisted pages'
    const subgroupTitle = page.inMenu ? page.menu.subgroupTitle || 'Top level' : folderLabel(page.path)
    if (!sections.has(groupTitle)) sections.set(groupTitle, new Map())
    const subgroups = sections.get(groupTitle)
    if (!subgroups.has(subgroupTitle)) subgroups.set(subgroupTitle, [])
    subgroups.get(subgroupTitle).push(page)
  }

  return [...sections.entries()].map(([title, subgroups]) => ({
    title,
    count: [...subgroups.values()].reduce((total, items) => total + items.length, 0),
    subgroups: [...subgroups.entries()].map(([subgroupTitle, subgroupPages]) => ({
      title: subgroupTitle,
      pages: subgroupPages,
    })),
  }))
}

function flattenPageSections(sections) {
  return sections.flatMap((section) =>
    section.subgroups.flatMap((subgroup) =>
      subgroup.pages.map((page) => ({
        ...page,
        _section: section.title,
        _subgroup: subgroup.title,
      })),
    ),
  )
}

function pageTitle(page) {
  return page?.menuTitle || page?.frontmatter?.title || page?.title || titleFromPath(page?.path)
}

function folderLabel(pagePath) {
  const parts = String(pagePath || '').split('/')
  return parts.slice(2, -1).map(titleFromPath).join(' / ') || 'Other'
}

function cleanFrontmatter(frontmatter) {
  const output = {}
  for (const [key, value] of Object.entries(frontmatter || {})) {
    if (value === '' || value === null || value === undefined) continue
    output[key] = value
  }
  return output
}

function menuItemFromPage(page) {
  return {
    title: pageTitle(page),
    url: filePathToUrl(page.path),
    keywords: page.menu?.menuItem?.keywords || page.menu?.menuItem?.keyword || [],
    product: page.menu?.menuItem?.product || '',
    _pagePath: page.path,
  }
}

function countMenuPages(group) {
  return (group.pages || []).length + (group.subpages || []).reduce((total, subgroup) => total + (subgroup.pages || []).length, 0)
}

function menuItemPath(group, subgroup, item) {
  if (item._pagePath) return item._pagePath
  if (item.url) return urlToPath(item.url)
  return inferDocPath({ groupTitle: group.title, subgroupTitle: subgroup?.title || '', title: item.title })
}

function urlToPath(url) {
  return `${String(url || '').replace(/^\/+/, '').replace(/\/$/, '')}.md`
}

function filePathToUrl(path) {
  return `/${String(path || '').replace(/\.md$/, '')}`
}

function moveItem(items, index, direction) {
  const next = [...(items || [])]
  const target = index + direction
  if (index < 0 || target < 0 || target >= next.length) return next
  const [item] = next.splice(index, 1)
  next.splice(target, 0, item)
  return next
}

function updateAt(items, index, item) {
  return items.map((current, currentIndex) => (currentIndex === index ? item : current))
}

function replaceArray(target, source) {
  target.splice(0, target.length, ...source)
}

function imageSnippet(asset, caption, previousAttrs = {}) {
  const attrs = {
    url: asset.url,
    description: caption,
    width: previousAttrs?.width || '',
    height: previousAttrs?.height || '',
  }
  return `{% include image.html ${serializeLiquidAttrs(attrs)} %}`
}

function replaceImageIncludeAt(markdown, imageIndex, snippet) {
  const source = String(markdown || '')
  const regex = /\{%\s*include\s+image\.html\s+[^%]*?%\}/g
  let index = 0
  let match
  while ((match = regex.exec(source))) {
    if (index === imageIndex) {
      return `${source.slice(0, match.index)}${snippet}${source.slice(match.index + match[0].length)}`
    }
    index += 1
  }
  return `${source.trimEnd()}\n\n${snippet}\n`
}

function removeImageIncludeAt(markdown, imageIndex) {
  const source = String(markdown || '')
  const regex = /\{%\s*include\s+image\.html\s+[^%]*?%\}/g
  let index = 0
  let match
  while ((match = regex.exec(source))) {
    if (index === imageIndex) {
      const before = source.slice(0, match.index).replace(/\n$/, '')
      const after = source.slice(match.index + match[0].length).replace(/^\n/, '')
      return [before, after].filter(Boolean).join('\n\n').trimEnd()
    }
    index += 1
  }
  return source
}

function parseLiquidAttrs(input) {
  const attrs = {}
  const regex = /([A-Za-z_][\w-]*)=("([^"]*)"|'([^']*)'|([^\s%]+))/g
  let match
  while ((match = regex.exec(input || ''))) {
    attrs[match[1]] = match[3] ?? match[4] ?? match[5] ?? ''
  }
  return attrs
}

function serializeLiquidAttrs(attrs) {
  return Object.entries(attrs)
    .filter(([, value]) => value !== undefined && value !== null && value !== '')
    .map(([key, value]) => `${key}="${String(value).replace(/"/g, '&quot;')}"`)
    .join(' ')
}

async function api(url, options) {
  const response = await fetch(url, options)
  const data = await response.json()
  if (!response.ok) throw new Error(data.error || 'Request failed')
  return data
}

export default App
