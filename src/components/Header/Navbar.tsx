import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-5'>
      <div className='text-3xl font-bold tracking-wider'>
        Lugar<span className='text-white font-bold text-5xl'>.</span>
      </div>
      <div>
        <ul className='uppercase flex items-center justify-center gap-20 cursor-pointer font-semibold'>
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar