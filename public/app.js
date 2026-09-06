// ---------- data ----------
const TECH = [
  "MS Office", "Google Sheets", "SQL", "Data Management", "Data Visualization",
  "Dashboard Dev.", "HTML", "CSS3", "JavaScript", "PHP", "Flutter", "Dart",
  "MySQL", "Supabase", "MongoDB", "Figma", "Windows OS Support", "Adobe Photoshop", "Codeigniter 4", "Hostinger", "ChatGPT",
];

// Maps each TECH label to either a real brand logo (fetched from the Simple
// Icons CDN — https://cdn.simpleicons.org/<slug>) or a generic inline icon
// (from ICONS below) for things that aren't an actual branded product.
const TECH_ICON_MAP = {
  "MS Office": { type: "brand", slug: "microsoftoffice" },
  "Google Sheets": { type: "brand", slug: "googlesheets" },
  "SQL": { type: "generic", icon: "database" },
  "Data Management": { type: "generic", icon: "database" },
  "Data Visualization": { type: "generic", icon: "chart" },
  "Dashboard Dev.": { type: "generic", icon: "layout" },
  "HTML": { type: "brand", slug: "html5" },
  "CSS": { type: "brand", slug: "css3" },
  "JavaScript": { type: "brand", slug: "javascript" },
  "PHP": { type: "brand", slug: "php" },
  "Flutter": { type: "brand", slug: "flutter" },
  "Dart": { type: "brand", slug: "dart" },
  "MySQL": { type: "brand", slug: "mysql" },
  "Supabase": { type: "brand", slug: "supabase" },
  "MongoDB": { type: "brand", slug: "mongodb" },
  "Figma": { type: "brand", slug: "figma" },
  "Windows OS Support": { type: "brand", slug: "windows11" },
  "Photoshop": { type: "brand", slug: "adobephotoshop" },
  "Codeigniter 4": { type: "brand", slug: "codeigniter" },
  "ChatGPT": { type: "brand", slug: "chatgpt" },
  "Hostinger": { type: "brand", slug: "hostinger" },
};

const WHAT_I_DO = [
  { icon: "database", title: "Data Management", body: "Organizing, cleaning, and maintaining records in Google Sheets and SQL so information stays accurate and easy to act on." },
  { icon: "code", title: "Web Development (Basic)", body: "Building and improving websites with HTML, CSS, JavaScript, and PHP — I helped redesign a live company site during OJT." },
  { icon: "phone", title: "IT & Software Support", body: "Windows OS installs, printer and hardware troubleshooting, and everyday tech support for a small team." },
  { icon: "share", title: "Dashboards & Data Viz", body: "Building dashboards that make data easier to understand and track. Through working on admin systems and my OJT at a real estate company, I gained knowledge of how data flows through a website and how it can be organized and analyzed to support decisions." },

];

const ICONS = {
  database: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>',
  share: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98M15.41 6.51 8.59 10.49"/></svg>',
  code: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  phone: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>',
  briefcase: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  award: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5"/></svg>',
  chart: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>',
  layout: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
};

const SKILLS = [
  { label: "MS Office & Google Sheets", value: 88 },
  { label: "SQL & Data Management", value: 65 },
  { label: "HTML, CSS & JavaScript", value: 75 },
  { label: "PHP, Flutter & Dart", value: 63 },
  { label: "Figma (Basic Design)", value: 47 },
  { label: "Adobe Photoshop (Basic Design)", value: 38 },
];

const TRAITS = ["Time Management", "Communication Skills", "Willingness to Learn", "Resourcefulness", "Self-Motivated"];

const EDUCATION = [
  { period: "2022 – 2026", title: "BSIT — Systems Plus Computer College (SPCC)", note: "Bachelor of Science in Information Technology, Caloocan. Graduated May 16, 2026." },
  { period: "2020 – 2022", title: "K to 12 — Balingasa High School", note: "Senior high, Quezon City." },
  { period: "2014 – 2018", title: "Flores National High School", note: "Junior high, Pangasinan." },
  { period: "2007 – 2013", title: "Bagtong Elementary School", note: "Eastern Samar." },
];

