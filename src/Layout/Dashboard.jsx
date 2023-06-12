import { Link, Outlet } from "react-router-dom";
// import useUsers from "../components/Hooks/useUsers";
import useAdmin from "../components/Hooks/useAdmin";
import useInstructor from "../components/Hooks/useInstructor";

export default function Dashboard() {
  const [isInstructor] = useInstructor();
  const [isAdmin] = useAdmin();

  if (!isAdmin) {
    return <p>loading...</p>;
  }

  if (!isInstructor) {
    return <p>loading...</p>;
  }
  console.log(isAdmin);
  console.log(isInstructor);

  // const isAdminn = true;
  // const isInstructorr = false;

  const notAdmin = !isAdmin?.isAdmin || !isAdmin.role === "Admin";
  const notInstructor =
    !isInstructor?.isInstructor || !isInstructor.role === "Instructor";

  console.log(notAdmin, notInstructor);

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

          {(notAdmin || notInstructor) && (
            <>
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
            </>
          )}

          {isInstructor?.isInstructor ||
            (isInstructor.role === "Instructor" && (
              <>
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
              </>
            ))}
          {isAdmin?.isAdmin ||
            (isAdmin.role === "Admin" && (
              <>
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
              </>
            ))}

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
