"use client"

import { faChevronRight } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            {!isLast && <FontAwesomeIcon icon={faChevronRight} size='xs' className='text-gray-300' />}
          </div>
        );
      })}
    </nav >
  );
};
