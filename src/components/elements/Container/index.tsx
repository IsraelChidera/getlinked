
type ContainerProps = {
    children: React.ReactNode,
    className?: string
}

const index = ({ children, className }: ContainerProps) => {
    return (
        <div className={`${className} mx-auto md:w-10/12`}>
            {children}
        </div>
    )
}

export default index