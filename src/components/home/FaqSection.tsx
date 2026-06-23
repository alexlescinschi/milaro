'use client'

import { useState } from 'react'

const FAQ = [
  {
    q: 'Wie lange dauert die Fertigung einer Küche?',
    a: 'Die Fertigungszeit hängt vom gewählten Material und der Komplexität des Projekts ab. In der Regel beträgt sie ab 5 Werktagen — bei PVC-Folie, Kunststoff oder Akryl. Bei Fronten aus Massivholz oder MDF mit Email-Lack kann es bis zu 20 Werktage dauern. Dank unseres vollständigen Produktionszyklus können wir Aufträge schnell und in höchster Qualität ausführen.',
  },
  {
    q: 'Wie kann ich eine Küche zum günstigeren Preis realisieren?',
    a: 'Der Gesamtpreis setzt sich aus Grösse, Komplexität und Oberflächenmaterial zusammen. Um das Budget zu optimieren, empfiehlt sich ein Gespräch mit unserem Designer — er zeigt Ihnen, welche Materialien und Beschläge das beste Preis-Leistungs-Verhältnis bieten, ohne Abstriche bei der Qualität. PVC-Folie beispielsweise überzeugt mit sehr guter Verschleissfestigkeit zu attraktiven Konditionen.',
  },
  {
    q: 'Ich brauche nicht nur Möbelmontage — auch Elektroinstallation, Beleuchtung und Sanitäranschlüsse. Wie funktioniert das?',
    a: 'Wir bieten Komplettlösungen aus einer Hand: Möbelmontage, Einbau von Haushaltsgeräten, Elektroinstallation inklusive LED-Beleuchtung sowie Sanitäranschlüsse. Unsere Monteure haben langjährige Erfahrung und berücksichtigen alle Kundenwünsche bis ins letzte Detail.',
  },
  {
    q: 'Welches Frontenmaterial ist das beste?',
    a: 'Jedes Material hat seine Stärken — die Wahl hängt von Ihrem Lebensstil, der Nutzungsintensität und Ihren Vorlieben ab. MDF mit PVC-Folie ist praktisch, pflegeleicht und belastbar. Email-Lack ist hochwertiger, langlebiger und bietet maximale Designfreiheit. Massivholz ist die ökologische Premiumwahl mit natürlicher Optik. Unsere Designer helfen Ihnen, das perfekte Material für Ihre Küche zu finden.',
  },
  {
    q: 'Gibt es eine Garantie auf die Möbel?',
    a: 'Ja — wir gewähren bis zu 20 Jahre Garantie auf unsere Möbel. Wir verwenden ausschliesslich hochwertige Materialien und europäische Beschläge (80 000+ Zyklen). Die genauen Garantiebedingungen werden im Vertrag festgehalten.',
  },
  {
    q: 'Wie läuft der Bestellprozess ab?',
    a: 'Sie kontaktieren uns per Telefon, E-Mail oder über unser Formular. Ein Designer vereinbart einen kostenlosen Beratungs- und Ausmesstermin bei Ihnen vor Ort. Anschliessend erhalten Sie ein 3D-Projekt und ein individuelles Angebot. Nach Ihrer Freigabe starten Produktion und Lieferung — alles aus einer Hand.',
  },
  {
    q: 'Ich möchte eine Küche in einem ungewöhnlichen Stil — ist das möglich?',
    a: 'Absolut. Ein individuelles Küchendesign ist unser Kerngeschäft. Unsere Designer nutzen jeden Quadratzentimeter effizient und erarbeiten ein Projekt, das auf jede Besonderheit des Raums eingeht. Wir fertigen Küchen aller Art — von geradlinig bis zu Radius- und L-Form-Lösungen. Langjährige Erfahrung in der Möbelbranche ermöglicht uns, auch aussergewöhnliche Küchenwelten zu realisieren.',
  },
  {
    q: 'Was bedeutet „Laufmeter" bei Küchen?',
    a: 'Ein Laufmeter bezeichnet einen 100 cm langen Abschnitt des Küchenmöbelsystems entlang der Wand — mit allen dazugehörigen Unter- und Oberschränken. Bei einer Wandlänge von 200 cm benötigen Sie beispielsweise 2 Laufmeter Küche. Dieses Mass dient als Grundlage für die erste Preiskalkulation.',
  },
  {
    q: 'Welche Materialien und Beschläge werden bei der Fertigung verwendet?',
    a: 'Für den Korpus verwenden wir Spanplatten der Klasse E1. Fronten können aus MDF mit verschiedenen Oberflächen gefertigt werden — Acryl, PVC-Folie, Kunststoff oder Email (Hochglanz oder Matt) — sowie aus Massivholz oder Furnier. Für Beschläge setzen wir je nach Ihren Wünschen auf bewährte Marken wie Blum, Hettich oder Boyard.',
  },
  {
    q: 'Was sind die Vorteile einer MDF-Küche?',
    a: 'MDF-Küchen überzeugen durch Robustheit, Feuchtigkeits- und Verformungsbeständigkeit sowie eine grosse Auswahl an Oberflächen und Farben. Sie sind eine stilvolle und attraktive Lösung für jedes Interieur — mit kurzer Fertigungszeit und sehr gutem Preis-Leistungs-Verhältnis.',
  },
  {
    q: 'Welche Vorteile hat eine Massivholz-Küche?',
    a: 'Massivholzküchen bestechen durch hohe Festigkeit und Langlebigkeit und verleihen dem Interieur eine elegante, klassische Note. Bei richtiger Pflege können sie 15–20 Jahre und länger halten. Massivholz ist zudem ökologisch unbedenklich und wertet jeden Wohnraum auf.',
  },
  {
    q: 'Fertigen Sie auch Küchen nach Sondermass?',
    a: 'Darauf sind wir spezialisiert. Wir passen jede Küche exakt an den individuellen Stil und die Masse Ihres Raums an — inklusive schwieriger Ecken, Nischen und unregelmässiger Grundrisse. Ziel ist immer ein komfortabler, funktionaler Küchenraum, der perfekt zu Ihrem Alltag passt.',
  },
]

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(prev => prev === i ? null : i)

  return (
    <section style={{ padding: '5rem 0', background: 'var(--light-color)' }}>
      <div className="uk-container">
        <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>

          {/* Left — title */}
          <div style={{ position: 'sticky', top: '6rem' }}>
            <p style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--primary-color)', marginBottom: '0.6rem' }}>FAQ</p>
            <h2 style={{ fontFamily: 'var(--sb-reg)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
              Häufig gestellte Fragen
            </h2>
            <p style={{ color: 'var(--muted-color)', lineHeight: 1.7, fontSize: '0.9rem' }}>
              Haben Sie weitere Fragen? Unser Team berät Sie gerne — kostenlos und unverbindlich.
            </p>
            <a
              href="/kontakt"
              style={{
                display: 'inline-block', marginTop: '1.25rem',
                padding: '0.6rem 1.4rem', border: '1.5px solid var(--primary-color)',
                borderRadius: '0.4rem', color: 'var(--primary-color)',
                fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none',
                textTransform: 'uppercase', letterSpacing: '0.04em',
              }}
            >
              Kontakt aufnehmen
            </a>
          </div>

          {/* Right — accordion */}
          <div>
            {FAQ.map((item, i) => {
              const isOpen = open === i
              return (
                <div
                  key={i}
                  style={{
                    borderBottom: '1px solid var(--border-color)',
                    background: 'transparent',
                  }}
                >
                  <button
                    onClick={() => toggle(i)}
                    style={{
                      width: '100%', textAlign: 'left', background: 'none', border: 'none',
                      cursor: 'pointer', padding: '1.25rem 0',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      gap: '1rem',
                    }}
                  >
                    <span style={{
                      fontFamily: 'var(--sb-reg)', fontSize: '1rem', fontWeight: 600,
                      color: 'var(--main-color)', lineHeight: 1.4,
                    }}>
                      {item.q}
                    </span>
                    <span style={{
                      flexShrink: 0, width: 28, height: 28, borderRadius: '50%',
                      border: '1.5px solid var(--border-color)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: isOpen ? 'var(--primary-color)' : 'var(--muted-color)',
                      transition: 'transform 0.25s, color 0.2s',
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                    }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 5v14M5 12h14"/>
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <p style={{
                      color: 'var(--muted-color)', lineHeight: 1.8, fontSize: '0.9rem',
                      paddingBottom: '1.25rem', margin: 0,
                    }}>
                      {item.a}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .faq-grid { grid-template-columns: 1fr !important; }
          .faq-grid > div:first-child { position: static !important; }
        }
      `}</style>
    </section>
  )
}
