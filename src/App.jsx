import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Terminal,
  Code2,
  Database,
  Layers3,
  Bot,
  Menu,
  X,
  Sparkles,
  BriefcaseBusiness,
  GraduationCap,
  Radio,
  Copy,
  Check,
  Send,
  Download,
} from "lucide-react";

const profile = {
  name: "Mikiyas Ayele",
  role: "Full-stack developer · AI automation · Product builder",
  location: "Addis Ababa, Ethiopia",
  email: "bigdream070707@gmail.com",
  github: "https://github.com/mikiyaskuba",
  linkedin: "https://linkedin.com/in/mikiyas-getu-ayele-a830372a0",
  telegram: "https://t.me/silencemeditation1",
  cv: "/Mikiyas_Ayele_FlowCV_Resume_2026-07-24.pdf", // put your PDF in /public with this name
};

const projects = [
  {
    number: "01",
    name: "Efoyta Agri Market Place",
    type: "E-COMMERCE · FULL-STACK",
    status: "LIVE & VALIDATING",
    tags: ["WEB"],
    accent: "amber",
    icon: "✳",
    description:
      "A full-stack agricultural marketplace connecting kororima and coffee supply with Addis Ababa buyers. User authentication, product management, cart and order processing, built on real sourcing and buyer relationships.",
    stack: ["React", "Node.js", "Auth", "Orders & Cart"],
    link: "https://efoyta-rust.vercel.app",
    demo: "https://youtu.be/JTLNWEmK_gA",
  },
  {
    number: "02",
    name: "Affiliate ET",
    type: "AFFILIATE · COMMERCE",
    status: "LIVE",
    tags: ["WEB"],
    accent: "blue",
    icon: "↗",
    description:
      "An affiliate-commerce platform for Ethiopian businesses. Shops list products and set commissions; affiliates share links on Telegram, WhatsApp or Facebook and earn on every delivered order.",
    stack: ["Next.js", "Commission tracking", "E-commerce"],
    link: "https://affiliate-et-re59.vercel.app/en",
  },
  {
    number: "03",
    name: "Admas Lottery Checker",
    type: "MOBILE · TELEGRAM BOT",
    status: "IN DEVELOPMENT",
    tags: ["BOT", "MOBILE"],
    accent: "green",
    icon: "◈",
    description:
      "A lottery assistant that lets users save ticket numbers and get result notifications in Amharic. Includes a mobile app, subscription plans, payment review and an admin workflow.",
    stack: ["Node.js", "Express", "Prisma", "PostgreSQL", "React Native"],
    link: "https://github.com/mrxdream/Admas-lotto",
    demo: "https://youtube.com/shorts/wpZozG60Vqc",
  },
  {
    number: "04",
    name: "AI Stock Market Prediction Bot",
    type: "AI · AUTOMATION",
    status: "BUILT",
    tags: ["AI"],
    accent: "purple",
    icon: "◇",
    description:
      "An n8n workflow that collects and analyzes market data to flag stocks with strong potential for the next trading day, turning raw data into actionable research insights.",
    stack: ["n8n", "AI / LLM", "Data pipelines", "Automation"],
  },
  ,
  {
    number: "05",
    name: "Gebrher Micro-Finance System",
    type: "FINTECH · BUSINESS SYSTEM",
    status: "PROJECT",
    tags: ["FINTECH"],
    accent: "gold",
    icon: "◉",
    description:
      "A micro-finance management system built around the operational needs of a financial institution.",
    stack: ["Micro-finance", "Business software", "Databases"],
  },
  {
    number: "06",
    name: "ShopHabesha",
    type: "TELEGRAM MINI APP · FINTECH",
    status: "LIVE",
    tags: ["BOT", "WEB", "FINTECH"],
    accent: "pink",
    icon: "▧",
    description:
      "A Telegram Mini Web App that helps Ethiopian shops record, track and manage customer credit balances, right inside Telegram with no installs.",
    stack: ["Telegram Mini App", "React", "Firebase", "Vercel"],
    link: "https://t.me/shophabesha_bot",
  },
];

