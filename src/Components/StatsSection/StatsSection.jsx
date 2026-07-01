// import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  // Stagger animation configuration for sequential loading
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const statsData = [
    {
      id: 1,
      icon: '🩸',
      count: '12,500+',
      label: 'Registered Donors',
      bgGradient: 'from-red-500/5 to-transparent',
    },
    {
      id: 2,
      icon: '❤️',
      count: '950+',
      label: 'Lives Saved',
      bgGradient: 'from-emerald-500/5 to-transparent',
    },
    {
      id: 3,
      icon: '🏥',
      count: '80+',
      label: 'Hospitals Connected',
      bgGradient: 'from-blue-500/5 to-transparent',
    },
    {
      id: 4,
      icon: '📍',
      count: '25+',
      label: 'Cities Covered',
      bgGradient: 'from-amber-500/5 to-transparent',
    },
  ];

  return (
    <section className="py-20  bg-red-200/30 relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-['Manrope'] font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Our Impact in <span className="text-[#DC2626]">Numbers</span>
          </h2>
          <p className="font-['Inter'] text-sm sm:text-base text-gray-500 mt-3">
            Every entry represents a network of heroes dedicated to bridging the gap between donors and patients across the country.
          </p>
        </div>

        {/* 4 Cards Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {statsData.map((stat) => (
            <motion.div
              key={stat.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px -15px rgba(220, 38, 38, 0.08)",
                borderColor: "rgba(220, 38, 38, 0.2)"
              }}
              className="relative bg-white border border-slate-100 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              {/* Subtle Corner Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Icon Container */}
              <div className="w-16 h-16 bg-red-50 text-3xl flex items-center justify-center rounded-2xl shadow-sm border border-red-100/50 mb-6 group-hover:scale-110 transition-transform duration-300 z-10">
                {stat.icon}
              </div>

              {/* Counter/Number */}
              <h3 className="font-['Manrope'] font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight mb-2 z-10 group-hover:text-[#DC2626] transition-colors duration-200">
                {stat.count}
              </h3>

              {/* Label */}
              <p className="font-['Inter'] font-semibold text-sm text-gray-500 tracking-wide uppercase z-10">
                {stat.label}
              </p>

              {/* Bottom Accent line indicator */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-[#DC2626] rounded-t-full group-hover:w-1/2 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default StatsSection;