'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import ProductGallery from '@/components/catalog/ProductGallery'
import LeadForm from '@/components/forms/LeadForm'
import ProductOrderForm from '@/components/catalog/ProductOrderForm'

type Variant = { name: string; color: string; images: string[] }
type Feature = { img: string; icon: string; title: string; text: string }
type Product = {
  name: string; desc: string; price: string; tagline: string;
  variants: Variant[]
  specs: { label: string; value: string }[]
  features: Feature[]
  featureImg: string
}

const allPortfolio = [
  { slug: 'komplettausstattung-wohnung', title: 'Komplette Wohnungsausstattung', img: 'https://www.marya.ru/promo/home3/img/models/trento1.jpg', models: 'Schrank Jazz, Küche Trento', price: 'ab CHF 19' },
  { slug: 'kueche-wohnpark-april', title: 'Küche für Wohnpark April', img: 'https://www.marya.ru/promo/home3/img/models/jazz.jpg', models: 'Küche Jazz', price: 'ab CHF 41' },
  { slug: 'minimalistische-barrierefreie-kueche', title: 'Funktionale Küche mit zwei Kühlschränken', img: 'https://www.marya.ru/promo/home3/img/models/mix22.jpg', models: 'Küche Jazz Intuit', price: 'ab CHF 41' },
  { slug: 'einbauschrank-schlafzimmer-cashemire', title: 'Einbauschrank in sanftem Kaschmir-Ton', img: 'https://www.marya.ru/promo/home3/img/models/mix2.jpg', models: 'Schrank Mix 22', price: 'ab CHF 12' },
  { slug: 'kueche-wohnraum-minimalismus', title: 'Küche-Wohnzimmer mit Insel & Vitrine', img: 'https://www.marya.ru/promo/home3/img/models/avenue.jpg', models: 'Küche Jazz Intuit', price: 'ab CHF 41' },
  { slug: 'kueche-amerikanische-klassik', title: 'Amerikanische Klassik mit Kochinsel', img: 'https://www.marya.ru/promo/home3/img/models/nicolle.jpg', models: 'Küche Jazz Allure', price: 'ab CHF 48' },
  { slug: 'minzgruener-schrank', title: 'Minzgrüner Schrank', img: 'https://www.marya.ru/promo/home3/img/models/jazz3.jpg', models: 'Schrank Integrato', price: 'ab CHF 20' },
  { slug: 'bueroschrank-minimalismus', title: 'Minimalistischer Büroschrank', img: 'https://www.marya.ru/promo/home3/img/models/jazz3.jpg', models: 'Schrank Tokio', price: 'ab CHF 11' },
  { slug: 'kueche-landhausstil', title: 'Küche im Landhausstil', img: 'https://www.marya.ru/promo/home3/img/models/trento1.jpg', models: 'Küche Trento Email', price: 'ab CHF 14' },
]

