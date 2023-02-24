import React from 'react'
import {SlArrowRight} from 'react-icons/sl'
import {SlArrowLeft} from 'react-icons/sl'

const FrontPageItem = ({front, slider}) => {

  const next = () => {
    slider.current.slickNext();
  }

  const prev = () => {
    slider.current.slickPrev();
  }

  return (
    <div className='relative h-screen w-[100vw] flex items-center justify-center'>
      <img src={front.image} alt="" className='absolute w-full h-full object-cover'/>
      <div className='relative flex flex-col justify-center items-center max-w-[30%]'>
        <h2 className='sm:text-8xl text-6xl font-bold text-white text-center uppercase'>{front.name}</h2>
        <button className='bg-blue-600 sm:py-4 py-4 sm:px-12 px-8 text-white font-bold uppercase text-sm mt-4 rounded'>Read More</button>
      </div>
      <div className='flex absolute bottom-[8%] right-[10%] items-center space-x-6 z-20'>
          <div className='w-14 h-14 rounded bg-white flex justify-center items-center cursor-pointer group hover:bg-blue-600 transition duration-300 ease-out' onClick={() => prev()}>
            <SlArrowLeft className='text-xl text-blue-600 group-hover:text-white' />
          </div>
          <div className='w-14 h-14 rounded bg-white flex justify-center items-center cursor pointer group hover:bg-blue-600 transition duration-300 ease-out' onClick={() => next()}>
            <SlArrowRight className='text-xl text-blue-600 font-bold group-hover:text-white' />
          </div>
      </div>
    </div>
  )
}

export default FrontPageItem