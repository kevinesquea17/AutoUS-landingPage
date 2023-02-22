import React, {useState} from 'react'
import Slider from 'react-slick'
import Project from './Project'
import { projects } from '../data/data'
import NextArrow from './NextArrow'
import PrevArrow from './PrevArrow'


const ListProject = () => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        centerPadding: "0px",
        slidesToShow: 3,
        speed: 2000,
        beforeChange: (current, next) => setIndexSlide(next),
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false
            }
          }
        ],
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }

    const [indexSlide, setIndexSlide] = useState(0)

    return (
        <Slider
            {...settings}
            className='relative'
        >
            {projects.map((project, index) => (
                <Project key={project.id} index={index} project={project} indexSlide={indexSlide} />
            ))}
        </Slider>
    )
}

export default ListProject