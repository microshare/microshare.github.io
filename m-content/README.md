# m-content

Local CMS for Microshare documentation (`docs/2/`).

## Setup

```bash
npm install
cp .env.example .env
# Add your ANTHROPIC_API_KEY to .env
npm run dev
```

Open http://localhost:5174

## Features

- Edit Markdown pages with Liquid-aware WYSIWYG editor
- Menu builder for `_data/docs.yml`
- Image library and uploads
- **Multilingual pages** — translations live at `docs/2/{locale}/...` (e.g. `docs/2/fr/general/welcome.md`)
- **AI translation** — add or regenerate locales from English via Anthropic
- **PDF import** — drop ScribeHow or other documentation PDFs to rewrite page content

## Translation URLs

| Language | Example |
|----------|---------|
| English | `/docs/2/general/welcome` |
| French | `/docs/2/fr/general/welcome` |

Supported locales are defined in `shared/languages.js`.

## Environment

| Variable | Required | Description |
|----------|----------|-------------|
| `ANTHROPIC_API_KEY` | For AI features | Anthropic API key |
| `ANTHROPIC_MODEL` | No | Default: `claude-sonnet-4-20250514` |
