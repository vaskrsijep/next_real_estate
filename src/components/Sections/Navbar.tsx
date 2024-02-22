import React from 'react'
import {motion } from "framer-motion"
const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-5'>
      <motion.div className='text-3xl font-bold tracking-wider' animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }}>
        Lugar<span className='text-white font-bold text-5xl'>.</span>
      </motion.div>
      <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }}>
        <ul className='uppercase flex items-center justify-center gap-20 cursor-pointer font-semibold'>
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>
      </motion.div>
    </div>
  )
}

export default Navbar