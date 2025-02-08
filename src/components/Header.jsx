import React from "react";
import logo from "../assets/images/jabama.png";
import { FaUser } from "react-icons/fa";

function Header() {
  return (
    <header className="font flex items-center justify-between w-full px-6 bg-blue-300 h-[70px]">
      <img src={logo} alt="logo" width="50px" className="cursor-pointer" />
      <button className="bg-white cursor-pointer active:bg-gray-200 flex items-center justify-center p-3 shadow-xl rounded-xl">
        <p className="mx-2 font-bold">ورود یا ثبت نام</p>
        <FaUser />
      </button>
    </header>
  );
}

export default Header;
