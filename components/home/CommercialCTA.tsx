'use client'

import { m } from 'framer-motion'
import { StateSelector } from '@/components/ui/StateSelector'

const ease = [0.22, 1, 0.36, 1] as const

export function CommercialCTA() {
  return (
    <section
      className="grain relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #000044 0%, #000066 55%, #00008F 100%)' }}
    >
      {/* Restrained center glow */}
      <div className="absolute pointer-events-none" style={{
        left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
        width: '700px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(0,68,240,0.22) 0%, transparent 65%)',
        filter: 'blur(100px)',
      }} />
      {/* Pink glow — soft, bottom center */}
      <div className="absolute pointer-events-none" style={{
        left: '50%', bottom: '-60px', transform: 'translateX(-50%)',
        width: '500px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(255,196,218,0.12) 0%, transparent 65%)',
        filter: 'blur(80px)',
      }} />
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none opacity-25" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">

        {/* Pill chip eyebrow — yellow accent on dark */}
        <m.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease }}
          className="flex justify-center mb-10"
        >
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full"
            style={{ background: 'rgba(255,204,0,0.1)', border: '1px solid rgba(255,204,0,0.2)' }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="#FFCC00" opacity="0.9">
              <path d="M12 2L13.09 9.26L20 12L13.09 14.74L12 22L10.91 14.74L4 12L10.91 9.26L12 2Z"/>
            </svg>
            <span className="text-[10px] font-semibold uppercase" style={{ color: 'rgba(255,204,0,0.75)', letterSpacing: '0.15em' }}>
              Seja Cliente Eisen
            </span>
          </div>
        </m.div>

        <m.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.05, ease }}
          className="text-white mb-5"
          style={{
            fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            fontFamily: 'var(--font-display)',
          }}
        >
          Venda marcas de{' '}
          <span style={{ color: '#FFC4DA' }}>desejo</span>
          <br />na sua região
        </m.h2>

        <m.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="mb-12 max-w-[360px] mx-auto"
          style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8 }}
        >
          Agilidade na entrega, portfólio premium e suporte presencial em cada estado.
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.15, ease }}
          className="flex justify-center"
        >
          <StateSelector buttonSize="lg" />
        </m.div>

      </div>
    </section>
  )
}
