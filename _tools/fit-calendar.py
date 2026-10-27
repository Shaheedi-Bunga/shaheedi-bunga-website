#!/usr/bin/env python3
"""Fit the generated Sikhi Calendar page into this website.

    python3 _tools/fit-calendar.py

WHY THIS EXISTS
---------------
sikhi-calendar/index.html is GENERATED. Its generator is
tools/build-web-page.js inside the calendar app, which lives in a different
project tree - not in this repository. Its own README says, correctly, "do
not edit sikhi-calendar.html directly, the next rebuild will overwrite it",
and the README also says the page MUST be rebuilt in March 2027 when the new
jantri is published, or it stops listing gurpurabs. So a rebuild is coming,
and any edit made here by hand is on borrowed time.

The generator's job is to produce a correct, standalone calendar. Fitting it
to this particular website - our masthead, our footer, our cream, our
self-hosted fonts - is this website's job, not the calendar app's. Putting
these changes in the generator's template would also be wrong the day the
calendar is published anywhere else.

So: treat whatever the generator emits as an INPUT, and run this afterwards.

    1. Ustad Ji rebuilds the calendar and drops the file in
    2. python3 _tools/fit-calendar.py
    3. commit

It is idempotent - running it twice changes nothing the second time - so it
is always safe to run, and safe to run on a page that is already fitted.

IF THE GENERATOR CHANGES
------------------------
Every step below is anchored to a specific piece of the generated markup. If
an anchor disappears, that step reports MISSING, nothing is written, and the
exit code is 1. That is deliberate: a loud failure is far better than quietly
publishing a page with no menu, or one that phones Google for fonts.
"""
import os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PAGE = os.path.join(ROOT, "sikhi-calendar", "index.html")

APPLIED, ALREADY, MISSING = "applied", "already", "MISSING"


# ── the site shell ──────────────────────────────────────────────────────────
MASTHEAD = '''
<!-- The same masthead and footer as every other page outside the parikrama.
     The generated page has its own header and no footer, so on its own it is
     a dead end: the logo goes home and nothing reaches Classes, Resources or
     anything else. Added here by _tools/fit-calendar.py. -->
<header class="top">
  <img src="../Assets/Brand/gurmat-vidyala-84.png" alt="" width="42" height="42">
  <span class="mark"><b>Shaheedi Bunga</b><i>Gurmat Vidyala</i></span>
  <nav>
    <a href="../">Home</a>
    <a href="../classes/">Classes</a>
    <a href="../resources/">Resources</a>
    <a href="../gallery/">Gallery</a>
    <a href="../about/">About</a>
    <a href="../contact/">Contact</a>
    <a href="../donate/">Donate</a>
  </nav>
</header>
'''

FOOTER = ('<p class="foot">Shaheedi Bunga &middot; Registered charity in England '
          '&amp; Wales &middot; 1185103<br><a href="../privacy/">Privacy</a> '
          '&middot; <a href="../safeguarding/">Safeguarding</a></p>\n')

BANNER = '''<!-- GENERATED PAGE, THEN FITTED. Do not hand-edit.
     The calendar itself comes from tools/build-web-page.js in the calendar
     app, which is not in this repository. Everything that makes it look like
     part of this website is applied afterwards by _tools/fit-calendar.py.
     After any rebuild of the calendar, run that script again. -->
'''

STYLES = ('<!-- The five families this page uses are in /lib/fonts.css with the rest of\n'
          '     the site. Linking Google here would undo the self-hosting and make the\n'
          "     privacy page's \"this site contacts nobody\" untrue for one page. -->\n"
          '<link rel="stylesheet" href="/lib/fonts.css">\n'
          '<link rel="stylesheet" href="/kit/kit.css">')

CHARSET = ('<!-- charset first: it must land inside the first 1024 bytes or the browser\n'
           '     starts guessing, and this page is mostly Gurmukhi. The generator emits\n'
           '     it after the og tags, at about byte 890 - inside the limit, but one\n'
           '     more meta tag would push it out. -->\n'
           '<meta charset="utf-8">\n')


SHELL = os.path.join(ROOT, "kit", "shell")

def shell(name):
    """A piece of the inner pages' shell, as Mockup/_Redesign_Inner/build.js
    last wrote it. Run build.js before this script if the masthead changed."""
    f = os.path.join(SHELL, name + ".html")
    if not os.path.exists(f):
        sys.exit(f"not found: {os.path.relpath(f, ROOT)} - run node Mockup/_Redesign_Inner/build.js first")
    return open(f, encoding="utf-8").read()

def block(name, body):
    return f"<!--kit:{name}-->\n{body}<!--/kit:{name}-->\n"

# the calendar keeps its own tokens on .sbcal; the dark mood gets a dark set of them
DARK = """<style>/* the site's dark mood, mapped onto the calendar's own tokens (fit-calendar.py) */
/* the masthead is fixed, as on every inner page: the calendar starts below it */
body > .sbcal{ padding-top:calc(var(--mastH,74px) + 12px); }
html[data-mood="dark"] body{ background:#0C1322 !important; }
html[data-mood="dark"] .sbcal{
  --cream:#0C1322; --cream-2:#141D31; --cream-3:#1B263D; --paper:#121B2E;
  --rule:#2A3550; --rule-soft:#202B44;
  --ink:#F1EBDD; --ink-2:#CFC6B4; --ink-3:#B3AA98;
  --gold:#C9A04A; --gold-deep:#E2C27A; --gold-soft:#2A2A2E;
  --clay:#D79A72; --plum:#D58AA8; --crimson:#E07D74; --saffron:#E3A160; --forest:#86C08F; --stone:#B8AFA2; --green:#A7C77A;
  background:var(--cream); color:var(--ink); }
</style>
"""

