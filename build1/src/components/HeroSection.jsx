import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';
import SurveyModal from './SurveyModal';

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  // Add survey functionality
  const [ showSurvey, setShowSurvey] = useState(true);

  // Enhanced animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const floatingArrow = {
    animate: {
      y: [0, -15, 0],
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const handleHoverStart = async () => {
    setIsHovered(true);
    await controls.start({
      scale: 1.05,
      boxShadow: "0 20px 40px -10px rgba(34, 197, 94, 0.4)",
      transition: { duration: 0.3 }
    });
  };

  const handleHoverEnd = async () => {
    setIsHovered(false);
    await controls.start({
      scale: 1,
      boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.3)",
      transition: { duration: 0.3 }
    });
  };

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={container}
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-800 px-4 py-16 sm:py-20 overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Floating gradient dots */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-green-500 to-green-600"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.1 + Math.random() * 0.2
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 40],
              x: [0, (Math.random() - 0.5) * 40],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Hero Content */}
      <div>
        <h1>Welcom Back !</h1>
        <SurveyModal isOpen={showSurvey} onClose={()=>{
          setShowSurvey(false)
        }}>
        <button onClick={
        ()=>{
          setShowSurvey(false)
        }  
        }>
          Submit
        </button>
        </SurveyModal>
      </div>
      <motion.div 
        className="text-center max-w-2xl px-2 sm:px-4 z-10"
      >
        <motion.h1 
          variants={item}
          className="text-3xl xs:text-4xl sm:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight"
        >
          A Career & College Readiness Platform for{' '}
          <motion.span 
            className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent"
            whileHover={{
              textShadow: "0 0 10px rgba(34, 197, 94, 0.7)",
              transition: { duration: 0.3 }
            }}
          >
            ALL Students
          </motion.span>
        </motion.h1>
        
        <motion.p 
          variants={item}
          className="text-base xs:text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-lg mx-auto leading-relaxed"
        >
          SkillSync by Paper helps ensure that every student's education leads to a successful career outcome—whether through a 4-year degree or going into the workforce.
        </motion.p>
        
        <motion.div variants={item}>
          <motion.button
            animate={controls}
            initial={{
              scale: 1,
              boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.3)"
            }}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all flex items-center gap-2 mx-auto relative overflow-hidden"
          >
            <motion.span
              animate={{
                x: isHovered ? [0, 5, 0] : 0
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatDelay: 1.5
              }}
              className="flex items-center gap-2"
            >
              See SkillSync in Action! <FaArrowRight className="w-3 sm:w-4 h-3 sm:h-4" />
            </motion.span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0"
              animate={{
                opacity: isHovered ? [0, 0.3, 0] : 0
              }}
              transition={{ duration: 1.5 }}
            />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Image */}
      <motion.div 
        className="mt-8 sm:mt-12 w-full max-w-4xl px-2 sm:px-4 z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <motion.div
          whileHover={{ 
            scale: 1.01,
            boxShadow: "0 20px 40px -10px rgba(34, 197, 94, 0.3)"
          }}
          className="relative rounded-xl overflow-hidden shadow-2xl"
        >
          <motion.img
            src="https://cdn.pixabay.com/photo/2024/12/28/01/27/ai-generated-9295105_1280.jpg"
            alt="SkillSync Platform"
            className="w-full h-auto"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        variants={floatingArrow}
        animate="animate"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-green-400 text-xl hidden xs:flex flex-col items-center"
      >
        <span className="text-xs sm:text-sm mb-1">Explore More</span>
        <FaChevronDown />
      </motion.div>

      {/* Dynamic grid overlay */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ delay: 1 }}
        style={{
          backgroundImage: `
            linear-gradient(to right, #22c55e 1px, transparent 1px),
            linear-gradient(to bottom, #22c55e 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />
    </motion.div>
  );
};

export default HeroSection;