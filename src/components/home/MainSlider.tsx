import Link from 'next/link'

const slides = [
  { title: 'Frühlingsangebote', text: 'Sichern Sie sich bis zu 30% Rabatt!', img: 'https://www.marya.ru/promo/home3/img/models/trento1.jpg' },
  { title: 'Kostenlose Planung', text: 'Vereinbaren Sie einen Termin', img: 'https://www.marya.ru/promo/home3/img/models/nicolle.jpg' },
  { title: 'Neu: Badezimmer Kollektion', text: 'Entdecken Sie unsere Modelle', img: 'https://www.marya.ru/promo/home3/img/nav/baths1.jpg' },
]

export default function MainSlider() {
  return (
    <section className="uk-section uk-section-blur">
      <div className="uk-container">
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          {slides.map((s) => (
            <Link key={s.title} href="#" style={{
              width: 'calc(33.333% - 1rem)', minWidth: 250, height: 220,
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              justifyContent: 'center', padding: '2rem', textDecoration: 'none',
              color: 'var(--main-color)', borderRadius: '1rem', position: 'relative',
              overflow: 'hidden',
            }}>
              <img
                src={s.img}
                alt=""
                style={{
                  position: 'absolute', top: 0, left: 0, width: '100%',
                  height: '100%', objectFit: 'cover', opacity: 0.25,
                }}
              />
              <h3 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.5rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                {s.title}
              </h3>
              <p style={{ textAlign: 'center', color: 'var(--muted-color)', marginTop: '0.5rem', position: 'relative', zIndex: 1 }}>
                {s.text}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
