'use client'

import Link from 'next/link'
import { useState, useRef } from 'react'

type Props = {
  slug: string
  title: string
  likes: number
  images: string[]
}

export default function PortfolioCard({ slug, title, likes, images }: Props) {
  const [idx, setIdx] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const onEnter = () => {
    if (images.length < 2) return
    intervalRef.current = setInterval(() => {
      setIdx((prev) => (prev + 1) % images.length)
    }, 700)
  }

  const onLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setIdx(0)
  }

  return (
    <Link
      href={`/portfolio/${slug}`}
      style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div style={{ borderRadius: '1rem', overflow: 'hidden', height: '20rem', position: 'relative', marginBottom: '1rem' }}>
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={title}
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%', objectFit: 'cover',
              opacity: i === idx ? 1 : 0,
              transition: 'opacity 0.4s ease',
            }}
          />
        ))}
        <div style={{
          position: 'absolute', top: '1rem', right: '1rem',
          background: 'rgba(0,0,0,0.48)', backdropFilter: 'blur(5px)',
          color: 'white', padding: '0.3rem 0.7rem', borderRadius: '0.5rem',
          fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem',
          zIndex: 1,
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          {likes}
        </div>
        {/* Dot indicators */}
        {images.length > 1 && (
          <div style={{
            position: 'absolute', bottom: '0.75rem', left: '50%', transform: 'translateX(-50%)',
            display: 'flex', gap: '0.35rem', zIndex: 1,
          }}>
            {images.map((_, i) => (
              <div key={i} style={{
                width: i === idx ? '18px' : '6px',
                height: '6px',
                borderRadius: '3px',
                background: 'white',
                opacity: i === idx ? 1 : 0.5,
                transition: 'all 0.3s ease',
              }} />
            ))}
          </div>
        )}
      </div>
      <h3 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1rem', lineHeight: 1.4, margin: 0 }}>
        {title}
      </h3>
    </Link>
  )
}
