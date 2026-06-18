import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade | Eisen Distribuição Especializada',
  description: 'Saiba como a Eisen Distribuição coleta, usa e protege seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).',
}

const EMAIL = 'sac@grupoeisen.com.br'
const LAST_UPDATED = '17 de junho de 2025'

const SECTIONS = [
  {
    title: '1. Quem somos',
    content: `A Eisen Distribuição Especializada Ltda., inscrita no CNPJ sob o nº 88.635.305/0001-10, com sede em [endereço completo], é a controladora dos dados pessoais coletados por meio deste site (eisendistribuicao.com.br) e demais canais de atendimento.\n\nPara dúvidas sobre privacidade ou exercício dos seus direitos, entre em contato pelo e-mail: ${EMAIL}.`,
  },
  {
    title: '2. Dados que coletamos',
    bullets: [
      { label: 'Formulário "Seja Cliente"', text: 'nome, empresa, e-mail, telefone e cidade.' },
      { label: 'Formulário "Trabalhe Conosco"', text: 'nome, e-mail, telefone, cargo de interesse e currículo anexo.' },
      { label: 'Cookies e dados de navegação', text: 'endereço IP (anonimizado), páginas visitadas, tempo de sessão, tipo de dispositivo e navegador — via cookies analíticos, somente com seu consentimento.' },
      { label: 'Comunicações diretas', text: 'dados fornecidos voluntariamente ao nos contatar por e-mail ou WhatsApp.' },
    ],
    footer: 'Não coletamos dados sensíveis (saúde, origem racial, biometria, etc.) nem dados de menores de 18 anos de forma intencional.',
  },
  {
    title: '3. Finalidade e base legal',
    intro: 'Cada tratamento de dados possui uma base legal prevista na LGPD (art. 7º):',
    table: [
      ['Responder solicitações comerciais e de cadastro', 'Execução de contrato / Legítimo interesse'],
      ['Encaminhar currículos ao RH', 'Consentimento do titular'],
      ['Enviar comunicações sobre produtos e serviços', 'Legítimo interesse (opt-out disponível)'],
      ['Análise de tráfego e melhoria do site', 'Consentimento (cookies analíticos)'],
      ['Cumprimento de obrigações legais e fiscais', 'Obrigação legal'],
    ],
    footer: 'Não utilizamos seus dados para decisões automatizadas com efeitos jurídicos significativos.',
  },
  {
    title: '4. Compartilhamento de dados',
    bullets: [
      { label: 'Prestadores de serviço', text: 'plataformas de e-mail transacional (Resend), hospedagem (Vercel), recrutamento (Solides) — todos sob acordos de confidencialidade e proteção de dados.' },
      { label: 'Obrigação legal', text: 'quando exigido por lei, regulamento, ordem judicial ou autoridade competente.' },
      { label: 'Grupo econômico', text: 'outras empresas do Grupo Eisen, para as mesmas finalidades descritas nesta política.' },
    ],
    footer: 'Não vendemos, alugamos nem cedemos seus dados a terceiros para fins comerciais próprios.',
  },
  {
    title: '5. Cookies',
    content: 'Utilizamos cookies para garantir o funcionamento do site e, com seu consentimento, para análise de desempenho.',
    cookieTypes: [
      { name: 'Cookies essenciais', desc: 'Necessários para o funcionamento básico do site. Não requerem consentimento.' },
      { name: 'Cookies analíticos', desc: 'Coletam dados agregados de navegação para melhorarmos o site. Ativados apenas após sua aceitação no banner de cookies.' },
    ],
    footer: 'Você pode alterar suas preferências a qualquer momento limpando os cookies do navegador ou revogando o consentimento. Isso não afeta a licitude dos tratamentos realizados antes da revogação.',
  },
  {
    title: '6. Retenção de dados',
    retentionItems: [
      { period: '5 anos', label: 'Dados de formulários comerciais', note: 'prazo prescricional civil' },
      { period: '1 ano', label: 'Currículos', note: 'salvo contratação ou exclusão anterior' },
      { period: '6 meses', label: 'Logs de acesso', note: 'Marco Civil da Internet – Lei nº 12.965/2014' },
      { period: '5–10 anos', label: 'Dados fiscais e contábeis', note: 'conforme legislação tributária' },
    ],
    footer: 'Após o prazo aplicável, os dados são excluídos ou anonimizados com segurança.',
  },
  {
    title: '7. Seus direitos como titular',
    intro: 'Nos termos da LGPD (art. 18), você tem direito a:',
    rights: [
      { right: 'Confirmação', desc: 'de que tratamos seus dados.' },
      { right: 'Acesso', desc: 'aos dados que mantemos sobre você.' },
      { right: 'Correção', desc: 'de dados incompletos, inexatos ou desatualizados.' },
      { right: 'Anonimização, bloqueio ou eliminação', desc: 'de dados desnecessários ou tratados em desconformidade.' },
      { right: 'Portabilidade', desc: 'dos seus dados a outro fornecedor de serviço.' },
      { right: 'Eliminação', desc: 'dos dados tratados com base no consentimento.' },
      { right: 'Informação', desc: 'sobre compartilhamentos realizados.' },
      { right: 'Revogação do consentimento', desc: 'a qualquer momento, sem custo.' },
      { right: 'Oposição', desc: 'ao tratamento realizado com base em legítimo interesse.' },
      { right: 'Revisão', desc: 'de decisões automatizadas.' },
    ],
    footer: `Para exercer qualquer direito, envie solicitação para ${EMAIL} com identificação. Responderemos em até 15 dias úteis. Caso não fique satisfeito, você pode acionar a ANPD (www.gov.br/anpd).`,
  },
  {
    title: '8. Segurança da informação',
    bullets: [
      { label: 'Transmissão segura', text: 'todos os dados trafegam via HTTPS/TLS.' },
      { label: 'Acesso restrito', text: 'somente pessoal autorizado, sob dever de confidencialidade.' },
      { label: 'Revisão periódica', text: 'de controles e práticas de segurança.' },
    ],
    footer: 'Em caso de incidente de segurança relevante, comunicaremos a ANPD e os titulares afetados nos prazos previstos em lei.',
  },
  {
    title: '9. Links externos',
    content: 'Nosso site pode conter links para portais de terceiros (ex.: portal de vagas Solides, redes sociais). Esta política não se aplica a esses sites. Recomendamos que você leia as políticas de privacidade de cada plataforma que visitar.',
  },
  {
    title: '10. Alterações nesta política',
    content: `Podemos atualizar esta política periodicamente para refletir mudanças em nossas práticas ou na legislação. A data de vigência é sempre indicada no rodapé desta página. Mudanças significativas serão comunicadas de forma destacada no site.`,
  },
  {
    title: '11. Contato',
    content: `SAC / Encarregado de Proteção de Dados\nE-mail: ${EMAIL}\nEndereço: [endereço completo da sede]\n\nAutoridade Nacional de Proteção de Dados (ANPD): www.gov.br/anpd`,
  },
]

