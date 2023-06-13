import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

export default function useStudent() {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: isStudent, isLoading: isStudentLoading } = useQuery({
    queryKey: ["isStudent", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/student/${user?.email}`);
      return res.data;
    },
  });
  //   console.log(isAdmin);
  return [isStudent, isStudentLoading];
}
