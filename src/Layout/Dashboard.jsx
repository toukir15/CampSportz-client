import { Link, Outlet } from "react-router-dom";
import useUsers from "../components/Hooks/useUsers";

export default function Dashboard() {
  const [users] = useUsers();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}

          <Link to="/dashboard/selected">
            <li>
              <a>Selected Courses</a>
            </li>
          </Link>
          <Link to="/dashboard/enrolled">
            <li>
              <a>Enrolled Courses</a>
            </li>
          </Link>
          <Link to="/dashboard/addcourse">
            <li>
              <a>Add a Class</a>
            </li>
          </Link>
          <Link to="/dashboard/mycourse">
            <li>
              <a>My Course</a>
            </li>
          </Link>
          <Link to="/dashboard/managecourses">
            <li>
              <a>Manage Courses</a>
            </li>
          </Link>
          <Link to="/dashboard/manageusers">
            <li>
              <a>Manage Users</a>
            </li>
          </Link>

          <Link to="/">
            <li>
              <a>home</a>
            </li>
          </Link>

          <hr />
        </ul>
      </div>
    </div>
  );
}
