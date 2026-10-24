# Gen Coupe Swaps

Free knowledge base for LS-swapping a Hyundai Genesis Coupe (BK).

**Domain:** gencoupeswaps.com (available – grab it)

## Features

- Dark theme, responsive layout
- Left sidebar with all major build sections
- Top navigation: Home · Featured Builds · Resources · About · Donate
- Search bar for quick jumps to any guide
- Stripe payment buttons for Featured Builds ($10) and donations
- Hero image area on the home page
- Easy to expand with more guides or featured builds later
- Ready for Cloudflare Pages + GitHub

## Quick Start (local)

```bash
cd gencoupeswaps
npm install
npm run dev
```

Open http://localhost:4321

## Deploy to Cloudflare Pages (free)

1. Create a new GitHub repository and push this project.
2. In Cloudflare Dashboard → Pages → Create a project → Connect to Git.
3. Build settings:
   - Framework preset: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`
4. After the first deploy, go to Custom domains and add `gencoupeswaps.com`.
5. At your registrar (Porkbun / Cloudflare Registrar / etc.), point the nameservers to Cloudflare (or just the CNAME they give you).

## Adding your Google Doc content

1. In Google Docs: **File → Download → Markdown (.md)** (or just copy-paste sections).
2. Open the matching file in `src/pages/guides/` (e.g. `engine-selection.astro`).
3. Replace the placeholder box with your text, headings, lists, and image tags.
4. Put images in `public/images/` and reference them like:

```html
<img src="/images/my-engine-bay.jpg" alt="LS in engine bay" />
```

## Project Structure

```
src/
  components/     Header (with search), Sidebar, Footer, Hero
  layouts/        BaseLayout.astro
  pages/
    index.astro
    featured.astro   (Stripe $10 button)
    resources.astro
    about.astro
    donate.astro     (Stripe $5 / $10 / $25 buttons)
    guides/          one page per major topic
  styles/
    global.css       dark theme + responsive rules
public/
  images/            put your photos here
```

## Stripe setup (quick)

1. Create a free account at stripe.com
2. Create Payment Links for Featured Build ($10) and donations
3. Replace the placeholder `href` values in `featured.astro` and `donate.astro`

## Next Steps You Can Ask For

- Fill any guide page with real content from your Doc
- Replace Stripe placeholder links with real ones
- Add your car photo as the hero image
- Add more sidebar sections or a contact form
```
