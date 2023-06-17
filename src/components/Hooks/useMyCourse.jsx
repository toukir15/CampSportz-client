import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const useMyCourse = () => {
  const { user } = useContext(AuthContext);

  const { data: myCourseData = [], refetch } = useQuery({
    queryKey: ["useMyCourse"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_livesite_url}/courses?email=${user?.email}`
      );
      return res.json();
    },
  });
  return [myCourseData, refetch];
};

export default useMyCourse;
