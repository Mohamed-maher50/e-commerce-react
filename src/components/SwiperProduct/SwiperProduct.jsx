import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import BasicCard from "../BasicCard/BasicCard";
const SwiperProduct = () => {
  return (
    <Swiper
      spaceBetween={3}
      modules={[Autoplay]}
      speed={1500}
      autoplay={{
        delay: 3000,
      }}
      loop
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="p-2 "
      slidesPerView={2}
      breakpoints={{
        slidesPerView: 2,

        // when window width is >= 480px
        768: {
          slidesPerView: 3,
        },
        // when window width is >= 640px
        769: {
          slidesPerView: 3,
        },
        1025: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
      }}
    >
      <SwiperSlide>
        <BasicCard />
      </SwiperSlide>
      <SwiperSlide>
        <BasicCard />
      </SwiperSlide>
      <SwiperSlide>
        <BasicCard />
      </SwiperSlide>
      <SwiperSlide>
        <BasicCard />
      </SwiperSlide>
      <SwiperSlide>
        <BasicCard />
      </SwiperSlide>
      <SwiperSlide>
        <BasicCard />
      </SwiperSlide>
      <SwiperSlide>
        <BasicCard />
      </SwiperSlide>
      <SwiperSlide>
        <BasicCard />
      </SwiperSlide>
      <SwiperSlide>
        <BasicCard />
      </SwiperSlide>
      <SwiperSlide>
        <BasicCard />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperProduct;
