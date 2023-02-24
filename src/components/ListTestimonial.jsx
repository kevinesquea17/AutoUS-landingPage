import React, { useContext } from 'react'
import Slider from 'react-slick'
import { testimonials } from '../data/data'
import TestimonialItem from './TestimonialItem'
import { SliderContext } from '../context/SliderContext'


const ListTestimonial = () => {

    const {slider} = useContext(SliderContext);

    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        speed: 3000,
        arrows: false,
        className: ''
    }

    return (
        <Slider {...settings} ref={slider}>
            {testimonials.map(testimonial => (
                <TestimonialItem  key={testimonial.id} testimonial={testimonial}/>
            ))}
        </Slider>
    )
}

export default ListTestimonial