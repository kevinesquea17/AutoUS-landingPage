import React, { useContext } from 'react'
import Background02 from '../assets/background02.avif'
import Title from './Title'
import ListTestimonial from './ListTestimonial'
import {BsArrowRight, BsArrowLeft} from 'react-icons/bs'
import { SliderContext } from '../context/SliderContext'

const SectionTestimonials = () => {

    const {slider} = useContext(SliderContext);

    const next = () => {
        slider.current.slickNext();
        console.log('next')
    }

    const prev = () => {
        slider.current.slickPrev();
        console.log('prev')
    }

    return (
        <section className='h-[90vh] w-full relative mt-20 mb-20 py-20 flex items-center'>
            <img src={Background02} alt=""  className='absolute w-full h-full top-0 left-0 object-cover'/>
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#3455fc] to-transparent'></div>
            <div className='relative max-w-[80%] w-[80%] mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col w-[50%]'>
                        <Title classname={'text-white'} title={'Our Testimonials'} />
                        <p className='font-normal text-white mt-6 max-w-[70%] text-lg'>Lorem ipsum dolor sit amet consectetur adipiscing, elit imperdiet cursus tempor  venenatis. Taciti  volutpat odio  congue leo.</p>
                        <button className='bg-white py-3 px-14 rounded text-blue-600 font-bold uppercase w-fit mt-10 hover:bg-blue-600 hover:border hover:border-white hover:text-white transition duration-300 ease-out'>View All Testimonials</button>
                    </div>
                    <div className='w-[50%] px-6'>
                        <ListTestimonial />
                        <div className='flex space-x-4 items-center mt-4'>
                            <div className='h-8 rounded bg-transparent cursor-pointer' onClick={() => prev()}>
                                <BsArrowLeft className='text-white text-xl' />
                            </div>
                            <div className='h-8 rounded bg-transparent cursor-pointer' onClick={() => next()}>
                                <BsArrowRight className='text-white text-xl' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionTestimonials