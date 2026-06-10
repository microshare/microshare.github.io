import { createHash } from 'node:crypto'
import { createCanvas } from '@napi-rs/canvas'
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs'

const LOG_PREFIX = '[pdf-ingest]'
const MIN_IMAGE_SIZE = 40
const MIN_SCREENSHOT_WIDTH = 180
const PAGE_RENDER_SCALE = 2

const IMAGE_OPS = new Set([
  pdfjs.OPS.paintImageXObject,
  pdfjs.OPS.paintInlineImageXObject,
  pdfjs.OPS.paintImageMaskXObject,
  pdfjs.OPS.paintXObject,
])

class NodeCanvasFactory {
  create(width, height) {
    const canvas = createCanvas(Math.ceil(width), Math.ceil(height))
    const context = canvas.getContext('2d')
    return { canvas, context }
  }

  reset(canvasAndContext, width, height) {
    canvasAndContext.canvas.width = Math.ceil(width)
    canvasAndContext.canvas.height = Math.ceil(height)
  }

  destroy(canvasAndContext) {
    canvasAndContext.canvas.width = 0
    canvasAndContext.canvas.height = 0
    canvasAndContext.canvas = null
    canvasAndContext.context = null
  }
}

function log(message, extra) {
  if (extra !== undefined) console.log(`${LOG_PREFIX} ${message}`, extra)
  else console.log(`${LOG_PREFIX} ${message}`)
}

function getPdfObject(pool, id) {
  return new Promise((resolve, reject) => {
    if (!pool?.get) {
      reject(new Error('PDF object pool is unavailable'))
      return
    }
    pool.get(id, (obj) => {
      if (obj) resolve(obj)
      else reject(new Error(`PDF object ${id} is not resolved`))
    })
  })
}

async function resolveImageObject(page, objectId) {
  if (page.objs?.has?.(objectId)) return getPdfObject(page.objs, objectId)
  if (page.commonObjs?.has?.(objectId)) return getPdfObject(page.commonObjs, objectId)
  try {
    return await getPdfObject(page.objs, objectId)
  } catch {
    return getPdfObject(page.commonObjs, objectId)
  }
}

function rgbaFromGrayscale(data, width, height) {
  const rgba = new Uint8ClampedArray(width * height * 4)
  for (let i = 0; i < width * height; i += 1) {
    const gray = data[i]
    const offset = i * 4
    rgba[offset] = gray
    rgba[offset + 1] = gray
    rgba[offset + 2] = gray
    rgba[offset + 3] = 255
  }
  return rgba
}

function imageObjectToBuffer(img) {
  if (!img) return null

  if (img.data instanceof Uint8Array && img.data.length >= 2 && img.data[0] === 0xff && img.data[1] === 0xd8) {
    return { buffer: Buffer.from(img.data), ext: '.jpg', mime: 'image/jpeg', width: img.width, height: img.height }
  }

  const { width, height, data, kind } = img
  if (!width || !height || !data || width < MIN_IMAGE_SIZE || height < MIN_IMAGE_SIZE) {
    return null
  }

  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext('2d')
  const imageData = ctx.createImageData(width, height)

  if (kind === pdfjs.ImageKind.GRAYSCALE_1BPP || data.length === width * height) {
    imageData.data.set(rgbaFromGrayscale(data, width, height))
  } else if (data.length === width * height * 4) {
    imageData.data.set(data)
  } else if (data.length === width * height * 3) {
    for (let i = 0, j = 0; i < data.length; i += 3, j += 4) {
      imageData.data[j] = data[i]
      imageData.data[j + 1] = data[i + 1]
      imageData.data[j + 2] = data[i + 2]
      imageData.data[j + 3] = 255
    }
  } else {
    return null
  }

  ctx.putImageData(imageData, 0, 0)
  return {
    buffer: canvas.toBuffer('image/png'),
    ext: '.png',
    mime: 'image/png',
    width,
    height,
  }
}

function hashBuffer(buffer) {
  return createHash('sha1').update(buffer).digest('hex')
}

function isLikelyScreenshot(image) {
  const width = image.width || 0
  const height = image.height || 0
  const area = width * height

  // Real guide screenshots are usually at least ~200px wide
  if (width >= MIN_SCREENSHOT_WIDTH) return true
  // Large portrait captures
  if (height >= 240 && area >= 80000) return true
  return false
}

function filterScreenshotImages(images) {
  return images.filter(isLikelyScreenshot)
}

async function warmPageObjects(page, canvasFactory) {
  const viewport = page.getViewport({ scale: 1 })
  const canvasAndContext = canvasFactory.create(viewport.width, viewport.height)
  try {
    await page
      .render({
        canvasContext: canvasAndContext.context,
        viewport,
        canvasFactory,
      })
      .promise
  } finally {
    canvasFactory.destroy(canvasAndContext)
  }
}

