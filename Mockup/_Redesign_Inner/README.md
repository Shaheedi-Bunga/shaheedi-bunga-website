# Inner pages redesign: draft (2026-10-25)

Decide-mode drafts, not part of the site. Nothing here is linked from the live
pages, and nothing has been committed.

Brief, as agreed:
- **Scope:** every page except the homepage (Parikrama). Santhiya, Kirtan and Archery become their own pages.
- **Light and dark (decided 2026-10-25):** both kept, as a sun/moon switch in the masthead. **Light is the default** for every first-time visitor; **dark is the whole page**, not only the hero. The choice is remembered per viewer (`localStorage` `sb-mood`) and set in `<head>` before paint, so there is no flash.
- **Motion:** cinematic. **Build:** static HTML + self-hosted GSAP 3.15.0 (with ScrollTrigger, SplitText, Flip) and Lenis 1.3.26. Astro once the design is signed off.
- **Imagery:** class photos, Puratan art, drawn objects (the dilruba plates, an SVG bow), with room for new photography.

## Working on it

Edit `src/<page>.html`, never the built `<page>.html` beside it, then:

```bash
node build.js
```

`build.js` fills four directives from `partials/` so the shared parts cannot drift:
`<!--@head title="…"-->`, `<!--@mast current="…" wa="…"-->`, `<!--@foot-->`, `<!--@scripts-->`.
An unfilled directive stops the build.

Serve the Website folder and open `/Mockup/_Redesign_Inner/index.html` (fonts come from
`/lib/fonts.css`, photographs from `/Assets/`). `?mood=light|dark` forces a mode for
testing without saving it.

| File | What |
|---|---|
| `kit.css` | one token set redefined for dark (`--cream` = ground, `--navy` = ink, `--panel` = navy surfaces), so no rule is written twice; masthead, arch, footer; the shared components (promises track, week, venues, invitation, page hero, band, figures, policy) |
| `kit.js` | the switch, Lenis, the masthead, reveal attributes (`data-split`, `data-fade`, `data-scrub`, `data-parallax`), `.cine` for desktop-with-motion, the sideways track, today in any `.week`, section tracking for policy pages |
| `src/santhiya.html` | the fresco opens from its arch to the full screen; manifesto; four promises; the room; the week; venues |
| `src/kirtan.html` | `<dilruba-bow>` (lifted unchanged from the live panel into `lib/dilruba-bow.js`); the Harteg-confirmed copy; the four saaj; the photo wall; the nine-class week with the next class worked out live |
| `src/archery.html` | an SVG bow drawn and loosed by the scroll; the range; the target zooming through the five stages; the facts |
| `src/classes.html` | the Akal Bunga hero; six rows with a cursor-following picture; three steps |
| `src/about.html`, `donate.html`, `contact.html` | reading pages on `.phero` + `.band` |
| `src/gallery.html` | 81 photographs, Flip filters, a full-screen viewer (arrow keys, Escape, focus kept inside) |
| `src/resources.html` | the calendar card, one search across every file, a contents list that follows the page |
| `src/safeguarding.html`, `privacy.html` | policy layout; 999 first; tap-to-call numbers; privacy updated for the switch |
| `.hx` heroes | the hero picked for each page from the hero mockups (2026-10-28): its HTML in place of the page's `.phero`, its CSS scoped under `.hx` in the page's `<style>`, its motion in one script after `<!--@scripts-->`; pictures in `img/hero/`. Kirtan keeps its live hero; Tabla, Katha and Itihaas are still drafts |
| `img/` | resized copies. Fresco, Akal Bunga, Harmandir Sahib and the Vaaran folio are public domain, sourced in `Content/Puratan_Art/SOURCES.md` |

## Rules kept

Nothing is laid over the painted Gurbani in the fresco. Gurmukhi is never split for
animation or letter-spaced. Every element is visible without JS. Text colours clear
4.5:1 on their ground in both modes. Every fact, time and venue is the live site's.

## Must go live together

- The **Privacy** page's dark-mode paragraph and new date, and the **switch** itself: the
  live notice says nothing is kept in local storage, which the switch makes untrue.

## Open questions

- New wording to check with Ustad Ji: the four saaj, the Santhiya promises, the three steps on Classes.
- 62 Santhiya photographs have no description on the live site, so they carry none here.