type Section = typeof SECTIONS[number]

function SectionBody({ s }: { s: Section }) {
  return (
    <div style={{ fontSize: '0.9125rem', color: '#4B4B6B', lineHeight: 1.85, paddingTop: 20 }}>

      {'intro' in s && s.intro && (
        <p style={{ marginBottom: 16, color: '#555' }}>{s.intro}</p>
      )}

      {'content' in s && s.content && s.content.split('\n').map((line, i) => (
        <p key={i} style={{ margin: '0 0 10px' }}>{line}</p>
      ))}

      {'bullets' in s && s.bullets && (
        <ul style={{ margin: '0 0 16px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {s.bullets.map((b, i) => (
            <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '12px 16px', background: '#F7F7FB', borderRadius: 10 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FFCC00', flexShrink: 0, marginTop: 7 }} />
              <span><strong style={{ color: '#08084A' }}>{b.label}:</strong> {b.text}</span>
            </li>
          ))}
        </ul>
      )}

      {'table' in s && s.table && (
        <div style={{ overflowX: 'auto', marginBottom: 16 }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, fontSize: '0.875rem' }}>
            <thead>
              <tr>
                <th style={{ padding: '11px 16px', textAlign: 'left', background: '#F0F0F8', color: '#08084A', fontWeight: 700, borderRadius: '8px 0 0 0', borderBottom: '2px solid #E0E0F0' }}>Finalidade</th>
                <th style={{ padding: '11px 16px', textAlign: 'left', background: '#F0F0F8', color: '#08084A', fontWeight: 700, borderRadius: '0 8px 0 0', borderBottom: '2px solid #E0E0F0' }}>Base legal</th>
              </tr>
            </thead>
            <tbody>
              {s.table.map(([fin, base], k) => (
                <tr key={k} style={{ background: k % 2 === 0 ? '#fff' : '#FAFAFE' }}>
                  <td style={{ padding: '11px 16px', color: '#333', borderBottom: '1px solid #EBEBF5' }}>{fin}</td>
                  <td style={{ padding: '11px 16px', borderBottom: '1px solid #EBEBF5' }}>
                    <span style={{ background: '#EEEEF8', color: '#000066', borderRadius: 6, padding: '3px 8px', fontSize: '0.8rem', fontWeight: 600 }}>{base}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {'cookieTypes' in s && s.cookieTypes && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
          {s.cookieTypes.map((c, i) => (
            <div key={i} style={{ padding: '14px 16px', background: '#F7F7FB', borderRadius: 10, borderLeft: '3px solid #000066' }}>
              <strong style={{ color: '#08084A', display: 'block', marginBottom: 4 }}>{c.name}</strong>
              <span style={{ color: '#666' }}>{c.desc}</span>
            </div>
          ))}
        </div>
      )}

      {'retentionItems' in s && s.retentionItems && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 10, marginBottom: 16 }}>
          {s.retentionItems.map((r, i) => (
            <div key={i} style={{ padding: '16px', background: '#F7F7FB', borderRadius: 10, border: '1px solid rgba(0,0,102,0.07)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', fontWeight: 800, color: '#000066', letterSpacing: '-0.04em', lineHeight: 1 }}>{r.period}</div>
              <div style={{ fontWeight: 700, color: '#08084A', fontSize: '0.85rem', marginTop: 6, marginBottom: 4 }}>{r.label}</div>
              <div style={{ fontSize: '0.78rem', color: '#999' }}>{r.note}</div>
            </div>
          ))}
        </div>
      )}

      {'rights' in s && s.rights && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}>
          {s.rights.map((r, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '10px 14px', background: i % 2 === 0 ? '#F7F7FB' : '#fff', borderRadius: 8, border: '1px solid rgba(0,0,0,0.04)' }}>
              <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(0,0,102,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.65rem', fontWeight: 800, color: '#000066', marginTop: 1 }}>{i + 1}</span>
              <span><strong style={{ color: '#08084A' }}>{r.right}:</strong> {r.desc}</span>
            </div>
          ))}
        </div>
      )}

      {'footer' in s && s.footer && (
        <p style={{ margin: '12px 0 0', fontSize: '0.875rem', color: '#777', fontStyle: 'italic' }}>{s.footer}</p>
      )}
    </div>
  )
}

