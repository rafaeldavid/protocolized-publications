---
version: alpha
name: Protocolized-brand-kit
description: Protocolized is the public-facing magazine and research library of the Protocol Institute, positioned with the tagline "Accelerating Order." The site is a serious editorial publication on protocols — protocol fiction, non-fiction articles, and a research corpus inherited from the Summer of Protocols program. Visually it is a warm, paper-toned, document-first design built on Tailwind. The brand kit's **primary color is electric cobalt blue ({colors.primary})**, sourced from the publication's Substack surface; a forest green ({colors.secondary}) is retained as the **secondary**, documenting what the live protocolized.io site currently renders (CTAs, italic-serif tagline, secondary CTA border, Framework badge) until the production site is updated to the new primary. Type is an all-serif headline scale set in **Instrument Serif** (weight 400), a long-form body face in **Lora** serif, and UI labels/buttons in **Outfit** sans. Resource cards are stamped with pill-shaped category badges ({components.badge-framework}, {components.badge-featured}); detail pages lead with a "Home › Resources › {Title}" breadcrumb and a long-form prose container of bold-term + definition pairs separated by horizontal rules. Coverage spans the homepage, /resources (filter pills + grid), /resources/{slug} detail, /about, /community, /magazine, and the Substack publication at protocolized.summerofprotocols.com.

colors:
  \# Brand primary — the brand kit's declared primary going forward. Sourced from the
  \# publication's Substack surface (protocolized.summerofprotocols.com).
  \# NOTE: the live protocolized.io site does NOT yet render CTAs in this color — it
  \# currently uses the secondary green below. Component descriptions in this kit point
  \# at {colors.primary} as the canonical (brand-kit) value; the secondary tokens
  \# document what the site actually serves today, pending a refresh.
  primary: "#0064ff"           # Electric cobalt — brand primary
  primary-pressed: "#004fcc"   # INFERRED — derived ~20% darker, for pressed/hover state
  primary-light-bg: "#e6efff"  # INFERRED — pale-blue tint, for potential badge/highlight backgrounds
  on-primary: "#ffffff"

  \# Secondary — the forest green currently rendered on protocolized.io
  \# (CTAs, italic tagline, secondary CTA border, Framework badge, search focus ring).
  \# Kept in the palette as a brand-supported secondary; treat as the working color
  \# for site components until the production site is updated to the new primary.
  secondary: "#0f6e56"           # Forest green — site-current CTA fill / tagline / secondary CTA border
  secondary-deep: "#085041"      # Deeper green — Framework badge text
  secondary-light-bg: "#e1f5ee"  # Soft mint-green — Framework badge background
  on-secondary: "#ffffff"

  \# Accent (warm rust — used on the Featured badge; reserved for emphasis)
  accent: "#d85a30"
  accent-bg: "#faece7"

  \# Surface
  canvas: "#f9f8f5"            # Page background — warm paper
  surface-white: "#ffffff"     # Card surface, section bands, footer
  surface-muted: "#f3f4f6"     # Soft pill / chip background (Tailwind gray-100)
  hairline: "#e5e7eb"          # 1px borders / dividers (Tailwind gray-200)
  hairline-soft: "#f3f4f6"     # Quieter dividers between sections (Tailwind gray-100)

  \# Text
  ink-dark: "#2c2c2a"          # Primary headlines / body emphasis ("text-dark")
  ink-secondary: "#5f5e5a"     # Secondary body, breadcrumbs, dek, meta ("text-secondary")
  on-dark: "#ffffff"

  \# Tailwind utility passthroughs observed in the build
  focus-ring: "rgb(15 110 86 / 0.30)"   # secondary green @ 30% — used on focus-ring-primary/30 in the live build (matches the current rendering)

typography:
  \# Font stacks come from the live :root custom properties.
  \# --font-serif: "Instrument Serif", Georgia, serif      → display + all headings (weight 400)
  \# --font-body : "Lora", Georgia, serif                  → long-form prose + default body
  \# --font-sans : "Outfit", system-ui, sans-serif         → UI labels, buttons, chips, badges, meta
  \# --font-mono : "JetBrains Mono", "Courier New", monospace → reserved (no observed surface use)

  hero-display:
	fontFamily: "{fonts.serif}"          # "Instrument Serif", Georgia, serif
	fontSize: 72px                       # H1 "Protocolized" on the homepage hero
	fontWeight: 400
	lineHeight: 72px                     # leading-none
	letterSpacing: -1.8px
  detail-display:
	fontFamily: "{fonts.serif}"
	fontSize: 48px                       # H1 on resource detail pages (e.g. "Protocol Lexicon")
	fontWeight: 400
	lineHeight: 48px                     # leading-tight
	letterSpacing: 0
  page-h1:
	fontFamily: "{fonts.serif}"
	fontSize: 36px                       # H1 on /resources ("Resources")
	fontWeight: 400
	lineHeight: 40px
  tagline-italic:
	fontFamily: "{fonts.serif}"
	fontSize: 30px                       # "Accelerating Order." — italic, in primary green
	fontWeight: 400
	lineHeight: 36px
	fontStyle: italic
  heading-section:
	fontFamily: "{fonts.serif}"
	fontSize: 24px                       # "Where do you want to start?", "Related resources"
	fontWeight: 400
	lineHeight: 32px
  heading-card:
	fontFamily: "{fonts.serif}"
	fontSize: 20px                       # Resource card / magazine item titles
	fontWeight: 400
	lineHeight: 28px
  heading-related:
	fontFamily: "{fonts.serif}"
	fontSize: 18px                       # Related-resources card titles
	fontWeight: 400
	lineHeight: 24.75px
  prose-lead:
	fontFamily: "{fonts.body}"           # "Lora", Georgia, serif
	fontSize: 18px                       # Lead/dek paragraph on detail pages ("text-lg leading-relaxed text-secondary")
	fontWeight: 400
	lineHeight: 29.25px
	color: "{colors.ink-secondary}"
  body-md:
	fontFamily: "{fonts.body}"
	fontSize: 16px                       # Default body
	fontWeight: 400
	lineHeight: 24px
  body-strong:
	fontFamily: "{fonts.body}"
	fontSize: 16px                       # **bold-term** in lexicon prose
	fontWeight: 700
	lineHeight: 24px
  button-md:
	fontFamily: "{fonts.sans}"           # "Outfit", system-ui, sans-serif
	fontSize: 16px                       # btn-primary / btn-secondary (text-base)
	fontWeight: 500
	lineHeight: 24px
  button-sm:
	fontFamily: "{fonts.sans}"
	fontSize: 14px                       # "Subscribe on Substack" smaller variant
	fontWeight: 500
	lineHeight: 20px
  nav-link:
	fontFamily: "{fonts.sans}"           # Header / footer nav (font-sans)
	fontSize: 14px
	fontWeight: 400
	lineHeight: 20px
  meta:
	fontFamily: "{fonts.sans}"
	fontSize: 14px                       # Breadcrumb links, footer links, topic tag chips
	fontWeight: 400
	lineHeight: 20px
  audience-tile-label:
	fontFamily: "{fonts.sans}"
	fontSize: 16px                       # Audience tile H3 (e.g. "Researchers") — sans, semibold
	fontWeight: 600
	lineHeight: 24px
  caption:
	fontFamily: "{fonts.sans}"
	fontSize: 12px                       # Badges, audience chips, filter pills
	fontWeight: 500
	lineHeight: 16px

