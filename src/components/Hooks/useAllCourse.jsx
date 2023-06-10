import { useQuery } from "@tanstack/react-query";

const useAllCourse = () => {
  const { data: allCourseData = [], refetch } = useQuery({
    queryKey: ["useMyCourse"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/courses`);
      return res.json();
    },
  });
  console.log(allCourseData);
  return [allCourseData, refetch];
};

export default useAllCourse;
