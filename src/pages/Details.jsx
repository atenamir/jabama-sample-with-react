import React from "react";
import { data, useParams } from "react-router-dom";
import { useContext } from "react";
import { HomeContext } from "../contexts/HomeContext";
import "../assets/fonts/font.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoHomeOutline, IoBedOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { PiToiletLight } from "react-icons/pi";

function Details() {
  // get the id from search
  const { id } = useParams();
  // get the data with useContext
  const { Data } = useContext(HomeContext);

  // find homeDetail by id
  const details = Data.find((house) => {
    return house.id == id;
  });

  return (
    <div className="mt-3 w-full flex flex-col ">
      <div className="w-full flex justify-center flex-col lg:grid lg:grid-cols-2">
        <img
          src={details.image}
          alt="home image"
          className="mx-auto lg:w-[550px] md:w-[450px] lg:mx-auto"
        />
        {/* details */}
        <div>
          <h1 className="mt-9 text-[18px] font-bold text-center font md:text-[22px]">
            {details.title}
          </h1>
          <p className="flex items-center justify-center mt-2 ">
            <FaLocationDot className="mx-1" />
            تهران / {details.city}
          </p>
          <div className="border-t border-gray-300 w-[90%] mx-auto mt-6">
            <p className="font my-3 text-[20px]">
              خانه به میزبانی {details.agent.name}
            </p>
            <p className="font my-3 text-[20px]">
              شماره تماس میزبان :  {details.agent.phone}
            </p>
          </div>
          <div>
            <h1 className="w-[90%] mx-auto font text-[20px]  my-6 font-bold border-t pt-3 border-gray-300">
              مشخصات کلی آپارتمان </h1>
            <div className="flex content-center mx-12 font text-[18px]">
              <span className="pl-2"><IoHomeOutline /></span>
              <p>متراژ : 80 متر</p>
            </div>
            <div className="flex content-center mx-12 font text-[18px] mt-3">
              <span className="pl-2"><BsPeople /></span>
              <p>تعداد نفرات : 3 نفر</p>
            </div>
            <div className="flex content-center mx-12 font text-[18px] mt-3">
              <span className="pl-2"><IoBedOutline /></span>
              <p>سرویس های خواب: {details.room} اتاق</p>
            </div>
            <div className="flex content-center mx-12 font text-[18px] mt-3">
              <span className="pl-2"><PiToiletLight /> </span>
              <p>سرویس بهداشتی : {details.bathRoom} سرویس </p>
            </div>
          </div>
        </div>
      </div>
            {/* about home */}
            <h2 className="my-12 mx-9 font text-[18px] border-t border-t-gray-300 pt-4 text-justify
">{details.decription}</h2>
    </div>
  );
}

export default Details;
