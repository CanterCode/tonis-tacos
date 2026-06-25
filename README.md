# Toni's Tacos

Production website for **Toni's Tacos** — a woman-owned taco shop in Dallas's Bishop Arts District.

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 16 (App Router) | Framework, SSR, file-based routing |
| React | 19 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | v4 | Utility-first styling |
| Framer Motion | 12 | Animations and transitions |
| Lucide React | latest | Icons |
| `next/font/google` | — | Playfair Display + Inter |
| `next/image` | — | Optimized image rendering |
| `next/link` | — | Client-side navigation |

## Getting Started

```bash
npm install
npm run dev       # dev server at localhost:3000
npm run build     # production build
npm run start     # run production build locally
```

## Project Structure

```
src/
├── app/                  # App Router routes
│   ├── layout.tsx        # Root layout: fonts, Navbar, Footer
│   ├── page.tsx          # Home (/)
│   ├── menu/page.tsx     # Menu (/menu)
│   ├── events/page.tsx   # Events (/events)
│   ├── gallery/page.tsx  # Gallery (/gallery)
│   ├── about/page.tsx    # About (/about)
│   └── contact/page.tsx  # Contact (/contact)
├── assets/logo.svg
├── styles/animations.css
├── types/index.ts        # Shared TypeScript interfaces
├── constants/siteConfig.ts  # Business info, hours
├── data/                 # Menu, events, testimonials, gallery
├── hooks/                # useScrollPosition, useFocusTrap
└── components/
    ├── layout/           # Navbar, Footer
    ├── ui/               # Button, Card, Badge, SectionHeader, StarRating, MenuTabs
    ├── modals/           # OrderModal, Lightbox
    ├── home/             # HeroSection, TestimonialsGrid
    ├── events/           # EventsGrid
    ├── gallery/          # GalleryGrid
    └── contact/          # ContactForm
```

## Design System

| Token | Value | Tailwind class |
|---|---|---|
| Primary red | `#C0392B` | `bg-primary`, `text-primary` |
| Primary dark | `#8B1A1A` | `bg-primary-dark` |
| Secondary orange | `#E67E22` | `bg-secondary`, `text-secondary` |
| Accent yellow | `#F39C12` | `text-accent` |
| Charcoal | `#1A1A1A` | `text-charcoal` |
| Cream | `#FAF6F0` | `bg-cream`, `text-cream` |
| Muted gray | `#6B6B6B` | `text-muted` |

Typography: **Playfair Display** (`font-heading`) for headings, **Inter** (`font-body`) for body. Both loaded via `next/font/google` — no external requests.

CSS tokens are defined in `src/app/globals.css` using Tailwind v4's `@theme` block.

## Next.js Notes

- **App Router**: all routes are `page.tsx` files inside `src/app/`
- **Server Components** by default — no JS shipped to the client unless needed
- **`'use client'`** on: Navbar, modals, Framer Motion wrappers, form, tab switcher, gallery grid, events grid
- Fonts: `next/font/google` self-hosts Google Fonts — no `@import` in CSS
- Images: `next/image` for all static images; raw `<img>` only in the gallery lightbox

## Adding Gallery Images

1. Drop the image file into `/public/gallery/`
2. Open `src/data/galleryImages.ts`
3. Add an entry:
   ```ts
   { filename: 'birria-taco.jpg', alt: 'Birria taco with consomé dipping broth', caption: 'Our famous Birria' }
   ```
4. Run `npm run build` to verify

## Updating Content

| What to change | File |
|---|---|
| Menu items | `src/data/menuData.ts` |
| Daily specials / live music | `src/data/eventsData.ts` |
| Testimonials | `src/data/testimonialsData.ts` |
| Phone, address, hours, socials | `src/constants/siteConfig.ts` |

## Deployment

**Vercel** (recommended):
```bash
vercel deploy
```
Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deploys on push.

**Netlify** also works with `next build` via the `@netlify/plugin-nextjs` adapter.
