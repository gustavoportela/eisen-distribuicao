'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const ctaVariants = {
  rest:  { scale: 1,    boxShadow: '0 2px 10px rgba(255,204,0,0.25)' },
  hover: { scale: 1.05, boxShadow: '0 8px 28px rgba(255,204,0,0.50)' },
  tap:   { scale: 0.96, boxShadow: '0 1px 6px rgba(255,204,0,0.15)' },
} as const

const arrowVariants = {
  rest:  { x: 0 },
  hover: { x: 4 },
} as const

const spring = { type: 'spring', stiffness: 380, damping: 28 } as const

const NAV_LINKS = [
  { href: '/',                 label: 'Home' },
  { href: '/sobre',            label: 'Sobre' },
  { href: '/marcas',           label: 'Marcas' },
  { href: '/seja-cliente',     label: 'Seja cliente' },
  { href: '/trabalhe-conosco', label: 'Trabalhe conosco' },
  { href: '/contato',          label: 'Contato' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    let rafId: number
    const handleScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => setScrolled(window.scrollY > 20))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* ── Floating pill nav — estilo Aurae ── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-5 pt-4 pointer-events-none">
        <div
          className="pointer-events-auto w-full flex items-center justify-between transition-all duration-300"
          style={{
            maxWidth: '1080px',
            borderRadius: '100px',
            padding: '10px 10px 10px 24px',
            background: scrolled
              ? 'rgba(255,255,255,0.97)'
              : 'rgba(255,255,255,0.88)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(0,0,0,0.07)',
            boxShadow: scrolled
              ? '0 8px 40px rgba(0,0,0,0.10)'
              : '0 4px 20px rgba(0,0,0,0.06)',
          }}
        >
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center" aria-label="Eisen Distribuição. Página Inicial">
            <Image
              src="/brand/logo-color.png"
              alt="Eisen Distribuição Especializada"
              width={90}
              height={24}
              priority
              className="h-7 w-auto"
            />
          </Link>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link transition-colors duration-150 px-4 py-2 rounded-full hover:bg-black/5"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  letterSpacing: '0.005em',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA desktop */}
          <motion.div
            className="hidden lg:block shrink-0"
            variants={ctaVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            transition={spring}
            style={{ borderRadius: '100px' }}
          >
            <Link
              href="/seja-cliente"
              className="inline-flex items-center gap-2"
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                background: '#FFCC00',
                color: '#08084A',
                padding: '11px 22px',
                borderRadius: '100px',
                letterSpacing: '0.005em',
                textDecoration: 'none',
              }}
            >
              Quero ser cliente
              <motion.span
                variants={arrowVariants}
                transition={spring}
                style={{ display: 'inline-flex', alignItems: 'center' }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="#08084A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.span>
            </Link>
          </motion.div>

          {/* Hamburguer mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 mr-1 cursor-pointer"
            aria-label="Menu"
          >
            <span className={`block w-5 h-0.5 transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-2 bg-[#08084A]' : 'bg-[#08084A]'}`} />
            <span className={`block w-5 h-0.5 bg-[#08084A] transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-2 bg-[#08084A]' : 'bg-[#08084A]'}`} />
          </button>
        </div>
      </header>

      {/* ── Menu mobile fullscreen ── */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 flex flex-col pt-28 px-8 pb-10"
          style={{ background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(24px)' }}
        >
          <div className="absolute top-6 left-7">
            <Image
              src="/brand/logo-color.png"
              alt="Eisen"
              width={90}
              height={24}
              className="h-7 w-auto"
            />
          </div>

          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-5 right-6 cursor-pointer"
            style={{ color: 'rgba(8,8,74,0.5)' }}
            aria-label="Fechar menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <nav className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-semibold transition-colors duration-150"
                style={{ color: '#08084A' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/seja-cliente"
            onClick={() => setMobileOpen(false)}
            className="mt-auto inline-flex items-center justify-center font-bold text-base rounded-full transition-colors"
            style={{ background: '#000066', color: '#FFCC00', padding: '16px 32px' }}
          >
            Quero ser cliente
          </Link>
        </div>
      )}
    </>
  )
}
