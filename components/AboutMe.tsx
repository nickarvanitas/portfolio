import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <section className='relative py-0 md:py-4 lg:py-16 bg-zinc-950 border-b-2 border-zinc-500'>
      <div className="mx-auto flex max-w-[90rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-none">
          <div className="flex flex-col justify-center col-start-1 lg:row-start-1 col-span-2 relative z-[1] row-span-1 px-4 md:px-8 lg:px-12 text-center items-center lg:text-left lg:items-start">
            <div className="pb-4">
              <div className="uppercase text-red-600 text-lg">My Story</div>
              <div className="leading-none font-serif text-white text-6xl lg:text-8xl lg:max-w-screen-md xl:max-w-screen-lg">Passion for Interaction Design</div>
            </div>
            <div className='flex gap-x-4'>
              <Link href='/about' className='text-lg px-6 py-3 hover:bg-red-400 bg-red-800 text-white rounded-full min-w-[10rem] text-center'>About Me</Link>
            </div>
          </div>
          <div className="row-start-1 lg:col-start-2 col-span-1 relative row-span-1">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <Image src={'/nick/seoulTower.jpg'} width={1080} height={1829} alt="me" className=" relativ" />
          </div>
        </div>
      </div>
    </section>
  )
}
