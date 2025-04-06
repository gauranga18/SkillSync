import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaInfoCircle, FaCogs, FaEnvelope, FaUser, FaTimes, FaBars, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const navLinks = [
    { path: "/", icon: <FaHome />, text: "Home" },
    { path: "/AboutUs", icon: <FaInfoCircle />, text: "About" },
    { path: "/ContactUs", icon: <FaEnvelope />, text: "Contact" },
    { path: "/AuthForm", icon: <FaUser />, text: "Profile" }
  ];

  const servicesLinks = [
    { path: "/ResourceSection", text: "Resources" },
    { path: "/CommunitySection", text: "Community" }
  ];

  // Animation variants
  const mobileMenuVariants = {
    open: { 
      opacity: 1,
      height: "auto",
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    },
    closed: { 
      opacity: 0,
      height: 0,
      transition: { staggerChildren: 0.1, staggerDirection: -1 }
    }
  };

  const navItemVariants = {
    open: { y: 0, opacity: 1 },
    closed: { y: -20, opacity: 0 }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-black to-gray-800 shadow-lg sticky top-0 z-50 border-b-2 border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand/Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link 
              to="/" 
              className="text-xl font-bold text-white hover:text-green-400 transition-colors duration-200 flex items-center"
            >
              <motion.span
                animate={{ 
                  textShadow: hoveredLink === "logo" ? "0 0 8px rgba(34, 197, 94, 0.6)" : "none"
                }}
                onHoverStart={() => setHoveredLink("logo")}
                onHoverEnd={() => setHoveredLink(null)}
              >
                SkillSync
              </motion.span>
            </Link>
          </motion.div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden sm:flex sm:items-center sm:space-x-2">
            {navLinks.slice(0, 2).map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredLink(link.text)}
                onHoverEnd={() => setHoveredLink(null)}
              >
                <Link
                  to={link.path}
                  className="flex items-center text-gray-300 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  <motion.span
                    animate={{ 
                      color: hoveredLink === link.text ? '#22c55e' : '#d1d5db'
                    }}
                    className="mr-2"
                  >
                    {link.icon}
                  </motion.span>
                  {link.text}
                  {hoveredLink === link.text && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}

            {/* Services Dropdown */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
            >
              <motion.button
                onClick={toggleServicesDropdown}
                className="flex items-center text-gray-300 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium focus:outline-none transition-colors duration-200"
                whileHover={{ color: '#22c55e' }}
              >
                <FaCogs className="mr-2" />
                Services
              </motion.button>

              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-gray-700 z-50 overflow-hidden"
                  >
                    <div className="py-1">
                      {servicesLinks.map((link, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ x: 5 }}
                        >
                          <Link
                            to={link.path}
                            className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                          >
                            <FaArrowRight className="mr-2 text-green-400 text-xs" />
                            {link.text}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {navLinks.slice(2).map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredLink(link.text)}
                onHoverEnd={() => setHoveredLink(null)}
              >
                <Link
                  to={link.path}
                  className="flex items-center text-gray-300 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  <motion.span
                    animate={{ 
                      color: hoveredLink === link.text ? '#22c55e' : '#d1d5db'
                    }}
                    className="mr-2"
                  >
                    {link.icon}
                  </motion.span>
                  {link.text}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.1 }}
          >
            <button
              onClick={toggleMobileMenu}
              className="sm:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu (Collapsible) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="sm:hidden bg-gray-800 overflow-hidden"
          >
            <motion.div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  variants={navItemVariants}
                >
                  <Link
                    to={link.path}
                    className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                    onClick={toggleMobileMenu}
                  >
                    <span className="mr-3">{link.icon}</span>
                    {link.text}
                  </Link>
                </motion.div>
              ))}
              
              {/* Services Dropdown in Mobile */}
              <motion.div variants={navItemVariants}>
                <div className="flex flex-col pl-4">
                  <h4 className="flex items-center text-gray-400 px-3 py-2 text-base font-medium">
                    <FaCogs className="mr-3" />
                    Services
                  </h4>
                  {servicesLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className="flex items-center text-gray-300 hover:text-white px-6 py-2 rounded-md text-base font-medium"
                      onClick={toggleMobileMenu}
                    >
                      <FaArrowRight className="mr-3 text-xs text-green-400" />
                      {link.text}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;