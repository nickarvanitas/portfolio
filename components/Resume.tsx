
export default function Resume() {
  return (
    <div>Resume</div>
  )
}

Resume.Title = ({ children }): React.ReactNode => {
  return (
    <div className="md:text-right text-gray-700 text-xl md:text-2xl lg:text-3xl font-bold">{children}</div>
  )
}

Resume.Body = ({ children, subtitle, title, job }): React.ReactNode => {
  return (
    <div className="pb-4 md:pb-6 lg:pb-8">
      <div className="text-lg md:text-xl text-gray-500 font-light">{subtitle}</div>
      <div className="flex gap-x-2 pb-1">
        <div className="text-lg md:text-xl text-gray-900 font-semibold">{title}</div>
        <div className="text-lg md:text-xl text-gray-600">{job}</div>
      </div>
      <div className="font-light text-gray-800">{children}</div>
    </div>
  )
}