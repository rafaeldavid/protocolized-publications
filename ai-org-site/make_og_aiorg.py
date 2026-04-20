#!/usr/bin/env python3
"""OG card for ai-org site, Protocolized palette."""
from PIL import Image, ImageDraw, ImageFont
import datetime, os

W, H = 1200, 630
BG = (250, 250, 250)
FG = (26, 26, 46)
FG_MUTED = (107, 107, 123)
ACCENT = (125, 90, 150)
ACCENT_LIGHT = (243, 238, 247)
ACCENT_MID = (168, 136, 191)
SECONDARY = (214, 115, 57)
RULE = (229, 229, 231)

FD = "/tmp/og-fonts"
MB = ImageFont.truetype(f"{FD}/RobotoMono-Bold.ttf", 48)
MK = ImageFont.truetype(f"{FD}/RobotoMono-Bold.ttf", 17)
MT = ImageFont.truetype(f"{FD}/RobotoMono-Bold.ttf", 20)
MM = ImageFont.truetype(f"{FD}/RobotoMono-Regular.ttf", 16)
MS = ImageFont.truetype(f"{FD}/RobotoMono-Regular.ttf", 18)

img = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(img)

# Left accent bar
d.rectangle((60, 60, 64, H - 60), fill=ACCENT)
d.rectangle((60, 60, 64, 130), fill=SECONDARY)

# Kicker
d.text((100, 70), "PROTOCOLIZED · P4BSIG WORKING PAPER", font=MK, fill=ACCENT)

# Title
title_lines = [
    "Org Design After",
    "Code Commoditisation",
]
y = 145
for line in title_lines:
    d.text((100, y), line, font=MB, fill=FG)
    y += 60

# Subtitle
y += 14
d.text((100, y), "Five prior commoditisations. One four-move pattern.", font=MS, fill=FG_MUTED)
y += 28
d.text((100, y), "Tactical guidance for AI-era operators.", font=MS, fill=FG_MUTED)

# Chip row: the five case labels
labels = ["SPREADSHEETS", "NC/CNC", "MARKETS", "CLOUD", "KLARNA"]
fy = H - 140
d.text((100, fy), "FIVE HISTORIES", font=MK, fill=FG_MUTED)
cx = 100
cy = fy + 34
chip_fonts = ImageFont.truetype(f"{FD}/RobotoMono-Bold.ttf", 16)
for lbl in labels:
    bbox = d.textbbox((0, 0), lbl, font=chip_fonts)
    tw = bbox[2] - bbox[0]
    pad_x = 12
    chip_w = tw + pad_x * 2
    chip_h = 34
    d.rounded_rectangle((cx, cy, cx + chip_w, cy + chip_h), radius=5, outline=RULE, width=1, fill=(255,255,255))
    d.text((cx + pad_x, cy + 8), lbl, font=chip_fonts, fill=ACCENT)
    cx += chip_w + 8

# Right-side build meta
ts = datetime.datetime.utcnow().strftime("%Y-%m-%d")
meta_text = f"UPDATED · {ts}"
bbox = d.textbbox((0, 0), meta_text, font=MM)
mw = bbox[2] - bbox[0]
d.text((W - 100 - mw, 76), meta_text, font=MM, fill=FG_MUTED)

# Domain tag
domain = "npc.here.now/ai-org"
bbox = d.textbbox((0, 0), domain, font=MM)
dw = bbox[2] - bbox[0]
d.text((W - 100 - dw, H - 40), domain, font=MM, fill=FG_MUTED)

img.save("/tmp/ai-org-site/og.png", "PNG", optimize=True)
sq = img.crop((285, 0, 915, 630))
sq.save("/tmp/ai-org-site/og-square.png", "PNG", optimize=True)

# Favicon + apple-touch-icon
def make_icon(size, path):
    im = Image.new("RGB", (size, size), BG)
    dd = ImageDraw.Draw(im)
    bar_x = int(size * 0.14)
    bar_w = int(size * 0.09)
    dd.rectangle((bar_x, int(size*0.14), bar_x+bar_w, int(size*0.86)), fill=ACCENT)
    dd.rectangle((bar_x, int(size*0.14), bar_x+bar_w, int(size*0.34)), fill=SECONDARY)
    f = ImageFont.truetype(f"{FD}/RobotoMono-Bold.ttf", int(size * 0.52))
    txt = "§"
    bbox = dd.textbbox((0,0), txt, font=f)
    dd.text((int(size*0.40) - bbox[0], int(size*0.22) - bbox[1]), txt, font=f, fill=FG)
    im.save(path, "PNG", optimize=True)

make_icon(180, "/tmp/ai-org-site/apple-touch-icon.png")
make_icon(512, "/tmp/ai-org-site/icon-512.png")

# SVG favicon
svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <rect width="64" height="64" rx="12" fill="#fafafa"/>
  <rect x="9" y="9" width="6" height="46" fill="#7d5a96"/>
  <rect x="9" y="9" width="6" height="14" fill="#d67339"/>
  <text x="24" y="46" font-family="'Roboto Mono', ui-monospace, monospace" font-size="34" font-weight="700" fill="#1a1a2e">§</text>
</svg>'''
with open("/tmp/ai-org-site/favicon.svg", "w") as f:
    f.write(svg)

print("Generated:", os.listdir("/tmp/ai-org-site"))
