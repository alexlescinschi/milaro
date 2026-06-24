const advantages = [
  { title: 'Eigene Produktion', text: 'Fabrik mit 92.000 m² und vollständigem Produktionszyklus. Modernste Maschinen und Handarbeit.' },
  { title: 'Projekte jeder Komplexität', text: 'Ihre Küche wird genau so, wie Sie sie sich vorstellen. Denn Innenarchitektur ist Kunst.' },
  { title: 'Möbel für das ganze Haus', text: 'Küche, Technik, Schränke, Accessoires – alles aus einer Hand.' },
  { title: 'Garantie bis 20 Jahre', text: 'Hochwertige Materialien und Komponenten für langanhaltende Freude.' },
  { title: 'Schweizer Service', text: 'Persönliche Beratung und Betreuung in der ganzen Schweiz.' },
]

export default function AdvantagesSection() {
  return (
    <section className="uk-section uk-section-muted">
      <div className="uk-container">
        <h2 className="section-heading">Warum milaro.ch?</h2>

        <div className="uk-grid advantages-grid" style={{ gap: '1.5rem' }}>
          {advantages.map((a) => (
            <div key={a.title} className="uk-width-1-3@m" style={{ width: '33.333%' }}>
              <div
                className="glass-panel"
                style={{
                  padding: '2rem',
                  background: 'rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(5px)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '1rem',
                  height: '100%',
                }}
              >
                <h3 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{a.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted-color)', lineHeight: 1.7 }}>{a.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .advantages-grid > div { width: 50% !important; } }
        @media (max-width: 580px) { .advantages-grid > div { width: 100% !important; } }
      `}</style>
    </section>
  )
}
