'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { BRANDS, type Brand, type BrandState } from '@/lib/constants'

/* ─── Per-logo calibrated heights (px) for visual harmony ───────────── */
const LOGO_H: Record<string, number> = {
  'Boticário':  26,
  'Koleston':   68,
  "L'Oréal":   28,
  'Revlon':     28,
  'Pantene':    28,
  'Avon':       30,
  'Quem Disse': 34,
  'Vult':       36,
  'Eudora':     50,
  'Wella':      40,
  'Natura':     96,
  'Cia Beauty': 62,
}
const DEFAULT_LOGO_H = 32

/* ─── Types ─────────────────────────────────────────────────────────── */
type Filter = 'Todos' | BrandState

const FILTERS: Filter[] = ['Todos', 'RS', 'SC', 'PR', 'SP']

/* ─── WhatsApp helper ───────────────────────────────────────────────── */
function openWhatsApp(marca: string) {
  const msg = `Olá! Vim pelo site da Eisen. Tenho interesse em distribuir ${marca} na minha região.`
  const link = `https://wa.me/5551998775111?text=${encodeURIComponent(msg)}`
  window.open(link, '_blank')
}

/* ─── BrandCard ─────────────────────────────────────────────────────── */
function BrandCard({ brand }: { brand: Brand }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-white rounded-2xl overflow-hidden cursor-pointer group"
      style={{
        aspectRatio: '3/2',
        border: hovered ? '1.5px solid #FFCC00' : '1.5px solid #EAEDF4',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        boxShadow: hovered
          ? '0 2px 8px rgba(0,0,102,0.06)'
          : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* State badges — top right */}
      <div className="absolute top-3 right-3 z-10 flex flex-wrap gap-1 justify-end max-w-[60%]">
        {brand.states.map((state) => (
          <span
            key={state}
            className="text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded"
            style={{ background: 'rgba(0,0,102,0.07)', color: '#000066' }}
          >
            {state}
          </span>
        ))}
      </div>

      {/* Logo — centered, calibrated height per brand */}
      {(() => {
        const logoH = LOGO_H[brand.name] ?? DEFAULT_LOGO_H
        return (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center px-6 transition-transform duration-200"
            style={{ transform: hovered ? 'translateY(-8px)' : 'translateY(0)' }}
          >
            <div className="relative flex items-center justify-center w-full" style={{ height: `${logoH}px` }}>
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                sizes="(max-width: 768px) 45vw, 22vw"
                className="object-contain"
                style={{ opacity: hovered ? 1 : 0.85, transition: 'all 0.25s ease' }}
              />
            </div>
          </div>
        )
      })()}

      {/* Bottom accent bar on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 transition-transform duration-300 origin-left"
        style={{ background: '#FFCC00', transform: hovered ? 'scaleX(1)' : 'scaleX(0)' }}
      />

      {/* Hover CTA */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 flex justify-center pb-4 px-4"
        initial={false}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
      >
        <button
          onClick={() => openWhatsApp(brand.name)}
          className="flex items-center gap-2 text-white text-[11px] font-bold tracking-wide uppercase px-4 py-2 rounded-lg transition-colors duration-150 cursor-pointer"
          style={{ background: '#000066' }}
        >
          <WhatsAppIcon />
          Quero distribuir
        </button>
      </motion.div>
    </motion.div>
  )
}

/* ─── Filter Pills ──────────────────────────────────────────────────── */
function FilterPills({
  active,
  onChange,
}: {
  active: Filter
  onChange: (f: Filter) => void
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {FILTERS.map((f) => {
        const isActive = f === active
        return (
          <button
            key={f}
            onClick={() => onChange(f)}
            className="px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-150 cursor-pointer"
            style={{
              background: isActive ? '#000066' : 'transparent',
              color: isActive ? '#FFFFFF' : '#6B7280',
              borderColor: isActive ? '#000066' : '#EAEDF4',
            }}
          >
            {f}
          </button>
        )
      })}
    </div>
  )
}

/* ─── Empty state ───────────────────────────────────────────────────── */
function EmptyState() {
  return (
    <motion.div
      key="empty"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="col-span-full flex flex-col items-center justify-center py-24 text-center gap-3"
    >
      <div className="w-3 h-3 bg-eisen-yellow rotate-45 mb-1" />
      <p className="text-eisen-soft text-base font-medium">
        Nenhuma marca neste estado ainda.
      </p>
      <p className="text-eisen-faint text-sm">Atualizando o portfólio.</p>
    </motion.div>
  )
}

/* ─── BrandsGrid (main export) ──────────────────────────────────────── */
export function BrandsGrid() {
  const [activeFilter, setActiveFilter] = useState<Filter>('Todos')

  const filtered: Brand[] =
    activeFilter === 'Todos'
      ? BRANDS
      : BRANDS.filter((b) => b.states.includes(activeFilter as BrandState))

  return (
    <section className="py-24 px-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        {/* Filter row */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
          <span className="text-eisen-faint text-sm font-medium shrink-0">
            Filtrar por estado:
          </span>
          <FilterPills active={activeFilter} onChange={setActiveFilter} />
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              filtered.map((brand) => (
                <BrandCard key={brand.name} brand={brand} />
              ))
            ) : (
              <EmptyState key="empty" />
            )}
          </AnimatePresence>
        </motion.div>

        <p className="mt-6 text-eisen-faint text-xs text-right">
          {filtered.length === BRANDS.length
            ? `${BRANDS.length} marcas no portfólio`
            : `${filtered.length} de ${BRANDS.length} marcas`}
        </p>
      </div>
    </section>
  )
}

/* ─── WhatsApp icon ─────────────────────────────────────────────────── */
function WhatsAppIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
