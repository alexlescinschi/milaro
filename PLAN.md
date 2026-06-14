# milaro.ch — Plan de Implementare

## Status: Actualizat — Site în germană, design 100% marya.ru

---

## Cerințe principale

- **Limba:** Doar germană (DE)
- **Design:** Identic cu marya.ru — culori, typografie, layout, componente, efecte
- **Nicio modificare de design** față de marya.ru

---

## Design System (marya.ru)

### Paletă culori
- `--main-color`: `#0F0F0F` — text primar
- `--primary-color`: `#E31E24` — roșu brand (butoane, linkuri, accente)
- `--hover-color`: `#c80b11` — roșu hover
- `--muted-color`: `#757575` — text secundar
- `--light-color`: `#F4F4F4` — fundal secțiuni gri
- `--border-color`: `#E1E1E1` — borduri
- `--contrast-color`: `white`

### Tipografie
- **Heading font:** "SangBleuSunrise-Regular-WebXL", serif (`--sb-reg`)
- **Body font:** `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- **Base size:** `14px` (`12px` pe ecrane < 1600px)
- **Nav links:** `0.875rem`, uppercase, letter-spacing `0.03em`
- **Butoane:** uppercase, letter-spacing `0.07em`, font-weight 500
- **Root container:** `max-width: 1200px` (`.uk-container`), `1500px` (`.uk-container-xlarge`)

### Componente cheie de replicat
1. **Header:**
   - Top bar: linkuri business (stânga), linkuri servicii (centru), limbă + telefon (dreapta)
   - Main nav: logo SVG roșu, 5 linkuri cu mega dropdown (3 coloane + card promo)
   - Dreapta: icon utilizator, selector oraș, buton "Projekt bestellen" (roșu)
   - Sticky header cu efect glass-blur la scroll

2. **Hero video:**
   - Fullscreen video background (autoplay, loop, muted)
   - Gradient overlay
   - Headline "Sie sind zu Hause" în serif mare cu text-shadow
   - Navigare categorii cu efect glass (liquidGlass)

3. **Product cards:**
   - Imagine `.uk-height-large` cu `.uk-border-rounded-large` (1rem)
   - Badge sus-stânga
   - Nume produs + preț dedesubt
   - Grid: 2 col mobile, 3 col desktop

4. **Butoane:**
   - Roșu `#E31E24`, white text, uppercase, border-radius `0.45rem`
   - Hover: `#c80b11`, scale 1.05
   - Variantă inversă: `rgba(255,255,255,0.25)` cu backdrop-filter blur

5. **Glass effect:**
   - `backdrop-filter: blur(5-10px)`
   - Semi-transparent white overlay
   - Border-radius `1rem`

6. **Footer:**
   - Background blur + overlay
   - Grid coloane: logo, link-uri, sociale, buton callback
   - Disclaimer legal jos

7. **Formulare modale:**
   - Câmpuri: Nume, Telefon, Oraș
   - SMS verification, reCAPTCHA
   - Trimitere pe email (Nodemailer / Resend)
   - Thank you page

### Layout breakpoints
- 1600px — font scaling
- 1200px — tablet/laptop
- 960px — tablet

---

## Pagini (doar germana, fără pagini noi)

| Rută | Pagină | Status |
|---|---|---|
| `/` | Homepage | ⬜ De refăcut ca marya.ru |
| `/katalog` | Catalog principal | ⬜ De refăcut |
| `/katalog/[category]` | Categorie (küchen, schränke, etc.) | ⬜ De refăcut |
| `/katalog/[category]/[slug]` | Produs | ⬜ De refăcut |
| `/portfolio` | Portfolio | ⬜ De refăcut |
| `/portfolio/[slug]` | Proiect | ⬜ De refăcut |
| `/dienstleistungen` | Servicii | ⬜ De refăcut |
| `/unternehmen` | Despre companie | ⬜ De refăcut |
| `/zusammenarbeit` | B2B / Partner | ⬜ De refăcut |
| `/kontakt` | Contact | ⬜ De refăcut |
| 404 | Not found | ⬜ De refăcut |



## Ce trebuie făcut:

### 🔴 Prioritate Mare
1. **Refactor design system** — Aplicarea paletei marya.ru (`#E31E24`, `#0F0F0F`, etc.), tipografie (SangBleuSunrise), layout breakpoints
2. **Header refăcut** — Top bar + mega dropdown 3 coloane + sticky glass + "Projekt bestellen" CTA
3. **Hero video** — Background video + glass navigation + "Sie sind zu Hause"
4. **Butoane + efecte** — Stilizare butoane roșii, glass effect (backdrop-filter), border-radius uniform
5. **Footer refăcut** — Layout blur, grid linkuri, sociale, disclaimer legal
6. **Imagini placeholder** — Pentru produse, categorii, hero, companie
7. **Seed complet** — 150 produse (30 per categorie)

