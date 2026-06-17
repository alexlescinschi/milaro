export type SpecSwatch = {
  label: string
  img?: string    // URL imagine reală a materialului
  color?: string  // hex fallback pentru culori fără imagine
}

export type PortfolioSpec = {
  label: string
  value?: string          // spec text simplu
  swatches?: SpecSwatch[] // spec vizual cu mostre
}

export type PortfolioProject = {
  slug: string
  title: string
  likes: number
  images: string[]
  description?: string
  specs?: PortfolioSpec[]
}

export const PROJECTS: PortfolioProject[] = [
  {
    slug: 'weisse-kueche-gola-profil',
    title: 'Qualität zum fairen Preis: gerade Küche 3,5 Meter',
    likes: 389,
    images: [
      '/images/portfolio/6b0a54c41be1547342425354144464e2.jpg',
      '/images/portfolio/792b5450027d78733f567ab7c9471747.jpg',
      '/images/portfolio/1b67fe9d17b393fb3e69efeef2a1d594.jpg',
      '/images/portfolio/a9728135952307a7acb8854416f7a1c6.jpg',
      '/images/portfolio/1167750f15bff482ed56986e1d8ad5dc.jpg',
      '/images/portfolio/b4ea3d88397e479712dc8016c060afb5.jpg',
      '/images/portfolio/12d21487c7bbc658815bbcbd461f5e38.jpg',
      '/images/portfolio/68a21d482ba291b62d623fc7d1f3f647.jpg',
      '/images/portfolio/11cc01b83ec41f871d931d71f5a2b377.jpg',
      '/images/portfolio/24397c465b43e3b81d46b9b9e4528ac4.jpg',
      '/images/portfolio/c9d005cedd8fb53e8c6a95686ee084f9.jpg',
      '/images/portfolio/9335e7d0a5ef7d4f1458a4bebd231949.jpg',
      '/images/portfolio/e3b2a6a28201faf93b9c1fbb8b904f60.jpg',
      '/images/portfolio/dc426febb9c098fa42519a9118a2dd57.jpg',
    ],
    description:
      'Klein, aber stilvoll! Dieses Küchendesign beweist, dass man auch auf kleiner Fläche ein luxuriöses Interieur gestalten kann. Der Hauptakzent liegt auf der mutigen Kombination eines dunklen Spritzschutzes mit Grünton und luxuriösen goldenen Details.\n\nDie Wände sind perfekt auf die weissen Fronten abgestimmt, was den Raum optisch vergrössert. Die Arbeitsplatte aus Kunststein verleiht Eleganz.\n\nDas Highlight sind die individuellen Lösungen: Gola-Profil an den Oberschränken und klassischer Sockel, die der modernen Küche Persönlichkeit verleihen.',
    specs: [
      { label: 'Modell', value: 'Mix 22' },
      { label: 'Stil', value: 'Art Déco' },
      { label: 'Kollektion', value: 'Design' },
      {
        label: 'Farbe',
        swatches: [
          { label: 'Kaschmir Mix 22', img: '/images/portfolio/64b9c048794824912efb77a478649c5b.jpg' },
        ],
      },
      { label: 'Frontenmaterial', value: 'Laminat-Spanplatte' },
      { label: 'Frontenbeschichtung', value: 'Laminat' },
      { label: 'Dekorelemente', value: 'Griffloses System' },
      {
        label: 'Korpusfarbe',
        swatches: [
          { label: 'Hellgrau', img: '/images/portfolio/936bbb42037425f96d63c282b2fb570d.jpg' },
        ],
      },
      { label: 'Arbeitsplatte', value: 'Kunststein „3 Sand 061HM"' },
      { label: 'Möbelmasse', value: '3524 × 2850 × 600 mm' },
      { label: 'Raumgrösse', value: '6500 × 4000 mm' },
      { label: 'Grundriss', value: 'Gerade' },
    ],
  },

  {
    slug: 'kueche-diele-apartment',
    title: 'Wohnungsinterieur mit integrierter Küche und Diele',
    likes: 127,
    images: [
      '/images/portfolio/917af7b021088bc9df255ed3f17fe776.jpg',
      '/images/portfolio/1e5a819d7fab32725e334784d9ee15cc.jpg',
      '/images/portfolio/1266df36bf23554c95a2dc75bab5f659.jpg',
      '/images/portfolio/4b79d4150be04201a214221c1d0894a3.jpg',
      '/images/portfolio/b97c1e937b3ab5c973c58915d465ef88.jpg',
      '/images/portfolio/470d713e79a1175065805a78f9b6cd15.jpg',
      '/images/portfolio/cbd28f18902115890e4653a672cfeec9.jpg',
      '/images/portfolio/3fcde35b7d1fe6a6206c79165f7459a4.jpg',
      '/images/portfolio/9d9773274bb4a1d308abd590ef6923d4.jpg',
      '/images/portfolio/1e18313045dc2314d660fdc10ef0a63c.jpg',
      '/images/portfolio/df27a12b018cb5e83dcca79eb532861b.jpg',
      '/images/portfolio/c2c8053e19cfbb97b5f2f499d66847ba.jpg',
      '/images/portfolio/aa93dc29c62977c8ca63000825f3975f.jpg',
    ],
    description:
      'Die Zusammenführung von Küche und Diele schuf eine unkonventionelle Lösung für die Wohnung einer jungen Familie. Der Designer integrierte den separaten Eingangsbereich nahtlos in den offenen Küchen-Wohnbereich — so wurde ein enger Korridor in einen grosszügigen, natürlich beleuchteten Raum verwandelt.\n\nEin einheitliches Aufbewahrungssystem zieht sich durch beide Zonen. Farblich differenzierte Fronten — Kaschmir, Dunkelbraun Charleston Oak und Staubgrau — schaffen eine harmonische Raumwirkung ohne Monotonie.\n\nGlasfronten mit Silberspiegel-Effekt und offene Regale setzen elegante Akzente. Das grifflose System und die integrierten Säulen verleihen dem Interieur seinen unverwechselbaren minimalistischen Charakter.',
    specs: [
      { label: 'Modell', value: 'Mix 22 / Tokyo' },
      { label: 'Stil', value: 'Minimalismus / Eklektizismus' },
      { label: 'Kollektion', value: 'Design' },
      {
        label: 'Farbe',
        swatches: [
          { label: 'Kaschmir Mix 22',                img: '/images/portfolio/9de83150f1666ab3f89f7b76946c1f6b.jpg' },
          { label: 'Dunkelbraun Charleston Oak Mix 22', img: '/images/portfolio/bf67f149aede3c78ad16ee28bf5ec00d.jpg' },
          { label: 'Weiss Premium Tokyo',             color: '#f0eeeb' },
          { label: 'Kaschmir Tokyo',                  img: '/images/portfolio/9de83150f1666ab3f89f7b76946c1f6b.jpg' },
          { label: 'Staubgrau Tokyo',                 color: '#9c9a96' },
          { label: 'Dunkelbraun Charleston Oak Tokyo', img: '/images/portfolio/bf67f149aede3c78ad16ee28bf5ec00d.jpg' },
        ],
      },
      {
        label: 'Arbeitsplatte',
        swatches: [
          { label: 'Cassis Quartz', img: '/images/portfolio/f402e13facd86013a030fa48659785af.jpg' },
        ],
      },
      {
        label: 'Korpusfarbe',
        swatches: [
          { label: 'Dunkelbraun Charleston Oak', img: '/images/portfolio/bf67f149aede3c78ad16ee28bf5ec00d.jpg' },
          { label: 'Kaschmir',                   img: '/images/portfolio/9de83150f1666ab3f89f7b76946c1f6b.jpg' },
          { label: 'Schwarz Graphit',             img: '/images/portfolio/03b538822f9cdef38551fe3eb9e3a27c.jpg' },
        ],
      },
      {
        label: 'Glasfront',
        swatches: [
          { label: 'Silber Spiegel', img: '/images/portfolio/b7719c93be44aef35fa81a29eedab540.jpg' },
        ],
      },
      { label: 'Dekorelemente', value: 'Säulen, offene Regale, griffloses System, Glasfronten' },
      { label: 'Möbelmasse', value: '4359 × 2363 × 600 mm' },
      { label: 'Raumgrösse', value: '5600 × 4359 mm' },
      { label: 'Grundriss', value: 'Küche-Wohnzimmer / Gerade' },
    ],
  },

  {
    slug: 'zonierung-kueche-wohnzimmer',
    title: 'Zonierung Küche-Wohnzimmer: minimalistisches Interieur',
    likes: 455,
    images: [
      '/images/portfolio/33113d889a5866784047f62eef021760.jpg',
      '/images/portfolio/67b93d3c18fe358dfc49cb9ba9ea2525.jpg',
      '/images/portfolio/400181ffc9fe1f8e60eab7a6eb046c80.jpg',
      '/images/portfolio/9b07140e96c4fc51e8833b1930e75bc1.jpg',
      '/images/portfolio/c8fe0b42b620719a0fcf453634c1196c.jpg',
      '/images/portfolio/6f593597d9a43f7872caf2228f43097b.jpg',
      '/images/portfolio/b2271d8ee44075ded646e422e56045c8.jpg',
      '/images/portfolio/0c4a2cccb655373fe419a92162d7d49e.jpg',
      '/images/portfolio/6eb3d5339cf7a2c25a5a392163486abd.jpg',
      '/images/portfolio/ab218aa00707ba21c7c169043f18d0b0.jpg',
      '/images/portfolio/08ef73d2e8bbb4a73d0b9649e28eb860.jpg',
      '/images/portfolio/fab194917564acd6eaf2fbc2f2dfe6a2.jpg',
      '/images/portfolio/55046506f6b0213b26de84c46e242c4b.jpg',
      '/images/portfolio/eb2a2faae037e21029a0df3f88a81530.jpg',
      '/images/portfolio/51627ada10ae21a6c54691a3da5e1f91.jpg',
      '/images/portfolio/d1293ea5d7e20c699ccfa80f161e40f0.jpg',
      '/images/portfolio/4764bf56bbaab4aa27dd029e47163e97.jpg',
      '/images/portfolio/19db7fd61848c4903431f879e419c4bb.jpg',
      '/images/portfolio/c7b0d805426e7196dd0b0a4911a7dab9.jpg',
    ],
    description:
      'Ein minimalistisches Interieur mit vandalensicherer Ausstattung. Die Küche und die Drehflügelschränke wurden von «Milaro» geplant und gefertigt. Auch die Wandpaneele stammen aus unserer Fabrik.\n\nAls Küchenmodell wählten wir das Modell Intuit mit matten Email-Fronten. Dank der Kolonnensektionen und der Wandpaneele Mix 22 in der Farbe «Kapische Weisse Ulme» entsteht die Illusion eines einheitlichen Raumes.\n\nEin besonderes Merkmal des Projekts ist die spezielle Konstruktion vor der Küche. Sie lässt Licht in den Raum, verschliesst aber die Sicht von der Wohnzimmerseite und bietet Stauraum — inklusive einer Schuhablage.\n\nDie Schränke wurden im Modell Mix 22 ausgeführt. Das Projekt wurde zusammen mit dem Innenarchitekten Denis Nikolski entwickelt.',
    specs: [
      { label: 'Modell', value: 'Intuit / Mix 22' },
      { label: 'Stil', value: 'Minimalismus' },
      { label: 'Kollektion', value: 'Design' },
      {
        label: 'Farbe',
        swatches: [
          { label: 'RAL 9003 Weiss Matt Intuit', color: '#f5f5f0' },
          { label: 'Weiss Premium Mix 22', color: '#fafafa' },
        ],
      },
      { label: 'Frontenmaterial', value: 'MDF / LDSP' },
      { label: 'Frontenbeschichtung', value: 'Email / Laminat' },
      { label: 'Lackierung', value: 'Matter Lack' },
      { label: 'Arbeitsplatte', value: '4 Granit 016HM (Kunststein)' },
      { label: 'Korpusfarbe', value: 'Weiss' },
      { label: 'Glasfront', value: 'Stopsol Bronze' },
      { label: 'Fassadenrahmen', value: 'Novara Schwarz' },
      { label: 'Dekorelemente', value: 'Kolonnen, Nischen und offene Fächer, Glasfronten' },
      { label: 'Möbelmasse', value: '4394 × 2720 × 600 mm' },
      { label: 'Raumgrösse', value: '7000 × 4400 mm' },
      { label: 'Grundriss', value: 'Eckküche' },
    ],
  },
  {
    slug: 'moderne-kueche-wohnkomplex-park-april',
    title: 'Moderne Küche für Wohnkomplex Park April',
    likes: 310,
    images: [
      '/images/portfolio/15ee280ae7b86c45f79ae9c970428e71.jpg',
      '/images/portfolio/9afc2c856d188adf48ac8ec1e26306bf.jpg',
      '/images/portfolio/883dd1dc64115d4e272a98b78432c0ff.jpg',
      '/images/portfolio/bfb4f83b64e87d841c177f6d93e9769d.jpg',
      '/images/portfolio/6d0eec92cac22fb9ff4debee8639ba8e.jpg',
      '/images/portfolio/127553cf5e7400cd8a2e057522e030a8.jpg',
      '/images/portfolio/028591dc4e98fd211b0b338cd70156e9.jpg',
      '/images/portfolio/a0ba24a3f5ecf13bafc0ff24371a2242.jpg',
      '/images/portfolio/c857229a08a32c98cbb821839ba3d7b1.jpg',
      '/images/portfolio/b03d71112aca0827b2a3c25375b50e82.jpg',
      '/images/portfolio/fde502d5f2782c32e39135f3664bfe7c.jpg',
    ],
    description:
      'Moderne Massanfertigung-Küche im Wohnkomplex «Park April». Dieses funktionale Ensemble kombiniert matte Fronten in RAL 7042 mit der Textur von natürlichem Holz und schafft so einen stilvollen und gemütlichen Innenraum.\n\nDie Insel mit Vitrinen aus geriffeltem Glas, integrierter Beleuchtung und Eichen-Weinregalen wurde zum zentralen Designelement und unterstreicht die moderne Ästhetik und Funktionalität.\n\nDie Küche ist mit eingebauten Haushaltsgeräten und durchdachten Stauraumlösungen ausgestattet und verbirgt sämtliche Leitungen inklusive des Boilers. Die helle Arbeitsplatte und die Marmor-Rückwand ergänzen das Design harmonisch.\n\nDie ideale Lösung für alle, die einen Küchenentwurf suchen, der Minimalismus, Loft-Elemente und moderne Klassik in einem harmonischen Raum vereint.',
    specs: [
      { label: 'Modell', value: 'Jazz / Jazz Intuit' },
      { label: 'Stil', value: 'Loft / Minimalismus' },
      { label: 'Kollektion', value: 'Design' },
      {
        label: 'Farbe',
        swatches: [
          { label: 'RAL 7042 Transportgrau A Matt Jazz', color: '#8a8a8a' },
          { label: 'RAL 7042 Transportgrau A Matt Intuit', color: '#8a8a8a' },
        ],
      },
      { label: 'Frontenmaterial', value: 'MDF' },
      { label: 'Frontenbeschichtung', value: 'Email' },
      { label: 'Lackierung', value: 'Matter Lack' },
      { label: 'Arbeitsplatte', value: '7 Marmor 055HM (Kunststein)' },
      { label: 'Korpusfarbe', value: 'Eiche Charleston dunkelbraun / Hellgrau' },
      { label: 'Dekorelemente', value: 'Kolonnen, Nischen und offene Fächer, Griff loses System, Glasfronten' },
      { label: 'Möbelmasse', value: '3361 × 2614 × 2312 mm' },
      { label: 'Raumgrösse', value: '3361 × 2312 mm' },
      { label: 'Grundriss', value: 'Inselküche / Eckküche' },
    ],
  },
  {
    slug: 'kueche-fruehstueckstheke-am-fenster',
    title: 'Küche mit Frühstückstheke am Fenster',
    likes: 186,
    images: [
      '/images/portfolio/d92d66dba65a792acc834258eb6046b6.jpg',
      '/images/portfolio/a4deecf8c73396449872e62b738cd0f5.jpg',
      '/images/portfolio/d3b8eebc33a0a554ecda8ac874db6200.jpg',
      '/images/portfolio/2f7a32704cd27abbe18f180eee8db2bb.jpg',
      '/images/portfolio/c7cb2c087230a7bd83b92eef29dfe02c.jpg',
      '/images/portfolio/01a940c18e044218e07f1cfde8a67c78.jpg',
      '/images/portfolio/a1ead46d1e705dc6b8c52ba853993233.jpg',
      '/images/portfolio/2faf004ad83f0b518d3ee0d4dff6f5cb.jpg',
      '/images/portfolio/340a411bbbc6aa59a32953e79f410afa.jpg',
      '/images/portfolio/7454d61b307a7bc1c252e6be5bc4f3c0.jpg',
    ],
    description:
      'Hauptaufgabe: Funktionalität und Leichtigkeit in einem Interieur mit Blick auf die Stadt.\n\nDie junge Kundin erwarb eine Wohnung im 37. Stock mit atemberaubender Aussicht. Ihre wichtigsten Wünsche waren: eine funktionale Küche mit viel Stauraum und grosser Arbeitsfläche zu schaffen, das Gefühl von Leichtigkeit und Geräumigkeit zu bewahren und einen modernen Stil zu verwirklichen, der gleichzeitig minimalistisch, warm und gemütlich ist.\n\nLösungen für besondere Herausforderungen:\nDie Frühstückstheke am Fenster: Wir entwarfen eine zum Fenster hin orientierte Theke. Sie dient nicht nur als Frühstücksplatz, sondern auch als beste Zone in der Wohnung, um die Stadtpanorama zu geniessen.\n\nSchwerelosigkeitseffekt: Damit der massive Küchenblock nicht wuchtig wirkt, verwendeten wir klare Formen, moderne Materialien und spezielle Beleuchtung.\n\nFarbakzent: Als persönliches Detail fügten wir einen zarten Rosaton für die Oberschränke hinzu. Dies milderte das strenge Grau und verlieh dem Interieur die Wärme, die sich die Kundin wünschte.\n\nMinimalismus im Detail: Küche ohne Griffe. Für die perfekt glatten und reinen Fronten wurde die Küche grifflos mit Push-to-Open-Mechanismen realisiert.',
    specs: [
      { label: 'Modell', value: 'Jazz Intuit' },
      { label: 'Stil', value: 'High-Tech / Minimalismus' },
      { label: 'Kollektion', value: 'Design' },
      {
        label: 'Farbe',
        swatches: [
          { label: 'RAL 7044 Seidengrau Matt Intuit', color: '#8e8e8e' },
        ],
      },
      { label: 'Frontenmaterial', value: 'MDF' },
      { label: 'Frontenbeschichtung', value: 'Email' },
      { label: 'Lackierung', value: 'Matter Lack' },
      { label: 'Arbeitsplatte', value: '4 Granit 022HM (Kunststein)' },
      { label: 'Dekorelemente', value: 'Kolonnen, Griff loses System' },
      { label: 'Möbelmasse', value: '2790 × 2600 × 600 mm' },
      { label: 'Raumgrösse', value: '2800 × 4630 mm' },
      { label: 'Grundriss', value: 'Küche-Wohnzimmer' },
    ],
  },
  {
    slug: 'baby-sichere-kueche',
    title: 'Baby-sichere Küche auf kleiner Fläche',
    likes: 121,
    images: [
      '/images/portfolio/499a06028be071a14abfb5be3da13329.jpg',
      '/images/portfolio/3f11a4b7d2c0ad8ac4d0297b033ef214.jpg',
      '/images/portfolio/657bd816bc6f1ef14359ec9713efd323.jpg',
      '/images/portfolio/abe5d3434738423a044f093c9f10e486.jpg',
      '/images/portfolio/024d8c94e18ec841152f5db35aeac066.jpg',
      '/images/portfolio/2dcba26cdfeb225b066340c3f2b921fb.jpg',
      '/images/portfolio/0cbe82077e7c97e035d5f9f8ea5ed524.jpg',
      '/images/portfolio/e5420c7d13d5a533e8ddf8be7bc623b0.jpg',
    ],
    description:
      'Unsere Aufgabe war es, alles fürs Kochen auf kleiner Fläche unterzubringen. Die Hausherrin ist ein Mensch, für den Kochen ein echtes Hobby ist. Sie brauchte eine maximal funktionale Küche im eleganten neoklassischen Stil.\n\nDie ideale Lösung war die Eckplanung. Sie ermöglichte eine grosse Arbeitsfläche, eine geräumige Spüle, den Einbau von Kühl- und Gefrierschrank sowie praktischen Stauraum — inklusive unterer Schubladen für Kindergeschirr in Reichweite des Kindes.\n\nFür die visuelle Raumerweiterung verwendeten wir zwei Frontmodelle: Helle Mix 22- und Jazz Allure-Fronten schufen eine leichte, luftige Atmosphäre. Rillenfronten fungierten als vertikale Linien, die die Raumhöhe optisch vergrösserten.\n\nEin besonderes Highlight sind die Kolonnen, die Technik verbergen und zusätzlichen Stauraum bieten. Dafür wählten wir das Modell Teramo in kontrastierendem dunklem Holzdekor.',
    specs: [
      { label: 'Modell', value: 'Mix 22 / Teramo / Jazz Allure' },
      { label: 'Stil', value: 'Art Déco / Minimalismus' },
      { label: 'Kollektion', value: 'Design' },
      {
        label: 'Farbe',
        swatches: [
          { label: 'Kaschmir Mix 22', color: '#d4c4b7' },
          { label: 'Dunkle Ulme Teramo', color: '#3d2b1f' },
        ],
      },
      { label: 'Frontenmaterial', value: 'LDSP / MDF' },
      { label: 'Frontenbeschichtung', value: 'Laminat / Thermoplast' },
      { label: 'Arbeitsplatte', value: '7 Marmor 104HM (Kunststein)' },
      { label: 'Korpusfarbe', value: 'Kaschmir' },
      { label: 'Dekorelemente', value: 'Kolonnen, Griff loses System' },
      { label: 'Möbelmasse', value: '2570 × 4620 × 1800 mm' },
      { label: 'Raumgrösse', value: '4850 × 2900 mm' },
      { label: 'Grundriss', value: 'Eckküche' },
    ],
  },
  {
    slug: 'mix-22-kueche-minimalismus',
    title: 'Mix 22 Küche im minimalistischen Stil',
    likes: 303,
    images: [
      '/images/portfolio/65b7ef6d96cbc1dc01ccb8683fdd28c2.jpg',
      '/images/portfolio/12668ef1fc1dbdde298b394dd621ef5c.jpg',
      '/images/portfolio/6736a12c8a3fb4802fae2167c5bcf195.jpg',
      '/images/portfolio/4cbbbc9ea4a27a2288aafed7fbcb3b63.jpg',
      '/images/portfolio/6c8621b6926de10d0de84dbd5d0be862.jpg',
      '/images/portfolio/9685121b202fef0ee623dec26efcfd0f.jpg',
      '/images/portfolio/5c3fb8179caf427d0ab0116e30f4917d.jpg',
      '/images/portfolio/9c1fda620fe495c029106ea0578924c5.jpg',
      '/images/portfolio/85fe050fc8785d3711b21fc4f9c2fda7.jpg',
      '/images/portfolio/32325eee96543d81e0fbedac029a89ae.jpg',
      '/images/portfolio/2b8d6f621dddcc2f12ca775adab7f141.jpg',
      '/images/portfolio/035161644bea56ff800cf2ea1e2ef90f.jpg',
    ],
    description:
      'Eine Küche im minimalistischen Stil ist nicht nur modern, sondern auch unglaublich praktisch. Das Modell Mix 22 beweist dies und schafft eine Atmosphäre von Gemütlichkeit und Ordnung. Klare Linien, das Fehlen überflüssiger Details und durchdachte Ergonomie helfen, nach einem erfüllten Tag zu entspannen.\n\nFür die klare Formensprache sorgt auch die Farbgebung. Die Hauptfarbe der Fronten «Kaschmir» schafft eine helle und friedliche Atmosphäre. Akzente in der Farbe «Anthrazit» verleihen dem Interieur Tiefe und grafische Klarheit.\n\nDrei durchdachte Besonderheiten dieser Küche: 1. Die ergonomische Insel schafft eine zusätzliche grosszügige Arbeitsfläche. 2. Die Spüle am Fenster ermöglicht das Geniessen von Tageslicht und Ausblick. 3. Perfekte Ordnung durch unsichtbar in der Inselkonstruktion verlegte Leitungen.',
    specs: [
      { label: 'Modell', value: 'Mix 22 / Vector Soft' },
      { label: 'Stil', value: 'Minimalismus / High-Tech' },
      { label: 'Kollektion', value: 'Design' },
      {
        label: 'Farbe',
        swatches: [
          { label: 'Kaschmir Mix 22', color: '#d4c4b7' },
          { label: 'Schwarz Graphit Supermatt Vector', color: '#1a1a1a' },
        ],
      },
      { label: 'Frontenmaterial', value: 'LDSP / MDF' },
      { label: 'Frontenbeschichtung', value: 'Laminat / PET-Beschichtung' },
      { label: 'Lackierung', value: 'Supermatt-Effekt' },
      { label: 'Arbeitsplatte', value: '3 Sand 061HM (Kunststein)' },
      { label: 'Korpusfarbe', value: 'Schwarz Graphit' },
      { label: 'Dekorelemente', value: 'Griff loses System' },
      { label: 'Möbelmasse', value: '3950 × 2775 × 600 mm' },
      { label: 'Raumgrösse', value: '5000 × 2800 mm' },
      { label: 'Grundriss', value: 'Zweireihig' },
    ],
  },
  {
    slug: 'weisse-kueche-wohnzimmer-mit-insel',
    title: 'Weisse Küche-Wohnzimmer mit Insel',
    likes: 147,
    images: [
      '/images/portfolio/4ee5d1118f284beb9010ad2a6d2f2b24.jpeg',
      '/images/portfolio/ae8ea29ac8d838f422dd028b23c7f72f.jpg',
      '/images/portfolio/63a7c6319bd9a1a2e6b1aae54af23ce5.jpeg',
      '/images/portfolio/adce0693522c90ad3eed1be2c098a9ec.jpeg',
      '/images/portfolio/1fd571e4e31a96cc72bfc32728ac3171.jpeg',
      '/images/portfolio/e4844fd0edc23d23b1cd385c8efc972c.jpeg',
      '/images/portfolio/7755aaad673d2e06c0f2dfd4a4932bd8.jpeg',
      '/images/portfolio/ff414743c34556a358c02e7b44bd9135.jpeg',
    ],
    description:
      'Ein Projekt, das mit Frische, Reinheit und Luftigkeit assoziiert wird. Es erstreckt sich über drei Reihen: die Kochzone, die funktionale Zone mit Kolonnen für die Technik und die Esszone als Insel.\n\nFür die Umsetzung wurde das Modell Jazz Intuit in Weiss gewählt. Es fügt sich perfekt in den Innenraum ein und akzentuiert ihn zugleich. Die Arbeitsplatte der Kochzone und der Bartheke wurde aus Spanplatte in «Eiche natur» gefertigt. Die Insel-Arbeitsplatte und die Wandpaneele bestehen aus Kunststein.\n\nDer Innenraum der Küche spiegelt das Bild einer paradiesischen Insel wider, die die Kundin so sehr liebt. Helle Farben, natürliche Materialien und die offene Gestaltung schaffen eine Atmosphäre von Leichtigkeit und Luxus.',
    specs: [
      { label: 'Modell', value: 'Jazz Intuit' },
      { label: 'Stil', value: 'Minimalismus' },
      { label: 'Kollektion', value: 'Design' },
      {
        label: 'Farbe',
        swatches: [
          { label: 'Weiss Jazz Intuit', color: '#f5f5f0' },
        ],
      },
      { label: 'Arbeitsplatte', value: 'Eiche natur (Spanplatte) / Kunststein' },
      { label: 'Korpusfarbe', value: 'Weiss' },
      { label: 'Dekorelemente', value: 'Griff loses System, Kolonnen' },
      { label: 'Möbelmasse', value: '2645 × 2350 × 600 mm' },
      { label: 'Raumgrösse', value: '2670 × 2360 mm' },
      { label: 'Grundriss', value: 'Zweireihig' },
    ],
  },
  {
    slug: 'helle-kueche-mit-dunklen-akzenten',
    title: 'Helle Küche mit dunklen Akzenten',
    likes: 29,
    images: [
      '/images/portfolio/7fbe2b74d7d0225c7a5f8972c086919f.jpg',
      '/images/portfolio/0fabf3075ca9ef8b77f699cc1ab9adcb.jpg',
      '/images/portfolio/9cf6c051803bd3cb2b66ed06bc18b13f.jpg',
      '/images/portfolio/16bacc54edb12947ee57d558269a321b.jpg',
      '/images/portfolio/d9cde46434da6d6574b4e735ff9e8efc.jpg',
      '/images/portfolio/1f0685617ff29863a4e29ad49df5b376.jpg',
      '/images/portfolio/979c7818c44f419319a68ea7ffc59c27.jpg',
      '/images/portfolio/504c444a403282ef8c4e5cd5b2f8de06.jpg',
    ],
    description:
      'Dieses Projekt wurde für einen jungen Kunden entwickelt, der genau wusste, wie seine Küche aussehen sollte. Das Interieur ist minimalistisch und funktional zugleich.\n\nAls Küchenmodell wurde Vector Soft gewählt. Dessen Fronten überzeugen mit einer angenehmen Haptik und Schmutzunempfindlichkeit. Die Küche ist mit dem Wohnzimmer verbunden, daher fiel die Wahl auf eine helle Farbpalette. Hängeelemente mit getöntem Glas und Beleuchtung setzen die nötigen Kontraste.\n\nDie Zonierung von Küche und Wohnzimmer wurde durch eine Bartheke erreicht, die gleichzeitig als Raumteiler, zusätzliche Arbeitsfläche und Ort für schnelle Snacks dient.',
    specs: [
      { label: 'Modell', value: 'Vector Soft' },
      { label: 'Stil', value: 'Minimalismus' },
      { label: 'Kollektion', value: 'Design' },
      {
        label: 'Farbe',
        swatches: [
          { label: 'Ton grau Supermatt Vector', color: '#9e948c' },
          { label: 'Kaschmir Supermatt Vector', color: '#d4c4b7' },
        ],
      },
      { label: 'Frontenmaterial', value: 'MDF' },
      { label: 'Frontenbeschichtung', value: 'PET-Beschichtung' },
      { label: 'Lackierung', value: 'Supermatt-Effekt' },
      { label: 'Arbeitsplatte', value: '4 Granit 021HM (Kunststein)' },
      { label: 'Korpusfarbe', value: 'Kaschmir' },
      { label: 'Glasfront', value: 'Dunkelgrau getönt' },
      { label: 'Fassadenrahmen', value: 'Novara Schwarz' },
      { label: 'Dekorelemente', value: 'Kolonnen, Griff loses System, Glasfronten' },
      { label: 'Möbelmasse', value: '3548 × 2800 × 2945 mm' },
      { label: 'Raumgrösse', value: '3700 × 3548 mm' },
      { label: 'Grundriss', value: 'Küche-Wohnzimmer / Eckküche' },
    ],
  },
  {
    slug: 'funktionale-kueche-fuer-food-bloggerin',
    title: 'Funktionale Küche für Grossfamilie und Food-Bloggerin',
    likes: 76,
    images: [
      '/images/portfolio/540cb017139e597226863db67730b421.jpg',
      '/images/portfolio/3f2954fea4baee5778021b87c4ea995c.jpg',
      '/images/portfolio/3b1612a9028999f42c109efac1b1a652.jpg',
      '/images/portfolio/9e5c4272702924dff14dcaae53d59342.jpg',
      '/images/portfolio/e4ac491198a5734b4b9573ed1a356ee4.jpg',
      '/images/portfolio/c8f8a18d3123a18aaf632946b8fb3d31.jpg',
      '/images/portfolio/fc5a43d5033f0e83352896939ad801e3.jpg',
      '/images/portfolio/dc22fcfd5c5991d9dd9dedeb102b408b.jpg',
    ],
    description:
      'Dieses Projekt wurde für Swetlana Kwatschewa geschaffen — eine bekannte Food-Bloggerin und mehrfache Mutter, bekannt als «Pfefferkuchenfee». Die Aufgabe war anspruchsvoll: ein professionelles Studio für Aufnahmen und eine gemütliche Familienküche in einem Raum zu vereinen.\n\nWir wählten eine U-förmige Küchenplanung — den Goldstandard für alle, die viel kochen. Das «Arbeitsdreieck» (Spüle-Herd-Kühlschrank) ist hier maximal kompakt, was Zeit und Energie spart.\n\nDie Bartheke wurde zur multifunktionalen Lösung: Für die Arbeit dient sie als ideale Zone für Food-Styling und Content-Aufnahmen mit perfektem Licht vom Fenster. Für die Familie ist sie ein praktischer Ort für Zwischenmahlzeiten der Kinder, abseits der Hauptarbeitszone.',
    specs: [
      { label: 'Modell', value: 'Teramo' },
      { label: 'Stil', value: 'Loft' },
      { label: 'Kollektion', value: 'Design' },
      {
        label: 'Farbe',
        swatches: [
          { label: 'Grau / Braun', color: '#8a7a6a' },
        ],
      },
      { label: 'Korpusfarbe', value: 'Weiss' },
      { label: 'Dekorelemente', value: 'Kolonnen' },
      { label: 'Möbelmasse', value: '2845 × 2600 × 600 mm' },
      { label: 'Raumgrösse', value: '2845 × 3118 mm' },
      { label: 'Grundriss', value: 'U-Form' },
    ],
  },
  {
    slug: 'moebel-fuer-diana-balashova',
    title: 'Möbel für die Wohnung von Diana Balashova',
    likes: 0,
    images: [
      '/images/portfolio/61d406b4621b3bff819624b660da4564.jpg',
      '/images/portfolio/c20386c0475eb34a29c6141154decde9.jpg',
      '/images/portfolio/78fc1257715a908b5f9f923a5669ba1f.jpg',
      '/images/portfolio/0ff8c99d1c94f75adc8f62bbc503ca91.jpg',
      '/images/portfolio/fc63a66ed038a86c8406e68b2d6f6660.jpg',
      '/images/portfolio/de214ccd7a28499d31c895daf2cabce4.jpg',
      '/images/portfolio/050a876af3590e5545a3420a5112bf87.jpg',
      '/images/portfolio/45e414cb4c592f5ec76aa51625143d08.jpg',
      '/images/portfolio/8f4823f56298661b763ad2e51d79224e.jpg',
      '/images/portfolio/2805294ef58392b4e8a015206ed4268f.jpg',
      '/images/portfolio/82e47fc23b3bedf1e3df861816937cd9.jpg',
      '/images/portfolio/5916dca6317f8cba5952df6f78760ab9.jpg',
      '/images/portfolio/be6100a3cfd910e65e64d2e619e533b2.jpg',
      '/images/portfolio/d97528849005fae0c1f2384054de3bc4.jpg',
      '/images/portfolio/a03ebf744a93b804a057748885d0d1d1.jpg',
      '/images/portfolio/55c5c4ee238013cb0b9da00e865f2643.jpg',
      '/images/portfolio/8e92ebce4eba934b9afb8aa6509442d2.jpg',
      '/images/portfolio/79ea2939ed475ac18b5b8e1b76fea98f.jpg',
      '/images/portfolio/52f06ef3adda1ea68364d2fdc99a016a.jpg',
      '/images/portfolio/1694eb24771653233cb16dc08f972f0e.jpg',
    ],
    description:
      'Für Diana Balaschowa entwarf und fertigte unsere Fabrik Möbel für das gesamte Haus — vom Stauraumsystem bis zum zentralen Objekt: einer Küche aus Edelstahl. Die Küche wurde zum Diamanten dieses Projekts und gab den Ton für den gesamten Raum vor.\n\nDer Mut im Design beschränkte sich nicht auf die Küche. Ein leuchtend roter Ankleideraum, exklusive «goldene» Schränke — all dies fügt sich auf unglaubliche Weise im Interieur zusammen und verleiht ihm Glanz, Vornehmheit und Charakter.\n\nSämtliche Möbel sind für den individuellen Auftrag in allen «Milaro»-Studios erhältlich.',
    specs: [
      { label: 'Modell', value: 'Jazz / Camelia / Antro Steel' },
      { label: 'Stil', value: 'Art Déco / Eklektizismus' },
      { label: 'Kollektion', value: 'Design' },
      {
        label: 'Farbe',
        swatches: [
          { label: 'Mattgold Jazz Metal', color: '#c9a94e' },
          { label: 'Champagne Jazz Metal', color: '#d4be8a' },
          { label: 'NCS S 4005-Y50R Camelia Matt', color: '#a89888' },
        ],
      },
      { label: 'Frontenmaterial', value: 'MDF' },
      { label: 'Frontenbeschichtung', value: 'Email' },
      { label: 'Lackierung', value: 'Metallic / Matt' },
      { label: 'Korpusfarbe', value: 'Schwarz Graphit / Tongrau' },
      { label: 'Dekorelemente', value: 'Kolonnen, Nischen und offene Fächer' },
      { label: 'Möbelmasse', value: '2440 × 2699 × 600 mm' },
      { label: 'Raumgrösse', value: '4700 × 2440 mm' },
      { label: 'Grundriss', value: 'Gerade / Inselküche / Küche-Wohnzimmer' },
    ],
  },
  {
    slug: 'kueche-fuer-inna-malikova',
    title: 'Küche für Inna Malikova mit Rahmenfronten',
    likes: 1,
    images: [
      '/images/portfolio/d44552c56d927af746f5c5b4eb192a71.jpg',
      '/images/portfolio/e2a280ab617bfebb6f65f700045a3a3c.jpg',
      '/images/portfolio/9104d21e3f9cdb8e16ec256ae6a32c04.jpg',
      '/images/portfolio/8a1a221607db0ad92d9814402b3663cc.jpg',
      '/images/portfolio/8c59d0edbfbc3c27d1908faaaadc2eee.jpg',
      '/images/portfolio/361ec33b94cf695a1f3b1b8b5d07ead3.jpg',
      '/images/portfolio/dca79785e14db6c3d97d349b012ac486.jpg',
      '/images/portfolio/32a3aed1326d551fbf3aa671fcb59078.jpg',
      '/images/portfolio/c26ef6471fbea93e3b3302640faf2689.jpg',
    ],
    description:
      'Für ihr Zuhause wählte die Leiterin und Sängerin der Gruppe «Nowyje Samozwety», Inna Malikowa, erneut Möbel von der Fabrik «Milaro». Unsere Aufgabe war es, ein ruhiges, gemütliches Interieur zu schaffen. Die ideale Lösung wurde die Küche des Modells Trento mit Rahmenfronten in der Farbe «Cappuccino». Anstelle von scharfen Kontrasten — erlesene Zartheit und Pastelltöne, die entspannen und ein Gefühl von Geborgenheit vermitteln.\n\nDas Highlight des Küchenblocks wurde die Vitrine für Geschirr des Modells Jazz Allure mit Bronze-Glas. Sie schmückt nicht nur die Küche, sondern löst auch die Aufgabe der schönen Aufbewahrung der Familiensammlung — die Lieblingsstücke sind stets sichtbar, aber vor Staub geschützt. Die Arbeitsplatte mit Marmor-Muster unterstreicht dezent das Gesamtbild, und die edle Beschläge in «Mattgold» verleihen dem Interieur edlen Glanz.',
    specs: [
      { label: 'Modell', value: 'Trento Email / Jazz Allure' },
      { label: 'Stil', value: 'Minimalismus / Eklektizismus' },
      { label: 'Kollektion', value: 'Design' },
      {
        label: 'Farbe',
        swatches: [
          { label: 'Cappuccino NCS S 3005-Y50R Trento matt', color: '#c4a88a' },
          { label: 'Cappuccino NCS S 3005-Y50R Allure matt', color: '#c4a88a' },
        ],
      },
      { label: 'Frontenmaterial', value: 'MDF' },
      { label: 'Frontenbeschichtung', value: 'Email' },
      { label: 'Lackierung', value: 'Matter Lack' },
      { label: 'Arbeitsplatte', value: '7 Marmor 064HM (Kunststein)' },
      { label: 'Korpusfarbe', value: 'Kaschmir' },
      { label: 'Glasfront', value: 'Stopsol Bronze' },
      { label: 'Fassadenrahmen', value: 'Allure Vetro Mattgold' },
      { label: 'Dekorelemente', value: 'Kolonnen, Fräsung, Glasfronten' },
      { label: 'Möbelmasse', value: '3930 × 2925 × 600 mm' },
      { label: 'Raumgrösse', value: '4100 × 3935 mm' },
      { label: 'Grundriss', value: 'Gerade / Küche-Esszimmer' },
    ],
  },
  // Weitere Projekte werden hier ergänzt
]

export const PROJECTS_MAP = Object.fromEntries(PROJECTS.map((p) => [p.slug, p]))
