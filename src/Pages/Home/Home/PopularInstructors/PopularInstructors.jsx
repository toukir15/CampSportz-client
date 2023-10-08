// import { useEffect, useState } from "react";
// import SectionTitle from "../../../../components/SectionTitle";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";

// import { FaInstagramSquare } from "react-icons/fa";

// import { Pagination } from "swiper";
// import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";

// export default function PopularInstructors() {
//   const [instructors, setInstructors] = useState([]);

//   useEffect(() => {
//     fetch(`${import.meta.env.VITE_livesite_url}/instructors`)
//       .then((res) => res.json())
//       .then((data) => setInstructors(data));
//   }, []);
//   return (
//     <div className="mb-8">
//       <SectionTitle heading={"Popular Instructors"}></SectionTitle>

//       <div className="">
//         <Swiper
//           slidesPerView={3}
//           spaceBetween={30}
//           pagination={{
//             clickable: true,
//           }}
//           modules={[Pagination]}
//           className="mySwiper"
//         >
//           {instructors.map((instructor, index) => (
//             <SwiperSlide key={index}>
//               <div className="mb-12 relative overflow-hidden group/cartOverlay">
//                 <div className="hover:bg-slate-300 bg-transparent">
//                   <img src={instructor.image} alt="" />
//                 </div>
//                 {/* instructor details  */}
//                 <div className="bg-[#dafc00d3] transition h-full w-full absolute left-0 top-[100%] group-hover/cartOverlay:top-0  flex flex-col justify-center items-center">
//                   <h3 className="md:text-2xl text-xl md:font-bold font-medium">
//                     {instructor.name}
//                   </h3>
//                   <h5 className="md:text-xl text-md md:font-medium font-normal">
//                     Instructor
//                   </h5>
//                   <div className="flex gap-2 mt-2 text-xl ">
//                     <FaInstagramSquare />
//                     <AiFillFacebook />
//                     <AiFillTwitterSquare />
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { FaInstagramSquare } from "react-icons/fa";

import { Pagination } from "swiper";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";

export default function PopularInstructors() {
  const [instructors, setInstructors] = useState([]);
  const [hoverStates, setHoverStates] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_livesite_url}/instructors`)
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
        setHoverStates(Array(data.length).fill(false)); // Initialize hover states
        console.log(setHoverStates(Array(data.length).fill(false)));
      });
  }, []);

  const handleMouseEnter = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };

  const handleMouseLeave = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

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
              <div
                className="mb-12 relative overflow-hidden group/cartOverlay"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div className="hover:bg-slate-300 bg-transparent">
                  <img src={instructor.image} alt="" />
                </div>
                {/* instructor details */}
                <div
                  className={`transition-opacity duration-300 ${
                    hoverStates[index] ? "opacity-100" : "opacity-0"
                  } bg-[#dafc00d3] h-full w-full absolute left-0 top-[100%] group-hover/cartOverlay:top-0  flex flex-col justify-center items-center`}
                >
                  <h3 className="md:text-2xl text-xl md:font-bold font-medium">
                    {instructor.name}
                  </h3>
                  <h5 className="md:text-xl text-md md:font-medium font-normal">
                    Instructor
                  </h5>
                  <div className="flex gap-2 mt-2 text-xl ">
                    <FaInstagramSquare className="cursor-pointer hover:text-red-500" />
                    <AiFillFacebook className="cursor-pointer hover:text-red-500" />
                    <AiFillTwitterSquare className="cursor-pointer hover:text-red-500" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
