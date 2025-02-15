import React from 'react'
import '../assets/fonts/font.css'

function HouseCard({details}) {
  return (
    <div className='container flex items-center justify-center'>
      <div className='h-[300px]  cursor-pointer border border-gray-200 m-3 p-3 rounded-xl flex flex-col justify-start items-center w-[495px]
      '>
    <img src={details.image} alt="home " width='150px' />
    {/* description */}
    <div>
      <h1 className='font font-bold text-[13px] mt-3 text-right'>{details.title}</h1>
      <p className='text-[12px] mt-1 text-right text-gray-600'>  تهران /{details.city} <span className='text-gray-400'> .{details.room} اتاق</span></p>
    <p className='mt-3 text-right'>{details.rent.toLocaleString()}
       <span className='text-[12px] text-gray-400'> / هرشب</span>
       </p>
    </div>
    </div>
    </div>
  )
}

export default HouseCard