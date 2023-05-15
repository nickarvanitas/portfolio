
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
    <section className='relative bg-zinc-800 border-b-2 border-zinc-500'>
      <div className="grid grid-cols-[20%_1fr] ">
        <div className="col-span-1 p-5">
          <div className=" text-right text-zinc-300 text-2xl">Reviews</div>
        </div>
        <div className="col-span-1">
          {reviews.map((review) => (
            <div key={review.author} className="border-b-2 border-l-2 border-zinc-600 last-of-type:border-b-0 py-5 px-3">
              <div className="text-3xl text-zinc-300 font-light leading-normal">
                {review.review}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
