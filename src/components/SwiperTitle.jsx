import React, { useRef, useState } from "react";
import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { SvgPrevBtn, SvgNextBtn } from "../img/main/svg_main";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/SwiperTitle.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const SwiperTitle = (props) => {
  const swiperRef = React.useRef(null);

  const list = props.list;
  return (
    <Container>
      <div>
        <Swiper
          className="mySwiper title"
          // install Swiper modules
          modules={[Pagination, Navigation]}
          spaceBetween={10}
          // autoHeight={true}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            // when window width is >= 640px
            991: {
              // width: 991,
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1551: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
        >
          {list &&
            list.map((movie) => {
              return (
                <>
                  <SwiperSlide
                    key={movie.movieId}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <TextContainer>
                      <span>{movie.status}</span>
                      <h4>{movie.movieName}</h4>
                      <p>{movie.detail_text}</p>
                    </TextContainer>
                    <img src={movie.card_image} alt="" />
                  </SwiperSlide>
                </>
              );
            })}
        </Swiper>
      </div>
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

export default SwiperTitle;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  span {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0px;
    text-decoration: none;
    line-height: 18px;
    color: rgb(255, 255, 255);
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h4 {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 26px;
    color: rgb(255, 255, 255);
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 24px;
    color: rgb(186, 186, 193);
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const TextContainer = styled.div`
  margin-bottom: 5px;
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
