import { Navigate } from "react-router-dom";
import useInstructor from "../components/Hooks/useInstructor";
import { ScaleLoader } from "react-spinners";

export default function InstructorRoute({ children }) {
  const [isInstructor, isInstructorLoading] = useInstructor();
  if (isInstructorLoading) {
    return <ScaleLoader color="#36d7b7" />;
  }
  if (isInstructor) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
}
