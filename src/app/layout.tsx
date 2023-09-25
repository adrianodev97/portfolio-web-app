import { MUIHeader } from '@/components/MUIHeader'
import { Nunito } from 'next/font/google'
import { Metadata } from 'next'
import { MUIStyledBody } from '@/styles/global'
import { ThemeProvider } from '@/styles/theme/ThemeProvider'
import '../styles/globals.css'

const nunito = Nunito({ subsets: ['latin'] })

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
      <ThemeProvider>
        <MUIStyledBody className={nunito.className}>
          <MUIHeader />
          {children}
        </MUIStyledBody>
      </ThemeProvider>
    </html>
  )
}
