import React from "react";
import { FaUser } from "react-icons/fa";
import { useState , useEffect } from "react";
import logoTR from '../assets/images/jabamaTransparent.png'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  // function for size of scrollY
  useEffect( ()=>{
    const ScrollSize = ()=>{
      window.scrollY>180?setIsOpen(true) : setIsOpen(false)
    }  

    window.addEventListener('scroll' , ScrollSize)
    return () => window.removeEventListener("scroll", ScrollSize);
  }, [])

  return (
    <header className= {`lg:fixed font flex items-center
     justify-between w-full px-6 h-[70px] transition-all ease-in-out ${isOpen && 'bg-white '}`}>
        <img src={logoTR} alt="logo" width="50px" className="cursor-pointer rounded-xl" />
      <button className="bg-gray-200 cursor-pointer active:bg-gray-300 flex items-center justify-center p-3 shadow-xl rounded-xl">
        <p className="mx-2 font-bold">ورود یا ثبت نام</p>
        <FaUser />
      </button>
    </header>
  );
}

export default Header;
