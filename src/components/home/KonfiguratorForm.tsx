'use client'

import React, { useState, useRef } from 'react'
import Link from 'next/link'

type Shape = 'gerade' | 'l-form' | 'u-form'
type Material = 'pvc' | 'kunststoff' | 'email' | 'alvic' | 'furnier' | 'massivholz'

const SHAPES: { id: Shape; label: string; svg: React.ReactNode }[] = [
  {
    id: 'gerade',
    label: 'Gerade',
    svg: (
      <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
        <rect x="4" y="20" width="72" height="20" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <rect x="4" y="38" width="72" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4"/>
      </svg>
    ),
  },
  {
    id: 'l-form',
    label: 'L-Form',
    svg: (
      <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
        <path d="M4 4 H30 V56 H72 V36 H30" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
        <path d="M4 20 H30" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
        <path d="M48 36 H72" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
      </svg>
    ),
  },
  {
    id: 'u-form',
    label: 'U-Form',
    svg: (
      <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
        <path d="M4 4 H22 V56 H58 V4 H76 V20 H58" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
        <path d="M4 20 H22" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
        <path d="M22 56 H58" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
      </svg>
    ),
  },
]

const MATERIALS: { id: Material; label: string; desc: string }[] = [
  { id: 'pvc',        label: 'PVC-Folie',   desc: 'Robust & pflegeleicht' },
  { id: 'kunststoff', label: 'Kunststoff',   desc: 'Hochglanz, kratzfest' },
  { id: 'email',      label: 'Email-Lack',   desc: 'Matt & seidenmatt' },
  { id: 'alvic',      label: 'Alvic Luxe',   desc: 'Premium Soft-Touch' },
  { id: 'furnier',    label: 'Furnier',       desc: 'Echtholz-Optik' },
  { id: 'massivholz', label: 'Massivholz',   desc: 'Natürlich & langlebig' },
]

