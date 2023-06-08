import { useQuery } from "@tanstack/react-query";

const useSelectedCourses = () => {
  const { data: selectedCourses = [], refetch } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/courses");
      return res.json();
    },
  });
  return [selectedCourses, refetch];
};

export default useSelectedCourses;
