import Breadcrumbs from '@/components/layout/Breadcrumbs'
import PortfolioCard from '@/components/portfolio/PortfolioCard'
import { PROJECTS } from '@/lib/portfolio'

export default function PortfolioPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Portfolio' }]} />
      <section className="uk-section" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="uk-container">
          <div className="page-header-row" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: '2rem' }}>
            <div className="page-header-col" style={{ flex: '0 0 25%' }}>
              <h1 className="section-heading" style={{ marginBottom: '0.5rem', textAlign: 'left' }}>Portfolio – Massgeschneiderte Wohnträume</h1>
              <p style={{ color: 'var(--muted-color)', fontSize: '1rem', margin: 0 }}>Unsere Projekte: Inspiration für Ihr Zuhause</p>
            </div>
            <div className="page-header-col" style={{ flex: '0 0 75%' }}>
              <p style={{ color: 'var(--muted-color)', fontSize: '1rem', margin: 0, lineHeight: 1.7 }}>
                Willkommen in unserer Galerie der Inspiration. Jedes Möbelstück, das unsere Manufaktur verlässt, ist ein Unikat – perfekt abgestimmt auf die Wünsche unserer Kundinnen und Kunden, die Architektur des Raumes und höchste Qualitätsansprüche.
              </p>
            </div>
          </div>

          <div className="portfolio-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {PROJECTS.map((p) => (
              <PortfolioCard
                key={p.slug}
                slug={p.slug}
                title={p.title}
                likes={p.likes}
                images={p.images}
              />
            ))}
          </div>
          <style>{`
            @media (max-width: 900px) { .portfolio-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 1.25rem !important; } }
            @media (max-width: 580px) { .portfolio-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 1rem !important; } }
          `}</style>
        </div>
      </section>
    </>
  )
}
