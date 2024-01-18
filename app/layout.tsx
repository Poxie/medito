import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import ModalProvider from '@/contexts/modal'
import Footer from '@/components/footer'
import TiersProvider from '@/contexts/tiers'

const DMSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={DMSans.className}>
        <TiersProvider>
          <ModalProvider>
            <Navbar />
            {children}
            <Footer />
          </ModalProvider>
        </TiersProvider>
      </body>
    </html>
  )
}
