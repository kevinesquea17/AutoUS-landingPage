import React, {useRef} from 'react'
import Slider from 'react-slick'
import { frontPages } from '../data/data'
import FrontPageItem from './FrontPageItem'


const ListFront = () => {

    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        speed: 2000,
        fade: true,
        className: 'h-screen w-[100vw] overflow-hidden absolute',
        dots: true,
        dotsClass: 'dots-custom',
    }

    const slider = useRef();

    return (
        <Slider {...settings} ref={slider}>
            {frontPages.map(front => (
                <FrontPageItem  key={front.id} front={front} slider={slider}/>
            ))}
        </Slider>
    )
}

export default ListFront