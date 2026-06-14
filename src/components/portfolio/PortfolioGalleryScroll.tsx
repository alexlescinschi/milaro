'use client'

import Link from 'next/link'
import { PROJECTS } from '@/lib/portfolio'

export default function PortfolioGallery() {
  const images = PROJECTS.map(p => p.images[0])

  return (
    <section style={{ background: '#0f0f0f', padding: '4rem 0', overflow: 'hidden' }}>
      <div className="uk-container" style={{ marginBottom: '2.5rem' }}>
        <p style={{
          fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase',
          color: 'var(--primary-color)', marginBottom: '0.6rem',
        }}>
          Unsere Arbeiten
        </p>
        <h2 style={{
          fontFamily: 'var(--sb-reg)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
          color: 'white', margin: '0 0 0.5rem',
        }}>
          Über 5&apos;000 realisierte Projekte in 9 Jahren
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', margin: 0 }}>
          Sehen Sie sich unsere Galerie an
        </p>
      </div>

      <div className="pg-scroll" style={{ position: 'relative' }}>
        {/* Row 1 — scrolls left */}
        <div className="pg-scroll-row pg-scroll-left">
          <div className="pg-scroll-track">
            {[...images, ...images, ...images].map((src, i) => (
              <div key={i} className="pg-scroll-img" style={{
                flexShrink: 0, width: 200, height: 150, borderRadius: '0.5rem',
                overflow: 'hidden', marginRight: '0.5rem',
              }}>
                <img src={src} alt="" loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="pg-scroll-row pg-scroll-right" style={{ marginTop: '0.5rem' }}>
          <div className="pg-scroll-track">
            {[...images, ...images, ...images].map((src, i) => (
              <div key={i} className="pg-scroll-img" style={{
                flexShrink: 0, width: 200, height: 150, borderRadius: '0.5rem',
                overflow: 'hidden', marginRight: '0.5rem',
              }}>
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="uk-container" style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Link
          href="/portfolio"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            color: 'white', fontSize: '1rem', fontWeight: 600,
            textDecoration: 'none', transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary-color)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'white')}
        >
          <span>Alle Projekte ansehen</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>

      <style>{`
        .pg-scroll { width: 100%; }
        .pg-scroll-row { overflow: hidden; }
        .pg-scroll-track { display: flex; width: max-content; }
        .pg-scroll-left .pg-scroll-track { animation: pg-scroll-left 40s linear infinite; }
        .pg-scroll-right .pg-scroll-track { animation: pg-scroll-right 40s linear infinite; }
        .pg-scroll-row:hover .pg-scroll-track { animation-play-state: paused; }
        @keyframes pg-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes pg-scroll-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}