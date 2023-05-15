import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <section className='relative py-8 md:py-4 lg:py-16 bg-zinc-950 border-b-2 border-zinc-500'>
      <div className="mx-auto flex max-w-[90rem]">
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center col-start-1 row-start-1 col-span-2 relative z-[1]">
            <div className="pb-4">
              <div className="uppercase text-red-600">My Story</div>
              <div className="!leading-tighter font-serif text-white text-8xl max-w-screen-lg">Interaction Design is what I love</div>
            </div>
            <div className="flex gap-x-3">
              <Link href={'/about'}>About Me</Link>
            </div>
            <div className='flex gap-x-4'>
              <Link href='/projects' className='text-lg px-6 py-3 hover:bg-red-400 bg-red-800 text-white rounded-full min-w-[10rem] text-center'>About Me</Link>
            </div>
          </div>
          <div className="row-start-1 col-start-2 col-span-1 relative">
            <div className="absolute inset-0 bg-black bg-opacity-5"></div>
            <Image src={'/nick/seoulTower.jpg'} width={1080} height={1829} alt="me" />
          </div>
        </div>
      </div>
    </section>
  )
}
