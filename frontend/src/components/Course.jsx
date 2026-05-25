import "../css/Course.css";
function Course({ name, location, description, image }) {
  return (
    <>
      <div className="course-card">
        <img className="course-image" src={image} alt={name} />

        <div className="course-content">
          <h2>{name}</h2>
          <p>{location}</p>
          <p>{description}</p>
          <button>Book Tee Time</button>
        </div>
      </div>
    </>
  );
}
export default Course;
