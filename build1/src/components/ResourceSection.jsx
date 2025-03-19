import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Icon for CTA button
// Import images locally
import javascriptFundamentalsImage from './public/JS.jpeg';
import reactMasterclassImage from './public/ReactJS.jpeg';
import uiUxDesignBasicsImage from './public/UIUX.jpeg';

const ResourceSection = () => {
  // Mock data for course cards
  const courses = [
    {
      id: 1,
      title: 'JavaScript Fundamentals',
      description: 'Learn the basics of JavaScript and start building interactive web applications.',
      image: javascriptFundamentalsImage, // Use imported image
      link: '/javascript-fundamentals',
    },
    {
      id: 2,
      title: 'React Masterclass',
      description: 'Master React and build modern, scalable web applications with ease.',
      image: reactMasterclassImage, // Use imported image
      link: '/react-masterclass',
    },
    {
      id: 3,
      title: 'UI/UX Design Basics',
      description: 'Discover the principles of UI/UX design and create user-friendly interfaces.',
      image: uiUxDesignBasicsImage, // Use imported image
      link: '/ui-ux-design-basics',
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-6 sm:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Resource Section Title & Description */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Explore Our Resources
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover a wide range of courses designed to help you achieve your learning goals.
          </p>
        </div>

        {/* Course Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Course Image */}
              <img
                src={course.image} // Use imported image directly
                alt={course.title}
                className="w-full h-48 object-cover"
              />

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {course.description}
                </p>

                {/* CTA Button */}
                <a
                  href={course.link}
                  className="flex items-center justify-center w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <span>Start Learning</span>
                  <FaArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceSection;