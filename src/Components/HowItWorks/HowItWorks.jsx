import { motion } from 'framer-motion';
import { UserPlus, Heart, MapPin, Sparkles } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <UserPlus className="w-6 h-6 text-[#DC2626]" />,
      title: "Register Account",
      description: "Create your secure medical profile in under a minute. Fill in your essential medical status, contact information, and blood group details securely."
    },
    {
      id: 2,
      icon: <Heart className="w-6 h-6 text-[#DC2626]" />,
      title: "Become Donor",
      description: "Opt-in to join our global network of verified premium donors. You can toggle your availability status anytime to match with emergency requirements."
    },
    {
      id: 3,
      icon: <MapPin className="w-6 h-6 text-[#DC2626]" />,
      title: "Find Nearby Donors",
      description: "In times of requirement, instantly query our live regional database to find verified donors closest to your current hospital location."
    },
    {
      id: 4,
      icon: <Sparkles className="w-6 h-6 text-[#DC2626]" />,
      title: "Save Lives",
      description: "Connect instantly, arrange swift coordinate movement, and execute the safe donation process to rewrite someone's life story gracefully."
    }
  ];

  // Animation configuration for smooth scrolling entrance
  const timelineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 18,
        delay: index * 0.15
      }
    })
  };

  return (
    <section className="py-24  bg-red-200/30  relative overflow-hidden" id="how-it-works">
      {/* Premium Visual Gradients */}
      <div className="absolute top-1/4 left-0 w-[30rem] h-[30rem] bg-red-100/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[25rem] h-[25rem] bg-slate-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
          <span className="font-['Inter'] font-semibold text-xs text-[#DC2626] uppercase tracking-widest bg-red-50 px-3.5 py-1.5 rounded-full">
            Workflow Process
          </span>
          <h2 className="font-['Manrope'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight">
            How It Works
          </h2>
          <p className="font-['Inter'] text-base text-gray-500 leading-relaxed">
            Four simple steps to initiate action, coordinate secure handshakes, and build a safe medical community.
          </p>
        </div>

        {/* Timeline Structure Area */}
        <div className="relative mt-12">
          
          {/* Main Continuous Center Track Line (Hidden on Mobile, Perfect Center on Desktop) */}
          <div className="absolute left-[31px] md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-red-200 via-slate-200 to-transparent pointer-events-none" />

          {/* Mapping the Timeline Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={step.id} 
                  className={`flex flex-col md:flex-row items-start md:items-center relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Left Side/Right Side Card Blocks */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12">
                    <motion.div
                      custom={index}
                      variants={timelineVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-100px" }}
                      whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.03)" }}
                      className="bg-white border border-slate-100 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] relative transition-all duration-300 group cursor-pointer"
                    >
                      {/* Premium Side Subtle Accent Stripe */}
                      <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-[#DC2626] rounded-l-2xl" />

                      {/* Header Item inside Card */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-red-50 border border-red-100 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                          {step.icon}
                        </div>
                        <h3 className="font-['Manrope'] font-bold text-xl text-gray-900 group-hover:text-[#DC2626] transition-colors duration-200">
                          {step.title}
                        </h3>
                      </div>

                      {/* Text Paragraph */}
                      <p className="font-['Inter'] text-sm text-gray-500 leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Absolute Timeline Center Circular Interactive Node */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-20">
                    <motion.div 
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 120 }}
                      className="w-16 h-16 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center font-['Manrope'] font-extrabold text-base text-gray-700 shadow-sm relative group-hover:border-[#DC2626] transition-colors duration-300"
                    >
                      {/* Active Core Glow Pulse Ring */}
                      <div className="absolute inset-1 bg-red-50/50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 pointer-events-none" />
                      
                      <span className="relative z-10 text-gray-400 group-hover:text-[#DC2626] transition-colors duration-300">
                        0{step.id}
                      </span>
                    </motion.div>
                  </div>

                  {/* Empty Spacer Column for Alignment Balance */}
                  <div className="hidden md:block w-1/2" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;