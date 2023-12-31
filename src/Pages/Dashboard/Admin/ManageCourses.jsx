import { useContext, useState } from "react";
import useAllCourse from "../../../components/Hooks/useAllCourse";
import SectionTitle from "../../../components/SectionTitle";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-toastify";

export default function ManageCourses() {
  const [allCourseData, refetch] = useAllCourse();
  const [deniedId, setDeniedId] = useState("");
  const { isNight } = useContext(AuthContext);

  // handle pending status
  const handleApproved = (id) => {
    fetch(`${import.meta.env.VITE_livesite_url}/courses/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
        }
      });
  };

  const handleSubmit = (event, id) => {
    event.preventDefault();
    const feedback = event?.target?.feedback?.value;
    console.log(feedback);
    // TODO: feedback

    // pending course approved request
    // fetch(`${import.meta.env.VITE_livesite_url}/courses/${id}`, {
    //   method: "PATCH",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.modifiedCount > 0) {
    //       console.log("updated successfully");
    //       refetch();
    //     }
    //   });

    // denied course request
    fetch(`${import.meta.env.VITE_livesite_url}/courses/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.deletedCount > 0) {
          console.log("deleted successfully");
          refetch();
        }
      });

    // add feedback request
    fetch(`${import.meta.env.VITE_livesite_url}/courses/feedback/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ feedback }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Wow so easy !");
      });

    // close modal
    const modal = document.getElementById("my_modal_3");
    modal.close();
  };

  // // handle modal form
  // const handleModal = (event) => {
  //   event.preventDefault();
  //   const feedback = event.target.feedback.value;
  //   console.log(feedback);
  //   // Form.reset();
  // };

  // const handle modal close
  const handleCloseModal = () => {
    const modal = document.getElementById("my_modal_3");
    modal.close();
  };

  return (
    <div className="w-full">
      <SectionTitle heading={"Manage Courses"} />
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          className={`${
            isNight ? "text-white" : "text-gray-900 dark:text-white"
          }`}
        >
          <tr>
            <th className="px-6 py-3">Image</th>
            <th className="px-6 py-3">Product name</th>

            <th className="px-6 py-3">Category</th>
            <th className="px-6 py-3">Price</th>
            <th className="px-8 py-3 text-right">Action</th>
            <th className="px-8 py-3 text-right">Action</th>
          </tr>
        </thead>
        <tbody className="">
          {allCourseData.map((course) => (
            <tr
              key={course._id}
              className={`${
                isNight ? "text-white" : "text-gray-900 dark:text-white"
              }`}
            >
              <td className="px-6 py-4 font-medium  whitespace-nowrap ">
                <img
                  src={course.image}
                  className="mask mask-squircle w-14 h-14 cover"
                  alt=""
                />
              </td>
              <td className="px-6 py-4 font-medium 900 whitespace-nowrap ">
                {course.course_name}
              </td>
              <td className="px-6 py-4">{course.category}</td>
              <td className="px-6 py-4  ">${course.price}</td>
              <td className="px-6 py-4 text-right">
                <button
                  onClick={() => handleApproved(course._id)}
                  className="bg-green-500 py-1 px-3 rounded text-black"
                >
                  {course.status}
                </button>
              </td>
              <td className="px-6 py-4 text-right">
                {course.status === "pending" && (
                  <button
                    onClick={() => {
                      setDeniedId(course._id);
                      window.my_modal_3.showModal();
                    }}
                    className="bg-red-500 py-1 px-3 rounded text-black"
                  >
                    Denied
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <dialog id="my_modal_3" className="modal">
        <form
          onSubmit={(event) => handleSubmit(event, deniedId)}
          method="dialog"
          className="modal-box"
        >
          <p
            onClick={handleCloseModal}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </p>
          <h3 className="font-bold text-lg">Feedback!</h3>
          <textarea
            name="feedback"
            className="textarea w-full border-2 border-gray-300 my-2"
            placeholder="Bio"
          ></textarea>
          <button type="submit" className="bg-[#36d7b7] px-4 py-2 rounded">
            Submit
          </button>
        </form>
      </dialog>
    </div>
  );
}
