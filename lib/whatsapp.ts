const CENTRAL = '555189757372'

export const WHATSAPP = {
  RS: { number: CENTRAL, label: 'Rio Grande do Sul', city: 'Santa Cruz do Sul' },
  SC: { number: CENTRAL, label: 'Santa Catarina',    city: 'Içara' },
  PR: { number: CENTRAL, label: 'Paraná',            city: 'Curitiba' },
} as const

export type State = keyof typeof WHATSAPP

export const WPP_MESSAGE = (estado: string) =>
  `Olá! Vim pelo site da Eisen Distribuição e gostaria de saber mais sobre os produtos disponíveis no estado de ${estado} e como posso me tornar um cliente Eisen.`

export const wppLink = (state: State) => {
  const { number, label } = WHATSAPP[state]
  return `https://wa.me/${number}?text=${encodeURIComponent(WPP_MESSAGE(label))}`
}
