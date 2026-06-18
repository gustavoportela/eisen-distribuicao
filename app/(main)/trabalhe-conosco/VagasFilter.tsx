'use client'

import { useState, useMemo } from 'react'
import { type SolidesVaga } from '@/lib/solides'
import { vagaUrl, jobTypeLabel } from '@/lib/solides'

interface Props {
  vagas: SolidesVaga[]
}

export function VagasFilter({ vagas }: Props) {
  const [busca, setBusca] = useState('')
  const [local, setLocal] = useState('')

  const locais = useMemo(() => {
    const seen = new Set<string>()
    return vagas
      .filter((v) => v.city && v.state)
      .map((v) => ({ label: `${v.city!.name} · ${v.state!.code}`, value: `${v.city!.name}-${v.state!.code}` }))
      .filter((l) => !seen.has(l.value) && seen.add(l.value))
      .sort((a, b) => a.label.localeCompare(b.label))
  }, [vagas])

  const filtradas = useMemo(() => {
    return vagas.filter((v) => {
      const matchBusca = !busca || v.title.toLowerCase().includes(busca.toLowerCase())
      const matchLocal = !local || `${v.city?.name}-${v.state?.code}` === local
      return matchBusca && matchLocal
    })
  }, [vagas, busca, local])

  return (
    <>
      {/* ── Barra de filtros ── */}
      {vagas.length > 0 && (
        <div
          className="mb-8 grid sm:grid-cols-2 gap-3"
          style={{
            background: '#F4F4F8',
            borderRadius: '16px',
            padding: '20px',
            border: '1.5px solid rgba(0,0,102,0.07)',
          }}
        >
          {/* Busca por título */}
          <div className="relative">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="rgba(0,0,102,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Buscar por cargo ou título…"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full bg-white pl-10 pr-4 py-3 text-sm rounded-lg focus:outline-none focus:ring-2 transition-all"
              style={{
                border: '1.5px solid rgba(0,0,102,0.1)',
                color: '#0C0C14',
                fontFamily: 'var(--font-body)',
              }}
            />
            {busca && (
              <button
                onClick={() => setBusca('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
              </button>
            )}
          </div>

          {/* Filtro de local */}
          <div className="relative">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="rgba(0,0,102,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            <select
              value={local}
              onChange={(e) => setLocal(e.target.value)}
              className="w-full appearance-none bg-white pl-10 pr-9 py-3 text-sm rounded-lg focus:outline-none focus:ring-2 transition-all cursor-pointer"
              style={{
                border: '1.5px solid rgba(0,0,102,0.1)',
                color: local ? '#0C0C14' : 'rgba(0,0,0,0.38)',
                fontFamily: 'var(--font-body)',
              }}
            >
              <option value="">Todos os locais</option>
              {locais.map((l) => (
                <option key={l.value} value={l.value}>{l.label}</option>
              ))}
            </select>
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
              width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="rgba(0,0,102,0.4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      )}

      {/* ── Grid de vagas ── */}
      {filtradas.length === 0 && vagas.length > 0 ? (
        <div className="text-center py-14" style={{ color: '#78787E' }}>
          <svg className="mx-auto mb-3 opacity-30" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <p className="text-sm font-medium">Nenhuma vaga encontrada para este filtro.</p>
          <button
            onClick={() => { setBusca(''); setLocal('') }}
            className="mt-3 text-xs font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity"
            style={{ color: '#000066' }}
          >
            Limpar filtros
          </button>
        </div>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
            {filtradas.slice(0, 6).map((vaga) => (
              <a
                key={vaga.id}
                href={vagaUrl(vaga.id)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between bg-white p-6 transition-all hover:shadow-md hover:-translate-y-0.5"
                style={{ borderRadius: '14px', border: '1.5px solid rgba(0,0,102,0.09)' }}
              >
                <div>
                  <h3
                    className="font-bold mb-3 group-hover:text-eisen-navy transition-colors"
                    style={{ fontSize: '0.9375rem', color: '#0C0C14', lineHeight: 1.35, fontFamily: 'var(--font-display)' }}
                  >
                    {vaga.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {vaga.city && vaga.state && (
                      <span className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                        style={{ background: 'rgba(0,0,102,0.06)', color: '#000066' }}>
                        {vaga.city.name} · {vaga.state.code}
                      </span>
                    )}
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(0,0,102,0.06)', color: '#000066' }}>
                      {jobTypeLabel(vaga.jobType)}
                    </span>
                    {vaga.recruitmentContractType[0] && (
                      <span className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                        style={{ background: 'rgba(255,204,0,0.14)', color: '#6B4F00' }}>
                        {vaga.recruitmentContractType[0].name}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: '#000066' }}>
                  Ver vaga
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {filtradas.length > 6 && (
            <div className="flex items-center justify-between mb-8">
              <p className="text-xs" style={{ color: 'rgba(0,0,0,0.28)' }}>
                Exibindo 6 de {filtradas.length} vagas
              </p>
              <a
                href="https://eisen.vagas.solides.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold hover:opacity-75 transition-opacity"
                style={{ color: '#000066' }}
              >
                Ver todas as {filtradas.length} vagas
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          )}
        </>
      )}
    </>
  )
}
