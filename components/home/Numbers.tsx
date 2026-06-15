'use client'

import { useRef, useEffect } from 'react'
import { useMotionValue, useSpring, useInView, m } from 'framer-motion'

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { duration: 2000, bounce: 0 })
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => { if (inView) mv.set(value) }, [inView, mv, value])
  useEffect(() => {
    // spring.on() retorna unsubscribe — crucial para evitar memory leak
    return spring.on('change', (v) => {
      if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`
    })
  }, [spring, suffix])

  return <span ref={ref}>0{suffix}</span>
}

const METRICS = [
  {
    value: 15, suffix: '', label: 'Anos de mercado', text: null,
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    value: 4, suffix: '', label: 'Estados de atuação', text: null,
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    value: null, suffix: '', label: 'Distribuição própria', text: 'CD',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    value: 500, suffix: '+', label: 'Clientes ativos', text: null,
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
]

export function Numbers() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #000044 0%, #000066 100%)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {METRICS.map((metric, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group relative flex flex-col justify-between py-12 px-8 lg:px-12"
              style={{
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : undefined,
                borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : undefined,
              }}
            >
              {/* Hover: yellow bottom accent */}
              <div
                className="absolute bottom-0 left-8 lg:left-12 right-8 lg:right-12 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: '#FFCC00' }}
              />

              {/* Value */}
              <div
                className="font-semibold leading-none mb-6 tabular-nums"
                style={{
                  fontSize: 'clamp(2.5rem, 4.5vw, 3.75rem)',
                  letterSpacing: '-0.045em',
                  color: '#FFCC00',
                  fontFamily: 'var(--font-display)',
                }}
              >
                {metric.text ?? <Counter value={metric.value!} suffix={metric.suffix} />}
              </div>

              {/* Label + small icon */}
              <div className="flex items-center gap-2">
                <span style={{ color: 'rgba(255,255,255,0.25)' }}>{metric.icon}</span>
                <span
                  className="text-[10px] font-medium uppercase"
                  style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em' }}
                >
                  {metric.label}
                </span>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
