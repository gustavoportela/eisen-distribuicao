const WORDS = [
  'Marcas de Desejo',
  'Operação Própria',
  'Atendimento Presencial',
  'Logística Ágil',
  'Curadoria Premium',
  'Grandes Marcas',
  'Distribuidora Especializada',
]

function Star() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <path
        d="M12 2L13.09 9.26L20 12L13.09 14.74L12 22L10.91 14.74L4 12L10.91 9.26L12 2Z"
        fill="#FFC4DA"
        opacity="1"
      />
    </svg>
  )
}

export function Ticker() {
  const items = [...WORDS, ...WORDS, ...WORDS, ...WORDS]

  return (
    <div
      style={{
        borderTop: '1px solid rgba(0,0,0,0.06)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
        background: '#FAFAFA',
        overflow: 'hidden',
        padding: '16px 0',
      }}
    >
      <div className="flex items-center" style={{ animation: 'marquee 36s linear infinite' }}>
        {items.map((word, i) => (
          <span key={i} className="flex items-center shrink-0" style={{ gap: '1.75rem', paddingRight: '1.75rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.8125rem',
                fontWeight: 500,
                letterSpacing: '0.04em',
                color: '#3A3A5C',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              {word}
            </span>
            <Star />
          </span>
        ))}
      </div>
    </div>
  )
}
