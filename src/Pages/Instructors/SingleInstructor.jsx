import { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { MdAccessTimeFilled } from "react-icons/md";
import { AuthContext } from "../../Provider/AuthProvider";
// import { motion } from "framer-motion";

// import { IoTime } from "react-icons/io";
export default function SingleInstructor({ instructor }) {
  const { isNight } = useContext(AuthContext);
  const {
    name,
    image,
    email,
    class_name,
    // taken_class,
    duration,
    ratting,
    reviews,
  } = instructor;

  return (
    <>
      <div
        className={`max-w-sm ${
          isNight ? "bg-[#1D232A]" : "bg-white"
        }  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-8`}
      >
        <div className="p-4">
          <a href="#">
            <img className="rounded-lg" src={image} alt="" />
          </a>
        </div>
        <div className="p-5">
          <a href="#">
            <h5
              className={`mb-2 text-2xl font-bold tracking-tight  ${
                isNight ? "text-white" : "text-gray-900"
              } dark:text-white text-center`}
            >
              {name}
            </h5>
          </a>
          <p
            className={`mb-3 font-normal ${
              isNight ? "text-gray-200" : "text-gray-500"
            } dark:text-gray-400 text-center`}
          >
            {email}
          </p>
          <p
            className={`mb-3 font-normal ${
              isNight ? "text-gray-200" : "text-gray-500"
            } dark:text-gray-400 text-center`}
          >
            {class_name}
          </p>
          <div className="flex justify-between px-16">
            <div className="flex  items-center gap-1">
              {/* <IoTime /> */}
              <MdAccessTimeFilled className="text-[#36d7b7]" />
              <p className={`${isNight ? "text-gray-200" : "text-gray-500"} `}>
                {duration} hours
              </p>
            </div>
            <div className="flex items-center gap-1">
              <AiFillStar className="text-[#36d7b7]" />
              <div
                className={`${
                  isNight ? "text-gray-200" : "text-gray-500"
                } flex gap-1`}
              >
                <p>{ratting}</p> <p>({reviews}reviews)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
