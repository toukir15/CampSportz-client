import { useQuery } from "@tanstack/react-query";

const useAllCourse = () => {
  const { data: allCourseData = [], refetch } = useQuery({
    queryKey: ["useMyCourse"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_livesite_url}/courses`);
      return res.json();
    },
  });
  return [allCourseData, refetch];
};

export default useAllCourse;
