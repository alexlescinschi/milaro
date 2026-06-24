'use client'

import { useState, useRef } from 'react'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

const BENEFITS = [
  {
    title: 'VIP-Betreuung',
    text: 'Ein persönlicher, hochqualifizierter Manager mit mehr als 5 Jahren Erfahrung – an Ihrer Seite in jeder Phase Ihres Projekts.',
    icon: '<svg width="34" height="31" viewBox="0 0 34 31" fill="none"><path d="M32 2L12 22L2 12" stroke="#DCDCDC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  },
  {
    title: 'Bonusprogramm',
    text: 'Progressive Staffelung je nach Umsatz. PR-Bonus für Veröffentlichungen.',
    icon: '<svg width="32" height="34" viewBox="0 0 32 34" fill="none"><path d="M16 2V32M16 2L6 12M16 2L26 12" stroke="#DCDCDC" stroke-width="4" stroke-linecap="round"/></svg>',
  },
  {
    title: 'Personalisierte Lösungen',
    text: 'Wir fertigen Küchen, Schränke, Badezimmermöbel und Hauswirtschaftsräume in einem einheitlichen Stil. Individuelle Beratung zu Technik und Mechanismen.',
    icon: '<svg width="32" height="31" viewBox="0 0 32 31" fill="none"><circle cx="16" cy="11" r="9" stroke="#DCDCDC" stroke-width="3"/><path d="M6 30H26M16 20V30" stroke="#DCDCDC" stroke-width="3"/></svg>',
  },
  {
    title: 'Komfortable Projektarbeit',
    text: '3D-Modelle, Oberflächentexturen, Farbmuster und persönliche Furnierauswahl – alles für Ihre Projektarbeit.',
    icon: '<svg width="31" height="26" viewBox="0 0 31 26" fill="none"><rect x="2" y="2" width="27" height="22" rx="3" stroke="#DCDCDC" stroke-width="3"/><path d="M10 14L14 18L22 8" stroke="#DCDCDC" stroke-width="3" stroke-linecap="round"/></svg>',
  },
  {
    title: 'Zuverlässigkeit & Stabilität',
    text: 'Offizielle Vertragsbeziehungen: Kooperationsvertrag und flexible Auszahlungen (GmbH, Einzelfirma).',
    icon: '<svg width="36" height="31" viewBox="0 0 36 31" fill="none"><rect x="2" y="10" width="32" height="19" rx="3" stroke="#DCDCDC" stroke-width="3"/><path d="M10 10V6C10 3.8 11.5 2 14 2H22C24.5 2 26 3.8 26 6V10" stroke="#DCDCDC" stroke-width="3"/></svg>',
  },
  {
    title: 'PR & Veranstaltungen',
    text: 'Wir bewerben Sie kostenlos in sozialen Netzwerken und auf unserer Website! Fotoshootings Ihrer Projekte, Einladungen zu Vorträgen und Studioeröffnungen.',
    icon: '<svg width="32" height="31" viewBox="0 0 32 31" fill="none"><rect x="2" y="2" width="28" height="20" rx="3" stroke="#DCDCDC" stroke-width="3"/><path d="M12 28L16 22L20 28" stroke="#DCDCDC" stroke-width="3" stroke-linecap="round"/><path d="M16 22V16" stroke="#DCDCDC" stroke-width="3"/></svg>',
  },
]

const WHY_ITEMS = [
  {
    title: 'Modernste Fertigungstechnologie',
    icon: '<svg width="30" height="30" viewBox="0 0 30 30" fill="none"><circle cx="15" cy="15" r="13" stroke="white" stroke-width="2"/><path d="M15 8V15L20 20" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>',
  },
  {
    title: 'Zeitgemäße Designentwicklungen',
    icon: '<svg width="32" height="34" viewBox="0 0 32 34" fill="none"><rect x="4" y="2" width="24" height="30" rx="3" stroke="white" stroke-width="2"/><circle cx="16" cy="14" r="4" stroke="white" stroke-width="2"/><path d="M16 18V26" stroke="white" stroke-width="2"/></svg>',
  },
  {
    title: 'Individuelle Kundenbetreuung',
    icon: '<svg width="28" height="27" viewBox="0 0 28 27" fill="none"><circle cx="14" cy="10" r="8" stroke="white" stroke-width="2"/><path d="M4 25C4 20 8 16 14 16C20 16 24 20 24 25" stroke="white" stroke-width="2"/></svg>',
  },
  {
    title: '20 Jahre Garantie',
    icon: '<svg width="30" height="32" viewBox="0 0 30 32" fill="none"><path d="M15 2L4 8V16C4 24 9 30 15 32C21 30 26 24 26 16V8L15 2Z" stroke="white" stroke-width="2"/><path d="M10 16L14 20L20 12" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>',
  },
  {
    title: 'Hochwertige Materialien',
    icon: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M20 4L36 12V28L20 36L4 28V12L20 4Z" stroke="white" stroke-width="2"/><path d="M20 20L36 12M20 20L4 12M20 20V36" stroke="white" stroke-width="2"/></svg>',
  },
]

const TEAM = [
  { name: 'Anna Meier', role: 'VIP-Betreuung', img: '/images/zusammenarbeit/team/1.jpg' },
  { name: 'Lukas Schneider', role: 'VIP-Betreuung', img: '/images/zusammenarbeit/team/2.jpg' },
  { name: 'Sophie Wagner', role: 'VIP-Betreuung', img: '/images/zusammenarbeit/team/3.jpeg' },
  { name: 'Marco Rossi', role: 'VIP-Betreuung', img: '/images/zusammenarbeit/team/4.jpg' },
  { name: 'Elena Keller', role: 'VIP-Betreuung', img: '/images/zusammenarbeit/team/5.jpg' },
  { name: 'David Fischer', role: 'VIP-Betreuung', img: '/images/zusammenarbeit/team/6.jpg' },
]

const SLIDER_IMAGES = [
  '/images/zusammenarbeit/slider/1.jpg',
  '/images/zusammenarbeit/slider/2.jpg',
  '/images/zusammenarbeit/slider/3.jpg',
  '/images/zusammenarbeit/slider/4.jpg',
  '/images/zusammenarbeit/slider/5.jpg',
]

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: 'var(--bricolage, sans-serif)',
      fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.02em',
      marginBottom: '3rem',
      paddingBottom: '1.2rem',
      borderBottom: '2px solid var(--border-color)',
    }}>
      {children}
    </div>
  )
}

