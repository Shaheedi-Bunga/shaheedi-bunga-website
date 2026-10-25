# /camps/ and /library/ — built 25 Oct 2026, not live

Both pages are finished as structures and **neither is linked, indexed or in
the sitemap**. Each carries `<meta name="robots" content="noindex, nofollow">`.
Harteg is giving the content; these are the shells it goes into.

## To put either one live, three things

1. Delete the `robots` noindex meta and the big comment above it.
2. Add the nav entry to the **other** pages. Each content page has its own
   `<nav>`; the two new pages already list themselves and each other's
   neighbours, so the eight existing pages are what need the line.
3. Add the `<url>` to `sitemap.xml`.

Also worth doing at that point: an entry in the home page's all-pages menu in
`Mockup/parikrama.html`. It was deliberately **not** added, because another
session was editing that file at the time and it is a generated-file conflict
waiting to happen — `index.html` is built from it and CI now checks the two
match.

---

## /camps/

Four camps, taken from the Instagram archive research in
`instagram-findings.md`, which read eight years of the charity's own posts.

**What is on the page and how sure I am of it:**

| | Confidence |
|---|---|
| The four camps exist and are recurring | High — dozens of posts each |
| Gurbani Vidhya Camp is a two-week August intensive at GTB | High — 2022, 2023 (7–20 Aug), 2024 (5–18 Aug) all posted |
| Gurbani Santhiya Camp runs several times a year at Dashmesh | High — Feb, Mar/Apr and May 2026 all posted |
| Sikhi Camp is for children from 5 and moves between gurdware | High |
| Hola Mohalla UK is in March and hosted by the charity | High |
| **Everything else** | **Mine, not sourced** |

**Deliberately left out**, because a wrong number on a public page is worse
than no number: specific dates, specific times, and the attendance figures
(one post says 190 children at the April 2025 Sikhi Camp). If those are right,
they are the best thing that could go on this page — they just need saying by
someone who was there.

**The Gurmukhi has not been checked by anyone who reads Gurmukhi.** Four camp
names are set in it. Same standing caveat as the rest of the site.

---

## /library/

The distinction the page is built on: **Resources** is what the vidyala reads
*from* — granths and pothis, held in Drive. **Library** is what the vidhiarti
have *made* — notes, charts, translations, study aids. If that is not the
distinction Harteg meant, the page needs rethinking rather than refilling.

### The viewer

A native `<dialog>`, which hands Escape, the focus trap and the inert
background to the browser rather than to code that usually gets them wrong.

- **One `<a>` per item is the whole data model.** `href` is the file,
  `data-kind` is `pdf` or `image`, `data-by` is who made it, `data-thumb` is
  an optional cover. `library/items/README.md` has the snippet.
- **`href` is real.** With JavaScript off, every card is just a link to the
  file. Nothing is trapped behind the viewer.
- **PDFs are framed only where framing works.** iOS Safari renders the first
  page of an embedded PDF and gives no way to reach the rest, and A4 in a
  narrow panel is unreadable. Below 700px, and on iOS at any width, the panel
  shows a card with an "Open the file" button instead. That is not a
  degradation, it is the better result on those devices.
- Prev/next, arrow keys, a counter, and a per-item deep link
  (`/library/#the-filename`) that opens straight to that piece.
- Closing empties the panel, so a framed PDF stops loading rather than
  carrying on in the background.

### The three items in it now are SAMPLES

They point at files already in the repo — the timetable poster, a camp poster,
the santhiya share card — purely so the panel can be seen working. They say
"Sample item" on the card. **Delete all three** when the real work arrives.

---

## Checked

Both pages: 0 contrast failures against the live ground (59 and 33 elements),
no horizontal overflow at 375px. Viewer: image fit, PDF framed on desktop,
handoff card on a phone, Escape closes and returns focus to the card that
opened it, deep link opens the right item.
