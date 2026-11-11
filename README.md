# kiroku 記録: a personal digital archive

An anime-inspired, dark, cinematic portfolio and journal built with **Astro 7, Tailwind CSS 4 and Markdown**. Fully static, no database, deploys anywhere.

> Everything marked `placeholder: true` (it shows a small "sample" badge) is sample content. Replace it with yours.

## Quick start

Requires Node 22 or newer.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs ./dist
npm run preview    # serve the production build locally
```

## First five edits (10 minutes)

1. `src/data/profile.ts`: your name, tagline, intro, skills and levels, timeline, mission log, social links, email.
2. `astro.config.mjs`: set `SITE_URL` to your real domain (SEO, sitemap, RSS). Also update the `Sitemap:` line in `public/robots.txt`.
3. Delete or replace the sample files in `src/content/` (see below).
4. `public/og.png`: replace with your social share image (1200x630). `scripts/make-assets.mjs` shows how the sample was generated.
5. In `profile.ts` set `site.showPlaceholderBadges = false` once everything is real.

## Project structure

```
kiroku/
├─ astro.config.mjs          site URL, integrations, code highlighting theme
├─ public/                   favicon, og.png, robots.txt (served as-is)
├─ scripts/make-assets.mjs   generates the sample images
└─ src/
   ├─ content.config.ts      schemas: the "rules" for articles, achievements, projects
   ├─ content/
   │  ├─ writeups/*.md       one Markdown file = one article
   │  ├─ achievements/*.yaml one file = one achievement
   │  └─ projects/*.yaml     one file = one project
   ├─ assets/                images and certificates (optimized at build time)
   │  ├─ writeups/  achievements/  projects/
   ├─ data/
   │  ├─ profile.ts          ALL personal info, skills, timeline, missions, links
   │  └─ utils.ts            reading time, dates, seeded random for generated art
   ├─ layouts/BaseLayout.astro   head/SEO, nav, footer, intro, page transitions
   ├─ components/            Nav, Footer, Intro, HeroScene, ArticleCard, ProjectCard,
   │                         AchievementCard, LevelBars, Radar, MissionLog, ProceduralCover ...
   ├─ pages/                 index, about, writeups/, achievements, projects, contact, 404, rss.xml
   └─ styles/global.css      design tokens and all styling
```

## Adding content

### A new article
Create `src/content/writeups/my-new-post.md`. The filename becomes the URL (`/writeups/my-new-post/`).

```md
---
title: "My new post"
description: "One or two sentences for cards, search and SEO."
date: 2026-12-01
category: ctf          # cybersecurity | ctf | linux | devops | programming | thoughts
tags: [nmap, labs]
featured: false        # true pins it to the Featured row
draft: false           # true hides it from the site
cover: ../../assets/writeups/my-cover.png   # optional
coverAlt: Describe the image
---

Write in Markdown. Use ## and ### headings (they build the table of contents).
```

- **Code:** fenced blocks with a language (```bash, ```python) are syntax highlighted.
- **Images:** put the file in `src/assets/writeups/` and write `![alt text](../../assets/writeups/shot.png)`. Astro resizes and converts it automatically.
- **MDX:** rename to `.mdx` if you want components inside an article.
- Reading time, dates, category and tag filters, prev/next links and related posts are automatic. New tags appear in the filter on their own.
- Want a new category? Add a line to `CATEGORIES` in `src/content.config.ts`.

### A new achievement
Create `src/content/achievements/2026-my-achievement.yaml`:

```yaml
title: Won the campus CTF
description: Placed 2nd of 40 teams.
date: 2026-12-05
category: ctf        # ctf | certification | hackathon | academic | leadership | milestone | project | personal
rank: S              # S (rarest) | A | B | C
image: ../../assets/achievements/certificate.png   # optional
imageAlt: Certificate of participation
link: https://example.com/verify                   # optional
linkLabel: Verify certificate                      # optional
featured: true       # shows on the home page
```

### A new project
Create `src/content/projects/my-project.yaml`:

```yaml
name: My project
description: What it does and why it exists.
tech: [Python, Docker]
screenshot: ../../assets/projects/my-project.png   # optional; art is generated if omitted
screenshotAlt: Dashboard view
repo: https://github.com/you/my-project
demo: https://my-project.example.com               # optional
status: shipped      # shipped | building | archived
featured: true       # shows on the home page
order: 1             # lower numbers first
```

Only one file per entry. No other file needs editing.

## Contact form

The site is static, so the form has two modes (set in `src/data/profile.ts`):

- **Default (no setup):** opens the visitor's email app with the message filled in.
- **Direct delivery:** create a free form at Formspree or Web3Forms and paste its URL into `contactForm.endpoint`. The form then posts to it and shows a confirmation.

## Deploying

The build output in `dist/` is plain static files.

**Cloudflare Pages (recommended, free):** push to GitHub, create a Pages project, build command `npm run build`, output directory `dist`.

**Vercel or Netlify:** import the repo. Astro is detected automatically. Build command `npm run build`, output `dist`.

**GitHub Pages:** add a workflow using `withastro/action`, and set `site` in `astro.config.mjs`. If the site is served from a sub-path (`you.github.io/repo`), also set `base: '/repo'` and update the absolute links in `src/data/profile.ts` (`nav`) and components. A custom domain avoids this.

Before going live: set `SITE_URL`, replace `public/og.png`, update `robots.txt`, and turn off placeholder badges.

## Design notes

- **Palette:** void `#09090D`, charcoal `#15151D`, bone `#E9E6EF`, ash `#9393A3`, crimson `#C8203A`. Change them in the `@theme` block of `src/styles/global.css`.
- **Type:** Shippori Mincho (display, loaded from Google Fonts for full Japanese coverage), Hanken Grotesk (body) and JetBrains Mono (code), the last two self-hosted.
- **Artwork:** the skyline, eclipse, emblem and generated covers are original, drawn in code. No third-party or copyrighted assets.
- **Motion:** the load sequence plays once per browser session on the home page, never blocks clicks, can be skipped with any key or click, and is disabled for `prefers-reduced-motion`. Page changes use a short diagonal wipe through Astro's view transitions.
- **Accessibility:** skip link, keyboard-operable menu and filters, visible focus, live-region result counts, semantic headings, reduced motion respected.

## Ideas for later

- **Admin dashboard:** the lightest option is **Decap CMS** or **Keystatic**. Both edit the same Markdown and YAML files through a web form and commit to GitHub, so there is still no database. Because content is already one-file-per-entry with typed schemas, adding either is a small change.
- Full-text search with **Pagefind** (static, zero backend).
- Per-article Open Graph images generated at build time.
- A "now" page and a CTF scoreboard fed by the HackTheBox or TryHackMe APIs.
