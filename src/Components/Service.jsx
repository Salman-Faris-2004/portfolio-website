import React, { useState } from 'react';
import { FaPencilRuler, FaPhotoVideo } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoCheckmarkCircle, IoClose } from 'react-icons/io5';

const Service = () => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  }

  const closeModal = () => {
    setModalContent(null);
  }

  return (
    <div id='service' className='flex flex-col pl-[90px] p-1 sm:p-10 lg:p-20 items-center justify-center gap-10 sm:gap-20'>
      <div className='relative text-center sm:text-left'>
        <h1 className='text-[3.5em] font-semibold mb-[2rem] opacity-[.1] bg-clip-text text-transparent bg-slate-600'>Service</h1>
        <h1 className='text-[2.5rem] sm:ml-9 font-semibold translate-y-[-80px]'>Service</h1>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7'>
        <div className='flex flex-col hover:scale-105 transition-[0.2s] hover:border-4 hover:border-violet-500 cursor-pointer w-[250px] h-[300px] text-center gap-2 p-5 shadow-2xl'>
          <FaPencilRuler className='w-[50px] h-[50px] md:h-[100px] text-[#8267e3] mx-auto' />
          <h1 className='font-bold text-[20px]'>UI/UX <br /> Consultancy</h1>
          <h2 className='flex cursor-pointer text-[13px] text-[#5f5b5b] mt-7 items-center justify-center font-semibold transition-all duration-500 hover:space-x-2' onClick={() => openModal('UI/UX Consultancy')}>
            <span>Learn More</span> <IoIosArrowRoundForward />
          </h2>
          <div className='border-b mt-[60px] border-4 rounded-full shadow-md gap-12 border-violet-500'></div>
        </div>

        <div className='flex flex-col hover:scale-105 transition-[0.2s] hover:border-4 hover:border-violet-500 cursor-pointer h-[300px] text-center gap-2 p-5 shadow-2xl'>
          <FaPhotoVideo className='w-[50px] h-[50px] md:h-[100px] text-[#8267e3] mx-auto' />
          <h1 className='font-bold text-[20px]'>Branding &<br />Design</h1>
          <h2 className='flex cursor-pointer text-[13px] text-[#5f5b5b] mt-7 items-center justify-center font-semibold transition-all duration-500 hover:space-x-2' onClick={() => openModal('Branding & Design')}>
            <span>Learn More</span> <IoIosArrowRoundForward />
          </h2>
          <div className='border-b mt-[60px] border-4 rounded-full shadow-md gap-12 border-violet-500'></div>
        </div>

        <div className='flex flex-col hover:scale-105 transition-[0.2s] hover:border-4 hover:border-violet-500 cursor-pointer h-[300px] text-center gap-2 p-5 shadow-2xl'>
          <MdDeveloperMode className='w-[50px] h-[50px] md:h-[100px] text-[#8267e3] mx-auto' />
          <h1 className='font-bold text-[20px]'>Web<br />Development</h1>
          <h2 className='flex cursor-pointer text-[13px] text-[#5f5b5b] mt-7 items-center justify-center font-semibold transition-all duration-500 hover:space-x-2' onClick={() => openModal('Web Development')}>
            <span>Learn More</span> <IoIosArrowRoundForward />
          </h2>
          <div className='border-b mt-[60px] border-4 rounded-full shadow-md gap-12 border-violet-500'></div>
        </div>

        <div className='flex flex-col hover:scale-105 transition-[0.2s] hover:border-4 hover:border-violet-500 cursor-pointer h-[300px] text-center gap-2 p-5 shadow-2xl'>
          <HiMenuAlt1 className='w-[50px] h-[50px] md:h-[100px] text-[#8267e3] mx-auto' />
          <h1 className='font-bold text-[20px]'>Content<br />Writing</h1>
          <h2 className='flex cursor-pointer text-[13px] text-[#5f5b5b] mt-7 items-center justify-center font-semibold transition-all duration-500 hover:space-x-2' onClick={() => openModal('Content Writing')}>
            <span>Learn More</span> <IoIosArrowRoundForward />
          </h2>
          <div className='border-b mt-[60px] border-4 rounded-full shadow-md gap-12 border-violet-500'></div>
        </div>
      </div>

      {modalContent && (
        <div className='fixed top-20 left-0 w-full flex items-center justify-center mt-10 p-6 bg-white bg-opacity-40'>
          <div className='bg-white p-7 rounded-lg w-11/12 md:w-2/3 lg:w-1/2 shadow-2xl'>
            <div className='flex justify-end'>
              <IoClose className='cursor-pointer' size={30} onClick={closeModal} />
            </div>
            <h3 className='text-xl font-bold'>{modalContent}</h3>
            <h4 className='mt-4 text-sm font-semibold'>What is {modalContent}</h4>
            <p className='mt-2 text-[12px] text-[#5f5b5b]'>There’s a lot of talk about {modalContent.toLowerCase()} and what it takes to create the most optimal user experience. However, </p>
            <h4 className='mt-4 text-sm font-semibold'>What I provide</h4>
            <ul className='mt-3'>
              <li className='flex items-center text-[12px] text-[#5f5b5b]'><IoCheckmarkCircle className='mr-2 text-violet-600' /> Establish the right processes</li>
              <li className='flex items-center text-[12px] text-[#5f5b5b]'><IoCheckmarkCircle className='mr-2 text-violet-600' /> Create exceptional user experience</li>
              <li className='flex items-center text-[12px] text-[#5f5b5b]'><IoCheckmarkCircle className='mr-2 text-violet-600' /> Lorem ipsum dolor sit amet consectetur.</li>
              <li className='flex items-center text-[12px] text-[#5f5b5b]'><IoCheckmarkCircle className='mr-2 text-violet-600' /> Lorem ipsum dolor sit amet consectetur.</li>
              <li className='flex items-center text-[12px] text-[#5f5b5b]'><IoCheckmarkCircle className='mr-2 text-violet-600' /> Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Service;
