function Button({
    borderRadius,
    backgroundColor,
    width,
    onClick,
    height,
    color,
    border,
    children,}){
  return (
    <button
    onClick={onClick}
    style={{
        borderRadius:borderRadius,
        backgroundColor:backgroundColor,
        width:width,
        height:height,
        color:color,
        border:border,


    }}
    className='text-xl flex my-2 cursor-pointer justify-center items-center'
    >
        {children}
      
    </button>
  )
}

export default Button
