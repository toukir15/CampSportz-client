import { useQuery } from "@tanstack/react-query";

export default function useUsers() {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      return res.json();
    },
  });
  return [users, refetch];
}
