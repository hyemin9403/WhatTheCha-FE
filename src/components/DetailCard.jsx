import React from "react";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";

import {
  SvgPlay,
  SvgWith,
  SvgBeta,
  SvgPlus,
  SvgShared,
  SvgCancel,
} from "../img/card/svg_card";

import { actionCreator as movieActions } from "../redux/modules/movie";
import { useDispatch } from "react-redux";

const DetailCard = ({ onClose, movieId }) => {
  const dispatch = useDispatch();
  const [is_type, setBasic] = React.useState("info");
  const [is_class, setClass] = React.useState("");

  const changeBasic = (e) => {
    is_type === "info" ? setBasic("detail") : setBasic("info");
    //e.target.parentElement.children.classlist.remove("active");
    //console.log(e.target.parentNode.childNodes)
  };

  const d = useSelector((state) => state.movie.detail_movie_list);

  // 문자열 파싱하는거 왜 잘 안되지...
  // let director = [];
  // JSON.stringify(d.director).map((cur) => {
  //   return director.push(cur);
  // });
  const director = d;
  const actors = JSON.stringify(d.actors);
  console.log("배열", director);
  console.log(typeof director);
  // .replace(/\"/gi, "")
  // .replace(/\[/gi, "")
  // .replace(/\]/gi, "");

  console.log(actors);
  //["황정민","차승원","한지혜","백성현","김창완","송영창"]
  return (
    <StyleCard className="on-enter">
      <div className="card-movie">
        <div className="card-content">
          <button
            className="btn-off"
            onClick={() => {
              onClose(false);
            }}
          >
            <SvgCancel />
          </button>
          <CardBackgorund>
            <div
              className="back-img"
              style={{ backgroundImage: `url(${d.back_image})` }}
            ></div>
            <div className="back-deco-side"></div>
            <div className="back-deco-img"></div>
          </CardBackgorund>
          <div className="movie-title">
            <TitleImage src={d.title_image} />
          </div>
          <MovieEval>
            <div className="movie-eval">
              <div className="movie-eval-title">예상 별점</div>
              <div className="movie-eval-score">4.6</div>
            </div>
            <div className="movie-eval">
              <div className="movie-eval-title">평균 별점</div>
              <div className="movie-eval-score">4.6</div>
            </div>
          </MovieEval>
          {(() => {
            if (is_type === "info") {
              return (
                <CardInfo>
                  <div
                    style={{
                      height: "11rem",
                      width: "auto",
                      overflow: "hidden",
                    }}
                  >
                    <p className="card-info-title" style={{ width: "43rem" }}>
                      {JSON.stringify(d.detail_text)}
                    </p>
                  </div>
                  <ul className="card-info-ul">
                    <li>
                      <span className="card-info-subtitle">감독</span>
                      {/* <span>{d.director}</span> */}
                    </li>
                    <li>
                      <span className="card-info-subtitle">출연</span>
                      {d?.actors?.map((cur) => {
                        return (
                          <span className="card-info-director">{cur}</span>
                        );
                      })}
                      {/* <span>{d.actors}</span> */}
                    </li>
                    <li>
                      <span className="card-info-subtitle">개요</span>
                      <div>
                        <span>{d.category}</span>
                        <span>{d.country}</span>
                        <span>{d.make_year}</span>
                      </div>
                    </li>
                  </ul>
                  <CardBtnGroup>
                    <button className="btn-play">
                      <SvgPlay />
                      <span>재생</span>
                    </button>
                    <button className="btn-with">
                      <div className="btn-svg">
                        <SvgWith />
                      </div>
                      <div className="btn-deco">
                        <SvgBeta />
                      </div>
                      <span>같이보기</span>
                    </button>
                    <button
                      className="btn-text"
                      onClick={() => {
                        dispatch(movieActions.addWishesM(movieId));
                      }}
                    >
                      <SvgPlus />
                      <span>보고싶어요</span>
                    </button>
                    <button className="btn-text">
                      <SvgShared />
                      <span>공유하기</span>
                    </button>
                  </CardBtnGroup>
                  <CardStar>
                    <p>이미 본 작품인가요?</p>
                  </CardStar>
                </CardInfo>
              );
            } else if (is_type === "detail") {
              return (
                <CardDetail>
                  <div className="detail-left">
                    <div className="movie-staff">
                      <span className="staff-posit">감독</span>
                      <ul className="staff-gorup">
                        <li className="staff-list">{d.director}</li>
                      </ul>
                    </div>
                    <div className="movie-staff">
                      <span className="staff-posit">배우</span>
                      <ul className="staff-gorup">
                        {d.actors.map((actor) => {
                          return <li className="staff-list">{actor}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="detail-right">
                    <div className="detail-star"></div>
                    <div></div>
                  </div>
                </CardDetail>
              );
            }
            return null;
          })()}
        </div>
        <CardMenu>
          <li className="active" onClick={changeBasic}>
            기본정보
          </li>
          <li onClick={changeBasic}>상세정보</li>
          <li>비슷한 작품</li>
        </CardMenu>
      </div>
    </StyleCard>
  );
};
// off 일때
// height: 0px;
// opacity: 0.01;
// 0% {
//   opacity: 0;
// }
// 100% {
//   opacity: 1;
// }
const cardView = keyframes`
  0% {
    opacity: 0;
    height: 0;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    height: 35.1562vw;
  }
`;

const StyleCard = styled.div`
  position: relative;
  margin-top: 16px;
  padding-left: 4%;
  height: 35.1562vw;
  animation: 0.5s ${cardView} ease-out;
  .card-movie {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .btn-off {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: auto;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.76562vw;
    height: 4.76562vw;
    cursor: pointer;
    svg {
      width: 2.5vw;
      height: 2.5vw;
    }
  }
`;
const CardBackgorund = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 1;
  width: 61.5625%;
  height: 100%;
  overflow: hidden;
  .back-img {
    position: absolute;
    inset: -2px 0px 0px 2px;
    background-image: url(https://an2-img.amz.wtchn.net/image/v2/521LbcEHAwGoi2SJTz2hpw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1USTRNSGczTWpCeE9EQWlYU3dpY0NJNklpOTJNaTl6ZEc5eVpTOXBiV0ZuWlM4eE5qRTFOemszTXpVMU5EZ3dNVEF3TVRrekluMC5CalhZX1hmY3FCLWhUbkQ5Y0lNOHU3UldJdnF6dVdlQXdDeklUbFhMM2pJ);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .back-deco-side {
    position: absolute;
    top: 0px;
    left: 0px;
    background-image: linear-gradient(
      to right,
      rgb(0, 0, 0) 3%,
      rgba(0, 0, 0, 0.7) 26%,
      rgba(0, 0, 0, 0.45) 50%,
      rgba(0, 0, 0, 0.2) 75%,
      rgba(0, 0, 0, 0) 100%
    );
    width: 45.6852%;
    height: 100%;
  }
  .back-deco-img {
    position: absolute;
    inset: 0px;
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(0.5, 0, 0.1, 1) 0s;
  }
`;

const MovieEval = styled.div`
  display: flex;
  .movie-eval {
    position: relative;
    display: flex;
    vertical-align: top;
    line-height: 1;
    border: 0.078125vw solid rgb(255, 255, 255);
    background-color: #ffffff;
  }
  .movie-eval + .movie-eval {
    margin: 0 0 0 0.625vw;
  }
  .movie-eval-title {
    padding: 0.078125vw 0.625vw 0.234375vw 0.546875vw;
    display: inline-block;
    font-size: 0.9375vw;
    font-weight: 700;
    color: rgb(255, 255, 255);
    letter-spacing: -0.046875vw;
    line-height: 1.75vw;
    background-color: #000000;
  }
  .movie-eval-score {
    width: 2.65625vw;
    font-size: 1.17188vw;
    font-weight: 700;
    font-family: Roboto, sans-serif;
    color: rgb(18, 18, 24);
    text-align: center;
    letter-spacing: -0.0078125vw;
    line-height: 2.03125vw;
  }
`;

const CardInfo = styled.div`
  .card-info-title {
    color: rgba(255, 255, 255, 0.8);
    width: 32.8125vw;
    margin-top: 0.15625vw;
    font-size: 1.17188vw;
    font-weight: 400;
    letter-spacing: -0.03125vw;
    line-height: 1.875vw;
  }
  .card-info-ul {
    letter-spacing: -0.03125vw;
    margin-top: 0.9375vw;
    li {
      margin-bottom: 0.15625vw;
      font-size: 1.01562vw;
      color: rgba(255, 255, 255, 0.5);
      line-height: 1.40625vw;
      span {
        font-weight: 400;
      }
      .card-info-subtitle {
        margin-right: 0.78125vw;
        padding-right: 0.5vw;
        font-weight: 700;
      }
      .card-info-director:after {
        content: ",";
        margin-right: 0.1vw;
      }
      .card-info-director:last-child:after {
        content: "";
        margin-right: 0;
      }
      div {
        position: relative;
        display: inline-block;
        span:after {
          margin: 0 0.5vw;
          display: inline-block;
          content: "";
          width: 0.2rem;
          height: 1.4rem;
          background-color: rgba(255, 255, 255, 0.5);
        }
      }
    }
  }
`;

const CardDetail = styled.div`
  padding-top: 0.625vw;
  display: flex;
  .detai-left {
    padding: 0px 3.90625vw 0px 0px;
    min-width: 16.0156vw;
    display: block;
    box-sizing: content-box;
  }
  .detai-right {
    padding: 0px 3.90625vw 0px 0px;
    position: relative;
    flex: 1 1 0%;
  }
  .movie-staff + .movie-staff {
    margin-top: 0.9375vw;
  }
  .staff-posit {
    margin-bottom: 0.234375vw;
    font-size: 1.25vw;
    color: rgba(255, 255, 255, 0.7);
  }
  .staff-gorup {
    margin: 0px;
    margin-block: 0px;
    margin-inline: 0px;
    padding: 0px;
    padding-inline-start: 0px;
    list-style-type: none;
  }
  .staff-list {
    font-size: 1.01562vw;
    line-height: 1.5625vw;
    color: rgba(255, 255, 255, 0.5);
  }
`;

const CardBtnGroup = styled.div`
  position: relative;
  z-index: 101;
  margin-top: 1.5625vw;
  max-width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  .btn-play {
    margin-right: 0.46875vw;
    padding: 0.546875vw 1.40625vw 0.625vw 1.25vw;
    background-color: rgb(248, 47, 98);
    border-radius: 0.3125vw;
    font-size: 1.25vw;
    font-weight: 700;
    color: rgb(255, 255, 255);
    letter-spacing: -0.03125vw;
    line-height: 1.95312vw;
    svg {
      display: inline-block;
      float: left;
      width: 1.875vw;
      height: 1.875vw;
      margin-right: 0.625vw;
    }
  }
  .btn-with {
    margin-right: 1.32812vw;
    padding: 0.3125vw 1.17188vw 0.234375vw 0.9375vw;
    position: relative;
    background-color: rgba(255, 255, 255, 0.09);
    border-radius: 0.3125vw;
    color: rgb(255, 255, 255);
    cursor: pointer;
    svg {
      display: block;
      width: 100%;
      height: 100%;
    }
    .btn-svg {
      display: inline-block;
      float: left;
      width: 2.57812vw;
      height: 2.57812vw;
      margin-right: 0.309375vw;
    }
    .btn-deco {
      position: absolute;
      top: -0.546875vw;
      left: 1.25vw;
      width: 2.57812vw;
      height: 1.09375vw;
    }
    span {
      padding: 0.3125vw 0px 0.390625vw;
      display: inline-block;
      font-size: 1.25vw;
      letter-spacing: -0.003125vw;
      line-height: 1.875vw;
    }
  }
  .btn-text {
    padding: 0.625vw 0.3125vw 0.625vw 0.234375vw;
    max-width: 100%;
    display: inline-flex;
    position: relative;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    box-sizing: border-box;
    font-size: 1.25vw;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.5);
    letter-spacing: -0.03125vw;
    line-height: 1.79687vw;
    svg {
      margin-right: 0.390625vw;
      display: inline-block;
      width: 1.71875vw;
      height: 1.71875vw;
    }
    &:hover {
      color: rgba(255, 255, 255, 0.8);
      svg {
        path {
          fill-opacity: 0.8;
        }
        g {
          opacity: 0.8;
        }
      }
    }
  }
  .btn-text + .btn-text {
    margin-left: 0.390625vw;
  }
`;

const CardStar = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 1.40625vw;
  display: flex;
  p {
    width: 11.7188vw;
    font-size: 1.09375vw;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: -0.03125vw;
    line-height: 1.5625vw;
  }
`;

const CardMenu = styled.ul`
  z-index: 5;
  display: flex;
  justify-content: center;
  li {
    margin: 0px 2.1875vw;
    padding-bottom: 0.46875vw;
    display: inline-block;
    border-color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    font-size: 1.25vw;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.3);
    letter-spacing: -0.0390625vw;
    line-height: 1.71875vw;
    text-align: center;
  }
  li:hover {
    border-color: rgba(255, 255, 255, 0.3);
    border-bottom-width: 4px;
    border-bottom-style: solid;
  }
  li.active {
    margin: 0px 2.1875vw;
    padding: 0 0.46875vw 0.46875vw;
    display: inline-block;
    border-color: rgba(255, 255, 255, 0.7) rgba(255, 255, 255, 0.7)
      rgb(255, 255, 255);
    border-bottom-width: 4px;
    border-bottom-style: solid;
    font-size: 1.25vw;
    font-weight: 700;
    color: rgb(255, 255, 255);
    letter-spacing: -0.0390625vw;
    line-height: 1.71875vw;
    cursor: pointer;
  }
`;

const TitleImage = styled.img`
  display: inline-block;
  vertical-align: bottom;
  width: auto;
  height: 4.53125vw;
`;

export default DetailCard;
