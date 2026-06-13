import { CATEGORIES, STATS } from '@/lib/constants'

export default function IntroSection() {
  return (
    <section id="intro" className="uk-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
      <img
        src="https://www.marya.ru/promo/home3/img/nav/vantages.jpg"
        alt=""
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.06 }}
      />
      <div className="uk-container" style={{ width: '100%', position: 'relative', zIndex: 1 }}>
        <p style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.7rem', textAlign: 'center', marginBottom: '1rem' }}>
          Gestalten Sie Ihr Zuhause mit Charakter
        </p>
        <p style={{ textAlign: 'center', fontSize: '1rem', color: 'var(--muted-color)', maxWidth: 700, margin: '0 auto 3rem', lineHeight: 1.8 }}>
          Mit milaro.ch investieren Sie in Qualität, die Sie jahrelang begleitet.
          Wir entwickeln ganzheitliche Lösungen für Ihr Zuhause: Möbel, Einbaugeräte,
          Sanitär und Accessoires.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          {CATEGORIES.map((cat) => (
            <a key={cat.slug} href={`/katalog/${cat.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{
                width: 160, height: 180, display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'flex-end', color: 'var(--main-color)',
                borderRadius: '1rem', border: '1px solid var(--border-color)',
                overflow: 'hidden', position: 'relative',
              }}>
                <img src={cat.image} alt={cat.name} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
                <span style={{ fontFamily: 'var(--sb-reg)', fontSize: '1rem', position: 'relative', zIndex: 1, marginBottom: '1rem', background: 'rgba(255,255,255,0.8)', padding: '0.3rem 1rem', borderRadius: '0.3rem' }}>
                  {cat.name}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#" className="uk-button uk-button-primary">Kosten berechnen</a>
        </div>

        <div style={{ display: 'flex', gap: '2rem', marginTop: '4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {STATS.map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--sb-reg)', fontSize: '2rem' }}>{stat.value}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted-color)', maxWidth: 120, margin: '0 auto' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
