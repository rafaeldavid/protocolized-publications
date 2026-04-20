# A Self-Documenting Report Template

*Protocolized · Meta-documentation · 2026-04-20 · [npc.here.now/template](https://npc.here.now/template/)*

*Meta-documentation for a report surface designed to serve both human readers and LLM agents as first-class consumer classes. The document is a self-description: every affordance it names is exercised on the page itself.*

---

## Why this template exists

{#p-why-1} Documents on the web evolved against a single consumer class: a human reader at a pointer device. Navigation, typography, breakpoints, and analytics all assume that one reader.

{#p-why-2} A second consumer class now reads the same documents: **LLM agents acting on behalf of humans**. Agents read differently. They want canonical text, stable structure, and programmatic hooks. They annotate as they read. They compose notes from the document with actions taken elsewhere.

> *Consideration:* Consumer classes. The distinction is developed in the APIs paper's [Q7 — "What makes an agent a distinct consumer class?"](https://npc.here.now/wthapi/#q7). Agents read faster, in parallel, at machine speed, with different patience envelopes than humans.

{#p-why-3} A document built only for the human reader leaves the agent degraded: it scrapes text via brittle DOM extraction, guesses at structure, and cannot leave a trace of what it noticed. A document built only for the agent loses the human's preferred reading experience. Most public documents today sit in the first camp.

{#p-why-4} This template is a scaffold for documents that serve both consumer classes without subordinating either. It is intentionally modest — a single HTML file, a handful of patterns — not a framework.

## How it differs from a standard web page

{#p-differs-1} Most public reports, working papers, and blog posts default to a backend CMS, an analytics beacon, a publisher-hosted comment system, and visual chrome sized for a laptop screen. Each default makes sense in isolation; together they produce a page that is *readable* by agents only as a side-effect of being readable by humans.

{#p-differs-2} This template makes the opposite defaults.

| Default             | Standard web page                 | This template                             |
| ------------------- | --------------------------------- | ----------------------------------------- |
| Canonical text      | Rendered from CMS; scraped from DOM | Embedded as markdown in the HTML        |
| Reader commentary   | Publisher database or disabled    | Reader's localStorage only               |
| Tracking            | Analytics beacon                  | None                                      |
| Author commentary   | Inline footnotes                  | Right-gutter Considerations              |
| External links      | Indistinguishable on the page     | Marked visibly (↗)                        |
| Agent access        | DOM scrape, no contract           | `window.templateAPI` + embedded MD        |
| Persistence control | Publisher-controlled              | Reader-controlled (clear, export)         |
| Packaging           | Distributed over CDN / SSR        | Single HTML file (+ web fonts)            |

{#p-differs-3} The shape sits narrower than a CMS and wider than a static article.

## Affordances: paired gutters and a canonical source

{#p-aff-1} The page exposes three visible text channels and two non-visual ones.

[Figure 1. Three visible text channels. Main column carries the canonical document (purple). Right gutter (orange) holds author Considerations, baked into the publish. Left gutter (blue) holds reader and agent Comments, stored in localStorage only.]

{#p-aff-2} The visible channels:

1. {#p-aff-3} **Main column** — the document itself.
2. {#p-aff-4} **Right gutter** — *Considerations*, orange. Author-written commentary, baked into the publish, immutable to the reader.
2b. {#p-aff-4-ref} A second right-gutter variant: **numbered reference sidenotes** in purple, matching the [Tufte CSS](https://edwardtufte.github.io/tufte-css/) / [Gwern](https://gwern.net/sidenote) convention — a superscript number in body text pointing to a floating note in the right margin. Distinct from Considerations (prose commentary, orange); reference sidenotes are for citations and brief amplifications. See the [APIs paper](https://npc.here.now/wthapi/) for extensive use of both.

3. {#p-aff-5} **Left gutter** — *Comments*, blue. Reader- or agent-written annotations, stored in the reader's localStorage only. Never transmitted. A mirror of Considerations.

{#p-aff-6} The non-visual channels:

4. {#p-aff-7} **Embedded markdown source** — at the bottom of the document body lives `<script id="markdown-source" type="text/x-markdown">`, carrying the full document as markdown. An agent reads this one element and has the canonical text without walking the DOM.
5. {#p-aff-8} **Programmatic comment API** — `window.templateAPI` exposes the comment operations. See the agent-API section below.

### Reader flow

{#p-rf-1} Highlight any passage in the main column. A small dark popup appears near the selection offering *Comment* or *Copy*.

- {#p-rf-2} **Copy** places the selection text on the clipboard.
- {#p-rf-3} **Comment** opens a compact floating form below the selection. Type a note, press `⌘↩` to save. The annotation renders in the left gutter, anchored to the nearest identified element, and the selected text is wrapped in a `<mark>`. Hover a comment to reveal the `×` for deletion. *A hardcoded demo Comment is rendered in the HTML alongside this bullet (dashed blue border, labelled `Comment · demo`), so every reader sees an example even before creating one.*

{#p-rf-4} Keyboard shortcuts:

| Shortcut                 | Action                                                 |
| ------------------------ | ------------------------------------------------------ |
| `⌘K` / `Ctrl K`          | Open the sections overlay                              |
| `⌘D` / `Ctrl D`          | Download markdown (body + your comments)               |
| `⌘⇧C` / `Ctrl ⇧ C`        | Copy markdown to clipboard (same content as download)  |
| `⌘↩` inside a comment form | Save comment                                          |
| `Esc`                    | Close any open panel                                   |

## The agent API

{#p-api-1} Agents running in the reader's browser — devtools consoles, extension-based assistants, Claude Desktop with browser use — interact without any auth, backend, or network call. The page exposes a single global:

```js
// Add a comment anchored to a paragraph id.
// quote must occur verbatim in the paragraph's textContent.
window.templateAPI.addComment({
  pid: "p-why-3",
  quote: "brittle DOM extraction",
  text: "Agent observation — the template addresses this via the embedded markdown source.",
  author: "claude"
});

// Other operations
window.templateAPI.listComments();
window.templateAPI.deleteComment(cid);
window.templateAPI.clearComments();
window.templateAPI.markdownSource();                       // raw body, no comments
window.templateAPI.exportMarkdown({ includeComments: true });
window.templateAPI.exportAnnotations();                    // W3C Web Annotation JSON-LD
window.templateAPI.schema();                               // machine-readable API schema
await window.templateAPI.docHash();                        // "sha256:<hex>" of embedded MD
window.templateAPI.on('comment:added', r => console.log('agent observer:', r));
window.templateAPI.refresh();                              // re-render from localStorage
```

Every stored record carries an immutable `origin` field stamped by the runtime: `"ui"` (saved via the selection popup), `"api"` (added via `templateAPI.addComment`), or `"demo"` (the template's first-visit seed). Callers cannot spoof `origin`. The `author` field is free-text and remains caller-controlled.

Discovery: the page advertises its agent surface via `<meta name="agent-api">`, `<link rel="alternate" type="text/markdown" href="./index.md">`, and a Schema.org Article JSON-LD block in `<head>`. A sibling `index.md` file serves the markdown source directly — agents can `fetch("./index.md")` without parsing HTML. A static `<script type="application/json" id="template-api-schema">` block is appended at runtime for zero-JS consumers.

Events: `comment:added`, `comment:deleted`, `comments:cleared`. Subscribe via `templateAPI.on(event, callback)` — returns an unsubscribe function. Cross-tab sync: comments added in one tab re-render in other tabs of the same origin via the `storage` event.

> *Consideration:* Skills vs MCP vs this. This page is not an MCP server nor a Skill (as discussed in the APIs paper [Q8](https://npc.here.now/wthapi/#q8)). It is a document surface that happens to expose a JS API to any agent loaded in the same browser. The agent reaches it by reading the DOM, not by calling over a protocol.

{#p-api-2} Author attribution: pass `author` and the comment's label reads `Comment · claude`. Default is `reader` with no suffix.

{#p-api-3} Markdown roundtrip: `exportMarkdown` returns the embedded source plus a `## Reader comments` section. Every comment becomes a block carrying its paragraph id, quote, author, date, and body. An agent can take the blob into a separate context window and resume working on the annotated document without re-reading the page.

## What this template is not

- {#p-not-1} **Not a CMS.** The canonical text sits in the HTML. There is no backend writing it.
- {#p-not-2} **Not a hosted comment system.** Comments never leave the reader's browser. Two readers of the same URL see two independent comment sets.
- {#p-not-3} **Not a knowledge base.** There is no search, no cross-reference, no version history beyond the publish timestamp.
- {#p-not-4} **Not an agent harness.** Agents can read and annotate; they cannot execute actions against external systems from this page. For that you would add tools, an MCP server, or a CLI (see the APIs paper [Q8](https://npc.here.now/wthapi/#q8)).
- {#p-not-5} **Not tracked.** No analytics, no beacons, no third-party scripts beyond the font CDN.

## Improvement backlog

{#p-back-intro} The current implementation ships all capabilities achievable inside a single static HTML file. Items requiring external components (server, build step, MCP endpoint, shared manifest) are documented below as open backlog for anyone forking the template to implement.

### Shipped (in-page, no external components)

- {#p-back-done-1} **Agent discovery metadata.** `<meta name="agent-api">`, `<link rel="alternate" type="text/markdown">`, Schema.org `Article` JSON-LD in `<head>`.
- {#p-back-done-2} **Sibling markdown file.** Same source served as [`./index.md`](./index.md); agents `fetch()` plain markdown in one request.
- {#p-back-done-3} **W3C Web Annotation export.** `templateAPI.exportAnnotations()` returns Comments as JSON-LD conforming to the [Web Annotation Data Model](https://www.w3.org/TR/annotation-model/).
- {#p-back-done-4} **Machine-readable API schema.** `templateAPI.schema()` returns a JSON Schema; also appended as `<script type="application/json" id="template-api-schema">`.
- {#p-back-done-5} **Machine labels on annotations.** Every aside carries `data-role` (`consideration` · `reference` · `reader-note`) and `data-author-class` (`author` · `reader` · `agent` · `template`).
- {#p-back-done-6} **Immutable `origin` field.** Every `CommentRecord` carries `origin: "ui" | "api" | "demo"`, stamped by the runtime, not by the caller.
- {#p-back-done-7} **Event bus.** `templateAPI.on(event, callback)` supports `comment:added`, `comment:deleted`, `comments:cleared`; returns an unsubscribe function.
- {#p-back-done-8} **Cross-tab sync.** Comments added in one tab appear in other tabs on next render via the `storage` event.
- {#p-back-done-9} **Document hash.** `templateAPI.docHash()` returns a SHA-256 of the embedded markdown source.
- {#p-back-done-10} **Accessibility baseline.** `prefers-reduced-motion`, `:focus-visible`, toast as `role="status" aria-live="polite"`.

### Open (requires external components)

1. {#p-back-open-1} **Origin-level `/llms.txt` manifest** at `npc.here.now/llms.txt`, enumerating every published document. See [llmstxt.org](https://llmstxt.org/). Requires origin-root write access.
2. {#p-back-open-2} **Site manifest at `.well-known/protocolized.json`** — JSON-LD listing every document with its markdown source URL and API schema. Enables cross-document aggregation.
3. {#p-back-open-3} **MCP server wrapping the same capability.** Tools: `read_document`, `list_annotations`, `add_annotation`. Browser-resident `window.templateAPI` becomes a local specialisation of the same protocol. Required to make the template a worked example of its own Q8 framing from the [APIs paper](https://npc.here.now/wthapi/#q8).
4. {#p-back-open-4} **Build step to eliminate MD/HTML drift.** The embedded markdown and article body are maintained by hand; a markdown-it build script would fix this. Introduces a toolchain the template currently avoids.
5. {#p-back-open-5} **`?mode=agent` stripped-chrome variant.** Minimal shell (no banner, no form, no overlay) for agent fetches. Requires server-side routing; static hosting can't dispatch on query strings.
6. {#p-back-open-6} **TextQuoteSelector with `prefix` and `suffix`.** Current anchoring finds first verbatim occurrence; adopting [full W3C TextQuoteSelector](https://www.w3.org/TR/annotation-model/#text-quote-selector) would let comments re-anchor through modest edits.
7. {#p-back-open-7} **Agent-as-co-author flow.** Agent writes a summary, human approves/edits, summary becomes a new Consideration. New UI and storage scope.
8. {#p-back-open-8} **Signed agent identity.** `origin` is spoof-proof but `author` is free-text. Session-key signing would close impersonation risk in trust-sensitive contexts.

### How to contribute

Fork the source from [rafaeldavid/protocolized-publications/template-site](https://github.com/rafaeldavid/protocolized-publications/tree/main/template-site) (or `fetch` the page — one self-contained HTML file). Implement an item from the open list, republish via `publish.sh`. Consider upstreaming reusable improvements on the [Protocolized forum](https://protocolized.summerofprotocols.com/t/studies).

## Forking and reuse

{#p-fork-1} The entire template is one HTML file per page. Styles, scripts, banner, favicon, and markdown source are all inline or embedded. To repurpose for a new report:

- {#p-fork-2} Replace the `<article>` body and the `<script id="markdown-source">` contents. Keep them in sync — the embedded source is the canonical text that agents read.
- {#p-fork-3} Give every anchorable block an id (semantic preferred: `id="intro"`, `id="tactical"`) so comments can target it reliably.
- {#p-fork-4} Update the banner SVG text, title block, breadcrumb links, and sections overlay.
- {#p-fork-5} Change `STORAGE_KEY` if you want a separate comment set per report.
- {#p-fork-6} For multi-page reports, copy `/template/exercise/` as a subpage stub and flip the breadcrumb's `active` class per page.

{#p-fork-7} Source lives at [rafaeldavid/protocolized-publications/template-site](https://github.com/rafaeldavid/protocolized-publications/tree/main/template-site). Publish via the [here.now](https://here.now/) skill with `publish.sh`.
