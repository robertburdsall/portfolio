/* =============================================================================
   render.js — builds the pages from content.js

   You should not need to edit this file. All the words live in content.js.

   How it works: each page is a thin shell containing empty <div data-mount="…">
   placeholders. This script reads window.SITE and fills them in. It runs
   synchronously before main.js, so by the time main.js wires up behavior the
   DOM is complete.

   Content from content.js is inserted as HTML on purpose, so simple tags like
   <strong> work. That file is author-controlled, not user input.
============================================================================= */
(function () {
  "use strict";

  var S = window.SITE;
  if (!S) {
    document.addEventListener("DOMContentLoaded", function () {
      document.body.insertAdjacentHTML("afterbegin",
        '<div style="padding:120px 24px;text-align:center;font-family:sans-serif;color:#7ba9d0">' +
        "<h1>content.js didn't load</h1><p style='color:#a8b0ba'>Check that the file exists and has no syntax errors " +
        "(press F12 → Console for the exact line).</p></div>");
    });
    return;
  }

  /* ---------- icons ---------- */
  var STROKE = {
    bolt:     '<path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5Z"/>',
    plc:      '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9h4v6H7zM15 9h2M15 13h2"/>',
    vision:   '<circle cx="12" cy="12" r="3.2"/><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/>',
    code:     '<path d="m8 6-6 6 6 6M16 6l6 6-6 6"/>',
    grid:     '<path d="M4 4h16v16H4z"/><path d="M4 10h16M10 4v16"/>',
    cube:     '<path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z"/><path d="m3 7 9 5 9-5M12 12v10"/>',
    layers:   '<path d="M12 2 2 8l10 6 10-6-10-6Z"/><path d="m2 16 10 6 10-6M2 12l10 6 10-6"/>',
    shield:   '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
    star:     '<path d="m12 2 2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2Z"/>',
    users:    '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    grad:     '<path d="M12 3 2 8l10 5 10-5-10-5Z"/><path d="M6 10.5V17c0 1.7 2.7 3 6 3s6-1.3 6-3v-6.5"/>',
    link:     '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14 21 3"/>',
    download: '<path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>',
    arrow:     '<path d="M5 12h14m0 0-6-6m6 6-6 6"/>',
    arrowLeft: '<path d="M19 12H5m0 0 6-6m-6 6 6 6"/>',
    email:    '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/>',
    phone:    '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.4 1.8.6 2.8.8A2 2 0 0 1 22 16.9Z"/>',
    copy:     '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>',
    print:    '<path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="7" rx="1"/>'
  };
  var FILL = {
    github:   '<path fill="currentColor" stroke="none" d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/>',
    linkedin: '<path fill="currentColor" stroke="none" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"/>'
  };

  function icon(name) {
    var body = STROKE[name] || FILL[name] || STROKE.bolt;
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + body + "</svg>";
  }

  /* ---------- helpers ---------- */
  function mount(name) { return document.querySelector('[data-mount="' + name + '"]'); }
  function fill(name, html) { var m = mount(name); if (m) m.outerHTML = html; }
  function chips(list, cls) {
    if (!list || !list.length) return "";
    return '<ul class="chips' + (cls ? " " + cls : "") + '">' +
      list.map(function (c) { return "<li>" + c + "</li>"; }).join("") + "</ul>";
  }
  function points(list, cls) {
    if (!list || !list.length) return "";
    return '<ul class="' + (cls || "tl-item__points") + '">' +
      list.map(function (p) { return "<li>" + p + "</li>"; }).join("") + "</ul>";
  }
  function heading(o) {
    return '<p class="eyebrow">' + o.eyebrow + "</p>" +
      '<h2 class="section-title">' + (o.title || "") +
      (o.titleAccent ? '<span class="grad">' + o.titleAccent + "</span>" : "") + "</h2>" +
      (o.sub ? '<p class="section-sub">' + o.sub + "</p>" : "");
  }

  /* ---------- shared chrome ---------- */
  function renderNav(active) {
    var links = S.nav.map(function (l) {
      return '<a href="' + l.href + '"' + (l.href === active ? ' class="is-active"' : "") + ">" + l.label + "</a>";
    }).join("");
    // On the home page the contact anchor is local rather than cross-page.
    var ctaHref = active === "index.html" ? "#contact" : S.navCta.href;

    var initials = (S.person.firstName[0] || "") + (S.person.lastName[0] || "");
    fill("nav",
      '<header class="nav" data-nav><div class="nav__inner">' +
        '<a class="nav__brand" href="index.html">' +
          '<span class="nav__mark" aria-hidden="true">' + initials + "</span>" +
          '<span class="nav__name">' + S.person.fullName + "</span>" +
        "</a>" +
        '<button class="nav__toggle" data-nav-toggle aria-expanded="false" aria-controls="primary-nav" aria-label="Open menu">' +
          "<span></span><span></span><span></span></button>" +
        '<nav class="nav__links" id="primary-nav" aria-label="Primary">' + links +
          '<a href="' + ctaHref + '" class="nav__cta">' + S.navCta.label + "</a>" +
        "</nav>" +
      "</div></header>");
  }

  function renderFooter() {
    var links = S.nav.map(function (l) { return '<a href="' + l.href + '">' + l.label + "</a>"; }).join("") +
      '<a href="' + S.person.linkedin + '" target="_blank" rel="noopener">LinkedIn</a>' +
      '<a href="' + S.person.github + '" target="_blank" rel="noopener">GitHub</a>';
    fill("footer",
      '<footer class="footer"><div class="container footer__inner">' +
        "<p>© <span data-current-year>2026</span> " + S.person.fullName + ". " + S.footer.note + "</p>" +
        '<nav class="footer__links" aria-label="Footer">' + links + "</nav>" +
      "</div></footer>");
  }

  function btn(b) {
    var cls = "btn btn--" + (b.style === "primary" ? "primary" : "ghost") + (b.small ? " btn--sm" : "");
    return '<a class="' + cls + '" href="' + b.href + '"' +
      (b.download ? " download" : "") +
      (/^https?:/.test(b.href) ? ' target="_blank" rel="noopener"' : "") + ">" +
      (b.icon && b.iconFirst !== false && b.icon !== "arrow" ? icon(b.icon) : "") +
      b.label +
      (b.icon === "arrow" ? icon("arrow") : "") + "</a>";
  }

  /* ---------- contact panel (shared by home + projects CTA) ----------
     Deliberately offers more than one route. A bare mailto: link silently does
     nothing on any machine without a mail client registered — which is most
     machines where the owner uses webmail — so the address is also shown as
     copyable text, with a Gmail web-compose link and a phone number alongside. */
  function tel() { return S.person.phone.replace(/[^0-9+]/g, ""); }

  function contactPanel(c) {
    var gmail = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(S.person.email);
    return '<section class="contact" id="contact"><div class="container">' +
      '<div class="contact__panel" data-reveal>' +
        
        '<p class="eyebrow">' + c.eyebrow + "</p>" +
        '<h2 class="section-title">' + c.title + '<span class="grad">' + c.titleAccent + "</span></h2>" +
        '<p class="section-sub">' + c.sub + "</p>" +

        '<div class="contact__actions">' +
          '<a class="btn btn--primary" href="mailto:' + S.person.email + '">' +
            icon("email") + S.person.email + "</a>" +
          '<button class="btn btn--ghost" data-copy="' + S.person.email + '">' + icon("copy") +
            '<span data-copy-label>' + c.copyLabel + "</span></button>" +
          '<a class="btn btn--ghost" href="' + gmail + '" target="_blank" rel="noopener">' +
            icon("link") + c.gmailLabel + "</a>" +
        "</div>" +

        '<div class="contact__actions">' +
          '<a class="btn btn--ghost" href="tel:' + tel() + '">' + icon("phone") + S.person.phone + "</a>" +
          '<button class="btn btn--ghost" data-copy="' + S.person.phone + '">' + icon("copy") +
            '<span data-copy-label>' + c.copyPhoneLabel + "</span></button>" +
          '<a class="btn btn--ghost" href="assets/resume.pdf" download>' +
            icon("download") + c.resumeLabel + "</a>" +
        "</div>" +

        /* Plain labelled text rather than emoji — emoji read as informal on a
           page a hiring manager is evaluating. */
        '<p class="contact__meta">' +
          "<span><dfn>Location</dfn> " + S.person.location + " — " + S.person.locationNote + "</span>" +
          '<span class="sep">·</span>' +
          "<span><dfn>Work authorization</dfn> " + S.person.workAuth + "</span></p>" +
        (S.person.availability
          ? '<p class="contact__meta contact__meta--note">' + S.person.availability + "</p>"
          : "") +
      "</div></div></section>";
  }

  /* =========================================================================
     HOME
     ========================================================================= */
  function renderHome() {
    var H = S.home;

    /* hero */
    var h = H.hero;
    var socials =
      '<li><a href="' + S.person.linkedin + '" target="_blank" rel="noopener" aria-label="LinkedIn">' + icon("linkedin") + "<span>LinkedIn</span></a></li>" +
      '<li><a href="' + S.person.github + '" target="_blank" rel="noopener" aria-label="GitHub">' + icon("github") + "<span>GitHub</span></a></li>" +
      '<li><a href="mailto:' + S.person.email + '" aria-label="Email">' + icon("email") + "<span>Email</span></a></li>";

    fill("hero",
      '<section class="hero" id="top">' +
        '<div class="hero__grid" aria-hidden="true"></div>' +
        '<div class="hero__inner container">' +
          '<div class="hero__portrait" data-reveal>' +
            '<div class="portrait">' +
              '<img src="' + h.photo + '" alt="' + h.photoAlt + '" width="300" height="300" /></div>' +
            (h.badges || [h.badge]).map(function (b) {
              return '<div class="portrait__badge"><span class="dot" aria-hidden="true"></span>' + b + "</div>";
            }).join("") +
          "</div>" +
          '<div class="hero__content">' +
            '<p class="hero__eyebrow" data-reveal>' + h.eyebrow + "</p>" +
            '<h1 class="hero__title" data-reveal>' + S.person.firstName + " " + S.person.lastName + "</h1>" +
            '<p class="hero__tagline" data-reveal>' + h.tagline + "</p>" +
            '<p class="hero__bio" data-reveal>' + h.bio + "</p>" +
            '<div class="hero__actions" data-reveal>' + h.buttons.map(btn).join("") + "</div>" +
            '<ul class="hero__socials" data-reveal>' + socials + "</ul>" +
          "</div>" +
        "</div>" +
        '<a class="hero__scroll" href="#timeline" aria-label="Scroll to timeline">' +
          '<span class="hero__scroll-line" aria-hidden="true"></span>' +
          '<span class="hero__scroll-text">' + h.scrollCue + "</span></a>" +
      "</section>");

    /* timeline heading */
    fill("timeline-head", '<div class="section-head container">' + heading(H.timeline) + "</div>");

    /* Timeline entries.
       content.js lists these oldest-first because that's the natural way to
       write and extend them — you append new experience to the bottom without
       thinking about position. The page shows them newest-first, because that's
       what a recruiter expects and it puts the strongest, most recent work at
       the top. Set `timeline.order: "oldest-first"` in content.js to opt out. */
    var ordered = H.timeline.entries.slice();
    if (H.timeline.order !== "oldest-first") ordered.reverse();

    var entries = ordered.map(function (e) {
      var linkHtml = e.link
        ? btn({ label: e.link.label, href: e.link.href, style: e.link.style || "ghost", small: true,
                icon: e.link.style === "primary" ? "arrow" : "link" })
        : "";
      return '<article class="tl-item' + (e.type === "future" ? " tl-item--future" : "") +
        '" data-year="' + e.year + '" data-type="' + e.type + '" data-reveal>' +
        '<div class="tl-item__node" aria-hidden="true"><span></span></div>' +
        '<div class="tl-item__body">' +
          '<header class="tl-item__head">' +
            '<span class="tl-item__date">' + e.date + "</span>" +
            '<span class="tag tag--' + e.type + '">' + e.tag + "</span>" +
          "</header>" +
          '<h3 class="tl-item__title">' + e.title +
            (e.titleNote ? ' <span class="muted" style="font-weight:500;font-size:.85rem">' + e.titleNote + "</span>" : "") +
          "</h3>" +
          (e.org ? '<p class="tl-item__org">' + e.org + "</p>" : "") +
          (e.desc ? '<p class="tl-item__desc">' + e.desc + "</p>" : "") +
          points(e.points) +
          chips(e.chips) +
          linkHtml +
        "</div></article>";
    }).join("");
    fill("timeline-entries", '<div class="timeline__entries">' + entries + "</div>");

    /* the angle panel */
    var a = H.angle;
    fill("angle",
      '<section class="contact" style="padding-bottom:60px"><div class="container">' +
        '<div class="contact__panel" data-reveal>' +
          
          '<p class="eyebrow">' + a.eyebrow + "</p>" +
          '<h2 class="section-title">' + a.title + '<span class="grad">' + a.titleAccent + "</span></h2>" +
          '<p class="section-sub">' + a.body + "</p>" +
        "</div></div></section>");

    /* skills */
    var cards = H.skills.cards.map(function (c) {
      return '<div class="card" data-reveal>' +
        '<div class="card__icon" aria-hidden="true">' + icon(c.icon) + "</div>" +
        "<h3>" + c.title + "</h3>" + chips(c.chips, "chips--lg") + "</div>";
    }).join("");
    fill("skills",
      '<section class="skills" id="skills" style="padding-top:40px"><div class="container">' +
        '<div class="section-head">' + heading(H.skills) + "</div>" +
        '<div class="skills__grid">' + cards + "</div></div></section>");

    /* facts */
    var facts = H.facts.map(function (f) {
      return '<div class="fact" data-reveal>' +
        '<span class="fact__num" data-count="' + f.count + '" data-suffix="' + f.suffix + '">0</span>' +
        '<span class="fact__label">' + f.label + "</span></div>";
    }).join("");
    fill("facts",
      '<section class="facts"><div class="container"><div class="facts__grid">' + facts + "</div></div></section>");

    /* leadership */
    var lead = H.leadership.cards.map(function (c) {
      return '<div class="card" data-reveal' +
        (c.wide ? ' style="grid-column:1/-1"' : "") + ">" +
        '<div class="card__icon" aria-hidden="true">' + icon(c.icon) + "</div>" +
        "<h3>" + c.title + "</h3>" +
        '<p class="muted" style="font-size:.9rem;margin-bottom:14px">' + c.meta + "</p>" +
        '<p style="color:var(--text-2);font-size:.96rem;margin-bottom:16px">' + c.body + "</p>" +
        (c.points ? points(c.points) : "") +
        chips(c.chips) + "</div>";
    }).join("");
    fill("leadership",
      '<section class="skills" id="leadership" style="padding-top:0"><div class="container">' +
        '<div class="section-head">' + heading(H.leadership) + "</div>" +
        '<div class="skills__grid">' + lead + "</div></div></section>");

    fill("contact", contactPanel(H.contact));
  }

  /* =========================================================================
     RESUME
     ========================================================================= */
  function renderResume() {
    var R = S.resume;

    fill("resume-head",
      '<section class="page-head"><div class="container"><div class="page-head__inner"><div>' +
        '<p class="eyebrow" data-reveal>' + R.eyebrow + "</p>" +
        '<h1 class="section-title" data-reveal>' + R.title + '<span class="grad">' + R.titleAccent + "</span></h1>" +
        '<p class="section-sub" data-reveal>' + R.sub + "</p></div>" +
        '<div class="page-head__actions" data-reveal>' +
          '<a class="btn btn--primary" href="assets/resume.pdf" download>' + icon("download") + "Download PDF</a>" +
          '<button class="btn btn--ghost" onclick="window.print()">' + icon("print") + "Print</button>" +
        "</div></div></div></section>");

    /* sidebar */
    var bars = R.strengths.items.map(function (s) {
      return '<div class="skillbar"><div class="skillbar__top"><b>' + s.label + "</b><span>" + s.note + "</span></div>" +
        '<div class="skillbar__track"><span class="skillbar__fill" data-level="' + s.level + '"></span></div></div>';
    }).join("");

    var certs = R.certifications.items.map(function (c) {
      return "<li><strong>" + c.name + '</strong><br /><span class="muted">' + c.meta + "</span></li>";
    }).join("");

    fill("resume-aside",
      '<aside class="resume__aside">' +
        '<div class="card" data-reveal><h3>' + R.glance.title + "</h3>" +
          '<ul class="tl-item__points" style="margin:0">' +
          R.glance.items.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ul></div>" +
        '<div class="card" data-reveal><h3>' + R.strengths.title + "</h3>" + bars + "</div>" +
        '<div class="card" data-reveal><h3>' + R.certifications.title + "</h3>" +
          '<ul class="tl-item__points" style="margin:0">' + certs + "</ul></div>" +
        '<div class="card" data-reveal><h3>Contact</h3>' +
          '<ul class="tl-item__points" style="margin:0">' +
            '<li><a href="mailto:' + S.person.email + '">' + S.person.email + "</a></li>" +
            '<li><a href="tel:' + S.person.phone.replace(/[^0-9+]/g, "") + '">' + S.person.phone + "</a></li>" +
            '<li><a href="' + S.person.linkedin + '" target="_blank" rel="noopener">' + S.person.linkedin.replace(/^https?:\/\//, "") + "</a></li>" +
            '<li><a href="' + S.person.github + '" target="_blank" rel="noopener">' + S.person.github.replace(/^https?:\/\//, "") + "</a></li>" +
          "</ul></div>" +
      "</aside>");

    /* main column */
    var blocks = '<section class="rblock" data-reveal><h2 class="rblock__title">' + R.objective.title +
      '</h2><p class="section-sub">' + R.objective.body + "</p></section>";

    blocks += R.sections.map(function (sec) {
      var entries = sec.entries.map(function (e) {
        return '<article class="rentry">' +
          '<div class="rentry__top"><span class="rentry__role">' + e.role + "</span>" +
            (e.when ? '<span class="rentry__when">' + e.when + "</span>" : "") + "</div>" +
          (e.org ? '<p class="rentry__org">' + e.org + "</p>" : "") +
          (e.points ? "<ul>" + e.points.map(function (p) { return "<li>" + p + "</li>"; }).join("") + "</ul>" : "") +
          chips(e.chips) + "</article>";
      }).join("");
      return '<section class="rblock" data-reveal><h2 class="rblock__title">' + sec.title + "</h2>" + entries + "</section>";
    }).join("");

    var groups = R.skillGroups.groups.map(function (g) {
      return '<p class="rentry__org" style="margin-bottom:10px"><strong>' + g.label + "</strong></p>" +
        '<ul class="chips coursework" style="margin-bottom:20px">' +
        g.chips.map(function (c) { return "<li>" + c + "</li>"; }).join("") + "</ul>";
    }).join("");
    blocks += '<section class="rblock" data-reveal><h2 class="rblock__title">' + R.skillGroups.title +
      '</h2><article class="rentry">' + groups + "</article></section>";

    blocks += '<section class="rblock" data-reveal><h2 class="rblock__title">' + R.pdfTitle + "</h2>" +
      '<object class="pdf-frame" data="assets/resume.pdf" type="application/pdf">' +
      '<div class="empty-state"><p>Your browser can\'t display the PDF inline.</p>' +
      '<a class="btn btn--primary btn--sm" href="assets/resume.pdf" download>Download it instead</a></div></object></section>';

    fill("resume-main", '<div class="resume__main">' + blocks + "</div>");
  }

  /* =========================================================================
     PROJECTS
     ========================================================================= */
  function renderProjects() {
    var P = S.projects;

    fill("projects-head",
      '<section class="page-head"><div class="container"><div class="page-head__inner"><div>' +
        '<p class="eyebrow" data-reveal>' + P.eyebrow + "</p>" +
        '<h1 class="section-title" data-reveal>' + P.title + '<span class="grad">' + P.titleAccent + "</span></h1>" +
        '<p class="section-sub" data-reveal>' + P.sub + "</p></div>" +
        '<div class="page-head__actions" data-reveal>' +
          '<a class="btn btn--ghost" href="' + S.person.github + '" target="_blank" rel="noopener">' +
            icon("github") + "All repos on GitHub</a>" +
        "</div></div></div></section>");

    var filters = P.filters.map(function (f, i) {
      return '<button class="filter' + (i === 0 ? " is-active" : "") + '" data-filter="' + f.key + '">' + f.label + "</button>";
    }).join("");

    var items = P.items.map(function (p) {
      var thumb = p.image
        ? '<img src="' + p.image + '" alt="' + p.title.replace(/<[^>]+>/g, "") + '" />'
        : '<span class="proj__thumb-placeholder">' + (p.imagePlaceholder || "IMAGE 1600×900") + "</span>";
      var metrics = (p.metrics && p.metrics.length)
        ? '<div class="proj__metrics">' + p.metrics.map(function (m) {
            return '<div class="proj__metric"><b>' + m.value + "</b><span>" + m.label + "</span></div>";
          }).join("") + "</div>"
        : "";
      /* A project with a `detail` block gets its own page. The title becomes the
         link rather than wrapping the whole card, so the external Source/Live
         links inside don't end up nested inside another anchor. */
      var href = p.detail ? projectHref(p) : null;
      var linkList = (p.links || []).map(function (l) {
        return '<a class="proj__link" href="' + l.href + '" target="_blank" rel="noopener">' +
          icon(l.icon || "link") + l.label + "</a>";
      });
      if (href) {
        linkList.unshift('<a class="proj__link proj__link--primary" href="' + href + '">' +
          P.detailLabels.viewLabel + icon("arrow") + "</a>");
      }
      var links = linkList.length ? '<div class="proj__links">' + linkList.join("") + "</div>" : "";

      var thumbInner = href
        ? '<a class="proj__thumb-link" href="' + href + '" tabindex="-1" aria-hidden="true">' + thumb + "</a>"
        : thumb;
      var title = href
        ? '<h3 class="proj__title"><a href="' + href + '">' + p.title + "</a></h3>"
        : '<h3 class="proj__title">' + p.title + "</h3>";

      return '<article class="proj card" data-tech="' + p.tags.join(",") + '" data-reveal>' +
        '<div class="proj__thumb">' +
          (p.featured ? '<span class="proj__featured">Featured</span>' : "") + thumbInner + "</div>" +
        title +
        '<p class="proj__desc">' + p.desc + "</p>" +
        metrics + chips(p.chips) + links + "</article>";
    }).join("");

    fill("projects-grid",
      '<section class="projects"><div class="container">' +
        '<div class="filters" data-reveal role="group" aria-label="Filter projects">' + filters + "</div>" +
        '<div class="proj-grid">' + items + "</div>" +
        '<div class="empty-state" data-empty hidden><p>' + P.emptyMessage + "</p></div>" +
      "</div></section>");

    var c = P.cta;
    fill("projects-cta",
      '<section class="contact"><div class="container">' +
        '<div class="contact__panel" data-reveal>' +
          
          '<p class="eyebrow">' + c.eyebrow + "</p>" +
          '<h2 class="section-title">' + c.title + '<span class="grad">' + c.titleAccent + "</span></h2>" +
          '<p class="section-sub">' + c.sub + "</p>" +
          '<div class="contact__actions">' +
            '<a class="btn btn--primary" href="' + c.primary.href + '">' + c.primary.label + icon("arrow") + "</a>" +
            '<a class="btn btn--ghost" href="mailto:' + S.person.email + '">' + c.secondary.label + "</a>" +
          "</div></div></div></section>");
  }

  /* =========================================================================
     PROJECT DETAIL  —  project.html?id=<slug>

     One shell serves every project. This keeps the site to a single set of
     files with no build step, and every project still gets a real, linkable
     URL you can put on a résumé or send to a recruiter.

     Tradeoff worth knowing: because the page is assembled in the browser, the
     <title> and og: tags in project.html are shared. We set document.title
     below so the browser tab and Google are correct, but link-preview crawlers
     (Slack, LinkedIn) don't run JavaScript and will show the generic
     description. If that ever matters, the fix is one real .html file per
     project — more files, better previews.
     ========================================================================= */
  function projectHref(p) { return "project.html?id=" + encodeURIComponent(p.slug); }

  function renderProjectDetail() {
    var P = S.projects;
    var L = P.detailLabels || {};
    var id = new URLSearchParams(window.location.search).get("id");
    var idx = -1;
    P.items.forEach(function (p, i) { if (p.slug === id) idx = i; });
    var p = idx > -1 ? P.items[idx] : null;

    if (!p || !p.detail) {
      document.title = "Project not found — " + S.person.fullName;
      fill("project-detail",
        '<section class="page-head"><div class="container">' +
          '<p class="eyebrow">404</p>' +
          '<h1 class="section-title">' + (L.notFound || "That project doesn't exist.") + "</h1>" +
          '<div class="contact__actions" style="margin-top:24px">' +
            '<a class="btn btn--primary" href="projects.html">' + (L.notFoundCta || "View all projects") + "</a>" +
          "</div></div></section>");
      return;
    }

    var d = p.detail;
    var plain = p.title.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&");
    document.title = plain + " — " + S.person.fullName;
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", plain + " — " + p.desc.replace(/<[^>]+>/g, "").slice(0, 150));

    var hero = p.image
      ? '<img src="' + p.image + '" alt="' + plain + '" />'
      : '<span class="proj__thumb-placeholder">' + (p.imagePlaceholder || "IMAGE 1600×900") + "</span>";

    var metrics = (p.metrics && p.metrics.length)
      ? '<div class="pd__metrics">' + p.metrics.map(function (m) {
          return '<div class="proj__metric"><b>' + m.value + "</b><span>" + m.label + "</span></div>";
        }).join("") + "</div>"
      : "";

    var sections = (d.sections || []).map(function (s) {
      return '<section class="pd__section" data-reveal>' +
        "<h2>" + s.heading + "</h2>" +
        (s.body ? "<p>" + s.body + "</p>" : "") +
        (s.points ? points(s.points, "pd__points") : "") +
      "</section>";
    }).join("");

    var specs = (d.specs && d.specs.length)
      ? '<dl class="pd__specs">' + d.specs.map(function (s) {
          return "<dt>" + s.label + "</dt><dd>" + s.value + "</dd>";
        }).join("") + "</dl>"
      : "";

    /* previous / next, wrapping around the list */
    function nav(i, label, cls) {
      var q = P.items[(i + P.items.length) % P.items.length];
      if (!q || !q.detail || q === p) return "";
      return '<a class="pd__nav-item ' + cls + '" href="' + projectHref(q) + '">' +
        '<span class="pd__nav-label">' + label + "</span>" +
        '<span class="pd__nav-title">' + q.title + "</span></a>";
    }

    fill("project-detail",
      '<article class="pd">' +
        '<div class="container">' +
          '<a class="pd__back" href="projects.html">' + icon("arrowLeft") + (L.back || "All projects") + "</a>" +

          '<header class="pd__head" data-reveal>' +
            '<p class="eyebrow">' + (d.context || "") + "</p>" +
            '<h1 class="pd__title">' + p.title + "</h1>" +
            (d.summary ? '<p class="pd__summary">' + d.summary + "</p>" : "") +
            chips(p.chips) +
          "</header>" +

          '<div class="pd__media" data-reveal>' + hero + "</div>" +
          metrics +

          '<div class="pd__body">' +
            '<div class="pd__main">' + sections + "</div>" +
            '<aside class="pd__aside" data-reveal>' +
              '<div class="card">' +
                "<h3>" + (L.specs || "At a glance") + "</h3>" +
                (d.role ? '<p class="pd__role"><span>' + (L.role || "Role") + "</span>" + d.role + "</p>" : "") +
                specs +
                (p.links && p.links.length
                  ? '<div class="pd__aside-links">' + p.links.map(function (l) {
                      return '<a class="proj__link" href="' + l.href + '" target="_blank" rel="noopener">' +
                        icon(l.icon || "link") + l.label + "</a>";
                    }).join("") + "</div>"
                  : "") +
              "</div>" +
            "</aside>" +
          "</div>" +

          '<nav class="pd__nav" aria-label="Other projects">' +
            nav(idx - 1, L.prev || "Previous", "pd__nav-item--prev") +
            nav(idx + 1, L.next || "Next", "pd__nav-item--next") +
          "</nav>" +
        "</div>" +
      "</article>");
  }

  /* ---------- dispatch ---------- */
  var page = document.body.getAttribute("data-page");
  renderNav(
    page === "home" ? "index.html" :
    page === "resume" ? "resume.html" : "projects.html"
  );
  if (page === "home")     renderHome();
  if (page === "resume")   renderResume();
  if (page === "projects") renderProjects();
  if (page === "project")  renderProjectDetail();
  renderFooter();
})();
