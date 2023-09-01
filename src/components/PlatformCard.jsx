"use client"
import Image from 'next/image';
import React from 'react';
import {motion} from "framer-motion"
const PlatformCard = ({ title, image }) => {
  return (
    <motion.div initial={{scale:0.1,opacity:0.5}} 
    
    whileInView={{scale:1,opacity:1}} className="flex flex-col gap-4 items-center">
      <Image src={image} width={50} height={50} alt={title}  />
      <p className="text-md  text-[#f4f4f4] font-bold">{title}</p>
    </motion.div>
   
  );
};

export default PlatformCard;
