'use client'

import { useState, useMemo, useRef, useEffect } from 'react'
import { type SolidesVaga } from '@/lib/solides'
import { vagaUrl, jobTypeLabel } from '@/lib/solides'

interface Props {
  vagas: SolidesVaga[]
}

interface LocalItem {
  label: string
  value: string
}

function LocalDropdown({ locais, value, onChange, vagas }: {
  locais: LocalItem[]
  value: string
  onChange: (v: string) => void
  vagas: SolidesVaga[]
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const selected = locais.find((l) => l.value === value)

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-2.5 bg-white px-3.5 py-3 text-sm rounded-lg transition-all text-left"
        style={{
          border: `1.5px solid ${open ? 'rgba(0,0,102,0.35)' : 'rgba(0,0,102,0.1)'}`,
          boxShadow: open ? '0 0 0 3px rgba(0,0,102,0.06)' : 'none',
          fontFamily: 'var(--font-body)',
          color: selected ? '#0C0C14' : 'rgba(0,0,0,0.38)',
        }}
      >
        {/* Pin icon */}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke={selected ? '#000066' : 'rgba(0,0,102,0.35)'}
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
        </svg>

        <span className="flex-1 truncate">
          {selected ? selected.label : 'Todos os locais'}
        </span>

        {selected ? (
          <span
            onClick={(e) => { e.stopPropagation(); onChange('') }}
            className="shrink-0 flex items-center justify-center w-4 h-4 rounded-full transition-colors hover:bg-black/10"
          >
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </span>
        ) : (
          <svg
            width="13" height="13" viewBox="0 0 24 24" fill="none"
            stroke="rgba(0,0,102,0.4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            className="shrink-0"
            style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        )}
      </button>

      {/* Dropdown panel */}
      {open && (
        <div
          className="absolute left-0 right-0 top-full mt-1.5 z-50 overflow-hidden"
          style={{
            background: '#fff',
            borderRadius: '12px',
            border: '1.5px solid rgba(0,0,102,0.1)',
            boxShadow: '0 8px 32px rgba(0,0,80,0.12), 0 2px 8px rgba(0,0,0,0.06)',
          }}
        >
          <div className="py-1.5 max-h-56 overflow-y-auto">
            {/* Todos */}
            <button
              type="button"
              onClick={() => { onChange(''); setOpen(false) }}
              className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors text-left"
              style={{
                background: !value ? 'rgba(0,0,102,0.05)' : 'transparent',
                color: !value ? '#000066' : '#3A3A5C',
                fontFamily: 'var(--font-body)',
                fontWeight: !value ? 600 : 400,
              }}
            >
              <span className="w-4 shrink-0">
                {!value && (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#000066" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </span>
              Todos os locais
              <span className="ml-auto text-[11px] font-medium px-2 py-0.5 rounded-full"
                style={{ background: 'rgba(0,0,102,0.07)', color: '#000066' }}>
                {vagas.length}
              </span>
            </button>

            {/* Separator */}
            <div className="mx-3 my-1" style={{ height: '1px', background: 'rgba(0,0,102,0.06)' }} />

            {locais.map((l) => {
              const count = vagas.filter(v => `${v.city?.name}-${v.state?.code}` === l.value).length
              const isSelected = value === l.value
              return (
                <button
                  key={l.value}
                  type="button"
                  onClick={() => { onChange(l.value); setOpen(false) }}
                  className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors text-left"
                  style={{
                    background: isSelected ? 'rgba(0,0,102,0.05)' : 'transparent',
                    color: isSelected ? '#000066' : '#3A3A5C',
                    fontFamily: 'var(--font-body)',
                    fontWeight: isSelected ? 600 : 400,
                  }}
                  onMouseEnter={(e) => { if (!isSelected) (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,102,0.03)' }}
                  onMouseLeave={(e) => { if (!isSelected) (e.currentTarget as HTMLElement).style.background = 'transparent' }}
                >
                  <span className="w-4 shrink-0">
                    {isSelected && (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#000066" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </span>
                  {l.label}
                  <span className="ml-auto text-[11px] font-medium px-2 py-0.5 rounded-full"
                    style={{ background: isSelected ? 'rgba(0,0,102,0.12)' : 'rgba(0,0,0,0.05)', color: isSelected ? '#000066' : '#78787E' }}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
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
              className="w-full bg-white pl-10 pr-9 py-3 text-sm rounded-lg focus:outline-none transition-all"
              style={{
                border: `1.5px solid ${busca ? 'rgba(0,0,102,0.35)' : 'rgba(0,0,102,0.1)'}`,
                boxShadow: busca ? '0 0 0 3px rgba(0,0,102,0.06)' : 'none',
                color: '#0C0C14',
                fontFamily: 'var(--font-body)',
              }}
            />
            {busca && (
              <button
                onClick={() => setBusca('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-4 h-4 rounded-full transition-colors hover:bg-black/10"
                style={{ color: 'rgba(0,0,0,0.4)' }}
              >
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Dropdown customizado */}
          <LocalDropdown locais={locais} value={local} onChange={setLocal} vagas={vagas} />
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
