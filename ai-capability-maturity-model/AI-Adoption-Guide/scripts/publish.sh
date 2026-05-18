#!/usr/bin/env bash
# publish.sh — single command to:
#   1. regenerate the LLM/agent artifacts (sitemap.xml, llms.txt, llms-full.txt, guide.md)
#   2. stage the html/ directory with slides.html → index.html
#   3. publish to here.now under the canonical slug
#
# This wrapper exists so the live site never drifts from slides.html: every
# deploy first runs `node generate.mjs` and re-uploads all artifacts together.
#
# Usage:
#   cd AI-Adoption-Guide/scripts
#   bash publish.sh
# or:
#   npm run publish
#
# Requirements:
#   - Node ≥ 18 (for the generator)
#   - here.now publish.sh installed at ~/.claude/skills/here-now/scripts/publish.sh
#     (or override via HERENOW_PUBLISH env var)
#   - here.now credentials saved at ~/.herenow/credentials (authenticated mode)

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
HTML_DIR="$(cd "$SCRIPT_DIR/../html" && pwd)"
SLUG="${HERENOW_SLUG:-plush-muse-q9bz}"
HERENOW_PUBLISH="${HERENOW_PUBLISH:-$HOME/.claude/skills/here-now/scripts/publish.sh}"
CLIENT="${HERENOW_CLIENT:-claude-code}"

echo "→ Regenerating LLM/agent artifacts from slides.html …"
(cd "$SCRIPT_DIR" && node generate.mjs)

echo ""
echo "→ Rendering slide deck PDF via headless Chrome …"
CHROME="${CHROME_BIN:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
PDF_OUT="$HTML_DIR/durable-ai-adoption.pdf"
if [[ -x "$CHROME" ]]; then
  # Page size A4 landscape (11.69in × 8.27in). The CSS @page in slides.html
  # also declares A4 landscape so the two stay aligned; explicit flags ensure
  # the result regardless of Chrome's @page-handling version differences.
  "$CHROME" \
    --headless=new \
    --disable-gpu \
    --hide-scrollbars \
    --no-pdf-header-footer \
    --virtual-time-budget=8000 \
    --print-to-pdf="$PDF_OUT" \
    --print-to-pdf-no-header \
    --no-margins \
    "file://$HTML_DIR/slides.html" 2>&1 | sed 's/^/    /' || true
  if [[ -f "$PDF_OUT" ]]; then
    SIZE_KB=$(du -k "$PDF_OUT" | cut -f1)
    echo "  ✓ wrote durable-ai-adoption.pdf (${SIZE_KB} KB)"
  else
    echo "  ⚠ PDF was not written — skipping. Live deploy will use the previous PDF if present."
  fi
else
  echo "  ⚠ Chrome not found at $CHROME — skipping PDF render. Set CHROME_BIN to override."
fi

echo ""
echo "→ Staging html/ for publish (slides.html → index.html) …"
STAGE_DIR="$(mktemp -d -t ai-adoption-publish-XXXXXX)"
trap "rm -rf '$STAGE_DIR'" EXIT

# Mirror everything in html/ except internal/preview files. slides.html is
# copied as index.html so the slide deck is the homepage; the original
# slides.html name is also kept for direct linking.
rsync -a \
  --exclude '_archive' \
  --exclude '_blog-hero.html' \
  --exclude '_og-cover.html' \
  --exclude '_business-flow-test.html' \
  --exclude 'index.html' \
  --exclude 'slides.html' \
  "$HTML_DIR/" "$STAGE_DIR/"

cp "$HTML_DIR/slides.html" "$STAGE_DIR/index.html"

echo "  staged $(find "$STAGE_DIR" -type f | wc -l | tr -d ' ') files"
echo ""
echo "→ Publishing to here.now (slug: $SLUG) …"
bash "$HERENOW_PUBLISH" "$STAGE_DIR" --slug "$SLUG" --client "$CLIENT"

echo ""
echo "✓ Done. Live at https://${SLUG}.here.now/"
