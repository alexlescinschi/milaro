import Breadcrumbs from '@/components/layout/Breadcrumbs'
import ProductOrderForm from '@/components/catalog/ProductOrderForm'
import PortfolioGallery from '@/components/portfolio/PortfolioGallery'
import HoverSlider from '@/components/ui/HoverSlider'
import Link from 'next/link'
import { PROJECTS, PROJECTS_MAP } from '@/lib/portfolio'

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = PROJECTS_MAP[slug]

  if (!p) {
    return (
      <>
        <Breadcrumbs items={[{ label: 'Portfolio', href: '/portfolio' }, { label: 'Projekt' }]} />
        <section className="uk-section">
          <div className="uk-container">
            <h1>Projekt nicht gefunden</h1>
            <Link href="/portfolio" style={{ color: 'var(--primary-color)' }}>← Zurück zum Portfolio</Link>
          </div>
        </section>
      </>
    )
  }

  const similar = PROJECTS.filter((x) => x.slug !== slug).slice(0, 8)

  return (
    <>
      <style>{`
        .gallery-cell { border-radius: 0.75rem; overflow: hidden; }
        .gallery-cell img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.45s ease; }
        .gallery-cell:hover img { transform: scale(1.04); }
        .spec-row:nth-child(even) { background: var(--light-color); }
        .similar-card { text-decoration: none; color: inherit; display: block; }
        .similar-card-img-wrap { border-radius: 0.75rem; overflow: hidden; height: 13rem; margin-bottom: 0.6rem; }
        .similar-card-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s ease; }
        .similar-card:hover .similar-card-img-wrap img { transform: scale(1.04); }
      `}</style>

      <Breadcrumbs items={[{ label: 'Portfolio', href: '/portfolio' }, { label: p.title }]} />

      {/* ── Title ── */}
      <section style={{ padding: '2.5rem 0 1rem' }}>
        <div className="uk-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <h1 style={{ fontFamily: 'var(--sb-reg)', fontSize: 'clamp(1.4rem, 2.4vw, 2rem)', lineHeight: 1.25, margin: 0, flex: 1 }}>
              {p.title}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--muted-color)', fontSize: '0.9rem', flexShrink: 0 }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {p.likes}
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section style={{ paddingBottom: '3rem', overflow: 'hidden' }}>
        <PortfolioGallery images={p.images} title={p.title} />
      </section>

      {/* ── Description ── */}
      {p.description && (
        <section style={{ padding: '3rem 0', background: 'var(--light-color)' }}>
          <div className="uk-container" style={{ maxWidth: 820 }}>
            <h2 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.4rem', marginBottom: '1.5rem' }}>
              Projektbeschreibung
            </h2>
            {p.description.split('\n\n').map((para, i) => (
              <p key={i} style={{ color: 'var(--muted-color)', lineHeight: 1.9, fontSize: '0.95rem', marginBottom: '1rem' }}>
                {para}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* ── Characteristics ── */}
      {p.specs && p.specs.length > 0 && (
        <section style={{ padding: '3rem 0' }}>
          <div className="uk-container" style={{ maxWidth: 820 }}>
            <h2 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.4rem', marginBottom: '1.5rem' }}>
              Eigenschaften
            </h2>
            <div style={{ border: '1px solid var(--border-color)', borderRadius: '0.75rem', overflow: 'hidden' }}>
              {p.specs.map((s, i) => (
                <div
                  key={i}
                  className="spec-row"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    alignItems: 'center',
                    padding: '0.85rem 1.25rem',
                    borderBottom: i < p.specs!.length - 1 ? '1px solid var(--border-color)' : 'none',
                  }}
                >
                  <span style={{ color: 'var(--muted-color)', fontSize: '0.88rem' }}>{s.label}</span>

                  {/* Text value */}
                  {s.value && !s.swatches && (
                    <span style={{ fontSize: '0.88rem', fontWeight: 500 }}>{s.value}</span>
                  )}

                  {/* Swatch tiles */}
                  {s.swatches && (
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      {s.swatches.map((sw, j) => (
                        <div key={j} style={{ textAlign: 'center', width: 56 }}>
                          <div style={{
                            width: 56, height: 56,
                            borderRadius: '0.4rem',
                            overflow: 'hidden',
                            border: '1px solid var(--border-color)',
                            background: sw.color ?? '#e8e6e2',
                            backgroundImage: sw.img ? `url(${sw.img})` : undefined,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }} />
                          <div style={{
                            fontSize: '0.68rem',
                            color: 'var(--muted-color)',
                            marginTop: '0.3rem',
                            lineHeight: 1.2,
                            wordBreak: 'break-word',
                          }}>
                            {sw.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Similar projects ── */}
      {similar.length > 0 && (
        <section style={{ padding: '3rem 0', background: 'var(--light-color)' }}>
          <div className="uk-container">
            <h2 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.4rem', marginBottom: '2rem' }}>
              Ähnliche Projekte
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
              {similar.map((s) => (
                <Link key={s.slug} href={`/portfolio/${s.slug}`} className="similar-card">
                  <div className="similar-card-img-wrap" style={{ position: 'relative', overflow: 'hidden' }}>
                    {s.images.length > 1 ? (
                      <HoverSlider images={s.images} name={s.title} />
                    ) : (
                      <img src={s.images[0]} alt={s.title} />
                    )}
                  </div>
                  <div style={{ fontFamily: 'var(--sb-reg)', fontSize: '0.92rem', lineHeight: 1.35, marginBottom: '0.3rem' }}>
                    {s.title}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--muted-color)', fontSize: '0.78rem' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    {s.likes}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Contact form ── */}
      <ProductOrderForm productName={p.title} />
    </>
  )
}
