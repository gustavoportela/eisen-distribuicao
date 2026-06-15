'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { TIMELINE_EVENTS } from '@/lib/constants'

const ease = [0.22, 1, 0.36, 1] as const

export function Fifteen() {
  return (
    <section className="grain relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #000044 0%, #000066 55%, #00008F 100%)' }}>

      {/* Brand blue radial glow — center-right */}
      <div className="absolute pointer-events-none" style={{
        right: '10%', top: '50%', transform: 'translateY(-50%)',
        width: '700px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,68,240,0.3) 0%, transparent 65%)',
        filter: 'blur(90px)',
      }} />

      {/* Pink orb grande */}
      <div className="absolute pointer-events-none" style={{
        right: '-60px', top: '-60px',
        width: '800px', height: '800px', borderRadius: '50%',
        background: 'radial-gradient(circle at 40% 40%, rgba(255,196,218,0.22) 0%, rgba(255,196,218,0.06) 40%, transparent 68%)',
        filter: 'blur(80px)',
      }} />

      {/* Pink orb bottom-left */}
      <div className="absolute pointer-events-none" style={{
        left: '-60px', bottom: '-60px',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,196,218,0.14) 0%, transparent 65%)',
        filter: 'blur(70px)',
      }} />

      {/* Dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none opacity-50" />

      {/* Sparkles decorativos */}
      <div className="absolute top-16 right-[42%] pointer-events-none hidden lg:block opacity-50">
        <Sparkle size={18} />
      </div>
      <div className="absolute bottom-24 right-[38%] pointer-events-none hidden lg:block opacity-30">
        <Sparkle size={11} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 lg:gap-24 items-start">

          {/* Coluna esquerda */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease }}
          >
            {/* Pill chip eyebrow — pink accent on dark */}
            <div className="mb-8">
              <div
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full"
                style={{ background: 'rgba(255,196,218,0.1)', border: '1px solid rgba(255,196,218,0.2)' }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="#FFC4DA" opacity="0.9">
                  <path d="M12 2L13.09 9.26L20 12L13.09 14.74L12 22L10.91 14.74L4 12L10.91 9.26L12 2Z"/>
                </svg>
                <span className="text-[10px] font-semibold uppercase" style={{ color: 'rgba(255,196,218,0.7)', letterSpacing: '0.15em' }}>
                  Campanha 15 Anos
                </span>
              </div>
            </div>

            {/* Logo oficial da campanha */}
            <div className="mb-7">
              <Image
                src="/brand/logo-15anos-h.png"
                alt="15 Anos de História. Eisen Distribuição"
                width={420}
                height={116}
                className="w-full max-w-[340px] h-auto"
              />
            </div>

            {/* Slogan */}
            <p className="font-semibold text-xl mb-8 tracking-tight"
              style={{ color: '#FFC4DA', letterSpacing: '-0.015em', fontFamily: 'var(--font-display)' }}>
              Voando cada vez mais alto.
            </p>

            <div className="w-14 h-px mb-8"
              style={{ background: 'linear-gradient(90deg, rgba(255,196,218,0.6), transparent)' }} />

            <p className="text-white/75 leading-[1.85] mb-5 max-w-[440px]" style={{ fontSize: '1.0625rem' }}>
              A Eisen nasceu com um propósito claro: conectar grandes marcas aos pontos de venda com
              excelência, ética e relacionamento verdadeiro.
            </p>

            <p className="text-white/75 leading-[1.85] mb-10 max-w-[440px]" style={{ fontSize: '0.9375rem' }}>
              Em 25 de Julho de 2026, completamos 15 anos presentes em quatro estados, mantendo o mesmo compromisso
              de sempre: fazer o certo, entregar com qualidade e evoluir todos os dias.
            </p>

            <Link
              href="/seja-cliente"
              className="inline-flex items-center gap-2 text-sm font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02]"
              style={{
                border: '1px solid rgba(255,196,218,0.35)',
                color: '#FFC4DA',
              }}
            >
              Faça parte dessa história →
            </Link>
          </motion.div>

          {/* Coluna direita — timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, delay: 0.1, ease }}
            className="lg:pt-2"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-6"
              style={{ color: 'rgba(255,196,218,0.85)' }}>
              Marcos da trajetória
            </p>

            <div className="flex flex-col">
              {TIMELINE_EVENTS.map((event, i) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.18 + i * 0.07, ease }}
                  className="flex items-center gap-6 py-5 border-b group"
                  style={{ borderColor: 'rgba(255,255,255,0.07)' }}
                >
                  <div className={`shrink-0 w-1.5 h-1.5 rounded-full ml-1 transition-all duration-300 ${
                    event.year === '2026'
                      ? 'shadow-[0_0_8px_rgba(255,196,218,0.6)]'
                      : 'group-hover:opacity-50'
                  }`}
                    style={{ background: event.year === '2026' ? '#FFC4DA' : 'rgba(255,255,255,0.18)' }}
                  />

                  <span className="font-bold tabular-nums w-12 shrink-0 text-sm"
                    style={{ color: event.year === '2026' ? '#FFCC00' : 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-display)' }}>
                    {event.year}
                  </span>

                  <div className="w-px h-4 shrink-0" style={{ background: 'rgba(255,255,255,0.1)' }} />

                  <span className="text-sm flex-1"
                    style={{ color: event.year === '2026' ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.75)', fontWeight: event.year === '2026' ? 500 : 400 }}>
                    {event.label}
                  </span>

                  {event.year === '2026' && <Sparkle size={10} />}
                </motion.div>
              ))}
            </div>

            {/* Card aniversário */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, ease }}
              className="mt-6 rounded-2xl p-6"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,196,218,0.2)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Sparkle size={13} />
                <span className="text-[11px] font-semibold tracking-widest uppercase"
                  style={{ color: 'rgba(255,196,218,0.75)' }}>
                  Aniversário
                </span>
              </div>
              <div className="text-white/75 text-sm leading-relaxed">
                25 de Julho de 2026. Quinze anos de parcerias, crescimento e presença em todo o Sul e SP.
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Sparkle({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L13.09 9.26L20 12L13.09 14.74L12 22L10.91 14.74L4 12L10.91 9.26L12 2Z" fill="#FFC4DA" />
    </svg>
  )
}
