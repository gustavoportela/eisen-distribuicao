import { Header } from '@/components/layout/Header'
import { FloatingWhatsapp } from '@/components/layout/FloatingWhatsapp'

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <FloatingWhatsapp />
    </>
  )
}
