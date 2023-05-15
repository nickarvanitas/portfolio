import './globals.css'
import { Inter, Spectral } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { ThemeProvider } from "@/components/ThemeProvider"
import Navbar from '@/components/Navbar'
import PageTransition from '@/components/PageTransition'
import Footer from '@/components/Footer'
config.autoAddCss = false


export const metadata = {
  title: 'Nick Arvanitas Portfolio',
  description: 'A Collectin of UX / UI and Frontend Development Projects',
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '700', '900'],
});

const spectral = Spectral({
  subsets: ['latin'],
  weight: "700",
  variable: '--font-spectral',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spectral.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className='overflow-x-hidden'>
        <ThemeProvider attribute="class" defaultTheme='system' enableSystem>
          <PageTransition>
            <Navbar />
            {children}
            <Footer />
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  )
}
