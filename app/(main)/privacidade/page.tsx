import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade | Eisen Distribuição Especializada',
  description: 'Saiba como a Eisen Distribuição coleta, usa e protege seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).',
}

const SECTIONS = [
  {
    title: '1. Quem somos',
    content: `A Eisen Distribuição Especializada Ltda., inscrita no CNPJ sob o nº [CNPJ], com sede em [endereço completo], é a controladora dos dados pessoais coletados por meio deste site (eisendistribuicao.com.br) e demais canais de atendimento.

Para dúvidas sobre privacidade ou exercício dos seus direitos, entre em contato com nosso Encarregado (DPO) pelo e-mail: privacidade@grupoeisen.com.br.`,
  },
  {
    title: '2. Dados que coletamos',
    content: `Coletamos apenas os dados necessários para as finalidades descritas nesta política:

• **Formulário "Seja Cliente":** nome, empresa, e-mail, telefone e cidade.
• **Formulário "Trabalhe Conosco":** nome, e-mail, telefone, cargo de interesse e currículo anexo.
• **Cookies e dados de navegação:** endereço IP (anonimizado), páginas visitadas, tempo de sessão, tipo de dispositivo e navegador — via cookies analíticos, somente com seu consentimento.
• **Comunicações diretas:** dados fornecidos voluntariamente ao nos contatar por e-mail ou WhatsApp.

Não coletamos dados sensíveis (saúde, origem racial, biometria, etc.) nem dados de menores de 18 anos de forma intencional.`,
  },
  {
    title: '3. Finalidade e base legal',
    content: `Cada tratamento de dados possui uma base legal prevista na LGPD (art. 7º):

| Finalidade | Base legal |
|---|---|
| Responder solicitações comerciais e de cadastro | Execução de contrato / Legítimo interesse |
| Encaminhar currículos ao RH | Consentimento do titular |
| Enviar comunicações sobre produtos e serviços | Legítimo interesse (opt-out disponível) |
| Análise de tráfego e melhoria do site | Consentimento (cookies analíticos) |
| Cumprimento de obrigações legais e fiscais | Obrigação legal |

Não utilizamos seus dados para decisões automatizadas com efeitos jurídicos significativos.`,
  },
  {
    title: '4. Compartilhamento de dados',
    content: `Seus dados podem ser compartilhados apenas nas seguintes situações:

• **Prestadores de serviço:** plataformas de e-mail transacional (Resend), hospedagem (Vercel), recrutamento (Solides) — todos sob acordos de confidencialidade e proteção de dados.
• **Obrigação legal:** quando exigido por lei, regulamento, ordem judicial ou autoridade competente.
• **Grupo econômico:** outras empresas do Grupo Eisen, para as mesmas finalidades descritas nesta política.

Não vendemos, alugamos nem cedemos seus dados a terceiros para fins comerciais próprios.`,
  },
  {
    title: '5. Cookies',
    content: `Utilizamos cookies para garantir o funcionamento do site e, com seu consentimento, para análise de desempenho.

**Cookies essenciais** — necessários para o funcionamento básico do site. Não requerem consentimento.

**Cookies analíticos** — coletam dados agregados de navegação para melhorarmos o site. Ativados apenas após sua aceitação no banner de cookies.

Você pode alterar suas preferências a qualquer momento limpando os cookies do navegador ou revogando o consentimento. Isso não afeta a licitude dos tratamentos realizados antes da revogação.`,
  },
  {
    title: '6. Retenção de dados',
    content: `Mantemos seus dados pelo tempo necessário para cumprir as finalidades descritas ou conforme exigido por lei:

• Dados de formulários comerciais: até 5 anos após o último contato (prazo prescricional civil).
• Currículos: 1 ano, salvo contratação ou solicitação de exclusão anterior.
• Logs de acesso: 6 meses (Marco Civil da Internet – Lei nº 12.965/2014).
• Dados fiscais e contábeis: 5 a 10 anos conforme legislação tributária.

Após o prazo aplicável, os dados são excluídos ou anonimizados com segurança.`,
  },
  {
    title: '7. Seus direitos como titular',
    content: `Nos termos da LGPD (art. 18), você tem direito a:

• **Confirmação** de que tratamos seus dados.
• **Acesso** aos dados que mantemos sobre você.
• **Correção** de dados incompletos, inexatos ou desatualizados.
• **Anonimização, bloqueio ou eliminação** de dados desnecessários ou tratados em desconformidade.
• **Portabilidade** dos seus dados a outro fornecedor de serviço.
• **Eliminação** dos dados tratados com base no consentimento.
• **Informação** sobre compartilhamentos realizados.
• **Revogação do consentimento** a qualquer momento.
• **Oposição** ao tratamento realizado com base em legítimo interesse.
• **Revisão** de decisões automatizadas.

Para exercer qualquer direito, envie solicitação para privacidade@grupoeisen.com.br com identificação. Responderemos em até 15 dias úteis. Caso não fique satisfeito, você pode acionar a ANPD (www.gov.br/anpd).`,
  },
  {
    title: '8. Segurança da informação',
    content: `Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição, incluindo:

• Transmissão de dados via HTTPS/TLS.
• Acesso restrito aos dados por pessoal autorizado, sob dever de confidencialidade.
• Revisão periódica de controles de segurança.

Em caso de incidente de segurança relevante, comunicaremos a ANPD e os titulares afetados nos prazos previstos em lei.`,
  },
  {
    title: '9. Links externos',
    content: `Nosso site pode conter links para portais de terceiros (ex.: portal de vagas Solides, redes sociais). Esta política não se aplica a esses sites. Recomendamos que você leia as políticas de privacidade de cada plataforma que visitar.`,
  },
  {
    title: '10. Alterações nesta política',
    content: `Podemos atualizar esta política periodicamente para refletir mudanças em nossas práticas ou na legislação. A data de vigência é sempre indicada no rodapé desta página. Mudanças significativas serão comunicadas de forma destacada no site.`,
  },
  {
    title: '11. Contato e DPO',
    content: `Encarregado de Proteção de Dados (DPO)
E-mail: privacidade@grupoeisen.com.br
Endereço: [endereço completo da sede]

Autoridade Nacional de Proteção de Dados (ANPD): www.gov.br/anpd`,
  },
]

