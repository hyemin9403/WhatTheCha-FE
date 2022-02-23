import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { history } from "../redux/configureStore";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/Landing.css";

// import required modules
import { Mousewheel, Pagination, Navigation } from "swiper";
import Spinner from "../components/Spinner";

const Landing = () => {
  return (
    <div>
      <Swiper
        className="mySwiper landing"
        // install Swiper modules
        slidesPerView={1}
        modules={[Navigation, Pagination, Mousewheel]}
        mousewheel={true}
        navigation={true}
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
      >
        {/* 로컬에 있는 이미지 삽입하려 할 경우 에러나서 왓챠 src 가져옴 */}
        <SwiperSlide>
          <Header id="layer1">
            <img
              src="https://an2-img.amz.wtchn.net/image/v2/6AF4PWk5LWGhVy264_GsoQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZeU5USXlNakExTURjMU1ESXhNemt4TWlKOS5jZUV1c3IwckFiVnBHb29sRi1xSjRMNG1xZ2FuejV6cE1ydmxrRDZrQjV3"
              alt=""
            />
            <section>
              <h3>영화, 드라마, 예능, 다큐멘터리를 무제한으로</h3>
              <h4>
                매주 5백 여편의 신작이 업데이트 되며, 추가 요금은 전혀 없어요.
              </h4>
              <a href="" onClick={() => history.push("/signup")}>
                2주 무료 이용 시작
              </a>
              <div>
                <button></button>
              </div>
            </section>
          </Header>
        </SwiperSlide>
        <SwiperSlide>
          <Header>
            <img
              src="https://an2-img.amz.wtchn.net/image/v2/wurpJweGDbvOiYLTt5bgeQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqRXZjV2czYm1ZNGQzbGlhVzlvYW1wc1luZDNjbTBpZlEuRDNrUFAzWEk1U2ZzaTRoMlVCd2xpODZUZVUxTTNyTTVLTW9NZm5KcG14cw"
              alt=""
            />
            <section>
              <h3>여럿이 함께, 하나의 이용권으로</h3>
              <h4>
                동시 4개 기기에서 재생이 가능한 프리미엄 이용권을 이용해보세요.
              </h4>
              <a href="" onClick={() => history.push("/signup")}>
                2주 무료 이용 시작
              </a>
              <div>
                <button></button>
              </div>
            </section>
          </Header>
        </SwiperSlide>
        <SwiperSlide>
          <Header>
            <img
              src="https://an2-img.amz.wtchn.net/image/v2/1FqiEHUGtMCX6KxZUpR3nA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZeE5UVTFNamM0TWpRNU16azBPVFk1T0NKOS5uUW1FR3ZVV09wLU0tTmx0RW5JMUsycmxUVm5jbDVHZ3Vaalc3UUNuTVUw"
              alt=""
            />
            <section>
              <h3>이제 TV로 최고의 화질을 경험하세요</h3>
              <h4>최대 Ultra HD 4K 해상도로 생생한 감동을 느껴보세요.</h4>
              <a href="" onClick={() => history.push("/signup")}>
                2주 무료 이용 시작
              </a>
              <div>
                <button></button>
              </div>
            </section>
          </Header>
        </SwiperSlide>
        <SwiperSlide>
          <Header>
            <img
              src="https://an2-img.amz.wtchn.net/image/v2/Ds9xW3qZbanR1wBgviHcTw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZME1qRTFNREkzTVRreU56azRNekU0T1NKOS5NQzkwVlpZSE5nYjNxZ1UzaVlPNE9QazVnVGhjeldVLXF4cHM1UDhtVi1j"
              alt=""
            />
            <section>
              <h3>이동 중에도 감상을 멈추지 마세요</h3>
              <h4>보고 싶은 콘텐츠를 다운로드하여 오프라인으로 즐기세요.</h4>
              <a href="" onClick={() => history.push("/signup")}>
                2주 무료 이용 시작
              </a>
              <div>
                <button></button>
              </div>
            </section>
          </Header>
        </SwiperSlide>
        <SwiperSlide>
          <Header>
            <img
              src="https://an2-img.amz.wtchn.net/image/v2/XPZ5X2P8u1fukowR9owAeQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZeU56QXlNREk0TWpZM01ETTBNamMwTXlKOS5aTGRaMTJ6WE1adU1uelBzX0htNnZlN1E5SGlZU09hcTkzV3NXeG9EcWRB"
              alt=""
            />
            <section>
              <h3>스마트폰, 태블릿, TV, PC, 크롬캐스트, Android TV에서</h3>
              <h4>10만여 편의 작품을 무제한 스트리밍하세요.</h4>
              <a href="" onClick={() => history.push("/signup")}>
                2주 무료 이용 시작
              </a>
              <div>
                <button
                  style={{
                    transform: "rotate3d(0, 0, 1, 90deg)",
                    cursor: "pointer",
                  }}
                ></button>
              </div>
            </section>
          </Header>
          <div>
            <Footer>
              <span className="css-loei9u">
                <a
                  href="/zendesk/login"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ fontWeight: "bold" }}
                >
                  고객센터(이용 및 결제 문의)
                </a>
                &nbsp;&nbsp;
                <a
                  href="mailto:cs@watcha.co.kr"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  cs@watcha.co.kr
                </a>
                <span> • </span>02-515-9985 (유료) &nbsp;&nbsp;
                <span> / </span>
                &nbsp;&nbsp;
                <span style={{ fontWeight: "bold" }}>제휴 및 대외 협력</span>
                &nbsp;&nbsp;
                <a
                  href="https://watcha.team/contact"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  https://watcha.team/contact
                </a>
              </span>
              <ul className="css-0">
                <li className="css-sp1qhw">
                  주식회사 왓챠&nbsp;<span>/</span>&nbsp;
                </li>
                <li className="css-sp1qhw">
                  대표 박태훈&nbsp;<span>/</span>&nbsp;
                </li>
                <li className="css-sp1qhw">
                  서울특별시 서초구 강남대로 343 신덕빌딩 3층&nbsp;
                  <span>/</span>&nbsp;
                </li>
                <li className="css-sp1qhw">
                  사업자등록번호 211-88-66013&nbsp;<span>/</span>&nbsp;
                </li>
                <li className="css-sp1qhw">
                  통신판매업 신고번호 제 2019-서울서초-0965호&nbsp;
                  <span>/</span>&nbsp;
                </li>
                <li className="css-sp1qhw">
                  대표번호 02-515-9985&nbsp;<span>/</span>&nbsp;
                </li>
                <li className="css-shc8b1" style={{ fontWeight: "bold" }}>
                  개인정보 처리 방침
                </li>
                <span>/</span>
                <li className="css-shc8b1" style={{ fontWeight: "bold" }}>
                  청소년 보호정책
                </li>
              </ul>
            </Footer>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Landing;

