import React from 'react'
import {SlArrowRight} from 'react-icons/sl'

const NextArrow = ({onClick}) => {
  return (
    <div className='absolute -right-10 top-[50%] z-20' onClick={onClick}>
        <SlArrowRight className='text-gray-500 text-3xl hover:text-blue-500 hover:text-4xl transition-all duration-300 ease-out' />
    </div>
  )
}

export default NextArrow