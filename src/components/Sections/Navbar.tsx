"use client"
import React from "react";
import { motion } from "framer-motion";
const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <>
    {open &&
      <div className="relative w-full bg-white h-full">
        <div className="absolute z-50 w-1/3 right-0 top-16">
        <motion.ul className="flex items-center justify-center  gap-10 flex-col text-xl h-full bg-blue-100 rounded-lg text-[#1E3240] py-10 hover:text-black shadow-inner" 
        animate={{ opacity: 1, x: 0 }} 
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}>  
          <li className="hover:text-[#1E3240]">Home</li>
          <li className="hover:text-[#1E3240]">About</li>
          <li className="hover:text-[#1E3240]">Project</li>
          <li className="hover:text-[#1E3240]">Contact</li>
        </motion.ul>
        </div>
      </div>
      }
      <div className="flex justify-between items-center py-5 relative">
        <motion.div
          className="text-3xl font-bold tracking-wider"
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          Lugar
        </motion.div>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="uppercase items-center justify-center gap-20 cursor-pointer font-semibold md:flex hidden">
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
            <li>Contact</li>
          </ul>
        </motion.div>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div aria-hidden="true" className="hamburger md:hidden block hidd cursor-pointer" onClick={handleClick} animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }}>
        <motion.span
          className="hamburger-span"
          animate={{ rotate: open ? -45 : 0, translateX: open ? -9 : 0, translateY: open ? 9 : 0 }}
        ></motion.span>
          <motion.span
          className="hamburger-span"
          animate={{ opacity: open ? 0 : 1 }}
          transition={{ duration: open ? 0 : 5 }}
        ></motion.span>
        <motion.span
          className="hamburger-span"
          animate={{ rotate: open ? 45 : 0, translateX: open ? -8 : 0, translateY: open ? -8 : 0 }}
        ></motion.span>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
