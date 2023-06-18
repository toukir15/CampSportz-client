import { useContext } from "react";
import useUsers from "../../../components/Hooks/useUsers";
import SectionTitle from "../../../components/SectionTitle";
import { AuthContext } from "../../../Provider/AuthProvider";

export default function ManageUsers() {
  const [users, refetch] = useUsers();
  const { isNight } = useContext(AuthContext);

  const handleMakeAdmin = (role, id) => {
    const roleObj = { role };
    fetch(`${import.meta.env.VITE_livesite_url}/users/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(roleObj),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
        }
      });
  };

  return (
    <div className="w-full">
      <SectionTitle heading={"Manage Users"} />
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead>
          <tr
            className={`${
              isNight ? "text-white" : "text-gray-900 dark:text-white"
            }`}
          >
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              user name
            </th>

            <th scope="col" className="px-6 py-3">
              User Email
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              action
            </th>
            <th scope="col" className="px-6 py-3">
              action
            </th>
          </tr>
        </thead>
        <tbody className="">
          {users.map((user) => (
            <tr
              key={user._id}
              className={`${
                isNight ? "text-white" : "text-gray-900 dark:text-white"
              }`}
            >
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  src={user.image}
                  className="mask mask-squircle w-14 h-14 cover"
                  alt=""
                />
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap "
              >
                {user.name}
              </td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.role}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handleMakeAdmin("make admin", user._id)}
                  className={`${
                    user.role === "Admin" || user.role === "Instructor"
                      ? "bg-gray-500"
                      : "bg-green-500"
                  } py-1 px-2 text-black rounded`}
                  disabled={user.role === "Admin" || user.role === "Instructor"}
                >
                  Make Admin
                </button>
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handleMakeAdmin("make instructor", user._id)}
                  className={`${
                    user.role === "Admin" || user.role === "Instructor"
                      ? "bg-gray-500"
                      : "bg-green-500"
                  } py-1 px-2 text-black rounded`}
                  disabled={user.role === "Admin" || user.role === "Instructor"}
                >
                  Make Instructor
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
