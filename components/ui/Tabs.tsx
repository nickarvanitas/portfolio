"use client"

import type { ComponentProps, ReactElement, ReactNode } from 'react'
import cn from 'clsx'
import { Tab as HeadlessTab } from '@headlessui/react'

type TabItem = {
  label: ReactElement
  disabled?: boolean
}

function isTabItem(item: unknown): item is TabItem {
  if (item && typeof item === 'object' && 'label' in item) return true
  return false
}

const renderTab = (item: ReactNode | TabItem) => {
  if (isTabItem(item)) {
    return item.label
  }
  return item
}

export function Tabs({
  items,
  selectedIndex,
  defaultIndex,
  onChange,
  children
}: {
  items: ReactNode[] | ReadonlyArray<ReactNode> | TabItem[]
  selectedIndex?: number
  defaultIndex?: number
  onChange?: (index: number) => void
  children: ReactNode
}): ReactElement {
  return (
    <HeadlessTab.Group
      selectedIndex={selectedIndex}
      defaultIndex={defaultIndex}
      onChange={onChange}
    >
      <div className="overflow-x-auto overflow-y-hidden overscroll-x-contain">
        <HeadlessTab.List className="mt-4 flex w-max min-w-full border-b border-gray-200 pb-px">
          {items.map((item, index) => {
            const disabled = !!(
              item &&
              typeof item === 'object' &&
              'disabled' in item &&
              item.disabled
            )

            return (
              <HeadlessTab
                key={index}
                disabled={disabled}
                className={({ selected }) =>
                  cn(
                    'mr-2 rounded-t p-2 leading-5 transition-colors',
                    '-mb-0.5 select-none border-b-2',
                    selected
                      ? 'border-red-600 text-red-700 font-medium bg-red-100'
                      : 'border-transparent text-gray-600 hover:border-gray-200 hover:text-black bg-zinc-50 font-light',
                    disabled &&
                    'pointer-events-none text-gray-400'
                  )
                }
              >
                {renderTab(item)}
              </HeadlessTab>
            )
          })}
        </HeadlessTab.List>
      </div>
      <HeadlessTab.Panels>{children}</HeadlessTab.Panels>
    </HeadlessTab.Group>
  )
}

export function Tab({
  children,
  ...props
}: ComponentProps<'div'>): ReactElement {
  return (
    <HeadlessTab.Panel {...props} className="rounded pt-6">
      {children}
    </HeadlessTab.Panel>
  )
}