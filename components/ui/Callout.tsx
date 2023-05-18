import type { ReactElement, ReactNode } from 'react'
import cn from 'clsx'

const TypeToEmoji = {
  default: '💡',
  error: '🚫',
  info: 'ℹ️',
  warning: '⚠️'
}

type CalloutType = keyof typeof TypeToEmoji

const classes: Record<CalloutType, string> = {
  default: cn(
    'border-orange-100 bg-orange-50 text-orange-800 dark:border-orange-400/30 dark:bg-orange-400/20 dark:text-orange-300'
  ),
  error: cn(
    'border-red-200 bg-red-100 text-red-900 dark:border-red-200/30 dark:bg-red-900/30 dark:text-red-200'
  ),
  info: cn(
    'border-blue-200 bg-blue-100 text-blue-900 '
  ),
  warning: cn(
    'border-yellow-100 bg-yellow-50 text-yellow-900 dark:border-yellow-200/30 dark:bg-yellow-700/30 dark:text-yellow-200'
  )
}

type CalloutProps = {
  type?: CalloutType
  emoji?: string | ReactElement
  children: ReactNode
}

export default function Callout({
  children,
  type = 'default',
  emoji = TypeToEmoji[type]
}: CalloutProps): ReactElement {
  return (
    <div
      className={cn(
        'overflow-x-auto mt-6 flex rounded-lg border py-4 px-4 not-prose [&_a]:text-[#3b82f6] [&_a]:underline gap-x-4 ',
        classes[type]
      )}
    >
      <div
        className="select-none text-xl ltr:pl-3 ltr:pr-2 rtl:pr-3 rtl:pl-2"
      >
        {emoji}
      </div>
      <div className="w-full min-w-0 leading-6">{children}</div>
    </div>
  )
}