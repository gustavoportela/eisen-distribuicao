export type BrandState = 'RS' | 'SC' | 'PR' | 'SP'

export interface Brand {
  name: string
  logo: string
  states: BrandState[]
}

export const BRANDS: Brand[] = [
  { name: 'Dailus',           logo: '/logos/dailus.png',       states: ['RS'] },
  { name: 'Wella',            logo: '/logos/wella-pro.png',    states: ['RS', 'SC', 'PR'] },
  { name: 'Parfum Brasil',    logo: '/logos/parfum.png',       states: ['RS', 'SC', 'PR'] },
  { name: 'Felps',            logo: '/logos/felps.png',        states: ['RS', 'SC', 'PR'] },
  { name: 'Cia Beauty',       logo: '/logos/ciabeauty2.png',   states: ['RS', 'SC', 'PR'] },
  { name: 'Top Beauty',       logo: '/logos/topbeauty.png',    states: ['RS', 'PR'] },
  { name: 'Avenca',           logo: '/logos/avenca.png',       states: ['RS', 'SC', 'PR'] },
  { name: 'Blend',            logo: '/logos/blend.png',        states: ['RS', 'SC', 'PR'] },
  { name: 'Phallebeauty',     logo: '/logos/phallebeauty.png', states: ['RS', 'SC', 'PR'] },
  { name: 'Retrô',            logo: '/logos/retro.png',        states: ['RS', 'SC', 'PR'] },
  { name: 'Ciranda Cultural', logo: '/logos/ciranda.png',      states: ['RS', 'SC'] },
  { name: 'Happy Books',      logo: '/logos/happybooks.png',   states: ['RS', 'SC'] },
  { name: 'Carmesim',         logo: '/logos/carmesim.png',     states: ['RS'] },
  { name: 'Kids Zone',        logo: '/logos/kidszone.png',     states: ['RS'] },
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
    detalhe: 'Matriz e CD próprio',
  },
  {
    sigla: 'SC',
    nome: 'Santa Catarina',
    cidade: 'Içara',
    detalhe: 'CD próprio e equipe presencial',
  },
  {
    sigla: 'PR',
    nome: 'Paraná',
    cidade: 'Curitiba',
    detalhe: 'CD próprio e time comercial dedicado',
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
  { value: 15,    suffix: '',     label: 'Anos de mercado' },
  { value: 4,     suffix: '',     label: 'Estados de atuação' },
  { value: 1,     suffix: '',     label: 'CD próprio', isText: true, textValue: 'CD\nPróprio' },
  { value: 15000, suffix: '+',    label: 'Clientes atendidos', isText: true, textValue: '+15 mil' },
]

export const DIFFERENTIALS = [
  {
    num: '01',
    title: 'Marcas de renome e desejo',
    text: 'Portfólio premium que os consumidores já conhecem e buscam para comprar.',
  },
  {
    num: '02',
    title: 'Centro de Distribuição próprio no RS, SC e PR',
    text: 'Operação logística estruturada para atender todas as localidades e regiões dos estados do RS, SC, e PR, de forma organizada e pontual.',
  },
  {
    num: '03',
    title: 'Atendimento presencial e remoto',
    text: 'Time comercial dedicado — presença física e suporte próximo em cada região.',
  },
  {
    num: '04',
    title: 'Equipe Comercial Consultiva',
    text: 'Profissionais qualificados para contribuir com o crescimento do seu negócio.',
  },
]

export const TIMELINE_EVENTS = [
  { year: '2011', label: 'Fundação', detail: '25 de Julho' },
  { year: '2018', label: 'Nova Matriz', detail: 'Santa Cruz do Sul' },
  { year: '2019', label: 'Filial SC', detail: 'Santa Catarina' },
  { year: '2021', label: 'Filial PR', detail: 'Paraná' },
  { year: '2025', label: 'Filial SP', detail: 'São Paulo' },
  { year: '2026', label: '15 Anos', detail: 'De história' },
]