fonts:
  \# Brand-kit preference: Computer Modern Serif is the preferred face for any serif use
  \# (display + body). Fall back to the open-source Unicode variants, then to Latin Modern,
  \# then to the typefaces actually loaded on the live site (Instrument Serif / Lora),
  \# then to the system serifs. This lets downstream consumers honor the brand-kit
  \# preference where Computer Modern is installable, and degrade gracefully otherwise.
  serif: "\"Computer Modern Serif\", \"CMU Serif\", \"Latin Modern Roman\", \"Instrument Serif\", Georgia, serif"
  body: "\"Computer Modern Serif\", \"CMU Serif\", \"Latin Modern Roman\", Lora, Georgia, serif"
  sans: "Outfit, system-ui, sans-serif"
  mono: "\"JetBrains Mono\", \"Courier New\", monospace"
  \# Notes on Computer Modern as a webfont:
  \#   - "Computer Modern Serif" is the family name commonly used by free web-font hosts
  \#     (e.g. cdnfonts.com/computer-modern.font).
  \#   - "CMU Serif" is the Computer Modern Unicode project's family name (open source).
  \#   - "Latin Modern Roman" (lmodern) is the actively maintained successor of CM and is
  \#     widely packaged on Linux/TeX distros.
  \# The live site does NOT serve Computer Modern; the typefaces actually loaded are
  \# Instrument Serif (--font-serif) and Lora (--font-body). The fallbacks below them in
  \# the stack ensure the live site continues to render correctly.

rounded:
  sm: 4px
  md: 8px      # Buttons, inputs, cards
  lg: 12px
  pill: 9999px # Badges, audience chips, filter pills, topic tags

spacing:
  \# Tailwind defaults observed in the build (4px base)
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  section-sm: 48px
  section: 64px      # py-16 (most content sections)
  section-lg: 112px  # py-20 md:py-28 (hero)

