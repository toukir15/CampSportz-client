import { AiOutlineBarChart, AiTwotoneStar } from "react-icons/ai";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import Swal from "sweetalert2";
// import { AiTwotoneStar } from "react-icons/md";

export default function SingleCourse({ courseData }) {
  const {
    image,
    student_quantity,
    price,
    available_seat,
    instructor_name,
    course_name,
    category,
    course_id,
  } = courseData;

  //  handle selected course
  const handleSelectCourse = () => {
    console.log(price);
    const courseData = { course_id, course_name, price, category, image };
    fetch("http://localhost:5000/courses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(courseData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
    <div>
      <div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
              <button
                onClick={handleSelectCourse}
                className="bg-black text-[#F7FF62] py-2 px-4 rounded text-md font-medium"
              >
                Select Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
