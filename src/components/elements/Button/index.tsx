type ButtonProps = {
    children: React.ReactNode,
    className?: string,
    onClick?: any,
    // type?: any
}

const index = ({className, children, onClick, ...rest }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${className} text-white text-xs bg-primarya py-3 px-10`} {...rest}>
        {children}
    </button>
  )
}

export default index