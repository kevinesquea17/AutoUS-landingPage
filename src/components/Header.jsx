import React from 'react'
import Logo from '../assets/Logo.png'

const Header = () => {
  return (
    <header className='flex items-center h-[90px] absolute top-0 left-0 w-full z-10'>
        <div className='flex items-center justify-between w-[80%] max-w-[80%] mx-auto'>
            <img src={Logo} alt="" className='w-32 object-cover' />
            <nav className='sm:flex items-center space-x-6 8 text-lg uppercase font-normal text-gray-800 hidden'>
                <a href="#" className='hover:text-blue-600 transition duration-300 ease-out'>Home</a>
                <a href="#" className='hover:text-blue-600 transition duration-300 ease-out'>About</a>
                <a href="#" className='hover:text-blue-600 transition duration-300 ease-out'>Services</a>
                <a href="#" className='hover:text-blue-600 transition duration-300 ease-out'>Blog</a>
                <a href="#" className='hover:text-blue-600 transition duration-300 ease-out'>Contact</a>
            </nav>
            <button className='border border-blue-600 px-12 py-2 text-blue-600 rounded uppercase font-bold hover:border-none hover:bg-blue-600 hover:text-white transition duration-300 ease-out'>Order Services</button>
        </div>
    </header>
  )
}

export default Header