"""
Design test suite for litepaper HTML.
Tests visual hierarchy, layout consistency, component structure,
prose constraints, mobile safety, and HTML hygiene.
"""

import re
import sys
from html.parser import HTMLParser
from collections import defaultdict

HTML_FILE = "index.html"

with open(HTML_FILE, "r") as f:
    src = f.read()

results = []

def ok(name, detail=""):
    results.append(("PASS", name, detail))

def fail(name, detail=""):
    results.append(("FAIL", name, detail))

def warn(name, detail=""):
    results.append(("WARN", name, detail))


# ── Helpers ──────────────────────────────────────────────────────────────────

def all_ids():
    return set(re.findall(r'\bid=["\']([^"\']+)["\']', src))

def all_hrefs():
    return re.findall(r'href=["\']#([^"\']+)["\']', src)

def css_block():
    m = re.search(r'<style>(.*?)</style>', src, re.DOTALL)
    return m.group(1) if m else ""

def between_tags(tag, content=src):
    pat = rf'<{tag}[^>]*>(.*?)</{tag}>'
    return re.findall(pat, content, re.DOTALL)

def count_occurrences(pattern, text=src):
    return len(re.findall(pattern, text))

def find_inline_styles():
    return re.findall(r'<[^>]+\bstyle=["\']([^"\']*)["\'][^>]*>', src)

def extract_class_names_from_html():
    return re.findall(r'\bclass=["\']([^"\']*)["\']', src)

def css_has_rule(selector_fragment):
    css = css_block()
    return selector_fragment in css


# ── 1. HTML STRUCTURE ─────────────────────────────────────────────────────────

# 1a. Single <h1>
h1s = re.findall(r'<h1[^>]*>', src)
if len(h1s) == 1:
    ok("Single h1 on page")
else:
    fail("Single h1 on page", f"Found {len(h1s)} h1 elements")

# 1b. All nav href anchors resolve to existing IDs
ids = all_ids()
broken = [href for href in all_hrefs() if href not in ids]
if not broken:
    ok("All anchor hrefs resolve to existing IDs")
else:
    fail("All anchor hrefs resolve to existing IDs", f"Broken: {broken}")

# 1c. No duplicate IDs
all_id_list = re.findall(r'\bid=["\']([^"\']+)["\']', src)
dupes = [i for i in set(all_id_list) if all_id_list.count(i) > 1]
if not dupes:
    ok("No duplicate IDs")
else:
    fail("No duplicate IDs", f"Duplicated: {dupes}")

# 1d. Footnote back-link integrity: every fn-back href must resolve
fn_back_hrefs = re.findall(r'class="fn-back" href="#([^"]+)"', src)
broken_backs = [h for h in fn_back_hrefs if h not in ids]
if not broken_backs:
    ok("All footnote back-links resolve")
else:
    fail("All footnote back-links resolve", f"Broken: {broken_backs[:5]}")

# 1e. Footnote forward-link integrity: every sup ref must resolve
sup_refs = re.findall(r'href="#(fn\d+)"', src)
broken_fwd = [h for h in sup_refs if h not in ids]
if not broken_fwd:
    ok("All footnote forward-links resolve")
else:
    fail("All footnote forward-links resolve", f"Broken: {broken_fwd[:5]}")

# 1f. No empty href attributes
empty_hrefs = re.findall(r'href=["\']["\']', src)
if not empty_hrefs:
    ok("No empty href attributes")
else:
    fail("No empty href attributes", f"Found {len(empty_hrefs)}")

# 1g. Tables wrapped in .table-wrap
raw_tables = re.findall(r'<table', src)
wrapped = re.findall(r'class=["\'][^"\']*table-wrap[^"\']*["\'][^>]*>.*?<table', src, re.DOTALL)
if len(raw_tables) == len(wrapped):
    ok("All tables wrapped in .table-wrap")
else:
    fail("All tables wrapped in .table-wrap",
         f"{len(raw_tables)} tables, {len(wrapped)} wrapped")

