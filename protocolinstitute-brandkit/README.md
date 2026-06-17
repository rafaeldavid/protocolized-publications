# Protocol Institute — Brand Kit

A single-page brand kit + agent-readable token system for the **Protocol Institute** and its
magazine **Protocolized**. Mirrors the affordances of the zkNation brand kit, in the Protocol
Institute brand, and is built to be applied by a person **or** an LLM agent.

**Live:** https://npc.here.now/protocolintstitutebrandkit/

## What's here

| File | For | Purpose |
|------|-----|---------|
| `index.html` | humans | The brand-kit website (self-contained; embedded CSS/JS) |
| `brand.json` | agents | Single source of truth — tokens, type, components, veins, voice, imagery |
| `brand.css` | code | `--pi-*` decision variables + closed `.pi-*` component classes |
| `llms.txt` | agents | Entry point: rules + how to choose a vein and apply |
| `apply-protocol-institute-brand.md` | agents | Step-by-step application + self-check |
| `DESIGN-protocolized.md` | reference | Full sampled brand spec (prose source of truth) |
| `BUILD-BRIEF.md` | reference | The structured prompt this kit was built from |
| `assets/logos/` | — | Wordmark, P-mark (black/white, static + animated), New Nature art |
| `assets/images/` + `metadata.json` | — | 111 curated artworks with per-image W3C-named palettes |
| `assets/thumbs/` | — | Web thumbnails used by the site gallery |

## The system in one screen

- **One token system, two veins.** *Protocol Institute* (research / reports / SIGs — formal,
  cobalt, serif) and *Protocolized* ("Magazine of New Nature" — editorial; Non-Fiction =
  Studies / Obliquities / Science, Fiction varies). Decide the vein first.
- **LLM-safe by design** (per [Polar's Orbit](https://polar.sh/blog/orbit-llm-safe-design-system)):
  decisions over values, closed token sets, single source of truth, compose missing components.
- **Color:** brand-kit primary is cobalt `#0064ff` (aspirational); the live site serves forest
  green `#0f6e56`. Accent rust `#d85a30` is "Featured"-only. Warm paper canvas `#f9f8f5`.
- **Type:** serif display + Lora body (Computer Modern preferred → Instrument Serif / Lora);
  Outfit for UI. Headlines weight **400** — never bold display.
- **Imagery:** seven aesthetic groups mapped to the veins; only curated artwork — never
  real-person photos, screenshots, charts, or data-viz.

## Apply it (agents)
Read `llms.txt` → load `brand.json` + `brand.css` → follow `apply-protocol-institute-brand.md`.
Use `--pi-*` tokens and `.pi-*` classes only; never raw hex/px.

## Sources
Built from `DESIGN-protocolized.md`, https://protocol-institute.org/, and
https://protocolized.summerofprotocols.com/.
