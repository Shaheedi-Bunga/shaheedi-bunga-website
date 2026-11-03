/* ── Inner-pages redesign · draft kit ──────────────────────────────────────
   Shared behaviour: the mood switch, Lenis, the masthead, and four reveal
   attributes any page can use. Every element is visible by default; motion
   only ever moves things FROM somewhere, so a page with no JS, or with
   reduced motion, reads complete.

     data-split        lines rise out of their own mask, then the split is
                       undone so the gold is one piece of metal (never on Gurmukhi)
     data-fade         fades up as it enters
     data-scrub        words light from faint to full as you scroll through
     data-parallax="n" drifts n% of its height against the scroll        */

/* mood: each page sets data-mood in <head> before paint (light unless the
   viewer chose dark, or ?mood= asks for one). This is only the fallback. */
if(!document.documentElement.dataset.mood) document.documentElement.dataset.mood = "light";

window.KIT = (function(){
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var api = { reduce: reduce, lenis: null };

  /* the light/dark switch: a button in the masthead, remembered per viewer.
     The change is a cross-fade where the browser can do one, then every
     scroll scene re-measures, since the dark hero lays out differently. */
  var SUN  = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"/></svg>';
  var MOON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.6A8.2 8.2 0 0 1 9.4 4a8.2 8.2 0 1 0 10.6 10.6z"/></svg>';
  function moodSwitch(){
    var html = document.documentElement, m = document.querySelector(".mast");
    if(!m) return;
    var b = document.createElement("button");
    b.type = "button"; b.className = "theme";
    function paint(){
      var dark = html.dataset.mood === "dark";
      b.innerHTML = dark ? SUN : MOON;
      b.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
      b.setAttribute("aria-pressed", dark);
    }
    function apply(next){
      html.dataset.mood = next; paint();
      try{ localStorage.setItem("sb-mood", next); }catch(e){}
      if(window.ScrollTrigger) ScrollTrigger.refresh();
    }
    b.addEventListener("click", function(){
      var next = html.dataset.mood === "dark" ? "light" : "dark";
      if(document.startViewTransition && !reduce) document.startViewTransition(function(){ apply(next); });
      else apply(next);
    });
    paint();
    m.insertBefore(b, m.querySelector(".wa"));
  }

  /* the phone menu: a button that opens the links as a panel */
  function menu(){
    var btn = document.querySelector(".menu-btn"), nav = document.getElementById("site-nav"), html = document.documentElement;
    var m = document.querySelector(".mast");
    if(!btn || !nav || !m) return;
    function set(open, refocus){
      html.classList.toggle("menu-open", open);
      btn.setAttribute("aria-expanded", open);
      btn.querySelector("span").textContent = open ? "Close" : "Menu";
      html.style.setProperty("--mastH", m.offsetHeight + "px");
      if(api.lenis){ open ? api.lenis.stop() : api.lenis.start(); }
      if(open){ var a = nav.querySelector("a"); if(a) a.focus(); } else if(refocus) btn.focus();
    }
    btn.addEventListener("click", function(){ set(btn.getAttribute("aria-expanded") !== "true", true); });
    nav.addEventListener("click", function(e){ if(e.target.closest("a")) set(false); });
    addEventListener("keydown", function(e){ if(e.key === "Escape" && html.classList.contains("menu-open")) set(false, true); });
    matchMedia("(min-width: 1241px)").addEventListener("change", function(e){ if(e.matches) set(false); });
  }

  /* the Vidyale drop-down: a button that opens a panel. Click or Enter opens,
     Escape or a click elsewhere closes; on a phone it sits open in the menu. */
  function vidyale(){
    var w = document.querySelector(".vid"); if(!w) return;
    var b = w.querySelector(".vid-btn");
    function set(o){ b.setAttribute("aria-expanded", o); w.classList.toggle("open", o); }
    b.addEventListener("click", function(e){ e.stopPropagation(); set(b.getAttribute("aria-expanded") !== "true"); });
    document.addEventListener("click", function(e){ if(!w.contains(e.target)) set(false); });
    w.addEventListener("keydown", function(e){ if(e.key === "Escape" && w.classList.contains("open")){ e.stopPropagation(); set(false); b.focus(); } });
    w.addEventListener("focusout", function(e){ if(!w.contains(e.relatedTarget)) set(false); });
  }

  function mast(){
    var m = document.querySelector(".mast"), hero = document.querySelector("[data-hero]");
    if(!m) return;
    /* solid as soon as the page moves: over a full-screen picture a
       transparent bar's links cannot be read */
    function upd(){
      var y = api.lenis ? api.lenis.scroll : scrollY;
      m.classList.toggle("solid", y > 60);
    }
    upd(); addEventListener("scroll", upd, { passive:true });
  }

  /* api.rise(el, vars): a heading rises line by line from its own mask, with
     a short focus pull. While it is split, each gold word carries its own
     slice of ONE gradient, so the metal reads as one piece; when it lands the
     split is undone and the sheen crosses the whole phrase again. Returns the
     timeline, so a page can place it inside its own. */
  api.rise = function(el, vars){
    var s = SplitText.create(el, { type:"lines,words", wordsClass:"w", linesClass:"rise-ln", mask:"lines" });
    var gold = s.words.filter(function(w){ return w.closest("em:not(:lang(pa))"); }), x = 0, total = 0;
    gold.forEach(function(w){ total += w.offsetWidth; });
    gold.forEach(function(w){
      w.style.animation = "none";
      w.style.backgroundSize = (total * 2.2) + "px 100%";
      w.style.backgroundPosition = -(x + total * 1.2) + "px 0";
      x += w.offsetWidth;
    });
    var v = { onComplete:function(){ s.revert(); } };
    for(var k in vars) v[k] = vars[k];
    return gsap.timeline(v)
      .from(s.lines, { yPercent:105, duration:1.3, stagger:.12, ease:"expo.out" })
      .from(s.words, { filter:"blur(6px)", opacity:.4, duration:.9, stagger:.04, ease:"power2.out", clearProps:"filter,opacity" }, 0);
  };

  /* the hand: only on a fine pointer with motion allowed.
       .pcard, a.oncard   (not photo cards) lean up to 5 degrees toward the pointer (Gurmukhi moves
                          with its card as a whole, never on its own)
       .wa (not the mast) leans to meet the pointer, the label a little further
       a.venue, a.way     a soft light follows the pointer along the row
       the hero's gold    catches the light where the pointer is            */
  function hand(){
    if(reduce || !matchMedia("(hover:hover) and (pointer:fine)").matches) return;
    document.documentElement.classList.add("hand");
    document.querySelectorAll(".pcard:not(:has(img)), a.oncard").forEach(function(c){
      c.addEventListener("pointermove", function(e){
        var r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        c.style.setProperty("--ry", ((x - .5) * 10).toFixed(2) + "deg"); c.style.setProperty("--rx", ((.5 - y) * 8).toFixed(2) + "deg");
        c.style.setProperty("--mx", (x * 100).toFixed(1) + "%"); c.style.setProperty("--my", (y * 100).toFixed(1) + "%");
      });
      c.addEventListener("pointerleave", function(){ c.style.setProperty("--rx", "0deg"); c.style.setProperty("--ry", "0deg"); });
    });
    document.querySelectorAll(".wa").forEach(function(b){
      if(b.closest(".mast")) return;
      var tx = 0, ty = 0, x = 0, y = 0, raf = 0;
      function step(){ x += (tx - x) * .18; y += (ty - y) * .18;
        b.style.translate = x.toFixed(2) + "px " + y.toFixed(2) + "px";
        raf = (Math.abs(tx - x) + Math.abs(ty - y) > .05) ? requestAnimationFrame(step) : 0; }
      function kick(){ if(!raf) raf = requestAnimationFrame(step); }
      b.addEventListener("pointermove", function(e){ var r = b.getBoundingClientRect();
        tx = Math.max(-12, Math.min(12, (e.clientX - r.left - r.width / 2) * .25));
        ty = Math.max(-10, Math.min(10, (e.clientY - r.top - r.height / 2) * .35)); kick(); });
      b.addEventListener("pointerleave", function(){ tx = ty = 0; kick(); });
    });
    document.querySelectorAll("a.venue, a.way").forEach(function(r){
      r.addEventListener("pointermove", function(e){ var b = r.getBoundingClientRect();
        r.style.setProperty("--mx", (e.clientX - b.left).toFixed(0) + "px"); r.style.setProperty("--my", (e.clientY - b.top).toFixed(0) + "px"); });
    });
    document.querySelectorAll(".phero, [data-hero]").forEach(function(h){
      h.addEventListener("pointermove", function(e){
        var em = h.querySelector(".display em:not(:lang(pa))"); if(!em) return;
        var r = em.getBoundingClientRect(); h.classList.add("lit");
        h.style.setProperty("--lx", Math.max(-10, Math.min(110, (e.clientX - r.left) / r.width * 100)).toFixed(1) + "%");
        h.style.setProperty("--ly", Math.max(-40, Math.min(140, (e.clientY - r.top) / r.height * 100)).toFixed(1) + "%");
      });
    });
  }

  /* [data-silk]: gold silk moving on a navy surface. One fragment shader, our
     own (no library), drawn at half resolution and capped at 30 fps; it stops
     off-screen and in a hidden tab. Reduced motion draws one still frame; no
     WebGL leaves the surface's own gradient. TRIAL: on one page, for a phone check.
     Tuned so the brightest silk stays about rgb(79,74,66): the panel's .78
     cream text keeps ~5.5:1 on it. */
  function silk(){
    var FS = "precision mediump float;uniform float t;uniform vec2 r;"+
      "float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}"+
      "float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}"+
      "float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n(p);p*=2.02;a*=.5;}return v;}"+
      "void main(){vec2 uv=gl_FragCoord.xy/r;vec2 p=uv*vec2(r.x/r.y,1.)*2.2;float s=t*.035;"+
      "vec2 q=vec2(fbm(p+s),fbm(p+vec2(5.2,1.3)-s));vec2 w=vec2(fbm(p+3.*q+vec2(1.7,9.2)+s*1.4),fbm(p+3.*q+vec2(8.3,2.8)-s));"+
      "float f=fbm(p+2.5*w);float k=smoothstep(.38,.88,f+.3*sin(6.*w.x+t*.15));"+
      "vec3 navy=vec3(.035,.07,.16),deep=vec3(.02,.04,.10),gold=vec3(.86,.68,.33),pale=vec3(1.,.93,.74);"+
      "vec3 c=mix(deep,navy,uv.y+.2*q.x);c=mix(c,gold*.7,k*.42*(.35+uv.x*.5));c+=pale*pow(k,5.)*.1*(.3+uv.x);"+
      "gl_FragColor=vec4(c,1.);}";
    document.querySelectorAll("[data-silk]").forEach(function(el){
      var cv = document.createElement("canvas"); cv.className = "silk"; cv.setAttribute("aria-hidden", "true");
      var gl = cv.getContext("webgl", { antialias:false, alpha:false, powerPreference:"low-power" });
      if(!gl) return;
      function sh(type, src){ var x = gl.createShader(type); gl.shaderSource(x, src); gl.compileShader(x); return x; }
      var pr = gl.createProgram();
      gl.attachShader(pr, sh(gl.VERTEX_SHADER, "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}"));
      gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(pr);
      if(!gl.getProgramParameter(pr, gl.LINK_STATUS)) return;
      gl.useProgram(pr);
      gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 3,-1, -1,3]), gl.STATIC_DRAW);
      var loc = gl.getAttribLocation(pr, "p"); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      var uT = gl.getUniformLocation(pr, "t"), uR = gl.getUniformLocation(pr, "r");
      el.insertBefore(cv, el.firstChild); el.classList.add("has-silk");
      var t0 = performance.now(), last = 0, on = false, raf = 0;
      function draw(sec){ gl.uniform1f(uT, sec); gl.uniform2f(uR, cv.width, cv.height); gl.drawArrays(gl.TRIANGLES, 0, 3); }
      function size(){ var k = .5 * Math.min(devicePixelRatio || 1, 2);
        cv.width = Math.max(1, Math.round(cv.clientWidth * k)); cv.height = Math.max(1, Math.round(cv.clientHeight * k));
        gl.viewport(0, 0, cv.width, cv.height); draw(reduce ? 12 : (performance.now() - t0) / 1000); }
      function loop(now){ if(!on || document.hidden){ raf = 0; return; }
        if(now - last > 32){ last = now; draw((now - t0) / 1000); } raf = requestAnimationFrame(loop); }
      function go(){ if(!reduce && on && !document.hidden && !raf) raf = requestAnimationFrame(loop); }
      size(); addEventListener("resize", size);
      if("IntersectionObserver" in window) new IntersectionObserver(function(es){ on = es[0].isIntersecting; go(); }).observe(el);
      document.addEventListener("visibilitychange", go);
    });
  }

  function reveals(){
    var E = "expo.out";
    document.querySelectorAll("[data-split]").forEach(function(el){
      api.rise(el, { scrollTrigger:{ trigger:el, start:"top 88%" } });
    });
    document.querySelectorAll("[data-fade]").forEach(function(el){
      gsap.from(el, { opacity:0, y:28, duration:1.1, ease:E, delay:parseFloat(el.dataset.fade) || 0,
        scrollTrigger:{ trigger:el, start:"top 90%" } });
    });
    document.querySelectorAll("[data-scrub]").forEach(function(el){
      var s = SplitText.create(el, { type:"words" });
      /* .38, not lower: a reader who stops half way must still read every word */
      gsap.fromTo(s.words, { opacity:0.38 }, { opacity:1, stagger:0.1, ease:"none",
        scrollTrigger:{ trigger:el, start:"top 80%", end:"bottom 45%", scrub:0.6 } });
    });
    document.querySelectorAll("[data-parallax]").forEach(function(el){
      var n = parseFloat(el.dataset.parallax) || 12;
      gsap.fromTo(el, { yPercent:-n/2 }, { yPercent:n/2, ease:"none",
        scrollTrigger:{ trigger:el.parentElement, start:"top bottom", end:"bottom top", scrub:true } });
    });
  }

  /* today's column in any .week, whatever the motion setting */
  function today(){
    var d = new Date().getDay();
    document.querySelectorAll('.week .day[data-d="'+d+'"]').forEach(function(t){ t.classList.add("today"); });
  }

  /* the shared scenes, for components in the kit */
  function shared(){
    var E = "expo.out";
    /* a reading page's .phero: the heading rises word by word, the rest follows */
    var ph = document.querySelector(".phero");
    if(ph){
      gsap.timeline({ defaults:{ ease:E } })
        .from(ph.querySelectorAll(".eyebrow, .gur-line"), { opacity:0, y:14, duration:.9, stagger:.1 }, .1)
        .add(api.rise(ph.querySelector("h1")), .25)
        .from(ph.querySelectorAll(".lede, [data-intro-fade]"), { opacity:0, y:22, duration:1.1, stagger:.12 }, .7)
        .from(ph.querySelectorAll(".phero-art"), { opacity:0, y:40, duration:1.6 }, .3);
      ph.querySelectorAll(".phero-art img").forEach(function(im){
        gsap.to(im, { yPercent:-8, ease:"none", scrollTrigger:{ trigger:ph, start:"top top", end:"bottom top", scrub:true } });
      });
    }
    gsap.utils.toArray(".week").forEach(function(w){
      gsap.from(w.querySelectorAll(".day"), { opacity:0, y:40, duration:1, stagger:.07, ease:E, scrollTrigger:{ trigger:w, start:"top 85%" } });
    });
    gsap.utils.toArray(".invite .frame").forEach(function(f){
      gsap.from(f.querySelectorAll(".arch-line"), { clipPath:"inset(100% 0 0 0)", duration:1.8, stagger:.2, ease:"power3.inOut",
        scrollTrigger:{ trigger:f, start:"top 75%" } });
    });
    if(api.wide) gsap.utils.toArray(".promises").forEach(api.track);
  }

  /* any .toc: the link for the section in view is marked, and clicks glide */
  function tocs(){
    document.querySelectorAll(".policy .toc").forEach(function(toc){
      var links = toc.querySelectorAll("a");
      if("IntersectionObserver" in window){
        var io = new IntersectionObserver(function(es){
          es.forEach(function(e){ if(e.isIntersecting) links.forEach(function(a){ a.classList.toggle("on", a.hash === "#" + e.target.id); }); });
        }, { rootMargin:"-35% 0px -60% 0px" });
        links.forEach(function(a){ var s = document.querySelector(a.hash); if(s) io.observe(s); });
      }
      links.forEach(function(a){ a.addEventListener("click", function(e){
        if(!api.lenis) return; e.preventDefault(); api.lenis.scrollTo(a.hash, { offset:-90 });
      }); });
    });
  }

  /* a .promises section: vertical scroll drives its .ptrack sideways, and
     each card's numeral climbs in as the card arrives from the right */
  api.track = function(sec){
    var track = sec.querySelector(".ptrack"), fill = sec.querySelector(".pbar i");
    function dist(){ return track.scrollWidth - innerWidth + parseFloat(getComputedStyle(track).paddingLeft) * 2; }
    sec.style.setProperty("--trackH", (innerHeight + dist()) + "px");
    var move = gsap.to(track, { x:function(){ return -dist(); }, ease:"none",
      scrollTrigger:{ trigger:sec, start:"top top", end:"bottom bottom", scrub:.6, invalidateOnRefresh:true,
        onRefresh:function(){ sec.style.setProperty("--trackH", (innerHeight + dist()) + "px"); } } });
    if(fill) gsap.to(fill, { scaleX:1, ease:"none", scrollTrigger:{ trigger:sec, start:"top top", end:"bottom bottom", scrub:true } });
    track.querySelectorAll(".pcard").forEach(function(c){
      var n = c.querySelector(".num"); if(!n) return;
      gsap.from(n, { yPercent:45, opacity:.15, ease:"none",
        scrollTrigger:{ trigger:c, containerAnimation:move, start:"left 100%", end:"left 45%", scrub:true } });
    });
  };

  /* Silent loops: <video data-src> carries only a poster until a wide screen
     with motion allowed and no data-saver asks for it; it plays only in view. */
  function loops(){
    var vids = document.querySelectorAll("video[data-src]");
    var save = navigator.connection && navigator.connection.saveData;
    if(!vids.length || !api.wide || save || !("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){
        var v = e.target;
        if(e.isIntersecting){
          if(!v.src){ v.src = v.dataset.src; }
          var p = v.play(); if(p && p.catch) p.catch(function(){});
        } else v.pause();
      });
    }, { rootMargin:"200px 0px", threshold:0.15 });
    vids.forEach(function(v){ io.observe(v); });
  }

  api.start = function(pageScenes){
    moodSwitch(); menu(); vidyale(); today(); tocs();
    /* .cine: desktop with motion allowed. Pinned scenes exist only under it;
       a phone or a reduced-motion visitor gets the still layout. */
    api.wide = matchMedia("(min-width: 901px)").matches && !reduce;
    loops();
    silk();
    if(reduce || !window.gsap){ mast(); return; }
    if(api.wide) document.documentElement.classList.add("cine");
    gsap.registerPlugin(ScrollTrigger, SplitText);
    api.lenis = new Lenis({ lerp:0.085, smoothWheel:true });
    api.lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function(t){ api.lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
    mast();
    document.fonts.ready.then(function(){
      if(pageScenes) pageScenes(gsap, ScrollTrigger);
      shared();
      reveals();
      hand();
      ScrollTrigger.refresh();
    });
  };
  return api;
})();
