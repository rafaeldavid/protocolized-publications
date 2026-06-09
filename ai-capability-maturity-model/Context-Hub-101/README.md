# Context Hub 101

A practitioner's introduction to building the **context layer** that lets new AI tools integrate into a firm's existing operations — collecting, shaping, and maintaining the org/personal context (org charts, brand voice, design guardrails, CRM state, meeting history, procedures, permissions) that AI agents read to work the way the firm already works.

Written for operations leaders and advisors at wealth-management firms, but the framework — three layers, seven context types, four readiness levels, and a maintenance discipline — transfers to any organization.

**Status:** Draft v0.1 · June 2026
**Live:** https://npc.here.now/contexthub101/ (slug `pearly-intent-awgj`)

## Canonical source

| Path | Purpose |
|------|---------|
| `context-readiness-playbook.md` | Canonical prose source — the full guide in markdown |
| `site/index.html` | The deployed single-page HTML guide (design system adapted from the Protocolized publications chrome) |
| `site/favicon.svg` | Site icon |

The markdown and the HTML are kept in sync by hand; edit both when changing content.

## Build / deploy

The site is static. Publish to here.now from the working directory (`ai-capability-maturity-model/`):

```bash
bash ~/.claude/skills/here-now/scripts/publish.sh Context-Hub-101/site --slug pearly-intent-awgj --client claude-code
```

The friendly URL `npc.here.now/contexthub101/` is a handle link to that slug, so any publish to the slug updates it automatically — no need to touch the link.

## What's inside

1. **What a context hub is** — concept, and why AI tools need one
2. **How it's built** — the three layers (source systems → the hub → surfacing), plus the shared hub vs. a tool's own working context
3. **What to collect** — the seven context types, with a brand & design guardrail example
4. **Prep your documents** — chunking, overlap, and metadata enrichment for retrieval
5. **How ready are you** — the four readiness levels (L1 Scattered → L4 Governed)
6. **How to set it up** — individual and firm tracks
7. **Keep it current** — maintenance disciplines and anti-patterns
8. **See an example** — a worked wealth-management firm, plus starting checklists

## Sources

Grounded in Tom Critchlow's *Of Termites & Tokens* (stigmergy), the Protocol Institute's C3PO reference implementation, Anthropic's context-engineering and managed-agent memory work, Google's DESIGN.md convention, and 2026 research on context-file effectiveness. Full citations are in the guide's footnotes / About section.
