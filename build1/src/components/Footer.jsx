import React from 'react';
import { FaHome, FaInfoCircle, FaCogs, FaEnvelope, FaQuestionCircle, FaHeadset } from 'react-icons/fa'; // Icons from React Icons

const Footer = () => {
  return (
    <div className="bg-gray-800 dark:bg-gray-900 text-white p-6 sm:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Footer Navigation Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
          <a href="/" className="flex items-center space-x-2 hover:text-gray-400 transition duration-300">
            <FaHome className="w-5 h-5" />
            <span>Home</span>
          </a>
          <a href="/about" className="flex items-center space-x-2 hover:text-gray-400 transition duration-300">
            <FaInfoCircle className="w-5 h-5" />
            <span>About</span>
          </a>
          <a href="/services" className="flex items-center space-x-2 hover:text-gray-400 transition duration-300">
            <FaCogs className="w-5 h-5" />
            <span>Services</span>
          </a>
          <a href="/contact" className="flex items-center space-x-2 hover:text-gray-400 transition duration-300">
            <FaEnvelope className="w-5 h-5" />
            <span>Contact</span>
          </a>
          <a href="/courses" className="flex items-center space-x-2 hover:text-gray-400 transition duration-300">
            <FaBookOpen className="w-5 h-5" />
            <span>Courses</span>
          </a>
          <a href="/faq" className="flex items-center space-x-2 hover:text-gray-400 transition duration-300">
            <FaQuestionCircle className="w-5 h-5" />
            <span>FAQs</span>
          </a>
        </div>

        {/* Contact & FAQ Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Contact Us Card */}
          <div className="bg-gray-700 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <FaHeadset className="w-8 h-8 text-blue-500" />
              <h3 className="text-xl font-bold">Contact Us</h3>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Have questions? Reach out to our support team for assistance.
            </p>
            <a
              href="/contact"
              className="flex items-center justify-center w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <span>Get Help</span>
              <FaArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* FAQs Card */}
          <div className="bg-gray-700 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <FaQuestionCircle className="w-8 h-8 text-green-500" />
              <h3 className="text-xl font-bold">FAQs</h3>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Find answers to commonly asked questions in our FAQ section.
            </p>
            <a
              href="/faq"
              className="flex items-center justify-center w-full bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <span>Read FAQs</span>
              <FaArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Additional Cards (Optional) */}
          <div className="bg-gray-700 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <FaCogs className="w-8 h-8 text-purple-500" />
              <h3 className="text-xl font-bold">Services</h3>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Explore our wide range of services tailored to your needs.
            </p>
            <a
              href="/services"
              className="flex items-center justify-center w-full bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <span>Learn More</span>
              <FaArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          <div className="bg-gray-700 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <FaBookOpen className="w-8 h-8 text-yellow-500" />
              <h3 className="text-xl font-bold">Courses</h3>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Discover our courses and start your learning journey today.
            </p>
            <a
              href="/courses"
              className="flex items-center justify-center w-full bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <span>Explore Courses</span>
              <FaArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;