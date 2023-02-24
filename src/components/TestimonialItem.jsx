import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {BsArrowRight, BsArrowLeft} from 'react-icons/bs'

const stars = [1, 2, 3, 4, 5];

const TestimonialItem = ({testimonial}) => {
  return (
    <>
        <div className='bg-white bg-opacity-100 w-[22rem] py-6 px-8 pb-10'>
            <div className='flex items-center space-x-1'>
                {stars.map(start => (
                    <AiFillStar key={start} className='text-[#ffdc00] text-lg'/>
                ))}
            </div>
            <p className='mt-4 text-[#111111]'>{testimonial.description}</p>
            <div className='flex space-x-6 items-center mt-8'>
                <img src={testimonial.personImage} alt="" className='w-16 h-16 rounded object-cover'/>
                <div className='flex flex-col'>
                    <h3 className='font-bold text-[#111111] text-xl'>{testimonial.personName}</h3>
                    <p className='text-gray-500 font-normal text-base -mt-1'>Customer</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default TestimonialItem