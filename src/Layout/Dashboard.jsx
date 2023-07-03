import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../components/Hooks/useAdmin";
import useInstructor from "../components/Hooks/useInstructor";
import useStudent from "../components/Hooks/useStudents";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { MdOutlineGolfCourse, MdOutlineManageSearch } from "react-icons/md";
import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineInsertRowAbove } from "react-icons/ai";
import { BiAddToQueue, BiSelectMultiple } from "react-icons/bi";
import { BsClockHistory } from "react-icons/bs";
import { SiCountingworkspro } from "react-icons/si";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const [isInstructor] = useInstructor();
  const [isAdmin] = useAdmin();
  const [isStudent] = useStudent();

  return (
    <div className="drawer lg:drawer-open relative">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className=" drawer-button lg:hidden absolute top-3 right-3"
        >
          <AiOutlineMenuUnfold></AiOutlineMenuUnfold>
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content  font-medium">
          <div className="mx-auto flex flex-col items-center">
            <img
              src={user?.photoURL}
              alt=""
              className="w-[100px] h-[100px] rounded-full mb-2"
            />
            <p className="mb-2">{user?.displayName}</p>
            <p>{user?.email}</p>
          </div>
          <hr className="my-4" />
          {/* Sidebar content here */}

          {isStudent?.isStudent ||
            (isStudent?.role === "User" && (
              <>
                <li>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active bg-gray-200 text-[#36d7b7]"
                        : ""
                    }
                    activeClassName="active-link"
                    to="/dashboard/selected"
                  >
                    <BiSelectMultiple size="20" /> <a>Selected Courses</a>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active bg-gray-200 text-[#36d7b7]"
                        : ""
                    }
                    activeClassName="active-link"
                    to="/dashboard/paymentHistory"
                  >
                    <BsClockHistory size="20" /> <a>Payment History</a>
                  </NavLink>
                </li>
              </>
            ))}

          {isInstructor?.isInstructor ||
            (isInstructor?.role === "Instructor" && (
              <>
                <li>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active bg-gray-200 text-[#36d7b7]"
                        : ""
                    }
                    activeClassName="active-link"
                    to="/dashboard/addcourse"
                  >
                    <BiAddToQueue size={20} /> <a>Add a Class</a>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active bg-gray-200 text-[#36d7b7]"
                        : ""
                    }
                    activeClassName="active-link"
                    to="/dashboard/mycourse"
                  >
                    <SiCountingworkspro size={20} /> <a>My Course</a>
                  </NavLink>
                </li>
              </>
            ))}
          {isAdmin?.isAdmin ||
            (isAdmin?.role === "Admin" && (
              <>
                <li>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active bg-gray-200 text-[#36d7b7]"
                        : ""
                    }
                    activeClassName="active-link"
                    to="/dashboard/managecourses"
                  >
                    <MdOutlineManageSearch size={22} /> <a>Manage Courses</a>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active bg-gray-200 text-[#36d7b7]"
                        : ""
                    }
                    activeClassName="active-link"
                    to="/dashboard/manageusers"
                  >
                    <FiUsers size={20} /> <a>Manage Users</a>
                  </NavLink>
                </li>
              </>
            ))}
          <hr className="my-4" />

          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active bg-gray-200 text-[#36d7b7]"
                  : ""
              }
              activeClassName="active-link"
              to="/"
            >
              <HiOutlineHome size="20" /> <a>Home</a>
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active bg-gray-200 text-[#36d7b7]"
                  : ""
              }
              activeClassName="active-link"
              to="/instructors"
            >
              <AiOutlineInsertRowAbove size="20" /> <a>Instructor</a>
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active bg-gray-200 text-[#36d7b7]"
                  : ""
              }
              activeClassName="active-link"
              to="/courses"
            >
              <MdOutlineGolfCourse size="20" /> <a>Courses</a>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
