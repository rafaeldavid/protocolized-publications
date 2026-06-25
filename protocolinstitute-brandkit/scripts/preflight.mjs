#!/usr/bin/env node
/**
 * Protocol Institute brand kit — preflight linter.
 *
 * Static, dependency-free checks for the pitfalls that recurred while building
 * brand artifacts. It does NOT render (use scripts/qc.md / Playwright for the
 * visual + contrast + spacing checks); it catches the cheap stuff fast.
 *
 *   node scripts/preflight.mjs path/to/index.html [more.html ...]
 *
 * Exit code is non-zero if any FAIL is found (warnings don't fail the build).
 */
import { readFileSync } from "node:fs";

const files = process.argv.slice(2);
if (!files.length) {
  console.error("usage: node scripts/preflight.mjs <file.html> [...]");
  process.exit(2);
}

// Emoji detector — pictographic emoji + the FE0F emoji-presentation selector.
// Deliberately NOT the 2600–27BF dingbat block: ✓ ✕ → ★ are legitimate
// monochrome typographic marks, not the colorful emoji the rule forbids.
const EMOJI = /[\u{1F000}-\u{1FAFF}\u{FE0F}]/u;

let hadFail = false;

for (const file of files) {
  const html = readFileSync(file, "utf8");
  const css = (html.match(/<style[\s\S]*?<\/style>/gi) || []).join("\n");
  const out = [];
  const add = (level, msg) => { out.push({ level, msg }); if (level === "FAIL") hadFail = true; };

  // 1. favicon
  /<link[^>]+rel=["']?(icon|shortcut icon)["']?/i.test(html)
    ? add("ok", "favicon linked")
    : add("FAIL", "no <link rel=\"icon\"> — add the brand favicon.svg");

  // 2. viewport (mobile)
  /<meta[^>]+name=["']?viewport["']?/i.test(html)
    ? add("ok", "viewport meta present")
    : add("FAIL", "no viewport meta — mobile layout will break");

  // 3. <html lang>
  /<html[^>]+\blang=/i.test(html) ? add("ok", "html lang set") : add("warn", "no <html lang> attribute");

  // 4. fonts actually loaded (brand.css OR the Google Fonts link/@import)
  /brand\.css/i.test(html) || /fonts\.googleapis\.com|Instrument\+Serif/i.test(html)
    ? add("ok", "brand fonts referenced (brand.css or Google Fonts)")
    : add("FAIL", "no brand.css / font link — headings will fall back to a system serif");

  // 5. orphan control (text-wrap)
  /text-wrap\s*:\s*(balance|pretty)/i.test(css)
    ? add("ok", "text-wrap orphan control present")
    : add("warn", "no text-wrap:balance/pretty — headings/paragraphs may leave hanging words");

  // 6. the img{max-width:100%} vs full-bleed footgun
  const hasImgMaxWidth = /\bimg\b[^{]*\{[^}]*max-width\s*:\s*100%/i.test(css) || /^\s*img\s*\{[^}]*max-width/i.test(css);
  const hasFullBleed = /width\s*:\s*calc\(\s*100%\s*\+/i.test(css);
  const fullBleedExempt = /max-width\s*:\s*none/i.test(css);
  if (hasImgMaxWidth && hasFullBleed && !fullBleedExempt)
    add("FAIL", "img{max-width:100%} + a full-bleed width:calc(100% + …) with no max-width:none — the image will be capped short (use .pi-card--media)");
  else if (hasFullBleed && fullBleedExempt)
    add("ok", "full-bleed image exempts max-width");

  // 7. button text vs a global a{color} reset
  const aColorReset = /(^|[^.\w])a\s*\{[^}]*\bcolor\s*:/i.test(css) || /\.\w[\w-]*\s+a\s*\{[^}]*color/i.test(css);
  const usesBtn = /\bbtn\b/i.test(html);
  if (aColorReset && usesBtn && !/a\.\w*btn/i.test(css))
    add("warn", "a global a{color} rule + buttons but no `a.btn{color}` override — button text may be invisible (white-on-cobalt)");

  // 8. emoji in UI
  EMOJI.test(html) ? add("FAIL", "emoji found in markup — draw glyphs with CSS or use brand marks") : add("ok", "no emoji");

  // 9. raw hex in inline style attributes (informational nudge toward tokens)
  const inlineHex = (html.match(/style=["'][^"']*#[0-9a-fA-F]{3,6}/g) || []).length;
  if (inlineHex > 0) add("warn", `${inlineHex} inline style(s) use a raw hex color — prefer --pi-* tokens`);

  // report
  const icon = { ok: "✓", warn: "•", FAIL: "✗" };
  const fails = out.filter(o => o.level === "FAIL").length, warns = out.filter(o => o.level === "warn").length;
  console.log(`\n${file}  —  ${fails} fail · ${warns} warn`);
  out.filter(o => o.level !== "ok").forEach(o => console.log(`  ${icon[o.level]}  ${o.msg}`));
  if (!fails && !warns) console.log("  ✓  all preflight checks pass");
}

process.exit(hadFail ? 1 : 0);
