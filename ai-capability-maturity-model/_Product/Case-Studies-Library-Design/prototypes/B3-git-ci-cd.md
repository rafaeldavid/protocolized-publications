---
slug: git-ci-cd
title: Git and CI/CD — review-as-protocol
class: B
level: L3
era: "2005–present"
function:
  - engineering
archetypes:
  - Architect
  - Integrator
  - Guild
class_a_pairing: uber-agentic-shift
status: draft
sources_count: 6
---

## One-line frame

A version-control system invented in two weeks by a kernel maintainer became the universal coordination protocol for software work — and the pull request became the place where review actually happens.

## The case

In April 2005, BitMover Inc. revoked the free license that had let the Linux kernel community use BitKeeper, its proprietary distributed version-control system. Linus Torvalds wrote the first version of Git over the next two weeks. The first Git commit landed on April 7, 2005; by April 19 the Linux kernel was being maintained on Git itself. Torvalds's design choices — content-addressed storage, fast branching, distributed history with cryptographic integrity — were optimised for one use case: thousands of contributors merging patches into a kernel without a central server becoming a bottleneck.

The protocol that ended up shipping was less Git itself than the workflow built on top of it. GitHub launched in February 2008 as a hosted Git service, and in October 2008 introduced the *pull request* — a Git branch wrapped in a discussion thread, with line-level commenting, review approvals, and merge controls. The pull request standardised what code review looked like across the industry: a unit of work in a branch, a written description, a reviewer queue, a merge gate. By the mid-2010s every professional software team — open-source projects, startups, enterprise engineering, government contractors — was using some flavour of Git plus pull requests plus automated CI checks.

CI/CD layered on top: Travis CI launched in 2011, CircleCI in 2011, Jenkins (forked from Hudson) in 2011, GitHub Actions in 2018. The pattern was repeatable: every pull request triggers a build; the build runs tests, linters, security scans; the merge button stays disabled until the checks pass. By 2026 the GitHub-style PR workflow with CI/CD gating is the assumed shape of professional software development. Roughly 100 million developers use GitHub; the underlying Git protocol is present in essentially every major IDE, every CI service, and every cloud development environment.

## What the protocol enabled

Before Git+CI/CD, code review at scale meant scheduled walkthroughs, shared inboxes for patch files, or manual integration cycles. After Git+CI/CD, the artifact and the conversation share an address: the PR carries the diff, the discussion, the test results, the approvals, the merge state. A reviewer who sits down to a queue of pull requests has the entire context for each one in one URL. The protocol absorbs the scheduling problem.

Three properties did the work. The Git data model (content-addressed, branch-cheap, distributed) made it safe to experiment in branches and merge selectively. The pull-request UI (comments threaded against lines of diff, with approval state) made review a structured activity rather than a meeting. The CI/CD layer (machine-readable pass/fail signals attached to each commit) automated the routine parts of judgement, leaving humans to attend to the parts that need attention. Together they turned coordination into an artifact instead of a meeting — and the artifact is replayable, archivable, and analyzable in ways meetings are not.

## For AI today

The same shape is now being applied to AI-generated code. Every major coding-agent tooling vendor — GitHub Copilot Workspace, Anthropic Claude Code, Cursor's background agents, Cognition's Devin, Stripe's internal "minions" — produces output as pull requests, not as direct commits to main. The PR is the gating protocol, exactly as it was for human-written code. What is changing is the volume (Stripe reports its agents shipping ~1,300 PRs per week) and the bottleneck (review capacity, not code generation, is now the constraint). The pattern from 2008 holds: the protocol that survives is the one that absorbs the review without being the review. The question for engineering organisations now is whether the existing PR workflow can scale to AI-generated volume, or whether a new layer needs to sit on top — automated reviewer tooling, summarisation, batched approvals — without losing the property that made the original work.

## Era markers

- **April 7, 2005** — first Git commit by Linus Torvalds (initial 1,200-line C implementation).
- **April 19, 2005** — Linux kernel switches its primary version-control to Git.
- **February 2008** — GitHub launches as a hosted Git service.
- **October 2008** — GitHub introduces the *pull request* with inline review.
- **2011** — Travis CI, CircleCI, and Jenkins (post-Hudson fork) all release; CI-on-every-PR becomes the default.
- **2018** — GitHub Actions launches; CI/CD becomes a first-class repo primitive.
- **2026** — ~100M developers on GitHub; the PR-with-CI workflow is the assumed shape of professional software work; coding agents producing PRs at high volume are stress-testing the review-capacity assumption.

