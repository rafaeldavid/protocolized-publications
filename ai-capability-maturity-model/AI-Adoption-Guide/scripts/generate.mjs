#!/usr/bin/env node
/**
 * generate.mjs — single source of truth: html/slides.html (+ html/assessment.js)
 *
 * Writes the following into html/:
 *   - sitemap.xml          — XML sitemap with URL + #anchor entries
 *   - llms.txt             — small index (per Jeremy Howard convention)
 *   - llms-full.txt        — full deck content as plain text
 *   - guide.md             — single-page markdown
 *
 * All generated files carry a "DO NOT EDIT" header so future contributors
 * know to edit slides.html / assessment.js and re-run this script.
 *
 * Usage:
 *   cd AI-Adoption-Guide/scripts && node generate.mjs
 * or:
 *   npm run generate
 */

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { load } from 'cheerio';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const HTML_DIR = path.join(__dirname, '..', 'html');
const SLIDES_PATH = path.join(HTML_DIR, 'slides.html');
const ASSESS_PATH = path.join(HTML_DIR, 'assessment.js');

const SITE_URL = 'https://ai.protocolized.dev';
const SITE_TITLE = 'Durable AI Adoption — AI Capability Maturity Model';
const SITE_TAGLINE = 'A practical AI adoption guide, written by practical AI adopters. Learn how to adopt AI across your organization, with case studies, maturity levels, and lessons from the Protocol Institute and other organizations.';
const VERSION = 'v0.5 · May 2026';
const TODAY = new Date().toISOString().slice(0, 10);

const DO_NOT_EDIT_BANNER = (commentSyntax) => {
  const banner = `Generated file — do not edit. Source of truth: AI-Adoption-Guide/html/slides.html. Regenerate via: cd AI-Adoption-Guide/scripts && npm run generate (or node generate.mjs). Last generated: ${TODAY}.`;
  return commentSyntax.replace('@@TEXT@@', banner);
};

/* ───────── Helpers ───────── */

const clean = (s) => s ? s.replace(/\s+/g, ' ').trim() : '';