components:
  \# ---------- Buttons ----------
  button-primary:
	backgroundColor: "{colors.primary}"
	textColor: "{colors.on-primary}"
	typography: "{typography.button-md}"
	rounded: "{rounded.md}"
	padding: "12px 24px"
	# class on the live site: "btn-primary text-base px-6 py-3"
	# Used as: "Explore resources" (hero), "Subscribe on Substack" (smaller — see button-primary-sm)
  button-primary-sm:
	backgroundColor: "{colors.primary}"
	textColor: "{colors.on-primary}"
	typography: "{typography.button-sm}"
	rounded: "{rounded.md}"
	padding: "10px 20px"
  button-secondary:
	backgroundColor: "transparent"
	textColor: "{colors.primary}"
	typography: "{typography.button-md}"
	rounded: "{rounded.md}"
	padding: "12px 24px"
	border: "1px solid {colors.primary}"
	# Used as: "Join the community" — primary-green outlined CTA (NOT a neutral outline)
  button-link:
	backgroundColor: "transparent"
	textColor: "{colors.primary}"
	typography: "{typography.meta}"
	padding: "0"
	# Inline text links with "→" suffix: "Browse resources →", "View all →", "View all on Substack →"

  \# ---------- Navigation ----------
  top-nav:
	backgroundColor: "{colors.surface-white}"
	height: 64px                         # h-16
	padding: "0 {spacing.xl}"
	border: "0 0 1px {colors.hairline} solid"
	# Layout: PNG wordmark (/protocolized_mark.png) on the left; 5 nav links on the right
	# (Home / Resources / About / Community / Magazine).
  nav-link:
	backgroundColor: "transparent"
	textColor: "{colors.ink-dark}"
	typography: "{typography.nav-link}"
	padding: "{spacing.xs} {spacing.sm}"
  nav-logo:
	height: 32px                         # observed wordmark max-height (PNG)

  \# ---------- Hero ----------
  hero-band:
	backgroundColor: "{colors.canvas}"
	textColor: "{colors.ink-dark}"
	padding: "112px 32px"                # py-20 md:py-28 px-6 lg:px-8
	# Layout: centered text block — H1 (hero-display, 72px Instrument Serif) → italic tagline in primary green
	# (tagline-italic, 30px) → descriptive paragraph (prose-lead-ish, 18px Lora) → button row
	# (button-primary "Explore resources" + button-secondary "Join the community"). No mockup illustration.
  hero-tagline:
	typography: "{typography.tagline-italic}"
	textColor: "{colors.primary}"        # IMPORTANT: tagline is italic green, set in Instrument Serif

  \# ---------- Magazine strip ----------
  magazine-section:
	backgroundColor: "{colors.surface-white}"
	padding: "{spacing.section} {spacing.xxl}"
	border: "1px 0 1px {colors.hairline-soft} solid"
	# Section: py-16 px-6 lg:px-8 bg-white border-y border-gray-100
  magazine-item:
	backgroundColor: "transparent"
	padding: "{spacing.lg} 0"
	border: "0 0 1px {colors.hairline-soft} solid"
	# Stack: heading-card (20px Instrument Serif, links to Substack) → dek (body-md Lora) → date (meta)

  \# ---------- Audience-routing tiles ----------
  audience-tile:
	backgroundColor: "{colors.surface-white}"
	textColor: "{colors.ink-dark}"
	rounded: "{rounded.md}"
	padding: "{spacing.xl}"
	border: "1px solid {colors.hairline}"
	# Live class: "card p-6 flex flex-col gap-3 hover:border-primary-light hover:shadow-sm transition"
	# 4-up grid: 🔬 Researchers / ⚙️ Practitioners / 📚 Academics / 🏢 Corporate Partners
	# Each tile links to /resources?audience={role}
  audience-tile-icon:
	fontSize: 28px                       # emoji icon (rendered glyph)
	marginBottom: "{spacing.md}"
  audience-tile-label:
	typography: "{typography.audience-tile-label}"
	textColor: "{colors.ink-dark}"
	# The audience LABEL ("Researchers") is sans (Outfit) semibold — NOT serif.
  audience-tile-desc:
	typography: "{typography.body-md}"
	textColor: "{colors.ink-dark}"

  \# ---------- Resource cards ----------
  card-resource:
	backgroundColor: "{colors.surface-white}"
	textColor: "{colors.ink-dark}"
	rounded: "{rounded.md}"
	padding: "{spacing.lg}"              # p-5 on /resources grid; p-6 on Featured / audience tiles
	border: "1px solid {colors.hairline}"
	# Live class: "card p-5 flex flex-col gap-3 resource-item relative"
	# Stack: badge-category (+ badge-featured if applicable) → heading-card title (links to detail page)
	# → dek (body-md Lora) → topic tag-chip row → meta line (date + author/org).
  card-resource-featured:
	backgroundColor: "{colors.surface-white}"
	textColor: "{colors.ink-dark}"
	rounded: "{rounded.md}"
	padding: "{spacing.xl}"              # featured variant uses larger padding
	border: "1px solid {colors.hairline}"

  \# ---------- Badges (all pill-shaped, 12px Outfit, weight 500) ----------
  badge-framework:
	backgroundColor: "{colors.secondary-light-bg}"  # #e1f5ee
	textColor: "{colors.secondary-deep}"            # #085041
	typography: "{typography.caption}"
	rounded: "{rounded.pill}"
	padding: "2px 10px"
	# Live class: "badge font-sans"
  badge-featured:
	backgroundColor: "{colors.accent-bg}"         # #faece7
	textColor: "{colors.accent}"                  # #d85a30
	typography: "{typography.caption}"
	rounded: "{rounded.pill}"
	padding: "2px 10px"
	# Live class: "badge font-sans text-[#D85A30]"

  \# ---------- Filter pills (resources index) ----------
  filter-pill:
	backgroundColor: "transparent"
	textColor: "{colors.ink-secondary}"
	typography: "{typography.caption}"
	rounded: "{rounded.pill}"
	padding: "6px 12px"
	border: "1px solid {colors.hairline}"
	# Live class: "filter-pill font-sans text-xs px-3 py-1.5 rounded-full border border-gray-200 ..."
	# Labels observed: Framework / Paper / Talk / Lecture / Article / Game / Featured
  filter-pill-active:
	backgroundColor: "{colors.primary}"           # INFERRED from .group-has-[:checked]:bg-primary in the build
	textColor: "{colors.on-primary}"
	border: "1px solid {colors.primary}"

  \# ---------- Topic tag chips ----------
  tag-chip:
	backgroundColor: "{colors.surface-muted}"     # #f3f4f6 (gray-100)
	textColor: "{colors.ink-secondary}"           # #5f5e5a
	typography: "{typography.meta}"               # 14px Outfit
	rounded: "{rounded.pill}"
	padding: "6px 12px"
	# Live class: "text-sm font-sans bg-gray-100 text-secondary px-3 py-1.5 rounded-full ..."
	# Examples: "protocols", "theory", "reference"

  \# ---------- Audience chip (detail-page header) ----------
  audience-chip:
	backgroundColor: "{colors.surface-muted}"
	textColor: "{colors.ink-secondary}"
	typography: "{typography.caption}"            # 12px Outfit
	rounded: "{rounded.pill}"
	padding: "4px 10px"
	textTransform: capitalize
	# Live class: "text-xs font-sans bg-gray-100 text-secondary px-2.5 py-1 rounded-full ..."
	# Examples: researcher / practitioner / academic — links to /resources?audience={role}

  \# ---------- Detail-page breadcrumb ----------
  breadcrumb:
	backgroundColor: "transparent"
	textColor: "{colors.ink-secondary}"
	typography: "{typography.meta}"
	margin: "0 0 32px"                            # mb-8
	# Pattern: Home › Resources › {Title} — literal "›" separator
  breadcrumb-link:
	backgroundColor: "transparent"
	textColor: "{colors.ink-secondary}"
	typography: "{typography.meta}"

  \# ---------- Long-form prose ----------
  prose-container:
	backgroundColor: "transparent"
	textColor: "{colors.ink-dark}"
	typography: "{typography.body-md}"
	maxWidth: "none"                              # max-w-none — the container does not constrain width
	margin: "0 0 32px"                            # mb-8
	# Live class: "prose font-body text-dark max-w-none mb-8"
	# Contains bold-term + definition pairs (**term** definition...) plus *italic source attribution*.
  prose-lead:
	typography: "{typography.prose-lead}"        # 18px Lora, color text-secondary
	textColor: "{colors.ink-secondary}"
  prose-hr:
	backgroundColor: "transparent"
	border: "1px 0 0 {colors.hairline} solid"     # default <hr> styling — 1px top border in hairline
	# Used to separate thematic groupings in the lexicon (every ~5–10 entries).

  \# ---------- Related-resources strip ----------
  related-section:
	backgroundColor: "transparent"
	padding: "{spacing.section} 0"
  related-heading:
	typography: "{typography.heading-section}"   # 24px Instrument Serif "Related resources"
	margin: "0 0 {spacing.xl}"

  \# ---------- CTA panels ----------
  cta-panel:
	backgroundColor: "{colors.surface-white}"
	textColor: "{colors.ink-dark}"
	padding: "{spacing.section} {spacing.xxl}"
	border: "1px 0 1px {colors.hairline-soft} solid"
	# py-16 px-6 lg:px-8 bg-white border-t border-gray-100 — used on "Stay current." and "Get involved"

  \# ---------- Search input (resources index) ----------
  search-input:
	backgroundColor: "{colors.surface-white}"
	textColor: "{colors.ink-dark}"
	typography: "{typography.button-sm}"          # 14px Outfit
	rounded: "{rounded.md}"
	padding: "10px 16px 10px 36px"                # left padding leaves room for the search icon
	border: "1px solid {colors.hairline}"
  search-input-focused:
	border: "1px solid {colors.primary}"
	boxShadow: "0 0 0 2px {colors.focus-ring}"    # focus:ring-2 focus:ring-primary/30

  \# ---------- Footer ----------
  footer-region:
	backgroundColor: "{colors.surface-white}"
	textColor: "{colors.ink-dark}"
	typography: "{typography.nav-link}"
	padding: "{spacing.section} {spacing.xxl}"
	border: "1px 0 0 {colors.hairline} solid"
	# Columns observed: brand blurb / Pages / Links (incl. external) + social row (Discord / YouTube / Magazine)
  footer-link:
	backgroundColor: "transparent"
	textColor: "{colors.ink-secondary}"
	typography: "{typography.nav-link}"
	padding: "{spacing.xxs} 0"
  footer-external-link:
	# Same styling as footer-link; suffixed with " ↗" glyph for external destinations.
	backgroundColor: "transparent"
	textColor: "{colors.ink-secondary}"
	typography: "{typography.nav-link}"

