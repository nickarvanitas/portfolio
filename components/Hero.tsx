"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import CrosshairCursor from '@/components/CrosshairCursor'
import HeroExperience from './HeroExperience'


export default function Hero() {
  const xp = ['UX/UI Design', 'React / NextJS', 'Shopify', 'Animation', 'Javascript', 'Graphic Design', 'CSS', '3D', 'HTML']
  const xpList = [...xp, ...xp, ...xp]
  const [isHovering, setIsHovering] = useState(true)

  return (
    <div className='h-[calc(100vh-4rem)] relative grid grid-rows-[auto_auto_1fr] lg:grid-rows-[1fr_auto] lg:grid-cols-2' onMouseOut={() => setIsHovering(false)} onMouseOver={() => setIsHovering(true)}>
      <div className='px-4 md:px-6 lg:px-12 py-8 flex items-center dark:bg-zinc-900  row-span-1 col-span-1 lg:col-span-1 lg:col-start-1 lg:row-start-1 overflow-x-hidden'>
        <div className='flex justify-center flex-col h-full z-[5] lg:mx-auto'>
          <div className='mb-6'>
            <div className="before:text-red-600 before:mr-1 before:content-['———'] text-xl text-zinc-300 mb-2">Hello. I&apos;m</div>
            <div className='text-white font-serif text-7xl lg:text-9xl'>Nick Arvanitas</div>
            <div className='text-2xl md:text-3xl font-light lg:text-2xl text-zinc-400'>UX/UI Designer + Front End Developer</div>
          </div>
          <div className='flex gap-x-4'>
            <Link href='/projects/createroom' className='text-lg px-6 py-3 hover:bg-red-400 bg-red-800 text-white rounded-full min-w-[10rem] text-center'>View Work</Link>
            <Link href='/about' className='text-lg px-6 py-3 bg-white text-black rounded-full min-w-[10rem] text-center'>About Me</Link>
          </div>
        </div>
      </div>
      <HeroExperience className='col-span-1 row-span-1 lg:col-start-2 lg:row-start-1' />
      <div className='relative z-[5] row-start-2 col-span-1 overflow-x-hidden lg:col-span-2'>
        <div className='flex scrollbar-hide space-x-2 bg-zinc-900 py-2 lg:py-6 border-t-2 border-b-2 border-zinc-600'>
          <div className='flex gap-x-12 pl-12 animate-cycleList'>
            {xpList.map((item, index) => (
              <div key={index} className='text-zinc-400 flex items-center gap-x-12 flex-nowrap text-2xl font-light'><span className='w-max'>{item}</span><div className='h-auto w-4 text-red-800'><svg fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M319.9 0H248.8L.1 512H71.2L319.9 0z" /></svg></div></div>
            ))}
          </div>
        </div>
      </div>
      {isHovering && <CrosshairCursor />}
    </div>
  )
}
