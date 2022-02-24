import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import Spinner from "./Spinner";

import { history } from "../redux/configureStore";
import {
  SvgPlay,
  SvgWith,
  SvgBeta,
  SvgPlus,
  SvgShared,
  SvgCancel,
} from "../img/card/svg_card";
import Star from "./Star";

import movie, { actionCreator as movieActions } from "../redux/modules/movie";
import { useDispatch } from "react-redux";

const DetailCard = ({ onClose, movieId }) => {
  const dispatch = useDispatch();
  const ref = React.useRef();
  const [is_type, setBasic] = React.useState("info");
  const [is_class, setClass] = React.useState("");
  const [loading, setLoading] = useState(true);

  const wantList = useSelector((state) => state.movie.movie_list.wantList);
  let wantListArr = [];
  if (wantList) {
    wantList.map((m) => {
      wantListArr.push(m.movieId);
    });
  }
  console.log("wantListArr", wantListArr);

  React.useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const changeBasic = (e) => {
    if (e.target.classList[0] !== "active") {
      is_type === "info" ? setBasic("detail") : setBasic("info");
      ref.current.childNodes[0].classList.remove("active");
      ref.current.childNodes[1].classList.remove("active");
      e.target.classList.add("active");
    }
    return;
  };

  const d = useSelector((state) => state.movie.detail_movie_list);

  // 문자열 파싱하는거 왜 잘 안되지...
  // let director = [];
  // JSON.stringify(d.director).map((cur) => {
  //   return director.push(cur);
  // });
  const actors = JSON.stringify(d.actors);
  console.log("배열", d);
  // .replace(/\"/gi, "")
  // .replace(/\[/gi, "")
  // .replace(/\]/gi, "");

  console.log(actors);
  //["황정민","차승원","한지혜","백성현","김창완","송영창"]

  if (loading) {
    return <Spinner is_dim={true} type={"card"}/>;
  } else {
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
            <CardBackgorund is_type={is_type}>
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
                <div className="movie-eval-score">{d.average_star}</div>
              </div>
            </MovieEval>
            {(() => {
              if (is_type === "info") {
                return (
                  <CardInfo>
                    <div>
                      <p className="card-info-title">
                        {JSON.stringify(d.detail_text)}
                      </p>
                    </div>
                    <ul className="card-info-ul">
                      <li>
                        <span className="card-info-subtitle">감독</span>
                        <span className="card-info-director">
                          {d?.director}
                        </span>
                      </li>
                      <li>
                        <span className="card-info-subtitle">출연</span>
                        {d?.actors?.map((cur) => {
                          return (
                            <span className="card-info-director">{cur}</span>
                          );
                        })}
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
                      <button
                        onClick={() =>
                          history.push({
                            pathname: `/video`,
                            state: d.youtubeId ? d.youtubeId : "",
                          })
                        }
                        className="btn-play"
                      >
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
                      {wantListArr.includes(movieId) ? (
                        <button
                          className="btn-text"
                          onClick={() => {
                            dispatch(movieActions.addWishesM(movieId));
                          }}
                        >
                          <SvgPlus />
                          <span>보기싫어요</span>
                        </button>
                      ) : (
                        <button
                          className="btn-text"
                          onClick={() => {
                            dispatch(movieActions.addWishesM(movieId));
                          }}
                        >
                          <SvgPlus />
                          <span style={{ color: "f82e62" }}>보고싶어요</span>
                        </button>
                      )}

                      <button className="btn-text">
                        <SvgShared />
                        <span>공유하기</span>
                      </button>
                    </CardBtnGroup>
                    <Star _movieId={movieId}/>
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
                      <div className="detail-star">
                        <span className="detail-star-title">평균별점</span>
                        <Star is_score={d.average_star} />
                        <span className="detail-star-score">
                          {d.average_star}
                        </span>
                        <span className="detail-star-people">
                          {d.numberOfStarRated}
                        </span>
                      </div>
                      <Comment>
                        <div className="comment-row">
                          <div className="comment-card">
                            <div className="comment-name">권오연</div>
                            <div className="comment-text">존맛탱</div>
                            <div className="comment-like">
                              <svg
                                className="SVGInline-svg css-1ox7qbr-svg"
                                width="36px"
                                height="36px"
                                viewBox="0 0 36 36"
                                version="1.1"
                              >
                                <g
                                  id="Icons_Like"
                                  stroke="none"
                                  strokeWidth="1"
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <g
                                    id="thumbs"
                                    transform="translate(0.000000, -1.000000)"
                                    fill="#d1d1d1"
                                    fillRule="nonzero"
                                  >
                                    <path
                                      d="M8,34 L8,12 C8,12 10.096,11.977 10,12 C9.949,12.012 17,10.209 17,1 C17,0.988 19.987,1 20,1 L22,1 C25.742,2.006 26,6 26,6 L26,12 L36,12 L36,22 C36,33.592 25,34 25,34 L8,34 Z M22,16 L22,7 C22,5.271 20,5 20,5 C20,13.717 12,16 12,16 L12,30 L25,30 C31.935,30 32,23 32,23 L32,16 L22,16 Z M0,12 L4,12 L4,37 L0,37 L0,12 L0,12 Z"
                                      id="Shape"
                                    ></path>
                                  </g>
                                </g>
                              </svg>
                              <span>685</span>
                            </div>
                          </div>
                          <div className="comment-card">
                            <div className="comment-name">권오연</div>
                            <div className="comment-text">
                              같은 후기 다른 느낌 위플래쉬: 이 영화는
                              미쳤다..ㄷㄷ 킹스맨: 이 영화는 미쳤다ㅋㅋㅋ
                              매드맥스: 이!!! 영화는!!.
                            </div>
                            <div className="comment-like">
                              <svg
                                className="SVGInline-svg css-1ox7qbr-svg"
                                width="36px"
                                height="36px"
                                viewBox="0 0 36 36"
                                version="1.1"
                              >
                                <g
                                  id="Icons_Like"
                                  stroke="none"
                                  strokeWidth="1"
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <g
                                    id="thumbs"
                                    transform="translate(0.000000, -1.000000)"
                                    fill="#d1d1d1"
                                    fillRule="nonzero"
                                  >
                                    <path
                                      d="M8,34 L8,12 C8,12 10.096,11.977 10,12 C9.949,12.012 17,10.209 17,1 C17,0.988 19.987,1 20,1 L22,1 C25.742,2.006 26,6 26,6 L26,12 L36,12 L36,22 C36,33.592 25,34 25,34 L8,34 Z M22,16 L22,7 C22,5.271 20,5 20,5 C20,13.717 12,16 12,16 L12,30 L25,30 C31.935,30 32,23 32,23 L32,16 L22,16 Z M0,12 L4,12 L4,37 L0,37 L0,12 L0,12 Z"
                                      id="Shape"
                                    ></path>
                                  </g>
                                </g>
                              </svg>
                              <span>685</span>
                            </div>
                          </div>
                        </div>
                        <div className="comment-row">
                          <div className="comment-card">
                            <div className="comment-name">권오연</div>
                            <div className="comment-text">
                              노장 감독의 페미니즘을 말하는 미친영화. 우린
                              누군가에게 소유물이 아니며 주체로서 행동하는 한
                              "인간" 임을 잊지 말길.
                            </div>
                            <div className="comment-like">
                              <svg
                                className="SVGInline-svg css-1ox7qbr-svg"
                                width="36px"
                                height="36px"
                                viewBox="0 0 36 36"
                                version="1.1"
                              >
                                <g
                                  id="Icons_Like"
                                  stroke="none"
                                  strokeWidth="1"
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <g
                                    id="thumbs"
                                    transform="translate(0.000000, -1.000000)"
                                    fill="#d1d1d1"
                                    fillRule="nonzero"
                                  >
                                    <path
                                      d="M8,34 L8,12 C8,12 10.096,11.977 10,12 C9.949,12.012 17,10.209 17,1 C17,0.988 19.987,1 20,1 L22,1 C25.742,2.006 26,6 26,6 L26,12 L36,12 L36,22 C36,33.592 25,34 25,34 L8,34 Z M22,16 L22,7 C22,5.271 20,5 20,5 C20,13.717 12,16 12,16 L12,30 L25,30 C31.935,30 32,23 32,23 L32,16 L22,16 Z M0,12 L4,12 L4,37 L0,37 L0,12 L0,12 Z"
                                      id="Shape"
                                    ></path>
                                  </g>
                                </g>
                              </svg>
                              <span>685</span>
                            </div>
                          </div>
                          <div className="comment-card">
                            <div className="comment-name">권오연</div>
                            <div className="comment-text">
                              할아버지 감독이 여성 캐릭터를 다루는 방식이
                              놀랍다. 내가 차이나타운에 기대했던 게 이런거라고.
                            </div>
                            <div className="comment-like">
                              <svg
                                className="SVGInline-svg css-1ox7qbr-svg"
                                width="36px"
                                height="36px"
                                viewBox="0 0 36 36"
                                version="1.1"
                              >
                                <g
                                  id="Icons_Like"
                                  stroke="none"
                                  strokeWidth="1"
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <g
                                    id="thumbs"
                                    transform="translate(0.000000, -1.000000)"
                                    fill="#d1d1d1"
                                    fillRule="nonzero"
                                  >
                                    <path
                                      d="M8,34 L8,12 C8,12 10.096,11.977 10,12 C9.949,12.012 17,10.209 17,1 C17,0.988 19.987,1 20,1 L22,1 C25.742,2.006 26,6 26,6 L26,12 L36,12 L36,22 C36,33.592 25,34 25,34 L8,34 Z M22,16 L22,7 C22,5.271 20,5 20,5 C20,13.717 12,16 12,16 L12,30 L25,30 C31.935,30 32,23 32,23 L32,16 L22,16 Z M0,12 L4,12 L4,37 L0,37 L0,12 L0,12 Z"
                                      id="Shape"
                                    ></path>
                                  </g>
                                </g>
                              </svg>
                              <span>685</span>
                            </div>
                          </div>
                        </div>
                      </Comment>
                    </div>
                  </CardDetail>
                );
              }
              return null;
            })()}
          </div>
          <CardMenu ref={ref}>
            <li className={"active"} onClick={changeBasic}>
              기본정보
            </li>
            <li onClick={changeBasic}>상세정보</li>
            <li>비슷한 작품</li>
          </CardMenu>
        </div>
      </StyleCard>
    );
  }
};
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
  padding: 1.71875vw 0 0 4%;
  height: 35.1562vw;
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
  .movie-title {
    margin-bottom: 1.09375vw;
    z-index: 1;
    position: relative;
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
    filter: ${(props) => (props.is_type === "detail" ? "blur(7px);" : "none;")};
    opacity: ${(props) => (props.is_type === "detail" ? "0.7;" : "1")};
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
  z-index: 2;
  position: relative;
  .card-info-title {
    color: rgba(255, 255, 255, 0.8);
    width: 32.8125vw;
    margin-top: 0.15625vw;
    font-size: 1.17188vw;
    font-weight: 400;
    letter-spacing: -0.03125vw;
    line-height: 1.875vw;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
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
        span:last-child:after {
          display: none;
        }
      }
    }
  }
