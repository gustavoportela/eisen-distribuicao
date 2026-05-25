export const WHATSAPP = {
  RS: { number: '5551998775111', label: 'Rio Grande do Sul', city: 'Santa Cruz do Sul' },
  SC: { number: '5551992536292', label: 'Santa Catarina',    city: 'Blumenau' },
  PR: { number: '5541988300098', label: 'Paraná',            city: 'Curitiba' },
  SP: { number: '5511999999999', label: 'São Paulo',          city: 'São Paulo' }, // confirmar com Eliana
} as const

export type State = keyof typeof WHATSAPP

export const WPP_MESSAGE = (estado: string) =>
  `Olá! Vim pelo site da Eisen Distribuição e gostaria de saber mais sobre os produtos disponíveis no estado de ${estado} e como posso me tornar um cliente Eisen.`

export const wppLink = (state: State) => {
  const { number, label } = WHATSAPP[state]
  return `https://wa.me/${number}?text=${encodeURIComponent(WPP_MESSAGE(label))}`
}
