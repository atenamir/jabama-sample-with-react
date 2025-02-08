import React from "react";
import jabamaLogo from "../assets/images/jabama.png";
import "../assets/fonts/font.css";
import bazar from "../assets/images/bazaar.png";
import google from "../assets/images/google.png";
import Myket from "../assets/images/Myket.png";
import sibche from "../assets/images/Sibche.png";

function BlackFooterBar() {
  return (
    <div
      className="font mx-5 wm-full bg-black rounded-lg text-white
     p-3 lg:justify-between lg:flex lg:items-center"
    >
      {/* top section */}
      <div className="flex items-center justify-center ">
        <img src={jabamaLogo} alt="logo" width="90px" className="rounded-xl" />
        <p className="mx-3 text-[22px] font-bold">دانلود اپلیکیشن جاباما</p>
      </div>
      {/* bottom section */}
      <div className="px-5 mt-8 grid grid-cols-2 lg:grid-cols-4
      lg:mt-2">
        {/* card */}
        {data.map((item) => (
            <div key={item.id} className=' mx-2 my-4 bg-white text-black font bold flex p-3
            rounded-xl font-bold text-[17px] cursor-pointer'>
             <p className='ml-4'>دریافت از </p>
             <img src={item.img} alt="download" width='50px' className="md:w-[100px]"/>
            </div>

        ))}
      </div>
    </div>
  );
}

const data = [
  {
    id: 1,
    img: bazar,
  },
  {
    id: 2,
    img: Myket,
  },
  {
    id: 3,
    img: google,
  },
  {
    id: 4,
    img: sibche,
  },
];

export default BlackFooterBar;
