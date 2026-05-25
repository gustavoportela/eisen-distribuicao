import type { Metadata } from 'next'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Diamond } from '@/components/ui/Diamond'
import { STATES } from '@/lib/constants'
import { ContatoAnimations } from './ContatoAnimations'
import { WppButton } from './WppButton'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com o time comercial da Eisen Distribuição. Atendimento por WhatsApp em RS, SC, PR e SP.',
}

const STEPS = [
  {
    num: '01',
    title: 'Escolha seu estado',
    desc: 'Selecione a região onde você atua: cada estado tem um consultor dedicado.',
  },
  {
    num: '02',
    title: 'Fale pelo WhatsApp',
    desc: 'Clique no botão e inicie a conversa diretamente com o time comercial local.',
  },
  {
    num: '03',
    title: 'Receba a proposta',
    desc: 'Nosso consultor apresenta o portfólio disponível e monta uma proposta personalizada.',
  },
]

export default function ContatoPage() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────── */}
      <section
        className="grain relative overflow-hidden py-36 lg:py-44"
        style={{ background: 'linear-gradient(160deg, #000044 0%, #000066 55%, #00008F 100%)' }}
      >
        <div className="absolute pointer-events-none" style={{
          right: '-60px', top: '-80px',
          width: '700px', height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 40% 40%, rgba(255,196,218,0.32) 0%, rgba(255,196,218,0.10) 45%, transparent 68%)',
          filter: 'blur(80px)',
        }} />
        <div className="absolute pointer-events-none" style={{
          left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
          width: '800px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(0,68,240,0.25) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }} />
        <div className="absolute inset-0 bg-dot-pattern pointer-events-none opacity-35" />

        <div className="absolute top-12 right-20 pointer-events-none hidden lg:block">
          <Diamond size="lg" color="pink" opacity={0.08} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <ContatoAnimations>
            <div className="flex justify-center mb-8">
              <SectionLabel variant="line-dark">Fale com a Eisen</SectionLabel>
            </div>
            <h1 className="text-display text-white mb-6">
              Fale com o{' '}
              <span style={{ color: '#FFCC00' }}>comercial Eisen</span>
            </h1>
            <p className="text-white/75 text-lg leading-relaxed max-w-[480px] mx-auto">
              Escolha seu estado e entre em contato pelo canal certo.
              Nosso time responde com agilidade.
            </p>
          </ContatoAnimations>
        </div>
      </section>

      {/* ── 2. GRID DE CONTATO POR ESTADO ──────────────── */}
      <section className="py-28" style={{ backgroundColor: '#F4F4F8' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ContatoAnimations delay={0}>
            <div className="mb-5">
              <SectionLabel variant="line">Atendimento por região</SectionLabel>
            </div>
            <h2
              className="mb-16 max-w-[460px]"
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.125rem)',
                fontWeight: 300,
                letterSpacing: '-1px',
                lineHeight: 1.06,
                color: '#08084A',
                fontFamily: 'var(--font-display)',
              }}
            >
              Um consultor dedicado<br />em cada estado
            </h2>
          </ContatoAnimations>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STATES.map((state, i) => (
              <ContatoAnimations key={state.sigla} delay={i * 0.08}>
                <div
                  className="group relative flex flex-col overflow-hidden"
                  style={{
                    borderRadius: '14px',
                    background: '#FFFFFF',
                    border: '1.5px solid rgba(0,0,102,0.09)',
                  }}
                >
                  {/* top accent */}
                  <div className="h-0.5 w-full" style={{ background: '#FFCC00' }} />

                  <div className="flex-1 p-7 flex flex-col gap-5">
                    {/* Sigla grande */}
                    <div className="flex items-start justify-between">
                      <span
                        className="font-extrabold leading-none"
                        style={{ fontSize: '3.25rem', letterSpacing: '-0.04em', color: '#000066', fontFamily: 'var(--font-display)' }}
                      >
                        {state.sigla}
                      </span>
                      {state.novo && (
                        <span
                          className="text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-wider mt-1"
                          style={{ background: '#F4F4F8', color: '#78787E', border: '1px solid rgba(0,0,0,0.07)' }}
                        >
                          Em breve
                        </span>
                      )}
                    </div>

                    {/* Info */}
                    <div>
                      <p className="text-eisen-navy font-semibold text-sm">{state.nome}</p>
                      <p className="text-eisen-faint text-xs mt-0.5">{state.cidade}</p>
                    </div>

                    <div className="pt-4 border-t border-eisen-border/70 flex-1">
                      <p className="text-eisen-faint text-xs leading-relaxed">{state.detalhe}</p>
                    </div>

                    {/* Botão WPP */}
                    <WppButton state={state.sigla} comingSoon={state.novo} />
                  </div>
                </div>
              </ContatoAnimations>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. EMAIL GERAL ──────────────────────────────── */}
      <section className="bg-white py-20 border-t border-eisen-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ContatoAnimations>
            <div className="flex flex-col items-center text-center">
              <div className="flex justify-center mb-6">
                <SectionLabel variant="line">E-mail</SectionLabel>
              </div>

              <div
                className="inline-flex flex-col sm:flex-row items-center gap-5 px-10 py-8"
                style={{
                  borderRadius: '14px',
                  background: '#F4F4F8',
                  border: '1.5px solid rgba(0,0,102,0.09)',
                }}
              >
                {/* ícone envelope */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: '#000066' }}
                >
                  <EnvelopeIcon />
                </div>

                <div className="text-center sm:text-left">
                  <p className="text-eisen-faint text-xs font-semibold uppercase tracking-widest mb-1">
                    Contato geral & marketing
                  </p>
                  <a
                    href="mailto:mkt@grupoeisen.com.br"
                    className="text-eisen-navy font-bold text-xl hover:text-eisen-yellow transition-colors duration-150"
                  >
                    mkt@grupoeisen.com.br
                  </a>
                </div>
              </div>
            </div>
          </ContatoAnimations>
        </div>
      </section>

      {/* ── 4. COMO FUNCIONA ────────────────────────────── */}
      <section style={{ backgroundColor: '#F4F4F8' }} className="py-28 border-t border-eisen-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ContatoAnimations>
            <div className="mb-5">
              <SectionLabel variant="line">Como funciona</SectionLabel>
            </div>
            <h2
              className="mb-16 max-w-[460px]"
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.125rem)',
                fontWeight: 300,
                letterSpacing: '-1px',
                lineHeight: 1.06,
                color: '#08084A',
                fontFamily: 'var(--font-display)',
              }}
            >
              Atendimento em 3 passos simples
            </h2>
          </ContatoAnimations>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-2xl overflow-hidden"
            style={{ background: 'rgba(0,0,102,0.07)' }}
          >
            {STEPS.map((step, i) => (
              <ContatoAnimations key={step.num} delay={i * 0.09}>
                <div className="group relative bg-white flex flex-col gap-5 p-10 h-full">
                  {/* top accent on hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{ background: '#FFCC00' }}
                  />
                  {/* número */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: '#000066' }}
                  >
                    <span
                      className="font-extrabold text-eisen-yellow"
                      style={{ fontSize: '1.5rem', letterSpacing: '-0.04em', fontFamily: 'var(--font-display)' }}
                    >
                      {step.num}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2" style={{ color: '#0C0C14', fontFamily: 'var(--font-display)' }}>{step.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#78787E' }}>{step.desc}</p>
                  </div>
                </div>
              </ContatoAnimations>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA FINAL ────────────────────────────────── */}
      <section
        className="relative py-28 overflow-hidden grain"
        style={{ background: 'linear-gradient(160deg, #000044 0%, #000066 55%, #00008F 100%)' }}
      >
        <div className="absolute pointer-events-none" style={{
          left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
          width: '600px', height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(255,196,218,0.12) 0%, transparent 65%)',
          filter: 'blur(70px)',
        }} />
        <div className="absolute pointer-events-none" style={{
          left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
          width: '700px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(0,68,240,0.2) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }} />
        <div className="absolute inset-0 bg-dot-pattern pointer-events-none opacity-30" />

        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <ContatoAnimations>
            <Diamond size="md" color="pink" className="mx-auto mb-7" />
            <h2 className="text-headline text-white mb-4">
              Tem uma dúvida específica?
            </h2>
            <p className="leading-relaxed text-base max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Nosso time responde em até{' '}
              <span style={{ color: '#FFCC00', fontWeight: 600 }}>24 horas</span>.
              Escolha o canal mais conveniente acima ou envie um e-mail. Estamos aqui.
            </p>
          </ContatoAnimations>
        </div>
      </section>
    </>
  )
}

function EnvelopeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFCC00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  )
}
