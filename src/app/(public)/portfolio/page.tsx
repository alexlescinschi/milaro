import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

const projects = [
  {
    id: 1,
    slug: 'komplettausstattung-wohnung',
    title: 'Komplette Wohnungsausstattung: Küche, Garderoben, Diele, Badezimmer',
    img: 'https://www.marya.ru/promo/home3/img/models/trento1.jpg',
    designer: 'Igor Ilyukin',
    likes: 85,
    models: 'Schrank Jazz, Schrank Stilos, Bad Dominika, Küche Trento Email',
    price: 'ab CHF 19',
    desc: 'Ein umfassender Ansatz für die gesamte Wohnung — von der Küche Trento mit hellen matten Fronten über zwei Garderoben Stilos bis zum Badezimmer Dominika. Alles in einer einheitlichen Farbgebung und durchdachtem Design.',
  },
  {
    id: 2,
    slug: 'kueche-wohnpark-april',
    title: 'Küche für Wohnpark April',
    img: 'https://www.marya.ru/promo/home3/img/models/jazz.jpg',
    designer: 'Designbüro Milaro',
    likes: 310,
    models: 'Küche Jazz, Küche Jazz Intuit',
    price: 'ab CHF 41',
    desc: 'Moderne Maßküche mit matten Fronten in RAL 7042 und Holztextur. Highlight ist die Kochinsel mit Riffelglas-Vitrinen, Innenbeleuchtung und Eichenholzböden für Wein. Alle Haustechnik und der Boiler sind elegant versteckt. Ein idealer Mix aus Minimalismus und moderner Klassik.',
  },
  {
    id: 3,
    slug: 'minimalistische-barrierefreie-kueche',
    title: 'Funktionale Küche mit zwei Kühlschränken',
    img: 'https://www.marya.ru/promo/home3/img/models/mix22.jpg',
    designer: 'Anna Schmidt',
    likes: 93,
    models: 'Küche Jazz Intuit',
    price: 'ab CHF 41',
    desc: 'Durchdachte Küche für passionierte Köche mit zwei Kühlschränken und optimierten Arbeitsabläufen. Ergonomische Anordnung und maximale Stauraumnutzung auf kompakter Fläche.',
  },
  {
    id: 4,
    slug: 'einbauschrank-schlafzimmer-cashemire',
    title: 'Einbauschrank und Kommode in sanftem Kaschmir-Ton',
    img: 'https://www.marya.ru/promo/home3/img/models/mix2.jpg',
    designer: 'Maria Berger',
    likes: 22,
    models: 'Schrank Mix 22',
    price: 'ab CHF 12',
    desc: 'Einbauschrank und passende Kommode für das Schlafzimmer in einem zarten Kaschmir-Farbton. Nahtlose Integration in die Raumarchitektur mit umfangreichem Stauraum.',
  },
  {
    id: 5,
    slug: 'kueche-wohnraum-minimalismus',
    title: 'Küche-Wohnzimmer im Minimalismus-Stil mit Insel und Vitrine',
    img: 'https://www.marya.ru/promo/home3/img/models/avenue.jpg',
    designer: 'Thomas Frei',
    likes: 93,
    models: 'Küche Jazz Intuit',
    price: 'ab CHF 41',
    desc: 'Offener Wohn-Küchenbereich mit klaren Linien. Die Kochinsel dient als Raumteiler und kommunikativer Mittelpunkt, während die Vitrine elegante Akzente setzt.',
  },
  {
    id: 6,
    slug: 'kueche-amerikanische-klassik',
    title: 'Küche im amerikanischen Klassik-Stil mit Kochinsel',
    img: 'https://www.marya.ru/promo/home3/img/models/nicolle.jpg',
    designer: 'Evelina Abusjarowa',
    likes: 35,
    models: 'Küche Jazz Allure, Küche Kamelie',
    price: 'ab CHF 48',
    desc: 'Zurückhaltender Luxus im Stil der amerikanischen Klassik. Email-Fronten in edlem Grauweiß, Messinggriffe und Vitrinen in Goldrahmen. Die zentrale Kochinsel macht die Küche zum geselligen Mittelpunkt des Hauses.',
  },
  {
    id: 7,
    slug: 'minzgruener-schrank',
    title: 'Minzgrüner Schrank — frisches Design für Ihr Zuhause',
    img: 'https://www.marya.ru/promo/home3/img/models/jazz3.jpg',
    designer: 'Laura Meier',
    likes: 64,
    models: 'Schrank Integrato',
    price: 'ab CHF 20',
    desc: 'Ein Statement-Schrank in erfrischendem Mintgrün mit klarer Linienführung und moderner Ausstrahlung. Durchdachte Inneneinteilung für optimalen Stauraum.',
  },
  {
    id: 8,
    slug: 'bueroschrank-minimalismus',
    title: 'Minimalistischer Büroschrank — klare Formen',
    img: 'https://www.marya.ru/promo/home3/img/models/jazz3.jpg',
    designer: 'Patrick Kuhn',
    likes: 1,
    models: 'Schrank Tokio',
    price: 'ab CHF 11',
    desc: 'Schlichter, eleganter Büroschrank im minimalistischen Stil. Schiebetüren und individuell angepasste Inneneinteilung für perfekte Arbeitsorganisation.',
  },
  {
    id: 9,
    slug: 'kueche-landhausstil',
    title: 'Gemütliche Küche im Landhausstil mit natürlichen Materialien',
    img: 'https://www.marya.ru/promo/home3/img/models/trento1.jpg',
    designer: 'Claudia Hofer',
    likes: 19,
    models: 'Küche Trento Email, Küche Jazz',
    price: 'ab CHF 14',
    desc: 'Warme Landhausküche mit Holzfronten und Steinoptik-Arbeitsplatten. Offene Regale, viel natürliches Licht und durchdachte Stauraumlösungen schaffen eine einladende Atmosphäre.',
  },
]

