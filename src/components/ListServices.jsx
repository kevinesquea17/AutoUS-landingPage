import React from 'react'
import { services } from '../data/data'
import ServiceItem from './ServiceItem'

const ListServices = () => {
  return (
    <div className='grid sm:grid-cols-4 grid-cols-2 gap-8 gap-y-16 col-gap mt-12'>
        {services.map(service => (
            <ServiceItem key={service.id} service={service} />
        ))}
    </div>
  )
}

export default ListServices