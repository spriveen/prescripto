import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>  

     <div className='my-10 flex flex-col md:flex-row gap-12'>
      <img className='w-full md:max w-[360px]' src={assets.about_image} alt='' />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-700 '>
        <p>Welcome to Prescripto, your trusted online platform for convenient and reliable doctor channeling in Sri Lanka. We are committed to connecting patients with qualified healthcare professionals across a wide range of specialties.</p>

       <p>With Prescripto, you can easily search for doctors, view their availability, and book appointments from the comfort of your home. Our goal is to simplify the healthcare journey and ensure timely access to medical services.</p>
       
       <b className='text-gray-800'>Our Vision</b>
      <p>At Prescripto, we prioritize your health and convenience, offering a secure, user-friendly experience that puts your medical needs first.</p>
      </div>
     </div>
       <div>
        <div className='text-xl my-4'>
           <p>WHY <span className='text-gray-800 font-semibold'>CHOOSE US</span> </p>
        </div>
        <div className='flex flex-col md:flex-row mb-20'>
         
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-300 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
          <b>Efficiency:</b>
            <p>Streamlined appointment sceduling that fits into your busy lifestyle.</p>
          </div>
         
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-300 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
            <b>Convenience</b>
            <p>Access to a network of trusted healthcare professional in your area.</p>
          </div>
          
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-300 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
           <b>Personlization</b>
            <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
        
        </div>
       </div>
    </div>
  )
}

export default About