import { useEffect, useState } from "react";
import SingleInstructors from "./SingleInstructor";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";

export default function Instructors() {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_livesite_url}/instructors`)
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <Container>
      <SectionTitle heading={"Instructor"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20 gap-6">
        {instructors.map((instructor) => (
          <SingleInstructors
            key={instructor.instructor_id}
            instructor={instructor}
          />
        ))}
      </div>
    </Container>
  );
}
