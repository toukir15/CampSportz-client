import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "../../../../components/SectionTitle";

export default function Testimonials() {
  const [testimonialData, setTestimonialsData] = useState([]);
  console.log(testimonialData);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_livesite_url}/testimonials`)
      .then((response) => {
        const data = response?.data;
        setTestimonialsData(data);
      })
      .catch((error) => {
        console.error("Error retrieving data:", error);
      });
  }, []);
  return (
    <>
      <SectionTitle heading={"Testimonials"}></SectionTitle>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <h1 className="text-6xl font-bold text-center">“</h1>
            <p className="mb-12 md:text-center md:w-4/5 text-justify mx-4 md:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              quisquam aperiam qui, tenetur perspiciatis odio aspernatur
              repellat hic consequatur voluptates sed, iste cupiditate eaque!
              Explicabo sed praesentium dolorem. Voluptate, alias maiores
              accusamus labore, repellat atque officiis ullam minima vitae,
              similique culpa nobis reprehenderit nemo excepturi saepe eius
              itaque aliquam in.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <h1 className="text-6xl font-bold text-center">“</h1>
            <p className="mb-12 text-center w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              quisquam aperiam qui, tenetur perspiciatis odio aspernatur
              repellat hic consequatur voluptates sed, iste cupiditate eaque!
              Explicabo sed praesentium dolorem. Voluptate, alias maiores
              accusamus labore, repellat atque officiis ullam minima vitae,
              similique culpa nobis reprehenderit nemo excepturi saepe eius
              itaque aliquam in.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <h1 className="text-6xl font-bold text-center">“</h1>
            <p className="mb-12 text-center w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              quisquam aperiam qui, tenetur perspiciatis odio aspernatur
              repellat hic consequatur voluptates sed, iste cupiditate eaque!
              Explicabo sed praesentium dolorem. Voluptate, alias maiores
              accusamus labore, repellat atque officiis ullam minima vitae,
              similique culpa nobis reprehenderit nemo excepturi saepe eius
              itaque aliquam in.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
// [
//   {
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipiscing congit elit  Lorem ipsum dolor sit amet consectetur adipiscing congit elit  Lorem ipsum dolor sit amet consectetur adipiscing congit elit    ",
//     name: "Patric Castillo",
//   },
//   {
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipiscing congit elit  Lorem ipsum dolor sit amet consectetur adipiscing congit elit  Lorem ipsum dolor sit amet consectetur adipiscing congit elit    ",
//     name: "Patric Castillo",
//   },
//   {
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipiscing congit elit  Lorem ipsum dolor sit amet consectetur adipiscing congit elit  Lorem ipsum dolor sit amet consectetur adipiscing congit elit    ",
//     name: "Patric Castillo",
//   }
// ];
