import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { DetailCard } from "./index";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/SwiperMain.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const SwiperMain = (props) => {
  const { _loop } = props;
  return (
    <div>
      {/* 물어볼거 2 media쿼리로 사이즈는 유지하고 개수만 줄어들도록 해야함. @@이하면 6개 보여주고 */}
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
        <SwiperSlide>
          <img
            src="https://an2-img.amz.wtchn.net/image/v2/DUCq6nXsHwW1erY_izC8Cw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5ETXllRFkwTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk16RXpNek0xTWpNd05ERTBPRFEwTVRnaWZRLl9oTk1NdExFZjJLNWZvOW5EWFlZdFk4VmxPX3pibDVzZlVJZ2l6SVZiNE0"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://an2-img.amz.wtchn.net/image/v2/pRphEVAzJOsojJtqXff8sQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5ETXllRFkwTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk16RXpNekk1T1RneU1URTBNamc0TVRraWZRLnBROXJqYWlOdTFwd2IxTkdjUGMxUXZpZmJzb2VDQmtVY3NBMi1IaTRRdjQ"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://an2-img.amz.wtchn.net/image/v2/ihW3GXmjdts-f5VvEPshMA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5ETXllRFkwTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk16RXpNek13TVRNd01UQXhOVGc1TXpVaWZRLkZjVWp5c0dWdlRPZkoybkVwc3lwSF92VWU3SlZzaEFzbm5WcGkyTFpMcXc"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://an2-img.amz.wtchn.net/image/v2/R73YeAh8-bLvg9fnn30lmQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5ETXllRFkwTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk16Y3pNVFF6TURReE1UazJPRGc0TXpraWZRLk5EVlNickVCVjBXaVZRalpmclFpWTlVR18zakxWYjFLV2RJWnFHU2xXazQ"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://an2-img.amz.wtchn.net/image/v2/tK5GUxavHyCrBGaR6NfOaw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5ETXllRFkwTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5ERTBORGszTVRjME9UQXdORFU0TXpNaWZRLlB6OTl3S2hQMXBqMnptdEpJWldDSGVkY3dzaE15ZDFMT1ZUXy1kcEo1UVU"
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
      <div>
        <DetailCard/>
      </div>
    </div>
  );
};

export default SwiperMain;
