"use client"

import { cn } from "@/lib/utils";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faMoonStars, faSackDollar, faSunAlt } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";
import { useTheme } from "next-themes";
import { Fragment } from "react";

export default function ModeToggle() {
  const { setTheme, systemTheme, theme } = useTheme()

  const currentIcon = theme == 'light' ? (faSunAlt as IconProp) : (faMoonStars as IconProp)

  return (
    <div>
      <Menu as="div" className="relative">
        <Menu.Button className='flex justify-center items-center w-8 h-8 border border-solid hover:bg-gray-100 rounded transition-default'><FontAwesomeIcon icon={currentIcon} /></Menu.Button>
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
            <Menu.Item>
              <a className={cn(theme == 'light' ? 'bg-gray-100' : '', 'px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer flex gap-x-2 items-center')} onClick={() => setTheme("light")}><FontAwesomeIcon icon={faSunAlt} />Light</a>
            </Menu.Item>
            <Menu.Item>
              <a className={cn(theme == 'dark' ? 'bg-gray-100' : '', 'px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer flex gap-x-2 items-center')} onClick={() => setTheme("dark")}><FontAwesomeIcon icon={faMoonStars} />Dark</a>
            </Menu.Item>
            <Menu.Item>
              <a className={cn(theme == 'system' ? 'bg-gray-100' : '', 'px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer flex gap-x-2 items-center')} onClick={() => setTheme("system")}><FontAwesomeIcon icon={systemTheme == 'light' ? (faSunAlt as IconProp) : (faMoonStars as IconProp)} />System</a>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
