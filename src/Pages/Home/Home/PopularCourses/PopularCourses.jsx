import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle";
import SinglePopularCourse from "./singlePopularCourse";

export default function PopularCourses() {
  const [coursesData, setCoursesData] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_livesite_url}/courses`)
      .then((res) => res.json())
      .then((data) => setCoursesData(data));
  }, []);
  return (
    <div className="flex flex-col items-center !important">
      <SectionTitle heading={"Popular Classes"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 justify-center items-center">
        {coursesData.slice(0, 6).map((courseData) => (
          <SinglePopularCourse
            key={courseData.class_id}
            courseData={courseData}
          />
        ))}
      </div>
    </div>
  );
}
