import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import Instructors from "../Pages/Instructors/Instructors";
import Courses from "../Pages/Classes/Courses";
import Dashboard from "../Layout/Dashboard";
import Payment from "../Pages/Dashboard/Student/Payment";
import SelectedCourses from "../Pages/Dashboard/Student/SelectedCourses";
// import EnrolledCourses from "../Pages/Dashboard/Student/EnrolledCourses";
import AddClass from "../Pages/Dashboard/Instructor/AddClass";
import MyCourse from "../Pages/Dashboard/Instructor/MyCourse";
import ManageCourses from "../Pages/Dashboard/Admin/ManageCourses";
// import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import StudentRoute from "./StudentRoute";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import PaymentHistory from "../Pages/Dashboard/Student/PaymentHistory";
import Enrolled from "../Pages/Dashboard/Student/Enrolled";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import PrivateRoute from "./PrivateRoute";
// import Courses from "../Pages/Courses/Courses";
// import Courses from "../Pages/Courses/Courses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "instructors",
        element: (
          <PrivateRoute>
            <Instructors />
          </PrivateRoute>
        ),
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
        element: (
          <StudentRoute>
            <SelectedCourses />
          </StudentRoute>
        ),
      },
      {
        path: "enrolled",
        element: (
          <StudentRoute>
            <Enrolled />
          </StudentRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <StudentRoute>
            <Payment />
          </StudentRoute>
        ),
      },
      {
        path: "paymentHistory",
        element: (
          <StudentRoute>
            <PaymentHistory />
          </StudentRoute>
        ),
      },

      // instructor
      {
        path: "addcourse",
        element: (
          <InstructorRoute>
            <AddClass />
          </InstructorRoute>
        ),
      },
      {
        path: "mycourse",
        element: (
          <InstructorRoute>
            <MyCourse />
          </InstructorRoute>
        ),
      },

      {
        path: "payment",
        element: (
          <InstructorRoute>
            <Payment />
          </InstructorRoute>
        ),
      },

      // admin
      {
        path: "managecourses",
        element: (
          <AdminRoute>
            <ManageCourses />
          </AdminRoute>
        ),
      },
      {
        path: "manageusers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
    ],
  },

  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);
