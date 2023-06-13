import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useStudent from "../components/Hooks/useStudents";

export default function StudentRoute({ children }) {
  const { loading, user } = useContext(AuthContext);
  const [isStudent, isStudentLoading] = useStudent();
  if (loading && isStudentLoading) {
    return <p>loading...</p>;
  }
  if (user && isStudent) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
}
