export const WHATSAPP = {
  RS: { number: '5551999953219', label: 'Rio Grande do Sul', city: 'Santa Cruz do Sul' },
  SC: { number: '5551992536292', label: 'Santa Catarina',    city: 'Içara' },
  PR: { number: '5541988300098', label: 'Paraná',            city: 'Curitiba' },
} as const

export type State = keyof typeof WHATSAPP

export const WPP_MESSAGE = (estado: string) =>
  `Olá! Vim pelo site da Eisen Distribuição e gostaria de saber mais sobre os produtos disponíveis no estado de ${estado} e como posso me tornar um cliente Eisen.`

export const wppLink = (state: State) => {
  const { number, label } = WHATSAPP[state]
  return `https://wa.me/${number}?text=${encodeURIComponent(WPP_MESSAGE(label))}`
}
