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
    phone:    "704-305-0517",
    linkedin: "https://linkedin.com/in/robertburdsall",
    github:   "https://github.com/robertburdsall",

    location:      "Raleigh, NC",
    locationNote:  "open to relocation",
    workAuth:      "Authorized to work in the U.S."
  },

  /* Top-right navigation links */
  nav: [
    { label: "Timeline",        href: "index.html" },
    { label: "Resume",          href: "resume.html" },
    { label: "Recent Projects", href: "projects.html" }
  ],
  navCta: { label: "Contact", href: "index.html#contact" },

  footer: {
    note: "Built from scratch — no template."
  },

  /* ==========================================================================
     2. HOME PAGE
     ========================================================================== */
  home: {

    /* ---- The top of the page ---- */
    hero: {
      eyebrow: "Hello — I'm",

      /* The rotating line. First item shows first, then it cycles forever. */
      roleStatic: "I build",
      roleWords: [
        "machine vision inspection systems",
        "electrical control panels",
        "PLC logic for production machinery",
        "software that runs on the factory floor",

      ],

      /* Your intro paragraph */
      bio:
        "I'm an <strong>Electrical &amp; Computer Engineering</strong> student at " +
        "<strong>NC State</strong> with industry experience in PLC programming, electrical " +
        "panel design, and machine vision integration. I came from software to hardware — I " +
        "started writing Java plugins for a Minecraft server that grew to " +
        "<strong>100,000 unique players</strong>, before pursuing advanced Computer Science " +
        "at the North Carolina School of Science and Math - the " +
        "<strong>#1 Public Residential High School in America</strong>. " +
        "That background is why I'm comfortable on both sides " +
        "of a control system: the panel and the code running on it. Looking for a " +
        "<strong>Summer 2027 controls or automation engineering internship</strong>.",

      /* The green-dot pill under your photo */
      badge: "Open to Summer 2027 internships",

      /* Your photo. Put the file in assets/img/ and change the name here. */
      photo:    "assets/img/profilephoto.jpg",
      photoAlt: "Portrait of Robert Burdsall",

      buttons: [
        { label: "Download Résumé", href: "assets/resume.pdf", style: "primary", icon: "download", download: true },
        { label: "View Projects",   href: "projects.html",     style: "ghost",   icon: "arrow" }
      ],

      scrollCue: "Scroll through my story"
    },

    /* ---- Timeline section heading ---- */
    timeline: {
      eyebrow: "The path so far",
      title: "Experience ",
      titleAccent: "Timeline",
      sub:
        "Ten years, from a Boy Scout troop and a Minecraft server to the production floor. " +
        "Scroll to move through it, or jump to a year using the rail.",

      /* ======================================================================
         TIMELINE ENTRIES — oldest first.

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

        {
          year: "2020", type: "project", tag: "Where it started",
          date: "2020 — 2022",
          title: "Minecraft Server &amp; Java Plugins",
          titleNote: "(Sourceadmin)",
          org: "Independent · 1.5K subscribers, 127 videos",
          desc:
            "This is what got me into programming. I ran a public Minecraft server that " +
            "reached <strong>100,000 unique players</strong> and wrote the Java plugins that " +
            "kept it running, promoting it through a gaming channel where I learned " +
            "recording, editing, and content production.",
          points: [
            "Wrote custom server-side Java plugins for gameplay, moderation, and administration",
            "Operated live infrastructure for a community of <strong>100,000 unique players</strong>",
            "Built the audience that led directly to a paid role at a server hosting company"
          ],
          chips: ["Java", "Plugin Development", "Server Administration", "Content Production"]
        },

        {
          year: "2021", type: "work", tag: "Work",
          date: "May 2021 — Nov 2022",
          title: "Director of NA Operations",
          org: "Cryhosting LLC · Server Hosting",
          desc:
            "Started as an unpaid support operative and moved into a larger, paid leadership " +
            "role after three months — while still in high school.",
          points: [
            "Managed all North American servers and the support operatives running them",
            "Trained support operatives and set the standard for customer response",
            "Led creative partnerships with content creators",
            "Led development and maintenance on backend financial systems"
          ],
          chips: ["Operations Management", "Team Leadership", "Backend Systems", "Partnerships"]
        },

        {
          year: "2021", type: "project", tag: "Education",
          date: "2021 — 2023",
          title: "Highpurity — Server Administration Tutorials",
          org: "Independent · 31 videos, 250K+ total views",
          desc:
            "A deliberately professional educational channel teaching people how to run " +
            "their own Minecraft servers, with a companion website carrying a written " +
            "tutorial for every video. Topics were genuine systems administration: " +
            "voice-chat integration, live server mapping, chunk pregeneration for lag " +
            "mitigation, and DDoS protection.",
          points: [
            "Most-watched tutorial reached <strong>68,000 views</strong>; several others cleared 12K–46K",
            "Wrote and published a matching written tutorial for each video",
            "Scripted, recorded, and edited every video to a consistent production standard"
          ],
          chips: ["Technical Writing", "Server Administration", "Video Production", "Documentation"],
          /* Delete the next line if you'd rather not link the channel. */
          link: { label: "Visit the channel", href: "https://youtube.com/@highpurity" }
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
          year: "2024", type: "project", tag: "Robotics",
          date: "Jan 2024 — Present",
          title: "FIRST Robotics Competition — Team 9150",
          org: "NC School of Science and Mathematics · Morganton, NC",
          points: [
            "Designed and implemented full robot control software in Java using WPILib, achieving the <strong>3rd-highest scoring performance in North Carolina</strong> with integrated vision and dual scoring systems",
            "Led all programming efforts, overseeing system architecture, debugging, and performance optimization",
            "Mentor for <strong>25+ students</strong>, teaching Java, WPILib, and robotics programming fundamentals"
          ],
          chips: ["Java", "WPILib", "CTRE-Phoenix", "REV", "Machine Vision"]
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
          year: "2024", type: "work", tag: "Work",
          date: "May 2024 — Jan 2026",
          title: "Sales Associate",
          org: "Best Buy · Charlotte, NC",
          desc:
            "Named <strong>Store Leader in June 2024 and June 2025</strong>. Specialized in " +
            "computer sales, assessing customer needs and recommending tailored solutions, " +
            "and consistently exceeded sales goals — leading the store in memberships and " +
            "total revenue for multiple months.",
          chips: ["Customer Needs Analysis", "Technical Sales"]
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
          year: "2025", type: "education", tag: "Education",
          date: "Aug 2025 — May 2028",
          title: "B.E. Electrical &amp; Computer Engineering",
          org: "North Carolina State University · Raleigh, NC",
          desc:
            "Bachelor of Engineering in Electrical and Computer Engineering, currently " +
            "carrying a <strong>3.5 GPA</strong>. The pivot from software into hardware and " +
            "controls — and the point where the two backgrounds started reinforcing each other.",
          chips: ["Circuits", "Embedded Systems", "Controls"]
        },

        {
          year: "2026", type: "work", tag: "Internship",
          date: "May 2026 — Aug 2026",
          title: "Electrical Engineering Intern",
          org: "IDEAL Fastener Corporation · Oxford, NC",
          desc:
            "Hands-on controls work on live production machinery — panels, PLCs, and vision " +
            "systems running on the factory floor.",
          points: [
            "Designed and fabricated <strong>5+ electrical control panels</strong> for production machinery, handling full wiring assembly (relays, power supplies, DIN rail, disconnects, proximity/laser sensors, solenoid valves) and producing TinyCAD schematics for future replication",
            "Programmed Omron PLCs using CX-Programmer to implement automated machine control logic, and configured and trained Keyence IV3/IV4 vision systems — defining inspection criteria and teaching defect recognition — to upgrade <strong>3 existing floor machines</strong> for real-time quality detection",
            "Led end-to-end design of a zipper cap inspection machine inspecting <strong>120 caps/min</strong>, featuring trained Keyence vision inspection, vacuum ejection, solenoid valve sequencing, a DOPSoft HMI, and PLC-driven quality tracking with alarm functionality for good/bad rate monitoring"
          ],
          chips: ["Omron PLC", "CX-Programmer", "Keyence IV3/IV4", "DOPSoft HMI", "TinyCAD", "Panel Wiring"]
        },

        {
          year: "2027", type: "future", tag: "Next",
          date: "Summer 2027",
          title: "Your team?",
          desc:
            "I'm looking for a Summer 2027 controls or automation engineering internship " +
            "where I can own a real panel, a real machine, or a real line. If that sounds " +
            "like your team, I'd love to talk.",
          link: { label: "Get in touch", href: "#contact", style: "primary" }
        },

        {
          year: "2028", type: "education", tag: "Graduation",
          date: "May 2028",
          title: "B.E.E.C.E. Conferred",
          org: "NC State University · Raleigh, NC",
          desc: "Graduating May 2028 and looking for full-time controls engineering work from there."
        }

      ]
    },

    /* ---- The "why this combination" panel ---- */
    angle: {
      eyebrow: "Why this combination",
      title: "Controls engineer with a<br />",
      titleAccent: "software background",
      body:
        "Most controls candidates learn to code because the job required it. I spent six " +
        "years writing software, running live infrastructure, and managing operations before " +
        "I ever wired a panel — so when a machine needs custom logic, a data pipeline, or a " +
        "piece of tooling that doesn't exist yet, that isn't the hard part. Industrial " +
        "automation is moving toward exactly that intersection, and I'm already standing on it."
    },

    /* ---- Skills cards ---- */
    skills: {
      eyebrow: "Toolbox",
      title: "What I ",
      titleAccent: "work with",
      sub:
        "Every item here is something I've actually shipped with — on a production floor, a " +
        "competition robot, live server infrastructure, or a released app.",
      cards: [
        { icon: "plc",    title: "Industrial Automation",
          chips: ["Omron PLCs", "CX-Programmer", "DOPSoft HMI", "Machine Control Logic", "Solenoid Sequencing", "Alarm Handling"] },
        { icon: "vision", title: "Machine Vision",
          chips: ["Keyence IV3 / IV4", "SmartNavigator", "Defect Recognition", "Inspection Criteria", "Real-Time QC", "Vacuum Ejection"] },
        { icon: "bolt",   title: "Electrical Panel Design",
          chips: ["Control Panels", "TinyCAD", "DIN Rail", "Relays", "Power Supplies", "Disconnects", "Proximity / Laser Sensors"] },
        { icon: "code",   title: "Languages",
          chips: ["Java", "Python", "C / C++", "Dart", "SQL", "JavaScript", "HTML/CSS"] },
        { icon: "grid",   title: "Libraries &amp; Frameworks",
          chips: ["pandas", "NumPy", "Matplotlib", "TensorFlow Lite", "WPILib", "CTRE-Phoenix", "REV", "Flutter", "Express.js"] },
        { icon: "cube",   title: "Developer Tools",
          chips: ["Git", "Docker", "Maven", "SQLite", "Google Cloud", "VS Code", "IntelliJ", "Android Studio", "Xcode"] },
        { icon: "layers", title: "CAD &amp; Fabrication",
          chips: ["SolidWorks", "TinyCAD", "Prusa Slicer", "Cura", "3D Printing"] },
        { icon: "shield", title: "Operations &amp; Communication",
          chips: ["Team Leadership", "Training &amp; Onboarding", "Technical Writing", "Documentation", "Live Infrastructure", "Partnerships"] }
      ]
    },

    /* ---- The four big numbers.  count = the number it counts up to. ---- */
    facts: [
      { count: 120, suffix: "",  label: "Caps/min inspection rate" },
      { count: 5,   suffix: "+", label: "Control panels designed &amp; wired" },
      { count: 100, suffix: "K", label: "Unique players on my server" },
      { count: 175, suffix: "+", label: "Students taught &amp; mentored" }
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
      title: "Currently interviewing for<br />",
      titleAccent: "Summer 2027 internships",
      sub: "Fastest way to reach me is email — I reply within a day. Résumé is one click away.",
      copyLabel: "Copy email",
      resumeLabel: "Résumé (PDF)"
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
        "<strong>Seeking:</strong> Controls / Automation Internship, Summer 2027",
        "<strong>Major:</strong> B.E. Electrical &amp; Computer Engineering",
        "<strong>School:</strong> NC State University",
        "<strong>GPA:</strong> 3.5",
        "<strong>Graduating:</strong> May 2028",
        "<strong>Background:</strong> 6 years software &amp; operations before engineering",
        "<strong>Location:</strong> Raleigh, NC (open to relocation)",
        "<strong>Work auth:</strong> U.S. — no sponsorship needed"
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
      title: "Objective",
      body:
        "Electrical and Computer Engineering student at NC State with industry experience in " +
        "PLC programming, electrical panel design, and machine vision integration, seeking a " +
        "Summer 2027 controls or automation engineering internship to apply industrial " +
        "automation expertise in manufacturing systems. Six years of prior software " +
        "development and operations leadership — including running live infrastructure for a " +
        "100,000-player community — means I bring a software engineer's toolkit to problems " +
        "that increasingly need one."
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
            role: "Bachelor of Engineering, Electrical &amp; Computer Engineering",
            when: "Aug 2025 — May 2028",
            org: "North Carolina State University · Raleigh, NC · GPA 3.5"
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
              "Designed and fabricated 5+ electrical control panels for production machinery, handling full wiring assembly (relays, power supplies, DIN rail, disconnects, proximity/laser sensors, solenoid valves) and producing TinyCAD schematics for future replication.",
              "Programmed Omron PLCs using CX-Programmer to implement automated machine control logic, and configured and trained Keyence IV3/IV4 vision systems — defining inspection criteria and teaching defect recognition — to upgrade 3 existing floor machines for real-time quality detection.",
              "Led end-to-end design of a zipper cap inspection machine inspecting 120 caps/min, featuring trained Keyence vision inspection, vacuum ejection, solenoid valve sequencing, a DOPSoft HMI, and PLC-driven quality tracking with alarm functionality for good/bad rate monitoring."
            ],
            chips: ["Omron PLC", "CX-Programmer", "Keyence IV3/IV4", "DOPSoft", "TinyCAD"]
          },
          {
            role: "Programming Lead &amp; Mentor",
            when: "Jan 2024 — Present",
            org: "FIRST Robotics Competition, Team 9150 · NCSSM · Morganton, NC",
            points: [
              "Designed and implemented full robot control software in Java using WPILib, achieving 3rd-highest scoring performance in North Carolina with integrated vision and dual scoring systems.",
              "Led all programming efforts, overseeing system architecture, debugging, and performance optimization.",
              "Mentor for 25+ students, teaching Java, WPILib, and robotics programming fundamentals."
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
            role: "Highpurity — Server Administration Tutorial Channel &amp; Site",
            when: "2021 — 2023",
            org: "Technical Writing, Video Production · 31 videos, 250K+ total views",
            points: [
              "Produced an educational channel teaching Minecraft server administration, covering voice-chat integration, live server mapping, chunk pregeneration for lag mitigation, and DDoS protection.",
              "Wrote and published a companion website with a written tutorial matching every video.",
              "Most-watched tutorial reached 68,000 views, with several others between 12K and 46K."
            ],
            chips: ["Technical Writing", "Documentation", "Video Production"]
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
        { label: "Languages",          chips: ["Java", "Python", "C/C++", "Dart", "SQL", "JavaScript", "HTML/CSS"] },
        { label: "Libraries",          chips: ["pandas", "NumPy", "Matplotlib", "TensorFlow Lite", "WPILib", "CTRE-Phoenix", "REV"] },
        { label: "Developer Tools",    chips: ["Git", "Docker", "XCode", "Android Studio", "Google Cloud Platform", "VS Code", "TensorFlow", "IntelliJ"] },
        { label: "Design &amp; Automation", chips: ["SolidWorks", "Prusa Slicer", "Cura", "TinyCAD", "Keyence SmartNavigator", "CX-Programmer", "DOPSoft"] }
      ]
    },

    pdfTitle: "The PDF"
  },

  /* ==========================================================================
     4. PROJECTS PAGE
     ========================================================================== */
  projects: {
    eyebrow: "Selected work",
    title: "Recent ",
    titleAccent: "projects",
    sub: "Systems I've built — on a production floor, on a competition robot, and on my own.",

    /* Filter buttons. `key` must match a word in each project's `tags` list. */
    filters: [
      { key: "all",        label: "All" },
      { key: "automation", label: "Automation" },
      { key: "vision",     label: "Machine Vision" },
      { key: "electrical", label: "Electrical" },
      { key: "robotics",   label: "Robotics" },
      { key: "software",   label: "Software" },
      { key: "content",    label: "Content &amp; Teaching" }
    ],

    /* ======================================================================
       PROJECT CARDS.
       tags    : which filters this shows under
       image   : path to a 1600x900 image, or leave "" for the placeholder box
       metrics : the little number blocks
       links   : optional buttons
       ====================================================================== */
    items: [
      {
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
        chips: ["Omron PLC", "Keyence Vision", "DOPSoft HMI", "Solenoid Sequencing"]
      },
      {
        title: "Machine Vision Retrofit",
        tags: ["vision", "automation"],
        image: "", imagePlaceholder: "VISION SETUP 1600×900",
        desc:
          "Configured and trained Keyence IV3/IV4 vision systems on three existing floor " +
          "machines — defining inspection criteria and teaching defect recognition — to add " +
          "real-time quality detection to equipment that previously had none.",
        metrics: [
          { value: "3", label: "MACHINES UPGRADED" },
          { value: "Real-time", label: "DEFECT DETECTION" }
        ],
        chips: ["Keyence IV3/IV4", "SmartNavigator", "Defect Recognition"]
      },
      {
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
        chips: ["TinyCAD", "DIN Rail", "Relays", "Sensors", "Disconnects"]
      },
      {
        title: "FRC Team 9150 — Robot Control Software",
        tags: ["robotics", "software", "vision"],
        image: "", imagePlaceholder: "ROBOT PHOTO 1600×900",
        desc:
          "Full robot control software in Java using WPILib, with integrated vision and dual " +
          "scoring systems. Now programming lead for the team, teaching the next cohort of " +
          "students the same stack.",
        metrics: [
          { value: "3rd", label: "HIGHEST SCORING IN NC" },
          { value: "25+", label: "STUDENTS MENTORED" }
        ],
        chips: ["Java", "WPILib", "Vision", "Mentorship"],
        links: [{ label: "Source", href: "https://github.com/robertburdsall", icon: "code" }]
      },
      {
        title: "Minecraft Server &amp; Java Plugins",
        tags: ["software", "content"],
        image: "", imagePlaceholder: "SERVER / PLUGIN SCREENSHOT 1600×900",
        desc:
          "The project that got me into programming. I built and operated a public Minecraft " +
          "server that reached 100,000 unique players, writing the custom server-side Java " +
          "plugins for gameplay, moderation, and administration — and running the live " +
          "infrastructure behind it. It led directly to a paid operations role at Cryhosting.",
        metrics: [
          { value: "100K", label: "UNIQUE PLAYERS" },
          { value: "1.5K", label: "SUBSCRIBERS" },
          { value: "127",  label: "VIDEOS" }
        ],
        chips: ["Java", "Plugin Development", "Server Administration", "Live Ops"]
      },
      {
        title: "Highpurity — Tutorial Channel &amp; Site",
        tags: ["content", "software"],
        image: "", imagePlaceholder: "CHANNEL / TUTORIAL SCREENSHOT 1600×900",
        desc:
          "An educational channel teaching people to run their own Minecraft servers, with a " +
          "companion website carrying a written tutorial for every video. Topics were real " +
          "systems administration: voice-chat integration, live server mapping, chunk " +
          "pregeneration for lag mitigation, and DDoS protection.",
        metrics: [
          { value: "68K",   label: "TOP VIDEO VIEWS" },
          { value: "250K+", label: "TOTAL VIEWS" },
          { value: "31",    label: "VIDEOS + WRITE-UPS" }
        ],
        chips: ["Technical Writing", "Documentation", "Server Administration", "Video Production"],
        /* Delete the links line below if you'd rather not surface the channel. */
        links: [{ label: "Visit channel", href: "https://youtube.com/@highpurity", icon: "link" }]
      },
      {
        title: "Spotcord — Discord-Controlled Spotify",
        tags: ["software"],
        image: "", imagePlaceholder: "APP SCREENSHOT 1600×900",
        desc:
          "A multithreaded Java Discord bot that remotely controls Spotify playback, handling " +
          "simultaneous user commands concurrently. Persists user and playback state in " +
          "SQLite and secures credentials with AES encryption.",
        metrics: [
          { value: "Multithreaded", label: "CONCURRENT COMMANDS" },
          { value: "AES", label: "ENCRYPTED CREDENTIALS" }
        ],
        chips: ["Java", "Maven", "SQLite", "Spotify API", "Discord API"],
        links: [{ label: "Source", href: "https://github.com/robertburdsall", icon: "code" }]
      },
      {
        title: "Aurum — Real-Time Coin Appraisal",
        tags: ["software"],
        image: "", imagePlaceholder: "APP SCREENSHOT 1600×900",
        desc:
          "Cross-platform Flutter app that appraises coins in real time using TensorFlow " +
          "Lite, with live value retrieval and portfolio tracking. Backed by an Express.js " +
          "service with JSON APIs and JWT authentication.",
        metrics: [
          { value: "On-device", label: "TF LITE INFERENCE" },
          { value: "iOS + Android", label: "CROSS-PLATFORM" }
        ],
        chips: ["Dart", "Flutter", "Python", "TensorFlow", "Express.js"],
        links: [{ label: "Source", href: "https://github.com/robertburdsall", icon: "code" }]
      },
      {
        title: "NCSSM Resource &amp; TA Tracking",
        tags: ["software", "content"],
        image: "", imagePlaceholder: "APP SCREENSHOT 1600×900",
        desc:
          "Two tools built with faculty while working as a computer science teaching " +
          "assistant: a cross-platform Flutter/Dart app for tracking school resources, and a " +
          "web-based TA tracking platform to streamline course management.",
        metrics: [
          { value: "Built with", label: "FACULTY" },
          { value: "150+", label: "STUDENTS SERVED" }
        ],
        chips: ["Flutter", "Dart", "Web"]
      }
    ],

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
