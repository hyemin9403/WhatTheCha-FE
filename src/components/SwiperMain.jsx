import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/SwiperMain.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const SwiperMain = () => {
  return (
    <div>
      <h2>왓고리즘</h2>
      {/* 물어볼거 2 media쿼리로 사이즈는 유지하고 개수만 줄어들도록 해야함. @@이하면 6개 보여주고 */}
      <Swiper
        className="mySwiper main"
        // install Swiper modules
        modules={[Pagination, Navigation]}
        spaceBetween={10}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          // when window width is >= 640px
          500: {
            width: 500,
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          // when window width is >= 768px
          896: {
            width: 896,
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          993: {
            width: 993,
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          1135: {
            width: 1135,
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          1551: {
            width: 1551,
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          1648: {
            width: 1648,
            slidesPerView: 8,
            slidesPerGroup: 8,
          },
        }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 10</SwiperSlide>
        <SwiperSlide>Slide 11</SwiperSlide>
        <SwiperSlide>Slide 12</SwiperSlide>
        <SwiperSlide>Slide 13</SwiperSlide>
        <SwiperSlide>Slide 14</SwiperSlide>
        <SwiperSlide>Slide 15</SwiperSlide>
        <SwiperSlide>Slide 16</SwiperSlide>
        <SwiperSlide>Slide 17</SwiperSlide>
        <SwiperSlide>Slide 18</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperMain;
