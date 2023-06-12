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
import MyCourse from "../Pages/Dashboard/Instructor/MyCourse";
import ManageCourses from "../Pages/Dashboard/Admin/ManageCourses";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
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
        element: <Courses />,
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
        path: "addcourse",
        element: <AddClass />,
      },
      {
        path: "mycourse",
        element: <MyCourse />,
      },

      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "managecourses",
        element: <ManageCourses />,
      },
      {
        path: "manageusers",
        element: <ManageUsers />,
      },
    ],
  },

  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);
