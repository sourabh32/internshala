"use client"

import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion";
const CaseStudyCard = ({ heading, sub, tags, description, image,bg,reverse }) => {
      

    const reverseClass =  reverse ==="reverse" ? ` bg-[${bg}]! gap-10 flex-col shadow-md p-4  flex  md:flex-row`:` bg-[${bg}]! gap-10 flex-col shadow-md p-4  flex  md:flex-row-reverse`
  return (
    <div style={{
        backgroundColor: `${bg}`,
        minHeight:"130vh",
      
       
      }} className={reverseClass}>
        <div className="w-full my-auto">
        <Image objectFit='cover' src={image} alt={heading} layout="responsive" width={1000} height={1000} />
      </div>
      <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
             className="w-full my-auto">
        <h2 className="text-5xl tracking-wider text-[#ffffff] font-semibold">{heading}</h2>
        <p className="text-[#ffffff] opacity-30 my-5">{sub}</p>
        <div className="flex sm:flex-row gap-2 flex-col">
          {tags.map((tag, index) => (
            <span key={index}   style={{
                backgroundColor: `${bg}`,
                opacity: 0.9, 
              }} className={` shadow-md w-fit text-[#ffffff] text-[15px] px-2 py-1 rounded-full mr-2 `}><p className='text-[#ffffff]'>{tag}</p></span>
          ))}
        </div>
        <p className="text-[#ffffff] mt-5">{description}</p>
        <div className='grid justify-center sm:justify-start'>
        <button className={`bg-transparent border my-10 border-white  rounded-full hover:text-black  hover:bg-white  text-white font-thin py-2 px-6  transition-all duration-300`}>
See full case study <span className='pl-1 transition-all hover:pl-3'>&#8594;</span>
</button>
</div>
      </motion.div>
    </div>
  );
};

export default CaseStudyCard;
