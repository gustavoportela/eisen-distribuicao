interface SectionLabelProps {
  children: React.ReactNode
  /**
   * yellow / pink / blue / muted — sparkle icon (dark navy backgrounds)
   * line      — pill chip, navy accent (light section eyebrows)
   * line-dark — pill chip, pink accent (dark navy section eyebrows)
   */
  variant?: 'yellow' | 'pink' | 'blue' | 'muted' | 'line' | 'line-dark'
  className?: string
}

/* 4-pointed sparkle star used inside chips */
function ChipStar({ color }: { color: string }) {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill={color}>
      <path d="M12 2L13.09 9.26L20 12L13.09 14.74L12 22L10.91 14.74L4 12L10.91 9.26L12 2Z"/>
    </svg>
  )
}

export function SectionLabel({ children, variant = 'yellow', className = '' }: SectionLabelProps) {

  /* ── Light section pill chip ──────────────────────────────────────── */
  if (variant === 'line') {
    return (
      <div className={`inline-flex ${className}`}>
        <div
          className="flex items-center gap-2.5 px-4 py-2 rounded-full"
          style={{ background: 'rgba(0,0,102,0.07)', border: '1px solid rgba(0,0,102,0.11)' }}
        >
          <ChipStar color="#000066" />
          <span
            className="text-[10px] font-semibold uppercase"
            style={{ color: '#000066', letterSpacing: '0.15em' }}
          >
            {children}
          </span>
        </div>
      </div>
    )
  }

  /* ── Dark section pill chip ───────────────────────────────────────── */
  if (variant === 'line-dark') {
    return (
      <div className={`inline-flex ${className}`}>
        <div
          className="flex items-center gap-2.5 px-4 py-2 rounded-full"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
        >
          <ChipStar color="#FFC4DA" />
          <span
            className="text-[10px] font-semibold uppercase"
            style={{ color: 'rgba(255,255,255,0.58)', letterSpacing: '0.15em' }}
          >
            {children}
          </span>
        </div>
      </div>
    )
  }

  /* ── Sparkle variants (dark navy backgrounds) ─────────────────────── */
  const colors = {
    yellow: { dot: '#FFCC00',               text: '#FFCC00' },
    pink:   { dot: '#FFC4DA',               text: 'rgba(255,196,218,0.85)' },
    blue:   { dot: '#0044F0',               text: '#0044F0' },
    muted:  { dot: 'rgba(255,255,255,0.4)', text: 'rgba(255,255,255,0.5)' },
  } as const

  const c = colors[variant as keyof typeof colors] ?? colors.yellow

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L13.09 9.26L20 12L13.09 14.74L12 22L10.91 14.74L4 12L10.91 9.26L12 2Z" fill={c.dot} />
      </svg>
      <span className="text-label" style={{ color: c.text }}>{children}</span>
    </div>
  )
}
