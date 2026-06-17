# Build Brief — Protocol Institute Brand-Kit Website

This is the structured prompt that produced this directory. It follows Anthropic's prompting
guidance: an explicit role, concrete task, grounding context, ordered instructions, hard
constraints, a defined output contract, and measurable success criteria.

## Role
You are a brand-systems engineer building a single-page brand-kit website plus an agent-readable
token system for the Protocol Institute.

## Task
Produce a self-contained `index.html` brand kit that mirrors the affordances of the zkNation
brand kit (npc.here.now/zknationbrand) but in the Protocol Institute brand, plus the machine
files (`brand.json`, `brand.css`, `llms.txt`, `apply-protocol-institute-brand.md`). Deploy via
here.now and mount at `npc.here.now/protocolintstitutebrandkit`; commit under
`protocolinstitute-brandkit/` in `rafaeldavid/protocolized-publications`.

## Context (grounding — do not contradict)
- **Source of truth:** `DESIGN-protocolized.md` (sampled brand spec) — tokens, type, components.
- **Two veins, one token system:** Protocol Institute (research/reports/SIGs — formal, cobalt,
  serif) and Protocolized ("Magazine of New Nature" — editorial; Non-Fiction = Studies/
  Obliquities/Science, Fiction varies). Voice guidance targets Institute + Protocolized
  Non-Fiction; Fiction is unconstrained.
- **Affordance model (zkNation):** hero + dual CTA; sections for Brand Architecture, Color
  (tabbed, copy-to-clipboard swatches, WCAG notes), Type (specimens + scale), Logo (variants,
  clear-space, Never list), Visual/Imagery, Voice (trait cards + SAY/DON'T), Components, an
  agent section, and a "Get the kit" download block.
- **LLM-safe design (Orbit / Polar):** decisions over values; closed token sets; single source
  of truth; constraints over suggestions; compose missing components from tokens.
- **Assets:** `assets/logos/` (wordmark, P-mark b/w + animated, New Nature art),
  `assets/images/` (111 curated artworks) + `metadata.json` (per-image palette), `assets/thumbs/`.

## Instructions (ordered)
1. Use only the brand tokens; render the actual fonts (Instrument Serif / Lora / Outfit via
   Google Fonts) with the Computer-Modern-first preference documented.
2. Implement real affordances: gutter section-nav + top nav, tabbed color groups, click-to-copy
   on every color token and code block, lazy-loaded imagery grouped by aesthetic category, and
   download links to the machine files.
3. Teach the reader (human or agent) HOW to choose a vein, with a side-by-side decision panel.
4. Voice section: two columns (Institute; Protocolized Non-Fiction) with trait cards + SAY /
   DON'T-SAY lists. State the Fiction caveat explicitly.
5. Components gallery: live buttons, badges, chips, cards; derive download-button and any missing
   primitive from tokens, and say so.
6. Imagery: show a representative selection per group (not all 111) and link to the full library.

## Constraints
- Single self-contained `index.html` (embedded CSS/JS); external refs limited to Google Fonts
  and local assets. No build step. Display headings weight 400. No dark mode. No real-person
  photos or non-art imagery.

## Output contract
`protocolinstitute-brandkit/` containing: `index.html`, `brand.json`, `brand.css`, `llms.txt`,
`apply-protocol-institute-brand.md`, `DESIGN-protocolized.md`, `README.md`, this brief,
`favicon.svg`, and `assets/{logos,images,thumbs}/`. Deployed + mounted; committed to the repo.

## Success criteria
- A non-designer can ship an on-brand page; an agent can apply the brand from the files alone.
- Every affordance in the zkNation model has a Protocol Institute equivalent.
- The two veins and the seven imagery groups are unambiguous.
- Tokens are decisions, closed, and consistent across `brand.json`, `brand.css`, and the site.
