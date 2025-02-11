import React from 'react'
import { useContext , useState } from 'react';
import { HomeContext } from '../contexts/HomeContext';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import '../assets/fonts/font.css'
import '../responsive/responsive.css'

function PriceDropdown() {
    // call useContext for getting data from Data
    const {Price , Prices , setPrice} = useContext(HomeContext)
    // use useState for toggling dropDown menu
    const [IsOpen, setIsOpen] = useState(false);
  
    return (
      <div className="md:mt-0 md:px-2 relative mt-3 md:w-50 md:border-r md:border-r-gray-200 md:my-auto">
        <button
          onClick={() => setIsOpen(!IsOpen)}
          className="font menu-width bg-white  w-46 p-2 rounded-xl cursor-pointer"
        >
          <p className="text-[13px] flex items-center z-10 font">
        محدوده قیمتی
            {!IsOpen ? (
              <IoIosArrowUp className="mr-5" />
            ) : (
              <IoIosArrowDown className="mr-5" />
            )}
          </p>
          <p className="text-[12px] mt-1 text-gray-400 text-right">{Price} </p>
        </button>
        {/* drop down menu */}
        <div
          className={`absolute  bg-white w-full bottom-[-460%]
           px-3 py-2 rounded-lg  font md:bottom-[-480%] ${IsOpen ? "visible" : "hidden"}`}
        >
          <ul>
             {Prices.map((item, index) => (
              <li
                className="p-1 text-[12px] border-b border-b-gray-200 cursor-pointer
                 first:text-gray-400"
                onClick={() => {
                  setPrice(item);
                  setIsOpen(false);
                }}
                key={index}
              >
                {item}
              </li>
            ))} 
          </ul>
        </div>
      </div>
    );
}

export default PriceDropdown