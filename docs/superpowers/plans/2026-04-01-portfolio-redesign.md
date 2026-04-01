# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign Rohan Shetty's portfolio with a Sleek & Professional visual direction, Framer Motion animations, and six sections (Hero, About, Experience, Projects, Skills, Contact) + sticky Navbar.

**Architecture:** Each section is an independent React component fed by a data file. Framer Motion handles all animations via `whileInView` scroll reveals, `motion` wrappers on load, and `useMotionValue`/`useTransform` for 3D card tilt. No test setup exists and none is added (YAGNI — pure UI with no logic to unit test); verification is done by running the dev server.

**Tech Stack:** React, Tailwind CSS v4, Framer Motion, Vite

---

## File Map

| File | Action | Responsibility |
|------|--------|---------------|
| `src/components/Navbar.jsx` | Create | Sticky blur navbar with smooth-scroll links |
| `src/components/Hero.jsx` | Rewrite | Full-viewport hero with typewriter + gradient CTAs |
| `src/components/About.jsx` | Create | Two-column bio with photo |
| `src/components/Experience.jsx` | Create | Vertical timeline of internships + leadership |
| `src/components/Projects.jsx` | Rewrite | 2-col grid with 3D tilt hover |
| `src/components/Skills.jsx` | Rewrite | Category pill rows with stagger animation |
| `src/components/Contact.jsx` | Rewrite | Gradient contact section |
| `src/data/projects.js` | Rewrite | 4 current projects with `featured` flag |
| `src/data/skills.js` | Rewrite | 3 categories with `color` field |
| `src/data/experience.js` | Create | 3 internships + 1 leadership entry |
| `src/App.jsx` | Rewrite | Wire all 7 components, dark base bg |
| `package.json` | Modify | Add `framer-motion` |

---

## Task 1: Install Framer Motion + Rewrite Data Files

**Files:**
- Modify: `package.json`
- Rewrite: `src/data/projects.js`
- Rewrite: `src/data/skills.js`
- Create: `src/data/experience.js`

- [ ] **Step 1: Install framer-motion**

```bash
cd "c:/Users/rohan/OneDrive/Desktop/rohan-portfolio"
npm install framer-motion
```

Expected: `added 1 package` (or similar) with no errors.

- [ ] **Step 2: Rewrite `src/data/projects.js`**

```js
export const projects = [
  {
    title: "AstroGuide",
    description:
      "AI-powered mobile astronomy assistant with a FastAPI backend and React Native (Expo) frontend. Deployed on Railway with OpenAI API integration for beginner and advanced explanation modes.",
    tech: ["Python", "FastAPI", "React Native", "Expo", "OpenAI API", "Railway"],
    github: "https://github.com/roshet/astroguide",
    featured: true,
  },
  {
    title: "Crave",
    description:
      "Full-stack nutrition scoring app that ranks fast-food items by goal (high protein, low sugar, low fat) within a calorie limit. Built with React + FastAPI, deployed on Vercel and Render.",
    tech: ["React", "FastAPI", "Python", "Vercel", "Render"],
    github: "https://github.com/roshet/Crave",
    featured: false,
  },
  {
    title: "NFL QB Clutch Factor Analyzer",
    description:
      "Statistical pipeline that quantifies quarterback performance in high-pressure situations using multi-season NFL play-by-play data. Computes clutch and consistency metrics with Python and Pandas.",
    tech: ["Python", "pandas", "NumPy"],
    github: "https://github.com/roshet/nfl-qb-clutch-factor-analysis",
    featured: false,
  },
  {
    title: "Video Game Recommendation System",
    description:
      "Explainable content-based recommender that suggests similar games using TF-IDF vectorization and cosine similarity, with human-readable explanations for each recommendation.",
    tech: ["Python", "pandas", "scikit-learn", "Streamlit"],
    github: "https://github.com/roshet/video-game-recommender",
    featured: false,
  },
];
```

- [ ] **Step 3: Rewrite `src/data/skills.js`**

