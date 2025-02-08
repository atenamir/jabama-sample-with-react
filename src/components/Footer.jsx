import React from "react";
import "../assets/fonts/font.css";
import footerLogo from "../assets/images/footerLogo.png";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import BlackFooterBar from "./BlackFooterBar";

function Footer() {
  return (
    <footer className=" bg-gray-100 border-t border-t-gray-300 ">
      <div className="grid grid-cols-2  px-4 md:grid-cols-3 lg:grid-cols-4">
        <ul className="mx-5 mt-9">
          <h3 className="font font-bold mb-4 text-[17px]">
            نحوه رزرو اقامتگاه
          </h3>
          <li className="my-3 text-gray-600 cursor-pointer">شیوه‌های پرداخت</li>
          <li className="my-3 text-gray-600 cursor-pointer">
            راهنمای رزرو اقامتگاه
          </li>
          <li className="my-3 text-gray-600 cursor-pointer">لغو رزرو</li>
        </ul>

        <ul className="mx-5 mt-9">
          <h3 className="font font-bold mb-4 text-[17px]">خدمات مشتریان</h3>
          <li className="my-3 text-gray-600 cursor-pointer">
            پرسش‌های متداول مهمان
          </li>
          <li className="my-3 text-gray-600 cursor-pointer">
            پرسش‌های متداول میزبان
          </li>
          <li className="my-3 text-gray-600 cursor-pointer">
            چطور ثبت رزرو کنم؟
          </li>
        </ul>

        <ul className="mx-5 my-9">
          <h3 className="font font-bold mb-4 text-[17px]">با جاباما</h3>
          <li className="my-3 text-gray-600 cursor-pointer">درباره جاباما</li>
          <li className="my-3 text-gray-600 cursor-pointer">قوانین جاباما</li>
          <li className="my-3 text-gray-600 cursor-pointer">تماس باما</li>
        </ul>

        <ul className="mx-5 my-9">
          <img src={footerLogo} alt="footer logo" width="120px" />
          <p className="font bold mt-2">
            جاباما را در شبکه های اجتماعی دنبال کنید :
          </p>
          {/* social media icons */}
          <div className="flex items-center justify-start mt-3  ">
            <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-200 ml-2">
              <FaLinkedinIn className="text-[20px] cursor-pointer" />
            </span>
            <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-200 ml-2">
              <FaTwitter className="cursor-pointer" />
            </span>
            <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-200 ml-2">
              <FaInstagram className="text-[20px]  cursor-pointer" />
            </span>
          </div>
        </ul>
      </div>
      {/* black footer box */}
      <BlackFooterBar />
      {/* last section */}
      <div className="mx-5 mt-9 border-t border-t-gray-200 p-1 lg:flex lg:items-center 
      lg:justify-between">
        <p className="font font-bold text-[18px] mt-5">
          در تمامی سفر های شما، کنارشما هستیم.
        </p>
        {/* contact info */}
        <div className="grid grid-cols-2 mt-5 lg:flex ">
          <p className="font-bold font text-[18px] px-3">تلفن پشتیبانی: 22222-021 </p>
          <p className="font-bold font text-[18px] px-3">کد پستی : 164444444</p>
          <p className="font-bold font text-[18px] px-3">ایمیل: support@jabama.ir</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
