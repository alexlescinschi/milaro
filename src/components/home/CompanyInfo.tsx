'use client'

import { useState } from 'react'

const STYLES = ['Modern', 'Klassisch', 'Neoklassik', 'Landhaus', 'Minimalistisch']
const SIZES = ['Bis 8 m²', '8–12 m²', '12–20 m²', 'Über 20 m²']
const BUDGETS = ['Auf Anfrage', 'CHF 8 000–15 000', 'CHF 15 000–30 000', 'CHF 30 000+']

export default function CompanyInfo() {
  const [style, setStyle] = useState('')
  const [size, setSize] = useState('')
  const [budget, setBudget] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section style={{ padding: '5rem 0', background: 'var(--light-color)' }}>
      <div className="uk-container">
        <div className="planner-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

          {/* Left — image + heading */}
          <div>
            <p style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--primary-color)', marginBottom: '0.6rem' }}>
              Kostenlos & unverbindlich
            </p>
            <h2 style={{ fontFamily: 'var(--sb-reg)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
              Küche planen mit milaro.ch
            </h2>
            <p style={{ color: 'var(--muted-color)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '2rem', maxWidth: 420 }}>
              Beschreiben Sie Ihren Wunsch — wir erstellen Ihnen ein kostenloses 3D-Design und eine unverbindliche Kalkulation.
            </p>
            <img
              src="https://www.marya.ru/promo/home3/img/prod/prod1.jpg"
              alt="Küchenplanung"
              style={{ width: '100%', height: '22rem', objectFit: 'cover', borderRadius: '1rem' }}
            />
          </div>

          {/* Right — form */}
          <div style={{ background: 'white', borderRadius: '1.25rem', padding: '2.5rem', border: '1px solid var(--border-color)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
                <div style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  Vielen Dank!
                </div>
                <p style={{ color: 'var(--muted-color)', fontSize: '0.9rem' }}>
                  Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                  Küchenplaner
                </div>

                {/* Style */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted-color)', display: 'block', marginBottom: '0.5rem' }}>
                    Küchenstil
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {STYLES.map(s => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setStyle(s)}
                        style={{
                          padding: '0.4rem 0.9rem',
                          borderRadius: '2rem',
                          border: `1.5px solid ${style === s ? 'var(--primary-color)' : 'var(--border-color)'}`,
                          background: style === s ? 'var(--primary-color)' : 'white',
                          color: style === s ? 'white' : 'var(--main-color)',
                          fontSize: '0.82rem',
                          cursor: 'pointer',
                          transition: 'all 0.15s',
                        }}
                      >{s}</button>
                    ))}
                  </div>
                </div>

                {/* Size */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted-color)', display: 'block', marginBottom: '0.5rem' }}>
                    Küchengrösse
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {SIZES.map(s => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSize(s)}
                        style={{
                          padding: '0.4rem 0.9rem',
                          borderRadius: '2rem',
                          border: `1.5px solid ${size === s ? 'var(--primary-color)' : 'var(--border-color)'}`,
                          background: size === s ? 'var(--primary-color)' : 'white',
                          color: size === s ? 'white' : 'var(--main-color)',
                          fontSize: '0.82rem',
                          cursor: 'pointer',
                          transition: 'all 0.15s',
                        }}
                      >{s}</button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted-color)', display: 'block', marginBottom: '0.5rem' }}>
                    Budget
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {BUDGETS.map(b => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        style={{
                          padding: '0.4rem 0.9rem',
                          borderRadius: '2rem',
                          border: `1.5px solid ${budget === b ? 'var(--primary-color)' : 'var(--border-color)'}`,
                          background: budget === b ? 'var(--primary-color)' : 'white',
                          color: budget === b ? 'white' : 'var(--main-color)',
                          fontSize: '0.82rem',
                          cursor: 'pointer',
                          transition: 'all 0.15s',
                        }}
                      >{b}</button>
                    ))}
                  </div>
                </div>

                {/* Name + Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <input
                    type="text"
                    placeholder="Ihr Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '0.65rem',
                      border: '1.5px solid var(--border-color)',
                      fontSize: '0.88rem',
                      outline: 'none',
                      fontFamily: 'inherit',
                    }}
                  />
                  <input
                    type="tel"
                    placeholder="+41 __ ___ __ __"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '0.65rem',
                      border: '1.5px solid var(--border-color)',
                      fontSize: '0.88rem',
                      outline: 'none',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '0.9rem',
                    background: 'var(--primary-color)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.65rem',
                    fontFamily: 'var(--sb-reg)',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    letterSpacing: '0.04em',
                  }}
                >
                  Kostenloses Design anfragen
                </button>

                <p style={{ fontSize: '0.72rem', color: 'var(--muted-color)', textAlign: 'center', marginTop: '0.75rem', margin: '0.75rem 0 0' }}>
                  Kein Spam. Kein Verkaufsdruck. Nur Ihr persönliches Küchenprojekt.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .planner-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
