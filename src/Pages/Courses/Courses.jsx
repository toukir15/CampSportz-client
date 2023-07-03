import { useEffect, useState } from "react";
import Container from "../../components/Container";
import SingleCourse from "./SingleCourses";
import SectionTitle from "../../components/SectionTitle";

export default function Courses() {
  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    // all aproved courses
    fetch(`${import.meta.env.VITE_livesite_url}/course/approved`)
      .then((res) => res.json())
      .then((data) => setCoursesData(data));
  }, []);

  return (
    <div className="flex items-center px-2">
      <Container>
        <SectionTitle heading={"Courses"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 b-20">
          {coursesData.map((courseData, index) => (
            <SingleCourse key={index} courseData={courseData}></SingleCourse>
          ))}
        </div>
      </Container>
    </div>
  );
}
