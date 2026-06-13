import Link from 'next/link'
import { CATEGORIES } from '@/lib/constants'

export default function CatalogPreview() {
  return (
    <section className="uk-section">
      <div className="uk-container">
        <h2 className="section-heading">Katalog</h2>
        <p style={{ textAlign: 'center', color: 'var(--muted-color)', marginBottom: '2rem' }}>
          Möbel und Technik für das ganze Haus
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {CATEGORIES.map((cat) => (
            <Link key={cat.slug} href={`/katalog/${cat.slug}`} style={{ width: '23%', minWidth: 200, textDecoration: 'none', color: 'inherit' }}>
              <div style={{ height: '12rem', borderRadius: '1rem', overflow: 'hidden', marginBottom: '0.8rem', position: 'relative' }}>
                <img src={cat.image} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.1rem', textAlign: 'center' }}>{cat.name}</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--muted-color)', textAlign: 'center' }}>{cat.count} Produkte</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
