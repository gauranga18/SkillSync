import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const platformPillars = [
    { 
      icon: '🧠',
      title: 'Intelligent Matching',
      desc: 'Our algorithm pairs your existing skills with optimal learning paths'
    },
    { 
      icon: '🛠️',
      title: 'Project-Based',
      desc: 'Learn by building real portfolio pieces, not just watching tutorials'
    },
    { 
      icon: '📊',
      title: 'Career-Aligned',
      desc: 'Paths designed to meet actual job market requirements'
    }
  ];

  const howItWorks = [
    { step: 1, title: 'Skill Assessment', desc: 'Quick evaluation of your current abilities' },
    { step: 2, title: 'Path Creation', desc: 'Personalized learning roadmap generation' },
    { step: 3, title: 'Project Work', desc: 'Hands-on application of concepts' },
    { step: 4, title: 'Progress Tracking', desc: 'Visual metrics showing your advancement' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      
      {/* Hero Header */}
      <motion.header 
        className="container mx-auto px-6 py-20 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          The <span className="bg-gradient-to-r from-green-600/90 to-green-700/90 bg-clip-text text-transparent">SkillSync</span> Difference
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A learning platform that adapts to you - not the other way around
        </p>
      </motion.header>

      {/* Value Proposition Cards */}
      <section className="container mx-auto px-6 pb-16">
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {platformPillars.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-lime-400 transition-all transform hover:-translate-y-2 duration-300 shadow-md hover:shadow-purple-500/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-6 py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            How It Works
          </motion.h2>
          <div className="space-y-10">
            {howItWorks.map((item) => (
              <motion.div
                key={item.step}
                className="flex items-start"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: item.step * 0.1 }}
              >
                <div className="bg-gradient-to-br from-green-600/90 to-green-700/90 rounded-full w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0 shadow-lg">
                  <span className="text-xl font-bold">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Combined Creator & CTA Section */}
      <section className="container mx-auto px-6 py-16 bg-gradient-to-t from-black to-gray-900">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Creator Card */}
          <motion.div
            className="bg-gradient-to-r from-black to-gray-900 rounded-xl p-8 flex flex-col hover:shadow-md hover:shadow-green-700/30 transition-all"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col items-center mb-6">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Developer"
                className="w-20 h-20 rounded-full mb-4 border-2 border-gray-600 shadow-md"
              />
              <h3 className="text-xl font-semibold">Platform Creator</h3>
              <p className="text-gray-400">Saurav</p>
            </div>
            <p className="text-gray-300 mb-6 flex-grow text-center">
              Built with a focus on solving real learning challenges in today's fast-moving tech landscape.
            </p>
            <motion.button 
              className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-full text-sm font-medium transition-colors self-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact for Questions
            </motion.button>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            className="bg-gradient-to-r from-black to-gray-800 rounded-xl p-8 flex flex-col justify-center text-center hover:shadow-md hover:shadow-green-500/30 transition-all"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Begin?</h2>
            <p className="text-gray-200 mb-6">
              Start building in-demand skills today with our structured approach
            </p>
            <motion.button 
              className="bg-white text-gray-900 font-medium py-2.5 px-8 rounded-full hover:scale-105 transition-transform shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Now !
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
