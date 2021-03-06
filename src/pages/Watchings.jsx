import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator as movieActions } from "../redux/modules/movie";
import Spinner from "../components/Spinner";

import SwiperGrid from "../components/SwiperGrid";

const Watchings = () => {
  const dispatch = useDispatch();
  const watchingList = useSelector((state) => state.movie.movie_list);
  console.log(watchingList);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    dispatch(movieActions.getWatchingsM());

    let timer = setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  if (loading) {
    return <Spinner is_dim={true} />;
  } else {
    return (
      <Padding>
        <h2>이어보기</h2>
        {/* <SwiperGrid list={listTop10}></SwiperGrid> */}
      </Padding>
    );
  }
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
