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
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
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
            <NavLink to="/dashboard">
              <li>Dashboard</li>
            </NavLink>
          </ul>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
