import { Hero } from '@/components/home/Hero'
import { Ticker } from '@/components/home/Ticker'
import { BrandsMarquee } from '@/components/home/BrandsMarquee'
import { Differentials } from '@/components/home/Differentials'
import { Fifteen } from '@/components/home/Fifteen'
import { Geography } from '@/components/home/Geography'
import { FAQ } from '@/components/home/FAQ'
import { CommercialCTA } from '@/components/home/CommercialCTA'

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
