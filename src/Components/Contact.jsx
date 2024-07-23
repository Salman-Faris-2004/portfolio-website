import React from 'react';
import { GrSend } from "react-icons/gr";
import { IoCall, IoLocation, IoMail } from "react-icons/io5";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "032469f6-8fdf-41ff-bfdc-03ba1675828a");

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Your message success!", res);
    }
  };

  return (
    <div id='contact' className='flex flex-col pl-[90px] p-1 sm:p-7 items-center justify-center gap-10 sm:gap-20 mx-5 sm:mx-10 lg:mx-28'>
      <div className='relative flex flex-col text-center sm:text-left'>
        <h1 className='text-[2.8em] font-semibold mb-[2rem] opacity-[.1] bg-clip-text text-transparent bg-slate-600'>Contact Me</h1>
        <h1 className='text-[2.5rem] ml-9 font-semibold translate-y-[-80px]'>Contact Me</h1>
      </div>
      <div className='flex flex-col sm:flex-row gap-7 p-2 items-center justify-between w-full'>
        <div className='mb-9 w-full sm:w-1/2'>
          <h1 className='text-xl font-bold mb-4'>Let's discuss your projects</h1>
          <div className='mb-4'>
            <h2 className='flex items-center text-lg font-semibold'><IoCall className='mr-3 text-violet-500' /> Contact</h2>
            <p className='ml-7 text-[13px] text-[#3e3c3c]'>+00298273</p>
          </div>
          <div className='mb-4'>
            <h2 className='flex items-center text-lg font-semibold'><IoMail className='mr-3 text-violet-500' /> Email Address</h2>
            <p className='ml-7 text-[13px] text-[#3e3c3c]'>alexsmith@gmail.com</p>
          </div>
          <div>
            <h2 className='flex items-center text-lg font-semibold'><IoLocation className='mr-3 text-violet-500' /> Official Address</h2>
            <p className='ml-7 text-[13px] text-[#3e3c3c]'>13th Street, 47 W 13th St, New York, NY 10011, USA.</p>
          </div>
        </div>
        <div className='right-side w-full sm:w-1/2'>
          <p className='mb-2'>I'm always open to discussing Product</p>
          <h1 className='font-bold text-[20px]'>Design work or partnerships.</h1>
          <form onSubmit={onSubmit} className='flex flex-col mt-5 gap-7'>
            <div className='w-full p-4 rounded-lg shadow-sm text-[14px] h-[65px] bg-[#f4ebfe7f]'>
              <input name='name' className='w-full p-1 outline-none placeholder:text-[#353232] font-medium bg-transparent' type="text" placeholder='Name' required />
            </div>
            <div className='flex flex-col sm:flex-row gap-4'>
              <div className='w-full sm:w-1/2 p-4 rounded-lg shadow-sm text-[14px] h-[65px] bg-[#f4ebfe7f]'>
                <input name='email' className='w-full p-1 outline-none placeholder:text-[#353232] font-medium bg-transparent' type='email' placeholder='Email' required />
              </div>
              <div className='w-full sm:w-1/2 p-4 rounded-lg shadow-sm text-[14px] h-[65px] bg-[#f4ebfe7f]'>
                <input name='subject' className='w-full p-1 outline-none border-none placeholder:text-[#353232] font-medium bg-transparent' type='text' placeholder='Subject' required />
              </div>
            </div>
            <textarea name='message' className='w-full p-4 outline-none rounded-lg shadow-sm text-[14px] h-[90%] bg-[#f4ebfe7f] placeholder:text-[#353232]' placeholder='Message' rows='4' required></textarea>
            <button className='flex items-center text-white justify-center gap-3 p-3 px-7 shadow-md hover:scale-105 transition duration-500 cursor-pointer w-[190px] text-[14px] bg-violet-500 font-semibold rounded-md' type='submit'>
              Send Message <GrSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
