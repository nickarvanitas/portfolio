import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>
      <section className='relative py-8 md:py-12 lg:py-16 dark:bg-zinc-900 border-b-2 border-zinc-500'>
        <div className="mx-auto flex max-w-[90rem]">
          <div className='grid lg:grid-cols-2 gap-4'>
            <div className='lg:max-w-md col-span-1 p-4 md:p-6 lg:p-12'>
              <Image src="/nick/jeju.jpg" className='w-full h-auto aspect-[3/2] object-cover grayscale relative' width={300} height={200} alt='me' />
              <div className='relative -mt-8 z-[1]'>
                <div className='text-6xl font-light font-serif dark:text-white inline-block bg-red-500 leading-snug px-2 mb-2'>Hey! I&apos;m Nick</div>
                <div className='text-3xl font-light leading-snug dark:text-zinc-50'>An interactive designer & developer who has worked in both startup and large SaaS environments.</div>
              </div>
            </div>
            <div className='col-span-1 lg:col-span-2 flex flex-col gap-y-8'>
              <Image src="/nick/japan.jpg" className='w-full h-auto aspect-square object-cover grayscale' width={300} height={200} alt='me' />
            </div>
          </div>
        </div>
      </section>
      <section className='relative py-8 md:py-12 lg:py-16 dark:bg-zinc-900 border-b-2 border-zinc-500'>
        <div className="mx-auto flex max-w-[90rem]">
          <div className='grid'>
            <div className='row-span-1 border-b border-zinc-800'>
              <div className='p-4 md:p-6 lg:p-12'>
                <div className='text-lg dark:text-red-500 uppercase tracking-wider font-medium pb-2'>At Work</div>
                <div className='text-2xl font-light dark:text-neutral-300'>Currently, I work with a couple amazing clients doing freelance work. Lately I've been trying to incorporate more animation & 3D into my work. Although remote work has been great, I&apos;m currently pursuing a hybrid role for more human interaction</div>
              </div>
            </div>
            <div className='row-span-1 bg-zinc-950 border-b border-zinc-800 py-4'>
              <div className='p-4 md:p-6 lg:p-12 font-serif text-3xl dark:text-neutral-200'>My passion is learning how things work</div>
            </div>
            <div className='row-span-1 border-b-2 border-zinc-500'>
              <div className='p-4 md:p-6 lg:p-12'>
                <div className='text-lg dark:text-red-500 uppercase tracking-wider font-medium pb-2'>In Life</div>
                <div className='text-2xl font-light dark:text-neutral-300'>I&apos;m a passionate world traveler (15 countries) who moved back to the USA after living abroad in Thailand for the past year. I believe &rdquo; diversity is the spice of life&rdquo; , so I try to seek out new experiences wherever I can. My wife and I are excited to have our first child this June.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>

      </section>
    </>
  )
}
