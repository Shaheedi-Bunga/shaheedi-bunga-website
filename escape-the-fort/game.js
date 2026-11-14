/* Escape the Fort — the game.
   Twelve levels, one per part of the Bandi Chhor sakhi. Each level: the story, a small tap puzzle,
   a family tip, and one letter of the code DATA BANDI CHHOR.
   No network, no tracking: progress is kept in localStorage on this device only (and the game works
   without it). Text lives in strings.js. */
(() => {
"use strict";
const S = window.EF_STRINGS;
const PA_APPROVED = false;               // flip to true once Shaheedi Bunga has checked the Punjabi
const LETTERS = ["D","A","T","A","B","A","N","D","I","CH","H","OR"];
const KEY = "sb-escape-the-fort";
const root = document.getElementById("eft");
const still = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- language ---------- */
const paReady = S.pa && Object.keys(S.pa).length > 20;
let lang = "en";
const qLang = (/[?&]lang=(pa|en)/.exec(location.search) || [])[1];
if (qLang === "pa" && paReady) lang = "pa";                       // preview: ?lang=pa
else { try { const l = localStorage.getItem(KEY + "-lang"); if (l === "pa" && paReady && PA_APPROVED) lang = l; } catch (e) {} }
const t = k => { const v = (S[lang] && S[lang][k] != null) ? S[lang][k] : S.en[k]; return v; };

/* ---------- progress ---------- */
let st = { done: [] };
try { const raw = localStorage.getItem(KEY); if (raw) st = Object.assign(st, JSON.parse(raw)); } catch (e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} };

/* ---------- tiny helpers ---------- */
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" }[c]));
const h = (tag, attrs = {}, ...kids) => { const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) { if (k === "on") for (const [ev, fn] of Object.entries(v)) e.addEventListener(ev, fn);
    else if (k === "html") e.innerHTML = v; else if (v !== false && v != null) e.setAttribute(k, v); }
  kids.flat().forEach(c => e.append(c && c.nodeType ? c : document.createTextNode(c ?? ""))); return e; };
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const say = (box, msg, ok) => { box.textContent = msg; box.className = "eft-say " + (ok ? "ok" : "no"); };
const top = () => root.scrollIntoView({ behavior: still ? "auto" : "smooth", block: "start" });
const langAttr = () => (lang === "pa" ? "pa" : "en");

/* ---------- shell ---------- */
function frame(...kids) {
  root.replaceChildren();
  root.setAttribute("lang", langAttr());
  const bar = h("div", { class: "eft-bar" },
    h("span", { class: "eft-k" }, t("title")),
    h("span", { class: "eft-dots", "aria-label": t("letters") },
      LETTERS.map((L, i) => h("i", { class: st.done.includes(i) ? "on" : "", title: (i + 1) + "" }, st.done.includes(i) ? L : "·"))));
  if (paReady && (PA_APPROVED || qLang === "pa")) bar.append(h("button", { class: "eft-lang", type: "button", on: { click: () => {
      lang = lang === "en" ? "pa" : "en"; try { localStorage.setItem(KEY + "-lang", lang); } catch (e) {} route(); } } }, t("lang_other")));
  root.append(bar, ...kids);
}
let where = { screen: "intro" };
function route() {
  if (where.screen === "intro") intro();
  else if (where.screen === "level") level(where.n);
  else if (where.screen === "final") finale();
  else if (where.screen === "cert") cert();
}
function go(w) { where = w; route(); top(); }

