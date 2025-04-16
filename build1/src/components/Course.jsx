import React, { useEffect, useState } from "react";
import Courses from '../DB/Courses.json';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/src/DB/Courses.json")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-black via-zinc-900 to-gray-900 text-neon-green">
      <h1 className="text-4xl text-white font-extrabold text-center mb-10 text-neon-green drop-shadow-neon">
        Available Courses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.length === 0 ? (
          <p className="text-center text-gray-400 col-span-full">Loading courses...</p>
        ) : (
          courses.map((course) => (
            <div
              key={course.id}
              className="bg-zinc-800/80 border border-zinc-700 rounded-xl shadow-lg hover:shadow-neon transition duration-300"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-6 text-gray-100">
                <h2 className="text-xl font-semibold mb-2 text-neon-green drop-shadow-neon">
                  {course.title}
                </h2>
                <p className="text-gray-300 mb-4">{course.description}</p>
                <div className="flex justify-between text-sm text-gray-400">
                  <p>
                    <strong className="text-neon-green">Duration:</strong> {course.duration}
                  </p>
                  <p>
                    <strong className="text-neon-green">Level:</strong>
                    <span
                      className={`ml-1 px-2 py-1 rounded-full text-xs font-semibold ${
                        course.level === "Beginner"
                          ? "bg-green-800 text-green-200"
                          : course.level === "Intermediate"
                          ? "bg-blue-800 text-blue-200"
                          : "bg-purple-800 text-purple-200"
                      }`}
                    >
                      {course.level}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CourseList;
