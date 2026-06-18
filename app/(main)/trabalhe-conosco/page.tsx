import type { Metadata } from 'next'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Diamond } from '@/components/ui/Diamond'
import { CurriculoForm } from './CurriculoForm'
import { TrabalheAnimations } from './TrabalheAnimations'
import { wppLink } from '@/lib/whatsapp'
import { fetchVagas } from '@/lib/solides'
import { VagasFilter } from './VagasFilter'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Trabalhe Conosco',
  description: 'Faça parte da equipe Eisen. Vagas abertas e currículo espontâneo para profissionais de vendas, logística e muito mais.',
}

const BENEFICIOS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 7h12L16 13" />
      </svg>
    ),
    title: 'Vale Refeição e Alimentação',
    desc: 'Cartão VR/VA mensal para refeição e compras no supermercado.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Plano de Saúde',
    desc: 'Cobertura médica e odontológica para você e seus dependentes.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: 'Comissão por Resultado',
    desc: 'Remuneração variável atrelada à sua performance. Quem entrega, ganha mais.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
    title: 'Treinamentos e Capacitação',
    desc: 'Acesso contínuo a treinamentos de produto, vendas e desenvolvimento profissional.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Flexibilidade de Horário',
    desc: 'Autonomia para organizar sua rotina com foco em resultado, não em presença.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: 'Crescimento Interno',
    desc: 'Plano de carreira estruturado. A maioria das nossas lideranças veio de dentro.',
  },
]

