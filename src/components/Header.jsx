"use client";
import React, { useState } from "react";
import { VscClose } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-transparent fixed p-4 text-white flex justify-between items-center">
      <div>
        <h3 className="text-white text-2xl">
          Geeks <span className="text-[#ff5300]">Invention</span>
        </h3>
      </div>

      <div className="lg:block md:hidden hidden">
        <a href="#" className="text-white  mt-4 md:mt-0 md:ml-6">
          HOME
        </a>
        <a href="#" className="text-white mt-4 md:mt-0 md:ml-6">
          WORKS
        </a>
        <a href="#" className="text-white mt-4 md:mt-0 md:ml-1">
          TECHNOLOGIES
        </a>
        <a href="#" className="text-white mt-4 md:mt-0 md:ml-2">
          SERVICES
        </a>

        <a href="#" className="text-white mt-4 md:mt-0 md:ml-2">
          SERVICES
        </a>
        <a href="#" className="text-white mt-4 md:mt-0 md:ml-2">
          CONTACTS
        </a>
      </div>

      <div className="sm:hidden block ">
        <button onClick={toggleMenu}>
          <RxHamburgerMenu />
        </button>
      </div>

      {isOpen && (
  <div className="fixed overflow-hidden  top-0 left-0 w-screen h-screen bg-[#000000] flex flex-col">
    <button
      className="self-start font-semibold  text-white m-4 ml-auto focus:outline-none focus:text-white"
      onClick={toggleMenu}
    >
      <VscClose  /> 
    </button>
    <div className="text-center my-auto">
     <motion.div  initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: 50 }}>
    <motion.a
              onClick={() => setIsOpen(false)}
              href="#"
              className="block hover:border-b-2 border-[#ff5300] text-2xl mb-4"
              whileHover={{ scale: 1.1 }} 
              transition={{ duration: 0.3 }}
            >
              Home
            </motion.a>
            <motion.a
              onClick={() => setIsOpen(false)}
              href="#"
              className="block text-2xl mb-4"
              whileHover={{ scale: 1.1 }} 
              transition={{ duration: 0.3 }}
            >
              Works
            </motion.a>
            <motion.a
              onClick={() => setIsOpen(false)}
              href="#"
              className="block text-2xl mb-4"
              whileHover={{ scale: 1.1 }} 
              transition={{ duration: 0.3 }}
            >
              Technologies
            </motion.a>
            <motion.a
              onClick={() => setIsOpen(false)}
              href="#"
              className="block text-2xl  mb-4"
              whileHover={{ scale: 1.1 }} 
        transition={{ duration: 0.3 }}
            >
              Services
            </motion.a>
            <motion.a
              onClick={() => setIsOpen(false)}
              href="#"
              className="block text-2xl  mb-4"
              whileHover={{ scale: 1.1 }} 
              transition={{ duration: 0.3 }}
            >
              Contacts
            </motion.a>
            </motion.div>
    </div>
  </div>
)}

     
    </div>
  );
};

export default Header;

