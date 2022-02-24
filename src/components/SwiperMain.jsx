// import required modules
import React, { useRef, useState } from "react";
import styled, {keyframes} from "styled-components";
import { Pagination, Navigation } from "swiper";
import { useDispatch } from "react-redux";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { DetailCard } from "./index";
import { actionCreator as movieActions } from "../redux/modules/movie";
import { history } from "../redux/configureStore";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/SwiperMain.css";
import { SvgCardPlay, SvgCardFavor } from "../img/main/svg_main";


const SwiperMain = (props) => {
  const dispatch = useDispatch();
  const ref = useRef();
  const swiperRef = React.useRef(null);
  const list = props.list;
  const { _loop } = props;

  let [detailCard, setDetailCard] = useState(false);
  let [clickedMovieId, setClickedMovieId] = useState(0);
  let slideSize = ref?.current?.swiperSlideSize;

  const onDetailCard = (movieId) => {
    // 만약 디테일 카드가 열려있지 않을 경우
    if (!detailCard) {
      // 오픈으로 바꿔준다
      setDetailCard((prevToggle) => !prevToggle);
      //영화 id값 받아와서
      setClickedMovieId(movieId);
      // 정보 부르라고 요청 보낸다.
      dispatch(movieActions.detailListM(movieId));
      // 열려는 있는데 새로운 movie를 클릭한 경우
    } else if (detailCard && movieId !== clickedMovieId) {
      //영화 id값 받아와서
      setClickedMovieId(movieId);
      // 정보 부르라고 요청 보낸다.
      dispatch(movieActions.detailListM(movieId));
    }
  };

  return (
    <Container size={slideSize}>
      <Swiper
        className="mySwiper main"
        // install Swiper modules
        slidesPerView={8}
        slidesPerGroup={8}
        observer={true}
        observeParents={true}
        modules={[Pagination, Navigation]}
        spaceBetween={10}
        loop={_loop}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        ref={swiperRef}
        navigation={true}
        breakpoints={{
          // when window width is >= 640px
          500: {
            //width: 500,
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          // when window width is >= 768px
          896: {
            //width: 896,
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          993: {
            //width: 993,
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          1135: {
            //width: 1135,
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          1551: {
            //width: 1551,
            slidesPerView: 7,
            slidesPerGroup: 7,
          },
          1648: {
            //width: 1648,
            slidesPerView: 8,
            slidesPerGroup: 8,
          },
        }}
      >
        {list &&
          list.map((movie) => {
            return (
              <SwiperSlide
                key={movie.movieId}
                // onclick하면 1.창을 부른다, 2. 디테일 카드에 데이터를 불러와서 보여준다.
                ref={ref}
                onClick={() => {
                  onDetailCard(movie.movieId);
                }}
              >
                <article className="card-info-view">
                  <img
                    className="img-top10"
                    style={{ margin: "0 0 0 2rem" }}
                    src={movie.card_image}
                    alt=""
                  />
                </article>
                <article className="card-info-hover">
                  <img className="img-top10" src={movie.card_image} alt=""/>
                  <div className="hover-content">
                    <div className="hover-group-btn">
                      <button  
                        className="hover-btn-play"
                        onClick={() =>
                          history.push({
                            pathname: `/video`,
                            //state: d.youtubeId ? d.youtubeId : "",
                          })
                        }
                      >
                        <SvgCardPlay/>
                      </button>
                      <button className="hover-btn-favor">
                        <SvgCardFavor/>
                      </button>
                    </div>
                    <div className="hover-text">
                      <h4>{movie.movieName}</h4>
                      <span>{movie.make_year}</span>
                      <ul>
                        <li>{movie.category}</li>
                      </ul>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div>
        {detailCard ? (
          <DetailCard onClose={setDetailCard} movieId={clickedMovieId} />
        ) : null}
      </div>
    </Container>
  );
};

const showCard = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const hiddenCard = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Container = styled.div`
  position: relative;
  &:hover {
    .test {
      div:last-child {
        opacity: 1;
      }
    }
  }
  .main{
    .swiper-slide{
      overflow: visible;
      .card-info-hover{
        opacity:0;
        display: none;
        width: 100%;
        height: 110%;
        position: absolute;
        top: 45%;
        transform: translateY(-50%);
        background-color: rgba(0,0,0);
        img{
          width: auto;
          height: 100%;
          object-fit: cover;
          opacity: 0.7;
        }
        .hover-content{
          position: absolute;
          bottom: 0px;
          left: 0px;
          z-index: 4;
          width: 100%;
          .hover-group-btn{
            padding: 0 10px;
            display: flex;
            justify-content: flex-start;
            button{
              display: inline-flex;
              justify-content: center;
              align-items: center;
              background-color: rgb(255, 255, 255);
              width: 36px;
              height: 36px;
              border-radius: 50%;
              svg{
                width: 20px;
                height: 20px;
              }
            }
            button+button{
              margin-left: 6px;
            }
            button:hover{
              background-color: rgb(248, 47, 98);
              svg{
                color: #ffffff;
                path{
                  fill: #ffffff;
                }
              }
            }
            .hover-btn-play{
              svg{
                path{
                  fill: #000000;
                }
              }
            }
            .hover-btn-favor{
              background-color: rgba(0, 0, 0, 0.8);
              svg{
                color: #ffffff;
              }
            }
          }
          .hover-text{
            padding: 12px 12px 14px;
            h4{
              position: relative;
              color: rgb(255, 255, 255);
              font-size: 18px;
              font-weight: 700;
              letter-spacing: 0px;
              line-height: 24px;
              padding-bottom: 4px;
            }
            span{
              color: rgba(255, 255, 255, 0.7);
              margin-bottom: 11px;
              font-size: 13px;
              font-weight: 400;
              letter-spacing: 0px;
              line-height: 18px;
            }
            ul{
              display: flex;
              li{
                color: rgb(255, 255, 255);
                margin-bottom: 11px;
                font-size: 13px;
                font-weight: 400;
                letter-spacing: 0px;
                line-height: 18px;
              }
            }
          }
        }
      }
    } 
    .swiper-slide:hover{
      width: calc(${props => props.size} * 1px + 2vw)!important;
      .card-info-view{
        animation: 0.4s ${hiddenCard} ease-out;
        opacity: 0;
      }
      .card-info-hover{
        z-index: 11;
        display: block;
        animation: 0.6s ${showCard} ease-out;
        opacity: 1;
      }
    }
  }
`;

export default SwiperMain;