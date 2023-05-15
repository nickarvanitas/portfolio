export default function ColorBlock({ children, color }) {
  return (
    <div className={`aspect-[3/1] md:aspect-[5/4] p-2 flex items-end text-xl text-${color}`}>{children}</div>
  )
}
