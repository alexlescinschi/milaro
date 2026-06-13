'use client'

import { useState } from 'react'
import LeadForm from '@/components/forms/LeadForm'

export default function ConsultationCTA() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section className="uk-section uk-section-primary" style={{ textAlign: 'center' }}>
        <div className="uk-container">
          <h2 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.8rem', marginBottom: '0.5rem' }}>
            Kostenloser Design-Entwurf
          </h2>
          <p style={{ marginBottom: '1.5rem', opacity: 0.9, lineHeight: 1.6, maxWidth: 600, margin: '0 auto 1.5rem' }}>
            Füllen Sie das Formular aus und Ihr persönlicher Designer erstellt
            einen individuellen Projektentwurf mit Berechnung für Sie.
          </p>
          <button onClick={() => setOpen(true)} className="uk-button uk-button-inversed" style={{ fontSize: '1rem' }}>
            Projekt anfragen
          </button>
        </div>
      </section>

      {open && (
        <div className="uk-modal open" onClick={() => setOpen(false)}>
          <div className="uk-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button className="uk-modal-close" onClick={() => setOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            <h3 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.4rem', marginBottom: '0.3rem', textAlign: 'center' }}>
              Kostenloser Design-Entwurf
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted-color)', marginBottom: '1.5rem', textAlign: 'center', lineHeight: 1.5 }}>
              Füllen Sie das Formular aus und erhalten Sie einen individuellen<br />
              Projektentwurf mit Berechnung von Ihrem persönlichen Designer.
            </p>
            <LeadForm onClose={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  )
}
