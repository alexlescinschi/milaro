import Breadcrumbs from '@/components/layout/Breadcrumbs'
import ProductOrderForm from '@/components/catalog/ProductOrderForm'
import Link from 'next/link'

const projects: Record<string, {
  title: string; img: string; designer: string; likes: number;
  models: string; price: string; desc: string; specs: string;
  dimension?: string; color?: string;
}> = {
  'komplettausstattung-wohnung': {
    title: 'Komplette Wohnungsausstattung: Küche, Garderoben, Diele, Badezimmer',
    img: 'https://www.marya.ru/promo/home3/img/models/trento1.jpg',
    designer: 'Igor Ilyukin',
    likes: 85,
    models: 'Schrank Jazz, Schrank Stilos, Bad Dominika, Küche Trento Email',
    price: 'ab CHF 19',
    desc: 'Ein umfassender Ansatz für die gesamte Wohnung auf Basis eines bestehenden Designprojekts. Wir haben das Interieur für alle Räume umgesetzt — Küche, zwei Garderoben, Badezimmer und Diele. Das Ergebnis ist ein perfekt abgestimmtes Ensemble, in dem jedes Detail zur Einheitlichkeit beiträgt.\n\nIn der Küche installierten wir das Modell Trento mit hellen matten Fronten und elegantem Profil — ein Beispiel eleganter moderner Klassik. Im Badezimmer unterstützt das Modell Dominika dieselbe Stilistik. Für die Aufbewahrung wurden zwei Garderobensysteme Stilos mit offenen Regalen entworfen. Den Abschluss bildet die Diele mit der minimalistischen Konsole Jazz.',
    specs: 'Gesamtlösung für 4 Räume',
    dimension: 'Küche 3200 × 2400 mm',
    color: 'NCS S 0603-Y60R',
  },
  'kueche-wohnpark-april': {
    title: 'Küche für Wohnpark April',
    img: 'https://www.marya.ru/promo/home3/img/models/jazz.jpg',
    designer: 'Designbüro Milaro',
    likes: 310,
    models: 'Küche Jazz, Küche Jazz Intuit',
    price: 'ab CHF 41',
    desc: 'Eine moderne Maßküche im Wohnpark April. Der funktionale Küchenblock kombiniert matte Fronten in RAL 7042 mit natürlicher Holztextur und schafft so ein stilvolles und gemütliches Interieur.\n\nDas Highlight ist die Kochinsel mit Vitrinen aus Riffelglas, Innenbeleuchtung und Eichenböden für Wein. Sie unterstreicht die moderne Ästhetik und Funktionalität des Raums. Die Küche ist mit Einbaugeräten und durchdachten Stauraumzonen ausgestattet. Alle Haustechnik, einschließlich des Boilers, ist elegant versteckt.\n\nDie helle Arbeitsplatte und der Spritzschutz in Marmoroptik ergänzen das Design harmonisch und vereinen Minimalismus, Loft-Elemente und moderne Klassik.',
    specs: 'Küche mit Kochinsel, Einbaugeräte',
    dimension: '3361 × 2614 × 2312 mm',
    color: 'RAL 7042 Verkehrsgrau A Matt',
  },
  'minimalistische-barrierefreie-kueche': {
    title: 'Funktionale Küche mit zwei Kühlschränken',
    img: 'https://www.marya.ru/promo/home3/img/models/mix22.jpg',
    designer: 'Anna Schmidt',
    likes: 93,
    models: 'Küche Jazz Intuit',
    price: 'ab CHF 41',
    desc: 'Eine funktionale Küche für ambitionierte Hobbyköche. Mit zwei Kühlschränken und einer ergonomischen Arbeitsplanung, die kurze Wege und maximale Effizienz beim Kochen und Vorbereiten gewährleistet.\n\nOptimierte Stauraumlösungen und eine klare Raumaufteilung machen diese Küche zum Traum für jeden Koch. Die großzügige Arbeitsfläche und die durchdachte Anordnung aller Elemente ermöglichen ein komfortables Arbeiten.',
    specs: 'Küche mit zwei Kühlschränken',
    dimension: '3100 × 2500 mm',
    color: 'Modern Weiß Matt',
  },
  'einbauschrank-schlafzimmer-cashemire': {
    title: 'Einbauschrank und Kommode in sanftem Kaschmir-Ton',
    img: 'https://www.marya.ru/promo/home3/img/models/mix2.jpg',
    designer: 'Maria Berger',
    likes: 22,
    models: 'Schrank Mix 22',
    price: 'ab CHF 12',
    desc: 'Ein maßgefertigter Einbauschrank mit passender Kommode für das Schlafzimmer. Ausgeführt in einem zarten Kaschmir-Farbton, der dem Raum eine warme und beruhigende Atmosphäre verleiht.\n\nDie nahtlose Integration in die Raumarchitektur und das umfangreiche Stauraumangebot machen dieses Möbelstück zu einem funktionalen Highlight des Schlafzimmers.',
    specs: 'Einbauschrank + Kommode',
    dimension: '2600 × 2450 mm',
    color: 'Kaschmir Matt',
  },
  'kueche-wohnraum-minimalismus': {
    title: 'Küche-Wohnzimmer im Minimalismus-Stil mit Insel und Vitrine',
    img: 'https://www.marya.ru/promo/home3/img/models/avenue.jpg',
    designer: 'Thomas Frei',
    likes: 93,
    models: 'Küche Jazz Intuit',
    price: 'ab CHF 41',
    desc: 'Ein offenes Wohnküchen-Konzept, bei dem klare Linien und reduzierte Formen im Vordergrund stehen. Die zentrale Kochinsel fungiert als natürlicher Raumteiler und kommunikativer Mittelpunkt.\n\nDie Vitrine setzt elegante Akzente und bietet Platz für Geschirr und Dekoration. Große Fensterfronten lassen viel Tageslicht herein und schaffen eine Verbindung zwischen Innen- und Außenraum.',
    specs: 'Offene Küche-Wohnzimmer Kombination',
    dimension: '4200 × 2800 mm',
    color: 'Weiß Hochglanz / Eiche Natur',
  },
  'kueche-amerikanische-klassik': {
    title: 'Küche im amerikanischen Klassik-Stil mit Kochinsel',
    img: 'https://www.marya.ru/promo/home3/img/models/nicolle.jpg',
    designer: 'Evelina Abusjarowa',
    likes: 35,
    models: 'Küche Jazz Allure, Küche Kamelie',
    price: 'ab CHF 48',
    desc: 'Zurückhaltende Eleganz im Stil der amerikanischen Klassik. Im Zentrum steht eine großzügige Küche mit Kochinsel, ausgeführt mit edlen Email-Fronten in einem ruhigen Grauweiß-Ton.\n\nMessinggriffe und Vitrinen in Goldrahmen verleihen dem Interieur Charakter und Individualität. Die Kücheninsel strukturiert den Raum und bietet zusätzliche Arbeitsfläche. Das Ergebnis ist nicht nur eine schöne, sondern eine wirklich komfortable und atmosphärische Maßküche.',
    specs: 'Küche amerikanische Klassik mit Insel',
    dimension: '4090 × 2566 × 600 mm',
    color: 'RAL 9002 Grauweiß Matt',
  },
  'minzgruener-schrank': {
    title: 'Minzgrüner Schrank — frisches Design für Ihr Zuhause',
    img: 'https://www.marya.ru/promo/home3/img/models/jazz3.jpg',
    designer: 'Laura Meier',
    likes: 64,
    models: 'Schrank Integrato',
    price: 'ab CHF 20',
    desc: 'Ein auffälliger Schrank in erfrischendem Mintgrün mit klarer Linienführung. Die Farbe bringt Frische und Lebendigkeit in den Raum, ohne aufdringlich zu wirken.\n\nDie durchdachte Inneneinteilung mit variablen Regalböden, Kleiderstangen und Schubladen bietet optimalen Stauraum für Kleidung, Accessoires und mehr.',
    specs: 'Schrank Mintgrün',
    dimension: '2400 × 2300 × 600 mm',
    color: 'Mintgrün Matt',
  },
  'bueroschrank-minimalismus': {
    title: 'Minimalistischer Büroschrank — klare Formen, maximale Funktion',
    img: 'https://www.marya.ru/promo/home3/img/models/jazz3.jpg',
    designer: 'Patrick Kuhn',
    likes: 1,
    models: 'Schrank Tokio',
    price: 'ab CHF 11',
    desc: 'Ein schlichter, eleganter Büroschrank im minimalistischen Stil mit Schiebetüren. Die individuell angepasste Inneneinteilung ermöglicht eine perfekte Arbeitsorganisation.\n\nDokumente, Ordner und Büromaterialien finden ihren Platz hinter den cleanen Fronten, während der Raum ruhig und aufgeräumt wirkt.',
    specs: 'Büroschrank mit Schiebetüren',
    dimension: '2000 × 2300 × 500 mm',
    color: 'Weiß Matt',
  },
  'kueche-landhausstil': {
    title: 'Gemütliche Küche im Landhausstil mit natürlichen Materialien',
    img: 'https://www.marya.ru/promo/home3/img/models/trento1.jpg',
    designer: 'Claudia Hofer',
    likes: 19,
    models: 'Küche Trento Email, Küche Jazz',
    price: 'ab CHF 14',
    desc: 'Eine warme und einladende Landhausküche mit Holzfronten und einer Arbeitsplatte in Steinoptik. Offene Regale, viel natürliches Licht und durchdachte Stauraumlösungen schaffen eine wohnliche Atmosphäre.\n\nDie Kombination aus traditionellen Elementen und moderner Funktionalität macht diese Küche zum perfekten Treffpunkt für Familie und Freunde.',
    specs: 'Landhausküche',
    dimension: '3400 × 2500 mm',
    color: 'Creme / Eiche Rustikal',
  },
}

