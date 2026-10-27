/* ── Inner-pages redesign · draft kit ──────────────────────────────────────
   Shared behaviour: the mood switch, Lenis, the masthead, and four reveal
   attributes any page can use. Every element is visible by default; motion
   only ever moves things FROM somewhere, so a page with no JS, or with
   reduced motion, reads complete.

     data-split        words rise out of their own line (never on Gurmukhi)
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

  function reveals(){
    var E = "expo.out";
    document.querySelectorAll("[data-split]").forEach(function(el){
      var s = SplitText.create(el, { type:"words", wordsClass:"w", mask:"words" });
      gsap.from(s.words, { yPercent:115, duration:1.25, stagger:0.06, ease:E,
        scrollTrigger:{ trigger:el, start:"top 88%" } });
    });
    document.querySelectorAll("[data-fade]").forEach(function(el){
      gsap.from(el, { opacity:0, y:28, duration:1.1, ease:E, delay:parseFloat(el.dataset.fade) || 0,
        scrollTrigger:{ trigger:el, start:"top 90%" } });
    });
    document.querySelectorAll("[data-scrub]").forEach(function(el){
      var s = SplitText.create(el, { type:"words" });
      gsap.fromTo(s.words, { opacity:0.14 }, { opacity:1, stagger:0.1, ease:"none",
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
      var w = SplitText.create(ph.querySelector("h1"), { type:"words", wordsClass:"w", mask:"words" }).words;
      gsap.timeline({ defaults:{ ease:E } })
        .from(ph.querySelectorAll(".eyebrow, .gur-line"), { opacity:0, y:14, duration:.9, stagger:.1 }, .1)
        .from(w, { yPercent:115, duration:1.35, stagger:.08 }, .25)
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
      ScrollTrigger.refresh();
    });
  };
  return api;
})();
