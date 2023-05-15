"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {

  const path = usePathname();
  const linkPath = path.split('/');
  linkPath.shift();
  const crumbs = linkPath.map((path, i) => {
    return { name: path, href: '/' + linkPath.slice(0, i + 1).join('/') };
  });

  return (
    <nav className='flex flex-row gap-x-2 text-gray-500 font-normal capitalize items-center pb-2'>
      {crumbs && crumbs.map((crumb, i, crumbs) => {
        const isLast = i === crumbs.length - 1;
        return (
          <div className='flex gap-x-2 items-center' key={i}>
            <Link href={crumb.href} className={`px-1  -mx-1  hover:bg-haze-orange hover:text-haze-orange hover:bg-opacity-10 rounded-md transition-default`}>{crumb.name}</Link>
            {!isLast && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M317.3 256l-22.6 22.6-192 192L80 493.3 34.7 448l22.6-22.6L226.7 256 57.4 86.6 34.7 64 80 18.7l22.6 22.6 192 192L317.3 256z" /></svg>}
          </div>
        );
      })}
    </nav >
  );
};
