'use client'

import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

interface Props {
  children: React.ReactNode
  variant?: 'hero' | 'fadeUp'
  delay?: number
  className?: string
}

export function SobreAnimations({ children, variant = 'fadeUp', delay = 0, className = '' }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: variant === 'hero' ? 30 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