const skills = [
  {
    title: "Frontend",
    icon: Code2,
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "React Native",
      "Expo",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    icon: Terminal,
    items: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "Django",
      "REST APIs",
      "Auth & Authorization",
    ],
  },
  {
    title: "AI & Automation",
    icon: Bot,
    items: [
      "n8n",
      "OpenAI API",
      "LLM apps",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
    ],
  },
  {
    title: "Data & Cloud",
    icon: Database,
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Firebase",
      "Prisma",
      "Sequelize",
      "SQL Server",
    ],
  },
  {
    title: "Tools",
    icon: Layers3,
    items: [
      "Git & GitHub",
      "Docker",
      "Postman",
      "Vercel",
      "Netlify",
      "Render",
      "Python · Java · C++",
    ],
  },
];

const journey = [
  {
    icon: Code2,
    date: "NOV 2025 – NOW",
    title: "Independent Full-stack Developer",
    sub: "Web · Mobile · Telegram · Automation",
    text: "Designing and shipping practical products for Ethiopian businesses, from Telegram mini apps to commerce platforms.",
    chips: ["Full-stack", "Product thinking", "APIs"],
  },
  {
    icon: BriefcaseBusiness,
    date: "APR – JUN 2025",
    title: "AI Stock Market Analysis Bot",
    sub: "Upwork · Addis Ababa",
    text: "Developed an AI-driven stock analysis bot that processes market data and surfaces next-day opportunities.",
    chips: ["n8n", "AI", "Data analysis"],
  },
  {
    icon: BriefcaseBusiness,
    date: "JAN – MAR 2025",
    title: "AI Automation Developer",
    sub: "Upwork · Client in Europe",
    text: "Built AI-powered automation workflows for an international client, delivered remotely.",
    chips: ["Freelance", "Automation", "Remote"],
  },
  {
    icon: GraduationCap,
    date: "2021 – 2025",
    title: "BSc in Information Technology",
    sub: "University of Gondar",
    text: "Foundation in software development, information systems, databases and problem solving. Also completed the Evangadi Tech Full Stack Certificate (2024) and NATA Android Development training (2024).",
    chips: ["CGPA 3.6", "Exit exam 83", "Full Stack Cert", "Android Cert"],
  },
];

const terminalResponses = {
  help: [
    "Available commands:",
    "  about       — who is Mikiyas?",
    "  projects    — explore selected work",
    "  skills      — show technical toolkit",
    "  experience  — view my journey",
    "  contact     — get in touch",
    "  clear       — clear this terminal",
  ],
  about: [
    "I am Mikiyas Ayele, a full-stack developer in Addis Ababa.",
    "I build web apps, Telegram mini apps and AI automations.",
    "I like turning practical problems into products people use.",
  ],
  projects: [
    "Selected builds:",
    ...projects.map((p) => `  ${p.number}  ${p.name}`),
    "Scroll to the projects section to explore them.",
  ],
  skills: [
    "JavaScript · TypeScript · React · Next.js · Node.js",
    "PostgreSQL · MongoDB · Firebase · Prisma",
    "n8n · OpenAI API · Python · Docker",
  ],
  experience: [
    "Freelance AI automation — Upwork (2025)",
    "BSc Information Technology — University of Gondar (2025)",
    "Independent developer — web, Telegram, mobile & automation.",
  ],
  contact: [
    "Want to build something useful together?",
    `Email: ${profile.email}`,
    `Telegram: ${profile.telegram}`,
  ],
};

