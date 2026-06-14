import Link from 'next/link'
import { PROJECTS } from '@/lib/portfolio'
import HoverSlider from '@/components/ui/HoverSlider'

export default function PortfolioPreview() {
  const preview = PROJECTS.slice(0, 6)

  return (
    <section className="uk-section">
      <div className="uk-container">
        <h2 className="section-heading">Portfolio</h2>
        <p style={{ textAlign: 'center', color: 'var(--muted-color)', marginBottom: '2.5rem' }}>
          Realisierte Projekte in der Schweiz
        </p>
        <div className="portfolio-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
          {preview.map((p) => (
            <Link
              key={p.slug}
              href={`/portfolio/${p.slug}`}
              className="cat-card"
            >
              <div className="cat-card-wrap" style={{ position: 'relative', overflow: 'hidden' }}>
                {p.images.length > 1 ? (
                  <HoverSlider images={p.images} name={p.title} />
                ) : (
                  <img src={p.images[0]} alt={p.title} className="cat-card-img" loading="lazy" />
                )}
                <span className="cat-card-badge">Portfolio</span>
                <div className="cat-card-overlay" />
              </div>
              <div className="cat-card-title">{p.title}</div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link
            href="/portfolio"
            style={{
              display: 'inline-block',
              padding: '0.7rem 2rem',
              border: '1.5px solid var(--primary-color)',
              borderRadius: '0.45rem',
              color: 'var(--primary-color)',
              textDecoration: 'none',
              fontSize: '0.88rem', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.05em',
            }}
          >
            Alle Projekte ansehen
          </Link>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .portfolio-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 580px) { .portfolio-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}