export default function PrivacidadePage() {
  const lastUpdated = '17 de junho de 2025'

  return (
    <div style={{ background: '#FAFAFA', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #000044 0%, #000066 100%)', padding: '72px 24px 56px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>
            Privacidade e LGPD
          </p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            marginBottom: 16,
          }}>
            Política de Privacidade
          </h1>
          <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
            Vigente a partir de {lastUpdated} · Em conformidade com a Lei nº 13.709/2018 (LGPD)
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '56px 24px 96px' }}>

        {/* Intro */}
        <div style={{
          background: '#fff',
          borderRadius: 16,
          padding: '28px 32px',
          marginBottom: 32,
          border: '1px solid rgba(0,0,0,0.06)',
          borderLeft: '4px solid #FFCC00',
        }}>
          <p style={{ fontSize: '0.9375rem', color: '#444', lineHeight: 1.8, margin: 0 }}>
            A sua privacidade é importante para nós. Esta política explica de forma clara e transparente quais dados pessoais coletamos, como os utilizamos, com quem os compartilhamos e quais são os seus direitos como titular — tudo em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018)</strong>.
          </p>
        </div>

        {/* Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {SECTIONS.map((section, i) => (
            <details key={i} open={i < 2} style={{
              background: '#fff',
              borderRadius: 12,
              border: '1px solid rgba(0,0,0,0.06)',
              overflow: 'hidden',
            }}>
              <summary style={{
                padding: '20px 24px',
                cursor: 'pointer',
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                fontWeight: 700,
                color: '#08084A',
                letterSpacing: '-0.02em',
                listStyle: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                userSelect: 'none',
              }}>
                {section.title}
                <span style={{ fontSize: '1.25rem', color: '#AAAACC', fontWeight: 300, flexShrink: 0 }}>+</span>
              </summary>
              <div style={{
                padding: '0 24px 24px',
                borderTop: '1px solid rgba(0,0,0,0.05)',
              }}>
                <div style={{
                  fontSize: '0.9rem',
                  color: '#555',
                  lineHeight: 1.85,
                  whiteSpace: 'pre-line',
                  paddingTop: 16,
                }}>
                  {section.content.split('\n').map((line, j) => {
                    if (line.startsWith('•')) {
                      return (
                        <div key={j} style={{ display: 'flex', gap: 10, marginBottom: 6 }}>
                          <span style={{ color: '#FFCC00', fontWeight: 900, flexShrink: 0, marginTop: 1 }}>•</span>
                          <span dangerouslySetInnerHTML={{ __html: line.slice(1).trim().replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                        </div>
                      )
                    }
                    if (line.startsWith('|')) return null
                    return (
                      <p key={j} style={{ margin: '0 0 10px', color: line.startsWith('**') ? '#08084A' : undefined }}
                        dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    )
                  })}

                  {/* Table for section 3 */}
                  {section.title.startsWith('3.') && (
                    <div style={{ overflowX: 'auto', marginTop: 8 }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                        <thead>
                          <tr style={{ background: '#F4F4F8' }}>
                            <th style={{ padding: '10px 14px', textAlign: 'left', color: '#08084A', fontWeight: 700, borderRadius: '6px 0 0 6px' }}>Finalidade</th>
                            <th style={{ padding: '10px 14px', textAlign: 'left', color: '#08084A', fontWeight: 700, borderRadius: '0 6px 6px 0' }}>Base legal</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ['Responder solicitações comerciais e de cadastro', 'Execução de contrato / Legítimo interesse'],
                            ['Encaminhar currículos ao RH', 'Consentimento do titular'],
                            ['Enviar comunicações sobre produtos e serviços', 'Legítimo interesse (opt-out disponível)'],
                            ['Análise de tráfego e melhoria do site', 'Consentimento (cookies analíticos)'],
                            ['Cumprimento de obrigações legais e fiscais', 'Obrigação legal'],
                          ].map(([fin, base], k) => (
                            <tr key={k} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                              <td style={{ padding: '10px 14px', color: '#444' }}>{fin}</td>
                              <td style={{ padding: '10px 14px', color: '#666' }}>{base}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </details>
          ))}
        </div>

        {/* Footer note */}
        <div style={{
          marginTop: 40,
          padding: '20px 24px',
          borderRadius: 12,
          background: 'rgba(8,8,74,0.04)',
          border: '1px solid rgba(8,8,74,0.08)',
        }}>
          <p style={{ margin: 0, fontSize: '0.8125rem', color: '#888', lineHeight: 1.7 }}>
            Esta política foi elaborada com base na Lei nº 13.709/2018 (LGPD) e orientações da ANPD.
            Última atualização: <strong style={{ color: '#555' }}>{lastUpdated}</strong>.{' '}
            Dúvidas? Fale com nosso DPO: <a href="mailto:privacidade@grupoeisen.com.br" style={{ color: '#000066', textDecoration: 'underline' }}>privacidade@grupoeisen.com.br</a>
          </p>
        </div>
      </div>
    </div>
  )
}
