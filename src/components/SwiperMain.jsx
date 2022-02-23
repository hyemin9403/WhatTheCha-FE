import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { DetailCard } from "./index";

import { actionCreator as movieActions } from "../redux/modules/movie";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/SwiperMain.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { useDispatch } from "react-redux";

const SwiperMain = (props) => {
  const dispatch = useDispatch();

  const list = props.list;
  const { _loop } = props;

  let [detailCard, setDetailCard] = useState(false);
  let [clickedMovieId, setClickedMovieId] = useState(0);

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
    <div>
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
                onClick={() => {
                  onDetailCard(movie.movieId);
                }}
              >
                <img src={movie.card_image} alt="" />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div>
        {detailCard ? (
          <DetailCard onClose={setDetailCard} movieId={clickedMovieId} />
        ) : null}
      </div>
    </div>
  );
};

export default SwiperMain;
