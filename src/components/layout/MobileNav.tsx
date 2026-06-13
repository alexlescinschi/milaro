'use client'

import Link from 'next/link'
import { X } from 'lucide-react'
import { NAV_ITEMS } from '@/lib/constants'

export default function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      <div
        className={`mobile-nav-overlay ${open ? 'open' : ''}`}
        onClick={onClose}
      />
      <div className={`mobile-nav ${open ? 'open' : ''}`}>
        <div className="uk-flex uk-flex-between uk-flex-middle" style={{ marginBottom: '2rem' }}>
          <span style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.2rem' }}>Menu</span>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <X size={24} />
          </button>
        </div>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={onClose}
                style={{
                  display: 'block',
                  padding: '0.8rem 0',
                  fontSize: '1.1rem',
                  fontFamily: 'var(--sb-reg)',
                  borderBottom: '1px solid var(--border-color)',
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: '2rem' }}>
          <Link href="#" className="uk-button uk-button-primary" style={{ width: '100%' }}>
            Projekt bestellen
          </Link>
        </div>
      </div>
    </>
  )
}
