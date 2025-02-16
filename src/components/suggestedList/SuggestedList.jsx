import React, { useContext } from "react";
import "../../assets/fonts/font.css";
import { HomeContext } from "../../contexts/HomeContext.jsx";
import { BeatLoader } from "react-spinners";
import HouseCard from "../HouseCard.jsx";
import { Link } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './sliderChanges.css'
function SuggestedList() {
  // import context values from context file
  const { Loading, Data } = useContext(HomeContext);
// settings for slider
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  initialSlide: 0,
  rtl: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
  return (
    <div className="mx-4 my-10 ">
      {/* header of carousel */}
      <div className="flex items-center justify-between relative">
        <div>
          <h1 className="text-[23px] font-bold font ">
            اجاره آپارتمان روزانه
          </h1>
          <p className="font mt-1">اقامتِ با کیفیت تو پایتخت با ما</p>
        </div>
      </div>
      {/* loading */}
      {Loading && <BeatLoader color="#6163c0" className="mt-16 text-center" />}
      {/* home suggested */}
      <Slider {...settings} className="mx-3">
        {Data.map((item) => (
          <Link to= {`/details/${item.id}`} key={item.id}>
            <HouseCard details={item} />
          </Link>
        ))}
      </Slider>
    </div>
  );
}

export default SuggestedList;
