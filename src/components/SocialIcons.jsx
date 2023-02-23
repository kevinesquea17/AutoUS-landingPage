import React from 'react'
import {FaFacebookF, FaInstagram} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'

const SocialIcons = () => {
  return (
    <div className='sm:flex flex-col gap-4 hidden'>
        <div className='flex items-center justify-center w-8 h-8 rounded-full bg-blue-600'>
            <FaFacebookF className='text-white text-xs'/>
        </div>
        <div className='flex items-center justify-center w-8 h-8 rounded-full bg-blue-600'>
            <FaInstagram className='text-white text-xs'/>
        </div>
        <div className='flex items-center justify-center w-8 h-8 rounded-full bg-blue-600'>
            <IoLogoTwitter className='text-white text-xs'/>
        </div>
    </div>
  )
}

export default SocialIcons