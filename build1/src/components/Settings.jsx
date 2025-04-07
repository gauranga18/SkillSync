import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiLock, FiMail, FiMoon, FiEye, FiEyeOff, FiUser } from 'react-icons/fi';

const Settings = () => {
  const [settings, setSettings] = useState({
    darkMode: true,
    emailNotifications: true,
    accountPrivacy: false
  });

  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const toggleSetting = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Password change logic here
    setShowPasswordForm(false);
    setCurrentPassword('');
    setNewPassword('');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-gray-100">
      {/* Fixed Header */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-10 bg-gray-800/80 backdrop-blur-sm border-b border-gray-700"
      >
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center">
          <button className="p-2 rounded-full hover:bg-gray-700 transition-colors">
            <FiArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold ml-4">Settings</h1>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-4 py-6"
      >
        {/* User Settings Panel */}
        <motion.section 
          variants={itemVariants}
          className="mb-8"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-lg font-semibold mb-4 text-gray-300"
          >
            Preferences
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden"
          >
            {/* Dark Mode Toggle */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-between p-4 border-b border-gray-700"
            >
              <div className="flex items-center">
                <FiMoon className="w-5 h-5 mr-3 text-green-400" />
                <span>Dark Mode</span>
              </div>
              <button
                onClick={() => toggleSetting('darkMode')}
                className={`relative w-12 h-6 rounded-full transition-colors ${settings.darkMode ? 'bg-green-500' : 'bg-gray-600'}`}
              >
                <motion.span
                  className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-md"
                  animate={{ left: settings.darkMode ? 'calc(100% - 1.25rem)' : '0.25rem' }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </button>
            </motion.div>

            {/* Email Notifications Toggle */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-between p-4 border-b border-gray-700"
            >
              <div className="flex items-center">
                <FiMail className="w-5 h-5 mr-3 text-green-400" />
                <span>Email Notifications</span>
              </div>
              <button
                onClick={() => toggleSetting('emailNotifications')}
                className={`relative w-12 h-6 rounded-full transition-colors ${settings.emailNotifications ? 'bg-green-500' : 'bg-gray-600'}`}
              >
                <motion.span
                  className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-md"
                  animate={{ left: settings.emailNotifications ? 'calc(100% - 1.25rem)' : '0.25rem' }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </button>
            </motion.div>

            {/* Account Privacy Toggle */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-between p-4"
            >
              <div className="flex items-center">
                <FiUser className="w-5 h-5 mr-3 text-green-400" />
                <span>Private Account</span>
              </div>
              <button
                onClick={() => toggleSetting('accountPrivacy')}
                className={`relative w-12 h-6 rounded-full transition-colors ${settings.accountPrivacy ? 'bg-green-500' : 'bg-gray-600'}`}
              >
                <motion.span
                  className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-md"
                  animate={{ left: settings.accountPrivacy ? 'calc(100% - 1.25rem)' : '0.25rem' }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </button>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Account Management */}
        <motion.section 
          variants={itemVariants}
          className="mb-8"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-lg font-semibold mb-4 text-gray-300"
          >
            Account Management
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden"
          >
            {/* Change Password */}
            <motion.div variants={itemVariants}>
              <button
                onClick={() => setShowPasswordForm(!showPasswordForm)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-700/50 transition-colors"
              >
                <div className="flex items-center">
                  <FiLock className="w-5 h-5 mr-3 text-green-400" />
                  <span>Change Password</span>
                </div>
                <motion.div
                  animate={{ rotate: showPasswordForm ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiArrowLeft className="w-4 h-4" />
                </motion.div>
              </button>

              <AnimatePresence>
                {showPasswordForm && (
                  <motion.form
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    onSubmit={handlePasswordSubmit}
                    className="overflow-hidden px-4"
                  >
                    <div className="pb-4">
                      <label className="block text-sm text-gray-400 mb-2">Current Password</label>
                      <div className="relative">
                        <input
                          type={showCurrentPassword ? "text" : "password"}
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                          className="absolute right-3 top-2.5 text-gray-400 hover:text-white transition-colors"
                        >
                          {showCurrentPassword ? <FiEyeOff /> : <FiEye />}
                        </button>
                      </div>
                    </div>

                    <div className="pb-4">
                      <label className="block text-sm text-gray-400 mb-2">New Password</label>
                      <div className="relative">
                        <input
                          type={showNewPassword ? "text" : "password"}
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-3 top-2.5 text-gray-400 hover:text-white transition-colors"
                        >
                          {showNewPassword ? <FiEyeOff /> : <FiEye />}
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-end pb-4 gap-2">
                      <button
                        type="button"
                        onClick={() => setShowPasswordForm(false)}
                        className="px-4 py-2 text-gray-300 hover:text-white rounded-lg transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors"
                      >
                        Update Password
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Deactivate Account */}
            <motion.div 
              variants={itemVariants}
              className="border-t border-gray-700"
            >
              <button className="w-full flex items-center p-4 text-red-400 hover:bg-gray-700/50 transition-colors">
                <FiLock className="w-5 h-5 mr-3" />
                <span>Deactivate Account</span>
              </button>
            </motion.div>
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Settings;