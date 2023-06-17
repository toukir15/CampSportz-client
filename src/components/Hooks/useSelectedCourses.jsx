import { useQuery } from "@tanstack/react-query";

const useSelectedCourses = () => {
  const { data: selectedCourses = [], refetch } = useQuery({
    queryKey: ["selectedCourses"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_livesite_url}/selectCourses`
      );
      return res.json();
    },
  });
  return [selectedCourses, refetch];
};

export default useSelectedCourses;