export default function PortfolioPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Portfolio' }]} />
      <section className="uk-section uk-section-large">
        <div className="uk-container">
          <h1 className="section-heading">Portfolio</h1>
          <p style={{ textAlign: 'center', color: 'var(--muted-color)', marginBottom: '1rem', fontSize: '1.1rem' }}>
            4.372 realisierte Projekte in der Schweiz
          </p>

          {/* Filter tags */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {['Alle Projekte', 'Küchen', 'Schränke', 'Badezimmer', 'Komplettlösungen'].map((f) => (
              <button key={f} style={{
                padding: '0.5rem 1.5rem', borderRadius: '2rem', border: '1px solid var(--border-color)',
                fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.03em',
                cursor: 'pointer', background: f === 'Alle Projekte' ? 'var(--light-color)' : 'transparent',
                color: 'var(--main-color)',
              }}>
                {f}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            {projects.map((p) => (
              <div key={p.id} style={{ width: 'calc(33.333% - 1.5rem)', minWidth: 280 }}>
                <Link href={`/portfolio/${p.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  {/* Image */}
                  <div style={{
                    height: '18rem', borderRadius: '1rem', overflow: 'hidden',
                    position: 'relative', marginBottom: '1rem',
                  }}>
                    <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    {/* Likes badge */}
                    <div style={{
                      position: 'absolute', top: '1rem', right: '1rem',
                      background: 'rgba(0,0,0,0.5)', color: 'white',
                      padding: '0.3rem 0.7rem', borderRadius: '0.5rem',
                      fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem',
                      backdropFilter: 'blur(5px)',
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                      {p.likes}
                    </div>
                  </div>
                  {/* Title */}
                  <h3 style={{
                    fontFamily: 'var(--sb-reg)', fontSize: '1.1rem',
                    marginBottom: '0.3rem', lineHeight: 1.4,
                  }}>
                    {p.title}
                  </h3>
                  {/* Models */}
                  <p style={{
                    fontSize: '0.8rem', color: 'var(--muted-color)',
                    marginBottom: '0.3rem',
                  }}>
                    {p.models}
                  </p>
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="#" className="uk-button uk-button-primary">
              Alle 4.372 Projekte ansehen
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
