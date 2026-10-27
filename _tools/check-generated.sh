#!/usr/bin/env bash
# Are the generated files in this repository actually what their generators
# produce?
#
# These are built, not written, and the first two have already been edited by
# hand at least once - which is silent, because the edit works perfectly until
# the next rebuild throws it away:
#
#   index.html              <- Mockup/build-parikrama.js, from Mockup/parikrama.html
#   sikhi-calendar/index.html <- the calendar app's generator, then _tools/fit-calendar.py
#   the inner pages (classes/ … library/), kit/, new/ and Mockup/_Redesign_Inner/*.html
#                           <- Mockup/_Redesign_Inner/build.js, from its src/
#
# This runs every generator and fails if any produces something different from
# what is committed. Run it before pushing, or let the GitHub Action run it for you.
#
#   bash _tools/check-generated.sh
set -u
cd "$(dirname "$0")/.."
PATHS=("index.html" "sikhi-calendar/index.html" "Mockup/_Redesign_Inner" "kit" "new"
       "classes/index.html" "santhiya/index.html" "saaj/dilruba/index.html" "akhara/archery/index.html"
       "library/read" "camps/index.html" "about/index.html" "donate/index.html" "contact/index.html" "gallery/index.html"
       "resources/index.html" "library/index.html" "safeguarding/index.html" "privacy/index.html")
fail=0

# Refuse to run over someone else's work in progress. More than one session
# edits this tree.
dirty=$(git status --porcelain -- "${PATHS[@]}" Mockup/parikrama.html)
if [ -n "$dirty" ] && [ "${ALLOW_DIRTY:-0}" != "1" ]; then
  echo "Uncommitted changes to the generated files or their source:"
  echo "$dirty"
  echo
  echo "Not running - this would overwrite work in progress."
  echo "Commit or stash first, or set ALLOW_DIRTY=1 if you are sure."
  exit 2
fi

# Run both before reporting, so one failure does not hide the other.
echo "== rebuilding the homepage =="
if ! ( cd Mockup && node build-parikrama.js >/dev/null ); then
  echo "  build-parikrama.js failed"; fail=1
fi

echo
echo "== refitting the calendar page =="
if ! python3 _tools/fit-calendar.py; then
  echo "  fit-calendar.py failed - see above"; fail=1
fi

echo
echo "== rebuilding the inner pages =="
if ! node Mockup/_Redesign_Inner/build.js >/dev/null; then
  echo "  Mockup/_Redesign_Inner/build.js failed"; fail=1
fi

echo
for f in "${PATHS[@]}"; do
  # status, not diff: a stray new file under new/ must count too
  if [ -z "$(git status --porcelain -- "$f")" ]; then
    echo "  $f  up to date"
  else
    echo "  $f  OUT OF DATE"
    fail=1
  fi
done

if [ "$fail" = "1" ]; then
  cat <<'MSG'

One or more generated files do not match what their generator produces.

Almost always this means someone edited the built file instead of its
source. The edit will disappear the next time anyone rebuilds - which is
why this check exists.

  index.html                 edit Mockup/parikrama.html, or
                             Mockup/build-parikrama.js for anything templated
  inner pages, kit/, new/    edit Mockup/_Redesign_Inner/src/, then run
                             node Mockup/_Redesign_Inner/build.js
  sikhi-calendar/index.html  rebuild the calendar, then run
                             python3 _tools/fit-calendar.py

`git diff` now shows exactly what the generators would have written.
MSG
  exit 1
fi

echo
echo "  all generated files match their generators"
