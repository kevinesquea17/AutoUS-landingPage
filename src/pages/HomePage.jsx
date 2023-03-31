import React from 'react'
import { Helmet } from "react-helmet";
import RecentProjects from '../components/RecentProjects'
import FrontPage from '../components/FrontPage'
import SectionServices from '../components/SectionServices'
import SectionPricing from '../components/SectionPricing'
import SectionTestimonials from '../components/SectionTestimonials'
import { SliderProvider } from '../context/SliderContext'

const HomePage = () => {
  return (
    <SliderProvider>
      <Helmet>
        <meta name="description" content="page home of landing of services drone" />
      </Helmet>
      <main className='font-Rajdhani'>
        <FrontPage />
        <SectionServices />
        <RecentProjects />
        <SectionPricing />
        <SectionTestimonials />
      </main>
    </SliderProvider>
  )
}

export default HomePage