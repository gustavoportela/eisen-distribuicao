import type { Metadata } from 'next'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Diamond } from '@/components/ui/Diamond'
import { CurriculoForm } from './CurriculoForm'
import { TrabalheAnimations } from './TrabalheAnimations'
import { wppLink } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Trabalhe Conosco',
  description: 'Faça parte da equipe Eisen. Vagas abertas e currículo espontâneo para profissionais de vendas, logística e muito mais.',
}

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


export default function TrabalheConoscoPage() {
  const wppRS = wppLink('RS')

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
                fontWeight: 700,
                lineHeight: 1.0,
                letterSpacing: '-0.035em',
              }}
            >
              Faça parte da equipe que{' '}
              <span style={{ color: '#FFCC00' }}>conecta marcas e negócios</span>
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

      {/* ── 3. VAGAS ABERTAS ─────────────────────────────────────────── */}
      <section className="bg-white py-28 border-b border-eisen-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <TrabalheAnimations variant="fadeUp">
            <div className="mb-5">
              <SectionLabel variant="line">Vagas abertas</SectionLabel>
            </div>
            <h2
              className="mb-12 max-w-[460px]"
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
          </TrabalheAnimations>

          <TrabalheAnimations variant="fadeUp" delay={0.08}>
            <iframe
              src="https://eisen.vagas.solides.com.br/"
              title="Vagas abertas na Eisen"
              className="w-full"
              style={{
                minHeight: '700px',
                border: 'none',
                borderRadius: '14px',
                display: 'block',
              }}
              loading="lazy"
            />
            <div className="mt-6 flex justify-end">
              <a
                href="https://eisen.vagas.solides.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-75 transition-opacity"
                style={{ color: '#000066' }}
              >
                Abrir portal completo
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </TrabalheAnimations>
        </div>
      </section>

      {/* ── 4. CURRÍCULO ESPONTÂNEO ──────────────────────────────────── */}
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

      {/* ── 5. CTA FINAL ─────────────────────────────────────────────── */}
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
