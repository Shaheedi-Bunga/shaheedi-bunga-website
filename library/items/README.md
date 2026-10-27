# library/items

Put the vidhiarti's files here — PDFs, images, whatever they made — then add
one `<a>` to the shelf.

**The page is generated.** Edit `Mockup/_Redesign_Inner/src/library.html`,
never `../index.html` beside this folder, then run
`node Mockup/_Redesign_Inner/build.js`. `_tools/check-generated.sh` fails if
the built page and its source disagree.

```html
<a class="item" href="/library/items/THE-FILE.pdf" data-kind="pdf" data-by="Name, year"
   data-thumb="/library/items/THE-FILE-cover.jpg">
  <span class="cover"><span class="kind">PDF</span></span>
  <span class="meta">
    <h2><span class="gur" lang="pa">ਗੁਰਮੁਖੀ ਨਾਂ</span> The English title</h2>
    <span class="by">Name, year &middot; 120 pages</span>
  </span>
</a>
```

- `data-kind` is `pdf` or `image`.
- `data-thumb` is optional. Without one the card draws a sheet of paper, so
  keep `<span class="sheet"></span>` inside the cover; with one, drop it.
- **Paths are absolute** (`/library/items/…`), not relative. The build makes
  one page at `/library/` and a preview at `Mockup/_Redesign_Inner/`, and a
  relative path cannot be right in both. The build refuses a relative one.
- `href` is also where a visitor with no JavaScript ends up, so it must be
  the real file.
- The viewer gives each item an id from its filename, so
  `/library/#the-file` opens straight to it.
- Any Gurmukhi in the title goes in `<span class="gur" lang="pa">`.

## Keep the files small

These are served to phones. Run a new PDF through a lossless repack before it
goes in — removing duplicate objects alone took the three pothis here from
173 MB to 28 MB with **every page pixel-identical**:

```python
import fitz                               # pip install pymupdf
d = fitz.open("big.pdf")
d.save("small.pdf", garbage=4, deflate=True, deflate_images=False,
       deflate_fonts=True, clean=True)
```

`deflate_images=False` is the important one: it repacks the file's structure
and never re-encodes a single image, so scanned Gurbani is copied, not
re-compressed. Check it afterwards by rendering every page of both files and
comparing the pixels — do not take the size saving on trust.
