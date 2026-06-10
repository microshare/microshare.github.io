import Anthropic from '@anthropic-ai/sdk'
import pdfParse from 'pdf-parse'
import { extractPdfImages } from './pdfImages.js'

const LOG_PREFIX = '[pdf-ingest]'

function log(message, extra) {
  if (extra !== undefined) console.log(`${LOG_PREFIX} ${message}`, extra)
  else console.log(`${LOG_PREFIX} ${message}`)
}

function getClient() {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) throw new Error('ANTHROPIC_API_KEY is not set. Add it to m-content/.env')
  return new Anthropic({ apiKey })
}

function buildStructurePrompt(context, savedImages = []) {
  const imageLines =
    savedImages.length > 0
      ? savedImages
          .map((asset, index) => `${index + 1}. ${asset.url} (from PDF page ${asset.pageNum || '?'})`)
          .join('\n')
      : 'No images were extracted from the PDF.'

  return `You are converting documentation (often from ScribeHow or similar guides) into Microshare docs Markdown.

Output valid JSON only:
{
  "title": "Page title",
  "description": "One-line summary",
  "body": "Full markdown body"
}

Body rules:
- Use ## and ### for headings, numbered steps where appropriate.
- For screenshots/figures use: {% include image.html url="/assets/img/..." description="Step description" %}
- Use the extracted image URLs below in document order. Match each screenshot to the closest URL.
- If there are more screenshots than extracted images, reuse the closest relevant image URL rather than PLACEHOLDER.png.
- Use {% highlight lang %}...{% endhighlight %} only for real code or API examples.
- Preserve technical terms, URLs, and product names.
- Do not wrap output in code fences.
- Match professional technical documentation tone.

Extracted images (use these exact url values):
${imageLines}`
}

async function structureWithText(extractedText, context = {}, savedImages = []) {
  log('structuring content from extracted text (fallback path)')
  const client = getClient()
  const response = await client.messages.create({
    model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-20250514',
    max_tokens: 12000,
    messages: [
      {
        role: 'user',
        content: `${buildStructurePrompt(context, savedImages)}

Existing page title: ${context.title || 'New page'}
Existing description: ${context.description || ''}
Suggested asset folder: ${context.assetFolder || 'uploads'}

PDF text:
${extractedText.slice(0, 120000)}`,
      },
    ],
  })

  const text = response.content
    .filter((block) => block.type === 'text')
    .map((block) => block.text)
    .join('\n')
  const jsonMatch = text.match(/\{[\s\S]*\}/)
  if (!jsonMatch) throw new Error('PDF structuring did not return JSON')
  return JSON.parse(jsonMatch[0])
}

async function structureWithDocument(pdfBuffer, context = {}, savedImages = []) {
  log('structuring content with Claude document API')
  const client = getClient()
  const base64 = pdfBuffer.toString('base64')
  const response = await client.messages.create({
    model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-20250514',
    max_tokens: 12000,
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'document',
            source: {
              type: 'base64',
              media_type: 'application/pdf',
              data: base64,
            },
          },
          {
            type: 'text',
            text: `${buildStructurePrompt(context, savedImages)}

Existing page title: ${context.title || 'New page'}
Existing description: ${context.description || ''}
Suggested asset folder: ${context.assetFolder || 'uploads'}`,
          },
        ],
      },
    ],
  })

  const text = response.content
    .filter((block) => block.type === 'text')
    .map((block) => block.text)
    .join('\n')
  const jsonMatch = text.match(/\{[\s\S]*\}/)
  if (!jsonMatch) throw new Error('PDF structuring did not return JSON')
  return JSON.parse(jsonMatch[0])
}

function replacePlaceholderImages(body, savedImages) {
  if (!body || savedImages.length === 0) return body

  let index = 0
  let replaced = 0
  const next = body.replace(/PLACEHOLDER\.png/g, () => {
    const asset = savedImages[Math.min(index, savedImages.length - 1)]
    index += 1
    replaced += 1
    return asset.url.replace(/^\/assets\/img\//, '')
  })

  if (replaced > 0) log(`replaced ${replaced} PLACEHOLDER.png reference(s) in body`)
  return next
}

function injectMissingImageUrls(body, savedImages) {
  if (!body || savedImages.length === 0) return body

  const includePattern = /\{%\s*include\s+image\.html\s+[^%]*?%\}/g
  let imageIndex = 0
  let updated = 0

  const next = body.replace(includePattern, (match) => {
    if (!/PLACEHOLDER\.png/i.test(match) && /url="\/assets\/img\//.test(match)) return match

    const asset = savedImages[Math.min(imageIndex, savedImages.length - 1)]
    imageIndex += 1
    if (!asset) return match

    updated += 1
    const captionMatch = match.match(/description="([^"]*)"/)
    const description = captionMatch?.[1] || 'Screenshot'
    return `{% include image.html url="${asset.url}" description="${description}" %}`
  })

  if (updated > 0) log(`injected ${updated} image URL(s) into body includes`)
  return next
}

export async function ingestPdf(pdfBuffer, context = {}, { saveImage } = {}) {
  const startedAt = Date.now()
  log('starting PDF ingest', {
    title: context.title || '(untitled)',
    assetFolder: context.assetFolder || 'uploads',
    bytes: pdfBuffer.length,
  })

  let extractedImages = []
  try {
    extractedImages = await extractPdfImages(pdfBuffer)
  } catch (error) {
    log(`image extraction failed: ${error.message}`)
    throw error
  }

  const savedImages = []
  for (const image of extractedImages) {
    if (!saveImage) break
    log(`saving ${image.name} (${image.buffer.length} bytes)`)
    const saved = await saveImage(image.buffer, image.name)
    savedImages.push({ ...saved, pageNum: image.pageNum })
    log(`  -> ${saved.url}`)
  }
  log(`saved ${savedImages.length} image(s) to ${context.assetFolder || 'uploads'}`)

  let structured
  try {
    structured = await structureWithDocument(pdfBuffer, context, savedImages)
    log('structured content via document API')
  } catch (error) {
    log(`document API failed (${error.message}), falling back to text extraction`)
    const parsed = await pdfParse(pdfBuffer)
    const text = parsed.text || ''
    if (!text.trim()) throw new Error('Could not extract text from PDF')
    log(`pdf-parse extracted ${text.length} characters of text`)
    structured = await structureWithText(text, context, savedImages)
    log('structured content via text fallback')
  }

  let body = structured.body || ''
  body = replacePlaceholderImages(body, savedImages)
  body = injectMissingImageUrls(body, savedImages)

  const placeholderCount = (body.match(/PLACEHOLDER\.png/g) || []).length
  if (placeholderCount > 0) {
    log(`warning: ${placeholderCount} PLACEHOLDER.png reference(s) remain in body`)
  }

  log(`PDF ingest finished in ${Date.now() - startedAt}ms`)

  return {
    title: structured.title || context.title || 'Imported documentation',
    description: structured.description || context.description || '',
    body,
    suggestedPath: context.suggestedPath || null,
    assets: savedImages,
    imageCount: savedImages.length,
  }
}
