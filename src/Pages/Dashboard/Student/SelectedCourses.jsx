import { Link } from "react-router-dom";
import useSelectedCourses from "../../../components/Hooks/useSelectedCourses";
import Swal from "sweetalert2";
import { useState } from "react";

export default function SelectedCourses() {
  const [selectedCourses, refetch] = useSelectedCourses();
  // console.log(selectedCourses);
  // const [total, setTotal] = useState("");

  // handle delete
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/selectCourses/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Course deleted successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
  };
  const total = selectedCourses?.reduce((sum, course) => course.price + sum, 0);

  // if (selectedCourses) {
  // const totalPrice = Math.floor(total);
  // setTotal(totalPrice);
  // }

  return (
    <div className="relative overflow-x-auto w-full px-8">
      <div className="mb-8 flex w-full justify-between">
        <p className="w-[1px]"></p>
        <p className=" text-2xl font-medium md:ml-80 ">
          Total Price: ${Math.floor(total)}
        </p>
        <Link to="/dashboard/payment">
          <button className="mr-6 px-6 py-2 bg-black text-md font-medium rounded  text-[#F7FF62]">
            Pay
          </button>
        </Link>
      </div>
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
          </tr>
        </thead>
        <tbody>
          {selectedCourses.map((course) => (
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
              <td className="px-6 py-4  ">
                {course.price === "Free" ? (
                  <>{course.price}</>
                ) : (
                  <>$ {course.price}</>
                )}
              </td>
              <td className="px-6 py-4 text-right">
                <button
                  onClick={() => handleDelete(course._id)}
                  className="bg-red-500 py-1 px-3 rounded text-black"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
