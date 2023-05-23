import Link from 'next/link'
import React from 'react'

export default function ContactSection() {
  return (
    <section className='bg-zinc-800 relative'>
      <div className="flex flex-col">
        <div className='text-center py-8 md:py-4 lg:py-16 px-4'>
          <div className='font-serif text-5xl lg:text-6xl text-white pb-4'>Questions? Don’t Hesitate to Reach Out</div>
          <div className='font-light text-2xl lg:text-3xl text-gray-300'>I&lsquo;ll get back to you as soon as I can</div>
        </div>
        <div className='grid  lg:grid-cols-2 border-t-2 border-b-2 border-zinc-500 [&>*]:border-r-2 [&>*]:border-zinc-500 last:[&>*]:border-r-0 last:[&>*]:border-b-0 [&>*]:border-b-2 lg:[&>*]:border-b-0'>
          <Link className='w-full group transition-default hover:bg-zinc-900 col-span-1 p-5 flex items-center gap-x-2 xl:gap-x-8 text-white text-lg lg:text-2xl lg:justify-end' href='/contact'>
            Contact Me
            <div className='w-4 lg:w-12 h-auto group-hover:text-red-600 '>
              <svg fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M320 96h32v32V352v32H288V352 205.3L86.6 406.6 64 429.3 18.7 384l22.6-22.6L242.7 160H96 64V96H96 320z" /></svg>
            </div>
          </Link>
          <Link className='group transition-default w-full hover:bg-zinc-900 col-span-1 p-5 text-white flex items-center gap-x-2 xl:gap-x-8 text-lg lg:text-2xl ' href='/resume'>
            View Resume

            <div className='w-4 lg:w-12 h-auto group-hover:text-red-600'>
              <svg fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M320 96h32v32V352v32H288V352 205.3L86.6 406.6 64 429.3 18.7 384l22.6-22.6L242.7 160H96 64V96H96 320z" /></svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
