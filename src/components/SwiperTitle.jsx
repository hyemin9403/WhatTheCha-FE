import React, { useRef, useState } from "react";
import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/SwiperTitle.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const SwiperTitle = () => {
  return (
    <Container>
      <TextContainer>
        <span>왓챠 오리지널</span>
        <h4>시맨틱 에러</h4>
        <p>가슴 뛰는 ‘에러’의 시작! 매주 수/목 5시 공개</p>
      </TextContainer>

      <div>
        {/* 물어볼거 2 media쿼리로 사이즈는 유지하고 개수만 줄어들도록 해야함. @@이하면 6개 보여주고 */}
        <Swiper
          style={{ height: "32rem" }}
          className="mySwiper title"
          // install Swiper modules
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
            991: {
              // width: 991,
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1551: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
        >
          <SwiperSlide>
            <img
              src="https://an2-img.amz.wtchn.net/image/v2/95rT5ndgMw3ZbhvDKDK0qg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZME5Ea3dOemsxTmpJME1EUXhNamMxT0NJc0luRWlPamd3ZlEuc1ZFWlJkVlhwZFc1Y2ZYYmxoTzJ4ODFBNEhmNWc3cW9TRVl6Qm1nODR5VQ"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://an2-img.amz.wtchn.net/image/v2/suuG2oEEVGKuaf5DioihvQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZME5UQXdNRFEwTVRNeE1EZ3dOREV3T1NJc0luRWlPamd3ZlEuNGJYZjVqN2FkTmJWVThuNEFrbjZtV29sTTFYMHZQWEJoTGs2T0hwQzVwQQ"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default SwiperTitle;

const Container = styled.div`
  span {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0px;
    text-decoration: none;
    line-height: 18px;
    color: rgb(255, 255, 255);
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h4 {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 26px;
    color: rgb(255, 255, 255);
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 24px;
    color: rgb(186, 186, 193);
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const TextContainer = styled.div`
  margin-bottom: 5px;
`;
