import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator as movieActions } from "../redux/modules/movie";

import SwiperGrid from "../components/SwiperGrid";

const Wishes = () => {
  const dispatch = useDispatch();
  const listTop10 = useSelector((state) => state.movie.movie_list.listTop);

  React.useEffect(() => {
    dispatch(movieActions.allListM());
  }, []);

  return (
    <Padding>
      <h2>학새님이 보고싶어요한 작품</h2>
      <SwiperGrid list={listTop10}></SwiperGrid>
    </Padding>
  );
};

export default Wishes;
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
