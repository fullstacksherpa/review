import React from 'react';
import Review from './Review';


function App():React.JSX.Element {
   return (
    <main className='min-h-screen grid place-items-center'>
      <section>
        <div className='text-center mb-16'>
          <h2 className='text-4xl '>Our Reviews</h2>
          <div className='h-[0.25rem] w-[5rem] bg-blue-400 mx-auto'></div>
        </div>
        <Review />
      </section>
    </main>
  )
}

export default App
