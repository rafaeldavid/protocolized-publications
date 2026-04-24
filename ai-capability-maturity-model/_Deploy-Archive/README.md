# _Deploy-Archive

Dated snapshots of what's live on `protocolized.dev` at significant milestones. Each snapshot is self-contained — every file needed to republish that version of the site sits inside its directory. If a change lands poorly, republish from the most recent clean snapshot.

## Structure

```
_Deploy-Archive/
├── README.md                          (this file)
├── YYYY-MM-DD-{reason}/               (one snapshot per milestone)
│   ├── MANIFEST.md                    (slug ↔ dir mapping, source paths, restore procedure)
│   ├── CHECKSUMS.sha256               (integrity verification)
│   ├── homepage/                      (protocolized.dev/)
│   ├── ai-maturity-model/             (protocolized.dev/ai-maturity-model/)
│   ├── litepaper-ai-protocols/        (protocolized.dev/litepaper-ai-protocols/)
│   └── blog-the-missing-layer/        (protocolized.dev/blog-the-missing-layer/)
└── ...
```

## When to create a new snapshot

- Before any migration, repo restructure, or toolchain change
- Before a multi-file content overhaul
- After a milestone deploy that's worth preserving as a known-good baseline (e.g., a version accompanying a major announcement)
- Any time you think "I might want to roll back to this"

## How to create one

```bash
DATE=$(date +%Y-%m-%d)
REASON="what-this-snapshot-captures"  # e.g., pre-migration, v2-release, pre-redesign
DEST="_Deploy-Archive/${DATE}-${REASON}"
mkdir -p "$DEST"

# Copy each mount's current source dir, excluding publish-process caches
rsync -a --exclude='.herenow' homepage/                          "$DEST/homepage/"
rsync -a --exclude='.herenow' Artifact/publish/                  "$DEST/ai-maturity-model/"
rsync -a --exclude='.herenow' Litepaper/html/                    "$DEST/litepaper-ai-protocols/"
rsync -a --exclude='.herenow' Blog-Post/SIG-update/publish/      "$DEST/blog-the-missing-layer/"

# Checksum for integrity
(cd "$DEST" && find . -type f \
    \( -name "*.html" -o -name "*.svg" -o -name "*.png" -o -name "*.jpg" \
       -o -name "*.jpeg" -o -name "*.js" -o -name "*.css" \) \
    -exec shasum -a 256 {} \; | sort > CHECKSUMS.sha256)

# Write MANIFEST.md — slug ↔ dir table, deploy date, restore command
# (see any existing MANIFEST.md for template)
```

Once `ai-capability-maturity-model/` lives under `protocolized-publications/`, source paths in the commands above shift one level (still `homepage/`, `Artifact/publish/`, etc. — just run from inside that dir).

## How to restore

From a snapshot's MANIFEST.md: each mount has a slug; republish with `here-now/scripts/publish.sh {snapshot-dir}/{mount} --slug {slug}`. Takes ~10 seconds per mount.

## What this is not

- Not a git alternative. The repo still tracks day-to-day changes; these snapshots are larger checkpoint markers.
- Not a backup of source research material. The bibliography, drafts, case studies, `_Observations/`, and `_Product/` folders are not snapshotted here — they live in the repo proper.
- Not automatic. Created intentionally when we want a restorable anchor.
