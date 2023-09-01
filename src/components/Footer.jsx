import React from 'react';

const Footer = () => {
  return (
    <div className='w-full p-5 bg-[#23252c]'>
      <div className='w-full my-10 sm:w-[80%] mx-auto'>
        <h2 className='text-center text-[#ededed] mb-5 text-5xl font-semibold'>
          Get to know us better!
        </h2>
        <p className='text-center text-[#f4f4f4]'>
          It is a pleasure to have you on our website. Let us know if there
          an opportunity to do something together.
        </p>
      </div>

      <div className='my-10 grid justify-center items-center'>
        <button className='bg-transparent rounded-full hover:text-[#ff5300] hover:bg-white border border-white bg-[#ff5300] text-white font-thin py-2 px-6 transition-all duration-300'>
          Drop us a message
        </button>
      </div>

      <div className='w-full p-5 items-center gap-10 grid sm:grid-cols-3 grid-cols-1 '>
        <div>
          <h3 className='text-white text-2xl'>
            Geeks <span className='text-[#ff5300]'>Invention</span>
          </h3>
          <p className='text-[#f4f4f4] text-center text-sm'>
            447 Broadway, 2nd Floor Suite #772, New York 10013, United States
            +1-347-535-0004
          </p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3'>
          <div>
            <a className='text-white' href='#'>
              About us
            </a>
          </div>
          <div>
            <a className='text-white' href='#'>
              Services
            </a>
          </div>
          <div>
            <a className='text-white' href='#'>
              Contacts
            </a>
          </div>
          <div>
            <a className='text-white' href='#'>
              Terms and Conditions
            </a>
          </div>
          <div>
            <a className='text-white' href='#'>
              Privacy Policy
            </a>
          </div>
        </div>
        <div>
          <button className='bg-transparent border border-white rounded-full hover:text-[black] hover:bg-white text-white font-thin py-2 px-6 transition-all duration-300'>
            Stay tuned for updates
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
