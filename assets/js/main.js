/* =============================================================
   Robert Burdsall — Portfolio
   Vanilla JS. No dependencies, no build step.
   Every module bails out safely if its markup isn't on the page,
   so this one file serves all three pages.
   ============================================================= */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------------------------------------------------------
     Scroll progress bar + sticky nav state
     --------------------------------------------------------- */
  function initScroll() {
    var bar = $("[data-progress-bar]");
    var nav = $("[data-nav]");
    var ticking = false;

    function update() {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      if (bar) bar.style.width = pct.toFixed(2) + "%";
      if (nav) nav.classList.toggle("is-stuck", window.scrollY > 24);
      ticking = false;
    }

    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });

    update();
  }

  /* ---------------------------------------------------------
     Mobile nav
     --------------------------------------------------------- */
  function initNav() {
    var toggle = $("[data-nav-toggle]");
    var links  = $("#primary-nav");
    if (!toggle || !links) return;

    function close() {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") close();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  /* ---------------------------------------------------------
     Reveal-on-scroll
     Staggers siblings so groups cascade instead of popping.
     --------------------------------------------------------- */
  function initReveal() {
    var els = $$("[data-reveal]");
    if (!els.length) return;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    // stagger within each parent
    var byParent = new Map();
    els.forEach(function (el) {
      var list = byParent.get(el.parentElement) || [];
      list.push(el);
      byParent.set(el.parentElement, list);
    });
    byParent.forEach(function (list) {
      list.forEach(function (el, i) {
        el.style.setProperty("--delay", Math.min(i * 90, 450) + "ms");
      });
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    els.forEach(function (el) { io.observe(el); });

    // Failsafe: IntersectionObserver never reports intersections while the
    // document is hidden (background tab, some embedded webviews). If anything
    // above the fold is still hidden after 2.5s, just show it.
    window.setTimeout(function () {
      els.forEach(function (el) {
        if (el.classList.contains("is-visible")) return;
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          el.classList.add("is-visible");
          io.unobserve(el);
        }
      });
    }, 2500);
  }

  /* ---------------------------------------------------------
     Timeline: build the year rail from the entries, then
     scroll-spy the active year and fill the progress line.
     --------------------------------------------------------- */
  function initTimeline() {
    var rail    = $("[data-rail]");
    var items   = $$(".tl-item");
    if (!rail || !items.length) return;

    var yearOut  = $("[data-rail-year]", rail);
    var fill     = $("[data-rail-fill]", rail);
    var list     = $(".rail__years", rail);
    var section  = $("#timeline");

    // --- collect unique years in document order ---
    var years = [];
    items.forEach(function (item) {
      var y = item.getAttribute("data-year");
      if (y && years.indexOf(y) === -1) years.push(y);
    });

    // --- build the rail buttons ---
    var buttons = {};
    years.forEach(function (y) {
      var li  = document.createElement("li");
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "rail__year";
      btn.textContent = y;
      btn.setAttribute("aria-label", "Jump to " + y);
      btn.addEventListener("click", function () {
        var target = items.filter(function (it) { return it.getAttribute("data-year") === y; })[0];
        if (target) target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
      });
      li.appendChild(btn);
      list.appendChild(li);
      buttons[y] = btn;
    });

    rail.removeAttribute("aria-hidden");

    // --- scroll spy ---
    var currentYear = null;
    var ticking = false;

    function setYear(y) {
      if (y === currentYear) return;
      currentYear = y;

      var reached = true;
      years.forEach(function (yr) {
        var btn = buttons[yr];
        btn.classList.toggle("is-active", yr === y);
        btn.classList.toggle("is-past", reached && yr !== y);
        if (yr === y) reached = false;
      });

      if (!yearOut) return;
      if (reduceMotion) { yearOut.textContent = y; return; }
      yearOut.classList.add("is-swapping");
      window.setTimeout(function () {
        yearOut.textContent = y;
        yearOut.classList.remove("is-swapping");
      }, 180);
    }

    function update() {
      ticking = false;

      // Which entry is nearest the vertical middle of the viewport?
      var focal = window.innerHeight * 0.42;
      var best = null, bestDist = Infinity;

      items.forEach(function (item) {
        var r = item.getBoundingClientRect();
        var dist = Math.abs(r.top + Math.min(r.height, window.innerHeight) / 2 - focal);
        // entries fully above the focal line always beat ones below it
        if (r.top < focal) dist -= 0.001;
        if (dist < bestDist) { bestDist = dist; best = item; }
      });

      if (best) {
        setYear(best.getAttribute("data-year"));
        items.forEach(function (it) { it.classList.toggle("is-inview", it === best); });
      }

      // fill the rail line across the section
      if (fill && section) {
        var s = section.getBoundingClientRect();
        var span = s.height - window.innerHeight;
        var pct = span > 0 ? ((-s.top) / span) * 100 : (s.top <= 0 ? 100 : 0);
        pct = Math.max(0, Math.min(100, pct));
        var mobile = window.matchMedia("(max-width: 900px)").matches;
        fill.style.height = mobile ? "100%" : pct + "%";
        fill.style.width  = mobile ? pct + "%" : "100%";
      }
    }

    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    update();
  }

  /* ---------------------------------------------------------
     Rotating role text in the hero
     --------------------------------------------------------- */
  function initRotator() {
    var host = $("[data-rotate]");
    if (!host) return;

    var out = $(".hero__role-word", host);
    var words = (host.getAttribute("data-words") || "").split("|").filter(Boolean);
    if (!out || words.length < 2) return;

    if (reduceMotion) { out.textContent = words[0]; return; }

    // The markup already shows words[0] in full, so the cycle starts by
    // deleting it. Starting with deleting=false would push ci past the word
    // length on the first tick and the "finished typing" test would never
    // match again — the rotator would type once and then stall forever.
    var wi = 0, ci = words[0].length, deleting = true;

    function tick() {
      var word = words[wi];

      ci += deleting ? -1 : 1;
      // Clamp so ci can never drift outside [0, word.length]; the state
      // changes below use >=/<= so the loop is self-correcting and runs
      // indefinitely without accumulating error.
      if (ci < 0) ci = 0;
      if (ci > word.length) ci = word.length;

      out.textContent = word.slice(0, ci);

      var delay;
      if (!deleting && ci >= word.length) {
        delay = 2100;                 // hold the finished phrase
        deleting = true;
      } else if (deleting && ci <= 0) {
        delay = 320;                  // brief pause on empty
        deleting = false;
        wi = (wi + 1) % words.length; // wraps forever
      } else {
        delay = deleting ? 34 : 68;
      }

      window.setTimeout(tick, delay);
    }

    window.setTimeout(tick, 2400);
  }

  /* ---------------------------------------------------------
     Cursor spotlight on cards/panels
     --------------------------------------------------------- */
  function initSpotlight() {
    var els = $$("[data-spotlight]");
    if (!els.length || reduceMotion) return;
    if (window.matchMedia("(hover: none)").matches) return;

    els.forEach(function (el) {
      el.addEventListener("pointermove", function (e) {
        var r = el.getBoundingClientRect();
        el.style.setProperty("--mx", (e.clientX - r.left) + "px");
        el.style.setProperty("--my", (e.clientY - r.top) + "px");
      });
    });
  }

  /* ---------------------------------------------------------
     Hero circuit canvas
     Nodes drift like charge carriers and are joined by faint
     conductor traces. Every so often a pair close enough to
     "break down" throws a jagged arc between them.
     Pauses when off-screen or the tab is hidden.
     --------------------------------------------------------- */
  function initCircuit() {
    var canvas = $("[data-circuit]");
    if (!canvas || reduceMotion) return;

    var ctx = canvas.getContext("2d");
    if (!ctx) return;

    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = 0, h = 0, dots = [], arcs = [], raf = null, running = true;
    var pointer = { x: -999, y: -999 };
    var nextArc = 0;

    function resize() {
      var rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      var count = Math.min(90, Math.round((w * h) / 15000));
      dots = [];
      for (var i = 0; i < count; i++) {
        dots.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.24,
          vy: (Math.random() - 0.5) * 0.24,
          r: Math.random() * 1.5 + 0.6
        });
      }
    }

    // Build a jagged path between two points — the lightning shape.
    function boltPath(x1, y1, x2, y2, chaos) {
      var segs = 7;
      var pts = [{ x: x1, y: y1 }];
      var dx = x2 - x1, dy = y2 - y1;
      var nx = -dy, ny = dx;                        // perpendicular
      var len = Math.sqrt(nx * nx + ny * ny) || 1;
      nx /= len; ny /= len;

      for (var s = 1; s < segs; s++) {
        var t = s / segs;
        // displacement peaks mid-span and falls off at the endpoints
        var falloff = Math.sin(t * Math.PI);
        var off = (Math.random() - 0.5) * chaos * falloff;
        pts.push({ x: x1 + dx * t + nx * off, y: y1 + dy * t + ny * off });
      }
      pts.push({ x: x2, y: y2 });
      return pts;
    }

    function strokeBolt(pts, width, alpha) {
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (var i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
      ctx.strokeStyle = "rgba(255, 224, 90, " + alpha.toFixed(3) + ")";
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();
    }

    function frame(now) {
      ctx.clearRect(0, 0, w, h);

      for (var i = 0; i < dots.length; i++) {
        var d = dots[i];
        d.x += d.vx; d.y += d.vy;
        if (d.x < -20) d.x = w + 20; else if (d.x > w + 20) d.x = -20;
        if (d.y < -20) d.y = h + 20; else if (d.y > h + 20) d.y = -20;

        // Gentle repulsion from the pointer — like charges pushing apart.
        // Deliberately not attraction: attraction is self-reinforcing, so a
        // stationary cursor slowly collects every nearby node into a permanent
        // clump. Repulsion is self-correcting, which keeps the field evenly
        // distributed no matter how long the page is left open.
        var pdx = d.x - pointer.x, pdy = d.y - pointer.y;
        var pd = Math.sqrt(pdx * pdx + pdy * pdy);
        if (pd < 170 && pd > 0.5) {
          var push = (1 - pd / 170) * 0.7;
          d.x += (pdx / pd) * push;
          d.y += (pdy / pd) * push;
        }

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 214, 10, 0.6)";
        ctx.fill();

        for (var j = i + 1; j < dots.length; j++) {
          var o = dots[j];
          var ddx = d.x - o.x, ddy = d.y - o.y;
          var dist2 = ddx * ddx + ddy * ddy;
          if (dist2 < 16900) { // 130px
            var a = (1 - Math.sqrt(dist2) / 130) * 0.28;
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(o.x, o.y);
            ctx.strokeStyle = "rgba(255, 214, 10, " + a.toFixed(3) + ")";
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // --- fire a new arc on an interval, between any two nearby nodes ---
      if (now >= nextArc && dots.length > 2 && arcs.length < 3) {
        var a1 = dots[(Math.random() * dots.length) | 0];
        var candidates = dots.filter(function (o) {
          if (o === a1) return false;
          var ex = o.x - a1.x, ey = o.y - a1.y;
          var dd = ex * ex + ey * ey;
          return dd > 3600 && dd < 62500;           // 60–250px apart
        });
        if (candidates.length) {
          var a2 = candidates[(Math.random() * candidates.length) | 0];
          arcs.push({
            pts: boltPath(a1.x, a1.y, a2.x, a2.y, 34),
            born: now,
            life: 260 + Math.random() * 180
          });
        }
        nextArc = now + 900 + Math.random() * 2200;
      }

      // --- draw + retire arcs ---
      ctx.save();
      ctx.shadowColor = "rgba(255, 214, 10, 0.9)";
      for (var k = arcs.length - 1; k >= 0; k--) {
        var arc = arcs[k];
        var age = (now - arc.born) / arc.life;
        if (age >= 1) { arcs.splice(k, 1); continue; }

        // flicker so it reads as a discharge rather than a drawn line
        var fade = (1 - age) * (0.65 + Math.random() * 0.35);
        ctx.shadowBlur = 14;
        strokeBolt(arc.pts, 2.4, fade * 0.5);       // outer glow
        ctx.shadowBlur = 0;
        strokeBolt(arc.pts, 0.9, fade);             // hot core
      }
      ctx.restore();

      if (running) raf = requestAnimationFrame(frame);
    }

    window.addEventListener("pointermove", function (e) {
      var r = canvas.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
    }, { passive: true });

    window.addEventListener("pointerleave", function () {
      pointer.x = pointer.y = -999;
    });

    window.addEventListener("resize", resize, { passive: true });

    // don't burn cycles when the hero is scrolled past or the tab is hidden
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        var visible = entries[0].isIntersecting && !document.hidden;
        if (visible && !running) { running = true; frame(performance.now()); }
        else if (!visible) { running = false; if (raf) cancelAnimationFrame(raf); }
      }, { threshold: 0 }).observe(canvas);
    }

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) { running = false; if (raf) cancelAnimationFrame(raf); }
      else if (!running) { running = true; frame(performance.now()); }
    });

    resize();
    // frame() reads `now` for arc timing, so seed the first call explicitly —
    // requestAnimationFrame supplies it on every subsequent frame.
    frame(performance.now());
  }

  /* ---------------------------------------------------------
     Count-up stats
     --------------------------------------------------------- */
  function initCounters() {
    var nums = $$("[data-count]");
    if (!nums.length) return;

    function run(el) {
      var target = parseFloat(el.getAttribute("data-count")) || 0;
      var suffix = el.getAttribute("data-suffix") || "";

      if (reduceMotion) { el.textContent = target + suffix; return; }

      var dur = 1400, start = performance.now();
      (function step(now) {
        var p = Math.min((now - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target + suffix;
      })(start);
    }

    if (!("IntersectionObserver" in window)) { nums.forEach(run); return; }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        run(e.target);
        io.unobserve(e.target);
      });
    }, { threshold: 0.5 });

    nums.forEach(function (n) { io.observe(n); });
  }

  /* ---------------------------------------------------------
     Skill bars (resume page)
     --------------------------------------------------------- */
  function initSkillBars() {
    var bars = $$("[data-level]");
    if (!bars.length) return;

    if (!("IntersectionObserver" in window)) {
      bars.forEach(function (b) { b.style.width = b.getAttribute("data-level") + "%"; });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        window.setTimeout(function () {
          el.style.width = el.getAttribute("data-level") + "%";
        }, 120);
        io.unobserve(el);
      });
    }, { threshold: 0.4 });

    bars.forEach(function (b) { io.observe(b); });

    // Same failsafe as initReveal — never leave a bar stuck at zero width.
    window.setTimeout(function () {
      bars.forEach(function (b) {
        if (b.style.width) return;
        var r = b.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          b.style.width = b.getAttribute("data-level") + "%";
          io.unobserve(b);
        }
      });
    }, 2500);
  }

  /* ---------------------------------------------------------
     Project filters
     --------------------------------------------------------- */
  function initFilters() {
    var buttons = $$("[data-filter]");
    var cards   = $$("[data-tech]");
    var empty   = $("[data-empty]");
    if (!buttons.length || !cards.length) return;

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var key = btn.getAttribute("data-filter").toLowerCase();

        buttons.forEach(function (b) { b.classList.toggle("is-active", b === btn); });

        var shown = 0;
        cards.forEach(function (card) {
          var tech = (card.getAttribute("data-tech") || "").toLowerCase();
          var match = key === "all" || tech.split(",").map(function (t) { return t.trim(); }).indexOf(key) !== -1;
          card.classList.toggle("is-hidden", !match);
          if (match) shown++;
        });

        if (empty) empty.hidden = shown > 0;
      });
    });
  }

  /* ---------------------------------------------------------
     Copy-to-clipboard buttons
     --------------------------------------------------------- */
  function initCopy() {
    $$("[data-copy]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var text  = btn.getAttribute("data-copy");
        var label = $("[data-copy-label]", btn);
        var done = function () {
          if (!label) return;
          var old = label.textContent;
          label.textContent = "Copied ✓";
          window.setTimeout(function () { label.textContent = old; }, 1800);
        };

        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(text).then(done).catch(fallback);
        } else {
          fallback();
        }

        function fallback() {
          var ta = document.createElement("textarea");
          ta.value = text;
          ta.setAttribute("readonly", "");
          ta.style.cssText = "position:fixed;top:-1000px;opacity:0";
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand("copy"); done(); } catch (err) { /* no-op */ }
          document.body.removeChild(ta);
        }
      });
    });
  }

  /* ---------------------------------------------------------
     Footer year
     --------------------------------------------------------- */
  function initYear() {
    $$("[data-current-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  /* --------------------------------------------------------- */
  function boot() {
    initScroll();
    initNav();
    initReveal();
    initTimeline();
    initRotator();
    initSpotlight();
    initCircuit();
    initCounters();
    initSkillBars();
    initFilters();
    initCopy();
    initYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
