'use client'

import { useState } from 'react'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import ProjektModal from '@/components/ui/ProjektModal'
import Link from 'next/link'
import { PROJECTS } from '@/lib/portfolio'

const heroImg = PROJECTS[0]?.images[0] ?? '/images/portfolio/33113d889a5866784047f62eef021760.jpg'

const STEPS = [
  {
    num: '01',
    title: 'Kostenloser Design-Entwurf',
    text: 'Wir entwickeln einen individuellen Projektentwurf in dem für Sie passenden Format: Online-Planung, Treffen im Studio oder Besuch des Designers vor Ort.',
    img: '/images/products/0cZ3AVTlSyxPUwLgW_fAZRl.jpg',
    link: { label: 'Anfrage senden', href: '/kontakt' },
  },
  {
    num: '02',
    title: 'Kostenlose Ausmessung',
    text: 'Unsere Messtechniker kommen zu einem für Sie passenden Zeitpunkt – kostenlos und unverbindlich.',
    img: '/images/products/0LSLx8yb5i198HrrA_hY4iv.jpg',
    link: { label: 'Termin vereinbaren', href: '/kontakt' },
  },
  {
    num: '03',
    title: 'Produktion der Küche',
    text: 'Nach Vertragsabschluss wird der Entwurf an die Fabrik übergeben. Sie können den gesamten Produktionsablauf in Ihrem persönlichen Konto verfolgen.',
    img: '/images/products/04BaGWDW2glkI84IO_Yjrjl.jpg',
    link: { label: 'Zum Kundenkonto', href: '#' },
  },
  {
    num: '04',
    title: 'Lieferung & Montage',
    text: 'Wir liefern Ihre Küche zu einem passenden Zeitpunkt, montieren sie fachgerecht und schliessen die Geräte an.',
    img: '/images/products/0q9jxltANXHL3RmIm_2b9zJ.jpg',
    link: null,
  },
]

const GUARANTEES = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: 'Qualität',
    text: 'Wir arbeiten ausschliesslich mit geprüften Lieferanten zusammen und garantieren unseren Kunden konstant hohe Qualität der Waren und Dienstleistungen.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Funktionalität & Ergonomie',
    text: 'Wir entwickeln professionelle, intelligente Lösungen, die die Lebensqualität unserer Kunden spürbar verbessern.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    ),
    title: 'Einzigartiges, aktuelles Design',
    text: 'Wir entwickeln individuelle Projekte unter Berücksichtigung des Lebensstils, der Geschmäcker und Wünsche jedes einzelnen Kunden.',
  },
]

const ALL_SERVICES = [
  {
    img: '/images/services/',
    title: 'Kostenloser Design-Entwurf',
    desc: 'Professionelle Designer entwickeln für Sie einen individuellen Design-Entwurf – genau auf Ihre Wünsche abgestimmt.',
  },
  {
    img: '/images/services/',
    title: 'Kostenlose Ausmessung',
    desc: 'Rufen Sie uns an unter +41 77 283 75 10 (kostenlos, rund um die Uhr) oder füllen Sie das Formular aus.',
  },
  {
    img: '/images/services/',
    title: 'Faire Kreditraten ohne Aufpreis',
    desc: 'Sie möchten Ihre neue Küche nicht sofort bezahlen, sondern in monatlichen Raten? Wir bieten faire Konditionen – ganz ohne versteckte Kosten.',
  },
  {
    img: '/images/services/',
    title: 'Lieferung & Montage',
    desc: 'Vertrauen Sie die Endmontage und Installation Ihrer Küche unseren Profis an. Lieferung und Aufbau aus einer Hand.',
  },
  {
    img: '/images/services/',
    title: '20 Jahre Garantie',
    desc: 'Das Gestell ist die Basis jeder Küche – von seiner Qualität und Langlebigkeit hängt die Lebensdauer des gesamten Möbels ab. Wir garantieren beides.',
  },
  {
    img: '/images/services/',
    title: 'Preisliste Serviceleistungen',
    desc: 'Hier finden Sie das vollständige Verzeichnis aller durchgeführten Arbeiten und die aktuellen Preise.',
  },
]

