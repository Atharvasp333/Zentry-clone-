import React from 'react'

const Button = ({title,id,leftIcon,rightIcon,containerClass}) => {

  return (
    <div>
      <button id={id} className={`group relative cursor-pointer w-fit z-10 overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
        {leftIcon}
        <span className='relative inline-flex font-general overflow-hidden text-xs uppercase'>
          {title}
        </span>
        {rightIcon}
      </button>
    </div>
  )
}

export default Button