const Header = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
  overflow: hidden;
  color: white;

  img {
    object-fit: cover;
    opacity: 0.5;
  }

  section {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-family: "Roboto", sans-serif;
  }

  section h3 {
    color: #fff;
    font-size: 3.4722222222222223vw;
    font-weight: 400;
    letter-spacing: -0.24305555555555555vw;
    line-height: 4.375vw;
    white-space: pre-wrap;
    margin-bottom: 1.1111111111111112vw;
  }

  section h4 {
    color: #fff;
    font-size: 1.5277777777777777vw;
    font-weight: 400;
    line-height: 2.2916666666666665vw;
    margin-bottom: 3.75vw;
    opacity: 0.65;
  }

  section a {
    display: inline-block;
    background-color: #f82f62;
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;

    letter-spacing: -0.1px;
    line-height: 51px;
    text-align: center;
    width: 100%;
    height: 52px;
    border-radius: 40px;
    font-size: 1.3888888888888888vw;
    font-weight: 700;
    letter-spacing: -0.0625vw;
    line-height: 4.166666666666666vw;
    width: auto;
    min-width: 13.125vw;
    height: 4.166666666666666vw;
    padding: 0 1.5625vw;
    border-radius: 2.083333333333333vw;
  }

  div {
    position: absolute;
    top: 40rem;
    left: 50%;
    z-index: 100;
    transform: translate(-50%, 0);
  }

  div button {
    display: inline-block;
    transform: rotate3d(0, 0, 1, -90deg);
    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU2LjMgKDgxNzE2KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5BcnRib2FyZDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJBcnRib2FyZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgcG9pbnRzPSIxOS42OTM2MTY4IDExLjIxODg4IDQuOTU1ODk4OTUgMTEuMjE4ODggMTEuMTk2NzA3NCAxNy4zOTU0MTg5IDkuNDgxNDQgMTkuMDkyNDk2OCAwLjMgMTAuMDA1NjQyMSAyLjAxNTI2NzM3IDguMzA4NTY0MjEgMi4wMTU4NzM2OCA4LjMwOTE3MDUzIDkuNDgxNDQgMC45MiAxMS4xOTY3MDc0IDIuNjE3MDc3ODkgNC45NTU4OTg5NSA4Ljc5MzYxNjg0IDE5LjY5MzYxNjggOC43OTM2MTY4NCI+PC9wb2x5Z29uPgogICAgPC9nPgo8L3N2Zz4=)
      center no-repeat;
    background-size: 1.7361111111111112vw 1.7361111111111112vw;
    width: 3.3333333333333335vw;
    height: 3.3333333333333335vw;
    border: 1px solid rgba(255, 255, 255, 0.8);
    border-radius: 50%;
  }
`;

const Footer = styled.div`
  position: absolute;
  right: 0;
  bottom: 2vw;
  left: 0;
  z-index: 100;
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.8333333333333334vw;
  font-weight: 400;
  letter-spacing: -0.034722222222222224vw;
  text-align: center;
  padding: 0 3.4722222222222223vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & a {
    color: white;
  }

  & ul {
    display: flex;
    justify-content: center;
  }
`;
