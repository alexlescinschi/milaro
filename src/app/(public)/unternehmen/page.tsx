'use client'

import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import ProductOrderForm from '@/components/catalog/ProductOrderForm'
import { PROJECTS } from '@/lib/portfolio'

/* ── data ─────────────────────────────────────────────────────────── */

const STATS = [
  { value: '2 500+', label: 'Aufträge seit 2015' },
  { value: '10+ Jahre', label: 'Erfahrung in der Branche' },
  { value: '4,8 von 5', label: 'Kundenbewertung' },
]

const ADVANTAGES = [
  { img: '/images/production/1.jpg', title: 'Garantie bis 20 Jahre',   text: 'Wir stehen hinter Qualität und Langlebigkeit unserer Möbel.',                                                               textFirst: false },
  { img: '/images/production/2.jpg', title: '2000 Frontenvarianten',   text: 'Bei milaro.ch finden Sie die richtigen Materialien, Texturen und Farben.',                                                 textFirst: false },
  { img: '/images/production/3.jpg', title: 'Europäische Beschläge',   text: 'Mechanismen öffnen und schliessen sanft und leise — garantiert für 80 000+ Zyklen.',                                       textFirst: false },
  { img: '/images/production/4.jpg', title: 'Komplettlösungen',        text: 'Möbel für das ganze Zuhause in einem Stil und aus einer Hand.',                                                            textFirst: true  },
  { img: '/images/production/5.jpg', title: 'Wir folgen den Trends',   text: 'Wir besuchen internationale Designmessen und bieten unseren Kunden die besten Ideen und Neuheiten.',                       textFirst: true  },
  { img: '/images/production/2-4.jpg', title: 'Voller Produktionszyklus', text: 'Von der Planung bis zur Lieferung und Montage — alles aus eigener Fabrik.',                                            textFirst: true  },
]

const SLIDER_IMGS = [
  { src: '/images/production/3.jpg',        alt: 'Produktion 1' },
  { src: '/images/production/3-1.jpg', alt: 'Produktion 2' },
  { src: '/images/production/3-4.jpg', alt: 'Produktion 3' },
  { src: '/images/production/1.jpg',   alt: 'Produktion 4' },
  { src: '/images/production/2-3.jpg', alt: 'Produktion 5' },
  { src: '/images/production/1.jpg',        alt: 'Produktion 6' },
]

const REVIEWS = [
  { name: 'Maria K.',   city: 'Zürich', rating: 5, text: 'Von der Beratung bis zur Montage war alles perfekt. Der Designer hat unseren Grundriss ideal genutzt — die Qualität übertrifft jede Erwartung.', product: 'Küche Jazz Allure' },
  { name: 'Thomas B.', city: 'Basel',  rating: 5, text: 'Einbauschrank fürs Schlafzimmer in 4 Wochen. Absolut professionell, keine versteckten Kosten, und das Ergebnis sieht aus wie aus einem Designmagazin.', product: 'Schrank Vector' },
  { name: 'Sandra W.', city: 'Bern',   rating: 5, text: 'Für einen fairen Preis echte Qualität: Blum-Beschläge, perfekte Verarbeitung, und der Service vor Ort war sehr kompetent und pünktlich.', product: 'Küche Integrato' },
  { name: 'Andreas M.',city: 'Luzern', rating: 5, text: 'Küche, Schlafzimmerschrank und Badmöbel — alles aus einer Hand, ein einheitliches Design, ein Ansprechpartner. Sehr zu empfehlen.', product: 'Komplettlösung' },
]

/* ── helpers ──────────────────────────────────────────────────────── */

