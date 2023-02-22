import React from 'react'
import ListProject from './components/ListProject';

const App = () => {

  return (
    <main className='font-Rajdhani bg-gray-100'>
      <section className='py-10 max-w-[70rem] mx-auto'>
          <h2 className='text-4xl text-center font-semibold text-gray-800 uppercase tracking-widest'>Recents Projects</h2>
          <div className='w-full mt-10'>
            <ListProject />
          </div>
      </section>
    </main>
    
  )
}



export default App