const EXPERIENCE = [
  {
    period: "October 2025 – March 2026",
    title: "OJT / IT Support Intern",
    company: "Alpha Premier Group OPC — Ortigas",
    link: "https://alphapremiergroup.com/",
    bullets: [
      "Helped repair, redesign, and improve the company's existing website.",
      "Troubleshot printer issues — hardware problems, driver installation, network setup.",
      "Installed Windows OS on laptops for fellow interns and staff.",
      "Provided technical support to employees with hardware and software concerns.",
      "Collected and organized client information in Google Sheets for accurate record-keeping.",
      "Regularly updated and maintained the data in Google Sheets to keep information complete, accurate, and up to date.",
      "Reviewed and checked collected information to ensure records were accurate and complete before updating the data.",
    ],
  },
];

const CERTIFICATIONS = [
  { title: "BSIT Diploma", org: "SPCC Systems Plus Computer College of Kalookan", date: "May 16, 2026" },
  { title: "OJT Completion (450 hours)", org: "Alpha Premier Group of Companies OPC", date: "March 27, 2026" },
  { title: "Leadership Training Seminar/Workshop", org: "Systems Plus Computer College of Kalookan Inc.", date: "Feb 28, 2026" },
  { title: "Statistical Analysis with SPSS", org: "Using ChatGPT, APA Style", date: "" },
  { title: "Plagiarism and Copyright Infringement Webinar", org: "Ms. Suzette C. Crisostomo", date: "May 18, 2024" },
  { title: "Principles of Graphic Designs Webinar", org: "Mr. Christian Jay, Dr. Manalo", date: "May 20, 2024" },
];

const PROJECTS = [
  {
    title: "Company Website Redesign",
    tag: "OJT Project",
    body: "Redesigned the company's existing website during OJT by adding new features, updating outdated sections, and removing unnecessary content. Developed a data management system in Google Sheets to keep client records organized and accessible. Also managed the company's Hostinger hosting environment, including website deployment, hosting configuration, and basic website maintenance.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "Google Sheets", "Hostinger"],
  },
  {
    title: "Data Management System",
    tag: "School Project · Google Sheets · SQL",
    body: "A school project covering three linked systems: a Payroll System, an Expense Tracker, and a Budgeting System — built to organize and calculate real financial data accurately.",
    stack: ["Google Sheets", "SQL", "Data Visualization", "Codeigniter", "HTML", "CSS", "MyPhpAdmin"],
  },
  {
    title: "GoTrike — Mobile App",
    tag: "Capstone 1 · Mobile App",
    body: "A ride-hailing mobile app like Grab or MoveIt, but built for local areas that rely on tricycles instead of motorcycles or cars.",
    stack: ["Flutter", "Dart", "Supabase"],
  },
  {
    title: "GoTrike — Website",
    tag: "Capstone 2 · Website",
    body: "The website companion to GoTrike — the same tricycle ride-hailing concept, extended into a web platform.",
    stack: ["HTML5", "CSS3", "JavaScript", "Supabase", "Ngrok"],
  },
];

