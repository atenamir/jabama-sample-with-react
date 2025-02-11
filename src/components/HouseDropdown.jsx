import React from "react";
import { useState, useContext } from "react";
import { HomeContext } from "../contexts/HomeContext";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function HouseDropdown() {
  // call useContext for getting data from Data
  const { Type, Types, setType, setTypes } = useContext(HomeContext);
  // use useState for toggling dropDown menu
  const [IsOpen, setIsOpen] = useState(false);

  return (
    <div className="md:mt-0 md:px-2 relative mt-3 md:w-50 md:border-r md:border-r-gray-200 md:my-auto ">
      <button
        onClick={() => setIsOpen(!IsOpen)}
        className="menu-width font bg-white  w-46 p-2 rounded-xl cursor-pointer"
      >
        <p className="text-[13px] flex items-center">
          چه نوع خانه ای میخوای؟
          {!IsOpen ? (
            <IoIosArrowUp className="mr-5" />
          ) : (
            <IoIosArrowDown className="mr-5" />
          )}
        </p>
        <p className="text-[12px] mt-1 text-gray-400 text-right">{Type} </p>
      </button>
      {/* drop down menu */}
      <div
        className={`z-10 font absolute  bg-white w-full bottom-[-220%] md:bottom-[-250%] 
         px-3 py-2 rounded-lg  ${IsOpen ? "visible" : "hidden"}`}
      >
        <ul>
          {Types.map((item, index) => (
            <li
              className="p-1 text-[12px] border-b border-b-gray-200 cursor-pointer
               first:text-gray-400"
              onClick={() => {
                setType(item);
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

export default HouseDropdown;
