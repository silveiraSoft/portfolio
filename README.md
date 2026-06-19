# Adalberto Silveira Napoles — Engineering Portfolio

> World-class software engineering portfolio for a Senior Software Engineer with 18+ years of experience in Java, Spring Boot, AWS, and AI-powered systems.

**Live site:** [adalbertosilveiranapoles.dev](https://adalbertosilveiranapoles.dev) &nbsp;|&nbsp; **GitHub:** [silveiraSoft](https://github.com/silveiraSoft)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 + custom design tokens |
| Animations | Framer Motion |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Deployment | Vercel (free tier) |

---

## Features

- **11 sections** — Hero, About, Technical Skills, Certifications, Experience Timeline, Featured Projects, Architecture Case Studies, Technical Blog, Resume Download, Contact Form, Footer
- **Premium dark mode** with glassmorphism, gradient text, and micro-interactions
- **Typewriter animation** cycling through engineering roles
- **Scroll-triggered animations** via Framer Motion + IntersectionObserver
- **Sticky navbar** with active section detection and mobile hamburger drawer
- **Mobile-first** responsive design — tested on iPhone 16 Pro, Samsung Galaxy S21 FE, iPad Air, and desktop
- **SEO optimized** — OpenGraph, Twitter cards, sitemap.xml, robots.txt, structured metadata
- **Resume PDF download** served from `/public/`
- **WCAG AA accessible** — semantic HTML, ARIA labels, focus-visible states
- **Lighthouse score > 95** target

---

## Featured Projects Highlighted

### AWS Monitor Agent
Chat-based AWS infrastructure monitoring powered by **Amazon Bedrock Agents** and **Claude 3.5 Haiku**. Non-technical users ask natural language questions and receive intelligent analysis of EC2, Lambda, and CloudWatch health — with anomaly detection and auto-generated incident summaries. Fully serverless (Lambda + API Gateway + CloudFront/S3).

### LinkedIn Job Agent
Autonomous AI agent built with the **Claude API** that searches LinkedIn jobs, scores them against a resume, and drafts personalized applications. Demonstrates agentic reasoning, tool-use, and end-to-end automation with Python.

---

## Project Structure

```
adalberto-engineering-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Design tokens, glassmorphism, animations
│   │   ├── layout.tsx           # Root layout + SEO metadata
│   │   ├── page.tsx             # Home page — assembles all sections
│   │   ├── sitemap.ts           # Dynamic sitemap
│   │   └── robots.ts            # robots.txt
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Sticky nav + mobile drawer
│   │   │   └── Footer.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── TechnicalSkills.tsx
│   │       ├── Certifications.tsx
│   │       ├── Experience.tsx
│   │       ├── FeaturedProjects.tsx
│   │       ├── ArchitectureCaseStudies.tsx
│   │       ├── TechnicalBlog.tsx
│   │       ├── ResumeDownload.tsx
│   │       └── ContactForm.tsx
│   └── lib/
│       ├── data.ts              # All portfolio content (single source of truth)
│       └── utils.ts             # cn() utility
├── public/
│   └── adalberto-silveira-resume-2026.pdf
├── next.config.ts
├── tailwind.config.ts
├── vercel.json                  # Security headers + cache config
└── DEPLOY.md                    # Deployment guide
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server (Turbopack)
npm run dev
# → http://localhost:3000

# Build for production
npm run build
npm start
```

---

## Customization

All portfolio content lives in **`src/lib/data.ts`** — edit this single file to update:
- Personal info, links, tagline
- Skills and proficiency levels
- Work experience
- Featured projects
- Certifications
- Blog posts
- Architecture case studies

---

## Deployment

See **[DEPLOY.md](./DEPLOY.md)** for full instructions:

1. Push to GitHub
2. Import to [Vercel](https://vercel.com) — auto-detects Next.js, deploys in ~60s
3. Add `NEXT_PUBLIC_BASE_URL` environment variable
4. (Optional) Connect a custom domain — `.dev` domains ~$10/yr at Porkbun or Cloudflare

**Cost:** Vercel Hobby (free) + domain (~$10–15/yr) = **< $15/year total**

---

## Environment Variables

```bash
# .env.local
NEXT_PUBLIC_BASE_URL=https://your-domain.dev
```

---

## License

MIT — feel free to fork and adapt for your own portfolio.

---

*Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.*
