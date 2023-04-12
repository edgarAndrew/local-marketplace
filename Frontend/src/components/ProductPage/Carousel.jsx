import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./carousel.css";

// import required modules
import { Navigation } from "swiper";

export default function HomeCarousel() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper homeSwiper"
      >
        <SwiperSlide className="swiperSlide"><img src="https://picsum.photos/id/1/200/300" alt="" /></SwiperSlide>
        <SwiperSlide className="swiperSlide"><img src="https://picsum.photos/id/1/200/300" alt="" /></SwiperSlide>
        <SwiperSlide className="swiperSlide"><img src="https://picsum.photos/id/1/200/300" alt="" /></SwiperSlide>
        <SwiperSlide className="swiperSlide"><img src="https://picsum.photos/id/1/200/300" alt="" /></SwiperSlide>
        <SwiperSlide className="swiperSlide"><img src="https://picsum.photos/id/1/200/300" alt="" /></SwiperSlide>
        <SwiperSlide className="swiperSlide"><img src="https://picsum.photos/id/1/200/300" alt="" /></SwiperSlide>
        <SwiperSlide className="swiperSlide"><img src="https://picsum.photos/id/1/200/300" alt="" /></SwiperSlide>
        <SwiperSlide className="swiperSlide"><img src="https://picsum.photos/id/1/200/300" alt="" /></SwiperSlide>
        <SwiperSlide className="swiperSlide"><img src="https://picsum.photos/id/1/200/300" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
