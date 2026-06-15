import Image from 'next/image'
import Link from 'next/link'
import { BRANDS } from '@/lib/constants'

/* Split brands into two rows for the dual marquee */
const ROW_1 = BRANDS.slice(0, 7)   // Dailus Wella Parfum Felps CiaBeauty TopBeauty Avenca
const ROW_2 = BRANDS.slice(7)      // Blend Phallebeauty Retrô Ciranda HappyBooks Carmesim KidsZone

/**
 * Per-logo calibrated dimensions for visual harmony.
 * Heights are tuned so all logos appear at the same optical weight
 * despite very different natural aspect ratios.
 */
const LOGO_SIZES: Record<string, { w: number; h: number }> = {
  'Ciranda Cultural': { w: 120, h: 22 },
  'Happy Books':      { w: 108, h: 24 },
  'Top Beauty':       { w: 105, h: 28 },
  'Parfum Brasil':    { w: 100, h: 32 },
  'Felps':            { w:  96, h: 28 },
  'Blend':            { w:  96, h: 32 },
  'Avenca':           { w:  96, h: 28 },
  'Wella':            { w:  90, h: 34 },
  'Retrô':            { w:  82, h: 36 },
  'Dailus':           { w:  80, h: 36 },
  'Phallebeauty':     { w:  76, h: 40 },
  'Kids Zone':        { w:  72, h: 40 },
  'Carmesim':         { w:  72, h: 36 },
  'Cia Beauty':       { w:  56, h: 48 },
}
const DEFAULT_SIZE = { w: 90, h: 32 }

function BrandItem({ name, logo }: { name: string; logo: string }) {
  const { w, h } = LOGO_SIZES[name] ?? DEFAULT_SIZE
  return (
    <div className="flex items-center gap-6 shrink-0 px-8 group cursor-default">
      {/* Outer box uses calibrated size; image respects its natural proportions */}
      <div className="flex items-center justify-center" style={{ width: `${w}px`, height: `${h}px` }}>
        <Image
          src={logo}
          alt={name}
          width={w}
          height={h}
          className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      {/* Diamond separator — geometric, brand-aligned */}
      <div className="w-[5px] h-[5px] rotate-45 shrink-0" style={{ background: 'rgba(0,0,102,0.14)' }} />
    </div>
  )
}

function MarqueeRow({ items, reverse = false, speed = 40 }: { items: typeof BRANDS; reverse?: boolean; speed?: number }) {
  const quadruple = [...items, ...items, ...items, ...items]
  return (
    <div className="flex overflow-hidden">
      <div
        className="flex shrink-0"
        style={{
          animation: `${reverse ? 'marquee-reverse' : 'marquee'} ${speed}s linear infinite`,
          willChange: 'transform',
        }}
      >
        {quadruple.map((brand, i) => (
          <BrandItem key={i} name={brand.name} logo={brand.logo} />
        ))}
      </div>
    </div>
  )
}

export function BrandsMarquee() {
  return (
    <section className="relative py-28 overflow-hidden section-contain" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      {/* Ultra-faint dot grid background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(0,0,102,0.035) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 mb-16">
        {/* Pill chip eyebrow */}
        <div className="mb-7">
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full"
            style={{ background: 'rgba(0,0,102,0.07)', border: '1px solid rgba(0,0,102,0.11)' }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="#000066">
              <path d="M12 2L13.09 9.26L20 12L13.09 14.74L12 22L10.91 14.74L4 12L10.91 9.26L12 2Z"/>
            </svg>
            <span className="text-[10px] font-semibold uppercase" style={{ color: '#000066', letterSpacing: '0.15em' }}>
              Marcas Parceiras
            </span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2
            className="max-w-[700px]"
            style={{
              fontSize: 'clamp(2.25rem, 4vw, 3.125rem)',
              fontWeight: 300,
              letterSpacing: '-1px',
              lineHeight: 1.06,
              color: '#08084A',
              fontFamily: 'var(--font-display)',
            }}
          >
            Distribuímos as marcas<br />que seus clientes já pedem
          </h2>
          <div className="flex flex-col items-start lg:items-end gap-4">
            <p className="text-sm leading-relaxed max-w-[240px] lg:text-right hidden lg:block" style={{ color: '#78787E' }}>
              Curadoria de cosméticos, perfumaria e beleza profissional.
            </p>
            <Link
              href="/marcas"
              className="inline-flex items-center gap-1.5 text-sm font-semibold group"
              style={{ color: '#000066' }}
            >
              <span className="underline underline-offset-4 decoration-2 group-hover:opacity-60 transition-opacity" style={{ textDecorationColor: '#FFCC00' }}>
                Ver portfólio completo
              </span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Dual marquee */}
      <div className="relative z-10">
        <div className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none z-10"
          style={{ background: 'linear-gradient(90deg, #FFFFFF, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none z-10"
          style={{ background: 'linear-gradient(-90deg, #FFFFFF, transparent)' }} />

        <div className="flex flex-col" style={{ borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="py-6" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
            <MarqueeRow items={ROW_1} speed={38} />
          </div>
          <div className="py-6">
            <MarqueeRow items={ROW_2} reverse speed={42} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-10 flex items-center gap-3">
        <div className="flex -space-x-1">
          {['#FFC4DA', '#FFCC00', '#DDE0E8'].map((c, i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-full border border-white" style={{ backgroundColor: c }} />
          ))}
        </div>
        <span className="text-eisen-faint text-xs tracking-wide">
          Portfólio em constante expansão
        </span>
      </div>
    </section>
  )
}
