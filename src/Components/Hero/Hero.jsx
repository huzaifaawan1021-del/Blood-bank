import { motion } from 'framer-motion';
import { Search, Heart, ShieldCheck, Users, Droplets, Activity } from 'lucide-react';

const Hero = () => {
  // Framer Motion Variants for Staggered Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 20 } 
    }
  };

  const stats = [
    { icon: <Users className="w-6 h-6 text-red-600" />, count: "15,000+", label: "Active Donors" },
    { icon: <Droplets className="w-6 h-6 text-red-600" />, count: "48,200+", label: "Liters Donated" },
    { icon: <ShieldCheck className="w-6 h-6 text-red-600" />, count: "100%", label: "Safe & Verified" },
  ];

  return (
    <div className=" relative min-h-screen bg-gradient-to-br from-white via-[#FFF5F5] to-slate-50 pt-0 overflow-hidden flex flex-col justify-center">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-40 left-[-10%] w-[40rem] h-[40rem] bg-red-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[35rem] h-[35rem] bg-slate-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            className="lg:col-span-6 space-y-8 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible" 
          >
            {/* Tagline Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 border border-red-100 rounded-full text-red-600 font-['Inter'] font-semibold text-xs uppercase tracking-wider shadow-sm">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              Every Drop Matters
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              variants={itemVariants} 
              className="font-['Manrope'] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-[1.1]"
            >
              Donate Blood,<br />
              <span className="bg-gradient-to-r from-[#DC2626] to-red-500 bg-clip-text text-transparent">
                Save Lives.
              </span>
            </motion.h1>

            {/* Sub-description */}
            <motion.p 
              variants={itemVariants}
              className="font-['Inter'] text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Your courage can write a new heartbeat in someone's life story. Connect with thousands of verified donors or request blood safely inside our secure medical framework.
            </motion.p>

            {/* Buttons Section */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              {/* Primary Button */}
              <button className="w-full sm:w-auto group relative flex items-center justify-center gap-2 px-8 py-4 font-['Inter'] font-semibold text-white bg-[#DC2626] hover:bg-red-700 rounded-2xl shadow-lg hover:shadow-red-600/20 active:scale-[0.98] transition-all duration-300 overflow-hidden">
                <Search className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Find Donors
              </button>

              {/* Secondary Button */}
              <button className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-4 font-['Inter'] font-semibold text-gray-700 bg-white hover:text-red-600 border border-gray-200 hover:border-red-200 rounded-2xl shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-300">
                <Heart className="w-5 h-5 text-gray-400 group-hover:text-red-600 group-hover:scale-110 transition-all duration-300" />
                Become a Donor
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side: Medical SVG Illustration */}
          <motion.div 
            className="lg:col-span-6 flex justify-center items-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, cubicBezier: [0.16, 1, 0.3, 1] }}
          >
            {/* Inline Premium Vector SVG */}
            <svg className="w-full max-w-[500px] h-auto drop-shadow-2xl" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Background Hospital Grid Pattern Grid & Circles */}
              <circle cx="250" cy="250" r="180" fill="#FFEFEF" />
              <circle cx="250" cy="250" r="130" stroke="#FCA5A5" strokeWidth="2" strokeDasharray="6 6" />
              
              {/* Hospital Building Base Node */}
              <rect x="90" y="320" width="100" height="90" rx="16" fill="#F1F5F9" />
              <rect x="130" y="300" width="20" height="20" fill="#DC2626" rx="4" />
              <path d="M135 310H145M140 305V315" stroke="white" strokeWidth="2" strokeLinecap="round" />
              
              {/* Blood Bag Vector Graphic */}
              <g transform="translate(320, 100)">
                <rect x="20" y="10" width="70" height="110" rx="20" fill="white" stroke="#E2E8F0" strokeWidth="4" />
                <rect x="25" y="35" width="60" height="80" rx="12" fill="#EF4444" />
                {/* Liquid Waves lines inside bag */}
                <path d="M25 60C40 55 50 65 85 60V115H25V60Z" fill="#DC2626" />
                {/* Tube connection */}
                <path d="M55 120V190C55 210 10 210 10 230" stroke="#DC2626" strokeWidth="4" strokeLinecap="round" />
                <circle cx="55" cy="5" r="5" fill="#94A3B8" />
              </g>

              {/* Professional Doctor Avatar Drawing */}
              <g transform="translate(80, 140)">
                {/* Doctor Body */}
                <path d="M40 130C40 100 60 80 90 80C120 80 140 100 140 130V170H40V130Z" fill="#374151" />
                <path d="M65 80V170M115 80V170" stroke="white" strokeWidth="5" />
                <path d="M40 130C40 100 60 80 90 80C120 80 140 100 140 130" stroke="#E2E8F0" strokeWidth="3" />
                {/* Stethoscope */}
                <path d="M75 60C75 90 105 90 105 60" stroke="#94A3B8" strokeWidth="3" fill="none" />
                <circle cx="90" cy="95" r="8" fill="#64748B" />
                {/* Head */}
                <circle cx="90" cy="45" r="30" fill="#FDBA74" />
                <rect x="75" y="15" width="30" height="15" fill="#1F2937" rx="4" /> {/* Hair */}
              </g>

              {/* Dynamic Pulse line connecting nodes */}
              <path d="M30 400H180L195 375L210 425L225 390L240 405H470" stroke="#FCA5A5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>

        </div>

        {/* Below Hero: Glassmorphic Floating Statistics Cards */}
        <motion.div 
          className="mt-20 lg:mt-28 grid grid-cols-1 sm:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-5 p-6 bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(220,38,38,0.06)] hover:border-red-100 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 p-4 bg-white shadow-sm border border-slate-50 rounded-xl group-hover:scale-105 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="space-y-0.5">
                <div className="font-['Manrope'] font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
                  {stat.count}
                </div>
                <div className="font-['Inter'] font-medium text-sm text-gray-500">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;