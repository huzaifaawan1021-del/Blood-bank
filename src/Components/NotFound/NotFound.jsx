// import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-red-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-slate-900/60 backdrop-blur-xl border border-red-500/20 rounded-[32px] p-8 text-center shadow-[0_20px_50px_rgba(239,68,68,0.1)] hover:border-red-500/30 transition-all"
      >
        {/* Warning Icon with pulse animation */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-20 h-20 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6"
        >
          <FaExclamationTriangle className="text-4xl text-red-500" />
        </motion.div>

        {/* Error Code */}
        <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-red-400 to-red-600 font-poppins tracking-tighter">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl font-bold text-white font-poppins mt-2">
          Page Not Found
        </h2>
        <p className="text-slate-400 text-sm mt-3 leading-relaxed">
          Oops! The route you are looking for does not exist or has been shifted to another directory endpoint.
        </p>

        {/* Back to Home Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/')}
          className="mt-8 w-full py-3 px-5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold text-sm tracking-wide shadow-md shadow-red-600/20 flex items-center justify-center gap-2 transition-opacity hover:opacity-95"
        >
          <FaHome />
          Return to Home
        </motion.button>
      </motion.div>
    </div>
  );
};

export default NotFound;