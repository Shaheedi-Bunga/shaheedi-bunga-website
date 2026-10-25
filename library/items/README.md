# library/items

Put the vidhiarti's files here — PDFs, images, whatever they made.

Then add one line to `../index.html`, inside `<div class="shelf">`:

```html
<a class="item" href="items/THE-FILE.pdf"
   data-kind="pdf" data-by="Name, year"
   data-thumb="items/THE-FILE-cover.jpg">
  <span class="cover"><span class="kind">PDF</span><span class="sheet"></span></span>
  <span class="meta">
    <h2>What it is called</h2>
    <span class="by">Name, year</span>
  </span>
</a>
```

- `data-kind` is `pdf` or `image`.
- `data-thumb` is optional. Without one the card draws a sheet of paper;
  with one, drop the `<span class="sheet">` from the cover.
- `href` is also where a visitor with no JavaScript ends up, so it must be
  the real file.
- The viewer gives each item an id from its filename, so
  `/library/#the-file` opens straight to it.

Nothing else needs changing. The page reads the list on load.
