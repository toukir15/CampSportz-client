import { Navigate } from "react-router-dom";
import useStudent from "../components/Hooks/useStudents";
import { ScaleLoader } from "react-spinners";

export default function StudentRoute({ children }) {
  const [isStudent, isStudentLoading] = useStudent();
  if (isStudentLoading) {
    return <ScaleLoader color="#36d7b7" />;
  }
  if (isStudent) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
}
