import type { Metadata } from 'next'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Diamond } from '@/components/ui/Diamond'
import { StateSelector } from '@/components/ui/StateSelector'
import { TIMELINE_EVENTS } from '@/lib/constants'
import { QuinzeAnimations } from './QuinzeAnimations'
import { TimelineClient } from './TimelineClient'

export const metadata: Metadata = {
  title: '15 Anos: Quinze Anos Conectando Marcas e Negócios',
  description:
    'Em 2026, a Eisen Distribuição completa 15 anos. Uma trajetória de excelência, ética e relacionamento verdadeiro em RS, SC, PR e SP.',
}

const MARCOS = [
  { year: '2011', label: 'Fundação em Santa Cruz do Sul' },
  { year: '2013', label: 'Expansão para Santa Catarina' },
  { year: '2016', label: 'Centro de distribuição próprio' },
  { year: '2019', label: 'Expansão para o Paraná' },
  { year: '2023', label: 'Chegada em São Paulo' },
  { year: '2026', label: 'Quinze anos de história' },
]

export default function QuinzeAnosPage() {
  return (
    <>
      {/* ── 1. HERO FULLSCREEN ──────────────────────────── */}
      <section
        className="grain relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #000044 0%, #000066 55%, #00008F 100%)' }}
      >
        {/* Pink orbs */}
        <div className="absolute pointer-events-none" style={{
          left: '-120px', top: '10%',
          width: '700px', height: '700px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(255,196,218,0.32) 0%, transparent 60%)',
          filter: 'blur(90px)',
        }} />
        <div className="absolute pointer-events-none" style={{
          right: '-100px', bottom: '5%',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(255,196,218,0.22) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }} />
        {/* Blue center glow */}
        <div className="absolute pointer-events-none" style={{
          left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
          width: '900px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(0,68,240,0.28) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }} />

        <div className="absolute inset-0 bg-dot-pattern pointer-events-none opacity-40" />

        <div className="absolute top-20 right-[18%] pointer-events-none hidden lg:block">
          <Sparkle size={22} opacity={0.5} />
        </div>
        <div className="absolute top-[38%] left-[12%] pointer-events-none hidden lg:block">
          <Sparkle size={14} opacity={0.3} />
        </div>
        <div className="absolute bottom-32 right-[30%] pointer-events-none hidden lg:block">
          <Sparkle size={18} opacity={0.4} />
        </div>
        <div className="absolute bottom-24 left-[25%] pointer-events-none hidden lg:block">
          <Sparkle size={11} opacity={0.25} />
        </div>

        <div className="absolute top-14 left-16 pointer-events-none hidden lg:block">
          <Diamond size="lg" color="pink" opacity={0.15} />
        </div>
        <div className="absolute bottom-20 right-16 pointer-events-none hidden lg:block">
          <Diamond size="md" opacity={0.1} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center py-32">
          <QuinzeAnimations delay={0}>
            <div
              className="text-eisen-yellow font-extrabold mb-6 tracking-tight"
              style={{ fontSize: 'clamp(1rem, 2.5vw, 1.375rem)', letterSpacing: '0.25em', opacity: 0.7 }}
            >
              2011 · 2026
            </div>
          </QuinzeAnimations>

          <QuinzeAnimations delay={0.06}>
            <h1 className="text-display text-white mb-7 max-w-[900px] mx-auto">
              Quinze anos{' '}
              <span style={{ color: '#FFCC00' }}>conectando</span>{' '}
              marcas e negócios
            </h1>
          </QuinzeAnimations>

          <QuinzeAnimations delay={0.12}>
            <p className="text-white/75 text-lg leading-relaxed max-w-[520px] mx-auto mb-14">
              Uma trajetória construída sobre relacionamentos verdadeiros,
              excelência operacional e valores que vivemos no dia a dia.
            </p>
          </QuinzeAnimations>

          <QuinzeAnimations delay={0.18}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <StateSelector buttonSize="lg" />
              <a
                href="https://instagram.com/eisendistribuicao"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-7 py-4 rounded-xl font-semibold transition-all duration-150"
                style={{ border: '1px solid rgba(255,255,255,0.20)', color: 'rgba(255,255,255,0.85)' }}
              >
                <InstagramIcon />
                Siga no Instagram
              </a>
            </div>
          </QuinzeAnimations>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-30">
          <div className="w-px h-10 bg-white/40 animate-pulse" />
          <span className="text-white text-[10px] font-semibold uppercase tracking-widest">scroll</span>
        </div>
      </section>

      {/* ── 2. TEXTO DA CAMPANHA ─────────────────────────── */}
      <section
        className="relative py-28 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #000044 0%, #000066 100%)' }}
      >
        <div className="absolute pointer-events-none" style={{
          left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
          width: '700px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(255,196,218,0.12) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }} />
        <div className="absolute pointer-events-none" style={{
          left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
          width: '600px', height: '300px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(0,68,240,0.2) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }} />

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10">
          <QuinzeAnimations delay={0}>
            <SectionLabel className="mb-10">Nossa história</SectionLabel>
          </QuinzeAnimations>

          <QuinzeAnimations delay={0.07}>
            <p
              className="text-white/90 leading-[1.9] mb-8"
              style={{ fontSize: 'clamp(1.0625rem, 1.8vw, 1.25rem)' }}
            >
              A Eisen nasceu com um propósito claro: conectar grandes marcas aos pontos de
              venda com excelência, ética e relacionamento verdadeiro. Ao longo da nossa
              trajetória, construímos muito mais do que uma operação de distribuição.{' '}
              <span className="text-white font-semibold">Construímos parcerias sólidas.</span>
            </p>
          </QuinzeAnimations>

          <QuinzeAnimations delay={0.12}>
            <p
              className="text-white/75 leading-[1.9] mb-8"
              style={{ fontSize: 'clamp(1rem, 1.6vw, 1.125rem)' }}
            >
              Atuamos no mercado de distribuição com responsabilidade, proximidade e
              profissionalismo, acreditando que resultados consistentes são consequência
              de um trabalho bem feito e de valores vividos no dia a dia.
            </p>
          </QuinzeAnimations>

          <QuinzeAnimations delay={0.17}>
            <p
              className="text-white/75 leading-[1.9]"
              style={{ fontSize: 'clamp(1rem, 1.6vw, 1.125rem)' }}
            >
              Em 2026, completamos 15 anos de história. Quinze anos de aprendizado,
              superação e crescimento. Hoje, nossa operação está presente em quatro
              estados: RS, SC, PR e, recentemente, em SP, mantendo o mesmo
              compromisso de sempre:{' '}
              <span style={{ color: '#FFCC00', fontWeight: 600 }}>
                fazer o certo, entregar com qualidade e evoluir todos os dias.
              </span>
            </p>
          </QuinzeAnimations>
        </div>
      </section>

      {/* ── 3. LINHA DO TEMPO INTERATIVA ────────────────── */}
      <section
        className="grain relative py-28 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #000044 0%, #000066 55%, #00008F 100%)' }}
      >
        <div className="absolute inset-0 bg-dot-pattern pointer-events-none opacity-25" />
        <div className="absolute pointer-events-none" style={{
          right: '10%', top: '50%', transform: 'translateY(-50%)',
          width: '500px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,196,218,0.15) 0%, transparent 65%)',
          filter: 'blur(70px)',
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <QuinzeAnimations delay={0}>
            <SectionLabel className="mb-6">Trajetória</SectionLabel>
            <h2 className="text-headline text-white mb-20">
              Marcos de uma história
            </h2>
          </QuinzeAnimations>

          <TimelineClient events={TIMELINE_EVENTS} />
        </div>
      </section>

      {/* ── 4. 15 MARCOS — 6 CARDS ──────────────────────── */}
      <section
        className="relative py-28 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #000044 0%, #000066 100%)' }}
      >
        <div className="absolute pointer-events-none" style={{
          right: '-80px', top: '-60px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(0,68,240,0.2) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }} />
        <div className="absolute pointer-events-none" style={{
          left: '-60px', bottom: '-40px',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(255,196,218,0.14) 0%, transparent 65%)',
          filter: 'blur(70px)',
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <QuinzeAnimations delay={0}>
            <SectionLabel className="mb-6">15 Marcos</SectionLabel>
            <h2 className="text-headline text-white mb-16">
              A linha do tempo da Eisen
            </h2>
          </QuinzeAnimations>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MARCOS.map((marco, i) => (
              <QuinzeAnimations key={marco.year} delay={i * 0.07}>
                <div
                  className="group relative rounded-2xl p-7 overflow-hidden flex flex-col gap-5 cursor-default"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,196,218,0.15)',
                  }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" style={{
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(255,196,218,0.08) 0%, transparent 70%)',
                  }} />

                  <div className="flex items-center gap-4 relative z-10">
                    <span
                      className="font-extrabold leading-none"
                      style={{ fontSize: '2.25rem', letterSpacing: '-0.04em', color: '#FFCC00' }}
                    >
                      {marco.year}
                    </span>
                    <Diamond size="sm" color="pink" opacity={0.7} />
                  </div>

                  <p className="text-white/90 font-semibold text-base leading-snug relative z-10">
                    {marco.label}
                  </p>

                  <div className="absolute bottom-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ background: 'rgba(255,196,218,0.4)' }} />
                </div>
              </QuinzeAnimations>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. MENSAGEM DE AGRADECIMENTO ─────────────────── */}
      <section
        className="grain relative py-36 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #000044 0%, #000066 55%, #00008F 100%)' }}
      >
        <div className="absolute pointer-events-none" style={{
          left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
          width: '800px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(255,196,218,0.18) 0%, transparent 60%)',
          filter: 'blur(90px)',
        }} />
        <div className="absolute pointer-events-none" style={{
          left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
          width: '700px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(0,68,240,0.22) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }} />
        <div className="absolute inset-0 bg-dot-pattern pointer-events-none opacity-30" />

        <div className="absolute top-12 left-16 pointer-events-none hidden lg:block">
          <Sparkle size={20} opacity={0.35} />
        </div>
        <div className="absolute bottom-14 right-20 pointer-events-none hidden lg:block">
          <Sparkle size={14} opacity={0.25} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <QuinzeAnimations delay={0}>
            <Diamond size="md" color="pink" className="mx-auto mb-10" />
          </QuinzeAnimations>

          <QuinzeAnimations delay={0.07}>
            <blockquote
              className="text-white/85 leading-[1.75] font-light"
              style={{ fontSize: 'clamp(1.25rem, 2.8vw, 1.875rem)', letterSpacing: '-0.01em' }}
            >
              À todos nossos{' '}
              <span style={{ color: '#FFCC00', fontWeight: 600 }}>clientes</span>,{' '}
              <span style={{ color: '#FFC4DA', fontWeight: 600 }}>parceiros</span>{' '}
              e <span className="text-white font-semibold">colaboradores</span>{' '}
              obrigado por fazerem parte dessa história.
            </blockquote>
          </QuinzeAnimations>

          <QuinzeAnimations delay={0.13}>
            <div className="mt-12 flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-white/15" />
              <span className="text-white/75 text-sm font-semibold tracking-widest uppercase">Eisen · 2026</span>
              <div className="h-px w-16 bg-white/15" />
            </div>
          </QuinzeAnimations>
        </div>
      </section>

      {/* ── 6. CTA FINAL ─────────────────────────────────── */}
      <section
        className="grain relative py-32 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #000044 0%, #000066 55%, #00008F 100%)' }}
      >
        <div className="absolute pointer-events-none" style={{
          left: '50%', bottom: '-80px', transform: 'translateX(-50%)',
          width: '700px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(255,196,218,0.18) 0%, transparent 65%)',
          filter: 'blur(70px)',
        }} />
        <div className="absolute pointer-events-none" style={{
          left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
          width: '800px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(0,68,240,0.25) 0%, transparent 65%)',
          filter: 'blur(90px)',
        }} />
        <div className="absolute inset-0 bg-dot-pattern pointer-events-none opacity-35" />

        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <QuinzeAnimations delay={0}>
            <SectionLabel className="justify-center mb-8">Seja um parceiro</SectionLabel>

            <h2 className="text-headline text-white mb-5">
              Faça parte dos próximos<br />
              <span style={{ color: '#FFCC00' }}>15 anos</span>
            </h2>

            <p className="text-white/75 mb-12 max-w-[380px] mx-auto leading-[1.85]" style={{ fontSize: '1.0625rem' }}>
              Escolha seu estado e entre em contato com o time comercial Eisen.
            </p>

            <div className="flex flex-col items-center gap-8">
              <StateSelector buttonSize="lg" />

              <div className="flex items-center gap-6">
                <a
                  href="https://instagram.com/eisendistribuicao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/75 hover:text-white/90 transition-colors duration-150 text-sm font-medium"
                >
                  <InstagramIcon />
                  Instagram
                </a>
                <div className="w-px h-4 bg-white/15" />
                <a
                  href="mailto:mkt@grupoeisen.com.br"
                  className="flex items-center gap-2 text-white/75 hover:text-white/90 transition-colors duration-150 text-sm font-medium"
                >
                  mkt@grupoeisen.com.br
                </a>
              </div>
            </div>
          </QuinzeAnimations>
        </div>
      </section>
    </>
  )
}

function Sparkle({ size = 20, opacity = 0.5 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ opacity }}>
      <path d="M12 2L13.09 9.26L20 12L13.09 14.74L12 22L10.91 14.74L4 12L10.91 9.26L12 2Z" fill="#FFC4DA" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}
