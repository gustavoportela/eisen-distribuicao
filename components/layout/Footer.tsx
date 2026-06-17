import Link from 'next/link'
import Image from 'next/image'
import { WHATSAPP } from '@/lib/whatsapp'

const NAV_LINKS = [
  { href: '/',                 label: 'Home' },
  { href: '/sobre',            label: 'Sobre' },
  { href: '/marcas',           label: 'Marcas' },
  { href: '/seja-cliente',     label: 'Seja cliente' },
  { href: '/trabalhe-conosco', label: 'Trabalhe conosco' },
  { href: '/contato',          label: 'Contato' },
]

function ColLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="block text-[9px] font-semibold uppercase mb-5"
      style={{ color: 'rgba(0,0,0,0.32)', letterSpacing: '0.18em' }}
    >
      {children}
    </span>
  )
}

export function Footer() {
  return (
    <footer style={{ background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.07)' }}>

      {/* ── Main grid ────────────────────────────────────────────────────── */}
      <div className="flex flex-col lg:flex-row">

        {/* ── Left: logo + 3 columns ─────────────────────────────────────── */}
        <div
          className="flex-1 flex flex-col"
          style={{ padding: 'clamp(40px, 5vw, 72px) clamp(24px, 5vw, 64px)' }}
        >
          {/* Logo — tamanho controlado */}
          <div style={{ marginBottom: 48 }}>
            <Image
              src="/brand/logo-color.png"
              alt="Eisen Distribuição Especializada"
              width={72}
              height={20}
              className="w-auto"
              style={{ height: 20 }}
            />
          </div>

          {/* Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">

            {/* Empresa */}
            <div>
              <ColLabel>Empresa</ColLabel>
              <nav className="flex flex-col">
                {NAV_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-sm transition-colors duration-150 hover:text-black"
                    style={{ color: 'rgba(0,0,0,0.48)', marginBottom: '0.65rem' }}
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contato */}
            <div>
              <ColLabel>Contato</ColLabel>
              {(['RS', 'SC'] as const).map((state) => (
                <div key={state} style={{ marginBottom: '1.1rem' }}>
                  <span
                    className="block text-[9px] font-semibold uppercase mb-0.5"
                    style={{ color: 'rgba(0,0,0,0.25)', letterSpacing: '0.14em' }}
                  >
                    {state}
                  </span>
                  <a
                    href={`tel:+${WHATSAPP[state].number}`}
                    className="block text-sm transition-colors duration-150 hover:text-black"
                    style={{ color: 'rgba(0,0,0,0.48)' }}
                  >
                    {WHATSAPP[state].number.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '+$1 ($2) $3-$4')}
                  </a>
                </div>
              ))}
              <a
                href="mailto:sac@grupoeisen.com.br"
                className="block text-sm transition-colors duration-150 hover:text-black"
                style={{ color: 'rgba(0,0,0,0.48)' }}
              >
                sac@grupoeisen.com.br
              </a>
            </div>

            {/* Social */}
            <div>
              <ColLabel>Social</ColLabel>
              {[
                { label: 'Instagram', href: 'https://instagram.com/eisendistribuicao' },
                { label: 'LinkedIn',  href: 'https://linkedin.com/company/eisendistribuicao' },
                { label: 'WhatsApp',  href: `https://wa.me/${WHATSAPP.RS.number}` },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm transition-colors duration-150 hover:text-black"
                  style={{ color: 'rgba(0,0,0,0.48)', marginBottom: '0.65rem' }}
                >
                  {s.label}
                </a>
              ))}
            </div>

          </div>
        </div>

        {/* ── Right: dark CTA card ────────────────────────────────────────── */}
        <div
          className="lg:w-[360px] xl:w-[420px] flex flex-col justify-between"
          style={{
            background: '#08084A',
            padding: 'clamp(40px, 5vw, 72px) clamp(32px, 4vw, 52px)',
          }}
        >
          <div>
            <p
              className="text-[9px] font-semibold uppercase tracking-widest mb-8"
              style={{ color: 'rgba(255,255,255,0.32)' }}
            >
              Seja um parceiro Eisen
            </p>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.375rem, 2.2vw, 1.75rem)',
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: '-0.03em',
                color: '#ffffff',
                marginBottom: '1rem',
              }}
            >
              As marcas que seus clientes{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 400, color: '#FFCC00' }}>
                já pedem.
              </em>
            </h3>

            <p
              className="text-sm mb-10"
              style={{ color: 'rgba(255,255,255,0.42)', lineHeight: 1.75 }}
            >
              CD próprio, equipe presencial e portfólio premium em RS, SC, PR e SP.
            </p>

            <Link
              href="/seja-cliente"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity duration-150 hover:opacity-80"
              style={{
                background: '#FFCC00',
                color: '#08084A',
                padding: '11px 22px',
                borderRadius: '8px',
              }}
            >
              Quero ser cliente
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="#08084A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Copyright */}
          <div style={{ marginTop: 48, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
              © {new Date().getFullYear()} Eisen Distribuição Especializada
            </span>
          </div>
        </div>

      </div>


    </footer>
  )
}
