import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function SingleInstructors({ instructor }) {
  const { image } = instructor;
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-24"
    >
      <SwiperSlide>
        <img src={image} alt="" />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white">
          Salads
        </h3>
      </SwiperSlide>
    </Swiper>
  );
}
