
type CardProps = {
    children: React.ReactNode,
    className?: string
}

const index = ({ children, className }: CardProps) => {
    return (
        <section className={`${className} mt-20 border-b border-b-gray-500/50 pb-10`}>
            {children}
        </section>
    )
}

export default index