function HeroSlider({ projects }: { projects: { images: string[]; title: string }[] }) {
  const [active, setActive] = useState(0)
  const items = projects.slice(0, 9)

  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % items.length), 4000)
    return () => clearInterval(id)
  }, [items.length])

  return (
    <section style={{ position: 'relative', height: '28rem', overflow: 'hidden', marginBottom: '5rem' }}>
      {items.map((p, i) => (
        <img
          key={i}
          src={p.images[0]}
          alt={p.title}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%', objectFit: 'cover',
            opacity: i === active ? 1 : 0,
            transition: 'opacity 1s ease',
          }}
        />
      ))}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 100%)',
        display: 'flex', alignItems: 'center',
      }}>
        <div className="uk-container">
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Über milaro.ch
          </p>
          <h1 style={{ fontFamily: 'var(--sb-reg)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'white', margin: 0, lineHeight: 1.15, maxWidth: 600 }}>
            Möbel nach Mass —<br />seit 2015 für Sie
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: '1rem', maxWidth: 480, lineHeight: 1.7 }}>
            milaro.ch bringt die Qualität der Fabrik Maria direkt in Schweizer Wohnungen — ohne Umwege, mit persönlicher Beratung.
          </p>
        </div>
      </div>
      {/* Dots */}
      <div style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.4rem' }}>
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: 10, height: 10, borderRadius: '50%', border: 'none', cursor: 'pointer', padding: 0,
              background: i === active ? 'white' : 'rgba(255,255,255,0.4)',
              transition: 'background 0.3s',
            }}
          />
        ))}
      </div>
    </section>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{
      fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.16em',
      fontWeight: 600, color: 'var(--main-color)',
      borderBottom: '1px solid var(--border-color)',
      paddingBottom: '1rem', margin: '0 0 2rem',
    }}>
      {children}
    </h3>
  )
}

/* ── page ─────────────────────────────────────────────────────────── */

