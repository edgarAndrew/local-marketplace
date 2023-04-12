import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { currentURL } from "../../axios";
import "./carousel.css";

// import required modules
import { Navigation } from "swiper";

export default function HomeCarousel({images}) {
  
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper homeSwiper"
      >
        {
          images.map((ele)=>{
            if (ele.image)
              return <SwiperSlide className="swiperSlide"><img src={`${currentURL}/${ele.image}`} alt="image" /></SwiperSlide>
            else
              return <SwiperSlide className="swiperSlide"><img src={ele} alt="" /></SwiperSlide>
          })
        }
      </Swiper>
    </>
  );
}
