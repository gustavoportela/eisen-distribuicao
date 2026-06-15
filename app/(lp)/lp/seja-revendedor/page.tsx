import type { Metadata } from 'next'
import Script from 'next/script'
import Image from 'next/image'
import { Diamond } from '@/components/ui/Diamond'
import { StateSelector } from '@/components/ui/StateSelector'

export const metadata: Metadata = {
  title: 'Seja um Revendedor Eisen | Distribuição de Beleza',
  description:
    'Entre no mercado de distribuição de beleza com as melhores marcas e suporte completo da Eisen. Fale com nosso comercial hoje.',
  openGraph: {
    title: 'Seja um revendedor das marcas que seus clientes já pedem',
    description:
      'Entre no mercado de distribuição de beleza com as melhores marcas e suporte completo da Eisen.',
    type: 'website',
  },
  robots: { index: false, follow: false },
}

const BENEFICIOS = [
  {
    num: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Marcas Premium',
    desc: 'Revenda Boticário, Eudora, Vult, L\'Oréal e outras marcas que seus clientes já conhecem.',
  },
  {
    num: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: 'Condições Competitivas',
    desc: 'Tabela de preços especial, mix exclusivo e prazos de pagamento para revendedores.',
  },
  {
    num: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    title: 'Suporte Completo',
    desc: 'Consultor dedicado na sua região, treinamentos e suporte do pedido à entrega.',
  },
]

const STEPS = [
  {
    number: '01',
    title: 'Escolha seu estado',
    desc: 'Selecione RS, SC, PR ou SP e fale com o consultor da sua região.',
  },
  {
    number: '02',
    title: 'Receba sua proposta',
    desc: 'Em até 24h você recebe tabela de preços, mix e condições para revendedores.',
  },
  {
    number: '03',
    title: 'Comece a vender',
    desc: 'Com estoque, entrega ágil e suporte presencial, você vende mais em menos tempo.',
  },
]

