import type { Metadata } from 'next'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { StateSelector } from '@/components/ui/StateSelector'
import { BrandsGrid } from '@/components/marcas/BrandsGrid'
import { MarcasHeroAnimations } from './MarcasAnimations'

export const metadata: Metadata = {
  title: 'Portfólio de Marcas',
  description:
    "Conheça as marcas premium que a Eisen distribui em RS, SC, PR e SP. Boticário, L'Oréal, Natura, Avon e muito mais.",
}

const STATS = [
  { value: '12', label: 'Marcas no portfólio' },
  { value: '4',  label: 'Estados de atuação' },
  { value: '15+', label: 'Anos distribuindo' },
]

/* ─── Page ──────────────────────────────────────────────────────────── */
export default function MarcasPage() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden grain"
        style={{ background: 'linear-gradient(160deg, #000044 0%, #000066 55%, #00008F 100%)' }}
      >
        {/* Dot pattern */}
        <div className="absolute inset-0 bg-dot-pattern pointer-events-none opacity-35" />

        {/* Blue center glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
            width: '800px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(0,68,240,0.28) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Pink orb — bottom right */}
        <div
          className="absolute pointer-events-none"
          style={{
            right: '-120px',
            bottom: '-120px',
            width: '480px',
            height: '480px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle at 40% 40%, rgba(255,196,218,0.22) 0%, rgba(255,196,218,0.08) 50%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pt-36 pb-28">
          <MarcasHeroAnimations>
            {/* Eyebrow chip */}
            <div className="mb-8">
              <SectionLabel variant="line-dark">Portfólio de Marcas</SectionLabel>
            </div>

            <h1
              className="text-white max-w-3xl"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
              }}
            >
              As marcas que seus clientes{' '}
              <span style={{ color: '#FFCC00' }}>já pedem</span>
            </h1>

            <p
              className="mt-6 max-w-xl"
              style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.0625rem', lineHeight: 1.65 }}
            >
              Uma curadoria de marcas premium do segmento beauty: do cuidado
              pessoal à coloração profissional. Distribuímos o que o mercado deseja
              com a estrutura que o seu negócio precisa.
            </p>

            {/* Stats row */}
            <div className="mt-12 flex flex-wrap gap-10">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1.5">
                  <div className="h-0.5 w-8 rounded-full" style={{ background: '#FFCC00', opacity: 0.7 }} />
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.75rem, 3vw, 2.375rem)',
                      fontWeight: 800,
                      letterSpacing: '-0.04em',
                      lineHeight: 1,
                      color: '#FFCC00',
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-white/60 text-xs font-semibold tracking-widest uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </MarcasHeroAnimations>
        </div>
      </section>

      {/* ── 2. BRANDS GRID ──────────────────────────────────────────── */}
      <BrandsGrid />

      {/* ── 3. CTA FINAL ────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden grain"
        style={{ background: 'linear-gradient(160deg, #000044 0%, #000066 55%, #00008F 100%)' }}
      >
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-dot-pattern pointer-events-none opacity-35" />

        {/* Blue center glow */}
        <div className="absolute pointer-events-none" style={{
          left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
          width: '700px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(0,68,240,0.3) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }} />

        {/* Pink glow */}
        <div className="absolute pointer-events-none" style={{
          left: '50%', bottom: '-60px', transform: 'translateX(-50%)',
          width: '500px', height: '300px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(255,196,218,0.12) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }} />

        <div className="relative z-10 max-w-2xl mx-auto px-6 py-28 text-center">
          <MarcasHeroAnimations>
            <div className="flex justify-center mb-8">
              <SectionLabel variant="line-dark">Seja um Distribuidor</SectionLabel>
            </div>

            <h2
              className="text-white"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.25rem, 4vw, 3.125rem)',
                fontWeight: 700,
                lineHeight: 1.06,
                letterSpacing: '-0.03em',
              }}
            >
              Leve essas marcas para o seu estado
            </h2>

            <p
              className="mt-5 mb-10 max-w-md mx-auto"
              style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.65 }}
            >
              Selecione o estado onde você atua e fale com o nosso comercial.
              Time dedicado, atendimento presencial e estrutura de distribuição
              própria.
            </p>

            <div className="flex justify-center">
              <StateSelector buttonSize="lg" />
            </div>
          </MarcasHeroAnimations>
        </div>
      </section>
    </>
  )
}
