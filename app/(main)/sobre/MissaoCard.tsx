'use client'

const MISSAO_VALORES = [
  { label: 'Excelência' },
  { label: 'Ética' },
  { label: 'Relacionamento' },
]

export function MissaoCard() {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden cursor-default select-none"
      style={{
        background: 'linear-gradient(145deg, #08084A 0%, #000066 60%, #0a0a5c 100%)',
        border: '1px solid rgba(255,196,218,0.15)',
        boxShadow: '0 24px 80px rgba(0,0,40,0.35)',
        transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s cubic-bezier(0.22,1,0.36,1)',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'
        ;(e.currentTarget as HTMLElement).style.boxShadow = '0 36px 100px rgba(0,0,40,0.45), 0 0 0 1px rgba(255,196,218,0.28)'
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
        ;(e.currentTarget as HTMLElement).style.boxShadow = '0 24px 80px rgba(0,0,40,0.35)'
      }}
    >
      {/* Dot grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />

      {/* Pink glow — top right */}
      <div className="absolute top-0 right-0 pointer-events-none" style={{
        width: 280, height: 280,
        background: 'radial-gradient(circle at 70% 20%, rgba(255,196,218,0.18) 0%, transparent 65%)',
      }} />

      {/* Yellow glow — bottom left */}
      <div className="absolute bottom-0 left-0 pointer-events-none" style={{
        width: 200, height: 200,
        background: 'radial-gradient(circle at 30% 80%, rgba(255,204,0,0.10) 0%, transparent 65%)',
      }} />

      <div className="relative z-10 p-8 lg:p-10 flex flex-col gap-8">

        {/* Header row */}
        <div className="flex items-start justify-between">
          {/* Sparkle icon */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: 'rgba(255,196,218,0.12)', border: '1px solid rgba(255,196,218,0.2)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFC4DA">
              <path d="M12 0C12 0 13.2 7.8 24 12C13.2 16.2 12 24 12 24C12 24 10.8 16.2 0 12C10.8 7.8 12 0 12 0Z" />
            </svg>
          </div>

          {/* 15 anos badge */}
          <div
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(255,204,0,0.1)', border: '1px solid rgba(255,204,0,0.22)' }}
          >
            <span style={{ fontSize: '0.625rem', fontWeight: 700, color: '#FFCC00', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Desde 2011
            </span>
          </div>
        </div>

        {/* Missão */}
        <div>
          <span
            className="block mb-4"
            style={{ fontSize: '0.625rem', fontWeight: 700, color: '#FFCC00', letterSpacing: '0.22em', textTransform: 'uppercase' }}
          >
            Nossa missão
          </span>

          <div style={{ height: 1, width: 32, background: '#FFCC00', marginBottom: '1.25rem', borderRadius: 2 }} />

          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
              fontWeight: 600,
              lineHeight: 1.5,
              letterSpacing: '-0.02em',
              color: '#ffffff',
            }}
          >
            Conectar marcas de desejo aos pontos de venda com excelência, ética e relacionamento verdadeiro.
          </p>
        </div>

        {/* Divisor */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.08)' }} />

        {/* Três pilares */}
        <div className="grid grid-cols-3 gap-4">
          {MISSAO_VALORES.map((v, i) => (
            <div key={i} className="flex flex-col gap-2">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="#FFCC00">
                <path d="M12 0C12 0 13.2 7.8 24 12C13.2 16.2 12 24 12 24C12 24 10.8 16.2 0 12C10.8 7.8 12 0 12 0Z" />
              </svg>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.01em' }}>
                {v.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
