import { Navigate } from "react-router-dom";
import useInstructor from "../components/Hooks/useInstructor";

export default function InstructorRoute({ children }) {
  const [isInstructor, isInstructorLoading] = useInstructor();
  if (isInstructorLoading) {
    return <p>loading...</p>;
  }
  if (isInstructor) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
}
