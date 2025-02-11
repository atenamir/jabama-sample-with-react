import React from 'react'
import CitiesDropdown from './CitiesDropdown'
import HouseDropdown from './HouseDropdown.jsx'
import PriceDropdown from './PriceDropdown.jsx'
import { IoSearchSharp } from "react-icons/io5";

function Search() {
  return (
    <div className='absolute  top-[45%]  z-10 md:flex md:bg-white md:p-3
     md:rounded-xl  md:items-center md:justify-between  md:top-[35%] '>
        <CitiesDropdown />
        <HouseDropdown />
        <PriceDropdown />
        <button className='bg-black cursor-pointer w-full mt-2 p-3 text-[25px] rounded-xl flex items-center
         justify-center md:w-13 md:h-13 md:rounded-full md:mx-3 md:mt-0 '>
          < IoSearchSharp className=' text-white '/>
          </button>
    </div>
  )
}

export default Search