interface Section {
    children: React.ReactNode,
    borderB?: boolean,
    topOffset?: number,
    topOffsetColor?: string,
    botOffset?: number,
    botOffsetColor?: string,
    className?: string
}

export default function Section({ children, className, borderB, topOffset, topOffsetColor, botOffset, botOffsetColor }: Section) {
    return (
        <section className={`relative ${className} ${borderB ? 'border-b border-solid border-gray-200' : null} py-8 md:py-4 first-of-type:pt-8 first-of-type:md:pt-12 lg:py-16 first-of-type:lg:pt-24`}>
            <div className="mx-auto flex max-w-[90rem]">
                <div className="z-10 w-full overflow-hidden break-words px-4 md:pl-[max(env(safe-area-inset-left),1.5rem)] md:pr-[max(env(safe-area-inset-right),1.5rem)]">
                    <div>{children}</div>
                </div>
            </div>
            {topOffset ? <div className={`absolute top-0 block w-full h-${topOffset} bg-${topOffsetColor}`}></div> : null}
            {botOffset ? <div className={`absolute bottom-0 block w-full h-${botOffset} bg-${botOffsetColor}`}></div> : null}
        </section>
    )
}

Section.Raw = ({ children, className, borderB, topOffset, topOffsetColor, botOffset, botOffsetColor }: Section) => {
    return (
        <section className={`relative ${borderB ? 'border-b border-solid border-gray-200' : null} ${className}`}>
            <div className="flex">
                <div className="z-10 w-full overflow-hidden break-words">
                    <div>{children}</div>
                </div>
            </div>
            {topOffset ? <div className={`absolute top-0 block w-full h-${topOffset} bg-${topOffsetColor}`}></div> : null}
            {botOffset ? <div className={`absolute bottom-0 block w-full h-${botOffset} bg-${botOffsetColor}`}></div> : null}
        </section>
    )
}

Section.Narrow = ({ children, className, borderB, topOffset, topOffsetColor, botOffset, botOffsetColor }: Section) => {
    return (
        <section className={`relative ${borderB ? 'border-b border-solid border-gray-200' : null} ${className} py-4 md:py-8 first-of-type:pt-8 first-of-type:md:pt-12 lg:py-16 first-of-type:lg:pt-24`}>
            <div className="mx-auto flex max-w-[60rem]">
                <div className="z-10 w-full overflow-hidden break-words">
                    <div>{children}</div>
                </div>
            </div>
            {topOffset ? <div className={`absolute top-0 block w-full h-${topOffset} bg-${topOffsetColor}`}></div> : null}
            {botOffset ? <div className={`absolute bottom-0 block w-full h-${botOffset} bg-${botOffsetColor}`}></div> : null}
        </section>
    )
}