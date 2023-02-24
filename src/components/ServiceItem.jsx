import React from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md'

const ServiceItem = ({service}) => {
  return (
    <div className='relative w-full h-[22rem] flex items-end justify-center pb-4 px-1 rounded overflow-hidden'>
        <img src={service.image} alt="" className='absolute top-0 left-0 w-full h-full object-cover rounded' />
        <div className='relative flex flex-col items-center'>
            <h3 className='text-[#111111] text-xl text-center font-semibold tracking-wider capitalize hover:text-blue-600 transition duration-300 ease-out'>{service.name}</h3>
            <button className='flex items-center space-x-2 text-blue-600 text-sm tracking-wider font-semibold uppercase mt-4 pb-2 border-b border-blue-600'>
                <a href="#">Learn More</a>
                <MdKeyboardArrowRight />
            </button>
        </div>
    </div>
  )
}

export default ServiceItem