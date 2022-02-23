import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import SwiperMain from "../components/SwiperMain";
import SwiperTitle from "../components/SwiperTitle";
import SwiperTop10 from "../components/SwiperTop10";
import SwiperParty from "../components/SwiperParty";
import SwiperOnly from "../components/SwiperOnly";

import { actionCreator as movieActions } from "../redux/modules/movie";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const Main = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(movieActions.allListM());
  }, []);

  const movie_list = useSelector((state) => state.movie.movie_list);
  const title_list = useSelector((state) => state.movie.movie_list.titleList);
  const exclusive_list = useSelector(
    (state) => state.movie.movie_list.exclusiveList
  );
  const watcha_party_list = useSelector(
    (state) => state.movie.movie_list.watchaPartyList
  );
  const listTop10 = useSelector((state) => state.movie.movie_list.listTop);
  const listAction = useSelector(
    (state) => state.movie.movie_list?.categoryList?.action_war
  );
  const listComedy = useSelector(
    (state) => state.movie.movie_list?.categoryList?.comedy_adventure__biography
  );
  const listDrama = useSelector(
    (state) => state.movie.movie_list?.categoryList?.drama
  );
  const listFantasy = useSelector(
    (state) => state.movie.movie_list?.categoryList?.fantasy_crime_romance_etc
  );

  // console.log("listComedy", listComedy);

  return (
    <Padding>
      <HomeContainer>
        <h1 style={{ color: "white" }}>홈</h1>
        <Hr />
      </HomeContainer>

      <SwiperContainer>
        <SwiperTitle list={title_list}></SwiperTitle>
      </SwiperContainer>
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
      <SwiperContainer>
        <h2>왓고리즘</h2>
        <SwiperMain list={listAction} _loop={false}></SwiperMain>
      </SwiperContainer>
      <SwiperContainer>
        <h2>왓챠 영화 TOP 10</h2>
        <SwiperTop10 listTop10={listTop10} _loop={false}></SwiperTop10>
      </SwiperContainer>
      <SwiperContainer>
        <h2>이어보기</h2>
        <SwiperMain list={listComedy} _loop={false}></SwiperMain>
      </SwiperContainer>
      <SwiperContainer>
        <SwiperParty list={watcha_party_list}></SwiperParty>
      </SwiperContainer>
      <SwiperContainer>
        <h2>오직 왓챠에서!</h2>
        <SwiperOnly list={exclusive_list}></SwiperOnly>
      </SwiperContainer>
    </Padding>
  );
};

export default Main;
const Padding = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  background-color: black;

  h2 {
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 26px;
    margin-bottom: 5px;
  }
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

const HomeContainer = styled.div`
  margin: 4rem 0px 1.8rem;

  h1 {
    color: rgb(255, 255, 255);
    margin: 0px 0px 12px;
    font-size: 30px;
    font-weight: 800;
    letter-spacing: 0px;
    line-height: 40px;
  }
`;

const Hr = styled.hr`
  background-color: rgb(27, 28, 29);
  width: 100%;
  height: 1px;
  padding: 0px;
  border: none;
  margin: 0px;
`;

const SwiperContainer = styled.div`
  color: white;
  margin-bottom: 3rem;
`;
