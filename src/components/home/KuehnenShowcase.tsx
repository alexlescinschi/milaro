'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import LeadForm from '@/components/forms/LeadForm'

const BASE_IMG = '/images/products/'
const BASE_VID = '/videos/products/'

const KUECHEN = [
  { name: 'Grafis',   slug: 'grafis',   tags: ['Modern', 'Schwarz'], materials: 'PVC · Kunststoff',               img: BASE_IMG + '07pxOyAzMM8LAKQhj_P1p1s.jpg', video: BASE_VID + 'Графис__93pct_smaller.mp4' },
  { name: 'Granby',   slug: 'granby',   tags: ['Modern', 'Grau'],    materials: 'PVC · Email',                    img: BASE_IMG + '0cZ3AVTlSyxPUwLgW_fAZRl.jpg', video: BASE_VID + '������������3__92pct_smaller.mp4' },
  { name: 'Budbin',   slug: 'budbin',   tags: ['Modern', 'Weiss'],    materials: 'PVC · Email',                    img: BASE_IMG + '0jifM8SdyZJQgxzHv_flxWI.jpg', video: BASE_VID + '������������__93pct_smaller.mp4' },
  { name: 'Kolaria',  slug: 'kolaria',  tags: ['Modern', 'Weiss'],    materials: 'PVC · Kunststoff · Email · Acryl', img: BASE_IMG + '0kesx1Y2Pt92wkDDx_04Vkl.jpg', video: BASE_VID + '��������������__92pct_smaller.mp4' },
  { name: 'Roshedu',  slug: 'roshedu',  tags: ['Modern', 'Grau'],    materials: 'PVC · Email',                    img: BASE_IMG + '097K8FXmtcZoVqJVy_lu4a1.jpg',  video: BASE_VID + '������������__84pct_smaller.mp4' },
  { name: 'Brix',     slug: 'brix',     tags: ['Modern', 'Weiss'],    materials: 'PVC · Kunststoff · Email · Acryl', img: BASE_IMG + '0q9jxltANXHL3RmIm_2b9zJ.jpg',  video: BASE_VID + '����������__92pct_smaller.mp4' },
  { name: 'Sadbury',  slug: 'sadbury',  tags: ['Modern', 'Grau'],    materials: 'PVC · Email',                    img: BASE_IMG + '05iefZ2FsYxLSnvb3_z5ytb.jpg',  video: BASE_VID + '��������������__90pct_smaller.mp4' },
  { name: 'Tavira',   slug: 'tavira',   tags: ['Modern'],            materials: 'PVC · Kunststoff · Furnier',     img: BASE_IMG + '04BaGWDW2glkI84IO_Yjrjl.jpg',  video: BASE_VID + '������������__90pct_smaller.mp4' },
  { name: 'Richmond', slug: 'richmond', tags: ['Modern', 'Weiss'],    materials: 'PVC · Email',                    img: BASE_IMG + '0LSLx8yb5i198HrrA_hY4iv.jpg',  video: BASE_VID + '��������������__91pct_smaller.mp4' },
]

