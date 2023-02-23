import React from 'react'
import ListProject from './components/ListProject';
import Title from './components/Title';

const App = () => {

  return (
    <main className='font-Rajdhani bg-gray-100'>
      <section className='py-10 max-w-[70rem] mx-auto'>
          <Title title='Recent Projects' classname={'text-gray-800'} isCenter={true} />
          <div className='w-full mt-20'>
            <ListProject />
          </div>
      </section>
    </main>
    
  )
}



export default App