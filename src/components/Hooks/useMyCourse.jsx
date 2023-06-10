import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const useMyCourse = () => {
  const { user } = useContext(AuthContext);

  const { data: myCourseData = [], refetch } = useQuery({
    queryKey: ["useMyCourse"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/courses?email=${user?.email}`
      );
      return res.json();
    },
  });
  console.log(myCourseData);
  return [myCourseData, refetch];
};

export default useMyCourse;
