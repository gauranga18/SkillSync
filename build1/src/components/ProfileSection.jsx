import React from 'react';
import { FaUser, FaBriefcase, FaChartLine, FaLightbulb, FaBookOpen } from 'react-icons/fa'; // Icons from React Icons

const ProfileSection = () => {
  // Mock data for job suggestions and learning recommendations
  const jobSuggestions = [
    { id: 1, title: 'Frontend Developer', company: 'Tech Corp' },
    { id: 2, title: 'UI/UX Designer', company: 'Design Studio' },
    { id: 3, title: 'Data Analyst', company: 'Data Insights' },
  ];

  const learningRecommendations = [
    { id: 1, title: 'Advanced JavaScript', platform: 'Udemy' },
    { id: 2, title: 'React Masterclass', platform: 'Coursera' },
    { id: 3, title: 'UI/UX Design Basics', platform: 'Skillshare' },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-6 sm:p-8 lg:p-12">
      {/* User Dashboard */}
      <div className="max-w-7xl mx-auto">
        {/* Profile Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <FaUser className="w-8 h-8 text-gray-600 dark:text-gray-300" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">John Doe</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Career Goal: Software Engineer</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Skill Level: Intermediate</p>
            </div>
          </div>
        </div>

        {/* Skill Report */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
            <FaChartLine className="w-6 h-6 mr-2 text-purple-600" />
            AI-Based Skill Gap Analysis
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700 dark:text-gray-300">JavaScript</span>
              <span className="text-gray-700 dark:text-gray-300">80%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full"
                style={{ width: '80%' }}
              ></div>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700 dark:text-gray-300">React</span>
              <span className="text-gray-700 dark:text-gray-300">65%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full"
                style={{ width: '65%' }}
              ></div>
            </div>
          </div>
        </div>

        {/* Job Suggestions */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
            <FaBriefcase className="w-6 h-6 mr-2 text-blue-600" />
            Recommended Job Listings
          </h3>
          <div className="space-y-3">
            {jobSuggestions.map((job) => (
              <div
                key={job.id}
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{job.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{job.company}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Recommendations */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
            <FaBookOpen className="w-6 h-6 mr-2 text-green-600" />
            Personalized Learning Recommendations
          </h3>
          <div className="space-y-3">
            {learningRecommendations.map((course) => (
              <div
                key={course.id}
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{course.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{course.platform}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;