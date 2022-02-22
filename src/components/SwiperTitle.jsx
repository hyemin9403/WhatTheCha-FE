import React, { useRef, useState } from "react";
import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/SwiperTitle.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const SwiperTitle = (props) => {
  const list = props.list;
  return (
    <Container>
      <div>
        <Swiper
          style={{ height: "32rem" }}
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
                  <TextContainer>
                    <span>{movie.status}</span>
                    <h4>{movie.movieName}</h4>
                    <p>{movie.detail_text}</p>
                  </TextContainer>
                  <SwiperSlide
                    key={movie.movieId}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <img src={movie.card_image} alt="" />
                  </SwiperSlide>
                </>
              );
            })}
        </Swiper>
      </div>
    </Container>
  );
};

export default SwiperTitle;

const Container = styled.div`
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