function Modal({ id, children }: { id: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <a href={`#${id}`} onClick={(e) => { e.preventDefault(); setOpen(true) }}>{children}</a>
      {open && (
        <div className="uk-modal open" onClick={() => setOpen(false)}>
          <div className="uk-modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 500 }}>
            <button className="uk-modal-close" onClick={() => setOpen(false)}>
              <svg width="14" height="14" viewBox="0 0 14 14"><line fill="none" stroke="#000" strokeWidth="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" strokeWidth="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>
            </button>
            <div className="uk-h3" style={{ marginTop: 0 }}>Anfrage</div>
            <div className="uk-h5" style={{ width: '66%' }}>Füllen Sie das Formular aus und registrieren Sie sich als Designer!</div>
            <DesignerForm />
          </div>
        </div>
      )}
    </>
  )
}

function DesignerForm() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = fd.get('name') as string
    const email = fd.get('email') as string
    const phone = fd.get('phone') as string
    const city = fd.get('city') as string
    const portfolioUrl = fd.get('portfolio') as string

    setSending(true)
    try {
      await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, city, portfolioUrl, type: 'b2b' }),
      })
      setSent(true)
    } catch { /* ponytail: silent fail */ }
    setSending(false)
  }
  if (sent) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem 0' }}>
        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✓</div>
        <div className="uk-h4">Vielen Dank!</div>
        <p style={{ color: 'var(--muted-color)' }}>Wir melden uns in Kürze bei Ihnen.</p>
      </div>
    )
  }
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <input className="uk-input uk-form-large" name="name" placeholder="Ihr Name" required />
      <input className="uk-input uk-form-large" name="email" type="email" placeholder="Ihre E-Mail" required />
      <input className="uk-input uk-form-large" name="phone" type="tel" placeholder="+41 (0) 00 000 00 00" required />
      <select className="uk-select uk-form-large" name="city" required defaultValue="">
        <option value="" disabled>Stadt auswählen</option>
        <option>Zürich</option><option>Bern</option><option>Basel</option><option>Genf</option>
        <option>Lausanne</option><option>Winterthur</option><option>Luzern</option><option>St. Gallen</option>
        <option>Lugano</option><option>Biel</option><option>Thun</option><option>Chur</option>
        <option>Zug</option>
      </select>
      <input className="uk-input uk-form-large" name="portfolio" type="url" placeholder="https://" />
      <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--muted-color)' }}>
        <input type="checkbox" defaultChecked required style={{ marginTop: '0.15rem' }} />
        Ich stimme der Verarbeitung meiner Daten gemäss der Datenschutzerklärung zu.
      </label>
      <button className="uk-button uk-button-primary" type="submit" disabled={sending} style={{ width: '100%', opacity: sending ? 0.7 : 1 }}>
        {sending ? 'Wird gesendet…' : 'Anfrage senden'}
      </button>
    </form>
  )
}

