'use client'

import { useState } from 'react'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

export default function B2BPage() {
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    await fetch('/api/b2b', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.get('name'),
        company: form.get('company'),
        email: form.get('email'),
        phone: form.get('phone'),
        message: form.get('message'),
      }),
    })
    setSent(true)
  }

  return (
    <>
      <Breadcrumbs items={[{ label: 'Zusammenarbeit' }]} />
      <section className="uk-section uk-section-large">
        <div className="uk-container" style={{ maxWidth: 800 }}>
          <h1 className="section-heading">Zusammenarbeit</h1>
          <p style={{ textAlign: 'center', color: 'var(--muted-color)', marginBottom: '3rem' }}>
            Werden Sie Partner von milaro.ch. Wir freuen uns auf Ihre Nachricht.
          </p>

          {sent ? (
            <div style={{ textAlign: 'center', padding: '3rem' }}>
              <h3 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.5rem' }}>Vielen Dank!</h3>
              <p style={{ color: 'var(--muted-color)' }}>Wir melden uns in Kürze bei Ihnen.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="uk-form-controls">
                <label className="uk-form-label">Name *</label>
                <input className="uk-input" name="name" required />
              </div>
              <div className="uk-form-controls">
                <label className="uk-form-label">Unternehmen *</label>
                <input className="uk-input" name="company" required />
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
                <label className="uk-form-label">Nachricht</label>
                <textarea className="uk-input" name="message" rows={4} style={{ resize: 'vertical' }} />
              </div>
              <button type="submit" className="uk-button uk-button-primary">
                Senden
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
