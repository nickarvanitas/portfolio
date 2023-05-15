"use client"

import { faBars, faChevronDown, faClose } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Fragment } from 'react'
import { mainMenu } from '@/data/mainMenu'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { usePathname } from 'next/navigation'
import ModeToggle from './ModeToggle'


export default function Navbar() {
  const navigation = mainMenu
  const pathname = usePathname();

  return (
    <Disclosure as="nav" className="bg-white z-20  top-0 border-b border-solid border-gray-300 dark:bg-gray-800 dark:border-gray-700 relative bg-opacity-80 backdrop-blur-xl">
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
                  <div className="flex space-x-2">
                    {navigation.map((item) => {
                      const isActive = pathname.startsWith(item.href);

                      switch (item.type) {
                        case 'menu':
                          return (
                            <Menu as="div" className="relative ml-3" key={item.name}>
                              <Menu.Button className={cn(
                                isActive ? 'text-gray-800' : 'text-gray-500 hover:text-gray-800',
                                'px-3 py-2 flex gap-x-1 items-center text-sm  dark:text-gray-300 dark:hover:text-gray-50 transition-default'
                              )}>{item.name}<FontAwesomeIcon icon={faChevronDown} className='w-[10px] h-auto' /></Menu.Button>
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
                                <FontAwesomeIcon icon={item.icon as IconProp} size='2xl' />
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
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <FontAwesomeIcon className='w-6 h-6 bg-gray-700' icon={faClose} />
                  ) : (
                    <FontAwesomeIcon className='w-6 h-6 bg-gray-700' icon={faBars} />
                  )}
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