function TerminalWidget() {
  const [history, setHistory] = useState([
    {
      command: "whoami",
      output: ["mikiyas — full-stack developer & product builder"],
    },
  ]);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const commands = useMemo(() => Object.keys(terminalResponses), []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  function runCommand(event) {
    event.preventDefault();
    const command = value.trim().toLowerCase();
    if (!command) return;
    if (command === "clear") {
      setHistory([]);
      setValue("");
      return;
    }
    const output = terminalResponses[command] || [
      `command not found: ${command}`,
      `Type "help" to see available commands.`,
    ];
    setHistory((c) => [...c, { command, output }]);
    setValue("");
  }

  return (
    <div className="terminal-window" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-titlebar">
        <div className="traffic">
          <i />
          <i />
          <i />
        </div>
        <span>
          <Terminal size={13} /> mikiyas@portfolio: ~
        </span>
        <span className="terminal-live">
          <b /> LIVE SESSION
        </span>
      </div>
      <div className="terminal-body">
        <div className="terminal-welcome">
          Welcome to my corner of the internet. Type{" "}
          <button
            type="button"
            onClick={() => {
              setValue("help");
              inputRef.current?.focus();
            }}
          >
            help
          </button>{" "}
          to explore.
        </div>
        {history.map((item, index) => (
          <div className="terminal-entry" key={`${index}-${item.command}`}>
            <div className="terminal-command">
              <span>➜</span> <span>~</span> {item.command}
            </div>
            {item.output.map((line, i) => (
              <div className="terminal-output" key={i}>
                {line}
              </div>
            ))}
          </div>
        ))}
        <form className="terminal-input-row" onSubmit={runCommand}>
          <span className="prompt">➜ ~</span>
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="type a command..."
            aria-label="Terminal command"
          />
          <span className="cursor" />
        </form>
        <div ref={bottomRef} />
      </div>
      <div className="terminal-footer">
        <span>zsh</span>
        <span>UTF-8</span>
        <span>{commands.length} commands available</span>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, detail }) {
  return (
    <div className="section-heading">
      <div>
        <div className="eyebrow">
          <span /> {eyebrow}
        </div>
        <h2>{title}</h2>
      </div>
      {detail && <p>{detail}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const filters = ["ALL", "WEB", "BOT", "AI", "MOBILE", "FINTECH"];
  const filteredProjects = projects.filter(
    (p) => activeFilter === "ALL" || p.tags.includes(activeFilter),
  );

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="noise" />
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Mikiyas home">
          <span className="brand-mark">
            M<span>.</span>
          </span>
          <span>
            MIKIYAS<span className="brand-muted">.DEV</span>
          </span>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#about" onClick={close}>
            About
          </a>
          <a href="#projects" onClick={close}>
            Projects
          </a>
          <a href="#skills" onClick={close}>
            Stack
          </a>
          <a href="#journey" onClick={close}>
            Journey
          </a>
          <a className="nav-contact" href="#contact" onClick={close}>
            Hire me <ArrowUpRight size={14} />
          </a>
        </nav>
        <button
          className="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="home">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <motion.div
              className="availability"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="pulse-dot" /> AVAILABLE FOR FREELANCE & FULL-TIME
            </motion.div>
            <motion.p
              className="hero-kicker"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              HELLO, WORLD. I'M
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              Mikiyas
              <br />
              <span>
                Ayele<span className="green-period">.</span>
              </span>
            </motion.h1>
            <motion.div
              className="hero-role"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              <span className="role-line" /> {profile.role}
            </motion.div>
            <motion.p
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              I build Telegram mini apps, e-commerce platforms and AI
              automations for Ethiopian businesses, and ship them live.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
            >
              <a className="button button-primary" href="#projects">
                See my work <ArrowUpRight size={16} />
              </a>
              <a className="button button-ghost" href={profile.cv} download>
                Download CV <Download size={15} />
              </a>
              <a className="button button-ghost" href="#contact">
                Get in touch <ArrowRight size={15} />
              </a>
            </motion.div>
            <div className="hero-location">
              <MapPin size={14} /> {profile.location}{" "}
              <span className="location-divider">/</span>{" "}
              <span className="mono">UTC+3</span>
            </div>
          </div>
          <motion.div
            className="hero-terminal"
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            <div className="terminal-orbit orbit-one" />
            <div className="terminal-orbit orbit-two" />
            <TerminalWidget />
          </motion.div>
          <a className="scroll-cue" href="#about">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={14} />
          </a>
        </section>

        <section className="intro-strip">
          <div className="section-wrap strip-inner">
            <span className="strip-label">CURRENT FOCUS</span>
            <div className="strip-items">
              <span>FULL-STACK PRODUCTS</span>
              <i>✳</i>
              <span>AI AUTOMATION</span>
              <i>✳</i>
              <span>BUILDING IN ETHIOPIA</span>
            </div>
          </div>
        </section>

        <section className="section-wrap content-section" id="about">
          <SectionHeading
            eyebrow="01 / ABOUT ME"
            title={
              <>
                Curiosity meets
                <br />
                <em>execution.</em>
              </>
            }
            detail="A developer's mindset, an entrepreneur's perspective, and a bias toward building things that matter."
          />
          <div className="about-grid">
            <div className="about-main">
              <p className="large-copy">
                I'm a full-stack developer who builds{" "}
                <span className="text-green">
                  modern, user-focused web and mobile products.
                </span>
              </p>
              <p>
                I graduated in Information Technology from the University of
                Gondar in 2025, and since then I've built with JavaScript,
                TypeScript, React, Next.js, Node.js and Express, shipping REST
                APIs, databases and responsive interfaces.
              </p>
              <p>
                I also work with AI: n8n workflows, OpenAI integrations and LLM
                apps, and I've delivered automation work for clients on Upwork.
                As co-founder of Efoyta, I've learned what real customers need,
                not just what looks good on screen.
              </p>
              <div className="about-tags">
                <span>BUILD WITH PURPOSE</span>
                <span>LEARN BY SHIPPING</span>
                <span>THINK LONG TERM</span>
              </div>
            </div>
            <div className="about-aside">
              <div className="stat-card">
                <span className="stat-symbol">⌘</span>
                <strong>
                  06<span>+</span>
                </strong>
                <small>Projects built</small>
                <p>Web, mobile, Telegram and AI.</p>
              </div>
              <div className="stat-card stat-card-offset">
                <span className="stat-symbol">◎</span>
                <strong>03</strong>
                <small>Credentials</small>
                <p>BSc IT, Full Stack and Android certificates.</p>
              </div>
              <div className="mini-location">
                <MapPin size={14} /> ROOTED IN ETHIOPIA <span>↗</span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="section-wrap content-section projects-section"
          id="projects"
        >
          <SectionHeading
            eyebrow="02 / SELECTED WORK"
            title={
              <>
                Things I've
                <br />
                <em>put in motion.</em>
              </>
            }
            detail="Products, experiments and business initiatives. Some are still evolving, which is part of building."
          />
          <div className="project-toolbar">
            <span className="mono">
              [ {String(projects.length).padStart(2, "0")} PROJECTS / PORTFOLIO
              ]
            </span>
            <div className="filter-row">
              {filters.map((f) => (
                <button
                  key={f}
                  className={activeFilter === f ? "filter active" : "filter"}
                  onClick={() => setActiveFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="project-grid">
            {filteredProjects.map((project, index) => (
              <motion.article
                className={`project-card accent-${project.accent}`}
                key={project.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ delay: index * 0.06 }}
              >
                <div className="project-top">
                  <span className="project-number">/{project.number}</span>
                  <span className="project-type">{project.type}</span>
                  <span className="project-icon">{project.icon}</span>
                </div>
                <div className="project-content">
                  <div className="project-status">
                    <span /> {project.status}
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-bottom">
                  <div className="tech-list">
                    {project.stack.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  {project.demo && (
                    <a
                      className="project-link"
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Watch ${project.name} demo`}
                    >
                      ▶
                    </a>
                  )}
                  {project.link && (
                    <a
                      className="project-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.name}`}
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
          <div className="project-note">
            <span className="note-icon">
              <Sparkles size={15} />
            </span>
            <p>
              More experiments are always in progress. The best portfolio is a
              trail of things shipped, tested and improved.
            </p>
          </div>
        </section>

        <section className="skills-band" id="skills">
          <div className="section-wrap content-section">
            <SectionHeading
              eyebrow="03 / THE TOOLKIT"
              title={
                <>
                  Tools for the
                  <br />
                  <em>job at hand.</em>
                </>
              }
              detail="I choose technology based on the problem, keep learning, and focus on reliable foundations."
            />
            <div className="skills-grid">
              {skills.map((group, index) => {
                const Icon = group.icon;
                return (
                  <motion.div
                    className="skill-card"
                    key={group.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <div className="skill-card-head">
                      <Icon size={19} />
                      <span>0{index + 1}</span>
                    </div>
                    <h3>{group.title}</h3>
                    <div className="skill-pills">
                      {group.items.map((i) => (
                        <span key={i}>{i}</span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div className="code-quote">
              <span className="quote-mark">“</span>
              <p>
                Good software isn't just code that works.
                <br />
                <strong>It's a solution someone can depend on.</strong>
              </p>
              <span className="quote-signature">— MY BUILDING PRINCIPLE</span>
            </div>
          </div>
        </section>

        <section
          className="section-wrap content-section journey-section"
          id="journey"
        >
          <SectionHeading
            eyebrow="04 / THE JOURNEY"
            title={
              <>
                Learning. Building.
                <br />
                <em>Doing the work.</em>
              </>
            }
            detail="Formal education, freelance delivery and hands-on business experience."
          />
          <div className="timeline">
            {journey.map((item) => {
              const Icon = item.icon;
              return (
                <div className="timeline-item" key={item.title}>
                  <div className="timeline-marker">
                    <Icon size={17} />
                  </div>
                  <div className="timeline-date">{item.date}</div>
                  <div className="timeline-content">
                    <h3>{item.title}</h3>
                    <h4>{item.sub}</h4>
                    <p>{item.text}</p>
                    <div className="timeline-chips">
                      {item.chips.map((c) => (
                        <span key={c}>{c}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div className="eyebrow">
              <span /> 05 / START A CONVERSATION
            </div>
            <h2>
              Have a problem
              <br />
              worth <em>solving?</em>
            </h2>
            <p>
              I'm open to freelance projects, collaborations and full-time
              roles. Tell me what you're building.
            </p>
            <div className="contact-actions">
              <a
                className="button button-primary"
                href={`mailto:${profile.email}`}
              >
                Send me an email <ArrowUpRight size={16} />
              </a>
              <a
                className="button button-ghost"
                href={profile.telegram}
                target="_blank"
                rel="noreferrer"
              >
                Message on Telegram <Send size={15} />
              </a>
              <button
                className="button button-ghost copy-button"
                onClick={copyEmail}
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
                {copied ? "Copied" : "Copy email"}
              </button>
            </div>
            <div className="contact-meta">
              <span>
                <MapPin size={14} /> ADDIS ABABA, ETHIOPIA
              </span>
              <span>
                <Radio size={14} /> REPLIES WITHIN 24 HOURS
              </span>
            </div>
          </div>
          <div className="contact-decoration">
            LET'S
            <br />
            BUILD<span>.</span>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-wrap footer-inner">
          <a className="brand" href="#home">
            <span className="brand-mark">
              M<span>.</span>
            </span>
            <span>
              MIKIYAS<span className="brand-muted">.DEV</span>
            </span>
          </a>
          <span className="footer-copy">
            DESIGNED & BUILT WITH INTENTION{" "}
            <span>© {new Date().getFullYear()}</span>
          </span>
          <div className="social-links">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={profile.telegram}
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
            >
              <Send size={17} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={17} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
