'use client'

import { LazyMotion, domMax } from 'framer-motion'

/**
 * LazyMotion — carrega domMax (~16KB gzipped) em vez do bundle completo (~40KB).
 * domMax inclui layout animations (usado no BrandsGrid filter).
 * Reduz ~24KB do JS inicial, melhora TBT e LCP.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domMax} strict>
      {children}
    </LazyMotion>
  )
}
