import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
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
          <hr />
          <Link to="/dashboard/addclass">
            <li>
              <a>Add a Class</a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
