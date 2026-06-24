'use client'

import Link from 'next/link'

const HERO_LINKS = [
  { name: 'Küchen', href: '/katalog?cat=kuechen' },
  { name: 'Schränke', href: '/katalog?cat=schraenke' },
  { name: 'Bäder', href: '/katalog?cat=baeder' },
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
        poster="/images/promo/nav/vantages.jpg"
      >
        <source src="/videos/hero/closet6.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />

      <div className="hero-content uk-container">
        <h1 className="hero-headline">MILARO  — Sie sind zu Hause</h1>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
          {HERO_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              style={{
                padding: '0.5rem 1.5rem',
                border: '1.5px solid rgba(255,255,255,0.5)',
                borderRadius: '2rem',
                color: 'white',
                fontSize: '0.9rem',
                fontWeight: 600,
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                transition: 'background 0.2s, border-color 0.2s',
                backdropFilter: 'blur(4px)',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.15)'; (e.currentTarget as HTMLElement).style.borderColor = 'white' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.5)' }}
            >
              {link.name}
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
