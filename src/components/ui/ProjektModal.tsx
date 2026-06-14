'use client'

import LeadForm from '@/components/forms/LeadForm'

interface Props {
  open: boolean
  onClose: () => void
}

export default function ProjektModal({ open, onClose }: Props) {
  if (!open) return null

  return (
    <div className="uk-modal open" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'white',
          borderRadius: '1.2rem',
          width: '90%',
          maxWidth: 780,
          position: 'relative',
          maxHeight: '92vh',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '1.2rem', right: '1.2rem',
            background: 'rgba(255,255,255,0.9)', border: 'none', cursor: 'pointer',
            width: 36, height: 36, borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        <div style={{
          position: 'relative', height: 200, borderRadius: '1.2rem 1.2rem 0 0', overflow: 'hidden', flexShrink: 0,
        }}>
          <img
            src="https://www.marya.ru/promo/home3/img/models/mix22.jpg"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 100%)',
          }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem 2.5rem' }}>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
              Kostenlos & unverbindlich
            </p>
            <h2 style={{ fontFamily: 'var(--sb-reg)', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: 'white', fontWeight: 600, lineHeight: 1.2, margin: 0 }}>
              Erhalten Sie Ihren<br />kostenlosen Design-Entwurf
            </h2>
          </div>
        </div>

        <div style={{ padding: '2.2rem 2.5rem' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--muted-color)', marginBottom: '1.8rem', lineHeight: 1.6 }}>
            Füllen Sie das Formular aus und erhalten Sie ein individuelles Möbelprojekt von Ihrem persönlichen Designer — kostenlos und unverbindlich.
          </p>
          <LeadForm onClose={onClose} />
        </div>
      </div>
    </div>
  )
}