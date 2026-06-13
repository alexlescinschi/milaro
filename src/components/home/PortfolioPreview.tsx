import Link from 'next/link'

const projects = [
  { slug: 'komplettausstattung-wohnung', title: 'Komplette Wohnungsausstattung', img: 'https://www.marya.ru/promo/home3/img/models/trento1.jpg', likes: 85, models: 'Schrank Jazz, Schrank Stilos', price: 'ab CHF 19' },
  { slug: 'kueche-wohnpark-april', title: 'Küche für Wohnpark April', img: 'https://www.marya.ru/promo/home3/img/models/jazz.jpg', likes: 310, models: 'Küche Jazz', price: 'ab CHF 41' },
  { slug: 'minimalistische-barrierefreie-kueche', title: 'Funktionale Küche mit zwei Kühlschränken', img: 'https://www.marya.ru/promo/home3/img/models/mix22.jpg', likes: 93, models: 'Küche Jazz Intuit', price: 'ab CHF 41' },
  { slug: 'einbauschrank-schlafzimmer-cashemire', title: 'Einbauschrank in sanftem Kaschmir-Ton', img: 'https://www.marya.ru/promo/home3/img/models/mix2.jpg', likes: 22, models: 'Schrank Mix 22', price: 'ab CHF 12' },
  { slug: 'kueche-wohnraum-minimalismus', title: 'Küche-Wohnzimmer mit Insel & Vitrine', img: 'https://www.marya.ru/promo/home3/img/models/avenue.jpg', likes: 93, models: 'Küche Jazz Intuit', price: 'ab CHF 41' },
  { slug: 'kueche-amerikanische-klassik', title: 'Amerikanische Klassik mit Kochinsel', img: 'https://www.marya.ru/promo/home3/img/models/nicolle.jpg', likes: 35, models: 'Küche Jazz Allure', price: 'ab CHF 48' },
]

export default function PortfolioPreview() {
  return (
    <section className="uk-section">
      <div className="uk-container">
        <h2 className="section-heading">Portfolio</h2>
        <p style={{ textAlign: 'center', color: 'var(--muted-color)', marginBottom: '2rem' }}>
          4.372 realisierte Projekte
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
          {projects.map((p) => (
            <div key={p.slug} style={{ width: 'calc(33.333% - 1rem)', minWidth: 250 }}>
              <Link href={`/portfolio/${p.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{ height: '18rem', borderRadius: '1rem', overflow: 'hidden', position: 'relative', marginBottom: '0.8rem' }}>
                  <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem',
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  }}>
                    <span style={{ fontFamily: 'var(--sb-reg)', fontSize: '1rem', color: 'white' }}>{p.title}</span>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', marginTop: '0.3rem' }}>
                      {p.models}
                    </div>
                  </div>
                  <div style={{
                    position: 'absolute', top: '0.8rem', right: '0.8rem',
                    background: 'rgba(0,0,0,0.5)', color: 'white',
                    padding: '0.2rem 0.6rem', borderRadius: '0.5rem',
                    fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.2rem',
                    backdropFilter: 'blur(5px)',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    {p.likes}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link href="/portfolio" className="uk-button uk-button-primary">Alle Projekte ansehen</Link>
        </div>
      </div>
    </section>
  )
}
