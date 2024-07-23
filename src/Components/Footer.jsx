import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='flex flex-col w-[500px] sm:w-full sm:p-6  p-5  bg-violet-500'>
            <div className='flex flex-col md:flex-row items-center justify-between md:pl-20 text-white mt-2 gap-4'>
                <div className='flex flex-col gap-3 text-center md:text-left'>
                    <h1 className='font-semibold text-[30px] text-[#ffffff95]'>Alex Smith</h1>
                    <p className='text-[13px] font-semibold'>Front-End Developer</p>
                    <a className='p-3 text-[14px] font-semibold' href="#about">About Me</a>
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <h4 className='font-semibold text-[15px]'>More</h4>
                    <div className='flex text-[13px] gap-7'>
                        <a href="#journey">Journey</a>
                        <a href="#service">Service</a>
                        <a href="#portfolio">Portfolio</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <h2 className='font-semibold text-[15px]'>Follow</h2>
                    <div className='flex gap-4'>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className='w-6 h-6 cursor-pointer' />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='w-6 h-6 cursor-pointer' />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className='w-6 h-6 cursor-pointer' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex items-center text-center md:text-left md:pl-10 text-[13px] text-[#e4dede] justify-center pt-7'>
                <p>&copy; {currentYear} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