export default function KuehnenShowcase() {
  const [hovered, setHovered] = useState<string | null>(null)
  const [modalName, setModalName] = useState<string | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const handleEnter = (name: string, i: number) => {
    setHovered(name)
    const v = videoRefs.current[i]
    if (v) { v.currentTime = 0; v.play() }
  }

  const handleLeave = (i: number) => {
    setHovered(null)
    const v = videoRefs.current[i]
    if (v) { v.pause(); v.currentTime = 0 }
  }

  const modalKitchen = KUECHEN.find(k => k.name === modalName)

  return (
    <>
      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div className="uk-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--primary-color)', marginBottom: '0.6rem' }}>
              Kollektion
            </p>
            <h2 style={{ fontFamily: 'var(--sb-reg)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', marginBottom: '0.75rem' }}>
              Unsere Küchen entdecken
            </h2>
            <p style={{ color: 'var(--muted-color)', maxWidth: 680, lineHeight: 1.75, fontSize: '0.95rem' }}>
              Moderne Küchen in verschiedenen Stilen und Materialien — fahren Sie mit der Maus über eine Küche, um sie in Bewegung zu erleben.
            </p>
          </div>

          <style>{`
            .kuechen-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
            @media (max-width: 900px) { .kuechen-grid { grid-template-columns: repeat(2, 1fr); } }
            @media (max-width: 580px) { .kuechen-grid { grid-template-columns: 1fr; } }
          `}</style>

          <div className="kuechen-grid">
            {KUECHEN.map((k, i) => {
              const isHov = hovered === k.name
              return (
                <div
                  key={k.name}
                  onMouseEnter={() => handleEnter(k.name, i)}
                  onMouseLeave={() => handleLeave(i)}
                  style={{
                    borderRadius: '0.85rem',
                    overflow: 'hidden',
                    background: '#f8f8f8',
                    boxShadow: isHov ? '0 20px 48px rgba(0,0,0,0.18)' : '0 2px 12px rgba(0,0,0,0.06)',
                    transform: isHov ? 'translateY(-4px)' : 'none',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  }}
                >
                  {/* Media */}
                  <div style={{ position: 'relative', height: 260, overflow: 'hidden', background: '#e8e8e8' }}>
                    <img
                      src={k.img}
                      alt={k.name}
                      loading="lazy"
                      style={{
                        position: 'absolute', inset: 0,
                        width: '100%', height: '100%', objectFit: 'cover',
                        opacity: isHov ? 0 : 1,
                        transition: 'opacity 0.35s ease',
                        zIndex: 1,
                      }}
                    />
                    <video
                      ref={el => { videoRefs.current[i] = el }}
                      src={k.video}
                      muted
                      loop
                      playsInline
                      preload="none"
                      style={{
                        position: 'absolute', inset: 0,
                        width: '100%', height: '100%', objectFit: 'cover',
                        opacity: isHov ? 1 : 0,
                        transition: 'opacity 0.35s ease',
                        zIndex: 2,
                      }}
                    />
                    {/* Bottom gradient */}
                    <div style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0, height: 80,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                      zIndex: 3,
                    }} />
                    {/* Style tags */}
                    <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', display: 'flex', gap: '0.35rem', zIndex: 4 }}>
                      {k.tags.map(tag => (
                        <span key={tag} style={{
                          background: 'rgba(255,255,255,0.92)',
                          fontSize: '0.65rem', fontWeight: 700,
                          textTransform: 'uppercase', letterSpacing: '0.08em',
                          padding: '0.25rem 0.55rem', borderRadius: '2rem',
                          color: 'var(--main-color)',
                        }}>{tag}</span>
                      ))}
                    </div>
                    {/* Anfragen button on hover */}
                    <button
                      onClick={() => setModalName(k.name)}
                      style={{
                        position: 'absolute', bottom: '0.9rem', right: '0.9rem',
                        zIndex: 5,
                        background: 'var(--primary-color)', color: 'white',
                        border: 'none', borderRadius: '0.4rem',
                        padding: '0.45rem 1rem', fontSize: '0.78rem',
                        fontWeight: 700, cursor: 'pointer',
                        textTransform: 'uppercase', letterSpacing: '0.04em',
                        opacity: isHov ? 1 : 0,
                        transform: isHov ? 'translateY(0)' : 'translateY(6px)',
                        transition: 'opacity 0.2s ease, transform 0.2s ease',
                        pointerEvents: isHov ? 'auto' : 'none',
                      }}
                    >
                      Anfragen
                    </button>
                  </div>

                  {/* Info row */}
                  <div style={{ padding: '0.9rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <Link
                        href={`/katalog/kuechen/${k.slug}`}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <div style={{ fontFamily: 'var(--sb-reg)', fontSize: '1rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                          Küche «{k.name}»
                        </div>
                      </Link>
                      <div style={{ fontSize: '0.75rem', color: 'var(--muted-color)' }}>{k.materials}</div>
                    </div>
                    <Link
                      href={`/katalog/kuechen/${k.slug}`}
                      style={{
                        flexShrink: 0, width: 32, height: 32, borderRadius: '50%',
                        border: '1.5px solid var(--border-color)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'var(--muted-color)', textDecoration: 'none',
                        transition: 'border-color 0.2s, color 0.2s',
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--primary-color)'; (e.currentTarget as HTMLElement).style.color = 'var(--primary-color)' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-color)'; (e.currentTarget as HTMLElement).style.color = 'var(--muted-color)' }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link
              href="/katalog?cat=kuechen"
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
              Alle Küchen ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalName && modalKitchen && (
        <div
          className="uk-modal open"
          onClick={() => setModalName(null)}
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
              onClick={() => setModalName(null)}
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
            <div style={{ position: 'relative', height: 200, borderRadius: '1.2rem 1.2rem 0 0', overflow: 'hidden', flexShrink: 0 }}>
              <img
                src={modalKitchen.img}
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.65), rgba(0,0,0,0.25))' }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem 2.5rem' }}>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  Küche «{modalName}» — Kostenlos & unverbindlich
                </p>
                <h2 style={{ fontFamily: 'var(--sb-reg)', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: 'white', fontWeight: 600, lineHeight: 1.2, margin: 0 }}>
                  Erhalten Sie Ihren<br />kostenlosen Design-Entwurf
                </h2>
              </div>
            </div>
            <div style={{ padding: '2.2rem 2.5rem' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted-color)', marginBottom: '1.8rem', lineHeight: 1.6 }}>
                Füllen Sie das Formular aus — wir kontaktieren Sie und erstellen ein individuelles Angebot für die Küche <strong>«{modalName}»</strong>.
              </p>
              <LeadForm onClose={() => setModalName(null)} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
