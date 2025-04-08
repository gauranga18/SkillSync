import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Changed from Link to NavLink
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaBook, FaFolder, FaCog, FaUser, FaTimes, FaBars, FaArrowRight, FaCrown } from 'react-icons/fa';
import ResourceSection from './ResourceSection';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navItems = [
    { icon: <FaHome />, label: "Dashboard", path: "/dashboard" },
    { icon: <FaBook />, label: "Courses", path: "/ResourceSection" },
    { icon: <FaFolder />, label: "Resources", path: "/resources" },
    { icon: <FaCog />, label: "Settings", path: "/settings" }
  ];

  // Animation variants (unchanged)
  const sidebarVariants = {
    open: { width: 256, transition: { type: 'spring', damping: 20 } },
    closed: { width: 64, transition: { type: 'spring', damping: 20 } }
  };

  const itemVariants = {
    open: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 500 } },
    closed: { opacity: 0, x: -20, transition: { duration: 0.2 } }
  };

  return (
    <motion.div
      initial={false}
      animate={isSidebarOpen ? "open" : "closed"}
      variants={sidebarVariants}
      className="bg-gradient-to-b from-black to-gray-800 shadow-lg h-screen sticky top-0 z-50 border-r border-gray-700 overflow-hidden"
    >
      {/* Branding/Logo (unchanged) */}
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <AnimatePresence mode="wait">
          {isSidebarOpen && (
            <motion.div
              key="logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-xl font-bold text-white"
            >
              SkillSync
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleSidebar}
          className="p-2 text-gray-300 hover:text-white focus:outline-none"
          aria-label={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          {isSidebarOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
        </motion.button>
      </div>

      {/* User Profile Section (unchanged) */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center ring-2 ring-green-500">
              <FaUser className="w-5 h-5 text-gray-300" />
            </div>
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full border-2 border-green-500 pointer-events-none"
            />
          </motion.div>
          
          <AnimatePresence>
            {isSidebarOpen && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-sm font-medium text-white">User</p>
                <p className="text-xs text-gray-400">user@gmail.com</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Links - Updated to use NavLink */}
      <nav className="p-4">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <motion.li
              key={item.path}
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setHoveredItem(index)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center p-3 rounded-lg transition-colors duration-200 group relative ${
                    isActive 
                      ? 'bg-gray-700 text-white' 
                      : 'text-gray-300 hover:bg-gray-700'
                  }`
                }
              >
                <motion.div
                  animate={{
                    color: hoveredItem === index ? '#22c55e' : '#d1d5db'
                  }}
                  transition={{ duration: 0.1 }}
                >
                  {React.cloneElement(item.icon, { className: "w-5 h-5" })}
                </motion.div>
                
                <AnimatePresence mode="wait">
                  {isSidebarOpen && (
                    <motion.span
                      key={`text-${item.path}`}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="ml-3 group-hover:text-white"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>

                {isSidebarOpen && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ 
                      opacity: hoveredItem === index ? 1 : 0,
                      x: hoveredItem === index ? 0 : -10
                    }}
                    transition={{ duration: 0.1 }}
                    className="absolute right-3"
                  >
                    <FaArrowRight className="w-4 h-4 text-green-400" />
                  </motion.div>
                )}
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Upgrade CTA (unchanged) */}
      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <motion.div
            key="upgrade-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="p-4 mt-auto"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              <FaCrown className="w-4 h-4" />
              Upgrade Plan
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Sidebar;