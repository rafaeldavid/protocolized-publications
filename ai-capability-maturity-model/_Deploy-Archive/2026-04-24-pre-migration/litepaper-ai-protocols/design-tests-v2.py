"""
Design test suite v2 — Frontend designer + report layout perspective.

Focuses on:
  A. Reading column consistency   — prose content should occupy the same width across sections
  B. Section header alignment     — label/section-num must align with the content below
  C. Summary section structure    — badge + text layout must be well-formed
  D. Vertical rhythm              — sections use the same spacing conventions
  E. Content container hygiene    — no unconstrained prose in a 920px container
  F. Visual hierarchy signals     — labels, section nums, headings follow consistent patterns
  G. Long-form readability        — footnote list, bibliography, definition list all reading-width
"""

import re
import sys

HTML_FILE = "index.html"

with open(HTML_FILE, "r") as f:
    src = f.read()

results = []

def ok(name, detail=""):   results.append(("PASS", name, detail))
def fail(name, detail=""): results.append(("FAIL", name, detail))
def warn(name, detail=""): results.append(("WARN", name, detail))

def css_block():
    m = re.search(r'<style>(.*?)</style>', src, re.DOTALL)
    return m.group(1) if m else ""

def get_section(section_id):
    pat = rf'<(?:section|header)[^>]*\bid="{section_id}"[^>]*>(.*?)</(?:section|header)>'
    m = re.search(pat, src, re.DOTALL)
    return m.group(1) if m else ""

def count(pattern, text=src): return len(re.findall(pattern, text))
def has(pattern, text=src, flags=re.DOTALL): return bool(re.search(pattern, text, flags))
css = css_block()


# ═══════════════════════════════════════════════════════════════════════════════
# A. READING COLUMN CONSISTENCY
#    All prose-heavy sections must constrain content to the same reading width.
#    The pattern: section > .container > .prose  (or equivalent rule)
# ═══════════════════════════════════════════════════════════════════════════════

# A1. .prose class defined with max-width
prose_maxwidth = re.search(r'\.prose\s*\{[^}]*max-width\s*:\s*var\(--prose\)', css)
if prose_maxwidth:
    ok("A1 .prose class has max-width: var(--prose)")
else:
    fail("A1 .prose class has max-width: var(--prose)",
         "The .prose class must set max-width so text doesn't span full 920px container")

# A2. Summary section content (label + bullets) inside a .prose wrapper
summary_html = get_section("summary")
summary_has_prose = bool(re.search(r'<div[^>]*class=["\'][^"\']*\bprose\b[^"\']*["\']', summary_html))
if summary_has_prose:
    ok("A2 Summary content inside .prose wrapper (matches body section reading width)")
else:
    fail("A2 Summary content inside .prose wrapper",
         "The summary bullets span full 920px container while body sections are 680px — visually misaligned. "
         "Wrap <span class='label'> and <ul class='summary-bullets'> in <div class='prose'>.")

# A3. S1 content inside .prose wrapper
s1_html = get_section("s1")
if has(r'<div[^>]*class=["\'][^"\']*\bprose\b', s1_html):
    ok("A3 Section 1 body inside .prose wrapper")
else:
    fail("A3 Section 1 body inside .prose wrapper")

# A4. Theory (S2) content inside .prose wrapper
s2_html = get_section("theory")
if has(r'<div[^>]*class=["\'][^"\']*\bprose\b', s2_html):
    ok("A4 Section 2 (theory) body inside .prose wrapper")
else:
    fail("A4 Section 2 (theory) body inside .prose wrapper")

# A5. Notes section: fn-list should be reading-width constrained
notes_html = get_section("notes")
notes_constrained = (
    has(r'<div[^>]*class=["\'][^"\']*\bprose\b', notes_html) or
    has(r'<div[^>]*class=["\'][^"\']*\bfn-list-wrap\b', notes_html) or
    bool(re.search(r'#notes[^}]*max-width', css))
)
if notes_constrained:
    ok("A5 Notes section has reading-width constraint")
