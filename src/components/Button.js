import React from 'react'

const Button = ({title,onClick}) => {
  return (
    <button className='h-10 px-5 bg-blue-800 text-white mt-4 rounded-md' onClick={onClick}> {title} </button>
  )
}

export default Button