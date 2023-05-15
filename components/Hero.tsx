import Link from 'next/link'
import React from 'react'
import CrosshairCursor from '@/components/CrosshairCursor'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlashForward } from '@fortawesome/pro-solid-svg-icons'
import HeroExperience from './HeroExperience'


export default function Hero() {
  const xp = ['UX/UI Design', 'React / NextJS', 'Shopify', 'Animation', 'Javascript', 'Graphic Design', 'CSS', '3D', 'HTML']
  const xpDup = [...xp, ...xp, ...xp]
  return (
    <div className='h-[calc(100vh-4rem)] relative bg-zinc-800 items-center flex'>
      <div className='mx-auto max-w-[90rem] px-4 md:px-6 z-[5]'>
        <div className='flex justify-center flex-col h-full'>
          <div className='mb-4'>
            <div className="before:text-red-600 before:mr-1 before:content-['———'] text-xl text-zinc-300">Hello. I'm</div>
            <div className='text-white font-serif text-8xl lg:text-9xl'>Nick Arvanitas</div>
            <div className='text-3xl font-light lg:text-2xl text-zinc-400'>UX/UI Designer + Front End Developer</div>
          </div>
          <div className='flex gap-x-4'>
            <Link href='/projects' className='text-lg px-6 py-3 hover:bg-red-400 bg-red-800 text-white rounded-full min-w-[10rem] text-center'>View Work</Link>
            <Link href='/about' className='text-lg px-6 py-3 bg-white text-black rounded-full min-w-[10rem] text-center'>About Me</Link>
          </div>
        </div>
      </div>
      <HeroExperience />
      <div className='absolute bottom-0 z-[5]'>
        <div className='flex  scrollbar-hide scroll- w-[100vw] scroll space-x-2 bg-zinc-900 py-2 border-t-2 border-b-2 border-zinc-600'>
          <div className='flex gap-x-12 pl-12 animate-cycleList'>
            {xpDup.map((item, index) => (
              <div key={index} className='text-white flex items-center gap-x-12 flex-nowrap text-2xl font-light'><span className='w-max'>{item}</span><FontAwesomeIcon icon={faSlashForward} color='#D9354A' /></div>
            ))}
          </div>
        </div>
      </div>
      <CrosshairCursor />
    </div>
  )
}
