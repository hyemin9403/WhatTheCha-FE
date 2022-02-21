import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import styled from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/SwiperMain.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const SwiperTop10 = () => {
  return (
    <div>
      <RankNumber>1</RankNumber>
      <Swiper
        style={{ height: "30rem" }}
        className="mySwiper main"
        // install Swiper modules
        slidesPerView={7}
        slidesPerGroup={7}
        observer={true}
        observeParents={true}
        modules={[Pagination, Navigation]}
        spaceBetween={30}
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
            src="https://an2-img.amz.wtchn.net/image/v2/26zF3ghoKpVGE3yEUOFLpg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5ETXllRFkwTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk16ZzRORGN5TkRReU5UazNPVFUxT1RraWZRLmwycHNWRnFnSGlzWkZxVVpseVRBb3B6MTRFMDU2S3dNcUtOVXlLWmJPSXc"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://an2-img.amz.wtchn.net/image/v2/N4GLg4h3adD9kv_jJL1nzg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5ETXllRFkwTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk16ZzNPRE0xTXpNeE1USTNOVFk1T1RnaWZRLkhwMnZnNVJjRDctd0xkZXQ1Q212VUp3R2tlMHhmS1JSTkkycG5Jb0ZBa2c"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://an2-img.amz.wtchn.net/image/v2/wg8IoYjTlIW1ZycWylVT2A.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5ETXllRFkwTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk16RXdPVGN4TXpnek1qTXlNVGM0TmpNaWZRLmNfcV84bnoybmNkdXZCUUt4Y0t2b2dCLTYwa0pXS1pWMVh6eE5oLW4wZFU
        "
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://an2-img.amz.wtchn.net/image/v2/_IKnC8p5MxLUujxsJekHzw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5ETXllRFkwTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5EUTBOalk0TnpZeE5UazRNVGczTkRNaWZRLklsUnhaZkRPbTFvN05MRFVlQllRNG9rRk14RFR5ZVk4ZzQzUExGNFJyRWM"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://an2-img.amz.wtchn.net/image/v2/Gny7INF90X9ogxxVVHc0Cw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5ETXllRFkwTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5ESTFOek13T0Rjd05EVXhPVGMyTXpraWZRLmtZS3VJOE9iWEZkVzdybXJvaDlMV19VUFRMRDdRNlBxOVF1aHd5UkU2NjA"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://an2-img.amz.wtchn.net/image/v2/26zF3ghoKpVGE3yEUOFLpg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5ETXllRFkwTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk16ZzRORGN5TkRReU5UazNPVFUxT1RraWZRLmwycHNWRnFnSGlzWkZxVVpseVRBb3B6MTRFMDU2S3dNcUtOVXlLWmJPSXc"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://an2-img.amz.wtchn.net/image/v2/N4GLg4h3adD9kv_jJL1nzg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5ETXllRFkwTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk16ZzNPRE0xTXpNeE1USTNOVFk1T1RnaWZRLkhwMnZnNVJjRDctd0xkZXQ1Q212VUp3R2tlMHhmS1JSTkkycG5Jb0ZBa2c"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://an2-img.amz.wtchn.net/image/v2/wg8IoYjTlIW1ZycWylVT2A.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5ETXllRFkwTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk16RXdPVGN4TXpnek1qTXlNVGM0TmpNaWZRLmNfcV84bnoybmNkdXZCUUt4Y0t2b2dCLTYwa0pXS1pWMVh6eE5oLW4wZFU
        "
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://an2-img.amz.wtchn.net/image/v2/_IKnC8p5MxLUujxsJekHzw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5ETXllRFkwTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5EUTBOalk0TnpZeE5UazRNVGczTkRNaWZRLklsUnhaZkRPbTFvN05MRFVlQllRNG9rRk14RFR5ZVk4ZzQzUExGNFJyRWM"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://an2-img.amz.wtchn.net/image/v2/Gny7INF90X9ogxxVVHc0Cw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5ETXllRFkwTUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5ESTFOek13T0Rjd05EVXhPVGMyTXpraWZRLmtZS3VJOE9iWEZkVzdybXJvaDlMV19VUFRMRDdRNlBxOVF1aHd5UkU2NjA"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperTop10;

const RankNumber = styled.span`
  display: block;
  position: absolute;
  top: -3px;
  left: 0px;
  z-index: 3;
  color: rgb(255, 255, 255);
  text-shadow: rgb(0 0 0 / 20%) 0px -2px 4px;
  user-select: none;
  font-family: "Watcha Sans", Roboto, "Noto Sans KR", "Apple SD Gothic Neo",
    "Nanum Gothic", "Malgun Gothic", sans-serif;
  font-size: 56px;
  font-weight: 800;
  letter-spacing: 0px;
  line-height: 56px;
`;
