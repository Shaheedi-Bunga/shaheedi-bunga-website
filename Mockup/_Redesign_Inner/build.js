/* Builds the inner pages: src/<name>.html → the live site, filling in the
   parts every page shares so they cannot drift apart.

     <!--@head title="…"-->               doctype, metas, kit.css, the before-paint mode script
     <!--@mast current="classes" wa="…"-->  masthead; `current` marks the nav item,
                                           `wa` finishes "I'd like to ask about …"
     <!--@foot-->                          footer
     <!--@scripts-->                       GSAP, ScrollTrigger, SplitText, Lenis, kit.js

   Run: node Mockup/_Redesign_Inner/build.js     An unfilled directive stops the build.

   Two outputs from the one source:
     1. <name>.html beside this file: a local preview with relative links (noindex).
     2. The live pages at their real addresses (ROUTES below), with links and
        assets made absolute and the shared assets in /kit/. Each page carries
        its own search/share block from partials/meta/<name>.html.
   Both are generated - never edit them; _tools/check-generated.sh fails if
   they differ from what this produces. */
const fs = require('fs'), path = require('path');
const here = __dirname, SRC = path.join(here, 'src'), PART = path.join(here, 'partials');
const ROOT = path.resolve(here, '../..');
const part = n => fs.readFileSync(path.join(PART, n), 'utf8');
const attrs = s => Object.fromEntries([...s.matchAll(/(\w+)="([^"]*)"/g)].map(m => [m[1], m[2]]));
const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

/* page name → its address on the site */
const ROUTES = { classes:'classes', santhiya:'santhiya', kirtan:'saaj/dilruba', archery:'akhara/archery',
  camps:'camps', about:'about', donate:'donate', contact:'contact', gallery:'gallery',
  resources:'resources', library:'library', safeguarding:'safeguarding', privacy:'privacy' };

/* Library sits next to Resources on purpose: Resources is what the vidyala
   reads from, the Library is what the vidhiarti made out of it. They are the
   same errand, so they are neighbours. */
const NAV = [['classes', 'Classes'], ['camps', 'Camps'], ['resources', 'Resources'],
             ['library', 'Library'], ['gallery', 'Gallery'],
             ['about', 'About'], ['contact', 'Contact'], ['donate', 'Donate']];

function mast(a){
  const nav = NAV.map(([k, label]) =>
    `<a href="${k}.html"${k === a.current ? ' aria-current="page"' : ''}>${label}</a>`).join('');
  const text = encodeURIComponent(`Sat Sri Akal — I'd like to ask about ${a.wa || 'classes'}.`);
  return part('mast.html').replace('{{nav}}', nav).replace('{{wa}}', `https://wa.me/447394848407?text=${text}`);
}

/* THE LIBRARY. One list - library.json - renders the shelf on /library/ and
   generates a reader page per item at /library/read/<id>/. The reader is a
   real page rather than a modal, so the shelf can open it in a new tab and
   the pothi still works with no JavaScript. */
const LIB = JSON.parse(fs.readFileSync(path.join(here, 'library.json'), 'utf8')).items;
const human = n => n < 1048576 ? (n/1024).toFixed(0) + ' KB' : (n/1048576).toFixed(1) + ' MB';
function libFile(rel){                       // "/library/items/x.pdf" -> on disk
  const f = path.join(ROOT, rel.replace(/^\//, ''));
  if (!fs.existsSync(f)) throw new Error(`library.json: ${rel} does not exist`);
  return f;
}
(function checkLib(){
  const seen = new Set();
  for (const it of LIB) {
    for (const k of ['id','gur','title','by','pages','kind','file','thumb'])
      if (!it[k]) throw new Error(`library.json: item ${it.id || '?'} has no ${k}`);
    if (seen.has(it.id)) throw new Error(`library.json: two items share the id ${it.id}`);
    seen.add(it.id);
    libFile(it.file); libFile(it.thumb);
  }
})();

function shelf(){
  return LIB.map(it =>
`    <a class="item" href="/library/read/${it.id}/" target="_blank" rel="noopener"
       data-kind="${it.kind}" data-by="${esc(it.by)}" data-thumb="${it.thumb}">
      <span class="cover"><span class="kind">${it.kind.toUpperCase()}</span></span>
      <span class="meta">
        <h2><span class="gur" lang="pa">${it.gur}</span> ${esc(it.title)}</h2>
        <span class="by">${esc(it.by)} &middot; ${it.pages} pages</span>
      </span>
    </a>`).join('\n');
}

function page(f, live){
  const name = f.replace(/\.html$/, '');
  const metaFile = path.join(PART, 'meta', name + '.html');
  let h = fs.readFileSync(path.join(SRC, f), 'utf8');
  h = h.replace(/<!--@head([^>]*)-->/, (_, a) => part('head.html')
          .replace('{{title}}', esc(attrs(a).title || 'Shaheedi Bunga'))
          .replace('{{robots}}', live ? '' : '<meta name="robots" content="noindex">\n')
          .replace('{{meta}}', live && fs.existsSync(metaFile) ? fs.readFileSync(metaFile, 'utf8') : ''))
       .replace(/<!--@mast([^>]*)-->/, (_, a) => mast(attrs(a)))
       .replace(/<!--@foot-->/, () => part('foot.html'))
       .replace(/<!--@scripts-->/, () => part('scripts.html'))
       .replace(/<!--@shelf-->/, () => shelf());
  const left = h.match(/<!--@\w+/);
  if (left) throw new Error(`${f}: ${left[0]} was not filled in`);
  if (!live) return h;

  /* live: page links to their addresses, shared assets to /kit/ */
  h = h.replace(/href="(\w+)\.html(#[^"]*)?"/g, (m, n, hash) => {
        if (n === 'index') return `href="/${hash || ''}"`;
        if (!ROUTES[n]) throw new Error(`${f}: links to ${n}.html, which has no address`);
        return `href="/${ROUTES[n]}/${hash || ''}"`;
      })
       .replace(/(src|href|data-still|data-bow|data-thumb)="(img|lib)\//g, '$1="/kit/$2/')
       .replace(/href="kit\.css"/g, 'href="/kit/kit.css"')
       .replace(/src="kit\.js"/g, 'src="/kit/kit.js"');
  const stray = h.match(/\b(src|href|data-still|data-bow|data-thumb)="(?!\/|https?:|mailto:|tel:|#|data:)[^"]+"/);
  if (stray) throw new Error(`${f}: a relative path survived the rewrite: ${stray[0]}`);
  return h;
}

const srcs = fs.readdirSync(SRC).filter(f => f.endsWith('.html'));
for (const f of srcs) fs.writeFileSync(path.join(here, f), page(f, false));
console.log(`built ${srcs.length} preview pages`);

/* the shared assets, once, at /kit/ */
const KIT = path.join(ROOT, 'kit');
fs.rmSync(KIT, { recursive: true, force: true });
fs.mkdirSync(KIT, { recursive: true });
for (const f of ['kit.css', 'kit.js']) fs.copyFileSync(path.join(here, f), path.join(KIT, f));
for (const d of ['lib', 'img']) fs.cpSync(path.join(here, d), path.join(KIT, d), { recursive: true, filter: s => !s.endsWith('.DS_Store') });
fs.writeFileSync(path.join(KIT, 'README.md'),
  '# /kit/: shared assets of the inner pages\n\nGenerated by `Mockup/_Redesign_Inner/build.js`. Do not edit anything here.\n');

let live = 0;
for (const [name, route] of Object.entries(ROUTES)) {
  if (!srcs.includes(name + '.html')) throw new Error(`no src/${name}.html for /${route}/`);
  const dir = path.join(ROOT, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), page(name + '.html', true));
  live++;
}
console.log(`published ${live} pages at their addresses, assets in /kit/`);

/* the reader pages: one per item, at /library/read/<id>/ */
const READ = path.join(ROOT, 'library', 'read');
fs.rmSync(READ, { recursive: true, force: true });
LIB.forEach((it, i) => {
  const prev = LIB[i - 1], next = LIB[i + 1];
  const btn = (to, label) => to
    ? `<a class="rd-btn" href="/library/read/${to.id}/">${label}</a>`
    : `<span class="rd-btn" aria-disabled="true">${label}</span>`;
  const meta = `<link rel="canonical" href="https://www.shaheedibunga.com/library/read/${it.id}/">\n`
    + `<meta name="robots" content="noindex">\n`          /* the Library is the page to find */
    + `<meta name="description" content="${esc(it.note || it.title)}">\n`;
  let h = part('reader.html')
    .replace('{{head}}', part('head.html')
       .replace('{{title}}', esc(it.title))
       .replace('{{robots}}', '')
       .replace('{{meta}}', meta)
       .replace('href="kit.css"', 'href="/kit/kit.css"'))
    .replace('{{scripts}}', part('scripts.html')
       .replace(/src="lib\//g, 'src="/kit/lib/')
       .replace('src="kit.js"', 'src="/kit/kit.js"'))
    .replace('{{prev}}', btn(prev, '&larr; Prev'))
    .replace('{{next}}', btn(next, 'Next &rarr;'))
    .replace(/\{\{size\}\}/g, human(fs.statSync(libFile(it.file)).size))
    .replace(/\{\{gur\}\}/g, it.gur)
    .replace(/\{\{title\}\}/g, esc(it.title))
    .replace(/\{\{by\}\}/g, esc(it.by))
    .replace(/\{\{pages\}\}/g, String(it.pages))
    .replace(/\{\{file\}\}/g, it.file)
    .replace(/\{\{thumb\}\}/g, it.thumb);
  const left = h.match(/\{\{\w+\}\}/);
  if (left) throw new Error(`reader ${it.id}: ${left[0]} was not filled in`);
  const dir = path.join(READ, it.id);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), h);
});
console.log(`reader pages: ${LIB.length} at /library/read/`);

/* /new/ was the test address while the design was tried out; links to it
   were shared, so it now forwards to the real pages rather than vanishing */
const NEW = path.join(ROOT, 'new');
fs.rmSync(NEW, { recursive: true, force: true });
fs.mkdirSync(NEW, { recursive: true });
fs.writeFileSync(path.join(NEW, 'index.html'), `<!doctype html>
<meta charset="utf-8">
<meta name="robots" content="noindex">
<title>Shaheedi Bunga</title>
<link rel="canonical" href="https://www.shaheedibunga.com/classes/">
<meta http-equiv="refresh" content="0; url=/classes/">
<p style="font:15px system-ui;padding:24px">The new design is now the site: <a href="/classes/">go to Classes</a>.</p>
`);
