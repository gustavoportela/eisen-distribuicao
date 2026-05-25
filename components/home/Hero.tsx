'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { RotatingBadge } from '@/components/ui/RotatingBadge'

const ease = [0.22, 1, 0.36, 1] as const
const spring = { type: 'spring', stiffness: 340, damping: 32 } as const

const STATS = [
  { num: '15',   label: 'Anos de\nmercado',    accent: '#FFCC00' },
  { num: '4',    label: 'Estados de\natuação', accent: '#FFC4DA' },
  { num: '500+', label: 'Clientes\nativos',    accent: '#000066' },
]

export function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        height: 'calc(100vh - 72px)',
        minHeight: 600,
        display: 'grid',
        gridTemplateColumns: '42% 58%',
      }}
    >
      {/* ── Coluna esquerda — fundo branco ──────────────────────────────── */}
      <div
        style={{
          background: '#fff',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(2rem, 5vw, 5rem) clamp(2rem, 6vw, 5.5rem)',
        }}
      >
        <div style={{ maxWidth: 480 }}>

          {/* Rotating badge — acima do H1, esquerda */}
          <motion.div
            initial={{ opacity: 0, scale: 0.72 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.3, ease }}
            style={{ marginBottom: '1rem' }}
          >
            <RotatingBadge size={148} />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.85rem, 2.8vw, 3.5rem)',
              lineHeight: 1.07,
              letterSpacing: '-0.04em',
              color: '#08084A',
              marginBottom: '1.125rem',
            }}
          >
            <span style={{ fontWeight: 400 }}>As marcas que seus clientes </span>
            <span style={{ fontWeight: 800 }}>já pedem e vendem.</span>
          </motion.h1>

          {/* Parágrafo */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            style={{
              fontSize: '0.9375rem',
              lineHeight: 1.75,
              color: '#6B6B80',
              marginBottom: '1.75rem',
            }}
          >
            Distribuidora especializada em cosméticos e perfumaria.
            CD próprio, equipe presencial e portfólio premium em RS, SC, PR e SP.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.18, ease }}
            style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}
          >
            <Link
              href="/seja-cliente"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.9375rem',
                fontWeight: 600,
                background: 'rgba(0,0,180,0.08)',
                color: '#000066',
                padding: '12px 24px',
                borderRadius: '10px',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              Quero ser cliente
            </Link>
            <Link
              href="/marcas"
              className="inline-flex items-center gap-1.5 text-sm font-semibold group"
              style={{ color: '#000066' }}
            >
              <span
                className="underline underline-offset-4 decoration-2 group-hover:opacity-60 transition-opacity"
                style={{ textDecorationColor: '#FFCC00' }}
              >
                Ver portfólio
              </span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>

          {/* ── Stats — minimalistas, estilo editorial ─────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.28, ease }}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '4.5rem',
            }}
          >
            {STATS.map((s, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                {/* Barra colorida accent */}
                <div style={{
                  height: 3,
                  width: 32,
                  borderRadius: 2,
                  background: s.accent,
                  marginBottom: 10,
                }} />
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem, 3vw, 2.875rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.05em',
                    lineHeight: 1,
                    color: '#08084A',
                  }}
                >
                  {s.num}
                </span>
                <span
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 400,
                    color: '#9898A8',
                    lineHeight: 1.45,
                    whiteSpace: 'pre-line',
                    marginTop: 8,
                    letterSpacing: '0.01em',
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* ── Coluna direita — apenas o gradiente ─────────────────────────── */}
      <div style={{ position: 'relative', zIndex: 0, overflow: 'hidden' }}>
        <Image
          src="/brand/bg2.png"
          alt=""
          fill
          priority
          className="object-cover"
          style={{ objectPosition: 'right center' }}
        />
      </div>


      {/* ── Cards: posicionados relativos à seção ───────────────────────── */}

      {/* Card 1 — maquiagem: começa na divisa branco/gradiente */}
      <motion.div
        style={{
          position: 'absolute',
          zIndex: 20,
          left: '39%',
          top: '14%',
          width: '26%',
          bottom: '10%',
          borderRadius: 18,
          overflow: 'hidden',
          boxShadow: '0 2px 20px rgba(0,0,0,0.10)',
        }}
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.22, ease }}
        whileHover={{ y: -6, scale: 1.022, boxShadow: '0 10px 36px rgba(0,0,0,0.14)', transition: spring }}
      >
        <Image
          src="/brand/hero-imagem-2.jpeg"
          alt="Maquiagem premium"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* Card 2 — tranças: direita do gradiente, começa mais abaixo */}
      <motion.div
        style={{
          position: 'absolute',
          zIndex: 20,
          left: '68%',
          top: '30%',
          width: '24%',
          bottom: '4%',
          borderRadius: 18,
          overflow: 'hidden',
          boxShadow: '0 2px 20px rgba(0,0,0,0.10)',
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.34, ease }}
        whileHover={{ y: -6, scale: 1.022, boxShadow: '0 10px 36px rgba(0,0,0,0.14)', transition: spring }}
      >
        <Image
          src="/brand/hero-imagem-1.jpg"
          alt="Beleza e cosméticos"
          fill
          priority
          className="object-cover object-top"
        />
      </motion.div>

    </section>
  )
}
