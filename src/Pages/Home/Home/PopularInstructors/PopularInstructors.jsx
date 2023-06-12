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
    <div className="mb-8">
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
              <div className="relative">
                <div className="hover:bg-slate-300 bg-transparent">
                  <img src={instructor.image} alt="" />
                </div>
                <div className="bg-red-100 absolute top-0 bottom-0 w-full flex items-center flex-col justify-center">
                  <h3 className="text-2xl font-medium">{instructor.name}</h3>
                  <p>{instructor.email}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
