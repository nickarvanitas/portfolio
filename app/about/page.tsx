import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>
      <section className='relative py-8 md:py-12 lg:py-16 dark:bg-zinc-900 border-b-2 border-zinc-500'>
        <div className="mx-auto flex max-w-[90rem] relative z-[1]">
          <div className='grid lg:grid-cols-2 gap-4 lg:gap-12'>
            <div className='col-span-1 p-4 md:p-6 lg:p-0 lg:grid lg:grid-rows-[1fr_2fr]'>
              <Image src="/nick/jeju.jpg" className='w-full h-auto aspect-[3/2] object-cover grayscale relative lg:row-span-1 lg:row-start-2' width={300} height={200} alt='me' />
              <div className='relative -mt-8 z-[1] lg:row-span-1 lg:mt-0'>
                <div className='leading-tight text-6xl font-light font-serif dark:text-white inline-block bg-red-500 lg:leading-snug px-2 mb-2'>Hey! I&apos;m Nick</div>
                <div className='text-3xl font-light leading-snug dark:text-zinc-50'>An interactive designer & developer who has worked in both startup and large SaaS environments.</div>
              </div>
            </div>
            <div className='col-span-1 flex flex-col gap-y-8'>
              <Image src="/nick/japan.jpg" className='w-full h-auto aspect-square object-cover grayscale' width={300} height={200} alt='me' />
            </div>
          </div>
        </div>
        <svg className='absolute bottom-0 right-0 blur-[300px] ' width="1243" height="755" viewBox="0 0 1243 755" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M398.742 626C404.404 632.285 410.901 639.462 417.887 647.137C501.436 623.214 578.035 594.772 625.5 562.5C644.709 576.148 666.403 589.327 689.417 601.874C756.614 536.215 824.206 463.044 850 412.5C934.689 463.23 1012.08 544.201 1058.82 596.991C1116.64 461.764 1199.31 235.585 1242 0.5C1242 190 1247.5 601 1104.74 649C1103.31 649.482 1086.4 628.144 1058.82 596.991C1024.53 677.186 998.983 725.393 995.707 724.5C988.242 722.464 818.166 672.064 689.417 601.874C606.383 683.009 523.953 752.673 521.743 754C518.318 756.055 459.441 692.787 417.887 647.137C220.974 703.521 -14.5461 734.808 1.74263 732C24.9426 728 276.076 659.667 398.742 626Z" fill="url(#paint0_linear_1_112)" />
          <defs>
            <linearGradient id="paint0_linear_1_112" x1="310.742" y1="665" x2="1170.74" y2="289" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ef4444" />
              <stop offset="1" stopColor="#EA0622" />
            </linearGradient>
          </defs>
        </svg>

      </section>
      <section className='relative py-8 md:py-12 lg:py-16 dark:bg-zinc-900 border-b-2 border-zinc-500'>
        <div className="mx-auto flex max-w-[90rem]">
          <div className='grid gap-y-8 md:gap-y-10 lg:gap-y-12 lg:grid-cols-2 lg:gap-x-12'>
            <div className='row-span-1 lg:col-span-1 border-b border-zinc-800 px-4'>
              <div className=''>
                <div className='text-lg dark:text-red-500 uppercase tracking-wider font-medium pb-2'>At Work</div>
                <div className='text-2xl font-light dark:text-neutral-300'>Currently, I work with a couple amazing clients doing freelance work. Lately I&lsquo;ve been trying to incorporate more animation & 3D into my work. Although remote work has been great, I&apos;m currently pursuing a hybrid role for more human interaction</div>
              </div>
            </div>
            <div className='row-span-1 lg:col-span-2  lg:row-start-1 border-l-4 border-red-500 bg-zinc-800/40 py-1'>
              <div className='p-4 md:p-6 lg:p-8 font-serif text-3xl dark:text-neutral-200 lg:text-4xl'>My passion is learning how things work</div>
            </div>
            <div className='row-span-1 lg:col-span-1 px-4'>
              <div className=''>
                <div className='text-lg dark:text-red-500 uppercase tracking-wider font-medium pb-2'>In Life</div>
                <div className='text-2xl font-light dark:text-neutral-300'>I&apos;m a passionate world traveler (15 countries) who moved back to the USA after living abroad in Thailand for the past year. I believe &rdquo; diversity is the spice of life&rdquo; , so I try to seek out new experiences wherever I can. My wife and I are excited to have our first child this June.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