```js
export const skills = [
  {
    category: "Languages",
    color: "blue",
    items: ["Python", "C++", "SQL", "JavaScript", "HTML/CSS"],
  },
  {
    category: "Frameworks",
    color: "purple",
    items: ["FastAPI", "React", "React Native", "Streamlit"],
  },
  {
    category: "Tools",
    color: "gray",
    items: ["Git", "OpenAI API", "Railway", "PostgreSQL", "MySQL", "Power BI", "Jupyter Notebook", "Excel"],
  },
];
```

- [ ] **Step 4: Create `src/data/experience.js`**

```js
export const experience = [
  {
    role: "Information Services Intern",
    company: "Nationwide Children's Hospital",
    period: "May 2025 – Aug 2025",
    bullets: [
      "Built Python pipelines to parse, clean, and chunk documentation files into LLM-ready segments with structured metadata",
      "Wrote and validated 25+ SQL queries supporting specimen tracking, operational reporting, and clinical workflows",
    ],
  },
  {
    role: "Computer and Data Science Intern",
    company: "The Buckeye Ranch",
    period: "Aug 2024 – Dec 2024",
    bullets: [
      "Developed 15+ SQL-based ETL queries to extract and transform data from the organization's data warehouse",
      "Optimized and normalized schemas across 20+ relational tables, improving data integrity and reporting reliability",
    ],
  },
  {
    role: "Computer Science & Engineering Intern",
    company: "Narwal",
    period: "Jan 2024 – May 2024",
    bullets: [
      "Completed Tricentis Automation Specialist training; tested and validated software features across multiple builds",
      "Supported automation and analytics initiatives in a collaborative engineering environment",
    ],
  },
  {
    role: "Mentor",
    company: "Society of Asian Scientists and Engineers",
    period: "Oct 2025 – Present",
    bullets: [
      "Mentored undergraduate students on academic planning, technical skills, and career readiness",
    ],
  },
];
```

- [ ] **Step 5: Commit**

```bash
git add src/data/projects.js src/data/skills.js src/data/experience.js package.json package-lock.json
git commit -m "feat: install framer-motion and rewrite data files"
```

---

## Task 2: Navbar Component

**Files:**
- Create: `src/components/Navbar.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create `src/components/Navbar.jsx`**

```jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled ? "bg-[#0d1117]/80 backdrop-blur-md border-b border-white/5" : ""
      }`}
    >
      <span className="font-bold text-white tracking-tight">Rohan Shetty</span>
      <div className="flex gap-6">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className="text-sm text-gray-400 hover:text-white transition-colors duration-200 relative group"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
```

- [ ] **Step 2: Rewrite `src/App.jsx`**

```jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#0d1117] text-white min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
```

- [ ] **Step 3: Start dev server and verify navbar appears**

```bash
npm run dev
```

Open `http://localhost:5173`. Expected: navbar visible at top, slides down on load, blurs on scroll.

- [ ] **Step 4: Commit**

```bash
git add src/components/Navbar.jsx src/App.jsx
git commit -m "feat: add sticky animated navbar"
```

---

## Task 3: Rewrite Hero Component

**Files:**
- Rewrite: `src/components/Hero.jsx`

- [ ] **Step 1: Rewrite `src/components/Hero.jsx`**

```jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = ["Full Stack Developer", "Data Engineer", "Builder"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-2/3 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-gray-400 tracking-[0.2em] uppercase mb-4"
        >
          👋 Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl font-black text-white mb-4 tracking-tight"
        >
          Rohan Shetty
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl font-semibold mb-6 h-8"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {displayed}
          </span>
          <span className="animate-pulse text-blue-400">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-xl text-gray-400 mb-10 leading-relaxed"
        >
          I build full-stack and data-driven applications — from deployed mobile apps to ML systems.
          CS @ University of Cincinnati.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex gap-4 justify-center flex-wrap mb-12"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition"
          >
            View Projects ↓
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition"
          >
            Download Resume ↗
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex gap-2 justify-center items-center text-sm text-gray-600"
        >
          {["Python", "React", "FastAPI", "SQL"].map((tech, i, arr) => (
            <span key={tech} className="flex items-center gap-2">
              {tech}
              {i < arr.length - 1 && <span className="text-gray-700">·</span>}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in dev server**

Open `http://localhost:5173`. Expected:
- Name fades in with upward slide
- Typewriter cycles through "Full Stack Developer", "Data Engineer", "Builder" with blinking cursor
- Two CTA buttons visible (gradient + ghost)
- Soft glowing blobs in background

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.jsx
git commit -m "feat: rewrite hero with typewriter animation and gradient CTAs"
```

---

## Task 4: About Component

**Files:**
- Create: `src/components/About.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create `src/components/About.jsx`**

