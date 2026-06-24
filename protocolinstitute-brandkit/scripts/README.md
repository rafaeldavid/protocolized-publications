# Brand kit — tooling

## Contrast / readability test

Verifies every meaningful foreground/background token pairing against WCAG 2.1
contrast thresholds. No dependencies — plain Node (≥18).

```bash
node scripts/contrast-check.mjs          # full table
node scripts/contrast-check.mjs --quiet  # failures + summary only
# or
cd scripts && npm test
```

- **Source of truth:** the pairings live in `brand.json → color.accessibility.pairings`.
  Add a pairing there (not in the script) when you introduce a new token combination,
  then re-run. The script falls back to a built-in list if the contract is absent.
- **Thresholds:** `text` 4.5:1 (normal body), `large` 3.0:1 (≥24px / ≥18.66px bold),
  `ui` 3.0:1 (borders, graphical objects, WCAG 1.4.11). `decorative` pairings are
  reported as informational and never fail the build.
- **Exit code:** non-zero if any required pairing fails — wire it into CI / a
  pre-commit hook to keep the palette accessible as tokens evolve.

### What it caught (v1 → enhancement)

- **White on accent (#d85a30)** is 3.87:1 — passes only as *large / non-text*. The
  contract marks it `large`; never use bare accent fills behind small white text.
- **Featured-badge label** in bare accent on accent-tint was **3.36:1 (fail)**. Fixed by
  adding the `accent-deep` (#9e3d18) decision token for accent-as-text; the badge now
  passes AA at 5.81:1.
