import Breadcrumbs from '@/components/layout/Breadcrumbs'
import ProductOrderForm from '@/components/catalog/ProductOrderForm'

const services = [
  { title: 'Kostenlose Planung', desc: 'Unser Designer erstellt einen individuellen Projektplan für Ihre Küche oder Möbel.' },
  { title: 'Kostenlose Ausmessung', desc: 'Wir kommen zu Ihnen und nehmen alle Maße vor Ort auf.' },
  { title: 'Lieferung & Montage', desc: 'Professionelle Lieferung und Montage durch unser erfahrenes Team.' },
  { title: 'Garantie & Kundendienst', desc: 'Bis zu 20 Jahre Garantie auf alle unsere Produkte.' },
]

const steps = [
  'Beratungstermin vereinbaren',
  'Kostenlose Planung & Angebot',
  'Auftragsbestätigung',
  'Produktion in unserer Fabrik',
  'Lieferung & Montage',
  'Kundendienst & Garantie',
]

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Services' }]} />
      <section className="uk-section uk-section-large">
        <div className="uk-container">
          <h1 className="section-heading">Unsere Services</h1>
          <div className="uk-grid" style={{ gap: '1.5rem', marginTop: '2rem' }}>
            {services.map((s) => (
              <div key={s.title} className="uk-width-1-2" style={{ width: '50%' }}>
                <div className="glass-panel" style={{ padding: '2rem', background: 'var(--light-color)', borderRadius: '1rem', height: '100%' }}>
                  <h3 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted-color)' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.8rem', textAlign: 'center', marginTop: '4rem' }}>
            Bestellprozess
          </h2>
          <div className="uk-grid" style={{ gap: '1rem', marginTop: '2rem' }}>
            {steps.map((step, i) => (
              <div key={step} className="uk-width-1-3@m" style={{ width: '33.333%' }}>
                <div style={{
                  padding: '1.5rem',
                  textAlign: 'center',
                  background: 'var(--light-color)',
                  borderRadius: '1rem',
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: 'var(--primary-color)', color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 0.5rem', fontWeight: 500,
                  }}>
                    {i + 1}
                  </div>
                  <span>{step}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProductOrderForm productName="Ihr Projekt" />
    </>
  )
}