`;
const CardDetail = styled.div`
  padding-top: 0.625vw;
  display: flex;
  .detail-left {
    padding: 0px 3.90625vw 0px 0px;
    min-width: 16.0156vw;
    display: block;
    box-sizing: content-box;
  }
  .detail-right {
    z-index: 1;
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
  .detail-star {
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    font-size: 1.25vw;
    div {
      margin-top: 0;
    }
  }
  .detail-star-title {
    color: rgba(255, 255, 255, 0.7);
    margin-right: 0.46875vw;
  }
  .detail-star-score {
    font-family: Roboto;
    letter-spacing: -0.0390625vw;
    margin-left: 3px;
    margin-right: 0.46875vw;
  }
  .detail-star-people {
    color: rgba(255, 255, 255, 0.5);
    font-family: Roboto;
    font-size: 0.9375vw;
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

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  .comment-row {
    display: flex;
    margin: 0.625vw -1.64062vw 0px;
  }
  .comment-card {
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
    margin: 0px 1.64062vw 0.625vw;
  }
  .comment-name {
    color: rgba(255, 255, 255, 0.4);
    font-size: 1.09375vw;
  }
  .comment-text {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.17188vw;
    line-height: 1.42857;
  }
  .comment-like {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1;
    cursor: pointer;
    svg {
      display: inline-block;
      width: 1.09375vw;
      height: 1.09375vw;
      margin-right: 0.625vw;
    }
    span {
      color: rgba(255, 255, 255, 0.8);
      font-size: 1.01562vw;
      margin-top: 0.15625vw;
    }
  }
`;
export default DetailCard;