const products: Record<string, Product> = {
  'mix-22': {
    name: 'Mix 22',
    desc: 'Mix 22 ist ein vielseitiges Möbelkonzept. Lackierte und furnierte Fronten lassen sich frei kombinieren — für einen ausdrucksstarken Look mit Charakter. Vielfältige Farben von dezent bis markant.',
    price: 'ab CHF 11',
    variants: [
      { name: 'Weiss Premium', color: '#f5f5f0', images: ['https://upload-bxp-mfm.marya.ru/iblock/a20/a20b71f90ddcb42f9b71142d62ec6d07/1c736d98b62f694f8227ff4348dc5618.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/017/017bfd2453729cd9385accad590a69bb/183013f45e504e799f868ebcbf3930a9.jpg'] },
      { name: 'Lehmgrau', color: '#b8b0a5', images: ['https://www.marya.ru/promo/home3/img/models/avenue.jpg', 'https://www.marya.ru/promo/home3/img/models/mix22.jpg'] },
      { name: 'Diamant Grau', color: '#9e9e9e', images: ['https://www.marya.ru/promo/home3/img/models/jazz.jpg', 'https://www.marya.ru/promo/home3/img/models/avenue.jpg'] },
      { name: 'Gelber Sand', color: '#d4c5a0', images: ['https://www.marya.ru/promo/home3/img/models/nicolle.jpg', 'https://www.marya.ru/promo/home3/img/models/mix22.jpg'] },
      { name: 'Salbeigrün', color: '#9caf88', images: ['https://www.marya.ru/promo/home3/img/models/trento1.jpg', 'https://www.marya.ru/promo/home3/img/models/mix22.jpg'] },
      { name: 'Kaschmir', color: '#d4c4b7', images: ['https://www.marya.ru/promo/home3/img/models/mix2.jpg', 'https://www.marya.ru/promo/home3/img/models/avenue.jpg'] },
      { name: 'Staubgrau', color: '#a09990', images: ['https://www.marya.ru/promo/home3/img/models/jazz3.jpg', 'https://www.marya.ru/promo/home3/img/models/mix22.jpg'] },
      { name: 'Baltik Blau', color: '#5b7c99', images: ['https://www.marya.ru/promo/home3/img/models/jazz.jpg', 'https://www.marya.ru/promo/home3/img/models/mix22.jpg'] },
      { name: 'Beton Chicago', color: '#6b6b6b', images: ['https://www.marya.ru/promo/home3/img/models/avenue.jpg', 'https://www.marya.ru/promo/home3/img/models/jazz3.jpg'] },
      { name: 'Eiche Natur', color: '#b8956e', images: ['https://www.marya.ru/promo/home3/img/models/mix22.jpg', 'https://www.marya.ru/promo/home3/img/models/trento1.jpg'] },
      { name: 'Eiche Aragon', color: '#8c6e4a', images: ['https://www.marya.ru/promo/home3/img/models/nicolle.jpg', 'https://www.marya.ru/promo/home3/img/models/jazz3.jpg'] },
      { name: 'Eiche Vicenza Grau', color: '#9e8e80', images: ['https://www.marya.ru/promo/home3/img/models/jazz.jpg', 'https://www.marya.ru/promo/home3/img/models/nicolle.jpg'] },
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
    featureImg: 'https://upload-bxp-mfm.marya.ru/iblock/a20/a20b71f90ddcb42f9b71142d62ec6d07/1c736d98b62f694f8227ff4348dc5618.jpg',
    features: [
      {
        img: 'https://upload-bxp-mfm.marya.ru/iblock/a20/a20b71f90ddcb42f9b71142d62ec6d07/1c736d98b62f694f8227ff4348dc5618.jpg',
        icon: '◇',
        title: 'Sicher für Kinder und Allergiker',
        text: 'EGGER LHDF-Platten Emissionsklasse E1 — internationaler Standard für Wohnräume. Keine schädlichen Dämpfe oder Gerüche, auch bei starker Erhitzung.',
      },
      {
        img: 'https://upload-bxp-mfm.marya.ru/iblock/017/017bfd2453729cd9385accad590a69bb/183013f45e504e799f868ebcbf3930a9.jpg',
        icon: '▦',
        title: 'Kratz- und Chipfest',
        text: 'Beidseitig verstärkte Beschichtung kaschiert Gebrauchsspuren zuverlässig. Die Oberfläche bleibt auch nach 5 Jahren intensiver Nutzung makellos.',
      },
      {
        img: 'https://upload-bxp-mfm.marya.ru/iblock/0df/0df713b98a0e3917a19ee5fbb988f8d6/22d0dec884b29828847f9cdda881f2b2.jpg',
        icon: '▯',
        title: 'Hermetischer Feuchtigkeitsschutz',
        text: 'Nahtlose Kantenversiegelungstechnologie verhindert das Eindringen von Wasser — besonders wichtig im Bereich der Spüle und Arbeitsplatte.',
      },
      {
        img: 'https://upload-bxp-mfm.marya.ru/iblock/7e1/7e1038153aa8edb3cecd9c121cfbfcdf/ea0433a6dfe41075dbca9ec15f8a42d8.jpg',
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
      { name: 'Grauweiss RAL 9002', color: '#e8e4df', images: ['https://www.marya.ru/promo/home3/img/models/trento1.jpg', 'https://www.marya.ru/promo/home3/img/models/nicolle.jpg'] },
      { name: 'Creme', color: '#f5f0e0', images: ['https://www.marya.ru/promo/home3/img/models/nicolle.jpg', 'https://www.marya.ru/promo/home3/img/models/trento1.jpg'] },
      { name: 'Hellgrau', color: '#c8c8c8', images: ['https://www.marya.ru/promo/home3/img/models/avenue.jpg', 'https://www.marya.ru/promo/home3/img/models/jazz.jpg'] },
      { name: 'Dunkelgrau', color: '#5a5a5a', images: ['https://www.marya.ru/promo/home3/img/models/jazz.jpg', 'https://www.marya.ru/promo/home3/img/models/avenue.jpg'] },
      { name: 'Schwarz', color: '#1a1a1a', images: ['https://www.marya.ru/promo/home3/img/models/mix22.jpg', 'https://www.marya.ru/promo/home3/img/models/jazz3.jpg'] },
      { name: 'Olivgrün', color: '#6b6e4a', images: ['https://www.marya.ru/promo/home3/img/models/trento1.jpg', 'https://www.marya.ru/promo/home3/img/models/nicolle.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'MDF mit Email-Beschichtung' },
      { label: 'Farben', value: 'RAL Classic + NCS' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Frontstärke', value: '19 mm' },
      { label: 'Profil', value: 'Klassisch gerahmt' },
    ],
    tagline: 'Trends und Traditionen',
    featureImg: 'https://www.marya.ru/promo/home3/img/models/trento1.jpg',
    features: [
      {
        img: 'https://www.marya.ru/promo/home3/img/models/trento1.jpg',
        icon: '◇',
        title: 'Mehrschicht-Emaille',
        text: 'Mehrschichtige Lackierung verleiht dem Ton unglaubliche Tiefe und Sattheit. Fleckenbeständig, kratzfest, leicht zu reinigen — bewahrt ursprüngliche Schönheit über Jahre.',
      },
      {
        img: 'https://upload-bxp-mfm.marya.ru/iblock/b4d/b4d7357dafd42740eab4424e3f3c11b9/c1a25fddb1fdd725bdc47c246a3a7772.jpg',
        icon: '▦',
        title: 'Beidseitige Frontenlackierung',
        text: 'Fronten werden von beiden Seiten lackiert — für maximale Ästhetik und langfristige Stabilität. Das Ergebnis: makellose Oberflächen aus jedem Blickwinkel.',
      },
      {
        img: 'https://upload-bxp-mfm.marya.ru/iblock/ca8/ca80aa9bc342ab81aa618e0f4ad5f052/d009b242f5fc35f0b1bfdd0e46e35a24.jpg',
        icon: '▯',
        title: 'Wahl der Haptik',
        text: 'Matt, samtiges Ultra-Matt, zartes Satin — wählen Sie Ihre Lieblingstextur und schaffen Sie eine individuelle Wohlfühlatmosphäre in Ihrer Küche.',
      },
      {
        img: 'https://upload-bxp-mfm.marya.ru/iblock/382/382f0bc27e76518bc8daff12eb013262/11b387847acbc5fa7a3fa61ef00847d2.jpg',
        icon: '◈',
        title: 'Lokale Restaurierung',
        text: 'Beschädigte Stelle selbst reparieren — ohne Fronttausch, ohne großen Aufwand. Ersparnis von bis zu 70 % gegenüber dem Komplettaustausch.',
      },
    ],
  },
  'avenue': {
    name: 'Avenue',
    desc: 'Avenue — Geometrie und Ästhetik in einem. Minimalistisches Design mit charakteristischen horizontalen Linien. Perfekt für Lofts und moderne Wohnungen mit urbanem Flair.',
    price: 'ab CHF 13',
    variants: [
      { name: 'Weiss Matt', color: '#f0f0ec', images: ['https://upload-bxp-mfm.marya.ru/iblock/0b5/0b55dcea3b6750bfaba48f63270e065f/fd4a30d8d1bc583736163fd34f7a1259.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/fa7/fa713025c9743cf07108c2f9b39dba1c/157b7f95f6a486942125610a66b7a16d.jpg'] },
      { name: 'Grau Hochglanz', color: '#808080', images: ['https://www.marya.ru/promo/home3/img/models/jazz.jpg', 'https://www.marya.ru/promo/home3/img/models/avenue.jpg'] },
      { name: 'Schwarz Matt', color: '#1a1a1a', images: ['https://www.marya.ru/promo/home3/img/models/mix22.jpg', 'https://www.marya.ru/promo/home3/img/models/jazz3.jpg'] },
      { name: 'Sandbeige', color: '#dcc8a0', images: ['https://www.marya.ru/promo/home3/img/models/nicolle.jpg', 'https://www.marya.ru/promo/home3/img/models/trento1.jpg'] },
      { name: 'Beton-Optik', color: '#b0a89c', images: ['https://www.marya.ru/promo/home3/img/models/avenue.jpg', 'https://www.marya.ru/promo/home3/img/models/mix22.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'MDF / HPL' },
      { label: 'Farben', value: 'Matt + Hochglanz' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'Griffleiste integriert' },
    ],
    tagline: 'Geometrie und Ästhetik',
    featureImg: 'https://upload-bxp-mfm.marya.ru/iblock/0b5/0b55dcea3b6750bfaba48f63270e065f/fd4a30d8d1bc583736163fd34f7a1259.jpg',
    features: [
      {
        img: 'https://upload-bxp-mfm.marya.ru/iblock/0b5/0b55dcea3b6750bfaba48f63270e065f/fd4a30d8d1bc583736163fd34f7a1259.jpg',
        icon: '◇',
        title: 'Klassik in moderner Interpretation',
        text: 'Rahmenfront aus Esche mit verdecktem Griff — klassische Materialien in zeitloser Ausführung. Keine aufgesetzten Beschläge, nur reine Linien und expressive Holztextur.',
      },
      {
        img: 'https://upload-bxp-mfm.marya.ru/iblock/fa7/fa713025c9743cf07108c2f9b39dba1c/157b7f95f6a486942125610a66b7a16d.jpg',
        icon: '▦',
        title: 'Esche enttäuscht nie',
        text: 'Das dichte Massivholz der Avenue widersteht Belastungen und Feuchtigkeit zuverlässig. Unempfindlich gegenüber Zeit und intensivem Alltagsgebrauch.',
      },
      {
        img: 'https://upload-bxp-mfm.marya.ru/iblock/624/624ce02de9812a5c9c3e7436320d7722/af221920d9a4542146774beef7da8a49.jpg',
        icon: '▯',
        title: 'Italienische Lacke',
        text: 'Renner-Beschichtung (Italien) mit spezieller Auftragstechnologie garantiert makellose Glätte, Farbtiefe und höchste Abriebfestigkeit. Langlebige Schönheit für jeden Tag.',
      },
      {
        img: 'https://upload-bxp-mfm.marya.ru/iblock/5b4/5b4ca09ff61233b7d2b35af9123c0bb6/cfe578f9ceb8b88261d31e465d7f7f77.jpg',
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
      { name: 'Creme', color: '#f5f0e0', images: ['https://www.marya.ru/promo/home3/img/models/nicolle.jpg', 'https://www.marya.ru/promo/home3/img/models/trento1.jpg'] },
      { name: 'Weiss', color: '#fafafa', images: ['https://www.marya.ru/promo/home3/img/models/avenue.jpg', 'https://www.marya.ru/promo/home3/img/models/nicolle.jpg'] },
      { name: 'Grau', color: '#999999', images: ['https://www.marya.ru/promo/home3/img/models/jazz.jpg', 'https://www.marya.ru/promo/home3/img/models/mix22.jpg'] },
      { name: 'Beige', color: '#dcc8a0', images: ['https://www.marya.ru/promo/home3/img/models/nicolle.jpg', 'https://www.marya.ru/promo/home3/img/models/avenue.jpg'] },
      { name: 'Hellblau', color: '#a3c4dc', images: ['https://www.marya.ru/promo/home3/img/models/trento1.jpg', 'https://www.marya.ru/promo/home3/img/models/jazz.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'Thermoplast-Folie auf MDF' },
      { label: 'Dekore', value: 'Über 150 Varianten' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Oberfläche', value: 'Strukturiert / Matt' },
    ],
    tagline: 'Moderner Komfort im klassischen Gewand',
    featureImg: 'https://www.marya.ru/promo/home3/img/models/nicolle.jpg',
    features: [
      {
        img: 'https://www.marya.ru/promo/home3/img/models/nicolle.jpg',
        icon: '◇',
        title: 'Für jeden Einrichtungsstil',
        text: 'Vom skandinavischen Minimalismus bis zur warmen Klassik — die breite Frontpalette der Nicolle Thermoplast macht jeden Wohntraum möglich.',
      },
      {
        img: 'https://upload-bxp-mfm.marya.ru/iblock/110/1103fec976fcd4e90702019cb61ff80d/3cde0cb95439c7bb8ed1072352f2a67e.jpg',
        icon: '▦',
        title: 'Einheitliches Ensemble',
        text: 'Sockel, Dunstabzugshaube, Tischkanten — alles in der Frontfarbe. Ein stimmiges, harmonisches Küchenensemble aus einem Guss.',
      },
      {
        img: 'https://upload-bxp-mfm.marya.ru/iblock/ca8/ca80aa9bc342ab81aa618e0f4ad5f052/d009b242f5fc35f0b1bfdd0e46e35a24.jpg',
        icon: '▯',
        title: 'Hitzebeständig',
        text: 'Die Thermoplast-Beschichtung schmilzt nicht durch Ölspritzer oder Heißluft und bewahrt dauerhaft ihren ästhetischen Wert.',
      },
      {
        img: 'https://upload-bxp-mfm.marya.ru/iblock/575/575716e4ba639475feecf9c9eef50fa4/3709a12eb736f64edd961656b6c4239f.jpg',
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
      { name: 'Weiss Matt', color: '#f0f0ec', images: ['https://upload-bxp-mfm.marya.ru/iblock/76b/76b64859abed9efa69230166959d42ab/7d40cbf53b48c8b595bb6b79f0dd469c.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/82e/82e0c94f931a330672d42dbaeb081fff/957902645e29383dd443b08eb1003514.jpg'] },
      { name: 'Grau Beton', color: '#9e9a95', images: ['https://www.marya.ru/promo/home3/img/models/jazz3.jpg', 'https://www.marya.ru/promo/home3/img/models/jazz.jpg'] },
      { name: 'Schwarz', color: '#1a1a1a', images: ['https://www.marya.ru/promo/home3/img/models/mix22.jpg', 'https://www.marya.ru/promo/home3/img/models/avenue.jpg'] },
      { name: 'Dunkelgrün', color: '#3d5a3c', images: ['https://www.marya.ru/promo/home3/img/models/nicolle.jpg', 'https://www.marya.ru/promo/home3/img/models/trento1.jpg'] },
      { name: 'Navy', color: '#2c3e5a', images: ['https://www.marya.ru/promo/home3/img/models/jazz.jpg', 'https://www.marya.ru/promo/home3/img/models/mix22.jpg'] },
      { name: 'Sand', color: '#d4c5a0', images: ['https://www.marya.ru/promo/home3/img/models/avenue.jpg', 'https://www.marya.ru/promo/home3/img/models/nicolle.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'MDF / HPL / Email' },
      { label: 'Dekore', value: 'Über 200 Varianten' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Frontstärke', value: '19 mm' },
      { label: 'Griffsystem', value: 'Push-to-Open / Griffleiste' },
    ],
    tagline: 'Musikalische Rhythmen im Küchenraum',
    featureImg: 'https://upload-bxp-mfm.marya.ru/iblock/76b/76b64859abed9efa69230166959d42ab/7d40cbf53b48c8b595bb6b79f0dd469c.jpg',
    features: [
      {
        img: 'https://upload-bxp-mfm.marya.ru/iblock/76b/76b64859abed9efa69230166959d42ab/7d40cbf53b48c8b595bb6b79f0dd469c.jpg',
        icon: '◇',
        title: 'Gebogene Fronten für kleine Räume',
        text: 'Abgerundete Ecken sparen Platz und lassen die Küche optisch großzügiger wirken. Ideal für kompakte Grundrisse ohne Abstriche beim Stil.',
      },
      {
        img: 'https://upload-bxp-mfm.marya.ru/iblock/82e/82e0c94f931a330672d42dbaeb081fff/957902645e29383dd443b08eb1003514.jpg',
        icon: '▦',
        title: 'Italienische Strapazierfähigkeit',
        text: 'Renner-Emaille aus Italien widersteht Kratzern und Abrieb — nachweislich 67 % langlebiger als marktübliche Vergleichsprodukte.',
      },
      {
        img: 'https://upload-bxp-mfm.marya.ru/iblock/237/2378686ea34d3907ed437325a4bfaa10/45d8be781e313f4d21761d23507ff183.jpg',
        icon: '▯',
        title: 'Leise Dämpfer',
        text: 'Hochwertige Beschläge schließen Schubladen und Türen geräuschlos — kein Lärm, kein Knallen, auch spät abends.',
      },
      {
        img: 'https://upload-bxp-mfm.marya.ru/iblock/797/7978a0f3a7cc4e6c37ea571b12939f6e/be43cbe63f572c6bc58d83ca29748817.jpg',
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
      { name: 'Weiss Matt', color: '#f0f0ec', images: ['https://www.marya.ru/promo/home3/img/models/jazz.jpg', 'https://www.marya.ru/promo/home3/img/models/avenue.jpg'] },
      { name: 'Grau', color: '#999999', images: ['https://www.marya.ru/promo/home3/img/models/avenue.jpg', 'https://www.marya.ru/promo/home3/img/models/jazz.jpg'] },
      { name: 'Beige', color: '#dcc8a0', images: ['https://www.marya.ru/promo/home3/img/models/nicolle.jpg', 'https://www.marya.ru/promo/home3/img/models/mix22.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'MDF / HPL' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Frontstärke', value: '19 mm' },
    ],
    tagline: 'Funktionaler Minimalismus',
    featureImg: 'https://www.marya.ru/promo/home3/img/models/jazz.jpg',
    features: [
      {
        img: 'https://www.marya.ru/promo/home3/img/models/jazz.jpg',
        icon: '◇',
        title: 'Höchst strapazierfähige Beschichtung',
        text: 'Emaille und Hochglanz-Acryllack der italienischen Marke Sayerlack widersteht Kratzern, Abrieb und Ausbleichen. Leicht von allen Verschmutzungen zu reinigen.',
      },
      {
        img: 'https://upload-bxp-mfm.marya.ru/iblock/382/382f0bc27e76518bc8daff12eb013262/11b387847acbc5fa7a3fa61ef00847d2.jpg',
        icon: '▦',
        title: 'Farbe nach Ihrer Wahl',
        text: 'Wir lackieren Fronten in jedem der tausenden Töne aus den RAL- und NCS-Katalogen. Exakte Farbübereinstimmung mit Ihrem Interieur — garantiert.',
      },
      {
        img: 'https://upload-bxp-mfm.marya.ru/iblock/ea0/ea0c63c706f733e5cde301aa57709904/4f85239bf0535eef5857bdcfa0e6309e.jpg',
        icon: '▯',
        title: 'Sicherer Aluminium-Griff',
        text: 'Elegantes vertikales Aluminiumprofil — Designelement und praktischer Griff zugleich. Ergonomisch, modern und sicher für Kinder.',
      },
      {
        img: 'https://www.marya.ru/promo/home3/img/models/avenue.jpg',
        icon: '◈',
        title: 'Leises Schließen',
        text: 'Integrierter Dämpfer sorgt für weiches und stilles Schließen der Türen auch bei leichtem Anstoß. Über 80.000 Zyklen — Komfort für viele Jahre.',
      },
    ],
  },
  'jazz-kabinet': {
    name: 'Jazz Kabinet',
    desc: 'Jazz Kabinet — ein Designklassiker für Ihre Aufbewahrung. Schlicht, elegant und unglaublich vielseitig. Perfekt für Wohn- und Schlafzimmer.',
    price: 'ab CHF 8',
    variants: [
      { name: 'Weiss', color: '#fafafa', images: ['https://www.marya.ru/promo/home3/img/models/jazz3.jpg', 'https://www.marya.ru/promo/home3/img/models/mix2.jpg'] },
      { name: 'Grau', color: '#999999', images: ['https://www.marya.ru/promo/home3/img/models/mix2.jpg', 'https://www.marya.ru/promo/home3/img/models/jazz3.jpg'] },
      { name: 'Eiche', color: '#b8956e', images: ['https://www.marya.ru/promo/home3/img/models/nicolle.jpg', 'https://www.marya.ru/promo/home3/img/models/trento1.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'MDF / Spanplatte' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Türen', value: 'Schiebetüren / Flügeltüren' },
    ],
    tagline: 'Designklassiker für Ihre Aufbewahrung',
    featureImg: 'https://www.marya.ru/promo/home3/img/models/jazz3.jpg',
    features: [
      { img: 'https://www.marya.ru/promo/home3/img/models/jazz3.jpg', icon: '◇', title: 'Individuell geplant', text: 'Jeder Schrank wird genau nach Ihrem Grundriss und Ihren Anforderungen gefertigt. Perfekte Passform, maximaler Stauraum — kein Millimeter verschwendet.' },
      { img: 'https://www.marya.ru/promo/home3/img/models/mix2.jpg', icon: '▦', title: 'Variable Innenausstattung', text: 'Kleiderstangen, Regale, Schubladen, Hosenhalter — konfigurieren Sie Ihr Innenleben nach Bedarf und passen Sie es jederzeit an.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/110/1103fec976fcd4e90702019cb61ff80d/3cde0cb95439c7bb8ed1072352f2a67e.jpg', icon: '▯', title: 'Schlafzimmer-Qualität', text: 'Schadstoffarme Materialien E1-zertifiziert. Kein Ausgasen, kein Geruch — für gesunden Schlaf und sicheres Wohnen in Ihrem Zuhause.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/ca8/ca80aa9bc342ab81aa618e0f4ad5f052/d009b242f5fc35f0b1bfdd0e46e35a24.jpg', icon: '◈', title: 'Leise Schiebetüren', text: 'Sanfter Lauf auf hochwertigen Aluminium-Profilen. Langlebige Mechanik mit weichem Einzug — auch nach Jahren zuverlässig und leise.' },
    ],
  },
  'teramo': {
    name: 'Teramo',
    desc: 'Teramo verbindet glatte Fronten mit dem ultramodernen Lamellen-Look. Holz- und einfarbige Töne harmonieren mit Dekoren, die geschliffenem Metall ähneln. Exklusive versenkte Griffe und ultradünne Bügelgriffe sorgen für eine unverwechselbare Ästhetik.',
    price: 'ab CHF 13',
    variants: [
      { name: 'Dunkle Ulme', color: '#5a4535', images: ['https://upload-bxp-mfm.marya.ru/iblock/6e3/6e398131b6d091587e395f41c57b1504/06d7c84ca9a89249be00eb3113bfa7bd.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/e5f/e5fb567dbb7b8cfe254c2491d9beffa3/cde69a9a547d6d5042df6fcacef4b1d6.jpg'] },
      { name: 'Perlgrau', color: '#c8c8c0', images: ['https://www.marya.ru/promo/home3/img/models/avenue.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/e21/e217fee0f7fb2f1de08ccf1feb364e8d/de4c79aaf566271a5e57194c92f7f5b0.jpg'] },
      { name: 'Natur-Eiche Premier', color: '#b8956e', images: ['https://www.marya.ru/promo/home3/img/models/mix22.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/e21/e217fee0f7fb2f1de08ccf1feb364e8d/de4c79aaf566271a5e57194c92f7f5b0.jpg'] },
      { name: 'Grau-Blau', color: '#8aa0b4', images: ['https://www.marya.ru/promo/home3/img/models/jazz.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/e21/e217fee0f7fb2f1de08ccf1feb364e8d/de4c79aaf566271a5e57194c92f7f5b0.jpg'] },
      { name: 'Weisse Esche', color: '#ede8e0', images: ['https://www.marya.ru/promo/home3/img/models/nicolle.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/e21/e217fee0f7fb2f1de08ccf1feb364e8d/de4c79aaf566271a5e57194c92f7f5b0.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'Thermoplast / Furnier' },
      { label: 'Dekore', value: 'Über 8 Varianten' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'Versenkte Einbaugriffe' },
    ],
    tagline: 'Innovatives Design',
    featureImg: 'https://upload-bxp-mfm.marya.ru/iblock/6e3/6e398131b6d091587e395f41c57b1504/06d7c84ca9a89249be00eb3113bfa7bd.jpg',
    features: [
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/6e3/6e398131b6d091587e395f41c57b1504/06d7c84ca9a89249be00eb3113bfa7bd.jpg', icon: '◇', title: 'Trend: Lamellenfronten', text: 'Vertikale Streifen lassen die Decke optisch höher wirken. Stilvoll und hochwertig — ein aktueller Trend für moderne Interieurs.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/e5f/e5fb567dbb7b8cfe254c2491d9beffa3/cde69a9a547d6d5042df6fcacef4b1d6.jpg', icon: '▦', title: 'Europäischer Verschleißschutz', text: 'Thermoplast — der Maßstab an Beständigkeit! Verblasst nicht in der Sonne, widersteht Feuchtigkeit im Bereich von Herd und Spüle.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/6f5/6f514167006e5573934901ef9d58c121/20369ce9489ed76eb476678ed3a8f2a1.jpg', icon: '▯', title: 'Schutz vor Fett und Ruß', text: 'Die Beschichtung stößt hartnäckige Verschmutzungen ab. In wenigen Sekunden sauber — ohne Aufwand, jeden Tag.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/a4f/a4fac72b74a858cacbc6831ec1b1ce2d/1755375e35b12cce2e43a1c1057c5a32.jpg', icon: '◈', title: 'Versenkte Einbaugriffe', text: 'Exklusive Griffe bündig im Frontmaterial eingelassen — keine Vorsprünge, absolut klare Linien, zeitloses Design.' },
    ],
  },
  'vector': {
    name: 'Vector',
    desc: 'Die Küche Vector verkörpert den Großstadtstil mit minimalistischer Eleganz. Markante geometrische Formen, offene Sektionen und V-förmige Griffe schaffen eine asketische, aber selbstbewusste Ästhetik. Qualität trifft auf urbanes Design.',
    price: 'ab CHF 12',
    variants: [
      { name: 'Beige Schiefer', color: '#c8b89a', images: ['https://upload-bxp-mfm.marya.ru/iblock/e01/e019af3c0e6926865411bad0a14d707a/4d6c6784b17e3bafbadd7530f1704127.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/42f/42f1a4066abbd348188be3c9566638ce/c51d3477904f8f44dc7bc410e9bf7e49.jpg'] },
      { name: 'Graphit Schiefer', color: '#4a4a4a', images: ['https://www.marya.ru/promo/home3/img/models/jazz.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/adf/adfc30f7ccaf4fa887934ba99efeb2e8/20c327c1d0e9f6cf64f49172ac9c0a5f.jpg'] },
      { name: 'Weiss Matt', color: '#f0f0ec', images: ['https://www.marya.ru/promo/home3/img/models/avenue.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/adf/adfc30f7ccaf4fa887934ba99efeb2e8/20c327c1d0e9f6cf64f49172ac9c0a5f.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'HPL-Kunststoff' },
      { label: 'Oberfläche', value: 'Hochglanz / Matt' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'V-Form Design' },
    ],
    tagline: 'Klare Geometrie und Komfort',
    featureImg: 'https://upload-bxp-mfm.marya.ru/iblock/e01/e019af3c0e6926865411bad0a14d707a/4d6c6784b17e3bafbadd7530f1704127.jpg',
    features: [
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/e01/e019af3c0e6926865411bad0a14d707a/4d6c6784b17e3bafbadd7530f1704127.jpg', icon: '◇', title: 'Vandal-sichere Beständigkeit', text: '0,6 mm Kunststoff — Panzer gegen Absplitterungen, Kratzer, heißes Geschirr und Haushaltschemikalien.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/42f/42f1a4066abbd348188be3c9566638ce/c51d3477904f8f44dc7bc410e9bf7e49.jpg', icon: '▦', title: 'Schmutz haftet nicht', text: 'Hochglanzoberfläche stößt Fett und Saucen ab. Ein feuchtes Tuch genügt für die tägliche Pflege — ohne Chemikalien.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/6e4/6e401c1b31e97ca43016c0f55b928acc/2cdf0522cc631b42178d9646ecf49086.jpg', icon: '▯', title: '100 % Wasserschutz', text: 'HPL-Kunststoff von Weltmarken + nahtlose Kante = absoluter Feuchtigkeitsschutz und tadelloses Erscheinungsbild.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/d24/d24fff0d6948a399fffa527395f56c7a/4fdb12287508b7d15e1956f7fc6553f8.jpg', icon: '◈', title: 'V-förmiges Design', text: 'Einzigartige V-förmige Griffe und Stützelemente — das geometrische Markenzeichen, das Vector unverwechselbar macht.' },
    ],
  },
  'vienna': {
    name: 'Vienna',
    desc: 'Visuelle Leichtigkeit und zurückhaltender Schick vereinen sich in der neoklassischen Küche Vienna. Klare Kompositionen fügen sich gleichermaßen in klassische wie in moderne Interieurs ein — zeitlos und elegant.',
    price: 'ab CHF 15',
    variants: [
      { name: 'Weiss RAL 9003', color: '#f5f5f0', images: ['https://www.marya.ru/promo/home3/img/models/avenue.jpg', 'https://www.marya.ru/promo/home3/img/models/nicolle.jpg'] },
      { name: 'Grauglas RAL 7040', color: '#9ea8b0', images: ['https://www.marya.ru/promo/home3/img/models/jazz.jpg', 'https://www.marya.ru/promo/home3/img/models/avenue.jpg'] },
      { name: 'Seidengrau RAL 7044', color: '#c8c4be', images: ['https://www.marya.ru/promo/home3/img/models/nicolle.jpg', 'https://www.marya.ru/promo/home3/img/models/jazz.jpg'] },
      { name: 'Perlenblau NCS', color: '#96afc0', images: ['https://www.marya.ru/promo/home3/img/models/trento1.jpg', 'https://www.marya.ru/promo/home3/img/models/avenue.jpg'] },
      { name: 'Graphitgrau RAL 7024', color: '#474f54', images: ['https://www.marya.ru/promo/home3/img/models/mix22.jpg', 'https://www.marya.ru/promo/home3/img/models/jazz.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'Massivholz Esche / Emaille' },
      { label: 'Farben', value: 'RAL + NCS' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Stil', value: 'Neoklassik' },
    ],
    tagline: 'Ästhetik des Neoklassizismus',
    featureImg: 'https://www.marya.ru/promo/home3/img/models/avenue.jpg',
    features: [
      { img: 'https://www.marya.ru/promo/home3/img/models/avenue.jpg', icon: '◇', title: 'Zuverlässigkeit des Eschenholzes', text: 'Fronten aus massiver Esche widerstehen Rissbildung, Delaminierung und Verformung bei Temperaturschwankungen über Jahrzehnte.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/390/39003cbd6af4e962fbfa22acf3f24038/350d1971c126dfdf2e314bac647f572d.jpg', icon: '▦', title: 'Atmungsaktive Beschichtung', text: 'Spezielle Lacktechnologie mit variabler Luftzufuhr betont die Holzporen und verleiht den Fronten eine natürliche, lebendige Textur.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/ea0/ea0c63c706f733e5cde301aa57709904/4f85239bf0535eef5857bdcfa0e6309e.jpg', icon: '▯', title: 'Schutz vor Rissbildung', text: 'Spezielles Trocknungsverfahren verhindert Verformung auch bei trockener Raumluft — dauerhaft stabile Fronten.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/34e/34ef497c6d3aa9fe291e5bbec85ed0c9/cec6735ae5726b0d0e9aeb796617d53c.jpg', icon: '◈', title: 'Geschützte Emaille', text: 'Feuchtigkeitsbeständige, reparierbare Emaille schützt das Holz dauerhaft und erhält das makellose Erscheinungsbild der Fronten.' },
    ],
  },
  'antro-rustic': {
    name: 'Antro Rustic',
    desc: 'Antro Rustic verbindet Natürlichkeit, minimalistischen Stil und Funktionalität — und entspricht damit vollständig den aktuellen Trends. Schlichte Formen werden durch die wunderschöne vertikale Maserung des Naturholzes betont, angenehm in der Haptik.',
    price: 'ab CHF 16',
    variants: [
      { name: 'Weisse Nächte', color: '#f0ede8', images: ['https://upload-bxp-mfm.marya.ru/iblock/3af/3af58af088fd827c01615d781a222d26/b1bd2d46c748f2992f8a8b5b1e321146.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/82d/82d1c2ed339a132db92c80148289f0cb/9b23c597513929daa97cbdef00eb3443.jpg'] },
      { name: 'Düne', color: '#d4c8a0', images: ['https://www.marya.ru/promo/home3/img/models/nicolle.jpg', 'https://www.marya.ru/promo/home3/img/models/jazz.jpg'] },
      { name: 'Espresso', color: '#3c2814', images: ['https://upload-bxp-mfm.marya.ru/iblock/390/39003cbd6af4e962fbfa22acf3f24038/350d1971c126dfdf2e314bac647f572d.jpg', 'https://www.marya.ru/promo/home3/img/models/jazz.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'Naturholz-Furnier' },
      { label: 'Holzarten', value: 'Über 10 Sorten' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Schutz', value: 'UV-Acryllack' },
    ],
    tagline: 'Balance von Ästhetik und Funktionalität',
    featureImg: 'https://upload-bxp-mfm.marya.ru/iblock/3af/3af58af088fd827c01615d781a222d26/b1bd2d46c748f2992f8a8b5b1e321146.jpg',
    features: [
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/3af/3af58af088fd827c01615d781a222d26/b1bd2d46c748f2992f8a8b5b1e321146.jpg', icon: '◇', title: 'Multi-Furnier: Einheitlicher Stil', text: 'Multi-Furnier Antro Rustic garantiert perfekte Farb- und Maserungsübereinstimmung im gesamten Möbelsystem.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/82d/82d1c2ed339a132db92c80148289f0cb/9b23c597513929daa97cbdef00eb3443.jpg', icon: '▦', title: 'Wahl der Holzart', text: 'Über 10 verschiedene Holzarten zur Auswahl — gestalten Sie Ihre Küche ganz nach Ihrem persönlichen Geschmack.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/23b/23ba842d1b276e15096954b79f1b3570/602fdcbb9056fc7d8b9041066a9ed36e.jpg', icon: '▯', title: 'Schutz vor Ausbleichen', text: 'Spezieller Acryllack schützt die Fronten zuverlässig vor Verblassen durch UV-Strahlung — die Farbe bleibt langfristig frisch.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/e5b/e5b703943522a5fc9e169063e629117e/2a3593ed1f8cee397a78d4a9c01abffd.jpg', icon: '◈', title: 'Ökologische Materialien', text: 'Naturholz, sicher für die ganze Familie — Fronten aus zertifiziertem Furnier, schadstoffarm und nach internationalen Standards geprüft.' },
    ],
  },
  'spark': {
    name: 'Spark',
    desc: 'Die atemberaubende Schönheit von Stein und Natur hat die Küche Spark inspiriert. Fronten mit Oberflächen, die Stein und Putz in verschiedenen Tönen imitieren, und natürliche Erdtöne setzen aktuelle Designtrends im Kücheninterieur.',
    price: 'ab CHF 14',
    variants: [
      { name: 'Basalt Düne', color: '#7a7470', images: ['https://upload-bxp-mfm.marya.ru/iblock/ccf/ccf3ba6581821b90bd5ecfedb8a4d2e8/464acb62d72e9c0e1b54ae0479e7efdf.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/ea0/ea0baeb820795a2cc88c4483e888d911/73f59625796e5b93fc897dbbfdfc55f7.jpg'] },
      { name: 'Sahara Düne', color: '#c8b090', images: ['https://www.marya.ru/promo/home3/img/models/nicolle.jpg', 'https://www.marya.ru/promo/home3/img/models/jazz3.jpg'] },
      { name: 'Weisser Kalkstein', color: '#e8e4dc', images: ['https://www.marya.ru/promo/home3/img/models/avenue.jpg', 'https://www.marya.ru/promo/home3/img/models/jazz3.jpg'] },
      { name: 'Anthrazit Rhombus', color: '#383838', images: ['https://www.marya.ru/promo/home3/img/models/mix22.jpg', 'https://www.marya.ru/promo/home3/img/models/jazz3.jpg'] },
      { name: 'Travertin Bronze', color: '#b09070', images: ['https://www.marya.ru/promo/home3/img/models/trento1.jpg', 'https://www.marya.ru/promo/home3/img/models/jazz3.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'TSS-Kunststoff 0,8 mm' },
      { label: 'Dekore', value: 'Über 22 Varianten' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Technologie', value: 'Cleaf Scan-Print' },
    ],
    tagline: 'Philosophie der Natur',
    featureImg: 'https://upload-bxp-mfm.marya.ru/iblock/ccf/ccf3ba6581821b90bd5ecfedb8a4d2e8/464acb62d72e9c0e1b54ae0479e7efdf.jpg',
    features: [
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/ccf/ccf3ba6581821b90bd5ecfedb8a4d2e8/464acb62d72e9c0e1b54ae0479e7efdf.jpg', icon: '◇', title: 'Wie natürliches Massivholz', text: 'Cleaf-Technologie: perfekte Übereinstimmung von Oberflächenmuster und Porenstruktur der Front — täuschend echter Naturstein-Look.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/ea0/ea0baeb820795a2cc88c4483e888d911/73f59625796e5b93fc897dbbfdfc55f7.jpg', icon: '▦', title: 'Hart wie eine Arbeitsplatte', text: 'TSS-Kunststoff bis 0,8 mm Stärke — Splittersicherheit auf dem Niveau einer massiven Küchenarbeitsplatte.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/8b8/8b88a2f7b31a63c19418c175c9f22880/1751dd35d70b56b96b9b6ebb86764207.jpg', icon: '▯', title: 'Naturalistische Dekore', text: 'Scan-Technologie reproduziert Texturen von Holz, Stoff, Beton und Stuck — mit einer Präzision, die echte Natur nachahmt.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/89b/89b0b5a781aad0699a7a25f0c4dfdf0d/7b3212e380209d71573c05d67e9547ed.jpg', icon: '◈', title: 'Monolithische Optik', text: 'Einheitliches Design von Front und Kante erzeugt den Effekt einer durchgehenden, massiven Oberfläche — keine sichtbaren Übergänge.' },
    ],
  },
  'antro-stone': {
    name: 'Antro Stone',
    desc: 'Raffinierte Brutalität — so lässt sich Antro Stone treffend beschreiben. Ihr Name bedeutet auf Italienisch "Höhle". Im Loft-Stil gehalten, kommen bei den Fronten echte Schieferfurniere aus Indien zum Einsatz — jede Küche ein absolutes Unikat.',
    price: 'ab CHF 18',
    variants: [
      { name: 'Schwarz Schiefer', color: '#2a2a2a', images: ['https://upload-bxp-mfm.marya.ru/iblock/e4e/e4ed7e0f0ff8e7999db15651a39915cc/79098b697b42e6831af626abb665935b.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/ea0/ea0baeb820795a2cc88c4483e888d911/73f59625796e5b93fc897dbbfdfc55f7.jpg'] },
      { name: 'Vulkanisch', color: '#4a3a30', images: ['https://www.marya.ru/promo/home3/img/models/jazz.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/34e/34ef497c6d3aa9fe291e5bbec85ed0c9/cec6735ae5726b0d0e9aeb796617d53c.jpg'] },
      { name: 'Meerblau', color: '#5a7080', images: ['https://www.marya.ru/promo/home3/img/models/trento1.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/ca8/ca80aa9bc342ab81aa618e0f4ad5f052/d009b242f5fc35f0b1bfdd0e46e35a24.jpg'] },
      { name: 'Goldstein', color: '#a08050', images: ['https://www.marya.ru/promo/home3/img/models/mix22.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/390/39003cbd6af4e962fbfa22acf3f24038/350d1971c126dfdf2e314bac647f572d.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'Naturschiefer-Furnier' },
      { label: 'Herkunft', value: 'Indien / Südamerika' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Stil', value: 'Loft / Industrial' },
    ],
    tagline: 'Industrieller Vintage-Stil',
    featureImg: 'https://upload-bxp-mfm.marya.ru/iblock/e4e/e4ed7e0f0ff8e7999db15651a39915cc/79098b697b42e6831af626abb665935b.jpg',
    features: [
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/e4e/e4ed7e0f0ff8e7999db15651a39915cc/79098b697b42e6831af626abb665935b.jpg', icon: '◇', title: 'Naturschiefer aus Indien', text: 'Fronten mit einzigartigem Schieferfurnier — robuster Naturstein aus Indien und Südamerika. Jedes Stück ein absolutes Unikat.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/ea0/ea0baeb820795a2cc88c4483e888d911/73f59625796e5b93fc897dbbfdfc55f7.jpg', icon: '▦', title: 'Pflege ohne Aufwand', text: 'Schutzimprägnierung stößt Schmutz zuverlässig ab. Mit einem feuchten Schwamm problemlos zu reinigen — kein Sonderaufwand nötig.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/bd2/bd2c41ad214c42245096d07cfcd6581b/18e092135c17483a78e572ee4578b384.jpg', icon: '▯', title: 'Monolithische Steinkanten', text: 'Kanten aus demselben Schiefer — die perfekte Illusion eines massiven, durchgehenden Natursteins.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/071/0711229e2387b79c6e00197b5a60c837/941b4f96cb95b60914006fb117dad843.jpg', icon: '◈', title: 'Symbiose aus Stein und Holz', text: 'Kombinierbar mit über 10 Holzarten — schaffen Sie Kontraste oder Harmonie und verleihen Sie Ihrer Küche eine unverwechselbare Identität.' },
    ],
  },
  'antro-wood': {
    name: 'Antro Wood',
    desc: 'Die Küche wurde im Vintage-Loft-Stil entwickelt und auf der größten russischen Möbelmesse mit dem Sonderpreis in der Kategorie "Innovation" ausgezeichnet. Exklusives Naturholzfurnier der Kategorie AA und optional das grifflose Gola-Profil-System.',
    price: 'ab CHF 17',
    variants: [
      { name: 'Black Ofram', color: '#2c2c24', images: ['https://upload-bxp-mfm.marya.ru/iblock/103/103bc360fb218775699dbc630ef40374/e105639a0efa351c4fed8bee07850822.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/33a/33a55f2c3d2e48d6ab16089c53c39db6/89de0ddf7b5b034ac8385a01405d5be4.jpg'] },
      { name: 'Europäische Eiche', color: '#b8956e', images: ['https://www.marya.ru/promo/home3/img/models/trento1.jpg', 'https://www.marya.ru/promo/home3/img/models/mix22.jpg'] },
      { name: 'Eukalyptus', color: '#7a8c6e', images: ['https://www.marya.ru/promo/home3/img/models/avenue.jpg', 'https://www.marya.ru/promo/home3/img/models/trento1.jpg'] },
      { name: 'Amerikanischer Nussbaum', color: '#6e4e30', images: ['https://www.marya.ru/promo/home3/img/models/nicolle.jpg', 'https://www.marya.ru/promo/home3/img/models/jazz.jpg'] },
      { name: 'Teak', color: '#9a7050', images: ['https://www.marya.ru/promo/home3/img/models/jazz3.jpg', 'https://www.marya.ru/promo/home3/img/models/trento1.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'Naturholz-Furnier AA' },
      { label: 'Holzarten', value: 'Über 500 Sorten' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'Gola-Profil / klassisch' },
    ],
    tagline: 'Exklusivität ohne Kompromisse',
    featureImg: 'https://upload-bxp-mfm.marya.ru/iblock/103/103bc360fb218775699dbc630ef40374/e105639a0efa351c4fed8bee07850822.jpg',
    features: [
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/103/103bc360fb218775699dbc630ef40374/e105639a0efa351c4fed8bee07850822.jpg', icon: '◇', title: 'Premium-Furnier Kategorie AA', text: 'Naturholzfurnier der höchsten Kategorie AA auf allen Fronten — exklusive Textur und Luxus-Optik für anspruchsvolle Interieurs.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/33a/33a55f2c3d2e48d6ab16089c53c39db6/89de0ddf7b5b034ac8385a01405d5be4.jpg', icon: '▦', title: '500 Holzarten zur Wahl', text: 'Riesige Auswahl an Holzarten — von Black Ofram über Teak bis zum amerikanischen Nussbaum. Ihre Küche, Ihr Charakter.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/ea0/ea0baeb820795a2cc88c4483e888d911/73f59625796e5b93fc897dbbfdfc55f7.jpg', icon: '▯', title: 'Lackschutz gegen Ausbleichen', text: 'Acryllack erhält die natürliche Farbe des Holzes optimal und schützt das Furnier zuverlässig vor UV-Strahlung.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/891/891efe9ee1de767a05a0b8da51170825/7c35108f010e175bccbffd75468c9cc5.jpg', icon: '◈', title: 'Griffloses Gola-System', text: 'Das Gola-Profil sorgt für eine cleane Silhouette ohne Beschläge — moderner Minimalismus auf höchstem handwerklichem Niveau.' },
    ],
  },
  'milaro-garden': {
    name: 'Milaro Garden',
    desc: 'Die Outdoor-Küche Milaro Garden ist ein echter Frischluft-Genuss! Speziell für den Außeneinsatz konzipiert, lädt sie zu einem neuen Blick auf das Schweizer Landleben ein. Das modulare System ermöglicht eine stilvolle, funktionale Vollküche — überall.',
    price: 'ab CHF 20',
    variants: [
      { name: 'Irische Eiche', color: '#8c6e4a', images: ['https://upload-bxp-mfm.marya.ru/iblock/956/95660f4a8e96381acef3d8eb6db6882f/dcd8e438154a09bf051818beab3324c7.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/8c9/8c9a7f9e198e31d6484796f0a4262b44/e28a63066b353a01fd5198e0401e27c1.jpg'] },
      { name: 'Anthrazit', color: '#3a3a3a', images: ['https://www.marya.ru/promo/home3/img/models/jazz.jpg', 'https://www.marya.ru/promo/home3/img/models/trento1.jpg'] },
      { name: 'Weiss', color: '#f0f0ec', images: ['https://www.marya.ru/promo/home3/img/models/avenue.jpg', 'https://www.marya.ru/promo/home3/img/models/trento1.jpg'] },
    ],
    specs: [
      { label: 'Einsatzbereich', value: 'Innen + Außen' },
      { label: 'Module', value: '14 Einheiten' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'System', value: 'Modular / flexibel' },
    ],
    tagline: 'Näher zur Natur',
    featureImg: 'https://upload-bxp-mfm.marya.ru/iblock/956/95660f4a8e96381acef3d8eb6db6882f/dcd8e438154a09bf051818beab3324c7.jpg',
    features: [
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/956/95660f4a8e96381acef3d8eb6db6882f/dcd8e438154a09bf051818beab3324c7.jpg', icon: '◇', title: 'Umfangreiche Planungsmöglichkeiten', text: '14 offene und geschlossene Module sowie Kochinseln zur Auswahl — grenzenlose Gestaltungsfreiheit für jeden Außenbereich.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/8c9/8c9a7f9e198e31d6484796f0a4262b44/e28a63066b353a01fd5198e0401e27c1.jpg', icon: '▦', title: 'Zuverlässig bei jedem Wetter', text: 'Für den Betrieb bei jedem Wetter und jeder Temperatur konzipiert — Schweizer Outdoor-Qualität ohne Abstriche.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/5f8/5f80f8a1ded8aef33955af926c178bc2/a10e08e03881e71d8737af190d36611e.jpg', icon: '▯', title: 'Mobilität und Modularität', text: 'Alle Module sind austauschbar und beliebig umstellbar — so anpassungsfähig wie Ihr Lebensstil und Ihre Bedürfnisse.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/1fb/1fb771fa52be1bf6fdf9ff309c80c7c2/4cc3d849a55280bfc6327bb1575dd094.jpg', icon: '◈', title: 'Outdoor-Materialien', text: 'Materialien und Beschichtungen eigens für den Außeneinsatz entwickelt — robust, pflegeleicht und langlebig unter freiem Himmel.' },
    ],
  },
  'vector-touch': {
    name: 'Vector Touch',
    desc: 'Vector Touch schenkt totales Eintauchen in Gemütlichkeit und das Gefühl von Leichtigkeit. Die weiche, samtige Oberfläche in gedämpften Farbtönen realisiert ein zurückhaltendes und aktuelles minimalistisches Interieur — zeitgemäß und wohnlich.',
    price: 'ab CHF 13',
    variants: [
      { name: 'Tongrau Supermat', color: '#a89888', images: ['https://upload-bxp-mfm.marya.ru/iblock/860/860f7c2a80a31cfe603635b6869d7b24/ad7cb35eb0c5e2758ea72a5fbdc90622.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/42f/42f1a4066abbd348188be3c9566638ce/c51d3477904f8f44dc7bc410e9bf7e49.jpg'] },
      { name: 'Kaschmir Supermat', color: '#d4c4b7', images: ['https://www.marya.ru/promo/home3/img/models/nicolle.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/adf/adfc30f7ccaf4fa887934ba99efeb2e8/20c327c1d0e9f6cf64f49172ac9c0a5f.jpg'] },
      { name: 'Rosenquarz Supermat', color: '#ddbcb0', images: ['https://www.marya.ru/promo/home3/img/models/trento1.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/adf/adfc30f7ccaf4fa887934ba99efeb2e8/20c327c1d0e9f6cf64f49172ac9c0a5f.jpg'] },
      { name: 'Schwarzgraphit Supermat', color: '#282828', images: ['https://www.marya.ru/promo/home3/img/models/jazz.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/adf/adfc30f7ccaf4fa887934ba99efeb2e8/20c327c1d0e9f6cf64f49172ac9c0a5f.jpg'] },
      { name: 'Staubgrau Supermat', color: '#9a9090', images: ['https://www.marya.ru/promo/home3/img/models/mix22.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/adf/adfc30f7ccaf4fa887934ba99efeb2e8/20c327c1d0e9f6cf64f49172ac9c0a5f.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'PET-Supermat-Kunststoff' },
      { label: 'Oberfläche', value: 'Samtig / Matt' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Stärke', value: 'Ab 0,5 mm' },
    ],
    tagline: 'Mattes Perfekt',
    featureImg: 'https://upload-bxp-mfm.marya.ru/iblock/860/860f7c2a80a31cfe603635b6869d7b24/ad7cb35eb0c5e2758ea72a5fbdc90622.jpg',
    features: [
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/860/860f7c2a80a31cfe603635b6869d7b24/ad7cb35eb0c5e2758ea72a5fbdc90622.jpg', icon: '◇', title: 'Schutz vor Mikrokratzern', text: 'Super-mattes PET-Finish mit seidenartig weicher Textur streut das Licht — feine Kratzer werden nahezu unsichtbar.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/42f/42f1a4066abbd348188be3c9566638ce/c51d3477904f8f44dc7bc410e9bf7e49.jpg', icon: '▦', title: 'Sichere Schönheit', text: 'PET-Kunststoff — sicher auch für Lebensmittelbehälter! Ökologisches Finish mit angenehmer Samtstruktur ohne Schadstoffe.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/988/988fe8045b2d10d219d54e83cc39dc3e/c8f6de1aa3ae6af85bca4f248a118434.jpg', icon: '▯', title: 'Verformungsresistent bei Dampf', text: 'Hochdichter MDF-Kern widersteht Feuchtigkeit zuverlässig — kein Quellen, kein Verziehen, auch bei hoher Luftfeuchtigkeit.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/6b9/6b92dbbfd4cb2631c596c5a772327a0d/db35bbf105bb9cf6c8d4b26f7ba2406f.jpg', icon: '◈', title: 'Offene Regale ohne Fugen', text: 'Beidseitige Frontbeschichtung — Kanten und Innenseiten der Regale sind makellos verarbeitet, auch im offenen Bereich.' },
    ],
  },
  'integrato': {
    name: 'Integrato',
    desc: 'Integrato steht für aktuelles, klares Design und Minimalismus im Detail. Die Küchenfronten bestehen aus 22 mm MDF, beschichtet mit hochwertiger, strapazierfähiger Emaille — für eine Küche, die so langlebig wie elegant ist.',
    price: 'ab CHF 11',
    variants: [
      { name: 'Weiss Hochglanz', color: '#f5f5f0', images: ['https://upload-bxp-mfm.marya.ru/iblock/28f/28f9cf5594dccee5d2cc680cf931bd6b/12ae09b1a6859eb54b400695a28e6a86.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/0e4/0e4d6c501797589aefdb0c97bd520e6d/36344037b995985766eeceef83ce2416.jpg'] },
      { name: 'Musson NCS Matt', color: '#c8c0b8', images: ['https://www.marya.ru/promo/home3/img/models/jazz.jpg', 'https://www.marya.ru/promo/home3/img/models/avenue.jpg'] },
      { name: 'Mattgold Metallic', color: '#c8a84a', images: ['https://www.marya.ru/promo/home3/img/models/nicolle.jpg', 'https://www.marya.ru/promo/home3/img/models/trento1.jpg'] },
      { name: 'Perlrosa NCS', color: '#e0c8c0', images: ['https://www.marya.ru/promo/home3/img/models/trento1.jpg', 'https://www.marya.ru/promo/home3/img/models/nicolle.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'MDF 22 mm + Emaille' },
      { label: 'Farben', value: 'RAL / NCS' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'Grifflos (Fräsung)' },
    ],
    tagline: 'Praktikalität und Komfort',
    featureImg: 'https://upload-bxp-mfm.marya.ru/iblock/28f/28f9cf5594dccee5d2cc680cf931bd6b/12ae09b1a6859eb54b400695a28e6a86.jpg',
    features: [
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/28f/28f9cf5594dccee5d2cc680cf931bd6b/12ae09b1a6859eb54b400695a28e6a86.jpg', icon: '◇', title: 'Griffloses System', text: 'Moderner Minimalismus — Fräsung statt Griff! Klare Linien, nichts Überflüssiges, sicher für Kinder und einfach zu reinigen.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/0e4/0e4d6c501797589aefdb0c97bd520e6d/36344037b995985766eeceef83ce2416.jpg', icon: '▦', title: 'Geräuschloses Schließen', text: 'Integrierte Dämpfer sorgen für sanftes, leises Schließen — kein lautes Zuschlagen, kein Lärm, auch spät abends.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/53e/53ecadb7ec1310353115c9ff6a412dc7/7b34b4c15c8e0d38560831c32a8534ee.jpg', icon: '▯', title: 'Harmonischer Lebensraum', text: 'Klare Geometrie, weiche Texturen, zurückhaltende Dekore. Integrato schafft eine Atmosphäre von Harmonie und Ordnung.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/8a3/8a38b26082c0684767a031b045e5e495/3dee7a29ee0c47aa9e279a10ff50b478.jpg', icon: '◈', title: 'Robuste Emaille auf 22 mm MDF', text: 'Fronten aus 22 mm MDF mit Emaillebeschichtung — außergewöhnliche Belastbarkeit und langfristige Schönheit im Küchenalltag.' },
    ],
  },
  'wood-dekor-email': {
    name: 'Wood Décor Email',
    desc: 'Wood Décor Email verbindet echte Holzdekore mit strapazierfähiger Emaillebeschichtung — ein einzigartiger Materialmix, der die Wärme des Holzes mit der Langlebigkeit des Emails vereint. Jede Front erzählt von Handwerk und natürlicher Schönheit.',
    price: 'ab CHF 16',
    variants: [
      { name: 'Eiche Natur Matt', color: '#c8a878', images: ['https://upload-bxp-mfm.marya.ru/iblock/3df/3df6b34dfad17e5af15bd403d8e51fc7/9160b6cce5996b30c21c0ee66d9b6ed1.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/bf1/bf1511cd4289cfdf825d8eea83f2f957/0101f240452d9c172fb690cf5dc2f0da.jpg'] },
      { name: 'Wenge Dunkel', color: '#4a3520', images: ['https://upload-bxp-mfm.marya.ru/iblock/f4f/f4f2fbc082161b469a09b265b1ab6834/d6860c01fb5b2228052d770f73609123.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/fc3/fc37f47daffd7769ba31ba3de5b2026c/770e31cca96624575dd7900903ed4bed.jpg'] },
      { name: 'Ahorn Weiss Email', color: '#e8e0d8', images: ['https://upload-bxp-mfm.marya.ru/iblock/6c7/6c73de14994c2344b94504d32011cb08/ca5f6253f5131b7a14e9788da6295902.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/5ac/5ac75c137db57312374e212f8c641da3/2d4f8caf5163ad7f473c3875fbfd1a6f.jpg'] },
    ],
    specs: [
      { label: 'Frontmaterial', value: 'MDF + Holzdekor + Emaille' },
      { label: 'Frontstärke', value: '22 mm' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Oberfläche', value: 'Matt / Seidenmatt' },
    ],
    tagline: 'Holz trifft Email',
    featureImg: 'https://upload-bxp-mfm.marya.ru/iblock/3df/3df6b34dfad17e5af15bd403d8e51fc7/9160b6cce5996b30c21c0ee66d9b6ed1.jpg',
    features: [
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/3df/3df6b34dfad17e5af15bd403d8e51fc7/9160b6cce5996b30c21c0ee66d9b6ed1.jpg', icon: '◇', title: 'Echter Holzcharakter', text: 'Authentische Holzdekore — jede Front wirkt wie massives Holz, ist dabei aber deutlich langlebiger und pflegeleichter.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/bf1/bf1511cd4289cfdf825d8eea83f2f957/0101f240452d9c172fb690cf5dc2f0da.jpg', icon: '▦', title: 'Emaille-Schutzschicht', text: 'Die Emaillebeschichtung verleiht den Fronten eine samtig-matte Oberfläche, die unempfindlich gegen Fettflecken und Fingerabdrücke ist.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/f4f/f4f2fbc082161b469a09b265b1ab6834/d6860c01fb5b2228052d770f73609123.jpg', icon: '▯', title: 'Natürliche Wärme', text: 'Holzdekore schaffen eine einladende Atmosphäre — warm, zeitlos, ideal für Küchen, die Gemütlichkeit und Stil vereinen.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/fc3/fc37f47daffd7769ba31ba3de5b2026c/770e31cca96624575dd7900903ed4bed.jpg', icon: '◈', title: 'Zwei Welten, ein Design', text: 'Die Kombination aus Holzdekor und emaillierten Fronten ermöglicht kreative Kontraste — rustikal und modern zugleich.' },
    ],
  },
  'tokyo-glanz': {
    name: 'Tokyo Glanz',
    desc: 'Tokyo Glanz steht für klaren Minimalismus mit Hochglanz-Akzenten. Die spiegelnden Fronten bringen viel Licht in den Raum und schaffen eine moderne, großzügig wirkende Küche — zeitlos und pflegeleicht zugleich.',
    price: 'ab CHF 9',
    variants: [
      { name: 'Weiss Hochglanz', color: '#f0f0ee', images: ['https://upload-bxp-mfm.marya.ru/iblock/f80/f807968a848ff69c3b1586fc5a08ae39/82128da6551c91c84cbb51e5d417a8dd.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/00b/00b0282dbb9ab693ddabcd2fa023cd35/b53eac58ea68c013c3700ebe3b73e2ce.jpg'] },
      { name: 'Grau Hochglanz', color: '#a0a0a0', images: ['https://upload-bxp-mfm.marya.ru/iblock/9da/9dab889552bd349c71dc17a8ce3e0469/eb056b3ef1b9e2b758c1f34d5aa0a03d.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/3f8/3f8115b27b51cadc591478e94a3bc8f5/78e7482b94a2107ea5db1e1f0ec879ea.jpg'] },
      { name: 'Champagner Hochglanz', color: '#d8c8a0', images: ['https://upload-bxp-mfm.marya.ru/iblock/565/5651f30213edb042360762d67acfc359/51b9bcdfc17ed188ce81754328ff08ad.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/aec/aec4cf6c5767abf4b522400882b60928/accafd6a4fa0ddc1cd75e2db0c16e079.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'MDF + PVC Hochglanz' },
      { label: 'Frontstärke', value: '16 mm' },
      { label: 'Garantie', value: 'Bis zu 15 Jahre' },
      { label: 'Griffe', value: 'Alu-Profilgriff / Grifflos' },
    ],
    tagline: 'Glanz des Ostens',
    featureImg: 'https://upload-bxp-mfm.marya.ru/iblock/f80/f807968a848ff69c3b1586fc5a08ae39/82128da6551c91c84cbb51e5d417a8dd.jpg',
    features: [
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/f80/f807968a848ff69c3b1586fc5a08ae39/82128da6551c91c84cbb51e5d417a8dd.jpg', icon: '◇', title: 'Hochglanz-Optik', text: 'Spiegelnde Fronten reflektieren das Licht und lassen die Küche größer, heller und moderner wirken — ideal für kleinere Räume.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/00b/00b0282dbb9ab693ddabcd2fa023cd35/b53eac58ea68c013c3700ebe3b73e2ce.jpg', icon: '▦', title: 'Einfache Reinigung', text: 'Glatte, geschlossene Oberflächen ohne Poren oder Rillen — Fett und Staub lassen sich mit einem Wisch entfernen.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/9da/9dab889552bd349c71dc17a8ce3e0469/eb056b3ef1b9e2b758c1f34d5aa0a03d.jpg', icon: '▯', title: 'Zeitloses Design', text: 'Klare Linien, flächenbündige Fronten, minimale Griffleisten — Tokyo Glanz bleibt modern, egal wie sich Trends entwickeln.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/3f8/3f8115b27b51cadc591478e94a3bc8f5/78e7482b94a2107ea5db1e1f0ec879ea.jpg', icon: '◈', title: 'Große Farbauswahl', text: 'Von reinweißem Hochglanz bis zu tiefem Anthrazit — wählen Sie den Ton, der zu Ihrem Zuhause passt.' },
    ],
  },
  'jazz-allure': {
    name: 'Jazz Allure',
    desc: 'Jazz Allure verbindet die bewährte Jazz-Qualität mit klassisch-eleganten Details: Profifräsungen, edle Lackoberflächen und zeitlose Proportionen. Eine Küche für alle, die Stil und Funktionalität nicht trennen möchten.',
    price: 'ab CHF 48',
    variants: [
      { name: 'Grauweiß Matt', color: '#e8e4e0', images: ['https://upload-bxp-mfm.marya.ru/iblock/ba2/ba268b7026920fa148416336fa32f631/ff9a710b148730a1d74acffdc6d6c965.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/b37/b375bf88b96a066dbc5c9d558788f2b5/7bb2969b85714d86d3a1b3c0a59b6e05.jpg'] },
      { name: 'Cashmere Beige', color: '#d0c0a8', images: ['https://upload-bxp-mfm.marya.ru/iblock/8cb/8cbf6b0077c9779f9ec8fefe0f9ccfce/83653036f6ffed8ba42149182c8b5ea7.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/a7f/a7f0c76eb31b1fffb54f04943ad3d71f/ab97e9923cfbcebd6d512664caaa22ad.jpg'] },
      { name: 'Steingrau NCS', color: '#888880', images: ['https://upload-bxp-mfm.marya.ru/iblock/22c/22c1851906b6e665082ff8820d7e9ef6/d159a9c8936ae2b9f0b300b6e6faf2f4.jpg', 'https://upload-bxp-mfm.marya.ru/iblock/5dd/5dd7f4a3c03dae3b9b93706033e10645/18a4d74b797cf65e01832f2c7ea4ba7f.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'MDF 22 mm + Lack' },
      { label: 'Farben', value: 'RAL / NCS individuell' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'Messingriff / Profilrahmen' },
    ],
    tagline: 'Eleganz und Substanz',
    featureImg: 'https://upload-bxp-mfm.marya.ru/iblock/ba2/ba268b7026920fa148416336fa32f631/ff9a710b148730a1d74acffdc6d6c965.jpg',
    features: [
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/ba2/ba268b7026920fa148416336fa32f631/ff9a710b148730a1d74acffdc6d6c965.jpg', icon: '◇', title: 'Klassische Profifräsung', text: 'Profilierte Frontkanten verleihen der Küche einen klassisch-zeitlosen Charakter — subtile Eleganz, die überzeugt.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/b37/b375bf88b96a066dbc5c9d558788f2b5/7bb2969b85714d86d3a1b3c0a59b6e05.jpg', icon: '▦', title: 'Edles Lackfinish', text: 'Hochwertige Lackierung auf 22 mm MDF — seidenweiche Oberfläche, farbecht, kratzresistent und jahrelang schön.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/8cb/8cbf6b0077c9779f9ec8fefe0f9ccfce/83653036f6ffed8ba42149182c8b5ea7.jpg', icon: '▯', title: 'Individueller Farbton', text: 'Hunderte von RAL- und NCS-Farbtönen — wählen Sie genau den Farbton, der zu Ihrer Raumgestaltung passt.' },
      { img: 'https://upload-bxp-mfm.marya.ru/iblock/a7f/a7f0c76eb31b1fffb54f04943ad3d71f/ab97e9923cfbcebd6d512664caaa22ad.jpg', icon: '◈', title: 'Messinggold-Akzente', text: 'Optionale Messinggriffe und -profile setzen edle Akzente und machen Jazz Allure zur echten Designerküche.' },
    ],
  },
}

const companyFeatures = [
  {
    img: 'https://www.marya.ru/promo/home3/img/models/mix22.jpg',
    title: 'Design auf Ihren Wunsch',
    teaser: 'Individuelle Projekte von erfahrenen Designern',
    text: 'Unsere erfahrenen Spezialisten entwickeln ein persönliches Projekt genau nach Ihrem Grundriss und Ihren Wünschen — von der ersten Skizze bis zur Montage. Jede Küche ist ein Unikat.',
  },
  {
    img: 'https://upload-bxp-mfm.marya.ru/iblock/b4d/b4d7357dafd42740eab4424e3f3c11b9/c1a25fddb1fdd725bdc47c246a3a7772.jpg',
    title: 'Premiummaterialien & Vielfalt',
    teaser: 'Hunderte Farben, Texturen und Oberflächen',
    text: 'Lacke, Furniere, Emaille, HPL, Thermoplast — wir arbeiten nur mit zertifizierten Materialien führender europäischer Hersteller. Über 200 Dekore für jeden Einrichtungsstil.',
  },
  {
    img: 'https://upload-bxp-mfm.marya.ru/iblock/ea0/ea0c63c706f733e5cde301aa57709904/4f85239bf0535eef5857bdcfa0e6309e.jpg',
    title: 'Beschläge von Blum & Hettich',
    teaser: 'Über 80 000 Öffnungszyklen — geprüft',
    text: 'Wir verbauen ausschließlich verstärkte Beschläge von Blum und Hettich — mit integrierter Dämpfung, leisem Schließen und einer nachgewiesenen Lebensdauer von über 80 000 Zyklen.',
  },
  {
    img: 'https://upload-bxp-mfm.marya.ru/iblock/575/575716e4ba639475feecf9c9eef50fa4/3709a12eb736f64edd961656b6c4239f.jpg',
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

  const [portfolio, setPortfolio] = useState(allPortfolio.slice(0, 8))

  useEffect(() => {
    const shuffled = [...allPortfolio].sort(() => Math.random() - 0.5)
    setPortfolio(shuffled.slice(0, 8))
  }, [slug])

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
              <ProductGallery images={v.images} name={`${p.name} ${v.name}`} />
            </div>

            {/* Info */}
            <div style={{ width: '40%', minWidth: 300 }}>
              <h1 style={{ fontFamily: 'var(--sb-reg)', fontSize: '2.2rem', marginBottom: '0.3rem' }}>{p.name}</h1>
              <p style={{ fontSize: '0.9rem', color: 'var(--primary-color)', marginBottom: '1.2rem' }}>{v.name}</p>
              <p className="uk-text-muted" style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>{p.desc}</p>

              {/* Color variants */}
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
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
          }}>
            {companyFeatures.map((f, i) => {
              const active = openFeature === i
              return (
                <div
                  key={i}
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
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.2rem',
          }}>
            {p.features.map((f, i) => (
              <div
                key={i}
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

      {/* Realisierungen (Portfolio) */}
      <section className="uk-section" style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
        <div className="uk-container">
          <h2 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.6rem', textAlign: 'center', marginBottom: '0.5rem' }}>
            Varianten der Realisierung
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--muted-color)', marginBottom: '2.5rem', fontSize: '0.9rem' }}>
            So setzen unsere Kunden {p.name} in ihren Projekten um
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            {portfolio.map((proj) => (
              <div key={proj.slug} style={{ width: 'calc(25% - 1.2rem)', minWidth: 220 }}>
                <Link href={`/portfolio/${proj.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <div style={{
                    height: '16rem', borderRadius: '1rem', overflow: 'hidden',
                    position: 'relative', marginBottom: '0.8rem',
                  }}>
                    <img src={proj.img} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      padding: '0.8rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                    }}>
                      <span style={{ fontFamily: 'var(--sb-reg)', fontSize: '0.85rem', color: 'white', display: 'block' }}>
                        {proj.title}
                      </span>
                    </div>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted-color)' }}>{proj.models}</div>
                </Link>
              </div>
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
    </>
  )
}