export default function LpSejaRevendedorPage() {
  return (
    <>
      <Script id="lp-seja-revendedor-pixel" strategy="afterInteractive">
        {`if(typeof fbq !== 'undefined'){ fbq('track', 'ViewContent', { content_name: 'LP Seja Revendedor' }); }`}
      </Script>

      <div className="min-h-screen">


        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section
          className="grain relative overflow-hidden pt-16 pb-20 lg:pt-20 lg:pb-28"
          style={{ background: 'linear-gradient(160deg, #000044 0%, #000066 55%, #00008F 100%)' }}
        >
          <div className="absolute pointer-events-none" style={{
            left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
            width: '800px', height: '500px', borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(0,68,240,0.28) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }} />
          <div className="absolute pointer-events-none" style={{
            right: '-60px', top: '-60px',
            width: '600px', height: '600px', borderRadius: '50%',
            background: 'radial-gradient(circle at 40% 40%, rgba(255,196,218,0.35) 0%, rgba(255,196,218,0.10) 45%, transparent 68%)',
            filter: 'blur(70px)',
          }} />
          <div className="absolute inset-0 bg-dot-pattern opacity-35 pointer-events-none" />

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
              style={{ background: 'rgba(255,204,0,0.12)', border: '1px solid rgba(255,204,0,0.28)' }}>
              <Diamond size="sm" />
              <span className="text-eisen-yellow text-label tracking-widest">Oportunidade de Negócio</span>
            </div>

            <h1
              className="text-white mb-5"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 600,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
              }}
            >
              Seja um revendedor das marcas que{' '}
              <span style={{ color: '#FFCC00' }}>seus clientes já pedem</span>
            </h1>

            <p className="text-white/75 text-base lg:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Entre no mercado de distribuição de beleza com as melhores marcas e suporte completo da Eisen.
            </p>

            <div className="flex justify-center">
              <StateSelector buttonSize="lg" />
            </div>
          </div>
        </section>

        {/* ── Benefícios ────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: '#F7F7F5' }}>
          <div className="max-w-5xl mx-auto px-6 py-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2.5 mb-7">
                <div className="w-4 h-px shrink-0" style={{ background: '#000066' }} />
                <span className="text-[10px] font-semibold uppercase" style={{ color: '#000066', letterSpacing: '0.18em' }}>
                  Por que ser revendedor Eisen?
                </span>
                <div className="w-4 h-px shrink-0" style={{ background: '#000066' }} />
              </div>
              <h2
                style={{
                  fontSize: 'clamp(2.25rem, 4vw, 3.125rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.06,
                  color: '#0C0C14',
                  fontFamily: 'var(--font-display)',
                }}
              >
                Tudo para você vender com confiança
              </h2>
            </div>

            <div
              className="grid sm:grid-cols-3 gap-px rounded-2xl overflow-hidden"
              style={{ background: 'rgba(0,0,0,0.07)' }}
            >
              {BENEFICIOS.map((b) => (
                <div
                  key={b.title}
                  className="group relative bg-white overflow-hidden cursor-default"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{ background: '#000066' }}
                  />
                  <div
                    className="absolute top-[10px] right-[10px] font-extrabold leading-none select-none pointer-events-none text-[10px] uppercase"
                    style={{ letterSpacing: '0.14em', color: 'rgba(0,0,0,0.18)', fontFamily: 'var(--font-display)' }}
                  >
                    {b.num}
                  </div>
                  <div className="p-10 flex flex-col gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0,0,102,0.06)', color: '#000066' }}>
                      {b.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2" style={{ color: '#0C0C14' }}>{b.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#78787E' }}>{b.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Como funciona ─────────────────────────────────────────────── */}
        <section className="bg-white border-b border-eisen-border">
          <div className="max-w-5xl mx-auto px-6 py-20">
            <div className="flex items-center gap-2.5 mb-7">
              <div className="w-4 h-px shrink-0" style={{ background: '#000066' }} />
              <span className="text-[10px] font-semibold uppercase" style={{ color: '#000066', letterSpacing: '0.18em' }}>
                Como funciona
              </span>
            </div>
            <h2
              className="mb-12 max-w-xl"
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.125rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.06,
                color: '#0C0C14',
                fontFamily: 'var(--font-display)',
              }}
            >
              Simples e rápido para começar
            </h2>

            <div className="grid sm:grid-cols-3 gap-8 lg:gap-12 relative">
              <div className="absolute top-8 left-[16.66%] right-[16.66%] h-px hidden sm:block" style={{ background: 'rgba(0,0,0,0.07)' }} />
              {STEPS.map((step) => (
                <div key={step.number} className="flex flex-col gap-4">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 relative z-10"
                    style={{ background: '#000066' }}>
                    <span className="font-extrabold" style={{ color: '#FFCC00', fontSize: '1.5rem', letterSpacing: '-0.04em' }}>
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1" style={{ color: '#0C0C14' }}>{step.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#78787E' }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA repetição ─────────────────────────────────────────────── */}
        <section className="grain relative overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #000044 0%, #000066 55%, #00008F 100%)' }}>
          <div className="absolute pointer-events-none" style={{
            left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
            width: '700px', height: '400px', borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(0,68,240,0.3) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }} />
          <div className="absolute pointer-events-none" style={{
            right: '-60px', bottom: '-60px',
            width: '500px', height: '400px', borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(255,196,218,0.18) 0%, transparent 65%)',
            filter: 'blur(70px)',
          }} />
          <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

          <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
            <div className="flex items-center justify-center gap-2.5 mb-8">
              <div className="w-4 h-px" style={{ background: 'rgba(255,255,255,0.3)' }} />
              <span className="text-[10px] font-semibold uppercase" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.18em' }}>Comece agora</span>
              <div className="w-4 h-px" style={{ background: 'rgba(255,255,255,0.3)' }} />
            </div>
            <h2
              className="text-white font-semibold mb-3"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', letterSpacing: '-0.03em', lineHeight: 1.05 }}
            >
              Quero ser revendedor
            </h2>
            <p className="mb-10 max-w-md mx-auto text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Selecione seu estado e fale agora com o consultor da sua região. Proposta em até 24h.
            </p>
            <div className="flex justify-center">
              <StateSelector buttonSize="lg" />
            </div>
          </div>
        </section>

        {/* ── Mini footer ───────────────────────────────────────────────── */}
        <footer className="border-t border-white/10"
          style={{ background: 'linear-gradient(160deg, #000044 0%, #000066 100%)' }}>
          <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Image src="/brand/logo-light.png" alt="Eisen Distribuição Especializada" width={90} height={24} className="h-7 w-auto" />
            <p className="text-white/75 text-xs">
              © {new Date().getFullYear()} Eisen Distribuição Especializada. Todos os direitos reservados.
            </p>
          </div>
        </footer>

      </div>
    </>
  )
}
