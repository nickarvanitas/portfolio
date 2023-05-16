
export default function Reviews() {
  const reviews = [
    {
      author: 'Karen White',
      review: 'Nick brings unique insights to problems and often offers solutions not thought of by other team members.',
    },
    {
      author: 'Emily Hendrick',
      review: 'He thoroughly looks at how things can improve, knows how to present it to a client, and gave a solid POC.',
    },
    {
      author: 'Zack Porter',
      review: 'He makes our App visually appealing and easy to use!',
    }
  ]
  return (
    <section className='relative bg-zinc-900 border-b-2 border-zinc-500'>
      <div className="grid lg:grid-cols-[20%_1fr] ">
        <div className="col-span-1 p-4">
          <div className=" lg:text-right text-zinc-100 text-2xl">Reviews</div>
        </div>
        <div className="col-span-1">
          {reviews.map((review) => (
            <div key={review.author} className="border-b-2 lg:border-l-2 border-zinc-500 last-of-type:border-b-0 py-5 px-4">
              <div className="text-2xl lg:text-3xl text-zinc-400 font-light leading-snug lg:leading-normal">
                {review.review}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
