import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingWhatsapp } from '@/components/layout/FloatingWhatsapp'
import { MotionProvider } from '@/components/providers/MotionProvider'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <MotionProvider>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingWhatsapp />
    </MotionProvider>
  )
}