export default function DesignerPage() {
  const [formOpen, setFormOpen] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const teamSliderRef = useRef<HTMLDivElement>(null)

  const scrollSlider = (ref: React.RefObject<HTMLDivElement | null>, dir: number) => {
    if (ref.current) ref.current.scrollBy({ left: dir * 400, behavior: 'smooth' })
  }

  return (
    <>
      <Breadcrumbs items={[{ label: 'Zusammenarbeit' }]} />

      {/* Section 1: Hero */}
      <section className="uk-section uk-section-xlarge uk-section-default">
        <div className="uk-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'start' }}>
            <div>
              <h1 style={{
                fontFamily: 'var(--bricolage, sans-serif)',
                fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '2.5rem',
                paddingBottom: '1.2rem',
                borderBottom: '2px solid var(--border-color)',
              }}>
                Designer
              </h1>
              <div style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.3rem', marginTop: '2rem' }}>
                Wir freuen uns auf Ihre Ideen!
              </div>
              <div style={{ marginTop: '2.5rem', color: 'var(--muted-color)', lineHeight: 1.8 }}>
                <p>
                  Liebe Designer! Die Firma milaro.ch liebt kreative, interessante und anspruchsvolle Projekte.
                  Deshalb arbeiten wir gerne mit professionellen Innenarchitekten zusammen, sowohl mit Einzelpersonen
                  als auch mit Designstudios. Werden Sie Teil unseres Teams!
                </p>
              </div>
              <a
                href="#formSection"
                onClick={(e) => { e.preventDefault(); setFormOpen(true) }}
                className="uk-button uk-button-primary"
                style={{ marginTop: '2rem' }}
              >
                Zusammenarbeiten
              </a>
              <hr style={{ marginTop: '3rem', border: 'none', borderTop: '1px solid var(--border-color)' }} />
            </div>
            <div style={{
              borderRadius: '1rem', overflow: 'hidden',
              height: '42.5rem', background: 'var(--light-color)',
            }}>
              <img
                src="/images/zusammenarbeit/hero/dis-top.jpg"
                alt="Designer"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Brand Intro */}
      <section className="uk-section uk-section-default uk-section-xlarge">
        <div className="uk-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2.5rem', alignItems: 'center' }}>
            <div style={{ width: 280, height: 280, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
              <img
                src="/images/zusammenarbeit/brand/cooperation-circle.jpg"
                alt="Über uns"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.3rem', marginBottom: '1rem' }}>
                Jede Küche von milaro.ch ist individuell!
              </div>
              <div style={{ color: 'var(--muted-color)', lineHeight: 1.8 }}>
                <p>milaro.ch – einer der führenden Hersteller und eine der bekanntesten Marken auf dem Möbelmarkt!</p>
                <p>
                  Die Möbelfabrik ist mit modernsten italienischen und deutschen Anlagen ausgestattet,
                  was uns eine europäische Produktqualität ermöglicht. Wir verwenden ausschliesslich
                  hochwertige Materialien und Komponenten führender Weltmarken wie Egger und Hettich.
                  milaro.ch ist das einzige Unternehmen in der Schweiz, das feuchtigkeitsbeständige
                  Spanplatten für Küchenrahmen verwendet – dadurch konnten wir die Garantiezeit auf 20 Jahre erhöhen!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Portfolio Slider */}
      <section className="uk-section uk-section-default uk-section-xlarge">
        <div className="uk-container">
          <div style={{ position: 'relative' }}>
            <div
              ref={sliderRef}
              style={{
                display: 'flex', gap: '4px', overflowX: 'auto', scrollSnapType: 'x mandatory',
                scrollbarWidth: 'none', msOverflowStyle: 'none',
                borderRadius: '1rem',
              }}
              className="hide-scrollbar"
            >
              {SLIDER_IMAGES.map((src, i) => (
                <div
                  key={i}
                  style={{
                    flex: 'none', width: 'auto', height: '42.5rem', borderRadius: '1rem', overflow: 'hidden',
                    scrollSnapAlign: 'start',
                  }}
                >
                  <a href={src} target="_blank" rel="noreferrer">
                    <img src={src} alt="" style={{ height: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
                  </a>
                </div>
              ))}
            </div>
            <button
              onClick={() => scrollSlider(sliderRef, -1)}
              style={{
                position: 'absolute', left: '0.5rem', top: '50%', transform: 'translateY(-50%)',
                width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,255,255,0.85)',
                border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)', zIndex: 2,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 48 16" fill="none"><path d="M48 8H4M4 8L12 1M4 8L12 15" stroke="#E31E24" strokeWidth="2"/></svg>
            </button>
            <button
              onClick={() => scrollSlider(sliderRef, 1)}
              style={{
                position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)',
                width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,255,255,0.85)',
                border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)', zIndex: 2,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 48 16" fill="none"><path d="M0 8H44M44 8L36 1M44 8L36 15" stroke="#E31E24" strokeWidth="2"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Section 4: Benefits */}
      <section className="uk-section uk-section-xlarge uk-section-default">
        <div className="uk-container">
          <SectionHeading>Vorteile</SectionHeading>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
            {BENEFITS.map((b, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  dangerouslySetInnerHTML={{ __html: b.icon }}
                />
                <div>
                  <div className="uk-h6" style={{ margin: 0, fontFamily: 'var(--sb-reg)', fontWeight: 600 }}>{b.title}</div>
                  <p style={{ color: 'var(--muted-color)', fontSize: '0.875rem', marginTop: '0.3rem', lineHeight: 1.6, maxWidth: '66%' }}>
                    {b.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Partner Club */}
      <section className="uk-section uk-section-xlarge uk-section-default">
        <div className="uk-container">
          <SectionHeading>Club der Partner #milaroDesignPeople</SectionHeading>
          <div style={{ color: 'var(--muted-color)', lineHeight: 1.8, maxWidth: '80%', marginBottom: '3rem' }}>
            <p>
              Über die jährlichen traditionellen Treffen mit Designern #milaroDesignPeople hinaus laden wir Sie ein,
              dem Club der Partner #milaroDesignPeople beizutreten.
            </p>
            <p>
              Arbeiten Sie bereits als Designer mit uns zusammen? Dann treten Sie dem Club bei und geniessen Sie
              alle Privilegien. Wie erhalten Sie maximale Vorteile? Bereits nach dem ersten Vertragsabschluss
              über den Kauf von milaro-Möbeln erhalten Sie einen Status. Mehr Verträge – höher Ihr Status,
              mehr Boni und Geschenke!
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {[
              { img: '/images/zusammenarbeit/clubs/3.jpg', title: 'Gold', desc: 'Maximale Agenturvergütung + PR-Bonus + Geschenke' },
              { img: '/images/zusammenarbeit/clubs/4.jpg', title: 'Rubin', desc: 'Maximale Agenturvergütung + PR-Bonus + Geschenke für Sie und Ihre Kunden + Teilnahme am #milaroDesignPeople-Kongress + Einladungen zu exklusiven Events' },
            ].map((club, i) => (
              <div key={i} style={{ borderRadius: '1rem', overflow: 'hidden', background: 'var(--light-color)' }}>
                <div style={{ height: '15rem', overflow: 'hidden' }}>
                  <img src={club.img} alt={club.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <div className="uk-h6" style={{ fontFamily: 'var(--sb-reg)', margin: 0 }}>{club.title}</div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted-color)', marginTop: '0.3rem' }}>{club.desc}</p>
                  <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Why Beneficial */}
      <section style={{
        position: 'relative', height: '100vh', overflow: 'hidden',
        backgroundImage: 'url(/images/zusammenarbeit/why/bg.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)' }} />
        <div className="uk-container" style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '3rem', width: '100%', color: 'white', height: '80vh' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h2 style={{
                fontFamily: 'var(--bricolage, sans-serif)',
                fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                fontWeight: 700,
                lineHeight: 1.2,
              }}>
                Warum mit milaro.ch<br />zusammenarbeiten?
              </h2>
            </div>
            <div style={{ overflowY: 'auto', paddingRight: '1rem' }}>
              <div style={{ maxWidth: '66%' }}>
                {WHY_ITEMS.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: '1.5rem', alignItems: 'center',
                    padding: '1.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.15)',
                  }}>
                    <div style={{ flexShrink: 0, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      dangerouslySetInnerHTML={{ __html: item.icon }}
                    />
                    <div className="uk-h5" style={{ margin: 0, fontFamily: 'var(--sb-reg)', fontWeight: 500 }}>
                      {item.title}
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: '2rem' }}>
                  <a
                    href="#formSection"
                    onClick={(e) => { e.preventDefault(); setFormOpen(true) }}
                    className="uk-button uk-button-primary"
                  >
                    Anfrage senden
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Catalog Download */}
      <section className="uk-section uk-section-default uk-section-xlarge">
        <div className="uk-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2.5rem', alignItems: 'center' }}>
            <div style={{ width: 280, height: 280, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
              <img
                src="/images/zusammenarbeit/catalog/cooperation-i.jpg"
                alt="Katalog"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.3rem', marginBottom: '1rem' }}>
                Küchen von milaro.ch zum Greifen nah!
              </div>
              <p style={{ color: 'var(--muted-color)', lineHeight: 1.8, maxWidth: '66%' }}>
                Um alle Modelle der Fabrik kennenzulernen, müssen Sie nicht mehr die Website durchsuchen!
                Laden Sie einfach unseren Katalog auf Ihren Laptop, Ihr Tablet oder sogar Ihr Smartphone herunter.
              </p>
              <a
                href="#"
                className="uk-button uk-button-default"
                onClick={(e) => { e.preventDefault(); alert('Katalog-Download folgt in Kürze'); }}
              >
                Katalog herunterladen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: VIP Team */}
      <section className="uk-section uk-section-xlarge uk-section-default">
        <div className="uk-container">
          <SectionHeading>Unser VIP-Manager-Team</SectionHeading>
          <div style={{ position: 'relative' }}>
            <div
              ref={teamSliderRef}
              style={{
                display: 'flex', gap: '1.5rem', overflowX: 'auto', scrollSnapType: 'x mandatory',
                scrollbarWidth: 'none', paddingBottom: '0.5rem',
              }}
              className="hide-scrollbar"
            >
              {TEAM.map((person, i) => (
                <div key={i} style={{
                  flex: 'none', width: 240, scrollSnapAlign: 'start',
                  borderRadius: '1rem', overflow: 'hidden', background: 'var(--light-color)',
                }}>
                  <div style={{ height: '15rem', overflow: 'hidden' }}>
                    <img src={person.img} alt={person.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '1rem' }}>
                    <div style={{ fontFamily: 'var(--sb-reg)', fontSize: '1rem', fontWeight: 600 }}>{person.name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--muted-color)', marginTop: '0.2rem' }}>{person.role}</div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => scrollSlider(teamSliderRef, -1)}
              style={{
                position: 'absolute', left: '-0.8rem', top: '35%', transform: 'translateY(-50%)',
                width: 44, height: 44, borderRadius: '50%', background: 'white',
                border: '1px solid var(--border-color)', cursor: 'pointer', zIndex: 2,
                display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}
            >
              <svg width="12" height="12" viewBox="0 0 48 16" fill="none"><path d="M48 8H4M4 8L12 1M4 8L12 15" stroke="#E31E24" strokeWidth="2"/></svg>
            </button>
            <button
              onClick={() => scrollSlider(teamSliderRef, 1)}
              style={{
                position: 'absolute', right: '-0.8rem', top: '35%', transform: 'translateY(-50%)',
                width: 44, height: 44, borderRadius: '50%', background: 'white',
                border: '1px solid var(--border-color)', cursor: 'pointer', zIndex: 2,
                display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}
            >
              <svg width="12" height="12" viewBox="0 0 48 16" fill="none"><path d="M0 8H44M44 8L36 1M44 8L36 15" stroke="#E31E24" strokeWidth="2"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Section 9: Registration Form */}
      <section id="formSection" style={{
        position: 'relative', padding: '6rem 0',
        backgroundImage: 'url(/images/zusammenarbeit/form/developer-top.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)' }} />
        <div className="uk-container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '3rem', alignItems: 'center' }}>
            <div style={{ color: 'white' }}>
              <div className="uk-h3" style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.5rem', maxWidth: '66%' }}>
                Füllen Sie das Formular aus und registrieren Sie sich als Designer!
              </div>
            </div>
            <div style={{
              background: 'white', borderRadius: '1rem', padding: '2.5rem',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            }}>
              <DesignerForm />
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: removed per request */}

      {/* Form Modal */}
      {formOpen && (
        <div className="uk-modal open" onClick={() => setFormOpen(false)}>
          <div className="uk-modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 500 }}>
            <button className="uk-modal-close" onClick={() => setFormOpen(false)}>
              <svg width="14" height="14" viewBox="0 0 14 14"><line fill="none" stroke="#000" strokeWidth="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" strokeWidth="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>
            </button>
            <div className="uk-h3" style={{ marginTop: 0 }}>Anfrage</div>
            <div className="uk-h5" style={{ width: '66%' }}>Füllen Sie das Formular aus und registrieren Sie sich als Designer!</div>
            <DesignerForm />
          </div>
        </div>
      )}

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        @media (max-width: 960px) {
          .uk-section-xlarge { padding-top: 4rem !important; padding-bottom: 4rem !important; }
        }
      `}</style>
    </>
  )
}
