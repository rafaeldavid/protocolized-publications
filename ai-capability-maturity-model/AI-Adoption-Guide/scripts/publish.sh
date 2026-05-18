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
