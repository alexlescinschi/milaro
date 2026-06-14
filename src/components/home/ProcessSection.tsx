'use client'

import { useState } from 'react'

const STAGES = [
  {
    num: '01',
    title: 'Anfrage',
    img: 'https://kuhnimilana.ru/media-temp/img/content/stages/stage-01.jpg',
    desc: 'Hinterlassen Sie eine Anfrage auf unserer Website — geben Sie die Küchengrösse, das Material und den gewünschten Stil an. Oder rufen Sie uns einfach an — wir beraten Sie gerne persönlich.',
  },
  {
    num: '02',
    title: 'Beratung',
    img: 'https://kuhnimilana.ru/media-temp/img/content/stages/stage-02.jpg',
    desc: 'Unser Manager kontaktiert Sie kostenlos, berechnet eine erste Preisindikation und vereinbart einen Termin für den Designerbesuch bei Ihnen vor Ort.',
  },
  {
    num: '03',
    title: 'Designerbesuch',
    img: 'https://kuhnimilana.ru/media-temp/img/content/stages/stage-03.jpg',
    desc: 'Ein Designervermesser kommt kostenlos zu Ihnen, um die genauen Masse aufzunehmen, alle Raumbesonderheiten zu berücksichtigen und den optimalen Designentwurf für Ihre Küche vorzuschlagen.',
  },
  {
    num: '04',
    title: 'Vertragsabschluss',
    img: 'https://kuhnimilana.ru/media-temp/img/content/stages/stage-04.jpg',
    desc: 'Nach der Abstimmung des Designentwurfs erstellen wir eine detaillierte Kalkulation und schliessen einen Vertrag für Herstellung und Montage unter Berücksichtigung Ihrer Wünsche ab.',
  },
  {
    num: '05',
    title: 'Anzahlung',
    img: 'https://kuhnimilana.ru/media-temp/img/content/stages/stage-05.jpg',
    desc: 'Sie leisten eine Anzahlung von 30 % — und wir starten sofort mit der individuellen Fertigung Ihrer Küche aus hochwertigen Materialien nach Ihrer Wahl.',
  },
  {
    num: '06',
    title: 'Produktion',
    img: 'https://kuhnimilana.ru/media-temp/img/content/stages/stage-06.jpg',
    desc: 'Ihre Küche wird in unserer eigenen Produktion gefertigt — mit modernsten Maschinen und erfahrenen Handwerkern, die höchste Qualität garantieren.',
  },
  {
    num: '07',
    title: 'Lieferung & Montage',
    img: 'https://kuhnimilana.ru/media-temp/img/content/stages/stage-07.jpg',
    desc: 'Lieferung in der gesamten Schweiz — kostenlos. Die Montage und Installation erfolgt durch erfahrene Fachkräfte — termingerecht und sauber.',
  },
]

export default function ProcessSection() {
  const [active, setActive] = useState(0)
  const s = STAGES[active]

  return (
    <section style={{ padding: '5rem 0', background: 'white' }}>
      <div className="uk-container">
        <div className="process-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

          {/* Left — title + image */}
          <div>
            <p style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--primary-color)', marginBottom: '0.6rem' }}>
              So funktioniert's
            </p>
            <h2 style={{ fontFamily: 'var(--sb-reg)', fontSize: 'clamp(1.5rem, 2.2vw, 2rem)', lineHeight: 1.2, marginBottom: '2rem' }}>
              Bestellprozess bei milaro.ch
            </h2>

            {/* Image */}
            <div style={{ borderRadius: '0.85rem', overflow: 'hidden', position: 'relative', marginBottom: '1.25rem' }}>
              <img
                key={active}
                src={s.img}
                alt={s.title}
                style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                padding: '1.5rem 1.25rem 1.1rem',
              }}>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Schritt {s.num}
                </span>
                <div style={{ fontFamily: 'var(--sb-reg)', color: 'white', fontSize: '1.1rem', fontWeight: 700, marginTop: '0.2rem' }}>
                  {s.title}
                </div>
              </div>
            </div>

            {/* Description */}
            <p style={{ fontSize: '0.9rem', color: 'var(--muted-color)', lineHeight: 1.8, margin: 0 }}>
              {s.desc}
            </p>

            {/* Prev / Next */}
            <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1.5rem' }}>
              <button
                onClick={() => setActive(i => Math.max(0, i - 1))}
                disabled={active === 0}
                style={{
                  width: 40, height: 40, borderRadius: '50%',
                  border: '1.5px solid var(--border-color)',
                  background: 'none', cursor: active === 0 ? 'default' : 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  opacity: active === 0 ? 0.35 : 1, transition: 'opacity 0.2s',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 5l-7 7 7 7"/>
                </svg>
              </button>
              <button
                onClick={() => setActive(i => Math.min(STAGES.length - 1, i + 1))}
                disabled={active === STAGES.length - 1}
                style={{
                  width: 40, height: 40, borderRadius: '50%',
                  border: '1.5px solid var(--border-color)',
                  background: 'none', cursor: active === STAGES.length - 1 ? 'default' : 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  opacity: active === STAGES.length - 1 ? 0.35 : 1, transition: 'opacity 0.2s',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Right — step list */}
          <div>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
              {STAGES.map((st, i) => {
                const isActive = active === i
                return (
                  <li
                    key={st.num}
                    onClick={() => setActive(i)}
                    style={{
                      padding: '1rem 1.25rem',
                      borderRadius: '0.65rem',
                      cursor: 'pointer',
                      background: isActive ? 'var(--light-color)' : 'transparent',
                      borderLeft: isActive ? '3px solid var(--primary-color)' : '3px solid transparent',
                      transition: 'background 0.2s, border-color 0.2s',
                      display: 'flex', alignItems: 'center', gap: '1rem',
                    }}
                  >
                    <span style={{
                      flexShrink: 0,
                      width: 36, height: 36, borderRadius: '50%',
                      background: isActive ? 'var(--primary-color)' : 'var(--border-color)',
                      color: isActive ? 'white' : 'var(--muted-color)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.75rem', fontWeight: 700,
                      transition: 'background 0.2s, color 0.2s',
                    }}>
                      {st.num}
                    </span>
                    <span style={{
                      fontFamily: 'var(--sb-reg)', fontSize: '1rem', fontWeight: isActive ? 700 : 500,
                      color: isActive ? 'var(--main-color)' : 'var(--muted-color)',
                      transition: 'color 0.2s, font-weight 0.1s',
                    }}>
                      {st.title}
                    </span>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .process-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
