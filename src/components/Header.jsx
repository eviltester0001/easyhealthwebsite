import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
        {/*--------- Left Side ---------*/}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p className='text-3xl md:text-4xl lg:text-5xl text-black font-semibold leading-tight md:leading-tight lg:leading-tight'>
                Book Appointment <br/> With Trusted Doctors
            </p>
            <div className='flex flex-col md:flex-row iteems-center gap-3 text-black text-sm font-light'>
                <img className='w-28' src={assets.group_profiles} alt="" />
                <p><strong>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' />schedule your appointmnet hassle-free.</strong></p>
            </div>
            <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-blue-600 text sm m-auto md:m-0 hover:scale-105 hover:text-black cursor-pointer transition-all duration-300'>
                <strong>Book Appointment </strong><img className='w-3' src={assets.arrow_icon} alt="" />
            </a>
        </div>

        {/*--------- Right Side ---------*/}
        <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header