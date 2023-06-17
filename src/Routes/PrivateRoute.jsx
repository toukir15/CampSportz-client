import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ScaleLoader } from "react-spinners";

export default function PrivateRoute({ children }) {
  const { loading, user } = useContext(AuthContext);
  if (loading) {
    return <ScaleLoader color="#36d7b7" />;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
}