shadows:
  card-hover: "0 1px 2px 0 rgb(0 0 0 / 0.05)"     # Tailwind shadow-sm — applied on .card:hover
  shadow-default: "0 1px 3px 0 rgb(0 0 0 / 0.10), 0 1px 2px -1px rgb(0 0 0 / 0.10)"  # Tailwind shadow

assets:
  \# Public mirror — the canonical, LLM-fetchable home for brand assets ONCE DEPLOYED.
  \# Any HTTP-fetch agent (plain WebFetch / curl / any LLM with web access) can read
  \# these files directly with no auth. Prefer this over the Drive fallback once the
  \# mirror is reachable (currently returns 404 — pending deployment).
  public-mirror: "https://protocolized.io/brand/"
  \# Fallback — Google Drive folder. Use this until the public mirror is deployed.
  \# Agents with a Google Drive connector (Claude with the GDrive MCP, Cowork's Drive
  \# plugin, ChatGPT with Drive, etc.) can read this folder by ID. This is also the
  \# editable working store: new or updated assets go here first, then get mirrored
  \# to the public URL above.
  drive-folder-fallback: "https://drive.google.com/drive/folders/1HWjfUgw0SzrNuG\_6cH2WBPBE8\_UHnmKp?usp=sharing"
  drive-folder-id: "1HWjfUgw0SzrNuG\_6cH2WBPBE8\_UHnmKp"
  \# Individual asset URL(s) known to be publicly fetchable today (live site root):
  wordmark-png: "https://protocolized.io/protocolized\_mark.png"
---

## Overview

Protocolized presents itself as the public-facing magazine and research library of the **Protocol Institute**, anchored by the tagline **"Accelerating Order."** The visual identity is warm and editorial: a paper-toned canvas ({colors.canvas}), a deep forest-green primary ({colors.primary}) used for CTAs and the italic-serif tagline, and an all-serif headline scale set in **Instrument Serif** at weight 400 (NOT a bold display sans). Body prose is set in **Lora** serif; UI labels, buttons, badges, breadcrumbs, and meta lines are in **Outfit** sans. The site is built on Tailwind CSS.

The home page opens with a top nav (PNG wordmark + 5 links: Home / Resources / About / Community / Magazine), then a generous hero band ({components.hero-band}, padding `112px 32px`): a 72px serif H1 "Protocolized", an italic 30px green tagline "Accelerating Order.", a descriptive paragraph, and a two-button row pairing a filled primary CTA ({components.button-primary} "Explore resources") with a green-outlined secondary ({components.button-secondary} "Join the community"). Note the secondary CTA uses the **primary green** as its border and text, not a neutral hairline.

