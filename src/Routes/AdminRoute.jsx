import { Navigate } from "react-router-dom";
import useAdmin from "../components/Hooks/useAdmin";
import { ScaleLoader } from "react-spinners";

export default function AdminRoute({ children }) {
  const [isAdmin, isAdminLoading] = useAdmin();
  if (isAdminLoading) {
    return <ScaleLoader color="#36d7b7" />;
  }
  if (isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
}
