import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

export default function useInstructor() {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/instructor/${user?.email}`);
      return res.data;
    },
  });
  return [isInstructor, isInstructorLoading];
}
