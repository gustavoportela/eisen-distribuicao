'use client'

import { motion } from 'framer-motion'
import { STATES } from '@/lib/constants'

const ease = [0.22, 1, 0.36, 1] as const

/* Map pin — mesmo ícone para todos os estados, consistente */
function MapPin({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
      <circle cx="12" cy="9" r="2.5"/>
    </svg>
  )
}

/* Icon container color per state */
const STATE_ICON_BG: Record<string, string> = {
  RS: 'rgba(0,0,102,0.08)',
  SC: 'rgba(0,0,102,0.08)',
  PR: 'rgba(0,0,102,0.08)',
  SP: 'rgba(0,0,102,0.08)',
}
const STATE_ICON_COLOR: Record<string, string> = {
  RS: '#000066',
  SC: '#000066',
  PR: '#000066',
  SP: '#000066',
}

export function Geography() {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.06)' }}
    >
      {/* ── Subtle background depth ─────────────────────────────────────── */}
      {/* Very faint yellow glow — bottom-right */}
      <div className="absolute bottom-0 right-0 pointer-events-none" style={{
        width: '600px', height: '420px',
        background: 'radial-gradient(ellipse at 100% 100%, rgba(255,204,0,0.07) 0%, transparent 65%)',
      }} />
      {/* Very faint blue glow — top-left */}
      <div className="absolute top-0 left-0 pointer-events-none" style={{
        width: '400px', height: '320px',
        background: 'radial-gradient(ellipse at 0% 0%, rgba(0,68,240,0.04) 0%, transparent 65%)',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-[1fr_300px] items-end gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease }}
          >
            <div className="mb-7">
              <div
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full"
                style={{ background: 'rgba(0,0,102,0.07)', border: '1px solid rgba(0,0,102,0.11)' }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="#000066">
                  <path d="M12 2L13.09 9.26L20 12L13.09 14.74L12 22L10.91 14.74L4 12L10.91 9.26L12 2Z"/>
                </svg>
                <span className="text-[10px] font-semibold uppercase" style={{ color: '#000066', letterSpacing: '0.15em' }}>
                  Presença Regional
                </span>
              </div>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.125rem)',
                fontWeight: 300,
                letterSpacing: '-1px',
                lineHeight: 1.06,
                color: '#08084A',
                fontFamily: 'var(--font-display)',
              }}
            >
              Operação em<br />quatro estados
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="hidden lg:block text-sm pb-0.5"
            style={{ color: '#78787E', lineHeight: 1.75 }}
          >
            Expansão contínua com estrutura logística própria e equipe presencial em cada região.
          </motion.p>
        </div>

        {/* ── 4-column gap-px grid ────────────────────────────────────────── */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden"
          style={{ background: 'rgba(0,0,0,0.07)' }}
        >
          {STATES.map((state, i) => (
            <motion.div
              key={state.sigla}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="group relative bg-white cursor-default"
              style={{ padding: '36px 40px 48px' }}
            >
              {/* Hover: brand-blue top accent (or yellow for SP) */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ background: state.sigla === 'SP' ? '#FFCC00' : '#0044F0' }}
              />

              {/* Icon + badge row */}
              <div className="flex items-center justify-between mb-8">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: STATE_ICON_BG[state.sigla], color: STATE_ICON_COLOR[state.sigla] }}
                >
                  <MapPin />
                </div>
                {state.novo && (
                  <span
                    className="text-[9px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full"
                    style={{
                      background: 'rgba(255,204,0,0.12)',
                      color: '#8A6000',
                      border: '1px solid rgba(255,204,0,0.3)',
                    }}
                  >
                    Novo
                  </span>
                )}
              </div>

              {/* State sigla — editorial large type */}
              <div
                className="font-bold tracking-tight leading-none mb-2"
                style={{
                  fontSize: 'clamp(2.25rem, 3.5vw, 2.75rem)',
                  letterSpacing: '-0.04em',
                  color: '#0C0C14',
                  fontFamily: 'var(--font-display)',
                }}
              >
                {state.sigla}
              </div>

              {/* State name + city */}
              <div className="mb-5">
                <div className="text-sm font-semibold" style={{ color: '#0C0C14', letterSpacing: '-0.01em' }}>
                  {state.nome}
                </div>
                <div className="text-xs mt-0.5" style={{ color: '#78787E' }}>
                  {state.cidade}
                </div>
              </div>

              {/* Divider + detail */}
              <div className="w-full h-px mb-4" style={{ background: 'rgba(0,0,0,0.06)' }} />
              <p className="text-xs leading-relaxed" style={{ color: '#78787E', lineHeight: 1.7 }}>
                {state.detalhe}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