// ---------- render helpers ----------
function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function renderAll() {
  // marquee
  const marquee = document.getElementById("marqueeTrack");
  [...TECH, ...TECH].forEach((t) => {
    const info = TECH_ICON_MAP[t];
    const iconHtml = info?.type === "brand"
      ? `<img class="tech-icon" src="https://cdn.simpleicons.org/${info.slug}" alt="" loading="lazy" onerror="this.style.display='none'" />`
      : `<span class="tech-icon tech-icon-generic">${ICONS[info?.icon || "database"]}</span>`;
    marquee.appendChild(el(`<span class="tech-item">${iconHtml}<span>${t}</span></span>`));
  });

  // what I do
  const doGrid = document.getElementById("whatIDoGrid");
  WHAT_I_DO.forEach((item) => {
    doGrid.appendChild(el(`
      <div class="spotlight-card">
        <div class="glow"></div>
        <div class="do-icon accent-blue">${ICONS[item.icon]}</div>
        <h3 class="do-title">${item.title}</h3>
        <p class="do-body">${item.body}</p>
      </div>
    `));
  });

  // timeline
  const timeline = document.getElementById("timeline");
  EDUCATION.forEach((e) => {
    timeline.appendChild(el(`
      <div class="timeline-item">
        <div class="timeline-period">${e.period}</div>
        <div class="timeline-title">${e.title}</div>
        <div class="timeline-note">${e.note}</div>
      </div>
    `));
  });

  // experience
  const expList = document.getElementById("experienceList");
  EXPERIENCE.forEach((e) => {
    expList.appendChild(el(`
      <div class="spotlight-card exp-card">
        <div class="glow"></div>
        <div class="exp-head">
          <div>
            <div class="exp-title">${e.title}</div>
            <a href="${e.link}" target="_blank" rel="noreferrer" class="exp-company">${e.company}</a>
          </div>
          <div class="exp-period">${ICONS.briefcase} ${e.period}</div>
        </div>
        <ul class="exp-list">${e.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
      </div>
    `));
  });

  // skills
  const skillBars = document.getElementById("skillBars");
  SKILLS.forEach((s) => {
    skillBars.appendChild(el(`
      <div class="skill-row">
        <div class="skill-row-top"><span>${s.label}</span><span>${s.value}%</span></div>
        <div class="skill-track"><div class="skill-fill" data-value="${s.value}"></div></div>
      </div>
    `));
  });
  requestAnimationFrame(() => {
    document.querySelectorAll(".skill-fill").forEach((bar) => {
      bar.style.width = bar.dataset.value + "%";
    });
  });

  // traits
  const traitChips = document.getElementById("traitChips");
  TRAITS.forEach((t) => traitChips.appendChild(el(`<span class="chip">${t}</span>`)));

  // certifications
  const certGrid = document.getElementById("certGrid");
  CERTIFICATIONS.forEach((cert) => {
    certGrid.appendChild(el(`
      <div class="cert-card">
        <div class="accent-coral" style="flex-shrink:0;margin-top:2px">${ICONS.award}</div>
        <div>
          <div class="cert-title">${cert.title}</div>
          <div class="cert-org">${cert.org}</div>
          ${cert.date ? `<div class="cert-date">${cert.date}</div>` : ""}
        </div>
      </div>
    `));
  });

  // projects
  const projectGrid = document.getElementById("projectGrid");
  PROJECTS.forEach((p, i) => {
    const card = el(`
      <div class="spotlight-card project-card" data-index="${i}" role="button" tabindex="0">
        <div class="glow"></div>
        <div class="project-tag">${p.tag}</div>
        <div class="project-title">${p.title}</div>
        <p class="project-body">${p.body}</p>
        <div class="project-card-footer">
          <div class="stack-row">${p.stack.map((s) => `<span class="stack-tag">${s}</span>`).join("")}</div>
          <span class="see-more">See more</span>
        </div>
      </div>
    `);
    card.addEventListener("click", () => openProjectModal(i));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openProjectModal(i); }
    });
    projectGrid.appendChild(card);
  });
}

// ---------- project modal ----------
function openProjectModal(index) {
  const p = PROJECTS[index];
  const overlay = document.getElementById("projectModalOverlay");
  document.getElementById("modalTag").textContent = p.tag;
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalDetails").textContent = p.body;
  document.getElementById("modalStack").innerHTML = p.stack.map((s) => `<span class="stack-tag">${s}</span>`).join("");
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  document.getElementById("projectModalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

function initProjectModal() {
  const overlay = document.getElementById("projectModalOverlay");
  document.getElementById("modalClose").addEventListener("click", closeProjectModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeProjectModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProjectModal();
  });
}

// ---------- theme ----------
function initTheme() {
  const btn = document.getElementById("themeToggle");
  const moon = document.getElementById("iconMoon");
  const sun = document.getElementById("iconSun");
  btn.addEventListener("click", () => {
    const dark = document.documentElement.getAttribute("data-theme") === "dark";
    document.documentElement.setAttribute("data-theme", dark ? "light" : "dark");
    moon.style.display = dark ? "block" : "none";
    sun.style.display = dark ? "none" : "block";
  });
}

// ---------- smooth scroll nav ----------
function initNav() {
  document.querySelectorAll("[data-target]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.getElementById(btn.dataset.target)?.scrollIntoView({ behavior: "smooth" });
    });
  });
}

// ---------- floating dock ----------
function initDock() {
  const dock = document.getElementById("dock");
  window.addEventListener("scroll", () => {
    dock.classList.toggle("visible", window.scrollY > 400);
  });
}