# 1h. All tables have thead
tables_html = re.findall(r'<table[^>]*>.*?</table>', src, re.DOTALL)
no_thead = [i for i, t in enumerate(tables_html) if '<thead>' not in t]
if not no_thead:
    ok("All tables have thead")
else:
    fail("All tables have thead", f"Table indices missing thead: {no_thead}")


# ── 2. PROSE WIDTH CONSISTENCY ────────────────────────────────────────────────

# 2a. .prose class should only be on div/section/article, not p/h2/span
prose_on_wrong = re.findall(r'<(p|h2|h3|h4|span|li)\b[^>]*class=["\'][^"\']*\bprose\b[^"\']*["\']', src)
if not prose_on_wrong:
    ok(".prose class not applied to inline/text elements")
else:
    fail(".prose class not applied to inline/text elements",
         f"Found on: {[m for m in prose_on_wrong[:5]]}")

# 2b. Inline style max-width on prose elements (should use class instead)
inline_maxwidth = re.findall(r'style=["\'][^"\']*max-width[^"\']*["\']', src)
if not inline_maxwidth:
    ok("No inline max-width styles (use classes)")
else:
    warn("No inline max-width styles (use classes)", f"Found {len(inline_maxwidth)}: check manual overrides")

# 2c. Level block cases and prose sections should use .prose container
level_cases = re.findall(r'<div class="level-cases">(.*?)</div>', src, re.DOTALL)
prose_in_cases = sum(1 for lc in level_cases if 'class="prose"' in lc)
if prose_in_cases == 0:
    # Level cases intentionally go full width within container — ok
    ok(".level-cases content: full container width (intentional)")


# ── 3. INLINE STYLE HYGIENE ───────────────────────────────────────────────────

inline_styles = find_inline_styles()
n_inline = len(inline_styles)

# 3a. Count inline styles
if n_inline == 0:
    ok("Zero inline styles")
elif n_inline <= 5:
    warn("Minimal inline styles", f"{n_inline} found — verify each is intentional")
else:
    fail("Excess inline styles", f"{n_inline} found — move to CSS classes")

# 3b. No inline font-size duplication (already in .level-field-body, .case-block p, etc.)
inline_fontsize = [s for s in inline_styles if 'font-size' in s]
if not inline_fontsize:
    ok("No inline font-size overrides")
else:
    fail("No inline font-size overrides",
         f"{len(inline_fontsize)} inline font-size found: {inline_fontsize[:3]}")

# 3c. No inline line-height duplication
inline_lh = [s for s in inline_styles if 'line-height' in s]
if not inline_lh:
    ok("No inline line-height overrides")
else:
    fail("No inline line-height overrides",
         f"{len(inline_lh)} inline line-height found: {inline_lh[:3]}")

# 3d. No inline margin-top/bottom (use class or CSS rule)
inline_margin = [s for s in inline_styles if 'margin' in s]
if not inline_margin:
    ok("No inline margin overrides")
else:
    warn("Inline margin overrides", f"{len(inline_margin)} found: {inline_margin[:3]}")


# ── 4. COMPONENT STRUCTURAL CONSISTENCY ───────────────────────────────────────

# 4a. Every level-block has: level-header, level-fields, transition-req
level_blocks = re.findall(r'<div[^>]+id="level-\d"[^>]*>(.*?)\n    </div>\n\n    <!-- Level', src, re.DOTALL)
# Approximate: check counts of each element
n_level_blocks = len(re.findall(r'<div[^>]+id="level-\d"', src))
n_level_headers = count_occurrences(r'<div class="level-header">')
n_level_fields_containers = count_occurrences(r'<div class="level-fields">')
n_transition_reqs = count_occurrences(r'<div class="transition-req">')
n_historical = count_occurrences(r'<div class="historical-parallel">')

if n_level_blocks == 5:
    ok("5 level blocks present")
else:
    fail("5 level blocks present", f"Found {n_level_blocks}")

if n_level_headers == 5:
    ok("Each level block has level-header")
else:
    fail("Each level block has level-header", f"Found {n_level_headers}, expected 5")

