import React, { useRef, useState } from "react";
import styled from "styled-components";

import SwiperMain from "../components/SwiperMain";
import SwiperTitle from "../components/SwiperTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const Main = () => {
  return (
    <Padding>
      <h1 style={{ color: "white" }}>홈</h1>
      <hr style={{ border: "1px solid white" }} />
      <div style={{ color: "white" }}>
        <SwiperTitle></SwiperTitle>
      </div>
      <section>
        <ButtonUL>
          <li>
            <Button>전체</Button>
          </li>
          <li>
            <Button>영화</Button>
          </li>
          <li>
            <Button>TV프로그램</Button>
          </li>
        </ButtonUL>
      </section>
      <div style={{ color: "white" }}>
        <SwiperMain></SwiperMain>
      </div>
      {/* 물어볼거 3: 여기 밑에 추가하면 이상하게 됨 */}
      <div style={{ color: "white" }}>
        <SwiperMain></SwiperMain>
      </div>
      <div style={{ color: "white" }}>
        <SwiperMain></SwiperMain>
      </div>
    </Padding>
  );
};

export default Main;
const Padding = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  background-color: black;
`;

const ButtonUL = styled.ul`
  display: flex;
  justify-content: flex-start;
  padding: 10px 0px;

  & li {
    margin: 0px 8px 0px 0px;
  }
`;

const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  position: relative;
  background: rgb(0, 0, 0);
  color: rgb(132, 134, 141);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0px;
  text-decoration: none;
  line-height: 20px;
  padding: 8px 16px;
  border: 2px solid rgb(46, 47, 49);
  border-radius: 24px;

  :focus {
    background: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    border: 2px solid rgb(255, 255, 255);
  }
`;
