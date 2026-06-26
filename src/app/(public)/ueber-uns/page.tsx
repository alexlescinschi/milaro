'use client'

import { useState } from 'react'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import ProjektModal from '@/components/ui/ProjektModal'

const BENEFITS = [
  { title: 'Schweizer Qualität & Nähe', text: 'Wir produzieren lokal in der Schweiz. Das bedeutet kurze Wege, persönliche Ansprechpartner und eine Qualität, auf die Sie sich verlassen können. Wir wählen unsere Materialien mit grösster Sorgfalt aus.' },
  { title: 'Handwerk mit Gewissen', text: 'Ehrlichkeit steht bei uns an erster Stelle. Wir beraten Sie transparent, planen realistisch und arbeiten so sauber, als würden wir für unser eigenes Zuhause bauen. Bei uns gibt es keine halben Sachen.' },
  { title: 'Massarbeit statt Standard', text: 'Jedes Projekt ist ein Unikat. Wir hören Ihnen wirklich zu, verstehen Ihre Bedürfnisse und schaffen massgeschneiderte Lösungen, die perfekt zu Ihrem Alltag passen.' },
  { title: 'Frischer Wind & moderne Ideen', text: 'Als modernes Unternehmen verbinden wir traditionelle Werte mit zeitgemässen Designs und innovativer Funktionalität. Wir bringen frische Ideen in Ihre Räume.' },
]

