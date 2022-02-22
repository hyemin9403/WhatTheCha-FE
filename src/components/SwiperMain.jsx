import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { DetailCard } from "./index";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/SwiperMain.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const SwiperMain = (props) => {
  const list = props.list;
  const { _loop } = props;
  return (
    <div>
      <Swiper
        className="mySwiper main"
        // install Swiper modules
        slidesPerView={8}
        slidesPerGroup={8}
        observer={true}
        observeParents={true}
        modules={[Pagination, Navigation]}
        spaceBetween={10}
        loop={_loop}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          // when window width is >= 640px
          500: {
            //width: 500,
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          // when window width is >= 768px
          896: {
            //width: 896,
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          993: {
            //width: 993,
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          1135: {
            //width: 1135,
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          1551: {
            //width: 1551,
            slidesPerView: 7,
            slidesPerGroup: 7,
          },
          1648: {
            //width: 1648,
            slidesPerView: 8,
            slidesPerGroup: 8,
          },
        }}
      >
        {list &&
          list.map((movie) => {
            return (
              <SwiperSlide key={movie.movieId}>
                <img src={movie.card_image} alt="" />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div>
        <DetailCard/>
      </div>
    </div>
  );
};

export default SwiperMain;
