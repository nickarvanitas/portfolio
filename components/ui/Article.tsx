
export default function Article({ children }: { children: React.ReactNode }) {
  return (
    <article className="w-full overflow-x-hidden break-words nextra-content flex min-w-0 justify-center pb-8">
      <main className="w-full min-w-0 max-w-6xl px-6 pt-4 md:px-12">
        {children}
      </main>
    </article>
  )
}

export function Image({ children }: { children: React.ReactNode }) {
  return (
    <div className="[&_img]:mx-auto">{children}</div>
  )
}

Article.Image = Image;