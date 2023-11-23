import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
const SwiperAdds = () => {
  return (
    <Swiper
      spaceBetween={0}
      modules={[Autoplay, EffectFade, Pagination, Navigation]}
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      slidesPerView={1}
      pagination={{
        enabled: true,
        clickable: true,
      }}
      navigation={true}
      loop
      speed={2000}
      autoplay={{
        delay: 3000,
      }}
    >
      <SwiperSlide>
        <img src="/adds/Swipper/anker_mainbanner_web_en.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/adds/Swipper/asuszen_mainbanner_web_en.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/adds/Swipper/canonprinter_mainbanner_web_en.jpg" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperAdds;