def steps(h):
    """Each step: (name, already?, apply) -> the fitted text, or None if the
    anchor it needs is gone."""

    def charset(h):
        h = re.sub(r'<meta charset="utf-8">\s*\n', '', h, count=1)
        return h.replace("<head>\n", "<head>\n" + CHARSET, 1)

    def fonts(h):
        pat = re.compile(
            r'<link rel="preconnect" href="https://fonts\.googleapis\.com">\s*\n'
            r'<link rel="preconnect" href="https://fonts\.gstatic\.com" crossorigin>\s*\n'
            r'<link href="https://fonts\.googleapis\.com/css2[^"]*" rel="stylesheet">')
        return pat.sub(STYLES, h, count=1) if pat.search(h) else None

    def banner(h):
        return h.replace("<!DOCTYPE html>\n", "<!DOCTYPE html>\n" + BANNER, 1)

    def ground(h):
        h = h.replace('<meta name="theme-color" content="#F5F0E6">',
                      '<meta name="theme-color" content="#FAF6EE">')
        h = h.replace("  --cream:      #F5F0E6;",
                      "  /* the site's own cream and ink, so the calendar does not read as\n"
                      "     a slightly-off version of every other page */\n"
                      "  --cream:      #FAF6EE;")
        h = h.replace("  --ink:        #221C14;", "  --ink:        #16294A;")
        h = h.replace('<body style="margin:0;background:#F5F0E6">',
                      '<body style="margin:0;background:#FAF6EE">')
        return h

    def put(h, name, body, old, where):
        """Replace the kit block if it is there, else the old piece, else insert."""
        new = block(name, body)
        m = re.search(rf"<!--kit:{name}-->.*?<!--/kit:{name}-->\n", h, re.S)
        if m: return h[:m.start()] + new + h[m.end():]
        if old and old in h: return h.replace(old, new, 1)
        return where(h, new)

    def after_body(h, new):
        m = re.search(r'<body[^>]*>', h)
        return h[:m.end()] + "\n" + new + h[m.end():] if m else None

    def before_end(h, new):
        return h.replace("</body>", new + "</body>", 1) if "</body>" in h else None

    def after_styles(h, new):
        anchor = '<link rel="stylesheet" href="/kit/kit.css">'
        return h.replace(anchor, anchor + "\n" + new, 1) if anchor in h else None

    def mood(h):
        return put(h, "mood", shell("mood") + DARK, None, after_styles)

    def masthead(h):
        return put(h, "mast", shell("mast"), MASTHEAD, after_body)

    def footer(h):
        return put(h, "foot", shell("foot") + "<script>KIT.start();</script>\n", FOOTER, before_end)

    def brand(h):
        # the site label is in the masthead now; the page's own copy of it
        # would be the same words twice in a row
        h = re.sub(r'[ \t]*<a href="/" class="sbcal__label sbcal__home">[^<]*</a>\s*\n',
                   '', h, count=1)
        return h

    def contrast(h):
        old = ".sbcal__cg { font-family: var(--util); font-size: 11px; color: var(--ink-3); }"
        new = ("/* --ink-3 on the cream measures 4.49:1 at this size - a hair under 4.5.\n"
               "   --ink-2 clears it. */\n"
               ".sbcal__cg { font-family: var(--util); font-size: 11px; color: var(--ink-2); }")
        return h.replace(old, new, 1) if old in h else None

    return [
        ("banner",        BANNER.split("\n")[0] in h,          banner),
        ("charset first", h.find("charset") < 400,             charset),
        ("self-hosted fonts", "fonts.googleapis.com" not in h, fonts),
        ("site ground",   "#F5F0E6" not in h,                  ground),
        ("kit stylesheet", "/site.css" not in h,               lambda h: h.replace('<link rel="stylesheet" href="/site.css">', '<link rel="stylesheet" href="/kit/kit.css">', 1) if "/site.css" in h else None),
        ("mood switch",   block("mood", shell("mood") + DARK) in h, mood),
        ("masthead",      block("mast", shell("mast")) in h,   masthead),
        ("footer",        block("foot", shell("foot") + "<script>KIT.start();</script>\n") in h, footer),
        ("brand line",    'class="sbcal__label sbcal__home"' not in h, brand),
        ("date contrast",
         ".sbcal__cg { font-family: var(--util); font-size: 11px; color: var(--ink-3); }" not in h,
         contrast),
    ]


def main():
    if not os.path.exists(PAGE):
        sys.exit(f"not found: {PAGE}")
    original = open(PAGE, encoding="utf-8").read()
    h, report, failed = original, [], False

    for name, done, fn in steps(h):
        if done:
            report.append((ALREADY, name)); continue
        out = fn(h)
        if out is None or out == h:
            report.append((MISSING, name)); failed = True
        else:
            h = out; report.append((APPLIED, name))

    width = max(len(n) for _, n in report)
    for status, name in report:
        print(f"  {name:<{width}}  {status}")

    if failed:
        sys.exit("\nAn anchor was not found - the generator's output has changed.\n"
                 "Nothing was written. Look at what moved before publishing this page.")

    if h == original:
        print("\n  nothing to do - the page is already fitted")
        return
    open(PAGE, "w", encoding="utf-8").write(h)
    print(f"\n  wrote {os.path.relpath(PAGE, ROOT)}")


if __name__ == "__main__":
    main()
