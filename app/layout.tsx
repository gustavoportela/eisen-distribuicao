import type { Metadata } from 'next'
import { Inter, Outfit, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

// Fonte principal do corpo — carrega apenas pesos usados
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

// Fonte de display (títulos, CTAs) — peso 400-800
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
})

// Fonte de interface (FAQ, cards) — pesos usados apenas
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm',
  display: 'swap',
})

// Libre Caslon removida — watermark do footer foi removida

export const metadata: Metadata = {
  title: {
    default: 'Eisen Distribuição Especializada | Distribuição Premium há 15 Anos',
    template: '%s | Eisen Distribuição',
  },
  description:
    'Conectando as melhores marcas ao seu negócio. Presente nos estados de RS, SC, PR e SP com centro de distribuição próprio e atendimento presencial.',
  metadataBase: new URL('https://eisendistribuicao.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://eisendistribuicao.com.br',
    siteName: 'Eisen Distribuição Especializada',
    title: 'Eisen Distribuição | Distribuição Premium há 15 Anos',
    description:
      'Conectando as melhores marcas ao seu negócio. Presente em RS, SC, PR e SP.',
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Eisen Distribuição Especializada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable} ${dmSans.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>

      {/* Meta Pixel — lazyOnload: carrega após tudo, não bloqueia LCP/TBT */}
      <Script id="meta-pixel" strategy="lazyOnload">
        {`
          !function(f,b,e,v,n,t,s){
            if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)
          }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '362687585748608');
          fbq('track', 'PageView');
        `}
      </Script>
    </html>
  )
}
