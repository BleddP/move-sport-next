import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

// Components
import ClientSlide from "./ClientSlide";

const Slider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      className="client-slider"
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
      }}
    >
      <SwiperSlide>
        <ClientSlide />
      </SwiperSlide>
      <SwiperSlide>
        <ClientSlide />
      </SwiperSlide>
      <SwiperSlide>
        <ClientSlide />
      </SwiperSlide>
      <SwiperSlide>
        <ClientSlide />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
