import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

/**
 * LP layout — renders children directly.
 *
 * NOTE: Because the root app/layout.tsx already wraps all pages with <Header> and
 * <Footer>, and Next.js App Router nests layouts additively (this layout cannot
 * override the parent), LP pages include their own sticky mini-header that visually
 * covers the root's transparent Header. The root Footer will appear below the LP's
 * own mini footer. A future refactor into a (main) route group would eliminate this.
 */
export default function LpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
