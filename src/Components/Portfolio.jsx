import React from 'react'
import mywork_data from '../assets/mywork_data'
import arrow_icon from '../assets/arrow_icon.svg'



const Portfolio = () => {
  return (
    <div id='portfolio' className='flex flex-col  pl-[90px] p-1 sm:p-7 items-center justify-center gap-10 sm:gap-20 mx-5 sm:mx-10 lg:mx-28'>
    <div className='relative flex-col  text-center sm:text-left'>
        <h1 className='text-[3.5em] font-semibold mb-[2rem] opacity-[.1] bg-clip-text text-transparent bg-slate-600'>Portfolio</h1>
        <h1 className='text-[2.5rem] ml-9 font-semibold translate-y-[-80px]'>Portfolio</h1>
      </div>

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {mywork_data.map((data,index)=>{
       return     <img className='box-border w-full sm:w-[296px] h-[200px] hover:scale-105 hover:border-4 hover:transition-[0.3s] hover:rounded-xl hover:border-violet-500 transition-[0.3s] cursor-pointer' key={index} src={data.w_img} alt="" />
        })}
    </div>
    <div className='flex items-center gap-4 px-7 p-4  text-white text-[14px] hover:border-[white] shadow-lg  bg-gradient-to-r from-[#DF98FA] to-[#9055FF] hover:shadow-md sm:text-[16px] font-medium mb-10 sm:mb-20 cursor-pointer transition-[0.6s] rounded-full border  hover:gap-7 hover:transition-[0.6s]'>
        <p>Show More</p>
        <img className='w-4 sm:w-6' src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default Portfolio