"use client"

import React from 'react'
import PlatformCard from './PlatformCard'
import { featureData } from '@/constants/static'


const Feature = () => {
  return (
    <div className='w-full p-5 bg-[#23252c]'>
    <div className='w-full sm:w-[80%] mx-auto'>
<h2 className='text-center text-[#ededed] mb-5 text-5xl font-semibold'>Only dedicated teams</h2>
<p className='text-center text-[#f4f4f4]'>Our team is 100% concentrated on your project and you have full control over management of the dedicated team members.</p>
</div>
<div className="grid p-4 my-10 gap-16 justify-center items-end grid-col-2 sm:grid-cols-3">
{featureData.map((platform, index) => (
 <PlatformCard key={index} title={platform.title} image={platform.image} />
))}
</div>
<div className=" grid justify-center items-center">
<button className="bg-transparent  border rounded-full border-[#ff5300] text-[#ff5300] hover:bg-[#ff5300] hover:text-white font-thin py-2 px-6  transition-colors duration-300">
See our services<span className='pl-1 transition-all hover:pl-3'>&#8594;</span>
</button>
</div>

</div>
  )
}

export default Feature