const PROCESSO = [
  {
    step: '01',
    title: 'Candidatura',
    desc: 'Envie seu currículo pelo formulário ou candidate-se diretamente em uma vaga no portal Solides.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Triagem',
    desc: 'Nossa equipe analisa o perfil e entra em contato por e-mail ou telefone em até 5 dias úteis.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Entrevista',
    desc: 'Conversa com RH e com o gestor da área. Queremos te conhecer de verdade — sem roteiro decorado.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Proposta',
    desc: 'Se for uma boa combinação para os dois lados, fazemos a proposta e alinhamos os próximos passos.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
]

const PILARES = [
  {
    num: '01',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Resultado',
    desc: 'Metas claras e reconhecimento real por performance. Aqui quem entrega, cresce.',
    accent: '#FFCC00',
    iconBg: 'rgba(255,204,0,0.12)',
    iconColor: '#8A6A00',
  },
  {
    num: '02',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Relacionamento',
    desc: 'Cultura colaborativa, time próximo e lideranças acessíveis. Acreditamos que bons resultados nascem de boas relações.',
    accent: '#FFC4DA',
    iconBg: 'rgba(255,196,218,0.18)',
    iconColor: '#8C2252',
  },
  {
    num: '03',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: 'Crescimento',
    desc: 'Treinamentos e evolução contínua. Em 15 anos de mercado, formamos líderes de dentro para fora.',
    accent: '#000066',
    iconBg: 'rgba(0,0,102,0.08)',
    iconColor: '#000066',
  },
]


export default async function TrabalheConoscoPage() {
  const wppRS = wppLink('RS')
  const vagas = await fetchVagas()

  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────── */}
      <section
        className="grain relative overflow-hidden pt-40 pb-28 lg:pt-52 lg:pb-36"
        style={{ background: 'linear-gradient(160deg, #000044 0%, #000066 55%, #00008F 100%)' }}
      >
        {/* Blue center glow */}
        <div className="absolute pointer-events-none" style={{
          left: '50%', top: '40%', transform: 'translate(-50%, -50%)',
          width: '800px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(0,68,240,0.28) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }} />
        {/* Pink orb top-right */}
        <div className="absolute pointer-events-none" style={{
          right: '-60px', top: '-80px',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle at 40% 40%, rgba(255,196,218,0.35) 0%, rgba(255,196,218,0.10) 45%, transparent 68%)',
          filter: 'blur(80px)',
        }} />
        <div className="absolute inset-0 bg-dot-pattern opacity-35 pointer-events-none" />

        <div className="absolute top-16 right-20 hidden lg:block pointer-events-none">
          <Diamond size="lg" color="pink" opacity={0.1} />
        </div>
        <div className="absolute bottom-12 left-16 hidden lg:block pointer-events-none">
          <Diamond size="lg" opacity={0.08} />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <TrabalheAnimations variant="hero">
            <div className="flex justify-center mb-8">
              <SectionLabel variant="line-dark">Carreiras na Eisen</SectionLabel>
            </div>

            <h1
              className="text-white mb-6"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
                fontWeight: 300,
                lineHeight: 1.0,
                letterSpacing: '-0.035em',
              }}
            >
              Faça parte da equipe que{' '}
              <span style={{ color: '#FFCC00', fontWeight: 500 }}>conecta marcas e negócios</span>
            </h1>

            <p className="text-white/75 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Na Eisen, cada pessoa faz a diferença. Somos uma distribuidora de 15 anos com cultura de
              resultado, time próximo e espaço real para crescimento.
            </p>
          </TrabalheAnimations>
        </div>
      </section>

      {/* ── 2. PILARES DA CULTURA ────────────────────────────────────── */}
      <section style={{ backgroundColor: '#F4F4F8' }} className="py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <TrabalheAnimations variant="fadeUp">
            <div className="mb-7">
              <SectionLabel variant="line">Nossa cultura</SectionLabel>
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
              Os três pilares que nos guiam
            </h2>
          </TrabalheAnimations>

          <div
            className="grid sm:grid-cols-3 gap-px rounded-2xl overflow-hidden"
            style={{ background: 'rgba(0,0,102,0.07)' }}
          >
            {PILARES.map((pilar, i) => (
              <TrabalheAnimations key={pilar.title} variant="fadeUp" delay={i * 0.08}>
                <div className="group relative bg-white overflow-hidden cursor-default h-full">
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{ background: pilar.accent }}
                  />
                  <div
                    className="absolute top-[10px] right-[10px] font-extrabold leading-none select-none pointer-events-none text-[10px] uppercase"
                    style={{ letterSpacing: '0.14em', color: 'rgba(0,0,0,0.18)', fontFamily: 'var(--font-display)' }}
                  >
                    {pilar.num}
                  </div>
                  <div className="p-10 flex flex-col gap-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: pilar.iconBg, color: pilar.iconColor }}
                    >
                      {pilar.icon}
                    </div>
                    <div>
                      <h3
                        className="font-bold text-lg mb-2"
                        style={{ color: '#0C0C14', fontFamily: 'var(--font-display)' }}
                      >
                        {pilar.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#78787E' }}>{pilar.desc}</p>
                    </div>
                  </div>
                </div>
              </TrabalheAnimations>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. BENEFÍCIOS ───────────────────────────────────────────── */}
      <section className="bg-white py-28 border-b border-eisen-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <TrabalheAnimations variant="fadeUp">
            <div className="mb-7">
              <SectionLabel variant="line">Benefícios</SectionLabel>
            </div>
            <h2
              className="mb-16 max-w-[520px]"
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.125rem)',
                fontWeight: 300,
                letterSpacing: '-1px',
                lineHeight: 1.06,
                color: '#08084A',
                fontFamily: 'var(--font-display)',
              }}
            >
              O que você encontra aqui
            </h2>
          </TrabalheAnimations>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden" style={{ background: 'rgba(0,0,102,0.07)' }}>
            {BENEFICIOS.map((b, i) => (
              <TrabalheAnimations key={b.title} variant="fadeUp" delay={i * 0.06}>
                <div className="group bg-white h-full overflow-hidden relative cursor-default">
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{ background: '#FFCC00' }}
                  />
                  <div className="p-8 flex items-start gap-5">
                    <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5"
                      style={{ background: 'rgba(0,0,102,0.06)', color: '#000066' }}>
                      {b.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-base mb-1.5" style={{ color: '#0C0C14' }}>{b.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#78787E' }}>{b.desc}</p>
                    </div>
                  </div>
                </div>
              </TrabalheAnimations>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. VAGAS ABERTAS ─────────────────────────────────────────── */}
      <section className="bg-white py-28 border-b border-eisen-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">

          {/* Header */}
          <TrabalheAnimations variant="fadeUp">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div>
                <div className="mb-5">
                  <SectionLabel variant="line">Vagas abertas</SectionLabel>
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
                  Oportunidades na Eisen
                </h2>
              </div>

              {/* Status badge */}
              {vagas.length > 0 ? (
                <div
                  className="shrink-0 self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ background: 'rgba(0,160,80,0.08)', border: '1px solid rgba(0,160,80,0.2)' }}
                >
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: '#00A050' }} />
                  <span className="text-xs font-semibold" style={{ color: '#005A2B' }}>
                    {vagas.length} {vagas.length === 1 ? 'vaga aberta' : 'vagas abertas'}
                  </span>
                </div>
              ) : (
                <div
                  className="shrink-0 self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.1)' }}
                >
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: '#999' }} />
                  <span className="text-xs font-semibold" style={{ color: '#666' }}>
                    Sem vagas no momento
                  </span>
                </div>
              )}
            </div>
          </TrabalheAnimations>

          <TrabalheAnimations variant="fadeUp" delay={0.08}>
            {vagas.length === 0 ? (
              /* ── Empty state ── */
              <div
                className="relative overflow-hidden mb-10"
                style={{ borderRadius: '20px', border: '1.5px solid rgba(0,0,102,0.09)', background: '#FAFAFA' }}
              >
                <div className="absolute pointer-events-none inset-0" style={{
                  background: 'radial-gradient(ellipse 60% 80% at 90% 50%, rgba(255,204,0,0.07) 0%, transparent 70%)',
                }} />
                <div className="relative flex flex-col lg:flex-row items-center gap-10 p-10 lg:p-14">
                  <div
                    className="shrink-0 flex items-center justify-center"
                    style={{ width: 72, height: 72, borderRadius: 18, background: 'rgba(0,0,102,0.06)' }}
                  >
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000066" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" />
                      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                      <line x1="12" y1="12" x2="12" y2="16" />
                      <line x1="10" y1="14" x2="14" y2="14" />
                    </svg>
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <h3
                      className="mb-2"
                      style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 300, color: '#0C0C14' }}
                    >
                      Nenhuma vaga aberta no momento
                    </h3>
                    <p className="text-sm leading-relaxed max-w-lg" style={{ color: '#78787E' }}>
                      Estamos sempre crescendo. Cadastre-se no banco de talentos e seja o primeiro a saber quando uma vaga surgir na sua área.
                    </p>
                  </div>
                  <a
                    href="https://eisen.vagas.solides.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-2 font-semibold px-6 py-3 hover:opacity-90 transition-opacity whitespace-nowrap"
                    style={{ background: '#000066', color: '#fff', borderRadius: '10px', fontSize: '0.875rem' }}
                  >
                    Cadastrar no banco de talentos
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ) : (
              <VagasFilter vagas={vagas} />
            )}

            {/* ── CTA Portal ── */}
            <style>{`
              .portal-banner {
                transition: transform 0.45s cubic-bezier(0.34,1.3,0.64,1), box-shadow 0.4s ease;
              }
              .portal-banner:hover {
                transform: scale(1.012);
                box-shadow: 0 24px 60px rgba(0,0,80,0.45);
              }
              .solides-pill {
                transform: rotate(-5deg);
                transition: transform 0.5s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease;
                overflow: hidden;
                position: relative;
              }
              .portal-banner:hover .solides-pill {
                transform: rotate(0deg) scale(1.06);
                box-shadow: 0 8px 28px rgba(139,47,201,0.28);
              }
              .solides-pill::after {
                content: '';
                position: absolute;
                top: 0; left: -80%;
                width: 50%; height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.65), transparent);
                transform: skewX(-18deg);
                pointer-events: none;
              }
              .portal-banner:hover .solides-pill::after {
                animation: solides-shine 0.55s ease forwards;
              }
              @keyframes solides-shine {
                to { left: 160%; }
              }
              .portal-btn {
                transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), filter 0.3s ease;
              }
              .portal-banner:hover .portal-btn {
                transform: scale(1.07);
                filter: brightness(1.08);
              }
            `}</style>
            <a
              href="https://eisen.vagas.solides.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="portal-banner relative flex flex-col sm:flex-row items-center justify-between gap-8 overflow-hidden"
              style={{
                borderRadius: '20px',
                background: 'linear-gradient(120deg, #000044 0%, #000066 50%, #0000A0 100%)',
                padding: 'clamp(28px, 4vw, 44px) clamp(28px, 4vw, 52px)',
              }}
            >
              {/* Pink glow top-right */}
              <div className="absolute pointer-events-none" style={{
                right: '-40px', top: '-40px', width: '320px', height: '280px',
                background: 'radial-gradient(circle at 60% 30%, rgba(255,196,218,0.22) 0%, transparent 65%)',
                filter: 'blur(60px)',
              }} />
              {/* Yellow glow bottom-center */}
              <div className="absolute pointer-events-none" style={{
                left: '30%', bottom: '-30px', width: '280px', height: '200px',
                background: 'radial-gradient(ellipse, rgba(255,204,0,0.10) 0%, transparent 65%)',
                filter: 'blur(50px)',
              }} />

              <div className="relative z-10">
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.25rem, 2vw, 1.625rem)',
                  fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.3, color: '#fff',
                  display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.55em',
                }}>
                  Portal de carreiras da Eisen na
                  <span
                    className="solides-pill"
                    style={{
                      display: 'inline-flex', alignItems: 'center',
                      background: '#fff', borderRadius: '10px',
                      padding: '6px 18px', lineHeight: 1,
                      boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/logos/solides.webp" alt="Solides" style={{ height: '0.95em', width: 'auto', display: 'block' }} />
                  </span>
                </h3>
              </div>

              <div className="relative z-10 shrink-0">
                <div
                  className="portal-btn inline-flex items-center gap-2.5 font-bold px-7 py-3.5 whitespace-nowrap"
                  style={{ background: '#FFCC00', color: '#08084A', borderRadius: '10px', fontSize: '0.9375rem' }}
                >
                  Acessar portal
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </div>
              </div>
            </a>
          </TrabalheAnimations>
        </div>
      </section>

      {/* ── 5. PROCESSO SELETIVO ─────────────────────────────────────── */}
      <section style={{ backgroundColor: '#F4F4F8' }} className="py-28 border-b border-eisen-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <TrabalheAnimations variant="fadeUp">
            <div className="mb-7">
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
              Nosso processo seletivo
            </h2>
          </TrabalheAnimations>

          {/* Timeline horizontal */}
          <div className="relative">
            {/* Connecting line — desktop only */}
            <div className="absolute hidden lg:block" style={{ top: 28, left: '12.5%', right: '12.5%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,102,0.15) 15%, rgba(0,0,102,0.15) 85%, transparent)' }} />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {PROCESSO.map((p, i) => (
                <TrabalheAnimations key={p.step} variant="fadeUp" delay={i * 0.1}>
                  <div className="flex flex-col gap-5">
                    {/* Step indicator */}
                    <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-0">
                      <div className="relative z-10 shrink-0">
                        {/* Outer ring */}
                        <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'white', border: '1.5px solid rgba(0,0,102,0.12)', boxShadow: '0 2px 12px rgba(0,0,102,0.08)' }}>
                          {/* Inner filled */}
                          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#000066', color: '#FFCC00' }}>
                            {p.icon}
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest lg:mt-4" style={{ color: 'rgba(0,0,102,0.35)' }}>
                        Etapa {p.step}
                      </span>
                    </div>

                    {/* Content */}
                    <div>
                      <h3
                        className="font-semibold text-lg mb-2"
                        style={{ color: '#0C0C14', fontFamily: 'var(--font-display)' }}
                      >
                        {p.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#78787E' }}>{p.desc}</p>
                    </div>
                  </div>
                </TrabalheAnimations>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. CURRÍCULO ESPONTÂNEO ──────────────────────────────────── */}
      <section className="py-28 border-b border-eisen-border" style={{ backgroundColor: '#F4F4F8' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <TrabalheAnimations variant="fadeUp">
            <div className="mb-5">
              <SectionLabel variant="line">Currículo espontâneo</SectionLabel>
            </div>
            <h2
              className="mb-3"
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.125rem)',
                fontWeight: 300,
                letterSpacing: '-1px',
                lineHeight: 1.06,
                color: '#08084A',
                fontFamily: 'var(--font-display)',
              }}
            >
              Deixe seu contato conosco
            </h2>
            <p className="text-eisen-soft text-sm max-w-xl mb-12">
              Mesmo que não haja uma vaga aberta agora, guardaremos seu perfil para futuras oportunidades.
            </p>
          </TrabalheAnimations>

          <TrabalheAnimations variant="fadeUp" delay={0.08}>
            <CurriculoForm />
          </TrabalheAnimations>
        </div>
      </section>

      {/* ── 7. CTA FINAL ─────────────────────────────────────────────── */}
      <section className="grain relative overflow-hidden py-28"
        style={{ background: 'linear-gradient(160deg, #000044 0%, #000066 55%, #00008F 100%)' }}>
        <div className="absolute pointer-events-none" style={{
          left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
          width: '700px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(255,196,218,0.16) 0%, transparent 65%)',
          filter: 'blur(70px)',
        }} />
        <div className="absolute pointer-events-none" style={{
          left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
          width: '800px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(0,68,240,0.25) 0%, transparent 65%)',
          filter: 'blur(90px)',
        }} />
        <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

        <div className="relative max-w-2xl mx-auto px-6 py-4 text-center">
          <TrabalheAnimations variant="fadeUp">
            <div className="flex justify-center mb-8">
              <SectionLabel variant="line-dark">Quer falar antes?</SectionLabel>
            </div>
            <h2
              className="text-white font-semibold mb-4"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.875rem, 4vw, 2.875rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.06,
              }}
            >
              Fale diretamente com o nosso time no RS
            </h2>
            <p className="mb-10 max-w-md mx-auto text-sm" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
              Se preferir conversar pelo WhatsApp antes de enviar o currículo, estamos à disposição.
            </p>
            <a
              href={wppRS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 font-bold px-8 py-4 hover:opacity-90 transition-opacity"
              style={{ background: '#FFCC00', color: '#08084A', borderRadius: '8px', fontWeight: 600 }}
            >
              <WhatsAppIcon />
              Falar pelo WhatsApp em RS
            </a>
          </TrabalheAnimations>
        </div>
      </section>
    </>
  )
}


function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
