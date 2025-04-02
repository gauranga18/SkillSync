import React, { useState } from 'react';
import { FaGoogle, FaGithub, FaEye, FaEyeSlash, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Navigate } from 'react-router-dom';
import { 
  doSignInWithEmailAndPassword, 
  doSignInWithGoogle,
  doSignInWithGithub,
  doCreateUserWithEmailAndPassword,
  doPasswordReset
} from '../firebase/Auth';
import { useAuth } from '../context/authContext';

const AuthForm = () => {
  const { userLoggedIn } = useAuth();
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState('');
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (authError) setAuthError('');
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid';
    
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    
    if (!isLogin) {
      if (!formData.username.trim()) newErrors.username = 'Username is required';
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSigningIn(true);
    setAuthError('');

    try {
      if (isLogin) {
        await doSignInWithEmailAndPassword(formData.email, formData.password);
      } else {
        await doCreateUserWithEmailAndPassword(formData.email, formData.password);
        // Here you could add the username to user profile in Firebase
      }
    } catch (error) {
      setAuthError(getAuthErrorMessage(error.code));
      console.error('Authentication error:', error);
    } finally {
      setIsSigningIn(false);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    if (!resetEmail.trim()) {
      setAuthError('Please enter your email');
      return;
    }
    
    try {
      await doPasswordReset(resetEmail);
      setAuthError('');
      alert(`Password reset email sent to ${resetEmail}`);
      setShowResetPassword(false);
    } catch (error) {
      setAuthError(getAuthErrorMessage(error.code));
    }
  };

  const onSocialSignIn = async (provider) => {
    setIsSigningIn(true);
    setAuthError('');

    try {
      if (provider === 'google') {
        await doSignInWithGoogle();
      } else if (provider === 'github') {
        await doSignInWithGithub();
      }
    } catch (error) {
      setAuthError(getAuthErrorMessage(error.code));
      console.error('Social auth error:', error);
    } finally {
      setIsSigningIn(false);
    }
  };

  const getAuthErrorMessage = (code) => {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'Email already in use. Try logging in instead.';
      case 'auth/invalid-credential':
      case 'auth/wrong-password':
        return 'Invalid email or password';
      case 'auth/user-not-found':
        return 'No account found with this email';
      case 'auth/too-many-requests':
        return 'Too many attempts. Try again later.';
      case 'auth/network-request-failed':
        return 'Network error. Please check your connection.';
      default:
        return 'Authentication failed. Please try again.';
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setAuthError('');
    setShowPassword(false);
    setShowConfirmPassword(false);
    setFormData({
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    });
  };

  if (userLoggedIn) {
    return <Navigate to="/" replace={true} />;
  }

  if (showResetPassword) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-700 p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Reset Password</h2>
            <p className="text-gray-400 mb-6">Enter your email to receive a password reset link</p>
            
            {authError && (
              <div className="bg-red-500/20 text-red-300 p-3 rounded-lg text-sm mb-4">
                {authError}
              </div>
            )}

            <form onSubmit={handlePasswordReset} className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Email</label>
                <input
                  type="email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-green-600 to-green-500 text-white py-3 px-4 rounded-lg font-bold hover:shadow-lg hover:shadow-green-500/20 transition-all"
                >
                  Send Reset Link
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => setShowResetPassword(false)}
                  className="flex-1 bg-gray-700 text-white py-3 px-4 rounded-lg font-bold hover:bg-gray-600 transition-all"
                >
                  Cancel
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-700">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-black to-gray-900 p-6 text-center border-b border-gray-700">
            <h2 className="text-2xl font-bold text-white">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-gray-400 mt-2">
              {isLogin ? 'Sign in to continue' : 'Join our community'}
            </p>
          </div>

          {/* Form Body */}
          <form onSubmit={handleAuth} className="p-6 space-y-4">
            {authError && (
              <div className="bg-red-500/20 text-red-300 p-3 rounded-lg text-sm">
                {authError}
              </div>
            )}

            {!isLogin && (
              <div>
                <label className="block text-gray-400 text-sm mb-2">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className={`w-full bg-gray-700/50 border ${errors.username ? 'border-red-500' : 'border-gray-600'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all`}
                  placeholder="Enter username"
                />
                {errors.username && <p className="text-red-400 text-xs mt-1">{errors.username}</p>}
              </div>
            )}

            <div>
              <label className="block text-gray-400 text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-gray-700/50 border ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all`}
                placeholder="Enter email"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full bg-gray-700/50 border ${errors.password ? 'border-red-500' : 'border-gray-600'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all`}
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
            </div>

            {!isLogin && (
              <div>
                <label className="block text-gray-400 text-sm mb-2">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full bg-gray-700/50 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-600'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all`}
                    placeholder="Confirm password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3.5 text-gray-400 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.confirmPassword && <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>}
              </div>
            )}

            {isLogin && (
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowResetPassword(true)}
                  className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSigningIn}
              className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-3 px-4 rounded-lg font-bold hover:shadow-lg hover:shadow-green-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSigningIn ? (
                'Processing...'
              ) : (
                <>
                  {isLogin ? 'Login' : 'Sign Up'}
                  <FaArrowRight className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </form>

          {/* OAuth Options */}
          <div className="px-6 pb-6">
            <div className="relative flex items-center py-4">
              <div className="flex-grow border-t border-gray-700"></div>
              <span className="flex-shrink mx-4 text-gray-400 text-sm">OR CONTINUE WITH</span>
              <div className="flex-grow border-t border-gray-700"></div>
            </div>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => onSocialSignIn('google')}
                disabled={isSigningIn}
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors disabled:opacity-50"
              >
                <FaGoogle className="text-white w-5 h-5" />
              </button>
              <button
                onClick={() => onSocialSignIn('github')}
                disabled={isSigningIn}
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors disabled:opacity-50"
              >
                <FaGithub className="text-white w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Toggle Auth Mode */}
          <div className="bg-gray-900/50 p-4 text-center border-t border-gray-700">
            <p className="text-gray-400">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={toggleAuthMode}
                disabled={isSigningIn}
                className="ml-2 text-green-400 hover:text-green-300 font-medium transition-colors disabled:opacity-50"
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthForm;