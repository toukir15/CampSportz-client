// import Container from "../../../components/Container";

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { BiCategoryAlt, BiDollar } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import {
  MdOutlineAddPhotoAlternate,
  MdOutlineDriveFileRenameOutline,
} from "react-icons/md";
import { AuthContext } from "../../../Provider/AuthProvider";
import SectionTitle from "../../../components/SectionTitle";

export default function AddClass() {
  const { user, isNight } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // course info data
    const courseInfo = {
      image: data?.url,
      course_name: data?.courseName,
      instructor_name: data?.instructorName,
      instructor_email: data?.instructorEmail,
      category: data?.category,
      price: data?.price,
      available_seats: data?.seats,
      status: "pending",
      enrolled_students: 0,
    };

    // add new course post reqest
    fetch(`${import.meta.env.VITE_livesite_url}/courses`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(courseInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <div className="container mx-auto ">
        <div className="flex justify-center ">
          <SectionTitle heading={"Add a Course"} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
            {/* picture */}
            <div>
              <label
                className={` ${
                  isNight ? "text-white" : "text-gray-900"
                } block mb-2 text-sm font-medium  `}
              >
                Course Photo
              </label>
              {/* className="w-5 h-5 text-gray-500 dark:text-gray-400" */}
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MdOutlineAddPhotoAlternate className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  {...register("url", { required: true })}
                  type="url"
                  name="url"
                  id="input-group-1"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Photo URL"
                />
              </div>
            </div>
            {/* input 1  */}
            <div>
              <label
                className={` ${
                  isNight ? "text-white" : "text-gray-900"
                } block mb-2 text-sm font-medium  `}
              >
                Course Name
              </label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MdOutlineDriveFileRenameOutline className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  {...register("courseName", { required: true })}
                  type="text"
                  name="courseName"
                  id="input-group-1"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Course Name"
                />
              </div>
            </div>
            {/* input 1  */}
            <div>
              <label
                className={` ${
                  isNight ? "text-white" : "text-gray-900"
                } block mb-2 text-sm font-medium  `}
              >
                Instructor Name
              </label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MdOutlineDriveFileRenameOutline className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  {...register("instructorName", { required: true })}
                  type="text"
                  name="instructorName"
                  id="input-group-1"
                  defaultValue={user?.displayName}
                  readOnly
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Instructor Name"
                />
              </div>
            </div>
            {/* input 1  */}
            <div>
              <label
                className={` ${
                  isNight ? "text-white" : "text-gray-900"
                } block mb-2 text-sm font-medium  `}
              >
                Instructor Email
              </label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  {...register("instructorEmail", { required: true })}
                  type="email"
                  name="instructorEmail"
                  id="input-group-1"
                  defaultValue={user?.email}
                  readOnly
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  //   placeholder="seller@email.com"
                />
              </div>
            </div>
            {/* input 1  */}
            <div>
              <label
                className={` ${
                  isNight ? "text-white" : "text-gray-900"
                } block mb-2 text-sm font-medium  `}
              >
                Category
              </label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <BiCategoryAlt className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  {...register("category", { required: true })}
                  type="text"
                  name="category"
                  id="input-group-1"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Category"
                />
              </div>
            </div>
            {/* input 1  */}
            <div>
              <label
                className={` ${
                  isNight ? "text-white" : "text-gray-900"
                } block mb-2 text-sm font-medium  `}
              >
                Price
              </label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <BiDollar className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  {...register("price", { required: true })}
                  type="number"
                  name="price"
                  id="input-group-1"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Price"
                />
              </div>
            </div>
            {/* input 1  */}
            <div>
              <label
                className={` ${
                  isNight ? "text-white" : "text-gray-900"
                } block mb-2 text-sm font-medium  `}
              >
                Available Seats
              </label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <BsThreeDots className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  {...register("seats", { required: true })}
                  type="number"
                  name="seats"
                  id="input-group-1"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Available Seats"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#36d7b7] py-2 flex justify-center text-md font-medium rounded">
            <button className="">Add a Course</button>
          </div>
        </form>
      </div>
    </>
  );
}
