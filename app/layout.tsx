import './globals.css'
import { Inter, Spectral } from 'next/font/google'
import { ThemeProvider } from "@/components/ThemeProvider"
import Navbar from '@/components/Navbar'
import PageTransition from '@/components/PageTransition'
import Footer from '@/components/Footer'


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
      <head>
      </head>
      <body className='overflow-x-hidden'>
        <ThemeProvider attribute="class" defaultTheme='system' enableSystem>
          <PageTransition>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M142.9 32C104.4 32 67.5 47.3 40.2 74.5L25.4 89.4 2.7 112 48 157.3l22.6-22.6 14.9-14.9C100.7 104.5 121.3 96 142.9 96c44.8 0 81.1 36.3 81.1 81.1c0 21.5-8.5 42.2-23.8 57.4L9.4 425.4 0 434.7V480H32 288h32V416H288 109.3L245.5 279.8c27.2-27.2 42.5-64.1 42.5-102.6C288 97 223 32 142.9 32z" /></svg>
            <div>hi</div>
            <Footer />
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  )
}
