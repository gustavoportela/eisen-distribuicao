export interface SolidesVaga {
  id: number
  title: string
  jobType: string
  city: { name: string } | null
  state: { code: string; name: string } | null
  recruitmentContractType: { name: string }[]
  seniority: { name: string }[]
}

export async function fetchVagas(): Promise<SolidesVaga[]> {
  try {
    const res = await fetch(
      'https://apigw.solides.com.br/jobs/v3/home/vacancy?slug=eisen&take=30',
      {
        next: { revalidate: 3600 },
        headers: {
          'Accept': 'application/json',
          'Origin': 'https://eisen.vagas.solides.com.br',
          'Referer': 'https://eisen.vagas.solides.com.br/',
        },
      }
    )
    if (!res.ok) return []
    const json = await res.json()
    return (json?.data?.data ?? []) as SolidesVaga[]
  } catch {
    return []
  }
}

export function vagaUrl(id: number) {
  return `https://eisen.vagas.solides.com.br/selective-process/vacancy/${id}`
}

export function jobTypeLabel(type: string) {
  if (type === 'homeOffice') return 'Remoto'
  if (type === 'hibrido') return 'Híbrido'
  return 'Presencial'
}
