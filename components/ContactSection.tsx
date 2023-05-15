import { faArrowUpRight } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function ContactSection() {
  return (
    <section className='bg-zinc-800 relative'>
      <div className="flex flex-col">
        <div className='text-center py-8 md:py-4 lg:py-16'>
          <div className='font-serif text-6xl text-white pb-4'>Questions? Don’t Hesitate to Reach Out</div>
          <div className='font-light text-2xl text-gray-300'>I'll get back to you as soon as I can</div>
        </div>
        <div className='grid grid-cols-2 border-t-2 border-b-2 border-zinc-500 [&>*]:border-r-2 [&>*]:border-zinc-500 last:[&>*]:border-r-0'>
          <Link className='col-span-1 text-right p-5 text-white' href='/resume'>
            Contact Me<FontAwesomeIcon icon={faArrowUpRight} color='#fff' />
          </Link>
          <Link className='col-span-1 p-5 text-white' href='/contact'>
            View Resume
            <FontAwesomeIcon icon={faArrowUpRight} color='#fff' />
          </Link>
        </div>
      </div>
    </section>
  )
}
