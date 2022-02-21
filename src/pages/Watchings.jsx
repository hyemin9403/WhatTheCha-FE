import React from "react";
import styled from "styled-components";

import SwiperMain from "../components/SwiperMain";

const Watchings = () => {
  return (
    <Padding>
      <h2>이어보기</h2>
      <SwiperMain _loop={false}></SwiperMain>
    </Padding>
  );
};

export default Watchings;

const Padding = styled.div`
  padding: 32px 40px;
  background-color: black;

  margin-bottom: 8rem;

  h2 {
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 26px;
    margin-bottom: 5px;
  }
`;
