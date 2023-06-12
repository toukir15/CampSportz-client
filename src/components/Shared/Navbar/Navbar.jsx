import { Link, NavLink } from "react-router-dom";
import Container from "../../Container";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => console.log("Logout successfully"))
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="border-b-2">
      <Container>
        <div className="navbar bg-base-100">
          <div>
            <img
              className="w-[80px] h-[80px] object-cover"
              src="https://www.logodesign.net/logo/abstract-acrobat-man-and-woman-3709ld.png?nwm=1&nws=1&industry=sports-fitness&sf="
              alt=""
            />
          </div>
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">CampSportz</a>
          </div>
          <ul className="flex gap-8 font-medium">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-pink-500" : "")}
            >
              Home
            </NavLink>
            <NavLink to="/instructors">
              <li>Instructors</li>
            </NavLink>
            <NavLink to="/courses">
              <li>Courses</li>
            </NavLink>
            {user && (
              <NavLink to="/dashboard">
                <li>Dashboard</li>
              </NavLink>
            )}
          </ul>
          <div className="flex-none">
            <div className="dropdown dropdown-end"></div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user
                        ? user?.photoURL
                        : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    }
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  {user ? (
                    <a onClick={handleLogout}>Logout</a>
                  ) : (
                    <Link to="/login">
                      <a>Login</a>
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
