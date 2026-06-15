'use client'

import { useState } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import ProductGallery from '@/components/catalog/ProductGallery'
import LeadForm from '@/components/forms/LeadForm'
import ProductOrderForm from '@/components/catalog/ProductOrderForm'

type Variant = { name: string; color: string; images: string[] }
type Feature = { icon?: string; title: string; text: string; img?: string }
type Product = {
  name: string; desc: string; price: string; tagline: string;
  variants: Variant[]
  specs: { label: string; value: string }[]
  features: Feature[]
  featureImg: string
  videos?: (string | null)[]
}

const similarProducts = [
  { name: 'Grafis', slug: 'grafis', cat: 'kuechen', label: 'Küche', img: '/images/products/07pxOyAzMM8LAKQhj_P1p1s.jpg' },
  { name: 'Granby', slug: 'granby', cat: 'kuechen', label: 'Küche', img: '/images/products/0cZ3AVTlSyxPUwLgW_fAZRl.jpg' },
  { name: 'Budbin', slug: 'budbin', cat: 'kuechen', label: 'Küche', img: '/images/products/0jifM8SdyZJQgxzHv_flxWI.jpg' },
  { name: 'Kolaria', slug: 'kolaria', cat: 'kuechen', label: 'Küche', img: '/images/products/0kesx1Y2Pt92wkDDx_04Vkl.jpg' },
  { name: 'Roshedu', slug: 'roshedu', cat: 'kuechen', label: 'Küche', img: '/images/products/097K8FXmtcZoVqJVy_lu4a1.jpg' },
  { name: 'Brix', slug: 'brix', cat: 'kuechen', label: 'Küche', img: '/images/products/0q9jxltANXHL3RmIm_2b9zJ.jpg' },
  { name: 'Sadbury', slug: 'sadbury', cat: 'kuechen', label: 'Küche', img: '/images/products/05iefZ2FsYxLSnvb3_z5ytb.jpg' },
  { name: 'Tavira', slug: 'tavira', cat: 'kuechen', label: 'Küche', img: '/images/products/04BaGWDW2glkI84IO_Yjrjl.jpg' },
  { name: 'Richmond', slug: 'richmond', cat: 'kuechen', label: 'Küche', img: '/images/products/0LSLx8yb5i198HrrA_hY4iv.jpg' },
]