export default function UeberUnsPage() {
  const [formOpen, setFormOpen] = useState(false)

  return (
    <>
      <Breadcrumbs items={[{ label: 'Über uns' }]} />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', height: '32rem', overflow: 'hidden', marginBottom: '5rem' }}>
        <img
          src="/images/production/1.jpg"
          alt="Milaro Handwerk"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 100%)',
          display: 'flex', alignItems: 'center',
        }}>
          <div className="uk-container">
            <h1 style={{
              fontFamily: 'var(--sb-reg)', fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              color: 'white', margin: '0 0 1rem', lineHeight: 1.15, maxWidth: 650,
            }}>
              Wo Handwerk auf Herz trifft –<br />Willkommen bei Milaro.
            </h1>
            <p style={{
              color: 'rgba(255,255,255,0.8)', margin: 0, maxWidth: 520,
              lineHeight: 1.7, fontSize: '1.05rem',
            }}>
              Premium-Küchen und Massmöbel, gefertigt mit Liebe, Präzision und reinem Gewissen in der Schweiz.
            </p>
          </div>
        </div>
      </section>

      {/* ── Unsere Geschichte ─────────────────────────────────────── */}
      <section style={{ marginBottom: '5rem' }}>
        <div className="uk-container">
          <div className="ueber-uns-story" style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}>
            <div style={{ flex: '1 1 50%', minWidth: 300 }}>
              <h2 style={{
                fontFamily: 'var(--sb-reg)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                margin: '0 0 1.5rem', lineHeight: 1.25,
              }}>
                Ein Zuhause entsteht nicht am Fliessband.
              </h2>
              <div style={{ color: 'var(--muted-color)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                <p style={{ marginTop: 0 }}>
                  In einer Welt, die immer schneller und anonymer wird, haben wir uns gefragt: Wo bleibt die Seele der Dinge, die uns täglich umgeben? Ein Zuhause ist mehr als nur ein Ort mit Möbeln. Es ist der Ort, an dem wir leben, lachen und zusammenkommen. Die Küche ist das Herz dieses Zuhauses.
                </p>
                <p>
                  Als junges, dynamisches Team haben wir Milaro mit einer klaren Vision gegründet: Wir wollen dem Schreinerhandwerk in der Schweiz seine Ehrlichkeit zurückgeben. Wir fertigen keine Massenware. Jedes Möbelstück, das unsere Werkstatt verlässt, wird von uns mit grosser Sorgfalt geplant und von Hand veredelt. Für uns ist diese Arbeit keine Pflicht – sie ist unsere Leidenschaft. Wir arbeiten mit Liebe zum Detail, damit Sie sich in Ihren vier Wänden rundum wohlfühlen.
                </p>
              </div>
            </div>
            <div style={{ flex: '1 1 50%', minWidth: 300, borderRadius: '0.75rem', overflow: 'hidden' }}>
              <img
                src="/images/production/2-4.jpg"
                alt="Detail Handwerk"
                style={{ width: '100%', height: 'auto', aspectRatio: '3/4', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Warum Milaro? ─────────────────────────────────────────── */}
      <section style={{ marginBottom: '5rem', background: 'var(--light-color)', padding: '5rem 0' }}>
        <div className="uk-container">
          <h2 style={{
            fontFamily: 'var(--sb-reg)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            margin: '0 0 3rem', textAlign: 'center',
          }}>
            Was uns auszeichnet: Unser Versprechen an Sie.
          </h2>
          <div className="ueber-uns-benefits" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            {BENEFITS.map((item, i) => (
              <div key={i} style={{
                flex: '1 1 calc(50% - 1rem)', minWidth: 280,
                background: 'white', borderRadius: '0.75rem', padding: '1.75rem',
                border: '1px solid var(--border-color)',
              }}>
                <h3 style={{
                  fontFamily: 'var(--sb-reg)', fontSize: '1.1rem', fontWeight: 700,
                  margin: '0 0 0.6rem',
                }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--muted-color)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Das Milaro-Team ───────────────────────────────────────── */}
      <section style={{ marginBottom: '5rem' }}>
        <div className="uk-container">
          <div className="ueber-uns-team" style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}>
            <div style={{ flex: '1 1 50%', minWidth: 300, borderRadius: '0.75rem', overflow: 'hidden' }}>
              <img
                src="/images/zusammenarbeit/team/1.jpg"
                alt="Milaro Team"
                style={{ width: '100%', height: 'auto', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{ flex: '1 1 50%', minWidth: 300 }}>
              <h2 style={{
                fontFamily: 'var(--sb-reg)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                margin: '0 0 1.5rem', lineHeight: 1.25,
              }}>
                Die Gesichter hinter Ihrem Wohntraum.
              </h2>
              <p style={{ color: 'var(--muted-color)', lineHeight: 1.8, fontSize: '0.95rem', margin: 0 }}>
                Wir sind ein eingespieltes Team, das sich gegenseitig ergänzt und dieselbe Philosophie teilt: Qualität ohne Kompromisse. Vom ersten Entwurf bis zur finalen Montage begleiten wir Sie mit Fachkompetenz, einem offenen Ohr und viel Herzblut.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: 'var(--light-color)', textAlign: 'center' }}>
        <div className="uk-container">
          <h2 style={{ fontFamily: 'var(--sb-reg)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', margin: '0 0 1rem' }}>
            Bereit für Ihr Traumprojekt?
          </h2>
          <p style={{ color: 'var(--muted-color)', margin: '0 0 2rem', fontSize: '1rem' }}>
            Lassen Sie uns gemeinsam Ihre Ideen verwirklichen.
          </p>
          <button
            onClick={() => setFormOpen(true)}
            style={{
              display: 'inline-block', padding: '0.85rem 2.5rem',
              fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.04em',
              background: 'var(--primary-color)', color: 'white',
              border: 'none', borderRadius: '0.4rem', cursor: 'pointer',
            }}
          >
            Projekt bestellen
          </button>
        </div>
      </section>

      <ProjektModal open={formOpen} onClose={() => setFormOpen(false)} />

      <style>{`
        @media (max-width: 768px) {
          .ueber-uns-story, .ueber-uns-team { flex-wrap: wrap !important; gap: 2rem !important; }
          .ueber-uns-story > *:nth-child(2), .ueber-uns-team > *:nth-child(1) { order: -1; }
        }
        @media (max-width: 640px) {
          .ueber-uns-benefits > div { flex: 1 1 100% !important; }
        }
      `}</style>
    </>
  )
}
