import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
export default function SinglePopularCourse({ courseData }) {
  const { isNight } = useContext(AuthContext);
  const { image, price, course_name, enrolled_students } = courseData;

  return (
    <div
      data-aos="zoom-in"
      className={`max-w-sm ${
        isNight ? "bg-[#1D232A]" : "bg-white"
      }  rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 mb-12 relative border  `}
    >
      <div className="rounded-lg ">
        <img className="rounded p-4 " src={image} alt="" />
      </div>
      <p className="bg-red-600 w-16 text-center font-medium text-white absolute top-6 right-6 py-1">
        -8%
      </p>
      <div className="px-5 pb-5">
        <h5 className="mb-2 text-xl md:text-2xl font-medium tracking-tight dark:text-white">
          {course_name}
        </h5>
        <div>
          <Rating
            placeholderRating={3.5}
            emptySymbol={<AiOutlineStar className="text-gray-300 text-2xl" />}
            placeholderSymbol={
              <AiFillStar className="text-yellow-500 text-2xl" />
            }
            fullSymbol={<AiFillStar className="text-yellow-500 text-2xl" />}
          />
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-gray-300">Price</p>
            <p className="font-medium">${price}</p>
          </div>
          <div>
            <p className="text-gray-300">Enrolled Students</p>
            <p className="font-medium text-center">{enrolled_students}</p>
          </div>
          <div>
            <button className="px-4 py-2 border rounded-lg hover:text-[#DBFC00] transition">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
