# Misha Jewels — Premium Corporate Website

A luxury dark + gold corporate website for Misha Jewels Private Limited, built with:

- React 19 + Vite
- React Router (multi-page: Home, About, Manufacturing, Diamonds, Jewellery, Gallery, Contact)
- Framer Motion (page transitions, reveal/stagger animations)
- GSAP (drives Lenis smooth scroll ticker)
- Lenis (smooth scroll)
- React Three Fiber + drei (Hero background only — floating crystal particles, lazy-loaded)
- Tailwind CSS v4 (CSS-first `@theme` tokens)
- React Icons

## Getting started

```bash
npm install
npm run dev       # start dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Structure

```
src/
  components/
    layout/     Navbar, Footer, Loader, CursorGlow, ScrollProgress, BackToTop, PageHero, PageTransition
    sections/   Hero, AboutPreview, WhyChooseUs, ManufacturingExcellence, DiamondsSection,
                FeaturedJewellery, Stats, VisionMission, CTA, HeroCanvas (R3F)
    ui/         SectionHeading, GlassCard, Counter, Breadcrumb
  pages/        Home, About, Manufacturing, Diamonds, Jewellery, Gallery, Contact, NotFound
  data/         company.js — all copy/content in one place
  hooks/        useLenis, useCounter, useSEO
  index.css     Tailwind v4 theme tokens (dark + gold palette), utility classes
```

## Design tokens

- Background `#050505`, secondary `#0F1115`
- Gold accent `#D4AF37` (gradient shine text/buttons)
- Headings: Playfair Display · Body: Inter
- Glassmorphism cards, hairline borders, reduced-motion support throughout

## Content

Company content (story, vision/mission, offices, CIN, GSTIN) is sourced from the
supplied company profile and incorporation documents and centralised in `src/data/company.js`.
