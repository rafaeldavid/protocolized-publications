---
id: category-short-slug
category: event               # event | tooling | research | signal | regulatory
date_observed: YYYY-MM-DD
date_added: YYYY-MM-DD
source_quality: primary       # primary | secondary | anecdotal
status: active                # active | superseded | retracted
affected_levels: [1]          # which CMM levels this reshapes
affected_functions: [all]     # or specific: [engineering, legal, marketing]
tags: []
sources:
  - url: https://...
    title: Source title
  - url: https://...
maintainer: rafa
---

# Human-readable title

## Summary
One paragraph. What happened, when, to whom, at what scale.

## Why it matters for the CMM
Which level(s) this observation anchors or reshapes, and why. Link to the failure mode or governance transition it exemplifies.

## Claims citable from this observation
- Concrete, attributable claim 1
- Concrete, attributable claim 2
- (Each should be something the litepaper, artifact, or weekly brief can cite verbatim)

## Related observations
- [other-slug](other-slug.md) — one-line reason for the link
