import AboutMe from '@/components/AboutMe'
import ContactSection from '@/components/ContactSection'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Reviews from '@/components/Reviews'
import Test from '@/components/Test'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <AboutMe />
      <Reviews />
      <ContactSection />
      <Test />
    </main >
  )
}
