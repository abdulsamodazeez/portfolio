# Abdulsamod Azeez — Portfolio & Professional Website

A fast, modern personal website built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Light/dark theme, animated sections, SEO-ready, and it auto-pulls the latest blog posts from Hashnode.

## Tech stack

- **Next.js 14** (App Router, Server Components)
- **TypeScript**
- **Tailwind CSS** with CSS-variable theming
- **next-themes** — light/dark mode toggle
- **framer-motion** — scroll & entrance animations
- **lucide-react** — icons
- **Hashnode GraphQL API** — live blog posts

## Getting started

```bash
# 1. Install dependencies (creates the local, isolated node_modules/)
npm install

# 2. Run the dev server
npm run dev
# open http://localhost:3000

# 3. Production build (what Vercel runs)
npm run build && npm start
```

## Editing your content

**Almost everything lives in one file:** [`lib/data.ts`](lib/data.ts).
Update your bio, skills, projects, experience, education, certifications,
social links, etc. there — no component edits required.

- **Résumé:** replace `public/resume.pdf` with your latest PDF.
- **Blog source:** set `NEXT_PUBLIC_HASHNODE_HOST` (see below).

## Environment variables

Copy `.env.example` to `.env.local` and adjust:

```bash
NEXT_PUBLIC_HASHNODE_HOST=abdulsamodazeez.hashnode.dev
NEXT_PUBLIC_SITE_URL=https://abdulsamodazeez.com
```

Both have sensible defaults baked in, so the site runs without them.

## Deploying to Vercel

1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset auto-detects **Next.js** — no config needed.
4. (Optional) add the env vars above in Project → Settings → Environment Variables.
5. Deploy. To use `abdulsamodazeez.com`, add it under Project → Settings → Domains.

Blog posts revalidate hourly, so new Hashnode articles show up automatically
without redeploying.

## Project structure

```
app/
  layout.tsx        # root layout, fonts, metadata, theme provider
  page.tsx          # assembles all sections
  globals.css       # theme tokens + base styles
  sitemap.ts / robots.ts
components/          # navbar, hero, about, skills, projects, experience, blog, contact, footer
lib/
  data.ts           # ← your content lives here
  hashnode.ts       # Hashnode GraphQL fetch
public/
  resume.pdf        # ← your résumé
```
