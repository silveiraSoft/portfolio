# Portfolio — Adalberto Silveira Napoles

Engineering portfolio site targeting senior engineer roles, with emphasis on AWS Monitor and LinkedIn Job Agent personal projects.

## Stack

- **Framework:** Next.js 15 (App Router, Turbopack)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v3 — dark-first design system (see tokens below)
- **Animation:** Framer Motion v12
- **Icons:** lucide-react
- **Forms:** react-hook-form + zod
- **Scroll detection:** react-intersection-observer
- **Font:** Geist Sans / Geist Mono (Next.js built-in)

## Commands

```bash
npm run dev      # dev server (Turbopack, port 3000)
npm run build    # production build
npm run lint     # ESLint
```

## Project structure

```
src/
  app/
    layout.tsx           # root layout, metadata, font vars
    page.tsx             # home page — imports all sections in order
    globals.css          # base styles, custom scrollbar
    blog/[slug]/page.tsx # blog post route
  components/
    layout/
      Navbar.tsx
      Footer.tsx
    sections/            # one file per page section
      Hero.tsx           # typewriter animation, resume download CTA
      About.tsx
      TechnicalSkills.tsx  # filterable skill bars
      Certifications.tsx
      Experience.tsx       # timeline
      FeaturedProjects.tsx # aws-monitor + agent-linkedin featured
      ArchitectureCaseStudies.tsx  # 3 expandable case studies
      TechnicalBlog.tsx
      ResumeDownload.tsx
      ContactForm.tsx
    ui/                  # shared primitives (if any)
  lib/
    data.ts              # ← ALL content lives here (PERSONAL, SKILLS, PROJECTS, etc.)
    utils.ts             # cn() helper (clsx + tailwind-merge)
  types/                 # shared TypeScript types
public/
  adalberto-silveira-resume-2026.pdf   # resume for download
  adalberto-silveira-resume-2026.docx
  llms.txt
context/                 # source documents (not served, reference only)
```

## Design system (Tailwind custom tokens)

Dark-first. All backgrounds are near-black. Do not add light-mode styles — this site is intentionally dark.

| Token | Value | Use |
|---|---|---|
| `background` | `#080811` | page bg |
| `surface` | `#0D0D1A` | section bg |
| `card` | `#11111F` | card bg |
| `card-hover` | `#161628` | card hover |
| `border` | `#1C1C35` | default border |
| `border-light` | `#252545` | subtle border |
| `primary` | `#6366F1` | main accent (indigo) |
| `violet` | `#8B5CF6` | secondary accent |
| `cyan` | `#22D3EE` | tertiary accent |
| `emerald` | `#10B981` | success / available |
| `text.primary` | `#F1F5F9` | headings, body |
| `text.secondary` | `#94A3B8` | secondary text |
| `text.muted` | `#64748B` | captions, labels |

Key shadows: `shadow-glow`, `shadow-card`, `shadow-card-hover`
Key gradients: `bg-gradient-primary`, `bg-gradient-hero`, `bg-gradient-glow`

## Content rule

**All page content lives in `src/lib/data.ts`.** To update text, skills, projects, experience, certifications — edit only that file. Components import from it; do not hardcode content inside components.

## Key content facts

- GitHub: github.com/silveiraSoft
- Featured projects: `aws-monitor` (Amazon Bedrock + Claude 3.5 Haiku, CDK, CloudFront) and `agent-linkedin-candidate` (Python, Claude API, LinkedIn automation)
- Resume in `public/`: `adalberto-silveira-resume-2026.pdf` and `.docx`
- Resume contains styled hyperlink to live portfolio in the contact-info line

## Deploy

- **Live URL:** https://portfolio-nine-psi-67.vercel.app (use this in all references)
- Platform: Vercel (free tier), config in `vercel.json`
- Env var: `NEXT_PUBLIC_BASE_URL` — set in Vercel dashboard
- Custom domain pending: `adalbertosilveiranapoles.dev` (not yet purchased)
- Full deploy instructions: `DEPLOY.md`

## Conventions

- Components use Framer Motion `motion.*` + `useInView` for scroll-triggered entrance animations
- Animation pattern: `initial={{ opacity:0, y:24 }}` → `animate={{ opacity:1, y:0 }}`
- `cn()` from `src/lib/utils.ts` for conditional Tailwind classes
- No external UI library — all components are custom
- TypeScript strict mode; no `any`
- `.docx` editing requires unzip → edit XML → rezip workflow (do not use Word's binary format directly)

## Session startup checklist

Before making changes in a new session:
1. Read the relevant section component from `src/components/sections/`
2. Check `src/lib/data.ts` if the change is content-related
3. Run `npm run dev` to verify current state if needed
