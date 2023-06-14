import { Navigate } from "react-router-dom";
import useStudent from "../components/Hooks/useStudents";

export default function StudentRoute({ children }) {
  const [isStudent, isStudentLoading] = useStudent();
  if (isStudentLoading) {
    return <p>loading...</p>;
  }
  if (isStudent) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
}