/* ---------- intro ---------- */
function intro() {
  const n = st.done.length, next = firstOpen();
  frame(h("div", { class: "eft-card eft-intro" },
    h("p", { class: "eft-k" }, t("kicker")),
    h("p", { class: "eft-lead" }, t("intro")),
    h("p", { class: "eft-small" }, t("how")),
    h("div", { class: "eft-row" },
      n && n < 12 ? h("button", { class: "eft-btn", type: "button", on: { click: () => go({ screen: "level", n: next }) } }, `${t("resume")} · ${t("level")} ${next + 1}`)
                  : h("button", { class: "eft-btn", type: "button", on: { click: () => go(n >= 12 ? { screen: "final" } : { screen: "level", n: 0 }) } }, t("start")),
      n ? h("button", { class: "eft-btn ghost", type: "button", on: { click: () => { st.done = []; save(); go({ screen: "level", n: 0 }); } } }, t("restart")) : ""),
    h("p", { class: "eft-fine" }, t("source"))));
}
const firstOpen = () => { for (let i = 0; i < 12; i++) if (!st.done.includes(i)) return i; return 12; };

/* ---------- a level ---------- */
function level(i) {
  const L = "L" + (i + 1) + "_";
  const more = h("p", { class: "eft-more", hidden: true }, t(L + "more"));
  const moreBtn = h("button", { class: "eft-link", type: "button", "aria-expanded": "false", on: { click: () => {
    more.hidden = !more.hidden; moreBtn.setAttribute("aria-expanded", String(!more.hidden));
    moreBtn.textContent = more.hidden ? t("read_more") : t("read_less"); } } }, t("read_more"));
  const game = h("div", { class: "eft-game" });
  const fb = h("p", { class: "eft-say", "aria-live": "polite" });
  frame(h("div", { class: "eft-card" },
    h("p", { class: "eft-k" }, `${t("level")} ${i + 1} ${t("of")} 12`),
    h("h2", {}, t(L + "title")),
    h("div", { class: "eft-story" }, h("p", {}, t(L + "story")), more, moreBtn),
    h("h3", { class: "eft-task" }, t(L + "task")),
    game, fb));
  PUZ[i](game, fb, () => win(i));
}
function win(i) {
  if (!st.done.includes(i)) { st.done.push(i); save(); }
  const L = "L" + (i + 1) + "_";
  frame(h("div", { class: "eft-card eft-win" },
    h("p", { class: "eft-k" }, `${t("level")} ${i + 1} · ${t("well_done")}`),
    h("p", { class: "eft-small" }, t("you_won")),
    h("p", { class: "eft-letter", "aria-label": LETTERS[i] }, LETTERS[i]),
    h("div", { class: "eft-tip" }, h("b", {}, t("parent_tip")), h("p", {}, t(L + "tip"))),
    h("button", { class: "eft-btn", type: "button", on: { click: () => go(i >= 11 || firstOpen() >= 12 ? { screen: "final" } : { screen: "level", n: firstOpen() }) } },
      i >= 11 || firstOpen() >= 12 ? t("final_title") : t("next"))));
  top();
}

/* ---------- puzzle kinds ---------- */
// sort each statement into one of a few boxes (levels 1 and 2)
function sorter(key) { return (box, fb, done) => {
  const opts = t(key + "opts"), items = shuffle(t(key + "items").map((x, i) => [...x, i]));
  let k = 0;
  const q = h("p", { class: "eft-q" }), btns = h("div", { class: "eft-row wrap" }), count = h("p", { class: "eft-small" });
  const show = () => { q.textContent = items[k][0]; count.textContent = `${k + 1} / ${items.length}`; };
  opts.forEach((o, oi) => btns.append(h("button", { class: "eft-btn opt", type: "button", on: { click: () => {
    const [, ans, why] = items[k];
    if (oi === ans) { say(fb, "✓ " + why, true); k++; if (k >= items.length) setTimeout(done, still ? 0 : 700); else show(); }
    else say(fb, t("try_again"), false); } } }, o)));
  box.append(count, q, btns); show();
}; }

