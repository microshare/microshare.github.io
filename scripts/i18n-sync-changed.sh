#!/usr/bin/env bash
set -euo pipefail

LOCALES=(fr de es)
DOCS_PREFIX="docs/2"

if [[ -z "${ANTHROPIC_API_KEY:-}" ]]; then
  echo "ANTHROPIC_API_KEY is not set." >&2
  exit 1
fi

if [[ $# -lt 2 ]]; then
  echo "Usage: ANTHROPIC_API_KEY=... $0 <base-sha> <head-sha>" >&2
  exit 1
fi

BASE_SHA="$1"
HEAD_SHA="$2"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

mapfile -t CHANGED < <(
  git diff --name-only --diff-filter=ACMRT "$BASE_SHA" "$HEAD_SHA" -- "$DOCS_PREFIX" \
    | grep '\.md$' \
    | grep -Ev "^${DOCS_PREFIX}/(fr|de|es)/" \
    || true
)

if [[ ${#CHANGED[@]} -eq 0 ]]; then
  echo "No changed English docs under ${DOCS_PREFIX}/."
  exit 0
fi

echo "Changed English docs:"
printf '  - %s\n' "${CHANGED[@]}"

for file in "${CHANGED[@]}"; do
  if [[ ! -f "$file" ]]; then
    echo "Skipping deleted file: $file"
    continue
  fi

  for lang in "${LOCALES[@]}"; do
    echo "Translating $file -> $lang"
    node scripts/i18n-md.mjs "$file" "$lang" --force
  done
done

echo "Translation sync complete."
