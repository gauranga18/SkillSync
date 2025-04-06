import React from 'react';
import { FaDiscord, FaComments, FaUsers, FaCalendarAlt, FaCodeBranch, FaArrowRight } from 'react-icons/fa';
import { IoMdRocket } from 'react-icons/io';
import { motion } from 'framer-motion';

const CommunitySection = () => {
  // Community features data
  const features = [
    {
      icon: <FaComments className="w-6 h-6 text-green-500" />,
      title: "Discussion Forums",
      desc: "Get answers within hours from our community",
      stat: "500+ daily discussions"
    },
    {
      icon: <FaUsers className="w-6 h-6 text-green-500" />,
      title: "Study Groups",
      desc: "Join focused learning squads",
      stat: "120 active groups"
    },
    {
      icon: <FaCalendarAlt className="w-6 h-6 text-green-500" />,
      title: "Live Events",
      desc: "Weekly workshops & AMAs",
      stat: "3 events weekly"
    },
    {
      icon: <FaCodeBranch className="w-6 h-6 text-green-500" />,
      title: "Project Collab",
      desc: "Build portfolio projects together",
      stat: "80+ open projects"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "The study groups helped me land my first dev job!",
      author: "Sarah, Frontend Developer",
      role: "React Specialist"
    },
    {
      quote: "Found my perfect project team here in just 2 days!",
      author: "Alex, Fullstack Dev",
      role: "Node.js Contributor"
    },
    {
      quote: "Our group built 3 production apps together",
      author: "Team CodeCrafters",
      role: "2023 Hackathon Winners"
    }
  ];

  // Active members mock data
  const activeMembers = [
    { id: 1, initials: "JD", bg: "bg-purple-600" },
    { id: 2, initials: "AM", bg: "bg-blue-600" },
    { id: 3, initials: "SK", bg: "bg-green-600" },
    { id: 4, initials: "TP", bg: "bg-yellow-600" },
    { id: 5, initials: "RJ", bg: "bg-red-600" },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              SkillSync Community
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Connect, collaborate, and grow with 5,000+ active learners
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-gray-700 mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-400 mb-3">{feature.desc}</p>
              <p className="text-sm text-green-400 font-medium">{feature.stat}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Active Members & Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 rounded-xl p-8 mb-16 border border-gray-700"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              transition={{ type: "spring" }}
              className="flex items-center mb-6 md:mb-0"
            >
              <div className="flex -space-x-2 mr-4">
                {activeMembers.map((member, i) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`${member.bg} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold`}
                  >
                    {member.initials}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 text-gray-400 font-bold"
                >
                  +50
                </motion.div>
              </div>
              <div>
                <p className="text-white font-bold">5,243 Active Members</p>
                <p className="text-gray-400 text-sm">Online now: 427</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ staggerChildren: 0.1 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center"
            >
              <motion.div whileHover={{ scale: 1.05 }}>
                <p className="text-green-500 text-2xl font-bold">120+</p>
                <p className="text-gray-400 text-sm">Study Groups</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <p className="text-green-500 text-2xl font-bold">3.2K</p>
                <p className="text-gray-400 text-sm">Projects Shared</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="hidden sm:block">
                <p className="text-green-500 text-2xl font-bold">98%</p>
                <p className="text-gray-400 text-sm">Positive Feedback</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="mb-16">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Success Stories
          </motion.h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <IoMdRocket className="w-6 h-6 text-green-500 mr-2" />
                  <h4 className="text-lg font-bold text-white">Achievement Unlocked</h4>
                </div>
                <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-green-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring" }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-xl p-8 border border-green-500/30"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Join the Community?</h3>
              <p className="text-gray-300 max-w-lg">Connect with learners, get expert help, and accelerate your journey</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full font-bold transition-all duration-300"
                onClick={() => window.location.href = "https://discord.gg/qbWxaYSH"}
              >
                <FaDiscord className="mr-2" /> Join Discord
                <FaArrowRight className="ml-2 w-3 h-3" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-bold border border-gray-600 transition-all duration-300"
              >
                Explore Forums
                <FaArrowRight className="ml-2 w-3 h-3" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CommunitySection;