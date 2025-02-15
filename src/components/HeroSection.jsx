import React from 'react'
import bg from '../assets/images/background.jpg'
import '../assets/fonts/font.css'
import { useState } from 'react'
import Search from './Search'

function HeroSection() {
  return (
    <div className='w-full  h-[90vh]  bg-cover bg-center bg-no-repeat
 -z-10 relative'
     style={{ backgroundImage: `url(${bg})`}}>
        {/* title in hero section */}
        <div className='absolute top-[20%] left-4 '>
        <h2 className={`font text-white font-semibold text-[20px] `}  >
        جنوب گردی از تو، جاباما
        </h2>
        <p className='font text-white text-[14px]'>اجاره ویلا، سوئیت و اقامتگاه در شمال و سراسر ایران</p>
        </div>
     
        </div>
  )
}

export default HeroSection