import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator as movieActions } from "../redux/modules/movie";
import SwiperGrid from "../components/SwiperGrid";

const Ratings = () => {
  const dispatch = useDispatch();
  const listTop10 = useSelector((state) => state.movie.movie_list);

  React.useEffect(() => {
    dispatch(movieActions.getRatingsM());
  }, []);

  return (
    <Padding>
      <h2>평가한 작품</h2>
      <SwiperGrid list={listTop10}></SwiperGrid>
    </Padding>
  );
};

export default Ratings;

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
    margin-bottom: 4rem;
  }
`;
