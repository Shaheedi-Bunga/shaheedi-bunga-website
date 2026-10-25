# For Ustad Ji — one fix for the calendar generator

**The short version:** one line in `tools/web/template.html`. Everything else
about the calendar on the website is handled here now and needs nothing from
you.

---

## The one thing worth changing at source

In `tools/web/template.html`, `<meta charset="utf-8">` comes **after** the
canonical link and the og tags. In the generated page it lands at about byte
890.

The HTML spec requires the charset declaration inside the **first 1024 bytes**,
or the browser starts guessing the encoding. 890 is inside the limit, so it
works today — but it is four og tags away from not working, and this is a page
that is almost entirely Gurmukhi. A mis-guessed encoding there is not a subtle
bug.

**The fix:** make `<meta charset="utf-8">` the first thing inside `<head>`,
before the canonical link.

```html
<head>
<meta charset="utf-8">
<link rel="canonical" href="...">
```

This is worth doing in the template rather than here, because it is wrong
wherever the calendar is published, not only on this site.

---

## Everything else is handled, and deliberately not in your template

The page also needed the site's masthead and footer, the site's cream and ink,
and its fonts served from `/lib/fonts.css` instead of Google. **None of that
belongs in your template** — they are this website's concerns, and they would
be wrong the day the calendar is published anywhere else. So they are applied
after your build instead, by `_tools/fit-calendar.py` in the website repo.

**What that means for you: nothing changes in how you work.** Rebuild the
calendar exactly as you do now and drop the file in. Whoever commits it runs:

```bash
python3 _tools/fit-calendar.py
```

and the fit is reapplied. It is idempotent, so running it twice is harmless.

If the script's anchors ever stop matching your output it refuses to write
anything and says so, rather than quietly publishing a calendar with no menu.
There is also a GitHub Action that fails if a generated file in the repo does
not match what its generator produces, so a missed step shows up immediately
instead of in March.

---

## One thing only you can decide

The page's brand line said **"Shaheedi Bunga · Sikhi School"**. Everywhere else
on the public site says **"Gurmat Vidyala"** — 53 lines against 3. It is now
aligned to Gurmat Vidyala. If Sikhi School was deliberate for the calendar,
say so and it goes back; it is one line.

---

## And the thing that actually has a deadline

Your README says the jantri is published each March and the page must be
rebuilt when Samvat 559 appears, or it stops listing gurpurabs after
**15 March 2027**. That is the real reason any hand-edit to the generated page
was never going to survive — and why the fit is a script now rather than
something someone has to remember.
