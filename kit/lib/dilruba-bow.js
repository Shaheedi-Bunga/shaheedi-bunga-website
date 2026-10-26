/* <dilruba-bow> — a bowing loop composited from two plates.
 *
 * The still plate holds everything that never moves. The bow plate holds the
 * bowing arm, the hand and the gaj, cut as one piece. Each frame the bow plate
 * is drawn in bands parallel to the bow's own axis: the upper arm band sits
 * still, the elbow band eases through a shear, and the forearm/hand/bow band
 * translates as one rigid unit along the axis. Bands run parallel to the
 * stroke, so an axial slide never opens a gap between them.
 *
 *   <dilruba-bow interactive></dilruba-bow>
 *
 * Inlined here because these mockups are reviewed as Claude Artifacts, which
 * are a single file. It is self-contained and can be lifted back out.
 *
 * Attributes:
 *   src          folder holding the plates (default: this script's folder)
 *   format       plate file extension (default "webp")
 *   background   CSS colour, or "transparent"
 *   period       seconds per full out-and-back of the idle stroke
 *   amplitude    px of travel, in source-image units
 *   interactive  cursor X across the viewport draws the gaj; it eases back
 *                into the idle stroke once the cursor has been still
 *   paused       park on a single frame
 *
 * Motion always travels along the bow's own axis. Never rotate it: the plates
 * were cut so that an axial slide keeps the moving piece over the strip of
 * artwork it was lifted from, and rotating exposes what is underneath.
 */
