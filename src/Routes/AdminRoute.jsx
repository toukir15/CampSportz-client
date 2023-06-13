import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useAdmin from "../components/Hooks/useAdmin";

export default function AdminRoute({ children }) {
  const { loading, user } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  if (loading && isAdminLoading) {
    return <p>loading...</p>;
  }
  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
}