function DimInput({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <label style={{ fontSize: '0.8rem', color: 'var(--muted-color)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        {label}, mm
      </label>
      <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid var(--border-color)', borderRadius: '0.5rem', overflow: 'hidden', background: 'white' }}>
        <button
          type="button"
          onClick={() => onChange(Math.max(600, value - 100))}
          style={{
            width: 42, height: 48, border: 'none', background: 'none', cursor: 'pointer',
            fontSize: '1.3rem', color: 'var(--muted-color)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#f5f5f5')}
          onMouseLeave={e => (e.currentTarget.style.background = 'none')}
        >
          −
        </button>
        <input
          type="number"
          value={value}
          min={600}
          max={6000}
          step={100}
          onChange={e => onChange(Math.max(600, Math.min(6000, Number(e.target.value))))}
          style={{
            flex: 1, textAlign: 'center', border: 'none', outline: 'none',
            fontSize: '1.1rem', fontFamily: 'var(--sb-reg)', fontWeight: 700,
            padding: '0.75rem 0', background: 'transparent', minWidth: 0,
          }}
        />
        <button
          type="button"
          onClick={() => onChange(Math.min(6000, value + 100))}
          style={{
            width: 42, height: 48, border: 'none', background: 'none', cursor: 'pointer',
            fontSize: '1.3rem', color: 'var(--muted-color)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#f5f5f5')}
          onMouseLeave={e => (e.currentTarget.style.background = 'none')}
        >
          +
        </button>
      </div>
    </div>
  )
}

interface Props {
  compact?: boolean
}

export default function KonfiguratorForm({ compact }: Props) {
  const [shape, setShape] = useState<Shape>('gerade')
  const [side1, setSide1] = useState(2400)
  const [side2, setSide2] = useState(1600)
  const [side3, setSide3] = useState(1200)
  const [material, setMaterial] = useState<Material | null>(null)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [comment, setComment] = useState('')
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return
    setSending(true)
    await new Promise(r => setTimeout(r, 900))
    setSending(false)
    setSent(true)
  }

  const shapeLabel = SHAPES.find(s => s.id === shape)?.label ?? ''
  const materialLabel = MATERIALS.find(m => m.id === material)?.label ?? '—'

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: compact ? '0' : '2rem 1.5rem 5rem' }}>
      <div ref={formRef}>
        <h2 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{
            width: 28, height: 28, borderRadius: '50%', background: 'var(--primary-color)',
            color: 'white', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.8rem', fontWeight: 700, flexShrink: 0,
          }}>1</span>
          Küchenform wählen
        </h2>
        <div className="kfg-shapes" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2.5rem' }}>
          {SHAPES.map(s => {
            const active = shape === s.id
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setShape(s.id)}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  gap: '0.75rem', padding: '1.5rem 1rem', border: `2px solid ${active ? 'var(--primary-color)' : 'var(--border-color)'}`,
                  borderRadius: '0.75rem', background: active ? 'rgba(227,30,36,0.04)' : 'white',
                  cursor: 'pointer', transition: 'all 0.2s',
                  color: active ? 'var(--primary-color)' : 'var(--main-color)',
                }}
              >
                {s.svg}
                <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{s.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      <h2 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{
          width: 28, height: 28, borderRadius: '50%', background: 'var(--primary-color)',
          color: 'white', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '0.8rem', fontWeight: 700, flexShrink: 0,
        }}>2</span>
        Abmessungen eingeben
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: shape === 'gerade' ? '1fr' : shape === 'l-form' ? '1fr 1fr' : '1fr 1fr 1fr',
        gap: '1rem',
        background: 'var(--light-color)', padding: '1.5rem', borderRadius: '0.75rem',
        border: '1px solid var(--border-color)', marginBottom: '2.5rem',
      }}>
        <DimInput label="Seite 1" value={side1} onChange={setSide1} />
        {(shape === 'l-form' || shape === 'u-form') && (
          <DimInput label="Seite 2" value={side2} onChange={setSide2} />
        )}
        {shape === 'u-form' && (
          <DimInput label="Seite 3" value={side3} onChange={setSide3} />
        )}
      </div>
      <p style={{ fontSize: '0.78rem', color: 'var(--muted-color)', marginTop: '-1.5rem', marginBottom: '2.5rem' }}>
        Ungefähre Masse genügen — unser Designer vermisst den Raum kostenlos vor Ort.
      </p>

      <h2 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{
          width: 28, height: 28, borderRadius: '50%', background: 'var(--primary-color)',
          color: 'white', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '0.8rem', fontWeight: 700, flexShrink: 0,
        }}>3</span>
        Oberfläche / Material
      </h2>
      <div className="kfg-materials" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '2.5rem' }}>
        {MATERIALS.map(m => {
          const active = material === m.id
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => setMaterial(m.id)}
              style={{
                textAlign: 'left', padding: '1rem 1.1rem',
                border: `2px solid ${active ? 'var(--primary-color)' : 'var(--border-color)'}`,
                borderRadius: '0.75rem', background: active ? 'rgba(227,30,36,0.04)' : 'white',
                cursor: 'pointer', transition: 'all 0.2s',
              }}
            >
              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: active ? 'var(--primary-color)' : 'var(--main-color)', marginBottom: '0.2rem' }}>
                {m.label}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--muted-color)' }}>{m.desc}</div>
            </button>
          )
        })}
      </div>

      <h2 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{
          width: 28, height: 28, borderRadius: '50%', background: 'var(--primary-color)',
          color: 'white', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '0.8rem', fontWeight: 700, flexShrink: 0,
        }}>4</span>
        Ihre Kontaktdaten
      </h2>

      {sent ? (
        <div style={{
          background: 'var(--light-color)', borderRadius: '1rem', padding: '3rem 2rem',
          textAlign: 'center', border: '1px solid var(--border-color)',
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
          <h3 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.4rem', marginBottom: '0.5rem' }}>Anfrage erhalten!</h3>
          <p style={{ color: 'var(--muted-color)', lineHeight: 1.7 }}>
            Wir melden uns innerhalb von 24 Stunden bei Ihnen.<br />
            Ihr Designerteam von milaro.ch
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{
            background: 'var(--light-color)', borderRadius: '0.75rem', padding: '1.25rem 1.5rem',
            marginBottom: '1.5rem', border: '1px solid var(--border-color)',
            display: 'flex', gap: '2rem', flexWrap: 'wrap',
          }}>
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--muted-color)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>Form</div>
              <div style={{ fontWeight: 700 }}>{shapeLabel}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--muted-color)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>Seite 1</div>
              <div style={{ fontWeight: 700 }}>{side1} mm</div>
            </div>
            {(shape === 'l-form' || shape === 'u-form') && (
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--muted-color)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>Seite 2</div>
                <div style={{ fontWeight: 700 }}>{side2} mm</div>
              </div>
            )}
            {shape === 'u-form' && (
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--muted-color)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>Seite 3</div>
                <div style={{ fontWeight: 700 }}>{side3} mm</div>
              </div>
            )}
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--muted-color)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>Material</div>
              <div style={{ fontWeight: 700 }}>{materialLabel}</div>
            </div>
          </div>

          <div className="kfg-contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--muted-color)', marginBottom: '0.4rem' }}>
                Ihr Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Max Müller"
                style={{
                  width: '100%', padding: '0.8rem 1rem', border: '1.5px solid var(--border-color)',
                  borderRadius: '0.5rem', fontSize: '0.95rem', outline: 'none',
                  transition: 'border-color 0.2s', boxSizing: 'border-box',
                }}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--primary-color)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-color)')}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--muted-color)', marginBottom: '0.4rem' }}>
                Telefon / E-Mail *
              </label>
              <input
                type="text"
                required
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="+41 77 ..."
                style={{
                  width: '100%', padding: '0.8rem 1rem', border: '1.5px solid var(--border-color)',
                  borderRadius: '0.5rem', fontSize: '0.95rem', outline: 'none',
                  transition: 'border-color 0.2s', boxSizing: 'border-box',
                }}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--primary-color)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-color)')}
              />
            </div>
          </div>
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--muted-color)', marginBottom: '0.4rem' }}>
              Kommentar (optional)
            </label>
            <textarea
              value={comment}
              onChange={e => setComment(e.target.value)}
              placeholder="Besondere Wünsche, Lieferort, bevorzugte Rückrufzeit …"
              rows={3}
              style={{
                width: '100%', padding: '0.8rem 1rem', border: '1.5px solid var(--border-color)',
                borderRadius: '0.5rem', fontSize: '0.95rem', outline: 'none', resize: 'vertical',
                transition: 'border-color 0.2s', boxSizing: 'border-box', fontFamily: 'inherit',
              }}
              onFocus={e => (e.currentTarget.style.borderColor = 'var(--primary-color)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-color)')}
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="uk-button uk-button-primary"
            style={{ width: '100%', fontSize: '1rem', padding: '0.9rem', opacity: sending ? 0.7 : 1 }}
          >
            {sending ? 'Wird gesendet…' : 'Kostenlose Beratung anfragen'}
          </button>
          <p style={{ fontSize: '0.75rem', color: 'var(--muted-color)', textAlign: 'center', marginTop: '0.75rem' }}>
            Mit dem Absenden stimmen Sie unserer{' '}
            <Link href="#" style={{ color: 'var(--muted-color)', textDecoration: 'underline' }}>
              Datenschutzerklärung
            </Link>{' '}
            zu. Kein Spam — versprochen.
          </p>
        </form>
      )}

      <div className="kfg-stats" style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem',
        marginTop: '3rem', padding: '1.5rem', background: 'var(--light-color)',
        borderRadius: '1rem', border: '1px solid var(--border-color)', textAlign: 'center',
      }}>
        {[
          { icon: '⚡', title: 'Ab 5 Tagen', desc: 'Lieferzeit ab Fabrik' },
          { icon: '🛡', title: '20 Jahre Garantie', desc: 'Auf alle Möbel' },
          { icon: '📐', title: 'Kostenlos', desc: 'Design & Ausmessung' },
        ].map(item => (
          <div key={item.title}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.3rem' }}>{item.icon}</div>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.15rem' }}>{item.title}</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--muted-color)' }}>{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}