(function () {
  const HERE = (document.currentScript && document.currentScript.src) || '';
  const BASE = HERE ? HERE.replace(/[^/]*$/, '') : '';
  const SRC = 1254;
  const THETA = Math.atan(0.180);
  const OX = 168, OY = 755;
  const W0 = -100, W1 = 41;       // shear band, measured across the bow axis
  const BANDS = 40;
  const SHEAR_RECT = [190, 640, 290, 215];
  const smooth = (t) => t * t * (3 - 2 * t);

  const EASE = 0.09;              // per 60fps frame, how hard the gaj chases the cursor
  const IDLE_AFTER = 2600;        // ms of stillness before the idle stroke resumes
  const reduceMQ = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  const reduced = () => !!(reduceMQ && reduceMQ.matches);

  class DilrubaBow extends HTMLElement {
    connectedCallback() {
      if (this._built) return;
      this._built = true;
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML =
        '<style>:host{display:block;position:relative;line-height:0}' +
        'canvas{display:block;width:100%;height:auto}</style><canvas></canvas>';
      this.canvas = root.querySelector('canvas');
      this.ctx = this.canvas.getContext('2d');

      this._phase = 0;            // position within the idle stroke, 0..1
      this._d = 0;                // the travel actually drawn this frame
      this._targetD = 0;          // where the cursor wants it
      this._lastPointer = -Infinity;
      this._fromPointer = false;
      this._last = null;
      this._visible = true;

      const dir = (this.getAttribute('src') || BASE || 'dilruba').replace(/\/$/, '');
      const ext = this.getAttribute('format') || 'webp';
      let pending = 2;
      const ready = () => { if (--pending === 0) { this.resize(); this.start(); } };
      this.still = new Image(); this.bow = new Image();
      this.still.onload = ready; this.bow.onload = ready;
      this.still.onerror = this.bow.onerror = () =>
        console.error('dilruba-bow: plate failed to load from ' + dir);
      // data-still / data-bow win when present: it lets a host page hand the
      // plates over directly (a build inlining them as data URIs, say) without
      // relying on a global that could collide with the page's own code.
      this.still.src = this.getAttribute('data-still') || dir + '/plate-still.' + ext;
      this.bow.src = this.getAttribute('data-bow') || dir + '/plate-bow.' + ext;

      this._ro = new ResizeObserver(() => { this.resize(); this._render(this._d); });
      this._ro.observe(this);

      this._onPointer = (e) => {
        if (!this.hasAttribute('interactive') || reduced()) return;
        const w = window.innerWidth || 1;
        let t = e.clientX / w;
        t = t < 0 ? 0 : t > 1 ? 1 : t;
        this._targetD = t * this._amp();
        this._lastPointer = performance.now();
        this._fromPointer = true;
      };
      window.addEventListener('pointermove', this._onPointer, { passive: true });

      this._onVisibility = () => this._sync();
      document.addEventListener('visibilitychange', this._onVisibility);
      if (reduceMQ && reduceMQ.addEventListener) {
        this._onReduce = () => { this._phase = 0; this._d = 0; this._sync(); };
        reduceMQ.addEventListener('change', this._onReduce);
      }
      if ('IntersectionObserver' in window) {
        this._io = new IntersectionObserver((entries) => {
          this._visible = entries[0].isIntersecting;
          this._sync();
        }, { threshold: 0 });
        this._io.observe(this);
      }
    }

    disconnectedCallback() {
      if (this._ro) this._ro.disconnect();
      if (this._io) this._io.disconnect();
      window.removeEventListener('pointermove', this._onPointer);
      document.removeEventListener('visibilitychange', this._onVisibility);
      if (this._onReduce && reduceMQ) reduceMQ.removeEventListener('change', this._onReduce);
      this.stop();
    }

    _amp() { return parseFloat(this.getAttribute('amplitude') || '42'); }

    // The idle stroke: one smooth out-and-back that ends at exactly the start
    // value and slope, so the loop has no seam.
    _dAt(phase) { return this._amp() * 0.5 * (1 - Math.cos(phase * Math.PI * 2)); }

    resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = this.clientWidth || SRC;
      const px = Math.max(1, Math.round(w * dpr));
      if (this.canvas.width !== px) {
        this.canvas.width = px; this.canvas.height = px;
      }
      // Setting canvas.width resets context state, so re-assert this after.
      // The plates are large and drawn scaled down; without it the downscale
      // is noticeably softer, worst on fine detail like the frets and toes.
      this.ctx.imageSmoothingEnabled = true;
      this.ctx.imageSmoothingQuality = 'high';
      this._scale = px / SRC;
    }

    _sync() {
      const ok = this._visible && !document.hidden &&
        !reduced() && !this.hasAttribute('paused');
      if (ok) this.start(); else { this.stop(); this._render(this._d); }
    }

    start() {
      if (this._raf) return;
      if (reduced() || this.hasAttribute('paused')) { this._render(this._dAt(0)); return; }
      this._last = null;
      const tick = (now) => {
        this._step(now);
        this._raf = requestAnimationFrame(tick);
      };
      this._raf = requestAnimationFrame(tick);
    }

    stop() {
      if (this._raf) { cancelAnimationFrame(this._raf); this._raf = 0; }
      this._last = null;
    }

    _step(now) {
      const dt = this._last === null ? 16.7 : Math.min(now - this._last, 100);
      this._last = now;

      const chasing = this.hasAttribute('interactive') &&
        (now - this._lastPointer) < IDLE_AFTER;

      if (chasing) {
        // frame-rate independent approach toward the cursor
        const k = 1 - Math.pow(1 - EASE, dt / 16.7);
        this._d += (this._targetD - this._d) * k;
      } else {
        if (this._fromPointer) {
          // Re-enter the idle stroke from wherever the cursor left the gaj,
          // by solving the stroke for the phase that matches the current
          // travel. Without this the gaj jumps when the cursor goes still.
          const amp = this._amp();
          let c = amp === 0 ? 1 : 1 - 2 * this._d / amp;
          c = c < -1 ? -1 : c > 1 ? 1 : c;
          this._phase = Math.acos(c) / (Math.PI * 2);
          this._fromPointer = false;
        }
        const period = parseFloat(this.getAttribute('period') || '3.1') * 1000;
        this._phase = (this._phase + dt / period) % 1;
        this._d = this._dAt(this._phase);
      }
      this._render(this._d);
    }

    /* Kept for callers that drive the stroke by phase directly. */
    draw(phase) {
      this._phase = phase;
      this._render(this._dAt(phase));
    }

    _render(d) {
      const g = this.ctx, s = this._scale;
      if (!g || !s || !this.still || !this.still.complete || !this.bow.complete) return;
      this._d = d;

      const bg = this.getAttribute('background') || '#faf6ee';
      g.setTransform(1, 0, 0, 1, 0, 0);
      g.clearRect(0, 0, this.canvas.width, this.canvas.height);
      if (bg !== 'transparent') {
        g.fillStyle = bg; g.fillRect(0, 0, this.canvas.width, this.canvas.height);
      }
      g.setTransform(s, 0, 0, s, 0, 0);
      g.drawImage(this.still, 0, 0);

      // Each band carries a continuous shear (not a step), so the sleeve's
      // silhouette stays a smooth curve instead of a staircase.
      const band = (w0, w1, k, e, rect) => {
        g.save();
        g.translate(OX, OY); g.rotate(THETA);
        g.beginPath(); g.rect(-3000, w0, 6000, w1 - w0); g.clip();
        g.transform(1, 0, k, 1, e, 0);
        g.rotate(-THETA); g.translate(-OX, -OY);
        if (rect) g.drawImage(this.bow, rect[0], rect[1], rect[2], rect[3],
          rect[0], rect[1], rect[2], rect[3]);
        else g.drawImage(this.bow, 0, 0);
        g.restore();
      };
      band(-3000, W0 + 0.5, 0, 0);
      const h = (W1 - W0) / BANDS;
      for (let i = 0; i < BANDS; i++) {
        const a = W0 + i * h;
        const fa = smooth(i / BANDS), fb = smooth((i + 1) / BANDS);
        const k = d * (fb - fa) / h;
        band(a - 0.5, a + h + 0.5, k, d * fa - k * a, SHEAR_RECT);
      }
      band(W1 - 0.5, 3000, 0, d);
    }
  }
  if (!customElements.get('dilruba-bow')) customElements.define('dilruba-bow', DilrubaBow);
})();
