import { Link } from "react-router-dom";
import useSelectedCourses from "../../../components/Hooks/useSelectedCourses";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { AuthContext } from "../../../Provider/AuthProvider";

export default function SelectedCourses() {
  const [selectedCourses, refetch] = useSelectedCourses();
  const { isNight } = useContext(AuthContext);

  // handle delete
  const handleDelete = (id) => {
    fetch(`${import.meta.env.VITE_livesite_url}/selectCourses/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
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
  const total = selectedCourses?.reduce(
    (sum, course) => course?.price + sum,
    0
  );

  return (
    <div className="relative overflow-x-auto w-full px-8">
      <SectionTitle heading={"Selected Courses"} />
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
        <thead
          className={`text-xs ${
            isNight ? "text-white" : "text-gray-900 dark:text-gray-"
          } uppercase 400`}
        >
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
        <tbody className={`${isNight ? "text-white" : "text-gray-800"}`}>
          {selectedCourses.map((course) => (
            <tr key={course?._id} className="  dark:bg-gray-800 ">
              <td
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap"
              >
                <img
                  src={course?.image}
                  className="mask mask-squircle w-14 h-14 cover"
                  alt=""
                />
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap "
              >
                {course?.course_name}
              </td>
              <td className="px-6 py-4">{course?.category}</td>
              <td className="px-6 py-4  ">
                {course?.price === "Free" ? (
                  <>{course?.price}</>
                ) : (
                  <>$ {course?.price}</>
                )}
              </td>
              <td className="px-6 py-4 text-right">
                <button
                  onClick={() => handleDelete(course?._id)}
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
