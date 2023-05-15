"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import CrosshairCursor from '@/components/CrosshairCursor'
import HeroExperience from './HeroExperience'
import { is } from '@react-three/fiber/dist/declarations/src/core/utils'


export default function Hero() {
  const xp = ['UX/UI Design', 'React / NextJS', 'Shopify', 'Animation', 'Javascript', 'Graphic Design', 'CSS', '3D', 'HTML']
  const xpDup = [...xp, ...xp, ...xp]
  const [isHovering, setIsHovering] = useState(true)
  useEffect(() => {
    console.log(isHovering)
  }, [isHovering])

  return (
    <div className='h-[calc(100vh-4rem)] relative grid grid-rows-[1fr_auto] grid-cols-[auto_1fr]' onMouseOut={() => setIsHovering(false)} onMouseOver={() => setIsHovering(true)}>
      <div className='mx-auto px-4 md:px-6 lg:px-12 flex items-center bg-zinc-800 '>
        <div className='flex justify-center flex-col h-full z-[5]'>
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
              <div key={index} className='text-white flex items-center gap-x-12 flex-nowrap text-2xl font-light'><span className='w-max'>{item}</span><div className='h-auto w-4 text-red-800'><svg fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M319.9 0H248.8L.1 512H71.2L319.9 0z" /></svg></div></div>
            ))}
          </div>
        </div>
      </div>
      {isHovering && <CrosshairCursor />}
    </div>
  )
}
