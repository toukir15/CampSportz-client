import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";

export default function useAdmin() {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);

  // get admin data by email
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/admin/${user?.email}`);
      return res.data;
    },
  });
  return [isAdmin, isAdminLoading];
}
