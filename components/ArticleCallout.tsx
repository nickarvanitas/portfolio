import React from 'react'
import { mainMenu } from '@/data/mainMenu'
import { usePathname } from 'next/navigation'
import Link from 'next/link';


export default function ArticleCallout({ slug }: { slug: string }) {

  const path = usePathname()
  const currentIndex = mainMenu.find(item => item.type === "menu")?.items?.findIndex(subItem => subItem.href === path);
  const items = mainMenu.find(item => item.type === "menu")?.items;
  const { name, href } = currentIndex >= 0 && currentIndex < items.length - 1 ? items[currentIndex + 1] : items[0];

  const bgColor = name == 'Create Room' ? 'bg-createroom' : name == 'UI Gallery' ? 'bg-gallery' : name == 'Housemate' ? 'bg-housemate' : name == 'MTC Tools' ? 'bg-mtc' : 'bg-zinc-900'
  const textColor = name == 'Create Room' ? 'text-[#00142f]' : name == 'UI Gallery' ? 'text-black' : name == 'Housemate' ? 'text-[#293644]' : name == 'MTC Tools' ? 'text-white' : 'text-zinc-400'


  return (
    <div className={`${bgColor} p-4 rounded-md mt-4`}>
      <Link className={` w-full no-underline not-prose hover:text-inherit transition-default`} href={href}>
        <div>
          <div className={`${textColor} font-serif text-5xl tracking-tight not-prose`}>{name}</div>
          <div className={`${textColor} text-xl font-light`}>View next case study</div>
        </div>
      </Link>
    </div>
  )
}
