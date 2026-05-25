'use client'

import { useState } from 'react'
import { Diamond } from '@/components/ui/Diamond'

type FormState = 'idle' | 'submitting' | 'success'

const CARGOS = [
  { value: '', label: 'Selecione o cargo de interesse' },
  { value: 'comercial', label: 'Comercial' },
  { value: 'logistica', label: 'Logística' },
  { value: 'administrativo', label: 'Administrativo' },
  { value: 'promotoria', label: 'Promotoria' },
  { value: 'outro', label: 'Outro' },
]

export function CurriculoForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    cargo: '',
    mensagem: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    // Simulated submission — no backend
    setTimeout(() => {
      setFormState('success')
    }, 1200)
  }

  if (formState === 'success') {
    return (
      <div className="bg-white rounded-2xl border border-eisen-border p-10 flex flex-col items-center text-center gap-5">
        <div className="w-14 h-14 rounded-full bg-eisen-yellow/15 flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0D1B4B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div>
          <h3 className="text-eisen-navy font-bold text-xl mb-2">Currículo recebido!</h3>
          <p className="text-eisen-soft text-sm leading-relaxed max-w-sm">
            Obrigado pelo interesse em fazer parte da Eisen. Nossa equipe analisará seu perfil e entrará em contato em breve.
          </p>
        </div>
        <button
          onClick={() => { setFormState('idle'); setForm({ nome: '', email: '', telefone: '', cidade: '', cargo: '', mensagem: '' }) }}
          className="text-eisen-navy text-sm font-semibold underline underline-offset-2 hover:text-eisen-navy/70 transition-colors"
        >
          Enviar outro currículo
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-eisen-border p-8 lg:p-10 grid grid-cols-1 sm:grid-cols-2 gap-5"
    >
      {/* Nome */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="nome" className="text-xs font-semibold text-eisen-navy/70 uppercase tracking-wide">
          Nome completo <span className="text-red-500">*</span>
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          value={form.nome}
          onChange={handleChange}
          placeholder="Seu nome"
          className="rounded-md border border-eisen-border px-4 py-3 text-sm text-eisen-navy placeholder:text-eisen-faint focus:outline-none focus:border-eisen-navy focus:ring-1 focus:ring-eisen-navy transition-colors"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-semibold text-eisen-navy/70 uppercase tracking-wide">
          E-mail <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="seuemail@exemplo.com"
          className="rounded-md border border-eisen-border px-4 py-3 text-sm text-eisen-navy placeholder:text-eisen-faint focus:outline-none focus:border-eisen-navy focus:ring-1 focus:ring-eisen-navy transition-colors"
        />
      </div>

      {/* Telefone */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="telefone" className="text-xs font-semibold text-eisen-navy/70 uppercase tracking-wide">
          Telefone <span className="text-red-500">*</span>
        </label>
        <input
          id="telefone"
          name="telefone"
          type="tel"
          required
          value={form.telefone}
          onChange={handleChange}
          placeholder="(51) 99999-0000"
          className="rounded-md border border-eisen-border px-4 py-3 text-sm text-eisen-navy placeholder:text-eisen-faint focus:outline-none focus:border-eisen-navy focus:ring-1 focus:ring-eisen-navy transition-colors"
        />
      </div>

      {/* Cidade */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cidade" className="text-xs font-semibold text-eisen-navy/70 uppercase tracking-wide">
          Cidade
        </label>
        <input
          id="cidade"
          name="cidade"
          type="text"
          value={form.cidade}
          onChange={handleChange}
          placeholder="Sua cidade"
          className="rounded-md border border-eisen-border px-4 py-3 text-sm text-eisen-navy placeholder:text-eisen-faint focus:outline-none focus:border-eisen-navy focus:ring-1 focus:ring-eisen-navy transition-colors"
        />
      </div>

      {/* Cargo — full width */}
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="cargo" className="text-xs font-semibold text-eisen-navy/70 uppercase tracking-wide">
          Cargo de interesse <span className="text-red-500">*</span>
        </label>
        <select
          id="cargo"
          name="cargo"
          required
          value={form.cargo}
          onChange={handleChange}
          className="rounded-md border border-eisen-border px-4 py-3 text-sm text-eisen-navy bg-white focus:outline-none focus:border-eisen-navy focus:ring-1 focus:ring-eisen-navy transition-colors appearance-none cursor-pointer"
        >
          {CARGOS.map((c) => (
            <option key={c.value} value={c.value} disabled={c.value === ''}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      {/* Mensagem — full width */}
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="mensagem" className="text-xs font-semibold text-eisen-navy/70 uppercase tracking-wide">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={4}
          value={form.mensagem}
          onChange={handleChange}
          placeholder="Conte um pouco sobre você e sua experiência..."
          className="rounded-md border border-eisen-border px-4 py-3 text-sm text-eisen-navy placeholder:text-eisen-faint focus:outline-none focus:border-eisen-navy focus:ring-1 focus:ring-eisen-navy transition-colors resize-none"
        />
      </div>

      {/* Submit */}
      <div className="sm:col-span-2 flex items-center gap-4">
        <button
          type="submit"
          disabled={formState === 'submitting'}
          className="inline-flex items-center gap-2.5 bg-eisen-navy text-white font-bold px-8 py-3.5 rounded-md hover:bg-eisen-navy/90 transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          {formState === 'submitting' ? (
            <>
              <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
                <path d="M12 2a10 10 0 0 1 10 10" />
              </svg>
              Enviando...
            </>
          ) : (
            <>
              <Diamond size="sm" />
              Enviar currículo
            </>
          )}
        </button>
        <p className="text-eisen-faint text-xs">Seus dados são tratados com sigilo.</p>
      </div>
    </form>
  )
}
