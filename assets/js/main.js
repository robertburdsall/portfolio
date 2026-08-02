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