else:
    fail("A5 Notes section has reading-width constraint",
         "Footnote list spans 920px — hard to scan. "
         "Wrap <ol class='fn-list'> in <div class='prose'> or add max-width to #notes .fn-list.")

# A6. Bibliography: bib-list should be reading-width constrained
bib_html = get_section("bibliography")
bib_constrained = (
    has(r'<div[^>]*class=["\'][^"\']*\bprose\b', bib_html) or
    bool(re.search(r'#bibliography[^}]*max-width', css))
)
if bib_constrained:
    ok("A6 Bibliography section has reading-width constraint")
else:
    fail("A6 Bibliography section has reading-width constraint",
         "Bibliography list spans 920px — same visual break as notes.")

# A7. Landscape (S5) content inside .prose wrapper
s5_html = get_section("landscape")
if has(r'<div[^>]*class=["\'][^"\']*\bprose\b', s5_html):
    ok("A7 Section 5 (landscape) inside .prose wrapper")
else:
    fail("A7 Section 5 (landscape) inside .prose wrapper")

# A8. How-to-use (S6) content inside .prose wrapper
s6_html = get_section("how-to-use")
if has(r'<div[^>]*class=["\'][^"\']*\bprose\b', s6_html):
    ok("A8 Section 6 (how-to-use) inside .prose wrapper")
else:
    fail("A8 Section 6 (how-to-use) inside .prose wrapper")


# ═══════════════════════════════════════════════════════════════════════════════
# B. SECTION HEADER ALIGNMENT
#    .section-num label must be constrained to the same width as the h2 below it
#    and the .prose content that follows. Left edge must be consistent.
# ═══════════════════════════════════════════════════════════════════════════════

# B1. .section-num has a max-width constraint matching .prose
section_num_maxwidth = re.search(r'\.section-num\s*\{[^}]*max-width', css)
section_num_via_shared_rule = re.search(
    r'(?:\.body-section\s+\.section-num|\.section-num)\s*\{[^}]*max-width',
    css
)
# Also check if it's inherited via a combined selector
combined_rule = re.search(
    r'(?:\.body-section\s+h2\s*,\s*\n?\s*\.body-section\s+\.section-num'
    r'|\.section-num[^{]*\{[^}]*max-width'
    r'|\.body-section\s+[^{]*\.section-num)',
    css
)
if section_num_maxwidth or section_num_via_shared_rule or combined_rule:
    ok("B1 .section-num has max-width constraint (aligns with h2 and prose below)")
else:
    fail("B1 .section-num has max-width constraint",
         ".section-num renders at full container width (920px) while h2 is constrained "
         "to var(--prose) — the label floats out of alignment with the heading below it. "
         "Add max-width: var(--prose) to .body-section .section-num or .section-num.")

# B2. .section-num and .body-section h2 must share the same max-width value
body_section_h2_rule = re.search(r'\.body-section\s+h2\s*\{[^}]*max-width\s*:\s*([^;]+)', css)
section_num_rule = re.search(r'\.section-num\s*\{[^}]*max-width\s*:\s*([^;]+)', css)
# Or a combined selector rule
combined_maxwidth = re.search(
    r'(\.body-section\s+h2[^{]*,[\s\S]{0,100}\.section-num|\.section-num[^{]*,[\s\S]{0,100}\.body-section\s+h2)',
    css
)
if combined_maxwidth:
    ok("B2 section-num and h2 share a combined max-width rule (guaranteed same value)")
elif body_section_h2_rule and section_num_rule:
    h2_val = body_section_h2_rule.group(1).strip().rstrip('}').strip()
    sn_val = section_num_rule.group(1).strip().rstrip('}').strip()
    if h2_val == sn_val:
        ok(f"B2 section-num and h2 have same max-width value: {h2_val}")
    else:
        fail(f"B2 section-num and h2 have mismatched max-width",
             f"h2: {h2_val!r}  section-num: {sn_val!r}")
