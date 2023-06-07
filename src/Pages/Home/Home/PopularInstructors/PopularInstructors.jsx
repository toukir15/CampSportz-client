import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle";
import SingleInstructors from "./SingleInstructors";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

export default function PopularInstructors() {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("instructors.json")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <div>
      <SectionTitle heading={"Popular Instructors"}></SectionTitle>

      <div className="">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {instructors.map((instructor, index) => (
            <SwiperSlide key={index}>
              <img src={instructor.image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
