const BENEFITS = [
  {
    title: 'Kostenlose Lieferung',
    text: 'Lieferung in der gesamten Schweiz — kostenlos und termingerecht.',
  },
  {
    title: 'Garantie bis 20 Jahre',
    text: 'Lebenslanger Kundendienst auch nach Ablauf der Garantiezeit.',
  },
  {
    title: 'Ab 5 Werktagen',
    text: 'Schnelle Fertigung Ihrer Küche ohne Abstriche bei der Qualität.',
  },
  {
    title: 'Über 600 Modelle',
    text: 'Grösstes Sortiment in modernen, klassischen und neoklassischen Stilen.',
  },
  {
    title: 'Flexible Zahlung',
    text: 'Individuelle Zahlungskonditionen und Ratenzahlung möglich.',
  },
  {
    title: 'Über 25 Jahre Erfahrung',
    text: 'Umfangreiche Kompetenz und hervorragender Ruf in der Schweiz.',
  },
]

export default function BenefitsSection() {
  return (
    <section style={{ padding: '5rem 0', background: 'var(--light-color)' }}>
      <div className="uk-container">
        <div className="benefits-layout" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '4rem', alignItems: 'start' }}>

          {/* Left — title */}
          <div style={{ position: 'sticky', top: '6rem' }}>
            <h2 style={{ fontFamily: 'var(--sb-reg)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
              Warum uns wählen
            </h2>
            <svg viewBox="0 0 120 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 120, display: 'block', color: 'var(--primary-color)' }}>
              <path d="M0 8h110M104 2l8 6-8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Right — 3×2 grid */}
          <div className="benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {BENEFITS.map((b) => (
              <div key={b.title} style={{
                background: 'white', borderRadius: '0.85rem',
                padding: '1.5rem', border: '1px solid var(--border-color)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}>
                <div style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  {b.title}
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted-color)', lineHeight: 1.7, margin: 0 }}>
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .benefits-layout { grid-template-columns: 1fr !important; }
          .benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          .benefits-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