else:
    fail("B2 section-num and h2 max-width values cannot be verified",
         "Define both in a shared rule or verify they use the same CSS variable")

# B3. All body sections use the same outer class (body-section)
body_sections = ['s1', 'theory', 'levels', 'emerging', 'landscape', 'how-to-use']
for sid in body_sections:
    sec_html = re.search(rf'<section[^>]*\bid="{sid}"[^>]*>', src)
    if sec_html and 'body-section' in sec_html.group(0):
        ok(f"B3 #{sid} uses .body-section class")
    else:
        fail(f"B3 #{sid} uses .body-section class",
             f"Inconsistent class on section #{sid} — must be body-section for CSS rules to apply")

# B4. Summary section: label (Executive Summary) aligns with bullet text
# The .label span and .summary-bullets must be siblings inside the same max-width wrapper
summary_label_in_prose = bool(re.search(
    r'<div[^>]*class=["\'][^"\']*\bprose\b[^"\']*["\'][^>]*>[\s\S]{0,200}<span[^>]*class=["\'][^"\']*\blabel\b',
    summary_html
))
if summary_label_in_prose:
    ok("B4 Summary 'Executive Summary' label is inside .prose wrapper (aligns with bullets)")
else:
    fail("B4 Summary label should be inside .prose wrapper",
         "The 'EXECUTIVE SUMMARY' label is outside the prose container while bullets are inside, "
         "or the whole summary is unconstrained — creates misalignment.")


# ═══════════════════════════════════════════════════════════════════════════════
# C. SUMMARY SECTION STRUCTURE
#    Each bullet: one marker badge + one text run. Badges visually consistent.
# ═══════════════════════════════════════════════════════════════════════════════

# C1. Summary has exactly 4 bullets
n_summary_li = count(r'<li>', summary_html)
if n_summary_li == 4:
    ok("C1 Summary has exactly 4 bullet items")
else:
    fail("C1 Summary has exactly 4 bullet items", f"Found {n_summary_li}")

# C2. Each bullet has exactly one .summary-bullet-marker
n_markers = count(r'class="summary-bullet-marker"', summary_html)
if n_markers == 4:
    ok("C2 Each of 4 summary bullets has a marker badge")
else:
    fail("C2 Marker badge count", f"Found {n_markers} markers for {n_summary_li} bullets")

# C3. Marker badge text: all caps, short (design label, not prose)
marker_texts = re.findall(r'<span class="summary-bullet-marker">([^<]+)</span>', summary_html)
long_markers = [m for m in marker_texts if len(m.strip()) > 10]
if not long_markers:
    ok(f"C3 Summary badge labels are short: {[m.strip() for m in marker_texts]}")
else:
    fail("C3 Summary badge labels too long for visual badge use", f"{long_markers}")

# C4. No empty summary bullets
empty_li = re.findall(r'<li>\s*</li>', summary_html)
if not empty_li:
    ok("C4 No empty summary bullet items")
else:
    fail("C4 No empty summary bullet items", f"Found {len(empty_li)}")

# C5. .summary-bullets gap is set (prevents cramped or over-spaced bullets)
summary_gap = re.search(r'\.summary-bullets\s*\{[^}]*gap\s*:', css)
if summary_gap:
    ok("C5 .summary-bullets has gap set (controls vertical spacing)")
else:
    warn("C5 .summary-bullets gap not found", "Add gap to control vertical spacing between bullets")

# C6. .summary-bullet-marker is flex-shrink: 0 (prevents badge squishing on long text)
marker_flexshrink = re.search(r'\.summary-bullet-marker\s*\{[^}]*flex-shrink\s*:\s*0', css)
if marker_flexshrink:
    ok("C6 .summary-bullet-marker has flex-shrink:0 (badge won't squish on long text)")
else:
    fail("C6 .summary-bullet-marker should have flex-shrink:0",
         "Without flex-shrink:0, the badge label will collapse on small screens or long adjacent text")

