import React from 'react'
import {MdAttachMoney} from 'react-icons/md'
import {AiOutlineCheck} from 'react-icons/ai'

const PricingItem = ({pricing}) => {
  return (
    <div className='w-full bg-gradient-to-b flex flex-col items-center from-blue-500 to-[#3455fc] rounded py-10 px-4'>
        <h2 className='text-white capitalize font-semibold tracking-wider text-2xl'>{pricing.name}</h2>
        <p className='font-normal text-base text-white mt-2 max-w-[80%] text-center'>{pricing.description}</p>
        <div className='flex justify-center items-center space-x-0 mt-6'>
            <MdAttachMoney className='text-5xl text-[#ffdc00]' />
            <p className='text-7xl text-[#ffdc00] font-bold'>{pricing.price}<span className='text-2xl font-normal'>/ Months</span> </p>
        </div>
        <div className='mt-6 self-start'>
            {pricing.benefits.map((benefit,index) => (
                <div key={index} className='flex space-x-2 items-center mb-3'>
                    <AiOutlineCheck className='text-green-400'/>
                    <p className='text-white font-normal text-lg'>{benefit}</p>
                </div>
            ))}
        </div>
        <button className='w-full py-4 mt-10 rounded bg-white text-blue-600 font-bold text-lg hover:bg-blue-700 hover:border hover:border-white hover:text-white transition duration-300 ease-out'>Choose Plan</button>
    </div>
  )
}

export default PricingItem