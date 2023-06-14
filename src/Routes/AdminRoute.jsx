import { Navigate } from "react-router-dom";
import useAdmin from "../components/Hooks/useAdmin";

export default function AdminRoute({ children }) {
  const [isAdmin, isAdminLoading] = useAdmin();
  if (isAdminLoading) {
    return <p>loading...</p>;
  }
  if (isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
}