# C7. Summary bullets li is flex row (enables badge + text side by side)
summary_li_flex = re.search(r'\.summary-bullets\s+li\s*\{[^}]*display\s*:\s*flex', css)
if summary_li_flex:
    ok("C7 Summary bullet items are flex rows (badge beside text)")
else:
    fail("C7 Summary bullet items should be display:flex",
         "Without flex, the badge appears above the text instead of beside it")


# ═══════════════════════════════════════════════════════════════════════════════
# D. VERTICAL RHYTHM
#    Sections should have consistent padding. Mixed padding creates jerky scrolling.
# ═══════════════════════════════════════════════════════════════════════════════

# D1. .section has padding defined
section_padding = re.search(r'\.section\s*\{[^}]*padding\s*:', css)
if section_padding:
    ok("D1 .section has padding defined")
else:
    fail("D1 .section has padding defined")

# D2. .body-section has padding defined
body_section_padding = re.search(r'\.body-section\s*\{[^}]*padding\s*:', css)
if body_section_padding:
    ok("D2 .body-section has padding defined")
else:
    fail("D2 .body-section has padding defined",
         ".body-section needs explicit padding — don't inherit from .section since they differ")

# D3. Sections separated by border-top (visual divider, no extra spacing hacks needed)
section_divider = re.search(r'\.section\s*\+\s*\.section\s*\{[^}]*border-top', css)
body_section_divider = re.search(r'\.body-section\s*\{[^}]*border-top', css)
if section_divider or body_section_divider:
    ok("D3 Sections separated by border-top (clean visual divider)")
else:
    warn("D3 No border-top divider between sections", "Sections may bleed into each other visually")

# D4. h3 inside .prose has margin-top (space above subsection headings)
h3_margin = re.search(r'h3\s*\{[^}]*margin[^}]*32px\s*0\s*12px', css)
h3_margin_top = re.search(r'h3\s*\{[^}]*margin-top\s*:', css) or re.search(r'h3\s*\{[^}]*margin\s*:', css)
if h3_margin or h3_margin_top:
    ok("D4 h3 has margin (space above subsection headings)")
else:
    warn("D4 h3 margin", "h3 elements may not have enough breathing room from preceding text")

# D5. Section p { margin-bottom } set (consistent paragraph spacing)
p_margin = re.search(r'\bp\b\s*\{[^}]*margin-bottom\s*:', css)
if p_margin:
    ok("D5 <p> has margin-bottom for consistent paragraph spacing")
else:
    fail("D5 <p> margin-bottom missing")


# ═══════════════════════════════════════════════════════════════════════════════
# E. CONTENT CONTAINER HYGIENE
#    Prose text must never be a direct child of .container (920px).
#    Direct children of .container should only be structural elements (labels,
#    headings constrained by CSS) or wrapper divs like .prose.
# ═══════════════════════════════════════════════════════════════════════════════

# E1. No <p> is a direct child of .container (prose should be in .prose)
# Approximate: find .container blocks and check for direct <p> children
# We look for <div class="container">...<p> without an intervening <div>
container_blocks = re.findall(r'<div class="container">(.*?)</div>\s*</(?:section|header|footer|nav)', src, re.DOTALL)

def has_direct_p_child(block):
    """Check if a block has a <p> that is a direct child (not inside a nested div)."""
    # Strip all nested div content
    depth = 0
    i = 0
    while i < len(block):
        if block[i:i+4] == '<div':
            depth += 1
        elif block[i:i+6] == '</div>':
            depth -= 1
        elif depth == 0 and block[i:i+2] == '<p':
            return True
        i += 1
    return False

direct_p_containers = [i for i, cb in enumerate(container_blocks) if has_direct_p_child(cb)]
if not direct_p_containers:
    ok("E1 No <p> is a direct child of .container (all prose properly wrapped)")
else:
    fail("E1 <p> found as direct child of .container",
         f"In {len(direct_p_containers)} container(s): indices {direct_p_containers[:3]}. "
         "Prose paragraphs must be inside a .prose div, not bare in the 920px container.")

