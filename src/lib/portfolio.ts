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
      'https://upload-bxp-mfm.marya.ru/uf/e40/e406813b80cf1e8e29ade8dc6c6ac431/6b0a54c41be1547342425354144464e2.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/2df/2df7de9550a27cf471891ecb8eb65703/792b5450027d78733f567ab7c9471747.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/89f/89fb0d83de483222baf6ae34e571b8d6/1b67fe9d17b393fb3e69efeef2a1d594.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/078/07834d432c9a6c3baef54f0dd7fa8fd5/a9728135952307a7acb8854416f7a1c6.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/ab3/ab3d37bd87ea820959d1cd39ee7827c8/1167750f15bff482ed56986e1d8ad5dc.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/b56/b56b6bcb5b7d92c890b3b85085baf85f/b4ea3d88397e479712dc8016c060afb5.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/a63/a63d3e3522539adc9da01987dade1f65/12d21487c7bbc658815bbcbd461f5e38.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/22c/22c65608228f3906b780f8ba0423963e/68a21d482ba291b62d623fc7d1f3f647.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/889/8893f62f4c2ecb041961e2f7736b8bcf/11cc01b83ec41f871d931d71f5a2b377.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/fe7/fe73f3174687a163fd146b8a8ef2de95/24397c465b43e3b81d46b9b9e4528ac4.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/b17/b17ca6bc56cca216e82b3025f0cccc12/c9d005cedd8fb53e8c6a95686ee084f9.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/27b/27b67547bde27b81ca883f4f99372575/9335e7d0a5ef7d4f1458a4bebd231949.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/07b/07be2e1973a09c64dded61143acc0d87/e3b2a6a28201faf93b9c1fbb8b904f60.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/6e4/6e40990fdb202d646e2f4a40bc4921d2/dc426febb9c098fa42519a9118a2dd57.jpg',
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
          { label: 'Kaschmir Mix 22', img: 'https://upload-bxp-mfm.marya.ru/iblock/622/62252db0229ed2f84ef1bda6e5a2fe59/64b9c048794824912efb77a478649c5b.jpg' },
        ],
      },
      { label: 'Frontenmaterial', value: 'Laminat-Spanplatte' },
      { label: 'Frontenbeschichtung', value: 'Laminat' },
      { label: 'Dekorelemente', value: 'Griffloses System' },
      {
        label: 'Korpusfarbe',
        swatches: [
          { label: 'Hellgrau', img: 'https://upload-bxp-mfm.marya.ru/iblock/496/4968a79e1353f43b329ccc8dd3acbeff/936bbb42037425f96d63c282b2fb570d.jpg' },
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
      'https://upload-bxp-mfm.marya.ru/uf/d11/d1104f1552a133be5b44141f6f74a19c/917af7b021088bc9df255ed3f17fe776.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/726/7267de83bb81050405dd6332d6ba83df/1e5a819d7fab32725e334784d9ee15cc.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/159/159ddb01185022cba2e1037ef91e85ef/1266df36bf23554c95a2dc75bab5f659.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/68c/68caf9affabb2fd67970816f613bc57e/4b79d4150be04201a214221c1d0894a3.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/38f/38fd7313d42d449f5856fcb14bcb22d9/b97c1e937b3ab5c973c58915d465ef88.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/f9a/f9a00cd57d4e1f4eca45d6a015673896/470d713e79a1175065805a78f9b6cd15.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/ac7/ac7e09e13d4e3d2c5e8b923e0014fef7/cbd28f18902115890e4653a672cfeec9.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/127/127c33143e2f76fcac93b49ef3481aad/3fcde35b7d1fe6a6206c79165f7459a4.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/158/1581214483d70e37f8de8df626512fcf/9d9773274bb4a1d308abd590ef6923d4.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/3f3/3f34dc6db582c79c721a3deace73f4c0/1e18313045dc2314d660fdc10ef0a63c.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/e0c/e0c29f8b1d54307da562b731ba106cc4/df27a12b018cb5e83dcca79eb532861b.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/0a4/0a4cb8c1707535d5554a1279a66659e1/c2c8053e19cfbb97b5f2f499d66847ba.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/038/038cdcb7e5014a1a9152f97d8f52f74c/aa93dc29c62977c8ca63000825f3975f.jpg',
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
          { label: 'Kaschmir Mix 22',                img: 'https://upload-bxp-mfm.marya.ru/iblock/737/737145a92726bf90367816f223bfcaef/9de83150f1666ab3f89f7b76946c1f6b.jpg' },
          { label: 'Dunkelbraun Charleston Oak Mix 22', img: 'https://upload-bxp-mfm.marya.ru/iblock/572/572cebd808b50cc9d181c26dfe221c88/bf67f149aede3c78ad16ee28bf5ec00d.jpg' },
          { label: 'Weiss Premium Tokyo',             color: '#f0eeeb' },
          { label: 'Kaschmir Tokyo',                  img: 'https://upload-bxp-mfm.marya.ru/iblock/737/737145a92726bf90367816f223bfcaef/9de83150f1666ab3f89f7b76946c1f6b.jpg' },
          { label: 'Staubgrau Tokyo',                 color: '#9c9a96' },
          { label: 'Dunkelbraun Charleston Oak Tokyo', img: 'https://upload-bxp-mfm.marya.ru/iblock/572/572cebd808b50cc9d181c26dfe221c88/bf67f149aede3c78ad16ee28bf5ec00d.jpg' },
        ],
      },
      {
        label: 'Arbeitsplatte',
        swatches: [
          { label: 'Cassis Quartz', img: 'https://upload-bxp-mfm.marya.ru/iblock/adb/adbcf612faacd9d894b70847ce3c5781/f402e13facd86013a030fa48659785af.jpg' },
        ],
      },
      {
        label: 'Korpusfarbe',
        swatches: [
          { label: 'Dunkelbraun Charleston Oak', img: 'https://upload-bxp-mfm.marya.ru/iblock/572/572cebd808b50cc9d181c26dfe221c88/bf67f149aede3c78ad16ee28bf5ec00d.jpg' },
          { label: 'Kaschmir',                   img: 'https://upload-bxp-mfm.marya.ru/iblock/737/737145a92726bf90367816f223bfcaef/9de83150f1666ab3f89f7b76946c1f6b.jpg' },
          { label: 'Schwarz Graphit',             img: 'https://upload-bxp-mfm.marya.ru/iblock/b52/b52ba222ac4f8f9062bcdca6fa668584/03b538822f9cdef38551fe3eb9e3a27c.jpg' },
        ],
      },
      {
        label: 'Glasfront',
        swatches: [
          { label: 'Silber Spiegel', img: 'https://upload-bxp-mfm.marya.ru/iblock/269/2695d93f3e3cd0d24759215373ce9bbb/b7719c93be44aef35fa81a29eedab540.jpg' },
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
      'https://upload-bxp-mfm.marya.ru/uf/44a/44a04095f2ab2d1d8a0953f0f753dc8e/33113d889a5866784047f62eef021760.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/72c/72c80961073c9d79d4ba1889e4c37207/67b93d3c18fe358dfc49cb9ba9ea2525.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/208/208adbcb906354aac5162cca3dc6c181/400181ffc9fe1f8e60eab7a6eb046c80.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/23c/23c8c2f8f331b4302252aff049cc1ee9/9b07140e96c4fc51e8833b1930e75bc1.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/ae5/ae57fd1b74ba024518bf352b32f85c76/c8fe0b42b620719a0fcf453634c1196c.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/164/164642ff1db0cfd8a98a2c55b2a05c88/6f593597d9a43f7872caf2228f43097b.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/850/85085aca5fb4efb890d627acb3f71bf0/b2271d8ee44075ded646e422e56045c8.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/994/9945d8e319959692cc2d5850674eab11/0c4a2cccb655373fe419a92162d7d49e.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/ab9/ab9ed511748059eb736055f4a2ba0063/6eb3d5339cf7a2c25a5a392163486abd.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/b07/b077f74515a7131bee0465e57b72dbc7/ab218aa00707ba21c7c169043f18d0b0.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/a0c/a0cfa993147bd820d3c547e7767d4043/08ef73d2e8bbb4a73d0b9649e28eb860.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/50e/50ebd63ba5e1547a0fbdab92a512bf28/fab194917564acd6eaf2fbc2f2dfe6a2.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/336/336e5219977240a3d21234c2aaf91730/55046506f6b0213b26de84c46e242c4b.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/847/84747a01e1291ceb8ac7af73a15c39cb/eb2a2faae037e21029a0df3f88a81530.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/543/543b91ecfb50d5de019328e8b66a3255/51627ada10ae21a6c54691a3da5e1f91.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/c9c/c9cd95d4f84e5715c7a851a7ad7689ea/d1293ea5d7e20c699ccfa80f161e40f0.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/09f/09f71819ef737f1b1586f1d0e475dd78/4764bf56bbaab4aa27dd029e47163e97.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/067/06765df4a8b97c8391e4f391a0a00214/19db7fd61848c4903431f879e419c4bb.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/3ee/3ee7cc5cc4ed49eeb51f5be9f6fcb411/c7b0d805426e7196dd0b0a4911a7dab9.jpg',
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
      'https://upload-bxp-mfm.marya.ru/main/b85/b857cbbc420a3db45fe1ae6b7400534d/15ee280ae7b86c45f79ae9c970428e71.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/a4d/a4d1ff2a7e57a2573f919466947d5ab0/9afc2c856d188adf48ac8ec1e26306bf.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/1f9/1f91468b00267b8e1e5536b468fdb306/883dd1dc64115d4e272a98b78432c0ff.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/0b6/0b6d21721af8271358d07414cbec8709/bfb4f83b64e87d841c177f6d93e9769d.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/c01/c0133b9ba1b1ba243c15dc29dcbb9a76/6d0eec92cac22fb9ff4debee8639ba8e.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/1fc/1fcaa0b881e55832776a3789e3a948e1/127553cf5e7400cd8a2e057522e030a8.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/2e6/2e650a9bcbab4182c46d4cba4627e93e/028591dc4e98fd211b0b338cd70156e9.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/237/23711d2bb2ed2ca5ce076126f5905f85/a0ba24a3f5ecf13bafc0ff24371a2242.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/3fd/3fd8d8ed21767826087c4f9427984d36/c857229a08a32c98cbb821839ba3d7b1.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/904/9044e374e213ab22446e2d94720d0f05/b03d71112aca0827b2a3c25375b50e82.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/287/287b8e68185e546f19edcb591f779c0e/fde502d5f2782c32e39135f3664bfe7c.jpg',
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
      'https://upload-bxp-mfm.marya.ru/main/40c/40c5038754da97f04627ae65a97d63a8/d92d66dba65a792acc834258eb6046b6.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/ca5/ca576b5c714a618699fd82de4b60c20b/a4deecf8c73396449872e62b738cd0f5.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/048/048984877267d96ae37d938078e75be3/d3b8eebc33a0a554ecda8ac874db6200.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/28f/28f4de08f988867a35a5a8a65d592914/2f7a32704cd27abbe18f180eee8db2bb.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/6c3/6c344aaa8e2d081c5605f8c70619d996/c7cb2c087230a7bd83b92eef29dfe02c.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/eb5/eb5e840775050485673b317bcbc4bd27/01a940c18e044218e07f1cfde8a67c78.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/dac/dacb1d4fcd75a1c16807f9fa7b6d5af5/a1ead46d1e705dc6b8c52ba853993233.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/ccf/ccf4eff876da2fcfdcbfa7a9bff776cc/2faf004ad83f0b518d3ee0d4dff6f5cb.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/4f6/4f61ac7c52e569f1a3fc5579a295dd8e/340a411bbbc6aa59a32953e79f410afa.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/eab/eab58ef3dba33720d5324acb217c4df0/7454d61b307a7bc1c252e6be5bc4f3c0.jpg',
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
      'https://upload-bxp-mfm.marya.ru/uf/7e2/7e2494e014f6f4f1ef5d3c6cdedf6d79/499a06028be071a14abfb5be3da13329.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/01f/01f93382229e35c71f52ed644b5f9e62/3f11a4b7d2c0ad8ac4d0297b033ef214.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/620/620a16dee060968c4ac3cc8ba79c0d65/657bd816bc6f1ef14359ec9713efd323.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/b37/b37ef3d6f623c7805dec22a4079735ea/abe5d3434738423a044f093c9f10e486.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/6e1/6e11481635086e1057be408fff3a2edb/024d8c94e18ec841152f5db35aeac066.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/cdf/cdf187dac50167a8587999b0bc45d56b/2dcba26cdfeb225b066340c3f2b921fb.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/da8/da864dbb3f247cd2d09973a8a8efd7f6/0cbe82077e7c97e035d5f9f8ea5ed524.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/aa4/aa438cbcd72142c28ef1bfaa03511944/e5420c7d13d5a533e8ddf8be7bc623b0.jpg',
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
      'https://upload-bxp-mfm.marya.ru/main/068/06864e2ca787668995644ccdd2b4be47/65b7ef6d96cbc1dc01ccb8683fdd28c2.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/16b/16b5316adddf3b3b41cd6c5a9ab1bb92/12668ef1fc1dbdde298b394dd621ef5c.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/a64/a646683170209a3447d925b980e7fa7e/6736a12c8a3fb4802fae2167c5bcf195.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/929/929e2d96cd5f47258c706d90cb6a2812/4cbbbc9ea4a27a2288aafed7fbcb3b63.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/d27/d27d1a8eef4418b3872159e33957091b/6c8621b6926de10d0de84dbd5d0be862.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/f8d/f8dd77c2a0ce3ab59088f07a49850796/9685121b202fef0ee623dec26efcfd0f.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/42f/42f18f8606537afd980f096786689736/5c3fb8179caf427d0ab0116e30f4917d.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/906/90666a0809d3ed3215314aeff690846a/9c1fda620fe495c029106ea0578924c5.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/c2b/c2b14d8049f52c56deb30adff9a8a903/85fe050fc8785d3711b21fc4f9c2fda7.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/1dc/1dcd00a0ea537039fc15aa626b2707c8/32325eee96543d81e0fbedac029a89ae.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/e40/e40adb9edb7a36835322a6affefcf7ce/2b8d6f621dddcc2f12ca775adab7f141.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/945/94512ec94effb43c41091d8e884f4a64/035161644bea56ff800cf2ea1e2ef90f.jpg',
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
      'https://upload-bxp-mfm.marya.ru/uf/515/51593685d85aa97d8257ec0d8996fdb3/4ee5d1118f284beb9010ad2a6d2f2b24.jpeg',
      'https://upload-bxp-mfm.marya.ru/uf/a0d/a0d073588b2e1ce9d05a4f3566166ae2/ae8ea29ac8d838f422dd028b23c7f72f.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/d94/d94add5c8ea65f95c942df08a018aeb6/63a7c6319bd9a1a2e6b1aae54af23ce5.jpeg',
      'https://upload-bxp-mfm.marya.ru/uf/991/991d51d20375c65780432876b438377c/adce0693522c90ad3eed1be2c098a9ec.jpeg',
      'https://upload-bxp-mfm.marya.ru/uf/680/6805409fc0c4a907db598c4fbbe6e4ba/1fd571e4e31a96cc72bfc32728ac3171.jpeg',
      'https://upload-bxp-mfm.marya.ru/uf/fa5/fa549e4420242b75f271f800a64bfe4c/e4844fd0edc23d23b1cd385c8efc972c.jpeg',
      'https://upload-bxp-mfm.marya.ru/uf/e64/e64e762f0991670f69659ae247128916/7755aaad673d2e06c0f2dfd4a4932bd8.jpeg',
      'https://upload-bxp-mfm.marya.ru/uf/d0c/d0cb09a1a5b9729c59b8bd79af30768a/ff414743c34556a358c02e7b44bd9135.jpeg',
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
      'https://upload-bxp-mfm.marya.ru/uf/f36/f364796e40f398f832d009c8d8aa0731/7fbe2b74d7d0225c7a5f8972c086919f.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/6e6/6e684b932481b62914e2276b3829ebb5/0fabf3075ca9ef8b77f699cc1ab9adcb.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/b4c/b4c3bef6bd5592aaf3d878d07d5ec25d/9cf6c051803bd3cb2b66ed06bc18b13f.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/05f/05f784537ee8750526f5f2f0f40d9671/16bacc54edb12947ee57d558269a321b.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/993/99316f9f7c7af7ca2663e6ea7aced74e/d9cde46434da6d6574b4e735ff9e8efc.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/b33/b3391ed4949b9f2c288771db8f76ebd7/1f0685617ff29863a4e29ad49df5b376.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/de9/de98c221089f342cf9808083e5057e36/979c7818c44f419319a68ea7ffc59c27.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/dc6/dc63ff547be099eb24e2a31e97c49270/504c444a403282ef8c4e5cd5b2f8de06.jpg',
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
      'https://upload-bxp-mfm.marya.ru/uf/7a0/7a016d91d86ac1133e19f4da79e22f46/540cb017139e597226863db67730b421.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/f2e/f2e19cb2a267dfea1f70e940ee4e3a80/3f2954fea4baee5778021b87c4ea995c.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/d21/d21b7132388eabeed012097ef1aab253/3b1612a9028999f42c109efac1b1a652.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/db7/db7c2711b3ee93afa27c1e9eb584eaeb/9e5c4272702924dff14dcaae53d59342.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/20e/20e8fdc777c8017e3d07fde0252330ed/e4ac491198a5734b4b9573ed1a356ee4.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/75a/75a8b191c9b5f4e1dc45a806b7ee9dc8/c8f8a18d3123a18aaf632946b8fb3d31.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/3d2/3d2d02e6e6b3e57edf5d95b7ffb09c9d/fc5a43d5033f0e83352896939ad801e3.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/053/053e9f135cd8bac2b30a38b2b2c15985/dc22fcfd5c5991d9dd9dedeb102b408b.jpg',
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
      'https://upload-bxp-mfm.marya.ru/uf/788/78804e722fb2b1865f17ba6cc29dc957/61d406b4621b3bff819624b660da4564.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/186/186df583f699732501c93ce39f5651ad/c20386c0475eb34a29c6141154decde9.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/b86/b86f1973fac250c26473e38b1a6dc23e/78fc1257715a908b5f9f923a5669ba1f.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/f54/f5486b9b56d86ae7f70b4e6bf2fc8f3e/0ff8c99d1c94f75adc8f62bbc503ca91.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/84d/84d1a7f77a4ca4b91960f9620421d0b6/fc63a66ed038a86c8406e68b2d6f6660.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/103/103aedf82e6d04894da1c16b79703012/de214ccd7a28499d31c895daf2cabce4.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/d54/d5473afe6c545795c1aee6870fc8170c/050a876af3590e5545a3420a5112bf87.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/431/43187a2bbc3638da61398bfdb7e2fb44/45e414cb4c592f5ec76aa51625143d08.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/8b7/8b7038f054037cc1f7051764e18d959a/8f4823f56298661b763ad2e51d79224e.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/41f/41fbaa00c976c975e9f1e2b8145b52d7/2805294ef58392b4e8a015206ed4268f.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/dfd/dfdab54d5485024bd2cea0267cae6d6b/82e47fc23b3bedf1e3df861816937cd9.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/526/526c230f09681695421692ac405e31fc/5916dca6317f8cba5952df6f78760ab9.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/d30/d303ae6fe70b159ac78ff548d8f8fc37/be6100a3cfd910e65e64d2e619e533b2.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/eee/eeefaea42de3de8ffd02395de8ef072c/d97528849005fae0c1f2384054de3bc4.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/173/1733ced08c6a458f82797345e827b7f7/a03ebf744a93b804a057748885d0d1d1.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/4ea/4eac87b965c35bd90c047320687a165a/55c5c4ee238013cb0b9da00e865f2643.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/3a8/3a8007cfbe815669220021e9d02c8cff/8e92ebce4eba934b9afb8aa6509442d2.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/450/450efe30ef9cef53f6ee03481eb7f7fc/79ea2939ed475ac18b5b8e1b76fea98f.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/3a2/3a2ac865d841960f077d9700367c28e3/52f06ef3adda1ea68364d2fdc99a016a.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/726/72665baa5e7d7d5d47c453d0c91ccf5d/1694eb24771653233cb16dc08f972f0e.jpg',
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
      'https://upload-bxp-mfm.marya.ru/uf/81c/81cd35df42f4e7d0265b30ec7be2b37e/d44552c56d927af746f5c5b4eb192a71.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/740/7404e6293bbe03e740bada98a8c9568d/e2a280ab617bfebb6f65f700045a3a3c.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/21e/21ef054bbb3101dd64d7bbd0c9860327/9104d21e3f9cdb8e16ec256ae6a32c04.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/54c/54c805874500c1fabb9613733ac13e4a/8a1a221607db0ad92d9814402b3663cc.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/749/7491a6a12ecd28632fef0ff2c72bad20/8c59d0edbfbc3c27d1908faaaadc2eee.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/639/6399d80f4c5caf38f01892145e51b42c/361ec33b94cf695a1f3b1b8b5d07ead3.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/c9a/c9a369febacb82f53822e5b177fcd06f/dca79785e14db6c3d97d349b012ac486.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/4ff/4ff280455d4b5c87f20e24ce720f3ed4/32a3aed1326d551fbf3aa671fcb59078.jpg',
      'https://upload-bxp-mfm.marya.ru/uf/5d2/5d253ae9ebca72bb9cb128e5c2a2f271/c26ef6471fbea93e3b3302640faf2689.jpg',
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
