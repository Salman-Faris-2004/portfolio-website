import React from 'react';
import Washington from '../assets/washington.png';
import Newyork from '../assets/newyork.png';
import London from '../assets/london.png';

const Companies = () => {
  return (
    <div id='company' className='flex flex-col pl-[90px] p-1 items-center justify-center sm:p-10'>
      
      <div className='relative flex-col text-center sm:text-left mb-10'>
        <h1 className='text-[3.5em] font-semibold mb-8 opacity-10 bg-clip-text text-transparent bg-slate-600'>Companies</h1>
        <h1 className='text-[2.5rem] sm:ml-9 font-semibold -translate-y-20'>Companies</h1> 
      </div>

      <div className='flex flex-wrap items-center justify-center gap-10'>
        
        <div className='w-[250px]  sm:w-[250px] hover:border-2 border-violet-500 p-5 hover:scale-105 transition-transform cursor-pointer text-black rounded-lg shadow-lg min-w-[250px]'>
          <img className='w-56 shadow-md mx-auto rounded-md border-2 border-violet-400 mb-4' src={Washington} alt="Washington" />
          <h1 className='text-xl font-semibold mb-2'>Washington</h1>
          <p className='text-[13px] text-[#353333]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus beatae autem harum nemo dignissimos laudantium.</p>
          <hr className='mt-5 border-2 rounded-lg border-violet-600' />
        </div>
      
        <div className='w-[250px] sm:w-[250px] p-5 hover:border-2 border-violet-500  hover:scale-105 transition-transform cursor-pointer text-black rounded-lg shadow-lg min-w-[250px]'>
          <img className='w-56 shadow-md mx-auto rounded-md border-2 border-violet-400 mb-4' src={Newyork} alt="Washington" />
          <h1 className='text-xl font-semibold mb-2'>New York</h1>
          <p className='text-[13px] text-[#353333]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus beatae autem harum nemo dignissimos laudantium.</p>
          <hr className='mt-5 border-2 rounded-lg border-violet-600' />
        </div>

        <div className='w-[250px] sm:w-[250px] p-5 hover:border-2 border-violet-500  hover:scale-105 transition-transform cursor-pointer text-black rounded-lg shadow-lg min-w-[250px]'>
          <img className='w-56 shadow-md mx-auto rounded-md border-2 border-violet-400 mb-4' src={London} alt="Washington" />
          <h1 className='text-xl font-semibold mb-2'>London</h1>
          <p className='text-[13px] text-[#353333]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus beatae autem harum nemo dignissimos laudantium.</p>
          <hr className='mt-5 border-2 rounded-lg border-violet-600' />
        </div>

      </div>

    </div>
  );
}

export default Companies;
