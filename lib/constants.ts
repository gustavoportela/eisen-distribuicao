export type BrandState = 'RS' | 'SC' | 'PR' | 'SP'

export interface Brand {
  name: string
  logo: string
  states: BrandState[]
}

export const BRANDS: Brand[] = [
  { name: 'Boticário',     logo: '/logos/boticario.svg',    states: ['RS', 'SC', 'PR', 'SP'] },
  { name: 'Eudora',        logo: '/logos/eudora.svg',       states: ['RS', 'SC', 'PR'] },
  { name: 'Quem Disse',    logo: '/logos/quemdisse.svg',    states: ['RS', 'SC', 'PR', 'SP'] },
  { name: 'Vult',          logo: '/logos/vult.svg',         states: ['RS', 'SC', 'PR', 'SP'] },
  { name: 'Avon',          logo: '/logos/avon.svg',         states: ['RS', 'SC', 'PR'] },
  { name: 'Natura',        logo: '/logos/natura.svg',       states: ['RS', 'SC'] },
  { name: 'Cia Beauty',    logo: '/logos/ciabeauty.webp',   states: ['RS'] },
  { name: 'Wella',         logo: '/logos/wella.svg',        states: ['PR'] },
  { name: "L'Oréal",       logo: '/logos/loreal.svg',       states: ['RS', 'SC', 'PR', 'SP'] },
  { name: 'Revlon',        logo: '/logos/revlon.svg',       states: ['RS', 'SC', 'PR', 'SP'] },
  { name: 'Koleston',      logo: '/logos/koleston.png',     states: ['RS', 'SC', 'PR'] },
  { name: 'Pantene',       logo: '/logos/pantene.svg',      states: ['RS', 'SC', 'PR', 'SP'] },
]

export interface StateInfo {
  sigla: BrandState
  nome: string
  cidade: string
  detalhe: string
  novo?: boolean
}

export const STATES: StateInfo[] = [
  {
    sigla: 'RS',
    nome: 'Rio Grande do Sul',
    cidade: 'Santa Cruz do Sul',
    detalhe: 'Centro de distribuição próprio',
  },
  {
    sigla: 'SC',
    nome: 'Santa Catarina',
    cidade: 'Blumenau',
    detalhe: 'Atendimento presencial e remoto',
  },
  {
    sigla: 'PR',
    nome: 'Paraná',
    cidade: 'Curitiba',
    detalhe: 'Time comercial dedicado',
  },
  {
    sigla: 'SP',
    nome: 'São Paulo',
    cidade: 'São Paulo',
    detalhe: 'Expansão recente — mercado nacional',
    novo: true,
  },
]

export const NUMBERS = [
  { value: 15,   suffix: '',  label: 'Anos de mercado' },
  { value: 4,    suffix: '',  label: 'Estados de atuação' },
  { value: 1,    suffix: '',  label: 'CD próprio', isText: true, textValue: 'CD\nPróprio' },
  { value: 500,  suffix: '+', label: 'Clientes ativos' },
]

export const DIFFERENTIALS = [
  {
    num: '01',
    title: 'Marcas de renome e desejo',
    text: 'Portfólio premium que seus clientes já conhecem e pedem.',
  },
  {
    num: '02',
    title: 'Centro de distribuição próprio',
    text: 'Operação logística própria. Agilidade e rastreabilidade em todos os pedidos.',
  },
  {
    num: '03',
    title: 'Atendimento presencial e remoto',
    text: 'Time comercial dedicado — presença física e suporte próximo em cada região.',
  },
  {
    num: '04',
    title: 'Promotoria e benefícios',
    text: 'Promotores nas lojas, materiais de ponto de venda e programas de incentivo.',
  },
]

export const TIMELINE_EVENTS = [
  { year: '2011', label: 'Fundação' },
  { year: '2013', label: 'Expansão SC' },
  { year: '2016', label: 'CD próprio' },
  { year: '2019', label: 'Expansão PR' },
  { year: '2023', label: 'Chegada em SP' },
  { year: '2026', label: '15 Anos' },
]
