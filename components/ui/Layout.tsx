
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[calc(100vh-66px-40px)] grid grid-rows-[1fr_auto]">
      {children}
    </div>
  )
}

export function Full({ children, className }: { children: React.ReactNode, className: string }) {
  return (
    <div className={`${className} w-full overflow-x-hidden break-words min-h-[calc(100vh-66px)] pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]`}>{children}</div>
  )
}

Layout.Full = Full;