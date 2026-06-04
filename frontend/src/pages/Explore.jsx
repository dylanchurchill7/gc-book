import { useEffect, useState } from "react";
import Course from "../components/Course.jsx";
import "../css/Explore.css";

function Explore() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Failed to fetch courses:", err));
  }, []);
  return (
    <>
      <h1>Explore Courses</h1>
      <div className="course-list">
        {courses.map((course) => (
          <Course
            key={course.id}
            name={course.name}
            location={course.location}
            description={course.description}
            image={course.image_url}
          />
        ))}
      </div>
    </>
  );
}

export default Explore;
