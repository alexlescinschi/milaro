'use client'

import { useState } from 'react'
import LeadForm from '@/components/forms/LeadForm'

const MATERIALS = [
  {
    name: 'PVC-Folie',
    img: '/images/products/07pxOyAzMM8LAKQhj_P1p1s.jpg',
    prodTime: 'ab 5 Arb.tagen',
    milling: true,
    specs: [
      { label: 'Formvielfalt',   score: 4 },
      { label: 'Farbpalette',    score: 4 },
      { label: 'Verschleissfest', score: 4 },
      { label: 'Pflegeleicht',   score: 5 },
      { label: 'Stossfest',       score: 4 },
      { label: 'Ökofreundlich',  score: 4 },
    ],
  },
  {
    name: 'Kunststoff',
    img: '/images/products/0llAOoEtlEpe8Elrr_rsYgM.jpg',
    prodTime: 'ab 10 Arb.tagen',
    milling: false,
    specs: [
      { label: 'Formvielfalt',   score: 3 },
      { label: 'Farbpalette',    score: 4 },
      { label: 'Verschleissfest', score: 5 },
      { label: 'Pflegeleicht',   score: 5 },
      { label: 'Stossfest',       score: 5 },
      { label: 'Ökofreundlich',  score: 4 },
    ],
  },
  {
    name: 'Email-Lack',
    img: '/images/products/0JcvEiFCi7vyZARhF_PaPtm.jpg',
    prodTime: 'ab 20 Arb.tagen',
    milling: true,
    specs: [
      { label: 'Formvielfalt',   score: 5 },
      { label: 'Farbpalette',    score: 5 },
      { label: 'Verschleissfest', score: 4 },
      { label: 'Pflegeleicht',   score: 4 },
      { label: 'Stossfest',       score: 3 },
      { label: 'Ökofreundlich',  score: 4 },
    ],
  },
  {
    name: 'Alvic Luxe',
    img: '/images/products/0bDfPpqCEXjOAK4Nn_SWQS5.jpg',
    prodTime: 'ab 10 Arb.tagen',
    milling: false,
    specs: [
      { label: 'Formvielfalt',   score: 3 },
      { label: 'Farbpalette',    score: 3 },
      { label: 'Verschleissfest', score: 5 },
      { label: 'Pflegeleicht',   score: 4 },
      { label: 'Stossfest',       score: 5 },
      { label: 'Ökofreundlich',  score: 4 },
    ],
  },
  {
    name: 'Furnier',
    img: '/images/products/0awmMgMfEdx7o84WK_IodU7.jpg',
    prodTime: 'ab 10 Arb.tagen',
    milling: false,
    specs: [
      { label: 'Formvielfalt',   score: 3 },
      { label: 'Farbpalette',    score: 3 },
      { label: 'Verschleissfest', score: 5 },
      { label: 'Pflegeleicht',   score: 5 },
      { label: 'Stossfest',       score: 4 },
      { label: 'Ökofreundlich',  score: 4 },
    ],
  },
  {
    name: 'Massivholz',
    img: '/images/products/06YARKy5YnzINeBQy_BURUE.jpg',
    prodTime: 'ab 20 Arb.tagen',
    milling: true,
    specs: [
      { label: 'Formvielfalt',   score: 4 },
      { label: 'Farbpalette',    score: 5 },
      { label: 'Verschleissfest', score: 4 },
      { label: 'Pflegeleicht',   score: 4 },
      { label: 'Stossfest',       score: 4 },
      { label: 'Ökofreundlich',  score: 5 },
    ],
  },
]

function ScaleBar({ score }: { score: number }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          style={{
            width: 16, height: 4, borderRadius: 2,
            background: i < score ? 'var(--primary-color)' : '#e0e0e0',
            display: 'block',
          }}
        />
      ))}
    </div>
  )
}

