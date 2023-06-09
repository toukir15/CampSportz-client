import { useEffect, useState } from "react";
import Container from "../../components/Container";
import SingleCourse from "./SingleCourses";

export default function Courses() {
  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCoursesData(data));
  }, []);

  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20">
          {coursesData.map((courseData, index) => (
            <SingleCourse key={index} courseData={courseData}></SingleCourse>
          ))}
        </div>
      </Container>
    </div>
  );
}