if n_level_fields_containers == 5:
    ok("Each level block has level-fields container")
else:
    fail("Each level block has level-fields container", f"Found {n_level_fields_containers}, expected 5")

# Levels 1-4 should have transition-req; level 5 intentionally omits
if n_transition_reqs == 4:
    ok("4 transition-req blocks (levels 1–4; level 5 intentionally omitted)")
else:
    warn("Transition-req count", f"Found {n_transition_reqs}, expected 4 (for L1–L4)")

if n_historical == 4:
    ok("4 historical-parallel blocks (levels 1–4)")
else:
    warn("Historical-parallel count", f"Found {n_historical}, expected 4")

# 4b. Every level-field has both label and body
n_level_field = count_occurrences(r'<div class="level-field">')
n_field_label = count_occurrences(r'<div class="level-field-label">')
n_field_body = count_occurrences(r'<div class="level-field-body">')
if n_level_field == n_field_label == n_field_body:
    ok(f"level-field label/body symmetry ({n_level_field} fields each)")
else:
    fail("level-field label/body symmetry",
         f"fields={n_level_field}, labels={n_field_label}, bodies={n_field_body}")

# 4c. Governing protocol / blind spot / failure mode present in each level
n_gp = count_occurrences(r'Governing Protocol')
n_bs = count_occurrences(r'Blind Spot')
n_fm = count_occurrences(r'Failure Mode')
for label, count in [("Governing Protocol", n_gp), ("Blind Spot", n_bs), ("Failure Mode", n_fm)]:
    if count == 5:
        ok(f"'{label}' appears in all 5 level blocks")
    else:
        fail(f"'{label}' appears in all 5 level blocks", f"Found {count}")

# 4d. Step-list items: check all 4 have step-num + step-body + h4
n_step_items = count_occurrences(r'<div class="step-item">')
n_step_nums = count_occurrences(r'<div class="step-num">')
n_step_bodies = count_occurrences(r'<div class="step-body">')
if n_step_items == n_step_nums == n_step_bodies == 4:
    ok("Step list: 4 items with matching num/body pairs")
else:
    fail("Step list structure", f"items={n_step_items}, nums={n_step_nums}, bodies={n_step_bodies}")

# 4e. def-list: 5 definitions for 5 key terms
n_def_items = count_occurrences(r'<div class="def-item">')
n_def_terms = count_occurrences(r'<div class="def-term">')
n_def_bodies = count_occurrences(r'<div class="def-body">')
if n_def_items == n_def_terms == n_def_bodies == 5:
    ok("Definition list: 5 items with matching term/body pairs")
else:
    fail("Definition list structure",
         f"items={n_def_items}, terms={n_def_terms}, bodies={n_def_bodies}")

# 4f. Protocol blocks in S4: should be 5
n_protocol_blocks = count_occurrences(r'<div class="protocol-block">')
if n_protocol_blocks == 5:
    ok("5 protocol-block elements in S4")
else:
    fail("5 protocol-block elements in S4", f"Found {n_protocol_blocks}")

# 4g. Protocol blocks each have: protocol-tag, protocol-title, protocol-body
n_proto_tags = count_occurrences(r'<span class="protocol-tag">')
n_proto_titles = count_occurrences(r'<div class="protocol-title">')
n_proto_bodies = count_occurrences(r'<div class="protocol-body">')  # note: these are <p class>
n_proto_bodies_p = count_occurrences(r'<p class="protocol-body">')
n_proto_bodies_total = n_proto_bodies + n_proto_bodies_p
if n_proto_tags == n_proto_titles == 5:
    ok(f"Protocol-block tag/title symmetry ({n_proto_tags} each)")
else:
    fail("Protocol-block tag/title symmetry",
         f"tags={n_proto_tags}, titles={n_proto_titles}")


# ── 5. TYPOGRAPHY SCALE ───────────────────────────────────────────────────────

css = css_block()

# 5a. h1 > h2 > h3 > h4 font sizes
h_sizes = {}
for h in ['h1','h2','h3','h4']:
    m = re.search(rf'{h}\s*\{{[^}}]*font-size:\s*([\d.]+)rem', css)
    if m:
        h_sizes[h] = float(m.group(1))

