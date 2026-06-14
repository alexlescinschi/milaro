import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'milaro.ch — Massgefertigte Küchen und Möbel in der Schweiz',
  description: 'milaro.ch: Massgefertigte Küchen, Schränke, Bäder und Sofas. Schweizer Qualität und individuelles Design für Ihr Zuhause.',
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
      </body>
    </html>
  )
}
