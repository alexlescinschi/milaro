import Link from 'next/link'
import { CATEGORIES } from '@/lib/constants'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

export default function CatalogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Katalog' }]} />
      <section className="uk-section uk-section-large">
        <div className="uk-container">
          <h1 className="section-heading">Katalog</h1>
          <p className="uk-text-center uk-text-muted" style={{ marginBottom: '3rem' }}>
            Möbel und Küchen nach Maß von milaro.ch
          </p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {CATEGORIES.map((cat) => (
              <div key={cat.slug} style={{ width: 'calc(33.333% - 1.5rem)', minWidth: 280 }}>
                <Link href={`/katalog/${cat.slug}`} className="product-card">
                  <div style={{ height: '23rem', borderRadius: '1rem', overflow: 'hidden', position: 'relative' }}>
                    <img src={cat.image} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.6))', color: 'white' }}>
                      <h2 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.8rem', margin: 0 }}>{cat.name}</h2>
                      <span style={{ fontSize: '0.875rem', opacity: 0.8 }}>{cat.count} Produkte</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