// level 3: backwards code
function backwards(box, fb, done) {
  const words = t("L3_words"); let k = 0;
  const lab = h("p", { class: "eft-small" }), code = h("p", { class: "eft-code" }), row = h("div", { class: "eft-row wrap" });
  const solved = h("p", { class: "eft-solved" });
  const show = () => { const [w, ans, choices] = words[k];
    lab.textContent = k === words.length - 1 ? t("L3_who") : `${k + 1} / ${words.length - 1}`;
    code.textContent = w.split("").join(" ");
    row.replaceChildren(...choices.map((c, ci) => h("button", { class: "eft-btn opt", type: "button", on: { click: () => {
      if (ci === ans) { say(fb, "✓ " + c, true); solved.textContent += (solved.textContent ? " · " : "") + c; k++; k >= words.length ? setTimeout(done, still ? 0 : 700) : show(); }
      else say(fb, t("try_again") + " " + t("L3_hint"), false); } } }, c))); };
  box.append(lab, code, row, solved); show();
}

// level 4: stack the fort wall
function stacker(box, fb, done) {
  const W = 300, need = 6, rowH = 34; let rows, cur, dir, x, w, raf, live = true;
  const field = h("div", { class: "eft-stack", style: `width:${W}px;height:${rowH * (need + 1) + 8}px` });
  const info = h("p", { class: "eft-small" });
  const drop = h("button", { class: "eft-btn", type: "button" }, t("L4_drop"));
  const block = (x, w, y, cls) => h("div", { class: "eft-stone " + (cls || ""), style: `left:${x}px;width:${w}px;bottom:${y}px;height:${rowH - 4}px` });
  const reset = () => { rows = [{ x: 70, w: 160 }]; field.replaceChildren(block(70, 160, 4, "base")); next(); };
  const next = () => { w = rows[rows.length - 1].w; x = 0; dir = 1; cur = block(x, w, 4 + rows.length * rowH, "moving"); field.append(cur);
    info.textContent = `${t("L4_rows")}: ${rows.length - 1} / ${need}`; };
  const speed = still ? 1.4 : 2.6;
  const tick = () => { if (!live) return; x += dir * speed * (1 + rows.length * 0.12); if (x <= 0) { x = 0; dir = 1; } if (x + w >= W) { x = W - w; dir = -1; }
    cur.style.left = x + "px"; raf = requestAnimationFrame(tick); };
  const doDrop = () => { const p = rows[rows.length - 1]; const l = Math.max(x, p.x), r = Math.min(x + w, p.x + p.w);
    if (r - l < 12) { say(fb, t("L4_fell"), false); field.classList.add("shake"); setTimeout(() => field.classList.remove("shake"), 400); reset(); return; }
    cur.style.left = l + "px"; cur.style.width = (r - l) + "px"; cur.classList.remove("moving");
    rows.push({ x: l, w: r - l }); fb.textContent = "";
    if (rows.length - 1 >= need) { live = false; cancelAnimationFrame(raf); info.textContent = `${t("L4_rows")}: ${need} / ${need}`; say(fb, "✓ " + t("well_done"), true); setTimeout(done, still ? 0 : 900); }
    else next(); };
  drop.addEventListener("click", doDrop); field.addEventListener("pointerdown", doDrop);
  box.append(info, field, h("div", { class: "eft-row" }, drop)); reset(); raf = requestAnimationFrame(tick);
  const stop = new MutationObserver(() => { if (!document.body.contains(field)) { live = false; cancelAnimationFrame(raf); stop.disconnect(); } });
  stop.observe(root, { childList: true });
}

// level 5: honest shop
function shop(box, fb, done) {
  const items = t("L5_shop"), picked = new Set();
  const tot = h("p", { class: "eft-small" }), list = h("div", { class: "eft-grid2" });
  const total = () => [...picked].reduce((s, i) => s + items[i][2], 0);
  const upd = () => { tot.textContent = `${t("L5_basket")}: ${total()} / 2 ${t("L5_coins")}`; };
  items.forEach(([name, label], i) => { const b = h("button", { class: "eft-btn opt", type: "button", "aria-pressed": "false", on: { click: () => {
    picked.has(i) ? picked.delete(i) : picked.add(i); b.setAttribute("aria-pressed", String(picked.has(i))); upd(); fb.textContent = ""; } } },
    h("span", {}, name), h("small", {}, `${label} ${t("L5_coins")}`)); list.append(b); });
  const pay = h("button", { class: "eft-btn", type: "button", on: { click: () => {
    const sum = total(), right = items.every((it, i) => (it[3] === 1) === picked.has(i));
    if (sum > 2) say(fb, t("L5_over"), false); else if (!right) say(fb, t("L5_wrong"), false); else { say(fb, "✓ " + t("well_done"), true); setTimeout(done, still ? 0 : 700); } } } }, t("L5_pay"));
  box.append(list, tot, h("div", { class: "eft-row" }, pay)); upd();
}

// level 6: find the true chola (index 2 is true: plain, long sleeves, no label)
function chola(box, fb, done) {
  const clues = t("L6_clues"), labels = t("L6_labels"); let shown = 1;
  const looks = [ { flashy: 1, long: 1 }, { flashy: 0, long: 0 }, { flashy: 0, long: 1 }, { flashy: 1, long: 0 } ];
  const clueBox = h("ol", { class: "eft-clues" }), more = h("button", { class: "eft-link", type: "button", on: { click: () => {
    if (shown < clues.length) shown++; drawClues(); } } }, t("L6_more_clue"));
  const drawClues = () => { clueBox.replaceChildren(...clues.slice(0, shown).map(c => h("li", {}, c))); more.hidden = shown >= clues.length; };
  const svg = ({ flashy, long }) => {
    const sl = long ? `<path d="M30 20 L12 30 L8 86 L18 87 L24 40 L32 36Z M70 20 L88 30 L92 86 L82 87 L76 40 L68 36Z" fill="var(--sl)" stroke="var(--edge)" stroke-width="1.4"/>`
                    : `<path d="M30 20 L16 28 L20 40 L31 35Z M70 20 L84 28 L80 40 L69 35Z" fill="var(--sl)" stroke="var(--edge)" stroke-width="1.4"/>`;
    const body = `<path d="M30 18 L70 18 L82 92 L18 92Z" fill="${flashy ? "#E8C35A" : "var(--robe)"}" stroke="var(--edge)" stroke-width="1.4"/><path d="M43 18 Q50 27 57 18" fill="none" stroke="var(--edge)" stroke-width="1.4"/>`;
    const bling = flashy ? [ [40,40],[58,52],[46,66],[62,76],[36,80],[54,34] ].map(([a,b]) => `<circle cx="${a}" cy="${b}" r="2.4" fill="#C8611E"/>`).join("") : "";
    const tas = Array.from({ length: 13 }, (_, k) => { const xx = 20 + k * 5; return `<line x1="${xx}" y1="92" x2="${xx}" y2="99" stroke="var(--edge)" stroke-width="1"/>`; }).join("");
    return `<svg viewBox="0 0 100 104" aria-hidden="true">${sl}${body}${bling}${tas}</svg>`; };
  const grid = h("div", { class: "eft-cholas" });
  looks.forEach((lk, i) => { const b = h("button", { class: "eft-chola", type: "button", on: { click: () => {
      if (i === 2) { say(fb, "✓ " + t("well_done"), true); b.classList.add("ok"); setTimeout(done, still ? 0 : 800); }
      else { say(fb, t("L6_poison"), false); b.disabled = true; b.classList.add("bad"); if (shown < clues.length) { shown++; drawClues(); } } } } });
    b.innerHTML = svg(lk); b.append(h("span", {}, labels[i] || " ")); b.setAttribute("aria-label", (labels[i] || "") + " " + (i + 1)); grid.append(b); });
  box.append(clueBox, more, grid); drawClues();
}

