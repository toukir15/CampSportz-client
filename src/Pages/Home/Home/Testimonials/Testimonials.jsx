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
          <p className="mb-12 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            quisquam aperiam qui, tenetur perspiciatis odio aspernatur repellat
            hic consequatur voluptates sed, iste cupiditate eaque! Explicabo sed
            praesentium dolorem. Voluptate, alias maiores accusamus labore,
            repellat atque officiis ullam minima vitae, similique culpa nobis
            reprehenderit nemo excepturi saepe eius itaque aliquam in.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="mb-12 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            quisquam aperiam qui, tenetur perspiciatis odio aspernatur repellat
            hic consequatur voluptates sed, iste cupiditate eaque! Explicabo sed
            praesentium dolorem. Voluptate, alias maiores accusamus labore,
            repellat atque officiis ullam minima vitae, similique culpa nobis
            reprehenderit nemo excepturi saepe eius itaque aliquam in.
          </p>
        </SwiperSlide>

        {/* {testimonialData.map((data) => {
          <SwiperSlide>Slide 1</SwiperSlide>;
          console.log(data._id);
        })} */}
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