const similar = [
  { slug: 'komplettausstattung-wohnung', title: 'Komplettausstattung', img: 'https://www.marya.ru/promo/home3/img/models/trento1.jpg', price: 'ab CHF 19' },
  { slug: 'kueche-wohnpark-april', title: 'Küche Wohnpark April', img: 'https://www.marya.ru/promo/home3/img/models/jazz.jpg', price: 'ab CHF 41' },
  { slug: 'kueche-amerikanische-klassik', title: 'Amerikanische Klassik', img: 'https://www.marya.ru/promo/home3/img/models/nicolle.jpg', price: 'ab CHF 48' },
]

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = projects[slug]

  if (!p) {
    return (
      <>
        <Breadcrumbs items={[{ label: 'Portfolio', href: '/portfolio' }, { label: 'Projekt' }]} />
        <section className="uk-section"><div className="uk-container"><h1>Projekt nicht gefunden</h1></div></section>
      </>
    )
  }

  return (
    <>
      <Breadcrumbs items={[{ label: 'Portfolio', href: '/portfolio' }, { label: p.title }]} />

      {/* Hero area */}
      <section className="uk-section">
        <div className="uk-container">
          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            {/* Main image */}
            <div style={{ width: '58%', minWidth: 300 }}>
              <div style={{ borderRadius: '1rem', overflow: 'hidden' }}>
                <img src={p.img} alt={p.title} style={{ width: '100%', height: '32rem', objectFit: 'cover' }} />
              </div>
            </div>

            {/* Info column */}
            <div style={{ width: '38%', minWidth: 300 }}>
              <h1 style={{
                fontFamily: 'var(--sb-reg)', fontSize: '1.8rem',
                lineHeight: 1.3, marginBottom: '1rem',
              }}>
                {p.title}
              </h1>

              {/* Likes */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '1rem', color: 'var(--muted-color)', fontSize: '0.9rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                {p.likes}
              </div>

              {/* Designer */}
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ color: 'var(--muted-color)', fontSize: '0.85rem' }}>Designer: </span>
                <span style={{ fontSize: '0.85rem' }}>{p.designer}</span>
              </div>

              {/* Models & Prices */}
              <div style={{
                background: 'var(--light-color)', borderRadius: '1rem',
                padding: '1.5rem', marginBottom: '1.5rem',
              }}>
                <h3 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.1rem', marginBottom: '0.8rem' }}>
                  Verwendete Modelle
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted-color)', marginBottom: '0.5rem' }}>
                  {p.models}
                </p>
                <p style={{ fontSize: '1.1rem', color: 'var(--primary-color)', fontWeight: 500 }}>
                  {p.price}
                </p>
              </div>

              {/* CTA */}
              <button className="uk-button uk-button-primary" style={{ width: '100%' }}>
                Kosten erfragen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="uk-section uk-section-muted">
        <div className="uk-container" style={{ maxWidth: 900 }}>
          <h2 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
            Projektbeschreibung
          </h2>
          {p.desc.split('\n\n').map((para, i) => (
            <p key={i} style={{
              color: 'var(--muted-color)', lineHeight: 1.9,
              marginBottom: '1rem', fontSize: '0.95rem',
            }}>
              {para}
            </p>
          ))}

          {/* Specs */}
          <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {p.dimension && (
              <div style={{ padding: '1rem', background: 'white', borderRadius: '0.5rem', minWidth: 180 }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted-color)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Abmessungen
                </div>
                <div style={{ fontSize: '0.95rem', marginTop: '0.3rem' }}>{p.dimension}</div>
              </div>
            )}
            {p.color && (
              <div style={{ padding: '1rem', background: 'white', borderRadius: '0.5rem', minWidth: 180 }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted-color)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Farbe
                </div>
                <div style={{ fontSize: '0.95rem', marginTop: '0.3rem' }}>{p.color}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Similar projects */}
      <section className="uk-section">
        <div className="uk-container">
          <h2 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.5rem', textAlign: 'center', marginBottom: '2rem' }}>
            Ähnliche Projekte
          </h2>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {similar.filter((s) => s.slug !== slug).slice(0, 2).map((s) => (
              <Link key={s.slug} href={`/portfolio/${s.slug}`} style={{
                width: '30%', minWidth: 250, textDecoration: 'none', color: 'inherit',
              }}>
                <div style={{ borderRadius: '1rem', overflow: 'hidden', marginBottom: '0.8rem', height: '15rem' }}>
                  <img src={s.img} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--primary-color)' }}>{s.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProductOrderForm productName="Ihr Projekt" />
    </>
  )
}