# E2. No <ul> is a direct child of .container (lists should be in .prose or component wrappers)
def has_direct_ul_child(block):
    depth = 0
    i = 0
    while i < len(block):
        if block[i:i+4] == '<div':
            depth += 1
        elif block[i:i+6] == '</div>':
            depth -= 1
        elif depth == 0 and block[i:i+3] == '<ul':
            return True
        i += 1
    return False

direct_ul_containers = [i for i, cb in enumerate(container_blocks) if has_direct_ul_child(cb)]
if not direct_ul_containers:
    ok("E2 No <ul> is a direct child of .container (lists properly wrapped)")
else:
    fail("E2 <ul> found as direct child of .container",
         f"In {len(direct_ul_containers)} container(s): indices {direct_ul_containers[:3]}. "
         "Lists (including summary-bullets, fn-list, bib-list) must be inside a width-constrained wrapper.")

# E3. No <ol> is a direct child of .container
def has_direct_ol_child(block):
    depth = 0
    i = 0
    while i < len(block):
        if block[i:i+4] == '<div':
            depth += 1
        elif block[i:i+6] == '</div>':
            depth -= 1
        elif depth == 0 and block[i:i+3] == '<ol':
            return True
        i += 1
    return False

direct_ol_containers = [i for i, cb in enumerate(container_blocks) if has_direct_ol_child(cb)]
if not direct_ol_containers:
    ok("E3 No <ol> is a direct child of .container")
else:
    fail("E3 <ol> found as direct child of .container",
         f"In {len(direct_ol_containers)} container(s). Wrap footnote list in a .prose div.")


# ═══════════════════════════════════════════════════════════════════════════════
# F. VISUAL HIERARCHY SIGNALS
#    Labels, section-nums, and headings form a clear typographic hierarchy.
# ═══════════════════════════════════════════════════════════════════════════════

# F1. .label is uppercase, small, with letter-spacing
label_rule = re.search(r'\.label\s*\{[^}]*text-transform\s*:\s*uppercase', css)
label_tracking = re.search(r'\.label\s*\{[^}]*letter-spacing', css)
if label_rule and label_tracking:
    ok("F1 .label is uppercase with letter-spacing (clear hierarchy signal)")
else:
    fail("F1 .label needs text-transform:uppercase and letter-spacing",
         "Without these, label blurs into heading hierarchy")

# F2. .section-num uses monospace font (signals metadata, not prose)
section_num_mono = re.search(r'\.section-num\s*\{[^}]*font-family\s*:\s*var\(--font-mono\)', css)
if section_num_mono:
    ok("F2 .section-num uses monospace font (signals structural metadata)")
else:
    warn("F2 .section-num should use monospace font",
         "Monospace signals structural vs. prose content")

# F3. h1 uses monospace (title treatment)
h1_mono = re.search(r'h1\s*,.*?h2\s*,.*?h3\s*,.*?h4\s*\{[^}]*font-family\s*:\s*var\(--font-mono\)', css)
if h1_mono:
    ok("F3 h1–h4 use monospace font (consistent heading treatment)")
else:
    warn("F3 Check h1–h4 font-family", "Headings should all use the same font-family")

# F4. .level-name uses monospace (level names are titles, not prose)
level_name_mono = re.search(r'\.level-name\s*\{[^}]*font-family\s*:\s*var\(--font-mono\)', css)
if level_name_mono:
    ok("F4 .level-name uses monospace (level names are titles)")
else:
    warn("F4 .level-name should use monospace", "Level names are title-level, not body text")

# F5. .def-term uses consistent accent color (visual pull-out for definitions)
def_term_color = re.search(r'\.def-term\s*\{[^}]*color\s*:\s*var\(--accent-dark\)', css)
if def_term_color:
    ok("F5 .def-term uses accent-dark color (definitions stand out from body text)")
else:
    warn("F5 .def-term color", "Definitions should use accent color to signal term status")

