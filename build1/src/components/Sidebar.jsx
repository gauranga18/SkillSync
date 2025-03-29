import React, { useState } from 'react';
import { FaHome, FaBook, FaFolder, FaCog, FaUser, FaTimes, FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`${
        isSidebarOpen ? 'w-64' : 'w-16'
      } bg-gradient-to-b from-black to-gray-800 shadow-lg h-screen sticky top-0 transition-all duration-300 ease-in-out z-50 border-2 border-white`}
    >
      {/* Branding/Logo */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-end">
          <button
            onClick={toggleSidebar}
            className="p-2 text-gray-300 hover:text-white focus:outline-none transition-colors duration-200"
          >
            {isSidebarOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* User Profile Section */}
      <div className="p-4 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center ring-2 ring-blue-500">
            <FaUser className="w-5 h-5 text-gray-300" />
          </div>
          {isSidebarOpen && (
            <div>
              <p className="text-sm font-medium text-white">User</p>
              <p className="text-xs text-gray-400">user@gmail.com</p>
            </div>
          )}
        </div>
      </div>

      {/* Quick Links */}
      <nav className="p-4 ">
        <ul className="space-y-3">
          <li>
            <a
              href="/dashboard"
              className="flex items-center p-3 text-gray-300 hover:bg-gray-700 rounded-lg transition-all duration-200 group "
            >
              <FaHome className="w-5 h-5 group-hover:text-green-400" />
              {isSidebarOpen && <span className="ml-3 group-hover:text-white">Dashboard</span>}
            </a>
          </li>
          <li>
            <a
              href="/courses"
              className="flex items-center p-3 text-gray-300 hover:bg-gray-700 rounded-lg transition-all duration-200 group"
            >
              <FaBook className="w-5 h-5 group-hover:text-green-400" />
              {isSidebarOpen && <span className="ml-3 group-hover:text-white">Courses</span>}
            </a>
          </li>
          <li>
            <a
              href="/resources"
              className="flex items-center p-3 text-gray-300 hover:bg-gray-700 rounded-lg transition-all duration-200 group"
            >
              <FaFolder className="w-5 h-5 group-hover:text-green-400" />
              {isSidebarOpen && <span className="ml-3 group-hover:text-white">Resources</span>}
            </a>
          </li>
          <li>
            <a
              href="/settings"
              className="flex items-center p-3 text-gray-300 hover:bg-gray-700 rounded-lg transition-all duration-200 group"
            >
              <FaCog className="w-5 h-5 group-hover:text-green-400" />
              {isSidebarOpen && <span className="ml-3 group-hover:text-white">Settings</span>}
            </a>
          </li>
        </ul>
      </nav>

      {/* CTA Button (Conditionally Rendered) */}
      {isSidebarOpen && (
        <div className="p-4 mt-4">
          <button className="w-full bg-gradient-to-r from-green-500 to-green-400 text-white px-4 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-600 transition-all duration-300 shadow-md hover:shadow-lg">
            Upgrade Plan
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;