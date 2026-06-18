'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const KEY = 'eisen-lgpd-consent'

export function LGPDBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(KEY)) {
      const t = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  function accept() {
    localStorage.setItem(KEY, 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies e privacidade"
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6"
      style={{ pointerEvents: 'none' }}
    >
      <div
        className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
        style={{
          background: 'rgba(8, 8, 74, 0.97)',
          backdropFilter: 'blur(16px)',
          borderRadius: '16px',
          padding: '20px 24px',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 -4px 40px rgba(0,0,0,0.3)',
          pointerEvents: 'all',
        }}
      >
        {/* Icon */}
        <div className="shrink-0 hidden sm:flex items-center justify-center"
          style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,204,0,0.12)' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFCC00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>

        {/* Text */}
        <p className="flex-1 text-xs sm:text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Usamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa{' '}
          <Link href="/privacidade" className="underline underline-offset-2 hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Política de Privacidade
          </Link>{' '}
          conforme a LGPD.
        </p>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
          <button
            onClick={decline}
            className="flex-1 sm:flex-none text-xs font-medium px-4 py-2.5 rounded-lg transition-colors hover:bg-white/10"
            style={{ color: 'rgba(255,255,255,0.5)', whiteSpace: 'nowrap' }}
          >
            Recusar
          </button>
          <button
            onClick={accept}
            className="flex-1 sm:flex-none text-xs font-bold px-5 py-2.5 rounded-lg transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ background: '#FFCC00', color: '#08084A' }}
          >
            Aceitar cookies
          </button>
        </div>
      </div>
    </div>
  )
}
