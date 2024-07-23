import React from 'react';
import profile_img from '../assets/about.png';
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div id='about' className='flex flex-col  pl-[90px] p-1 sm:p-7 items-center justify-center gap-10 sm:gap-20 mx-5 sm:mx-10 lg:mx-28'>

<div className='relative flex-col  text-center sm:text-left'>
        <h1 className='text-[3.5em] font-semibold mb-[2rem] opacity-[.1] bg-clip-text text-transparent bg-slate-600'>About Me</h1>
        <h1 className='text-[2.5rem] ml-9 font-semibold translate-y-[-80px]'>About Me</h1>
      </div>

      <div className='flex flex-col items-center sm:flex-row justify-between gap-7'>
        <div className='hover:scale-105 w-full sm:w-1/2 transition-[0.5s] cursor-pointer p-7'>
          <img className='rounded-md w-[900px] shadow-md border-4 border-violet-500' src={profile_img} alt="Profile" />
        </div>

        <div className='flex flex-col gap-4 p-5 w-full sm:w-1/2'>
          <h1 className='text-2xl sm:text-3xl font-bold'>I'm Alex Smith</h1>
          <h3 className='text-[13px] sm:text-[17px] font-semibold'>A lead <span className='font-bold text-violet-500'>Front-End Developer</span> based in California.</h3>
          <p className='text-sm sm:text-[13px] text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint est, sunt quibusdam, unde qui molestias adipisci reprehenderit eveniet ex ratione libero recusandae et, dolor fugiat aspernatur. Voluptas maxime nam ad?
          </p>
          <hr className='shadow-md font-bold border-1 border-gray-500' />

          <div className='flex flex-col sm:flex-row gap-6'>
            <div className='flex flex-col items-center sm:items-start p-3 hover:scale-105 transition-[0.5s] cursor-pointer'>
              <h1 className='font-bold text-3xl sm:text-4xl'>10+</h1>
              <p className='text-sm text-gray-600 font-semibold sm:text-[14px]'>Years of experience</p>
            </div>

            <div className='flex flex-col items-center sm:items-start p-3 hover:scale-105 transition-[0.5s] cursor-pointer'>
              <h1 className='font-bold text-3xl sm:text-4xl'>30+</h1>
              <p className='text-sm text-gray-600 font-semibold sm:text-[14px]'>Happy customers</p>
            </div>

            <div className='flex flex-col items-center sm:items-start p-3 hover:scale-105 transition-[0.5s] cursor-pointer'>
              <h1 className='font-bold text-3xl sm:text-4xl'>50+</h1>
              <p className='text-sm text-gray-600 font-semibold sm:text-[14px]'>Successful Projects</p>
            </div>
          </div>

          <div className='flex justify-center sm:justify-start gap-6 mt-4'>
            <button className='flex items-center text-white gap-4 font-semibold justify-center hover:scale-105 transition-[0.5s] p-3 sm:p-4 shadow-md px-7 sm:px-10 rounded-lg bg-gradient-to-r from-[#DF98FA] to-[#9055FF]'>
              Download CV <FaDownload />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