const products: Record<string, Product> = {
  'mix-22': {
    name: 'Mix 22',
    desc: 'Mix 22 ist ein vielseitiges Möbelkonzept. Lackierte und furnierte Fronten lassen sich frei kombinieren — für einen ausdrucksstarken Look mit Charakter. Vielfältige Farben von dezent bis markant.',
    price: 'ab CHF 11',
    variants: [
      { name: 'Weiss Premium', color: '#f5f5f0', images: ['/images/portfolio/7597d418a5cbf489ac7f863fc3682080.jpg'] },
      { name: 'Lehmgrau', color: '#b8b0a5', images: ['/images/portfolio/7597d418a5cbf489ac7f863fc3682080.jpg'] },
      { name: 'Diamant Grau', color: '#9e9e9e', images: ['/images/portfolio/7597d418a5cbf489ac7f863fc3682080.jpg'] },
      { name: 'Gelber Sand', color: '#d4c5a0', images: [
        '/images/portfolio/7597d418a5cbf489ac7f863fc3682080.jpg',
        '/images/portfolio/7b89b06eaece34af91fc32a7cf4ce7da.jpg',
        '/images/portfolio/ac72773fd5a85c35b7fb482766412d88.jpg',
      ] },
      { name: 'Salbeigrün', color: '#9caf88', images: ['/images/portfolio/7597d418a5cbf489ac7f863fc3682080.jpg'] },
      { name: 'Kaschmir', color: '#d4c4b7', images: [
        '/images/portfolio/7597d418a5cbf489ac7f863fc3682080.jpg',
        '/images/portfolio/22d0dec884b29828847f9cdda881f2b2.jpg',
        '/images/portfolio/c86c4974fda28903d0f4eedd1fd4dfa2.jpg',
        '/images/portfolio/65594a58a76db96c31117693c5c5333a.jpg',
        '/images/portfolio/ee03a51256566aff705526ca46d4204f.jpg',
      ] },
      { name: 'Staubgrau', color: '#a09990', images: [
        '/images/portfolio/7597d418a5cbf489ac7f863fc3682080.jpg',
        '/images/portfolio/e0909937d0aa0fd3374ca3ca1df0cc83.jpg',
        '/images/portfolio/acd3708592d77d0d972a43ab6ad8c460.jpg',
        '/images/portfolio/a2a3fee42d6f23b9cd867a3205d9bee3.jpg',
        '/images/portfolio/1bb5c7e1dded0ea3a76e7c575204288c.jpg',
      ] },
      { name: 'Baltik Blau', color: '#5b7c99', images: ['/images/portfolio/7597d418a5cbf489ac7f863fc3682080.jpg'] },
      { name: 'Beton Chicago', color: '#6b6b6b', images: ['/images/portfolio/0c0f5a5b661d20b33803f06e68633750.jpg'] },
      { name: 'Eiche Natur', color: '#b8956e', images: ['/images/portfolio/5c04b838fb6bfd94fc8453ac9c7f1b26.jpg'] },
      { name: 'Eiche Aragon', color: '#8c6e4a', images: ['/images/portfolio/57a5c9fd1c2ced19fb8232b769e43d88.jpg'] },
      { name: 'Eiche Vicenza Grau', color: '#9e8e80', images: ['/images/portfolio/8f287e3808cc9da4db40dc2b412cbb65.jpg'] },
      { name: 'Eiche Charleston dunkelbraun', color: '#3d2b1f', images: [
        '/images/portfolio/e74662c8efb1dc8f4a97b60fdf02ac16.jpg',
        '/images/portfolio/iblock/017/017bfd2453729cd9385accad590a69bb/183013f45e504e799f868ebcbf3930a9.jpg',
        '/images/portfolio/iblock/ee3/ee3aac97ed8fa71deca6e5e58a59a301/e066cf1192dcc3901ba54d60bf4d813a.jpg',
        '/images/portfolio/iblock/c34/c34041d7960bc7fe73a7be13adc6d1a0/9c4df4c58bdaf68d086cf09545dc50c5.jpg',
        '/images/portfolio/iblock/54a/54aa70b45795e8b94d0ed48461ba7e58/aacbffb0237d007f52689ae0fbbbb81c.jpg',
        '/images/portfolio/iblock/125/12567a3f5defba399408fdfb76a6c045/b1ad293c75e077ea9c06a6af511e18b1.jpg',
        '/images/portfolio/iblock/703/70377848b42cdb11ae1e2985b3841351/81f1372549c7a5139eab55ab09917887.jpg',
        '/images/portfolio/iblock/fbc/fbcc8293d021a84767a537e62edf7b69/1f876cbac22da1ca4cf40e5af38644a5.jpg',
        '/images/portfolio/iblock/ec2/ec20c2a95d45c3d8462c1414ac5bc898/44c965e4b11847f36a7b53b85759f8b4.jpg',
        '/images/portfolio/iblock/226/226e50b75026a6904e5fb5e549640842/dd3e3967057f9e3979ff0f58122ceaf6.jpg',
        '/images/portfolio/iblock/ae7/ae73f48f790d699640f762fa2b192e03/02a11532171837756a7ef8f70a1d0b6f.jpg',
        '/images/portfolio/iblock/e4d/e4d64589ad53dabfcf15ea6e0b776df9/62cbb912b27899c808071081e15d895e.jpg',
        '/images/portfolio/iblock/d8d/d8dbafa13f82d4024b5f693f50912aec/f2da018bf24da7e9dcaebddf242401a6.jpg',
        '/images/portfolio/iblock/77b/77bbca91c587003a9d44593f283181ea/f0cd4059426e2cf3f2d5aff95574d5b2.jpg',
        '/images/portfolio/iblock/ec3/ec3fade9ee29aded6a0e7d0549e4bac8/c5168a177f305fe04a48a6bf9654e569.jpg',
        '/images/portfolio/iblock/a53/a5313f10c3e7f6f294065245f34e3cb6/4a10b7270f43dbc186b57df93bfad4ac.jpg',
      ] },
    ],
    specs: [
      { label: 'Material', value: 'MDF lackiert / furniert' },
      { label: 'Dekore', value: '21 Varianten' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Frontstärke', value: '19 mm' },
      { label: 'Korpus', value: '16 mm Spanplatte E1' },
      { label: 'Scharniere', value: 'Blum / Hettich' },
    ],
    tagline: 'Duett aus Design und Praktikabilität',
    featureImg: '/images/portfolio/iblock/a20/a20b71f90ddcb42f9b71142d62ec6d07/1c736d98b62f694f8227ff4348dc5618.jpg',
    features: [
      {
        img: '/images/portfolio/iblock/a20/a20b71f90ddcb42f9b71142d62ec6d07/1c736d98b62f694f8227ff4348dc5618.jpg',
        icon: '◇',
        title: 'Sicher für Kinder und Allergiker',
        text: 'EGGER LHDF-Platten Emissionsklasse E1 — internationaler Standard für Wohnräume. Keine schädlichen Dämpfe oder Gerüche, auch bei starker Erhitzung.',
      },
      {
        img: '/images/portfolio/iblock/017/017bfd2453729cd9385accad590a69bb/183013f45e504e799f868ebcbf3930a9.jpg',
        icon: '▦',
        title: 'Kratz- und Chipfest',
        text: 'Beidseitig verstärkte Beschichtung kaschiert Gebrauchsspuren zuverlässig. Die Oberfläche bleibt auch nach 5 Jahren intensiver Nutzung makellos.',
      },
      {
        img: '/images/portfolio/iblock/0df/0df713b98a0e3917a19ee5fbb988f8d6/22d0dec884b29828847f9cdda881f2b2.jpg',
        icon: '▯',
        title: 'Hermetischer Feuchtigkeitsschutz',
        text: 'Nahtlose Kantenversiegelungstechnologie verhindert das Eindringen von Wasser — besonders wichtig im Bereich der Spüle und Arbeitsplatte.',
      },
      {
        img: '/images/portfolio/iblock/7e1/7e1038153aa8edb3cecd9c121cfbfcdf/ea0433a6dfe41075dbca9ec15f8a42d8.jpg',
        icon: '◈',
        title: 'Bestes Preis-Leistungs-Verhältnis',
        text: 'Optimale Preis-Qualitäts-Balance ohne Kompromisse. Von unseren Kunden mit 4,9 von 5 Sternen bewertet — direkt vom Hersteller.',
      },
    ],
  },
  'trento-email': {
    name: 'Trento Email',
    desc: 'Trento Email vereint klassische Eleganz mit moderner Email-Technologie. Die edlen Fronten in Kombination mit feinen Profilen schaffen einen luxuriösen Look. Tradition und Trend in perfekter Harmonie.',
    price: 'ab CHF 12',
    variants: [
      { name: 'Grauweiss RAL 9002', color: '#e8e4df', images: ['/images/promo/models/trento1.jpg', '/images/promo/models/nicolle.jpg'] },
      { name: 'Creme', color: '#f5f0e0', images: ['/images/promo/models/nicolle.jpg', '/images/promo/models/trento1.jpg'] },
      { name: 'Hellgrau', color: '#c8c8c8', images: ['/images/promo/models/avenue.jpg', '/images/promo/models/jazz.jpg'] },
      { name: 'Dunkelgrau', color: '#5a5a5a', images: ['/images/promo/models/jazz.jpg', '/images/promo/models/avenue.jpg'] },
      { name: 'Schwarz', color: '#1a1a1a', images: ['/images/promo/models/mix22.jpg', '/images/promo/models/jazz3.jpg'] },
      { name: 'Olivgrün', color: '#6b6e4a', images: ['/images/promo/models/trento1.jpg', '/images/promo/models/nicolle.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'MDF mit Email-Beschichtung' },
      { label: 'Farben', value: 'RAL Classic + NCS' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Frontstärke', value: '19 mm' },
      { label: 'Profil', value: 'Klassisch gerahmt' },
    ],
    tagline: 'Trends und Traditionen',
    featureImg: '/images/promo/models/trento1.jpg',
    features: [
      {
        img: '/images/promo/models/trento1.jpg',
        icon: '◇',
        title: 'Mehrschicht-Emaille',
        text: 'Mehrschichtige Lackierung verleiht dem Ton unglaubliche Tiefe und Sattheit. Fleckenbeständig, kratzfest, leicht zu reinigen — bewahrt ursprüngliche Schönheit über Jahre.',
      },
      {
        img: '/images/portfolio/iblock/b4d/b4d7357dafd42740eab4424e3f3c11b9/c1a25fddb1fdd725bdc47c246a3a7772.jpg',
        icon: '▦',
        title: 'Beidseitige Frontenlackierung',
        text: 'Fronten werden von beiden Seiten lackiert — für maximale Ästhetik und langfristige Stabilität. Das Ergebnis: makellose Oberflächen aus jedem Blickwinkel.',
      },
      {
        img: '/images/portfolio/iblock/ca8/ca80aa9bc342ab81aa618e0f4ad5f052/d009b242f5fc35f0b1bfdd0e46e35a24.jpg',
        icon: '▯',
        title: 'Wahl der Haptik',
        text: 'Matt, samtiges Ultra-Matt, zartes Satin — wählen Sie Ihre Lieblingstextur und schaffen Sie eine individuelle Wohlfühlatmosphäre in Ihrer Küche.',
      },
      {
        img: '/images/portfolio/iblock/382/382f0bc27e76518bc8daff12eb013262/11b387847acbc5fa7a3fa61ef00847d2.jpg',
        icon: '◈',
        title: 'Lokale Restaurierung',
        text: 'Beschädigte Stelle selbst reparieren — ohne Fronttausch, ohne grossen Aufwand. Ersparnis von bis zu 70 % gegenüber dem Komplettaustausch.',
      },
    ],
  },
  'avenue': {
    name: 'Avenue',
    desc: 'Avenue — Geometrie und Ästhetik in einem. Minimalistisches Design mit charakteristischen horizontalen Linien. Perfekt für Lofts und moderne Wohnungen mit urbanem Flair.',
    price: 'ab CHF 13',
    variants: [
      { name: 'Weiss Matt', color: '#f0f0ec', images: ['/images/portfolio/iblock/0b5/0b55dcea3b6750bfaba48f63270e065f/fd4a30d8d1bc583736163fd34f7a1259.jpg', '/images/portfolio/iblock/fa7/fa713025c9743cf07108c2f9b39dba1c/157b7f95f6a486942125610a66b7a16d.jpg'] },
      { name: 'Grau Hochglanz', color: '#808080', images: ['/images/promo/models/jazz.jpg', '/images/promo/models/avenue.jpg'] },
      { name: 'Schwarz Matt', color: '#1a1a1a', images: ['/images/promo/models/mix22.jpg', '/images/promo/models/jazz3.jpg'] },
      { name: 'Sandbeige', color: '#dcc8a0', images: ['/images/promo/models/nicolle.jpg', '/images/promo/models/trento1.jpg'] },
      { name: 'Beton-Optik', color: '#b0a89c', images: ['/images/promo/models/avenue.jpg', '/images/promo/models/mix22.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'MDF / HPL' },
      { label: 'Farben', value: 'Matt + Hochglanz' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'Griffleiste integriert' },
    ],
    tagline: 'Geometrie und Ästhetik',
    featureImg: '/images/portfolio/iblock/0b5/0b55dcea3b6750bfaba48f63270e065f/fd4a30d8d1bc583736163fd34f7a1259.jpg',
    features: [
      {
        img: '/images/portfolio/iblock/0b5/0b55dcea3b6750bfaba48f63270e065f/fd4a30d8d1bc583736163fd34f7a1259.jpg',
        icon: '◇',
        title: 'Klassik in moderner Interpretation',
        text: 'Rahmenfront aus Esche mit verdecktem Griff — klassische Materialien in zeitloser Ausführung. Keine aufgesetzten Beschläge, nur reine Linien und expressive Holztextur.',
      },
      {
        img: '/images/portfolio/iblock/fa7/fa713025c9743cf07108c2f9b39dba1c/157b7f95f6a486942125610a66b7a16d.jpg',
        icon: '▦',
        title: 'Esche enttäuscht nie',
        text: 'Das dichte Massivholz der Avenue widersteht Belastungen und Feuchtigkeit zuverlässig. Unempfindlich gegenüber Zeit und intensivem Alltagsgebrauch.',
      },
      {
        img: '/images/portfolio/iblock/624/624ce02de9812a5c9c3e7436320d7722/af221920d9a4542146774beef7da8a49.jpg',
        icon: '▯',
        title: 'Italienische Lacke',
        text: 'Renner-Beschichtung (Italien) mit spezieller Auftragstechnologie garantiert makellose Glätte, Farbtiefe und höchste Abriebfestigkeit. Langlebige Schönheit für jeden Tag.',
      },
      {
        img: '/images/portfolio/iblock/5b4/5b4ca09ff61233b7d2b35af9123c0bb6/cfe578f9ceb8b88261d31e465d7f7f77.jpg',
        icon: '◈',
        title: 'Garantie bis 20 Jahre',
        text: 'Wir stehen hinter unserer Qualität — bis zu 20 Jahre Herstellergarantie auf alle Möbel. Unser Serviceteam in der Schweiz ist auch nach Ablauf der Garantiezeit für Sie erreichbar.',
      },
    ],
  },
  'nicolle-thermoplast': {
    name: 'Nicolle Thermoplast',
    desc: 'Nicolle Thermoplast — klassische Eleganz trifft moderne Technologie. Die strukturierte Thermoplast-Oberfläche ist robust und pflegeleicht. Moderner Komfort im klassischen Gewand.',
    price: 'ab CHF 10',
    variants: [
      { name: 'Creme', color: '#f5f0e0', images: ['/images/promo/models/nicolle.jpg', '/images/promo/models/trento1.jpg'] },
      { name: 'Weiss', color: '#fafafa', images: ['/images/promo/models/avenue.jpg', '/images/promo/models/nicolle.jpg'] },
      { name: 'Grau', color: '#999999', images: ['/images/promo/models/jazz.jpg', '/images/promo/models/mix22.jpg'] },
      { name: 'Beige', color: '#dcc8a0', images: ['/images/promo/models/nicolle.jpg', '/images/promo/models/avenue.jpg'] },
      { name: 'Hellblau', color: '#a3c4dc', images: ['/images/promo/models/trento1.jpg', '/images/promo/models/jazz.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'Thermoplast-Folie auf MDF' },
      { label: 'Dekore', value: 'Über 150 Varianten' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Oberfläche', value: 'Strukturiert / Matt' },
    ],
    tagline: 'Moderner Komfort im klassischen Gewand',
    featureImg: '/images/promo/models/nicolle.jpg',
    features: [
      {
        img: '/images/promo/models/nicolle.jpg',
        icon: '◇',
        title: 'Für jeden Einrichtungsstil',
        text: 'Vom skandinavischen Minimalismus bis zur warmen Klassik — die breite Frontpalette der Nicolle Thermoplast macht jeden Wohntraum möglich.',
      },
      {
        img: '/images/portfolio/iblock/110/1103fec976fcd4e90702019cb61ff80d/3cde0cb95439c7bb8ed1072352f2a67e.jpg',
        icon: '▦',
        title: 'Einheitliches Ensemble',
        text: 'Sockel, Dunstabzugshaube, Tischkanten — alles in der Frontfarbe. Ein stimmiges, harmonisches Küchenensemble aus einem Guss.',
      },
      {
        img: '/images/portfolio/iblock/ca8/ca80aa9bc342ab81aa618e0f4ad5f052/d009b242f5fc35f0b1bfdd0e46e35a24.jpg',
        icon: '▯',
        title: 'Hitzebeständig',
        text: 'Die Thermoplast-Beschichtung schmilzt nicht durch Ölspritzer oder Heissluft und bewahrt dauerhaft ihren ästhetischen Wert.',
      },
      {
        img: '/images/portfolio/iblock/575/575716e4ba639475feecf9c9eef50fa4/3709a12eb736f64edd961656b6c4239f.jpg',
        icon: '◈',
        title: 'Pflegeleicht & langlebig',
        text: 'Die strukturierte Oberfläche ist unempfindlich gegen Fingerabdrücke und leicht zu reinigen. Qualität, die Jahrzehnte überdauert.',
      },
    ],
  },
  'jazz': {
    name: 'Jazz',
    desc: 'Jazz — Rhythmus und Eleganz im Küchenraum. Puristisches Design mit perfekter Balance zwischen Ästhetik und Funktionalität. Klare Linien und hochwertige Materialien.',
    price: 'ab CHF 14',
    variants: [
      { name: 'Weiss Matt', color: '#f0f0ec', images: ['/images/portfolio/iblock/76b/76b64859abed9efa69230166959d42ab/7d40cbf53b48c8b595bb6b79f0dd469c.jpg', '/images/portfolio/iblock/82e/82e0c94f931a330672d42dbaeb081fff/957902645e29383dd443b08eb1003514.jpg'] },
      { name: 'Grau Beton', color: '#9e9a95', images: ['/images/promo/models/jazz3.jpg', '/images/promo/models/jazz.jpg'] },
      { name: 'Schwarz', color: '#1a1a1a', images: ['/images/promo/models/mix22.jpg', '/images/promo/models/avenue.jpg'] },
      { name: 'Dunkelgrün', color: '#3d5a3c', images: ['/images/promo/models/nicolle.jpg', '/images/promo/models/trento1.jpg'] },
      { name: 'Navy', color: '#2c3e5a', images: ['/images/promo/models/jazz.jpg', '/images/promo/models/mix22.jpg'] },
      { name: 'Sand', color: '#d4c5a0', images: ['/images/promo/models/avenue.jpg', '/images/promo/models/nicolle.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'MDF / HPL / Email' },
      { label: 'Dekore', value: 'Über 200 Varianten' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Frontstärke', value: '19 mm' },
      { label: 'Griffsystem', value: 'Push-to-Open / Griffleiste' },
    ],
    tagline: 'Musikalische Rhythmen im Küchenraum',
    featureImg: '/images/portfolio/iblock/76b/76b64859abed9efa69230166959d42ab/7d40cbf53b48c8b595bb6b79f0dd469c.jpg',
    features: [
      {
        img: '/images/portfolio/iblock/76b/76b64859abed9efa69230166959d42ab/7d40cbf53b48c8b595bb6b79f0dd469c.jpg',
        icon: '◇',
        title: 'Gebogene Fronten für kleine Räume',
        text: 'Abgerundete Ecken sparen Platz und lassen die Küche optisch grosszügiger wirken. Ideal für kompakte Grundrisse ohne Abstriche beim Stil.',
      },
      {
        img: '/images/portfolio/iblock/82e/82e0c94f931a330672d42dbaeb081fff/957902645e29383dd443b08eb1003514.jpg',
        icon: '▦',
        title: 'Italienische Strapazierfähigkeit',
        text: 'Renner-Emaille aus Italien widersteht Kratzern und Abrieb — nachweislich 67 % langlebiger als marktübliche Vergleichsprodukte.',
      },
      {
        img: '/images/portfolio/iblock/237/2378686ea34d3907ed437325a4bfaa10/45d8be781e313f4d21761d23507ff183.jpg',
        icon: '▯',
        title: 'Leise Dämpfer',
        text: 'Hochwertige Beschläge schliessen Schubladen und Türen geräuschlos — kein Lärm, kein Knallen, auch spät abends.',
      },
      {
        img: '/images/portfolio/iblock/797/7978a0f3a7cc4e6c37ea571b12939f6e/be43cbe63f572c6bc58d83ca29748817.jpg',
        icon: '◈',
        title: 'Durchdachter Stauraum',
        text: 'Flexible Innenausstattung mit Vollauszügen und variablen Regalen. Jede Küchenecke optimal genutzt — für ein Leben ohne Kompromisse.',
      },
    ],
  },
  'jazz-intuit': {
    name: 'Jazz Intuit',
    desc: 'Jazz Intuit — die Weiterentwicklung des Jazz-Konzepts mit noch mehr Funktionalität. Intelligente Aufbewahrungslösungen und durchdachte Ergonomie.',
    price: 'ab CHF 12',
    variants: [
      { name: 'Weiss Matt', color: '#f0f0ec', images: ['/images/promo/models/jazz.jpg', '/images/promo/models/avenue.jpg'] },
      { name: 'Grau', color: '#999999', images: ['/images/promo/models/avenue.jpg', '/images/promo/models/jazz.jpg'] },
      { name: 'Beige', color: '#dcc8a0', images: ['/images/promo/models/nicolle.jpg', '/images/promo/models/mix22.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'MDF / HPL' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Frontstärke', value: '19 mm' },
    ],
    tagline: 'Funktionaler Minimalismus',
    featureImg: '/images/promo/models/jazz.jpg',
    features: [
      {
        img: '/images/promo/models/jazz.jpg',
        icon: '◇',
        title: 'Höchst strapazierfähige Beschichtung',
        text: 'Emaille und Hochglanz-Acryllack der italienischen Marke Sayerlack widersteht Kratzern, Abrieb und Ausbleichen. Leicht von allen Verschmutzungen zu reinigen.',
      },
      {
        img: '/images/portfolio/iblock/382/382f0bc27e76518bc8daff12eb013262/11b387847acbc5fa7a3fa61ef00847d2.jpg',
        icon: '▦',
        title: 'Farbe nach Ihrer Wahl',
        text: 'Wir lackieren Fronten in jedem der tausenden Töne aus den RAL- und NCS-Katalogen. Exakte Farbübereinstimmung mit Ihrem Interieur — garantiert.',
      },
      {
        img: '/images/portfolio/iblock/ea0/ea0c63c706f733e5cde301aa57709904/4f85239bf0535eef5857bdcfa0e6309e.jpg',
        icon: '▯',
        title: 'Sicherer Aluminium-Griff',
        text: 'Elegantes vertikales Aluminiumprofil — Designelement und praktischer Griff zugleich. Ergonomisch, modern und sicher für Kinder.',
      },
      {
        img: '/images/promo/models/avenue.jpg',
        icon: '◈',
        title: 'Leises Schliessen',
        text: 'Integrierter Dämpfer sorgt für weiches und stilles Schliessen der Türen auch bei leichtem Anstoss. Über 80.000 Zyklen — Komfort für viele Jahre.',
      },
    ],
  },
  'jazz-kabinet': {
    name: 'Jazz Kabinet',
    desc: 'Jazz Kabinet — ein Designklassiker für Ihre Aufbewahrung. Schlicht, elegant und unglaublich vielseitig. Perfekt für Wohn- und Schlafzimmer.',
    price: 'ab CHF 8',
    variants: [
      { name: 'Weiss', color: '#fafafa', images: ['/images/promo/models/jazz3.jpg', '/images/promo/models/mix2.jpg'] },
      { name: 'Grau', color: '#999999', images: ['/images/promo/models/mix2.jpg', '/images/promo/models/jazz3.jpg'] },
      { name: 'Eiche', color: '#b8956e', images: ['/images/promo/models/nicolle.jpg', '/images/promo/models/trento1.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'MDF / Spanplatte' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Türen', value: 'Schiebetüren / Flügeltüren' },
    ],
    tagline: 'Designklassiker für Ihre Aufbewahrung',
    featureImg: '/images/promo/models/jazz3.jpg',
    features: [
      { img: '/images/promo/models/jazz3.jpg', icon: '◇', title: 'Individuell geplant', text: 'Jeder Schrank wird genau nach Ihrem Grundriss und Ihren Anforderungen gefertigt. Perfekte Passform, maximaler Stauraum — kein Millimeter verschwendet.' },
      { img: '/images/promo/models/mix2.jpg', icon: '▦', title: 'Variable Innenausstattung', text: 'Kleiderstangen, Regale, Schubladen, Hosenhalter — konfigurieren Sie Ihr Innenleben nach Bedarf und passen Sie es jederzeit an.' },
      { img: '/images/portfolio/iblock/110/1103fec976fcd4e90702019cb61ff80d/3cde0cb95439c7bb8ed1072352f2a67e.jpg', icon: '▯', title: 'Schlafzimmer-Qualität', text: 'Schadstoffarme Materialien E1-zertifiziert. Kein Ausgasen, kein Geruch — für gesunden Schlaf und sicheres Wohnen in Ihrem Zuhause.' },
      { img: '/images/portfolio/iblock/ca8/ca80aa9bc342ab81aa618e0f4ad5f052/d009b242f5fc35f0b1bfdd0e46e35a24.jpg', icon: '◈', title: 'Leise Schiebetüren', text: 'Sanfter Lauf auf hochwertigen Aluminium-Profilen. Langlebige Mechanik mit weichem Einzug — auch nach Jahren zuverlässig und leise.' },
    ],
  },
  'teramo': {
    name: 'Teramo',
    desc: 'Teramo verbindet glatte Fronten mit dem ultramodernen Lamellen-Look. Holz- und einfarbige Töne harmonieren mit Dekoren, die geschliffenem Metall ähneln. Exklusive versenkte Griffe und ultradünne Bügelgriffe sorgen für eine unverwechselbare Ästhetik.',
    price: 'ab CHF 13',
    variants: [
      { name: 'Dunkle Ulme', color: '#5a4535', images: ['/images/portfolio/iblock/6e3/6e398131b6d091587e395f41c57b1504/06d7c84ca9a89249be00eb3113bfa7bd.jpg', '/images/portfolio/iblock/e5f/e5fb567dbb7b8cfe254c2491d9beffa3/cde69a9a547d6d5042df6fcacef4b1d6.jpg'] },
      { name: 'Perlgrau', color: '#c8c8c0', images: ['/images/promo/models/avenue.jpg', '/images/portfolio/iblock/e21/e217fee0f7fb2f1de08ccf1feb364e8d/de4c79aaf566271a5e57194c92f7f5b0.jpg'] },
      { name: 'Natur-Eiche Premier', color: '#b8956e', images: ['/images/promo/models/mix22.jpg', '/images/portfolio/iblock/e21/e217fee0f7fb2f1de08ccf1feb364e8d/de4c79aaf566271a5e57194c92f7f5b0.jpg'] },
      { name: 'Grau-Blau', color: '#8aa0b4', images: ['/images/promo/models/jazz.jpg', '/images/portfolio/iblock/e21/e217fee0f7fb2f1de08ccf1feb364e8d/de4c79aaf566271a5e57194c92f7f5b0.jpg'] },
      { name: 'Weisse Esche', color: '#ede8e0', images: ['/images/promo/models/nicolle.jpg', '/images/portfolio/iblock/e21/e217fee0f7fb2f1de08ccf1feb364e8d/de4c79aaf566271a5e57194c92f7f5b0.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'Thermoplast / Furnier' },
      { label: 'Dekore', value: 'Über 8 Varianten' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'Versenkte Einbaugriffe' },
    ],
    tagline: 'Innovatives Design',
    featureImg: '/images/portfolio/iblock/6e3/6e398131b6d091587e395f41c57b1504/06d7c84ca9a89249be00eb3113bfa7bd.jpg',
    features: [
      { img: '/images/portfolio/iblock/6e3/6e398131b6d091587e395f41c57b1504/06d7c84ca9a89249be00eb3113bfa7bd.jpg', icon: '◇', title: 'Trend: Lamellenfronten', text: 'Vertikale Streifen lassen die Decke optisch höher wirken. Stilvoll und hochwertig — ein aktueller Trend für moderne Interieurs.' },
      { img: '/images/portfolio/iblock/e5f/e5fb567dbb7b8cfe254c2491d9beffa3/cde69a9a547d6d5042df6fcacef4b1d6.jpg', icon: '▦', title: 'Europäischer Verschleissschutz', text: 'Thermoplast — der Massstab an Beständigkeit! Verblasst nicht in der Sonne, widersteht Feuchtigkeit im Bereich von Herd und Spüle.' },
      { img: '/images/portfolio/iblock/6f5/6f514167006e5573934901ef9d58c121/20369ce9489ed76eb476678ed3a8f2a1.jpg', icon: '▯', title: 'Schutz vor Fett und Russ', text: 'Die Beschichtung stösst hartnäckige Verschmutzungen ab. In wenigen Sekunden sauber — ohne Aufwand, jeden Tag.' },
      { img: '/images/portfolio/iblock/a4f/a4fac72b74a858cacbc6831ec1b1ce2d/1755375e35b12cce2e43a1c1057c5a32.jpg', icon: '◈', title: 'Versenkte Einbaugriffe', text: 'Exklusive Griffe bündig im Frontmaterial eingelassen — keine Vorsprünge, absolut klare Linien, zeitloses Design.' },
    ],
  },
  'vector': {
    name: 'Vector',
    desc: 'Die Küche Vector verkörpert den Grossstadtstil mit minimalistischer Eleganz. Markante geometrische Formen, offene Sektionen und V-förmige Griffe schaffen eine asketische, aber selbstbewusste Ästhetik. Qualität trifft auf urbanes Design.',
    price: 'ab CHF 12',
    variants: [
      { name: 'Beige Schiefer', color: '#c8b89a', images: ['/images/portfolio/iblock/e01/e019af3c0e6926865411bad0a14d707a/4d6c6784b17e3bafbadd7530f1704127.jpg', '/images/portfolio/iblock/42f/42f1a4066abbd348188be3c9566638ce/c51d3477904f8f44dc7bc410e9bf7e49.jpg'] },
      { name: 'Graphit Schiefer', color: '#4a4a4a', images: ['/images/promo/models/jazz.jpg', '/images/portfolio/iblock/adf/adfc30f7ccaf4fa887934ba99efeb2e8/20c327c1d0e9f6cf64f49172ac9c0a5f.jpg'] },
      { name: 'Weiss Matt', color: '#f0f0ec', images: ['/images/promo/models/avenue.jpg', '/images/portfolio/iblock/adf/adfc30f7ccaf4fa887934ba99efeb2e8/20c327c1d0e9f6cf64f49172ac9c0a5f.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'HPL-Kunststoff' },
      { label: 'Oberfläche', value: 'Hochglanz / Matt' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'V-Form Design' },
    ],
    tagline: 'Klare Geometrie und Komfort',
    featureImg: '/images/portfolio/iblock/e01/e019af3c0e6926865411bad0a14d707a/4d6c6784b17e3bafbadd7530f1704127.jpg',
    features: [
      { img: '/images/portfolio/iblock/e01/e019af3c0e6926865411bad0a14d707a/4d6c6784b17e3bafbadd7530f1704127.jpg', icon: '◇', title: 'Vandal-sichere Beständigkeit', text: '0,6 mm Kunststoff — Panzer gegen Absplitterungen, Kratzer, heisses Geschirr und Haushaltschemikalien.' },
      { img: '/images/portfolio/iblock/42f/42f1a4066abbd348188be3c9566638ce/c51d3477904f8f44dc7bc410e9bf7e49.jpg', icon: '▦', title: 'Schmutz haftet nicht', text: 'Hochglanzoberfläche stösst Fett und Saucen ab. Ein feuchtes Tuch genügt für die tägliche Pflege — ohne Chemikalien.' },
      { img: '/images/portfolio/iblock/6e4/6e401c1b31e97ca43016c0f55b928acc/2cdf0522cc631b42178d9646ecf49086.jpg', icon: '▯', title: '100 % Wasserschutz', text: 'HPL-Kunststoff von Weltmarken + nahtlose Kante = absoluter Feuchtigkeitsschutz und tadelloses Erscheinungsbild.' },
      { img: '/images/portfolio/iblock/d24/d24fff0d6948a399fffa527395f56c7a/4fdb12287508b7d15e1956f7fc6553f8.jpg', icon: '◈', title: 'V-förmiges Design', text: 'Einzigartige V-förmige Griffe und Stützelemente — das geometrische Markenzeichen, das Vector unverwechselbar macht.' },
    ],
  },
  'vienna': {
    name: 'Vienna',
    desc: 'Visuelle Leichtigkeit und zurückhaltender Schick vereinen sich in der neoklassischen Küche Vienna. Klare Kompositionen fügen sich gleichermassen in klassische wie in moderne Interieurs ein — zeitlos und elegant.',
    price: 'ab CHF 15',
    variants: [
      { name: 'Weiss RAL 9003', color: '#f5f5f0', images: ['/images/promo/models/avenue.jpg', '/images/promo/models/nicolle.jpg'] },
      { name: 'Grauglas RAL 7040', color: '#9ea8b0', images: ['/images/promo/models/jazz.jpg', '/images/promo/models/avenue.jpg'] },
      { name: 'Seidengrau RAL 7044', color: '#c8c4be', images: ['/images/promo/models/nicolle.jpg', '/images/promo/models/jazz.jpg'] },
      { name: 'Perlenblau NCS', color: '#96afc0', images: ['/images/promo/models/trento1.jpg', '/images/promo/models/avenue.jpg'] },
      { name: 'Graphitgrau RAL 7024', color: '#474f54', images: ['/images/promo/models/mix22.jpg', '/images/promo/models/jazz.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'Massivholz Esche / Emaille' },
      { label: 'Farben', value: 'RAL + NCS' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Stil', value: 'Neoklassik' },
    ],
    tagline: 'Ästhetik des Neoklassizismus',
    featureImg: '/images/promo/models/avenue.jpg',
    features: [
      { img: '/images/promo/models/avenue.jpg', icon: '◇', title: 'Zuverlässigkeit des Eschenholzes', text: 'Fronten aus massiver Esche widerstehen Rissbildung, Delaminierung und Verformung bei Temperaturschwankungen über Jahrzehnte.' },
      { img: '/images/portfolio/iblock/390/39003cbd6af4e962fbfa22acf3f24038/350d1971c126dfdf2e314bac647f572d.jpg', icon: '▦', title: 'Atmungsaktive Beschichtung', text: 'Spezielle Lacktechnologie mit variabler Luftzufuhr betont die Holzporen und verleiht den Fronten eine natürliche, lebendige Textur.' },
      { img: '/images/portfolio/iblock/ea0/ea0c63c706f733e5cde301aa57709904/4f85239bf0535eef5857bdcfa0e6309e.jpg', icon: '▯', title: 'Schutz vor Rissbildung', text: 'Spezielles Trocknungsverfahren verhindert Verformung auch bei trockener Raumluft — dauerhaft stabile Fronten.' },
      { img: '/images/portfolio/iblock/34e/34ef497c6d3aa9fe291e5bbec85ed0c9/cec6735ae5726b0d0e9aeb796617d53c.jpg', icon: '◈', title: 'Geschützte Emaille', text: 'Feuchtigkeitsbeständige, reparierbare Emaille schützt das Holz dauerhaft und erhält das makellose Erscheinungsbild der Fronten.' },
    ],
  },
  'antro-rustic': {
    name: 'Antro Rustic',
    desc: 'Antro Rustic verbindet Natürlichkeit, minimalistischen Stil und Funktionalität — und entspricht damit vollständig den aktuellen Trends. Schlichte Formen werden durch die wunderschöne vertikale Maserung des Naturholzes betont, angenehm in der Haptik.',
    price: 'ab CHF 16',
    variants: [
      { name: 'Weisse Nächte', color: '#f0ede8', images: ['/images/portfolio/iblock/3af/3af58af088fd827c01615d781a222d26/b1bd2d46c748f2992f8a8b5b1e321146.jpg', '/images/portfolio/iblock/82d/82d1c2ed339a132db92c80148289f0cb/9b23c597513929daa97cbdef00eb3443.jpg'] },
      { name: 'Düne', color: '#d4c8a0', images: ['/images/promo/models/nicolle.jpg', '/images/promo/models/jazz.jpg'] },
      { name: 'Espresso', color: '#3c2814', images: ['/images/portfolio/iblock/390/39003cbd6af4e962fbfa22acf3f24038/350d1971c126dfdf2e314bac647f572d.jpg', '/images/promo/models/jazz.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'Naturholz-Furnier' },
      { label: 'Holzarten', value: 'Über 10 Sorten' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Schutz', value: 'UV-Acryllack' },
    ],
    tagline: 'Balance von Ästhetik und Funktionalität',
    featureImg: '/images/portfolio/iblock/3af/3af58af088fd827c01615d781a222d26/b1bd2d46c748f2992f8a8b5b1e321146.jpg',
    features: [
      { img: '/images/portfolio/iblock/3af/3af58af088fd827c01615d781a222d26/b1bd2d46c748f2992f8a8b5b1e321146.jpg', icon: '◇', title: 'Multi-Furnier: Einheitlicher Stil', text: 'Multi-Furnier Antro Rustic garantiert perfekte Farb- und Maserungsübereinstimmung im gesamten Möbelsystem.' },
      { img: '/images/portfolio/iblock/82d/82d1c2ed339a132db92c80148289f0cb/9b23c597513929daa97cbdef00eb3443.jpg', icon: '▦', title: 'Wahl der Holzart', text: 'Über 10 verschiedene Holzarten zur Auswahl — gestalten Sie Ihre Küche ganz nach Ihrem persönlichen Geschmack.' },
      { img: '/images/portfolio/iblock/23b/23ba842d1b276e15096954b79f1b3570/602fdcbb9056fc7d8b9041066a9ed36e.jpg', icon: '▯', title: 'Schutz vor Ausbleichen', text: 'Spezieller Acryllack schützt die Fronten zuverlässig vor Verblassen durch UV-Strahlung — die Farbe bleibt langfristig frisch.' },
      { img: '/images/portfolio/iblock/e5b/e5b703943522a5fc9e169063e629117e/2a3593ed1f8cee397a78d4a9c01abffd.jpg', icon: '◈', title: 'Ökologische Materialien', text: 'Naturholz, sicher für die ganze Familie — Fronten aus zertifiziertem Furnier, schadstoffarm und nach internationalen Standards geprüft.' },
    ],
  },
  'spark': {
    name: 'Spark',
    desc: 'Die atemberaubende Schönheit von Stein und Natur hat die Küche Spark inspiriert. Fronten mit Oberflächen, die Stein und Putz in verschiedenen Tönen imitieren, und natürliche Erdtöne setzen aktuelle Designtrends im Kücheninterieur.',
    price: 'ab CHF 14',
    variants: [
      { name: 'Basalt Düne', color: '#7a7470', images: ['/images/portfolio/iblock/ccf/ccf3ba6581821b90bd5ecfedb8a4d2e8/464acb62d72e9c0e1b54ae0479e7efdf.jpg', '/images/portfolio/iblock/ea0/ea0baeb820795a2cc88c4483e888d911/73f59625796e5b93fc897dbbfdfc55f7.jpg'] },
      { name: 'Sahara Düne', color: '#c8b090', images: ['/images/promo/models/nicolle.jpg', '/images/promo/models/jazz3.jpg'] },
      { name: 'Weisser Kalkstein', color: '#e8e4dc', images: ['/images/promo/models/avenue.jpg', '/images/promo/models/jazz3.jpg'] },
      { name: 'Anthrazit Rhombus', color: '#383838', images: ['/images/promo/models/mix22.jpg', '/images/promo/models/jazz3.jpg'] },
      { name: 'Travertin Bronze', color: '#b09070', images: ['/images/promo/models/trento1.jpg', '/images/promo/models/jazz3.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'TSS-Kunststoff 0,8 mm' },
      { label: 'Dekore', value: 'Über 22 Varianten' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Technologie', value: 'Cleaf Scan-Print' },
    ],
    tagline: 'Philosophie der Natur',
    featureImg: '/images/portfolio/iblock/ccf/ccf3ba6581821b90bd5ecfedb8a4d2e8/464acb62d72e9c0e1b54ae0479e7efdf.jpg',
    features: [
      { img: '/images/portfolio/iblock/ccf/ccf3ba6581821b90bd5ecfedb8a4d2e8/464acb62d72e9c0e1b54ae0479e7efdf.jpg', icon: '◇', title: 'Wie natürliches Massivholz', text: 'Cleaf-Technologie: perfekte Übereinstimmung von Oberflächenmuster und Porenstruktur der Front — täuschend echter Naturstein-Look.' },
      { img: '/images/portfolio/iblock/ea0/ea0baeb820795a2cc88c4483e888d911/73f59625796e5b93fc897dbbfdfc55f7.jpg', icon: '▦', title: 'Hart wie eine Arbeitsplatte', text: 'TSS-Kunststoff bis 0,8 mm Stärke — Splittersicherheit auf dem Niveau einer massiven Küchenarbeitsplatte.' },
      { img: '/images/portfolio/iblock/8b8/8b88a2f7b31a63c19418c175c9f22880/1751dd35d70b56b96b9b6ebb86764207.jpg', icon: '▯', title: 'Naturalistische Dekore', text: 'Scan-Technologie reproduziert Texturen von Holz, Stoff, Beton und Stuck — mit einer Präzision, die echte Natur nachahmt.' },
      { img: '/images/portfolio/iblock/89b/89b0b5a781aad0699a7a25f0c4dfdf0d/7b3212e380209d71573c05d67e9547ed.jpg', icon: '◈', title: 'Monolithische Optik', text: 'Einheitliches Design von Front und Kante erzeugt den Effekt einer durchgehenden, massiven Oberfläche — keine sichtbaren Übergänge.' },
    ],
  },
  'antro-stone': {
    name: 'Antro Stone',
    desc: 'Raffinierte Brutalität — so lässt sich Antro Stone treffend beschreiben. Ihr Name bedeutet auf Italienisch "Höhle". Im Loft-Stil gehalten, kommen bei den Fronten echte Schieferfurniere aus Indien zum Einsatz — jede Küche ein absolutes Unikat.',
    price: 'ab CHF 18',
    variants: [
      { name: 'Schwarz Schiefer', color: '#2a2a2a', images: ['/images/portfolio/iblock/e4e/e4ed7e0f0ff8e7999db15651a39915cc/79098b697b42e6831af626abb665935b.jpg', '/images/portfolio/iblock/ea0/ea0baeb820795a2cc88c4483e888d911/73f59625796e5b93fc897dbbfdfc55f7.jpg'] },
      { name: 'Vulkanisch', color: '#4a3a30', images: ['/images/promo/models/jazz.jpg', '/images/portfolio/iblock/34e/34ef497c6d3aa9fe291e5bbec85ed0c9/cec6735ae5726b0d0e9aeb796617d53c.jpg'] },
      { name: 'Meerblau', color: '#5a7080', images: ['/images/promo/models/trento1.jpg', '/images/portfolio/iblock/ca8/ca80aa9bc342ab81aa618e0f4ad5f052/d009b242f5fc35f0b1bfdd0e46e35a24.jpg'] },
      { name: 'Goldstein', color: '#a08050', images: ['/images/promo/models/mix22.jpg', '/images/portfolio/iblock/390/39003cbd6af4e962fbfa22acf3f24038/350d1971c126dfdf2e314bac647f572d.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'Naturschiefer-Furnier' },
      { label: 'Herkunft', value: 'Indien / Südamerika' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Stil', value: 'Loft / Industrial' },
    ],
    tagline: 'Industrieller Vintage-Stil',
    featureImg: '/images/portfolio/iblock/e4e/e4ed7e0f0ff8e7999db15651a39915cc/79098b697b42e6831af626abb665935b.jpg',
    features: [
      { img: '/images/portfolio/iblock/e4e/e4ed7e0f0ff8e7999db15651a39915cc/79098b697b42e6831af626abb665935b.jpg', icon: '◇', title: 'Naturschiefer aus Indien', text: 'Fronten mit einzigartigem Schieferfurnier — robuster Naturstein aus Indien und Südamerika. Jedes Stück ein absolutes Unikat.' },
      { img: '/images/portfolio/iblock/ea0/ea0baeb820795a2cc88c4483e888d911/73f59625796e5b93fc897dbbfdfc55f7.jpg', icon: '▦', title: 'Pflege ohne Aufwand', text: 'Schutzimprägnierung stösst Schmutz zuverlässig ab. Mit einem feuchten Schwamm problemlos zu reinigen — kein Sonderaufwand nötig.' },
      { img: '/images/portfolio/iblock/bd2/bd2c41ad214c42245096d07cfcd6581b/18e092135c17483a78e572ee4578b384.jpg', icon: '▯', title: 'Monolithische Steinkanten', text: 'Kanten aus demselben Schiefer — die perfekte Illusion eines massiven, durchgehenden Natursteins.' },
      { img: '/images/portfolio/iblock/071/0711229e2387b79c6e00197b5a60c837/941b4f96cb95b60914006fb117dad843.jpg', icon: '◈', title: 'Symbiose aus Stein und Holz', text: 'Kombinierbar mit über 10 Holzarten — schaffen Sie Kontraste oder Harmonie und verleihen Sie Ihrer Küche eine unverwechselbare Identität.' },
    ],
  },
  'antro-wood': {
    name: 'Antro Wood',
    desc: 'Die Küche wurde im Vintage-Loft-Stil entwickelt und auf der grössten russischen Möbelmesse mit dem Sonderpreis in der Kategorie "Innovation" ausgezeichnet. Exklusives Naturholzfurnier der Kategorie AA und optional das grifflose Gola-Profil-System.',
    price: 'ab CHF 17',
    variants: [
      { name: 'Black Ofram', color: '#2c2c24', images: ['/images/portfolio/iblock/103/103bc360fb218775699dbc630ef40374/e105639a0efa351c4fed8bee07850822.jpg', '/images/portfolio/iblock/33a/33a55f2c3d2e48d6ab16089c53c39db6/89de0ddf7b5b034ac8385a01405d5be4.jpg'] },
      { name: 'Europäische Eiche', color: '#b8956e', images: ['/images/promo/models/trento1.jpg', '/images/promo/models/mix22.jpg'] },
      { name: 'Eukalyptus', color: '#7a8c6e', images: ['/images/promo/models/avenue.jpg', '/images/promo/models/trento1.jpg'] },
      { name: 'Amerikanischer Nussbaum', color: '#6e4e30', images: ['/images/promo/models/nicolle.jpg', '/images/promo/models/jazz.jpg'] },
      { name: 'Teak', color: '#9a7050', images: ['/images/promo/models/jazz3.jpg', '/images/promo/models/trento1.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'Naturholz-Furnier AA' },
      { label: 'Holzarten', value: 'Über 500 Sorten' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'Gola-Profil / klassisch' },
    ],
    tagline: 'Exklusivität ohne Kompromisse',
    featureImg: '/images/portfolio/iblock/103/103bc360fb218775699dbc630ef40374/e105639a0efa351c4fed8bee07850822.jpg',
    features: [
      { img: '/images/portfolio/iblock/103/103bc360fb218775699dbc630ef40374/e105639a0efa351c4fed8bee07850822.jpg', icon: '◇', title: 'Premium-Furnier Kategorie AA', text: 'Naturholzfurnier der höchsten Kategorie AA auf allen Fronten — exklusive Textur und Luxus-Optik für anspruchsvolle Interieurs.' },
      { img: '/images/portfolio/iblock/33a/33a55f2c3d2e48d6ab16089c53c39db6/89de0ddf7b5b034ac8385a01405d5be4.jpg', icon: '▦', title: '500 Holzarten zur Wahl', text: 'Riesige Auswahl an Holzarten — von Black Ofram über Teak bis zum amerikanischen Nussbaum. Ihre Küche, Ihr Charakter.' },
      { img: '/images/portfolio/iblock/ea0/ea0baeb820795a2cc88c4483e888d911/73f59625796e5b93fc897dbbfdfc55f7.jpg', icon: '▯', title: 'Lackschutz gegen Ausbleichen', text: 'Acryllack erhält die natürliche Farbe des Holzes optimal und schützt das Furnier zuverlässig vor UV-Strahlung.' },
      { img: '/images/portfolio/iblock/891/891efe9ee1de767a05a0b8da51170825/7c35108f010e175bccbffd75468c9cc5.jpg', icon: '◈', title: 'Griffloses Gola-System', text: 'Das Gola-Profil sorgt für eine cleane Silhouette ohne Beschläge — moderner Minimalismus auf höchstem handwerklichem Niveau.' },
    ],
  },
  'milaro-garden': {
    name: 'Milaro Garden',
    desc: 'Die Outdoor-Küche Milaro Garden ist ein echter Frischluft-Genuss! Speziell für den Ausseneinsatz konzipiert, lädt sie zu einem neuen Blick auf das Schweizer Landleben ein. Das modulare System ermöglicht eine stilvolle, funktionale Vollküche — überall.',
    price: 'ab CHF 20',
    variants: [
      { name: 'Irische Eiche', color: '#8c6e4a', images: ['/images/portfolio/iblock/956/95660f4a8e96381acef3d8eb6db6882f/dcd8e438154a09bf051818beab3324c7.jpg', '/images/portfolio/iblock/8c9/8c9a7f9e198e31d6484796f0a4262b44/e28a63066b353a01fd5198e0401e27c1.jpg'] },
      { name: 'Anthrazit', color: '#3a3a3a', images: ['/images/promo/models/jazz.jpg', '/images/promo/models/trento1.jpg'] },
      { name: 'Weiss', color: '#f0f0ec', images: ['/images/promo/models/avenue.jpg', '/images/promo/models/trento1.jpg'] },
    ],
    specs: [
      { label: 'Einsatzbereich', value: 'Innen + Aussen' },
      { label: 'Module', value: '14 Einheiten' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'System', value: 'Modular / flexibel' },
    ],
    tagline: 'Näher zur Natur',
    featureImg: '/images/portfolio/iblock/956/95660f4a8e96381acef3d8eb6db6882f/dcd8e438154a09bf051818beab3324c7.jpg',
    features: [
      { img: '/images/portfolio/iblock/956/95660f4a8e96381acef3d8eb6db6882f/dcd8e438154a09bf051818beab3324c7.jpg', icon: '◇', title: 'Umfangreiche Planungsmöglichkeiten', text: '14 offene und geschlossene Module sowie Kochinseln zur Auswahl — grenzenlose Gestaltungsfreiheit für jeden Aussenbereich.' },
      { img: '/images/portfolio/iblock/8c9/8c9a7f9e198e31d6484796f0a4262b44/e28a63066b353a01fd5198e0401e27c1.jpg', icon: '▦', title: 'Zuverlässig bei jedem Wetter', text: 'Für den Betrieb bei jedem Wetter und jeder Temperatur konzipiert — Schweizer Outdoor-Qualität ohne Abstriche.' },
      { img: '/images/portfolio/iblock/5f8/5f80f8a1ded8aef33955af926c178bc2/a10e08e03881e71d8737af190d36611e.jpg', icon: '▯', title: 'Mobilität und Modularität', text: 'Alle Module sind austauschbar und beliebig umstellbar — so anpassungsfähig wie Ihr Lebensstil und Ihre Bedürfnisse.' },
      { img: '/images/portfolio/iblock/1fb/1fb771fa52be1bf6fdf9ff309c80c7c2/4cc3d849a55280bfc6327bb1575dd094.jpg', icon: '◈', title: 'Outdoor-Materialien', text: 'Materialien und Beschichtungen eigens für den Ausseneinsatz entwickelt — robust, pflegeleicht und langlebig unter freiem Himmel.' },
    ],
  },
  'vector-touch': {
    name: 'Vector Touch',
    desc: 'Vector Touch schenkt totales Eintauchen in Gemütlichkeit und das Gefühl von Leichtigkeit. Die weiche, samtige Oberfläche in gedämpften Farbtönen realisiert ein zurückhaltendes und aktuelles minimalistisches Interieur — zeitgemäss und wohnlich.',
    price: 'ab CHF 13',
    variants: [
      { name: 'Tongrau Supermat', color: '#a89888', images: ['/images/portfolio/iblock/860/860f7c2a80a31cfe603635b6869d7b24/ad7cb35eb0c5e2758ea72a5fbdc90622.jpg', '/images/portfolio/iblock/42f/42f1a4066abbd348188be3c9566638ce/c51d3477904f8f44dc7bc410e9bf7e49.jpg'] },
      { name: 'Kaschmir Supermat', color: '#d4c4b7', images: ['/images/promo/models/nicolle.jpg', '/images/portfolio/iblock/adf/adfc30f7ccaf4fa887934ba99efeb2e8/20c327c1d0e9f6cf64f49172ac9c0a5f.jpg'] },
      { name: 'Rosenquarz Supermat', color: '#ddbcb0', images: ['/images/promo/models/trento1.jpg', '/images/portfolio/iblock/adf/adfc30f7ccaf4fa887934ba99efeb2e8/20c327c1d0e9f6cf64f49172ac9c0a5f.jpg'] },
      { name: 'Schwarzgraphit Supermat', color: '#282828', images: ['/images/promo/models/jazz.jpg', '/images/portfolio/iblock/adf/adfc30f7ccaf4fa887934ba99efeb2e8/20c327c1d0e9f6cf64f49172ac9c0a5f.jpg'] },
      { name: 'Staubgrau Supermat', color: '#9a9090', images: ['/images/promo/models/mix22.jpg', '/images/portfolio/iblock/adf/adfc30f7ccaf4fa887934ba99efeb2e8/20c327c1d0e9f6cf64f49172ac9c0a5f.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'PET-Supermat-Kunststoff' },
      { label: 'Oberfläche', value: 'Samtig / Matt' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Stärke', value: 'Ab 0,5 mm' },
    ],
    tagline: 'Mattes Perfekt',
    featureImg: '/images/portfolio/iblock/860/860f7c2a80a31cfe603635b6869d7b24/ad7cb35eb0c5e2758ea72a5fbdc90622.jpg',
    features: [
      { img: '/images/portfolio/iblock/860/860f7c2a80a31cfe603635b6869d7b24/ad7cb35eb0c5e2758ea72a5fbdc90622.jpg', icon: '◇', title: 'Schutz vor Mikrokratzern', text: 'Super-mattes PET-Finish mit seidenartig weicher Textur streut das Licht — feine Kratzer werden nahezu unsichtbar.' },
      { img: '/images/portfolio/iblock/42f/42f1a4066abbd348188be3c9566638ce/c51d3477904f8f44dc7bc410e9bf7e49.jpg', icon: '▦', title: 'Sichere Schönheit', text: 'PET-Kunststoff — sicher auch für Lebensmittelbehälter! Ökologisches Finish mit angenehmer Samtstruktur ohne Schadstoffe.' },
      { img: '/images/portfolio/iblock/988/988fe8045b2d10d219d54e83cc39dc3e/c8f6de1aa3ae6af85bca4f248a118434.jpg', icon: '▯', title: 'Verformungsresistent bei Dampf', text: 'Hochdichter MDF-Kern widersteht Feuchtigkeit zuverlässig — kein Quellen, kein Verziehen, auch bei hoher Luftfeuchtigkeit.' },
      { img: '/images/portfolio/iblock/6b9/6b92dbbfd4cb2631c596c5a772327a0d/db35bbf105bb9cf6c8d4b26f7ba2406f.jpg', icon: '◈', title: 'Offene Regale ohne Fugen', text: 'Beidseitige Frontbeschichtung — Kanten und Innenseiten der Regale sind makellos verarbeitet, auch im offenen Bereich.' },
    ],
  },
  'integrato': {
    name: 'Integrato',
    desc: 'Integrato steht für aktuelles, klares Design und Minimalismus im Detail. Die Küchenfronten bestehen aus 22 mm MDF, beschichtet mit hochwertiger, strapazierfähiger Emaille — für eine Küche, die so langlebig wie elegant ist.',
    price: 'ab CHF 11',
    variants: [
      { name: 'Weiss Hochglanz', color: '#f5f5f0', images: ['/images/portfolio/iblock/28f/28f9cf5594dccee5d2cc680cf931bd6b/12ae09b1a6859eb54b400695a28e6a86.jpg', '/images/portfolio/iblock/0e4/0e4d6c501797589aefdb0c97bd520e6d/36344037b995985766eeceef83ce2416.jpg'] },
      { name: 'Musson NCS Matt', color: '#c8c0b8', images: ['/images/promo/models/jazz.jpg', '/images/promo/models/avenue.jpg'] },
      { name: 'Mattgold Metallic', color: '#c8a84a', images: ['/images/promo/models/nicolle.jpg', '/images/promo/models/trento1.jpg'] },
      { name: 'Perlrosa NCS', color: '#e0c8c0', images: ['/images/promo/models/trento1.jpg', '/images/promo/models/nicolle.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'MDF 22 mm + Emaille' },
      { label: 'Farben', value: 'RAL / NCS' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'Grifflos (Fräsung)' },
    ],
    tagline: 'Praktikalität und Komfort',
    featureImg: '/images/portfolio/iblock/28f/28f9cf5594dccee5d2cc680cf931bd6b/12ae09b1a6859eb54b400695a28e6a86.jpg',
    features: [
      { img: '/images/portfolio/iblock/28f/28f9cf5594dccee5d2cc680cf931bd6b/12ae09b1a6859eb54b400695a28e6a86.jpg', icon: '◇', title: 'Griffloses System', text: 'Moderner Minimalismus — Fräsung statt Griff! Klare Linien, nichts Überflüssiges, sicher für Kinder und einfach zu reinigen.' },
      { img: '/images/portfolio/iblock/0e4/0e4d6c501797589aefdb0c97bd520e6d/36344037b995985766eeceef83ce2416.jpg', icon: '▦', title: 'Geräuschloses Schliessen', text: 'Integrierte Dämpfer sorgen für sanftes, leises Schliessen — kein lautes Zuschlagen, kein Lärm, auch spät abends.' },
      { img: '/images/portfolio/iblock/53e/53ecadb7ec1310353115c9ff6a412dc7/7b34b4c15c8e0d38560831c32a8534ee.jpg', icon: '▯', title: 'Harmonischer Lebensraum', text: 'Klare Geometrie, weiche Texturen, zurückhaltende Dekore. Integrato schafft eine Atmosphäre von Harmonie und Ordnung.' },
      { img: '/images/portfolio/iblock/8a3/8a38b26082c0684767a031b045e5e495/3dee7a29ee0c47aa9e279a10ff50b478.jpg', icon: '◈', title: 'Robuste Emaille auf 22 mm MDF', text: 'Fronten aus 22 mm MDF mit Emaillebeschichtung — aussergewöhnliche Belastbarkeit und langfristige Schönheit im Küchenalltag.' },
    ],
  },
  'wood-dekor-email': {
    name: 'Wood Décor Email',
    desc: 'Wood Décor Email verbindet echte Holzdekore mit strapazierfähiger Emaillebeschichtung — ein einzigartiger Materialmix, der die Wärme des Holzes mit der Langlebigkeit des Emails vereint. Jede Front erzählt von Handwerk und natürlicher Schönheit.',
    price: 'ab CHF 16',
    variants: [
      { name: 'Eiche Natur Matt', color: '#c8a878', images: ['/images/portfolio/iblock/3df/3df6b34dfad17e5af15bd403d8e51fc7/9160b6cce5996b30c21c0ee66d9b6ed1.jpg', '/images/portfolio/iblock/bf1/bf1511cd4289cfdf825d8eea83f2f957/0101f240452d9c172fb690cf5dc2f0da.jpg'] },
      { name: 'Wenge Dunkel', color: '#4a3520', images: ['/images/portfolio/iblock/f4f/f4f2fbc082161b469a09b265b1ab6834/d6860c01fb5b2228052d770f73609123.jpg', '/images/portfolio/iblock/fc3/fc37f47daffd7769ba31ba3de5b2026c/770e31cca96624575dd7900903ed4bed.jpg'] },
      { name: 'Ahorn Weiss Email', color: '#e8e0d8', images: ['/images/portfolio/iblock/6c7/6c73de14994c2344b94504d32011cb08/ca5f6253f5131b7a14e9788da6295902.jpg', '/images/portfolio/iblock/5ac/5ac75c137db57312374e212f8c641da3/2d4f8caf5163ad7f473c3875fbfd1a6f.jpg'] },
    ],
    specs: [
      { label: 'Frontmaterial', value: 'MDF + Holzdekor + Emaille' },
      { label: 'Frontstärke', value: '22 mm' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Oberfläche', value: 'Matt / Seidenmatt' },
    ],
    tagline: 'Holz trifft Email',
    featureImg: '/images/portfolio/iblock/3df/3df6b34dfad17e5af15bd403d8e51fc7/9160b6cce5996b30c21c0ee66d9b6ed1.jpg',
    features: [
      { img: '/images/portfolio/iblock/3df/3df6b34dfad17e5af15bd403d8e51fc7/9160b6cce5996b30c21c0ee66d9b6ed1.jpg', icon: '◇', title: 'Echter Holzcharakter', text: 'Authentische Holzdekore — jede Front wirkt wie massives Holz, ist dabei aber deutlich langlebiger und pflegeleichter.' },
      { img: '/images/portfolio/iblock/bf1/bf1511cd4289cfdf825d8eea83f2f957/0101f240452d9c172fb690cf5dc2f0da.jpg', icon: '▦', title: 'Emaille-Schutzschicht', text: 'Die Emaillebeschichtung verleiht den Fronten eine samtig-matte Oberfläche, die unempfindlich gegen Fettflecken und Fingerabdrücke ist.' },
      { img: '/images/portfolio/iblock/f4f/f4f2fbc082161b469a09b265b1ab6834/d6860c01fb5b2228052d770f73609123.jpg', icon: '▯', title: 'Natürliche Wärme', text: 'Holzdekore schaffen eine einladende Atmosphäre — warm, zeitlos, ideal für Küchen, die Gemütlichkeit und Stil vereinen.' },
      { img: '/images/portfolio/iblock/fc3/fc37f47daffd7769ba31ba3de5b2026c/770e31cca96624575dd7900903ed4bed.jpg', icon: '◈', title: 'Zwei Welten, ein Design', text: 'Die Kombination aus Holzdekor und emaillierten Fronten ermöglicht kreative Kontraste — rustikal und modern zugleich.' },
    ],
  },
  'tokyo-glanz': {
    name: 'Tokyo Glanz',
    desc: 'Tokyo Glanz steht für klaren Minimalismus mit Hochglanz-Akzenten. Die spiegelnden Fronten bringen viel Licht in den Raum und schaffen eine moderne, grosszügig wirkende Küche — zeitlos und pflegeleicht zugleich.',
    price: 'ab CHF 9',
    variants: [
      { name: 'Weiss Hochglanz', color: '#f0f0ee', images: ['/images/portfolio/iblock/f80/f807968a848ff69c3b1586fc5a08ae39/82128da6551c91c84cbb51e5d417a8dd.jpg', '/images/portfolio/iblock/00b/00b0282dbb9ab693ddabcd2fa023cd35/b53eac58ea68c013c3700ebe3b73e2ce.jpg'] },
      { name: 'Grau Hochglanz', color: '#a0a0a0', images: ['/images/portfolio/iblock/9da/9dab889552bd349c71dc17a8ce3e0469/eb056b3ef1b9e2b758c1f34d5aa0a03d.jpg', '/images/portfolio/iblock/3f8/3f8115b27b51cadc591478e94a3bc8f5/78e7482b94a2107ea5db1e1f0ec879ea.jpg'] },
      { name: 'Champagner Hochglanz', color: '#d8c8a0', images: ['/images/portfolio/iblock/565/5651f30213edb042360762d67acfc359/51b9bcdfc17ed188ce81754328ff08ad.jpg', '/images/portfolio/iblock/aec/aec4cf6c5767abf4b522400882b60928/accafd6a4fa0ddc1cd75e2db0c16e079.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'MDF + PVC Hochglanz' },
      { label: 'Frontstärke', value: '16 mm' },
      { label: 'Garantie', value: 'Bis zu 15 Jahre' },
      { label: 'Griffe', value: 'Alu-Profilgriff / Grifflos' },
    ],
    tagline: 'Glanz des Ostens',
    featureImg: '/images/portfolio/iblock/f80/f807968a848ff69c3b1586fc5a08ae39/82128da6551c91c84cbb51e5d417a8dd.jpg',
    features: [
      { img: '/images/portfolio/iblock/f80/f807968a848ff69c3b1586fc5a08ae39/82128da6551c91c84cbb51e5d417a8dd.jpg', icon: '◇', title: 'Hochglanz-Optik', text: 'Spiegelnde Fronten reflektieren das Licht und lassen die Küche grösser, heller und moderner wirken — ideal für kleinere Räume.' },
      { img: '/images/portfolio/iblock/00b/00b0282dbb9ab693ddabcd2fa023cd35/b53eac58ea68c013c3700ebe3b73e2ce.jpg', icon: '▦', title: 'Einfache Reinigung', text: 'Glatte, geschlossene Oberflächen ohne Poren oder Rillen — Fett und Staub lassen sich mit einem Wisch entfernen.' },
      { img: '/images/portfolio/iblock/9da/9dab889552bd349c71dc17a8ce3e0469/eb056b3ef1b9e2b758c1f34d5aa0a03d.jpg', icon: '▯', title: 'Zeitloses Design', text: 'Klare Linien, flächenbündige Fronten, minimale Griffleisten — Tokyo Glanz bleibt modern, egal wie sich Trends entwickeln.' },
      { img: '/images/portfolio/iblock/3f8/3f8115b27b51cadc591478e94a3bc8f5/78e7482b94a2107ea5db1e1f0ec879ea.jpg', icon: '◈', title: 'Grosse Farbauswahl', text: 'Von reinweissem Hochglanz bis zu tiefem Anthrazit — wählen Sie den Ton, der zu Ihrem Zuhause passt.' },
    ],
  },
  'nicolle-cabinet': {
    name: 'Nicolle Schrank',
    desc: 'Der Drehtürenschrank Nicolle vereint klassische Eleganz mit modernen Materialien. Hochwertige MDF-Fronten in mattem oder glänzendem Finish, präzise Scharniere und eine durchdachte Innenaufteilung machen ihn zum perfekten Alltagsbegleiter.',
    price: 'ab CHF 12',
    variants: [
      { name: 'Weiss Matt', color: '#f0eeeb', images: ['/images/portfolio/iblock/35e/35e7ac9ae63a2a1b811264fce71935f5/cbee8d4dad621234d3f54ea4a10d0607.jpg', '/images/portfolio/iblock/62e/62ee77782535dc37b2f988802262588d/dcb38934e0b6fa288a1c17a888d8ec7f.jpg'] },
      { name: 'Cashmere Beige', color: '#d4c8b8', images: ['/images/portfolio/iblock/eb1/eb1b0f57b97e224234407c335d8cfb22/a6bc17bf00b5cd9598b633be4b50f2dd.jpg', '/images/portfolio/iblock/d4b/d4b61767bb7213b03b0afb7c23362b6a/b00f685e4aaf8e201a0b752d30a3af37.jpg'] },
    ],
    specs: [
      { label: 'Typ', value: 'Drehtürenschrank' },
      { label: 'Material', value: 'MDF lackiert' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Montage', value: 'Inkl. Aufbauservice' },
    ],
    tagline: 'Klassik trifft Komfort',
    featureImg: '/images/portfolio/iblock/35e/35e7ac9ae63a2a1b811264fce71935f5/cbee8d4dad621234d3f54ea4a10d0607.jpg',
    features: [
      { img: '/images/portfolio/iblock/35e/35e7ac9ae63a2a1b811264fce71935f5/cbee8d4dad621234d3f54ea4a10d0607.jpg', icon: '◇', title: 'Zeitloses Design', text: 'Klare Linien und hochwertige Oberflächen — Nicolle passt sich jedem Einrichtungsstil an.' },
      { img: '/images/portfolio/iblock/62e/62ee77782535dc37b2f988802262588d/dcb38934e0b6fa288a1c17a888d8ec7f.jpg', icon: '▦', title: 'Durchdachte Innenaufteilung', text: 'Kleiderstangen, Einlegeböden und Schubladen lassen sich individuell kombinieren.' },
      { img: '/images/portfolio/iblock/eb1/eb1b0f57b97e224234407c335d8cfb22/a6bc17bf00b5cd9598b633be4b50f2dd.jpg', icon: '▯', title: 'Präzise Scharniere', text: 'Softclose-Scharniere sorgen für leises, sanftes Schliessen — langlebig und wartungsfrei.' },
      { img: '/images/portfolio/iblock/d4b/d4b61767bb7213b03b0afb7c23362b6a/b00f685e4aaf8e201a0b752d30a3af37.jpg', icon: '◈', title: 'Massgefertigt', text: 'Jeder Schrank wird nach Ihren Raummassen produziert — kein Zentimeter verschwendet.' },
    ],
  },
  'mixal-cabinet': {
    name: 'Mixal Schrank',
    desc: 'Mixal verbindet Holzdekore mit modernen Lackfronten zu einem harmonischen Ganzen. Der Drehtürenschrank bietet maximalen Stauraum bei minimaler Optik — ideal für Schlafzimmer und Flure.',
    price: 'ab CHF 10',
    variants: [
      { name: 'Eiche Natur', color: '#c8a870', images: ['/images/portfolio/iblock/f22/f22a1c12d1017be7df6408851d3a2f90/7a58d65e9c6a2fb00d2baba817e3e4ab.jpg', '/images/portfolio/iblock/0cc/0cc130a78014ca9854ac7c1945402626/c8404b22e082c785b272c0c11e93ba55.jpg'] },
      { name: 'Wenge Dunkel', color: '#3a2515', images: ['/images/portfolio/iblock/903/903bac3453a8f94056c60897d51c523f/a239dadbbaad5628b4c88a7ef17bfd3d.jpg', '/images/portfolio/iblock/da4/da49e414f9673532a90775fc112dc37f/838d28dd2530824b20527b8669e2d750.jpg'] },
    ],
    specs: [
      { label: 'Typ', value: 'Drehtürenschrank' },
      { label: 'Material', value: 'MDF + Holzdekor' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Oberfläche', value: 'Matt / Holzoptik' },
    ],
    tagline: 'Holz und Harmonie',
    featureImg: '/images/portfolio/iblock/f22/f22a1c12d1017be7df6408851d3a2f90/7a58d65e9c6a2fb00d2baba817e3e4ab.jpg',
    features: [
      { img: '/images/portfolio/iblock/f22/f22a1c12d1017be7df6408851d3a2f90/7a58d65e9c6a2fb00d2baba817e3e4ab.jpg', icon: '◇', title: 'Natürliche Materialien', text: 'Echte Holzdekore bringen Wärme und Charakter in jeden Raum.' },
      { img: '/images/portfolio/iblock/0cc/0cc130a78014ca9854ac7c1945402626/c8404b22e082c785b272c0c11e93ba55.jpg', icon: '▦', title: 'Maximaler Stauraum', text: 'Intelligente Innenaufteilung mit Hängebereich, Schubladen und Fächern.' },
      { img: '/images/portfolio/iblock/903/903bac3453a8f94056c60897d51c523f/a239dadbbaad5628b4c88a7ef17bfd3d.jpg', icon: '▯', title: 'Langlebige Oberfläche', text: 'Kratzfeste Beschichtung — bleibt jahrelang schön und pflegeleicht.' },
      { img: '/images/portfolio/iblock/da4/da49e414f9673532a90775fc112dc37f/838d28dd2530824b20527b8669e2d750.jpg', icon: '◈', title: 'Flexible Breiten', text: 'Erhältlich in verschiedenen Breiten — passt sich jedem Raumgrundriss an.' },
    ],
  },
  'spark-cabinet': {
    name: 'Spark Schrank',
    desc: 'Spark Schrank bringt die charakteristische Spark-Ästhetik ins Schlafzimmer — strukturierte Oberflächen, markante Linienführung und eine robuste Konstruktion für den täglichen Gebrauch.',
    price: 'ab CHF 13',
    variants: [
      { name: 'Graphit Struktur', color: '#505050', images: ['/images/portfolio/iblock/ec4/ec4c9661d3d8fe59d114ff1b49929695/ea7b176a2eb1e8b6041d418a6097c8d9.jpg', '/images/portfolio/iblock/f98/f98ea0d34d50b29474f9ceb127940cc9/76c92d48046820a4a3a0e186eb80c2e1.jpg'] },
      { name: 'Sandbeige Matt', color: '#d0c0a0', images: ['/images/portfolio/iblock/c95/c9515a77c371c38258c8f6428dfb8ccb/54ccddb70156707b6730ac61f03569e3.jpg', '/images/portfolio/iblock/d38/d380e0a12b1c5a97fb16d6d897582e97/4198920705b5069067c6290eb103b85d.jpg'] },
    ],
    specs: [
      { label: 'Typ', value: 'Drehtürenschrank' },
      { label: 'Material', value: 'MDF strukturiert' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Oberfläche', value: 'Strukturiert matt' },
    ],
    tagline: 'Struktur und Stärke',
    featureImg: '/images/portfolio/iblock/ec4/ec4c9661d3d8fe59d114ff1b49929695/ea7b176a2eb1e8b6041d418a6097c8d9.jpg',
    features: [
      { img: '/images/portfolio/iblock/ec4/ec4c9661d3d8fe59d114ff1b49929695/ea7b176a2eb1e8b6041d418a6097c8d9.jpg', icon: '◇', title: 'Strukturierte Fronten', text: 'Taktile Oberflächen erzeugen Tiefe und Charakter — modern und zeitlos zugleich.' },
      { img: '/images/portfolio/iblock/f98/f98ea0d34d50b29474f9ceb127940cc9/76c92d48046820a4a3a0e186eb80c2e1.jpg', icon: '▦', title: 'Robuste Konstruktion', text: 'Massiver Korpus aus feuchtigkeitsbeständigem Material — jahrelang stabil.' },
      { img: '/images/portfolio/iblock/c95/c9515a77c371c38258c8f6428dfb8ccb/54ccddb70156707b6730ac61f03569e3.jpg', icon: '▯', title: 'Grosszügiger Stauraum', text: 'Breite Innenfächer und Hängebereiche für maximale Ordnung.' },
      { img: '/images/portfolio/iblock/d38/d380e0a12b1c5a97fb16d6d897582e97/4198920705b5069067c6290eb103b85d.jpg', icon: '◈', title: 'Individuelle Konfiguration', text: 'Höhe, Breite und Innenaufteilung werden nach Ihren Wünschen gefertigt.' },
    ],
  },
  'teramo-cabinet': {
    name: 'Teramo Schrank',
    desc: 'Teramo Schrank überzeugt mit elegantem Rahmendesign und hochwertigen Oberflächen. Die Kombination aus Griffleisten und matten Fronten schafft eine luxuriöse Atmosphäre im Schlafzimmer.',
    price: 'ab CHF 14',
    variants: [
      { name: 'Weiss Seidenmatt', color: '#efefed', images: ['/images/portfolio/iblock/3ce/3cea6f69c098ae8f56d9a2f5521259b0/e11811d006c22cffa32eb3d3738c3b2f.jpg', '/images/portfolio/iblock/131/1313fe2776e8ffaf39cd0eeeeeaf1683/0eefa72016688da9c04c58798c059e81.jpg'] },
      { name: 'Taubengrau NCS', color: '#9898a0', images: ['/images/portfolio/iblock/4fd/4fd21ccfa2409d93cab9b6e1c016eb62/26c39bf4cc7d0fb559f9122e3eea180c.jpg', '/images/portfolio/iblock/7d7/7d774e632a82b89622d92455b4868da8/9f5c98a6a2e0e7168a578af84b0c463c.jpg'] },
    ],
    specs: [
      { label: 'Typ', value: 'Drehtürenschrank' },
      { label: 'Material', value: 'MDF lackiert' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'Aluminium-Griffleiste' },
    ],
    tagline: 'Eleganz im Detail',
    featureImg: '/images/portfolio/iblock/3ce/3cea6f69c098ae8f56d9a2f5521259b0/e11811d006c22cffa32eb3d3738c3b2f.jpg',
    features: [
      { img: '/images/portfolio/iblock/3ce/3cea6f69c098ae8f56d9a2f5521259b0/e11811d006c22cffa32eb3d3738c3b2f.jpg', icon: '◇', title: 'Rahmendesign', text: 'Profilierte Rahmen geben dem Schrank eine elegante Tiefenwirkung.' },
      { img: '/images/portfolio/iblock/131/1313fe2776e8ffaf39cd0eeeeeaf1683/0eefa72016688da9c04c58798c059e81.jpg', icon: '▦', title: 'Aluminium-Griffleisten', text: 'Feine Alu-Griffleisten als stilvolles Element und ergonomischer Griff zugleich.' },
      { img: '/images/portfolio/iblock/4fd/4fd21ccfa2409d93cab9b6e1c016eb62/26c39bf4cc7d0fb559f9122e3eea180c.jpg', icon: '▯', title: 'Mattes Finish', text: 'Samtig-matte Oberfläche — fingerabdruckresistent und immer edel.' },
      { img: '/images/portfolio/iblock/7d7/7d774e632a82b89622d92455b4868da8/9f5c98a6a2e0e7168a578af84b0c463c.jpg', icon: '◈', title: 'Massgefertigt', text: 'Jede Einheit wird auf Ihren Raum abgestimmt — vom Boden bis zur Decke.' },
    ],
  },
  'mix-wardrobe': {
    name: 'Mix 22 Schiebetüren',
    desc: 'Der Schiebetürenschrank Mix 22 spart Platz und bietet viel Stauraum. Glasfronten, Spiegel und Holzdekore lassen sich frei kombinieren — für eine Garderobe, die genauso individuell ist wie Sie.',
    price: 'ab CHF 11',
    variants: [
      { name: 'Glas / Weiss', color: '#e8eef0', images: ['/images/portfolio/iblock/351/3512c391d7da61536438733d68edf959/e9db682281519675cf3c0d4813486a64.jpg', '/images/portfolio/iblock/a58/a589481c64915f0c77aae6b130f9ef28/7842363bc9dbe4f13d74ca85df3d5495.jpg'] },
      { name: 'Spiegel / Eiche', color: '#c0a870', images: ['/images/portfolio/iblock/fa2/fa2216fae37c91ecea167dc3f1989f33/9370a66ecde080de49a047caa70a7b52.jpg', '/images/portfolio/iblock/3e3/3e37d4977dc7a4a4c2df4fee603f8272/7f05c377f639d49f663c2f12718821f0.jpg'] },
    ],
    specs: [
      { label: 'Typ', value: 'Schiebetürenschrank' },
      { label: 'Türen', value: 'Glas / Spiegel / Dekor' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Schienensystem', value: 'Lautlos-Gleiter' },
    ],
    tagline: 'Gleiten ohne Grenzen',
    featureImg: '/images/portfolio/iblock/351/3512c391d7da61536438733d68edf959/e9db682281519675cf3c0d4813486a64.jpg',
    features: [
      { img: '/images/portfolio/iblock/351/3512c391d7da61536438733d68edf959/e9db682281519675cf3c0d4813486a64.jpg', icon: '◇', title: 'Platzsparend', text: 'Schiebetüren öffnen nach innen — kein Schwenkraum nötig, ideal für enge Räume.' },
      { img: '/images/portfolio/iblock/a58/a589481c64915f0c77aae6b130f9ef28/7842363bc9dbe4f13d74ca85df3d5495.jpg', icon: '▦', title: 'Freie Frontgestaltung', text: 'Kombinieren Sie Glas, Spiegel und Holzdekor nach Ihrem Geschmack.' },
      { img: '/images/portfolio/iblock/fa2/fa2216fae37c91ecea167dc3f1989f33/9370a66ecde080de49a047caa70a7b52.jpg', icon: '▯', title: 'Lautloses Gleitsystem', text: 'Hochwertige Aluminiumschienen für sanftes, geräuschloses Öffnen und Schliessen.' },
      { img: '/images/portfolio/iblock/3e3/3e37d4977dc7a4a4c2df4fee603f8272/7f05c377f639d49f663c2f12718821f0.jpg', icon: '◈', title: 'Vom Boden bis zur Decke', text: 'Raumhohe Ausführung maximiert den Stauraum und wirkt architektonisch wertvoll.' },
    ],
  },
  'nicolle-wardrobe': {
    name: 'Nicolle Schiebetüren',
    desc: 'Nicolle Schiebetürenschrank verbindet elegantes Frontdesign mit einem leise gleitenden Schienensystem. Mattglas, Spiegel oder strukturierte Paneele — die Wahl liegt bei Ihnen.',
    price: 'ab CHF 13',
    variants: [
      { name: 'Mattglas Weiss', color: '#eaece8', images: ['/images/portfolio/iblock/583/58326e90edf1f245c991db83d3f287b3/c8e9ae7ad78b5f717798a61bd224c5ee.jpg', '/images/portfolio/iblock/a3e/a3eb5ee282dd2feabb85f459d652fd37/9870f10e4e0da083ba5641e341b2ffae.jpg'] },
      { name: 'Spiegel Grau', color: '#b0b0b8', images: ['/images/portfolio/iblock/197/197b17202cca6e0a292421b24018e50a/311f41f7f34869f12afdfab06c855ba4.jpg', '/images/portfolio/iblock/8df/8df14f1a57b88c5bf55cb8ed968303e1/12b17a0fe961c3cb047f5fae71b4c43c.jpg'] },
    ],
    specs: [
      { label: 'Typ', value: 'Schiebetürenschrank' },
      { label: 'Türen', value: 'Glas / Spiegel / Dekor' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Schienensystem', value: 'Lautlos-Gleiter' },
    ],
    tagline: 'Eleganz in Bewegung',
    featureImg: '/images/portfolio/iblock/583/58326e90edf1f245c991db83d3f287b3/c8e9ae7ad78b5f717798a61bd224c5ee.jpg',
    features: [
      { img: '/images/portfolio/iblock/583/58326e90edf1f245c991db83d3f287b3/c8e9ae7ad78b5f717798a61bd224c5ee.jpg', icon: '◇', title: 'Elegante Frontpaneele', text: 'Feine Rahmenprofile und edle Glasflächen verleihen dem Schrank Luxuscharakter.' },
      { img: '/images/portfolio/iblock/a3e/a3eb5ee282dd2feabb85f459d652fd37/9870f10e4e0da083ba5641e341b2ffae.jpg', icon: '▦', title: 'Spiegelfront-Option', text: 'Der integrierte Spiegel spart Platz und lässt den Raum grösser wirken.' },
      { img: '/images/portfolio/iblock/197/197b17202cca6e0a292421b24018e50a/311f41f7f34869f12afdfab06c855ba4.jpg', icon: '▯', title: 'Innenbeleuchtung möglich', text: 'LED-Streifen im Innern machen das Finden von Kleidung zum Erlebnis.' },
      { img: '/images/portfolio/iblock/8df/8df14f1a57b88c5bf55cb8ed968303e1/12b17a0fe961c3cb047f5fae71b4c43c.jpg', icon: '◈', title: 'Individuelle Inneneinteilung', text: 'Hängestangen, Schubladen, Schuhfächer — alles nach Ihren Bedürfnissen.' },
    ],
  },
  'nova-wardrobe': {
    name: 'Nova Schiebetüren',
    desc: 'Nova Schiebetürenschrank steht für puren Minimalismus. Rahmenlose Fronten, bündige Oberflächen und ein unsichtbares Gleitsystem — ideal für moderne Schlafzimmer ohne Kompromisse.',
    price: 'ab CHF 12',
    variants: [
      { name: 'Weiss Hochglanz', color: '#f2f0ee', images: ['/images/portfolio/iblock/d71/d7187386f4808db148b182dca73bc079/1c548a5e617fac9cecb9eeeb82918ed3.jpg', '/images/portfolio/iblock/e95/e95cb8a48a3247b164212e2a76ed6be9/18ae86c821167259f84396ce9b60eb96.jpg'] },
      { name: 'Anthrazit Matt', color: '#484848', images: ['/images/portfolio/iblock/9d3/9d3882904490d1a2f8dcc8b46aac5895/cda08d2f89a7557783116abc800ba529.jpg', '/images/portfolio/iblock/dae/dae1a7908e404524f1c5e3c8a1ba8349/f1733d50f02ed5408865f28a42a7065f.jpg'] },
    ],
    specs: [
      { label: 'Typ', value: 'Schiebetürenschrank' },
      { label: 'Design', value: 'Rahmenlos / minimalistisch' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Schienensystem', value: 'Unsichtbar integriert' },
    ],
    tagline: 'Purer Minimalismus',
    featureImg: '/images/portfolio/iblock/d71/d7187386f4808db148b182dca73bc079/1c548a5e617fac9cecb9eeeb82918ed3.jpg',
    features: [
      { img: '/images/portfolio/iblock/d71/d7187386f4808db148b182dca73bc079/1c548a5e617fac9cecb9eeeb82918ed3.jpg', icon: '◇', title: 'Rahmenlose Fronten', text: 'Kein sichtbarer Rahmen — die Fronten verschmelzen mit der Wand.' },
      { img: '/images/portfolio/iblock/e95/e95cb8a48a3247b164212e2a76ed6be9/18ae86c821167259f84396ce9b60eb96.jpg', icon: '▦', title: 'Bündige Oberfläche', text: 'Alle Fronten auf einer Ebene — kein Vorsprung, keine Kante, pure Form.' },
      { img: '/images/portfolio/iblock/9d3/9d3882904490d1a2f8dcc8b46aac5895/cda08d2f89a7557783116abc800ba529.jpg', icon: '▯', title: 'Unsichtbares Gleitsystem', text: 'Die Schiene ist im Deckenbereich verborgen — kein sichtbares Schienenprofil.' },
      { img: '/images/portfolio/iblock/dae/dae1a7908e404524f1c5e3c8a1ba8349/f1733d50f02ed5408865f28a42a7065f.jpg', icon: '◈', title: 'Beliebige Raumhöhe', text: 'Passt sich jeder Raumhöhe an — vom Standard bis zum Loft.' },
    ],
  },
  'spark-wardrobe': {
    name: 'Spark Schiebetüren',
    desc: 'Spark Schiebetürenschrank bringt die markante Spark-Struktur in das Gleittürenformat. Robuste Paneele in verschiedenen Texturen, kombinierbar mit Spiegel- oder Glasfeldern.',
    price: 'ab CHF 14',
    variants: [
      { name: 'Graphit Struktur', color: '#545454', images: ['/images/portfolio/iblock/474/47457e1c3b5be6e02e4838cba9d21569/991153059e0204f19d1a6e44471e7691.jpg', '/images/portfolio/iblock/ccd/ccd47944f7513c32690e9a34969e430d/9af035a18ef5a6562cb5274cc15f7669.jpg'] },
      { name: 'Sand Matt', color: '#d0c4a8', images: ['/images/portfolio/iblock/d46/d4605ad1a18483e5763ca5a1d863c7e2/9aa7dd6c49631db3b8558fe344ad08b6.jpg', '/images/portfolio/iblock/077/077d25ae29a0a1d6b26646b1ed6055a3/b38e24412ca113fe5b5620ef772bb4c3.jpg'] },
    ],
    specs: [
      { label: 'Typ', value: 'Schiebetürenschrank' },
      { label: 'Material', value: 'MDF strukturiert' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Kombination', value: 'Dekor + Spiegel + Glas' },
    ],
    tagline: 'Struktur im Gleiten',
    featureImg: '/images/portfolio/iblock/474/47457e1c3b5be6e02e4838cba9d21569/991153059e0204f19d1a6e44471e7691.jpg',
    features: [
      { img: '/images/portfolio/iblock/474/47457e1c3b5be6e02e4838cba9d21569/991153059e0204f19d1a6e44471e7691.jpg', icon: '◇', title: 'Strukturierte Paneele', text: 'Taktile Oberflächen setzen spannende Kontraste zur glatten Wand.' },
      { img: '/images/portfolio/iblock/ccd/ccd47944f7513c32690e9a34969e430d/9af035a18ef5a6562cb5274cc15f7669.jpg', icon: '▦', title: 'Mix aus Materialien', text: 'Kombinieren Sie Struktur mit Spiegel oder Glas für individuelle Akzente.' },
      { img: '/images/portfolio/iblock/d46/d4605ad1a18483e5763ca5a1d863c7e2/9aa7dd6c49631db3b8558fe344ad08b6.jpg', icon: '▯', title: 'Raumhoch montierbar', text: 'Vom Boden bis zur Decke für maximalen Stauraum und architektonische Wirkung.' },
      { img: '/images/portfolio/iblock/077/077d25ae29a0a1d6b26646b1ed6055a3/b38e24412ca113fe5b5620ef772bb4c3.jpg', icon: '◈', title: 'Robuste Konstruktion', text: 'Stabile Gleiter und Doppelschienen für jahrelangen reibungslosen Betrieb.' },
    ],
  },
  'top-line-wardrobe': {
    name: 'Top Line Schiebetüren',
    desc: 'Top Line ist das Premium-Schiebetürsystem von Marya — mit schwerem Aluminiumprofil, bündigem Soft-Stop und einer nahezu unbegrenzten Auswahl an Füllelementen für anspruchsvolle Einrichtungen.',
    price: 'ab CHF 16',
    variants: [
      { name: 'Alu / Glas Klar', color: '#d0d8e0', images: ['/images/portfolio/iblock/25c/25c53ba6daaefd8e3528accee7a9b61c/ae2fba7b9993e49687b3175b74a831e7.jpg', '/images/portfolio/iblock/0cc/0cc130a78014ca9854ac7c1945402626/c8404b22e082c785b272c0c11e93ba55.jpg'] },
      { name: 'Alu / Eiche Dekor', color: '#b89860', images: ['/images/portfolio/iblock/903/903bac3453a8f94056c60897d51c523f/a239dadbbaad5628b4c88a7ef17bfd3d.jpg', '/images/portfolio/iblock/da4/da49e414f9673532a90775fc112dc37f/838d28dd2530824b20527b8669e2d750.jpg'] },
    ],
    specs: [
      { label: 'Typ', value: 'Premium-Schiebetürenschrank' },
      { label: 'Profil', value: 'Aluminium Heavy-Duty' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Stop', value: 'Soft-Stop integriert' },
    ],
    tagline: 'Premium ohne Kompromisse',
    featureImg: '/images/portfolio/iblock/25c/25c53ba6daaefd8e3528accee7a9b61c/ae2fba7b9993e49687b3175b74a831e7.jpg',
    features: [
      { img: '/images/portfolio/iblock/25c/25c53ba6daaefd8e3528accee7a9b61c/ae2fba7b9993e49687b3175b74a831e7.jpg', icon: '◇', title: 'Heavy-Duty Aluminiumprofil', text: 'Breite, stabile Profile für Türen bis 80 kg — solide wie ein Hotelschrank.' },
      { img: '/images/portfolio/iblock/0cc/0cc130a78014ca9854ac7c1945402626/c8404b22e082c785b272c0c11e93ba55.jpg', icon: '▦', title: 'Integrierter Soft-Stop', text: 'Die Tür verlangsamt sich automatisch kurz vor dem Anschlag — kein Knall, kein Verschleiss.' },
      { img: '/images/portfolio/iblock/903/903bac3453a8f94056c60897d51c523f/a239dadbbaad5628b4c88a7ef17bfd3d.jpg', icon: '▯', title: 'Freie Füllauswahl', text: 'Glas, Spiegel, Holzdekor, Leder-Optik — nahezu unbegrenzte Kombinationsmöglichkeiten.' },
      { img: '/images/portfolio/iblock/da4/da49e414f9673532a90775fc112dc37f/838d28dd2530824b20527b8669e2d750.jpg', icon: '◈', title: 'Bis 3,5 m Breite', text: 'Auch grosse Wandöffnungen werden vollflächig abgedeckt — kein Pfeiler bleibt ungenutzt.' },
    ],
  },
  'jazz-wardrobe': {
    name: 'Jazz Schiebetüren',
    desc: 'Jazz Schiebetürenschrank verbindet die charakteristische Jazz-Ästhetik mit dem Komfort eines modernen Gleitsystems. Klare Linien, matte Oberflächen und flexible Innenaufteilung.',
    price: 'ab CHF 13',
    variants: [
      { name: 'Weiss Matt', color: '#ededea', images: ['/images/portfolio/iblock/203/203b523ee26a4ea66f89ec8b45a259e1/1062a76067b8b7c807f8c0c061c60868.jpg', '/images/portfolio/iblock/53f/53fca48a8348e2ea06d3f291e82847f0/7e4a6a62f27218efa6914c5871d3f1a6.jpg'] },
      { name: 'Graphit NCS', color: '#505058', images: ['/images/portfolio/iblock/117/117c9c81c308f24d1e6a445cf8638c0b/15376acb0a552a333d2c49fe67fe899c.jpg', '/images/portfolio/iblock/7f6/7f6e8f5f1d091361bb53a1e2c5a54997/a09ca380e3448d02096f5191f5235335.jpg'] },
    ],
    specs: [
      { label: 'Typ', value: 'Schiebetürenschrank' },
      { label: 'Material', value: 'MDF lackiert matt' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Schienensystem', value: 'Lautlos-Gleiter' },
    ],
    tagline: 'Jazz in jedem Zimmer',
    featureImg: '/images/portfolio/iblock/203/203b523ee26a4ea66f89ec8b45a259e1/1062a76067b8b7c807f8c0c061c60868.jpg',
    features: [
      { img: '/images/portfolio/iblock/203/203b523ee26a4ea66f89ec8b45a259e1/1062a76067b8b7c807f8c0c061c60868.jpg', icon: '◇', title: 'Jazz-Ästhetik', text: 'Klare Horizontallinien, flächenbündige Fronten — charakteristisch für die Jazz-Serie.' },
      { img: '/images/portfolio/iblock/53f/53fca48a8348e2ea06d3f291e82847f0/7e4a6a62f27218efa6914c5871d3f1a6.jpg', icon: '▦', title: 'Mattes Finish', text: 'Fingerabdruckresistente, samtig-matte Oberfläche für ein immer gepflegtes Erscheinungsbild.' },
      { img: '/images/portfolio/iblock/117/117c9c81c308f24d1e6a445cf8638c0b/15376acb0a552a333d2c49fe67fe899c.jpg', icon: '▯', title: 'Flexible Innenaufteilung', text: 'Hängebereiche, Schubladen, Schuhregale — individuell konfigurierbar.' },
      { img: '/images/portfolio/iblock/7f6/7f6e8f5f1d091361bb53a1e2c5a54997/a09ca380e3448d02096f5191f5235335.jpg', icon: '◈', title: 'Leises Gleitsystem', text: 'Hochwertige Aluminiumschienen für sanftes, geräuschloses Öffnen und Schliessen.' },
    ],
  },
  'mix-cabinet': {
    name: 'Mix 22 Schrank',
    desc: 'Mix 22 Schrank bringt die beliebte Mix-Kollektion ins Schlafzimmer. Kombinierbare Fronten aus verschiedenen Materialien, robuste Konstruktion und eine durchdachte Innenaufteilung.',
    price: 'ab CHF 10',
    variants: [
      { name: 'Weiss / Eiche', color: '#d8c89a', images: ['/images/portfolio/iblock/e78/e782f119c345bb9b1d6b4c72e63aebcb/9d66a403367d58e107dc6f0dad79e040.jpg', '/images/portfolio/iblock/0a3/0a362dee5784b900bfac563172c19bcb/b5c0e8a955b0cf788391352a767dfc91.jpg'] },
      { name: 'Graphit / Weiss', color: '#686870', images: ['/images/portfolio/iblock/cc0/cc09817cb7ce1d7ab1e19725b1028aa9/58f1e2b57f8f4ed743ebb87f40626737.jpg', '/images/portfolio/iblock/37a/37a515db1dc74535857a24529b5779fc/a1a59b3be33593775e8a08faa94073b4.jpg'] },
    ],
    specs: [
      { label: 'Typ', value: 'Drehtürenschrank' },
      { label: 'Material', value: 'MDF + Dekor Mix' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Fronten', value: 'Kombinierbar' },
    ],
    tagline: 'Mix aus dem Besten',
    featureImg: '/images/portfolio/iblock/e78/e782f119c345bb9b1d6b4c72e63aebcb/9d66a403367d58e107dc6f0dad79e040.jpg',
    features: [
      { img: '/images/portfolio/iblock/e78/e782f119c345bb9b1d6b4c72e63aebcb/9d66a403367d58e107dc6f0dad79e040.jpg', icon: '◇', title: 'Materialvielfalt', text: 'Kombinieren Sie Holzdekor, Matt-Lack und Glas in einem Schrank.' },
      { img: '/images/portfolio/iblock/0a3/0a362dee5784b900bfac563172c19bcb/b5c0e8a955b0cf788391352a767dfc91.jpg', icon: '▦', title: 'Robuste Konstruktion', text: 'Stabile Verbindungen und hochwertige Scharniere für jahrelange Langlebigkeit.' },
      { img: '/images/portfolio/iblock/cc0/cc09817cb7ce1d7ab1e19725b1028aa9/58f1e2b57f8f4ed743ebb87f40626737.jpg', icon: '▯', title: 'Durchdachte Inneneinteilung', text: 'Kleiderstangen, Schubladen und verstellbare Böden für maximale Ordnung.' },
      { img: '/images/portfolio/iblock/37a/37a515db1dc74535857a24529b5779fc/a1a59b3be33593775e8a08faa94073b4.jpg', icon: '◈', title: 'Massgefertigt', text: 'Jede Einheit wird auf Ihren Raum zugeschnitten — in Breite, Höhe und Tiefe.' },
    ],
  },
  'vector-cabinet': {
    name: 'Vector Schrank',
    desc: 'Vector Schrank steht für technische Präzision und modernes Design. Klare Horizontallinien, filigrane Griffleisten und hochwertige Lacke machen ihn zum Blickfang in jedem Schlafzimmer.',
    price: 'ab CHF 15',
    variants: [
      { name: 'Weiss Seidenmatt', color: '#f0eeeb', images: ['/images/portfolio/iblock/30c/30c5baaedf8e180d805775514ce594d8/4d1f3b36c1b955738e378e663d596fb4.jpg', '/images/portfolio/iblock/555/55568ab32f614bf63419293e2641275d/d175142e857f306a84f2c60fb7cc68e9.jpg'] },
      { name: 'Basaltgrau Matt', color: '#606068', images: ['/images/portfolio/iblock/50e/50e4990d6294cb6341c65302e722aaff/0f2afffaa19da420141edfef5b6af9af.jpg', '/images/portfolio/iblock/a67/a67f06fd031f7fb183dd9115bca0fec3/a7fafff86a55778e59ab45a1edc5683b.jpg'] },
    ],
    specs: [
      { label: 'Typ', value: 'Drehtürenschrank' },
      { label: 'Material', value: 'MDF lackiert' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'Alu-Griffleiste' },
    ],
    tagline: 'Präzision sichtbar',
    featureImg: '/images/portfolio/iblock/30c/30c5baaedf8e180d805775514ce594d8/4d1f3b36c1b955738e378e663d596fb4.jpg',
    features: [
      { img: '/images/portfolio/iblock/30c/30c5baaedf8e180d805775514ce594d8/4d1f3b36c1b955738e378e663d596fb4.jpg', icon: '◇', title: 'Horizontale Linienführung', text: 'Feine Fräslinien gliedern die Frontfläche — ruhig, präzise, modern.' },
      { img: '/images/portfolio/iblock/555/55568ab32f614bf63419293e2641275d/d175142e857f306a84f2c60fb7cc68e9.jpg', icon: '▦', title: 'Alu-Griffleiste', text: 'Umlaufende Aluminiumleiste als Griff und Designelement in einem.' },
      { img: '/images/portfolio/iblock/50e/50e4990d6294cb6341c65302e722aaff/0f2afffaa19da420141edfef5b6af9af.jpg', icon: '▯', title: 'Hochwertige Lacke', text: 'Kratzfester Lack in vielen NCS-Tönen — langlebig und pflegeleicht.' },
      { img: '/images/portfolio/iblock/a67/a67f06fd031f7fb183dd9115bca0fec3/a7fafff86a55778e59ab45a1edc5683b.jpg', icon: '◈', title: 'Raumhoch nach Mass', text: 'Vom Boden bis zur Decke für ein nahtloses, architektonisches Gesamtbild.' },
    ],
  },
  'jazz-cabinet': {
    name: 'Jazz Schrank',
    desc: 'Jazz Schrank überträgt das minimalistische Jazz-Design auf den Drehtürenschrank. Grifflose Fronten, klare Proportionen und hochwertige Materialien — Ordnung trifft Stil.',
    price: 'ab CHF 12',
    variants: [
      { name: 'Weiss Matt', color: '#eeecec', images: ['/images/portfolio/iblock/41e/41e9bd7bf2c461563445a8ab2e130c76/fc6fa4514f9e7f00421d01119211d555.jpg', '/images/portfolio/iblock/65f/65f6f84aa47ad13629f893303736fe79/db53c589c2c71edf9c15cff02095a649.jpg'] },
      { name: 'Schiefer NCS', color: '#787870', images: ['/images/portfolio/iblock/fe1/fe192ecc89dca3a8d4c4d3629042b4a0/f296dd17f9b554063edfd1831217f10f.jpg', '/images/portfolio/iblock/0b2/0b2556901ee4d98190313a4d3a3a7241/ca895d1cb8b2fa151d6a864423245981.jpg'] },
    ],
    specs: [
      { label: 'Typ', value: 'Drehtürenschrank' },
      { label: 'Material', value: 'MDF lackiert' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'Grifflos (Fräsung)' },
    ],
    tagline: 'Grifflos, stilvoll',
    featureImg: '/images/portfolio/iblock/41e/41e9bd7bf2c461563445a8ab2e130c76/fc6fa4514f9e7f00421d01119211d555.jpg',
    features: [
      { img: '/images/portfolio/iblock/41e/41e9bd7bf2c461563445a8ab2e130c76/fc6fa4514f9e7f00421d01119211d555.jpg', icon: '◇', title: 'Grifflose Fronten', text: 'Fräsung statt Griff — puristisch, kindersicher und immer sauber.' },
      { img: '/images/portfolio/iblock/65f/65f6f84aa47ad13629f893303736fe79/db53c589c2c71edf9c15cff02095a649.jpg', icon: '▦', title: 'Klare Proportionen', text: 'Gleichmässig gegliederte Frontflächen für ein ruhiges, geordnetes Erscheinungsbild.' },
      { img: '/images/portfolio/iblock/fe1/fe192ecc89dca3a8d4c4d3629042b4a0/f296dd17f9b554063edfd1831217f10f.jpg', icon: '▯', title: 'Matte Oberfläche', text: 'Fingerabdruckresistent und pflegeleicht — ideal für Familien mit Kindern.' },
      { img: '/images/portfolio/iblock/0b2/0b2556901ee4d98190313a4d3a3a7241/ca895d1cb8b2fa151d6a864423245981.jpg', icon: '◈', title: 'Flexibel konfigurierbar', text: 'Hängebereiche, Schubladen, Schuhfächer — individuell nach Bedarf.' },
    ],
  },
  'ice-cabinet': {
    name: 'Ice Schrank',
    desc: 'Ice Schrank besticht durch seine kristallklare Hochglanzoberfläche, die Licht reflektiert und Räume grosszügiger wirken lässt. Ein moderner Drehtürenschrank für alle, die Glanz mögen.',
    price: 'ab CHF 11',
    variants: [
      { name: 'Eisweiss Hochglanz', color: '#f5f5f8', images: ['/images/portfolio/iblock/0c2/0c2877c7783f3585992ccef0282a3cb5/215187ebeb924658120cb1373a7aac03.jpg', '/images/portfolio/iblock/a37/a37e3bbf1c4c50ffef32693cfcd58fd7/ff00d21a3249642157bc86d56684c887.jpg'] },
      { name: 'Silber Metallic', color: '#b8c0c8', images: ['/images/portfolio/iblock/f96/f962011cec317eddae540d457ae05424/e486d93956cd12ebede7be6a4ed57c76.jpg', '/images/portfolio/iblock/d87/d87e00522a894b2015217299be4a1260/a62062df65f1e6e8e2bba39ed65cb923.jpg'] },
    ],
    specs: [
      { label: 'Typ', value: 'Drehtürenschrank' },
      { label: 'Oberfläche', value: 'PVC Hochglanz' },
      { label: 'Garantie', value: 'Bis zu 15 Jahre' },
      { label: 'Pflegehinweis', value: 'Mikrofasertuch empfohlen' },
    ],
    tagline: 'Klar wie Eis',
    featureImg: '/images/portfolio/iblock/0c2/0c2877c7783f3585992ccef0282a3cb5/215187ebeb924658120cb1373a7aac03.jpg',
    features: [
      { img: '/images/portfolio/iblock/0c2/0c2877c7783f3585992ccef0282a3cb5/215187ebeb924658120cb1373a7aac03.jpg', icon: '◇', title: 'Hochglanz-Wirkung', text: 'Spiegelnde Oberfläche reflektiert Licht und vergrössert den Raum optisch.' },
      { img: '/images/portfolio/iblock/a37/a37e3bbf1c4c50ffef32693cfcd58fd7/ff00d21a3249642157bc86d56684c887.jpg', icon: '▦', title: 'Einfache Reinigung', text: 'Glatte, geschlossene Oberfläche ohne Poren — schnell sauber gemacht.' },
      { img: '/images/portfolio/iblock/f96/f962011cec317eddae540d457ae05424/e486d93956cd12ebede7be6a4ed57c76.jpg', icon: '▯', title: 'Moderne Optik', text: 'Klares Design ohne überflüssige Details — zeitlos und immer aktuell.' },
      { img: '/images/portfolio/iblock/d87/d87e00522a894b2015217299be4a1260/a62062df65f1e6e8e2bba39ed65cb923.jpg', icon: '◈', title: 'Massgefertigt', text: 'Auf Ihre Raummasse zugeschnitten — kein Millimeter verschwendet.' },
    ],
  },
  'integrato-cabinet': {
    name: 'Integrato Schrank',
    desc: 'Integrato Schrank übernimmt die puristischen Werte der Küchenserie ins Schlafzimmer — grifflose, emailbeschichtete MDF-Fronten, klare Geometrie und maximale Innenraumnutzung.',
    price: 'ab CHF 13',
    variants: [
      { name: 'Weiss Email Matt', color: '#f2f0ed', images: ['/images/portfolio/iblock/bfe/bfe87d69b9b43d17711eac364837b553/79812540060e76b573d232ab3f9c22f4.jpg', '/images/portfolio/iblock/29d/29dc0e90c46c01b170e42658e99c304c/45a5b55f9fe0c6bad468b8043102ece5.jpg'] },
      { name: 'Grau Email Matt', color: '#a0a0a8', images: ['/images/portfolio/iblock/770/7708e965140e91f9684efd727547e2f5/c1c3cc0c6adca81a76f38744ff0fa178.jpg', '/images/portfolio/iblock/cfd/cfda14da2e500034aee03df2c4f03140/3a87aea9d8a9744a70ea184deb847a9e.jpg'] },
    ],
    specs: [
      { label: 'Typ', value: 'Drehtürenschrank' },
      { label: 'Material', value: 'MDF 22 mm + Emaille' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'Grifflos (Fräsung)' },
    ],
    tagline: 'Purismus im Schlafzimmer',
    featureImg: '/images/portfolio/iblock/bfe/bfe87d69b9b43d17711eac364837b553/79812540060e76b573d232ab3f9c22f4.jpg',
    features: [
      { img: '/images/portfolio/iblock/bfe/bfe87d69b9b43d17711eac364837b553/79812540060e76b573d232ab3f9c22f4.jpg', icon: '◇', title: 'Email-Oberfläche', text: 'Langlebige Emaillebeschichtung — kratzfest, pflegeleicht, jahrelang schön.' },
      { img: '/images/portfolio/iblock/29d/29dc0e90c46c01b170e42658e99c304c/45a5b55f9fe0c6bad468b8043102ece5.jpg', icon: '▦', title: 'Grifflose Front', text: 'Fräsung statt Griff — maximaler Minimalismus ohne Abstriche beim Komfort.' },
      { img: '/images/portfolio/iblock/770/7708e965140e91f9684efd727547e2f5/c1c3cc0c6adca81a76f38744ff0fa178.jpg', icon: '▯', title: 'Klare Geometrie', text: 'Präzise Proportionen und plane Flächen für ein ruhiges, modernes Raumgefühl.' },
      { img: '/images/portfolio/iblock/cfd/cfda14da2e500034aee03df2c4f03140/3a87aea9d8a9744a70ea184deb847a9e.jpg', icon: '◈', title: 'Maximale Innenraumnutzung', text: 'Durchdachte Innenaufteilung mit Platz für Kleidung, Wäsche und Zubehör.' },
    ],
  },
  'camelia-cabinet': {
    name: 'Kamelie Schrank',
    desc: 'Kamelie Schrank ist der klassische Drehtürenschrank in edlem Gewand — mit filigranen Rahmenprofilen, eleganten Griffen und einer Auswahl an zeitlosen Farben für das Schlafzimmer.',
    price: 'ab CHF 14',
    variants: [
      { name: 'Elfenbein Seidenmatt', color: '#e8e0d0', images: ['/images/portfolio/iblock/3ff/3ffa6a1bf32ba41e1802155c67b23283/69eca5fe1f6bfd85593acd6ebdc73652.jpg', '/images/portfolio/iblock/bb5/bb56ea9c0bf573d14d815e330f0e0b08/0df0212946e360ede96d1b4bc3bc7c55.jpg'] },
      { name: 'Cashmere Rosa', color: '#e0c8c0', images: ['/images/portfolio/iblock/078/0784ef6386932f4f1a40bf98d8fe04ea/d29ffbfca9570c890ba444a9c1c7ccb7.jpg', '/images/portfolio/iblock/c17/c1798cf8267b15196ac18eb7cb7f1918/0633b1096ed3d65aaec6042130c0a363.jpg'] },
    ],
    specs: [
      { label: 'Typ', value: 'Drehtürenschrank' },
      { label: 'Material', value: 'MDF lackiert' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'Klassischer Möbelgriff' },
    ],
    tagline: 'Klassische Eleganz',
    featureImg: '/images/portfolio/iblock/3ff/3ffa6a1bf32ba41e1802155c67b23283/69eca5fe1f6bfd85593acd6ebdc73652.jpg',
    features: [
      { img: '/images/portfolio/iblock/3ff/3ffa6a1bf32ba41e1802155c67b23283/69eca5fe1f6bfd85593acd6ebdc73652.jpg', icon: '◇', title: 'Filigrane Rahmenprofile', text: 'Zarte Rahmenprofile verleihen dem Schrank eine klassisch-elegante Anmutung.' },
      { img: '/images/portfolio/iblock/bb5/bb56ea9c0bf573d14d815e330f0e0b08/0df0212946e360ede96d1b4bc3bc7c55.jpg', icon: '▦', title: 'Edle Möbelgriffe', text: 'Hochwertige Griffe in verschiedenen Ausführungen als stilvolles Detail.' },
      { img: '/images/portfolio/iblock/078/0784ef6386932f4f1a40bf98d8fe04ea/d29ffbfca9570c890ba444a9c1c7ccb7.jpg', icon: '▯', title: 'Zeitlose Farben', text: 'Von Elfenbein bis Cashmere — sanfte Töne, die zu jedem Einrichtungsstil passen.' },
      { img: '/images/portfolio/iblock/c17/c1798cf8267b15196ac18eb7cb7f1918/0633b1096ed3d65aaec6042130c0a363.jpg', icon: '◈', title: 'Massgefertigt', text: 'Jeder Schrank wird nach Ihren Raummassen und Wünschen gefertigt.' },
    ],
  },
  'antro-cabinet': {
    name: 'Antro Schrank',
    desc: 'Antro Schrank bringt die natürliche Stein- und Holzoptik der Antro-Küchenserie ins Schlafzimmer. Strukturierte Oberflächen, organische Texturen und eine moderne Formensprache.',
    price: 'ab CHF 15',
    variants: [
      { name: 'Steinoptik Grau', color: '#909090', images: ['/images/portfolio/iblock/f86/f86da75fb826a8b26d173db3cf6f1a2c/92d576ae7acc9771c78af538da6bd36f.jpg', '/images/portfolio/iblock/197/1978c017d33d5051aeedc4c000aaa214/b6eb8538fb60f9e8803a9348a329f09e.jpg'] },
      { name: 'Holzdekor Walnuss', color: '#7a5030', images: ['/images/portfolio/iblock/0c8/0c88a6eddf8744885d04ea9d7e99e017/f4e22fe3ab7299522ab8e2d377c62a04.jpg', '/images/portfolio/iblock/807/8078b9f8c34b0d8a254360964ec852aa/68eccfec3fcffd9dcd4b1b0e3071249f.jpg'] },
    ],
    specs: [
      { label: 'Typ', value: 'Drehtürenschrank' },
      { label: 'Material', value: 'MDF + Naturstruktur' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Oberfläche', value: 'Stein / Holz-Optik' },
    ],
    tagline: 'Natur im Schlafzimmer',
    featureImg: '/images/portfolio/iblock/f86/f86da75fb826a8b26d173db3cf6f1a2c/92d576ae7acc9771c78af538da6bd36f.jpg',
    features: [
      { img: '/images/portfolio/iblock/f86/f86da75fb826a8b26d173db3cf6f1a2c/92d576ae7acc9771c78af538da6bd36f.jpg', icon: '◇', title: 'Steinoptik-Fronten', text: 'Authentische Steinstruktur auf MDF — edel aussehend, leicht pflegbar.' },
      { img: '/images/portfolio/iblock/197/1978c017d33d5051aeedc4c000aaa214/b6eb8538fb60f9e8803a9348a329f09e.jpg', icon: '▦', title: 'Organische Texturen', text: 'Jede Front wirkt wie ein Naturmaterial — einzigartig und charaktervoll.' },
      { img: '/images/portfolio/iblock/0c8/0c88a6eddf8744885d04ea9d7e99e017/f4e22fe3ab7299522ab8e2d377c62a04.jpg', icon: '▯', title: 'Naturholz-Dekor', text: 'Eiche, Walnuss oder Pinie — echte Holzdekore bringen Wärme in den Raum.' },
      { img: '/images/portfolio/iblock/807/8078b9f8c34b0d8a254360964ec852aa/68eccfec3fcffd9dcd4b1b0e3071249f.jpg', icon: '◈', title: 'Robuste Oberfläche', text: 'Kratzfeste Beschichtung, die täglich belastet werden kann.' },
    ],
  },
  'trento-cabinet': {
    name: 'Trento Schrank',
    desc: 'Trento Schrank verbindet die Email-Oberflächen der beliebten Trento-Küche mit einer klassischen Schranksilhouette. Matt oder seidenmatt, mit eleganten Griffen oder grifflos.',
    price: 'ab CHF 13',
    variants: [
      { name: 'Cremeweiss Email', color: '#f0ece0', images: ['/images/portfolio/iblock/460/46098622bcb403c1ce9066b33c8ebde2/bd01cbb9ebb77ba2d495cea6aa04f6ad.jpg', '/images/portfolio/iblock/aa1/aa15a1f003036a3c9f60ae12437edda6/4fc1618422a6183e874632c201e5ba57.jpg'] },
      { name: 'Granitgrau Email', color: '#787878', images: ['/images/portfolio/iblock/f15/f158a6bbe77b01e72c086c2904aba589/663943c2527239a727b1f2b555fd1937.jpg', '/images/portfolio/iblock/ffa/ffa5010a93cfeed153760243aeb6e1ee/30bda8c359161d8808845c2d28c5e710.jpg'] },
    ],
    specs: [
      { label: 'Typ', value: 'Drehtürenschrank' },
      { label: 'Material', value: 'MDF + Emaille' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'Email-Griff / Grifflos' },
    ],
    tagline: 'Email-Qualität im Schlafzimmer',
    featureImg: '/images/portfolio/iblock/460/46098622bcb403c1ce9066b33c8ebde2/bd01cbb9ebb77ba2d495cea6aa04f6ad.jpg',
    features: [
      { img: '/images/portfolio/iblock/460/46098622bcb403c1ce9066b33c8ebde2/bd01cbb9ebb77ba2d495cea6aa04f6ad.jpg', icon: '◇', title: 'Email-Beschichtung', text: 'Hochwertige Emaillebeschichtung — strapazierfähig, pflegeleicht und langlebig.' },
      { img: '/images/portfolio/iblock/aa1/aa15a1f003036a3c9f60ae12437edda6/4fc1618422a6183e874632c201e5ba57.jpg', icon: '▦', title: 'Samtig-matte Oberfläche', text: 'Angenehme Haptik und elegante Optik — fingerabdruckresistent und zeitlos.' },
      { img: '/images/portfolio/iblock/f15/f158a6bbe77b01e72c086c2904aba589/663943c2527239a727b1f2b555fd1937.jpg', icon: '▯', title: 'Klassische Proportionen', text: 'Ausgewogene Masse für ein harmonisches Raumgefühl.' },
      { img: '/images/portfolio/iblock/ffa/ffa5010a93cfeed153760243aeb6e1ee/30bda8c359161d8808845c2d28c5e710.jpg', icon: '◈', title: 'Passend zur Küche', text: 'Kombinierbar mit Trento Küche für ein einheitliches Wohnkonzept.' },
    ],
  },
  'allure-cabinet': {
    name: 'Jazz Allure Schrank',
    desc: 'Jazz Allure Schrank vereint klassische Profildekore mit modernen Lacken. Filigrane Rahmen, edle Griffe und eine breite Farbauswahl machen ihn zum eleganten Mittelpunkt des Schlafzimmers.',
    price: 'ab CHF 16',
    variants: [
      { name: 'Grauweiss Matt', color: '#e8e4de', images: ['/images/portfolio/iblock/8a0/8a0034a25369fa6fe8ac92aa4f29fd61/00a6a152f109df947ebfb383c1298965.jpg', '/images/portfolio/iblock/2a6/2a62ca4b2b4c5c9896ec127fa08f3228/be0583385e053fd140547030c0721f2d.jpg'] },
      { name: 'Cashmere NCS', color: '#d0c0a8', images: ['/images/portfolio/iblock/af9/af97314c4c543726fee2b3c1cc18d3a3/b6b13df320802b3ee20e9a9931ed1b39.jpg', '/images/portfolio/iblock/84d/84dce614f057a6fb1f384bb4bcb13313/06748076dc2e8c11fce5a1424420cfd2.jpg'] },
    ],
    specs: [
      { label: 'Typ', value: 'Drehtürenschrank' },
      { label: 'Material', value: 'MDF lackiert + Profil' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'Messingriff / Profilrahmen' },
    ],
    tagline: 'Allure im Schlafzimmer',
    featureImg: '/images/portfolio/iblock/8a0/8a0034a25369fa6fe8ac92aa4f29fd61/00a6a152f109df947ebfb383c1298965.jpg',
    features: [
      { img: '/images/portfolio/iblock/8a0/8a0034a25369fa6fe8ac92aa4f29fd61/00a6a152f109df947ebfb383c1298965.jpg', icon: '◇', title: 'Klassisches Profil', text: 'Profilierte Rahmenelemente verleihen dem Schrank einen eleganten Charakter.' },
      { img: '/images/portfolio/iblock/2a6/2a62ca4b2b4c5c9896ec127fa08f3228/be0583385e053fd140547030c0721f2d.jpg', icon: '▦', title: 'Edle Messinggriffe', text: 'Optionale Griffe in Messing oder Chrom setzen luxuriöse Akzente.' },
      { img: '/images/portfolio/iblock/af9/af97314c4c543726fee2b3c1cc18d3a3/b6b13df320802b3ee20e9a9931ed1b39.jpg', icon: '▯', title: 'Breite Farbauswahl', text: 'RAL und NCS Farbtöne in unbegrenzter Auswahl — passend zu Ihrem Zuhause.' },
      { img: '/images/portfolio/iblock/84d/84dce614f057a6fb1f384bb4bcb13313/06748076dc2e8c11fce5a1424420cfd2.jpg', icon: '◈', title: 'Massgefertigt', text: 'Jede Einheit wird exakt auf Ihre Raummasse angepasst — vom Boden bis zur Decke.' },
    ],
  },
  'tokyo-cabinet': {
    name: 'Tokyo Schrank',
    desc: 'Tokyo Schrank bringt fernöstliche Minimalismus-Ästhetik ins Schlafzimmer. Klare Linien, matte Lackfronten und ein schlankes Profil machen ihn zum stilvollen Begleiter in modernen Wohnungen.',
    price: 'ab CHF 11',
    variants: [
      { name: 'Weiss Matt', color: '#efefed', images: ['/images/portfolio/iblock/0c5/0c5be3a97afe094ff07392a40429efd4/38ddb963a6f7543dc72ebad6370cf58c.jpg', '/images/portfolio/iblock/ce8/ce8e852967efe6703af979355ceabab2/75e842c2ea0fcb4e2d64ec93a175c429.jpg'] },
      { name: 'Anthrazit Matt', color: '#484848', images: ['/images/portfolio/iblock/13c/13c3b66e05c1a412d6acb3af7c065299/cb055543b8cfe592bf07dbf78bad7d06.jpg', '/images/portfolio/iblock/5f9/5f94b43e2287bc70625a15d6954a739d/ceab8b038c7b4197662a554b12d6e1e9.jpg'] },
    ],
    specs: [
      { label: 'Typ', value: 'Drehtürenschrank' },
      { label: 'Material', value: 'MDF lackiert' },
      { label: 'Garantie', value: 'Bis zu 15 Jahre' },
      { label: 'Griffe', value: 'Alu-Profilgriff' },
    ],
    tagline: 'Tokio-Stil für Zuhause',
    featureImg: '/images/portfolio/iblock/0c5/0c5be3a97afe094ff07392a40429efd4/38ddb963a6f7543dc72ebad6370cf58c.jpg',
    features: [
      { img: '/images/portfolio/iblock/0c5/0c5be3a97afe094ff07392a40429efd4/38ddb963a6f7543dc72ebad6370cf58c.jpg', icon: '◇', title: 'Fernöstlicher Minimalismus', text: 'Klare Formen, keine Ornamente — Schönheit durch Reduktion.' },
      { img: '/images/portfolio/iblock/ce8/ce8e852967efe6703af979355ceabab2/75e842c2ea0fcb4e2d64ec93a175c429.jpg', icon: '▦', title: 'Schlankes Profil', text: 'Schmale Frontstärken für ein leichtes, elegantes Erscheinungsbild.' },
      { img: '/images/portfolio/iblock/13c/13c3b66e05c1a412d6acb3af7c065299/cb055543b8cfe592bf07dbf78bad7d06.jpg', icon: '▯', title: 'Matte Oberfläche', text: 'Samtig-mattes Finish, fingerabdruckresistent und immer gepflegt.' },
      { img: '/images/portfolio/iblock/5f9/5f94b43e2287bc70625a15d6954a739d/ceab8b038c7b4197662a554b12d6e1e9.jpg', icon: '◈', title: 'Für jeden Raum', text: 'Verfügbar in vielen Breiten und Höhen — ideal für Schlaf-, Kinder- oder Bürozimmer.' },
    ],
  },
  'tokyo-glyanets-cabinet': {
    name: 'Tokyo Glanz Schrank',
    desc: 'Tokyo Glanz Schrank kombiniert minimalistische Formensprache mit einer glänzenden Hochglanzoberfläche. Hell, modern und pflegeleicht — der ideale Schrank für lichtdurchflutete Räume.',
    price: 'ab CHF 12',
    variants: [
      { name: 'Weiss Hochglanz', color: '#f5f5f0', images: ['/images/portfolio/iblock/d6f/d6f83a7c9a86bcb293e3f68a2d152205/bd240992b1d02ab036b6a956c2855c19.jpg', '/images/portfolio/iblock/a07/a07afc8a2ec85d39851beccc5f89228c/4836560adab1bb8eb998ee2d66f24174.jpg'] },
      { name: 'Silber Hochglanz', color: '#c8c8d0', images: ['/images/portfolio/iblock/747/7473a224a687e5a3bf299b2acb37e23a/a1bd09806dc79f42f609f7bf6f9f8317.jpg', '/images/portfolio/iblock/0f1/0f1636b92d8715fbe4d63acbd5813a52/16598608d9fb8061cfaff10ac164bed7.jpg'] },
    ],
    specs: [
      { label: 'Typ', value: 'Drehtürenschrank' },
      { label: 'Oberfläche', value: 'PVC Hochglanz' },
      { label: 'Garantie', value: 'Bis zu 15 Jahre' },
      { label: 'Griffe', value: 'Alu-Profilgriff' },
    ],
    tagline: 'Hochglanz trifft Minimalismus',
    featureImg: '/images/portfolio/iblock/d6f/d6f83a7c9a86bcb293e3f68a2d152205/bd240992b1d02ab036b6a956c2855c19.jpg',
    features: [
      { img: '/images/portfolio/iblock/d6f/d6f83a7c9a86bcb293e3f68a2d152205/bd240992b1d02ab036b6a956c2855c19.jpg', icon: '◇', title: 'Spiegelnde Optik', text: 'Hochglanzfronten reflektieren Licht und lassen den Raum grösser wirken.' },
      { img: '/images/portfolio/iblock/a07/a07afc8a2ec85d39851beccc5f89228c/4836560adab1bb8eb998ee2d66f24174.jpg', icon: '▦', title: 'Einfache Reinigung', text: 'Glatte, porenfreie Fläche — mit einem feuchten Tuch in Sekunden sauber.' },
      { img: '/images/portfolio/iblock/747/7473a224a687e5a3bf299b2acb37e23a/a1bd09806dc79f42f609f7bf6f9f8317.jpg', icon: '▯', title: 'Tokyo-Minimalismus', text: 'Klare Formen ohne überflüssige Details — Tokyo-Stil im Schlafzimmer.' },
      { img: '/images/portfolio/iblock/0f1/0f1636b92d8715fbe4d63acbd5813a52/16598608d9fb8061cfaff10ac164bed7.jpg', icon: '◈', title: 'Massgefertigt', text: 'Auf Ihre Raummasse zugeschnitten — kein Millimeter verschwendet.' },
    ],
  },
  'optima-dressing': {
    name: 'Optima Ankleidezimmer',
    desc: 'Optima ist das modulare Ankleidezimmersystem von Marya — frei kombinierbare Regale, Hängebereiche, Schubladen und Schuhregale für eine perfekt organisierte persönliche Garderobe.',
    price: 'ab CHF 18',
    variants: [
      { name: 'Weiss Matt', color: '#f0eeeb', images: ['/images/portfolio/iblock/396/396aee7821bdbcbc2d8c8bfc8880d1ca/694f5b1638d08c50e30c23a45bf50d44.jpg', '/images/portfolio/iblock/81c/81c63ef6dea0eb622a2926690a779c7b/6ca6eaeb1fc4e026a121756037673dd9.jpg'] },
      { name: 'Eiche Natur', color: '#c0a060', images: ['/images/portfolio/iblock/161/1617afa1ee74150fc1e1b48597c188ef/848103ef1e10cfa589062993ff087205.jpg', '/images/portfolio/iblock/03b/03b694b5cbc377d8856e00bf221726c2/898d70bb2b670c231f4e07d7641384dc.jpg'] },
    ],
    specs: [
      { label: 'Typ', value: 'Modulares Ankleidezimmer' },
      { label: 'System', value: 'Frei kombinierbar' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Beleuchtung', value: 'LED-Option verfügbar' },
    ],
    tagline: 'Ihr persönlicher Luxus',
    featureImg: '/images/portfolio/iblock/396/396aee7821bdbcbc2d8c8bfc8880d1ca/694f5b1638d08c50e30c23a45bf50d44.jpg',
    features: [
      { img: '/images/portfolio/iblock/396/396aee7821bdbcbc2d8c8bfc8880d1ca/694f5b1638d08c50e30c23a45bf50d44.jpg', icon: '◇', title: 'Modulares System', text: 'Frei kombinierbare Module — planen Sie Ihr Traumankleidezimmer nach Ihren Bedürfnissen.' },
      { img: '/images/portfolio/iblock/81c/81c63ef6dea0eb622a2926690a779c7b/6ca6eaeb1fc4e026a121756037673dd9.jpg', icon: '▦', title: 'Vielfältige Innenausstattung', text: 'Hängebereiche, Schubladen, Schuhregale und offene Fächer — alles nach Plan.' },
      { img: '/images/portfolio/iblock/161/1617afa1ee74150fc1e1b48597c188ef/848103ef1e10cfa589062993ff087205.jpg', icon: '▯', title: 'LED-Beleuchtung', text: 'Integrierte LED-Streifen beleuchten jeden Winkel Ihrer Garderobe perfekt.' },
      { img: '/images/portfolio/iblock/03b/03b694b5cbc377d8856e00bf221726c2/898d70bb2b670c231f4e07d7641384dc.jpg', icon: '◈', title: 'Massgeplant', text: 'Unsere Designer planen Ihr Ankleidezimmer kostenlos nach Ihrem Grundriss.' },
    ],
  },
  'stilos': {
    name: 'Stilos Ankleidezimmer',
    desc: 'Stilos ist das Premium-Ankleidezimmersystem mit Glasfronten und Rahmenstruktur — für alle, die Ihr Ankleidezimmer wie ein Modegeschäft gestalten möchten. Transparent, organisiert, luxuriös.',
    price: 'ab CHF 22',
    variants: [
      { name: 'Glas / Weiss Rahmen', color: '#e8eef0', images: ['/images/portfolio/iblock/888/888edd15fac0e6f0a004b83e167b94b9/b53de321077cb44f2717b0b413e8f876.jpg', '/images/portfolio/iblock/78c/78c6b4230d95b147039e585f0b0b209f/cbdaee5a1b4614182908f5d1eb3f8209.jpg'] },
      { name: 'Glas / Alu Rahmen', color: '#c0c8d0', images: ['/images/portfolio/iblock/e8c/e8c92ee45fb689f05bf381cb5ce9b353/757bd8c5c3487a2c42ec0a0de28bc4c0.jpg', '/images/portfolio/iblock/766/7666f6aaf63e3b3af5ab2a0795739ac2/6b093a5d13ae291af6895891f2ec70eb.jpg'] },
    ],
    specs: [
      { label: 'Typ', value: 'Premium Ankleidezimmer' },
      { label: 'Fronten', value: 'Klarglas / Mattglas' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Rahmen', value: 'Aluminium / Weiss' },
    ],
    tagline: 'Transparenz und Stil',
    featureImg: '/images/portfolio/iblock/888/888edd15fac0e6f0a004b83e167b94b9/b53de321077cb44f2717b0b413e8f876.jpg',
    features: [
      { img: '/images/portfolio/iblock/888/888edd15fac0e6f0a004b83e167b94b9/b53de321077cb44f2717b0b413e8f876.jpg', icon: '◇', title: 'Glasfronten', text: 'Durchsichtige oder mattierte Glasfronten geben dem Ankleidezimmer ein edles Erscheinungsbild.' },
      { img: '/images/portfolio/iblock/78c/78c6b4230d95b147039e585f0b0b209f/cbdaee5a1b4614182908f5d1eb3f8209.jpg', icon: '▦', title: 'Aluminium-Rahmenstruktur', text: 'Stabile Aluprofile bilden die Konstruktion — leicht, robust und dauerhaft.' },
      { img: '/images/portfolio/iblock/e8c/e8c92ee45fb689f05bf381cb5ce9b353/757bd8c5c3487a2c42ec0a0de28bc4c0.jpg', icon: '▯', title: 'Sichtbarer Inhalt', text: 'Durch die Glasfronten sehen Sie sofort, was wo liegt — keine Suche mehr.' },
      { img: '/images/portfolio/iblock/766/7666f6aaf63e3b3af5ab2a0795739ac2/6b093a5d13ae291af6895891f2ec70eb.jpg', icon: '◈', title: 'Kostenlose Planung', text: 'Wir planen Ihr Stilos-Ankleidezimmer gratis nach Ihrem Grundriss und Wünschen.' },
    ],
  },
  'jazz-allure': {
    name: 'Jazz Allure',
    desc: 'Jazz Allure verbindet die bewährte Jazz-Qualität mit klassisch-eleganten Details: Profifräsungen, edle Lackoberflächen und zeitlose Proportionen. Eine Küche für alle, die Stil und Funktionalität nicht trennen möchten.',
    price: 'ab CHF 48',
    variants: [
      { name: 'Grauweiss Matt', color: '#e8e4e0', images: ['/images/portfolio/iblock/ba2/ba268b7026920fa148416336fa32f631/ff9a710b148730a1d74acffdc6d6c965.jpg', '/images/portfolio/iblock/b37/b375bf88b96a066dbc5c9d558788f2b5/7bb2969b85714d86d3a1b3c0a59b6e05.jpg'] },
      { name: 'Cashmere Beige', color: '#d0c0a8', images: ['/images/portfolio/iblock/8cb/8cbf6b0077c9779f9ec8fefe0f9ccfce/83653036f6ffed8ba42149182c8b5ea7.jpg', '/images/portfolio/iblock/a7f/a7f0c76eb31b1fffb54f04943ad3d71f/ab97e9923cfbcebd6d512664caaa22ad.jpg'] },
      { name: 'Steingrau NCS', color: '#888880', images: ['/images/portfolio/iblock/22c/22c1851906b6e665082ff8820d7e9ef6/d159a9c8936ae2b9f0b300b6e6faf2f4.jpg', '/images/portfolio/iblock/5dd/5dd7f4a3c03dae3b9b93706033e10645/18a4d74b797cf65e01832f2c7ea4ba7f.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'MDF 22 mm + Lack' },
      { label: 'Farben', value: 'RAL / NCS individuell' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'Messingriff / Profilrahmen' },
    ],
    tagline: 'Eleganz und Substanz',
    featureImg: '/images/portfolio/iblock/ba2/ba268b7026920fa148416336fa32f631/ff9a710b148730a1d74acffdc6d6c965.jpg',
    features: [
      { img: '/images/portfolio/iblock/ba2/ba268b7026920fa148416336fa32f631/ff9a710b148730a1d74acffdc6d6c965.jpg', icon: '◇', title: 'Klassische Profifräsung', text: 'Profilierte Frontkanten verleihen der Küche einen klassisch-zeitlosen Charakter — subtile Eleganz, die überzeugt.' },
      { img: '/images/portfolio/iblock/b37/b375bf88b96a066dbc5c9d558788f2b5/7bb2969b85714d86d3a1b3c0a59b6e05.jpg', icon: '▦', title: 'Edles Lackfinish', text: 'Hochwertige Lackierung auf 22 mm MDF — seidenweiche Oberfläche, farbecht, kratzresistent und jahrelang schön.' },
      { img: '/images/portfolio/iblock/8cb/8cbf6b0077c9779f9ec8fefe0f9ccfce/83653036f6ffed8ba42149182c8b5ea7.jpg', icon: '▯', title: 'Individueller Farbton', text: 'Hunderte von RAL- und NCS-Farbtönen — wählen Sie genau den Farbton, der zu Ihrer Raumgestaltung passt.' },
      { img: '/images/portfolio/iblock/a7f/a7f0c76eb31b1fffb54f04943ad3d71f/ab97e9923cfbcebd6d512664caaa22ad.jpg', icon: '◈', title: 'Messinggold-Akzente', text: 'Optionale Messinggriffe und -profile setzen edle Akzente und machen Jazz Allure zur echten Designerküche.' },
    ],
  },
  'grafis': {
    name: 'Grafis',
    desc: 'Grafis steht für kompromisslosen Minimalismus in Schwarz. Matte Fronten mit klarer Geometrie und grifflosen Oberflächen schaffen ein modernes, urbanes Ambiente. Langlebig, pflegeleicht und ein echter Blickfang.',
    price: 'ab CHF 50',
    tagline: 'Minimalistisch. Schwarz. Ausdrucksstark.',
    variants: [
      { name: 'Schwarz Matt', color: '#1a1a1a', images: [
        '/images/products/07pxOyAzMM8LAKQhj_P1p1s.jpg',
        '/images/products/0inf0eZjq9vaH2cmA_pZDlb.jpg',
        '/images/products/0sVGUq1zdKqpIvx0E_cEPjn.jpg',
        '/images/products/0Dq6djgvGQ47gNn7E_XKby1.jpg',
        '/images/products/05StiwvLV5lZ2NBOa_fBvCw.jpg',
        '/images/products/0G64ypiHxd7dC8yx8_PoRAd.jpg',
        '/images/products/01otTiimDoE10ulNg_j20gC.jpg',
        '/images/products/0iOw6GhF1AgLtagdl_fZBDV.jpg',
        '/images/products/0WMba2hhJJuAm75oJ_8jOID.jpg',
        '/images/products/0qU8c0EkW2qe2jly7_0W5kx.jpg',
        '/images/products/09KuzubGY7LuzR2Rl_eU9OW.jpg',
        '/images/products/0MWBwkAKGi04aS39l_1h6Pj.jpg',
        '/images/products/0nJKo1Vj4znXWWHG5_9CtW7.jpg',
        '/images/products/0nUCqy3iOzLHNR8xs_ni5kR.jpg',
      ]},
    ],
    specs: [
      { label: 'Material', value: 'Kunststoff-Folie auf MDF' },
      { label: 'Stil', value: 'Modern / Minimalistisch' },
      { label: 'Farbe', value: 'Schwarz' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Preis', value: 'ab CHF 50 / lfd. M.' },
    ],
    featureImg: '/images/products/07pxOyAzMM8LAKQhj_P1p1s.jpg',
    videos: [
      '/videos/products/Графис__93pct_smaller.mp4',
      null, null, null, null, null, null, null, null, null, null, null, null, null,
    ],
    features: [
      { img: '/images/products/07pxOyAzMM8LAKQhj_P1p1s.jpg', icon: '◇', title: 'Griffloses Design', text: 'Maximale Reinheit und minimalistische Ästhetik — keine sichtbaren Griffe stören die klare Linienführung.' },
      { img: '/images/products/0inf0eZjq9vaH2cmA_pZDlb.jpg', icon: '▦', title: 'Kratzfeste Oberfläche', text: 'Hochwertige Kunststoff-Beschichtung schützt dauerhaft vor Kratzern, Feuchtigkeit und Temperaturschwankungen.' },
      { img: '/images/products/0sVGUq1zdKqpIvx0E_cEPjn.jpg', icon: '▯', title: 'Individuelle Planung', text: 'Jede Küche wird massgenau für Ihren Raum geplant — exakt nach Ihren Wünschen und Massen.' },
      { img: '/images/products/0Dq6djgvGQ47gNn7E_XKby1.jpg', icon: '◈', title: '20 Jahre Garantie', text: 'Wir bieten eine umfassende Herstellergarantie — für langfristige Freude an Ihrer Küche.' },
    ],
  },
  'granby': {
    name: 'Granby',
    desc: 'Granby vereint weiche Grautöne mit modernen PVC- und Email-Fronten. Die ruhige, harmonische Farbgebung fügt sich elegant in jedes Interieur ein und schafft eine Atmosphäre von Qualität und Stil.',
    price: '',
    tagline: 'Harmonische Grautöne. Zeitlose Qualität.',
    variants: [
      { name: 'Grau Matt', color: '#888888', images: [
        '/images/products/0cZ3AVTlSyxPUwLgW_fAZRl.jpg',
        '/images/products/04PgbGC2Y0hQFGGnD_AqQD0.jpg',
        '/images/products/0pbEuxLBCeovCt1KW_Q7xPM.jpg',
        '/images/products/0Ezj1sQOCnRvwEX4O_Mb7hw.jpg',
        '/images/products/0GBQ4bBYtBzXJkIq9_FlXgK.jpg',
        '/images/products/0nuOZBdQhDqqgURFe_57t0o.jpg',
        '/images/products/0orIneKVbMTPezMJh_Uq9Gl.jpg',
        '/images/products/01OPx1AtpeFl9LuH5_leZZA.jpg',
        '/images/products/0eLBFFmuxVN0VbwDi_DeFWk.jpg',
        '/images/products/0Ijp7IMdw4eobSkyj_kg2fW.jpg',
        '/images/products/0NhYb24Hrhw9JSenc_cMCOF.jpg',
        '/images/products/0Qng2z1PDHWlZMuan_bpUCj.jpg',
        '/images/products/0ktuahH6W6cjbKHYc_Y3qVv.jpg',
        '/images/products/0mvTpr8vqXDbmfbVu_a7Ibt.jpg',
      ]},
    ],
    specs: [
      { label: 'Material', value: 'PVC-Folie / Email-Lack' },
      { label: 'Stil', value: 'Modern' },
      { label: 'Farbe', value: 'Grau' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
    ],
    featureImg: '/images/products/0cZ3AVTlSyxPUwLgW_fAZRl.jpg',
    videos: [
      '/videos/products/Гранби3__92pct_smaller.mp4',
      null, null, null, null, null, null, null, null, null, null, null, null, null,
    ],
    features: [
      { img: '/images/products/0cZ3AVTlSyxPUwLgW_fAZRl.jpg', icon: '◇', title: 'Zeitlose Grautöne', text: 'Grau bleibt immer modern — Granby bietet eine breite Palette von Hellgrau bis Anthrazit für jeden Geschmack.' },
      { img: '/images/products/04PgbGC2Y0hQFGGnD_AqQD0.jpg', icon: '▦', title: 'Email-Lack Qualität', text: 'Hochwertige Email-Lackierung auf MDF — strapazierfähig, farbecht und über Jahre makellos schön.' },
      { img: '/images/products/0pbEuxLBCeovCt1KW_Q7xPM.jpg', icon: '▯', title: 'Europäische Beschläge', text: 'Blum- und Hettich-Beschläge mit über 80.000 Zyklen Lebensdauer — geräuschloses Schliessen inklusive.' },
      { img: '/images/products/0Ezj1sQOCnRvwEX4O_Mb7hw.jpg', icon: '◈', title: 'Massgefertigt für die Schweiz', text: 'Jedes Möbel wird individuell nach Ihrem Grundriss und Ihren Wünschen geplant und gefertigt.' },
    ],
  },
  'budbin': {
    name: 'Budbin',
    desc: 'Budbin bringt frische Weisstöne und klare Linien in Ihre Küche. Die kombinierten PVC- und Email-Fronten bieten maximale Gestaltungsfreiheit — vom reinsten Weiss bis zu sanften Cremetönen.',
    price: '',
    tagline: 'Strahlend weiss. Frisch und modern.',
    variants: [
      { name: 'Weiss Hochglanz', color: '#f5f5f5', images: [
        '/images/products/0jifM8SdyZJQgxzHv_flxWI.jpg',
        '/images/products/0yeIHaM1UKb5k81aD_nShcX.jpg',
        '/images/products/0UIUgObC2HfprzXhE_CP4o5.jpg',
        '/images/products/0TO1dM58rr2gfVt4g_6YfjW.jpg',
        '/images/products/0I7IgL4A0D0vTYI6B_h2QUK.jpg',
        '/images/products/09ppwlqQ3bqG6FPwZ_Mtt8x.jpg',
        '/images/products/08ZtrRMLF9s0cTMgW_syIqL.jpg',
        '/images/products/0V7C0tBS6mAq2nzDR_OhwQC.jpg',
        '/images/products/0C6bZZg4YZair8SC1_G9PF4.jpg',
      ]},
    ],
    specs: [
      { label: 'Material', value: 'PVC-Folie / Email-Lack' },
      { label: 'Stil', value: 'Modern' },
      { label: 'Farbe', value: 'Weiss / Creme' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
    ],
    featureImg: '/images/products/0jifM8SdyZJQgxzHv_flxWI.jpg',
    videos: [
      '/videos/products/Будбин__93pct_smaller.mp4',
      null, null, null, null, null, null, null, null,
    ],
    features: [
      { img: '/images/products/0jifM8SdyZJQgxzHv_flxWI.jpg', icon: '◇', title: 'Strahlendes Weiss', text: 'Weiss schafft Weite und Helligkeit — Budbin nutzt diesen Effekt optimal mit matten und glänzenden Frontoptionen.' },
      { img: '/images/products/0yeIHaM1UKb5k81aD_nShcX.jpg', icon: '▦', title: 'Pflegeleichte Oberflächen', text: 'Die Frontbeschichtung stösst Schmutz und Fett ab — ein feuchtes Tuch genügt für die tägliche Reinigung.' },
      { img: '/images/products/0UIUgObC2HfprzXhE_CP4o5.jpg', icon: '▯', title: 'Intelligenter Stauraum', text: 'Durchdachte Innenausstattung mit Vollauszügen und variablen Regalen für maximale Effizienz auf kleinstem Raum.' },
      { img: '/images/products/0TO1dM58rr2gfVt4g_6YfjW.jpg', icon: '◈', title: 'Langlebige Qualität', text: 'Zertifizierte Materialien nach Schweizer Standard — bis zu 20 Jahre Garantie auf alle Möbel.' },
    ],
  },
  'kolaria': {
    name: 'Kolaria',
    desc: 'Kolaria überzeugt durch Vielseitigkeit: Vier Frontmaterialien — PVC, Kunststoff, Email und Acryl — ermöglichen eine riesige Bandbreite an Designs. Modern, hell und funktional für jeden Raum.',
    price: '',
    tagline: 'Vier Materialien. Grenzenlose Gestaltung.',
    variants: [
      { name: 'Weiss PVC', color: '#f5f5f5', images: [
        '/images/products/0kesx1Y2Pt92wkDDx_04Vkl.jpg',
        '/images/products/09NhXpu98iGJEySEn_65TT4.jpg',
        '/images/products/0clor9XYx7kFblogY_4mJKE.jpg',
        '/images/products/0VOgYBZv53tBUyVOl_c4r80.jpg',
        '/images/products/0pWdToX8vT3ltw80U_Sz1UA.jpg',
        '/images/products/0dFQdEndDqWCjB2NW_OhScL.jpg',
        '/images/products/0jHz23YKDu0ja1JpC_qxKoh.jpg',
        '/images/products/0AeIRvirCbXC1ARDw_swDfA.jpg',
      ]},
    ],
    specs: [
      { label: 'Material', value: 'PVC / Kunststoff / Email / Acryl' },
      { label: 'Stil', value: 'Modern' },
      { label: 'Dekore', value: 'Über 100 Varianten' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
    ],
    featureImg: '/images/products/0kesx1Y2Pt92wkDDx_04Vkl.jpg',
    videos: [
      '/videos/products/Колария__92pct_smaller.mp4',
      null, null, null, null, null, null, null, null, null, null, null, null, null,
    ],
    features: [
      { img: '/images/products/0kesx1Y2Pt92wkDDx_04Vkl.jpg', icon: '◇', title: 'Vier Frontmaterialien', text: 'PVC, Kunststoff, Email oder Acryl — wählen Sie das Material, das zu Ihrem Lebensstil und Budget passt.' },
      { img: '/images/products/09NhXpu98iGJEySEn_65TT4.jpg', icon: '▦', title: 'Acryl-Hochglanz', text: 'Acryl-Fronten spiegeln das Licht und lassen Räume grösser wirken — pflegeleicht und ausdrucksstark.' },
      { img: '/images/products/0clor9XYx7kFblogY_4mJKE.jpg', icon: '▯', title: 'Kratzfeste Beschichtung', text: 'Kunststoff-Fronten widersetzen sich Kratzern und heissem Geschirr — robuste Qualität für den Alltag.' },
      { img: '/images/products/0VOgYBZv53tBUyVOl_c4r80.jpg', icon: '◈', title: 'Individuelle Planung', text: 'Alle vier Materialien kombinierbar — für ein stimmiges Gesamtbild nach Ihrem persönlichen Geschmack.' },
    ],
  },
'roshedu': {
    name: 'Roshedu',
    desc: 'Roshedu vereint dunkle Eleganz mit der Wärme von Holztönen. Die Kombination aus matten und strukturieren Oberflächen schafft eine einladende Atmosphäre — modern und zeitlos zugleich.',
    price: '',
    tagline: 'Dunkle Eleganz. Warme Holztöne.',
    variants: [
      { name: 'Nussbaum Dunkel', color: '#3d2b1f', images: [
        '/images/products/097K8FXmtcZoVqJVy_lu4a1.jpg',
        '/images/products/01fzODmKRtoACKIqP_SNR4S.jpg',
        '/images/products/09OlMNCCasbZch57a_8y4Tn.jpg',
        '/images/products/0iGPVbebDtfvbxgis_cvQhd.jpg',
      ]},
    ],
    specs: [
      { label: 'Material', value: 'MDF / Echtholz-Furnier' },
      { label: 'Stil', value: 'Modern-Klassisch' },
      { label: 'Farbe', value: 'Nussbaum / Dunkelbraun' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
    ],
    featureImg: '/images/products/097K8FXmtcZoVqJVy_lu4a1.jpg',
    videos: [
      '/videos/products/Рошеду__84pct_smaller.mp4',
      null, null, null, null, null, null, null, null, null, null, null, null, null,
    ],
    features: [
      { img: '/images/products/097K8FXmtcZoVqJVy_lu4a1.jpg', icon: '◇', title: 'Dunkle Eleganz', text: 'Tiefe Braun- und Nussbaumtöne verleihen Ihrer Küche eine edle, elegante Ausstrahlung.' },
      { img: '/images/products/01fzODmKRtoACKIqP_SNR4S.jpg', icon: '▦', title: 'Holzstruktur', text: 'Echtholz-Furnier mit natürlicher Maserung — jedes Element ist ein Unikat.' },
      { img: '/images/products/09OlMNCCasbZch57a_8y4Tn.jpg', icon: '▯', title: 'Mattierte Oberflächen', text: 'Samtmattierte Fronten fühlen sich warm an und sind gleichzeitig extrem widerstandsfähig.' },
      { img: '/images/products/0iGPVbebDtfvbxgis_cvQhd.jpg', icon: '◈', title: 'Zeitloses Design', text: 'Die Kombination aus Tradition und Moderne macht Roshedu zu einem Modell für Generationen.' },
    ],
  },
'brix': {
    name: 'Brix',
    desc: 'Brix — ein flexibles Küchenkonzept mit vier hochwertigen Frontmaterialien. Weisse Töne dominieren, kombiniert mit strukturierten Oberflächen für ein lebendiges, modernes Erscheinungsbild.',
    price: '',
    tagline: 'Flexibel. Weiss. Modern.',
    variants: [
      { name: 'Weiss PVC', color: '#f5f5f5', images: ['/images/products/0q9jxltANXHL3RmIm_2b9zJ.jpg', '/images/promo/models/avenue.jpg'] },
      { name: 'Acryl Weiss', color: '#fafafa', images: ['/images/promo/models/nicolle.jpg', '/images/promo/models/trento1.jpg'] },
      { name: 'Kunststoff Matt', color: '#ececec', images: ['/images/promo/models/mix22.jpg', '/images/promo/models/jazz.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'PVC / Kunststoff / Email / Acryl' },
      { label: 'Stil', value: 'Modern' },
      { label: 'Farbe', value: 'Weiss / Strukturiert' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
    ],
    featureImg: '/images/products/0q9jxltANXHL3RmIm_2b9zJ.jpg',
    videos: [
      '/videos/products/Брикс__92pct_smaller.mp4',
      null, null, null, null, null, null, null, null, null, null, null, null, null,
    ],
    features: [
      { img: '/images/products/0q9jxltANXHL3RmIm_2b9zJ.jpg', icon: '◇', title: 'Maximale Flexibilität', text: 'Vier Frontmaterialien in einer Küche kombinierbar — für ein einzigartiges, persönliches Küchendesign.' },
      { img: '/images/promo/models/avenue.jpg', icon: '▦', title: 'Helle Wirkung', text: 'Weisse Fronten in Hochglanz oder Matt lassen auch kleine Küchen optisch grösser und freundlicher wirken.' },
      { img: '/images/promo/models/nicolle.jpg', icon: '▯', title: 'Hitzebeständige Oberflächen', text: 'Kunststoff und PVC-Fronten sind hitze- und feuchtigkeitsbeständig — ideal für den täglichen Küchenalltag.' },
      { img: '/images/promo/models/mix22.jpg', icon: '◈', title: 'Schweizer Qualitätsstandard', text: 'Gefertigt nach höchsten Qualitätsstandards — langlebig, schadstoffarm und mit bis zu 20 Jahren Garantie.' },
    ],
  },
'sadbury': {
    name: 'Sadbury',
    desc: 'Sadbury verbindet zeitlose Eleganz mit praktischem Komfort. Die durchdachten Stauraumlösungen und robusten Materialien machen diese Küche zum idealen Mittelpunkt jedes Familienhaushalts.',
    price: '',
    tagline: 'Zeitlose Eleganz. Für die ganze Familie.',
    variants: [
      { name: 'Eiche Natur', color: '#b8a088', images: [
        '/images/products/05iefZ2FsYxLSnvb3_z5ytb.jpg',
        '/images/products/0xSU8DworoUoBaeLz_Njvgd.jpg',
        '/images/products/0ofRZONTSmNn3QwzH_3Sgne.jpg',
        '/images/products/0he2FsiD1HMO1uMYB_b0Cww.jpg',
        '/images/products/0fSyQsV6EYWwSlOeF_vW3jM.jpg',
        '/images/products/0E52BUKkHIltpq4ZJ_s7hZG.jpg',
        '/images/products/0Nx3zzLEestMoFO4f_ke8OU.jpg',
      ]},
    ],
    specs: [
      { label: 'Material', value: 'MDF / Massivholz' },
      { label: 'Stil', value: 'Klassisch-Elegant' },
      { label: 'Farbe', value: 'Eiche / Natur' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
    ],
    featureImg: '/images/products/05iefZ2FsYxLSnvb3_z5ytb.jpg',
    videos: [
      '/videos/products/Садбери__90pct_smaller.mp4',
      null, null, null, null, null, null, null, null, null, null, null, null, null,
    ],
    features: [
      { img: '/images/products/05iefZ2FsYxLSnvb3_z5ytb.jpg', icon: '◇', title: 'Zeitlose Holzoptik', text: 'Eiche und Naturtöne schaffen eine warme, einladende Atmosphäre, die niemals veraltet.' },
      { img: '/images/products/0xSU8DworoUoBaeLz_Njvgd.jpg', icon: '▦', title: 'Massive Griffe', text: 'Robuste Metallgriffe in verschiedenen Oberflächen — von Chrom bis Messing antik.' },
      { img: '/images/products/0ofRZONTSmNn3QwzH_3Sgne.jpg', icon: '▯', title: 'Familienfreundlich', text: 'Abgerundete Ecken und ausreichend Arbeitsfläche — Sicherheit und Komfort für alle.' },
      { img: '/images/products/0he2FsiD1HMO1uMYB_b0Cww.jpg', icon: '◈', title: 'Viel Stauraum', text: 'Durchdachte Innenausstattung mit Vollauszügen, Eckschränken und integrierten Beleuchtungssystemen.' },
    ],
  },
  'tavira': {
    name: 'Tavira',
    desc: 'Tavira ist eine Hommage an natürliche Materialien. PVC, Kunststoff und echter Furnier schaffen eine einzigartige Kombination aus Wärme und Modernität — für Küchen mit Charakter.',
    price: '',
    tagline: 'Natürlich. Warm. Einzigartig.',
    variants: [
      { name: 'Furnier Eiche', color: '#c8a878', images: [
        '/images/products/04BaGWDW2glkI84IO_Yjrjl.jpg',
        '/images/products/0j0BVzfwIHhDedTDv_jUGrA.jpg',
        '/images/products/0UhFGjNG9j9AcJBn6_Y661B.jpg',
        '/images/products/0mQw7XjFbMX4LaHKG_zklZ1.jpg',
        '/images/products/0sBMKFCloySpvrCx5_km4kP.jpg',
        '/images/products/0mPV8F0q9gt1RzDzy_GrYGR.jpg',
        '/images/products/0UgwSlwaRofYpxHAJ_7GubE.jpg',
        '/images/products/05B1JDuvw82r08PxD_eo68Z.jpg',
        '/images/products/0e4wLtNG12itlm5JA_2RBn1.jpg',
        '/images/products/0cuFB3sBEFhvyjfbz_DLzY9.jpg',
        '/images/products/0PChuGAD6zgU8oGA1_HYYk8.jpg',
        '/images/products/0jzAr9vqA5tdz58aG_BfLLV.jpg',
        '/images/products/0F4ftbpigC8OAlPaD_BKCJu.jpg',
        '/images/products/0AbpdiQ3j7Vkh7jU7_iloLe.jpg',
      ]},
    ],
    specs: [
      { label: 'Material', value: 'PVC / Kunststoff / Furnier' },
      { label: 'Stil', value: 'Modern / Natürlich' },
      { label: 'Holzarten', value: 'Eiche, Nuss, Buche' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
    ],
    featureImg: '/images/products/04BaGWDW2glkI84IO_Yjrjl.jpg',
    videos: [
      '/videos/products/Тавира__90pct_smaller.mp4',
      null, null, null, null, null, null, null, null, null, null, null, null, null,
    ],
    features: [
      { img: '/images/products/04BaGWDW2glkI84IO_Yjrjl.jpg', icon: '◇', title: 'Echter Furnier', text: 'Naturfurnier bringt die Wärme und Textur von echtem Holz in Ihre Küche — jedes Stück ein Unikat.' },
      { img: '/images/products/0j0BVzfwIHhDedTDv_jUGrA.jpg', icon: '▦', title: 'UV-Schutzlackierung', text: 'Spezieller Acryllack schützt den Furnier vor Ausbleichen und erhält die natürliche Holzfarbe dauerhaft.' },
      { img: '/images/products/0UhFGjNG9j9AcJBn6_Y661B.jpg', icon: '▯', title: 'Drei Materialien in einem', text: 'PVC, Kunststoff und Furnier kombinierbar — für eine individuelle Küche mit Kontrasten und Harmonie.' },
      { img: '/images/products/0mQw7XjFbMX4LaHKG_zklZ1.jpg', icon: '◈', title: 'Ökologisch zertifiziert', text: 'Alle verwendeten Materialien erfüllen internationale Umweltstandards — sicher für Ihre Familie.' },
    ],
  },
  'richmond': {
    name: 'Richmond',
    desc: 'Richmond vereint englische Eleganz mit zeitgemässem Schweizer Design. Weisse PVC- und Email-Fronten in klassisch-moderner Interpretation — sauber, hochwertig und langlebig.',
    price: '',
    tagline: 'Englische Eleganz. Schweizer Präzision.',
    variants: [
      { name: 'Reinweiss Matt', color: '#f8f8f8', images: [
        '/images/products/0LSLx8yb5i198HrrA_hY4iv.jpg',
        '/images/products/0G650jVmIEfWeXz4E_J3ooX.jpg',
        '/images/products/0XZTh7oEMuM9SShl8_2MsXh.jpg',
        '/images/products/0rvO3qDHq57zOREaB_to7yd.jpg',
        '/images/products/0THRwkPADiGErRSWc_lhBVD.jpg',
        '/images/products/0xi6GLPxjJR8rxAMW_HloKb.jpg',
        '/images/products/0pI0L14yi04UqwTE5_Q6TbA.jpg',
        '/images/products/0rqPgZSMVkLAmizIR_NY3Kr.jpg',
        '/images/products/0lBTwTVYqMBg06V5H_HxZG2.jpg',
        '/images/products/0sHmI3SmtPH7NXMae_j2BPF.jpg',
        '/images/products/0hWu2uhrnELOoJt5o_I3Div.jpg',
        '/images/products/0WDed54BhHY8C4IFE_lOoCu.jpg',
        '/images/products/06Lrt6kdsuPMAoQwg_Te95g.jpg',
        '/images/products/0FVPNUgWvRVDSF44T_TNz1r.jpg',
      ]},
    ],
    specs: [
      { label: 'Material', value: 'PVC-Folie / Email-Lack' },
      { label: 'Stil', value: 'Modern / Klassisch' },
      { label: 'Farbe', value: 'Weiss / Perlweiss' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
    ],
    featureImg: '/images/products/0LSLx8yb5i198HrrA_hY4iv.jpg',
    videos: [
      '/videos/products/Ричмонд__91pct_smaller.mp4',
      null, null, null, null, null, null, null, null, null, null, null, null, null,
    ],
    features: [
      { img: '/images/products/0LSLx8yb5i198HrrA_hY4iv.jpg', icon: '◇', title: 'Klassisch und modern', text: 'Richmond verbindet klassische Proportionen mit modernen Materialien — ein Design, das nie veraltet.' },
      { img: '/images/products/0G650jVmIEfWeXz4E_J3ooX.jpg', icon: '▦', title: 'Email-Lackierung', text: 'Mehrschichtige Emaille-Beschichtung auf MDF: kratzfest, pflegeleicht und über Jahre hinweg wunderschön.' },
      { img: '/images/products/0XZTh7oEMuM9SShl8_2MsXh.jpg', icon: '▯', title: 'Weiss in all seinen Nuancen', text: 'Von reinem Weiss bis zartem Perlweiss — Richmond bietet Ihnen die perfekte Weissnuance für Ihren Raum.' },
      { img: '/images/products/0rvO3qDHq57zOREaB_to7yd.jpg', icon: '◈', title: 'Schweizer Präzision', text: 'Massgenau gefertigt, millimetergenau montiert — für eine Küche, die einfach passt.' },
    ],
  },
}

const companyFeatures = [
  {
    img: '/images/promo/models/mix22.jpg',
    title: 'Design auf Ihren Wunsch',
    teaser: 'Individuelle Projekte von erfahrenen Designern',
    text: 'Unsere erfahrenen Spezialisten entwickeln ein persönliches Projekt genau nach Ihrem Grundriss und Ihren Wünschen — von der ersten Skizze bis zur Montage. Jede Küche ist ein Unikat.',
  },
  {
    img: '/images/portfolio/iblock/b4d/b4d7357dafd42740eab4424e3f3c11b9/c1a25fddb1fdd725bdc47c246a3a7772.jpg',
    title: 'Premiummaterialien & Vielfalt',
    teaser: 'Hunderte Farben, Texturen und Oberflächen',
    text: 'Lacke, Furniere, Emaille, HPL, Thermoplast — wir arbeiten nur mit zertifizierten Materialien führender europäischer Hersteller. Über 200 Dekore für jeden Einrichtungsstil.',
  },
  {
    img: '/images/portfolio/iblock/ea0/ea0c63c706f733e5cde301aa57709904/4f85239bf0535eef5857bdcfa0e6309e.jpg',
    title: 'Beschläge von Blum & Hettich',
    teaser: 'Über 80 000 Öffnungszyklen — geprüft',
    text: 'Wir verbauen ausschliesslich verstärkte Beschläge von Blum und Hettich — mit integrierter Dämpfung, leisem Schliessen und einer nachgewiesenen Lebensdauer von über 80 000 Zyklen.',
  },
  {
    img: '/images/portfolio/iblock/575/575716e4ba639475feecf9c9eef50fa4/3709a12eb736f64edd961656b6c4239f.jpg',
    title: 'Garantie bis 20 Jahre & Service',
    teaser: 'Sorgenfreie Nutzung — wir sind für Sie da',
    text: 'Wir stehen hinter unserer Qualität: bis zu 20 Jahre Herstellergarantie auf alle Möbel. Unser Serviceteam in der Schweiz ist auch nach der Garantiezeit für Sie erreichbar.',
  },
]

export default function ProductPageClient({ category, slug, catName }: { category: string; slug: string; catName: string }) {
  const p = products[slug]
  const [variant, setVariant] = useState(0)
  const [formOpen, setFormOpen] = useState(false)
  const [openCard, setOpenCard] = useState<number | null>(null)
  const [openFeature, setOpenFeature] = useState<number | null>(null)

  const shuffled = [...similarProducts].sort(() => Math.random() - 0.5).slice(0, 8)

  if (!p) {
    return (
      <>
        <Breadcrumbs items={[{ label: 'Katalog', href: '/katalog' }, { label: catName, href: `/katalog/${category}` }, { label: slug }]} />
        <section className="uk-section"><div className="uk-container"><h1>Produkt nicht gefunden</h1></div></section>
      </>
    )
  }

  const v = p.variants[variant]

  return (
    <>
      <Breadcrumbs items={[{ label: 'Katalog', href: '/katalog' }, { label: catName, href: `/katalog/${category}` }, { label: p.name }]} />

      <section className="uk-section" style={{ paddingBottom: '2rem' }}>
        <div className="uk-container">
          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            {/* Gallery */}
            <div style={{ width: '55%', minWidth: 300 }}>
              <ProductGallery images={v.images} videos={p.videos || []} name={`${p.name} ${v.name}`} />
            </div>

            {/* Info */}
            <div style={{ width: '40%', minWidth: 300 }}>
              <h1 style={{ fontFamily: 'var(--sb-reg)', fontSize: '2.2rem', marginBottom: '0.3rem' }}>{p.name}</h1>
              <p style={{ fontSize: '0.9rem', color: 'var(--primary-color)', marginBottom: '1.2rem' }}>{v.name}</p>
              <p className="uk-text-muted" style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>{p.desc}</p>

              {/* Color variants */}
              {p.variants.length > 1 && (
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted-color)', marginBottom: '0.6rem' }}>
                  Dekor — {p.variants.length} Varianten
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {p.variants.map((va, i) => (
                    <button
                      key={va.name}
                      onClick={() => setVariant(i)}
                      style={{
                        padding: '0.35rem 0.9rem 0.35rem 0.5rem',
                        borderRadius: '2rem',
                        fontSize: '0.78rem',
                        cursor: 'pointer',
                        border: i === variant ? '2px solid var(--primary-color)' : '1px solid var(--border-color)',
                        background: i === variant ? 'rgba(227,30,36,0.06)' : 'white',
                        color: i === variant ? 'var(--primary-color)' : 'var(--main-color)',
                        fontWeight: i === variant ? 500 : 400,
                        transition: 'all 0.15s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                      }}
                    >
                      <span style={{
                        display: 'inline-block',
                        width: 18, height: 18, borderRadius: '50%',
                        background: va.color,
                        border: '1px solid rgba(0,0,0,0.12)',
                        flexShrink: 0,
                      }} />
                      {va.name}
                    </button>
                  ))}
                </div>
              </div>
              )}

              <button onClick={() => setFormOpen(true)} className="uk-button uk-button-primary" style={{ width: '100%', marginBottom: '2rem' }}>
                Projekt anfragen
              </button>

              {/* Specs */}
              <div style={{ background: 'var(--light-color)', borderRadius: '1rem', padding: '1.5rem' }}>
                <h3 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.1rem', marginBottom: '1rem' }}>Technische Daten</h3>
                {p.specs.map((s) => (
                  <div key={s.label} style={{
                    display: 'flex', justifyContent: 'space-between',
                    padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)',
                    fontSize: '0.9rem',
                  }}>
                    <span style={{ color: 'var(--muted-color)' }}>{s.label}</span>
                    <span>{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Küchen «Milaro» — das ist: */}
      <section style={{ background: '#f7f6f4', padding: '6rem 0' }}>
        <div className="uk-container" style={{ maxWidth: 1280 }}>

          {/* Header */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            alignItems: 'flex-end',
            marginBottom: '3.5rem',
          }}>
            <div style={{ flex: '1 1 420px' }}>
              <p style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--primary-color)',
                marginBottom: '0.8rem',
              }}>
                Über uns
              </p>
              <h2 style={{
                fontFamily: 'var(--bricolage), sans-serif',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                color: 'var(--main-color)',
                margin: 0,
              }}>
                Küchen «Milaro» —{' '}
                <span style={{ color: 'var(--primary-color)' }}>das ist:</span>
              </h2>
            </div>
            <div style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1.2rem' }}>
              <p style={{
                color: 'var(--muted-color)',
                lineHeight: 1.75,
                fontSize: '0.95rem',
                margin: 0,
              }}>
                Hochwertige, zuverlässige und komfortable Möbel mit bis zu 20 Jahren Garantie — für ein sorgenfreies Leben mit Genuss.
              </p>
              <button
                onClick={() => setFormOpen(true)}
                className="uk-button uk-button-primary"
                style={{ fontSize: '0.9rem', padding: '0.75rem 2.2rem' }}
              >
                Projekt anfragen
              </button>
            </div>
          </div>

          {/* 4 Karten — Bild + Text + Click-Overlay */}
          <div className="pd-grid-4" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1rem',
          }}>
            {companyFeatures.map((f, i) => {
              const active = openFeature === i
              return (
                <div
                  key={i}
                  className="pd-card-feature"
                  style={{
                    position: 'relative',
                    height: 520,
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    cursor: 'pointer',
                  }}
                  onClick={() => setOpenFeature(active ? null : i)}
                >
                  {/* Foto */}
                  <img
                    src={f.img}
                    alt={f.title}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.6s ease',
                      transform: active ? 'scale(1.06)' : 'scale(1)',
                    }}
                  />

                  {/* Basis-Overlay (immer sichtbar) */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)',
                    transition: 'opacity 0.35s',
                    opacity: active ? 0 : 1,
                  }} />

                  {/* Standard-Info (Nummer + Titel) */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '2rem 1.8rem 2.2rem',
                    transition: 'opacity 0.25s, transform 0.3s',
                    opacity: active ? 0 : 1,
                    transform: active ? 'translateY(12px)' : 'translateY(0)',
                    pointerEvents: 'none',
                  }}>
                    <div style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--primary-color)',
                      marginBottom: '0.55rem',
                    }}>
                      0{i + 1}
                    </div>
                    <h3 style={{
                      fontFamily: 'var(--sb-reg)',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: '#fff',
                      margin: '0 0 0.5rem',
                      lineHeight: 1.2,
                    }}>
                      {f.title}
                    </h3>
                    <p style={{
                      color: 'rgba(255,255,255,0.65)',
                      fontSize: '0.82rem',
                      margin: 0,
                      lineHeight: 1.5,
                    }}>
                      {f.teaser}
                    </p>
                  </div>

                  {/* Detail-Overlay (erscheint bei Klick) */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(15,15,15,0.93)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '2.2rem 1.8rem',
                    transition: 'opacity 0.3s, transform 0.35s',
                    opacity: active ? 1 : 0,
                    transform: active ? 'translateY(0)' : 'translateY(20px)',
                    pointerEvents: active ? 'auto' : 'none',
                  }}>
                    <div style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--primary-color)',
                      marginBottom: '0.7rem',
                    }}>
                      0{i + 1}
                    </div>
                    <h3 style={{
                      fontFamily: 'var(--sb-reg)',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: '#fff',
                      margin: '0 0 1rem',
                      lineHeight: 1.2,
                    }}>
                      {f.title}
                    </h3>
                    <p style={{
                      color: 'rgba(255,255,255,0.75)',
                      fontSize: '0.88rem',
                      lineHeight: 1.7,
                      margin: '0 0 1.6rem',
                    }}>
                      {f.text}
                    </p>
                    <button
                      onClick={(e) => { e.stopPropagation(); setFormOpen(true) }}
                      className="uk-button uk-button-primary"
                      style={{ fontSize: '0.82rem', padding: '0.6rem 1.5rem', alignSelf: 'flex-start' }}
                    >
                      Projekt anfragen
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* Duett aus Design und Praktikabilität — produktspezifisch */}
      <section style={{ background: '#0f0f0f', padding: '6rem 0 5rem' }}>
        <div className="uk-container" style={{ maxWidth: 1280 }}>

          {/* Heading row */}
          <div style={{
            display: 'flex',
            gap: '3rem',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            marginBottom: '4rem',
          }}>
            <h2 style={{
              fontFamily: 'var(--bricolage), sans-serif',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              fontWeight: 700,
              lineHeight: 1.08,
              color: '#fff',
              margin: 0,
              flex: '1 1 400px',
            }}>
              {p.tagline}
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.8,
              fontSize: '1rem',
              maxWidth: 380,
              margin: 0,
              flex: '1 1 300px',
            }}>
              {p.desc}
            </p>
          </div>

          {/* 2×2 grid — produktspezifische Bildkarten */}
          <div className="pd-grid-2" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.2rem',
          }}>
            {p.features.map((f, i) => (
              <div
                key={i}
                className="pd-card-grid2"
                style={{
                  position: 'relative',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  height: 460,
                  cursor: 'pointer',
                }}
                onClick={() => setFormOpen(true)}
              >
                {/* Foto */}
                <img
                  src={f.img}
                  alt={f.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />

                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.25) 50%, transparent 100%)',
                }} />

                {/* Text am unteren Bildrand */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '2rem 2rem 2.2rem',
                }}>
                  <div style={{
                    display: 'inline-block',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--primary-color)',
                    marginBottom: '0.6rem',
                  }}>
                    0{i + 1}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--sb-reg)',
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: '#fff',
                    margin: '0 0 0.7rem',
                    lineHeight: 1.2,
                  }}>
                    {f.title}
                  </h3>
                  <p style={{
                    color: 'rgba(255,255,255,0.72)',
                    fontSize: '0.88rem',
                    lineHeight: 1.65,
                    margin: 0,
                    maxWidth: 340,
                  }}>
                    {f.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA darunter */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button
              onClick={() => setFormOpen(true)}
              className="uk-button uk-button-primary"
              style={{ fontSize: '1rem', padding: '0.9rem 3rem' }}
            >
              Ich möchte diese Küche!
            </button>
          </div>

        </div>
      </section>

      {/* Realisierungen (Produkte) */}
      <section className="uk-section" style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
        <div className="uk-container">
          <h2 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.6rem', textAlign: 'center', marginBottom: '0.5rem' }}>
            Varianten der Realisierung
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--muted-color)', marginBottom: '2.5rem', fontSize: '0.9rem' }}>
            So setzen unsere Kunden {p.name} in ihren Projekten um
          </p>

          <div className="cat-grid">
            {shuffled.map((proj) => (
              <Link
                key={proj.slug}
                href={`/katalog/${proj.cat}/${proj.slug}`}
                className="cat-card"
              >
                <div className="cat-card-wrap" style={{ position: 'relative', overflow: 'hidden', height: '260px', background: '#e8e8e8', borderRadius: '0.85rem 0.85rem 0 0' }}>
                  <img src={proj.img} alt={proj.name} className="cat-card-img" />
                  <span className="cat-card-badge">{proj.label}</span>
                  <div className="cat-card-overlay" />
                </div>
                <div className="cat-card-title">{proj.name}</div>
                <div className="cat-card-sub">Massgefertigt · Schweiz</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProductOrderForm productName={p.name} />

      {formOpen && (
        <div className="uk-modal open" onClick={() => setFormOpen(false)}>
          <div className="uk-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button className="uk-modal-close" onClick={() => setFormOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            <h3 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.4rem', marginBottom: '0.3rem', textAlign: 'center' }}>
              Projekt anfragen — {p.name} {v.name}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted-color)', marginBottom: '1.5rem', textAlign: 'center', lineHeight: 1.5 }}>
              Füllen Sie das Formular aus und erhalten Sie einen individuellen<br />
              Projektentwurf für {p.name} von Ihrem persönlichen Designer.
            </p>
            <LeadForm onClose={() => setFormOpen(false)} />
          </div>
        </div>
      )}
      <style>{`
        @media (max-width: 768px) {
          .pd-card-feature { height: 340px !important; }
          .pd-card-grid2 { height: 360px !important; }
        }
        @media (max-width: 480px) {
          .pd-card-feature { height: 260px !important; }
          .pd-card-grid2 { height: 280px !important; }
        }
      `}</style>
    </>
  )
}
