import React from 'react'

const Project = ({index, project, indexSlide}) => {

    return (
        <div key={project.id} className={`${indexSlide == index ? 'scale-100 before:opacity-100 before:delay-700' : 'scale-[.85]'} h-[500px] rounded overflow-hidden relative before:content[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-b from-transparent to-[#111111] before:opacity-0 before:transition-all before:duration-500 before:ease-in-expo`}>
            <img src={project.image} alt="" className='w-full h-full object-cover rounded' />
            {indexSlide == index && <div className='absolute bottom-4 left-0 w-full flex flex-col items-center z-10'>
            <h3 className='uppercase font-normal text-white tracking-wider text-xl'>Videography</h3>
            <h2 className='text-4xl text-white font-bold'>Wedding</h2>
            </div>}
        </div>
    )
}

export default Project