# F6. .protocol-tag uses accent-light background + accent-dark text (pill badge pattern)
proto_tag_bg = re.search(r'\.protocol-tag\s*\{[^}]*background\s*:\s*var\(--accent-light\)', css)
proto_tag_color = re.search(r'\.protocol-tag\s*\{[^}]*color\s*:\s*var\(--accent-dark\)', css)
if proto_tag_bg and proto_tag_color:
    ok("F6 .protocol-tag uses accent pill badge (consistent with level-pill pattern)")
else:
    warn("F6 .protocol-tag styling", "Protocol tags should follow the accent pill badge pattern")


# ═══════════════════════════════════════════════════════════════════════════════
# G. LONG-FORM READABILITY
#    Footnotes and bibliography are reference content — narrower than 920px,
#    with clear item separation and readable font sizes.
# ═══════════════════════════════════════════════════════════════════════════════

# G1. .fn-list items use grid layout (number + text aligned in columns)
fn_list_grid = re.search(r'\.fn-list\s+li\s*\{[^}]*grid', css)
fn_list_display = re.search(r'\.fn-list\s+li\s*\{[^}]*display\s*:\s*grid', css)
if fn_list_grid or fn_list_display:
    ok("G1 Footnote list items use grid layout (number aligns with text)")
else:
    fail("G1 Footnote list items should use grid layout",
         "Without grid, footnote numbers and text won't align — the list looks jagged")

# G2. .fn-num has text-align: right (footnote numbers right-aligned in their column)
fn_num_align = re.search(r'\.fn-num\s*\{[^}]*text-align\s*:\s*right', css)
if fn_num_align:
    ok("G2 .fn-num has text-align:right (numbers form a clean column)")
else:
    fail("G2 .fn-num should have text-align:right",
         "Left-aligned footnote numbers create ragged column — right-align for clean margin")

# G3. .bib-list uses hanging indent (standard bibliography format)
bib_hanging = re.search(r'\.bib-list\s+li\s*\{[^}]*text-indent\s*:', css)
if bib_hanging:
    ok("G3 Bibliography uses hanging indent (text-indent)")
else:
    fail("G3 Bibliography should use hanging indent",
         "Standard bibliography format uses text-indent:-Npx + padding-left:Npx for hanging indent")

# G4. .fn-list gap is defined (visual separation between footnotes)
fn_list_gap = re.search(r'\.fn-list\s*\{[^}]*gap\s*:', css)
if fn_list_gap:
    ok("G4 .fn-list has gap between footnote entries")
else:
    warn("G4 .fn-list gap", "Without gap, footnotes run together visually")

# G5. Footnote font size is smaller than body (reference text subordinate to body)
fn_font = re.search(r'\.fn-list\s+li\s*\{[^}]*font-size\s*:\s*([\d.]+)rem', css)
body_font_size = 1.0
if fn_font:
    fn_size = float(fn_font.group(1))
    if 0.75 <= fn_size <= 0.9:
        ok(f"G5 Footnote font size {fn_size}rem (smaller than body, readable as reference)")
    elif fn_size > 0.9:
        warn(f"G5 Footnote font size {fn_size}rem is close to body size", "Should be 0.8–0.88rem")
    else:
        fail(f"G5 Footnote font size {fn_size}rem too small", "Minimum readable reference size: 0.75rem")
else:
    warn("G5 Footnote font size not found in .fn-list li rule")

# G6. .def-list items have gap (definitions need breathing room)
def_list_gap = re.search(r'\.def-list\s*\{[^}]*gap\s*:', css)
if def_list_gap:
    ok("G6 .def-list has gap between definitions")
else:
    warn("G6 .def-list gap", "Without gap, definitions run together")

# G7. .historical-parallel has left-border (signals callout, not inline text)
historical_border = re.search(r'\.historical-parallel\s*\{[^}]*border-left\s*:', css)
if historical_border:
    ok("G7 .historical-parallel has left-border (callout distinguished from body)")
else:
    fail("G7 .historical-parallel should have left-border callout treatment")