### 🟡 Prioritate Medie
8. **Catalog dinamic** — Date din DB + filtre tab
9. **Produs dinamic** — Date din DB
10. **Portfolio dinamic** — Date din DB
11. **Formulare modale** — Nume + Telefon + Oraș + SMS verification + trimitere email
12. **Loading states** — Skeleton
13. **Error handling** — Error boundaries + API error pages

### 🟢 Prioritate Scăzută
14. **Animații + parallax** — Scroll animations, parallax (ca marya.ru)
15. **SEO** — Meta tags, JSON-LD, microdata schema.org
16. **Optimizare imagini** — next/image, WebP, blur placeholder
17. **Deploy Vercel** — Configurare domeniu, SSL
18. **SEO** — Sitemap, robots.txt

---

## Structura Fișierelor (actualizată)

```
milaro.ch/
├── prisma/
│   ├── schema.prisma
│   ├── seed.ts
│   └── dev.db
├── data/
│   └── products/
│       ├── kueche.json
│       ├── schraenke.json
│       ├── baeder.json
│       ├── sofa.json
│       └── betten.json
├── public/
│   ├── images/
│   └── video/
│       └── hero.mp4
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── not-found.tsx
│   │   ├── globals.css        # CSS custom properties marya.ru + animații
│   │   ├── layout.tsx
│   │   ├── (public)/
│   │   │   ├── katalog/
│   │   │   ├── portfolio/
│   │   │   ├── dienstleistungen/
│   │   │   ├── unternehmen/
│   │   │   ├── zusammenarbeit/
│   │   │   └── kontakt/
│   │   └── api/
│   │       ├── inquiry/
│   │       ├── contact/
│   │       └── b2b/
│   ├── components/
│   │   ├── layout/            # Header (top bar + mega dropdown), Footer, MobileNav
│   │   ├── home/              # HeroVideo, ProductGrid, StatsBar, Vorteile, etc.
│   │   ├── catalog/           # ProductCard, FilterTabs, ProductGallery
│   │   ├── portfolio/
│   │   ├── forms/             # ModalForm (lead), ContactForm, B2BForm
│   │   └── shared/            # GlassPanel, Button, SectionHeading, etc.
│   └── lib/
│       ├── prisma.ts
│       ├── utils.ts
│       ├── constants.ts       # Traduse în germană
│       ├── validations.ts
│       └── email.ts           # Nodemailer / Resend
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── .env
```

---

## Comenzi Utile

```bash
npm run dev          # Dev server
npm run db:seed      # Populează DB
npm run build        # Production build
npm run db:reset     # Reset DB
```

---

## Design Checklist (marya.ru)

- [ ] `--primary-color: #E31E24` aplicat peste tot
- [ ] Tipografie: SangBleuSunrise pentru headline-uri
- [ ] Butoane roșii uppercase cu border-radius 0.45rem
- [ ] Efect glass (backdrop-filter blur) pe header și panouri
- [ ] Mega dropdown 3 coloane în header
- [ ] Sticky header cu blur la scroll
- [ ] Hero video fullscreen (autoplay, loop, muted)
- [ ] Carduri cu border-radius 1rem
- [ ] Badge sus-stânga pe carduri
- [ ] Formulare modale cu telefon + SMS verification + trimitere email
- [ ] Scroll animații + parallax identic cu marya.ru
- [ ] Footer cu blur + grid link-uri
- [ ] Layout responsive: breakpoints 1600px, 1200px, 960px
- [ ] Container max-width 1200px / 1500px

---

## Date Contact

- **Telefon/WhatsApp:** +41 77 283 75 10
- **Email:** info@milaro.ch
- **Öffnungszeiten:** Mo-Fr 09:00-18:00, Sa 10:00-16:00

---

## Note Tehnice

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4 + CSS custom properties (marya.ru theme)
- **DB:** Prisma + SQLite (dev) → PostgreSQL (prod)
- **Forms:** react-hook-form + Zod
- **Carousel:** Embla Carousel
- **Icons:** Lucide React
- **Animatii:** CSS + framer-motion (parallax, scroll)
- **SEO:** Schema.org microdata (OfferCatalog, Offer, Product)
