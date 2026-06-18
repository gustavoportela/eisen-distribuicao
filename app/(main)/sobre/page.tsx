import type { Metadata } from 'next'
import Image from 'next/image'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Diamond } from '@/components/ui/Diamond'
import { StateSelector } from '@/components/ui/StateSelector'
import { STATES } from '@/lib/constants'
import { SobreAnimations } from './SobreAnimations'
import { MissaoCard } from './MissaoCard'

export const metadata: Metadata = {
  title: 'Sobre a Eisen',
  description:
    'Conheça a história da Eisen Distribuição Especializada: 15 anos conectando grandes marcas de beleza aos pontos de venda com excelência, ética e relacionamento.',
}

const VALORES = [
  {
    num: '01',
    title: 'Excelência',
    text: 'Operação logística estruturada, garantindo entrega ágil em todas as regiões dos estados que atuamos.',
  },
  {
    num: '02',
    title: 'Ética',
    text: 'Relações comerciais transparentes e compromisso genuíno com cada parceiro e cliente.',
  },
  {
    num: '03',
    title: 'Relacionamento',
    text: 'Nosso modelo de negócio é consultivo, nosso time é capacitado para ajudar os nossos clientes a melhorarem seus resultados através dos produtos que distribuímos.',
  },
  {
    num: '04',
    title: 'Crescimento',
    text: 'Expansão sustentável, abrindo novos mercados sem abrir mão dos valores que nos definem.',
  },
]

const METRICS = [
  { value: '15', suffix: 'anos', label: 'de mercado' },
  { value: '4',  suffix: 'estados', label: 'de atuação' },
  { value: 'CD', suffix: 'próprio', label: 'Centro de distribuição' },
  { value: '+15 mil', suffix: 'clientes', label: 'atendidos' },
]

const TIMELINE = [
  { year: '2011', label: 'Fundação', desc: 'A Eisen nasce em 25 de Julho em Santa Cruz do Sul, RS, com foco em distribuição de cosméticos.' },
  { year: '2018', label: 'Nova Matriz', desc: 'Consolidação da nova matriz e estrutura logística própria em Santa Cruz do Sul.' },
  { year: '2019', label: 'Filial SC', desc: 'Início das operações em Santa Catarina, com CD próprio em Içara e equipe dedicada.' },
  { year: '2021', label: 'Filial PR', desc: 'Chegada ao Paraná com CD próprio em Curitiba e time presencial dedicado.' },
  { year: '2025', label: 'Filial SP', desc: 'Entrada no maior mercado do país, São Paulo, consolidando a presença nacional.' },
  { year: '2026', label: '15 anos de história', desc: 'Uma trajetória de aprendizado, parcerias sólidas e crescimento consistente.' },
]

