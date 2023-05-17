export default function Article({ children }: { children: React.ReactNode }) {

  return (

    <article className="w-full overflow-x-hidden break-words flex min-w-0 justify-center pb-8 relative">
      <main className="w-full min-w-0 max-w-5xl px-6 pt-4 md:px-12">
        {children}
      </main>
    </article>
  )
}


export function Video() {
  return (
    <video
      autoPlay={true}
      muted={true}
      loop={true}
      src="/cr/test2.mov"
    ></video>
  );
};

export function Title() {
  return (
    <h1 className="text-4xl font-bold mb-4 w-full bg-red-500">Title</h1>
  )
}

Article.Title = Title;
Article.Video = Video;