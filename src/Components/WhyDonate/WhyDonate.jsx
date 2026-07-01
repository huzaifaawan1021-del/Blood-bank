import { motion } from 'framer-motion';
import { HeartHandshake, ShieldAlert, Users, Zap, ArrowUpRight } from 'lucide-react';

const WhyDonate = () => {
  // Grid sequence reveal animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 90, damping: 22 } 
    }
  };

  const features = [
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#DC2626]" />,
      title: "Save Lives",
      description: "A single blood donation can save up to three lives. Your contribution directly provides hope and a second chance to patients in critical need."
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-[#DC2626]" />,
      title: "Emergency Support",
      description: "Be the backbone of crisis management. Having an active, verified pool of blood ensures rapid response during natural disasters or trauma events."
    },
    {
      icon: <Users className="w-6 h-6 text-[#DC2626]" />,
      title: "Healthy Community",
      description: "Regular donation fosters a reliable healthcare ecosystem. It maintains optimum inventory levels across connected regional and private hospitals."
    },
    {
      icon: <Zap className="w-6 h-6 text-[#DC2626]" />,
      title: "Fast & Easy Registration",
      description: "No complex waiting lines or paperwork. Our premium secure onboarding gets you verified as a certified digital donor in under two minutes."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="why-donate">
      {/* Structural Subtle Radial Gradients */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-slate-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[25rem] h-[25rem] bg-red-50/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Typography Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="font-['Inter'] font-semibold text-xs text-[#DC2626] uppercase tracking-widest bg-red-50 px-3.5 py-1.5 rounded-full">
            Making a Difference
          </span>
          <h2 className="font-['Manrope'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight">
            Why Donate Blood?
          </h2>
          <p className="font-['Inter'] text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            Your dynamic choice today secures the standard health of tomorrow. Discover how every screening saves critical conditions.
          </p>
        </div>

        {/* Responsive 4-Card Layout Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                boxShadow: "0 24px 48px -12px rgba(0, 0, 0, 0.05), 0 8px 24px -8px rgba(220, 38, 38, 0.04)"
              }}
              className="relative bg-[#F8FAFC] border border-slate-100/80 rounded-2xl p-8 pt-10 flex flex-col justify-between transition-all duration-300 group cursor-pointer"
              style={{ borderTop: "4px solid #DC2626" }} // Premium Red Top Border Requirement
            >
              <div>
                {/* Premium Icon Wrapper with micro shadow */}
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-red-50/50 transition-all duration-300">
                  {item.icon}
                </div>

                {/* Card Title */}
                <h3 className="font-['Manrope'] font-bold text-xl text-gray-900 tracking-tight mb-3 group-hover:text-[#DC2626] transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Short Paragraph Description */}
                <p className="font-['Inter'] text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Minimal Clean Aesthetic Action Link Indicator */}
              <div className="mt-8 flex items-center gap-1 text-xs font-['Inter'] font-semibold text-gray-400 group-hover:text-[#DC2626] transition-colors duration-200 self-start">
                Learn more
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyDonate;