/* Raag Explorer — UI logic (vanilla JS, no build step) */
(function () {
  "use strict";

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  var THAAT_COLOR = {};
  var thaatColor = function (t) {
    if (THAAT_COLOR[t]) return THAAT_COLOR[t];
    var v = getComputedStyle(document.documentElement).getPropertyValue("--thaat-" + String(t).replace(/\s+/g, ""));
    if (!(v && v.trim())) console.warn("Raag Explorer: no colour for thaat '" + t + "' (add --thaat-" + t + " to styles.css)");
    return (THAAT_COLOR[t] = (v && v.trim()) || "#8E681D");
  };

  // Gurmukhi nukta letters exist twice in Unicode (ਸ਼ = U+0A36 or ਸ + ਼); compare in one form.
  function norm(s) { return String(s || "").toLowerCase().normalize("NFD"); }
  // varjit holds "<varjit text> [<the book's swar note>]"; shown as two separate facts.
  function splitVarjit(v) {
    var m = String(v || "").match(/^(.*?)\s*\[([^\]]+)\]\s*$/);
    return m ? { varjit: m[1] || "None", swar: m[2] } : { varjit: v || "None", swar: "" };
  }
  var VADI_FULL = { Sa: "Shadaj", Re: "Rishabh", Ga: "Gandhar", Ma: "Madhyam", Pa: "Pancham", Dha: "Dhaivat", Ni: "Nishad" };

  // ---- Build the combined index (parents + variants) ----
  var VARIANT_LIST = (typeof VARIANTS !== "undefined") ? VARIANTS : [];

  // ---- Derive inline komal/tivra marks on swar strings ----
  // The book prints aroha/avaroha/pakad with plain letters and states the altered
  // swars in its ਸੁਰ column (stored here in varjit [brackets]). For display we mark
  // them inline: komal = aunkar (ਰੁ ਗੁ ਧੁ ਨੁ) / lowercase in Roman; tivra Ma = ਮੇ / Ma'.
  // Entries transcribed with inline marks already are left untouched. Bracket info
  // wins over thaat defaults; "both X" swars stay plain (form varies by phrase).
  var THAAT_SWARS = {
    "Bilawal": {}, "Khamaj": { Ni: "k" }, "Kafi": { Ga: "k", Ni: "k" },
    "Asavari": { Ga: "k", Dha: "k", Ni: "k" }, "Bhairavi": { Re: "k", Ga: "k", Dha: "k", Ni: "k" },
    "Bhairav": { Re: "k", Dha: "k" }, "Kalyan": { Ma: "t" }, "Marwa": { Re: "k", Ma: "t" },
    "Purvi": { Re: "k", Dha: "k", Ma: "t" }, "Todi": { Re: "k", Ga: "k", Dha: "k", Ma: "t" }
  };
  var HAS_MARK = /[ਰਗਧਨ]ੁ|ਮੇ/;
  var SWAR_NAME = { "ਰੇ": "Re", "ਗ": "Ga", "ਮ": "Ma", "ਧ": "Dha", "ਨੀ": "Ni" };
  function parseSwarBracket(txt) {
    var alt = {}, mode = null, ok = false;
    var frags = txt.split(/[;,]/);
    for (var i = 0; i < frags.length; i++) {
      var f = frags[i].trim();
      if (!f || /ਅਲਪ/.test(f)) continue;
      if (/ਸਾਰੇ ਸ਼ੁੱਧ|all shudh/i.test(f)) { ok = true; continue; }
      var m = null;
      if (/ਕੋਮਲ|komal/i.test(f)) m = "k";
      else if (/ਤੀਬਰ|ਤੀਵਰ|tivra/i.test(f)) m = "t";
      else if (/ਦੋਵੇਂ|both/i.test(f)) m = "b";
      else if (/shudh/i.test(f)) m = "s";
      if (m) { mode = m; ok = true; }
      if (!mode) return null;
      var swars = [];
      var en = f.match(/\b(Re|Ga|Ma|Dha|Ni)\b/g);
      if (en) swars = swars.concat(en);
      var pa = f.match(/ਰੇ|ਨੀ|ਧ|ਮ|ਗ/g);
      if (pa) for (var j = 0; j < pa.length; j++) swars.push(SWAR_NAME[pa[j]]);
      for (var k = 0; k < swars.length; k++) alt[swars[k]] = mode;
    }
    return ok ? alt : null;
  }
  var KOMAL_FORM = { "ਰੇ": "ਰੁ", "ਰੇਂ": "ਰੁਂ", "ਗ": "ਗੁ", "ਗਾਂ": "ਗੁਂ", "ਧ": "ਧੁ", "ਧਂ": "ਧੁਂ", "ਨੀ": "ਨੁ", "ਨੀਂ": "ਨੁਂ", "ਨੀਨੀ": "ਨੁਨੁ" };
  var BASE_SWAR = { "ਰੇ": "Re", "ਰੇਂ": "Re", "ਗ": "Ga", "ਗਾਂ": "Ga", "ਮ": "Ma", "ਧ": "Dha", "ਧਂ": "Dha", "ਨੀ": "Ni", "ਨੀਂ": "Ni", "ਨੀਨੀ": "Ni" };
  function markSwarString(s, alt) {
    return s.split(/(\s+|,|-|–)/).map(function (tok) {
      var base = BASE_SWAR[tok];
      if (!base || !alt[base]) return tok;
      if (alt[base] === "k") return KOMAL_FORM[tok] || tok;
      if (alt[base] === "t" && tok === "ਮ") return "ਮੇ";
      return tok;
    }).join("");
  }
  function applyMarks(r) {
    var joined = (r.aroha || "") + " " + (r.avaroha || "") + " " + (r.pakad || "");
    if (HAS_MARK.test(joined)) return;
    var br = (r.varjit || "").match(/\[([^\]]+)\]/);
    var alt = br ? parseSwarBracket(br[1]) : null;
    if (!alt) { alt = THAAT_SWARS[r.thaat] || {}; r.marksFromThaat = true; }
    ["aroha", "avaroha", "pakad"].forEach(function (f) { if (r[f]) r[f] = markSwarString(r[f], alt); });
  }
  RAAGS.forEach(applyMarks);
  VARIANT_LIST.forEach(applyMarks);

  var parentBySlug = {};
  RAAGS.forEach(function (r) { r.isParent = true; r.parentName = null; parentBySlug[r.slug] = r; });

  var childrenOf = {};
  VARIANT_LIST.forEach(function (v) {
    v.isParent = false;
    // a raag from another source can carry its own slug; book variants use family + number
    v.slug = v.slug || (v.parent + "-v" + v.variantNum);
    v.id = 1000 + (parentBySlug[v.parent] ? parentBySlug[v.parent].id : 0) * 100 + v.variantNum;
    var p = parentBySlug[v.parent];
    v.parentName = p ? p.name : v.parent;
    v.parentGurmukhi = p ? p.gurmukhi : "";
    (childrenOf[v.parent] = childrenOf[v.parent] || []).push(v);
  });
  Object.keys(childrenOf).forEach(function (k) {
    childrenOf[k].sort(function (a, b) { return a.variantNum - b.variantNum; });
  });

  var ALL = RAAGS.concat(VARIANT_LIST);

  // ---- Safety for raags added from other sources ----
  // Every text field is put into the page as HTML, so escape it once here (after the swar
  // marks above have been worked out). Slugs become [a-z0-9-] only and must be unique.
  var ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  function esc(v) { return typeof v === "string" ? v.replace(/[&<>"']/g, function (c) { return ESC[c]; }) : v; }
  var TEXT_FIELDS = ["name", "gurmukhi", "thaat", "vadi", "samvadi", "varjit", "jaati", "timePunjabi",
                     "timeEnglish", "aroha", "avaroha", "pakad", "note", "parentName", "parentGurmukhi"];
  var seenSlug = {};
  ALL.forEach(function (r) {
    TEXT_FIELDS.forEach(function (f) { if (r[f] != null) r[f] = esc(r[f]); });
    r.slug = String(r.slug).toLowerCase().replace(/[^a-z0-9-]+/g, "-");
    if (seenSlug[r.slug]) console.warn("Raag Explorer: duplicate slug '" + r.slug + "' (" + r.name + ") — give it its own slug");
    seenSlug[r.slug] = true;
    if (!r.isParent && !parentBySlug[r.parent]) console.warn("Raag Explorer: '" + r.name + "' names a parent '" + r.parent + "' that is not in RAAGS");
  });
  var bySlug = {};
  ALL.forEach(function (r) { bySlug[r.slug] = r; });

  // ---- Derived option lists (from parents; variants share the same universe) ----
  var thaats = [];
  ALL.forEach(function (r) { if (thaats.indexOf(r.thaat) < 0) thaats.push(r.thaat); });
  thaats.sort();
  // Canonical pahir buckets (by centerHour) — the raw timeEnglish strings vary
  // too much across the book to be useful as filter options.
  var TIME_BUCKETS = [
    { key: "d1", label: "Dawn · Day 1st pahir (6–9 AM)", from: 6, to: 9 },
    { key: "d2", label: "Day 2nd pahir (9 AM–12 PM)", from: 9, to: 12 },
    { key: "d3", label: "Day 3rd pahir (12–3 PM)", from: 12, to: 15 },
    { key: "d4", label: "Day 4th pahir (3–6 PM)", from: 15, to: 18 },
    { key: "n1", label: "Dusk · Night 1st pahir (6–9 PM)", from: 18, to: 21 },
    { key: "n2", label: "Night 2nd pahir (9 PM–12 AM)", from: 21, to: 24 },
    { key: "n3", label: "Midnight · Night 3rd pahir (12–3 AM)", from: 0, to: 3 },
    { key: "n4", label: "Night 4th pahir (3–6 AM)", from: 3, to: 6 }
  ];
  function timeBucketKey(h) {
    for (var i = 0; i < TIME_BUCKETS.length; i++) {
      if (h >= TIME_BUCKETS[i].from && h < TIME_BUCKETS[i].to) return TIME_BUCKETS[i].key;
    }
    return "n3";
  }

  // ---- State ----
  var state = { q: "", time: "", thaat: "", sort: "name", showVariants: false };

  function init() {
    var ft = $("#filterTime"), fh = $("#filterThaat");
    TIME_BUCKETS.forEach(function (b) { ft.insertAdjacentHTML("beforeend", '<option value="' + b.key + '">' + b.label + "</option>"); });
    thaats.forEach(function (t) { fh.insertAdjacentHTML("beforeend", '<option value="' + t + '">' + t + "</option>"); });
    $("#statCount").textContent = RAAGS.length;
    if ($("#statVariants")) $("#statVariants").textContent = VARIANT_LIST.length;
    $("#statThaats").textContent = thaats.length;

    $("#legend").innerHTML = '<span class="li" style="color:var(--ink);font-weight:800">Thaats:</span>' +
      thaats.map(function (t) {
        return '<span class="li"><span class="dot" style="background:' + thaatColor(t) + '"></span>' + t + "</span>";
      }).join("") +
      '<span class="li notation-note">Notation: <b>ਗੁ / ga</b> = komal (lowercase) · <b>ਮੇ / Ma\'</b> = tivra Ma · <b>Ṡa</b> = upper octave</span>';

    $("#search").addEventListener("input", function (e) { state.q = norm(e.target.value.trim()); render(); });
    ft.addEventListener("change", function (e) { state.time = e.target.value; render(); });
    fh.addEventListener("change", function (e) { state.thaat = e.target.value; render(); });
    $("#sortBy").addEventListener("change", function (e) { state.sort = e.target.value; render(); });

    var tv = $("#toggleVariants");
    if (tv) tv.addEventListener("click", function () {
      state.showVariants = !state.showVariants;
      tv.setAttribute("aria-pressed", state.showVariants ? "true" : "false");
      tv.classList.toggle("primary", state.showVariants);
      tv.textContent = (state.showVariants ? "− Hide variants" : "＋ Show variants");
      render();
    });

    $("#openClock").addEventListener("click", openClock);
    $("#closeClock").addEventListener("click", closeClock);
    $("#clockBack").addEventListener("click", function (e) { if (e.target === this) closeClock(); });
    $("#modalBack").addEventListener("click", function (e) { if (e.target === this) closeModal(); });
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      if ($("#modalBack").classList.contains("open")) closeModal(); else closeClock();
    });

    // one listener for every card (cards are redrawn on each search keystroke)
    function activate(e) {
      var el = e.target.closest(".card[data-slug]"); if (!el) return;
      if (e.type === "keydown" && e.key !== "Enter" && e.key !== " ") return;
      if (e.type === "keydown") e.preventDefault();
      openModal(el.getAttribute("data-slug"));
    }
    $("#grid").addEventListener("click", activate);
    $("#grid").addEventListener("keydown", activate);

    render();
  }

  function pool() { return state.showVariants ? ALL : RAAGS; }

  function filtered(src) {
    var list = (src || pool()).filter(function (r) {
      if (state.time && timeBucketKey(r.centerHour) !== state.time && !/\ball\b/i.test(r.timeEnglish)) return false;
      if (state.thaat && r.thaat !== state.thaat) return false;
      if (state.q) {
        if (!r._hay) r._hay = norm(r.name + " " + r.gurmukhi + " " + (r.parentName || ""));
        if (r._hay.indexOf(state.q) < 0) return false;
      }
      return true;
    });
    var s = state.sort;
    list.sort(function (a, b) {
      if (s === "name") return a.name.localeCompare(b.name);
      if (s === "thaat") return a.thaat.localeCompare(b.thaat) || a.name.localeCompare(b.name);
      if (s === "time") return a.centerHour - b.centerHour || a.name.localeCompare(b.name);
      return a.id - b.id;
    });
    return list;
  }

  function render() {
    var list = filtered();
    var rl = $("#resultLine");
    var parents = list.filter(function (r) { return r.isParent; }).length;
    var vars = list.length - parents;
    var bits = "<b>" + list.length + "</b> raag" + (list.length === 1 ? "" : "s");
    if (state.showVariants) bits += ' <span style="color:var(--ink-faint)">(' + parents + " main · " + vars + " variants)</span>";
    var hidden = (!state.showVariants && (state.q || state.time || state.thaat)) ? filtered(VARIANT_LIST).length : 0;
    if (hidden) bits += ' <button type="button" class="chip-clear" id="showHidden">+ ' + hidden + ' matching variant' + (hidden === 1 ? "" : "s") + ': show</button>';
    if (state.time || state.thaat || state.q) bits += ' <button type="button" class="chip-clear" id="clearAll">✕ clear filters</button>';
    rl.innerHTML = bits;
    if ($("#clearAll")) $("#clearAll").addEventListener("click", clearAll);
    if ($("#showHidden")) $("#showHidden").addEventListener("click", function () { $("#toggleVariants").click(); });

    var grid = $("#grid");
    if (!list.length) {
      grid.innerHTML = '<div class="empty" style="grid-column:1/-1"><div class="big" aria-hidden="true">🎐</div><div>No raag matches that. Try clearing a filter.</div></div>';
      return;
    }
    grid.innerHTML = list.map(cardHTML).join("");
  }

  function cardHTML(r) {
    var c = thaatColor(r.thaat);
    return '<article class="card' + (r.isParent ? "" : " variant") + '" data-slug="' + r.slug + '" style="--accent:' + c + '" tabindex="0" role="button" aria-label="' + r.name + (r.isParent ? "" : ", " + r.parentName + " family") + ': open details">' +
      '<div class="card-head"><div>' +
        '<div class="card-name">' + r.name + '</div>' +
        '<div class="card-gur" lang="pa">' + r.gurmukhi + '</div>' +
      '</div></div>' +
      '<div class="badges">' +
        '<span class="badge thaat">' + r.thaat + '</span>' +
        '<span class="badge time"><span aria-hidden="true">🕐 </span>' + r.timeEnglish + '</span>' +
        (r.isParent
          ? (r.sggs ? '<span class="badge sggs">✦ Sri Guru Granth Sahib Ji raag</span>' : '')
          : '<span class="badge variant-badge">↳ ' + r.parentName + ' family</span>') +
      '</div>' +
      '<div class="card-swar"><span class="lbl">Aroha</span><br>' + transliterateSwar(r.aroha) + '</div>' +
    '</article>';
  }

  function clearAll() {
    state.q = ""; state.time = ""; state.thaat = "";
    $("#search").value = ""; $("#filterTime").value = ""; $("#filterThaat").value = "";
    render();
  }

  // ---- Detail modal ----
  function openModal(slug) {
    var r = bySlug[slug];
    if (!r) return;
    var c = thaatColor(r.thaat);
    var sameThaat = pool().filter(function (x) { return x.thaat === r.thaat && x.slug !== r.slug; }).slice(0, 12);
    var sameTime = pool().filter(function (x) { return x.timeEnglish === r.timeEnglish && x.slug !== r.slug; }).slice(0, 12);
    var kids = r.isParent ? (childrenOf[r.slug] || []) : [];

    function fact(k, v, sub) {
      return '<div class="fact"><div class="k">' + k + '</div><div class="v">' + v + (sub ? '<small lang="pa">' + sub + '</small>' : '') + '</div></div>';
    }
    var vj = splitVarjit(r.varjit);
    var swarText = vj.swar ? vj.swar.charAt(0).toUpperCase() + vj.swar.slice(1) : "";
    function swarBlock(label, gur) {
      return '<div class="swar-block"><h4>' + label + '</h4><div class="swar-line">' +
        '<div class="roman">' + transliterateSwar(gur) + '</div><div class="gur" lang="pa">' + gur + '</div></div></div>';
    }
    function pills(arr) {
      if (!arr.length) return '<div class="none">— none in this set —</div>';
      return arr.map(function (x) {
        return '<button class="pill" data-goto="' + x.slug + '" style="--accent:' + thaatColor(x.thaat) + '">' +
          '<span class="dot" style="background:' + thaatColor(x.thaat) + '"></span>' + x.name +
          ' <small lang="pa">' + x.gurmukhi + '</small></button>';
      }).join("");
    }

    var eyebrow = r.isParent
      ? (kids.length ? '<div class="modal-eyebrow">Family of ' + (kids.length + 1) + ' raags</div>' : '')
      : '<div class="modal-eyebrow">↳ Variant of <button class="link-parent" data-goto="' + r.parent + '">' + r.parentName + '</button> family</div>';

    var html =
      '<div class="modal-hd" style="--accent:' + c + '">' +
        '<button type="button" class="close" id="closeModal" aria-label="Close">×</button>' +
        eyebrow +
        '<h2 id="modalTitle">' + r.name + '</h2>' +
        '<div class="gur" lang="pa">' + r.gurmukhi + '</div>' +
        '<div class="subline">' +
          '<span class="badge">' + r.thaat + ' thaat</span>' +
          '<span class="badge"><span aria-hidden="true">🕐 </span>' + r.timeEnglish + '</span>' +
          (r.isParent && r.sggs ? '<span class="badge">✦ Sri Guru Granth Sahib Ji raag</span>' : '') +
        '</div>' +
      '</div>' +
      '<div class="modal-body">' +
        (r.note ? '<div class="note-box">' + r.note + '</div>' : '') +
        '<div class="facts">' +
          fact("Thaat", r.thaat) +
          fact("Vadi", r.vadi, VADI_FULL[r.vadi] || "") +
          fact("Samvadi", r.samvadi, VADI_FULL[r.samvadi] || "") +
          fact("Jaati", r.jaati) +
          fact("Varjit swar", vj.varjit) +
          (swarText ? fact("Swar", swarText) : "") +
          fact("Time (samay)", r.timeEnglish, r.timePunjabi) +
        '</div>' +
        swarBlock("Aroha (ascending)", r.aroha) +
        swarBlock("Avaroha (descending)", r.avaroha) +
        swarBlock("Pakad (catch-phrase)", r.pakad) +
        '<div class="related">' +
          (kids.length ? '<h3>Variants in this family <span style="color:' + c + '">(' + kids.length + ')</span></h3><div class="related-row">' + pills(kids) + '</div>' : '') +
          '<h3>Same thaat — <span style="color:' + c + '">' + r.thaat + '</span></h3><div class="related-row">' + pills(sameThaat) + '</div>' +
          '<h3>Same time — ' + r.timeEnglish + '</h3><div class="related-row">' + pills(sameTime) + '</div>' +
        '</div>' +
      '</div>';

    var wasOpen = $("#modalBack").classList.contains("open");
    if (!wasOpen && !lastFocus) lastFocus = document.activeElement;
    $("#modal").innerHTML = html;
    $("#modal").setAttribute("aria-labelledby", "modalTitle");
    $("#modalBack").classList.add("open");
    document.body.style.overflow = "hidden";
    setPageInert(true);
    $("#closeModal").addEventListener("click", closeModal);
    $("#closeModal").focus();
    $$("#modal .pill, #modal .link-parent").forEach(function (p) {
      p.addEventListener("click", function () { openModal(p.getAttribute("data-goto")); $("#modal").scrollTop = 0; $("#modalBack").scrollTop = 0; });
    });
    $("#modalBack").scrollTop = 0;
  }

  // While a dialog is open the page behind it is inert: no tabbing into it, not read out.
  var lastFocus = null;
  // Return focus to whatever opened the dialog; if that was nothing focusable,
  // never leave focus sitting on a button inside a now-hidden dialog.
  function restoreFocus() {
    var el = lastFocus; lastFocus = null;
    if (el && el !== document.body && document.contains(el) && el.offsetParent !== null) { el.focus(); return; }
    var a = document.activeElement;
    if (a && a.closest && a.closest("#modalBack, #clockBack")) a.blur();
  }
  function setPageInert(on) {
    ["header.hero", ".toolbar", "main", "footer.site"].forEach(function (sel) {
      var el = $(sel); if (!el) return;
      if (on) el.setAttribute("inert", ""); else el.removeAttribute("inert");
    });
  }
  function closeModal() {
    if (!$("#modalBack").classList.contains("open")) return;
    $("#modalBack").classList.remove("open"); document.body.style.overflow = ""; setPageInert(false);
    restoreFocus();
  }

  // ---- Raag Clock (parents only, to keep the wheel legible) ----
  var CX = 160, CY = 160, R = 118;
  function hourToAngle(h) { return (h / 24) * 360 - 90; }
  function polar(cx, cy, r, deg) { var a = deg * Math.PI / 180; return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) }; }
  function hourDiff(c, h) { return Math.min(Math.abs(c - h), 24 - Math.abs(c - h)); }
  function raagsForHour(h) {
    return RAAGS.filter(function (r) { return hourDiff(r.centerHour, h) <= 2.0; });
  }
  function variantsForHour(h) {
    return VARIANT_LIST.filter(function (v) { return hourDiff(v.centerHour, h) <= 2.0; })
      .sort(function (a, b) { return hourDiff(a.centerHour, h) - hourDiff(b.centerHour, h); });
  }

  function buildClock() {
    var svg = $("#clockSvg");
    var parts = [];
    parts.push('<circle cx="160" cy="160" r="140" fill="#fbfbfc" stroke="#e7e9ef" stroke-width="1"/>');
    parts.push('<circle cx="160" cy="160" r="118" fill="#fff" stroke="#d4d8e2" stroke-width="1"/>');
    for (var h = 0; h < 24; h++) {
      var a = hourToAngle(h);
      var p1 = polar(CX, CY, 134, a), p2 = polar(CX, CY, (h % 6 === 0 ? 124 : 129), a);
      parts.push('<line x1="' + p1.x.toFixed(1) + '" y1="' + p1.y.toFixed(1) + '" x2="' + p2.x.toFixed(1) + '" y2="' + p2.y.toFixed(1) + '" stroke="#c7cede" stroke-width="' + (h % 6 === 0 ? 2 : 1) + '"/>');
      if (h % 3 === 0) {
        var pl = polar(CX, CY, 149, a);
        var lbl = (h === 0 ? "12a" : h === 12 ? "12p" : h < 12 ? h + "a" : (h - 12) + "p");
        parts.push('<text x="' + pl.x.toFixed(1) + '" y="' + (pl.y + 3).toFixed(1) + '" font-size="10" fill="#4a5568" text-anchor="middle" font-family="Inter,sans-serif">' + lbl + "</text>");
      }
    }
    parts.push('<text x="160" y="52" font-size="13" text-anchor="middle" aria-hidden="true">🌙</text>');
    parts.push('<text x="160" y="290" font-size="13" text-anchor="middle" aria-hidden="true">☀️</text>');
    var byHour = {};
    RAAGS.forEach(function (r) { var key = Math.round(r.centerHour * 2); (byHour[key] = byHour[key] || []).push(r); });
    Object.keys(byHour).forEach(function (k) {
      byHour[k].forEach(function (r, i) {
        var rr = R - i * 15, a = hourToAngle(r.centerHour), pt = polar(CX, CY, rr, a);
        parts.push('<circle class="clock-dot" data-slug="' + r.slug + '" tabindex="0" role="button" aria-label="' + r.name + ', ' + r.timeEnglish + '" cx="' + pt.x.toFixed(1) + '" cy="' + pt.y.toFixed(1) + '" r="6" fill="' + thaatColor(r.thaat) + '" stroke="#fff" stroke-width="1.5"><title>' + r.name + ' — ' + r.timeEnglish + '</title></circle>');
      });
    });
    var now = new Date(), nowH = now.getHours() + now.getMinutes() / 60, na = hourToAngle(nowH), np = polar(CX, CY, 112, na);
    parts.push('<line x1="160" y1="160" x2="' + np.x.toFixed(1) + '" y2="' + np.y.toFixed(1) + '" stroke="#bd8814" stroke-width="2.5" stroke-linecap="round"/>');
    parts.push('<circle cx="160" cy="160" r="5" fill="#bd8814"/>');
    svg.innerHTML = parts.join("");
    $$(".clock-dot", svg).forEach(function (d) {
      function go(e) {
        if (e.type === "keydown" && e.key !== "Enter" && e.key !== " ") return;
        e.preventDefault(); closeClock(true); openModal(d.getAttribute("data-slug"));
      }
      d.addEventListener("click", go); d.addEventListener("keydown", go);
    });
  }

  function updateNowBanner() {
    var now = new Date(), nowH = now.getHours() + now.getMinutes() / 60, hh = now.getHours(), mm = now.getMinutes();
    var t12 = ((hh % 12) || 12) + ":" + (mm < 10 ? "0" : "") + mm + " " + (hh < 12 ? "AM" : "PM");
    var list = raagsForHour(nowH);
    if (!list.length) {
      list = RAAGS.slice().sort(function (a, b) {
        return Math.min(Math.abs(a.centerHour - nowH), 24 - Math.abs(a.centerHour - nowH)) -
               Math.min(Math.abs(b.centerHour - nowH), 24 - Math.abs(b.centerHour - nowH));
      }).slice(0, 2);
    }
    var vlist = variantsForHour(nowH);
    $("#nowBanner").innerHTML = '<div class="time">🕐 It\'s ' + t12 + ' — raags that suit this moment:</div>' +
      '<div class="list">' + list.map(function (r) { return '<b>' + r.name + '</b> (' + r.gurmukhi + ')'; }).join(" · ") +
      (vlist.length ? ' · <span class="vcount">+ ' + vlist.length + ' variant raag' + (vlist.length === 1 ? "" : "s") + ' ↓</span>' : "") + "</div>";
    showClockSide(list, "Raags for right now", vlist);
  }

  function showClockSide(list, title, vlist) {
    $("#clockSideTitle").textContent = title;
    var html = list.map(function (r) {
      return '<div class="list-item" data-slug="' + r.slug + '" tabindex="0" role="button"><span class="dot" style="background:' + thaatColor(r.thaat) + '"></span>' +
        '<span class="nm">' + r.name + '</span><span class="tm">' + r.timeEnglish + '</span></div>';
    }).join("");
    if (vlist && vlist.length) {
      html += '<div class="list-subhead">Variants for right now (' + vlist.length + ')</div>';
      html += vlist.map(function (v) {
        var parent = parentBySlug[v.parent];
        return '<div class="list-item variant" data-slug="' + v.slug + '" tabindex="0" role="button"><span class="dot" style="background:' + thaatColor(v.thaat) + '"></span>' +
          '<span class="nm">' + v.name + ' <span class="vparent">· ' + (parent ? parent.name : v.parent) + '</span></span>' +
          '<span class="tm">' + v.timeEnglish + '</span></div>';
      }).join("");
    }
    $("#clockSideList").innerHTML = html;
    $$(".list-item", $("#clockSideList")).forEach(function (el) {
      function go(e) {
        if (e.type === "keydown" && e.key !== "Enter" && e.key !== " ") return;
        e.preventDefault(); closeClock(true); openModal(el.getAttribute("data-slug"));
      }
      el.addEventListener("click", go); el.addEventListener("keydown", go);
    });
  }

  function openClock() {
    lastFocus = document.activeElement;
    buildClock(); updateNowBanner(); $("#clockBack").classList.add("open"); document.body.style.overflow = "hidden";
    setPageInert(true); $("#closeClock").focus();
  }
  // toModal: the clock closes because a raag is opening; keep the page locked and keep
  // the remembered Raag Clock button, so closing that raag returns focus there.
  function closeClock(toModal) {
    if (!$("#clockBack").classList.contains("open")) return;
    $("#clockBack").classList.remove("open");
    if (toModal) return;
    document.body.style.overflow = ""; setPageInert(false);
    restoreFocus();
  }

  init();
})();
