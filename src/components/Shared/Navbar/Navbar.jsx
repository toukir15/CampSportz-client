import { Link, NavLink } from "react-router-dom";
import Container from "../../Container";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { BsMoon, BsSun } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";

export default function Navbar() {
  const {
    user,
    logout,
    setIsNight,
    theme: themeValue,
  } = useContext(AuthContext);
  const [theme, setTheme] = themeValue;
  console.log(theme);
  const [isToggle, setIsToggle] = useState(false);

  // handle theme change
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleLogout = () => {
    logout()
      .then(() => console.log("Logout successfully"))
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="border-b fixed w-full z-10">
      <Container>
        <div className="navbar bg-base-100 relative">
          <div className="flex-1 text-2xl font-medium">
            <div className="flex items-center md:hidden mr-4">
              {isToggle ? (
                <AiOutlineClose onClick={() => setIsToggle(!isToggle)} />
              ) : (
                <AiOutlineMenuUnfold onClick={() => setIsToggle(!isToggle)} />
              )}
            </div>
            <Link to="">
              <span className="text-[#36d7b7]">Camp</span>Sports
            </Link>
          </div>

          <ul
            className={`${
              isToggle ? " left-4 bg-white transition" : "-left-52"
            } gap-8 font-medium mr-4 md:flex block absolute md:static top-14  z-10 p-4 rounded`}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-[#36d7b7]" : "")}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/instructors"
                className={({ isActive }) => (isActive ? "text-[#36d7b7]" : "")}
              >
                Instructors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                className={({ isActive }) => (isActive ? "text-[#36d7b7]" : "")}
              >
                Courses
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? "text-[#36d7b7]" : ""
                  }
                >
                  Dashboard
                </NavLink>
              </li>
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
            <label className="swap swap-rotate ml-4">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" onChange={handleToggle} />

              {/* sun icon */}
              <BsSun
                onClick={() => setIsNight(true)}
                className="swap-on fill-current w-6 h-6"
              />

              {/* moon icon */}
              <BsMoon
                onClick={() => setIsNight(false)}
                className="swap-off fill-current w-6 h-6"
              />
            </label>
          </div>
        </div>
      </Container>
    </div>
  );
}