```jsx
import { motion } from "framer-motion";
import photo from "../assets/photo.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0d1117]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-shrink-0">
            <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-blue-500/30 ring-4 ring-blue-500/10">
              <img src={photo} alt="Rohan Shetty" className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <p className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              About Me
            </p>
            <h2 className="text-3xl font-black text-white mb-4">
              Builder at heart, CS student by training.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              I'm a Computer Science student at the University of Cincinnati (Class of 2027) with three
              internships under my belt — spanning data engineering, SQL pipelines, and test automation.
              I love building things end-to-end: from a deployed FastAPI backend to a React Native frontend.
              Currently looking for Summer 2026 co-op/internship opportunities.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/roshet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition text-sm"
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com/in/rohan-shetty-525a61248/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition text-sm"
              >
                LinkedIn ↗
              </a>
              <a href="mailto:shettyrv@mail.uc.edu" className="text-gray-400 hover:text-white transition text-sm">
                Email ↗
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update `src/App.jsx` to include About**

```jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#0d1117] text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
```

- [ ] **Step 3: Verify in dev server**

Expected: About section visible below Hero with circular photo, bio text, and social links. Fades in on scroll.

- [ ] **Step 4: Commit**

```bash
git add src/components/About.jsx src/App.jsx
git commit -m "feat: add About section with photo and bio"
```

---

## Task 5: Experience Component

**Files:**
- Create: `src/components/Experience.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create `src/components/Experience.jsx`**

