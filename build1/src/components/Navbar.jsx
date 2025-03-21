import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };x

  return (
    <nav className="bg-white shadow-md sticky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Brand/Logo */}
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-gray-800">
              Skill Sync
            </a>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <a href="/" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </a>
            <a href="/about" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
              About
            </a>
            <div className="relative">
              <button
                onClick={toggleServicesDropdown}
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
              >
                Services
              </button>
              {isServicesDropdownOpen && (
                <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <a href="/service1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Resources
                    </a>
                    <a href="/service2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Community
                    </a>
                  </div>
                </div>
              )}
            </div>
            <a href="/contact" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </a>
          </div>

          {/* Profile Button and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* <a href="/profile" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
              Profile
            </a> */}
            <button
              onClick={toggleMobileMenu}
              className="sm:hidden p-2 text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Collapsible) */}
      <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="/" className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
            Home
          </a>
          <a href="/about" className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
            About
          </a>
          <a href="/services" className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
            Services
          </a>
          <a href="/contact" className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
            Contact
          </a>
          {/* <a href="/profile" className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
            Profile
          </a> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;