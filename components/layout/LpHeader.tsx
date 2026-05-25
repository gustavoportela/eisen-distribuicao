'use client'

import Link from 'next/link'
import Image from 'next/image'

const LP_LINKS = [
  { href: '/marcas',       label: 'Marcas' },
  { href: '/sobre',        label: 'Sobre' },
  { href: '/contato',      label: 'Contato' },
]

/**
 * Standalone header for landing pages.
 * Lighter than the main floating island — clean bar, logo + key links + CTA.
 */
export function LpHeader() {
  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: 'rgba(0,0,52,0.86)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/" aria-label="Eisen — voltar ao início">
          <Image
            src="/brand/logo-light.png"
            alt="Eisen Distribuição Especializada"
            width={90}
            height={24}
            className="h-6 w-auto"
          />
        </Link>

        {/* Nav links — desktop */}
        <nav className="hidden sm:flex items-center gap-1">
          {LP_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 rounded-lg text-sm transition-colors duration-150"
              style={{ color: 'rgba(255,255,255,0.55)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'white' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/seja-cliente"
          className="text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-150 hover:opacity-90 shrink-0"
          style={{ background: '#FFCC00', color: '#000066' }}
        >
          Seja cliente
        </Link>

      </div>
    </header>
  )
}
