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

const SwiperParty = () => {
  return (
    <Container>
      <h2>왓챠파티</h2>
      <h3>혼자 보기 아쉬울 때, 같이 봐요 우리!</h3>
      <div>
        {/* 물어볼거 2 media쿼리로 사이즈는 유지하고 개수만 줄어들도록 해야함. @@이하면 6개 보여주고 */}
        <Swiper
          style={{ height: "21rem" }}
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
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            1551: {
              slidesPerView: 4,
              slidesPerGroup: 4,
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
          <SwiperSlide>
            <img
              src="https://an2-img.amz.wtchn.net/image/v2/95rT5ndgMw3ZbhvDKDK0qg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZME5Ea3dOemsxTmpJME1EUXhNamMxT0NJc0luRWlPamd3ZlEuc1ZFWlJkVlhwZFc1Y2ZYYmxoTzJ4ODFBNEhmNWc3cW9TRVl6Qm1nODR5VQ"
              alt=""
            />
          </SwiperSlide>
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

export default SwiperParty;

const Container = styled.div`
  h3 {
    color: rgb(186, 186, 193);
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 20px;
  }
`;
