import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={container}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-800 px-4 py-12 border-2 border-white"
    >
      {/* Hero Content */}
      <motion.div 
        variants={container}
        className="text-center max-w-2xl"
      >
        <motion.h1 
          variants={item}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          A Career & College Readiness Platform for{' '}
          <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
            ALL Students
          </span>
        </motion.h1>
        
        <motion.p 
          variants={item}
          className="text-xl text-gray-300 mb-8"
        >
          SkillSync by Paper helps ensure that every student's education leads to a successful career outcome—whether through a 4-year degree or going into the workforce.
        </motion.p>
        
        <motion.button
          variants={item}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 mx-auto"
        >
          See SkillSync in Action! <FaArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>

      {/* Image */}
      <motion.div 
        variants={fadeIn}
        transition={{ delay: 0.4 }}
        className="mt-12 w-full max-w-4xl"
      >
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          src="https://cdn.pixabay.com/photo/2024/12/28/01/27/ai-generated-9295105_1280.jpg"
          alt="SkillSync Platform"
          className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 15px 30px -5px rgba(34, 197, 94, 0.2)"
          }}
        />
      </motion.div>

      {/* Floating animated elements */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 left-10 text-green-400 text-2xl opacity-0 md:opacity-100"
      >
        ↓ Scroll to explore ↓
      </motion.div>

      {/* Animated gradient border */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(45deg, 
            rgba(34, 197, 94, 0.1) 0%, 
            rgba(34, 197, 94, 0) 20%, 
            rgba(34, 197, 94, 0) 80%, 
            rgba(34, 197, 94, 0.1) 100%)`
        }}
      />
    </motion.div>
  );
};

export default HeroSection;