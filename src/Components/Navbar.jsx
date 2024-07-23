import React, { useState } from 'react';
import { IoMdClose, IoMdMenu } from "react-icons/io";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <div className='z-50 w-full fixed top-0 left-0 backdrop-blur-lg transition ease-in-out duration-600'>
      <div className='relative h-12 mt-4 max-w-5xl flex items-center justify-between mx-auto px-5 transition ease-in-out duration-600 animate-fadeIn'>
        <a className='text-xl font-bold' href="/">Alex <span>Smith.</span></a>
        <div className='hidden sm:flex ml-40 text-black text-base font-medium'>
          <ul className='flex space-x-4'>
            <li><AnchorLink className='no-underline hover:text-[#7056e5]' href="#home">Home</AnchorLink></li>
            <li><AnchorLink className='no-underline hover:text-[#7056e5]' href="#about">About</AnchorLink></li>
            <li><AnchorLink className='no-underline hover:text-[#7056e5]' href="#service">Service</AnchorLink></li>
            <li><AnchorLink className='no-underline hover:text-[#7056e5]' href="#company">Companies</AnchorLink></li>
            <li><AnchorLink className='no-underline hover:text-[#7056e5]' href="#contact">Contact</AnchorLink></li>
          </ul>
        </div>
        <a href='#contact' className='hidden sm:flex items-center ml-10 cursor-pointer text-white font-semibold p-3 px-6 bg-violet-500 rounded-full'>
          Connect with me
        </a>
        <div className='sm:hidden cursor-pointer z-20' onClick={openNav}>
          {nav ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
        </div>
      </div>
      {nav && (
        <div className='sm:hidden absolute top-12 left-0 w-full bg-white shadow-lg animate-slideIn'>
          <ul className='flex flex-col items-center space-y-4 mt-4'>
            <li><AnchorLink className='no-underline hover:text-[#7056e5]' href="#home" onClick={openNav}>Home</AnchorLink></li>
            <li><AnchorLink className='no-underline hover:text-[#7056e5]' href="#about" onClick={openNav}>About</AnchorLink></li>
            <li><AnchorLink className='no-underline hover:text-[#7056e5]' href="#service" onClick={openNav}>Service</AnchorLink></li>
            <li><AnchorLink className='no-underline hover:text-[#7056e5]' href="#company" onClick={openNav}>Companies</AnchorLink></li>
            <li><AnchorLink className='no-underline hover:text-[#7056e5]' href="#contact" onClick={openNav}>Contact</AnchorLink></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