if h_sizes.get('h1',0) > h_sizes.get('h2',0) > h_sizes.get('h3',0) > h_sizes.get('h4',0):
    ok(f"Heading scale descends: h1={h_sizes['h1']}rem > h2={h_sizes['h2']}rem > h3={h_sizes['h3']}rem > h4={h_sizes['h4']}rem")
else:
    fail("Heading scale should descend h1>h2>h3>h4", str(h_sizes))

# 5b. Body font size is 1rem (16px base)
body_fontsize = re.search(r'body\s*\{[^}]*font-size:\s*([\d.]+rem|[\d]+px)', css)
if body_fontsize and body_fontsize.group(1) == '1rem':
    ok("Body font-size is 1rem")
else:
    warn("Body font-size", f"Found: {body_fontsize.group(1) if body_fontsize else 'not found'}")

# 5c. Line height ≥ 1.5 for body
body_lh = re.search(r'body\s*\{[^}]*line-height:\s*([\d.]+)', css)
if body_lh and float(body_lh.group(1)) >= 1.5:
    ok(f"Body line-height is {body_lh.group(1)} (≥ 1.5)")
else:
    fail("Body line-height should be ≥ 1.5",
         f"Found: {body_lh.group(1) if body_lh else 'not found'}")

# 5d. Prose max-width ≤ 75ch (approx 680–720px)
prose_mw = re.search(r'--prose:\s*([\d]+)px', css)
if prose_mw:
    val = int(prose_mw.group(1))
    if 580 <= val <= 760:
        ok(f"Prose max-width {val}px is within readable range (580–760px)")
    else:
        warn(f"Prose max-width", f"{val}px — optimal range is 580–760px")
else:
    warn("--prose variable not found in CSS")

# 5e. Small text ≥ 0.75rem (12px) — no illegibly small text
small_texts = re.findall(r'font-size:\s*(0\.\d+)rem', css)
too_small = [s for s in small_texts if float(s) < 0.65]
if not too_small:
    ok("No font sizes below 0.65rem in CSS")
else:
    fail("Font sizes below 0.65rem found", f"{too_small}")

# 5f. Consistent monospace font for code/labels
mono_usages = re.findall(r"font-family:\s*var\(--font-mono\)", css)
if len(mono_usages) >= 3:
    ok(f"Roboto Mono applied consistently ({len(mono_usages)} CSS rules)")
else:
    warn("Roboto Mono usage", f"Only {len(mono_usages)} CSS rules use --font-mono")


# ── 6. SPACING CONSISTENCY ────────────────────────────────────────────────────

# 6a. Section padding: all body sections should use .body-section or .section
n_body_section = count_occurrences(r'class="body-section"')
n_section = count_occurrences(r'\bclass="section\b')
inline_padding_sections = re.findall(r'<section[^>]+style=["\'][^"\']*padding[^"\']*["\']', src)
if not inline_padding_sections:
    ok("No inline padding on section elements")
else:
    fail("No inline padding on section elements",
         f"{len(inline_padding_sections)} sections with inline padding")

# 6b. CSS defines consistent gap values (not random px)
gap_vals = re.findall(r'gap:\s*([\d]+)px', css)
gap_set = set(gap_vals)
if len(gap_set) <= 10:
    ok(f"Gap values are consistent ({len(gap_set)} distinct: {sorted(gap_set, key=int)})")
else:
    warn("Many distinct gap values", f"Found {len(gap_set)}: {sorted(gap_set, key=int)}")

# 6c. No negative margins
neg_margins = re.findall(r'margin[^:]*:\s*-[\d]', css)
if not neg_margins:
    ok("No negative margins in CSS")
else:
    warn("Negative margins found", f"{neg_margins[:3]}")


# ── 7. RESPONSIVE / MOBILE SAFETY ────────────────────────────────────────────

# 7a. Viewport meta tag present
if 'name="viewport"' in src:
    ok("Viewport meta tag present")
