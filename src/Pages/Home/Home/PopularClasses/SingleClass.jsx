import { AiOutlineBarChart, AiTwotoneStar } from "react-icons/ai";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
export default function SingleClass({ classData }) {
  const { image, category, price, course_name, enrolled_students } = classData;

  // console.log(classData);
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-4 relative">
        <a href="#">
          <img className="rounded-lg" src={image} alt="" />
        </a>
        <p className="bg-red-600 py-1 w-1/4 text-center rounded-md text-white font-medium absolute top-6 right-6">
          Popular
        </p>
      </div>
      <div className="pb-4 px-4">
        <div className="flex justify-between px-6">
          <p className="bg-gray-100 px-4 py-1 rounded">{category}</p>
          {price === "Free" ? (
            <p className="text-2xl font-bold">Free</p>
          ) : (
            <p className="text-2xl font-bold">${price}</p>
          )}
        </div>
        <div className="flex justify-between my-2">
          <div className="flex items-center gap-1">
            <AiOutlineBarChart className="text-yellow-500" />
            <p>Beginner</p>
          </div>
          <div className="flex items-center gap-1">
            <MdOutlineAccessTimeFilled className="text-yellow-500" />
            <p>120 Hours</p>
          </div>
          <div className="flex items-center gap-1">
            <AiTwotoneStar className="text-yellow-500" />
            <p>3.5 (3k reviews)</p>
          </div>
        </div>
        <p className=" py-1 rounded-md ">
          <span className="font-medium">Enrolled Students:</span>
          <span className=""> {enrolled_students}</span>
        </p>
        <p className="text-2xl font-medium mb-4">{course_name}</p>
        <div className="mb-2"></div>
        <div className="flex justify-end "></div>
      </div>
    </div>
  );
}
