import Breadcrumbs from '@/components/layout/Breadcrumbs'
import ProductOrderForm from '@/components/catalog/ProductOrderForm'

export default function CompanyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Unternehmen' }]} />
      <section className="uk-section uk-section-large">
        <div className="uk-container">
          <h1 className="section-heading">Über milaro.ch</h1>

          <div style={{ display: 'flex', gap: '3rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <div style={{ width: '48%', minWidth: 300 }}>
              <img
                src="https://www.marya.ru/promo/home3/img/prod/prod1.jpg"
                alt="Produktion"
                style={{ width: '100%', height: '31rem', objectFit: 'cover', borderRadius: '1rem' }}
              />
            </div>
            <div style={{ width: '48%', minWidth: 300 }}>
              <h2 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.5rem', marginBottom: '1rem' }}>Geschichte</h2>
              <p style={{ color: 'var(--muted-color)', lineHeight: 1.8, marginBottom: '1rem' }}>
                Unsere Fabrik wurde 1999 gegründet und hat sich auf maßgefertigte Küchen
                spezialisiert. Heute produzieren wir auf über 92.000 m² mit modernsten
                Maschinen aus Italien, Deutschland, der Schweiz und Japan.
              </p>
              <p style={{ color: 'var(--muted-color)', lineHeight: 1.8 }}>
                Über 5.000 Mitarbeiter arbeiten täglich daran, Ihre Traummöbel zu verwirklichen.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '4rem' }}>
            <h2 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.5rem', textAlign: 'center', marginBottom: '2rem' }}>Produktion</h2>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              {['prod1', 'prod2', 'prod3'].map((src, i) => (
                <div key={src} style={{ width: 'calc(33.333% - 1rem)', minWidth: 250 }}>
                  <img
                    src={`https://www.marya.ru/promo/home3/img/prod/${src}.jpg`}
                    alt={`Produktion ${i + 1}`}
                    style={{ width: '100%', height: '20rem', objectFit: 'cover', borderRadius: '1rem' }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '4rem' }}>
            <h2 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.5rem', textAlign: 'center', marginBottom: '2rem' }}>Materialien</h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {['Massivholz & Furnier', 'MDF', 'HPL', 'Email', 'Textilien'].map((mat) => (
                <div key={mat} style={{
                  padding: '1rem 2rem', background: 'var(--light-color)',
                  borderRadius: '2rem', fontSize: '0.875rem', textAlign: 'center',
                }}>
                  {mat}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ProductOrderForm productName="Ihr Projekt" />
    </>
  )
}
