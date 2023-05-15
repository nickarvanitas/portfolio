export interface Wrapper {
    children: React.ReactNode,
    gridWidth?: 1 | 2 | 3 | 4 | 5,
    className?: string
}

export default function Wrapper({ children, gridWidth, className }: Wrapper) {
    return (
        <div className={`grid gap-y-6 md:gap-y-2 gap-x-2 md:gap-6 lg:gap-8 grid-cols-1 ${className} ${!gridWidth || gridWidth == 3 ? 'md:grid-cols-3' : `md:grid-cols-${gridWidth}`}`}>
            {children}
        </div>
    )
}