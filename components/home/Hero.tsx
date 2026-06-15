'use client'

import Link from 'next/link'
import Image from 'next/image'
import { m } from 'framer-motion'
import { RotatingBadge } from '@/components/ui/RotatingBadge'

// Spring só para whileHover nos cards — não roda no mount
const spring = { type: 'spring', stiffness: 340, damping: 32 } as const

const STATS_MOBILE = [
  { num: '15',      label: 'Anos',     accent: '#FFCC00' },
  { num: '4',       label: 'Estados',  accent: '#FFC4DA' },
  { num: '+15 mil', label: 'Clientes', accent: 'rgba(255,255,255,0.4)' },
]

const STATS_DESKTOP = [
  { num: '15',      label: 'Anos de\nmercado',    accent: '#FFCC00' },
  { num: '4',       label: 'Estados de\natuação', accent: '#FFC4DA' },
  { num: '+15 mil', label: 'Clientes\natendidos', accent: '#000066' },
]

export function Hero() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
          MOBILE — full-bleed photo, CSS animations (zero JS)
      ══════════════════════════════════════════════════════ */}
      <section className="lg:hidden relative flex flex-col justify-end" style={{ minHeight: '100svh' }}>

        <Image
          src="/brand/dailus.jpg"
          alt="Marcas Eisen Distribuição"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: 'center 8%' }}
        />

        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(8,8,74,0.05) 0%, rgba(8,8,74,0.1) 35%, rgba(8,8,74,0.82) 62%, rgba(8,8,74,0.97) 100%)',
        }} />

        {/* Badge — CSS spin, topo esquerdo */}
        <div className="animate-badge absolute top-6 left-5 z-10">
          <RotatingBadge size={88} />
        </div>

        {/* Conteúdo ancorado na base */}
        <div className="relative z-10 px-6 pb-12">

          <h1 className="animate-h1" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 7vw, 2.5rem)',
            lineHeight: 1.08,
            letterSpacing: '-0.035em',
            color: '#ffffff',
            marginBottom: '0.875rem',
          }}>
            <span style={{ fontWeight: 300 }}>As marcas que seus clientes </span>
            <span style={{ fontWeight: 800 }}>já pedem e vendem.</span>
          </h1>

          <p className="animate-para" style={{
            fontSize: '0.9rem',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.65)',
            marginBottom: '1.75rem',
          }}>
            Distribuidora de cosméticos e perfumaria em RS, SC, PR e SP.
          </p>

          <div className="animate-cta flex items-center gap-4 mb-10">
            <Link href="/seja-cliente" style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.9375rem',
              fontWeight: 700,
              background: '#FFCC00',
              color: '#08084A',
              padding: '13px 24px',
              borderRadius: '10px',
              display: 'inline-flex',
              alignItems: 'center',
              letterSpacing: '-0.01em',
            }}>
              Quero ser cliente
            </Link>
            <Link href="/marcas" className="inline-flex items-center gap-1.5 text-sm font-semibold group"
              style={{ color: 'rgba(255,255,255,0.8)' }}>
              <span className="underline underline-offset-4 decoration-2 group-hover:opacity-60 transition-opacity"
                style={{ textDecorationColor: '#FFCC00' }}>
                Ver marcas
              </span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="animate-stats flex items-start gap-8"
            style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '1.25rem' }}>
            {STATS_MOBILE.map((s, i) => (
              <div key={i} className="flex flex-col">
                <div style={{ height: 2, width: 24, borderRadius: 2, background: s.accent, marginBottom: 8 }} />
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.375rem, 5vw, 1.75rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.05em',
                  lineHeight: 1,
                  color: '#ffffff',
                }}>
                  {s.num}
                </span>
                <span style={{
                  fontSize: '0.625rem',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.45)',
                  marginTop: 5,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          DESKTOP — two-column grid, CSS entrance + hover cards
      ══════════════════════════════════════════════════════ */}
      <section
        className="hidden lg:grid"
        style={{
          gridTemplateColumns: '42% 58%',
          height: 'calc(100vh - 72px)',
          minHeight: 600,
          position: 'relative',
        }}
      >
        {/* Coluna esquerda */}
        <div style={{
          background: '#fff',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(2rem, 5vw, 5rem) clamp(2rem, 6vw, 5.5rem)',
        }}>
          <div style={{ maxWidth: 480 }}>

            <div className="animate-badge" style={{ marginBottom: '1rem' }}>
              <RotatingBadge size={148} />
            </div>

            <h1 className="animate-h1" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.85rem, 2.8vw, 3.5rem)',
              lineHeight: 1.07,
              letterSpacing: '-0.04em',
              color: '#08084A',
              marginBottom: '1.125rem',
            }}>
              <span style={{ fontWeight: 400 }}>As marcas que seus clientes </span>
              <span style={{ fontWeight: 800 }}>já pedem e vendem.</span>
            </h1>

            <p className="animate-para" style={{
              fontSize: '0.9375rem',
              lineHeight: 1.75,
              color: '#6B6B80',
              marginBottom: '1.75rem',
            }}>
              Distribuidora especializada em cosméticos e perfumaria.
              CD próprio, equipe presencial e portfólio premium em RS, SC, PR e SP.
            </p>

            <div className="animate-cta flex items-center gap-6" style={{ marginBottom: '2.5rem' }}>
              <Link href="/seja-cliente" style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.9375rem',
                fontWeight: 600,
                background: 'rgba(0,0,180,0.08)',
                color: '#000066',
                padding: '12px 24px',
                borderRadius: '10px',
                display: 'inline-flex',
                alignItems: 'center',
              }}>
                Quero ser cliente
              </Link>
              <Link href="/marcas" className="inline-flex items-center gap-1.5 text-sm font-semibold group"
                style={{ color: '#000066' }}>
                <span className="underline underline-offset-4 decoration-2 group-hover:opacity-60 transition-opacity"
                  style={{ textDecorationColor: '#FFCC00' }}>
                  Ver portfólio
                </span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>

            <div className="animate-stats flex items-start" style={{ gap: '4.5rem' }}>
              {STATS_DESKTOP.map((s, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ height: 3, width: 32, borderRadius: 2, background: s.accent, marginBottom: 10 }} />
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem, 3vw, 2.875rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.05em',
                    lineHeight: 1,
                    color: '#08084A',
                  }}>
                    {s.num}
                  </span>
                  <span style={{
                    fontSize: '0.6875rem',
                    fontWeight: 400,
                    color: '#9898A8',
                    lineHeight: 1.45,
                    whiteSpace: 'pre-line',
                    marginTop: 8,
                    letterSpacing: '0.01em',
                  }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Coluna direita — gradiente */}
        <div style={{ position: 'relative', zIndex: 0, overflow: 'hidden' }}>
          <Image src="/brand/bg2.jpg" alt="" fill priority sizes="58vw" className="object-cover"
            style={{ objectPosition: 'right center' }} />
        </div>

        {/* Cards — Framer Motion APENAS para whileHover (não roda no mount) */}
        <m.div
          className="animate-card-1"
          style={{
            position: 'absolute', zIndex: 20,
            left: '39%', top: '14%', width: '26%', bottom: '10%',
            borderRadius: 18, overflow: 'hidden',
            boxShadow: '0 2px 20px rgba(0,0,0,0.10)',
          }}
          whileHover={{ y: -6, scale: 1.022, boxShadow: '0 10px 36px rgba(0,0,0,0.14)', transition: spring }}
        >
          <Image src="/brand/banco-wella.jpg" alt="Wella Professionals"
            fill priority className="object-cover object-center" />
        </m.div>

        <m.div
          className="animate-card-2"
          style={{
            position: 'absolute', zIndex: 20,
            left: '68%', top: '30%', width: '24%', bottom: '4%',
            borderRadius: 18, overflow: 'hidden',
            boxShadow: '0 2px 20px rgba(0,0,0,0.10)',
          }}
          whileHover={{ y: -6, scale: 1.022, boxShadow: '0 10px 36px rgba(0,0,0,0.14)', transition: spring }}
        >
          <Image src="/brand/dailus.jpg" alt="Dailus cosméticos"
            fill priority className="object-cover object-top" />
        </m.div>

      </section>
    </>
  )
}
