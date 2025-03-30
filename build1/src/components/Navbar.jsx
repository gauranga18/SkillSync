import React, { useState } from 'react';
import { createBrowserRouter, Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaCogs, FaEnvelope, FaUser, FaTimes, FaBars } from 'react-icons/fa';
import { BrowserRouter } from 'react-router-dom';
import Homepage from './HomePage';
import AboutUs from './AboutUs';
import ResourceSection from './ResourceSection'
import CommunitySection from './CommunitySection';
// import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-black to-gray-800 shadow-lg sticky top-0 z-50 border-2 border-white animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand/Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-xl font-bold text-white hover:text-green-400 transition-colors duration-200"
            >
              Skill Sync
            </Link>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden sm:flex sm:items-center sm:space-x-2">
            <Link
              to="/"
              className="flex items-center text-gray-300 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              <FaHome className="mr-2" />
              Home
            </Link>
            <Link
              to="/AboutUs"
              className="flex items-center text-gray-300 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              <FaInfoCircle className="mr-2" />
              About
            </Link>
            <div className="relative">
              <button
                onClick={toggleServicesDropdown}
                className="flex items-center text-gray-300 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium focus:outline-none transition-colors duration-200"
              >
                <FaCogs className="mr-2" />
                Services
              </button>
              {isServicesDropdownOpen && (
                <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-gray-700 z-50">
                  <div className="py-1">
                    <Link
                      to="/ResourceSection"
                      className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Resources
                    </Link>
                    <Link
                      to="/CommunitySection"
                      className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Community
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/"
              className="flex items-center text-gray-300 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              <FaEnvelope className="mr-2" />
              Contact
            </Link>
          </div>

          {/* Profile and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link
              to="/ProfileSection"
              className="hidden sm:flex items-center text-gray-300 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              <FaUser className="mr-2" />
              Profile
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="sm:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Collapsible) */}
      <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-gray-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            <FaHome className="mr-3" />
            Home
          </Link>
          <Link
            to="/"
            className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            <FaInfoCircle className="mr-3" />
            About
          </Link>
          <Link
            to="/"
            className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            <FaCogs className="mr-3" />
            Services
          </Link>
          <Link
            to="/"
            className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            <FaEnvelope className="mr-3" />
            Contact
          </Link>
          <Link
            to="/ProfileSection"
            className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            <FaUser className="mr-3" />
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;