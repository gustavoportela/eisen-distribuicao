'use client'

import { m } from 'framer-motion'
import { DIFFERENTIALS } from '@/lib/constants'

const ease = [0.22, 1, 0.36, 1] as const
const spring = { type: 'spring', stiffness: 280, damping: 24 } as const

/* ── Card config: accent + icon por diferencial ─────────────────────── */
const CARD_CONFIG = [
  /* 01 — Marcas de renome */
  {
    accent: '#FFCC00',
    iconBg: 'rgba(255,204,0,0.12)',
    iconColor: '#8A6000',
    icon: (
      /* Caixa com estrela / produto premium */
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
    ),
  },
  /* 02 — Centro de distribuição */
  {
    accent: '#000066',
    iconBg: 'rgba(0,0,102,0.08)',
    iconColor: '#000066',
    icon: (
      /* Armazém / warehouse */
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V21H3V9.5z"/>
        <path d="M9 21V12h6v9"/>
      </svg>
    ),
  },
  /* 03 — Atendimento presencial */
  {
    accent: '#FFC4DA',
    iconBg: 'rgba(255,196,218,0.18)',
    iconColor: '#8C2252',
    icon: (
      /* Handshake — parceria */
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 7.65l.77.79L12 21l7.65-8.08.77-.79a5.4 5.4 0 000-7.55z"/>
      </svg>
    ),
  },
  /* 04 — Promotoria & benefícios */
  {
    accent: '#FFCC00',
    iconBg: 'rgba(0,0,102,0.08)',
    iconColor: '#000066',
    icon: (
      /* Megafone / promoção */
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l19-9-9 19-2-8-8-2z"/>
      </svg>
    ),
  },
]

export function Differentials() {
  return (
    <section className="relative py-32 overflow-hidden section-contain" style={{ backgroundColor: '#F4F4F8' }}>

      {/* ── Grid de linhas diagonais cruzadas ───────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          repeating-linear-gradient(
            45deg,
            rgba(0,0,102,0.045) 0px,
            rgba(0,0,102,0.045) 1px,
            transparent 1px,
            transparent 36px
          ),
          repeating-linear-gradient(
            -45deg,
            rgba(0,0,102,0.045) 0px,
            rgba(0,0,102,0.045) 1px,
            transparent 1px,
            transparent 36px
          )
        `,
      }} />

      {/* ── Vinheta radial — funde o grid nas bordas ────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, #F4F4F8 100%)',
      }} />

      {/* ── Glows de cor nos cantos ─────────────────────────────────────── */}
      <div className="absolute top-0 right-0 pointer-events-none" style={{
        width: '580px', height: '400px',
        background: 'radial-gradient(ellipse at 100% 0%, rgba(255,196,218,0.28) 0%, transparent 58%)',
      }} />
      <div className="absolute bottom-0 left-0 pointer-events-none" style={{
        width: '500px', height: '400px',
        background: 'radial-gradient(ellipse at 0% 100%, rgba(255,204,0,0.16) 0%, transparent 58%)',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Section header ─────────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-[1fr_300px] items-end gap-10 mb-20">
          <m.div
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
                  Nossos Diferenciais
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
              Por que distribuidores<br />escolhem a Eisen
            </h2>
          </m.div>

          <m.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="hidden lg:block text-sm pb-0.5"
            style={{ color: '#78787E', lineHeight: 1.75 }}
          >
            Uma parceria com suporte real,<br />marcas de desejo e operação própria.
          </m.p>
        </div>

        {/* ── 2×2 cards grid ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {DIFFERENTIALS.map((item, i) => {
            const cfg = CARD_CONFIG[i]
            return (
              <m.div
                key={item.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                whileHover={{
                  y: -6,
                  boxShadow: `0 0 0 1.5px ${cfg.accent}, 0 16px 48px rgba(0,0,0,0.07)`,
                  transition: spring,
                }}
                className="relative bg-white cursor-default p-7 sm:p-10 lg:p-[40px_44px_48px]"
                style={{
                  borderRadius: '14px',
                  boxShadow: '0 0 0 1.5px rgba(0,0,102,0.08)',
                }}
              >
                {/* Top row: icon + number */}
                <div className="flex items-start justify-between mb-9">
                  {/* Icon container */}
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: cfg.iconBg,
                      color: cfg.iconColor,
                      flexShrink: 0,
                    }}
                  >
                    {cfg.icon}
                  </div>

                  {/* Editorial number — top right */}
                  <span
                    style={{
                      fontSize: '0.625rem',
                      fontWeight: 500,
                      color: 'rgba(0,0,0,0.15)',
                      letterSpacing: '0.16em',
                      fontVariantNumeric: 'tabular-nums',
                      marginTop: 4,
                    }}
                  >
                    {item.num}
                  </span>
                </div>

                {/* Heading */}
                <h3
                  className="mb-3"
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    letterSpacing: '-0.025em',
                    lineHeight: 1.3,
                    color: '#0C0C14',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {item.title}
                </h3>

                {/* Body */}
                <p className="text-sm" style={{ color: '#78787E', lineHeight: 1.82 }}>
                  {item.text}
                </p>

                {/* Accent line bottom — decorative */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 44,
                    right: 44,
                    height: 1,
                    background: cfg.accent,
                    opacity: 0.20,
                    borderRadius: 1,
                  }}
                />
              </m.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
