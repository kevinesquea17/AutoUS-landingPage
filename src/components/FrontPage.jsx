import React from 'react'
import Header from './Header'
import ListFront from './ListFront'
import SocialIcons from './SocialIcons'



const FrontPage = () => {

    return (
        <section className='sm:h-screen h-[80vh]  w-full relative overflow-hidden'>
            <Header />
            <ListFront />
            <div className='w-[80%] mx-auto absolute top-[30%] left-[10%]'>
                <SocialIcons />
            </div>
        </section>
    )
}

export default FrontPage