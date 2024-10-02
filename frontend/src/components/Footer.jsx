import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-40 text-sm'>
            {/* ......Left Section..... */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-610 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas maxime totam nam laborum obcaecati laboriosam excepturi commodi! Odit incidunt eius repellendus unde molestiae dolorem? Quo tenetur placeat eaque autem!</p>

            </div>
            {/* ......Crnter  Section..... */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul  className='flex flex-col gap-2 text-gray-610'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            {/* ......Right Section..... */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul  className='flex flex-col gap-2 text-gray-610'>
                    <li>+91-9696455342</li>
                     <li>dubeysatyam9198@gamil.com</li> 
                </ul>

            </div>
        </div>
         {/* ......copy right text.... */}
        <div>
            <hr />
            <p className='py-6 text-sm text-center'>Copyright 2024@</p>
           
        </div>
      
    </div>
  )
}

export default Footer
