#!/usr/bin/env node
/**
 * Protocol Institute brand kit — color-contrast / readability test.
 *
 * Reads the decision tokens from ../brand.json and checks every meaningful
 * foreground/background pairing against WCAG 2.1 contrast thresholds.
 * The list of required pairings is the machine-readable contract in
 * brand.json -> accessibility.pairings (so the test stays in sync with the
 * token system). Exits non-zero if any required pairing fails.
 *
 *   node scripts/contrast-check.mjs           # full report
 *   node scripts/contrast-check.mjs --quiet    # only failures + summary
 *
 * Thresholds (WCAG 2.1):
 *   text  (normal, < 18.66px bold / < 24px) : AA 4.5 : 1  (AAA 7:1)
 *   large (>= 18.66px bold / >= 24px)        : AA 3.0 : 1  (AAA 4.5:1)
 *   ui    (icons, borders, graphical objects): AA 3.0 : 1  (1.4.11)
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const brand = JSON.parse(readFileSync(resolve(__dirname, "../brand.json"), "utf8"));

const QUIET = process.argv.includes("--quiet");

// ---- token resolution -------------------------------------------------------
const primitives = brand.color.primitive;            // name -> "#rrggbb"
const decisions = brand.color.decision;              // name -> { value }

/** Resolve a token name to a hex string. Accepts decision tokens, primitives,
 *  or a literal hex. */
function hexOf(token) {
  if (typeof token === "string" && /^#[0-9a-f]{3,8}$/i.test(token)) return token;
  if (decisions[token]) return decisions[token].value;
  if (primitives[token]) return primitives[token];
  throw new Error(`Unknown color token: ${token}`);
}

// ---- WCAG math --------------------------------------------------------------
function srgbToLin(c) {
  c /= 255;
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}
function luminance(hex) {
  const h = hex.replace("#", "");
  const n = h.length === 3 ? h.split("").map((x) => x + x).join("") : h;
  const r = parseInt(n.slice(0, 2), 16);
  const g = parseInt(n.slice(2, 4), 16);
  const b = parseInt(n.slice(4, 6), 16);
  return 0.2126 * srgbToLin(r) + 0.7152 * srgbToLin(g) + 0.0722 * srgbToLin(b);
}
function contrast(fg, bg) {
  const L1 = luminance(fg);
  const L2 = luminance(bg);
  const [hi, lo] = L1 >= L2 ? [L1, L2] : [L2, L1];
  return (hi + 0.05) / (lo + 0.05);
}

const AA = { text: 4.5, large: 3.0, ui: 3.0 };
const AAA = { text: 7.0, large: 4.5, ui: 3.0 };

// ---- pairings (the contract) ------------------------------------------------
// Prefer the contract embedded in brand.json (it lives under color.accessibility,
// alongside the tokens). Fall back to a built-in list so the test is still useful
// before the contract is added to the kit.
const contract = brand.color?.accessibility ?? brand.accessibility;
const pairings = contract?.pairings ?? [
  // text on surfaces
  { fg: "text-body", bg: "background-canvas", kind: "text", label: "Body text on paper" },
  { fg: "text-body", bg: "background-surface", kind: "text", label: "Body text on white" },
  { fg: "text-body", bg: "background-muted", kind: "text", label: "Body text on muted" },
  { fg: "text-secondary", bg: "background-canvas", kind: "text", label: "Secondary text on paper" },
  { fg: "text-secondary", bg: "background-surface", kind: "text", label: "Secondary text on white" },
  { fg: "text-secondary", bg: "background-muted", kind: "text", label: "Secondary text on muted" },
  // links / emphasis
  { fg: "action-primary", bg: "background-canvas", kind: "text", label: "Cobalt link on paper" },
  { fg: "action-primary", bg: "background-surface", kind: "text", label: "Cobalt link on white" },
  { fg: "action-secondary", bg: "background-canvas", kind: "text", label: "Green link on paper" },
  { fg: "action-secondary", bg: "background-surface", kind: "text", label: "Green link on white" },
  // text on action fills (buttons)
  { fg: "on-action", bg: "action-primary", kind: "text", label: "White on cobalt button" },
  { fg: "on-action", bg: "action-primary-pressed", kind: "text", label: "White on cobalt (pressed)" },
  { fg: "on-action", bg: "action-secondary", kind: "text", label: "White on green button" },
  { fg: "on-action", bg: "accent", kind: "large", label: "White on rust (large/UI only)" },
  // badges (caption ~12px => small text)
  { fg: "action-secondary-deep", bg: "action-secondary-tint", kind: "text", label: "Framework badge text" },
  { fg: "accent-deep", bg: "accent-tint", kind: "text", label: "Featured badge text" },
  // secondary button hover
  { fg: "action-primary-pressed", bg: "action-primary-tint", kind: "text", label: "Secondary-button hover text" },
  // non-text / UI
  { fg: "border-hairline", bg: "background-surface", kind: "ui", label: "Hairline border on white", note: "decorative" },
];

// ---- run --------------------------------------------------------------------
const rows = pairings.map((p) => {
  const fg = hexOf(p.fg);
  const bg = hexOf(p.bg);
  const ratio = contrast(fg, bg);
  const min = AA[p.kind] ?? 4.5;
  const required = p.note === "decorative" ? null : min; // decorative = informational
  const pass = required == null ? null : ratio >= required - 1e-9;
  return { ...p, fg, bg, ratio, min, required, pass, aaa: ratio >= (AAA[p.kind] ?? 7) };
});

const pad = (s, n) => String(s).padEnd(n);
const fmt = (n) => n.toFixed(2).padStart(5);

if (!QUIET) {
  console.log("\nProtocol Institute — contrast / readability check");
  console.log("=".repeat(78));
  console.log(pad("Pairing", 34) + pad("kind", 7) + pad("ratio", 8) + pad("min", 6) + "result");
  console.log("-".repeat(78));
}
let failures = 0;
for (const r of rows) {
  if (r.pass === false) failures++;
  const verdict =
    r.pass === null ? "·  info" :
    r.pass ? (r.aaa ? "✓  AAA" : "✓  AA ") : "✗  FAIL";
  if (!QUIET || r.pass === false) {
    console.log(
      pad(r.label, 34) + pad(r.kind, 7) + pad(fmt(r.ratio) + ":1", 8) +
      pad(r.required ? r.required.toFixed(1) : "—", 6) + verdict +
      `   ${r.fg} on ${r.bg}`
    );
  }
}
console.log("-".repeat(78));
const checked = rows.filter((r) => r.required != null).length;
console.log(`${checked - failures}/${checked} required pairings pass · ${failures} failing · ${rows.length - checked} informational`);

if (failures > 0) {
  console.log("\nFailing pairings need a darker foreground or lighter background, or must be");
  console.log("restricted to large-text / non-text use. See accessibility notes in brand.json.\n");
  process.exit(1);
}
console.log("");
process.exit(0);
