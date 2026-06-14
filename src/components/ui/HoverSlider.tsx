'use client'

import { useState, useEffect, useRef } from 'react'

interface Props {
  images: string[]
  videos?: (string | null)[]
  name: string
}

export default function HoverSlider({ images, videos = [], name }: Props) {
  const [active, setActive] = useState(0)
  const [hovered, setHovered] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (hovered && images.length > 1) {
      timerRef.current = setInterval(() => {
        setActive(a => (a + 1) % images.length)
      }, 1500)
    } else {
      if (timerRef.current) clearInterval(timerRef.current)
      setActive(0)
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [hovered, images.length])

  const handleDotClick = (e: React.MouseEvent, idx: number) => {
    e.stopPropagation()
    if (timerRef.current) clearInterval(timerRef.current)
    setActive(idx)
    if (images.length > 1) {
      timerRef.current = setInterval(() => {
        setActive(a => (a + 1) % images.length)
      }, 1500)
    }
  }

  return (
    <div
      style={{ position: 'relative', width: '100%', height: '100%' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Default image */}
      <img
        src={images[0]}
        alt={name}
        style={{
          width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          transition: 'opacity 0.3s',
          opacity: hovered ? 0 : 1,
        }}
      />

      {/* Hover slider */}
      {hovered && (
        <div style={{ position: 'absolute', inset: 0 }}>
          {videos[active] ? (
            <video
              src={videos[active]!}
              autoPlay muted loop playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <img
              key={active}
              src={images[active]}
              alt={`${name} ${active + 1}`}
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%', objectFit: 'cover',
                animation: 'hs-fade 0.3s ease forwards',
              }}
            />
          )}

          {/* Dot indicators */}
          <div style={{
            position: 'absolute', bottom: '0.5rem', left: '50%', transform: 'translateX(-50%)',
            display: 'flex', gap: '0.28rem', alignItems: 'center',
            background: 'rgba(0,0,0,0.35)', borderRadius: '1rem',
            padding: '0.25rem 0.45rem',
          }}>
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => handleDotClick(e, i)}
                style={{
                  width: 5, height: 5, borderRadius: '50%',
                  background: i === active ? '#fff' : 'rgba(255,255,255,0.45)',
                  border: 'none', cursor: 'pointer', padding: 0,
                  transition: 'background 0.2s',
                }}
              />
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes hs-fade {
          from { opacity: 0.4; transform: scale(1.02); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )
}