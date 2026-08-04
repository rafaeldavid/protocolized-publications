# Apply the Protocol Institute Brand

A procedure for agents (and humans) to produce on-brand artifacts. Built to be **LLM-safe**:
correct behavior is the easy path, and the token menus are closed.

## 0. Load the system
1. Read `llms.txt`, then `brand.json` (tokens) and `brand.css` (variables + components).
2. Link `brand.css` and use its `--pi-*` variables and `.pi-*` classes. Do not hardcode hex/px.

## 1. Pick the vein
- **Protocol Institute** (research, reports, SIGs, challenges, institutional pages):
  formal and precise. Primary color = `--pi-action-primary` (cobalt). Serif display
  (Computer Modern preferred) + Lora body. Imagery: the house set's flat, schematic cuts
  (`_4`, `_6`, and the `_2b` / `_3b` line-art variants).
- **Protocolized** (magazine — Non-Fiction *Studies / Obliquities / Science*, and Fiction):
  editorial, cover-art-led. Live accent = `--pi-action-secondary` (forest green);
  `--pi-accent` (rust) only for "Featured". Instrument Serif 400 + Lora.
  Imagery: the house set's dense, atmospheric cuts (`_2`, `_3`, `_5`).

## 2. Color
- Backgrounds: `--pi-background-canvas` (page), `--pi-background-surface` (cards/bands),
  `--pi-background-muted` (chips).
- Text: `--pi-text-heading`, `--pi-text-body`, `--pi-text-secondary`.
- Action: `--pi-action-primary` (+`-pressed`, `-tint`) or `--pi-action-secondary` (live vein).
- Never put `--pi-text-secondary` on an action fill; use `--pi-on-action`.

## 3. Type
- **Load the fonts first.** Linking `brand.css` is enough — it `@import`s Instrument Serif, Lora,
  and Outfit. Without loading them, headings fall back to a system serif/sans. After applying,
  verify a heading actually renders in Instrument Serif (not Georgia/Times or a sans).
- Headings/display: serif, **weight 400 only** (never bold display). Use `.pi-display`, `.pi-h2`.
- Body: `.pi-prose` (16px) / `.pi-lead` (18px secondary). UI/meta: `.pi-meta`, sans.
- Tagline "Accelerating Order.": `.pi-tagline` (italic serif, in the vein's action color).

## 4. Components (use the closed set)
- Buttons: `.pi-btn .pi-btn--primary` / `.pi-btn--secondary` / `.pi-link` (append "→").
- Badges: `.pi-badge--framework` (mint/green) for category, `.pi-badge--featured` (rust). Chips: `.pi-chip`.
- Cards: `.pi-card` (1px hairline, hover shadow only).
- **Missing component?** Compose it from decision tokens + `radius-md`/`radius-pill`, the
  hairline border, and a type role. Example: a download button = `.pi-btn--secondary` + `.pi-btn--download`.
  Do not introduce new colors, radii, or shadows.

## 4b. Page header
- The **"The Protocol Institute" wordmark** (P-mark + serif text, `.pi-wordmark`) anchored
  **top-left**, linking to `https://protocol-institute.org/`; page/local brand + nav on the **right**.
- **Menu/nav links are UPPERCASE** (`.pi-topnav`, Outfit). Matches protocol-institute.org.

## 5. Voice (copy)
- **Institute (research):** Precise · Grounded · Structured · Generative. Lead with the claim,
  then evidence; define terms once; frame as working-group findings. Avoid hype and jargon soup.
- **Protocolized Non-Fiction:** Literary · Curious · Rigorous-but-playful · World-building.
  Treat protocols as narrative/philosophical instruments carried by real analysis; let a strong
  title lead. Avoid dry report voice and whimsy-without-substance.
  (Fiction is unconstrained — do not apply this voice to fiction.)

## 6. Imagery
- Source from `assets/images/` — one house set of 8 generative pieces
  (`protocolized_generic_art_*.png`), all sharing a single motif: layered planes, contour linework,
  and node networks in brand cobalt. Both veins draw from the same set; pick by density, not category.
- Pull a piece's palette from `metadata.json` to tint layout accents.
- Behind text, use `_4` or `_6` over a scrim — the dense cuts fight body copy. Against cobalt UI, use
  the black-and-white `_2b` / `_3b` cuts so the art does not compete with the interface.
- Forbidden as brand imagery: real-person photos, headshots, event photos, screenshots, charts, data-viz.

## 7. Self-check before shipping
- [ ] Brand fonts loaded — headings render in **Instrument Serif** (weight 400), body in Lora, UI in Outfit.
- [ ] Only `--pi-*` tokens / `.pi-*` classes used (no raw hex/px).
- [ ] Correct vein's color + type + imagery emphasis.
- [ ] Display headings are weight 400.
- [ ] No forbidden imagery; artwork pulled from the house set.
- [ ] Any new component composed from existing tokens, not invented values.