export default function ServicesPage() {
  const [formOpen, setFormOpen] = useState(false)
  return (
    <>
      <Breadcrumbs items={[{ label: 'Dienstleistungen' }]} />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', height: '24rem', overflow: 'hidden' }}>
        <img src={heroImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.25) 100%)',
          display: 'flex', alignItems: 'center',
        }}>
          <div className="uk-container">
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
              Dienstleistungen
            </p>
            <h1 style={{ fontFamily: 'var(--sb-reg)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'white', margin: '0 0 1rem', lineHeight: 1.15 }}>
              Unsere Dienstleistungen
            </h1>
            <Link
              href="/kontakt"
              className="uk-button uk-button-inversed"
              style={{ fontSize: '0.9rem', padding: '0.6rem 1.8rem' }}
            >
              Kostenlose Beratung anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4 Steps ──────────────────────────────────────────────── */}
      <section className="uk-section">
        <div className="uk-container">
          <p style={{ color: 'var(--muted-color)', lineHeight: 1.8, maxWidth: 720, marginBottom: '3rem' }}>
            Die Herstellung einer Küche ist ein komplexer, mehrstufiger Prozess. Für unsere Kunden sind es jedoch nur vier einfache Schritte – begleitet von einem persönlichen Designer.
          </p>

          <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
            {STEPS.map((s) => (
              <div key={s.num} style={{ borderRadius: '0.85rem', overflow: 'hidden', border: '1px solid var(--border-color)', background: 'white' }}>
                <div style={{ position: 'relative', height: 180, overflow: 'hidden' }}>
                  <img src={s.img} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute', top: '0.75rem', left: '0.75rem',
                    width: 36, height: 36, borderRadius: '50%',
                    background: 'var(--primary-color)', color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.82rem', fontWeight: 700,
                  }}>
                    {s.num}
                  </div>
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted-color)', lineHeight: 1.7, marginBottom: s.link ? '0.75rem' : 0 }}>{s.text}</p>
                  {s.link && (
                    <Link href={s.link.href} style={{ color: 'var(--primary-color)', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none' }}>
                      {s.link.label} →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guarantees ───────────────────────────────────────────── */}
      <section style={{ background: '#0f0f0f', padding: '5rem 0' }}>
        <div className="uk-container">
          <p style={{
            fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'var(--primary-color)', marginBottom: '0.75rem', textAlign: 'center',
          }}>
            Milaro garantiert seinen Kunden
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem', marginTop: '2.5rem' }}>
            {GUARANTEES.map((g) => (
              <div key={g.title} style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '1rem' }}>{g.icon}</div>
                <h3 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.15rem', color: 'white', marginBottom: '0.75rem' }}>{g.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{g.text}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/kontakt" className="uk-button uk-button-inversed" style={{ fontSize: '0.9rem', padding: '0.6rem 2rem' }}>
              Anfrage senden
            </Link>
          </div>
        </div>
      </section>

      {/* ── All Services ─────────────────────────────────────────── */}
      <section className="uk-section">
        <div className="uk-container">
          <h2 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.6rem', textAlign: 'center', marginBottom: '2.5rem' }}>
            Unsere Leistungen
          </h2>
          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {ALL_SERVICES.map((svc) => (
              <div
                key={svc.title}
                onClick={() => setFormOpen(true)}
                style={{ borderRadius: '0.85rem', overflow: 'hidden', border: '1px solid var(--border-color)', background: 'white', cursor: 'pointer', transition: 'box-shadow 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
              >
                <div style={{ height: 160, overflow: 'hidden' }}>
                  <img src={svc.img} alt={svc.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem' }}>{svc.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted-color)', lineHeight: 1.7, margin: 0 }}>{svc.desc}</p>
                  <span style={{ color: 'var(--primary-color)', fontSize: '0.82rem', fontWeight: 600, marginTop: '0.75rem', display: 'inline-block' }}>
                    Mehr erfahren →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modal ──────────────────────────────────────────────── */}
      <ProjektModal open={formOpen} onClose={() => setFormOpen(false)} />

      <style>{`
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          .steps-grid { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}