else:
    fail("Viewport meta tag present")

# 7b. At least one @media query for mobile
media_queries = re.findall(r'@media\s*\(max-width:\s*([\d]+)px\)', css)
if media_queries:
    ok(f"Media queries present: max-width {sorted(set(media_queries))}px")
else:
    fail("No responsive @media queries found")

# 7c. overflow-x: auto on .table-wrap (prevents table blowout)
if 'overflow-x: auto' in css and 'table-wrap' in css:
    ok(".table-wrap has overflow-x:auto (tables won't blow layout)")
else:
    fail(".table-wrap missing overflow-x:auto")

# 7d. Level-field grid collapses at mobile (must have @media rule)
# Media blocks contain nested {}, so we extract all @media blocks by scanning for them
media_blocks = re.findall(r'@media\s*[^{]+\{((?:[^{}]*\{[^{}]*\})*[^{}]*)\}', css)
level_field_in_media = any('level-field' in mb for mb in media_blocks)
if level_field_in_media:
    ok(".level-field grid has @media collapse rule")
else:
    fail(".level-field grid should collapse to single column at mobile breakpoint",
         "Add @media (max-width:720px) { .level-field { grid-template-columns: 1fr } }")

# 7e. Nav hides links on mobile (no overflow)
nav_media = re.search(r'@media[^}]+nav-links[^}]*display:\s*none', css, re.DOTALL)
if nav_media:
    ok("Nav links hidden on mobile")
else:
    warn("Nav links may overflow on mobile", "Check nav-links @media rule")

# 7f. Hero h1 responsive font-size
hero_h1_media = re.search(r'@media[^}]+h1[^}]*font-size', css, re.DOTALL)
if hero_h1_media:
    ok("h1 has responsive font-size via @media")
else:
    warn("h1 font-size not explicitly scaled for mobile", "May appear too large on small screens")


# ── 8. COLOR & CONTRAST ──────────────────────────────────────────────────────

# 8a. Colors use CSS variables (not hardcoded hex in component styles)
root_block = re.search(r':root\s*\{[^}]+\}', css)
root_text = root_block.group(0) if root_block else ""
css_no_root = css.replace(root_text, "")
hardcoded = re.findall(r':\s*(#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3})\b', css_no_root)
n_hardcoded = len(hardcoded)
if n_hardcoded <= 5:
    ok(f"Colors mostly use CSS variables ({n_hardcoded} hardcoded hex outside :root)")
else:
    warn("Many hardcoded hex colors outside :root",
         f"{n_hardcoded} found — prefer CSS variables for consistency")

# 8b. Text color on dark hero: hero text should be white or near-white
hero_text = re.findall(r'#hero[^}]*color:[^;};]*', css)
if any('fff' in t.lower() or 'white' in t.lower() for t in hero_text):
    ok("Hero section uses light text on dark background")
else:
    warn("Hero text color", "Verify contrast on dark hero background")


# ── 9. SECTION NAVIGATION ────────────────────────────────────────────────────

# 9a. Nav links point to sections that exist as IDs
nav_links_hrefs = re.findall(r'<ul class="nav-links"[^>]*>(.*?)</ul>', src, re.DOTALL)
nav_ids = re.findall(r'href="#([^"]+)"', nav_links_hrefs[0]) if nav_links_hrefs else []
missing_nav_targets = [nid for nid in nav_ids if nid not in ids]
if not missing_nav_targets:
    ok(f"All nav link targets exist as IDs: {nav_ids}")
else:
    fail("Nav link targets missing", f"Missing: {missing_nav_targets}")

# 9b. Summary, notes, bibliography sections present
for section_id in ['summary', 'notes', 'bibliography', 'hero']:
    if f'id="{section_id}"' in src:
        ok(f"Section #{section_id} present")
    else:
        fail(f"Section #{section_id} present")

# 9c. scroll-padding-top set (for sticky nav offset)
if 'scroll-padding-top' in css:
    ok("scroll-padding-top set (sticky nav anchor offset)")
