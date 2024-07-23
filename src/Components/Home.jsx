  import React from 'react';
  import Profile from '../assets/man-img.png';
  import { FaArrowAltCircleRight, FaFacebook, FaInstagram, FaTwitter, FaLongArrowAltDown } from "react-icons/fa";

  const Home = () => {
    const scrollingToSection = (contact) => {
      const section = document.getElementById(contact);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <div id='home' className='relative pl-[90px] max-w-[1350px] min-h-screen mx-auto px-3 sm:px-13 md:px-16 lg:px-20 flex flex-col justify-center items-center'>
        <div className="w-full">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:pr-24 p-7 lg:p-0">
            <div className="flex lg:flex-col text-violet-500 text-[20px] gap-7 mt-5 lg:mr-6">
              <a className='cursor-pointer hover:scale-105 transition-[0.5s]'><FaFacebook /></a>
              <a className='cursor-pointer hover:scale-105 transition-[0.5s]'><FaInstagram /></a>
              <a className='cursor-pointer hover:scale-105 transition-[0.5s]'><FaTwitter /></a>
            </div>
            <div className="flex flex-col gap-2 max-w-[700px] text-center lg:text-left mt-5 lg:mt-0">
              <h2 className='text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bold leading-tight'>Hi, I am Alex</h2>
              <h3 className='text-gray-500 font-semibold leading-tight text-[14px] sm:text-[1.5rem]'><span className='text-violet-500'>Frontend Developer</span></h3>
              <p className='text-[#5f5b5b] text-[13px] max-w-[365px] mx-auto lg:mx-0'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, deserunt.
              </p>
              <div onClick={() => scrollingToSection('contact')} className="bg-violet-500 text-white hover:scale-105 transition-[0.5s] flex items-center justify-center w-[150px] cursor-pointer hover:via-violet-200 shadow-md font-semibold mt-2 p-3 px-3 gap-1 rounded-lg mx-auto lg:mx-0">
                Contact Me <FaArrowAltCircleRight />
              </div>
            </div>
            <div className="relative mt-10 lg:mt-0 lg:pl-32">
              <img className='w-[200px] sm:w-[250px] md:w-[300px] hover:scale-105 transition-[0.5s] cursor-pointer h-[200px] sm:h-[250px] md:h-[300px] rounded-full' src={Profile} alt="Alex's profile" />
            </div>
          </div>
          <div className='flex items-center justify-center mt-10'>
            <a onClick={() => scrollingToSection('contact')} className="text-[#5f5b5b] text-[13px] font-medium mt-5 flex items-center gap-1 cursor-pointer">
              Scroll down <FaLongArrowAltDown className='text-violet-500 text-[1.25rem] hover:scale-105 animate-bounce' />
            </a>
          </div>
        </div>
      </div>
    );
  }

  export default Home;
