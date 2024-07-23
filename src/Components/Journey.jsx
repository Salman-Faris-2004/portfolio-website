import React from 'react';
import './Journey.css';
import Logo from '../assets/logo.png'
import { MdCalendarMonth } from "react-icons/md";
import theme_img from '../assets/theme_pattern.svg'

const Journey = () => {
  return (
    <div id='journey' className='flex flex-col  pl-[90px] sm:p-7 items-center justify-center gap-10 sm:gap-20 mx-5 sm:mx-10 lg:mx-28'>

 <div className='relative flex-col  text-center sm:text-left'>
        <h1 className='text-[2.6em] font-semibold mb-[3rem] opacity-[.1] bg-clip-text text-transparent bg-slate-600'>My Journey</h1>
        <h1 className='text-[2.5rem] ml-9 font-semibold translate-y-[-80px]'>My Journey</h1>
      </div>

      <section className='qualification section'>
        <div className='qualification'>
          <div className="qualification-content">
           
            <div className="quli-data ">
              <div className='text-sm mt-3 gap-10 '>
                <img className=' w-[50px] h-[50px] hover:scale-105 transition-[0.5s] cursor-pointer gap-3 shadow rounded-full bg-black' src={Logo} alt="img" />
                <h2 className=' font-semibold text-[20px] gap-2 text-violet-500'>Computer Engineer</h2>
                <span className=' text-[#504b4b] text-[12px] font-bold'>Spain - University</span>
                <div className='text-[14px] mb-5'>
                  <MdCalendarMonth className='text-[15px] text-gray-500' />
                 <span className=' font-bold text-[13px]'>2009-2010</span>
                </div>
              </div>
              <div>
                <span className='inline-block w-[13px] h-[13px]  bg-violet-500 rounded-full'></span>
                <span className='block w-[3px] h-full bg-violet-500 transform translate-x-1 translate-y-[-7px]'></span>
              </div>
            </div>

            {/* 2 */}
            <div className="quli-data">
              <div></div>
              <div>
                <span className='inline-block w-[13px] h-[13px]  bg-violet-500 rounded-full'></span>
                <span className='block w-[3px] h-full bg-violet-500 transform translate-x-1 translate-y-[-7px]'></span>
              </div>
              <div className='text-sm'>
              <img className=' w-[50px] hover:scale-105 transition-[0.5s] cursor-pointer h-[50px] gap-3 shadow rounded-full bg-black' src={Logo} alt="img" />

                <h2 className='font-semibold text-[20px] gap-2 text-violet-500'>Web Design</h2>
                <span className='text-[#504b4b] text-[12px] font-bold'>Spain - University</span>
                <div className='text-[14px] mb-5'>
                  <MdCalendarMonth className='text-[15px] text-gray-500' />
                  <span className=' font-bold text-[13px]'>2009-2010</span>

                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="quli-data ">
              <div className='text-sm mt-3 gap-10 '>
                <img className=' w-[50px] hover:scale-105 transition-[0.5s] cursor-pointer h-[50px] gap-3 shadow rounded-full bg-black' src={Logo} alt="img" />
                <h2 className=' font-semibold text-[20px] gap-2 text-violet-500'>Computer Engineer</h2>
                <span className=' text-[#504b4b] text-[12px] font-bold'>Spain - University</span>
                <div className='text-[14px] mb-5'>
                  <MdCalendarMonth className='text-[15px] text-gray-500' />
                 <span className=' font-bold text-[13px]'>2009-2010</span>
                </div>
              </div>
              <div>
                <span className='inline-block w-[13px] h-[13px]  bg-violet-500 rounded-full'></span>
                <span className='block w-[3px] h-full bg-violet-500 transform translate-x-1 translate-y-[-7px]'></span>
              </div>
            </div>

            {/* 4 */}
            <div className="quli-data">
              <div></div>
              <div>
                <span className='inline-block w-[13px] h-[13px]  bg-violet-500 rounded-full'></span>
                <span className='block w-[3px] h-full bg-violet-500 transform translate-x-1 translate-y-[-7px]'></span>
              </div>
              <div className='text-sm'>
              <img className=' w-[50px] hover:scale-105 transition-[0.5s] cursor-pointer h-[50px] gap-3 shadow rounded-full bg-black' src={Logo} alt="img" />

                <h2 className='font-semibold text-[20px] gap-2 text-violet-500'>Web Design</h2>
                <span className='text-[#504b4b] text-[12px] font-bold'>Spain - University</span>
                <div className='text-[14px] mb-5'>
                  <MdCalendarMonth className='text-[15px] text-gray-500' />
                  <span className=' font-bold text-[13px]'>2009-2010</span>

                </div>
              </div>
            </div>
{/* 5 */}
<div className="quli-data ">
              <div className='text-sm mt-3 gap-10 '>
                <img className=' w-[50px] hover:scale-105 transition-[0.5s] cursor-pointer h-[50px] gap-3 shadow rounded-full bg-black' src={Logo} alt="img" />
                <h2 className=' font-semibold text-[20px] gap-2 text-violet-500'>Computer Engineer</h2>
                <span className=' text-[#504b4b] text-[12px] font-bold'>Spain - University</span>
                <div className='text-[14px] mb-5'>
                  <MdCalendarMonth className='text-[15px] text-gray-500' />
                 <span className=' font-bold text-[13px]'>2009-2010</span>
                </div>
              </div>
              <div>
                <span className='inline-block w-[13px] h-[13px]  bg-violet-500 rounded-full'></span>
                <span className='block w-[3px] h-full bg-violet-500 transform translate-x-1 translate-y-[-7px]'></span>
              </div>
            </div>
{/* 6 */}
          <div className="quli-data">
              <div></div>
              <div>
                <span className='inline-block w-[13px] h-[13px]  bg-violet-500 rounded-full'></span>
                <span className='block w-[3px] h-full bg-violet-500 transform translate-x-1 translate-y-[-7px]'></span>
              </div>
              <div className='text-sm'>
              <img className=' w-[50px] hover:scale-105 transition-[0.5s] cursor-pointer h-[50px] gap-3 shadow rounded-full bg-black' src={Logo} alt="img" />

                <h2 className='font-semibold text-[20px] gap-2 text-violet-500'>Web Design</h2>
                <span className='text-[#504b4b] text-[12px] font-bold'>Spain - University</span>
                <div className='text-[14px] mb-5'>
                  <MdCalendarMonth className='text-[15px] text-gray-500' />
                  <span className=' font-bold text-[13px]'>2009-2010</span>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Journey;
