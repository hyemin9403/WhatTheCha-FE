import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { SvgPrevBtn, SvgNextBtn } from "../img/main/svg_main";

import styled from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/SwiperMain.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const SwiperTop10 = ({ listTop10 }) => {
  const swiperRef = React.useRef(null);

  return (
    <Container>
      <Swiper
        style={{ height: "30rem" }}
        className="mySwiper main"
        // install Swiper modules
        slidesPerView={7}
        slidesPerGroup={7}
        observer={true}
        observeParents={true}
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        // 루프 키면 새로고침 했을때 왜 1이아니라 6부터 나올까...
        // loop={true}
        // loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        ref={swiperRef}
        breakpoints={{
          // when window width is >= 640px
          500: {
            //width: 500,
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          // when window width is >= 768px
          896: {
            //width: 896,
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          993: {
            //width: 993,
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1135: {
            //width: 1135,
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          1551: {
            //width: 1551,
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          1648: {
            //width: 1648,
            slidesPerView: 7,
            slidesPerGroup: 7,
          },
        }}
      >
        {listTop10 &&
          listTop10.map((movie, i) => {
            return (
              <SwiperSlide key={movie.movieId}>
                <RankNumber>{i + 1}</RankNumber>
                <img
                  className="img-top10"
                  style={{ margin: "0 0 0 2rem" }}
                  src={movie.card_image}
                  alt=""
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div className="test">
        <Prev onClick={() => swiperRef.current.swiper.slidePrev()}>
          <SvgPrevBtn />
        </Prev>
        <Next onClick={() => swiperRef.current.swiper.slideNext()}>
          <SvgNextBtn />
        </Next>
      </div>
    </Container>
  );
};

export default SwiperTop10;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  &:hover {
    .test {
      div:last-child {
        opacity: 1;
      }
    }
  }
`;

const RankNumber = styled.span`
  display: block;
  position: absolute;
  top: -3px;
  left: 0px;
  z-index: 3;
  color: rgb(255, 255, 255);
  text-shadow: rgb(0 0 0 / 20%) 0px -2px 4px;
  user-select: none;
  font-family: "Watcha Sans", Roboto, "Noto Sans KR", "Apple SD Gothic Neo",
    "Nanum Gothic", "Malgun Gothic", sans-serif;
  font-size: 5.6rem;
  font-weight: 800;
  letter-spacing: 0px;
  line-height: 56px;
`;

const Prev = styled.div`
  z-index: 101;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: -2rem;
  width: 2vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 0.2s;
  &:hover {
    opacity: 1;
  }
`;
const Next = styled.div`
  z-index: 101;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: -2.5rem;
  width: 2vw;
  height: 100%;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
