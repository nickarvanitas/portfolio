
export default function Layout({ children }): React.ReactNode {
  return (
    <div className="min-h-[calc(100vh-var(--nextra-navbar-height)-40px)] grid grid-rows-[1fr_auto]">
      {children}
    </div>
  )
}

Layout.Full = ({ children }) => {
  return (
    <div className="w-full overflow-x-hidden break-words min-h-[calc(100vh-var(--nextra-navbar-height))] pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">{children}</div>
  )
}