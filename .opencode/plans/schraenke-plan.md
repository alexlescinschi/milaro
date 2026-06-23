# Plan: Schränke fără variante, galerie foto ca pe marya.ru

## Obiectiv
Eliminăm variantele de culoare la toate cele 23 de dulapuri și arătăm doar galeria foto (3-7 poze per dulap), exact ca pe marya.ru.

---

## Lista completă URL-uri (23 dulapuri)

### Drehtürenschrank (raspashnie) — 15 produse

| # | Slug nostru | URL marya | Status |
|---|------------|-----------|--------|
| 1 | `nicolle-cabinet` | `/catalog/shkafi/raspashnie/nicolle-cabinet/` | ✅ Confirmat |
| 2 | `mixal-cabinet` | `/catalog/shkafi/raspashnie/mixal-cabinet/` | De verificat |
| 3 | `spark-cabinet` | `/catalog/shkafi/raspashnie/spark-cabinet/` | ✅ Confirmat (4 foto) |
| 4 | `teramo-cabinet` | `/catalog/shkafi/raspashnie/teramo-cabinet/` | ✅ Confirmat (5 foto) |
| 5 | `mix-cabinet` | `/catalog/shkafi/raspashnie/mix-cabinet/` | De verificat |
| 6 | `vector-cabinet` | `/catalog/shkafi/raspashnie/vector-cabinet/` | ✅ Confirmat |
| 7 | `jazz-cabinet` | `/catalog/shkafi/raspashnie/jazz-cabinet/` | ✅ Confirmat |
| 8 | `ice-cabinet` | `/catalog/shkafi/raspashnie/ice-cabinet/` | De verificat |
| 9 | `integrato-cabinet` | `/catalog/shkafi/raspashnie/integrato-cabinet/` | De verificat |
| 10 | `camelia-cabinet` | `/catalog/shkafi/raspashnie/camelia-cabinet/` | De verificat |
| 11 | `antro-cabinet` | `/catalog/shkafi/raspashnie/antro-cabinet/` | ✅ Confirmat |
| 12 | `trento-cabinet` | `/catalog/shkafi/raspashnie/trento-cabinet/` | ✅ Confirmat |
| 13 | `allure-cabinet` | `/catalog/shkafi/raspashnie/allure-cabinet/` | ✅ Confirmat |
| 14 | `tokyo-cabinet` | `/catalog/shkafi/raspashnie/tokyo-cabinet/` | ✅ Confirmat |
| 15 | `tokyo-glyanets-cabinet` | `/catalog/shkafi/raspashnie/tokyo-glyanets-cabinet/` | ✅ Confirmat |

### Schiebetürenschrank (kupe) — 6 produse

| # | Slug nostru | URL marya | Status |
|---|------------|-----------|--------|
| 16 | `mix-wardrobe` | `/catalog/shkafi/kupe/mix-wardrobe/` | De verificat |
| 17 | `nicolle-wardrobe` | `/catalog/shkafi/kupe/nicolle-wardrobe/` | De verificat |
| 18 | `nova-wardrobe` | `/catalog/shkafi/kupe/nova-wardrobe/` | ✅ Confirmat (7 foto) |
| 19 | `spark-wardrobe` | `/catalog/shkafi/kupe/spark-wardrobe/` | ✅ Confirmat (3 foto) |
| 20 | `top-line-wardrobe` | `/catalog/shkafi/kupe/top-line-wardrobe/` | De verificat |
| 21 | `jazz-wardrobe` | `/catalog/shkafi/kupe/jazz-wardrobe/` | ✅ Confirmat |

### Ankleidezimmer (garderobnie) — 2 produse

| # | Slug nostru | URL marya | Status |
|---|------------|-----------|--------|
| 22 | `optima-dressing` | `/catalog/shkafi/garderobnie/optima-dressing/` | De verificat |
| 23 | `stilos` | `/catalog/shkafi/garderobnie/stilos/` | De verificat |

---

## Pași execuție

### Pasul 1 — Confirmă toate URL-urile (11 rămase)
Fetch HEAD/GET pe cele 11 neverificate. Dacă un URL dă 404, încercăm slug-uri alternative.

### Pasul 2 — Extrage imaginile din galerie
Fetch fiecare pagină cu `format: "html"` și extrage `data-src` din `<li>` cu `uk-switcher`. URL-urile imaginilor sunt de forma:
```
https://upload-bxp-mfm.marya.ru/iblock/{dir}/{hash}/{image_hash}.jpg
```

### Pasul 3 — Descarcă imaginile local
```
public/images/schraenke/{slug}/01.jpg
public/images/schraenke/{slug}/02.jpg
public/images/schraenke/{slug}/03.jpg
...
```

### Pasul 4 — Rescrie produsele în ProductDetail.tsx
Înlocuiește `variants: [...]` cu `images: [...]`:
```ts
'nicolle-cabinet': {
  name: 'Nicolle Schrank',
  desc: '...',
  price: 'ab CHF ...',
  images: [
    '/images/schraenke/nicolle-cabinet/01.jpg',
    '/images/schraenke/nicolle-cabinet/02.jpg',
    '/images/schraenke/nicolle-cabinet/03.jpg',
  ],
  specs: [...],
}
```

### Pasul 5 — Modifică ProductPageClient
Dacă `p.images` există → galerie direct din `p.images`, fără swatch-uri, fără nume variantă. Dacă `p.variants` → comportamentul vechi (bucătării).

### Pasul 6 — Build & test
`npm run build`, verific câteva dulapuri.

---

## Note
- Pozele vechi din `/images/portfolio/` rămân (folosite de bucătării, thumbnails)
- `products-list.ts` nu se modifică
- Folder nou: `/public/images/schraenke/` — separat, ușor de gestionat
