'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Diamond } from '@/components/ui/Diamond'

interface TimelineEvent {
  year: string
  label: string
}

interface TimelineClientProps {
  events: TimelineEvent[]
}

const DESCRIPTIONS: Record<string, string> = {
  '2011': 'A Eisen nasce em Santa Cruz do Sul, RS, com foco em distribuição especializada de cosméticos e beleza.',
  '2013': 'Início das operações em Santa Catarina, com equipe comercial dedicada e portfólio expandido.',
  '2016': 'Inauguração do centro de distribuição próprio no RS, ampliando agilidade logística e rastreabilidade.',
  '2019': 'Chegada ao Paraná com time presencial em Curitiba e portfólio completo para o mercado local.',
  '2023': 'Entrada no maior mercado do Brasil, São Paulo, consolidando a presença nacional.',
  '2026': 'Quinze anos de aprendizado, superação e crescimento. Uma história construída sobre relacionamentos.',
}

const ease = [0.22, 1, 0.36, 1] as const

export function TimelineClient({ events }: TimelineClientProps) {
  const [active, setActive] = useState<string>(events[0].year)

  return (
    <div className="flex flex-col gap-12">
      {/* Desktop: horizontal */}
      <div className="hidden lg:block">
        {/* Track horizontal */}
        <div className="relative flex items-center">
          {/* linha */}
          <div className="absolute left-0 right-0 h-px bg-white/10 top-1/2 -translate-y-1/2" />

          <div className="relative z-10 flex w-full justify-between">
            {events.map((ev) => {
              const isActive = active === ev.year
              return (
                <button
                  key={ev.year}
                  onClick={() => setActive(ev.year)}
                  className="flex flex-col items-center gap-3 cursor-pointer group"
                >
                  {/* dot */}
                  <motion.div
                    animate={{
                      scale: isActive ? 1.25 : 1,
                      backgroundColor: isActive ? '#F5C800' : 'rgba(255,255,255,0.15)',
                    }}
                    transition={{ duration: 0.25, ease }}
                    className="w-4 h-4 rounded-full border-2 border-white/20"
                    style={{ borderColor: isActive ? '#F5C800' : undefined }}
                  />

                  {/* year label */}
                  <span
                    className="font-extrabold transition-colors duration-200"
                    style={{
                      fontSize: '1.25rem',
                      letterSpacing: '-0.03em',
                      color: isActive ? '#F5C800' : 'rgba(255,255,255,0.75)',
                    }}
                  >
                    {ev.year}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Conteúdo ativo */}
        <div className="mt-12 min-h-[100px]">
          <AnimatePresence mode="wait">
            {events.map((ev) =>
              ev.year === active ? (
                <motion.div
                  key={ev.year}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease }}
                  className="flex items-start gap-5"
                >
                  <Diamond size="sm" color="pink" className="mt-1 shrink-0" />
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">{ev.label}</h3>
                    <p className="text-white/75 text-base leading-relaxed max-w-xl">
                      {DESCRIPTIONS[ev.year]}
                    </p>
                  </div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile: vertical list */}
      <div className="lg:hidden flex flex-col gap-8">
        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10" />

          {events.map((ev, i) => (
            <motion.div
              key={ev.year}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease }}
              className="flex gap-6 items-start mb-8 last:mb-0"
            >
              {/* dot */}
              <div className="relative flex-none pt-0.5">
                <div className="w-4 h-4 rounded-full border-2 border-eisen-yellow bg-eisen-navy-dark" />
              </div>

              <div>
                <span
                  className="text-eisen-yellow font-extrabold block mb-1"
                  style={{ fontSize: '1.375rem', letterSpacing: '-0.03em' }}
                >
                  {ev.year}
                </span>
                <h3 className="text-white font-semibold text-base mb-1.5">{ev.label}</h3>
                <p className="text-white/75 text-sm leading-relaxed">{DESCRIPTIONS[ev.year]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
