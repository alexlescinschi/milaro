'use client'

import { useState } from 'react'

const CITIES = [
  'Zürich', 'Bern', 'Basel', 'Genf', 'Lausanne', 'Winterthur', 'Luzern',
  'St. Gallen', 'Lugano', 'Biel', 'Thun', 'Köniz', 'La Chaux-de-Fonds',
  'Fribourg', 'Schaffhausen', 'Chur', 'Neuchâtel', 'Vernier', 'Zug',
  'Rapperswil-Jona', 'Aarau', 'Baden', 'Bellinzona', 'Burgdorf',
  'Frauenfeld', 'Kreuzlingen', 'Montreux', 'Olten', 'Sion', 'Solothurn',
  'Uster', 'Wil', 'Yverdon-les-Bains', 'Bülach', 'Dietikon', 'Dubendorf',
  'Emmen', 'Gossau', 'Horgen', 'Kloten', 'Littau', 'Muri', 'Nyon',
  'Onex', 'Pratteln', 'Rheinfelden', 'Steffisburg', 'Wädenswil',
  'Wettingen', 'Zollikon',
]

export default function LeadForm({ onClose }: { onClose?: () => void }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [sending, setSending] = useState(false)
  const [done, setDone] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreed) return
    setSending(true)
    try {
      await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, city }),
      })
      setDone(true)
    } catch {
      alert('Fehler beim Senden. Bitte versuchen Sie es erneut.')
    } finally {
      setSending(false)
    }
  }

  if (done) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem 0' }}>
        <div style={{
          width: 56, height: 56, borderRadius: '50%', background: 'var(--primary-color)',
          color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 1.2rem', fontSize: '1.6rem',
        }}>
          ✓
        </div>
        <h3 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
          Vielen Dank für Ihre Anfrage!
        </h3>
        <p style={{ color: 'var(--muted-color)', fontSize: '0.9rem', lineHeight: 1.6 }}>
          Unser Designer wird sich in Kürze bei Ihnen melden,<br />
          um die Details Ihres Projekts zu besprechen.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '1.1rem' }}>
        <label
          style={{
            display: 'block', fontSize: '0.8rem', color: 'var(--muted-color)',
            marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.05em',
          }}
        >
          Name
        </label>
        <input
          type="text"
          placeholder="Ihr Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            width: '100%', padding: '0.75rem 1rem', fontSize: '0.95rem',
            border: '1px solid var(--border-color)', borderRadius: '0.45rem',
            outline: 'none', transition: 'border-color 0.2s',
          }}
        />
      </div>

      <div style={{ marginBottom: '1.1rem' }}>
        <label
          style={{
            display: 'block', fontSize: '0.8rem', color: 'var(--muted-color)',
            marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.05em',
          }}
        >
          Telefon
        </label>
        <div style={{ display: 'flex', gap: '0.4rem' }}>
          <div style={{
            display: 'flex', alignItems: 'center', padding: '0 0.7rem',
            border: '1px solid var(--border-color)', borderRadius: '0.45rem',
            fontSize: '0.9rem', background: 'var(--light-color)', flexShrink: 0,
          }}>
            +41
          </div>
          <input
            type="tel"
            placeholder="00 000 00 00"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            style={{
              width: '100%', padding: '0.75rem 1rem', fontSize: '0.95rem',
              border: '1px solid var(--border-color)', borderRadius: '0.45rem',
              outline: 'none', transition: 'border-color 0.2s',
            }}
          />
        </div>
      </div>

      <div style={{ marginBottom: '1.1rem' }}>
        <label
          style={{
            display: 'block', fontSize: '0.8rem', color: 'var(--muted-color)',
            marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.05em',
          }}
        >
          Stadt
        </label>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
          style={{
            width: '100%', padding: '0.75rem 1rem', fontSize: '0.95rem',
            border: '1px solid var(--border-color)', borderRadius: '0.45rem',
            outline: 'none', background: 'white', cursor: 'pointer',
            appearance: 'none',
            backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23757575\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")',
            backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center',
            backgroundSize: '1rem',
          }}
        >
          <option value="">Stadt auswählen</option>
          {CITIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            required
            style={{ marginTop: '0.15rem', width: 14, height: 14, accentColor: 'var(--primary-color)', flexShrink: 0 }}
          />
          <span style={{ fontSize: '0.72rem', color: 'var(--muted-color)', lineHeight: 1.5 }}>
            Ich stimme der Verarbeitung meiner personenbezogenen Daten gemäss der{' '}
            <a href="#" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>Datenschutzerklärung</a>{' '}
            und den{' '}
            <a href="#" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>AGB</a> zu.
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={sending || !agreed}
        style={{
          width: '100%', padding: '0.8rem', fontSize: '0.9rem',
          fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.07em',
          background: sending || !agreed ? '#ccc' : 'var(--primary-color)',
          color: 'white', border: 'none', borderRadius: '0.45rem',
          cursor: sending || !agreed ? 'not-allowed' : 'pointer',
          transition: 'all 0.2s',
        }}
      >
        {sending ? 'Wird gesendet…' : 'Anfrage senden'}
      </button>
    </form>
  )
}
