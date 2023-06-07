import { useEffect, useState } from "react";
import Container from "../../components/Container";

export default function Courses() {
  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    fetch("classes.json")
      .then((res) => res.json())
      .then((data) => setCoursesData(data));
  }, []);

  return (
    <div>
      <Container>
        <div>
          {coursesData.map((courseData, index) => (
            <p key={index}>hellow</p>
          ))}
        </div>
      </Container>
    </div>
  );
}
