export const SITE_CONFIG = {
  name: 'milaro.ch',
  phone: '+41 77 275 44 00',
  email: 'kunde@milaro.ch',
  hours: 'Mo–Fr 09:00–18:00, Sa 10:00–16:00',
}

export const NAV_ITEMS = [
  {
    label: 'Katalog',
    href: '/katalog',
    dropdown: {
      col1: [
        { label: 'Küchen', href: '/katalog/kuechen' },
        { label: 'Schränke', href: '/katalog/schraenke' },
        { label: 'Bäder', href: '/katalog/baeder' },
      ],
    },
  },
  {
    label: 'Portfolio',
    href: '/portfolio',
    dropdown: {
      col1: [
        { label: 'Projekte', href: '/portfolio' },
        { label: 'Bewertungen', href: '#' },
        { label: 'Einrichtungstipps', href: '#' },
      ],
      col2: [
        { label: 'Eckküchen', href: '#' },
        { label: 'Küchen-Wohnzimmer', href: '#' },
        { label: 'Gerade Küchen', href: '#' },
      ],
      promo: {
        title: 'Inspiration',
        text: 'Entdecken Sie unsere besten Projekte!',
        href: '#',
      },
    },
  },
  {
    label: 'Services',
    href: '/dienstleistungen',
    dropdown: {
      col1: [
        { label: 'Bestellprozess', href: '/dienstleistungen' },
        { label: 'Garantie', href: '#' },
        { label: 'Online-Bezahlung', href: '#' },
        { label: 'Kredit ohne Aufpreis', href: '#' },
      ],
      col2: [
        { label: 'Kostenlose Planung', href: '#' },
        { label: 'Kostenlose Ausmessung', href: '#' },
        { label: 'Lieferung & Montage', href: '#' },
        { label: 'Kundendienst', href: '#' },
      ],
      promo: {
        title: 'Service',
        text: 'Wir kümmern uns um alles!',
        href: '#',
      },
    },
  },
  {
    label: 'Aktionen',
    href: '#',
  },
  {
    label: 'Unternehmen',
    href: '/unternehmen',
    dropdown: {
      col1: [
        { label: 'Fabrik', href: '#' },
        { label: 'News', href: '#' },
        { label: 'Auszeichnungen', href: '#' },
        { label: 'Kontakte', href: '/kontakt' },
      ],
      col2: [
        { label: 'Zertifikate', href: '#' },
        { label: 'Karriere', href: '#' },
      ],
      promo: {
        title: 'Über uns',
        text: 'Erfahren Sie mehr über milaro.ch!',
        href: '#',
      },
    },
  },
  { label: 'Kontakt', href: '/kontakt' },
]

export const FOOTER_LINKS = [
  {
    title: 'Kataloge',
    links: [
      { label: 'Küchen', href: '/katalog/kuechen' },
      { label: 'Schränke', href: '/katalog/schraenke' },
      { label: 'Bäder', href: '/katalog/baeder' },
    ],
  },
  {
    title: 'Portfolio',
    links: [
      { label: 'Projekte', href: '/portfolio' },
      { label: 'Bewertungen', href: '#' },
      { label: 'Einrichtungstipps', href: '#' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Kostenlose Planung', href: '#' },
      { label: 'Kostenlose Ausmessung', href: '#' },
      { label: 'Lieferung & Montage', href: '#' },
      { label: 'Garantie', href: '#' },
    ],
  },
  {
    title: 'Unternehmen',
    links: [
      { label: 'Über uns', href: '/unternehmen' },
      { label: 'Kontakt', href: '/kontakt' },
      { label: 'Zusammenarbeit', href: '/zusammenarbeit' },
    ],
  },
]

export const CATEGORIES = [
  { id: 1, name: 'Küchen', slug: 'kuechen', image: '/images/promo/nav/kitchens1.jpg', count: 9 },
  { id: 2, name: 'Schränke', slug: 'schraenke', image: '/images/promo/nav/closets3.jpg', count: 9 },
  { id: 3, name: 'Bäder', slug: 'baeder', image: '/images/promo/nav/baths1.jpg', count: 9 },
]

export const STATS = [
  { value: '667 637', label: 'Aufträge ausgeführt seit 1999' },
  { value: '20', label: 'Jahre Garantie' },
  { value: '26', label: 'Jahre auf dem Markt' },
]
