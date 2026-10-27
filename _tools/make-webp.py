#!/usr/bin/env python3
"""Smaller copies of every photograph the inner pages show.

For each JPEG or PNG an inner page or events.json points at (img/... in the
kit, or /Assets/... at the root) this writes WebP copies 480, 960 and 1600px
wide beside it, in a _w/ folder:

    img/p-sangat.jpg  ->  img/_w/p-sangat-480.webp, -960.webp, -1600.webp

and records each image's size in Mockup/_Redesign_Inner/img-sizes.json. The
inner-page build reads that file to give every <img> its width, height and a
srcset, and fails if an image has no entry, so run this after adding a photo:

    python3 _tools/make-webp.py

Copies that already exist and are newer than their original are kept, so a
second run does nothing. Needs Pillow.
"""
import json, os, re, sys
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KIT = os.path.join(ROOT, 'Mockup', '_Redesign_Inner')
SIZES = os.path.join(KIT, 'img-sizes.json')
WIDTHS = (480, 960, 1600)
QUALITY = 78

def wanted():
    """Every image path the sources reference, as the page writes it."""
    found = set()
    texts = []
    for d in ('src', 'partials'):
        for f in sorted(os.listdir(os.path.join(KIT, d))):
            if f.endswith('.html'):
                texts.append(open(os.path.join(KIT, d, f), encoding='utf8').read())
    texts.append(open(os.path.join(KIT, 'events.json'), encoding='utf8').read())
    for t in texts:
        for m in re.finditer(r'(?:src|"img")\s*[=:]\s*"((?:img|/Assets)/[^"#?]+\.(?:jpe?g|png))"', t, re.I):
            found.add(m.group(1))
    return sorted(found)

def disk(p):
    return os.path.join(KIT, p) if p.startswith('img/') else os.path.join(ROOT, p.lstrip('/'))

def variant(p, w):
    d, f = os.path.split(p)
    return f"{d}/_w/{os.path.splitext(f)[0]}-{w}.webp"

def main():
    sizes, made, missing = {}, 0, []
    for p in wanted():
        src = disk(p)
        if not os.path.exists(src):
            missing.append(p); continue
        with Image.open(src) as im:
            W, H = im.size
            widths = [w for w in WIDTHS if w < W] or [W]
            for w in widths:
                out = disk(variant(p, w))
                if os.path.exists(out) and os.path.getmtime(out) >= os.path.getmtime(src):
                    continue
                os.makedirs(os.path.dirname(out), exist_ok=True)
                img = im.convert('RGBA' if im.mode in ('RGBA', 'LA', 'P') else 'RGB')
                img.resize((w, round(H * w / W)), Image.LANCZOS).save(out, 'WEBP', quality=QUALITY, method=6)
                made += 1
        sizes[p] = {'w': W, 'h': H, 'v': widths}
    with open(SIZES, 'w', encoding='utf8') as fh:
        json.dump(sizes, fh, indent=0, sort_keys=True); fh.write('\n')
    print(f'{len(sizes)} images, {made} WebP copies written')
    if missing:
        print('referenced but not on disk:', *missing, sep='\n  '); sys.exit(1)

if __name__ == '__main__':
    main()
