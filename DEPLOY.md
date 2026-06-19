# 🚀 Deploy to Vercel — Free Hosting with Custom Domain

## Option A: One-Click via Vercel Dashboard (Recommended)

### Step 1 — Push to GitHub
```bash
cd C:\Dev\adalberto-engineering-portfolio

# Initialize git (if not already done)
git init
git add .
git commit -m "Initial portfolio commit"

# Create a new repo on github.com/silveiraSoft named "portfolio"
# Then push:
git remote add origin https://github.com/silveiraSoft/portfolio.git
git branch -M main
git push -u origin main
```

### Step 2 — Deploy on Vercel
1. Go to **https://vercel.com** and log in with GitHub
2. Click **"Add New Project"**
3. Import your `silveiraSoft/portfolio` repository
4. Vercel auto-detects Next.js — just click **Deploy**
5. Your site goes live at: `https://portfolio-silveiraSoft.vercel.app`

### Step 3 — Add Environment Variable
In Vercel Dashboard → Project → Settings → Environment Variables:
```
NEXT_PUBLIC_BASE_URL = https://your-site.vercel.app
```

---

## Option B: Vercel CLI (Fastest)
```bash
# Install Vercel CLI
npm i -g vercel

# In your project folder
cd C:\Dev\adalberto-engineering-portfolio
vercel

# Follow prompts → deploys in ~60 seconds
# Production deploy:
vercel --prod
```

---

## Custom Domain (Free with Vercel)

Vercel gives you `yourname.vercel.app` for free.
For a custom domain like `adalbertosilveiranapoles.dev`:

### Cheap domain options:
| Registrar | Price/year | Notes |
|-----------|-----------|-------|
| **Porkbun** | ~$10–15 | Best price for .dev |
| **Cloudflare** | ~$11 | No markup, DNS included |
| **Namecheap** | ~$12 | Reliable |

### Connect domain to Vercel:
1. Buy domain at Porkbun or Cloudflare (~$10/yr for `.dev`)
2. Vercel Dashboard → Project → Settings → Domains
3. Add your domain (e.g., `adalbertosilveiranapoles.dev`)
4. Vercel shows you DNS records to add (A record + CNAME)
5. Add them at your registrar → SSL auto-configured in minutes

### Suggested domain names:
- `adalbertosilveiranapoles.dev` (~$12/yr) ⭐ Best
- `adalbertodev.com` (~$12/yr)
- `silveira.dev` (~$12/yr)

---

## Cost Summary
| Service | Cost |
|---------|------|
| Vercel Hobby (hosting) | **FREE** |
| Custom domain (.dev) | ~$10–15/year |
| SSL certificate | **FREE** (auto) |
| CDN | **FREE** |
| **Total** | **$10–15/year** |

---

## Local Development
```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# → http://localhost:3000

# Build for production
npm run build
npm start
```

---

## Add Your Resume PDF
Place your resume at:
```
public/adalberto-silveira-resume-2026.pdf
```
The download button will automatically serve it.

---

## SEO Checklist After Deploy
- [ ] Set `NEXT_PUBLIC_BASE_URL` to your real URL in Vercel
- [ ] Add your resume PDF to `/public/`
- [ ] Submit sitemap to Google Search Console: `https://search.google.com/search-console`
   - Add property → your domain
   - Submit: `https://yourdomain.dev/sitemap.xml`
- [ ] Add OpenGraph image at `/public/og-image.png` (1200×630px)
