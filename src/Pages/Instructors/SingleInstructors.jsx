import { AiFillStar } from "react-icons/ai";
import { MdAccessTimeFilled } from "react-icons/md";
// import { motion } from "framer-motion";

// import { IoTime } from "react-icons/io";
export default function SingleInstructors({ instructor }) {
  const {
    name,
    // student_quantity,
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
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4">
          <a href="#">
            <img className="rounded-lg" src={image} alt="" />
          </a>
        </div>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              {name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
            {email}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
            {class_name}
          </p>
          <div className="flex justify-between px-16">
            <div className="flex  items-center gap-1">
              {/* <IoTime /> */}
              <MdAccessTimeFilled className="text-yellow-500" />
              <p>{duration} hours</p>
            </div>
            <div className="flex items-center gap-1">
              <AiFillStar className="text-yellow-500" />
              <div className="flex  gap-1">
                <p>{ratting}</p> <p>({reviews}reviews)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
