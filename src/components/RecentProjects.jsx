import React from 'react'
import ListProject from './ListProject'
import Title from './Title'

const RecentProjects = () => {
  return (
    <section className='py-10 max-w-[70rem] mx-auto'>
          <Title title='Recent Projects' classname={'text-gray-800'} isCenter={true} />
          <div className='w-full sm:mt-20 mt-6'>
            <ListProject />
          </div>
    </section>
  )
}

export default RecentProjects