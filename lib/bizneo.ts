import { parse } from 'node-html-parser'

export interface BizneVaga {
  title: string
  city: string
  state: string
  stateCode: string
  modality: string
  url: string
}

const STATES = [
  { name: 'Rio Grande do Sul', code: 'RS', county: 'county:kU1KW84nfAj-' },
  { name: 'Santa Catarina',    code: 'SC', county: 'county:ltVdqg7pQ3sa' },
  { name: 'Paraná',            code: 'PR', county: 'county:kVH-LX8ghjoq' },
] as const

const BASE = 'https://vagas.grupoeisen.com.br/jobs'

async function fetchByState(county: string, stateName: string, stateCode: string): Promise<BizneVaga[]> {
  const res = await fetch(`${BASE}?location=${encodeURIComponent(county)}`, {
    next: { revalidate: 3600 },
    headers: {
      'Accept': 'text/html',
      'User-Agent': 'Mozilla/5.0 (compatible; EisenBot/1.0)',
    },
  })
  if (!res.ok) return []

  const html = await res.text()
  const root = parse(html)

  return root.querySelectorAll('a.job-card').map((card) => {
    const url      = card.getAttribute('href') ?? ''
    const title    = card.querySelector('.title')?.text.trim() ?? ''
    const spans    = card.querySelectorAll('.details span')
    const city     = spans[0]?.text.trim() ?? ''
    const modality = spans[1]?.text.trim() ?? ''
    return { title, city, state: stateName, stateCode, modality, url }
  }).filter((v) => v.title && v.url)
}

export async function fetchVagasBizneo(): Promise<BizneVaga[]> {
  try {
    const results = await Promise.all(
      STATES.map((s) => fetchByState(s.county, s.name, s.code))
    )
    const seen = new Set<string>()
    return results.flat().filter((v) => {
      if (seen.has(v.url)) return false
      seen.add(v.url)
      return true
    })
  } catch {
    return []
  }
}
