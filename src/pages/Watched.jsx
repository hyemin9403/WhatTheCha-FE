import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator as movieActions } from "../redux/modules/movie";
import SwiperGrid from "../components/SwiperGrid";

const Watched = () => {
  const dispatch = useDispatch();
  const wantList = useSelector((state) => state.movie.movie_list);
  console.log(wantList);

  React.useEffect(() => {
    dispatch(movieActions.getWatchedM());
  }, []);

  return (
    <Padding>
      <h2>다 본 작품</h2>
      {/* <SwiperGrid list={listTop10}></SwiperGrid> */}
    </Padding>
  );
};

export default Watched;

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
