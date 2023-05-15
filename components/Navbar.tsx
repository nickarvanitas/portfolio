"use client"

import { Disclosure, Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Fragment } from 'react'
import { mainMenu } from '@/data/mainMenu'
import { usePathname } from 'next/navigation'
import ModeToggle from './ModeToggle'


export default function Navbar() {
  const navigation = mainMenu
  const pathname = usePathname();

  return (
    <Disclosure as="nav" className="dark:bg-zinc-800 z-20  top-0 border-b-2 border-solid border-zinc-600  dark:border-gray-700 relative">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center">
                <Link href="/">
                  <img
                    className="hidden h-12 w-auto sm:block dark:invert-[1]"
                    src="/logo_light.svg"
                    alt="Your Company"
                  />
                </Link>
              </div>
              <div className="flex items-center">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-2 items-center">
                    {navigation.map((item) => {
                      const isActive = pathname.startsWith(item.href);

                      switch (item.type) {
                        case 'menu':
                          return (
                            <Menu as="div" className="relative ml-3" key={item.name}>
                              <Menu.Button className={cn(
                                isActive ? 'text-gray-800' : 'text-gray-500 hover:text-gray-800',
                                'px-3 py-2 flex gap-x-1 items-center text-sm  dark:text-gray-300 dark:hover:text-gray-50 transition-default'
                              )}>{item.name}<div className='w-3 h-auto'><svg fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 429.3l22.6-22.6 192-192L493.3 192 448 146.7l-22.6 22.6L256 338.7 86.6 169.4 64 146.7 18.7 192l22.6 22.6 192 192L256 429.3z" /></svg></div></Menu.Button>
                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right min-w-max w-36 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
                                  {item.items?.map((item) => {
                                    const isActive = pathname.startsWith(item.href);
                                    return (
                                      <Menu.Item key={item.href}>
                                        {({ active }) => (
                                          <a
                                            href={item.href}
                                            className={cn(isActive ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50')}
                                          >
                                            {item.name}
                                          </a>
                                        )}
                                      </Menu.Item>
                                    )
                                  })}
                                </Menu.Items>
                              </Transition>
                            </Menu>
                          )
                        case 'page':
                          return (
                            <a
                              key={item.name}
                              href={item.href}
                              className={cn(
                                isActive ? 'text-gray-800' : 'text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-50 transition-default',
                                'px-3 py-2 text-sm font-medium'
                              )}
                              aria-current={isActive ? 'page' : undefined}
                            >
                              {item.name}
                            </a>
                          )
                        case 'icon':
                          return (
                            <div className='flex justify-center items-center w-8 h-8 rounded transition-default' key={item.name}>
                              <a
                                href={item.href}
                                target='_blank'
                                className='text-gray-800 dark:text-gray-100'
                              >
                                <div className='w-8 h-auto'>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                                </div>
                              </a>
                            </div>
                          )
                        default:
                          return null;
                      }
                    })}
                    {/* <ModeToggle /> */}
                  </div>
                </div>
              </div>
              <div className="flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-zinc-900 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ?
                    <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill='currentColor'><path d="M326.6 166.6L349.3 144 304 98.7l-22.6 22.6L192 210.7l-89.4-89.4L80 98.7 34.7 144l22.6 22.6L146.7 256 57.4 345.4 34.7 368 80 413.3l22.6-22.6L192 301.3l89.4 89.4L304 413.3 349.3 368l-22.6-22.6L237.3 256l89.4-89.4z" /></svg>
                    :
                    <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='currentColor'><path d="M0 64H448v64H0V64zM0 224H448v64H0V224zM448 384v64H0V384H448z" /></svg>
                  }
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => {
                const isActive = pathname.startsWith(item.href)

                return (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={cn(
                      isActive ? 'text-gray-800' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                )
              })}
            </div>

          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