// ---------- spotlight glow follow ----------
function initSpotlight() {
  document.addEventListener("mousemove", (e) => {
    document.querySelectorAll(".spotlight-card").forEach((card) => {
      const r = card.getBoundingClientRect();
      if (e.clientX < r.left - 40 || e.clientX > r.right + 40 || e.clientY < r.top - 40 || e.clientY > r.bottom + 40) return;
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      card.style.setProperty("--mx", x + "%");
      card.style.setProperty("--my", y + "%");
    });
  });
}

// ---------- draggable ID card with spring physics ----------
function initIdCard() {
  const wrap = document.getElementById("idCard");
  const string = document.querySelector(".id-card-string");
  const state = {
    x: 0, y: 0, vx: 0, vy: 0, rot: 0, vrot: 0,
    dragging: false, last: { x: 0, y: 0, t: 0 },
  };

  const clamp = (v, m) => Math.max(-m, Math.min(m, v));
  const getPoint = (e) => (e.touches ? e.touches[0] : e);

  function onDown(e) {
    const p = getPoint(e);
    state.dragging = true;
    wrap.classList.add("dragging");
    state.last = { x: p.clientX, y: p.clientY, t: performance.now() };
  }

  function onMove(e) {
    if (!state.dragging) return;
    const p = getPoint(e);
    const now = performance.now();
    const dt = Math.max(now - state.last.t, 1);
    const dx = p.clientX - state.last.x;
    const dy = p.clientY - state.last.y;

    state.x = clamp(state.x + dx, 90);
    state.y = clamp(state.y + dy, 60);
    state.vx = (dx / dt) * 16;
    state.vy = (dy / dt) * 16;
    state.last = { x: p.clientX, y: p.clientY, t: now };
  }

  function onUp() {
    state.dragging = false;
    wrap.classList.remove("dragging");
  }

  window.addEventListener("mousedown", (e) => {
    if (wrap.contains(e.target)) onDown(e);
  });
  window.addEventListener("mousemove", onMove);
  window.addEventListener("mouseup", onUp);
  wrap.addEventListener("touchstart", onDown, { passive: true });
  window.addEventListener("touchmove", onMove, { passive: true });
  window.addEventListener("touchend", onUp);

  const STIFFNESS = 0.06, DAMPING = 0.88, ROT_STIFFNESS = 0.09, ROT_DAMPING = 0.82;

  function tick() {
    const s = state;
    if (!s.dragging) {
      s.vx += -s.x * STIFFNESS;
      s.vy += -s.y * STIFFNESS;
      s.vx *= DAMPING;
      s.vy *= DAMPING;
      s.x += s.vx;
      s.y += s.vy;
    }
    const targetRot = s.dragging ? clamp(s.x * 0.18 + s.vx * 0.9, 28) : 0;
    s.vrot += (targetRot - s.rot) * ROT_STIFFNESS;
    s.vrot *= ROT_DAMPING;
    s.rot += s.vrot;

    wrap.style.transform = `translate(${s.x}px, ${s.y}px) rotate(${s.rot}deg)`;
    string.style.transform = `rotate(${s.rot * 0.4}deg)`;

    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// ---------- contact form (demo only, no backend wired up) ----------
function initForm() {
  const form = document.getElementById("contactForm");
  const button = document.getElementById("sendMessageBtn");
  const status = document.getElementById("formStatus");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const originalButton = button.innerHTML;

    button.disabled = true;
    button.innerHTML = "<span>Sending...</span>";

    status.textContent = "";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        form.reset();

        button.innerHTML = "<span>Sent ✓</span>";
        status.textContent = "Message sent successfully!";
        status.style.color = "#22c55e";
        status.style.marginTop = "10px";

        setTimeout(() => {
          button.innerHTML = originalButton;
          button.disabled = false;
          status.textContent = "";
        }, 3000);

      } else {
        throw new Error("Failed to send message");
      }

    } catch (error) {
      button.innerHTML = originalButton;
      button.disabled = false;

      status.textContent = "Something went wrong. Please try again.";
      status.style.color = "#ef4444";
      status.style.marginTop = "10px";
    }
  });
}

// ---------- init ----------
document.addEventListener("DOMContentLoaded", () => {
  renderAll();
  initTheme();
  initNav();
  initDock();
  initSpotlight();
  initIdCard();
  initForm();
  initProjectModal();
});

