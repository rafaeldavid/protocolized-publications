---
archive_date: 2026-04-24
archive_reason: Pre-migration snapshot — before moving canonical source into rafaeldavid/protocolized-publications
captured_by: rafa (via Claude Code session)
verification: CHECKSUMS.sha256 (23 files)
---

# Deployed-state snapshot — 2026-04-24, pre-migration

Frozen copy of every file currently serving on `protocolized.dev`. If the migration breaks anything, restore by republishing the relevant directory to its slug.

## Slug ↔ mount ↔ snapshot mapping

| URL                                              | here.now slug          | Snapshot dir                 | File count |
|--------------------------------------------------|------------------------|------------------------------|------------|
| `https://protocolized.dev/`                      | `gleaming-sketch-5q8b` | `homepage/`                  | 4          |
| `https://protocolized.dev/ai-maturity-model/`    | `thorny-basin-5xkf`    | `ai-maturity-model/`         | 4          |
| `https://protocolized.dev/litepaper-ai-protocols/` | `arctic-ribbon-7nvb` | `litepaper-ai-protocols/`    | 15         |
| `https://protocolized.dev/blog-the-missing-layer/` | `witty-garnet-6k4f` | `blog-the-missing-layer/`    | 4          |

Total: 23 content files, ~2.3 MB.

## What's included per snapshot

Each snapshot dir contains exactly what was published to its slug: `index.html`, `favicon.svg`, `apple-touch-icon.png`, `icon-512.png`, plus any additional assets (the litepaper carries screenshot images). `.herenow/` state directories are excluded — they are publish-process caches, not content.

## Integrity

`CHECKSUMS.sha256` contains SHA-256 hashes of all content files. To verify a snapshot is unchanged:

```bash
cd _Deploy-Archive/2026-04-24-pre-migration
shasum -a 256 -c CHECKSUMS.sha256
```

## Source-of-truth paths at time of archive

Canonical source dirs these snapshots were copied from (before migration):

- `homepage/` ← `AI Capability Maturity Model/homepage/`
- `ai-maturity-model/` ← `AI Capability Maturity Model/Artifact/publish/`
- `litepaper-ai-protocols/` ← `AI Capability Maturity Model/Litepaper/html/`
- `blog-the-missing-layer/` ← `AI Capability Maturity Model/Blog-Post/SIG-update/publish/`

After migration, the canonical source lives under `protocolized-publications/ai-capability-maturity-model/` with the same internal layout.

## Restore procedure

If a mount breaks and you need to revert to this snapshot:

```bash
# Example: restore the homepage
~/.claude/skills/here-now/scripts/publish.sh \
    "path/to/_Deploy-Archive/2026-04-24-pre-migration/homepage" \
    --slug gleaming-sketch-5q8b \
    --client claude-code
```

Repeat with the slug + dir from the table above for whichever mount needs restoring. Snapshots are self-contained — no other assets required.

## Known-good lede on the live artifact at time of capture

`ai-maturity-model/index.html` hero paragraph (line ~1310):

> You are deploying AI whether you planned to or not. Your employees are already running Claude Code in their terminals, transcribing every meeting with AI tooling, and wiring homemade apps into their workflows without security review. The question is how to turn that unmanaged use into deliberate capability.
