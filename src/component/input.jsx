import React, {useId} from 'react'

const input = React.forwardRef( function Input({
  label,
  type = "text",
  className = "",
  ...props
}, ref){
  const id = useId()
  return (
    <div className=''>
      <input type={type} 
      className={`px-3 py-2 bg-white text-black outline-none
      focus:bg-gray-50 duration-200  border-gray-200 w-full
      ${className}`} id={id} ref={ref} {...props}/>
    </div>
  )
})

export default input
