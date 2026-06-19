'use client'

import { useRef } from 'react'

const SLIDER_IMGS = [
  { src: '/images/production/3.jpg',   alt: 'Produktion 1' },
  { src: '/images/production/3-1.jpg', alt: 'Produktion 2' },
  { src: '/images/production/3-4.jpg', alt: 'Produktion 3' },
  { src: '/images/production/1.jpg',   alt: 'Produktion 4' },
  { src: '/images/production/2-3.jpg', alt: 'Produktion 5' },
  { src: '/images/production/1.jpg',   alt: 'Produktion 6' },
]

export default function ProductionSlider() {
  const ref = useRef<HTMLDivElement>(null)
  const slide = (dir: -1 | 1) => ref.current?.scrollBy({ left: dir * 340, behavior: 'smooth' })

  return (
    <section style={{ marginBottom: '5rem' }}>
      <div className="uk-container">
        <p style={{ fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--primary-color)', marginBottom: '0.6rem' }}>
          Wie Milaro-Möbel entstehen
        </p>
        <h2 style={{ fontFamily: 'var(--sb-reg)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', margin: '0 0 2rem' }}>
          Produktion in höchster Qualität
        </h2>
        <div style={{ position: 'relative' }}>
          <div
            ref={ref}
            style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
          >
            {SLIDER_IMGS.map((img, i) => (
              <div key={i} style={{ flexShrink: 0, width: 320, height: 400, borderRadius: '0.75rem', overflow: 'hidden', scrollSnapAlign: 'start' }}>
                <img src={img.src} alt={img.alt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>
          <button onClick={() => slide(-1)} aria-label="Zurück" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', width: 60, height: 60, borderRadius: '50%', background: 'rgba(15,15,15,0.48)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button onClick={() => slide(1)} aria-label="Weiter" style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', width: 60, height: 60, borderRadius: '50%', background: 'rgba(15,15,15,0.48)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