## Where else this case appears in the repo

- `levels/index.html` — Git/CI-CD as the L3 historical-parallel block.
- `Litepaper/litepaper-draft-v7.md` — §3 L3 (PR-as-protocol framing); §4 reference (Git as the inheritable coordination protocol).
- `assessment/index.html` — Git/CI-CD in the RESULTS object's `periodTech` for L3 and L2-3 transition.
- `Blog-Post/SIG-update/publish/index.html` — referenced in the L3 historical block.

## Website card (HTML)

```html
<!-- Git + CI/CD — L3 -->
<div class="case-card" id="git-ci-cd">
  <div class="level-pill">Level 3 — Designed</div>
  <h3 class="case-org"><a href="https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/BK-usage/bk-kernel-howto.txt?id=1da177e4c3f41524e886b7f1b8a0c1fc7321cac2" target="_blank" rel="noopener" >Git and the GitHub pull request ↗</a></h3>
  <div class="case-sector">Software engineering</div>
  <div class="case-body">
    Linus Torvalds wrote the first version of Git in two weeks in April 2005 after BitMover revoked the Linux kernel's BitKeeper licence. Three years later, GitHub introduced the pull request: a Git branch wrapped in a discussion thread with inline review, approvals, and merge controls. By 2026 the PR-with-CI/CD workflow is the assumed shape of professional software work — roughly 100 million developers, present in essentially every IDE, CI service, and cloud development environment.
  </div>
  <div class="case-mechanism">
    The technology absorbs the coordination practice into the software itself. In git, the artifact and the conversation share one address, and the merge gate stays closed until the machine checks pass.
  </div>
  <div class="case-question">
    What are the new modes of collaboration that are becoming the default? How are your core business technologies absorbing that new pattern of collaboration?
  </div>
  <button class="expand-toggle drill-toggle" onclick="toggleContent(this)" data-closed="How did git work? ↓" data-open="How did git work? ↑">How did git work? ↓</button>
  <div class="drill-content">
    Three properties did the work. The Git data model (content-addressed, branch-cheap, distributed) made it safe to experiment in branches and merge selectively. The pull-request UI (comments threaded against lines of diff, with approval state) made review a structured activity rather than a meeting. The CI/CD layer (machine-readable pass/fail signals attached to each commit) automated the routine parts of judgement. Coding agents producing PRs at scale — Stripe's "minions" reportedly ship ~1,300 PRs per week — are now stress-testing whether the existing review capacity is the constraint, and whether a new automated review layer needs to sit on top without losing what made the original workflow durable.
  </div>
</div>
```

### Render notes

- **Anchor `id`:** `git-ci-cd` — kebab-case slug.
- **Title:** *Git and the GitHub pull request* — the protocol plus the workflow that gave it its modern shape.
- **External link:** GitHub's own retrospective on the pull request's history. Alternative: the GitHub blog post announcing the pull request feature in October 2008; or Linus Torvalds's 2007 Google Tech Talk on Git.
- **Sector line:** *Software engineering / Coordination* — function-shaped; the case is about coordination as much as engineering.
- **Drilldown CTA copy:** *Why this is the L3 designed-protocol mode* — labels the drilldown's role on the page; the body of the drilldown stays case-focused.

## Sources

1. GitHub Blog, "The history of the pull request on GitHub." https://github.blog/news-insights/the-history-of-the-pull-request-on-github/
2. Linus Torvalds, "Tech Talk: Linus Torvalds on Git," Google Tech Talk, May 14, 2007. https://www.youtube.com/watch?v=4XpnKHJAok8 — primary source from the inventor on Git's design intent.
3. GitHub, "About pull requests" (official documentation). https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
4. Tom Preston-Werner, "How We Made GitHub Fast" / GitHub origin posts (early GitHub blog archive). https://github.blog/news-insights/the-octoverse/ — context on GitHub's launch and the ecosystem it grew.
5. Bytebase, "BitKeeper vs Git: The Story Behind Git's Creation." https://www.bytebase.com/blog/bitkeeper-vs-git/ — the BitKeeper revocation crisis that triggered Git.
6. Lenny Rachitsky, "How Stripe built 'minions' — AI coding agents that ship 1,300 PRs per week." https://www.lennysnewsletter.com/p/this-week-on-how-i-ai-how-stripe — modern stress-test of the PR-as-protocol shape with AI-generated volume.