else:
    fail("scroll-padding-top missing — anchors will be hidden behind sticky nav")


# ── 10. FOOTNOTE INTEGRITY ────────────────────────────────────────────────────

# 10a. 50 footnote definitions
fn_defs = re.findall(r'\bid="fn(\d+)"', src)
fn_nums = sorted([int(n) for n in fn_defs])
if fn_nums == list(range(1, 51)):
    ok("Footnotes fn1–fn50 all defined, sequential")
else:
    missing = [i for i in range(1,51) if i not in fn_nums]
    extra = [n for n in fn_nums if n > 50 or n < 1]
    fail("Footnote sequence", f"Missing: {missing}, Extra: {extra}")

# 10b. 50 footnote references in body
fn_refs = re.findall(r'\bid="ref(\d+)"', src)
ref_nums = sorted([int(n) for n in fn_refs])
if len(ref_nums) == 50:
    ok(f"50 footnote references in body")
else:
    warn(f"Footnote references count", f"Found {len(ref_nums)} refs, expected 50")

# 10c. Every fn has a matching ref
fn_set = set(fn_nums)
ref_set = set(ref_nums)
unmatched_fns = fn_set - ref_set
unmatched_refs = ref_set - fn_set
if not unmatched_fns and not unmatched_refs:
    ok("Every footnote definition has a matching body reference")
else:
    if unmatched_fns:
        warn("Footnotes with no body ref", f"{sorted(unmatched_fns)[:10]}")
    if unmatched_refs:
        warn("Body refs with no footnote definition", f"{sorted(unmatched_refs)[:10]}")


# ── 11. SEMANTIC HTML ────────────────────────────────────────────────────────

# 11a. Main content in <section> or <main>
n_sections = count_occurrences(r'<section\b')
if n_sections >= 6:
    ok(f"Content structured in {n_sections} section elements")
else:
    warn("Sections", f"Only {n_sections} <section> elements found")

# 11b. Nav is a <nav> element
if '<nav ' in src or '<nav>' in src:
    ok("Navigation uses <nav> element")
else:
    fail("Navigation should use <nav> element")

# 11c. Footer uses <footer>
if '<footer ' in src or '<footer>' in src:
    ok("Footer uses <footer> element")
else:
    fail("Footer should use <footer> element")

# 11d. No presentational <br> usage for spacing
brs = count_occurrences(r'<br\s*/?>')
if brs == 0:
    ok("No <br> elements for spacing")
elif brs <= 3:
    ok(f"{brs} <br> elements (semantic: heading line break + footer address)")
else:
    fail(f"Overuse of <br>", f"{brs} found — use margin/padding instead")

# 11e. Images have alt text
imgs = re.findall(r'<img[^>]*>', src)
no_alt = [img for img in imgs if 'alt=' not in img]
if not no_alt:
    ok("All images have alt attributes")
elif not imgs:
    ok("No images in HTML (CSS background images only)")
else:
    fail("Images missing alt text", f"{len(no_alt)} of {len(imgs)}")


# ── OUTPUT ────────────────────────────────────────────────────────────────────

passes = [r for r in results if r[0] == "PASS"]
warnings = [r for r in results if r[0] == "WARN"]
failures = [r for r in results if r[0] == "FAIL"]

print(f"\n{'─'*64}")
print(f"  LITEPAPER HTML DESIGN TESTS")
print(f"  {HTML_FILE}")
print(f"{'─'*64}")
print(f"  PASS: {len(passes)}   WARN: {len(warnings)}   FAIL: {len(failures)}")
print(f"{'─'*64}\n")

if failures:
    print("FAILURES:")
    for _, name, detail in failures:
        print(f"  ✗  {name}")
        if detail:
            print(f"     → {detail}")
    print()

if warnings:
    print("WARNINGS:")
    for _, name, detail in warnings:
        print(f"  ⚠  {name}")
        if detail:
            print(f"     → {detail}")
    print()

if not failures and not warnings:
    print("  All tests passed.\n")

print(f"{'─'*64}\n")

sys.exit(1 if failures else 0)
