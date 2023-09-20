type ButtonProps = {
    children: React.ReactNode,
    className?: string,
    onClick?: any
}

const index = ({className, children, onClick}: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${className} text-white text-xs bg-primary py-3 px-10`}>
        {children}
    </button>
  )
}

export default index