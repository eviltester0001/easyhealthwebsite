import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10' >
        <div className='flex felx-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*------------Left Section-------------*/}
            <div>
                <img className='mb-5' src={assets.logo} alt="" srcSet='' width={200}  />
                <p className='w-full md:w-2/3 text-gray-600 leading-6' ><strong>Easy Health</strong> simplifies doctor appointments by letting patients easily find and book healthcare professionals. With real-time availability, reminders, and flexible rescheduling, it’s healthcare made convenient. Access quality care at your fingertips with Easy Health.

</p>
            </div>

            {/*------------Middle Section-------------*/}
            <div>
                <p className='text-xl font-medium mb-5' >COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600' >
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            {/*------------Right Section-------------*/}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH </p>
                    <ul className='flex flex-col gap-2 text-gray-600' >
                        <li>+91 9555-893-235</li>
                        <li>info@easyhealth.com</li>
                    </ul>
            </div>
        </div>

         {/*------------Copyright Section-------------*/}

        <div>
            <hr />
            <p className='py-5 text-sm text-center' >Copyright 2024@ Easyhealth - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer