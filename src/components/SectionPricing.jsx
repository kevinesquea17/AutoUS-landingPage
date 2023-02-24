import React from 'react'
import Title from './Title'
import ListPricing from './ListPricing'

const SectionPricing = () => {
  return (
    <section className='pt-32 pb-10 bg-[#f2f4fb]'>
        <div className='max-w-[80%] w-[80%] mx-auto flex flex-col'>
            <div className='flex justify-between items-center'>
                <Title classname={'text-[#111111]'} title={'Drone Services Pricing'} />
                <button className='border border-blue-600 text-blue-600 uppercase font-bold py-3 px-10'>View All Pricing</button>
            </div>
            <ListPricing />
        </div>
    </section>
  )
}

export default SectionPricing