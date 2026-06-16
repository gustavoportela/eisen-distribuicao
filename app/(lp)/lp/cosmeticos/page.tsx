import type { Metadata } from 'next'
import Image from 'next/image'
import Script from 'next/script'
import { Diamond } from '@/components/ui/Diamond'
import { StateSelector } from '@/components/ui/StateSelector'
import { BRANDS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Distribuidora de Cosméticos Premium | Eisen Distribuição',
  description:
    'Venda Dailus, Wella, Parfum Brasil, Felps e muito mais com entrega rápida e suporte presencial. Fale com o comercial da Eisen hoje.',
  openGraph: {
    title: 'Venda as marcas de cosméticos mais desejadas do Brasil',
    description:
      'Dailus, Wella, Parfum Brasil, Felps e muito mais: entrega rápida e suporte presencial. Seja parceiro Eisen.',
    type: 'website',
  },
  robots: { index: false, follow: false },
}

const LP_BRANDS = BRANDS.slice(0, 6)

const DIFERENCIAIS = [
  {
    num: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Marcas de Desejo',
    desc: 'Portfólio com as marcas que seus clientes já conhecem e pedem por nome.',
  },
  {
    num: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h5l2 3v4h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: 'CD Próprio',
    desc: 'Centro de distribuição regional com entregas ágeis e rastreáveis em todo o Sul e SP.',
  },
  {
    num: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Suporte Presencial',
    desc: 'Consultores de vendas na sua região, do atendimento à reposição, sempre perto.',
  },
]

export default function LpCosmeticosPage() {
  return (
    <>
      <Script id="lp-cosmeticos-pixel" strategy="afterInteractive">
        {`if(typeof fbq !== 'undefined'){ fbq('track', 'ViewContent', { content_name: 'LP Cosméticos' }); }`}
      </Script>

      <div className="min-h-screen">


        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section
          className="grain relative overflow-hidden pt-16 pb-20 lg:pt-20 lg:pb-28"
          style={{ background: 'linear-gradient(160deg, #000044 0%, #000066 55%, #00008F 100%)' }}
        >
          {/* Blue center glow */}
          <div className="absolute pointer-events-none" style={{
            left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
            width: '800px', height: '500px', borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(0,68,240,0.28) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }} />
          {/* Pink orb top-right */}
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
              <span className="text-eisen-yellow text-label tracking-widest">Distribuição de Cosméticos Premium</span>
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
              Venda as marcas de cosméticos{' '}
              <span style={{ color: '#FFCC00' }}>mais desejadas do Brasil</span>
            </h1>

            <p className="text-white/75 text-base lg:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Dailus, Wella, Parfum Brasil, Felps e muito mais: entrega rápida e suporte presencial.
            </p>

            <div className="flex justify-center">
              <StateSelector buttonSize="lg" />
            </div>
          </div>
        </section>

        {/* ── Logos strip ───────────────────────────────────────────────── */}
        <section className="bg-white border-b border-eisen-border">
          <div className="max-w-5xl mx-auto px-6 py-10">
            <p className="text-label text-eisen-faint text-center mb-8">Marcas do nosso portfólio</p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center justify-items-center">
              {LP_BRANDS.map((brand) => (
                <div key={brand.name} className="flex items-center justify-center h-12 w-full">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={90}
                    height={36}
                    className="object-contain opacity-50"
                    style={{ maxHeight: 36 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Diferenciais ──────────────────────────────────────────────── */}
        <section style={{ backgroundColor: '#F7F7F5' }}>
          <div className="max-w-5xl mx-auto px-6 py-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2.5 mb-7">
                <div className="w-4 h-px shrink-0" style={{ background: '#000066' }} />
                <span className="text-[10px] font-semibold uppercase" style={{ color: '#000066', letterSpacing: '0.18em' }}>
                  Por que a Eisen?
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
                Tudo que você precisa para vender mais
              </h2>
            </div>

            <div
              className="grid sm:grid-cols-3 gap-px rounded-2xl overflow-hidden"
              style={{ background: 'rgba(0,0,0,0.07)' }}
            >
              {DIFERENCIAIS.map((d) => (
                <div
                  key={d.title}
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
                    {d.num}
                  </div>
                  <div className="p-10 flex flex-col gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0,0,102,0.06)', color: '#000066' }}>
                      {d.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2" style={{ color: '#0C0C14' }}>{d.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#78787E' }}>{d.desc}</p>
                    </div>
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
              <span className="text-[10px] font-semibold uppercase" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.18em' }}>Proposta em até 24h</span>
              <div className="w-4 h-px" style={{ background: 'rgba(255,255,255,0.3)' }} />
            </div>
            <h2
              className="text-white font-semibold mb-3"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', letterSpacing: '-0.03em', lineHeight: 1.05 }}
            >
              Fale agora e receba proposta em até 24h
            </h2>
            <p className="mb-10 max-w-md mx-auto text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Selecione seu estado e fale com o consultor da sua região pelo WhatsApp.
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
