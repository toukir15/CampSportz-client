import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

export default function MyCourse() {
  const { user } = useContext(AuthContext);

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    if (user?.email) {
      console.log("render ");
      fetch(`http://localhost:5000/courses?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setCourses(data));
    }
  }, [user?.email]);

  const handlePending = (id) => {
    fetch(`http://localhost:5000/courses/${id}`);
  };

  return (
    <div className="w-full">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>

            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-8 py-3 text-right">
              Action
            </th>
            <th scope="col" className="px-8 py-3 text-right">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="">
          {courses.map((course) => (
            <tr key={course._id} className="  dark:bg-gray-800 ">
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  src={course.image}
                  className="mask mask-squircle w-14 h-14 cover"
                  alt=""
                />
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {course.course_name}
              </td>
              <td className="px-6 py-4">{course.category}</td>
              <td className="px-6 py-4  ">{course.price}</td>
              <td className="px-6 py-4 text-right">
                <button
                  onClick={() => handlePending(course._id)}
                  className="bg-green-500 py-1 px-3 rounded text-black"
                >
                  {course.status}
                </button>
              </td>
              <td className="px-6 py-4 text-right">
                <button
                  //   onClick={() => handleDelete(course._id)}
                  className="bg-red-500 py-1 px-3 rounded text-black"
                >
                  Denied
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
