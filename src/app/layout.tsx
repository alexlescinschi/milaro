import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingContact from '@/components/layout/FloatingContact'

export const metadata: Metadata = {
  title: 'milaro.ch — Massgefertigte Küchen und Möbel in der Schweiz',
  description: 'milaro.ch: Massgefertigte Küchen, Schränke und Bäder. Schweizer Qualität und individuelles Design für Ihr Zuhause.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body>
        <Header />
        <main className="main-content">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  )
}