Below the hero, the page cycles through: a **"Latest from the magazine"** strip of Substack posts ({components.magazine-item}); a **"Where do you want to start?"** 4-up audience-routing grid ({components.audience-tile}: 🔬 Researchers / ⚙️ Practitioners / 📚 Academics / 🏢 Corporate Partners) where the emoji-icon-+-label pattern uses sans Outfit for the label even though the surrounding type is serif; a **"Featured resources"** grid using {components.card-resource} (each card carries a category pill — `Framework` is mint-green, `Featured` is rust — plus title, dek, topic tag chips, and a date/author meta line); and a **"Stay current."** Substack subscribe panel.

The resources index (`/resources`) adds a search input ({components.search-input}) and a row of **filter pills** ({components.filter-pill} — transparent with a hairline border for unselected, primary green when selected). Resource detail pages lead with a 32px-spaced breadcrumb ({components.breadcrumb}: `Home › Resources › {Title}` with literal `›` glyph), then a 48px serif H1, then a long-form prose container ({components.prose-container}) of `**term**` definition pairs separated by `<hr>` rules, and finally a "Related resources" strip ({components.related-section}).

**Key Characteristics (observed):**
- Forest-green primary `#0f6e56` — the brand's dominant accent. Used as the CTA fill, the secondary CTA border + text, and the italic-tagline color.
- Warm rust `#d85a30` — the only other "branded" color in use, reserved for the `Featured` pill and very limited emphasis.
- All headlines are **Instrument Serif at weight 400** (regular, not bold). This is a defining choice — the visual restraint comes from never using a heavy display weight.
- The hero tagline is set in **italic Instrument Serif in primary green** — an unmistakable signature element.
- Body prose is **Lora** (serif), not a sans — the lexicon and magazine read as a publication.
- UI surfaces (buttons, badges, chips, breadcrumbs, meta) flip to **Outfit** sans for legibility at small sizes.
- Badges and chips are uniformly **pill-shaped** (border-radius `9999px`).
- Cards use 1px `#e5e7eb` borders, no resting shadow; `shadow-sm` appears only on hover.
- Tailwind utility build — confirmed by classes like `card`, `btn-primary`, `btn-secondary`, `badge`, `filter-pill`, `font-serif`, `font-body`, `font-sans`.

## Assets

Brand assets (logos, wordmarks, social cards, etc.) have two homes:

- **Public mirror (canonical, once deployed):** `{assets.public-mirror}` — the brand kit's permanent, LLM-fetchable home. Directly readable by any agent with web access; no authentication required. **Currently returns 404 — deployment pending.**
- **Google Drive folder (fallback, in use today):** `{assets.drive-folder-fallback}` — the working store. Use this **until the public mirror is deployed**. Folder ID: `{assets.drive-folder-id}`.
- **Live wordmark (PNG):** `{assets.wordmark-png}` — the wordmark already served from the live site's root. Publicly fetchable today and unaffected by the mirror deployment.

**How LLMs should access the assets**

The selection rule is: try the public mirror first; fall back to the Drive folder if the mirror returns 404 or hasn't been deployed yet.

