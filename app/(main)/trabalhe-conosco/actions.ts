'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const CARGO_LABELS: Record<string, string> = {
  comercial: 'Comercial',
  logistica: 'Logística',
  administrativo: 'Administrativo',
  promotoria: 'Promotoria',
  outro: 'Outro',
}

interface FormData {
  nome: string
  email: string
  telefone: string
  cidade: string
  cargo: string
  mensagem: string
}

export async function enviarCurriculo(data: FormData): Promise<{ ok: boolean; error?: string }> {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY não configurada')
    return { ok: false, error: 'Serviço de e-mail não configurado.' }
  }

  const cargo = CARGO_LABELS[data.cargo] ?? data.cargo

  const { error } = await resend.emails.send({
    from: 'Site Eisen <noreply@grupoeisen.com.br>',
    to: 'curriculos@grupoeisen.com.br',
    replyTo: data.email,
    subject: `Currículo espontâneo — ${cargo} — ${data.nome}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;color:#1a1a2e">
        <h2 style="color:#000066;margin-bottom:4px">Novo currículo recebido</h2>
        <p style="color:#888;font-size:13px;margin-top:0">Enviado pelo formulário do site grupoeisen.com.br</p>
        <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:8px 0;color:#666;width:140px">Nome</td><td style="padding:8px 0;font-weight:600">${data.nome}</td></tr>
          <tr><td style="padding:8px 0;color:#666">E-mail</td><td style="padding:8px 0"><a href="mailto:${data.email}" style="color:#000066">${data.email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#666">Telefone</td><td style="padding:8px 0">${data.telefone}</td></tr>
          ${data.cidade ? `<tr><td style="padding:8px 0;color:#666">Cidade</td><td style="padding:8px 0">${data.cidade}</td></tr>` : ''}
          <tr><td style="padding:8px 0;color:#666">Cargo</td><td style="padding:8px 0"><strong>${cargo}</strong></td></tr>
        </table>
        ${data.mensagem ? `
        <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
        <p style="color:#666;font-size:13px;margin-bottom:6px">Mensagem</p>
        <p style="font-size:14px;line-height:1.6;white-space:pre-wrap">${data.mensagem}</p>
        ` : ''}
      </div>
    `,
  })

  if (error) {
    console.error('Resend error:', error)
    return { ok: false, error: 'Erro ao enviar. Tente novamente.' }
  }

  return { ok: true }
}
