import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import Instructors from "../Pages/Instructors/Instructors";
import Courses from "../Pages/Classes/Courses";
import Dashboard from "../Layout/Dashboard";
import SelectedClasses from "../Pages/Dashboard/Student/SelectedClasses";
import PrivateRoute from "./PrivateRoute";
import Payment from "../Pages/Dashboard/Student/Payment";
// import Courses from "../Pages/Courses/Courses";
// import Courses from "../Pages/Courses/Courses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "courses",
        element: (
          <PrivateRoute>
            <Courses />
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "selected",
        element: <SelectedClasses />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
    ],
  },

  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);
