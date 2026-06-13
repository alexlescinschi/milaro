export default function CompanyInfo() {
  return (
    <section className="uk-section">
      <div className="uk-container">
        <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ width: '48%', minWidth: 300 }}>
            <img
              src="https://www.marya.ru/promo/home3/img/prod/prod1.jpg"
              alt="Produktion"
              style={{ width: '100%', height: '31rem', objectFit: 'cover', borderRadius: '1rem' }}
            />
          </div>
          <div style={{ width: '48%', minWidth: 300 }}>
            <h2 style={{ fontFamily: 'var(--sb-reg)', fontSize: '2rem', marginBottom: '1.5rem' }}>
              milaro.ch — Maßgefertigte Möbel aus der Schweiz
            </h2>
            <p style={{ color: 'var(--muted-color)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Unsere Produktion wurde 1999 gegründet. Heute sind wir ein führender
              Möbelhersteller mit eigener Fabrik und über 300 Studios.
            </p>
            <p style={{ color: 'var(--muted-color)', lineHeight: 1.8 }}>
              Massivholz, MDF, HPL, Email — nur hochwertigste Materialien.
              Bis zu 20 Jahre Garantie auf alle Produkte.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
