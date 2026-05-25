'use client'

import { motion } from 'framer-motion'

interface RotatingBadgeProps {
  size?: number
  className?: string
  style?: React.CSSProperties
}

// 43 chars — calculado para preencher 1 volta exata na circunferência
const TEXT = 'EISEN DISTRIBUIÇÃO · 15 ANOS DE MERCADO · '

export function RotatingBadge({ size = 156, className = '', style }: RotatingBadgeProps) {
  const cx   = size / 2
  const cy   = size / 2
  // r maior → mais circunferência → texto cabe em 1 volta sem emenda
  const r    = size * 0.42
  const circ = 2 * Math.PI * r                   // circunferência em SVG units
  const id   = 'rb-circle'

  // fontSize e letterSpacing ajustados para que 43 chars preencham ~circ
  const fontSize      = size * 0.062             // ~9.7px @ 156
  const charBaseWidth = fontSize * 0.52           // largura média por char Outfit
  const letterSpacing = (circ / TEXT.length) - charBaseWidth  // spread exato

  return (
    <div
      className={className}
      style={{ position: 'relative', width: size, height: size, flexShrink: 0, ...style }}
    >
      {/* Anel de texto — gira anti-horário */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', inset: 0 }}
      >
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {/* Borda tracejada sutil */}
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
              d={`M ${cx},${cy} m -${r},0 a ${r},${r} 0 1,1 ${r*2},0 a ${r},${r} 0 1,1 -${r*2},0`}
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
      </motion.div>

      {/* Estrela rosa — gira horário */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <svg
          width={size * 0.30}
          height={size * 0.30}
          viewBox="0 0 24 24"
          fill="#FFC4DA"
        >
          <path d="M12 0C12 0 13.2 7.8 24 12C13.2 16.2 12 24 12 24C12 24 10.8 16.2 0 12C10.8 7.8 12 0 12 0Z" />
        </svg>
      </motion.div>
    </div>
  )
}
