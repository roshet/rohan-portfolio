# Portfolio Redesign — Design Spec
**Date:** 2026-04-01  
**Goal:** Redesign Rohan Shetty's personal portfolio to impress recruiters and stand out visually.

---

## Overview

Rebuild the existing React + Tailwind portfolio with a **Sleek & Professional** visual direction, **Dynamic & Energetic** animations via Framer Motion, and an expanded section structure. Target audience: technical recruiters and hiring managers evaluating a CS student for internships/co-ops.

---

## Visual Direction

- **Color palette:** Deep navy/black base (`#0d1117`, `#0f172a`) with blue-to-purple gradient accents (`#2563eb` → `#7c3aed`)
- **Typography:** Bold, heavy weights for headings (font-weight 800–900); readable gray (`#8b949e`) for body text
- **Cards:** Dark surface (`#0f172a`) with subtle border (`#1e293b`), rounded corners (`border-radius: 12px`)
- **Skill pills:** Glowing blue-tinted pills with category-color borders
- **Gradient CTA buttons:** Blue-to-purple gradient for primary actions; ghost border for secondary
- **Background accents:** Radial gradient blobs (low opacity) behind hero and contact sections

---

## Animation (Framer Motion)

- **Hero:** Typewriter effect cycling through role strings (e.g. "Full Stack Developer" → "Data Engineer" → "Builder") using a character-by-character interval; name fades in with slight upward translate on load
- **Scroll reveals:** Each section animates in on scroll using `whileInView` with `fadeInUp` — staggered for lists
- **Project cards:** 3D tilt on hover via `useMotionValue` + `useTransform`
- **Skill pills:** Staggered fade-in when Skills section enters viewport
- **Nav links:** Subtle underline slide animation on hover

---

## Section Structure

### ① Hero
- Full viewport height (`min-h-screen`)
- Greeting label: "👋 Hello, I'm"
- Name: `Rohan Shetty` — large, bold, white
- Animated subtitle cycling through roles (e.g. "Full Stack Developer", "Data Engineer", "Builder")
- One-liner bio below subtitle
- Two CTAs: **View Projects** (gradient button, scrolls to Projects) + **Download Resume** (ghost button, opens PDF from `public/resume.pdf` — you will need to place your resume PDF there)
- Tech stack row at bottom: Python · React · FastAPI · SQL (muted text)
- Animated radial gradient background blob

### ② About
- Two-column layout: circular photo placeholder (left) + bio text (right)
- Section label: "About Me" in blue uppercase tracking
- Heading: short punchy line (e.g. "Builder at heart, CS student by training.")
- Bio: 3–4 sentences — background, what drives you to build, what you're looking for
- Social icon links: GitHub, LinkedIn, Email

### ③ Experience
- Vertical timeline with blue-purple gradient dot markers
- Each entry: Role + Company (bold), date range (muted), 1–2 bullet points
- Placeholder entries to be filled with real internships, jobs, or relevant coursework/clubs
- Active/most-recent entry has gradient dot; past entries have muted dot

### ④ Projects
- 2-column grid (stacks to 1 column on mobile)
- Featured project (AstroGuide) has a "FEATURED" label in purple
- Each card: project title, 2-sentence description, tech badge pills, GitHub link
- Hover: 3D tilt effect + subtle border glow
- Data sourced from existing `src/data/projects.js`

### ⑤ Skills
- Flat layout: category headers (uppercase muted) + pill rows below each
- Category accent colors: Languages = blue pills, Frontend = purple pills, Data = green pills, Tools = gray pills
- Staggered entrance animation on scroll
- Data sourced from existing `src/data/skills.js` (fix the Languages array — currently one string instead of separate items)

### ⑥ Contact
- Centered layout, gradient background (`#0d1117` → `#1e1b4b`)
- Heading: "Let's work together."
- Subtext: "Open to internships, co-ops, and interesting projects."
- Three buttons: Send Email (gradient), GitHub (ghost), LinkedIn (ghost)

---

## Navigation

- Sticky top navbar with blurred backdrop (`backdrop-blur`)
- Logo/name on the left
- Section links on the right: About · Experience · Projects · Skills · Contact
- Active section highlight via scroll position tracking
- Smooth scroll on link click

---

## New Files / Changes

| File | Change |
|------|--------|
| `src/components/Hero.jsx` | Full rewrite |
| `src/components/About.jsx` | New component |
| `src/components/Experience.jsx` | New component |
| `src/components/Projects.jsx` | Rewrite with tilt + new styling |
| `src/components/Skills.jsx` | Rewrite with stagger + pill colors |
| `src/components/Contact.jsx` | Rewrite with gradient bg |
| `src/components/Navbar.jsx` | New component |
| `src/data/experience.js` | New data file |
| `src/data/skills.js` | Fix Languages array |
| `src/App.jsx` | Add Navbar + About + Experience sections |
| `src/index.css` | Keep minimal — Tailwind only |
| `package.json` | Add `framer-motion` dependency |

---

## Out of Scope

- Backend / contact form (email stays as mailto link)
- Blog or writing section
- Dark/light mode toggle
- Internationalization
