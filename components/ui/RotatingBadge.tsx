import Image from 'next/image'

interface RotatingBadgeProps {
  size?: number
  className?: string
  style?: React.CSSProperties
}

const TEXT = 'EISEN DISTRIBUIÇÃO · 15 ANOS DE MERCADO · '

export function RotatingBadge({ size = 156, className = '', style }: RotatingBadgeProps) {
  const cx   = size / 2
  const cy   = size / 2
  const r    = size * 0.42
  const circ = 2 * Math.PI * r
  const id   = `rb-${size}`

  const fontSize      = size * 0.062
  const charBaseWidth = fontSize * 0.52
  const letterSpacing = (circ / TEXT.length) - charBaseWidth

  return (
    <div
      className={className}
      style={{ position: 'relative', width: size, height: size, flexShrink: 0, ...style }}
    >
      {/* Anel de texto — CSS spin anti-horário, zero JS */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          animation: 'spin-ccw 18s linear infinite',
          willChange: 'transform',
        }}
      >
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle
            cx={cx} cy={cy} r={r}
            fill="none"
            stroke="rgba(0,0,102,0.12)"
            strokeWidth="0.8"
            strokeDasharray="2.5 5.5"
          />
          <defs>
            <path
              id={id}
              d={`M ${cx},${cy} m -${r},0 a ${r},${r} 0 1,1 ${r * 2},0 a ${r},${r} 0 1,1 -${r * 2},0`}
            />
          </defs>
          <text
            fill="rgba(8,8,74,0.60)"
            fontSize={fontSize}
            fontWeight="500"
            letterSpacing={Math.max(letterSpacing, 1.5)}
            fontFamily="var(--font-display)"
          >
            <textPath href={`#${id}`} startOffset="0%">
              {TEXT}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Logo 15 anos — estático */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <Image
          src="/brand/logo-15anos-v.png"
          alt="15 Anos Eisen"
          width={Math.round(size * 0.38)}
          height={Math.round(size * 0.38)}
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  )
}
