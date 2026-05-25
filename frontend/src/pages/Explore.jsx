import Course from "../components/Course.jsx";
import "../css/Explore.css";
import biggarImage from "../assets/Biggargc.png";
import perdueImage from "../assets/Perduegc.png";

function Explore() {
  const courses = [
    {
      name: "Biggar Golf Club",
      location: "Biggar, Saskatchewan",
      description: "A 9 hole course with local prairie feel",
      image: biggarImage,
    },
    {
      name: "Perdue Golf Course",
      location: "Perdue, Saskatchewan",
      description:
        "A community golf course for casual rounds and local player.",
      image: perdueImage,
    },
  ];
  return (
    <>
      <h1>Explore Courses</h1>
      <div className="course-list">
        {courses.map((course) => (
          <Course
            key={course.name}
            name={course.name}
            location={course.location}
            description={course.description}
            image={course.image}
          />
        ))}
      </div>
    </>
  );
}

export default Explore;
