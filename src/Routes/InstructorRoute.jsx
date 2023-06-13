import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useInstructor from "../components/Hooks/useInstructor";

export default function InstructorRoute({ children }) {
  const { loading, user } = useContext(AuthContext);
  const [isInstructor, isInstructorLoading] = useInstructor();
  if (loading && isInstructorLoading) {
    return <p>loading...</p>;
  }
  if (user && isInstructor) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
}
