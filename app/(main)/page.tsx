import dynamic from 'next/dynamic'
import { Hero }   from '@/components/home/Hero'
import { Ticker } from '@/components/home/Ticker'

// Componentes abaixo da dobra — carregam após hero/ticker estarem prontos
// O HTML ainda é gerado (SSR/static), apenas o JS é splitado
const BrandsMarquee = dynamic(() =>
  import('@/components/home/BrandsMarquee').then(m => ({ default: m.BrandsMarquee }))
)
const Differentials = dynamic(() =>
  import('@/components/home/Differentials').then(m => ({ default: m.Differentials }))
)
const Fifteen = dynamic(() =>
  import('@/components/home/Fifteen').then(m => ({ default: m.Fifteen }))
)
const Geography = dynamic(() =>
  import('@/components/home/Geography').then(m => ({ default: m.Geography }))
)
const FAQ = dynamic(() =>
  import('@/components/home/FAQ').then(m => ({ default: m.FAQ }))
)
const CommercialCTA = dynamic(() =>
  import('@/components/home/CommercialCTA').then(m => ({ default: m.CommercialCTA }))
)

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <BrandsMarquee />
      <Differentials />
      <Fifteen />
      <Geography />
      <FAQ />
      <CommercialCTA />
    </>
  )
}
