import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator as movieActions } from "../redux/modules/movie";
import Spinner from "../components/Spinner";

import SwiperGrid from "../components/SwiperGrid";

const Wishes = () => {
  const dispatch = useDispatch();
  const wantList = useSelector((state) => state.movie.movie_list.wantList);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    dispatch(movieActions.getWishesM());

    let timer = setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  if (loading) {
    return <Spinner is_dim={true} />;
  } else {
    return (
      <Padding>
        <h2>{sessionStorage.getItem("profileName")}님이 보고싶어요한 작품</h2>
        <SwiperGrid list={wantList}></SwiperGrid>
      </Padding>
    );
  }
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
