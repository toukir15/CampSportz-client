import { useState } from "react";
import useMyCourse from "../../../components/Hooks/useMyCourse";
import SectionTitle from "../../../components/SectionTitle";

export default function MyCourse() {
  const [myCourseData] = useMyCourse();

  return (
    <div className="w-full">
      <SectionTitle heading={"My Courses"} />
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
          {myCourseData.map((course) => (
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
                  //   onClick={() => handlePending(course._id)}
                  className="bg-green-500 py-1 px-3 rounded text-black"
                >
                  {course.status}
                </button>
              </td>
              <td className="px-6 py-4 text-right">
                {/* <button
                  onClick={() => {
                    setSubmitId(course._id);
                    window.my_modal_3.showModal();
                  }}
                  className="bg-red-500 py-1 px-3 rounded text-black"
                >
                  Denied
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">Feedback!</h3>
          <textarea
            required
            className="textarea w-full border-2 border-gray-300 my-2"
            placeholder="Bio"
          ></textarea>
          <button
            onClick={() => handleSubmit(submitId)}
            className="bg-yellow-500 px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
      </dialog>
    </div>
  );
}
