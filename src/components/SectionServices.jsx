import React from 'react'
import Title from './Title'
import ListServices from './ListServices'

const SectionServices = () => {
  return (
    <section className='pt-28 pb-10 bg-[#f2f4fb]'>
        <div className='sm:w-[80%] w-[90%] max-w-[90%] sm:max-w-[80%] mx-auto'>
            <Title classname={'text-gray-800'} isCenter={false} title='Our Services'/>
            <ListServices />
        </div>
    </section>
  )
}

export default SectionServices