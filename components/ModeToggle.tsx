"use client"

import { cn } from "@/lib/utils";
import { Menu, Transition } from "@headlessui/react";
import { useTheme } from "next-themes";
import { Fragment } from "react";

export default function ModeToggle() {
  const { setTheme, systemTheme, theme } = useTheme()

  const currentIcon = theme == 'light' ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M280 24V0H232V24 88v24h48V88 24zm157 84.9l17-17L420 58l-17 17-45.3 45.3-17 17 33.9 33.9 17-17L437 108.9zM108.9 75L92 58 58 92l17 17 45.3 45.3 17 17 33.9-33.9-17-17L108.9 75zM24 232H0v48H24 88h24V232H88 24zm400 0H400v48h24 64 24V232H488 424zM154.2 391.8l17-17-33.9-33.9-17 17L75 403.1 58 420 92 454l17-17 45.3-45.3zm237.6-33.9l-17-17-33.9 33.9 17 17L403.1 437l17 17L454 420l-17-17-45.3-45.3zM280 424V400H232v24 64 24h48V488 424zm-24-56a112 112 0 1 0 0-224 112 112 0 1 0 0 224z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 64L304 16 288 64 240 80l48 16 16 48 16-48 48-16L320 64zM440 200l-24-72-24 72-72 24 72 24 24 72 24-72 72-24-72-24zM128 288c0-72.5 48.2-133.7 114.2-153.4c-16-4.3-32.9-6.6-50.2-6.6C86 128 0 214 0 320S86 512 192 512c61.5 0 116.2-28.9 151.3-73.8c-17.2 6.4-35.9 9.8-55.3 9.8c-88.4 0-160-71.6-160-160z" /></svg>

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
              <a className={cn(theme == 'light' ? 'bg-gray-100' : '', 'px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer flex gap-x-2 items-center')} onClick={() => setTheme("light")}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M280 24V0H232V24 88v24h48V88 24zm157 84.9l17-17L420 58l-17 17-45.3 45.3-17 17 33.9 33.9 17-17L437 108.9zM108.9 75L92 58 58 92l17 17 45.3 45.3 17 17 33.9-33.9-17-17L108.9 75zM24 232H0v48H24 88h24V232H88 24zm400 0H400v48h24 64 24V232H488 424zM154.2 391.8l17-17-33.9-33.9-17 17L75 403.1 58 420 92 454l17-17 45.3-45.3zm237.6-33.9l-17-17-33.9 33.9 17 17L403.1 437l17 17L454 420l-17-17-45.3-45.3zM280 424V400H232v24 64 24h48V488 424zm-24-56a112 112 0 1 0 0-224 112 112 0 1 0 0 224z" /></svg>Light</a>
            </Menu.Item>
            <Menu.Item>
              <a className={cn(theme == 'dark' ? 'bg-gray-100' : '', 'px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer flex gap-x-2 items-center')} onClick={() => setTheme("dark")}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 64L304 16 288 64 240 80l48 16 16 48 16-48 48-16L320 64zM440 200l-24-72-24 72-72 24 72 24 24 72 24-72 72-24-72-24zM128 288c0-72.5 48.2-133.7 114.2-153.4c-16-4.3-32.9-6.6-50.2-6.6C86 128 0 214 0 320S86 512 192 512c61.5 0 116.2-28.9 151.3-73.8c-17.2 6.4-35.9 9.8-55.3 9.8c-88.4 0-160-71.6-160-160z" /></svg>Dark</a>
            </Menu.Item>
            <Menu.Item>
              <a className={cn(theme == 'system' ? 'bg-gray-100' : '', 'px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer flex gap-x-2 items-center')} onClick={() => setTheme("system")}><FontAwesomeIcon icon={systemTheme == 'light' ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M280 24V0H232V24 88v24h48V88 24zm157 84.9l17-17L420 58l-17 17-45.3 45.3-17 17 33.9 33.9 17-17L437 108.9zM108.9 75L92 58 58 92l17 17 45.3 45.3 17 17 33.9-33.9-17-17L108.9 75zM24 232H0v48H24 88h24V232H88 24zm400 0H400v48h24 64 24V232H488 424zM154.2 391.8l17-17-33.9-33.9-17 17L75 403.1 58 420 92 454l17-17 45.3-45.3zm237.6-33.9l-17-17-33.9 33.9 17 17L403.1 437l17 17L454 420l-17-17-45.3-45.3zM280 424V400H232v24 64 24h48V488 424zm-24-56a112 112 0 1 0 0-224 112 112 0 1 0 0 224z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 64L304 16 288 64 240 80l48 16 16 48 16-48 48-16L320 64zM440 200l-24-72-24 72-72 24 72 24 24 72 24-72 72-24-72-24zM128 288c0-72.5 48.2-133.7 114.2-153.4c-16-4.3-32.9-6.6-50.2-6.6C86 128 0 214 0 320S86 512 192 512c61.5 0 116.2-28.9 151.3-73.8c-17.2 6.4-35.9 9.8-55.3 9.8c-88.4 0-160-71.6-160-160z" /></svg>} />System</a>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
