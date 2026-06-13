'use client'

import { useState } from 'react'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { SITE_CONFIG } from '@/lib/constants'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.get('name'),
        email: form.get('email'),
        phone: form.get('phone'),
        message: form.get('message'),
      }),
    })
    setSent(true)
  }

  return (
    <>
      <Breadcrumbs items={[{ label: 'Kontakt' }]} />
      <section className="uk-section uk-section-large">
        <div className="uk-container">
          <h1 className="section-heading">Kontakt</h1>
          <div className="uk-grid" style={{ gap: '3rem', marginTop: '2rem' }}>
            <div className="uk-width-1-2" style={{ width: '50%' }}>
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.2rem' }}>Telefon / WhatsApp</h3>
                <p><a href={`tel:${SITE_CONFIG.phone}`} style={{ color: 'var(--primary-color)' }}>{SITE_CONFIG.phone}</a></p>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.2rem' }}>E-Mail</h3>
                <p><a href={`mailto:${SITE_CONFIG.email}`} style={{ color: 'var(--primary-color)' }}>{SITE_CONFIG.email}</a></p>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.2rem' }}>Öffnungszeiten</h3>
                <p style={{ color: 'var(--muted-color)' }}>{SITE_CONFIG.hours}</p>
              </div>
            </div>
            <div className="uk-width-1-2" style={{ width: '50%' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '3rem' }}>
                  <h3 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.5rem' }}>Vielen Dank!</h3>
                  <p style={{ color: 'var(--muted-color)' }}>Wir melden uns in Kürze.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="uk-form-controls">
                    <label className="uk-form-label">Name *</label>
                    <input className="uk-input" name="name" required />
                  </div>
                  <div className="uk-form-controls">
                    <label className="uk-form-label">E-Mail *</label>
                    <input className="uk-input" type="email" name="email" required />
                  </div>
                  <div className="uk-form-controls">
                    <label className="uk-form-label">Telefon</label>
                    <input className="uk-input" type="tel" name="phone" />
                  </div>
                  <div className="uk-form-controls">
                    <label className="uk-form-label">Nachricht *</label>
                    <textarea className="uk-input" name="message" rows={4} required style={{ resize: 'vertical' }} />
                  </div>
                  <button type="submit" className="uk-button uk-button-primary">
                    Senden
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