export default function UnternehmenPage() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const slide = (dir: -1 | 1) => sliderRef.current?.scrollBy({ left: dir * 340, behavior: 'smooth' })

  return (
    <>
      <Breadcrumbs items={[{ label: 'Unternehmen' }]} />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <HeroSlider projects={PROJECTS} />

      {/* ── Leistungen (stats + video) ────────────────────────────── */}
      <section style={{ marginBottom: '5rem' }}>
        <div className="uk-container">
          <SectionHeading>Leistungen des Unternehmens</SectionHeading>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {STATS.map(s => (
                <div key={s.value} style={{ padding: '1.25rem 1.5rem', border: '1px solid var(--border-color)', borderRadius: '0.5rem', minWidth: 155 }}>
                  <div style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.25rem' }}>{s.value}</div>
                  <p style={{ color: 'var(--muted-color)', fontSize: '0.82rem', margin: 0 }}>{s.label}</p>
                </div>
              ))}
            </div>
            <div>
              <p style={{ margin: 0, lineHeight: 1.5 }}>
                <span style={{ color: 'var(--muted-color)', fontSize: '0.875rem' }}>Mehr erfahren</span><br />
                <Link href="/unternehmen" style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.35rem', color: 'var(--main-color)', textDecoration: 'none' }}>
                  Über unsere Leistungen
                </Link>
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '3rem', marginTop: '3rem', alignItems: 'stretch' }}>
            <div>
              <div style={{ columns: 2, columnGap: '2rem', color: 'var(--muted-color)', lineHeight: 1.8 }}>
                <p style={{ fontFamily: 'var(--sb-reg)', fontSize: '1rem', fontWeight: 700, color: 'var(--main-color)', breakInside: 'avoid', marginTop: 0 }}>
                  Unsere Mission — Möbel schaffen, die das Leben der Menschen komfortabler, gemütlicher und glücklicher machen.
                </p>
                <p>Seit über 10 Jahren planen, produzieren und liefern wir Möbel an zufriedene Kunden — über 2 500 erfolgreiche Projekte.</p>
                <p>Küchen, Schränke, Badmöbel und Wohnzimmermöbel werden nach individuellen Projekten gefertigt — abgestimmt auf den Lebensstil und die Wünsche jedes Kunden. Jedes Möbelstück ist ein Unikat.</p>
                <p>Wir setzen auf höchste Qualität: Europäische Beschläge, geprüfte Materialien und präzise Verarbeitung aus eigener Fabrik. Das Ergebnis sind Möbel, die ein Leben lang halten.</p>
                <p>Ob kleine Küche oder Premium-Ausbau mit Manufaktur-Komponenten — wir arbeiten mit jedem Budget. Vom Einstiegsmodell bis zur handgefertigten Designlösung finden Sie bei uns die passende Option.</p>
                <p>Bei milaro.ch erhalten Sie alles aus einer Hand: kostenlose Planung, 3D-Visualisierung, Produktion, Lieferung und professionelle Montage durch unser eigenes Team.</p>
              </div>
            </div>
            <div style={{ borderRadius: '0.75rem', overflow: 'hidden', minHeight: '20rem', position: 'relative', background: '#f0f0f0' }}>
              <video
                src="/videos/products/facades.mp4"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                autoPlay loop muted playsInline preload="metadata"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Vorteile ──────────────────────────────────────────────── */}
      <section style={{ marginBottom: '5rem' }}>
        <div className="uk-container">
          <SectionHeading>Vorteile des Unternehmens</SectionHeading>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {ADVANTAGES.map((a, i) => (
              <li key={i}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                  {a.textFirst ? (
                    <>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ padding: '0.75rem' }}>
                          <p style={{ fontFamily: 'var(--sb-reg)', fontSize: '0.875rem', fontWeight: 700, margin: '0 0 0.4rem' }}>{a.title}</p>
                          <p style={{ color: 'var(--muted-color)', fontSize: '0.8rem', lineHeight: 1.6, margin: 0 }}>{a.text}</p>
                        </div>
                      </div>
                      <div style={{ aspectRatio: '1 / 1', overflow: 'hidden', borderRadius: '0.5rem' }}>
                        <img src={a.img} alt={a.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={{ aspectRatio: '1 / 1', overflow: 'hidden', borderRadius: '0.5rem' }}>
                        <img src={a.img} alt={a.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ padding: '0.75rem' }}>
                          <p style={{ fontFamily: 'var(--sb-reg)', fontSize: '0.875rem', fontWeight: 700, margin: '0 0 0.4rem' }}>{a.title}</p>
                          <p style={{ color: 'var(--muted-color)', fontSize: '0.8rem', lineHeight: 1.6, margin: 0 }}>{a.text}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Team & Vertrauen ──────────────────────────────────────── */}
      <section style={{ marginBottom: '5rem' }}>
        <div className="uk-container">
          <SectionHeading>Unser Team — Qualität aus Leidenschaft</SectionHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '2.5rem' }}>
            {['1.jpg','2.jpg','3.jpeg','4.jpg','5.jpg','6.jpg'].map((f, i) => (
              <div key={i} style={{ borderRadius: '0.5rem', overflow: 'hidden', aspectRatio: '4/3' }}>
                <img src={`/images/zusammenarbeit/team/${f}`} alt={`Team ${i + 1}`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', textAlign: 'center' }}>
            <div>
              <p style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>Qualität die überzeugt</p>
              <p style={{ color: 'var(--muted-color)', fontSize: '0.85rem', lineHeight: 1.7, margin: 0 }}>
                Hochwertige Materialien, präzise Verarbeitung und strenge Qualitätskontrollen — dafür steht milaro.ch.
              </p>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>Individuelles Design</p>
              <p style={{ color: 'var(--muted-color)', fontSize: '0.85rem', lineHeight: 1.7, margin: 0 }}>
                Jedes Projekt wird speziell für Sie entworfen — abgestimmt auf Ihre Wünsche, Ihren Raum und Ihren Lebensstil.
              </p>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>Jedes Budget willkommen</p>
              <p style={{ color: 'var(--muted-color)', fontSize: '0.85rem', lineHeight: 1.7, margin: 0 }}>
                Von der budgetfreundlichen Küche bis zur Premium-Manufaktur-Lösung — wir realisieren Ihr Projekt in jeder Preisklasse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Wie Möbel entstehen (slider only) ────────────────────── */}
      <section style={{ marginBottom: '5rem' }}>
        <div className="uk-container">
          <SectionHeading>Wie Milaro-Möbel entstehen</SectionHeading>
          <div style={{ position: 'relative' }}>
            <div
              ref={sliderRef}
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

      {/* ── Bewertungen ───────────────────────────────────────────── */}
      <section style={{ background: 'var(--light-color)', padding: '5rem 0', marginBottom: '0' }}>
        <div className="uk-container">
          <SectionHeading>Was unsere Kunden sagen</SectionHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {REVIEWS.map(r => (
              <div key={r.name} style={{ background: 'white', borderRadius: '0.75rem', padding: '1.75rem', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#E31E24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p style={{ color: 'var(--main-color)', lineHeight: 1.75, marginBottom: '1.25rem', fontSize: '0.95rem' }}>&ldquo;{r.text}&rdquo;</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <strong style={{ fontSize: '0.875rem' }}>{r.name}</strong>
                    <span style={{ color: 'var(--muted-color)', fontSize: '0.8rem' }}>, {r.city}</span>
                  </div>
                  <span style={{ fontSize: '0.72rem', color: 'var(--muted-color)', background: 'var(--light-color)', padding: '0.2rem 0.7rem', borderRadius: '2rem' }}>{r.product}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA (same as product pages) ───────────────────────────── */}
      <ProductOrderForm productName="Ihr Projekt" />
    </>
  )
}
