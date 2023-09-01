import Image from 'next/image';
import React from 'react';
import {motion} from "framer-motion"
const ClientCard = ({ title, description, image }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }} className="bg-[#2e3038] opacity-60 text-white rounded-lg shadow-md p-6 max-w-md mx-auto my-4">
      <Image className='my-4' src={image} alt={title} width={400} height={400} />
      <h3 className="text-xl mt-10 text-center font-semibold mb-2">{title}</h3>
      <p  className='text-center font-light'>{description}</p>
    </motion.div>
  );
};

export default ClientCard;
