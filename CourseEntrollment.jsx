import React, { useState } from "react";

function CourseEnrollment() {
  const [course, setCourse] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enrollCourse = (e) => {
    e.preventDefault();

    if (course !== "") {
      setEnrolledCourses([...enrolledCourses, course]);
      setCourse("");
    }
  };

  return (
    <div style={{ width: "300px", margin: "40px auto", fontFamily: "Arial" }}>
      <h3>Course Enrollment</h3>

      <form onSubmit={enrollCourse}>
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        >
          <option value="">Select Course</option>
          <option>Web Development</option>
          <option>Python Programming</option>
          <option>Data Science</option>
          <option>AI & ML</option>
        </select>

        <button type="submit">Enroll</button>
      </form>

      <h4>Enrolled Courses:</h4>
      <ul>
        {enrolledCourses.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseEnrollment;
