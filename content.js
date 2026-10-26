/* =============================================================================
   ★ EDIT THIS FILE TO CHANGE ANY TEXT ON THE SITE ★

   Every word on all three pages lives here. Change it, save, refresh — done.
   You never need to touch the HTML.

   THREE RULES
   -----------
   1. Keep the quotes. Text goes inside "double quotes" or 'single quotes'.
   2. Keep the commas between items. Missing comma = blank page.
   3. If your text contains a double quote, use single quotes around it:
        'He said "hello"'
      Or an apostrophe inside double quotes:
        "Robert's résumé"

   You CAN use simple HTML inside any text for emphasis:
      <strong>bold</strong>      <em>italic</em>      <br /> line break
      <a href="...">a link</a>

   IF THE PAGE GOES BLANK after an edit, you have a typo — usually a missing
   comma or an unclosed quote. Press F12 in your browser, click "Console",
   and it will name the line. Undo your last change and try again.

   ICONS: the `icon` fields accept one of these names —
      bolt  plc  vision  panel  code  grid  cube  layers
      shield  star  users  link  github  linkedin  email
============================================================================= */

window.SITE = {

  /* ==========================================================================
     1. YOU — used in the header, footer, and contact areas of every page
     ========================================================================== */
  person: {
    firstName: "Robert",
    lastName:  "Burdsall",
    fullName:  "Robert Burdsall",

    email:    "robertaburdsall@gmail.com",
    phone:    "+1 (704) 305-0517",
    linkedin: "https://linkedin.com/in/robertburdsall",
    github:   "https://github.com/robertburdsall",

    location:      "Raleigh, NC",

    /* THE RESUME PDF.
       Keep the file at this path. If you export a new resume, overwrite
       assets/resume.pdf rather than adding a differently-named file —
       every Download button, the inline viewer on the resume page, and any
       link you have already shared all point here. Change `resumeFileName`
       to whatever you want it saved as on a recruiter's computer. */
    resumePdf:      "assets/resume.pdf",
    resumeFileName: "Robert Burdsall Resume 2026.pdf"
  },

  /* Top-right navigation links */
  nav: [
    { label: "Timeline",        href: "index.html" },
    { label: "Resume",          href: "resume.html" },
    { label: "Recent Projects", href: "projects.html" }
  ],
  navCta: { label: "Contact", href: "index.html#contact" },

  footer: {
    note: "Designed and built from scratch."
  },

  /* ==========================================================================
     2. HOME PAGE
     ========================================================================== */
  home: {

    /* ---- The top of the page ---- */
    hero: {
      eyebrow: "Hello — I'm",

      /* The line under your name. One sentence — keep it factual. */
      tagline:
        "Electrical engineering — control panel design, PLC programming, and machine " +
        "vision, taken from concept through commissioning on a production floor.",

      /* Your intro paragraph.
         Ordered to put evidence before backstory: a recruiter reaches the
         machine in sentence two rather than 850px down the page. The Minecraft
         server and NCSSM are still told in full on the timeline — they just
         don't need to come before the proof. */
      bio:
        "I'm an <strong>Electrical Engineering</strong> student at <strong>NC State</strong>. " +
        "This past summer at IDEAL Fastener I took a zipper cap inspection machine from " +
        "concept to commissioning — electrical design, PLC logic, machine vision, and operator " +
        "HMI — and it now runs at <strong>120 parts a minute</strong> on the production floor. " +
        "Alongside it I designed and wired five-plus control panels and drew a TinyCAD " +
        "schematic for every one. I came to hardware from six years of software and operations " +
        "work, so I'm comfortable on both sides of a system: the wiring and the code running on " +
        "it.",

      /* The pills under your photo. Delete an entry to remove it, or set
         this to [] for no pills at all. */
      badges: [],

      /* Your photo. Put the file in assets/img/ and change the name here. */
      photo:    "assets/img/profilephoto.jpg",
      photoAlt: "Portrait of Robert Burdsall",

      buttons: [
        { label: "Download Résumé", href: "", style: "primary", icon: "download", download: true },
        { label: "View Projects",   href: "projects.html",     style: "ghost",   icon: "arrow" }
      ],

      scrollCue: "View experience"
    },

    /* ---- Timeline section heading ---- */
    timeline: {
      eyebrow: "The path so far",
      title: "Experience ",
      titleAccent: "Timeline",
      sub:
        "Most recent first — a decade of building, from the production floor back to a " +
        "Scout troop and a Minecraft server. Scroll through it, or jump to a year using the rail.",

      /* Display order. Leave this out (or set "newest-first") to show the most
         recent entry at the top, which is what employers expect. Set it to
         "oldest-first" to run the timeline forward in time instead. */
      order: "newest-first",

      /* The small caption above the big year on the left rail. It has to read
         as a navigation state, not as a date — "Now viewing" made the year
         underneath look like the period being described rather than the part
         of the page you've scrolled to. */
      railLabel: "Year in view",

      /* ======================================================================
         TIMELINE ENTRIES — write these OLDEST FIRST.

         The page reverses them for display (see `order` above), so you just
         append new experience to the bottom of this list as it happens.

         year  : drives the left-hand rail. Repeats are fine; the rail shows
                 each year once.
         type  : work | education | project | award | future   (sets node color)
         tag   : the little label in the corner
         date  : the date range text
         title : headline
         org   : organization / location line (optional)
         desc  : paragraph (optional)
         points: bullet list (optional — delete the whole line if unused)
         chips : the small tags at the bottom (optional)
         link  : optional button, e.g. { label: "Visit", href: "https://..." }
         ====================================================================== */
      entries: [

        {
          year: "2015", type: "award", tag: "Scouting",
          date: "2015 — Present",
          title: "Joined Boy Scouts of America",
          org: "Troop 98, later Troop 222 · Huntersville, NC",
          desc:
            "The start of a decade in Scouting that ran alongside everything else on this " +
            "page — eventually earning <strong>Eagle Scout</strong> and climbing the full " +
            "youth leadership ladder into an adult leadership role. See the " +
            '<a href="#leadership">leadership section</a> for the whole progression.'
        },

        /* Consolidated from three separate entries — the server/plugins project,
           the Cryhosting role, and the tutorial channel. They were one
           continuous arc, and splitting them across three cards gave the gaming
           context more of the page than it earned. The server/plugins write-up
           still has its own project page; the tutorial channel no longer does,
           so the third bullet below is all that remains of it. */
        {
          year: "2020", type: "work", tag: "Early work",
          date: "2020 — 2022",
          title: "Self-Taught Software &amp; Operations",
          org: "Independent · Cryhosting LLC",
          desc:
            "How I learned to program. I built and ran a public game server that reached " +
            "<strong>100,000 unique players</strong>, wrote the Java plugins behind it, and " +
            "documented the process publicly. The operational track record turned into a paid " +
            "leadership role at the hosting company that supplied the infrastructure — while " +
            "I was still in high school.",
          points: [
            "<strong>Director of NA Operations, Cryhosting LLC</strong> (May 2021 – Nov 2022) — joined as a support intern, promoted to a paid leadership role in three months. Managed all North American servers and the support operatives running them, trained staff, led creative partnerships, and led development and maintenance on backend financial systems.",
            "Wrote custom server-side Java plugins for gameplay, moderation, and administration, and operated the live infrastructure for a community of 100,000 unique players.",
            "Published 31 technical tutorials on server administration — voice-chat integration, live server mapping, chunk pregeneration for lag mitigation, DDoS protection — each with a written companion write-up. Over 250,000 total views."
          ],
          chips: ["Java", "Server Administration", "Operations Management", "Team Leadership", "Technical Writing"]
          /* The "Project details" link was removed with the Minecraft server
             project card. Add it back with
               link: { label: "Project details", href: "project.html?id=SLUG" }
             if you ever restore that project. */
        },

        {
          year: "2022", type: "award", tag: "Leadership",
          date: "Feb 2022 — Jun 2023",
          title: "Senior Patrol Leader — Troop 222",
          org: "Boy Scouts of America · Huntersville, NC",
          desc:
            "Elected Assistant Senior Patrol Leader in February 2022 and Senior Patrol " +
            "Leader that May — <strong>the top youth leadership position in a Scout " +
            "troop</strong>. For over a year I ran the troop: planning meetings, leading the " +
            "youth leadership team, and running outdoor programs.",
          chips: ["Ran the Troop", "Youth Leadership", "Program Planning"]
        },

        {
          year: "2022", type: "project", tag: "Volunteering",
          date: "2022 — 2025",
          title: "Lead Mentor — Cyber-Seniors",
          org: "Cyber-Seniors · Morganton, NC",
          desc:
            "Delivered presentations, troubleshot technology issues, and supported elderly " +
            "participants over Zoom to improve digital literacy. Promoted from Community " +
            "Mentor to Lead Mentor.",
          chips: ["Teaching", "Technical Support", "Presentations"]
        },

        {
          year: "2023", type: "education", tag: "Education",
          date: "Aug 2023 — May 2025",
          title: "NC School of Science and Mathematics",
          org: "High School Diploma, Computer Science Focus · Morganton, NC",
          desc:
            "Graduated from North Carolina's residential STEM high school — ranked the " +
            "<strong>#1 public high school in America</strong> — with a computer science " +
            "focus and a <strong>4.8 GPA</strong>. Took advanced Computer Science Courses such " +
            "as Data Structures and Algorithms, Server Side Development, and Advanced Computer " +
            "Science Topics.",
          chips: ["Java", "Python", "Computer Science"]
        },

        {
          year: "2024", type: "work", tag: "Work",
          date: "May 2024 — Jan 2026",
          title: "Sales Associate",
          org: "Best Buy · Charlotte, NC",
          /* `compact: true` renders this as a single de-emphasized line instead
             of a full card. Use it for roles worth listing for continuity but
             not worth the same visual weight as the engineering work — this one
             was competing with the IDEAL Fastener internship. The full write-up
             is still on the resume page. */
          compact: true,
          note: "Named Store Leader June 2024 and June 2025; led the store in memberships and total revenue for multiple months."
        },

        {
          year: "2024", type: "work", tag: "Work",
          date: "Aug 2024 — May 2025",
          title: "Computer Science Teaching Assistant",
          org: "NC School of Science and Mathematics · Morganton, NC",
          points: [
            "Taught <strong>150+ students</strong> programming fundamentals in Java and Python",
            "Built a cross-platform resource tracking app using Flutter/Dart with faculty",
            "Helped develop a web-based TA tracking platform to streamline course management"
          ],
          chips: ["Java", "Python", "Flutter", "Dart"]
        },

        {
          year: "2024", type: "project", tag: "Projects",
          date: "2024 — Present",
          title: "Aurum &amp; Spotcord",
          org: "Independent Projects · Morganton, NC",
          desc:
            "Two self-directed builds: <strong>Aurum</strong>, a cross-platform Flutter app " +
            "doing real-time coin appraisal with on-device TensorFlow Lite inference, and " +
            "<strong>Spotcord</strong>, a multithreaded Java Discord bot that remotely " +
            "controls Spotify playback with AES-encrypted credential storage.",
          chips: ["Dart", "Flutter", "TensorFlow Lite", "Express.js", "Java", "SQLite"]
        },

        {
          year: "2024", type: "project", tag: "Robotics",
          date: "Aug 2024 — Present",
          title: "FIRST Robotics Competition — Team 9150 Labyrinth Robotics",
          org: "Software Developer (2024–25) → Lead Programming Mentor (2025–Present) · Morganton, NC",
          points: [
            "Designed and implemented the full robot control software in Java using WPILib, integrating vision and dual scoring systems — the robot posted the <strong>3rd-highest scoring performance across 2025 North Carolina events</strong>",
            "Led all programming efforts, overseeing system architecture, debugging, and performance optimization",
            "Lead and mentor <strong>25+ students</strong>, teaching Java, WPILib, wiring, and iterative test and debug of a competition robot"
          ],
          chips: ["Java", "WPILib", "CTRE-Phoenix", "REV", "Machine Vision"]
        },

        {
          year: "2025", type: "education", tag: "Education",
          date: "Aug 2025 — Dec 2028 (expected)",
          title: "B.S. Electrical Engineering",
          org: "North Carolina State University · Raleigh, NC",
          desc:
            "Bachelor of Science in Electrical Engineering, carrying a <strong>3.5 GPA</strong> " +
            "with an <strong>expected graduation of December 2028</strong>. The pivot from " +
            "software into hardware — and the point where the two backgrounds started " +
            "reinforcing each other.",
          points: [
            "<strong>Coursework:</strong> ECE 200 Introduction to Signals, Circuits and Systems · ECE 212 Fundamentals of Logic Design · ECE 209 Computer Systems Programming · ECE 109 Introduction to Computer Systems"
          ],
          chips: ["Circuits &amp; Systems", "Logic Design", "Computer Systems"]
        },

        {
          year: "2026", type: "work", tag: "Internship",
          date: "May 2026 — Aug 2026",
          title: "Electrical Engineering Intern",
          org: "IDEAL Fastener Corporation · Oxford, NC",
          desc:
            "Hands-on electrical and controls work on live production machinery — panels, " +
            "PLCs, and vision systems scoped, built, and commissioned on the factory floor.",
          points: [
            "Led end-to-end design of a zipper cap inspection machine running <strong>120 caps/min</strong> — scoped the work, ordered the hardware, and commissioned it on the floor with no spec to work from — integrating Keyence vision, vacuum ejection, solenoid valve sequencing, a DOPSoft HMI, and PLC quality tracking with good/bad rate alarms",
            "Designed and fabricated <strong>5+ electrical control panels</strong> — relays, power supplies, DIN rail, disconnects, proximity/laser sensors, solenoid valves — and produced TinyCAD schematics for every panel so plant technicians can replicate, service, and troubleshoot them from the drawings alone",
            "Established automated defect detection for the first time on <strong>3 existing production machines</strong>, reaching <strong>100% inspection coverage</strong> by configuring Keyence IV3/IV4 vision systems and defining defect recognition criteria",
            "Programmed Omron PLCs in CX-Programmer — ladder logic control sequences, interlocks, stepper motion pulse output, and buffered part tracking through the machine"
          ],
          chips: ["Omron PLC", "CX-Programmer", "Keyence IV3/IV4", "DOPSoft HMI", "TinyCAD", "Panel Wiring", "Commissioning"]
        }

        /* The standalone "Degree conferred" entry was removed.
           It made the timeline open on a future year, which reads as if the
           page is showing content from 2028. The graduation date is already
           carried by the NC State education entry above. */

      ]
    },

    /* ---- The "why this combination" panel ---- */
    angle: {
      eyebrow: "Why this combination",
      title: "Electrical engineer with a<br />",
      titleAccent: "software background",
      body:
        "Most engineering students learn to code because a class required it. I spent six " +
        "years writing software, running live infrastructure, and managing operations before " +
        "I ever wired a panel — so when a machine needs custom logic, a test needs automating, " +
        "or a pile of results needs to become a tool, that isn't the hard part. The other half " +
        "is the habit operations taught me: document the build so the next person can run it " +
        "without you. Hardware increasingly ships with software attached, and I'm comfortable " +
        "on both sides of that line."
    },

    /* ---- Skills cards ---- */
    skills: {
      eyebrow: "Toolbox",
      title: "What I ",
      titleAccent: "work with",
      sub:
        "Every item here is something I've used on real work — a production floor, a " +
        "competition robot, live server infrastructure, or a released app.",
      cards: [
        { icon: "bolt",   title: "Electrical Design",
          chips: ["Control Panel Design", "Power Distribution", "Wiring &amp; Terminations", "TinyCAD Schematics", "DIN Rail", "Relays", "Disconnects", "Proximity / Laser Sensors"] },
        { icon: "plc",    title: "Controls &amp; Automation",
          chips: ["Omron PLCs", "CX-Programmer", "Ladder Logic", "Interlocks", "DOPSoft HMI", "Stepper Motion Control", "Solenoid &amp; Pneumatic Actuation", "Alarm Handling"] },
        { icon: "vision", title: "Machine Vision &amp; Inspection",
          chips: ["Keyence IV3 / IV4", "IV Smart Navigator", "Defect Recognition", "Inspection Criteria", "Real-Time QC", "Vacuum Ejection"] },
        { icon: "layers", title: "CAD &amp; Fabrication",
          chips: ["SolidWorks", "TinyCAD", "Prusa Slicer", "Cura", "3D Printing"] },
        { icon: "code",   title: "Languages",
          chips: ["Java", "Python", "C / C++", "Dart", "SQL", "JavaScript", "HTML/CSS"] },
        { icon: "grid",   title: "Libraries &amp; Frameworks",
          chips: ["pandas", "NumPy", "Matplotlib", "TensorFlow Lite", "WPILib", "CTRE-Phoenix", "REV", "Flutter", "Express.js"] },
        { icon: "cube",   title: "Developer Tools",
          chips: ["Git", "Docker", "Maven", "SQLite", "Google Cloud", "VS Code", "IntelliJ", "Android Studio", "Xcode"] },
        { icon: "shield", title: "Operations &amp; Communication",
          chips: ["Team Leadership", "Training &amp; Onboarding", "Technical Writing", "Documentation", "Live Infrastructure", "Microsoft Office (Word, Excel, PowerPoint, Outlook)"] }
      ]
    },

    /* ---- The four big numbers.  count = the number it counts up to. ---- */
    /* Pick numbers that are big enough to land at a glance AND mean something.
       "5+ panels" is real but reads small next to six figures, so the panel
       work is stated as a rate instead — 7,200 parts an hour is the same
       machine, described the way a plant manager would describe it. */
    facts: [
      { count: 7200, suffix: "",    label: "Parts/hr inspected by a machine I designed" },
      { count: 100,  suffix: "K",   label: "Users served by systems I built &amp; ran" },
      { count: 250,  suffix: "K+",  label: "Views on technical tutorials I produced" },
      { count: 175,  suffix: "+",   label: "Students taught &amp; mentored" }
    ],

    /* ---- Leadership & service ---- */
    leadership: {
      eyebrow: "Outside the lab",
      title: "Leadership &amp; ",
      titleAccent: "service",
      sub:
        "A decade in Scouting, climbing the full leadership ladder — plus years of teaching " +
        "and mentoring alongside it.",
      cards: [
        {
          icon: "star", wide: true,
          title: "Eagle Scout — Boy Scouts of America",
          meta: "Troops 98 &amp; 222, Huntersville, NC · 2015 — Present",
          body:
            "Ten years in Scouting, earning <strong>Eagle Scout</strong> and progressing " +
            "through every rung of the leadership ladder — including <strong>Senior Patrol " +
            "Leader</strong>, the top youth leadership position, where I effectively ran the " +
            "troop for over a year. After aging out I came back as an adult leader.",
          points: [
            "<strong>Assistant Scoutmaster</strong> <span class='muted'>— Apr 2025 – Present.</span> Returned as an adult leader to keep having an impact on kids in my hometown; mentoring 30+ Scouts and leading outdoor programs.",
            "<strong>Junior Assistant Scoutmaster</strong> <span class='muted'>— Jun 2023 – Apr 2025.</span> Stepped back from SPL after moving away for NCSSM, staying on to support the troop with the leadership experience I'd built.",
            "<strong>Senior Patrol Leader</strong> <span class='muted'>— May 2022 – Jun 2023.</span> Top youth leader for Troop 222 — ran meetings, led the youth leadership team, and planned the program.",
            "<strong>Assistant Senior Patrol Leader</strong> <span class='muted'>— Feb 2022 – Jun 2022.</span>",
            "<strong>Patrol Leader</strong> <span class='muted'>— Feb 2019 – Feb 2022.</span> Three years leading a patrol in Troop 98."
          ],
          chips: ["Eagle Scout", "Senior Patrol Leader", "Assistant Scoutmaster", "10 Years", "30+ Scouts Mentored"]
        },
        {
          icon: "users",
          title: "Teaching &amp; Mentorship",
          meta: "NCSSM &amp; FRC Team 9150 · 2024 — Present",
          body:
            "Taught programming fundamentals to <strong>150+ students</strong> as a CS " +
            "teaching assistant, and mentor <strong>25+ students</strong> as programming " +
            "lead on a competitive robotics team.",
          chips: ["175+ Students Reached", "Java", "Python", "WPILib"]
        },
        {
          icon: "users",
          title: "Cyber-Seniors",
          meta: "Community Mentor → Lead Mentor · 2022 — 2025",
          body:
            "Delivered presentations, troubleshot technology issues, and supported elderly " +
            "participants over Zoom to improve digital literacy.",
          chips: ["Lead Mentor", "Digital Literacy", "Presentations"]
        }
      ]
    },

    /* ---- Contact panel at the bottom ---- */
    contact: {
      eyebrow: "Let's talk",
      title: "Get in ",
      titleAccent: "touch",
      sub:
        "Email or text me — I reply within a day.",
      /* Button labels. "Compose in Gmail" is a fallback for anyone whose
         computer has no mail app registered, where mailto: does nothing. */
      emailLabel:   "Email me",
      gmailLabel:   "Compose in Gmail",
      copyLabel:    "Copy email",
      phoneLabel:   "Call or text",
      copyPhoneLabel: "Copy number",
      resumeLabel:  "Résumé (PDF)"
    }
  },

  /* ==========================================================================
     3. RESUME PAGE
     ========================================================================== */
  resume: {
    eyebrow: "Curriculum vitae",
    title: "The ",
    titleAccent: "résumé",
    sub: "The PDF is the one-page version. This page carries the full history behind it.",

    /* Left sidebar */
    glance: {
      title: "At a glance",
      items: [
        "<strong>Major:</strong> B.S. Electrical Engineering",
        "<strong>School:</strong> NC State University",
        "<strong>GPA:</strong> 3.5",
        "<strong>Graduating:</strong> Dec 2028 (expected)",
        "<strong>Background:</strong> 6 years software &amp; operations before engineering",
        "<strong>Location:</strong> Raleigh, NC"
      ]
    },

    /* The bars. level = 0 to 100. Keep these honest — you'll be asked about them. */
    strengths: {
      title: "Core strengths",
      items: [
        { label: "PLC Programming",        note: "Industry experience", level: 85 },
        { label: "Machine Vision",         note: "Industry experience", level: 82 },
        { label: "Panel Design &amp; Wiring", note: "Industry experience", level: 80 },
        { label: "Java",                   note: "Advanced",   level: 92 },
        { label: "Python",                 note: "Advanced",   level: 85 },
        { label: "C / C++",                note: "Proficient", level: 70 }
      ]
    },

    certifications: {
      title: "Certifications",
      items: [
        { name: "SOLIDWORKS Essentials for Part Design", meta: "SolidProfessor · Issued Jul 2026" }
      ]
    },

    objective: {
      title: "Summary",
      body:
        "Electrical Engineering student at NC State with hands-on industry experience taking " +
        "production hardware from concept to commissioning: control panel design and " +
        "fabrication, PLC programming, machine vision integration, and schematics written for " +
        "the technicians who service the equipment. Led an automated inspection machine " +
        "running 120 parts/min end to end and brought first-time automated defect detection " +
        "to 3 production machines. Six years of prior software development and operations " +
        "leadership, " +
        "including running live infrastructure for a 100,000-player community, means I bring " +
        "a software engineer's toolkit to hardware problems that increasingly need one."
    },

    /* ======================================================================
       RESUME SECTIONS. Each has a title and a list of entries.
       role / when / org / points / chips — leave out what you don't need.
       ====================================================================== */
    sections: [
      {
        title: "Education",
        entries: [
          {
            role: "Bachelor of Science in Electrical Engineering",
            when: "Aug 2025 — Expected Dec 2028",
            org: "North Carolina State University · Raleigh, NC · GPA 3.5",
            points: ["Relevant coursework: ECE 200 Introduction to Signals, Circuits and Systems; ECE 212 Fundamentals of Logic Design; ECE 209 Computer Systems Programming; ECE 109 Introduction to Computer Systems."]
          },
          {
            role: "High School Diploma, Computer Science Focus",
            when: "Aug 2023 — May 2025",
            org: "North Carolina School of Science and Mathematics · Morganton, NC · GPA 4.8",
            points: ["Residential STEM high school, ranked the #1 public high school in America."]
          }
        ]
      },
      {
        title: "Experience",
        entries: [
          {
            role: "Electrical Engineering Intern",
            when: "May 2026 — Aug 2026",
            org: "IDEAL Fastener Corporation · Oxford, NC",
            points: [
              "Led end-to-end design of a zipper cap inspection machine running 120 parts/min, from concept through commissioning, integrating Keyence machine vision, vacuum ejection, solenoid valve sequencing, a DOPSoft HMI, and PLC quality tracking with good/bad rate alarms. Scoped the work, ordered the hardware, and commissioned it on the floor with no spec to work from.",
              "Designed and fabricated 5+ electrical control panels, performing full wiring and terminations across relays, power supplies, DIN rail, disconnects, proximity and laser sensors, and solenoid valves.",
              "Produced TinyCAD schematics for every panel so plant technicians could replicate, service, and troubleshoot the hardware from documentation alone.",
              "Established automated defect detection for the first time on 3 existing production machines, reaching 100% inspection coverage by configuring Keyence IV3/IV4 vision systems and defining defect recognition criteria.",
              "Programmed Omron PLCs in CX-Programmer, implementing ladder logic control sequences, interlocks, stepper motion pulse output, and buffered part tracking through the machine."
            ],
            chips: ["Omron PLC", "CX-Programmer", "Ladder Logic", "Keyence IV3/IV4", "DOPSoft", "TinyCAD", "Panel Fabrication"]
          },
          {
            role: "Software Developer (2024–25) → Lead Programming Mentor (2025–Present)",
            when: "Aug 2024 — Present",
            org: "FIRST Robotics Competition, Team 9150 Labyrinth Robotics · Morganton, NC",
            points: [
              "Designed and implemented the full robot control software in Java using WPILib, integrating vision and dual scoring systems.",
              "Achieved the 3rd-highest scoring performance across 2025 North Carolina events, competing at the FNC District Catawba County and UNC Asheville District Events.",
              "Led all programming efforts, overseeing system architecture, debugging, and performance optimization.",
              "Lead and mentor 25+ students, teaching Java, WPILib, wiring, and iterative test and debug of a competition robot."
            ],
            chips: ["Java", "WPILib", "CTRE-Phoenix", "REV", "Machine Vision"]
          },
          {
            role: "Sales Associate",
            when: "May 2024 — Jan 2026",
            org: "Best Buy · Charlotte, NC · Store Leader June 2024, June 2025",
            points: [
              "Specialized in computer sales by assessing customer needs and recommending tailored solutions, ensuring high customer satisfaction.",
              "Consistently exceeded sales goals, leading the store in memberships and total revenue for multiple months."
            ]
          },
          {
            role: "Computer Science Teaching Assistant",
            when: "Aug 2024 — May 2025",
            org: "North Carolina School of Science and Mathematics · Morganton, NC",
            points: [
              "Taught 150+ students programming fundamentals in Java and Python.",
              "Built a cross-platform resource tracking app using Flutter/Dart with faculty.",
              "Helped develop a web-based TA tracking platform to streamline course management."
            ],
            chips: ["Java", "Python", "Flutter", "Dart"]
          },
          {
            role: "Director of NA Operations",
            when: "May 2021 — Nov 2022",
            org: "Cryhosting LLC · Server Hosting",
            points: [
              "Joined as a support operative intern and took on a larger, paid leadership role after 3 months.",
              "Managed all North American servers and the support operatives running them.",
              "Trained support operatives and led creative partnerships with content creators.",
              "Led development and maintenance on backend financial systems."
            ],
            chips: ["Operations Management", "Team Leadership", "Backend Systems"]
          }
        ]
      },
      {
        title: "Projects",
        entries: [
          {
            role: "Minecraft Server &amp; Java Plugin Development",
            when: "2020 — 2022",
            org: "Java, Plugin Development, Server Administration",
            points: [
              "Built and operated a public Minecraft server that reached 100,000 unique players, writing the custom server-side Java plugins for gameplay, moderation, and administration.",
              "Grew and promoted the community through a gaming channel (Sourceadmin, 1.5K subscribers, 127 videos), learning content creation and recording software.",
              "This work led directly to the paid operations role at Cryhosting."
            ],
            chips: ["Java", "Plugin Development", "Server Administration"]
          },
          {
            role: "Aurum — Real-Time Coin Appraisal App",
            when: "Sep 2024 — Dec 2024",
            org: "Dart, JavaScript, Python, Flutter, Express.js, TensorFlow",
            points: [
              "Developed a cross-platform Flutter mobile app for real-time coin appraisal, leveraging TensorFlow Lite.",
              "Engineered live coin value retrieval and portfolio tracking features, integrating both client-side and server-side logic for seamless data synchronization.",
              "Implemented a robust backend infrastructure using Express.js, JSON APIs, and JWT-based authentication."
            ],
            chips: ["Dart", "Flutter", "Python", "TensorFlow", "Express.js"]
          },
          {
            role: "Spotcord — Discord-Controlled Spotify Playback",
            when: "May 2024 — Present",
            org: "Spotify API, Discord API, Java, Maven, SQLite, Git",
            points: [
              "Designed and deployed a Discord bot in Java to remotely control Spotify playback, using multithreading to handle simultaneous user commands efficiently.",
              "Implemented a SQLite database for lightweight, persistent storage of user data and playback state.",
              "Secured sensitive user information through AES encryption keys, ensuring data privacy and compliance with security best practices."
            ],
            chips: ["Java", "Maven", "SQLite", "AES", "Multithreading"]
          }
        ]
      },
      {
        title: "Volunteering &amp; Leadership",
        entries: [
          {
            role: "Eagle Scout — Boy Scouts of America",
            when: "2015 — Present",
            org: "Troops 98 &amp; 222 · Huntersville, NC",
            points: [
              "<strong>Assistant Scoutmaster</strong> (Apr 2025 – Present) — returned as an adult leader after aging out, mentoring 30+ Scouts and leading outdoor programs to build leadership, teamwork, and problem-solving skills.",
              "<strong>Junior Assistant Scoutmaster</strong> (Jun 2023 – Apr 2025) — stepped back from Senior Patrol Leader after moving away for NCSSM, continuing to support the troop.",
              "<strong>Senior Patrol Leader</strong> (May 2022 – Jun 2023) — the top youth leadership position in the troop; ran meetings, led the youth leadership team, and planned the program.",
              "<strong>Assistant Senior Patrol Leader</strong> (Feb 2022 – Jun 2022), Troop 222.",
              "<strong>Patrol Leader</strong> (Feb 2019 – Feb 2022) — three years leading a patrol in Troop 98."
            ],
            chips: ["Eagle Scout", "Senior Patrol Leader", "10 Years", "30+ Scouts Mentored"]
          },
          {
            role: "Lead Mentor — Cyber-Seniors",
            when: "2022 — 2025",
            org: "Community Mentor → Lead Mentor · Morganton, NC",
            points: [
              "Lead Mentor for Cyber-Seniors, delivering presentations, troubleshooting technology issues, and supporting elderly participants over Zoom to improve digital literacy."
            ]
          }
        ]
      }
    ],

    /* The grouped chip lists near the bottom of the resume page */
    skillGroups: {
      title: "Technical Skills",
      groups: [
        { label: "Electrical Design",  chips: ["Control Panel Design &amp; Fabrication", "Wiring &amp; Terminations", "Power Distribution Hardware", "Schematic Capture (TinyCAD)"] },
        { label: "Controls &amp; Automation", chips: ["Omron PLCs (CX-Programmer, Ladder Logic)", "DOPSoft HMI", "Keyence IV3/IV4", "IV Smart Navigator", "Stepper Motion Control", "Sensor Integration"] },
        { label: "Mechanical Design",  chips: ["SolidWorks (Essentials for Part Design certificate)", "Prusa Slicer", "Cura"] },
        { label: "Languages",          chips: ["Java", "Python", "C/C++", "Dart", "SQL", "JavaScript", "HTML/CSS"] },
        { label: "Libraries",          chips: ["pandas", "NumPy", "Matplotlib", "TensorFlow Lite", "WPILib", "CTRE-Phoenix", "REV"] },
        { label: "Developer Tools",    chips: ["Git", "Docker", "Xcode", "Android Studio", "Google Cloud Platform", "VS Code", "TensorFlow", "IntelliJ"] },
        { label: "Office",             chips: ["Word", "Excel", "PowerPoint", "Outlook"] }
      ]
    },

    pdfTitle: "Robert Burdsall Resume"
  },

  /* ==========================================================================
     4. PROJECTS PAGE
     ========================================================================== */
  projects: {
    eyebrow: "Selected work",
    title: "Recent ",
    titleAccent: "projects",
    sub: "Systems I've built — on a production floor, robotics team, or on my own.",

    /* Filter buttons. `key` must match a word in each project's `tags` list. */
    filters: [
      { key: "all",        label: "All" },
      { key: "automation", label: "Automation" },
      { key: "vision",     label: "Machine Vision" },
      { key: "electrical", label: "Electrical" },
      { key: "robotics",   label: "Robotics" },
      { key: "software",   label: "Software" }
    ],

    /* ======================================================================
       PROJECT CARDS.
       slug    : the URL for this project's own page — project.html?id=SLUG
                 Keep it lowercase with dashes. Changing it breaks old links.
       tags    : which filters this shows under
       image   : path to a 1600x900 image, or leave "" for the placeholder box
       metrics : the little number blocks
       links   : optional buttons
       detail  : the dedicated page. role / context / summary / sections /
                 specs. Leave `detail` out entirely and the card simply won't
                 link anywhere.
       ====================================================================== */
    items: [
      {
        slug: "zipper-cap-inspection",
        title: "Zipper Cap Inspection Machine",
        tags: ["automation", "vision", "electrical"],
        featured: true,
        image: "", imagePlaceholder: "MACHINE PHOTO 1600×900",
        desc:
          "Led end-to-end design of a production inspection machine at IDEAL Fastener. " +
          "Trained Keyence vision inspection drives vacuum ejection and solenoid valve " +
          "sequencing, with a DOPSoft HMI and PLC-driven quality tracking that alarms on " +
          "good/bad rate.",
        metrics: [
          { value: "120", label: "CAPS/MIN" },
          { value: "End-to-end", label: "DESIGN OWNERSHIP" }
        ],
        chips: ["Omron PLC", "Keyence Vision", "DOPSoft HMI", "Solenoid Sequencing"],

        detail: {
          role: "Lead — end-to-end design",
          context: "IDEAL Fastener Corporation · Oxford, NC · Summer 2026",
          summary:
            "A production machine that inspects zipper caps at 120 per minute, ejects the " +
            "defective ones, and tracks good/bad rate for the operators running the line. I " +
            "owned it from concept through commissioning — the mechanical sequencing, the " +
            "electrical build, the PLC logic, the vision training, and the operator interface. " +
            "There was no spec to work from: I scoped the machine, ordered the hardware, and " +
            "commissioned it on the floor.",
          sections: [
            {
              heading: "The problem",
              body:
                "Zipper cap defects were being caught downstream rather than at the source, which " +
                "meant bad parts travelled further into the process before anyone noticed. " +
                "The line needed inspection fast enough to keep up with production and " +
                "automatic rejection so an operator wasn't sorting by hand."
            },
            {
              heading: "What I built",
              body:
                "A single integrated station: as the zipper caps move around the vibrating bowl, " +
                "a stepper motor separates them in order for the trained Keyence AI camera to reliably " +
                "detect any defects. The PLC then uses the results, and a solenoid-driven vacuum ejector " +
                "removes anything that fails — all sequenced quickly enough to keep the assembly process moving.",
              points: [
                "Trained the Keyence vision inspection to recognize good and defective caps, defining the inspection criteria from sample parts",
                "Wrote the Omron PLC logic in CX-Programmer to sequence detection, ejection timing, and the interlocks between them",
                "Built the vacuum ejection and solenoid valve sequencing that physically removes failed parts from the stream",
                "Designed a DOPSoft HMI so operators can see status, counts, and rate without needing the programming software",
                "Added PLC-driven quality tracking with alarm functionality on good/bad rate, so a rising defect rate surfaces immediately",
                "Controlled a stepper motor from Omron PLC logic, utilizing pulses and allowing for variable speeds"
              ]
            },
            {
              heading: "Result",
              body:
                "The machine runs on the production floor at 120 caps per minute — 7,200 an " +
                "hour — with inspection, rejection, and rate monitoring handled automatically " +
                "rather than by an operator watching the line.",
              points: [
                "120 caps/min sustained inspection rate",
                "Defect rejection moved from a downstream manual catch to inline and automatic",
                "Operators get live good/bad rate with alarms instead of after-the-fact reporting"
              ]
            }
          ],
          specs: [
            { label: "Throughput",     value: "120 caps/min (7,200/hr)" },
            { label: "Controller",     value: "Omron PLC, programmed in CX-Programmer" },
            { label: "Vision",         value: "Keyence, trained inspection criteria" },
            { label: "Operator HMI",   value: "DOPSoft" },
            { label: "Rejection",      value: "Vacuum ejection, solenoid valve sequencing" },
            { label: "Monitoring",     value: "PLC quality tracking with good/bad rate alarms" },
            { label: "Part tracking",  value: "Buffered queue — each result travels with its part to the reject point" },
            { label: "Documentation",  value: "TinyCAD schematic set — power, I/O, and vision wiring" }
          ],

          /* ==================================================================
             PHOTO / VIDEO GALLERY

             Drop files in assets/img/projects/ and list them here. Images and
             videos both work — .mp4/.webm/.mov are detected automatically and
             get playback controls. Everything opens full-screen when clicked.

             { src: "assets/img/projects/cap-machine-full.jpg",
               caption: "The finished station on the line" },

             { src: "assets/img/projects/cap-machine-running.mp4",
               poster: "assets/img/projects/cap-machine-running.jpg",
               caption: "Running at full rate" },

             Options per item:
               src     — required. Path to the file.
               caption — shown under the thumbnail. Say what it shows.
               poster  — video only. A still frame shown before play.
               wide    — true makes it span two columns. Good for a hero shot.
               alt     — override the alt text (defaults to the caption).

             CAPTION THEM PROPERLY. "Panel interior, 24 VDC distribution and
             safety relays" tells a hiring manager something. "IMG_4471" does
             not. Captions are the difference between a photo album and
             engineering documentation.

             Before publishing shop-floor photos, get sign-off from IDEAL —
             the machine, the panel interiors, and the HMI screens are three
             separate permissions.
             ================================================================== */
          media: [
            /* --- the machine itself --- */
            { src: "assets/img/projects/zipper-cap-inspection/01-machine-bowl-feeder.jpg", wide: true,
              caption: "The finished station — a vibratory bowl feeder singulating #5 caps onto the track, with the Delta HMI at the operator's position." },
            { src: "assets/img/projects/zipper-cap-inspection/02-machine-running.mp4",
              poster: "assets/img/projects/zipper-cap-inspection/02-machine-running-poster.jpg",
              caption: "Running at rate — caps feed, index past the camera, and are sorted without an operator touching them." },
            { src: "assets/img/projects/zipper-cap-inspection/03-inspection-ejection.mp4",
              poster: "assets/img/projects/zipper-cap-inspection/03-inspection-ejection-poster.jpg",
              caption: "Inspection and vacuum ejection close up: a failed cap is pulled out of the stream in the gap between parts." },

            /* --- software screens --- */
            { src: "assets/img/projects/zipper-cap-inspection/04-vision-inspection-history.jpg",
              caption: "Keyence IV Smart Navigator — the running inspection log, every part recorded pass/fail at a 150 ms processing time." },
            { src: "assets/img/projects/zipper-cap-inspection/05-hmi-operation-screen.jpg",
              caption: "The DOPSoft operator screen I built: bowl control, good/bad/total counts, live error rate and reject cutoff — one of five screens including active and historical alarms." },
            { src: "assets/img/projects/zipper-cap-inspection/06-plc-ladder-inspection.jpg",
              caption: "CX-Programmer, the inspection rung — each camera result is pushed into a queue as 1 = good, 0 = bad, so the decision travels with the part." },

            /* --- drawings --- */
            { src: "assets/img/projects/zipper-cap-inspection/07-schematic-sheet-1.png",
              caption: "TinyCAD sheet 1, power distribution — 120 VAC in through a disconnect and 10 A protection to a 24 VDC supply, out to the DC terminal strips." },
            { src: "assets/img/projects/zipper-cap-inspection/08-schematic-sheet-2.png",
              caption: "Sheet 2 — Omron CP1E I/O, relay outputs to the bowl feeder and vacuum solenoid, the stepper driver, and the Delta HMI." },
            { src: "assets/img/projects/zipper-cap-inspection/09-schematic-sheet-3.png",
              caption: "Sheet 3 — the Keyence IV4 amplifier: trigger and result lines wired back to PLC inputs 0.00 and 0.01." }
          ]
        }
      },
      {
        slug: "machine-vision-upgrade",
        title: "Machine Vision Upgrade",
        tags: ["vision", "automation"],
        image: "", imagePlaceholder: "VISION SETUP 1600×900",
        desc:
          "Configured, wired, and trained Keyence IV3/IV4 vision systems on three existing floor " +
          "machines — defining inspection criteria and teaching defect recognition — establishing " +
          "automated defect detection for the first time on each machine and taking them to " +
          "<strong>100% inspection coverage</strong>.",
        metrics: [
          { value: "3", label: "MACHINES UPGRADED" },
          { value: "100%", label: "INSPECTION COVERAGE" },
          { value: "First", label: "AUTOMATED DETECTION ON EACH" }
        ],
        chips: ["Keyence IV3/IV4", "IV Smart Navigator", "Defect Recognition"],

        detail: {
          role: "Vision configuration &amp; training",
          context: "IDEAL Fastener Corporation · Oxford, NC · Summer 2026",
          summary:
            "Three machines already on the floor were producing parts with no automated " +
            "quality check. Rather than replace them, I installed Keyence IV3/IV4 vision " +
            "systems onto each one so defects are caught as they happen. In order to control " +
            "those cameras, I installed a LattePanda Windows 10 Dev Computer, alongside some " +
            "relays to interact with the existing PLC infrastructure.",
          sections: [
            {
              heading: "The approach",
              body:
                "This same upgrade had been done to multiple machines before, so I had examples "+
                "to work off of. We planned on pulling power from the existing power supplies, "+
                "for both the 24V and higher voltage AC power, and then powering the cameras, "+
                "their controllers, the dev computer, and the relays from there.",
              points: [
                "Mounted and configured Keyence IV3/IV4 vision sensors on three existing production machines",
                "Defined inspection criteria per machine from real sample parts",
                "Trained defect recognition using Keyence IV Smart Navigator, iterating until the pass/fail boundary held against normal part variation",
                "Integrated the vision result into each machine's existing control scheme",
              ]
            },
            {
              heading: "Result",
              body:
                "Three machines that ran for years with no automated quality check now flag " +
                "defects in real time, without replacing the underlying equipment. Each one " +
                "went from no automated detection at all to <strong>100% inspection " +
                "coverage</strong> — every part checked as it passes, rather than an operator " +
                "spot-checking a sample. A new sorting method also makes moving cut pieces " +
                "easier, cutting down the manual handling operators were doing."
            }
          ],
          specs: [
            { label: "Machines upgraded", value: "3 existing production machines" },
            { label: "Coverage",          value: "100% — every part inspected, first automated detection on each machine" },
            { label: "Vision hardware",   value: "Keyence IV3 / IV4" },
            { label: "Configuration",     value: "Keyence IV Smart Navigator" },
            { label: "Detection",         value: "Real-time, inline" }
          ],

          /* Photo / video gallery — see the format notes on the zipper cap
             project above. Before/after shots work especially well here. */
          media: [
            { src: "assets/img/projects/machine-vision-upgrade/01-dual-vision-heads.jpg", wide: true,
              caption: "Two Keyence IV4 heads and their lighting units on brackets I designed and 3D printed, watching a zipper pass beneath a clear guide." },
            { src: "assets/img/projects/machine-vision-upgrade/02-vision-head-over-conveyor.jpg",
              caption: "A vision head mounted over the conveyor on the production floor — inspection happens in line, not at a separate station." },
            { src: "assets/img/projects/machine-vision-upgrade/03-amplifiers-in-panel.jpg",
              caption: "Keyence amplifiers wired into the machine's existing panel. A retrofit has to land inside enclosures that are already full." },
            { src: "assets/img/projects/machine-vision-upgrade/04-machine-panel-integration.jpg",
              caption: "The wider panel — the vision hardware ties into the machine's existing Mitsubishi PLC and terminal strips rather than replacing its controls." }
          ]
        }
      },
      {
        slug: "production-control-panels",
        title: "Production Control Panels",
        tags: ["electrical", "automation"],
        image: "", imagePlaceholder: "PANEL PHOTO 1600×900",
        desc:
          "Designed and fabricated 5+ electrical control panels for production machinery — " +
          "full wiring assembly including relays, power supplies, DIN rail, disconnects, " +
          "proximity/laser sensors, and solenoid valves — plus TinyCAD schematics so the " +
          "builds could be replicated.",
        metrics: [
          { value: "5+", label: "PANELS BUILT" },
          { value: "Full", label: "WIRING ASSEMBLY" }
        ],
        chips: ["TinyCAD", "DIN Rail", "Relays", "Sensors", "Disconnects"],

        detail: {
          role: "Design &amp; fabrication",
          context: "IDEAL Fastener Corporation · Oxford, NC · Summer 2026",
          summary:
            "Five-plus control panels for production machinery, designed and physically built. " +
            "Each one was documented in TinyCAD so the next panel could " +
            "be replicated from a drawing rather than from memory.",
          sections: [
            {
              heading: "What the work involved",
              body:
                "Each panel dealt with different " +
                "voltage requirements, such as 120V for lower efficiency machines, 220V for production " +
                "machines, and even 3-phase 220V. I had to cut DIN rail and wire shielding to match requirements. "+ 
                "From there I would have a 24V DC Power Supply deliver power to whatever the job required, " +
                "such as PLCs, Camera Vision Controllers, Solenoids, Motor Controllers, and other job-specific requirements. "+
                "Adhered to traditional wiring standards, such as using disconnects, relays, labeling both ends, etc.",
                
              points: [
                "Laid out and wired DIN rail assemblies: relays, power supplies, and disconnects",
                "Terminated field devices — proximity sensors, laser sensors, and solenoid valves",
                "Produced TinyCAD schematics for each build so panels could be replicated and maintained",
                "Handled the full assembly rather than handing a drawing to someone else to build"
              ]
            },
            {
              heading: "Why the documentation mattered",
              body:
                "An undocumented panel is a liability the moment the person who built it " +
                "leaves. Drawing each build in TinyCAD meant the plant kept a reference for " +
                "replication and for troubleshooting after my internship ended. " +
                "Additionally, it helped me keep my wiring organized and intentional from the beginning — " +
                "whenever I had any questions about design choices, I could check what I had already decided " +
                "would work."

            }
          ],
          specs: [
            { label: "Panels built",   value: "5+" },
            { label: "Scope",          value: "Design, layout, and full wiring assembly" },
            { label: "Components",     value: "Relays, power supplies, DIN rail, disconnects" },
            { label: "Field devices",  value: "Proximity sensors, laser sensors, solenoid valves" },
            { label: "Documentation",  value: "TinyCAD schematics for replication" }
          ],

          /* Photo / video gallery — see the format notes on the zipper cap
             project above. A panel interior next to its TinyCAD schematic is
             the single most convincing pair of images you can put here. */
          media: [
            /* --- the panels --- */
            { src: "assets/img/projects/production-control-panels/01-panel-interior.jpg", wide: true,
              caption: "Panel interior — Omron CP1E, two Keyence vision amplifiers, 24 VDC supply and breakers on DIN rail. Every conductor is ferruled and labelled with the same tag it carries in the PLC program: AI_TRG, GOOD_1, BAD_1." },
            { src: "assets/img/projects/production-control-panels/02-panel-installed.jpg",
              caption: "Installed on the machine with a lockable main disconnect on the door, so the panel is isolated and locked out before anyone opens it." },
            { src: "assets/img/projects/production-control-panels/03-hmi-enclosure.jpg",
              caption: "The operator station — touchscreen HMI in its own enclosure on a post at the machine, wired back to the main panel." },

            /* --- PLC --- */
            { src: "assets/img/projects/production-control-panels/04-plc-queue-subroutine.jpg",
              caption: "The queue subroutine in CX-Programmer. Parts are inspected several stations before they reach the reject point, so each decision is held in a three-deep queue (D10–D12) and shifted along as parts advance — the reject fires on the right part, not the one currently under the camera." },

            /* --- drawings --- */
            { src: "assets/img/projects/production-control-panels/05-schematic-sheet-1.png",
              caption: "TinyCAD schematic, sheet 1 — drawn so the panel can be rebuilt and maintained from a drawing rather than from memory." },
            { src: "assets/img/projects/production-control-panels/06-schematic-sheet-2.png",
              caption: "Sheet 2 of the same set, covering the rest of the panel's field wiring." }
          ]
        }
      },
      {
        slug: "frc-9150-robot-control",
        title: "FRC Team 9150 — Robot Control Software",
        tags: ["robotics", "software", "vision"],
        image: "assets/img/projects/frc-9150-robot-control/01-proteus-at-competition.jpg",
        imagePlaceholder: "ROBOT PHOTO 1600×900",
        desc:
          "The full robot codebase for the 2025 Reefscape season — CTRE swerve drive, a " +
          "closed-loop elevator running motion profiling with gravity feedforward, a " +
          "sensor-driven intake, and a Limelight AprilTag routine that parks the robot on a " +
          "scoring pose by closing three PID loops at once.",
        metrics: [
          { value: "3rd", label: "HIGHEST SCORING, 2025 NC EVENTS" },
          { value: "122", label: "COMMITS, 2025 SEASON" },
          { value: "25+", label: "STUDENTS MENTORED" }
        ],
        chips: ["Java", "WPILib", "CTRE Swerve", "Limelight", "PID", "Motion Profiling"],
        links: [
          { label: "Source", href: "https://github.com/LabyrinthRobotics9150/Proteus", icon: "code" }
        ],

        detail: {
          role: "Software developer, now lead programming mentor",
          context: "FIRST Robotics Competition, Team 9150 Labyrinth Robotics · Morganton, NC · Aug 2024 — Present",
          summary:
            "122 commits of Java on WPILib covering four subsystems and the autonomous " +
            "routines that tie them together. I'd been around " +
            '<a href="https://labyrobots.org" target="_blank" rel="noopener">Labyrinth Robotics</a> ' +
            "in an advising role since the start of the 2024 school year, then took on the " +
            "programming in January 2025 with no robotics experience and an empty programming " +
            "team. The 2025 robot posted the third-highest scoring performance across North " +
            "Carolina events that season.",
          sections: [
            {
              heading: "Starting with no programmers",
              body:
                "The team had a robot to build and nobody to write code for it, and I had never " +
                "touched robotics. Everything below I learned during the 2025 build season and " +
                "the competitions that followed — PID tuning, motion profiling, vision " +
                "integration, and how to find a fault on a machine that only misbehaves under load.",
              points: [
                "Wrote the complete control software in Java on WPILib, on a CTRE swerve drivetrain",
                "Built two scoring mechanisms — an elevator and a pivoting intake — that operate independently without fighting each other",
                "Integrated Limelight AprilTag vision for target acquisition and automatic alignment",
                "Wrote the autonomous routines that sequence drive, elevator, and scoring",
                "Owned architecture, debugging, and performance across the whole codebase"
              ]
            },
            {
              heading: "Closed-loop elevator",
              body:
                "The elevator is the part of this project closest to industrial motion " +
                "control. Two REV SparkFlex controllers run leader-follower on a relative " +
                "encoder scaled to 0.11 inches per revolution. A trapezoidal profile generates " +
                "the setpoints — capped at 24 in/s and 16 in/s² — which feed a position PID " +
                "loop, with a gravity feedforward term so the carriage holds its height instead " +
                "of sagging under its own weight when the loop is near zero error.",
              points: [
                "Trapezoidal motion profiling into a closed-loop position controller (kP 2.0)",
                "Gravity feedforward (kG 1.0 V) plus velocity feedforward, so holding a height doesn't depend on steady-state error",
                "Forward and reverse limit switches interrupt travel and hold position at the stops rather than stalling into them",
                "Explicit disable and kill paths so the mechanism fails safe if the robot is disabled mid-motion"
              ]
            },
            {
              heading: "Three-axis vision alignment",
              body:
                "The alignment command reads the robot's pose in AprilTag space from the " +
                "Limelight and runs three independent PID controllers at once — forward " +
                "distance, lateral offset, and heading — to drive the robot onto a scoring " +
                "position without a driver lining it up. Left and right scoring poses are the " +
                "same routine with a mirrored lateral setpoint.",
              points: [
                "Three concurrent PID loops: X (kP 0.7), Y (kP 1.3), rotation (kP 6)",
                "Tolerance windows of 0.5 units on each translation axis and 2° on heading",
                "Completes only once all three loops hold setpoint continuously for 0.3 s — so it can't call itself done while still oscillating",
                "Aborts if the tag leaves the frame for 0.5 s instead of driving blind on a stale pose"
              ]
            },
            {
              heading: "Sensor-driven intake",
              body:
                "Three SparkFlex motors — pivot, funnel, and intake wheels — with an absolute " +
                "encoder on the pivot and a LaserCan time-of-flight sensor to detect a game " +
                "piece. The pivot runs the same profile-plus-PID approach as the elevator, " +
                "moving between named positions rather than timed guesses, so it lands the same " +
                "way whether the battery is fresh or nearly flat."
            },
            {
              heading: "Handing it over",
              body:
                "When I graduated I left behind a team with zero programmers again. They " +
                "recruited replacements and I taught them Java and WPILib over virtual " +
                "sessions. I helped them plan the 2026 code, but the season was mostly theirs — " +
                "which is the real measure of whether the handover worked.",
              points: [
                "Lead Mentor for 25+ students, teaching Java, WPILib, and robotics programming fundamentals",
                "Set the architecture and review standards the team still codes against"
              ]
            },
            {
              heading: "Why this is controls work",
              body:
                "Strip the game away and this is a plant with actuators, encoders, limit " +
                "switches, a time-of-flight sensor, and a vision system, running profiled " +
                "closed-loop moves with feedforward compensation, tolerance windows, and " +
                "timeout handling on every automatic routine. Those are the same techniques a " +
                "servo axis or a pick-and-place station needs. The plant is different; the " +
                "reasoning isn't — and neither is the part where something works on the bench, " +
                "fails on the field, and you have to find out why with the match clock running."
            }
          ],
          specs: [
            { label: "Season",     value: "2025 Reefscape · 122 commits" },
            { label: "Language",   value: "Java on WPILib" },
            { label: "Drivetrain", value: "CTRE swerve (CommandSwerveDrivetrain)" },
            { label: "Elevator",   value: "2× REV SparkFlex, PID + trapezoidal profile + gravity feedforward" },
            { label: "Intake",     value: "3× SparkFlex, absolute encoder, LaserCan ToF sensor" },
            { label: "Vision",     value: "Limelight AprilTag, three-axis PID alignment" },
            { label: "Events",     value: "FNC District Catawba County · FNC District UNC Asheville" },
            { label: "Result",     value: "3rd-highest scoring performance across 2025 NC events" },
            { label: "Team role",  value: "Software developer (2024–25); lead programming mentor to 25+ students (2025–present)" }
          ],
          /* Photos / video for this project. Same format as the zipper cap
             project above: { src, caption, poster, wide }. */
          media: []
        }
      },
      {
        slug: "spotcord",
        title: "Spotcord — Spotify Streaming for Discord",
        tags: ["software"],
        image: "assets/img/projects/spotcord/banner.png",
        imagePlaceholder: "BANNER 1600×900",
        desc:
          "A Java Discord bot that streams your Spotify session into a voice channel — not " +
          "just API playback control. Audio runs through a librespot → FFmpeg → PCM pipeline " +
          "into Discord's audio system, with OAuth tokens AES-encrypted in SQLite and " +
          "refreshed on a background thread.",
        metrics: [
          { value: "20 ms", label: "AUDIO FRAME CADENCE" },
          { value: "48 kHz", label: "RESAMPLED FOR DISCORD" },
          { value: "AES", label: "ENCRYPTED TOKENS" }
        ],
        chips: ["Java 18", "JDA", "Spotify Web API", "FFmpeg", "SQLite", "OAuth 2.0"],
        links: [
          { label: "Source", href: "https://github.com/robertburdsall/spotcord", icon: "code" }
        ],

        detail: {
          role: "Solo project",
          context: "Independent · May 2024 — Present",
          summary:
            "Most Spotify Discord bots just call the Web API to press play on a device you " +
            "already own. Spotcord actually pipes the audio into the voice channel so a group " +
            "hears the same thing together — which turns it from an API wrapper into a " +
            "real-time audio and process-management problem.",
          sections: [
            {
              heading: "The audio pipeline",
              body:
                "Getting Spotify audio into Discord means moving bytes between two processes " +
                "and a network sink that all want different formats and rates, without letting " +
                "any of them stall the others. A librespot subprocess decodes the stream; its " +
                "output is piped into FFmpeg, which resamples to the 48 kHz stereo Discord " +
                "requires; a reader thread cuts that into fixed 3,840-byte frames — exactly " +
                "20 ms of audio — and hands them to Discord's send handler one at a time.",
              points: [
                "Three daemon threads: one pumping librespot's output into FFmpeg, one reading fixed-size frames out, and one draining stderr so a full pipe buffer can't deadlock the process",
                "A bounded blocking queue between the reader and the send handler provides backpressure — if Discord consumes slower than FFmpeg produces, the reader blocks instead of growing memory without limit",
                "Frames are sized to the 20 ms cadence Discord expects, so playback doesn't drift or stutter",
                "Subprocesses are torn down explicitly on stop, rather than left running when playback ends"
              ]
            },
            {
              heading: "Account linking and token lifecycle",
              body:
                "Linking an account means holding someone else's OAuth credentials, which is a " +
                "real responsibility rather than a checkbox. A small embedded callback server " +
                "handles the OAuth redirect, and the returned access and refresh tokens are " +
                "AES-encrypted before they're written to SQLite — so a copy of the database " +
                "file doesn't hand over anyone's account.",
              points: [
                "Embedded HTTP server receives the OAuth callback and completes the code exchange",
                "Tokens encrypted at rest with AES rather than stored as plaintext",
                "A background refresh thread wakes every 40 minutes and renews every active session, keyed per user, so links survive well past Spotify's one-hour token expiry",
                "Slash commands for linking, unlinking, playback control, and joining a voice channel"
              ]
            },
            {
              heading: "What I'd tell you about it in an interview",
              body:
                "The interesting failure mode here isn't the API — it's the pipeline. If any " +
                "stage in a chain of pipes stops being drained, the whole thing wedges, and " +
                "the symptom is silence rather than an exception. Building it taught me to " +
                "reason about where data can pile up and what happens at each boundary when a " +
                "consumer slows down, which is the same question as a conveyor backing up " +
                "behind a stalled station."
            }
          ],
          specs: [
            { label: "Language",    value: "Java 18, Maven (shaded executable JAR)" },
            { label: "Discord",     value: "JDA 5.6.1 — custom AudioSendHandler" },
            { label: "Spotify",     value: "spotify-web-api-java 8.4.0 + librespot" },
            { label: "Audio",       value: "FFmpeg resample to 48 kHz, 3,840-byte PCM frames" },
            { label: "Concurrency", value: "3 daemon threads, bounded queue for backpressure" },
            { label: "Storage",     value: "SQLite with AES-encrypted OAuth tokens" },
            { label: "Token refresh", value: "Background thread, 40-minute cycle" }
          ],
          /* Photos / video for this project. Same format as the zipper cap
             project above: { src, caption, poster, wide }. */
          media: []
        }
      },
      {
        slug: "aurum",
        title: "Aurum — Coin Identification &amp; Portfolio Tracking",
        tags: ["software"],
        image: "assets/img/projects/aurum/00-cover.jpg", imagePlaceholder: "APP SCREENSHOT 1600×900",
        desc:
          "A cross-platform <strong>Flutter</strong> app that identifies a coin from your " +
          "camera and tracks what a collection is actually worth by metal content rather than " +
          "face value. One Dart codebase running on iOS and Android, with on-device TensorFlow " +
          "Lite recognition, live bullion pricing, and portfolio history syncing between local " +
          "SQLite and an Express/JWT backend.",
        metrics: [
          { value: "108", label: "U.S. COINS CATALOGUED" },
          { value: "iOS + Android", label: "ONE FLUTTER CODEBASE" },
          { value: "24", label: "MILESTONES IN 12 WEEKS" }
        ],
        chips: ["Dart", "Flutter", "TensorFlow Lite", "Express.js", "SQLite", "JWT"],
        links: [
          { label: "Source", href: "https://github.com/AurumMetals/aurum", icon: "code" }
        ],

        detail: {
          role: "Solo — model, client, and backend",
          context: "Independent · Sep 2024 — Dec 2024",
          summary:
            "A cross-platform Flutter app covering 108 U.S. coins. Search and filter the " +
            "catalogue, see what each coin is worth by metal content rather than face value, " +
            "photograph one to identify it, and track a portfolio whose value moves with live " +
            "bullion prices. Built solo across twelve weeks — the Flutter client, the Express " +
            "backend, and the recognition model — and demoed running on both iOS and Android.",
          sections: [
            {
              heading: "The idea",
              body:
                "A coin's face value and its metal value diverge, sometimes wildly — a pre-1965 " +
                "U.S. quarter is 90% silver and worth many times twenty-five cents. Aurum makes " +
                "that difference visible: every coin shows its live bullion value, its face " +
                "value, and the premium between them, with a pie chart breaking down which " +
                "metals it's actually made of.",
              points: [
                "Catalogue of 108 U.S. coins with composition, mint date range, and live metal pricing",
                "Sort by metal value, face value, or first minted; search by name",
                "Per-coin detail view with a metal-composition breakdown and a legend",
                "Add any coin to a portfolio directly from its detail view"
              ]
            },
            {
              heading: "Portfolio tracking",
              body:
                "The portfolio page values a holding continuously rather than at purchase " +
                "price, because the underlying metal price is what actually moves.",
              points: [
                "Total portfolio value recomputed against live bullion pricing",
                "Value-over-time graph that updates whenever the portfolio changes",
                "Composition pie charts split two ways — by number of coins and by value — because those tell you different things",
                "Per-coin cards with editable quantities and search across the portfolio"
              ]
            },
            {
              heading: "Identification and architecture",
              body:
                "The whole client is a single <strong>Flutter</strong> codebase in Dart, " +
                "running on both iOS and Android from the same source. Recognition goes " +
                "through a TensorFlow Lite model on the phone rather than a server round-trip, " +
                "so identifying a coin doesn't depend on signal — and the local SQLite store " +
                "mirrors the server-side tables, so a portfolio works offline and syncs once " +
                "you sign in.",
              points: [
                "One Flutter/Dart codebase targeting iOS and Android — no platform-specific forks",
                "On-device TensorFlow Lite inference — no upload, no waiting on a network call",
                "Confirmation step before anything is added, so a wrong prediction doesn't silently corrupt a portfolio",
                "Express.js API with JWT authentication over JSON endpoints",
                "Local SQLite mirrored to server tables — portfolios exist offline and sync when an account is attached"
              ]
            },
            {
              heading: "Shipping an alpha honestly",
              body:
                "I wrote a nine-page user guide for the release covering installation, every " +
                "feature, and — the part that matters — what doesn't work yet. The recognition " +
                "model handles four coins from the obverse only, and I documented that plainly " +
                "instead of demoing around it. Knowing the boundary of what your system can do, " +
                "and stating it, is worth more than a clean demo that falls over the first time " +
                "someone uses it differently than you did.",
              points: [
                "Distributed the alpha as an Android build because iOS releases have to be compiled on macOS, which I didn't have access to — the app itself ran on iOS and I demoed it there",
                "Documented the model's real scope rather than restricting the demo to hide it",
                "Wrote the guide for someone who had never seen the app, not for a grader who already knew what it did"
              ]
            }
          ],
          specs: [
            { label: "Client",      value: "Flutter / Dart — one codebase, iOS and Android" },
            { label: "Inference",   value: "TensorFlow Lite, on-device" },
            { label: "Backend",     value: "Express.js, JSON API, JWT auth" },
            { label: "Storage",     value: "Local SQLite mirrored to server tables" },
            { label: "Catalogue",   value: "108 U.S. coins with composition data" },
            { label: "Recognition", value: "Penny, nickel, dime, quarter (obverse) — alpha scope" },
            { label: "Distribution", value: "Android build for release; ran on iOS in demo" },
            { label: "Built",       value: "Sep — Dec 2024 · 24 tracked milestones" }
          ],

          /* The PDF renders inline on the project page with a download button. */
          documents: [
            {
              src: "assets/docs/aurum-user-guide.pdf",
              title: "Aurum User Guide — Alpha Release",
              note:
                "Nine pages covering installation, every feature, and the known limitations " +
                "of the alpha. Written for people who had never seen the app."
            }
          ],

          /* Screens from the alpha build, taken from the user guide. `tall: true`
             gives phone screenshots a portrait tile instead of a 4:3 crop. */
          media: [
            { src: "assets/img/projects/aurum/01-screen-006.jpg", tall: true,
              caption: "The catalogue — every coin with its live bullion value and mint date range, searchable and sortable." },
            { src: "assets/img/projects/aurum/02-screen-012.jpg", tall: true,
              caption: "Coin detail: live bullion value against face value, with a metal-composition chart — this Double Eagle is 90% gold." },
            { src: "assets/img/projects/aurum/03-screen-018.jpg", tall: true,
              caption: "Portfolio overview — total value against live pricing, value over time, and composition split by count and by value." },
            { src: "assets/img/projects/aurum/04-screen-021.jpg", tall: true,
              caption: "The portfolio list, with per-coin quantities and live values." },
            { src: "assets/img/projects/aurum/05-screen-025.jpg", tall: true,
              caption: "On-device recognition: the camera identifies a Roosevelt dime and asks for confirmation before anything is saved." },
            { src: "assets/img/projects/aurum/06-screen-028.jpg", tall: true,
              caption: "After confirming, the user sets a quantity and the coin is added to the portfolio." }
          ]
        }
      }
    ],

    /* Labels on the project detail pages. */
    detailLabels: {
      viewLabel:   "Read more",
      back:        "All projects",
      gallery:     "Photos &amp; video",
      documents:   "Documentation",
      download:    "Download PDF",
      lightboxClose: "Close",
      lightboxPrev:  "Previous",
      lightboxNext:  "Next",
      overview:    "Overview",
      specs:       "At a glance",
      role:        "Role",
      context:     "Where &amp; when",
      prev:        "Previous project",
      next:        "Next project",
      notFound:    "That project doesn't exist.",
      notFoundCta: "View all projects"
    },

    emptyMessage: "No projects tagged with that yet.",

    /* The panel at the bottom of the projects page */
    cta: {
      eyebrow: "Want the full picture?",
      title: "Walk the ",
      titleAccent: "timeline",
      sub: "Every role, project, and milestone laid out year by year.",
      primary: { label: "View timeline", href: "index.html#timeline" },
      secondary: { label: "Email me" }
    }
  }
};
