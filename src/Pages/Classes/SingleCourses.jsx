import { useContext } from "react";
import { AiOutlineBarChart, AiTwotoneStar } from "react-icons/ai";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import useInstructor from "../../components/Hooks/useInstructor";
import useAdmin from "../../components/Hooks/useAdmin";
// import { AiTwotoneStar } from "react-icons/md";

export default function SingleCourse({ courseData }) {
  const { user } = useContext(AuthContext);
  const [isInstructor] = useInstructor();
  const [isAdmin] = useAdmin();

  const {
    image,
    price,
    course_name,
    category,
    _id: course_id,
    available_seats,
  } = courseData;

  const conditionalBtn =
    available_seats === 0 ||
    isAdmin?.role === "Admin" ||
    isInstructor?.role === "Instructor";

  //  handle selected course
  const handleSelectCourse = () => {
    const courseData = {
      course_id,
      course_name,
      price: parseFloat(price),
      category,
      image,
    };
    fetch("http://localhost:5000/selectCourses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(courseData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div
      className={`max-w-sm ${
        available_seats === 0 ? "bg-red-100" : "bg-white"
      }  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-12`}
    >
      <div className="p-4">
        <a href="#">
          <img className="rounded-lg" src={image} alt="" />
        </a>
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
        <p className="text-2xl font-medium mb-2">{course_name}</p>
        <div className="flex justify-end ">
          {user ? (
            <button
              onClick={handleSelectCourse}
              className={`${
                conditionalBtn ? "bg-gray-400" : "text-[#F7FF62]"
              } bg-black  py-2 px-4 rounded text-md font-medium`}
              disabled={conditionalBtn}
            >
              Select Course
            </button>
          ) : (
            <Link to="/login">
              <p className="border border-b-2 py-2 px-4 rounded text-md font-medium">
                Login to Select
              </p>
            </Link>
          )}
          {/* <button
            onClick={handleSelectCourse}
            className="bg-black text-[#F7FF62] py-2 px-4 rounded text-md font-medium"
          >
            Select Course
          </button> */}
        </div>
      </div>
    </div>
  );
}
