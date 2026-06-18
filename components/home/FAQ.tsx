'use client'

import { useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const FAQS = [
  {
    q: 'Como me torno um cliente Eisen?',
    a: 'Entre em contato com nossa equipe comercial pelo formulário de cadastro ou diretamente pelo WhatsApp. Nosso time presencial fará uma visita para conhecer seu negócio e apresentar o portfólio completo.',
  },
  {
    q: 'Quais estados a Eisen atende?',
    a: 'Atendemos Rio Grande do Sul (Matriz e CD próprio em Santa Cruz do Sul), Santa Catarina (CD próprio em Içara), Paraná (CD próprio em Curitiba) e São Paulo. Nossa operação é online e também presencial em todas as regiões com equipe dedicada.',
  },
  {
    q: 'A Eisen possui centro de distribuição próprio?',
    a: 'Sim. Operamos com CD próprio no RS, SC e PR, o que garante agilidade, rastreabilidade e controle de qualidade em todos os pedidos. Isso nos diferencia de distribuidoras que terceirizam a logística.',
  },
  {
    q: 'Quais marcas fazem parte do portfólio?',
    a: 'Trabalhamos com marcas de alto reconhecimento como Dailus, Wella Professionals, Parfum Brasil, Felps, CB Cia Beauty, Top Beauty, Avenca, Blend, Phallebeauty, Retrô, Ciranda Cultural, Happy Books, Carmesim e Kids Zone. Portfólio em constante expansão.',
  },
  {
    q: 'Como funciona o suporte da equipe comercial?',
    a: 'Nossa equipe atende de forma presencial e remota. Contamos com promotores nas lojas, materiais de ponto de venda e programas de incentivo para maximizar as vendas dos nossos clientes.',
  },
  {
    q: 'Qual o prazo médio de entrega dos pedidos?',
    a: 'Os prazos variam conforme a região e volume do pedido. Entregamos com agilidade graças aos nossos CDs próprios. Nossa equipe informa o prazo exato no momento do fechamento.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section
      className="flex flex-col lg:flex-row"
      style={{ background: '#F2F1EF', minHeight: 700 }}
    >
      {/* ── Coluna esquerda — título + accordion ─────────────────────────── */}
      <div
        className="flex-1 flex flex-col justify-center"
        style={{
          padding: 'clamp(64px, 8vw, 96px) clamp(24px, 5vw, 72px) clamp(64px, 8vw, 96px) clamp(32px, 6vw, 88px)',
        }}
      >
        {/* Heading */}
        <div style={{ marginBottom: 'clamp(36px, 4vw, 52px)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 3.6vw, 3.25rem)',
              fontWeight: 300,
              lineHeight: 1.06,
              letterSpacing: '-0.04em',
              color: '#08084A',
            }}
          >
            Perguntas{' '}
            <br />
            frequentes{' '}
            <em
              style={{
                fontStyle: 'italic',
                fontWeight: 300,
                color: '#000066',
                letterSpacing: '-0.05em',
              }}
            >
              &amp; respostas
            </em>
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col" style={{ gap: 5 }}>
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                style={{
                  background: '#fff',
                  borderRadius: 10,
                  overflow: 'hidden',
                  border: isOpen
                    ? '1px solid rgba(0,0,102,0.16)'
                    : '1px solid rgba(0,0,0,0.07)',
                  transition: 'border-color 0.2s',
                }}
              >
                {/* Question */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left"
                  style={{ padding: '16px 18px', cursor: 'pointer', background: 'transparent', border: 'none' }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-dm)',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: '#08084A',
                      letterSpacing: '-0.01em',
                      lineHeight: 1.35,
                      flex: 1,
                      paddingRight: 14,
                    }}
                  >
                    {faq.q}
                  </span>

                  {/* Button */}
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 7,
                      background: isOpen ? '#000066' : '#08084A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'background 0.2s',
                    }}
                  >
                    <m.svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                    >
                      <path
                        d="M6 1v10M1 6h10"
                        stroke={isOpen ? '#FFCC00' : '#ffffff'}
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                    </m.svg>
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ display: 'flex', gap: 14, padding: '2px 18px 18px' }}>
                        <div
                          style={{
                            width: 2,
                            borderRadius: 2,
                            background: '#FFCC00',
                            flexShrink: 0,
                            alignSelf: 'stretch',
                          }}
                        />
                        <p
                          style={{
                            fontFamily: 'var(--font-dm)',
                            fontSize: '0.875rem',
                            lineHeight: 1.75,
                            color: 'rgba(0,0,0,0.50)',
                          }}
                        >
                          {faq.a}
                        </p>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Coluna direita — imagem ───────────────────────────────────────── */}
      <div
        className="hidden lg:block relative"
        style={{ width: '40%', minHeight: 700, flexShrink: 0 }}
      >
        <Image
          src="/brand/faq-model.jpg"
          alt="Beleza e cosméticos premium"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 20%' }}
        />

        {/* Fade gradiente à esquerda — une com o fundo warm gray */}
        <div
          className="absolute inset-y-0 left-0 w-16 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, #F2F1EF, transparent)',
          }}
        />

        {/* Overlay sutil no topo e base */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.08) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.18) 100%)',
          }}
        />
      </div>
    </section>
  )
}
