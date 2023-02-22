import React from 'react'
import {SlArrowLeft} from 'react-icons/sl'

const PrevArrow = ({onClick}) => {
  return (
    <div className='absolute -left-10 top-[50%] z-20' onClick={onClick}>
        <SlArrowLeft className='text-gray-500 text-3xl hover:text-blue-500 hover:text-4xl transition-all duration-300 ease-out'/>
    </div>
  )
}

export default PrevArrow