- **Once the public mirror is live:** every agent should fetch from `{assets.public-mirror}`. Any LLM or tool that can make HTTP requests can read these files with no auth interstitial. The Drive folder reverts to "editable source" only.
- **Until then (today):**
  - **Agents with a Google Drive connector** (Claude with the Google Drive MCP, Cowork's Drive plugin, ChatGPT with Drive integration, and similar setups) should read the Drive folder directly by ID. This is the explicit fallback path.
  - **Agents without Drive access** (plain `WebFetch` / `curl` / HTTP-only) cannot read the Drive folder — Google returns auth interstitials, not asset content. For these agents, the only publicly fetchable asset today is `{assets.wordmark-png}`. Any other asset will require the user to either deploy the public mirror or download from Drive manually.

> **Status note (verify before relying):** at the time this kit was last updated, a probe of `{assets.public-mirror}` and several plausible asset filenames under it returned 404, suggesting the mirror has not yet been deployed (or its filename conventions differ from what's documented here). Consumers should treat 404s as a deployment lag, not permanent breakage, and use the Drive fallback above. Once the mirror is confirmed live, update this section to drop the fallback framing and demote the Drive folder back to "editable source only."

## Colors

> Sampled live from `https://protocolized.io/` and `https://protocolized.io/resources/protocol-lexicon` via computed styles on 2026-05-20.

### Brand & Primary

The brand kit's declared **primary is electric cobalt blue** (`#0064ff`), sourced from the publication's Substack surface. The forest green that currently renders on protocolized.io (CTA fills, tagline, secondary CTA border, Framework badge, search focus ring) is retained as **secondary** — a brand-supported, working color until the production site is updated to the new primary.

This is an aspirational specification: component definitions in this kit resolve `{colors.primary}` to the blue, while the live site still serves green. Downstream consumers should use the blue for new artifacts and treat the secondary green as the legacy match-the-site color for any existing UI surface.

- **Primary** ({colors.primary}): Electric cobalt — the brand-kit primary going forward. Use for CTA fills, headline highlights, link emphasis, and any new display surface.
- **Primary Pressed** ({colors.primary-pressed}): Derived darker variant for hover/pressed state — INFERRED (~20% darker).
- **Primary Light Bg** ({colors.primary-light-bg}): Pale-blue tint for highlight backgrounds — INFERRED.
- **Secondary** ({colors.secondary}): Forest green — what the live site currently serves on `button-primary`, `button-secondary` border + text, the italic tagline, the search-input focus ring, and the active filter pill. Treat as the site-current working color until the production site adopts the new primary.
- **Secondary Deep** ({colors.secondary-deep}): Deeper green used as the text color on the Framework badge tint.
- **Secondary Light Bg** ({colors.secondary-light-bg}): Mint-green tint used as the Framework badge background.

### Accent (warm rust)
- **Accent** ({colors.accent}): Rust/terracotta — used on the Featured badge text and limited inline accents.
- **Accent Bg** ({colors.accent-bg}): Soft peach used as the Featured badge background.

### Surface
- **Canvas** ({colors.canvas}): Warm-paper page background.
- **Surface White** ({colors.surface-white}): Card surface, section bands, footer, and the top nav.
- **Surface Muted** ({colors.surface-muted}): Soft gray (Tailwind gray-100) used for tag chips, audience chips, and quieter section dividers.
- **Hairline** ({colors.hairline}): 1px borders on cards, inputs, the top-nav underline, and the footer top border (Tailwind gray-200).
- **Hairline Soft** ({colors.hairline-soft}): Quieter 1px dividers between content sections (Tailwind gray-100).

### Text
- **Ink Dark** ({colors.ink-dark}): Primary headlines and body text — a warm near-black with a slight olive cast.
- **Ink Secondary** ({colors.ink-secondary}): Secondary body, breadcrumbs, dek paragraphs, meta lines, tag chips, audience chips, and footer links.
- **On Primary / On Dark** ({colors.on-primary}): White text on green or dark surfaces.

## Typography

### Font Stacks

This brand kit **prefers Computer Modern Serif** for all serif surfaces (display + body), and falls back gracefully to the typefaces actually served by the live site. The preferred stacks are:

| Token           | Stack                                                                                            | Role                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| `{fonts.serif}` | `"Computer Modern Serif", "CMU Serif", "Latin Modern Roman", "Instrument Serif", Georgia, serif` | All headings (h1–h3), hero, italic tagline                                        |
| `{fonts.body}`  | `"Computer Modern Serif", "CMU Serif", "Latin Modern Roman", Lora, Georgia, serif`               | Long-form prose, default body, dek paragraphs                                     |
| `{fonts.sans}`  | `"Outfit", system-ui, sans-serif`                                                                | Buttons, badges, chips, breadcrumbs, meta, audience-tile labels, footer/nav links |
| `{fonts.mono}`  | `"JetBrains Mono", "Courier New", monospace`                                                     | Reserved (no observed surface use on the inspected pages)                         |

The live site does **not** load Computer Modern; it currently serves Instrument Serif (`--font-serif`) and Lora (`--font-body`) via Google Fonts. The stacks above are the **brand-kit preference** — downstream consumers that have Computer Modern available (LaTeX-style web font, self-hosted CMU Serif via `@font-face`, or a system install) should render with it; everyone else gets the live-site typefaces unchanged.

Common sources for Computer Modern as a webfont: the **CMU (Computer Modern Unicode)** project, the **Latin Modern** project (lmodern), or hosted free-font services that publish a `"Computer Modern Serif"` family. Any of those installed via `@font-face` will match the first family name in the stack and take effect automatically.

### Hierarchy (sampled from rendered computed styles)

| Token                              | Family                    | Size | Weight | Line Height | Letter Spacing | Use                                                             |
| ---------------------------------- | ------------------------- | ---- | ------ | ----------- | -------------- | --------------------------------------------------------------- |
| `{typography.hero-display}`        | Instrument Serif          | 72px | 400    | 72px        | -1.8px         | Homepage hero H1 "Protocolized"                                 |
| `{typography.detail-display}`      | Instrument Serif          | 48px | 400    | 48px        | 0              | Resource detail H1 (e.g. "Protocol Lexicon")                    |
| `{typography.page-h1}`             | Instrument Serif          | 36px | 400    | 40px        | 0              | Index page H1 (e.g. "Resources")                                |
| `{typography.tagline-italic}`      | Instrument Serif *italic* | 30px | 400    | 36px        | 0              | Hero tagline "Accelerating Order." (in primary green)           |
| `{typography.heading-section}`     | Instrument Serif          | 24px | 400    | 32px        | 0              | Section H2 ("Where do you want to start?", "Related resources") |
| `{typography.heading-card}`        | Instrument Serif          | 20px | 400    | 28px        | 0              | Card / magazine-item titles                                     |
| `{typography.heading-related}`     | Instrument Serif          | 18px | 400    | 24.75px     | 0              | Related-resources card titles                                   |
| `{typography.prose-lead}`          | Lora                      | 18px | 400    | 29.25px     | 0              | Lead/dek paragraph (`text-lg leading-relaxed text-secondary`)   |
| `{typography.body-md}`             | Lora                      | 16px | 400    | 24px        | 0              | Default body                                                    |
| `{typography.body-strong}`         | Lora                      | 16px | 700    | 24px        | 0              | `**term**` bold in lexicon prose                                |
| `{typography.button-md}`           | Outfit                    | 16px | 500    | 24px        | 0              | Hero buttons (`btn-primary`, `btn-secondary`)                   |
| `{typography.button-sm}`           | Outfit                    | 14px | 500    | 20px        | 0              | Smaller CTA ("Subscribe on Substack")                           |
| `{typography.audience-tile-label}` | Outfit                    | 16px | 600    | 24px        | 0              | Audience-tile labels (e.g. "Researchers")                       |
| `{typography.nav-link}`            | Outfit                    | 14px | 400    | 20px        | 0              | Nav links, footer links                                         |
| `{typography.meta}`                | Outfit                    | 14px | 400    | 20px        | 0              | Breadcrumbs, tag chips, meta rows                               |
| `{typography.caption}`             | Outfit                    | 12px | 500    | 16px        | 0              | Badges, audience chips, filter pills                            |

### Principles
- Headlines are **regular weight (400)** Instrument Serif — the editorial restraint is intentional. Do NOT bump display headings to 600/700.
- The hero tagline is *italic* and set in the primary brand color — a defining accent.
- The visual rhythm pairs serif display + serif body with sans **only** at small UI sizes (≤16px). Anything 18px+ is serif.
- Lora body uses generous 1.5–1.65 leading for documentation readability.

## Components

> All tokens reference the frontmatter. Per the analogous Notion DESIGN.md convention, hover states are not documented.

### Buttons

**`button-primary`** — Filled primary CTA on forest green.
- Background `{colors.primary}`, text `{colors.on-primary}`, typography `{typography.button-md}`, padding `12px 24px`, rounded `{rounded.md}`. Used as the hero "Explore resources" CTA.

**`button-primary-sm`** — Smaller filled variant used in CTA panels.
- Same colors as `button-primary`, but typography `{typography.button-sm}` and padding `10px 20px`. Used on "Subscribe on Substack".

**`button-secondary`** — Outlined CTA in **primary green** (NOT a neutral border).
- Background transparent, text `{colors.primary}`, border `1px solid {colors.primary}`, typography `{typography.button-md}`, padding `12px 24px`, rounded `{rounded.md}`. Used as "Join the community".

**`button-link`** — Inline text link with `→` glyph suffix.
- Background transparent, text `{colors.primary}`, typography `{typography.meta}`, padding `0`. Examples: "Browse resources →", "View all →", "View all on Substack →".

### Navigation

**`top-nav`** — Sticky white header.
- Background `{colors.surface-white}`, height `64px`, padding `0 {spacing.xl}`, bottom border `1px solid {colors.hairline}`.
- Left: PNG wordmark (`/protocolized_mark.png`) at `{components.nav-logo}` (\~32px tall).
- Right: 5 nav links (Home / Resources / About / Community / Magazine) in Outfit sans 14px.

### Hero

**`hero-band`** — Centered editorial hero (no mockup illustration).
- Background `{colors.canvas}`, padding `112px 32px`. Stack: hero-display H1 → tagline (`tagline-italic` in `{colors.primary}`) → description (`prose-lead`-like 18px Lora) → button row (`button-primary` + `button-secondary`).

### Magazine Strip

**`magazine-section`** — "Latest from the magazine" feed of Substack posts.
- Background `{colors.surface-white}`, padding `{spacing.section} {spacing.xxl}`, top + bottom border `1px {colors.hairline-soft} solid`.

**`magazine-item`** — Individual post link.
- Padding `{spacing.lg} 0`, bottom border `1px solid {colors.hairline-soft}`. Stack: title (`heading-card`) → dek (`body-md`) → date (`meta`).

### Audience-Routing Tiles

**`audience-tile`** — One of four entry-point cards on "Where do you want to start?"
- Background `{colors.surface-white}`, rounded `{rounded.md}`, padding `{spacing.xl}`, border `1px solid {colors.hairline}`. Live class: `card p-6 flex flex-col gap-3 ...`.
- Internal stack: emoji icon (28px) → `audience-tile-label` (sans 16px **semibold** Outfit — note the deliberate sans break inside the otherwise serif design) → `audience-tile-desc` (`body-md`) → `button-link` "Browse resources →".
- Observed icons / routes: 🔬 Researchers → `/resources?audience=researcher`, ⚙️ Practitioners → `?audience=practitioner`, 📚 Academics → `?audience=academic`, 🏢 Corporate Partners → `?audience=corporate`.

### Resource Cards

**`card-resource`** — Resource library card (used on `/resources` and as the Featured tile on the homepage).
- Background `{colors.surface-white}`, rounded `{rounded.md}`, padding `{spacing.lg}` (`p-5`), border `1px solid {colors.hairline}`. Live class: `card p-5 flex flex-col gap-3 resource-item relative`.
- Stack: badge row (e.g. `badge-framework` + `badge-featured`) → `heading-card` title (link to detail page) → dek (`body-md`) → topic `tag-chip` row → meta row (date + author/org in `meta`).

**`card-resource-featured`** — Larger-padding variant used in the homepage "Featured resources" slot.
- Same as `card-resource` but with padding `{spacing.xl}` (`p-6`).

### Badges (pill-shaped, 12px Outfit weight 500)

**`badge-framework`** — Green/mint pill.
- Background `{colors.secondary-light-bg}` `#e1f5ee`, text `{colors.secondary-deep}` `#085041`, typography `{typography.caption}`, rounded `{rounded.pill}`, padding `2px 10px`. Live class: `badge font-sans`.

**`badge-featured`** — Rust pill.
- Background `{colors.accent-bg}` `#faece7`, text `{colors.accent}` `#d85a30`, typography `{typography.caption}`, rounded `{rounded.pill}`, padding `2px 10px`. Live class: `badge font-sans text-[#D85A30]`.

> Other category labels (Paper / Talk / Lecture / Article / Game / Anthology / Workshop / etc.) appear on `/resources` as **filter pills** rather than category badges. On detail-page card stamps they likely share the `badge` class — sample a representative card of each type before assigning per-category tint hexes; only `Framework` and `Featured` were directly observed in this pass.

### Filter Pills (resources index)

**`filter-pill`** — Unselected category filter (a row of these sits above the resource grid).
- Background transparent, text `{colors.ink-secondary}`, border `1px solid {colors.hairline}`, typography `{typography.caption}`, rounded `{rounded.pill}`, padding `6px 12px`. Live class: `filter-pill font-sans text-xs px-3 py-1.5 rounded-full border border-gray-200 ...`.

**`filter-pill-active`** — Selected state (inferred from `.group-has-[:checked]:bg-primary` utility).
- Background `{colors.primary}`, text `{colors.on-primary}`, border `1px solid {colors.primary}`. Verify against an actually-active filter on the live site.

### Chips

**`tag-chip`** — Topic tag chip ("protocols", "theory", "reference").
- Background `{colors.surface-muted}`, text `{colors.ink-secondary}`, typography `{typography.meta}`, rounded `{rounded.pill}`, padding `6px 12px`. Live class: `text-sm font-sans bg-gray-100 text-secondary px-3 py-1.5 rounded-full ...`.

**`audience-chip`** — Smaller audience-filter chip in the detail-page header.
- Background `{colors.surface-muted}`, text `{colors.ink-secondary}`, typography `{typography.caption}`, rounded `{rounded.pill}`, padding `4px 10px`, `text-transform: capitalize`. Live class: `text-xs font-sans bg-gray-100 text-secondary px-2.5 py-1 rounded-full ...`.

### Detail-Page Components

**`breadcrumb`** — Detail-page breadcrumb.
- Text `{colors.ink-secondary}`, typography `{typography.meta}`, bottom margin `32px`. Pattern: `Home › Resources › {Title}` (literal `›` glyph).

**`prose-container`** — Long-form prose body (e.g. the Protocol Lexicon).
- Background transparent, text `{colors.ink-dark}`, default body typography (`body-md` Lora 16px), `max-width: none`. Live class: `prose font-body text-dark max-w-none mb-8`.
- Composition: lead paragraph in `prose-lead` (18px Lora secondary), then `**term**` (`body-strong`) + definition pairs (`body-md`), with `*Source: …*` attribution in italics. `<hr>` rules (`prose-hr`) separate thematic clusters every 5–10 entries.

**`prose-hr`** — Default `<hr>` rule.
- 1px top border in `{colors.hairline}`.

### Related-Resources Strip

**`related-section`** — Section that closes a detail page.
- Padding `{spacing.section} 0`. Heading `related-heading` (24px Instrument Serif "Related resources"). Reuses `card-resource` for the items beneath.

### CTA Panels

**`cta-panel`** — Section-band CTA ("Stay current.", "Get involved").
- Background `{colors.surface-white}`, padding `{spacing.section} {spacing.xxl}`, top + bottom border `1px solid {colors.hairline-soft}`.

### Forms

**`search-input`** — Resources-index search field.
- Background `{colors.surface-white}`, text `{colors.ink-dark}`, typography `{typography.button-sm}` (Outfit 14px), border `1px solid {colors.hairline}`, rounded `{rounded.md}`, padding `10px 16px 10px 36px` (left padding reserves space for the icon).
- Focus: border switches to `{colors.primary}` plus a 2px ring of `{colors.focus-ring}` (primary @ 30% opacity).

### Footer

**`footer-region`** — Multi-column light footer.
- Background `{colors.surface-white}`, padding `{spacing.section} {spacing.xxl}`, top border `1px solid {colors.hairline}`.
- Columns: brand blurb / Pages (Resources / About / Community / Magazine) / Links (Protocol Institute ↗ / SoP Archive ↗ / llms.txt / RSS feed) + a social row (Discord / YouTube / Magazine).

**`footer-link`** — Internal footer link.
- Text `{colors.ink-secondary}`, typography `{typography.nav-link}`, padding `{spacing.xxs} 0`.

**`footer-external-link`** — Same styling as `footer-link`, plus an `↗` glyph suffix to mark external destinations.

## Known Gaps

- **Primary/secondary divergence from the live site.** This brand kit declares electric cobalt blue ({colors.primary}) as the primary color, but `https://protocolized.io/` still renders CTAs, the italic tagline, the secondary CTA border, the Framework badge, and the search focus ring in forest green ({colors.secondary}). Treat the kit as aspirational for now; until the production site is updated, downstream consumers reproducing the live site should use the secondary tokens.
- **Primary blue variants are derived defaults.** `{colors.primary-pressed}` and `{colors.primary-light-bg}` were not sampled from a live surface (the only observed instance of the primary blue is the Substack Subscribe CTA, which has no surfaced pressed-state value). Refine once the site adopts the new primary and a real button system exists in production.
- **Public mirror not yet reachable.** `{assets.public-mirror}` (`https://protocolized.io/brand/`) returned 404 when probed. Use `{assets.drive-folder-fallback}` (the Google Drive folder) as the fallback until the mirror is deployed. Remove this note and demote the Drive folder back to "editable source only" once the mirror is confirmed live.
- Only **two category-badge tints** were directly observed in this pass (Framework green, Featured rust). The remaining category labels (Paper / Talk / Lecture / Article / Game / Anthology / Workshop / etc.) appear as neutral filter pills on `/resources` but likely have their own tint hexes when stamped on individual resource cards. Sample one card of each type to fill these in.
- The **active filter-pill** state (`{components.filter-pill-active}`) was inferred from the `.group-has-[:checked]:bg-primary` Tailwind utility — verify against an actually-active filter.
- **Dark mode** was not investigated. Check whether the site honors `prefers-color-scheme`.
- **Hover, focus, and active states** intentionally omitted (per the analogous Notion DESIGN.md convention) except for the search-input focus, which was captured.
- **Responsive breakpoints, mobile typography, image behavior** were not documented per the agreed lighter scope. The build uses Tailwind's default `sm` / `md` / `lg` breakpoints (`text-5xl md:text-6xl lg:text-7xl` on the hero, etc.) if you need to flesh this out later.
- **JetBrains Mono** is declared as `--font-mono` but no surface using it was observed on the inspected pages.
