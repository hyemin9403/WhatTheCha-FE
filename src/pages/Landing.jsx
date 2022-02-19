import React, { useState, useEffect, useRef } from "react";
import { Header } from "../components";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./Landing.css";

// import required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

const Landing = () => {
  SwiperCore.use([Pagination, Navigation]);

  return (
    <div>
      <Header />
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {/* 로컬에 있는 이미지 삽입하려 할 경우 에러나서 왓챠 src 가져옴 */}
        <SwiperSlide>
          <img
            src="https://an2-img.amz.wtchn.net/image/v2/6AF4PWk5LWGhVy264_GsoQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZeU5USXlNakExTURjMU1ESXhNemt4TWlKOS5jZUV1c3IwckFiVnBHb29sRi1xSjRMNG1xZ2FuejV6cE1ydmxrRDZrQjV3"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://an2-img.amz.wtchn.net/image/v2/wurpJweGDbvOiYLTt5bgeQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqRXZjV2czYm1ZNGQzbGlhVzlvYW1wc1luZDNjbTBpZlEuRDNrUFAzWEk1U2ZzaTRoMlVCd2xpODZUZVUxTTNyTTVLTW9NZm5KcG14cw"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://an2-img.amz.wtchn.net/image/v2/1FqiEHUGtMCX6KxZUpR3nA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZeE5UVTFNamM0TWpRNU16azBPVFk1T0NKOS5uUW1FR3ZVV09wLU0tTmx0RW5JMUsycmxUVm5jbDVHZ3Vaalc3UUNuTVUw"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://an2-img.amz.wtchn.net/image/v2/Ds9xW3qZbanR1wBgviHcTw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZME1qRTFNREkzTVRreU56azRNekU0T1NKOS5NQzkwVlpZSE5nYjNxZ1UzaVlPNE9QazVnVGhjeldVLXF4cHM1UDhtVi1j"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://an2-img.amz.wtchn.net/image/v2/XPZ5X2P8u1fukowR9owAeQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZeU56QXlNREk0TWpZM01ETTBNamMwTXlKOS5aTGRaMTJ6WE1adU1uelBzX0htNnZlN1E5SGlZU09hcTkzV3NXeG9EcWRB"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <div>
        <footer></footer>
      </div>
    </div>
  );
};

export default Landing;