const cleanBlock = (s) => {
  if (!s) return '';
  return s
    .replace(/ /g, ' ')
    .split('\n')
    .map((l) => l.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
    .join('\n');
};

/* Strip surrounding em-dashes, normalize ellipses */
const normalizeText = (s) => clean(s).replace(/\s+([,.;:!?])/g, '$1');

/* ───────── Load assessment data ─────────
   assessment.js is wrapped in an IIFE. We can't require() it as a module.
   Instead, run it in a sandboxed vm with DOM stubs and snapshot the
   data globals (QUESTIONS / ARCHETYPES / RESULTS).
   We modify the source so those three top-level `const` declarations also
   assign onto a capture object that survives the IIFE scope. */
function loadAssessment() {
  let src = fs.readFileSync(ASSESS_PATH, 'utf8');
  // Add a `__capture` assignment alongside each top-level const we care about
  src = src
    .replace(/^(\s*)const QUESTIONS = (\[)/m, '$1const QUESTIONS = __capture.QUESTIONS = $2')
    .replace(/^(\s*)const ARCHETYPES = (\{)/m, '$1const ARCHETYPES = __capture.ARCHETYPES = $2')
    .replace(/^(\s*)const RESULTS = (\{)/m, '$1const RESULTS = __capture.RESULTS = $2')
    .replace(/^(\s*)const ICONS = (\{)/m, '$1const ICONS = __capture.ICONS = $2')
    .replace(/^(\s*)const ROMAN = (\{)/m, '$1const ROMAN = __capture.ROMAN = $2')
    .replace(/^(\s*)const ARC = (\[)/m, '$1const ARC = __capture.ARC = $2');

  // Stub DOM globals so the runtime listeners don't crash
  const noopFn = () => {};
  const stubEl = {
    setAttribute: noopFn,
    getAttribute: () => null,
    addEventListener: noopFn,
    classList: { add: noopFn, remove: noopFn, toggle: noopFn, contains: () => false },
    style: {},
    appendChild: noopFn,
    insertAdjacentHTML: noopFn,
    querySelector: () => null,
    querySelectorAll: () => [],
    children: [],
    dataset: {},
    parentNode: null,
    cloneNode: () => stubEl,
  };
  const document = {
    getElementById: () => stubEl,
    querySelector: () => stubEl,
    querySelectorAll: () => [],
    addEventListener: noopFn,
    createElement: () => stubEl,
    body: stubEl,
    documentElement: stubEl,
  };
  const window = {
    matchMedia: () => ({ matches: false, addEventListener: noopFn, addListener: noopFn }),
    addEventListener: noopFn,
    innerWidth: 1280,
    innerHeight: 720,
    location: { hash: '' },
    history: { replaceState: noopFn, pushState: noopFn },
    requestAnimationFrame: noopFn,
  };

  const __capture = {};
  const ctx = { __capture, document, window, console, setTimeout, clearTimeout };
  vm.createContext(ctx);
  try {
    vm.runInContext(src, ctx, { filename: 'assessment.js' });
  } catch (e) {
    // IIFE may throw on DOM init after the data block — that's fine, we
    // already captured what we need.
  }
  return __capture;
}

/* ───────── Parse slides ───────── */

function parseSlides() {
  const html = fs.readFileSync(SLIDES_PATH, 'utf8');
  const $ = load(html);
  const slides = [];

  $('section.slide').each((_, sec) => {
    const $sec = $(sec);
    const classes = ($sec.attr('class') || '').split(/\s+/);
    const id = $sec.attr('id') || null;
    const pillEl = $sec.find('.slide-header-pill, .slide-section-pill').first();
    const pill = clean(pillEl.text());
    const pageEl = $sec.find('.slide-page').first();
    const page = clean(pageEl.text());

    let title;
    const subtitleEl = $sec.find('.slide-subtitle, .lead-p').first();
    let subtitle = clean(subtitleEl.text());

    if (classes.includes('slide-section')) {
      title = clean($sec.find('h1.slide-section-title').text());
    } else if (id === 'cover') {
      title = clean($sec.find('.cover-title').text());
      subtitle = clean($sec.find('.cover-sub').text());
    } else if (id === 'contents') {
      title = clean($sec.find('.contents-title').text());
    } else {
      title = clean($sec.find('h2.slide-h1').text());
    }

    const slide = {
      id,
      classes,
      page,
      pill,
      title,
      subtitle,
      body: extractBody($, $sec, id, classes),
    };
    slides.push(slide);
  });

  return slides;
}

function extractBody($, $sec, id, classes) {
  /* Slide-type-specific extractors. Order matters: more specific first. */

  // Cover slide: just an image collage; no body prose
  if (id === 'cover') return [];

  // Contents page: list of chapter entries
  if (id === 'contents') {
    const items = [];
    $sec.find('.contents-list li').each((_, li) => {
      const $li = $(li);
      const num = clean($li.find('.contents-num').text());
      const name = clean($li.find('.contents-name').text());
      const page = clean($li.find('.contents-page').text());
      const desc = clean($li.find('.contents-desc').text());
      const href = $li.find('a').attr('href');
      items.push({ kind: 'contents-entry', num, name, page, desc, href });
    });
    return items;
  }

  // Section title slide: nothing more after title
  if (classes.includes('slide-section')) return [];

  // Path-through-this-guide (slide 07): chapter map cards
  if ($sec.find('.chapter-map').length) {
    const cards = [];
    $sec.find('.chapter-card').each((_, c) => {
      const $c = $(c);
      cards.push({
        kind: 'chapter-card',
        num: clean($c.find('.chapter-card-num').text()),
        name: clean($c.find('.chapter-card-name').text()),
        body: clean($c.find('.chapter-card-body').text()),
        href: $c.attr('href'),
      });
    });
    return cards;
  }

  // AI Evolution / two parallel tracks (slide 05): milestone clusters
  if ($sec.find('.evo').length) {
    const items = [];
    $sec.find('.ms-label').each((_, ms) => {
      const $ms = $(ms);
      items.push({
        kind: 'milestone',
        num: clean($ms.find('.ms-num').text()),
        name: clean($ms.find('.ms-name').text()),
        year: clean($ms.find('.ms-year').text()),
      });
    });
    $sec.find('.evo-cluster').each((_, c) => {
      const $c = $(c);
      const heading = clean($c.find('.evo-cluster-num').text());
      const bullets = [];
      $c.find('li').each((_, li) => bullets.push(clean($(li).text())));
      items.push({ kind: 'evo-cluster', heading, bullets });
    });
    return items;
  }

  // Foreword body: two-column prose
  if ($sec.find('.foreword-grid').length) {
    const blocks = [];
    $sec.find('.foreword-grid p').each((_, p) => {
      const $p = $(p);
      blocks.push({ kind: 'paragraph', text: clean($p.text()) });
    });
    return blocks;
  }

  // Ch1 body (slide 06) with .ch1-body-grid + dual-track yin-yang visual
  if ($sec.find('.ch1-body-grid').length) {
    const blocks = [];
    $sec.find('.ch1-col-left p, .ch1-col-right > p').each((_, p) => {
      blocks.push({ kind: 'paragraph', text: clean($(p).text()) });
    });
    // dual-track visual: title + two sides
    const dt = $sec.find('.dual-track-yy');
    if (dt.length) {
      blocks.push({ kind: 'aside', heading: clean(dt.find('.dt-title').text()) });
      dt.find('.dt-side').each((_, side) => {
        const $side = $(side);
        blocks.push({
          kind: 'kv',
          key: clean($side.find('.dt-label').text()),
          value: clean($side.find('p').text()),
        });
      });
    }
    return blocks;
  }

  // Yin-yang levels framework (slide 09)
  if ($sec.find('.yy-level-rows').length) {
    const rows = [];
    $sec.find('.yy-level-row').each((_, r) => {
      const $r = $(r);
      const finite = $r.find('.finite-side .yy-level-text');
      const infinite = $r.find('.infinite-side .yy-level-text');
      const center = clean($r.find('.yy-num').text());
      rows.push({
        kind: 'yy-row',
        level: center,
        governed: {
          name: clean(finite.find('.yy-level-name').text()),
          desc: clean(finite.find('.yy-level-desc').text()),
        },
        cultivated: {
          name: clean(infinite.find('.yy-level-name').text()),
          desc: clean(infinite.find('.yy-level-desc').text()),
        },
      });
    });
    return rows;
  }

  // Cross-comparison examples (slide 10): governed vs cultivated table
  if ($sec.find('.compare-grid').length) {
    const rows = [];
    $sec.find('.compare-row').each((_, r) => {
      const $r = $(r);
      const label = clean($r.find('.compare-level').text());
      const governed = clean($r.find('.compare-cell.governed').text());
      const cultivated = clean($r.find('.compare-cell.cultivated').text());
      rows.push({ kind: 'compare-row', level: label, governed, cultivated });
    });
    return rows;
  }

  // Level deep-dives (L1–L5): level-card-grid
  if ($sec.find('.level-card-grid').length) {
    const cards = [];
    $sec.find('.level-card').each((_, c) => {
      const $c = $(c);
      cards.push({
        kind: 'level-card',
        label: clean($c.find('.level-card-label').text()),
        text: clean($c.find('p').text()),
      });
    });
    return cards;
  }

  // Readiness check (slide 17): checklist-grid
  if ($sec.find('.checklist-grid').length) {
    const items = [];
    $sec.find('.checklist-card').each((_, c) => {
      const $c = $(c);
      items.push({
        kind: 'checklist',
        num: clean($c.find('.checklist-num').text()),
        question: clean($c.find('.checklist-question').text()),
        pass: clean($c.find('.checklist-pass').text()),
      });
    });
    // Closing paragraph after the grid
    const closing = clean($sec.find('main > p').last().text());
    if (closing) items.push({ kind: 'paragraph', text: closing });
    return items;
  }

  // Plan-after-play (slide 18): audit-steps
  if ($sec.find('.audit-steps').length) {
    const steps = [];
    $sec.find('.audit-step').each((_, s) => {
      const $s = $(s);
      steps.push({
        kind: 'audit-step',
        num: clean($s.find('.audit-step-num').text()),
        title: clean($s.find('.audit-step-title').text()),
        body: clean($s.find('.audit-step-body').text()),
      });
    });
    const closing = clean($sec.find('main > p').last().text());
    if (closing) steps.push({ kind: 'paragraph', text: closing });
    return steps;
  }

  // From play to protocol (slide 19): protocol-flow stages + gates
  if ($sec.find('.protocol-flow').length) {
    const flow = [];
    $sec.find('.protocol-flow > *').each((_, el) => {
      const $el = $(el);
      if ($el.hasClass('protocol-stage')) {
        flow.push({
          kind: 'stage',
          track: clean($el.find('.protocol-stage-track').text()),
          name: clean($el.find('.protocol-stage-name').text()),
          body: clean($el.find('.protocol-stage-body').text()),
        });
      } else if ($el.hasClass('protocol-gate')) {
        flow.push({ kind: 'gate', label: clean($el.find('.protocol-gate-label').text()) });
      }
    });
    const footer = clean($sec.find('main > p').last().text());
    if (footer) flow.push({ kind: 'paragraph', text: footer });
    return flow;
  }

  // Ch4 cultivated/governed duality (slide 21): duality-wrap
  if ($sec.find('.duality-wrap').length) {
    const cols = [];
    $sec.find('.duality-col').each((_, col) => {
      const $col = $(col);
      const header = {
        track: clean($col.find('.track-pill').text()),
        sub: clean($col.find('.duality-col-sub').text()),
      };
      const cards = [];
      $col.find('.duality-card').each((_, c) => {
        const $c = $(c);
        cards.push({
          num: clean($c.find('.duality-act-num').text()),
          name: clean($c.find('.duality-act-name').text()),
          body: clean($c.find('.duality-act-body').text()),
        });
      });
      cols.push({ kind: 'duality-col', header, cards });
    });
    return cols;
  }

  // Trilemma (slide 22): triangle + 3 definitions
  if ($sec.find('.trilemma-defs').length) {
    const defs = [];
    $sec.find('.trilemma-def').each((_, d) => {
      const $d = $(d);
      defs.push({
        kind: 'trilemma-def',
        label: clean($d.find('.trilemma-def-label').text()),
        text: clean($d.find('p').text()),
      });
    });
    return defs;
  }

  // Success / failure pattern cards (slides 23, 24)
  if ($sec.find('.slide-pattern-grid').length) {
    const cards = [];
    $sec.find('.slide-pattern-card').each((_, c) => {
      const $c = $(c);
      cards.push({
        kind: 'pattern-card',
        type: $c.hasClass('failure') ? 'failure' : 'success',
        icon: clean($c.find('.slide-pattern-card-icon').text()),
        name: clean($c.find('.slide-pattern-card-name').text()),
        tag: clean($c.find('.slide-pattern-card-tag').text()),
        body: clean($c.find('.slide-pattern-card-body').text()),
        tension: clean($c.find('.slide-pattern-card-tension .tension-text').text()),
        tensionLabel: clean($c.find('.slide-pattern-card-tension .tension-label').text()),
        mitigation: clean($c.find('.slide-pattern-card-mitigation .mitigation-name').text()),
      });
    });
    return cards;
  }

  // Six business activities (slide 25): roles-grid
  if ($sec.find('.roles-grid').length) {
    const cards = [];
    $sec.find('.role-card').each((_, c) => {
      const $c = $(c);
      cards.push({
        kind: 'role-card',
        name: clean($c.find('.role-name').text()),
        body: clean($c.find('.role-body').text()),
      });
    });
    return cards;
  }

  // Business activities flow (slide 26)
  if ($sec.find('.biz-flow').length) {
    const blocks = [];
    $sec.find('.ctx-label').each((_, l) => {
      const $l = $(l);
      blocks.push({
        kind: 'ctx-label',
        name: clean($l.find('strong').text()),
        text: clean($l.find('em').text()),
      });
    });
    $sec.find('.intake-box').each((_, b) => {
      const $b = $(b);
      blocks.push({
        kind: 'intake',
        name: clean($b.find('.intake-name').text()),
        text: clean($b.find('.intake-gloss').text()),
      });
    });
    $sec.find('.loop-node').each((_, n) => {
      const $n = $(n);
      blocks.push({
        kind: 'loop-node',
        name: clean($n.find('.node-name').text()),
        text: clean($n.find('.node-gloss').text()),
      });
    });
    return blocks;
  }

  // Case study slides
  if ($sec.find('.case-slide-wrapper').length) {
    const sections = [];
    const header = $sec.find('.case-slide-header');
    if (header.length) {
      sections.push({
        kind: 'case-header',
        label: clean(header.find('.case-slide-label').text()),
        name: clean(header.find('.case-slide-name').text()),
        frameLine: clean(header.find('.case-slide-frame-line').text()),
      });
    }
    $sec.find('.case-slide-section').each((_, s) => {
      const $s = $(s);
      sections.push({
        kind: 'case-section',
        heading: clean($s.find('h5').text()),
        body: clean($s.find('p').text()),
      });
    });
    return sections;
  }

  // Appendix case-studies overview (slide 32 now)
  if ($sec.find('.case-overview').length) {
    const cols = [];
    $sec.find('.case-overview-col').each((_, c) => {
      const $c = $(c);
      const heading = clean($c.find('.case-overview-heading').text());
      const links = [];
      $c.find('.case-link').each((_, a) => {
        const $a = $(a);
        links.push({
          num: clean($a.find('.case-link-num').text()),
          name: clean($a.find('.case-link-name').text()),
          level: clean($a.find('.case-link-level').text()),
        });
      });
      cols.push({ kind: 'case-overview-col', heading, links });
    });
    return cols;
  }

  // Right-artifact / Tool-vs-Paradigm matrix (Appendix · Frameworks)
  if ($sec.find('.paradigm-matrix').length) {
    const cells = [];
    $sec.find('.matrix-cell').each((_, c) => {
      const $c = $(c);
      cells.push({
        kind: 'matrix-cell',
        artifact: clean($c.find('.matrix-artifact').text()),
        example: clean($c.find('.matrix-example').text()),
        aiExample: clean($c.find('.matrix-ai-example').text()),
      });
    });
    return cells;
  }

  // Ch6 body (new nature of work): plain prose
  if ($sec.find('.slide-body-cols-2').length) {
    const blocks = [];
    $sec.find('.slide-body-cols-2 p').each((_, p) => {
      blocks.push({ kind: 'paragraph', text: clean($(p).text()) });
    });
    return blocks;
  }

  // Roles slide (Ch4 named-roles fallback if class differs)
  if ($sec.find('.named-roles-grid').length) {
    const cards = [];
    $sec.find('.named-roles-card').each((_, c) => {
      const $c = $(c);
      cards.push({
        kind: 'role-card',
        name: clean($c.find('.named-roles-name').text()),
        body: clean($c.find('.named-roles-body').text()),
      });
    });
    return cards;
  }

  // About & Resources (split slide)
  if ($sec.find('.split-grid').length) {
    const cols = [];
    $sec.find('.split-col').each((_, c) => {
      const $c = $(c);
      cols.push({
        kind: 'split-col',
        heading: clean($c.find('.split-col-title').text()),
        body: cleanBlock($c.find('p').map((_, p) => $(p).text()).get().join('\n\n')),
      });
    });
    return cols;
  }

  // Assessment slide: marker — content comes from assessment.js
  if (id === 'assessment') {
    return [{ kind: 'assessment-marker' }];
  }

  // Generic fallback: pull <p> elements from slide-body
  const generic = [];
  $sec.find('main.slide-body p').each((_, p) => {
    const t = clean($(p).text());
    if (t) generic.push({ kind: 'paragraph', text: t });
  });
  return generic;
}

/* ───────── Render: sitemap.xml ───────── */

function renderSitemap(slides) {
  const urls = [];
  urls.push({ loc: `${SITE_URL}/`, priority: '1.0' });

  for (const s of slides) {
    if (!s.id) continue;
    urls.push({
      loc: `${SITE_URL}/#${s.id}`,
      priority: s.id === 'cover' || s.id === 'contents' ? '0.9' : '0.8',
    });
  }
  // Companion text resources
  urls.push({ loc: `${SITE_URL}/llms.txt`, priority: '0.7' });
  urls.push({ loc: `${SITE_URL}/llms-full.txt`, priority: '0.7' });
  urls.push({ loc: `${SITE_URL}/guide.md`, priority: '0.7' });

  const lines = [];
  lines.push('<?xml version="1.0" encoding="UTF-8"?>');
  lines.push(`<!-- ${DO_NOT_EDIT_BANNER('@@TEXT@@')} -->`);
  lines.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
  for (const u of urls) {
    lines.push('  <url>');
    lines.push(`    <loc>${u.loc}</loc>`);
    lines.push(`    <lastmod>${TODAY}</lastmod>`);
    lines.push(`    <priority>${u.priority}</priority>`);
    lines.push('  </url>');
  }
  lines.push('</urlset>');
  return lines.join('\n') + '\n';
}

/* ───────── Render: llms.txt (small index) ───────── */

function renderLlmsIndex(slides, assessment) {
  const chapters = slides.filter((s) => s.classes.includes('slide-section') && s.id);
  const out = [];
  out.push(`<!-- ${DO_NOT_EDIT_BANNER('@@TEXT@@')} -->`);
  out.push(`# ${SITE_TITLE}`);
  out.push('');
  out.push(`> ${SITE_TAGLINE}`);
  out.push('');
  out.push(`**Version:** ${VERSION}  `);
  out.push(`**Last updated:** ${TODAY}  `);
  out.push(`**Source repo:** https://github.com/rafaeldavid/protocolized-publications`);
  out.push('');
  out.push('## Companion resources');
  out.push('');
  out.push(`- [Live interactive deck](${SITE_URL}/) — slide-by-slide with sidebar nav and embedded assessment`);
  out.push(`- [Full plain-text content](${SITE_URL}/llms-full.txt) — every slide as text, single file`);
  out.push(`- [Markdown single-pager](${SITE_URL}/guide.md) — same content in markdown for ingestion`);
  out.push(`- [Sitemap](${SITE_URL}/sitemap.xml) — anchor-level discovery`);
  out.push('');
  out.push('## Chapters');
  out.push('');
  for (const ch of chapters) {
    out.push(`- [${ch.pill || ch.title}](${SITE_URL}/#${ch.id}) — ${ch.title}`);
  }
  out.push('');
  out.push('## Maturity levels (5)');
  out.push('');
  if (assessment.RESULTS) {
    for (const key of Object.keys(assessment.RESULTS)) {
      const r = assessment.RESULTS[key];
      out.push(`- **L${r.levelNum} ${r.levelName}** — ${r.tagline}`);
    }
  }
  out.push('');
  out.push('## Archetypes (10) from the assessment');
  out.push('');
  if (assessment.ARCHETYPES) {
    for (const key of Object.keys(assessment.ARCHETYPES)) {
      const a = assessment.ARCHETYPES[key];
      const quote = a.quote ? ` — *"${a.quote}"*` : '';
      out.push(`- **${a.title}**${quote}`);
    }
  }
  out.push('');
  out.push('## Appendix');
  out.push('');
  out.push(`- [Case studies](${SITE_URL}/#appendix) — 10 cases (5 contemporary, 5 historical analogues)`);
  out.push(`- [Frameworks](${SITE_URL}/#frameworks-matrix) — the right-artifact matrix`);
  out.push(`- [Assessment](${SITE_URL}/#assessment) — 24-question diagnostic`);
  out.push('');
  out.push('---');
  out.push('');
  out.push('*Protocol Institute · Protocols for Business Practice*');
  return out.join('\n') + '\n';
}

/* ───────── Render: llms-full.txt (full content) ───────── */

function renderLlmsFull(slides, assessment) {
  const out = [];
  out.push(`<!-- ${DO_NOT_EDIT_BANNER('@@TEXT@@')} -->`);
  out.push(`# ${SITE_TITLE}`);
  out.push('');
  out.push(`> ${SITE_TAGLINE}`);
  out.push('');
  out.push(`Version: ${VERSION} · Generated: ${TODAY}`);
  out.push('');
  out.push('═══════════════════════════════════════════════════════════════');
  out.push('  DECK CONTENT');
  out.push('═══════════════════════════════════════════════════════════════');
  out.push('');

  for (const slide of slides) {
    if (!slide.title) continue;
    out.push('');
    out.push(`── Slide ${slide.page || '??'}${slide.pill ? ` · ${slide.pill}` : ''} ──`);
    out.push('');
    if (slide.classes.includes('slide-section')) {
      out.push(`# ${slide.title}`);
    } else {
      out.push(`## ${slide.title}`);
    }
    if (slide.subtitle) {
      out.push('');
      out.push(`${slide.subtitle}`);
    }
    out.push('');
    renderBodyPlain(out, slide.body, assessment);
  }

  return out.join('\n') + '\n';
}

function renderBodyPlain(out, body, assessment) {
  if (!body || body.length === 0) return;
  for (const block of body) {
    switch (block.kind) {
      case 'paragraph':
        out.push(block.text);
        out.push('');
        break;
      case 'contents-entry':
        out.push(`  ${block.num}. ${block.name} (page ${block.page})`);
        out.push(`     ${block.desc}`);
        break;
      case 'chapter-card':
        out.push(`  ${block.num}. ${block.name}`);
        out.push(`     ${block.body}`);
        break;
      case 'milestone':
        out.push(`  Milestone ${block.num} — ${block.name} (${block.year})`);
        break;
      case 'evo-cluster':
        out.push(`  ${block.heading}:`);
        for (const b of block.bullets) out.push(`    · ${b}`);
        break;
      case 'aside':
        out.push(`  [${block.heading}]`);
        break;
      case 'kv':
        out.push(`  ${block.key}: ${block.value}`);
        break;
      case 'yy-row':
        out.push(`  ${block.level} — Governed: ${block.governed.name}`);
        out.push(`    ${block.governed.desc}`);
        out.push(`  ${block.level} — Cultivated: ${block.cultivated.name}`);
        out.push(`    ${block.cultivated.desc}`);
        break;
      case 'compare-row':
        out.push(`  ${block.level} · Governed: ${block.governed}`);
        out.push(`  ${block.level} · Cultivated: ${block.cultivated}`);
        break;
      case 'level-card':
        out.push(`  ${block.label}: ${block.text}`);
        break;
      case 'checklist':
        out.push(`  ${block.num}. ${block.question}`);
        out.push(`     ${block.pass}`);
        break;
      case 'audit-step':
        out.push(`  ${block.num} — ${block.title}`);
        out.push(`    ${block.body}`);
        break;
      case 'stage':
        out.push(`  ${block.track} → ${block.name}: ${block.body}`);
        break;
      case 'gate':
        out.push(`  Gate: ${block.label}`);
        break;
      case 'duality-col':
        out.push(`  [${block.header.track} · ${block.header.sub}]`);
        for (const c of block.cards) {
          out.push(`    ${c.num}. ${c.name} — ${c.body}`);
        }
        break;
      case 'trilemma-def':
        out.push(`  ${block.label}: ${block.text}`);
        break;
      case 'pattern-card':
        out.push(`  ${block.icon} ${block.name} (${block.type})`);
        out.push(`     Tag: ${block.tag}`);
        out.push(`     Body: ${block.body}`);
        if (block.tension) out.push(`     ${block.tensionLabel || 'Tension'}: ${block.tension}`);
        if (block.mitigation) out.push(`     Mitigated via: ${block.mitigation}`);
        break;
      case 'role-card':
        out.push(`  ${block.name}: ${block.body}`);
        break;
      case 'ctx-label':
        out.push(`  ${block.name}: ${block.text}`);
        break;
      case 'intake':
        out.push(`  Intake — ${block.name}: ${block.text}`);
        break;
      case 'loop-node':
        out.push(`  Loop node — ${block.name}: ${block.text}`);
        break;
      case 'case-header':
        out.push(`  ${block.label}: ${block.name}`);
        if (block.frameLine) out.push(`  ${block.frameLine}`);
        break;
      case 'case-section':
        out.push(`  ${block.heading}: ${block.body}`);
        break;
      case 'case-overview-col':
        out.push(`  ${block.heading}:`);
        for (const l of block.links) out.push(`    ${l.num}. ${l.name} — ${l.level}`);
        break;
      case 'matrix-cell':
        out.push(`  ${block.artifact} — e.g., ${block.example}. AI: ${block.aiExample}`);
        break;
      case 'split-col':
        out.push(`  ${block.heading}`);
        out.push(`    ${block.body}`);
        break;
      case 'assessment-marker':
        renderAssessmentPlain(out, assessment);
        break;
    }
    if (block.kind && block.kind !== 'paragraph') out.push('');
  }
}

function renderAssessmentPlain(out, assessment) {
  out.push('  AI Adoption Assessment — 24-question diagnostic');
  out.push('  Places your organization on the maturity ladder (L1–L5) and surfaces a dominant archetype.');
  out.push('');
  if (assessment.QUESTIONS) {
    out.push('  Questions (each a binary choice — answer the statement that better describes your organization):');
    out.push('');
    assessment.QUESTIONS.forEach((q, i) => {
      out.push(`    Q${i + 1}:`);
      out.push(`      a. ${q.a}`);
      out.push(`      b. ${q.b}`);
    });
    out.push('');
  }
  if (assessment.RESULTS) {
    out.push('  Maturity-level outcomes:');
    out.push('');
    for (const key of Object.keys(assessment.RESULTS)) {
      const r = assessment.RESULTS[key];
      out.push(`    L${r.levelNum} — ${r.levelName}: ${r.tagline}`);
      out.push(`      ${stripTags(r.description).split('\n').join('\n      ')}`);
      out.push('');
    }
  }
  if (assessment.ARCHETYPES) {
    out.push('  Archetype outcomes (10):');
    out.push('');
    for (const key of Object.keys(assessment.ARCHETYPES)) {
      const a = assessment.ARCHETYPES[key];
      out.push(`    ${a.title}`);
      if (a.quote) out.push(`      Quote: "${a.quote}"`);
      out.push(`      Core bet: ${a.coreStrategicBet}`);
      out.push(`      Examples: ${a.examples}`);
      out.push(`      Profile: ${stripTags(a.profile)}`);
      out.push(`      Healthy: ${a.healthy}`);
      out.push(`      Unhealthy: ${a.unhealthy}`);
      out.push(`      Blind spot: ${a.blindSpot}`);
      out.push(`      Under stress → ${stripTags(a.underStress)}`);
      out.push(`      Growth direction → ${stripTags(a.growthDirection)}`);
      out.push('');
    }
  }
}

const stripTags = (s) => (s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

/* ───────── Render: guide.md (markdown single-pager) ───────── */

function renderGuideMd(slides, assessment) {
  const out = [];
  out.push(`<!-- ${DO_NOT_EDIT_BANNER('@@TEXT@@')} -->`);
  out.push(`# ${SITE_TITLE}`);
  out.push('');
  out.push(`*${SITE_TAGLINE}*`);
  out.push('');
  out.push(`Version: ${VERSION} · Generated: ${TODAY}`);
  out.push('');
  out.push(`Live interactive deck: <${SITE_URL}/>`);
  out.push('');
  out.push('---');
  out.push('');

  for (const slide of slides) {
    if (!slide.title) continue;
    if (slide.id === 'cover') continue; // cover handled in heading above
    if (slide.classes.includes('slide-section')) {
      out.push(`## ${slide.title}`);
      out.push('');
      if (slide.subtitle) out.push(`*${slide.subtitle}*`);
      if (slide.subtitle) out.push('');
      continue;
    }
    out.push(`### ${slide.title}`);
    out.push('');
    if (slide.subtitle) {
      out.push(`*${slide.subtitle}*`);
      out.push('');
    }
    renderBodyMd(out, slide.body, assessment);
  }
  return out.join('\n') + '\n';
}

function renderBodyMd(out, body, assessment) {
  if (!body || body.length === 0) return;
  for (const block of body) {
    switch (block.kind) {
      case 'paragraph':
        out.push(block.text);
        out.push('');
        break;
      case 'contents-entry':
        out.push(`- **${block.num}. [${block.name}](#${(block.href || '').replace('#', '')})** (page ${block.page})  `);
        out.push(`  ${block.desc}`);
        break;
      case 'chapter-card':
        out.push(`- **${block.num}. ${block.name}** — ${block.body}`);
        break;
      case 'milestone':
        out.push(`- **Milestone ${block.num}: ${block.name}** (${block.year})`);
        break;
      case 'evo-cluster':
        out.push(`**${block.heading}**`);
        out.push('');
        for (const b of block.bullets) out.push(`- ${b}`);
        out.push('');
        break;
      case 'aside':
        out.push(`> **${block.heading}**`);
        out.push('');
        break;
      case 'kv':
        out.push(`- **${block.key}** — ${block.value}`);
        break;
      case 'yy-row':
        out.push(`**${block.level}** · Governed: **${block.governed.name}** — ${block.governed.desc}  `);
        out.push(`**${block.level}** · Cultivated: **${block.cultivated.name}** — ${block.cultivated.desc}`);
        out.push('');
        break;
      case 'compare-row':
        out.push(`- **${block.level}** · Governed: ${block.governed}  `);
        out.push(`  Cultivated: ${block.cultivated}`);
        break;
      case 'level-card':
        out.push(`- **${block.label}** — ${block.text}`);
        break;
      case 'checklist':
        out.push(`${block.num}. **${block.question}**  `);
        out.push(`   ${block.pass}`);
        break;
      case 'audit-step':
        out.push(`**${block.num} — ${block.title}**`);
        out.push('');
        out.push(block.body);
        out.push('');
        break;
      case 'stage':
        out.push(`- **${block.track} → ${block.name}** — ${block.body}`);
        break;
      case 'gate':
        out.push(`  - *Gate: ${block.label}*`);
        break;
      case 'duality-col':
        out.push(`#### ${block.header.track} · ${block.header.sub}`);
        out.push('');
        for (const c of block.cards) {
          out.push(`- **${c.num}. ${c.name}** — ${c.body}`);
        }
        out.push('');
        break;
      case 'trilemma-def':
        out.push(`- **${block.label}** — ${block.text}`);
        break;
      case 'pattern-card': {
        const icon = block.icon ? `\`${block.icon}\` ` : '';
        out.push(`#### ${icon}${block.name} *(${block.type})*`);
        if (block.tag) out.push(`*${block.tag}*`);
        out.push('');
        out.push(block.body);
        if (block.tension) out.push(`> **${block.tensionLabel || 'Tension'}:** ${block.tension}`);
        if (block.mitigation) out.push(`> **Mitigated via:** ${block.mitigation}`);
        out.push('');
        break;
      }
      case 'role-card':
        out.push(`**${block.name}** — ${block.body}`);
        out.push('');
        break;
      case 'ctx-label':
        out.push(`- **${block.name}** — ${block.text}`);
        break;
      case 'intake':
        out.push(`**Intake · ${block.name}** — ${block.text}`);
        out.push('');
        break;
      case 'loop-node':
        out.push(`**Loop · ${block.name}** — ${block.text}`);
        out.push('');
        break;
      case 'case-header':
        out.push(`**${block.label}: ${block.name}**`);
        if (block.frameLine) out.push(`*${block.frameLine}*`);
        out.push('');
        break;
      case 'case-section':
        out.push(`**${block.heading}**`);
        out.push('');
        out.push(block.body);
        out.push('');
        break;
      case 'case-overview-col':
        out.push(`#### ${block.heading}`);
        for (const l of block.links) out.push(`- ${l.num}. **${l.name}** — ${l.level}`);
        out.push('');
        break;
      case 'matrix-cell':
        out.push(`- **${block.artifact}** — e.g., ${block.example}. *AI counterpart:* ${block.aiExample}`);
        break;
      case 'split-col':
        out.push(`#### ${block.heading}`);
        out.push('');
        out.push(block.body);
        out.push('');
        break;
      case 'assessment-marker':
        renderAssessmentMd(out, assessment);
        break;
    }
  }
  if (body.length) out.push('');
}

function renderAssessmentMd(out, assessment) {
  out.push('A 24-question diagnostic. Each question is a binary choice between two statements — answer the one that better describes your organization. The combined pattern places you on the maturity ladder (L1–L5) and surfaces a dominant archetype.');
  out.push('');

  if (assessment.QUESTIONS) {
    out.push('#### Questions');
    out.push('');
    assessment.QUESTIONS.forEach((q, i) => {
      out.push(`**Q${i + 1}.**  `);
      out.push(`- a. ${q.a}  `);
      out.push(`- b. ${q.b}`);
      out.push('');
    });
  }

  if (assessment.RESULTS) {
    out.push('#### Maturity-level outcomes');
    out.push('');
    for (const key of Object.keys(assessment.RESULTS)) {
      const r = assessment.RESULTS[key];
      out.push(`##### L${r.levelNum} — ${r.levelName}`);
      out.push('');
      out.push(`*${r.tagline}*`);
      out.push('');
      out.push(stripTags(r.description));
      out.push('');
      if (r.failureModes && r.failureModes.length) {
        out.push('**Failure modes:**');
        out.push('');
        for (const fm of r.failureModes) {
          out.push(`- **${fm.name}** — ${stripTags(fm.description)}`);
        }
        out.push('');
      }
      if (r.actions && r.actions.length) {
        out.push('**Next actions:**');
        out.push('');
        for (const a of r.actions) {
          out.push(`- **${a.name}** — ${stripTags(a.description)}  *Done when: ${a.doneWhen}*`);
        }
        out.push('');
      }
    }
  }

  if (assessment.ARCHETYPES) {
    out.push('#### Archetypes (10)');
    out.push('');
    for (const key of Object.keys(assessment.ARCHETYPES)) {
      const a = assessment.ARCHETYPES[key];
      out.push(`##### ${a.title}`);
      out.push('');
      if (a.quote) out.push(`> *"${a.quote}"*`);
      if (a.quote) out.push('');
      out.push(`**Core strategic bet:** ${a.coreStrategicBet}  `);
      out.push(`**Examples:** ${a.examples}`);
      out.push('');
      out.push(stripTags(a.profile));
      out.push('');
      if (a.strengths && a.strengths.length) {
        out.push('**Strengths:** ' + a.strengths.map(stripTags).join('; '));
      }
      if (a.challenges && a.challenges.length) {
        out.push('**Challenges:** ' + a.challenges.map(stripTags).join('; '));
      }
      out.push('');
      out.push(`**Healthy:** ${a.healthy}  `);
      out.push(`**Unhealthy:** ${a.unhealthy}  `);
      out.push(`**Blind spot:** ${a.blindSpot}`);
      out.push('');
      out.push(`**Under stress:** ${stripTags(a.underStress)}  `);
      out.push(`**Growth direction:** ${stripTags(a.growthDirection)}  `);
      out.push(`**Evolutionary path:** ${stripTags(a.evolutionaryPath)}`);
      out.push('');
    }
  }
}

/* ───────── Main ───────── */

function main() {
  console.log('• Reading slides.html and assessment.js …');
  const assessment = loadAssessment();
  const slides = parseSlides();
  console.log(`  ${slides.length} slides parsed`);
  if (assessment.QUESTIONS) console.log(`  ${assessment.QUESTIONS.length} assessment questions captured`);
  if (assessment.ARCHETYPES) console.log(`  ${Object.keys(assessment.ARCHETYPES).length} archetypes captured`);
  if (assessment.RESULTS) console.log(`  ${Object.keys(assessment.RESULTS).length} maturity-level results captured`);

  const writes = [
    ['sitemap.xml',    renderSitemap(slides)],
    ['llms.txt',       renderLlmsIndex(slides, assessment)],
    ['llms-full.txt',  renderLlmsFull(slides, assessment)],
    ['guide.md',       renderGuideMd(slides, assessment)],
  ];

  for (const [name, body] of writes) {
    const dest = path.join(HTML_DIR, name);
    fs.writeFileSync(dest, body, 'utf8');
    console.log(`  ✓ wrote ${name} (${body.length.toLocaleString()} chars)`);
  }
  console.log('Done.');
}

main();
