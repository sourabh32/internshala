import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="grid h-[100vh] text-[#f4f4f4] items-center" style={{ backgroundColor: "#16181c",backgroundImage:"url('/asset 29.png')",backgroundRepeat:"no-repeat",backgroundPosition:"center" }}>
 <div className='w-full text-center'>
    <h1 className='text-3xl sm:text-4xl tracking-widest font-semibold'>EMBARCE THE FUTURE</h1>
    <h2 className='text-xl sm:text-2xl tracking-wider mt-5 '>Welcome To The Age Of Action</h2>
 </div>
</div>




  )
}

export default Hero