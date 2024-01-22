import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import ModalProvider from '@/contexts/modal'
import Footer from '@/components/footer'
import TiersProvider from '@/contexts/tiers'
import metaData from '@/assets/data/metadata/index.json';
import CurrencyProvider from '@/contexts/currency'

const DMSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = metaData;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={DMSans.className}>
        <CurrencyProvider>
          <TiersProvider>
            <ModalProvider>
              <Navbar />
              {children}
              <Footer />
            </ModalProvider>
          </TiersProvider>
        </CurrencyProvider>
      </body>
    </html>
  )
}
