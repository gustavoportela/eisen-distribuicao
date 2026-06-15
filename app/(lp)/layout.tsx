import { Header } from '@/components/layout/Header'
import { FloatingWhatsapp } from '@/components/layout/FloatingWhatsapp'
import { MotionProvider } from '@/components/providers/MotionProvider'

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return (
    <MotionProvider>
      <Header />
      <main className="flex-1">{children}</main>
      <FloatingWhatsapp />
    </MotionProvider>
  )
}
