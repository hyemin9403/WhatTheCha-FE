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

const SwiperParty = (props) => {
  const list = props.list;

  return (
    <Container>
      <h2>왓챠파티</h2>
      <h3>혼자 보기 아쉬울 때, 같이 봐요 우리!</h3>
      <div>
        <Swiper
          style={{ height: "27rem" }}
          className="mySwiper title"
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
            991: {
              // width: 991,
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            1551: {
              slidesPerView: 4,
              slidesPerGroup: 4,
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
                      height: "21rem",
                    }}
                  >
                    <img src={movie.card_image} alt="" />
                  </SwiperSlide>
                  <div>{movie.partyTitle}</div>
                  <div>{movie.movieName}</div>
                  <div>{movie.host}</div>
                </>
              );
            })}
        </Swiper>
      </div>
    </Container>
  );
};

export default SwiperParty;

const Container = styled.div`
  h3 {
    color: rgb(186, 186, 193);
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 20px;
  }
`;
