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
  variants?: Variant[]
  images?: string[]
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
      { name: 'Gelber Sand', color: '#d4c5a0', images: [
        '/images/portfolio/1c736d98b62f694f8227ff4348dc5618.jpg',
        '/images/portfolio/7b89b06eaece34af91fc32a7cf4ce7da.jpg',
        '/images/portfolio/ac72773fd5a85c35b7fb482766412d88.jpg',
      ] },
      { name: 'Eiche Charleston', color: '#3d2b1f', images: [
        '/images/portfolio/183013f45e504e799f868ebcbf3930a9.jpg',
        '/images/portfolio/3e5b4133c64cc2252413248abb66cefe.jpg',
        '/images/portfolio/e066cf1192dcc3901ba54d60bf4d813a.jpg',
        '/images/portfolio/9c4df4c58bdaf68d086cf09545dc50c5.jpg',
        '/images/portfolio/aacbffb0237d007f52689ae0fbbbb81c.jpg',
        '/images/portfolio/b1ad293c75e077ea9c06a6af511e18b1.jpg',
        '/images/portfolio/81f1372549c7a5139eab55ab09917887.jpg',
        '/images/portfolio/1f876cbac22da1ca4cf40e5af38644a5.jpg',
        '/images/portfolio/44c965e4b11847f36a7b53b85759f8b4.jpg',
        '/images/portfolio/dd3e3967057f9e3979ff0f58122ceaf6.jpg',
        '/images/portfolio/02a11532171837756a7ef8f70a1d0b6f.jpg',
        '/images/portfolio/62cbb912b27899c808071081e15d895e.jpg',
        '/images/portfolio/f2da018bf24da7e9dcaebddf242401a6.jpg',
        '/images/portfolio/f0cd4059426e2cf3f2d5aff95574d5b2.jpg',
        '/images/portfolio/c5168a177f305fe04a48a6bf9654e569.jpg',
        '/images/portfolio/4a10b7270f43dbc186b57df93bfad4ac.jpg',
      ] },
      { name: 'Kaschmir', color: '#d4c4b7', images: [
        '/images/portfolio/22d0dec884b29828847f9cdda881f2b2.jpg',
        '/images/portfolio/c86c4974fda28903d0f4eedd1fd4dfa2.jpg',
        '/images/portfolio/65594a58a76db96c31117693c5c5333a.jpg',
        '/images/portfolio/ee03a51256566aff705526ca46d4204f.jpg',
      ] },
      { name: 'Rotbraun', color: '#7a4030', images: [
        '/images/portfolio/ea0433a6dfe41075dbca9ec15f8a42d8.jpg',
        '/images/portfolio/2782d6bb1735d63c979c64548ec1322e.jpg',
        '/images/portfolio/1147924a0f617a2a543b3f9a28e2d901.jpg',
      ] },
      { name: 'Staubgrau', color: '#a09990', images: [
        '/images/portfolio/e0909937d0aa0fd3374ca3ca1df0cc83.jpg',
        '/images/portfolio/acd3708592d77d0d972a43ab6ad8c460.jpg',
        '/images/portfolio/a2a3fee42d6f23b9cd867a3205d9bee3.jpg',
        '/images/portfolio/1bb5c7e1dded0ea3a76e7c575204288c.jpg',
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
    featureImg: '/images/portfolio/1c736d98b62f694f8227ff4348dc5618.jpg',
    features: [
      {
        img: '/images/portfolio/1c736d98b62f694f8227ff4348dc5618.jpg',
        icon: '◇',
        title: 'Sicher für Kinder und Allergiker',
        text: 'EGGER LHDF-Platten Emissionsklasse E1 — internationaler Standard für Wohnräume. Keine schädlichen Dämpfe oder Gerüche, auch bei starker Erhitzung.',
      },
      {
        img: '/images/portfolio/183013f45e504e799f868ebcbf3930a9.jpg',
        icon: '▦',
        title: 'Kratz- und Chipfest',
        text: 'Beidseitig verstärkte Beschichtung kaschiert Gebrauchsspuren zuverlässig. Die Oberfläche bleibt auch nach 5 Jahren intensiver Nutzung makellos.',
      },
      {
        img: '/images/portfolio/22d0dec884b29828847f9cdda881f2b2.jpg',
        icon: '▯',
        title: 'Hermetischer Feuchtigkeitsschutz',
        text: 'Nahtlose Kantenversiegelungstechnologie verhindert das Eindringen von Wasser — besonders wichtig im Bereich der Spüle und Arbeitsplatte.',
      },
      {
        img: '/images/portfolio/ea0433a6dfe41075dbca9ec15f8a42d8.jpg',
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
      { name: 'Grauweiss RAL 9002', color: '#e8e4df', images: [
        '/images/portfolio/04ef1124228874234fa06c97604e907d.jpg',
        '/images/portfolio/c28ceeb9c44d970183186d4358a5626c.jpg',
        '/images/portfolio/be647c32e2aef29af493c0168d5eada0.jpg',
        '/images/portfolio/2bd3025ad16fe1d63ba98d475a409958.jpg',
        '/images/portfolio/eedd034d4793f21d5aa1b8ffeea26444.jpg',
      ] },
      { name: 'Creme', color: '#f5f0e0', images: ['/images/portfolio/04ef1124228874234fa06c97604e907d.jpg'] },
      { name: 'Hellgrau', color: '#c8c8c8', images: ['/images/portfolio/04ef1124228874234fa06c97604e907d.jpg'] },
      { name: 'Dunkelgrau', color: '#5a5a5a', images: [
        '/images/portfolio/fa2d835e5ced92d4ca493446cb24eeab.jpg',
        '/images/portfolio/537d814a8f3100b124d2a29fdd6d7c86.jpg',
        '/images/portfolio/f12a5fcd5e51700ab67709341d3cd755.jpg',
      ] },
      { name: 'Schwarz', color: '#1a1a1a', images: ['/images/portfolio/04ef1124228874234fa06c97604e907d.jpg'] },
      { name: 'Olivgrün', color: '#6b6e4a', images: ['/images/portfolio/fa2d835e5ced92d4ca493446cb24eeab.jpg'] },
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
        img: '/images/portfolio/c1a25fddb1fdd725bdc47c246a3a7772.jpg',
        icon: '▦',
        title: 'Beidseitige Frontenlackierung',
        text: 'Fronten werden von beiden Seiten lackiert — für maximale Ästhetik und langfristige Stabilität. Das Ergebnis: makellose Oberflächen aus jedem Blickwinkel.',
      },
      {
        img: '/images/portfolio/d009b242f5fc35f0b1bfdd0e46e35a24.jpg',
        icon: '▯',
        title: 'Wahl der Haptik',
        text: 'Matt, samtiges Ultra-Matt, zartes Satin — wählen Sie Ihre Lieblingstextur und schaffen Sie eine individuelle Wohlfühlatmosphäre in Ihrer Küche.',
      },
      {
        img: '/images/portfolio/11b387847acbc5fa7a3fa61ef00847d2.jpg',
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
      { name: 'Weiss Matt', color: '#f0f0ec', images: [
        '/images/portfolio/157b7f95f6a486942125610a66b7a16d.jpg',
        '/images/portfolio/a2e60e03ee19eec2cbf755afa55b0825.jpg',
        '/images/portfolio/b18263e322c18dc31a9d84f6309c57af.jpg',
        '/images/portfolio/94bddd27e343b31e6f6e8213027cb8b6.jpg',
        '/images/portfolio/19c29c2caa132698c9513ce6611ad1c4.jpg',
        '/images/portfolio/cdf02abaee32bfcf9a599c2ef38e9e5e.jpg',
      ] },
      { name: 'Grau Hochglanz', color: '#808080', images: [
        '/images/portfolio/fd4a30d8d1bc583736163fd34f7a1259.jpg',
        '/images/portfolio/538f6f8914f864db4d4bf8a8f91c1b12.jpg',
        '/images/portfolio/2ec66e3e4b3620cfc670e41f7de596a5.jpg',
        '/images/portfolio/fc0dfbf6b7fda31c82945a61edf4f0a8.jpg',
        '/images/portfolio/753a64197c925ce96f1c303c24cb495f.jpg',
        '/images/portfolio/375ed10377a3d2f705dc07829052547d.jpg',
      ] },
      { name: 'Schwarz Matt', color: '#1a1a1a', images: ['/images/portfolio/f44c267d46b5a028716a8cbc8fa6299b.jpg'] },
      { name: 'Sandbeige', color: '#dcc8a0', images: ['/images/portfolio/f44c267d46b5a028716a8cbc8fa6299b.jpg'] },
      { name: 'Beton-Optik', color: '#b0a89c', images: ['/images/portfolio/f44c267d46b5a028716a8cbc8fa6299b.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'MDF / HPL' },
      { label: 'Farben', value: 'Matt + Hochglanz' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'Griffleiste integriert' },
    ],
    tagline: 'Geometrie und Ästhetik',
    featureImg: '/images/portfolio/fd4a30d8d1bc583736163fd34f7a1259.jpg',
    features: [
      {
        img: '/images/portfolio/fd4a30d8d1bc583736163fd34f7a1259.jpg',
        icon: '◇',
        title: 'Klassik in moderner Interpretation',
        text: 'Rahmenfront aus Esche mit verdecktem Griff — klassische Materialien in zeitloser Ausführung. Keine aufgesetzten Beschläge, nur reine Linien und expressive Holztextur.',
      },
      {
        img: '/images/portfolio/157b7f95f6a486942125610a66b7a16d.jpg',
        icon: '▦',
        title: 'Esche enttäuscht nie',
        text: 'Das dichte Massivholz der Avenue widersteht Belastungen und Feuchtigkeit zuverlässig. Unempfindlich gegenüber Zeit und intensivem Alltagsgebrauch.',
      },
      {
        img: '/images/portfolio/af221920d9a4542146774beef7da8a49.jpg',
        icon: '▯',
        title: 'Italienische Lacke',
        text: 'Renner-Beschichtung (Italien) mit spezieller Auftragstechnologie garantiert makellose Glätte, Farbtiefe und höchste Abriebfestigkeit. Langlebige Schönheit für jeden Tag.',
      },
      {
        img: '/images/portfolio/cfe578f9ceb8b88261d31e465d7f7f77.jpg',
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
      { name: 'Kaltweiss', color: '#f0f0ec', images: [
        '/images/portfolio/3969eeed2cce84c478d771a9cdcb8628.jpg',
        '/images/portfolio/259a458b7e1bf6c1a813c3c827ed4e33.jpg',
        '/images/portfolio/57582b228dcc913b5a874633e7954760.jpg',
        '/images/portfolio/166db40ecd6a2f1da4b3da2c5816bdd6.jpg',
        '/images/portfolio/ba9fffca44218b607d6ab45cd30092eb.jpg',
      ] },
      { name: 'Weiss Esche Gold', color: '#edece8', images: [
        '/images/portfolio/05bb61f121365efcee9c6f21744fdac3.jpg',
        '/images/portfolio/1f7c04e61ebc8cbcb5c34c5f3d9061ab.jpg',
        '/images/portfolio/7e7538c6d6e878f592471176ccf78943.jpg',
        '/images/portfolio/f726f463e0c02c0bb9d5a26013831c8f.jpg',
        '/images/portfolio/8c3a7ed17aff07c58ce5fd68c92b6e2a.jpg',
        '/images/portfolio/98a557de9871b4e3857711835b3da72f.jpg',
      ] },
      { name: 'Ivory', color: '#f8efe6', images: [
        '/images/portfolio/58afa9d797563889ca17a97fd37405ba.jpg',
        '/images/portfolio/c57fde058b375689766b70e42387c93c.jpg',
        '/images/portfolio/41c455fc9d68b6f5ccd13efc65ed89c0.jpg',
        '/images/portfolio/6d39930817fa801b5e939bf129327055.jpg',
        '/images/portfolio/64bb3c92f7477980705a3b634bb4fcd0.jpg',
        '/images/portfolio/58117f44a213f3d08ef19241b4d905fc.jpg',
      ] },
      { name: 'Grau Esche', color: '#bfafa3', images: [
        '/images/portfolio/83b66586fddadf97cb15cd472df2f1fa.jpg',
        '/images/portfolio/78893c9def5b5a37c436ea9844a3fc66.jpg',
        '/images/portfolio/0436d8bd6b904f75bde19ff97be2eec7.jpg',
        '/images/portfolio/83cf750d37c167572a66a21d1adaa261.jpg',
        '/images/portfolio/90e9163f1f2508f72e32ea70783362cc.jpg',
        '/images/portfolio/5deca46bb578a0105dec7cb3ba3445ed.jpg',
      ] },
      { name: 'Weiss Esche', color: '#edece8', images: [
        '/images/portfolio/61608cd89ef426f7efe77676c331e3d3.jpg',
        '/images/portfolio/2bb21026c2c38091242bbb03c91c135e.jpg',
        '/images/portfolio/4bc062591bfe72edb58e12177510ff02.jpg',
        '/images/portfolio/8f3b260982050a34d4cd07b10adefd07.jpg',
        '/images/portfolio/fa495901f4262df326e0e15664b9703f.jpg',
      ] },
    ],
    specs: [
      { label: 'Material', value: 'Thermoplast-Folie auf MDF' },
      { label: 'Dekore', value: 'Über 25 Varianten' },
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
        img: '/images/portfolio/3cde0cb95439c7bb8ed1072352f2a67e.jpg',
        icon: '▦',
        title: 'Einheitliches Ensemble',
        text: 'Sockel, Dunstabzugshaube, Tischkanten — alles in der Frontfarbe. Ein stimmiges, harmonisches Küchenensemble aus einem Guss.',
      },
      {
        img: '/images/portfolio/d009b242f5fc35f0b1bfdd0e46e35a24.jpg',
        icon: '▯',
        title: 'Hitzebeständig',
        text: 'Die Thermoplast-Beschichtung schmilzt nicht durch Ölspritzer oder Heissluft und bewahrt dauerhaft ihren ästhetischen Wert.',
      },
      {
        img: '/images/portfolio/3709a12eb736f64edd961656b6c4239f.jpg',
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
      { name: 'Weiss Glanz', color: '#f5f5f0', images: [
        '/images/portfolio/6d1ed694f776e465fa77a1192befa111.jpg',
        '/images/portfolio/9f706c1f18bbff9e2db198992dec3fdf.jpg',
        '/images/portfolio/ff2758d04d24d6ccfbd270f616a44ce4.jpg',
      ] },
      { name: 'Hellgrau Ultra Matt', color: '#9e9e9e', images: [
        '/images/portfolio/957902645e29383dd443b08eb1003514.jpg',
        '/images/portfolio/9c9ccc42e8ef3090d5487ab19a787f9f.jpg',
        '/images/portfolio/7d351c5766222ffdf67ce56d8dbac2b1.jpg',
        '/images/portfolio/f06aa56b699cc6f38ab9cb7e43d657cd.jpg',
        '/images/portfolio/38f11719b76918aba675c86d454a45c3.jpg',
        '/images/portfolio/37bdee255b0cd1ef9acf07b31883cbc9.jpg',
      ] },
      { name: 'Perlweiss Glanz', color: '#e8e0d8', images: [
        '/images/portfolio/45d8be781e313f4d21761d23507ff183.jpg',
        '/images/portfolio/8d29ecc0d9efc1e507e91adec2c4a8d4.jpg',
        '/images/portfolio/16af5acbf154bd8e5d6c4278d57f716d.jpg',
      ] },
      { name: 'Perlrosa Glanz', color: '#e8b8b0', images: [
        '/images/portfolio/be43cbe63f572c6bc58d83ca29748817.jpg',
        '/images/portfolio/11a5cc59c3ac9f9ec8797aeb65d8198a.jpg',
        '/images/portfolio/eff1ec6fa23f9c5574b6f2a12ce41348.jpg',
        '/images/portfolio/1ee1803d09e429b59c559bcec45f5e15.jpg',
        '/images/portfolio/1d0dc21736a514666014e954479f06c5.jpg',
        '/images/portfolio/78109d59b74cae2eb37b2b4d9f3bf07c.jpg',
      ] },
      { name: 'Blau Porzellan Glanz', color: '#8ab0c8', images: [
        '/images/portfolio/ea7ac98bc29e69d68b3b5025b906a038.jpg',
        '/images/portfolio/3773f04a268d1a56ee1a4ccd82704ce9.jpg',
        '/images/portfolio/2fee5ceb877271d8c5b2a643315706b9.jpg',
        '/images/portfolio/3812a603ae2e2e623e92bb7e7dec2dab.jpg',
        '/images/portfolio/1d39c91c30b2da0b377ea81ff2b954cb.jpg',
      ] },
      { name: 'Matt Gold', color: '#c8a850', images: [
        '/images/portfolio/7d40cbf53b48c8b595bb6b79f0dd469c.jpg',
        '/images/portfolio/2a0944207f6f7b927b621dc0ea8a4fa6.jpg',
        '/images/portfolio/cde84e0b95cfbc0323e75ecefdbf93fb.jpg',
      ] },
    ],
    specs: [
      { label: 'Material', value: 'MDF / HPL / Email' },
      { label: 'Dekore', value: 'Über 200 Varianten' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Frontstärke', value: '19 mm' },
      { label: 'Griffsystem', value: 'Push-to-Open / Griffleiste' },
    ],
    tagline: 'Musikalische Rhythmen im Küchenraum',
    featureImg: '/images/portfolio/7d40cbf53b48c8b595bb6b79f0dd469c.jpg',
    features: [
      {
        img: '/images/portfolio/7d40cbf53b48c8b595bb6b79f0dd469c.jpg',
        icon: '◇',
        title: 'Gebogene Fronten für kleine Räume',
        text: 'Abgerundete Ecken sparen Platz und lassen die Küche optisch grosszügiger wirken. Ideal für kompakte Grundrisse ohne Abstriche beim Stil.',
      },
      {
        img: '/images/portfolio/957902645e29383dd443b08eb1003514.jpg',
        icon: '▦',
        title: 'Italienische Strapazierfähigkeit',
        text: 'Renner-Emaille aus Italien widersteht Kratzern und Abrieb — nachweislich 67 % langlebiger als marktübliche Vergleichsprodukte.',
      },
      {
        img: '/images/portfolio/45d8be781e313f4d21761d23507ff183.jpg',
        icon: '▯',
        title: 'Leise Dämpfer',
        text: 'Hochwertige Beschläge schliessen Schubladen und Türen geräuschlos — kein Lärm, kein Knallen, auch spät abends.',
      },
      {
        img: '/images/portfolio/be43cbe63f572c6bc58d83ca29748817.jpg',
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
      { name: 'Weiss Matt', color: '#f0f0ec', images: [
        '/images/portfolio/6d1ed694f776e465fa77a1192befa111.jpg',
        '/images/portfolio/9f706c1f18bbff9e2db198992dec3fdf.jpg',
        '/images/portfolio/ff2758d04d24d6ccfbd270f616a44ce4.jpg',
      ] },
      { name: 'Grau', color: '#999999', images: [
        '/images/portfolio/957902645e29383dd443b08eb1003514.jpg',
        '/images/portfolio/9c9ccc42e8ef3090d5487ab19a787f9f.jpg',
        '/images/portfolio/7d351c5766222ffdf67ce56d8dbac2b1.jpg',
        '/images/portfolio/f06aa56b699cc6f38ab9cb7e43d657cd.jpg',
        '/images/portfolio/38f11719b76918aba675c86d454a45c3.jpg',
        '/images/portfolio/37bdee255b0cd1ef9acf07b31883cbc9.jpg',
      ] },
      { name: 'Beige', color: '#dcc8a0', images: [
        '/images/portfolio/45d8be781e313f4d21761d23507ff183.jpg',
        '/images/portfolio/8d29ecc0d9efc1e507e91adec2c4a8d4.jpg',
      ] },
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
        img: '/images/portfolio/11b387847acbc5fa7a3fa61ef00847d2.jpg',
        icon: '▦',
        title: 'Farbe nach Ihrer Wahl',
        text: 'Wir lackieren Fronten in jedem der tausenden Töne aus den RAL- und NCS-Katalogen. Exakte Farbübereinstimmung mit Ihrem Interieur — garantiert.',
      },
      {
        img: '/images/portfolio/4f85239bf0535eef5857bdcfa0e6309e.jpg',
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
      { name: 'Weiss', color: '#fafafa', images: ['/images/portfolio/db53c589c2c71edf9c15cff02095a649.jpg'] },
      { name: 'Grau', color: '#999999', images: [
        '/images/portfolio/f296dd17f9b554063edfd1831217f10f.jpg',
        '/images/portfolio/dfc8ab70d360e72a6c6d68cf3fd9d66f.jpg',
      ] },
      { name: 'Rot', color: '#bb5338', images: ['/images/portfolio/fc6fa4514f9e7f00421d01119211d555.jpg'] },
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
      { img: '/images/portfolio/3cde0cb95439c7bb8ed1072352f2a67e.jpg', icon: '▯', title: 'Schlafzimmer-Qualität', text: 'Schadstoffarme Materialien E1-zertifiziert. Kein Ausgasen, kein Geruch — für gesunden Schlaf und sicheres Wohnen in Ihrem Zuhause.' },
      { img: '/images/portfolio/d009b242f5fc35f0b1bfdd0e46e35a24.jpg', icon: '◈', title: 'Leise Schiebetüren', text: 'Sanfter Lauf auf hochwertigen Aluminium-Profilen. Langlebige Mechanik mit weichem Einzug — auch nach Jahren zuverlässig und leise.' },
    ],
  },
  'teramo': {
    name: 'Teramo',
    desc: 'Teramo verbindet glatte Fronten mit dem ultramodernen Lamellen-Look. Holz- und einfarbige Töne harmonieren mit Dekoren, die geschliffenem Metall ähneln. Exklusive versenkte Griffe und ultradünne Bügelgriffe sorgen für eine unverwechselbare Ästhetik.',
    price: 'ab CHF 13',
    variants: [
      { name: 'Dunkle Ulme', color: '#7f5b4a', images: [
        '/images/portfolio/1755375e35b12cce2e43a1c1057c5a32.jpg',
        '/images/portfolio/71505dd846e2bfa02b0c2d2c40966a85.jpg',
        '/images/portfolio/301257cf2756f1ddc2d0807f5de21803.jpg',
        '/images/portfolio/1a81ba48e80618408605908af0f11889.jpg',
        '/images/portfolio/bef45663f6317f0cdf616ec2d04128e2.jpg',
        '/images/portfolio/22dc155826c9807efba513bf9ff41d66.jpg',
        '/images/portfolio/0a119fc9645e7dc6fa8eeb98ec925575.jpg',
      ] },
      { name: 'Weiss Oxid', color: '#f9f9ed', images: [
        '/images/portfolio/20369ce9489ed76eb476678ed3a8f2a1.jpg',
        '/images/portfolio/2484183a223bd736740c66c311468de1.jpg',
      ] },
      { name: 'Eiche Kassel', color: '#d2b593', images: [
        '/images/portfolio/06d7c84ca9a89249be00eb3113bfa7bd.jpg',
        '/images/portfolio/3c3232b270f5d5c7670733e63132b37d.jpg',
        '/images/portfolio/3f43360caa505b91a45c0d819b2a9984.jpg',
      ] },
      { name: 'Dunkel Fichte', color: '#445850', images: [
        '/images/portfolio/cde69a9a547d6d5042df6fcacef4b1d6.jpg',
        '/images/portfolio/c3743a8442aa9b3c8586b0fd00ea49cb.jpg',
        '/images/portfolio/eb594e295bad352afa067c1896cda869.jpg',
        '/images/portfolio/757eeba923eee0044fa3cff678a8aceb.jpg',
        '/images/portfolio/e9f979e38ff71630233e0dc91a1b4270.jpg',
        '/images/portfolio/205c6387fe4f62f793d44882ba885c17.jpg',
      ] },
    ],
    specs: [
      { label: 'Material', value: 'Thermoplast / Furnier' },
      { label: 'Dekore', value: 'Über 8 Varianten' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'Versenkte Einbaugriffe' },
    ],
    tagline: 'Innovatives Design',
    featureImg: '/images/portfolio/06d7c84ca9a89249be00eb3113bfa7bd.jpg',
    features: [
      { img: '/images/portfolio/06d7c84ca9a89249be00eb3113bfa7bd.jpg', icon: '◇', title: 'Trend: Lamellenfronten', text: 'Vertikale Streifen lassen die Decke optisch höher wirken. Stilvoll und hochwertig — ein aktueller Trend für moderne Interieurs.' },
      { img: '/images/portfolio/cde69a9a547d6d5042df6fcacef4b1d6.jpg', icon: '▦', title: 'Europäischer Verschleissschutz', text: 'Thermoplast — der Massstab an Beständigkeit! Verblasst nicht in der Sonne, widersteht Feuchtigkeit im Bereich von Herd und Spüle.' },
      { img: '/images/portfolio/20369ce9489ed76eb476678ed3a8f2a1.jpg', icon: '▯', title: 'Schutz vor Fett und Russ', text: 'Die Beschichtung stösst hartnäckige Verschmutzungen ab. In wenigen Sekunden sauber — ohne Aufwand, jeden Tag.' },
      { img: '/images/portfolio/1755375e35b12cce2e43a1c1057c5a32.jpg', icon: '◈', title: 'Versenkte Einbaugriffe', text: 'Exklusive Griffe bündig im Frontmaterial eingelassen — keine Vorsprünge, absolut klare Linien, zeitloses Design.' },
    ],
  },
  'vector': {
    name: 'Vector',
    desc: 'Die Küche Vector verkörpert den Grossstadtstil mit minimalistischer Eleganz. Markante geometrische Formen, offene Sektionen und V-förmige Griffe schaffen eine asketische, aber selbstbewusste Ästhetik. Qualität trifft auf urbanes Design.',
    price: 'ab CHF 12',
    variants: [
      { name: 'Beige Schiefer', color: '#c8b89a', images: [
        '/images/portfolio/4d6c6784b17e3bafbadd7530f1704127.jpg',
        '/images/portfolio/375ebe2fac66ae94848acbce25dd42f6.jpg',
        '/images/portfolio/25dbb2c9d513f4858a6c1f247e722860.jpg',
      ] },
    ],
    specs: [
      { label: 'Material', value: 'HPL-Kunststoff' },
      { label: 'Oberfläche', value: 'Hochglanz / Matt' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'V-Form Design' },
    ],
    tagline: 'Klare Geometrie und Komfort',
    featureImg: '/images/portfolio/4d6c6784b17e3bafbadd7530f1704127.jpg',
    features: [
      { img: '/images/portfolio/4d6c6784b17e3bafbadd7530f1704127.jpg', icon: '◇', title: 'Vandal-sichere Beständigkeit', text: '0,6 mm Kunststoff — Panzer gegen Absplitterungen, Kratzer, heisses Geschirr und Haushaltschemikalien.' },
      { img: '/images/portfolio/c51d3477904f8f44dc7bc410e9bf7e49.jpg', icon: '▦', title: 'Schmutz haftet nicht', text: 'Hochglanzoberfläche stösst Fett und Saucen ab. Ein feuchtes Tuch genügt für die tägliche Pflege — ohne Chemikalien.' },
      { img: '/images/portfolio/2cdf0522cc631b42178d9646ecf49086.jpg', icon: '▯', title: '100 % Wasserschutz', text: 'HPL-Kunststoff von Weltmarken + nahtlose Kante = absoluter Feuchtigkeitsschutz und tadelloses Erscheinungsbild.' },
      { img: '/images/portfolio/4fdb12287508b7d15e1956f7fc6553f8.jpg', icon: '◈', title: 'V-förmiges Design', text: 'Einzigartige V-förmige Griffe und Stützelemente — das geometrische Markenzeichen, das Vector unverwechselbar macht.' },
    ],
  },
  'vienna': {
    name: 'Vienna',
    desc: 'Visuelle Leichtigkeit und zurückhaltender Schick vereinen sich in der neoklassischen Küche Vienna. Klare Kompositionen fügen sich gleichermassen in klassische wie in moderne Interieurs ein — zeitlos und elegant.',
    price: 'ab CHF 15',
    variants: [
      { name: 'Weiss RAL 9003', color: '#f5f5f0', images: [
        '/images/portfolio/d811f57d6447f88081bff41c44a8d237.jpg',
        '/images/portfolio/db39d5a5976863965de6d8016675a526.jpg',
        '/images/portfolio/860e8313fb189c66164e4f704f32be09.jpg',
        '/images/portfolio/1df656cbc9c4482284bddf5d0aa905a1.jpg',
        '/images/portfolio/c9b1e4498f7de28ec7b8d2687b6e2569.jpg',
      ] },
      { name: 'Grauglas RAL 7040', color: '#9ea8b0', images: [
        '/images/portfolio/280134cdd6618b02cdd1815aaceb1db4.jpg',
        '/images/portfolio/af2bb2ea5d17bb327f5d8efa922df41e.jpg',
        '/images/portfolio/41a27fa011940db36cf49c4e88d77df2.jpg',
        '/images/portfolio/850153dcd9f53565455c75c5e4ee65fc.jpg',
        '/images/portfolio/6214c9a6e51cb5a0efef9b857c97dc13.jpg',
        '/images/portfolio/f2ae5b34d04258729e299cdafc327079.jpg',
      ] },
      { name: 'Seidengrau RAL 7044', color: '#c8c4be', images: [
        '/images/portfolio/280134cdd6618b02cdd1815aaceb1db4.jpg',
        '/images/portfolio/af2bb2ea5d17bb327f5d8efa922df41e.jpg',
        '/images/portfolio/41a27fa011940db36cf49c4e88d77df2.jpg',
        '/images/portfolio/850153dcd9f53565455c75c5e4ee65fc.jpg',
        '/images/portfolio/6214c9a6e51cb5a0efef9b857c97dc13.jpg',
        '/images/portfolio/f2ae5b34d04258729e299cdafc327079.jpg',
      ] },
      { name: 'Perlenblau NCS', color: '#96afc0', images: [
        '/images/portfolio/80eddd8a0f5a6d4a3a807a8bcf842641.jpg',
        '/images/portfolio/f0bc79e11eed68d8ac4753d142abbeda.jpg',
        '/images/portfolio/9d5a220b7b9d26096d53e9b1da9fedc1.jpg',
        '/images/portfolio/52b2b2a738ef8462b5b07ca123be3f63.jpg',
        '/images/portfolio/d80877d4c4d113bfd93fe56fe62b9816.jpg',
        '/images/portfolio/d54f58aa00b042341e71527fff33a7bc.jpg',
      ] },
      { name: 'Graphitgrau RAL 7024', color: '#474f54', images: [
        '/images/portfolio/7b76530e509e63f35da88a681ff34034.jpg',
        '/images/portfolio/a2d6679be673121fee356ba2d803bcdd.jpg',
        '/images/portfolio/299542278c1b2774258c0d2d2a26ca48.jpg',
        '/images/portfolio/27b55e9b9d0f723f6af1133b7195e6e0.jpg',
        '/images/portfolio/ca6d5f8380d6272b775becd0da9a85a8.jpg',
        '/images/portfolio/c075b93968fac8ca62c4c54e44045827.jpg',
      ] },
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
      { img: '/images/portfolio/350d1971c126dfdf2e314bac647f572d.jpg', icon: '▦', title: 'Atmungsaktive Beschichtung', text: 'Spezielle Lacktechnologie mit variabler Luftzufuhr betont die Holzporen und verleiht den Fronten eine natürliche, lebendige Textur.' },
      { img: '/images/portfolio/4f85239bf0535eef5857bdcfa0e6309e.jpg', icon: '▯', title: 'Schutz vor Rissbildung', text: 'Spezielles Trocknungsverfahren verhindert Verformung auch bei trockener Raumluft — dauerhaft stabile Fronten.' },
      { img: '/images/portfolio/cec6735ae5726b0d0e9aeb796617d53c.jpg', icon: '◈', title: 'Geschützte Emaille', text: 'Feuchtigkeitsbeständige, reparierbare Emaille schützt das Holz dauerhaft und erhält das makellose Erscheinungsbild der Fronten.' },
    ],
  },
  'antro-rustic': {
    name: 'Antro Rustic',
    desc: 'Antro Rustic verbindet Natürlichkeit, minimalistischen Stil und Funktionalität — und entspricht damit vollständig den aktuellen Trends. Schlichte Formen werden durch die wunderschöne vertikale Maserung des Naturholzes betont, angenehm in der Haptik.',
    price: 'ab CHF 16',
    variants: [
      { name: 'Weisse Nächte', color: '#f0ede8', images: ['/images/portfolio/9b23c597513929daa97cbdef00eb3443.jpg'] },
      { name: 'Düne', color: '#d4c8a0', images: ['/images/promo/models/nicolle.jpg', '/images/promo/models/jazz.jpg'] },
      { name: 'Espresso', color: '#3c2814', images: ['/images/promo/models/jazz.jpg'] },
    ],
    specs: [
      { label: 'Material', value: 'Naturholz-Furnier' },
      { label: 'Holzarten', value: 'Über 10 Sorten' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Schutz', value: 'UV-Acryllack' },
    ],
    tagline: 'Balance von Ästhetik und Funktionalität',
    featureImg: '/images/portfolio/b1bd2d46c748f2992f8a8b5b1e321146.jpg',
    features: [
      { img: '/images/portfolio/b1bd2d46c748f2992f8a8b5b1e321146.jpg', icon: '◇', title: 'Multi-Furnier: Einheitlicher Stil', text: 'Multi-Furnier Antro Rustic garantiert perfekte Farb- und Maserungsübereinstimmung im gesamten Möbelsystem.' },
      { img: '/images/portfolio/9b23c597513929daa97cbdef00eb3443.jpg', icon: '▦', title: 'Wahl der Holzart', text: 'Über 10 verschiedene Holzarten zur Auswahl — gestalten Sie Ihre Küche ganz nach Ihrem persönlichen Geschmack.' },
      { img: '/images/portfolio/602fdcbb9056fc7d8b9041066a9ed36e.jpg', icon: '▯', title: 'Schutz vor Ausbleichen', text: 'Spezieller Acryllack schützt die Fronten zuverlässig vor Verblassen durch UV-Strahlung — die Farbe bleibt langfristig frisch.' },
      { img: '/images/portfolio/2a3593ed1f8cee397a78d4a9c01abffd.jpg', icon: '◈', title: 'Ökologische Materialien', text: 'Naturholz, sicher für die ganze Familie — Fronten aus zertifiziertem Furnier, schadstoffarm und nach internationalen Standards geprüft.' },
    ],
  },
  'antro-stone': {
    name: 'Antro Stone',
    desc: 'Raffinierte Brutalität — so lässt sich Antro Stone treffend beschreiben. Ihr Name bedeutet auf Italienisch "Höhle". Im Loft-Stil gehalten, kommen bei den Fronten echte Schieferfurniere aus Indien zum Einsatz — jede Küche ein absolutes Unikat.',
    price: 'ab CHF 18',
    variants: [
      { name: 'Schwarz Schiefer', color: '#2a2a2a', images: [
        '/images/portfolio/79098b697b42e6831af626abb665935b.jpg',
        '/images/portfolio/8bab6d0250c5603df2c6e72bbd09c887.jpg',
        '/images/portfolio/5d5000814ce431a30c35f0306128b63e.jpg',
        '/images/portfolio/e8097a2089e2e4a9421766b83da08807.jpg',
        '/images/portfolio/6d6cde067ab07dd9d11e6a6ce2e0110b.jpg',
      ] },
    ],
    specs: [
      { label: 'Material', value: 'Naturschiefer-Furnier' },
      { label: 'Herkunft', value: 'Indien / Südamerika' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Stil', value: 'Loft / Industrial' },
    ],
    tagline: 'Industrieller Vintage-Stil',
    featureImg: '/images/portfolio/79098b697b42e6831af626abb665935b.jpg',
    features: [
      { img: '/images/portfolio/79098b697b42e6831af626abb665935b.jpg', icon: '◇', title: 'Naturschiefer aus Indien', text: 'Fronten mit einzigartigem Schieferfurnier — robuster Naturstein aus Indien und Südamerika. Jedes Stück ein absolutes Unikat.' },
      { img: '/images/portfolio/73f59625796e5b93fc897dbbfdfc55f7.jpg', icon: '▦', title: 'Pflege ohne Aufwand', text: 'Schutzimprägnierung stösst Schmutz zuverlässig ab. Mit einem feuchten Schwamm problemlos zu reinigen — kein Sonderaufwand nötig.' },
      { img: '/images/portfolio/18e092135c17483a78e572ee4578b384.jpg', icon: '▯', title: 'Monolithische Steinkanten', text: 'Kanten aus demselben Schiefer — die perfekte Illusion eines massiven, durchgehenden Natursteins.' },
      { img: '/images/portfolio/941b4f96cb95b60914006fb117dad843.jpg', icon: '◈', title: 'Symbiose aus Stein und Holz', text: 'Kombinierbar mit über 10 Holzarten — schaffen Sie Kontraste oder Harmonie und verleihen Sie Ihrer Küche eine unverwechselbare Identität.' },
    ],
  },
  'antro-wood': {
    name: 'Antro Wood',
    desc: 'Die Küche wurde im Vintage-Loft-Stil entwickelt und auf der grössten russischen Möbelmesse mit dem Sonderpreis in der Kategorie "Innovation" ausgezeichnet. Exklusives Naturholzfurnier der Kategorie AA und optional das grifflose Gola-Profil-System.',
    price: 'ab CHF 17',
    variants: [
      { name: 'Black Ofram', color: '#2c2c24', images: [
        '/images/portfolio/89de0ddf7b5b034ac8385a01405d5be4.jpg',
        '/images/portfolio/fae9da93e4160bd01bb7e2feae3394b5.jpg',
        '/images/portfolio/65c6e69e8c1dd6031e37d867cd6b365d.jpg',
        '/images/portfolio/5a898f2ce716f5ce57efbe6482892195.jpg',
        '/images/portfolio/469bc3b1fb2feca02c41b8241374c871.jpg',
        '/images/portfolio/e6fbe2c773de88b394e8415342cebdfc.jpg',
      ] },
      { name: 'Europäische Eiche', color: '#b8956e', images: [
        '/images/portfolio/e105639a0efa351c4fed8bee07850822.jpg',
        '/images/portfolio/6124cfd40870b84ec7c5e179b3527537.jpg',
        '/images/portfolio/21afbdb9a59e5c41a7779c7216a1255e.jpg',
        '/images/portfolio/361fe92272dd51b3e9b8748a4321a637.jpg',
        '/images/portfolio/3c2abe1d6470fa1c2e645c2044c39f35.jpg',
        '/images/portfolio/cf7616cbc7875401fe01d17044a82efd.jpg',
      ] },
    ],
    specs: [
      { label: 'Material', value: 'Naturholz-Furnier AA' },
      { label: 'Holzarten', value: 'Über 500 Sorten' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'Gola-Profil / klassisch' },
    ],
    tagline: 'Exklusivität ohne Kompromisse',
    featureImg: '/images/portfolio/e105639a0efa351c4fed8bee07850822.jpg',
    features: [
      { img: '/images/portfolio/e105639a0efa351c4fed8bee07850822.jpg', icon: '◇', title: 'Premium-Furnier Kategorie AA', text: 'Naturholzfurnier der höchsten Kategorie AA auf allen Fronten — exklusive Textur und Luxus-Optik für anspruchsvolle Interieurs.' },
      { img: '/images/portfolio/89de0ddf7b5b034ac8385a01405d5be4.jpg', icon: '▦', title: '500 Holzarten zur Wahl', text: 'Riesige Auswahl an Holzarten — von Black Ofram über Teak bis zum amerikanischen Nussbaum. Ihre Küche, Ihr Charakter.' },
      { img: '/images/portfolio/73f59625796e5b93fc897dbbfdfc55f7.jpg', icon: '▯', title: 'Lackschutz gegen Ausbleichen', text: 'Acryllack erhält die natürliche Farbe des Holzes optimal und schützt das Furnier zuverlässig vor UV-Strahlung.' },
      { img: '/images/portfolio/7c35108f010e175bccbffd75468c9cc5.jpg', icon: '◈', title: 'Griffloses Gola-System', text: 'Das Gola-Profil sorgt für eine cleane Silhouette ohne Beschläge — moderner Minimalismus auf höchstem handwerklichem Niveau.' },
    ],
  },
  'milaro-garden': {
    name: 'Milaro Garden',
    desc: 'Die Outdoor-Küche Milaro Garden ist ein echter Frischluft-Genuss! Speziell für den Ausseneinsatz konzipiert, lädt sie zu einem neuen Blick auf das Schweizer Landleben ein. Das modulare System ermöglicht eine stilvolle, funktionale Vollküche — überall.',
    price: 'ab CHF 20',
    variants: [
      { name: 'Irische Eiche', color: '#8c6e4a', images: [
        '/images/portfolio/dcd8e438154a09bf051818beab3324c7.jpg',
        '/images/portfolio/76b6ebe004f7543fe05a48e9ec1fca25.jpg',
        '/images/portfolio/aa4430af56c15196b7112388987007a2.jpg',
        '/images/portfolio/0c393b0dd0836fd86c9dfb693e5846a3.jpg',
        '/images/portfolio/581647e9f39cc11c1b6ed217e590263c.jpg',
        '/images/portfolio/b43452c492176a3ea329e8b9c78ff2de.jpg',
        '/images/portfolio/4f402b824210caabaeab5fffa57c1221.jpg',
        '/images/portfolio/0129c57fc5821fbd37cef36c3bf938fa.jpg',
        '/images/portfolio/db0cefcfcaa3184e49e1cedaa4eb2163.jpg',
        '/images/portfolio/d967b468545cd29071fc6e4f53c1ab99.jpg',
        '/images/portfolio/4000a42f224b6e6e61f26836fa9a6b1c.jpg',
      ] },
    ],
    specs: [
      { label: 'Einsatzbereich', value: 'Innen + Aussen' },
      { label: 'Module', value: '14 Einheiten' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'System', value: 'Modular / flexibel' },
    ],
    tagline: 'Näher zur Natur',
    featureImg: '/images/portfolio/dcd8e438154a09bf051818beab3324c7.jpg',
    features: [
      { img: '/images/portfolio/dcd8e438154a09bf051818beab3324c7.jpg', icon: '◇', title: 'Umfangreiche Planungsmöglichkeiten', text: '14 offene und geschlossene Module sowie Kochinseln zur Auswahl — grenzenlose Gestaltungsfreiheit für jeden Aussenbereich.' },
      { img: '/images/portfolio/e28a63066b353a01fd5198e0401e27c1.jpg', icon: '▦', title: 'Zuverlässig bei jedem Wetter', text: 'Für den Betrieb bei jedem Wetter und jeder Temperatur konzipiert — Schweizer Outdoor-Qualität ohne Abstriche.' },
      { img: '/images/portfolio/a10e08e03881e71d8737af190d36611e.jpg', icon: '▯', title: 'Mobilität und Modularität', text: 'Alle Module sind austauschbar und beliebig umstellbar — so anpassungsfähig wie Ihr Lebensstil und Ihre Bedürfnisse.' },
      { img: '/images/portfolio/4cc3d849a55280bfc6327bb1575dd094.jpg', icon: '◈', title: 'Outdoor-Materialien', text: 'Materialien und Beschichtungen eigens für den Ausseneinsatz entwickelt — robust, pflegeleicht und langlebig unter freiem Himmel.' },
    ],
  },
  'vector-touch': {
    name: 'Vector Touch',
    desc: 'Vector Touch schenkt totales Eintauchen in Gemütlichkeit und das Gefühl von Leichtigkeit. Die weiche, samtige Oberfläche in gedämpften Farbtönen realisiert ein zurückhaltendes und aktuelles minimalistisches Interieur — zeitgemäss und wohnlich.',
    price: 'ab CHF 13',
    variants: [
      { name: 'Kaschmir Supermat', color: '#d4c4b7', images: [
        '/images/portfolio/ad7cb35eb0c5e2758ea72a5fbdc90622.jpg',
        '/images/portfolio/f66e59ddc921391eb74bb9e2e29db1a7.jpg',
        '/images/portfolio/449496390bcc255dc9a3dbf6ff9d955c.jpg',
        '/images/portfolio/f7922a53629cc62c386441dcc52d21d4.jpg',
        '/images/portfolio/4f0ddcd36ef1dee2d28fef62b0298ebe.jpg',
      ] },
    ],
    specs: [
      { label: 'Material', value: 'PET-Supermat-Kunststoff' },
      { label: 'Oberfläche', value: 'Samtig / Matt' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Stärke', value: 'Ab 0,5 mm' },
    ],
    tagline: 'Mattes Perfekt',
    featureImg: '/images/portfolio/ad7cb35eb0c5e2758ea72a5fbdc90622.jpg',
    features: [
      { img: '/images/portfolio/ad7cb35eb0c5e2758ea72a5fbdc90622.jpg', icon: '◇', title: 'Schutz vor Mikrokratzern', text: 'Super-mattes PET-Finish mit seidenartig weicher Textur streut das Licht — feine Kratzer werden nahezu unsichtbar.' },
      { img: '/images/portfolio/c51d3477904f8f44dc7bc410e9bf7e49.jpg', icon: '▦', title: 'Sichere Schönheit', text: 'PET-Kunststoff — sicher auch für Lebensmittelbehälter! Ökologisches Finish mit angenehmer Samtstruktur ohne Schadstoffe.' },
      { img: '/images/portfolio/c8f6de1aa3ae6af85bca4f248a118434.jpg', icon: '▯', title: 'Verformungsresistent bei Dampf', text: 'Hochdichter MDF-Kern widersteht Feuchtigkeit zuverlässig — kein Quellen, kein Verziehen, auch bei hoher Luftfeuchtigkeit.' },
      { img: '/images/portfolio/db35bbf105bb9cf6c8d4b26f7ba2406f.jpg', icon: '◈', title: 'Offene Regale ohne Fugen', text: 'Beidseitige Frontbeschichtung — Kanten und Innenseiten der Regale sind makellos verarbeitet, auch im offenen Bereich.' },
    ],
  },
  'integrato': {
    name: 'Integrato',
    desc: 'Integrato steht für aktuelles, klares Design und Minimalismus im Detail. Die Küchenfronten bestehen aus 22 mm MDF, beschichtet mit hochwertiger, strapazierfähiger Emaille — für eine Küche, die so langlebig wie elegant ist.',
    price: 'ab CHF 11',
    variants: [
      { name: 'Weiss Hochglanz', color: '#f5f5f0', images: ['/images/portfolio/36344037b995985766eeceef83ce2416.jpg'] },
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
    featureImg: '/images/portfolio/12ae09b1a6859eb54b400695a28e6a86.jpg',
    features: [
      { img: '/images/portfolio/12ae09b1a6859eb54b400695a28e6a86.jpg', icon: '◇', title: 'Griffloses System', text: 'Moderner Minimalismus — Fräsung statt Griff! Klare Linien, nichts Überflüssiges, sicher für Kinder und einfach zu reinigen.' },
      { img: '/images/portfolio/36344037b995985766eeceef83ce2416.jpg', icon: '▦', title: 'Geräuschloses Schliessen', text: 'Integrierte Dämpfer sorgen für sanftes, leises Schliessen — kein lautes Zuschlagen, kein Lärm, auch spät abends.' },
      { img: '/images/portfolio/7b34b4c15c8e0d38560831c32a8534ee.jpg', icon: '▯', title: 'Harmonischer Lebensraum', text: 'Klare Geometrie, weiche Texturen, zurückhaltende Dekore. Integrato schafft eine Atmosphäre von Harmonie und Ordnung.' },
      { img: '/images/portfolio/3dee7a29ee0c47aa9e279a10ff50b478.jpg', icon: '◈', title: 'Robuste Emaille auf 22 mm MDF', text: 'Fronten aus 22 mm MDF mit Emaillebeschichtung — aussergewöhnliche Belastbarkeit und langfristige Schönheit im Küchenalltag.' },
    ],
  },
  'wood-dekor-email': {
    name: 'Wood Décor Email',
    desc: 'Wood Décor Email verbindet echte Holzdekore mit strapazierfähiger Emaillebeschichtung — ein einzigartiger Materialmix, der die Wärme des Holzes mit der Langlebigkeit des Emails vereint. Jede Front erzählt von Handwerk und natürlicher Schönheit.',
    price: 'ab CHF 16',
    variants: [
      { name: 'Eiche Natur Matt', color: '#c8a878', images: [
        '/images/portfolio/9160b6cce5996b30c21c0ee66d9b6ed1.jpg',
        '/images/portfolio/65c52c56114150980c1a65246a9b0a81.jpg',
        '/images/portfolio/52b07953411fc3fed5f8cfb1476fa11d.jpg',
        '/images/portfolio/79331d9e3a19189cb637a3193ee4ec29.jpg',
      ] },
    ],
    specs: [
      { label: 'Frontmaterial', value: 'MDF + Holzdekor + Emaille' },
      { label: 'Frontstärke', value: '22 mm' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Oberfläche', value: 'Matt / Seidenmatt' },
    ],
    tagline: 'Holz trifft Email',
    featureImg: '/images/portfolio/9160b6cce5996b30c21c0ee66d9b6ed1.jpg',
    features: [
      { img: '/images/portfolio/9160b6cce5996b30c21c0ee66d9b6ed1.jpg', icon: '◇', title: 'Echter Holzcharakter', text: 'Authentische Holzdekore — jede Front wirkt wie massives Holz, ist dabei aber deutlich langlebiger und pflegeleichter.' },
      { img: '/images/portfolio/0101f240452d9c172fb690cf5dc2f0da.jpg', icon: '▦', title: 'Emaille-Schutzschicht', text: 'Die Emaillebeschichtung verleiht den Fronten eine samtig-matte Oberfläche, die unempfindlich gegen Fettflecken und Fingerabdrücke ist.' },
      { img: '/images/portfolio/d6860c01fb5b2228052d770f73609123.jpg', icon: '▯', title: 'Natürliche Wärme', text: 'Holzdekore schaffen eine einladende Atmosphäre — warm, zeitlos, ideal für Küchen, die Gemütlichkeit und Stil vereinen.' },
      { img: '/images/portfolio/770e31cca96624575dd7900903ed4bed.jpg', icon: '◈', title: 'Zwei Welten, ein Design', text: 'Die Kombination aus Holzdekor und emaillierten Fronten ermöglicht kreative Kontraste — rustikal und modern zugleich.' },
    ],
  },
  'tokyo-glanz': {
    name: 'Tokyo Glanz',
    desc: 'Tokyo Glanz steht für klaren Minimalismus mit Hochglanz-Akzenten. Die spiegelnden Fronten bringen viel Licht in den Raum und schaffen eine moderne, grosszügig wirkende Küche — zeitlos und pflegeleicht zugleich.',
    price: 'ab CHF 9',
    variants: [
      { name: 'Hellgrau', color: '#c0c0c0', images: [
        '/images/portfolio/82128da6551c91c84cbb51e5d417a8dd.jpg',
        '/images/portfolio/fa8bbe86059d3b77beef41e70fb2dc10.jpg',
      ] },
      { name: 'Weiss', color: '#f0f0ee', images: [
        '/images/portfolio/b53eac58ea68c013c3700ebe3b73e2ce.jpg',
        '/images/portfolio/35408d9a5223b11dfc452846b8e10eda.jpg',
        '/images/portfolio/159df34b49f832891dac5ca8670fe49c.jpg',
        '/images/portfolio/3f09d4c4985ab3d4e2d63bc72b008c7f.jpg',
      ] },
    ],
    specs: [
      { label: 'Material', value: 'MDF + PVC Hochglanz' },
      { label: 'Frontstärke', value: '16 mm' },
      { label: 'Garantie', value: 'Bis zu 15 Jahre' },
      { label: 'Griffe', value: 'Alu-Profilgriff / Grifflos' },
    ],
    tagline: 'Glanz des Ostens',
    featureImg: '/images/portfolio/82128da6551c91c84cbb51e5d417a8dd.jpg',
    features: [
      { img: '/images/portfolio/82128da6551c91c84cbb51e5d417a8dd.jpg', icon: '◇', title: 'Hochglanz-Optik', text: 'Spiegelnde Fronten reflektieren das Licht und lassen die Küche grösser, heller und moderner wirken — ideal für kleinere Räume.' },
      { img: '/images/portfolio/b53eac58ea68c013c3700ebe3b73e2ce.jpg', icon: '▦', title: 'Einfache Reinigung', text: 'Glatte, geschlossene Oberflächen ohne Poren oder Rillen — Fett und Staub lassen sich mit einem Wisch entfernen.' },
      { img: '/images/portfolio/eb056b3ef1b9e2b758c1f34d5aa0a03d.jpg', icon: '▯', title: 'Zeitloses Design', text: 'Klare Linien, flächenbündige Fronten, minimale Griffleisten — Tokyo Glanz bleibt modern, egal wie sich Trends entwickeln.' },
      { img: '/images/portfolio/78e7482b94a2107ea5db1e1f0ec879ea.jpg', icon: '◈', title: 'Grosse Farbauswahl', text: 'Von reinweissem Hochglanz bis zu tiefem Anthrazit — wählen Sie den Ton, der zu Ihrem Zuhause passt.' },
    ],
  },
  // ponytail: images direct, no variants — matches marya.ru gallery-only layout
  'nicolle-cabinet': {
    name: 'Nicolle Schrank',
    desc: 'Der Drehtürenschrank Nicolle vereint klassische Eleganz mit modernen Materialien. Hochwertige MDF-Fronten in mattem oder glänzendem Finish, präzise Scharniere und eine durchdachte Innenaufteilung machen ihn zum perfekten Alltagsbegleiter.',
    price: 'ab CHF 12',
    images: [
      '/images/schraenke/nicolle-cabinet/01.jpg',
      '/images/schraenke/nicolle-cabinet/02.jpg',
      '/images/schraenke/nicolle-cabinet/03.jpg',
      '/images/schraenke/nicolle-cabinet/04.jpg',
      '/images/schraenke/nicolle-cabinet/05.jpg',
      '/images/schraenke/nicolle-cabinet/06.jpg',
    ],
    specs: [
      { label: 'Typ', value: 'Drehtürenschrank' },
      { label: 'Material', value: 'MDF lackiert' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Montage', value: 'Inkl. Aufbauservice' },
    ],
    tagline: 'Klassik trifft Komfort',
    featureImg: '/images/portfolio/cbee8d4dad621234d3f54ea4a10d0607.jpg',
    features: [
      { img: '/images/portfolio/cbee8d4dad621234d3f54ea4a10d0607.jpg', icon: '◇', title: 'Zeitloses Design', text: 'Klare Linien und hochwertige Oberflächen — Nicolle passt sich jedem Einrichtungsstil an.' },
      { img: '/images/portfolio/dcb38934e0b6fa288a1c17a888d8ec7f.jpg', icon: '▦', title: 'Durchdachte Innenaufteilung', text: 'Kleiderstangen, Einlegeböden und Schubladen lassen sich individuell kombinieren.' },
      { img: '/images/portfolio/a6bc17bf00b5cd9598b633be4b50f2dd.jpg', icon: '▯', title: 'Präzise Scharniere', text: 'Softclose-Scharniere sorgen für leises, sanftes Schliessen — langlebig und wartungsfrei.' },
      { img: '/images/portfolio/b00f685e4aaf8e201a0b752d30a3af37.jpg', icon: '◈', title: 'Massgefertigt', text: 'Jeder Schrank wird nach Ihren Raummassen produziert — kein Zentimeter verschwendet.' },
    ],
  },
  // ponytail: images direct, no variants
  'mixal-cabinet': {
    name: 'Mixal Schrank',
    desc: 'Mixal verbindet Holzdekore mit modernen Lackfronten zu einem harmonischen Ganzen. Der Drehtürenschrank bietet maximalen Stauraum bei minimaler Optik — ideal für Schlafzimmer und Flure.',
    price: 'ab CHF 10',
    images: [
      '/images/schraenke/mixal-cabinet/01.jpg',
      '/images/schraenke/mixal-cabinet/02.jpg',
      '/images/schraenke/mixal-cabinet/03.jpg',
    ],
    specs: [
      { label: 'Typ', value: 'Drehtürenschrank' },
      { label: 'Material', value: 'Glas / MDF' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Montage', value: 'Inkl. Aufbauservice' },
    ],
    tagline: 'Harmonie der Materialien',
    featureImg: '/images/portfolio/7a58d65e9c6a2fb00d2baba817e3e4ab.jpg',
    features: [
      { img: '/images/portfolio/7a58d65e9c6a2fb00d2baba817e3e4ab.jpg', icon: '◇', title: 'Glas-Lack Kombination', text: 'Satiniertes Glas trifft auf seidenmatte Lackfronten — ein elegantes Zusammenspiel der Materialien.' },
      { img: '/images/portfolio/c8404b22e082c785b272c0c11e93ba55.jpg', icon: '▦', title: 'Beleuchtung integrierbar', text: 'Optionale LED-Innenbeleuchtung setzt den Inhalt perfekt in Szene.' },
      { img: '/images/portfolio/838d28dd2530824b20527b8669e2d750.jpg', icon: '▯', title: 'Optimierte Raumtiefe', text: 'Nur 58 cm Tiefe — ideal auch für Flure und kleinere Räume.' },
      { img: '/images/portfolio/7a58d65e9c6a2fb00d2baba817e3e4ab.jpg', icon: '◈', title: 'Massgefertigt', text: 'Jeder Schrank wird nach Ihren Raummassen produziert — kein Zentimeter verschwendet.' },
    ],
  },
  // ponytail: images direct, no variants
  'spark-cabinet': {
    name: 'Spark Schrank',
    desc: 'Spark Schrank bringt die charakteristische Spark-Ästhetik ins Schlafzimmer — strukturierte Oberflächen, markante Linienführung und eine robuste Konstruktion für den täglichen Gebrauch.',
    price: 'ab CHF 13',
    images: [
      '/images/schraenke/spark-cabinet/01.jpg',
      '/images/schraenke/spark-cabinet/02.jpg',
      '/images/schraenke/spark-cabinet/03.jpg',
      '/images/schraenke/spark-cabinet/04.jpg',
    ],
    specs: [
      { label: 'Typ', value: 'Drehtürenschrank' },
      { label: 'Material', value: 'MDF strukturiert' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Oberfläche', value: 'Strukturiert matt' },
    ],
    tagline: 'Struktur und Stärke',
    featureImg: '/images/portfolio/ea7b176a2eb1e8b6041d418a6097c8d9.jpg',
    features: [
      { img: '/images/portfolio/ea7b176a2eb1e8b6041d418a6097c8d9.jpg', icon: '◇', title: 'Strukturierte Fronten', text: 'Taktile Oberflächen erzeugen Tiefe und Charakter — modern und zeitlos zugleich.' },
      { img: '/images/portfolio/76c92d48046820a4a3a0e186eb80c2e1.jpg', icon: '▦', title: 'Robuste Konstruktion', text: 'Massiver Korpus aus feuchtigkeitsbeständigem Material — jahrelang stabil.' },
      { img: '/images/portfolio/54ccddb70156707b6730ac61f03569e3.jpg', icon: '▯', title: 'Grosszügiger Stauraum', text: 'Breite Innenfächer und Hängebereiche für maximale Ordnung.' },
      { img: '/images/portfolio/4198920705b5069067c6290eb103b85d.jpg', icon: '◈', title: 'Individuelle Konfiguration', text: 'Höhe, Breite und Innenaufteilung werden nach Ihren Wünschen gefertigt.' },
    ],
  },
  // ponytail: images direct, no variants
  'teramo-cabinet': {
    name: 'Teramo Schrank',
    desc: 'Teramo Schrank überzeugt mit elegantem Rahmendesign und hochwertigen Oberflächen. Die Kombination aus Griffleisten und matten Fronten schafft eine luxuriöse Atmosphäre im Schlafzimmer.',
    price: 'ab CHF 14',
    images: [
      '/images/schraenke/teramo-cabinet/01.jpg',
      '/images/schraenke/teramo-cabinet/02.jpg',
      '/images/schraenke/teramo-cabinet/03.jpg',
      '/images/schraenke/teramo-cabinet/04.jpg',
      '/images/schraenke/teramo-cabinet/05.jpg',
    ],
    specs: [
      { label: 'Typ', value: 'Drehtürenschrank' },
      { label: 'Material', value: 'MDF lackiert' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'Aluminium-Griffleiste' },
    ],
    tagline: 'Eleganz im Detail',
    featureImg: '/images/portfolio/e11811d006c22cffa32eb3d3738c3b2f.jpg',
    features: [
      { img: '/images/portfolio/e11811d006c22cffa32eb3d3738c3b2f.jpg', icon: '◇', title: 'Rahmendesign', text: 'Profilierte Rahmen geben dem Schrank eine elegante Tiefenwirkung.' },
      { img: '/images/portfolio/0eefa72016688da9c04c58798c059e81.jpg', icon: '▦', title: 'Aluminium-Griffleisten', text: 'Feine Alu-Griffleisten als stilvolles Element und ergonomischer Griff zugleich.' },
      { img: '/images/portfolio/26c39bf4cc7d0fb559f9122e3eea180c.jpg', icon: '▯', title: 'Mattes Finish', text: 'Samtig-matte Oberfläche — fingerabdruckresistent und immer edel.' },
      { img: '/images/portfolio/9f5c98a6a2e0e7168a578af84b0c463c.jpg', icon: '◈', title: 'Massgefertigt', text: 'Jede Einheit wird auf Ihren Raum abgestimmt — vom Boden bis zur Decke.' },
    ],
  },
  // ponytail: images direct, no variants
  'mix-wardrobe': {
    name: 'Mix 22 Schiebetüren',
    desc: 'Der Schiebetürenschrank Mix 22 spart Platz und bietet viel Stauraum. Glasfronten, Spiegel und Holzdekore lassen sich frei kombinieren — für eine Garderobe, die genauso individuell ist wie Sie.',
    price: 'ab CHF 11',
    images: [
      '/images/schraenke/mix-wardrobe/01.jpg',
      '/images/schraenke/mix-wardrobe/02.jpg',
      '/images/schraenke/mix-wardrobe/03.jpg',
      '/images/schraenke/mix-wardrobe/04.jpg',
    ],
    specs: [
      { label: 'Typ', value: 'Schiebetürenschrank' },
      { label: 'Türen', value: 'Glas / Spiegel / Dekor' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Schienensystem', value: 'Lautlos-Gleiter' },
    ],
    tagline: 'Gleiten ohne Grenzen',
    featureImg: '/images/portfolio/e9db682281519675cf3c0d4813486a64.jpg',
    features: [
      { img: '/images/portfolio/e9db682281519675cf3c0d4813486a64.jpg', icon: '◇', title: 'Platzsparend', text: 'Schiebetüren öffnen nach innen — kein Schwenkraum nötig, ideal für enge Räume.' },
      { img: '/images/portfolio/7842363bc9dbe4f13d74ca85df3d5495.jpg', icon: '▦', title: 'Freie Frontgestaltung', text: 'Kombinieren Sie Glas, Spiegel und Holzdekor nach Ihrem Geschmack.' },
      { img: '/images/portfolio/9370a66ecde080de49a047caa70a7b52.jpg', icon: '▯', title: 'Lautloses Gleitsystem', text: 'Hochwertige Aluminiumschienen für sanftes, geräuschloses Öffnen und Schliessen.' },
      { img: '/images/portfolio/7f05c377f639d49f663c2f12718821f0.jpg', icon: '◈', title: 'Vom Boden bis zur Decke', text: 'Raumhohe Ausführung maximiert den Stauraum und wirkt architektonisch wertvoll.' },
    ],
  },
  'nicolle-wardrobe': {
    name: 'Nicolle Schiebetüren',
    desc: 'Nicolle Schiebetürenschrank verbindet elegantes Frontdesign mit einem leise gleitenden Schienensystem. Mattglas, Spiegel oder strukturierte Paneele — die Wahl liegt bei Ihnen.',
    price: 'ab CHF 13',
    variants: [
      { name: 'Mattglas Weiss', color: '#eaece8', images: ['/images/portfolio/9870f10e4e0da083ba5641e341b2ffae.jpg'] },
      { name: 'Spiegel Grau', color: '#b0b0b8', images: ['/images/portfolio/12b17a0fe961c3cb047f5fae71b4c43c.jpg'] },
    ],
    specs: [
      { label: 'Typ', value: 'Schiebetürenschrank' },
      { label: 'Türen', value: 'Glas / Spiegel / Dekor' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Schienensystem', value: 'Lautlos-Gleiter' },
    ],
    tagline: 'Eleganz in Bewegung',
    featureImg: '/images/portfolio/c8e9ae7ad78b5f717798a61bd224c5ee.jpg',
    features: [
      { img: '/images/portfolio/c8e9ae7ad78b5f717798a61bd224c5ee.jpg', icon: '◇', title: 'Elegante Frontpaneele', text: 'Feine Rahmenprofile und edle Glasflächen verleihen dem Schrank Luxuscharakter.' },
      { img: '/images/portfolio/9870f10e4e0da083ba5641e341b2ffae.jpg', icon: '▦', title: 'Spiegelfront-Option', text: 'Der integrierte Spiegel spart Platz und lässt den Raum grösser wirken.' },
      { img: '/images/portfolio/311f41f7f34869f12afdfab06c855ba4.jpg', icon: '▯', title: 'Innenbeleuchtung möglich', text: 'LED-Streifen im Innern machen das Finden von Kleidung zum Erlebnis.' },
      { img: '/images/portfolio/12b17a0fe961c3cb047f5fae71b4c43c.jpg', icon: '◈', title: 'Individuelle Inneneinteilung', text: 'Hängestangen, Schubladen, Schuhfächer — alles nach Ihren Bedürfnissen.' },
    ],
  },
  'nova-wardrobe': {
    name: 'Nova Schiebetüren',
    desc: 'Nova Schiebetürenschrank steht für puren Minimalismus. Rahmenlose Fronten, bündige Oberflächen und ein unsichtbares Gleitsystem — ideal für moderne Schlafzimmer ohne Kompromisse.',
    price: 'ab CHF 12',
    variants: [
      { name: 'Weiss Hochglanz', color: '#f2f0ee', images: ['/images/portfolio/18ae86c821167259f84396ce9b60eb96.jpg'] },
      { name: 'Anthrazit Matt', color: '#484848', images: ['/images/portfolio/f1733d50f02ed5408865f28a42a7065f.jpg'] },
    ],
    specs: [
      { label: 'Typ', value: 'Schiebetürenschrank' },
      { label: 'Design', value: 'Rahmenlos / minimalistisch' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Schienensystem', value: 'Unsichtbar integriert' },
    ],
    tagline: 'Purer Minimalismus',
    featureImg: '/images/portfolio/1c548a5e617fac9cecb9eeeb82918ed3.jpg',
    features: [
      { img: '/images/portfolio/1c548a5e617fac9cecb9eeeb82918ed3.jpg', icon: '◇', title: 'Rahmenlose Fronten', text: 'Kein sichtbarer Rahmen — die Fronten verschmelzen mit der Wand.' },
      { img: '/images/portfolio/18ae86c821167259f84396ce9b60eb96.jpg', icon: '▦', title: 'Bündige Oberfläche', text: 'Alle Fronten auf einer Ebene — kein Vorsprung, keine Kante, pure Form.' },
      { img: '/images/portfolio/cda08d2f89a7557783116abc800ba529.jpg', icon: '▯', title: 'Unsichtbares Gleitsystem', text: 'Die Schiene ist im Deckenbereich verborgen — kein sichtbares Schienenprofil.' },
      { img: '/images/portfolio/f1733d50f02ed5408865f28a42a7065f.jpg', icon: '◈', title: 'Beliebige Raumhöhe', text: 'Passt sich jeder Raumhöhe an — vom Standard bis zum Loft.' },
    ],
  },
  'spark-wardrobe': {
    name: 'Spark Schiebetüren',
    desc: 'Spark Schiebetürenschrank bringt die markante Spark-Struktur in das Gleittürenformat. Robuste Paneele in verschiedenen Texturen, kombinierbar mit Spiegel- oder Glasfeldern.',
    price: 'ab CHF 14',
    variants: [
      { name: 'Graphit Struktur', color: '#545454', images: ['/images/portfolio/9af035a18ef5a6562cb5274cc15f7669.jpg'] },
      { name: 'Sand Matt', color: '#d0c4a8', images: ['/images/portfolio/b38e24412ca113fe5b5620ef772bb4c3.jpg'] },
    ],
    specs: [
      { label: 'Typ', value: 'Schiebetürenschrank' },
      { label: 'Material', value: 'MDF strukturiert' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Kombination', value: 'Dekor + Spiegel + Glas' },
    ],
    tagline: 'Struktur im Gleiten',
    featureImg: '/images/portfolio/991153059e0204f19d1a6e44471e7691.jpg',
    features: [
      { img: '/images/portfolio/991153059e0204f19d1a6e44471e7691.jpg', icon: '◇', title: 'Strukturierte Paneele', text: 'Taktile Oberflächen setzen spannende Kontraste zur glatten Wand.' },
      { img: '/images/portfolio/9af035a18ef5a6562cb5274cc15f7669.jpg', icon: '▦', title: 'Mix aus Materialien', text: 'Kombinieren Sie Struktur mit Spiegel oder Glas für individuelle Akzente.' },
      { img: '/images/portfolio/9aa7dd6c49631db3b8558fe344ad08b6.jpg', icon: '▯', title: 'Raumhoch montierbar', text: 'Vom Boden bis zur Decke für maximalen Stauraum und architektonische Wirkung.' },
      { img: '/images/portfolio/b38e24412ca113fe5b5620ef772bb4c3.jpg', icon: '◈', title: 'Robuste Konstruktion', text: 'Stabile Gleiter und Doppelschienen für jahrelangen reibungslosen Betrieb.' },
    ],
  },
  'top-line-wardrobe': {
    name: 'Top Line Schiebetüren',
    desc: 'Top Line ist das Premium-Schiebetürsystem von Marya — mit schwerem Aluminiumprofil, bündigem Soft-Stop und einer nahezu unbegrenzten Auswahl an Füllelementen für anspruchsvolle Einrichtungen.',
    price: 'ab CHF 16',
    variants: [
      { name: 'Alu / Glas Klar', color: '#d0d8e0', images: ['/images/portfolio/c8404b22e082c785b272c0c11e93ba55.jpg'] },
      { name: 'Alu / Eiche Dekor', color: '#b89860', images: ['/images/portfolio/838d28dd2530824b20527b8669e2d750.jpg'] },
    ],
    specs: [
      { label: 'Typ', value: 'Premium-Schiebetürenschrank' },
      { label: 'Profil', value: 'Aluminium Heavy-Duty' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Stop', value: 'Soft-Stop integriert' },
    ],
    tagline: 'Premium ohne Kompromisse',
    featureImg: '/images/portfolio/ae2fba7b9993e49687b3175b74a831e7.jpg',
    features: [
      { img: '/images/portfolio/ae2fba7b9993e49687b3175b74a831e7.jpg', icon: '◇', title: 'Heavy-Duty Aluminiumprofil', text: 'Breite, stabile Profile für Türen bis 80 kg — solide wie ein Hotelschrank.' },
      { img: '/images/portfolio/c8404b22e082c785b272c0c11e93ba55.jpg', icon: '▦', title: 'Integrierter Soft-Stop', text: 'Die Tür verlangsamt sich automatisch kurz vor dem Anschlag — kein Knall, kein Verschleiss.' },
      { img: '/images/portfolio/a239dadbbaad5628b4c88a7ef17bfd3d.jpg', icon: '▯', title: 'Freie Füllauswahl', text: 'Glas, Spiegel, Holzdekor, Leder-Optik — nahezu unbegrenzte Kombinationsmöglichkeiten.' },
      { img: '/images/portfolio/838d28dd2530824b20527b8669e2d750.jpg', icon: '◈', title: 'Bis 3,5 m Breite', text: 'Auch grosse Wandöffnungen werden vollflächig abgedeckt — kein Pfeiler bleibt ungenutzt.' },
    ],
  },
  'jazz-wardrobe': {
    name: 'Jazz Schiebetüren',
    desc: 'Jazz Schiebetürenschrank verbindet die charakteristische Jazz-Ästhetik mit dem Komfort eines modernen Gleitsystems. Klare Linien, matte Oberflächen und flexible Innenaufteilung.',
    price: 'ab CHF 13',
    variants: [
      { name: 'Weiss Matt', color: '#ededea', images: ['/images/portfolio/7e4a6a62f27218efa6914c5871d3f1a6.jpg'] },
      { name: 'Graphit NCS', color: '#505058', images: ['/images/portfolio/a09ca380e3448d02096f5191f5235335.jpg'] },
    ],
    specs: [
      { label: 'Typ', value: 'Schiebetürenschrank' },
      { label: 'Material', value: 'MDF lackiert matt' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Schienensystem', value: 'Lautlos-Gleiter' },
    ],
    tagline: 'Jazz in jedem Zimmer',
    featureImg: '/images/portfolio/1062a76067b8b7c807f8c0c061c60868.jpg',
    features: [
      { img: '/images/portfolio/1062a76067b8b7c807f8c0c061c60868.jpg', icon: '◇', title: 'Jazz-Ästhetik', text: 'Klare Horizontallinien, flächenbündige Fronten — charakteristisch für die Jazz-Serie.' },
      { img: '/images/portfolio/7e4a6a62f27218efa6914c5871d3f1a6.jpg', icon: '▦', title: 'Mattes Finish', text: 'Fingerabdruckresistente, samtig-matte Oberfläche für ein immer gepflegtes Erscheinungsbild.' },
      { img: '/images/portfolio/15376acb0a552a333d2c49fe67fe899c.jpg', icon: '▯', title: 'Flexible Innenaufteilung', text: 'Hängebereiche, Schubladen, Schuhregale — individuell konfigurierbar.' },
      { img: '/images/portfolio/a09ca380e3448d02096f5191f5235335.jpg', icon: '◈', title: 'Leises Gleitsystem', text: 'Hochwertige Aluminiumschienen für sanftes, geräuschloses Öffnen und Schliessen.' },
    ],
  },
  // ponytail: images direct, no variants
  'mix-cabinet': {
    name: 'Mix 22 Schrank',
    desc: 'Mix 22 Schrank bringt die beliebte Mix-Kollektion ins Schlafzimmer. Kombinierbare Fronten aus verschiedenen Materialien, robuste Konstruktion und eine durchdachte Innenaufteilung.',
    price: 'ab CHF 10',
    images: [
      '/images/schraenke/mix-cabinet/01.jpg',
      '/images/schraenke/mix-cabinet/02.jpg',
      '/images/schraenke/mix-cabinet/03.jpg',
      '/images/schraenke/mix-cabinet/04.jpg',
    ],
    specs: [
      { label: 'Typ', value: 'Drehtürenschrank' },
      { label: 'Material', value: 'MDF + Dekor Mix' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Fronten', value: 'Kombinierbar' },
    ],
    tagline: 'Mix aus dem Besten',
    featureImg: '/images/portfolio/9d66a403367d58e107dc6f0dad79e040.jpg',
    features: [
      { img: '/images/portfolio/9d66a403367d58e107dc6f0dad79e040.jpg', icon: '◇', title: 'Materialvielfalt', text: 'Kombinieren Sie Holzdekor, Matt-Lack und Glas in einem Schrank.' },
      { img: '/images/portfolio/b5c0e8a955b0cf788391352a767dfc91.jpg', icon: '▦', title: 'Robuste Konstruktion', text: 'Stabile Verbindungen und hochwertige Scharniere für jahrelange Langlebigkeit.' },
      { img: '/images/portfolio/58f1e2b57f8f4ed743ebb87f40626737.jpg', icon: '▯', title: 'Durchdachte Inneneinteilung', text: 'Kleiderstangen, Schubladen und verstellbare Böden für maximale Ordnung.' },
      { img: '/images/portfolio/a1a59b3be33593775e8a08faa94073b4.jpg', icon: '◈', title: 'Massgefertigt', text: 'Jede Einheit wird auf Ihren Raum zugeschnitten — in Breite, Höhe und Tiefe.' },
    ],
  },
  // ponytail: images direct, no variants
  'vector-cabinet': {
    name: 'Vector Schrank',
    desc: 'Vector Schrank steht für technische Präzision und modernes Design. Klare Horizontallinien, filigrane Griffleisten und hochwertige Lacke machen ihn zum Blickfang in jedem Schlafzimmer.',
    price: 'ab CHF 15',
    images: [
      '/images/schraenke/vector-cabinet/01.jpg',
      '/images/schraenke/vector-cabinet/02.jpg',
      '/images/schraenke/vector-cabinet/03.jpg',
    ],
    specs: [
      { label: 'Typ', value: 'Drehtürenschrank' },
      { label: 'Material', value: 'MDF lackiert' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'Alu-Griffleiste' },
    ],
    tagline: 'Präzision sichtbar',
    featureImg: '/images/portfolio/4d1f3b36c1b955738e378e663d596fb4.jpg',
    features: [
      { img: '/images/portfolio/4d1f3b36c1b955738e378e663d596fb4.jpg', icon: '◇', title: 'Horizontale Linienführung', text: 'Feine Fräslinien gliedern die Frontfläche — ruhig, präzise, modern.' },
      { img: '/images/portfolio/d175142e857f306a84f2c60fb7cc68e9.jpg', icon: '▦', title: 'Alu-Griffleiste', text: 'Umlaufende Aluminiumleiste als Griff und Designelement in einem.' },
      { img: '/images/portfolio/0f2afffaa19da420141edfef5b6af9af.jpg', icon: '▯', title: 'Hochwertige Lacke', text: 'Kratzfester Lack in vielen NCS-Tönen — langlebig und pflegeleicht.' },
      { img: '/images/portfolio/a7fafff86a55778e59ab45a1edc5683b.jpg', icon: '◈', title: 'Raumhoch nach Mass', text: 'Vom Boden bis zur Decke für ein nahtloses, architektonisches Gesamtbild.' },
    ],
  },
  // ponytail: images direct, no variants
  'jazz-cabinet': {
    name: 'Jazz Schrank',
    desc: 'Jazz Schrank überträgt das minimalistische Jazz-Design auf den Drehtürenschrank. Grifflose Fronten, klare Proportionen und hochwertige Materialien — Ordnung trifft Stil.',
    price: 'ab CHF 12',
    images: [
      '/images/schraenke/jazz-cabinet/01.jpg',
      '/images/schraenke/jazz-cabinet/02.jpg',
      '/images/schraenke/jazz-cabinet/03.jpg',
      '/images/schraenke/jazz-cabinet/04.jpg',
    ],
    specs: [
      { label: 'Typ', value: 'Drehtürenschrank' },
      { label: 'Material', value: 'MDF lackiert' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'Grifflos (Fräsung)' },
    ],
    tagline: 'Grifflos, stilvoll',
    featureImg: '/images/portfolio/fc6fa4514f9e7f00421d01119211d555.jpg',
    features: [
      { img: '/images/portfolio/fc6fa4514f9e7f00421d01119211d555.jpg', icon: '◇', title: 'Grifflose Fronten', text: 'Fräsung statt Griff — puristisch, kindersicher und immer sauber.' },
      { img: '/images/portfolio/db53c589c2c71edf9c15cff02095a649.jpg', icon: '▦', title: 'Klare Proportionen', text: 'Gleichmässig gegliederte Frontflächen für ein ruhiges, geordnetes Erscheinungsbild.' },
      { img: '/images/portfolio/f296dd17f9b554063edfd1831217f10f.jpg', icon: '▯', title: 'Matte Oberfläche', text: 'Fingerabdruckresistent und pflegeleicht — ideal für Familien mit Kindern.' },
      { img: '/images/portfolio/ca895d1cb8b2fa151d6a864423245981.jpg', icon: '◈', title: 'Flexibel konfigurierbar', text: 'Hängebereiche, Schubladen, Schuhfächer — individuell nach Bedarf.' },
    ],
  },
  // ponytail: images direct, no variants
  'ice-cabinet': {
    name: 'Ice Schrank',
    desc: 'Ice Schrank besticht durch seine kristallklare Hochglanzoberfläche, die Licht reflektiert und Räume grosszügiger wirken lässt. Ein moderner Drehtürenschrank für alle, die Glanz mögen.',
    price: 'ab CHF 11',
    images: [
      '/images/schraenke/ice-cabinet/01.jpg',
      '/images/schraenke/ice-cabinet/02.jpg',
      '/images/schraenke/ice-cabinet/03.jpg',
    ],
    specs: [
      { label: 'Typ', value: 'Drehtürenschrank' },
      { label: 'Oberfläche', value: 'PVC Hochglanz' },
      { label: 'Garantie', value: 'Bis zu 15 Jahre' },
      { label: 'Pflegehinweis', value: 'Mikrofasertuch empfohlen' },
    ],
    tagline: 'Klar wie Eis',
    featureImg: '/images/portfolio/215187ebeb924658120cb1373a7aac03.jpg',
    features: [
      { img: '/images/portfolio/215187ebeb924658120cb1373a7aac03.jpg', icon: '◇', title: 'Hochglanz-Wirkung', text: 'Spiegelnde Oberfläche reflektiert Licht und vergrössert den Raum optisch.' },
      { img: '/images/portfolio/ff00d21a3249642157bc86d56684c887.jpg', icon: '▦', title: 'Einfache Reinigung', text: 'Glatte, geschlossene Oberfläche ohne Poren — schnell sauber gemacht.' },
      { img: '/images/portfolio/e486d93956cd12ebede7be6a4ed57c76.jpg', icon: '▯', title: 'Moderne Optik', text: 'Klares Design ohne überflüssige Details — zeitlos und immer aktuell.' },
      { img: '/images/portfolio/a62062df65f1e6e8e2bba39ed65cb923.jpg', icon: '◈', title: 'Massgefertigt', text: 'Auf Ihre Raummasse zugeschnitten — kein Millimeter verschwendet.' },
    ],
  },
  // ponytail: images direct, no variants
  'integrato-cabinet': {
    name: 'Integrato Schrank',
    desc: 'Integrato Schrank bringt die grifflose Integrato-Ästhetik ins Schlafzimmer. Dank Push-to-Open-Mechanismus und nahtloser Optik wirkt er wie eine moderne Wandverkleidung.',
    price: 'ab CHF 16',
    images: [
      '/images/schraenke/integrato-cabinet/01.jpg',
      '/images/schraenke/integrato-cabinet/02.jpg',
      '/images/schraenke/integrato-cabinet/03.jpg',
      '/images/schraenke/integrato-cabinet/04.jpg',
      '/images/schraenke/integrato-cabinet/05.jpg',
    ],
    specs: [
      { label: 'Typ', value: 'Drehtürenschrank' },
      { label: 'Material', value: 'MDF 22 mm + Emaille' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'Grifflos (Fräsung)' },
    ],
    tagline: 'Purismus im Schlafzimmer',
    featureImg: '/images/portfolio/79812540060e76b573d232ab3f9c22f4.jpg',
    features: [
      { img: '/images/portfolio/79812540060e76b573d232ab3f9c22f4.jpg', icon: '◇', title: 'Email-Oberfläche', text: 'Langlebige Emaillebeschichtung — kratzfest, pflegeleicht, jahrelang schön.' },
      { img: '/images/portfolio/45a5b55f9fe0c6bad468b8043102ece5.jpg', icon: '▦', title: 'Grifflose Front', text: 'Fräsung statt Griff — maximaler Minimalismus ohne Abstriche beim Komfort.' },
      { img: '/images/portfolio/c1c3cc0c6adca81a76f38744ff0fa178.jpg', icon: '▯', title: 'Klare Geometrie', text: 'Präzise Proportionen und plane Flächen für ein ruhiges, modernes Raumgefühl.' },
      { img: '/images/portfolio/3a87aea9d8a9744a70ea184deb847a9e.jpg', icon: '◈', title: 'Maximale Innenraumnutzung', text: 'Durchdachte Innenaufteilung mit Platz für Kleidung, Wäsche und Zubehör.' },
    ],
  },
  // ponytail: images direct, no variants
  'camelia-cabinet': {
    name: 'Kamelie Schrank',
    desc: 'Kamelie Schrank begeistert mit floral-inspirierten Fronten und weichen Linien. Die Kombination aus zarten Fräsungen und hochwertigen Lacken verleiht jedem Schlafzimmer eine romantische Note.',
    price: 'ab CHF 14',
    images: [
      '/images/schraenke/camelia-cabinet/01.jpg',
      '/images/schraenke/camelia-cabinet/02.jpg',
      '/images/schraenke/camelia-cabinet/03.jpg',
      '/images/schraenke/camelia-cabinet/04.jpg',
      '/images/schraenke/camelia-cabinet/05.jpg',
    ],
    specs: [
      { label: 'Typ', value: 'Drehtürenschrank' },
      { label: 'Material', value: 'MDF lackiert' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'Klassischer Möbelgriff' },
    ],
    tagline: 'Klassische Eleganz',
    featureImg: '/images/portfolio/69eca5fe1f6bfd85593acd6ebdc73652.jpg',
    features: [
      { img: '/images/portfolio/69eca5fe1f6bfd85593acd6ebdc73652.jpg', icon: '◇', title: 'Filigrane Rahmenprofile', text: 'Zarte Rahmenprofile verleihen dem Schrank eine klassisch-elegante Anmutung.' },
      { img: '/images/portfolio/0df0212946e360ede96d1b4bc3bc7c55.jpg', icon: '▦', title: 'Edle Möbelgriffe', text: 'Hochwertige Griffe in verschiedenen Ausführungen als stilvolles Detail.' },
      { img: '/images/portfolio/d29ffbfca9570c890ba444a9c1c7ccb7.jpg', icon: '▯', title: 'Zeitlose Farben', text: 'Von Elfenbein bis Cashmere — sanfte Töne, die zu jedem Einrichtungsstil passen.' },
      { img: '/images/portfolio/0633b1096ed3d65aaec6042130c0a363.jpg', icon: '◈', title: 'Massgefertigt', text: 'Jeder Schrank wird nach Ihren Raummassen und Wünschen gefertigt.' },
    ],
  },
  // ponytail: images direct, no variants
  'antro-cabinet': {
    name: 'Antro Schrank',
    desc: 'Antro Schrank verbindet rustikale Holzstruktur mit modernen Designelementen. Massive Fronten, sichtbare Holzmaserung und versteckte Griffleisten — perfekt für alle, die natürliche Materialien lieben.',
    price: 'ab CHF 11',
    images: [
      '/images/schraenke/antro-cabinet/01.jpg',
      '/images/schraenke/antro-cabinet/02.jpg',
      '/images/schraenke/antro-cabinet/03.jpg',
      '/images/schraenke/antro-cabinet/04.jpg',
      '/images/schraenke/antro-cabinet/05.jpg',
      '/images/schraenke/antro-cabinet/06.jpg',
      '/images/schraenke/antro-cabinet/07.jpg',
    ],
    specs: [
      { label: 'Typ', value: 'Drehtürenschrank' },
      { label: 'Material', value: 'MDF + Naturstruktur' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Oberfläche', value: 'Stein / Holz-Optik' },
    ],
    tagline: 'Natur im Schlafzimmer',
    featureImg: '/images/portfolio/92d576ae7acc9771c78af538da6bd36f.jpg',
    features: [
      { img: '/images/portfolio/92d576ae7acc9771c78af538da6bd36f.jpg', icon: '◇', title: 'Steinoptik-Fronten', text: 'Authentische Steinstruktur auf MDF — edel aussehend, leicht pflegbar.' },
      { img: '/images/portfolio/b6eb8538fb60f9e8803a9348a329f09e.jpg', icon: '▦', title: 'Organische Texturen', text: 'Jede Front wirkt wie ein Naturmaterial — einzigartig und charaktervoll.' },
      { img: '/images/portfolio/f4e22fe3ab7299522ab8e2d377c62a04.jpg', icon: '▯', title: 'Naturholz-Dekor', text: 'Eiche, Walnuss oder Pinie — echte Holzdekore bringen Wärme in den Raum.' },
      { img: '/images/portfolio/68eccfec3fcffd9dcd4b1b0e3071249f.jpg', icon: '◈', title: 'Robuste Oberfläche', text: 'Kratzfeste Beschichtung, die täglich belastet werden kann.' },
    ],
  },
  // ponytail: images direct, no variants
  'trento-cabinet': {
    name: 'Trento Schrank',
    desc: 'Trento Schrank besticht durch seine markante Lamellenoptik und hochwertige Haptik. Die vertikalen Fräsungen schaffen ein eindrucksvolles Licht- und Schattenspiel — ein Statement im Schlafzimmer.',
    price: 'ab CHF 12',
    images: [
      '/images/schraenke/trento-cabinet/01.jpg',
      '/images/schraenke/trento-cabinet/02.jpg',
      '/images/schraenke/trento-cabinet/03.jpg',
    ],
    specs: [
      { label: 'Typ', value: 'Drehtürenschrank' },
      { label: 'Material', value: 'MDF + Emaille' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'Email-Griff / Grifflos' },
    ],
    tagline: 'Email-Qualität im Schlafzimmer',
    featureImg: '/images/portfolio/bd01cbb9ebb77ba2d495cea6aa04f6ad.jpg',
    features: [
      { img: '/images/portfolio/bd01cbb9ebb77ba2d495cea6aa04f6ad.jpg', icon: '◇', title: 'Email-Beschichtung', text: 'Hochwertige Emaillebeschichtung — strapazierfähig, pflegeleicht und langlebig.' },
      { img: '/images/portfolio/4fc1618422a6183e874632c201e5ba57.jpg', icon: '▦', title: 'Samtig-matte Oberfläche', text: 'Angenehme Haptik und elegante Optik — fingerabdruckresistent und zeitlos.' },
      { img: '/images/portfolio/663943c2527239a727b1f2b555fd1937.jpg', icon: '▯', title: 'Klassische Proportionen', text: 'Ausgewogene Masse für ein harmonisches Raumgefühl.' },
      { img: '/images/portfolio/30bda8c359161d8808845c2d28c5e710.jpg', icon: '◈', title: 'Passend zur Küche', text: 'Kombinierbar mit Trento Küche für ein einheitliches Wohnkonzept.' },
    ],
  },
  // ponytail: images direct, no variants
  'allure-cabinet': {
    name: 'Jazz Allure Schrank',
    desc: 'Jazz Allure Schrank ist die Luxusvariante des Jazz-Klassikers — mit hochwertigen Spiegelfronten, edlen Metallic-Oberflächen und sanfter Innenbeleuchtung. Schlafzimmer wird zum Boudoir.',
    price: 'ab CHF 18',
    images: [
      '/images/schraenke/allure-cabinet/01.jpg',
      '/images/schraenke/allure-cabinet/02.jpg',
      '/images/schraenke/allure-cabinet/03.jpg',
    ],
    specs: [
      { label: 'Typ', value: 'Drehtürenschrank' },
      { label: 'Material', value: 'MDF lackiert + Profil' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'Messingriff / Profilrahmen' },
    ],
    tagline: 'Allure im Schlafzimmer',
    featureImg: '/images/portfolio/00a6a152f109df947ebfb383c1298965.jpg',
    features: [
      { img: '/images/portfolio/00a6a152f109df947ebfb383c1298965.jpg', icon: '◇', title: 'Klassisches Profil', text: 'Profilierte Rahmenelemente verleihen dem Schrank einen eleganten Charakter.' },
      { img: '/images/portfolio/be0583385e053fd140547030c0721f2d.jpg', icon: '▦', title: 'Edle Messinggriffe', text: 'Optionale Griffe in Messing oder Chrom setzen luxuriöse Akzente.' },
      { img: '/images/portfolio/b6b13df320802b3ee20e9a9931ed1b39.jpg', icon: '▯', title: 'Breite Farbauswahl', text: 'RAL und NCS Farbtöne in unbegrenzter Auswahl — passend zu Ihrem Zuhause.' },
      { img: '/images/portfolio/06748076dc2e8c11fce5a1424420cfd2.jpg', icon: '◈', title: 'Massgefertigt', text: 'Jede Einheit wird exakt auf Ihre Raummasse angepasst — vom Boden bis zur Decke.' },
    ],
  },
  // ponytail: images direct, no variants
  'tokyo-cabinet': {
    name: 'Tokyo Schrank',
    desc: 'Tokyo Schrank bringt fernöstliche Ästhetik ins Schlafzimmer. Schiebetüren mit japanischem Motiv, warme Holzdekore und versteckte Griffe schaffen eine Oase der Ruhe.',
    price: 'ab CHF 14',
    images: [
      '/images/schraenke/tokyo-cabinet/01.jpg',
      '/images/schraenke/tokyo-cabinet/02.jpg',
      '/images/schraenke/tokyo-cabinet/03.jpg',
    ],
    specs: [
      { label: 'Typ', value: 'Drehtürenschrank' },
      { label: 'Material', value: 'MDF lackiert' },
      { label: 'Garantie', value: 'Bis zu 15 Jahre' },
      { label: 'Griffe', value: 'Alu-Profilgriff' },
    ],
    tagline: 'Tokio-Stil für Zuhause',
    featureImg: '/images/portfolio/38ddb963a6f7543dc72ebad6370cf58c.jpg',
    features: [
      { img: '/images/portfolio/38ddb963a6f7543dc72ebad6370cf58c.jpg', icon: '◇', title: 'Fernöstlicher Minimalismus', text: 'Klare Formen, keine Ornamente — Schönheit durch Reduktion.' },
      { img: '/images/portfolio/75e842c2ea0fcb4e2d64ec93a175c429.jpg', icon: '▦', title: 'Schlankes Profil', text: 'Schmale Frontstärken für ein leichtes, elegantes Erscheinungsbild.' },
      { img: '/images/portfolio/cb055543b8cfe592bf07dbf78bad7d06.jpg', icon: '▯', title: 'Matte Oberfläche', text: 'Samtig-mattes Finish, fingerabdruckresistent und immer gepflegt.' },
      { img: '/images/portfolio/ceab8b038c7b4197662a554b12d6e1e9.jpg', icon: '◈', title: 'Für jeden Raum', text: 'Verfügbar in vielen Breiten und Höhen — ideal für Schlaf-, Kinder- oder Bürozimmer.' },
    ],
  },
  // ponytail: images direct, no variants
  'tokyo-glyanets-cabinet': {
    name: 'Tokyo Glanz Schrank',
    desc: 'Tokyo Glanz Schrank kombiniert das ruhige Tokyo-Design mit einer spiegelnden Hochglanz-Oberfläche. Glanzlack reflektiert das Licht und verleiht dem Schlafzimmer eine exklusive Atmosphäre.',
    price: 'ab CHF 17',
    images: [
      '/images/schraenke/tokyo-glyanets-cabinet/01.jpg',
      '/images/schraenke/tokyo-glyanets-cabinet/02.jpg',
      '/images/schraenke/tokyo-glyanets-cabinet/03.jpg',
      '/images/schraenke/tokyo-glyanets-cabinet/04.jpg',
    ],
    specs: [
      { label: 'Typ', value: 'Drehtürenschrank' },
      { label: 'Oberfläche', value: 'PVC Hochglanz' },
      { label: 'Garantie', value: 'Bis zu 15 Jahre' },
      { label: 'Griffe', value: 'Alu-Profilgriff' },
    ],
    tagline: 'Hochglanz trifft Minimalismus',
    featureImg: '/images/portfolio/bd240992b1d02ab036b6a956c2855c19.jpg',
    features: [
      { img: '/images/portfolio/bd240992b1d02ab036b6a956c2855c19.jpg', icon: '◇', title: 'Spiegelnde Optik', text: 'Hochglanzfronten reflektieren Licht und lassen den Raum grösser wirken.' },
      { img: '/images/portfolio/4836560adab1bb8eb998ee2d66f24174.jpg', icon: '▦', title: 'Einfache Reinigung', text: 'Glatte, porenfreie Fläche — mit einem feuchten Tuch in Sekunden sauber.' },
      { img: '/images/portfolio/a1bd09806dc79f42f609f7bf6f9f8317.jpg', icon: '▯', title: 'Tokyo-Minimalismus', text: 'Klare Formen ohne überflüssige Details — Tokyo-Stil im Schlafzimmer.' },
      { img: '/images/portfolio/16598608d9fb8061cfaff10ac164bed7.jpg', icon: '◈', title: 'Massgefertigt', text: 'Auf Ihre Raummasse zugeschnitten — kein Millimeter verschwendet.' },
    ],
  },
  'optima-dressing': {
    name: 'Optima Ankleidezimmer',
    desc: 'Optima ist das modulare Ankleidezimmersystem von Marya — frei kombinierbare Regale, Hängebereiche, Schubladen und Schuhregale für eine perfekt organisierte persönliche Garderobe.',
    price: 'ab CHF 18',
    variants: [
      { name: 'Weiss Matt', color: '#f0eeeb', images: ['/images/portfolio/6ca6eaeb1fc4e026a121756037673dd9.jpg'] },
      { name: 'Eiche Natur', color: '#c0a060', images: ['/images/portfolio/898d70bb2b670c231f4e07d7641384dc.jpg'] },
    ],
    specs: [
      { label: 'Typ', value: 'Modulares Ankleidezimmer' },
      { label: 'System', value: 'Frei kombinierbar' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Beleuchtung', value: 'LED-Option verfügbar' },
    ],
    tagline: 'Ihr persönlicher Luxus',
    featureImg: '/images/portfolio/694f5b1638d08c50e30c23a45bf50d44.jpg',
    features: [
      { img: '/images/portfolio/694f5b1638d08c50e30c23a45bf50d44.jpg', icon: '◇', title: 'Modulares System', text: 'Frei kombinierbare Module — planen Sie Ihr Traumankleidezimmer nach Ihren Bedürfnissen.' },
      { img: '/images/portfolio/6ca6eaeb1fc4e026a121756037673dd9.jpg', icon: '▦', title: 'Vielfältige Innenausstattung', text: 'Hängebereiche, Schubladen, Schuhregale und offene Fächer — alles nach Plan.' },
      { img: '/images/portfolio/848103ef1e10cfa589062993ff087205.jpg', icon: '▯', title: 'LED-Beleuchtung', text: 'Integrierte LED-Streifen beleuchten jeden Winkel Ihrer Garderobe perfekt.' },
      { img: '/images/portfolio/898d70bb2b670c231f4e07d7641384dc.jpg', icon: '◈', title: 'Massgeplant', text: 'Unsere Designer planen Ihr Ankleidezimmer kostenlos nach Ihrem Grundriss.' },
    ],
  },
  'stilos': {
    name: 'Stilos Ankleidezimmer',
    desc: 'Stilos ist das Premium-Ankleidezimmersystem mit Glasfronten und Rahmenstruktur — für alle, die Ihr Ankleidezimmer wie ein Modegeschäft gestalten möchten. Transparent, organisiert, luxuriös.',
    price: 'ab CHF 22',
    variants: [
      { name: 'Glas / Weiss Rahmen', color: '#e8eef0', images: ['/images/portfolio/cbdaee5a1b4614182908f5d1eb3f8209.jpg'] },
      { name: 'Glas / Alu Rahmen', color: '#c0c8d0', images: ['/images/portfolio/6b093a5d13ae291af6895891f2ec70eb.jpg'] },
    ],
    specs: [
      { label: 'Typ', value: 'Premium Ankleidezimmer' },
      { label: 'Fronten', value: 'Klarglas / Mattglas' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Rahmen', value: 'Aluminium / Weiss' },
    ],
    tagline: 'Transparenz und Stil',
    featureImg: '/images/portfolio/b53de321077cb44f2717b0b413e8f876.jpg',
    features: [
      { img: '/images/portfolio/b53de321077cb44f2717b0b413e8f876.jpg', icon: '◇', title: 'Glasfronten', text: 'Durchsichtige oder mattierte Glasfronten geben dem Ankleidezimmer ein edles Erscheinungsbild.' },
      { img: '/images/portfolio/cbdaee5a1b4614182908f5d1eb3f8209.jpg', icon: '▦', title: 'Aluminium-Rahmenstruktur', text: 'Stabile Aluprofile bilden die Konstruktion — leicht, robust und dauerhaft.' },
      { img: '/images/portfolio/757bd8c5c3487a2c42ec0a0de28bc4c0.jpg', icon: '▯', title: 'Sichtbarer Inhalt', text: 'Durch die Glasfronten sehen Sie sofort, was wo liegt — keine Suche mehr.' },
      { img: '/images/portfolio/6b093a5d13ae291af6895891f2ec70eb.jpg', icon: '◈', title: 'Kostenlose Planung', text: 'Wir planen Ihr Stilos-Ankleidezimmer gratis nach Ihrem Grundriss und Wünschen.' },
    ],
  },
  'jazz-allure': {
    name: 'Jazz Allure',
    desc: 'Jazz Allure verbindet die bewährte Jazz-Qualität mit klassisch-eleganten Details: Profifräsungen, edle Lackoberflächen und zeitlose Proportionen. Eine Küche für alle, die Stil und Funktionalität nicht trennen möchten.',
    price: 'ab CHF 48',
    variants: [
      { name: 'Weiss Glanz', color: '#f5f5f0', images: [
        '/images/portfolio/ff9a710b148730a1d74acffdc6d6c965.jpg',
        '/images/portfolio/a5f9d7491b51db44bdfa567a49c7dc4f.jpg',
        '/images/portfolio/b9e2d0f33da57b71867abb51b90d264f.jpg',
        '/images/portfolio/776bec178a444748e899fc9248b5427f.jpg',
        '/images/portfolio/f974bd58f3c81996eb04225d640c3f53.jpg',
      ] },
      { name: 'Eukalyptus', color: '#5a7a5a', images: [
        '/images/portfolio/7bb2969b85714d86d3a1b3c0a59b6e05.jpg',
        '/images/portfolio/85b9ed7cde6cdf03c20f23be0817aa55.jpg',
        '/images/portfolio/207e80faf92fcd3e55cdcb4057f1067a.jpg',
        '/images/portfolio/c2670ac5d849a3a8c3c6feb30ed43bd6.jpg',
        '/images/portfolio/1246e4a6004470fa29cfe0a67201105a.jpg',
      ] },
      { name: 'Perlmuttgrau', color: '#9e9a94', images: [
        '/images/portfolio/83653036f6ffed8ba42149182c8b5ea7.jpg',
        '/images/portfolio/6b2e8841aa399bf9cfc37774904d3a75.jpg',
        '/images/portfolio/53ee9f7d79eae70850145e9ff93cfd3c.jpg',
        '/images/portfolio/c479efac69090960e4e1cd21cd8732f4.jpg',
        '/images/portfolio/a1b17a93620e944f4a84d4bf99e2d12c.jpg',
      ] },
      { name: 'Pastell-Minz', color: '#b5c8b0', images: [
        '/images/portfolio/ab97e9923cfbcebd6d512664caaa22ad.jpg',
        '/images/portfolio/d22a99e213d4fc84af1bb25bb2051b78.jpg',
        '/images/portfolio/c8f0cb81cdad756b9086a9dc37ceeeb2.jpg',
        '/images/portfolio/93464bf1632de450e5ba221515f6ed77.jpg',
      ] },
    ],
    specs: [
      { label: 'Material', value: 'MDF 22 mm + Lack' },
      { label: 'Farben', value: 'RAL / NCS individuell' },
      { label: 'Garantie', value: 'Bis zu 20 Jahre' },
      { label: 'Griffe', value: 'Messingriff / Profilrahmen' },
    ],
    tagline: 'Eleganz und Substanz',
    featureImg: '/images/portfolio/ff9a710b148730a1d74acffdc6d6c965.jpg',
    features: [
      { img: '/images/portfolio/ff9a710b148730a1d74acffdc6d6c965.jpg', icon: '◇', title: 'Klassische Profifräsung', text: 'Profilierte Frontkanten verleihen der Küche einen klassisch-zeitlosen Charakter — subtile Eleganz, die überzeugt.' },
      { img: '/images/portfolio/7bb2969b85714d86d3a1b3c0a59b6e05.jpg', icon: '▦', title: 'Edles Lackfinish', text: 'Hochwertige Lackierung auf 22 mm MDF — seidenweiche Oberfläche, farbecht, kratzresistent und jahrelang schön.' },
      { img: '/images/portfolio/83653036f6ffed8ba42149182c8b5ea7.jpg', icon: '▯', title: 'Individueller Farbton', text: 'Hunderte von RAL- und NCS-Farbtönen — wählen Sie genau den Farbton, der zu Ihrer Raumgestaltung passt.' },
      { img: '/images/portfolio/ab97e9923cfbcebd6d512664caaa22ad.jpg', icon: '◈', title: 'Messinggold-Akzente', text: 'Optionale Messinggriffe und -profile setzen edle Akzente und machen Jazz Allure zur echten Designerküche.' },
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
      { name: 'Weiss PVC', color: '#f5f5f5', images: [
        '/images/products/0q9jxltANXHL3RmIm_2b9zJ.jpg',
        '/images/products/0W9N0f0UQtUU8gzyp_ilHCG.jpg',
        '/images/products/0MuLYk4SKIfE4KkRu_8rbGV.jpg',
        '/images/products/0LUDDn6fLhRnK9uEb_GNT29.jpg',
        '/images/products/0pkfH4Y3p5qHWwlSK_VlmLA.jpg',
        '/images/products/07Dc1P8WPyZo4XYVc_Z14Mc.jpg',
        '/images/products/03JjXt5HmY7CmoP0q_z3GbB.jpg',
        '/images/products/04ApgWkdJeTRkCapV_t7hm7.jpg',
      ] },
      { name: 'Acryl Weiss', color: '#fafafa', images: [
        '/images/products/0q9jxltANXHL3RmIm_2b9zJ.jpg',
        '/images/products/0W9N0f0UQtUU8gzyp_ilHCG.jpg',
        '/images/products/0MuLYk4SKIfE4KkRu_8rbGV.jpg',
        '/images/products/0LUDDn6fLhRnK9uEb_GNT29.jpg',
        '/images/products/0pkfH4Y3p5qHWwlSK_VlmLA.jpg',
        '/images/products/07Dc1P8WPyZo4XYVc_Z14Mc.jpg',
        '/images/products/03JjXt5HmY7CmoP0q_z3GbB.jpg',
        '/images/products/04ApgWkdJeTRkCapV_t7hm7.jpg',
      ] },
      { name: 'Kunststoff Matt', color: '#ececec', images: [
        '/images/products/0q9jxltANXHL3RmIm_2b9zJ.jpg',
        '/images/products/0W9N0f0UQtUU8gzyp_ilHCG.jpg',
        '/images/products/0MuLYk4SKIfE4KkRu_8rbGV.jpg',
        '/images/products/0LUDDn6fLhRnK9uEb_GNT29.jpg',
        '/images/products/0pkfH4Y3p5qHWwlSK_VlmLA.jpg',
        '/images/products/07Dc1P8WPyZo4XYVc_Z14Mc.jpg',
        '/images/products/03JjXt5HmY7CmoP0q_z3GbB.jpg',
        '/images/products/04ApgWkdJeTRkCapV_t7hm7.jpg',
      ] },
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
    img: '/images/portfolio/c1a25fddb1fdd725bdc47c246a3a7772.jpg',
    title: 'Premiummaterialien & Vielfalt',
    teaser: 'Hunderte Farben, Texturen und Oberflächen',
    text: 'Lacke, Furniere, Emaille, HPL, Thermoplast — wir arbeiten nur mit zertifizierten Materialien führender europäischer Hersteller. Über 200 Dekore für jeden Einrichtungsstil.',
  },
  {
    img: '/images/portfolio/4f85239bf0535eef5857bdcfa0e6309e.jpg',
    title: 'Beschläge von Blum & Hettich',
    teaser: 'Über 80 000 Öffnungszyklen — geprüft',
    text: 'Wir verbauen ausschliesslich verstärkte Beschläge von Blum und Hettich — mit integrierter Dämpfung, leisem Schliessen und einer nachgewiesenen Lebensdauer von über 80 000 Zyklen.',
  },
  {
    img: '/images/portfolio/3709a12eb736f64edd961656b6c4239f.jpg',
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

  const v = p.variants ? p.variants[variant] : null

  return (
    <>
      <Breadcrumbs items={[{ label: 'Katalog', href: '/katalog' }, { label: catName, href: `/katalog/${category}` }, { label: p.name }]} />

      <section className="uk-section" style={{ paddingBottom: '2rem' }}>
        <div className="uk-container">
          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            {/* Gallery */}
            <div style={{ width: '55%', minWidth: 300 }}>
              <ProductGallery images={p.images || v!.images} videos={p.videos || []} name={`${p.name} ${p.images ? '' : v!.name}`} />
            </div>

            {/* Info */}
            <div style={{ width: '40%', minWidth: 300 }}>
              <h1 style={{ fontFamily: 'var(--sb-reg)', fontSize: '2.2rem', marginBottom: '0.3rem' }}>{p.name}</h1>
              {!p.images && <p style={{ fontSize: '0.9rem', color: 'var(--primary-color)', marginBottom: '1.2rem' }}>{v!.name}</p>}
              <p className="uk-text-muted" style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>{p.desc}</p>

              {/* Color variants */}
              {!p.images && p.variants && p.variants.length > 1 && (
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
              Projekt anfragen — {p.name}{v ? ` ${v.name}` : ''}
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
