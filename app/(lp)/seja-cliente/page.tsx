import Image from 'next/image'
import { Diamond } from '@/components/ui/Diamond'
import { StateSelector } from '@/components/ui/StateSelector'
import { BRANDS } from '@/lib/constants'

// Exibe os primeiros 6 logos do portfólio atual
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
    title: 'Marcas Premium',
    desc: 'Portfólio com as marcas mais desejadas do Brasil',
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
    desc: 'Centro de distribuição regional com entrega ágil',
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
    desc: 'Time comercial local que conhece o seu mercado',
  },
]

const STEPS = [
  {
    number: '01',
    title: 'Escolha seu estado',
    desc: 'Selecione RS, SC, PR ou SP para falar com o consultor da sua região.',
  },
  {
    number: '02',
    title: 'Fale com nosso comercial',
    desc: 'Converse diretamente pelo WhatsApp e tire todas as suas dúvidas.',
  },
  {
    number: '03',
    title: 'Receba proposta e comece a vender',
    desc: 'Tabela de preços, mix de produtos e condições especiais para o seu negócio.',
  },
]

export default function SejaClientePage() {
  return (
    <div className="min-h-screen">


      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section
        className="grain relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #000033 0%, #000055 60%, #00007A 100%)' }}
      >
        {/* Blue center glow */}
        <div className="absolute pointer-events-none" style={{
          left: '65%', top: '40%', transform: 'translate(-50%,-50%)',
          width: '900px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(0,68,240,0.22) 0%, transparent 65%)',
          filter: 'blur(100px)',
        }} />
        {/* Pink orb top-right */}
        <div className="absolute pointer-events-none" style={{
          right: '-40px', top: '-40px',
          width: '650px', height: '650px', borderRadius: '50%',
          background: 'radial-gradient(circle at 40% 40%, rgba(255,196,218,0.3) 0%, rgba(255,196,218,0.08) 50%, transparent 70%)',
          filter: 'blur(90px)',
        }} />
        {/* Yellow bottom-left accent */}
        <div className="absolute pointer-events-none" style={{
          left: '-60px', bottom: '-40px',
          width: '400px', height: '300px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(255,204,0,0.1) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }} />
        <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6" style={{ paddingTop: 'clamp(120px, 13vw, 160px)', paddingBottom: 'clamp(72px, 9vw, 112px)' }}>

          {/* Label */}
          <div className="flex items-center gap-2.5 mb-10">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="#FFCC00" strokeWidth="1.5" strokeLinejoin="round">
              <path d="M6.5 0.75L12.25 6.5L6.5 12.25L0.75 6.5L6.5 0.75Z" />
            </svg>
            <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              Distribuidora Especializada em Beleza
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-white"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.25rem, 5.5vw, 4.25rem)',
              fontWeight: 300,
              lineHeight: 1.04,
              letterSpacing: '-0.04em',
              maxWidth: 760,
              marginBottom: '1.75rem',
            }}
          >
            Amplie seu portfólio com as marcas de beleza mais{' '}
            <span style={{ color: '#FFCC00', fontWeight: 500 }}>desejadas do Brasil</span>
          </h1>

          {/* Divider */}
          <div style={{ width: 40, height: 1, background: 'rgba(255,255,255,0.12)', margin: '1.75rem 0' }} />

          {/* Features row */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-10">
            {['Marcas premium certificadas', 'Entrega por CD próprio', 'Suporte comercial presencial'].map((item) => (
              <span key={item} className="flex items-center gap-2.5" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', fontWeight: 400 }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#FFCC00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="7" cy="7" r="5.5" />
                  <polyline points="4.5,7 6.2,8.8 9.5,5.2" />
                </svg>
                {item}
              </span>
            ))}
          </div>

          <StateSelector buttonSize="lg" />
        </div>
      </section>

      {/* ── Logos Strip ─────────────────────────────────────────────────── */}
      <section className="border-b border-eisen-border bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
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

      {/* ── Diferenciais ────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#F7F7F5' }}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-center justify-center gap-2.5 mb-7">
            <div className="w-4 h-px shrink-0" style={{ background: '#000066' }} />
            <span className="text-[10px] font-semibold uppercase" style={{ color: '#000066', letterSpacing: '0.18em' }}>
              Nossos diferenciais
            </span>
            <div className="w-4 h-px shrink-0" style={{ background: '#000066' }} />
          </div>
          <h2
            className="text-center mb-12"
            style={{
              fontSize: 'clamp(2.25rem, 4vw, 3.125rem)',
              fontWeight: 300,
              letterSpacing: '-0.03em',
              lineHeight: 1.06,
              color: '#0C0C14',
              fontFamily: 'var(--font-display)',
            }}
          >
            Por que distribuidores escolhem a Eisen?
          </h2>

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

      {/* ── Como Funciona ────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-eisen-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
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
              fontWeight: 300,
              letterSpacing: '-0.03em',
              lineHeight: 1.06,
              color: '#0C0C14',
              fontFamily: 'var(--font-display)',
            }}
          >
            Começar a vender é simples e rápido
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

      {/* ── CTA Reforçado ────────────────────────────────────────────────── */}
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

        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-white font-semibold mb-3"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            Entre em contato com os nossos consultores especializados.
          </h2>
          <p className="mb-10 max-w-md mx-auto text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Selecione seu estado e fale agora com nosso consultor. Atendemos RS, SC, PR e SP.
          </p>

          <div className="flex justify-center">
            <StateSelector buttonSize="lg" />
          </div>
        </div>
      </section>

      {/* ── Mini Footer ─────────────────────────────────────────────────── */}
      <footer className="border-t border-white/10"
        style={{ background: 'linear-gradient(160deg, #000044 0%, #000066 100%)' }}>
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image src="/brand/logo-light.png" alt="Eisen Distribuição Especializada" width={90} height={24} className="h-7 w-auto" />
          <p className="text-white/75 text-xs">
            © {new Date().getFullYear()} Eisen Distribuição Especializada. Todos os direitos reservados.
          </p>
        </div>
      </footer>

    </div>
  )
}
