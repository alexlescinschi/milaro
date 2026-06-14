import Link from 'next/link'
import { CATEGORIES } from '@/lib/constants'

export default function CatalogPreview() {
  return (
    <section className="uk-section">
      <div className="uk-container">
        <h2 className="section-heading">Katalog</h2>
        <p style={{ textAlign: 'center', color: 'var(--muted-color)', marginBottom: '2.5rem' }}>
          Möbel und Technik für das ganze Haus
        </p>
        <div className="catalog-preview-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
          {CATEGORIES.map((cat) => (
            <Link key={cat.slug} href={`/katalog/${cat.slug}`} className="cat-card">
              <div className="cat-card-wrap">
                <img src={cat.image} alt={cat.name} className="cat-card-img" loading="lazy" />
                <span className="cat-card-badge">Katalog</span>
                <div className="cat-card-overlay" />
              </div>
              <div className="cat-card-title">{cat.name}</div>
              <div className="cat-card-sub">{cat.count} Modelle</div>
            </Link>
          ))}
        </div>
        <style>{`
          @media (max-width: 900px) { .catalog-preview-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 580px) { .catalog-preview-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>
    </section>
  )
}
