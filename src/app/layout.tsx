import { MUIHeader } from '@/components/MUIHeader'
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Diflux Web Solutions',
  description: 'Your solution here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt_BR">
      <body className={inter.className}>
        <MUIHeader />
        {children}
      </body>
    </html>
  )
}
