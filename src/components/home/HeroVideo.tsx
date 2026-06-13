'use client'

import Link from 'next/link'

const CATS = [
  { name: 'Küchen', slug: 'kuechen', img: 'https://www.marya.ru/promo/home3/img/nav/kitchens1.jpg' },
  { name: 'Schränke', slug: 'schraenke', img: 'https://www.marya.ru/promo/home3/img/nav/closets3.jpg' },
  { name: 'Bäder', slug: 'baeder', img: 'https://www.marya.ru/promo/home3/img/nav/baths1.jpg' },
  { name: 'Sofas', slug: 'sofas-betten', img: 'https://www.marya.ru/promo/home3/img/nav/sofas1.jpg' },
  { name: 'Betten', slug: 'sofas-betten', img: 'https://www.marya.ru/promo/home3/img/nav/beds1.jpg' },
]

export default function HeroVideo() {
  return (
    <section className="hero-section">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        poster="https://www.marya.ru/promo/home3/img/nav/vantages.jpg"
      >
        <source src="https://www.marya.ru/upload/2026/closet6.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />

      <div className="hero-content uk-container">
        <h1 className="hero-headline">MILARO TEST 2026 — Sie sind zu Hause</h1>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
          {CATS.map((cat) => (
            <Link
              key={cat.name}
              href={`/katalog/${cat.slug}`}
              className="liquidGlass-wrapper glass-panel"
              style={{
                width: 150,
                height: 170,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                textDecoration: 'none',
                color: 'white',
                background: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '1rem',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <img
                src={cat.img}
                alt={cat.name}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.6,
                }}
              />
              <span style={{
                fontFamily: 'var(--sb-reg)',
                fontSize: '1.1rem',
                position: 'relative',
                zIndex: 1,
                textShadow: '0 1px 8px rgba(0,0,0,0.5)',
                marginBottom: '1rem',
              }}>
                {cat.name}
              </span>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: '2rem' }}>
          <Link href="#" className="uk-button uk-button-inversed" style={{ fontSize: '1rem', padding: '0.5rem 2rem' }}>
            Kostenlose Beratung &amp; Projektberechnung
          </Link>
        </div>

        <div className="scroll-indicator" style={{ marginTop: '3rem' }}>
          <span style={{ color: 'white', fontSize: '0.8rem', display: 'block', marginBottom: '0.3rem', opacity: 0.8 }}>Nach unten scrollen</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        </div>
      </div>
    </section>
  )
}