export default function PrivacidadePage() {
  return (
    <div style={{ background: '#F5F5FA', minHeight: '100vh' }}>

      {/* Hero header */}
      <div style={{
        background: 'linear-gradient(135deg, #000033 0%, #000055 60%, #00006F 100%)',
        paddingTop: 120,
        paddingBottom: 64,
        paddingLeft: 24,
        paddingRight: 24,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* decorative glow */}
        <div style={{
          position: 'absolute', right: '-5%', top: '-20%',
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,204,0,0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <div style={{ width: 28, height: 2, background: '#FFCC00', borderRadius: 2 }} />
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Privacidade e LGPD
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            marginBottom: 20,
            maxWidth: 640,
          }}>
            Política de Privacidade
          </h1>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 24px', alignItems: 'center' }}>
            <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>
              Vigente a partir de <strong style={{ color: 'rgba(255,255,255,0.75)' }}>{LAST_UPDATED}</strong>
            </span>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'inline-block' }} />
            <span style={{
              fontSize: '0.8rem', fontWeight: 600, color: '#FFCC00',
              background: 'rgba(255,204,0,0.12)', padding: '4px 12px', borderRadius: 20,
              border: '1px solid rgba(255,204,0,0.25)',
            }}>
              Lei nº 13.709/2018 (LGPD)
            </span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px 96px' }}>

        {/* Intro card */}
        <div style={{
          background: '#fff',
          borderRadius: 16,
          padding: '28px 36px',
          marginBottom: 40,
          border: '1px solid rgba(0,0,0,0.06)',
          borderLeft: '4px solid #FFCC00',
          boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
          display: 'flex',
          gap: 20,
          alignItems: 'flex-start',
        }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,204,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#CCAA00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <p style={{ fontSize: '0.9375rem', color: '#444', lineHeight: 1.85, margin: 0 }}>
            A sua privacidade é importante para nós. Esta política explica de forma clara e transparente quais dados pessoais coletamos, como os utilizamos, com quem os compartilhamos e quais são os seus direitos como titular — tudo em conformidade com a <strong style={{ color: '#08084A' }}>Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018)</strong>.
          </p>
        </div>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
          {SECTIONS.map((s, i) => {
            const isFullWidth = [2, 6].includes(i)
            return (
              <details
                key={i}
                open={i < 2}
                style={{
                  gridColumn: isFullWidth ? '1 / -1' : undefined,
                  background: '#fff',
                  borderRadius: 12,
                  border: '1px solid rgba(0,0,0,0.06)',
                  overflow: 'hidden',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
                }}
              >
                <summary style={{
                  padding: '20px 24px',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  fontWeight: 300,
                  color: '#08084A',
                  letterSpacing: '-0.02em',
                  listStyle: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 12,
                  userSelect: 'none',
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{
                      width: 24, height: 24, borderRadius: 6,
                      background: 'rgba(0,0,102,0.06)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.65rem', fontWeight: 800, color: '#000066', flexShrink: 0,
                    }}>
                      {i + 1}
                    </span>
                    {s.title.replace(/^\d+\.\s*/, '')}
                  </span>
                  <span style={{ fontSize: '1.1rem', color: '#BBBBDD', fontWeight: 300, flexShrink: 0 }}>+</span>
                </summary>

                <div style={{ padding: '0 24px 24px', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                  <SectionBody s={s} />
                </div>
              </details>
            )
          })}
        </div>

        {/* Footer callout */}
        <div style={{
          marginTop: 40,
          padding: '24px 32px',
          borderRadius: 14,
          background: 'linear-gradient(135deg, rgba(0,0,60,0.04) 0%, rgba(0,0,102,0.06) 100%)',
          border: '1px solid rgba(0,0,102,0.1)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}>
          <p style={{ margin: 0, fontSize: '0.875rem', color: '#666', lineHeight: 1.7 }}>
            Esta política foi elaborada com base na Lei nº 13.709/2018 (LGPD) e orientações da ANPD.
            Última atualização: <strong style={{ color: '#444' }}>{LAST_UPDATED}</strong>.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#000066', color: '#fff',
              padding: '10px 20px', borderRadius: 8,
              fontSize: '0.875rem', fontWeight: 600,
              textDecoration: 'none', whiteSpace: 'nowrap',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            Fale com o SAC
          </a>
        </div>
      </div>
    </div>
  )
}
