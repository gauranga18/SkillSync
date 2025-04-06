import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ResourceSection = () => {
  // Course data with placeholder images (replace with your actual imports)
  const courses = [
    {
      id: 1,
      title: 'JavaScript Fundamentals',
      description: 'Master the core concepts of JavaScript with hands-on projects',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      duration: '6 Weeks',
      level: 'Beginner'
    },
    {
      id: 2,
      title: 'React Masterclass',
      description: 'Build modern applications with React hooks and context API',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      duration: '8 Weeks',
      level: 'Intermediate'
    },
    {
      id: 3,
      title: 'UI/UX Design Basics',
      description: 'Learn design principles and create user-centered interfaces',
      image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      duration: '4 Weeks',
      level: 'Beginner'
    },
    {
      id: 4,
      title: 'Node.js Backend',
      description: 'Develop scalable server-side applications with Node.js',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      duration: '6 Weeks',
      level: 'Intermediate'
    },
    {
      id: 5,
      title: 'Python for Data Science',
      description: 'Analyze and visualize data with Python libraries',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      duration: '5 Weeks',
      level: 'Beginner'
    },
    {
      id: 6,
      title: 'DevOps Essentials',
      description: 'Learn CI/CD pipelines and cloud deployment strategies',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      duration: '7 Weeks',
      level: 'Advanced'
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              Learning Paths
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Structured courses designed to take you from beginner to job-ready
          </p>
        </motion.div>

        {/* Course Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-700 hover:border-green-500/30"
            >
              {/* Course Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Course Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{course.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    course.level === 'Beginner' ? 'bg-green-900/50 text-green-400' :
                    course.level === 'Intermediate' ? 'bg-yellow-900/50 text-yellow-400' :
                    'bg-red-900/50 text-red-400'
                  }`}>
                    {course.level}
                  </span>
                </div>
                
                <p className="text-gray-400 text-sm mb-4">{course.description}</p>
                
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>⏱️ {course.duration}</span>
                  <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
                </div>

                {/* CTA Button */}
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-500 text-white py-2 px-4 rounded-lg font-medium hover:from-green-500 hover:to-green-400 transition-all duration-300"
                >
                  Enroll Now
                  <FaArrowRight className="w-3 h-3" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 border border-gray-700 rounded-full text-white font-medium hover:bg-gray-800/50 hover:border-green-500 transition-all duration-300"
          >
            View All Courses
            <FaArrowRight className="ml-2 w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ResourceSection;