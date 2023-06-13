import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle";
import SingleClass from "./SingleClass";

export default function PopularClasses() {
  const [classesData, setClassesData] = useState([]);
  console.log(classesData);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setClassesData(data));
  }, []);
  return (
    <div>
      <SectionTitle heading={"Popular Classes"} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
        {classesData.slice(0, 6).map((classData) => (
          <SingleClass key={classData.class_id} classData={classData} />
        ))}
      </div>
    </div>
  );
}
