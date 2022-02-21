import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/SwiperMain.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const SwiperOnly = () => {
  return (
    <div>
      {/* 물어볼거 2 media쿼리로 사이즈는 유지하고 개수만 줄어들도록 해야함. @@이하면 6개 보여주고 */}
      <Swiper
        style={{ height: "39rem" }}
        className="mySwiper main"
        // install Swiper modules
        slidesPerView={8}
        slidesPerGroup={8}
        observer={true}
        observeParents={true}
        modules={[Pagination, Navigation]}
        spaceBetween={10}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          // when window width is >= 640px
          500: {
            //width: 500,
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          // when window width is >= 768px
          896: {
            //width: 896,
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          993: {
            //width: 993,
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1135: {
            //width: 1135,
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          1551: {
            //width: 1551,
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          1648: {
            //width: 1648,
            slidesPerView: 7,
            slidesPerGroup: 7,
          },
        }}
      >
        <SwiperSlide>
          <img
            src="https://an2-img.amz.wtchn.net/image/v2/CVJFKgFGK_DaS3sQztpt5A.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk16WXdlRFkwTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5EUTVNakF4TlRJeE16VXhNVFExTmpNaWZRLjMyUk9Ed1l4RFpiZWdQeU5OVFdGNTE2X1owUE5lOUZwaFlrSTRXRlgybzA"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://an2-img.amz.wtchn.net/image/v2/rP9eJNa46liJatCFjb_wgQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk16WXdlRFkwTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5EUTFOVGc1TURFMU9EQTJPREkzTURJaWZRLk9SY29TT09USXc1NS00bUFNZld1aU82cl9Ob3o3aENaX1czZ2hLbkphNlk"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://an2-img.amz.wtchn.net/image/v2/V2GEWmnHQ41AVkxWW2Z5Zw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk16WXdlRFkwTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5ETXlOamM0T0RJME1Ea3dOelE1TURZaWZRLjZGSFNhdHdrbEpfd3RWNk1DTmk0YktUTWdQOGlWX2k5bm5RWEJrTkZHRkk"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://an2-img.amz.wtchn.net/image/v2/4w4DZNqmtESDWARsS87BGg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk16WXdlRFkwTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5ETXlOamN5TVRVM09ESTRNVEV3TlRJaWZRLml1TE9HclZ0U2dCSmdRZnhuVW1VdG5PNjRqWklNQjVjejJjREtMTVRQa1U"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://an2-img.amz.wtchn.net/image/v2/rY3O-Sw2fXaUtX4oPcFDEA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5ETXllRFkwTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk16YzJNekEyTXpZMk5UUTVNVGt6TVRBaWZRLi1iMEpyX0JxeGFtRzlPQnBETHBsZ3lxQ21ZU1FZTUkwVHhlc1ljaFRmYjg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 10</SwiperSlide>
        <SwiperSlide>Slide 11</SwiperSlide>
        <SwiperSlide>Slide 12</SwiperSlide>
        <SwiperSlide>Slide 13</SwiperSlide>
        <SwiperSlide>Slide 14</SwiperSlide>
        <SwiperSlide>Slide 15</SwiperSlide>
        <SwiperSlide>Slide 16</SwiperSlide>
        <SwiperSlide>Slide 17</SwiperSlide>
        <SwiperSlide>Slide 18</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperOnly;
