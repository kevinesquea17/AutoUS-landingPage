import React from 'react'
import Icon01 from '../assets/icon01.png'

const Title = ({title, classname, isCenter}) => {
  return (
    <div className={`${isCenter ? 'justify-center' : ''} flex space-x-3`}>
        <img src={Icon01} alt="" className='w-4 h-6 object-cover'/>
        <h2 className={`${classname} font-semibold sm:text-5xl text-3xl uppercase tracking-wide`}>{title}</h2>
    </div>
  )
}

export default Title