import Link from 'next/link'
import HoverSlider from '@/components/ui/HoverSlider'

const products = [
  { name: 'Küche Trento Email', slug: 'trento-email', tag: 'Klassisch', img: 'https://www.marya.ru/promo/home3/img/models/trento1.jpg' },
  { name: 'Küche Mix 22',       slug: 'mix-22',       tag: 'Modern',    img: 'https://www.marya.ru/promo/home3/img/models/mix22.jpg' },
  { name: 'Küche Avenue',       slug: 'avenue',       tag: 'Klassisch', img: 'https://www.marya.ru/promo/home3/img/models/avenue.jpg' },
  { name: 'Küche Nicolle',      slug: 'nicolle-thermoplast', tag: 'Klassisch', img: 'https://www.marya.ru/promo/home3/img/models/nicolle.jpg' },
  { name: 'Küche Jazz',         slug: 'jazz',         tag: 'Modern',    img: 'https://www.marya.ru/promo/home3/img/models/jazz.jpg' },
  { name: 'Schrank Jazz',       slug: 'jazz-kabinet', tag: 'Schrank',   img: 'https://www.marya.ru/promo/home3/img/models/jazz3.jpg' },
]

export default function PopularProducts() {
  return (
    <section className="uk-section">
      <div className="uk-container">
        <h2 className="section-heading">Beliebte Modelle</h2>
        <p style={{ textAlign: 'center', color: 'var(--muted-color)', marginBottom: '2.5rem' }}>
          Meistverkaufte Küchen und Möbel in der Schweiz
        </p>
        <div className="popular-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
          {products.map((p) => (
            <Link key={p.slug} href={`/katalog/kuechen/${p.slug}`} className="product-card">
              <div className="product-card-image" style={{ position: 'relative', overflow: 'hidden' }}>
                <img src={p.img} alt={p.name} loading="lazy" />
                <span className="product-card-badge">{p.tag}</span>
                <div className="product-card-overlay" />
              </div>
              <div className="product-card-title">{p.name}</div>
              <div className="product-card-sub">Massgefertigt · Schweiz</div>
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .popular-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          .popular-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}