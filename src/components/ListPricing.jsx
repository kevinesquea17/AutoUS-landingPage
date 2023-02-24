import React from 'react'
import PricingItem from './PricingItem'

const ListPricing = () => {
  return (
    <div className='grid grid-cols-3 gap-6 mt-20'>
        <PricingItem 
            pricing={{name: 'Photography', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit', price: 150, benefits: ['5 Edited progress images', 'Edited video orbit clip', 'Final timelapse photo', 'video compilation']}} 
        />
        <PricingItem 
            pricing={{name: 'Videography', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit', price: 235, benefits: ['5 Edited progress images', 'Edited video orbit clip', 'Final timelapse photo', 'video compilation']}} 
        />
        <PricingItem 
            pricing={{name: 'Construction', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit', price: 375, benefits: ['5 Edited progress images', 'Edited video orbit clip', 'Final timelapse photo', 'video compilation']}} 
        />
    </div>
  )
}

export default ListPricing