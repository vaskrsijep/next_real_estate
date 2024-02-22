import React from 'react'
import { Button } from '../ui/button'

const Heading = () => {
  return (
    <div className='flex flex-col items-start gap-5 max-w-2xl py-20'>
      <h1 className="text-8xl font-bold text-[#1E3240] tracking-normal leading-snug">A home is built with love and dreams</h1>
      <p className='text-lg'>Real estate farm that makes your dreams true.</p>
      <div>

      <Button variant="default">Our Projects</Button>
      <Button variant="link">Contact Us</Button>
      </div>
      </div>
  )
}

export default Heading