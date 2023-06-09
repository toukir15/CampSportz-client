import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import Instructors from "../Pages/Instructors/Instructors";
import Courses from "../Pages/Classes/Courses";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Payment from "../Pages/Dashboard/Student/Payment";
import SelectedCourses from "../Pages/Dashboard/Student/SelectedCourses";
import EnrolledCourses from "../Pages/Dashboard/Student/EnrolledCourses";
import AddClass from "../Pages/Dashboard/Instructor/AddClass";
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
        element: <SelectedCourses />,
      },
      {
        path: "enrolled",
        element: <EnrolledCourses />,
      },

      // instructor
      {
        path: "addclass",
        element: <AddClass />,
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
