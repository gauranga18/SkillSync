import React, { useState } from 'react';
import { FaHome, FaBook, FaFolder, FaCog, FaUser } from 'react-icons/fa'; // Import icons from React Icons

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`${
        isSidebarOpen ? 'w-64' : 'w-16'
      } bg-white dark:bg-gray-800 shadow-md h-screen sticky top-0 transition-all duration-300 ease-in-out`}
    >
      {/* Branding/Logo */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <button
            onClick={toggleSidebar}
            className="p-2 text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none"
          >
            {isSidebarOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* User Profile Section */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <FaUser className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </div>
          {isSidebarOpen && (
            <div>
              <p className="text-sm font-medium text-gray-800 dark:text-white">User</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">user@gmail.com</p>
            </div>
          )}
        </div>
      </div>

      {/* Quick Links */}
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <a
              href="/dashboard"
              className="flex items-center p-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition duration-300"
            >
              <FaHome className="w-5 h-5" />
              {isSidebarOpen && <span className="ml-2">Dashboard</span>}
            </a>
          </li>
          <li>
            <a
              href="/courses"
              className="flex items-center p-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition duration-300"
            >
              <FaBook className="w-5 h-5" />
              {isSidebarOpen && <span className="ml-2">Courses</span>}
            </a>
          </li>
          <li>
            <a
              href="/resources"
              className="flex items-center p-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition duration-300"
            >
              <FaFolder className="w-5 h-5" />
              {isSidebarOpen && <span className="ml-2">Resources</span>}
            </a>
          </li>
          <li>
            <a
              href="/settings"
              className="flex items-center p-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition duration-300"
            >
              <FaCog className="w-5 h-5" />
              {isSidebarOpen && <span className="ml-2">Settings</span>}
            </a>
          </li>
        </ul>
      </nav>

      {/* CTA Button (Conditionally Rendered) */}
      {isSidebarOpen && (
        <div className="p-4">
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
            Upgrade Plan
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;