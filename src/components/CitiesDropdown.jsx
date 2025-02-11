import * as React from "react";
import { useState } from "react";
import "../assets/fonts/font.css";
import { useContext } from "react";
import { HomeContext } from "../contexts/HomeContext";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function CitiesDropdown() {
  // call useContext for getting data from Data
  const { City, Cities, setCity } = useContext(HomeContext);
  // use useState for toggling dropDown menu
  const [IsOpen, setIsOpen] = useState(false);

  return (
    <div className="relative md:px-2">
      <button
        onClick={() => setIsOpen(!IsOpen)}
        className="menu-width font bg-white  w-46 p-2 rounded-xl cursor-pointer"
      >
        <p className="text-[14px] flex items-center">
          مقصد سفرت کجاست؟
          {!IsOpen ? (
            <IoIosArrowUp className="mr-5" />
          ) : (
            <IoIosArrowDown className="mr-5" />
          )}
        </p>
        <p className="text-[12px] mt-1 text-gray-400 text-right">{City} </p>
      </button>
      {/* drop down menu */}
      <div
        className={`absolute   bg-white w-full bottom-[-220%] md:bottom-[-244%]
         px-3 py-2 rounded-lg z-10 font ${IsOpen ? "visible" : "hidden"}`}
      >
        <ul>
          {Cities.map((item, index) => (
            <li
              className="p-1 text-[12px] border-b border-b-gray-200 cursor-pointer
               first:text-gray-400"
              onClick={() => {
                setCity(item);
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

export default CitiesDropdown;
