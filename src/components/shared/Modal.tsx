'use client'

import { useEffect, useCallback } from 'react'
import { X } from 'lucide-react'

interface ModalProps {
  open: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export default function Modal({ open, onClose, title, children }: ModalProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, handleKeyDown])

  return (
    <div className={`uk-modal ${open ? 'open' : ''}`} onClick={onClose}>
      <div className="uk-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="uk-modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        <h3 className="uk-modal-title">{title}</h3>
        {children}
      </div>
    </div>
  )
}