```jsx
import { motion } from "framer-motion";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#0f172a]">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-2 text-center"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-black text-white text-center mb-16"
        >
          Where I've Worked
        </motion.h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/20 to-transparent" />

          <div className="space-y-10">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-8"
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-8 flex justify-center pt-1.5">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      i === 0
                        ? "bg-gradient-to-br from-blue-500 to-purple-500"
                        : "bg-[#1e293b] border-2 border-[#334155]"
                    }`}
                  />
                </div>

                <div className="pb-2">
                  <div className="text-white font-bold text-lg leading-tight">{item.role}</div>
                  <div className="text-blue-400 font-medium text-sm mb-1">{item.company}</div>
                  <div className="text-gray-500 text-xs mb-3">{item.period}</div>
                  <ul className="space-y-1.5">
                    {item.bullets.map((bullet, j) => (
                      <li key={j} className="text-gray-400 text-sm leading-relaxed flex gap-2">
                        <span className="text-blue-500 mt-1 flex-shrink-0">▸</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update `src/App.jsx` to include Experience**

```jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#0d1117] text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
```

- [ ] **Step 3: Verify in dev server**

Expected: Experience section with vertical gradient timeline line, 4 entries sliding in from left on scroll, gradient dot on most recent entry.

- [ ] **Step 4: Commit**

```bash
git add src/components/Experience.jsx src/App.jsx src/data/experience.js
git commit -m "feat: add Experience timeline section"
```

---

## Task 6: Rewrite Projects Component

**Files:**
- Rewrite: `src/components/Projects.jsx`

- [ ] **Step 1: Rewrite `src/components/Projects.jsx`**

```jsx
import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { projects } from "../data/projects";

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="bg-[#0f172a] border border-[#1e293b] rounded-xl p-6 cursor-default hover:border-blue-500/30 transition-colors duration-300"
    >
      {project.featured && (
        <p className="text-xs font-semibold text-purple-400 tracking-widest uppercase mb-3">★ Featured</p>
      )}
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs bg-[#1e293b] border border-blue-500/20 text-blue-300 px-3 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-400 hover:text-blue-300 transition"
      >
        View on GitHub →
      </a>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-2 text-center"
        >
          Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-black text-white text-center mb-16"
        >
          Things I've Built
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in dev server**

Expected: 4 project cards in 2-column grid, cards fade/slide in on scroll, AstroGuide has "★ Featured" label, hovering a card produces a 3D tilt effect.

- [ ] **Step 3: Commit**

```bash
git add src/components/Projects.jsx src/data/projects.js
git commit -m "feat: rewrite Projects with 3D tilt hover and updated data"
```

---

## Task 7: Rewrite Skills Component

**Files:**
- Rewrite: `src/components/Skills.jsx`

- [ ] **Step 1: Rewrite `src/components/Skills.jsx`**

```jsx
import { motion } from "framer-motion";
import { skills } from "../data/skills";

const colorMap = {
  blue: "bg-blue-500/10 border-blue-500/20 text-blue-300",
  purple: "bg-purple-500/10 border-purple-500/20 text-purple-300",
  gray: "bg-[#1e293b] border-white/5 text-gray-400",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0f172a]">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-2 text-center"
        >
          Toolkit
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-black text-white text-center mb-16"
        >
          Skills
        </motion.h2>

        <div className="space-y-10">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <p className="text-xs font-semibold text-gray-500 tracking-[0.2em] uppercase mb-4">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.1 + si * 0.05 }}
                    className={`px-4 py-1.5 rounded-full text-sm border ${colorMap[group.color]}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in dev server**

Expected: 3 skill categories, pills stagger-animate in on scroll, blue pills for Languages, purple for Frameworks, gray for Tools.

- [ ] **Step 3: Commit**

```bash
git add src/components/Skills.jsx src/data/skills.js
git commit -m "feat: rewrite Skills with staggered pill animations and category colors"
```

---

## Task 8: Rewrite Contact Component

**Files:**
- Rewrite: `src/components/Contact.jsx`

- [ ] **Step 1: Rewrite `src/components/Contact.jsx`**

```jsx
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] to-[#1e1b4b]/40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-black text-white mb-4"
        >
          Let's work together.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mb-10"
        >
          Open to internships, co-ops, and interesting projects.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <a
            href="mailto:shettyrv@mail.uc.edu"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition"
          >
            Send Email
          </a>
          <a
            href="https://github.com/roshet"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/rohan-shetty-525a61248/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in dev server**

Expected: Contact section with deep gradient background, purple glow blob, "Let's work together." heading, three buttons (gradient Send Email + two ghost buttons).

- [ ] **Step 3: Commit**

```bash
git add src/components/Contact.jsx
git commit -m "feat: rewrite Contact with gradient background and updated links"
```

---

## Task 9: Final Polish + Mobile Check

**Files:**
- No code changes — verification only

- [ ] **Step 1: Full page review on desktop**

Open `http://localhost:5173`. Scroll through the entire page and verify:
- Navbar: slides in on load, blurs on scroll, links smooth-scroll to correct sections
- Hero: typewriter animation cycles, both CTA buttons work (projects scroll, resume opens PDF)
- About: photo loads, bio readable, social links open correct URLs
- Experience: 4 entries with timeline dots, most recent has gradient dot
- Projects: 4 cards in 2-col grid, AstroGuide has "★ Featured", 3D tilt works on hover
- Skills: 3 categories with correct colored pills, stagger animation visible on scroll
- Contact: gradient background, all 3 buttons work

- [ ] **Step 2: Mobile check (resize browser to 375px wide)**

Expected:
- Navbar links still visible (may be tight — acceptable for now)
- Hero text not overflowing
- About section stacks to single column (photo above, text below)
- Experience timeline readable
- Projects grid stacks to 1 column
- Skills pills wrap correctly

- [ ] **Step 3: Fix any overflow or layout issues found**

Common fixes if needed:
- Add `text-4xl md:text-6xl` to Hero h1 if text overflows on mobile
- Add `hidden md:flex` to navbar links if they overflow (hides on mobile)

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "feat: complete portfolio redesign with Framer Motion animations"
```