async function extractEmbeddedImagesFromPage(page, pageNum, seenHashes) {
  const images = []
  const operatorList = await page.getOperatorList()
  let imageOpCount = 0
  let skipped = { unresolved: 0, tooSmall: 0, badFormat: 0, duplicate: 0 }

  for (let i = 0; i < operatorList.fnArray.length; i += 1) {
    if (!IMAGE_OPS.has(operatorList.fnArray[i])) continue
    imageOpCount += 1

    const objectId = operatorList.argsArray[i]?.[0]
    if (!objectId) continue

    try {
      const img = await resolveImageObject(page, objectId)
      const converted = imageObjectToBuffer(img)
      if (!converted) {
        if (img?.width && img?.height && (img.width < MIN_IMAGE_SIZE || img.height < MIN_IMAGE_SIZE)) {
          skipped.tooSmall += 1
        } else {
          skipped.badFormat += 1
        }
        continue
      }

      const digest = hashBuffer(converted.buffer)
      if (seenHashes.has(digest)) {
        skipped.duplicate += 1
        continue
      }
      seenHashes.add(digest)

      images.push({
        pageNum,
        ...converted,
        name: `pdf-page-${pageNum}-img-${images.length + 1}${converted.ext}`,
      })
      log(`  saved embedded image from page ${pageNum}: ${converted.width}x${converted.height} (${converted.buffer.length} bytes)`)
    } catch (error) {
      skipped.unresolved += 1
      log(`  could not resolve image object ${objectId} on page ${pageNum}: ${error.message}`)
    }
  }

  log(
    `page ${pageNum}: ${imageOpCount} image ops -> ${images.length} extracted (skipped: ${JSON.stringify(skipped)})`,
  )
  return images
}

async function extractEmbeddedImages(pdf, canvasFactory) {
  const images = []
  const seenHashes = new Set()

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum += 1) {
    log(`processing page ${pageNum}/${pdf.numPages} for embedded images`)
    const page = await pdf.getPage(pageNum)
    try {
      await warmPageObjects(page, canvasFactory)
      const pageImages = await extractEmbeddedImagesFromPage(page, pageNum, seenHashes)
      images.push(...pageImages)
    } finally {
      page.cleanup()
    }
  }

  return images
}

async function renderPagesAsImages(pdf, canvasFactory) {
  const images = []
  log(`falling back to full-page render for ${pdf.numPages} page(s)`)

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum += 1) {
    const page = await pdf.getPage(pageNum)
    const viewport = page.getViewport({ scale: PAGE_RENDER_SCALE })
    const canvasAndContext = canvasFactory.create(viewport.width, viewport.height)

    try {
      log(`rendering page ${pageNum} at ${Math.round(viewport.width)}x${Math.round(viewport.height)}`)
      await page
        .render({
          canvasContext: canvasAndContext.context,
          viewport,
          canvasFactory,
        })
        .promise

      const buffer = canvasAndContext.canvas.toBuffer('image/png')
      images.push({
        pageNum,
        buffer,
        ext: '.png',
        mime: 'image/png',
        width: Math.round(viewport.width),
        height: Math.round(viewport.height),
        name: `pdf-page-${pageNum}.png`,
      })
      log(`  page ${pageNum} rendered (${buffer.length} bytes)`)
    } catch (error) {
      log(`  failed to render page ${pageNum}: ${error.message}`)
    } finally {
      page.cleanup()
      canvasFactory.destroy(canvasAndContext)
    }
  }

  return images
}

export async function extractPdfImages(pdfBuffer) {
  const startedAt = Date.now()
  log(`starting image extraction (${pdfBuffer.length} byte PDF)`)

  const loadingTask = pdfjs.getDocument({
      data: new Uint8Array(pdfBuffer),
      disableWorker: true,
      useSystemFonts: true,
      nativeImageDecoderSupport: 'none',
      disableFontFace: true,
      CanvasFactory: NodeCanvasFactory,
    })

  const pdf = await loadingTask.promise

  log(`PDF loaded: ${pdf.numPages} page(s)`)

  const canvasFactory = new NodeCanvasFactory()
  try {
    let images = await extractEmbeddedImages(pdf, canvasFactory)
    log(`embedded extraction complete: ${images.length} image(s)`)

    const beforeFilter = images.length
    images = filterScreenshotImages(images)
    if (beforeFilter !== images.length) {
      log(`filtered to ${images.length} screenshot-sized image(s) (removed ${beforeFilter - images.length} small asset(s))`)
    }

    if (images.length === 0) {
      images = await renderPagesAsImages(pdf, canvasFactory)
      log(`page render fallback complete: ${images.length} image(s)`)
    }

    log(`image extraction finished in ${Date.now() - startedAt}ms (${images.length} total)`)
    return images
  } finally {
    await loadingTask.destroy()
  }
}
