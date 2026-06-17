'use client'

import { m } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

interface Props {
  children: React.ReactNode
  variant?: 'hero' | 'fadeUp'
  delay?: number
  className?: string
}

export function TrabalheAnimations({ children, variant = 'fadeUp', delay = 0, className = '' }: Props) {
  if (variant === 'hero') {
    return (
      <m.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay, ease }}
        className={className}
      >
        {children}
      </m.div>
    )
  }

  return (
    <m.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease }}
      className={className}
    >
      {children}
    </m.div>
  )
}
