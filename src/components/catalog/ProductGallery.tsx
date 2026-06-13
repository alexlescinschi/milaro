'use client'

import { useState, useEffect } from 'react'

interface Props {
  images: string[]
  name: string
}

export default function ProductGallery({ images, name }: Props) {
  const [active, setActive] = useState(0)

  useEffect(() => { setActive(0) }, [images])

  return (
    <div>
      <div style={{
        borderRadius: '1rem', overflow: 'hidden',
        marginBottom: '1rem', position: 'relative',
        background: 'var(--light-color)',
      }}>
        <img
          src={images[active]}
          alt={`${name} — Bild ${active + 1}`}
          style={{ width: '100%', height: '34rem', objectFit: 'cover', display: 'block' }}
        />
        {images.length > 1 && (
          <>
            <button
              onClick={() => setActive((active - 1 + images.length) % images.length)}
              style={{
                position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)',
                width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.85)',
                border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.4rem', color: 'var(--main-color)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            >
              ‹
            </button>
            <button
              onClick={() => setActive((active + 1) % images.length)}
              style={{
                position: 'absolute', right: '0.8rem', top: '50%', transform: 'translateY(-50%)',
                width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.85)',
                border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.4rem', color: 'var(--main-color)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            >
              ›
            </button>
            <div style={{
              position: 'absolute', bottom: '0.8rem', right: '0.8rem',
              background: 'rgba(0,0,0,0.55)', color: 'white',
              padding: '0.3rem 0.7rem', borderRadius: '0.5rem',
              fontSize: '0.8rem',
            }}>
              {active + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.3rem' }}>
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                flex: 'none', width: 80, height: 60, borderRadius: '0.5rem',
                overflow: 'hidden', border: i === active ? '2px solid var(--primary-color)' : '2px solid transparent',
                cursor: 'pointer', padding: 0, opacity: i === active ? 1 : 0.55,
                transition: 'all 0.2s',
              }}
            >
              <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