export default function SobrePage() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────── */}
      <section
        className="grain relative overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #000033 0%, #000055 60%, #00007A 100%)',
          paddingTop: 'clamp(120px, 13vw, 160px)',
          paddingBottom: 'clamp(80px, 10vw, 120px)',
        }}
      >
        {/* Glows */}
        <div className="absolute pointer-events-none" style={{
          left: '55%', top: '20%',
          width: '800px', height: '800px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,68,240,0.18) 0%, transparent 60%)',
          filter: 'blur(100px)',
        }} />
        <div className="absolute pointer-events-none" style={{
          right: '-60px', top: '-60px',
          width: '700px', height: '700px', borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 35%, rgba(255,196,218,0.28) 0%, transparent 65%)',
          filter: 'blur(90px)',
        }} />
        <div className="absolute pointer-events-none" style={{
          left: '40%', bottom: '-40px',
          width: '500px', height: '300px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(255,204,0,0.07) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }} />
        <div className="absolute inset-0 bg-dot-pattern pointer-events-none opacity-25" />

        {/* CSS float keyframes */}
        <style>{`
          @keyframes floatA { 0%,100%{transform:translateY(0) rotate(-5deg)} 50%{transform:translateY(-10px) rotate(-5deg)} }
          @keyframes floatB { 0%,100%{transform:translateY(0) rotate(3deg)} 50%{transform:translateY(-14px) rotate(3deg)} }
          @keyframes floatC { 0%,100%{transform:translateY(0) rotate(-2deg)} 50%{transform:translateY(-8px) rotate(-2deg)} }
          @keyframes floatD { 0%,100%{transform:translateY(0) rotate(6deg)} 50%{transform:translateY(-12px) rotate(6deg)} }
          @keyframes floatE { 0%,100%{transform:translateY(0) rotate(-4deg)} 50%{transform:translateY(-9px) rotate(-4deg)} }
        `}</style>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_420px] gap-16 lg:gap-8 items-center">

            {/* LEFT: Copy */}
            <SobreAnimations variant="hero">

              {/* Label */}
              <div className="flex items-center gap-2.5 mb-10">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="#FFCC00" strokeWidth="1.5" strokeLinejoin="round">
                  <path d="M6.5 0.75L12.25 6.5L6.5 12.25L0.75 6.5L6.5 0.75Z" />
                </svg>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  Sobre a Eisen
                </span>
              </div>

              {/* Headline */}
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.25rem, 4.5vw, 4rem)',
                  fontWeight: 300,
                  lineHeight: 1.04,
                  letterSpacing: '-0.04em',
                  color: '#fff',
                  marginBottom: '2rem',
                }}
              >
                Uma distribuidora construída com o propósito de criar relacionamento entre negócios locais e{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #FFD6E7 0%, #FFC4DA 40%, #FF9CBE 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: 400,
                }}>
                  grandes marcas nacionais.
                </span>
              </h1>

              {/* Subtitle */}
              <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.85, maxWidth: 480, marginBottom: '2.5rem' }}>
                15 anos conectando grandes marcas de cosméticos e beleza aos pontos de venda,
                com estrutura própria, equipe presencial e compromisso verdadeiro.
              </p>

              {/* Stats strip */}
              <div style={{ display: 'flex', gap: 0, borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '1.75rem' }}>
                {[
                  { val: '15', unit: 'anos', label: 'de mercado' },
                  { val: '4', unit: 'estados', label: 'de atuação' },
                  { val: '+15k', unit: 'clientes', label: 'atendidos' },
                ].map((s, i) => (
                  <div key={i} style={{
                    flex: 1,
                    paddingRight: '1.5rem',
                    marginRight: '1.5rem',
                    borderRight: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                      fontWeight: 700,
                      color: '#FFCC00',
                      letterSpacing: '-0.05em',
                      lineHeight: 1,
                    }}>{s.val}</div>
                    <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600, letterSpacing: '0.04em', marginTop: 5 }}>{s.unit}</div>
                    <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.06em', marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>

            </SobreAnimations>

            {/* RIGHT: Floating brand composition */}
            <div className="hidden lg:block relative" style={{ height: 500 }}>

              {/* ANCHOR — Wella grande, levemente inclinado, alta opacidade */}
              <div style={{
                position: 'absolute', top: '6%', left: '0%',
                animation: 'floatA 6s ease-in-out infinite',
                background: 'rgba(255,255,255,0.09)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.16)',
                borderRadius: 20,
                padding: '18px 22px',
                display: 'flex', alignItems: 'center', gap: 16,
                boxShadow: '0 16px 48px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1)',
                width: 260,
              }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
                  <Image src="/logos/wella.svg" alt="Wella" width={36} height={36} style={{ objectFit: 'contain' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#fff', lineHeight: 1.25 }}>Wella Professionals</div>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginTop: 3 }}>Cuidados capilares</div>
                </div>
              </div>

              {/* STAT CHIP — métrica compacta, rotação oposta */}
              <div style={{
                position: 'absolute', top: '5%', right: '6%',
                animation: 'floatB 5.2s ease-in-out infinite 1.1s',
                background: 'rgba(255,204,0,0.1)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,204,0,0.22)',
                borderRadius: 40,
                padding: '10px 16px',
                display: 'flex', alignItems: 'center', gap: 8,
                boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
              }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#FFCC00', boxShadow: '0 0 6px #FFCC00' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,204,0,0.9)', letterSpacing: '0.02em' }}>+15 mil clientes ativos</span>
              </div>

              {/* DAILUS — card médio, rotação positiva */}
              <div style={{
                position: 'absolute', top: '32%', right: '2%',
                animation: 'floatC 6.8s ease-in-out infinite 0.5s',
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(14px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 16,
                padding: '14px 16px',
                display: 'flex', alignItems: 'center', gap: 12,
                boxShadow: '0 8px 28px rgba(0,0,0,0.28)',
                width: 210,
              }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
                  <Image src="/logos/dailus.png" alt="Dailus" width={28} height={28} style={{ objectFit: 'contain' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#fff', lineHeight: 1.2 }}>Dailus</div>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.38)', marginTop: 2 }}>Esmaltes & maquiagem</div>
                </div>
              </div>

              {/* PARFUM — card médio, sobrepõe levemente Dailus */}
              <div style={{
                position: 'absolute', top: '56%', right: '14%',
                animation: 'floatD 5.9s ease-in-out infinite 1.8s',
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(14px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 16,
                padding: '14px 16px',
                display: 'flex', alignItems: 'center', gap: 12,
                boxShadow: '0 8px 28px rgba(0,0,0,0.28)',
                width: 200,
              }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
                  <Image src="/logos/parfum.png" alt="Parfum Brasil" width={28} height={28} style={{ objectFit: 'contain' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#fff', lineHeight: 1.2 }}>Parfum Brasil</div>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.38)', marginTop: 2 }}>Perfumaria</div>
                </div>
              </div>

              {/* MINI LABEL — só texto, quebrando o padrão de cards */}
              <div style={{
                position: 'absolute', bottom: '10%', left: '4%',
                animation: 'floatE 7.2s ease-in-out infinite 0.9s',
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <Image src="/logos/loreal.svg" alt="L'Oréal" width={58} height={20} style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.3 }} />
                <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>e mais</span>
              </div>

              {/* Glow central sutil */}
              <div style={{
                position: 'absolute', top: '45%', left: '45%', transform: 'translate(-50%,-50%)',
                width: 280, height: 280, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,196,218,0.1) 0%, transparent 70%)',
                filter: 'blur(50px)', pointerEvents: 'none',
              }} />
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. SPLIT — HISTÓRIA ──────────────────────────── */}
      <section className="bg-white py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <SobreAnimations variant="fadeUp">
              <div className="mb-7">
                <SectionLabel variant="line">Nossa história</SectionLabel>
              </div>
              <h2 className="text-headline text-eisen-navy mb-6">
                Um propósito claro desde o primeiro dia
              </h2>
              <p className="text-eisen-soft leading-relaxed text-base mb-5">
                A Eisen nasceu em 2011 com um propósito claro: conectar grandes marcas de
                cosméticos e beleza aos pontos de venda com excelência, ética e relacionamento
                verdadeiro.
              </p>
              <p className="text-eisen-faint leading-relaxed text-sm">
                Ao longo de quinze anos, construímos muito mais do que uma operação de
                distribuição. Construímos parcerias sólidas, baseadas em confiança mútua e
                entrega consistente: da prateleira ao consumidor final.
              </p>
            </SobreAnimations>

            <SobreAnimations variant="fadeUp" delay={0.1}>
              <MissaoCard />
            </SobreAnimations>
          </div>
        </div>
      </section>

      {/* ── 3. NÚMEROS ──────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-white/10"
        style={{ background: 'linear-gradient(160deg, #000044 0%, #000066 100%)' }}>
        {/* Center glow */}
        <div className="absolute pointer-events-none" style={{
          left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
          width: '600px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(0,68,240,0.25) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10">
            {METRICS.map((m, i) => (
              <SobreAnimations key={i} variant="fadeUp" delay={i * 0.08}>
                <div className="flex flex-col justify-between py-16 px-8 lg:px-10">
                  <div
                    className="font-display font-semibold leading-none mb-4 tabular-nums"
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.04em', color: '#FFCC00', fontFamily: 'var(--font-display)' }}
                  >
                    {m.value}
                  </div>
                  <div>
                    <div className="text-eisen-yellow font-bold text-sm uppercase tracking-wider mb-0.5">
                      {m.suffix}
                    </div>
                    <div className="text-white/75 text-xs uppercase tracking-wide">
                      {m.label}
                    </div>
                  </div>
                </div>
              </SobreAnimations>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. VALORES ──────────────────────────────────── */}
      <section className="py-28" style={{ backgroundColor: '#F4F4F8' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SobreAnimations variant="fadeUp">
            <div className="mb-7">
              <SectionLabel variant="line">Valores</SectionLabel>
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
              O que nos guia em cada decisão
            </h2>
          </SobreAnimations>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-px rounded-2xl overflow-hidden"
            style={{ background: 'rgba(0,0,0,0.07)' }}
          >
            {VALORES.map((v, i) => (
              <SobreAnimations key={v.num} variant="fadeUp" delay={i * 0.07}>
                <div className="group relative bg-white overflow-hidden cursor-default h-full">
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{ background: '#000066' }}
                  />
                  <div
                    className="absolute top-[10px] right-[10px] font-extrabold leading-none select-none pointer-events-none text-[10px] uppercase"
                    style={{ letterSpacing: '0.14em', color: 'rgba(0,0,0,0.18)', fontFamily: 'var(--font-display)' }}
                  >
                    {v.num}
                  </div>
                  <div className="relative z-10 p-10">
                    <h3 className="font-bold text-xl mb-3" style={{ color: '#0C0C14', fontFamily: 'var(--font-display)' }}>{v.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#78787E' }}>{v.text}</p>
                  </div>
                </div>
              </SobreAnimations>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. LINHA DO TEMPO ───────────────────────────── */}
      <section className="grain relative overflow-hidden py-28"
        style={{ background: 'linear-gradient(160deg, #000044 0%, #000066 55%, #00008F 100%)' }}>
        <div className="absolute inset-0 bg-dot-pattern pointer-events-none opacity-30" />
        <div className="absolute pointer-events-none" style={{
          right: '-60px', top: '50%', transform: 'translateY(-50%)',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,196,218,0.18) 0%, transparent 65%)',
          filter: 'blur(70px)',
        }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10">
          <SobreAnimations variant="fadeUp">
            <div className="mb-7">
              <SectionLabel variant="line-dark">Nossa trajetória</SectionLabel>
            </div>
            <h2 className="text-headline text-white mb-16">
              De 2011 a 2026: quinze anos de história
            </h2>
          </SobreAnimations>

          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10 hidden sm:block" />
            <div className="flex flex-col gap-10">
              {TIMELINE.map((item, i) => (
                <SobreAnimations key={item.year} variant="fadeUp" delay={i * 0.06}>
                  <div className="flex gap-8 items-start group">
                    <div className="relative flex-none pt-1 hidden sm:block">
                      <div
                        className="w-4 h-4 rounded-full border-2 border-eisen-yellow bg-eisen-navy-dark group-hover:bg-eisen-yellow transition-colors duration-200"
                      />
                    </div>
                    <div className="flex-1">
                      <span
                        className="font-extrabold block mb-1"
                        style={{ fontSize: '1.5rem', letterSpacing: '-0.03em', color: '#FFCC00', fontFamily: 'var(--font-display)' }}
                      >
                        {item.year}
                      </span>
                      <h3 className="text-white font-semibold text-base mb-2">{item.label}</h3>
                      <p className="text-white/75 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </SobreAnimations>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. PRESENÇA — ESTADOS ──────────────────────── */}
      <section className="bg-white py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SobreAnimations variant="fadeUp">
            <div className="mb-5">
              <SectionLabel variant="line">Presença Regional</SectionLabel>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
              <h2 className="text-headline max-w-[420px]" style={{ color: '#000066' }}>
                Operação em<br />quatro estados
              </h2>
              <p className="text-eisen-faint text-sm leading-relaxed max-w-[280px] hidden lg:block">
                Expansão contínua com estrutura logística própria e equipe presencial em cada região.
              </p>
            </div>
          </SobreAnimations>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STATES.map((state, i) => (
              <SobreAnimations key={state.sigla} variant="fadeUp" delay={i * 0.08}>
                <div
                  className="group relative overflow-hidden cursor-default"
                  style={{
                    borderRadius: '14px',
                    background: '#FFFFFF',
                    border: '1.5px solid rgba(0,0,102,0.09)',
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: 'linear-gradient(90deg, #000066, #0044F0)' }} />
                  <div
                    className="absolute -right-2 -bottom-4 font-extrabold leading-none select-none pointer-events-none"
                    style={{ fontSize: '6rem', letterSpacing: '-0.04em', color: 'rgba(0,0,102,0.04)', fontFamily: 'var(--font-display)' }}
                  >
                    {i + 1}
                  </div>
                  <div className="relative z-10 p-7 pt-8">
                    <div className="flex items-start justify-between mb-7">
                      <span
                        className="font-extrabold leading-none tracking-tight"
                        style={{ fontSize: '2.75rem', letterSpacing: '-0.03em', color: '#000066', fontFamily: 'var(--font-display)' }}
                      >
                        {state.sigla}
                      </span>
                      {state.novo && (
                        <span className="text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-wider"
                          style={{ background: '#F4F4F8', color: '#78787E', border: '1px solid rgba(0,0,0,0.07)' }}>
                          Novo
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-1 mb-5">
                      <span className="text-eisen-navy font-semibold text-sm">{state.nome}</span>
                      <span className="text-eisen-faint text-xs">{state.cidade}</span>
                    </div>
                    <div className="pt-4 border-t border-eisen-border/60">
                      <span className="text-eisen-faint text-xs leading-relaxed">{state.detalhe}</span>
                    </div>
                  </div>
                </div>
              </SobreAnimations>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA FINAL ────────────────────────────────── */}
      <section className="grain relative py-32 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #000044 0%, #000066 55%, #00008F 100%)' }}>
        <div className="absolute pointer-events-none" style={{
          left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
          width: '700px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(255,196,218,0.18) 0%, transparent 65%)',
          filter: 'blur(70px)',
        }} />
        <div className="absolute pointer-events-none" style={{
          left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
          width: '800px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(0,68,240,0.25) 0%, transparent 65%)',
          filter: 'blur(90px)',
        }} />
        <div className="absolute inset-0 bg-dot-pattern pointer-events-none opacity-40" />

        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <SobreAnimations variant="fadeUp">
            <div className="flex justify-center mb-8">
              <SectionLabel variant="line-dark">Seja um parceiro Eisen</SectionLabel>
            </div>
            <h2 className="text-headline text-white mb-5">
              Pronto para fazer parte<br />
              dessa <span style={{ color: '#FFCC00' }}>história</span>?
            </h2>
            <p className="text-white/75 mb-12 max-w-[380px] mx-auto leading-[1.85]" style={{ fontSize: '1.0625rem' }}>
              Escolha seu estado e entre em contato com o time comercial Eisen.
            </p>
            <div className="flex justify-center">
              <StateSelector buttonSize="lg" />
            </div>
          </SobreAnimations>
        </div>
      </section>
    </>
  )
}