export default function MaterialsSection() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedMaterial, setSelectedMaterial] = useState('')
  const [hovered, setHovered] = useState<string | null>(null)

  const open = (name: string) => {
    setSelectedMaterial(name)
    setModalOpen(true)
  }

  return (
    <>
      <section style={{ padding: '5rem 0' }}>
        <div className="uk-container">
          {/* Heading */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: 'var(--sb-reg)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', marginBottom: '0.75rem' }}>
              Fronten-Materialien und ihre Eigenschaften
            </h2>
            <p style={{ color: 'var(--muted-color)', maxWidth: 680, lineHeight: 1.75, fontSize: '0.95rem' }}>
              Bei der Wahl einer Küche stellen sich viele die Frage — welche Fronten soll ich nehmen? Sie unterscheiden sich nicht nur im Preis und Aussehen, sondern auch in der Farbpalette, den Designmöglichkeiten, der Lebensdauer und der Fertigungszeit. Küchen mit Fronten nach Ihrer Wahl ermöglichen es, die Möbel Ihrer Träume zu gestalten.
            </p>
          </div>

          {/* Cards row — horizontal scroll */}
          <div style={{ overflowX: 'auto', scrollbarWidth: 'none', marginRight: '-15px', paddingRight: '15px' }}>
            <div style={{ display: 'flex', gap: '1rem', width: 'max-content' }}>
              {MATERIALS.map((mat) => {
                const isHov = hovered === mat.name
                return (
                <div
                  key={mat.name}
                  onMouseEnter={() => setHovered(mat.name)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    width: 220, flexShrink: 0,
                    border: `1.5px solid ${isHov ? 'var(--primary-color)' : 'var(--border-color)'}`,
                    borderRadius: '0.75rem', overflow: 'hidden',
                    background: 'white', display: 'flex', flexDirection: 'column',
                    transform: isHov ? 'translateY(-6px)' : 'translateY(0)',
                    boxShadow: isHov ? '0 16px 40px rgba(227,30,36,0.13)' : '0 2px 8px rgba(0,0,0,0.04)',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.2s ease',
                    cursor: 'pointer',
                  }}
                >
                  {/* Image */}
                  <div style={{ height: 140, overflow: 'hidden', flexShrink: 0 }}>
                    <img
                      src={mat.img}
                      alt={mat.name}
                      loading="lazy"
                      style={{
                        width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                        transform: isHov ? 'scale(1.06)' : 'scale(1)',
                        transition: 'transform 0.35s ease',
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div style={{ padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div style={{ fontFamily: 'var(--sb-reg)', fontSize: '1rem', fontWeight: 700 }}>{mat.name}</div>

                    {/* Fertigungszeit + Fräsung */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.72rem', color: 'var(--muted-color)' }}>Fertigungszeit</span>
                        <span style={{ fontSize: '0.78rem', fontWeight: 600 }}>{mat.prodTime}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.72rem', color: 'var(--muted-color)' }}>Fräsung</span>
                        {mat.milling ? (
                          <span style={{ width: 20, height: 20, borderRadius: '50%', background: '#e8f5e9', color: '#388e3c', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700 }}>✓</span>
                        ) : (
                          <span style={{ width: 20, height: 20, borderRadius: '50%', background: '#fafafa', color: '#bdbdbd', border: '1px solid #e0e0e0', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem' }}>—</span>
                        )}
                      </div>
                    </div>

                    {/* Scale specs */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', borderTop: '1px solid var(--border-color)', paddingTop: '0.65rem' }}>
                      {mat.specs.map(s => (
                        <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ fontSize: '0.7rem', color: 'var(--muted-color)', whiteSpace: 'nowrap' }}>{s.label}</span>
                          <ScaleBar score={s.score} />
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <button
                      onClick={() => open(mat.name)}
                      style={{
                        marginTop: 'auto', width: '100%', padding: '0.6rem',
                        background: 'var(--primary-color)', color: 'white',
                        border: 'none', borderRadius: '0.45rem',
                        fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer',
                        letterSpacing: '0.03em', textTransform: 'uppercase',
                        transition: 'opacity 0.2s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                    >
                      Auswählen
                    </button>
                  </div>
                </div>
              )})}
            </div>
          </div>
        </div>
      </section>

      {/* Modal — same as "Projekt bestellen" in header */}
      {modalOpen && (
        <div
          className="uk-modal open"
          onClick={() => setModalOpen(false)}
          style={{ zIndex: 1000 }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: 'white', borderRadius: '1.2rem',
              width: '90%', maxWidth: 780,
              position: 'relative', maxHeight: '92vh',
              overflowY: 'auto', display: 'flex', flexDirection: 'column',
            }}
          >
            <button
              onClick={() => setModalOpen(false)}
              style={{
                position: 'absolute', top: '1.2rem', right: '1.2rem',
                background: 'rgba(255,255,255,0.9)', border: 'none', cursor: 'pointer',
                width: 36, height: 36, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>

            {/* Banner */}
            <div style={{ position: 'relative', height: 200, borderRadius: '1.2rem 1.2rem 0 0', overflow: 'hidden', flexShrink: 0 }}>
              <img
                src="/images/promo/models/mix22.jpg"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 100%)' }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem 2.5rem' }}>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  {selectedMaterial} — Kostenlos & unverbindlich
                </p>
                <h2 style={{ fontFamily: 'var(--sb-reg)', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: 'white', fontWeight: 600, lineHeight: 1.2, margin: 0 }}>
                  Erhalten Sie Ihren<br />kostenlosen Design-Entwurf
                </h2>
              </div>
            </div>

            {/* Form */}
            <div style={{ padding: '2.2rem 2.5rem' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted-color)', marginBottom: '1.8rem', lineHeight: 1.6 }}>
                Füllen Sie das Formular aus und erhalten Sie ein individuelles Möbelprojekt mit <strong>{selectedMaterial}</strong>-Fronten von Ihrem persönlichen Designer — kostenlos und unverbindlich.
              </p>
              <LeadForm onClose={() => setModalOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
