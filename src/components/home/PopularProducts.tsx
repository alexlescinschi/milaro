import Link from 'next/link'

const products = [
  { name: 'Küche Trento', model: 'Email', slug: 'trento-email', price: 'ab CHF 12', img: 'https://www.marya.ru/promo/home3/img/models/trento1.jpg' },
  { name: 'Küche Mix 22', model: '', slug: 'mix-22', price: 'ab CHF 11', img: 'https://www.marya.ru/promo/home3/img/models/mix22.jpg' },
  { name: 'Küche Avenue', model: '', slug: 'avenue', price: 'ab CHF 13', img: 'https://www.marya.ru/promo/home3/img/models/avenue.jpg' },
  { name: 'Küche Nicolle', model: 'Thermoplast', slug: 'nicolle-thermoplast', price: 'ab CHF 10', img: 'https://www.marya.ru/promo/home3/img/models/nicolle.jpg' },
  { name: 'Küche Jazz', model: '', slug: 'jazz', price: 'ab CHF 14', img: 'https://www.marya.ru/promo/home3/img/models/jazz.jpg' },
  { name: 'Schrank Jazz', model: 'Kabinet', slug: 'jazz-kabinet', price: 'ab CHF 8', img: 'https://www.marya.ru/promo/home3/img/models/jazz3.jpg' },
]

export default function PopularProducts() {
  return (
    <section className="uk-section" style={{ minHeight: '100vh' }}>
      <div className="uk-container">
        <div className="uk-grid" style={{ gap: '1.5rem' }}>
          {products.map((p) => (
            <div key={p.slug} className="uk-width-1-3@m" style={{ width: '33.333%' }}>
              <Link href={`/katalog/kuechen/${p.slug}`} className="product-card">
                <div className="product-card-image uk-border-rounded-large" style={{ overflow: 'hidden' }}>
                  <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="product-card-title">{p.name}</div>
                {p.model && <div style={{ fontSize: '0.875rem', color: 'var(--muted-color)' }}>{p.model}</div>}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
