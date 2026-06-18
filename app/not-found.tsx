import Link from 'next/link'
import Image from 'next/image'

export const metadata = { title: 'Página não encontrada' }

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #000044 0%, #000066 55%, #00008F 100%)' }}
    >
      {/* Glow */}
      <div className="absolute pointer-events-none" style={{
        left: '50%', top: '40%', transform: 'translate(-50%,-50%)',
        width: 700, height: 400, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(255,196,218,0.18) 0%, transparent 65%)',
        filter: 'blur(80px)',
      }} />
      <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <Link href="/" className="mb-12 opacity-80 hover:opacity-100 transition-opacity">
          <Image src="/logos/eisen-logo-white.svg" alt="Eisen" width={120} height={40} />
        </Link>

        {/* 404 */}
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-4"
          style={{ color: 'rgba(255,255,255,0.35)' }}>
          Erro 404
        </p>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3.5rem, 12vw, 8rem)',
          fontWeight: 800,
          letterSpacing: '-0.05em',
          lineHeight: 1,
          color: '#fff',
          marginBottom: '0.5rem',
        }}>
          404
        </h1>

        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
          fontWeight: 300,
          color: 'rgba(255,255,255,0.7)',
          marginBottom: '1rem',
          letterSpacing: '-0.02em',
        }}>
          Esta página sumiu do estoque.
        </p>

        <p className="text-sm mb-10 max-w-xs" style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>
          A URL que você acessou não existe ou foi removida. Volte para o início e continue navegando.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 hover:opacity-90 transition-opacity"
            style={{ background: '#FFCC00', color: '#08084A', borderRadius: '10px', fontSize: '0.9375rem' }}
          >
            Voltar ao início
          </Link>
          <Link
            href="/seja-cliente"
            className="inline-flex items-center justify-center gap-2 font-semibold px-7 py-3.5 transition-opacity hover:opacity-80"
            style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '10px', fontSize: '0.9375rem', border: '1px solid rgba(255,255,255,0.15)' }}
          >
            Quero ser cliente
          </Link>
        </div>
      </div>
    </div>
  )
}