# ═══════════════════════════════════════════════════════════════════════════════
# H. COMPONENT MAX-WIDTH CONSISTENCY
#    Key reading components should not exceed --prose width
# ═══════════════════════════════════════════════════════════════════════════════

# H1. .levels-intro has .prose class (intro text before level blocks reads at same width)
levels_html = get_section("levels")
levels_intro_html = re.search(r'<div class="levels-intro[^"]*">(.*?)</div>', levels_html, re.DOTALL)
if levels_intro_html:
    # Check if levels-intro itself has max-width
    levels_intro_maxwidth = re.search(r'\.levels-intro\s*\{[^}]*max-width', css)
    levels_intro_prose_class = 'prose' in (levels_intro_html.group(0) or '')
    if levels_intro_maxwidth or levels_intro_prose_class:
        ok("H1 .levels-intro has reading-width constraint")
    else:
        fail("H1 .levels-intro needs reading-width constraint",
             "The intro text before the level blocks spans 920px while body sections are 680px. "
             "Add max-width: var(--prose) to .levels-intro, or add .prose class.")
else:
    warn("H1 .levels-intro not found in levels section")

# H2. .level-field-label text is uppercase or mono (communicates structural label, not prose)
field_label_mono = re.search(r'\.level-field-label\s*\{[^}]*font-family\s*:\s*var\(--font-mono\)', css)
field_label_upper = re.search(r'\.level-field-label\s*\{[^}]*text-transform\s*:\s*uppercase', css)
if field_label_mono or field_label_upper:
    ok("H2 .level-field-label uses mono or uppercase (label, not prose)")
else:
    warn("H2 .level-field-label should use uppercase or mono", "Communicates it's a structural label")

# H3. .transition-req has a distinct background (stands out from level body)
tr_bg = re.search(r'\.transition-req\s*\{[^}]*background\s*:', css)
if tr_bg:
    ok("H3 .transition-req has distinct background (visually separated from level body)")
else:
    warn("H3 .transition-req background", "Transition requirement should stand out from level description")

# H4. .step-list items have consistent structure (each needs step-num + step-body)
n_step_items = count(r'<div class="step-item">')
n_step_nums  = count(r'<div class="step-num">')
n_step_bodies = count(r'<div class="step-body">')
if n_step_items == n_step_nums == n_step_bodies:
    ok(f"H4 Step list items all have step-num + step-body ({n_step_items} items)")
else:
    fail("H4 Step list structure inconsistent",
         f"items={n_step_items}, nums={n_step_nums}, bodies={n_step_bodies}")


# ═══════════════════════════════════════════════════════════════════════════════
# OUTPUT
# ═══════════════════════════════════════════════════════════════════════════════

passes   = [r for r in results if r[0] == "PASS"]
warnings = [r for r in results if r[0] == "WARN"]
failures = [r for r in results if r[0] == "FAIL"]

print(f"\n{'═'*68}")
print(f"  LITEPAPER DESIGN TESTS v2 — Frontend Designer + Report Layout")
print(f"  {HTML_FILE}")
print(f"{'═'*68}")
print(f"  PASS: {len(passes)}   WARN: {len(warnings)}   FAIL: {len(failures)}")
print(f"{'═'*68}\n")

if failures:
    print("FAILURES:")
    for _, name, detail in failures:
        print(f"  ✗  {name}")
        if detail:
            # Wrap detail at 80 chars
            words = detail.split()
            line = "     → "
            for w in words:
                if len(line) + len(w) + 1 > 80:
                    print(line)
                    line = "       " + w + " "
                else:
                    line += w + " "
            if line.strip():
                print(line)
    print()

if warnings:
    print("WARNINGS:")
    for _, name, detail in warnings:
        print(f"  ⚠  {name}")
        if detail:
            print(f"     → {detail[:120]}")
    print()

if not failures and not warnings:
    print("  All tests passed.\n")

print(f"{'═'*68}\n")
sys.exit(1 if failures else 0)
