import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
         {/* left section */}
         <div>
            <img className='mb-5 w-40' src={assets.logo} alt='' />
            <p className='w-full md:w-2/3 text-gray-700 leading-6'>Preascripto is your trusted online platform to book doctor appointments easily and quickly from anywhere.</p>
         </div>

          {/* Center section */}
         <div>
            <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col gap-2 text-gray-700'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
            </ul>
         </div>
             {/* right section */}
         <div>
            <p className='text-xl font-medium mb-5'>Get in Touch</p>
            <ul className='flex flex-col gap-2 text-gray-700'>
                <li>+94 71876245</li>
                <li>riveen@gmail.com</li>
            </ul>
         </div>
         </div>  
         {/* copy right */}
         <div>
          {/* <hr /> */}
          <p className='py-5 text-sm text-center'>Copyright 2025@ Riveen_Official. All Right Reserved</p>
         </div>
    </div>
  )
}

export default Footer