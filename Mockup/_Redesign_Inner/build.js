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

/* Every photograph gets its size and a WebP srcset from img-sizes.json, which
   _tools/make-webp.py writes. `sizes` is how wide the picture is drawn: the
   default suits a half-width figure; a page whose pictures are smaller says so
   below, and one <img data-sizes="…"> can say so for itself. */
const SIZES = JSON.parse(fs.readFileSync(path.join(here, 'img-sizes.json'), 'utf8'));
const PAGE_SIZES = { gallery:'(max-width:760px) 50vw, 25vw', events:'(max-width:480px) 100vw, (max-width:1100px) 40vw, 360px' };
const webp = (p, w) => p.replace(/([^/]+)\.(jpe?g|png)$/i, `_w/$1-${w}.webp`);
function responsive(h, name){
  return h.replace(/<img\b([^>]*?)\s*\/?>/g, (m, a) => {
    const src = (/\ssrc="([^"]+)"/.exec(a) || [])[1];
    if (!src || !/^(img\/|\/Assets\/).*\.(jpe?g|png)$/i.test(src)) return m;
    const z = SIZES[src];
    if (!z) throw new Error(`${name}: ${src} has no WebP copies; run python3 _tools/make-webp.py`);
    let out = a;
    if (!/\swidth=/.test(out)) out += ` width="${z.w}" height="${z.h}"`;
    if (!/\ssrcset=/.test(out)) {
      const own = (/\sdata-sizes="([^"]+)"/.exec(out) || [])[1];
      out = out.replace(/\sdata-sizes="[^"]*"/, '');
      /* a small picture has one copy at its own size: swap the format, no sizes.
         Otherwise the copies, then the original as the widest choice. */
      out += z.v.length === 1 && z.v[0] === z.w
        ? ` srcset="${webp(src, z.w)}"`
        : ` srcset="${[...z.v.map(w => `${webp(src, w)} ${w}w`), `${src} ${z.w}w`].join(', ')}" sizes="${own || PAGE_SIZES[name] || '(max-width:760px) 100vw, 50vw'}"`;
    }
    return `<img${out}>`;
  });
}

/* page name → its address on the site */
const ROUTES = { classes:'classes', santhiya:'santhiya', kirtan:'saaj/dilruba', archery:'akhara/archery',
  camps:'camps', about:'about', donate:'donate', contact:'contact', gallery:'gallery',
  resources:'resources', library:'library', safeguarding:'safeguarding', privacy:'privacy', events:'events' };

/* pages that live on the site but are not built here: the calendar is the
   calendar app's page, fitted by _tools/fit-calendar.py */
const ELSEWHERE = { calendar:'sikhi-calendar' };

/* Library sits next to Resources on purpose: Resources is what the vidyala
   reads from, the Library is what the vidhiarti made out of it. They are the
   same errand, so they are neighbours. */
/* The top row. 'vidyale' is the drop-down below; Library sits in the footer
   until it has items (2026-10-27). */
const NAV = [['vidyale', 'Vidyale'], ['events', 'Events'], ['calendar', 'Calendar'], ['gallery', 'Gallery'],
             ['resources', 'Resources'], ['about', 'About'], ['contact', 'Contact'], ['donate', 'Donate']];

/* Each vidyala has its own place: the three with pages first, then the three
   still on the Classes page. Gurmukhi names as on the Classes page. */
const VIDYALE = [
  { href:'santhiya.html', gur:'ਸੰਥਿਆ ਵਿਦਿਆਲਾ', en:'Santhiya', note:'Reading sudh Gurbani' },
  { href:'kirtan.html', gur:'ਕੀਰਤਨ ਵਿਦਿਆਲਾ', en:'Kirtan', note:'Tanti saaj and raag' },
  { href:'archery.html', gur:'ਤੀਰ ਅੰਦਾਜ਼ੀ', en:'Archery Akhara', note:'Sundays, ages 14 and over' },
  { href:'classes.html#tabla', gur:'ਤਬਲਾ ਤੇ ਜੋੜੀ', en:'Tabla & Jori', note:'Running: ask' },
  { href:'classes.html#katha', gur:'ਕਥਾ ਵਿਦਿਆਲਾ', en:'Katha', note:'Page coming' },
  { href:'classes.html#itihaas', gur:'ਇਤਿਹਾਸ ਵਿਦਿਆਲਾ', en:'Itihaas', note:'Wednesday evenings' } ];
const VIDYALE_PAGES = ['santhiya', 'kirtan', 'archery', 'classes', 'camps'];

function mast(a){
  const nav = NAV.map(([k, label]) => k !== 'vidyale'
    ? `<a href="${k}.html"${k === a.current ? ' aria-current="page"' : ''}>${label}</a>`
    : `<div class="vid${VIDYALE_PAGES.includes(a.current) ? ' is-current' : ''}">`
      + `<button class="vid-btn" type="button" aria-expanded="false" aria-controls="vid-panel">${label}<i aria-hidden="true"></i></button>`
      + `<div class="vid-panel" id="vid-panel"><div class="vid-grid">`
      + VIDYALE.map(v => `<a class="vid-item" href="${v.href}"${v.href === a.current + '.html' ? ' aria-current="page"' : ''}>`
          + `<span class="vid-gur" lang="pa">${v.gur}</span><b>${esc(v.en)}</b><small>${v.note}</small></a>`).join('')
      + `</div><div class="vid-foot"><a href="classes.html"${a.current === 'classes' ? ' aria-current="page"' : ''}>All classes →</a>`
      + `<a href="camps.html"${a.current === 'camps' ? ' aria-current="page"' : ''}>Camps →</a></div></div></div>`).join('');
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

/* THE EVENTS. events.json -> the archive on /events/, newest first, grouped
   by year. Posters are the announcements as they were posted. */
const EV = JSON.parse(fs.readFileSync(path.join(here, 'events.json'), 'utf8')).items;
const html = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
function events(){
  const year = e => (e.start || e.posted).slice(0, 4);
  const sorted = EV.slice().sort((a, b) => (b.start || b.posted).localeCompare(a.start || a.posted));
  const years = [...new Set(sorted.map(year))];
  return years.map(y => `  <section class="yr" data-year="${y}">
    <h2 class="yr-h">${y}</h2>
    <div class="evs">
${sorted.filter(e => year(e) === y).map(e => {
      const facts = [e.when, e.time, e.venue].filter(Boolean).map(html).join(' · ');
      /* an event known only from YouTube: no poster, a link out instead
         (a plain link - nothing is loaded from YouTube) */
      if (!e.img && !e.yt) throw new Error(`events.json: ${e.id} has neither a poster nor a video`);
      if (e.img && !fs.existsSync(path.join(here, e.img))) throw new Error(`events.json: ${e.img} does not exist`);
      const pic = e.img
        ? `<button class="ev-pic" type="button" data-full="${e.img}" aria-label="Open the poster for ${html(e.title)}"><img src="${e.img}" alt="The poster for ${html(e.title)}." loading="lazy"></button>`
        : `<a class="ev-pic ev-yt" href="https://www.youtube.com/watch?v=${encodeURIComponent(e.yt)}" target="_blank" rel="noopener"><span class="ev-yt-in"><i aria-hidden="true"></i><b>Watch on YouTube</b><small>${html(e.type)} · ${html((e.start || e.posted).slice(0, 4))}</small></span><span class="sr">${html(e.title)}, on YouTube</span></a>`;
      return `      <article class="ev" data-type="${html(e.type)}" data-fade>
        ${pic}
        <div class="ev-txt"><p class="ev-type">${html(e.type)}</p><h3>${html(e.title)}</h3>
          ${facts ? `<p class="ev-facts">${facts}</p>` : ''}<p class="ev-sum">${html(e.summary)}</p></div>
      </article>`; }).join('\n')}
    </div>
  </section>`).join('\n');
}

/* Search engines read who the charity is (About, Contact) and what it runs
   (Events) from these blocks. Facts only from the pages themselves: the
   Charity Commission number, the registered address, the public contacts.
   An event is listed only when it has a day and a place that names its town
   (a venue in several towns, or one that names none, is left out). */
const SITE = 'https://www.shaheedibunga.com';
const ORG = { '@type':'NGO', '@id':SITE + '/#charity', name:'Shaheedi Bunga', url:SITE + '/',
  logo:SITE + '/Assets/Brand/gurmat-vidyala-512.png', email:'gurmat@shaheedibunga.com', telephone:'+447394848407',
  description:'A Sikh education charity in Leicester. Every class is free and taught by volunteers.',
  address:{ '@type':'PostalAddress', streetAddress:'22 Beckett Road', addressLocality:'Leicester', postalCode:'LE5 0HE', addressCountry:'GB' },
  identifier:{ '@type':'PropertyValue', propertyID:'Charity Commission for England and Wales', value:'1185103' },
  sameAs:['https://www.instagram.com/shaheedi_bunga_uk/', 'https://www.youtube.com/@shaheedibunga'] };
const TOWNS = ['Leicester', 'Hull', 'Sunderland', 'Smethwick', 'West Bromwich', 'Derby'];
const town = v => { const t = TOWNS.filter(n => v.includes(n)); return t.length === 1 && !/ then |;| and /.test(v) ? t[0] : null; };
const ld = o => `<script type="application/ld+json">${JSON.stringify({ '@context':'https://schema.org', ...o }).replace(/</g, '\\u003c')}</script>\n`;
function jsonld(name){
  if (name === 'about' || name === 'contact') return ld(ORG);
  if (name !== 'events') return '';
  const dated = EV.filter(e => e.venue && town(e.venue) && /^\d{4}-\d{2}-\d{2}$/.test(e.start) && /\b\d{1,2}(st|nd|rd|th)?\b/.test(e.when));
  return ld({ '@graph':[ORG, ...dated.map(e => ({ '@type':'Event', name:e.title, description:e.summary,
    startDate:e.start, ...(e.end ? { endDate:e.end } : {}),
    eventAttendanceMode:'https://schema.org/OfflineEventAttendanceMode', eventStatus:'https://schema.org/EventScheduled',
    location:{ '@type':'Place', name:e.venue, address:{ '@type':'PostalAddress', addressLocality:town(e.venue), addressCountry:'GB' } },
    ...(e.img ? { image:SITE + '/kit/' + e.img } : {}), organizer:{ '@id':SITE + '/#charity' }, isAccessibleForFree:true }))] });
}

function page(f, live){
  const name = f.replace(/\.html$/, '');
  const metaFile = path.join(PART, 'meta', name + '.html');
  let h = fs.readFileSync(path.join(SRC, f), 'utf8');
  h = h.replace(/<!--@head([^>]*)-->/, (_, a) => part('head.html')
          .replace('{{title}}', esc(attrs(a).title || 'Shaheedi Bunga'))
          .replace('{{robots}}', live ? '' : '<meta name="robots" content="noindex">\n')
          .replace('{{meta}}', live && fs.existsSync(metaFile) ? fs.readFileSync(metaFile, 'utf8') + jsonld(name) : ''))
       .replace(/<!--@mast([^>]*)-->/, (_, a) => mast(attrs(a)))
       .replace(/<!--@foot-->/, () => part('foot.html'))
       .replace(/<!--@scripts-->/, () => part('scripts.html'))
       .replace(/<!--@shelf-->/, () => shelf())
       .replace(/<!--@events-->/, () => events());
  const left = h.match(/<!--@\w+/);
  if (left) throw new Error(`${f}: ${left[0]} was not filled in`);
  h = responsive(h, name);
  if (!live) return h;

  return toLive(h, f);
}

/* live: page links to their addresses, shared assets to /kit/ */
function toLive(h, f){
  h = h.replace(/href="(\w+)\.html(#[^"]*)?"/g, (m, n, hash) => {
        if (n === 'index') return `href="/${hash || ''}"`;
        const route = ROUTES[n] || ELSEWHERE[n];
        if (!route) throw new Error(`${f}: links to ${n}.html, which has no address`);
        return `href="/${route}/${hash || ''}"`;
      })
       .replace(/(src|href|data-still|data-bow|data-thumb|poster|data-src|data-full)="(img|lib)\//g, '$1="/kit/$2/')
       .replace(/srcset="([^"]+)"/g, (m, v) => `srcset="${v.replace(/(^|, )img\//g, '$1/kit/img/')}"`)
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
/* GitHub Pages serves /404.html for any address it does not have, so it is
   built like the rest but written at the root, with every link absolute */
fs.writeFileSync(path.join(ROOT, '404.html'), page('404.html', true));
console.log(`published ${live} pages at their addresses and /404.html, assets in /kit/`);

/* the shell, for a page this build does not make: _tools/fit-calendar.py
   puts these into the calendar so it carries the same masthead, footer and
   light/dark switch as every other page */
const SHELL = path.join(KIT, 'shell');
fs.mkdirSync(SHELL, { recursive: true });
const head = part('head.html');
const mood = head.slice(head.indexOf('<!-- before paint'), head.indexOf('</script>', head.indexOf('<!-- before paint')) + 9);
if (!mood.startsWith('<!-- before paint')) throw new Error('head.html: the mood script was not found');
fs.writeFileSync(path.join(SHELL, 'mood.html'), mood + '\n');
fs.writeFileSync(path.join(SHELL, 'mast.html'), toLive(mast({ current:'calendar', wa:'the calendar' }), 'shell/mast') + '\n');
fs.writeFileSync(path.join(SHELL, 'foot.html'), toLive(part('foot.html') + part('scripts.html'), 'shell/foot') + '\n');

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
