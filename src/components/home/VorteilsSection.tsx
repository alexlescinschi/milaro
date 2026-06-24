'use client'

import { useRef, useEffect } from 'react'

const ADVANTAGES = [
  {
    title: 'Eigene Produktion',
    text: 'Fabrik mit 92 000 m² und vollständigem Produktionszyklus. Modernste Maschinen und sorgfältige Handarbeit für feinste Details.',
  },
  {
    title: 'Projekte jeder Komplexität',
    text: 'Kompakte Raumwunder oder innovative Raumtransformation? Ihre Küche wird genauso, wie Sie es sich vorstellen — denn Innenarchitektur ist Kunst.',
  },
  {
    title: 'Möbel für das ganze Haus',
    text: 'Küche, Technik, Schränke, Accessoires — wir richten Ihr gesamtes Zuhause ein, mit Vorteil beim Komplexkauf.',
  },
  {
    title: 'Garantie bis 20 Jahre',
    text: 'Hochwertige Materialien und Komponenten für langanhaltende Freude an Ihren Möbeln.',
  },
  {
    title: 'Persönlicher Service',
    text: 'Individuelle Beratung und Betreuung — in der gesamten Schweiz.',
  },
]

export default function VorteilsSection() {
  const imgWrapRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const imgEl = imgWrapRef.current
    const listEl = listRef.current
    if (!imgEl || !listEl) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === imgEl) {
            entry.isIntersecting
              ? imgEl.classList.add('vorteil-img-in')
              : imgEl.classList.remove('vorteil-img-in')
          }
          if (entry.target === listEl) {
            const items = listEl.querySelectorAll<HTMLLIElement>('li')
            items.forEach((item) => {
              entry.isIntersecting
                ? item.classList.add('vorteil-item-in')
                : item.classList.remove('vorteil-item-in')
            })
          }
        })
      },
      { threshold: 0.12 }
    )

    observer.observe(imgEl)
    observer.observe(listEl)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        .vorteil-img {
          opacity: 0;
          transition: opacity 0.7s ease;
        }
        .vorteil-img.vorteil-img-in { opacity: 1; }

        .vorteil-item {
          opacity: 0;
          transform: translateX(-18px);
          transition: opacity 0.45s ease, transform 0.45s ease;
        }
        .vorteil-item.vorteil-item-in { opacity: 1; transform: translateX(0); }
        li:nth-child(1).vorteil-item { transition-delay: 200ms; }
        li:nth-child(2).vorteil-item { transition-delay: 330ms; }
        li:nth-child(3).vorteil-item { transition-delay: 460ms; }
        li:nth-child(4).vorteil-item { transition-delay: 590ms; }
        li:nth-child(5).vorteil-item { transition-delay: 720ms; }

        @media (max-width: 768px) {
          .vorteil-grid { grid-template-columns: 1fr !important; }
          .vorteil-left { min-height: 48vw !important; }
          .vorteil-right { padding: 2.5rem 1.5rem !important; }
          .vorteil-img-wrap { width: 90% !important; height: 42vw !important; border-radius: 0 1rem 1rem 0 !important; }
          .vorteil-right-inner { position: static !important; transform: none !important; max-width: 100% !important; }
        }
      `}</style>

      <section style={{ position: 'relative', overflow: 'hidden', background: '#f7f6f4' }}>

        {/* Background video — subtle behind the light overlay */}
        <video
          src="/videos/hero/closet6.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            opacity: 0.18,
          }}
        />

        {/* Heading */}
        <div style={{ position: 'relative', zIndex: 1, paddingTop: '4rem', paddingBottom: '2rem' }}>
          <div className="uk-container">
            <div style={{
              fontFamily: 'var(--sb-reg)',
              fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              borderBottom: '1px solid var(--border-color)',
              paddingBottom: '0.6rem',
              marginBottom: '0.5rem',
              display: 'inline-block',
            }}>
              Vorteile
            </div>
            <div style={{ color: 'var(--muted-color)', fontSize: '0.95rem' }}>
              Warum wählen unsere Kunden milaro.ch?
            </div>
          </div>
        </div>

        {/* 2-column grid */}
        <div
          className="vorteil-grid"
          style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr' }}
        >
          {/* Left — image */}
          <div
            className="vorteil-left"
            style={{ position: 'relative', minHeight: '65vh' }}
          >
            <div
              ref={imgWrapRef}
              className="vorteil-img vorteil-img-wrap"
              style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                transform: 'translateY(-50%)',
                width: '83.33%',
                height: '55vh',
                borderRadius: '0 1.25rem 1.25rem 0',
                overflow: 'hidden',
                boxShadow: '0 25px 70px rgba(0,0,0,0.2)',
              }}
            >
              <img
                src="/images/promo/nav/vantages.jpg"
                alt="milaro Vorteile"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>

          {/* Right — list */}
          <div
            className="vorteil-right"
            style={{ position: 'relative', minHeight: '65vh', display: 'flex', alignItems: 'center' }}
          >
            <div
              className="vorteil-right-inner"
              style={{ maxWidth: 520, paddingRight: '2rem' }}
            >
              <ul ref={listRef} style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {ADVANTAGES.map((a, i) => (
                  <li
                    key={a.title}
                    className="vorteil-item"
                    style={{
                      padding: '1.25rem 0',
                      borderBottom: i < ADVANTAGES.length - 1
                        ? '1px solid var(--border-color)'
                        : 'none',
                    }}
                  >
                    <div style={{
                      fontFamily: 'var(--sb-reg)',
                      fontSize: 'clamp(1.3rem, 2vw, 1.75rem)',
                      fontWeight: 700,
                      lineHeight: 1.15,
                      marginBottom: '0.35rem',
                    }}>
                      {a.title}
                    </div>
                    <p style={{
                      fontSize: '0.85rem',
                      color: 'var(--muted-color)',
                      lineHeight: 1.7,
                      margin: 0,
                    }}>
                      {a.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 1, height: '3rem' }} />
      </section>
    </>
  )
}
