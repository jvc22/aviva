import './globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Aviva | Faça parte',
  description: 'Uma comunidade para o crescimento em Deus',
}

const geistSans = localFont({
  src: '../../public/assets/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: '../../public/assets/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} overscroll-none font-geist antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
