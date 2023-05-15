export interface Container {
  children: React.ReactNode,
  width: 1 | 2 | 3 | 4 | 5,
  height?: 1 | 2 | 3 | 4 | 5,
  bgColor?: string,
  border?: boolean
}

export default function Container({ children, width, height, bgColor, border }: Container) {

  const isHexCode = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(bgColor);

  const style = isHexCode
    ? { backgroundColor: bgColor }
    : null;

  const className = isHexCode
    ? null
    : `bg-${bgColor}`;


  return (
    <div style={style} className={`col-span-1 group ${border ? 'border border-solid border-gray-200' : null} ${className} md:col-span-${width} md:row-span-${height}`}>{children}</div>
  )
}
