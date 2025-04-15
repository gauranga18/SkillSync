import React, { useEffect, useState } from "react";
import Courses from '../DB/Courses.json'
const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Adjust the path if the JSON is local or the URL if hosted externally
    fetch("/src/DB/Courses.json")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div>
      <h1>Available Courses</h1>
      <div className="course-list">
        {courses.length === 0 ? (
          <p>Loading courses...</p>
        ) : (
          courses.map((course) => (
            <div key={course.id} className="course-card">
              <img src={course.image} alt={course.title} />
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <p><strong>Duration:</strong> {course.duration}</p>
              <p><strong>Level:</strong> {course.level}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CourseList;
