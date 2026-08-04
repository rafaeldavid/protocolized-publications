# Protocolized Publications

Three self-contained reports published under `npc.here.now`:

| Directory | URL | Description |
| --- | --- | --- |
| `template-site/` | [npc.here.now/template](https://npc.here.now/template/) | A self-documenting report template. Meta-documentation for the surface itself. |
| `ai-org-site/` | [npc.here.now/ai-org](https://npc.here.now/ai-org/) | *Org Design After Code Commoditisation* — P4BSIG working paper with a companion drag-drop [org-chart exercise](https://npc.here.now/ai-org/exercise/). |
| `wthapi-site/` | [npc.here.now/wthapi](https://npc.here.now/wthapi/) | *APIs: What They Are, What They Solve, What They Cost* — ten questions for protocol-literate operators, with an interactive four-door comparison. |
| `protocolinstitute-brandkit/` | [npc.here.now/protocolintstitutebrandkit](https://npc.here.now/protocolintstitutebrandkit/) | The Protocol Institute brand kit — tokens, type, logo, house art set, voice, and components, for humans and agents. |
| `ai-capability-maturity-model/` | (research project) | AI Capability Maturity Model — desk research, litepaper, blog post, and model development under P4BSIG. Migrated from `rafathebuilder-ZK/protocols-AI-capability-maturity-model`. |

## Shape

Each site is **one self-contained HTML file per page** (plus icons, OG cards, and a canonical markdown source). No build step, no CMS, no tracking, no backend. Styles and JS are inline. External dependencies: Google Fonts (Inter + Roboto Mono), swappable for system fonts.

Shared chrome across all three sites:

- Sticky header with brand link, breadcrumb, sections overlay (`⌘K`), markdown copy (`⌘⇧C`) / download (`⌘D`)
- Right-gutter **Considerations** (orange, author-authored) + numbered reference sidenotes (purple, Tufte/Gwern style)
- Left-gutter **Comments** (blue, reader/agent-authored, `localStorage` only) — on the template page; extensible to the other two
- Scroll progress bar, floating section-indicator pill
- Gwern-style external-link marks (`↗`)
- Embedded markdown source at `<script id="markdown-source" type="text/x-markdown">` for agent consumption
- `scroll-margin-top` on headings so anchor jumps clear the sticky header

The template page additionally exposes `window.templateAPI` for programmatic (LLM) comment posting — see its own [§agent-API](https://npc.here.now/template/#api) and [§improvement backlog](https://npc.here.now/template/#backlog).

## Layout

```
protocolized-publications/
├── README.md
├── LICENSE
├── .gitignore
├── template-site/
│   ├── index.html        — root page (self-reflexive meta-documentation)
│   ├── index.md          — canonical markdown (sibling file for agents)
│   └── exercise/index.html   — subpage stub demonstrating breadcrumb parity
├── ai-org-site/
│   ├── index.html
│   ├── report.md
│   ├── favicon.svg, og.png, og-square.png, apple-touch-icon.png, icon-512.png
│   ├── make_og_aiorg.py  — Pillow script that generates the OG card + favicons
│   └── exercise/index.html   — drag-drop org-chart canvas with 9 presets
├── wthapi-site/
│   ├── index.html
│   ├── paper.md
│   └── favicon.svg, og.png, og-square.png, apple-touch-icon.png, icon-512.png
└── ai-capability-maturity-model/
    ├── README.md
    ├── _PROJECT.md, _WORKPLAN.md, _MILESTONES.md, _REPORT-STYLE.md
    ├── Research/        — desk research
    ├── Model-Development/ — the maturity model itself
    ├── Litepaper/, Blog-Post/, Artifact/
    ├── Resources/
    └── homepage/
```

## Publishing

Uses the [here.now](https://here.now/) static-hosting skill. Each site ships via:

```bash
cd template-site   # or ai-org-site, wthapi-site
/Users/rafa/.claude/skills/here-now/scripts/publish.sh . --slug <slug> --client claude-code
```

The `--slug` pins the here.now subdomain across publishes. Canonical slugs (for the author's account; forkers will get their own):

| Site | Slug |
| --- | --- |
| `template-site` | `opaque-valley-9h5q` |
| `ai-org-site` | `jolly-wreath-zszb` |
| `wthapi-site` | `queued-willow-fg66` |
| `protocolinstitute-brandkit` | `evoked-huckle-4gyn` |

Each handle is linked to `npc.here.now/<name>/` via the here.now handle-link API.
The brand kit is reachable at both `protocolintstitutebrandkit` (original, misspelled) and
`protocolinstitutebrandkit` — both locations link to the same slug, so either URL stays live.

## Forking for your own report

The `template-site/` directory is the starting point. To repurpose:

1. Copy `template-site/` to a new directory.
2. Replace the `<article>` body and the `<script id="markdown-source">` contents — keep them in sync. The embedded source is the canonical text that agents read.
3. Give every anchorable block a semantic `id` (e.g. `id="intro"`, `id="tactical"`) so comments can target it.
4. Update the banner SVG text, title block, breadcrumb links, and sections overlay.
5. Change `STORAGE_KEY` in the JS if you want a separate comment set per report.
6. For multi-page reports, copy `exercise/` as a subpage stub and flip the breadcrumb's `active` class.
7. Regenerate `index.md` from the embedded markdown source (see `make_og_aiorg.py` for a Pillow-based OG card generator).

See [`template-site/index.html#backlog`](https://npc.here.now/template/#backlog) for shipped agent-first affordances (discovery metadata, W3C Web Annotation export, machine-readable API schema, event bus, cross-tab sync, document hash) and the open backlog (origin-level `/llms.txt`, site manifest, MCP server, build step, `?mode=agent`, full TextQuoteSelector, agent-as-co-author, signed agent identity).

## License

MIT. See [LICENSE](LICENSE).

---

Part of the [Protocolized](https://protocolized.summerofprotocols.com/t/studies) ecosystem and the [Protocols for Business Group](https://protocolized.summerofprotocols.com/) (P4BSIG).
