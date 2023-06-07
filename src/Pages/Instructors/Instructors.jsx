import { useEffect, useState } from "react";
import SingleInstructors from "./SingleInstructors";
import Container from "../../components/Container";

export default function Instructors() {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("instructors.json")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20 gap-6">
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
