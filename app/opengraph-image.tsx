import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Eisen Distribuição Especializada'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          background: 'linear-gradient(160deg, #000044 0%, #000066 55%, #00008F 100%)',
          padding: '64px',
          position: 'relative',
        }}
      >
        {/* Pink glow */}
        <div style={{
          position: 'absolute', right: 0, top: 0,
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,196,218,0.3) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }} />
        {/* Yellow glow */}
        <div style={{
          position: 'absolute', left: '20%', bottom: 0,
          width: 500, height: 300, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(255,204,0,0.18) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }} />

        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
          {/* Label */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 24,
          }}>
            <div style={{ width: 32, height: 2, background: '#FFCC00', borderRadius: 2 }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Distribuição Especializada
            </span>
          </div>

          {/* Headline */}
          <div style={{
            fontSize: 56,
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: 20,
            maxWidth: 700,
          }}>
            Conectando grandes marcas ao varejo do Sul.
          </div>

          {/* Subheadline */}
          <div style={{
            fontSize: 20,
            color: 'rgba(255,255,255,0.55)',
            marginBottom: 40,
            letterSpacing: '-0.01em',
          }}>
            Cosméticos, beleza e bem-estar em RS, SC, PR e SP.
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: 48 }}>
            {[
              { num: '15', label: 'Anos de mercado' },
              { num: '4', label: 'Estados' },
              { num: '+15 mil', label: 'Clientes' },
            ].map((s) => (
              <div key={s.num} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{ width: 24, height: 2, background: '#FFCC00', borderRadius: 2 }} />
                <span style={{ fontSize: 32, fontWeight: 800, color: '#fff', letterSpacing: '-0.05em', lineHeight: 1 }}>{s.num}</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.04em' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Domain */}
        <div style={{
          position: 'absolute', top: 56, right: 64,
          fontSize: 15, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.05em',
        }}>
          eisendistribuicao.com.br
        </div>
      </div>
    ),
    { ...size }
  )
}
