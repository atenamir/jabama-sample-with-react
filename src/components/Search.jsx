import React from 'react'
import CitiesDropdown from './CitiesDropdown'
import HouseDropdown from './HouseDropdown.jsx'
import PriceDropdown from './PriceDropdown.jsx'

function Search() {
  return (
    <div className='absolute  top-[45%]  z-10 md:flex md:bg-white md:p-3
     md:rounded-xl  md:items-center md:justify-center md:px-2  md:top-[25%] md:w-[38%]'>
        <CitiesDropdown />
        <HouseDropdown />
        <PriceDropdown />
        
    </div>
  )
}

export default Search