// level 7: partners (memory pairs)
function pairs(box, fb, done) {
  const icons = ["⚔️","🏰","🪔","🦁","🚩","🧥"]; const deck = shuffle([...icons, ...icons]);
  let open = [], found = 0, tries = 0, lock = false;
  const cnt = h("p", { class: "eft-small" }, `${t("L7_moves")}: 0`), grid = h("div", { class: "eft-pairs" });
  deck.forEach((ic, i) => { const b = h("button", { class: "eft-tile", type: "button", "aria-label": "?", on: { click: () => {
      if (lock || b.classList.contains("up")) return; b.classList.add("up"); b.textContent = ic; b.setAttribute("aria-label", ic); open.push(b);
      if (open.length === 2) { tries++; cnt.textContent = `${t("L7_moves")}: ${tries}`;
        const [a, c] = open; if (a.textContent === c.textContent) { a.classList.add("got"); c.classList.add("got"); open = []; found++;
          if (found === icons.length) { say(fb, "✓ " + t("well_done"), true); setTimeout(done, still ? 0 : 800); } }
        else { lock = true; setTimeout(() => { [a, c].forEach(x => { x.classList.remove("up"); x.textContent = ""; x.setAttribute("aria-label", "?"); }); open = []; lock = false; }, 800); } } } } });
    grid.append(b); });
  box.append(cnt, grid);
}

// levels 8 and 12: tap the steps in order
function order(key) { return (box, fb, done) => {
  const steps = t(key); let k = 0;
  const got = h("ol", { class: "eft-got" }), row = h("div", { class: "eft-col" });
  shuffle(steps.map((s, i) => [s, i])).forEach(([s, i]) => { const b = h("button", { class: "eft-btn opt", type: "button", on: { click: () => {
    if (i === k) { got.append(h("li", {}, s)); b.disabled = true; b.classList.add("used"); k++; fb.textContent = "";
      if (key === "L12_steps") got.lastChild.prepend(h("span", { class: "eft-deeva", "aria-hidden": "true" }, "🪔 "));
      if (k >= steps.length) { say(fb, "✓ " + t("well_done"), true); setTimeout(done, still ? 0 : 900); } }
    else say(fb, t("try_again"), false); } } }, s); row.append(b); });
  box.append(got, row);
}; }

// level 9: creep up on the sleeping Emperor
function creep(box, fb, done) {
  let pos = 0, holding = false, state = "asleep", timer, raf, live = true;
  const face = h("p", { class: "eft-face", "aria-hidden": "true" }, "😴"), status = h("p", { class: "eft-small", "aria-live": "polite" }, t("L9_asleep"));
  const track = h("div", { class: "eft-track" }), lion = h("span", { class: "eft-lion", "aria-hidden": "true" }, "🦁"), pillow = h("span", { class: "eft-pillow", "aria-hidden": "true" }, "🛏️");
  track.append(pillow, lion);
  const btn = h("button", { class: "eft-btn big", type: "button" }, t("L9_creep"));
  const set = s => { state = s; face.textContent = s === "asleep" ? "😴" : s === "stir" ? "😐" : "👀";
    status.textContent = t(s === "asleep" ? "L9_asleep" : s === "stir" ? "L9_stir" : "L9_awake"); };
  const cycle = () => { if (!live) return;
    if (state === "asleep") { set("stir"); timer = setTimeout(cycle, 700); }
    else if (state === "stir") { set("awake"); timer = setTimeout(cycle, 1000 + Math.random() * 900); }
    else { set("asleep"); timer = setTimeout(cycle, 1400 + Math.random() * 2200); } };
  const tick = () => { if (!live) return;
    if (holding) { if (state === "awake") { pos = 0; holding = false; say(fb, t("L9_caught"), false); }
      else { pos = Math.min(100, pos + (still ? 0.18 : 0.22)); } }
    lion.style.left = `calc(${pos}% * 0.86)`;
    if (pos >= 100) { live = false; clearTimeout(timer); btn.remove(); set("asleep");
      box.append(h("div", { class: "eft-row" }, h("button", { class: "eft-btn", type: "button", on: { click: () => { say(fb, "✓ " + t("L9_cure"), true); setTimeout(done, still ? 0 : 900); } } }, t("L9_cure")))); return; }
    raf = requestAnimationFrame(tick); };
  const on = e => { e.preventDefault(); holding = true; fb.textContent = ""; }, off = () => { holding = false; };
  btn.addEventListener("pointerdown", on); ["pointerup","pointerleave","pointercancel"].forEach(ev => btn.addEventListener(ev, off));
  btn.addEventListener("keydown", e => { if (e.key === " " || e.key === "Enter") on(e); }); btn.addEventListener("keyup", off);
  box.append(face, status, track, h("div", { class: "eft-row" }, btn));
  timer = setTimeout(cycle, 1800); raf = requestAnimationFrame(tick);
  const stop = new MutationObserver(() => { if (!document.body.contains(track)) { live = false; clearTimeout(timer); cancelAnimationFrame(raf); stop.disconnect(); } });
  stop.observe(root, { childList: true });
}

// level 10: pick the four true words
function pickTrue(box, fb, done) {
  const items = shuffle(t("L10_items").map((x, i) => [...x, i])), on = new Set();
  const col = h("div", { class: "eft-col" });
  items.forEach(([s, ok, i]) => { const b = h("button", { class: "eft-btn opt", type: "button", "aria-pressed": "false", on: { click: () => {
    on.has(i) ? on.delete(i) : on.add(i); b.setAttribute("aria-pressed", String(on.has(i))); fb.textContent = ""; } } }, s); col.append(b); });
  const chk = h("button", { class: "eft-btn", type: "button", on: { click: () => {
    if (on.size !== 4) return say(fb, t("L10_need"), false);
    const all = t("L10_items"); if ([...on].every(i => all[i][1] === 1)) { say(fb, "✓ " + t("well_done"), true); setTimeout(done, still ? 0 : 700); }
    else say(fb, t("try_again"), false); } } }, t("check"));
  box.append(col, h("div", { class: "eft-row" }, chk));
}

// level 11: guide every king out of the maze
function maze(box, fb, done) {
  const M = [ "#########",
              "#.....#.G",
              "#.###.#.#",
              "#.#...#.#",
              "#.#.#.#.#",
              "#...#...#",
              "###.#.###",
              "#K..#...#",
              "#########" ];
  const R = M.length, C = M[0].length; let king = 0; const total = 3; let kp;
  const start = () => { for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) if (M[r][c] === "K") return [r, c]; };
  const grid = h("div", { class: "eft-maze", style: `grid-template-columns:repeat(${C},1fr)` });
  const info = h("p", { class: "eft-small" });
  const draw = () => { grid.replaceChildren(); for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) {
      const ch = M[r][c]; const cell = h("span", { class: "eft-cell " + (ch === "#" ? "wall" : ch === "G" ? "gate" : "") });
      if (r === kp[0] && c === kp[1]) cell.textContent = "👑"; else if (ch === "G") cell.textContent = "🚪"; grid.append(cell); }
    info.textContent = `${t("L11_king")} ${king + 1} / ${total} · ${king} ${t("L11_out")}`; };
  const move = (dr, dc) => { const r = kp[0] + dr, c = kp[1] + dc; if (r < 0 || c < 0 || r >= R || c >= C || M[r][c] === "#") return;
    kp = [r, c]; if (M[r][c] === "G") { king++; if (king >= total) { draw(); info.textContent = `${total} / ${total} ${t("L11_out")}`; say(fb, "✓ " + t("well_done"), true); detach(); setTimeout(done, still ? 0 : 800); return; }
      say(fb, `✓ ${t("L11_king")} ${king} ${t("L11_out")}`, true); kp = start(); } draw(); };
  const key = e => { const m = { ArrowUp: [-1,0], ArrowDown: [1,0], ArrowLeft: [0,-1], ArrowRight: [0,1] }[e.key]; if (m && document.body.contains(grid)) { e.preventDefault(); move(...m); } };
  document.addEventListener("keydown", key); const detach = () => document.removeEventListener("keydown", key);
  let sx, sy; grid.addEventListener("touchstart", e => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  grid.addEventListener("touchend", e => { const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 24) return; Math.abs(dx) > Math.abs(dy) ? move(0, dx > 0 ? 1 : -1) : move(dy > 0 ? 1 : -1, 0); }, { passive: true });
  const pad = h("div", { class: "eft-pad" },
    h("button", { class: "eft-btn opt up", type: "button", "aria-label": "Up", on: { click: () => move(-1, 0) } }, "↑"),
    h("button", { class: "eft-btn opt left", type: "button", "aria-label": "Left", on: { click: () => move(0, -1) } }, "←"),
    h("button", { class: "eft-btn opt right", type: "button", "aria-label": "Right", on: { click: () => move(0, 1) } }, "→"),
    h("button", { class: "eft-btn opt down", type: "button", "aria-label": "Down", on: { click: () => move(1, 0) } }, "↓"));
  kp = start(); box.append(info, grid, h("p", { class: "eft-small" }, t("L11_left")), pad); draw();
  const stop = new MutationObserver(() => { if (!document.body.contains(grid)) { detach(); stop.disconnect(); } }); stop.observe(root, { childList: true });
}

const PUZ = [ sorter("L1_"), sorter("L2_"), backwards, stacker, shop, chola, pairs, order("L8_steps"), creep, pickTrue, maze, order("L12_steps") ];

/* ---------- the code and the certificate ---------- */
function finale() {
  const inp = h("input", { type: "text", class: "eft-input", autocomplete: "off", "aria-label": t("final_place"), placeholder: t("final_place") });
  const fb = h("p", { class: "eft-say", "aria-live": "polite" });
  const tiles = h("div", { class: "eft-tiles" }, LETTERS.map((L, i) => h("span", { class: [3, 8].includes(i) ? "gap" : "" }, st.done.includes(i) ? L : "?")));
  const check = () => { const v = inp.value.toUpperCase().replace(/[^A-Z]/g, "");
    if (v === "DATABANDICHHOR") go({ screen: "cert" }); else say(fb, t("final_wrong"), false); };
  inp.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
  const missing = [...Array(12).keys()].filter(i => !st.done.includes(i));
  frame(h("div", { class: "eft-card" },
    h("p", { class: "eft-k" }, t("letters")), h("h2", {}, t("final_title")), h("p", {}, t("final_text")), tiles,
    missing.length ? h("div", { class: "eft-row wrap" }, missing.map(i => h("button", { class: "eft-btn ghost", type: "button", on: { click: () => go({ screen: "level", n: i }) } }, `${t("level")} ${i + 1}`))) : "",
    h("div", { class: "eft-row" }, inp, h("button", { class: "eft-btn", type: "button", on: { click: check } }, t("check"))), fb));
}
function cert() {
  const name = h("input", { type: "text", class: "eft-input", autocomplete: "off", "aria-label": t("cert_name"), placeholder: t("cert_name") });
  const nameOut = h("p", { class: "eft-cert-name" });
  name.addEventListener("input", () => { nameOut.textContent = name.value; });
  const today = new Date().toLocaleDateString(lang === "pa" ? "pa-IN" : "en-GB", { day: "numeric", month: "long", year: "numeric" });
  frame(h("div", { class: "eft-card eft-win" },
    h("p", { class: "eft-k" }, t("final_right")),
    h("p", { class: "eft-big" }, "DATA BANDI CHHOR"), h("p", { class: "eft-gur", lang: "pa" }, "ਦਾਤਾ ਬੰਦੀ ਛੋੜ"),
    h("p", {}, t("meaning")),
    h("div", { class: "eft-cert", id: "eft-cert" },
      h("p", { class: "eft-k" }, t("cert_kicker") + " · Shaheedi Bunga"),
      h("p", { class: "eft-cert-title" }, t("cert_title")), nameOut, h("p", {}, t("cert_for")), h("p", { class: "eft-small" }, today)),
    h("div", { class: "eft-row wrap noprint" }, name, h("button", { class: "eft-btn", type: "button", on: { click: () => print() } }, t("print"))),
    h("p", { class: "eft-tip noprint" }, t("closing")),
    h("div", { class: "eft-row noprint" }, h("button", { class: "eft-btn ghost", type: "button", on: { click: () => { st.done = []; save(); go({ screen: "intro" }); } } }, t("again")))));
}

route();
})();
