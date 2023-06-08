import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

export default function PrivateRoute({ children }) {
  const { loading, user } = useContext(AuthContext);
  if (loading) {
    return <p>loading...</p>;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
}
