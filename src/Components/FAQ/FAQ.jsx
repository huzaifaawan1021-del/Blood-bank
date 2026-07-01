import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  // Active accordion index tracking state
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How can I become a donor?",
      answer: "Becoming a donor is fast and simple. You just need to register a premium account on our platform, complete your verified medical profile details, and toggle your availability status. Once verified, nearby hospitals or emergency seekers can securely match with your blood type profile."
    },
    {
      question: "Who can donate blood?",
      answer: "Generally, individuals who are in good health, weigh at least 50kg (110 lbs), and are between the ages of 17 and 65 years old can safely donate blood. However, specific medical conditions, recent travel history, or prescription intake might temporarily defer registration until clinical screening."
    },
    {
      question: "Is blood donation safe?",
      answer: "Absolutely. Blood donation is conducted within a highly regulated medical framework. A brand new, sterile, and disposable needle kit is unsealed for every single donor session, completely eliminating any risk of contracting blood-borne infections. Your body also replenishes the fluid volumes within 48 hours."
    },
    {
      question: "How often can I donate?",
      answer: "Healthy individuals can safely donate whole blood every 56 days (approximately 8 weeks). For specific plasma or platelet donations, the recovery period is significantly shorter, allowing donors to safely contribute up to twice a week depending on regional hospital criteria."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-red-200/30  relative overflow-hidden" id="faq">
      {/* Structural Minimal Gradients */}
      <div className="absolute top-1/3 left-[-5%] w-[35rem] h-[35rem] bg-slate-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-[-5%] w-[30rem] h-[30rem] bg-red-50/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-['Inter'] font-bold text-xs text-[#DC2626] uppercase tracking-widest bg-red-50 px-3.5 py-1.5 rounded-full">
            Information Center
          </span>
          <h2 className="font-['Manrope'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-['Inter'] font-semibold text-base text-gray-500 max-w-xl mx-auto">
            Got questions about the donation process? Here are answers to the most common queries vetted by our clinical desk.
          </p>
        </div>

        {/* Premium Accordion Container List */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden bg-[#F8FAFC] ${
                  isOpen 
                    ? 'border-red-200 shadow-[0_15px_30px_-10px_rgba(220,38,38,0.04)] bg-white' 
                    : 'border-slate-200/60 hover:border-slate-300'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left font-['Manrope'] font-bold text-base sm:text-lg text-gray-900 gap-4 focus:outline-none select-none group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 border transition-all duration-300 ${
                      isOpen 
                        ? 'bg-red-50 border-red-100 text-[#DC2626]' 
                        : 'bg-white border-slate-200 text-gray-400 group-hover:text-gray-600'
                    }`}>
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className={`transition-colors duration-200 ${isOpen ? 'text-[#DC2626]' : ''}`}>
                      {item.question}
                    </span>
                  </div>

                  {/* Smooth Rotating Chevron Icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className={`flex-shrink-0 p-1 rounded-full transition-colors duration-200 ${
                      isOpen ? 'text-[#DC2626] bg-red-50' : 'text-gray-400 group-hover:text-gray-600'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                {/* Animated Expandable Content Area */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 pl-18 font-['Inter'] font-medium text-sm sm:text-base text-gray-500 leading-relaxed border-t border-slate-50">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;