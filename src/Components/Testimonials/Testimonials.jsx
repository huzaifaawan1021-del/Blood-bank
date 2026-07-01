import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  // Realistic premium premium healthcare platform dummy testimonials data
  const reviews = [
    {
      id: 1,
      name: "Ayesha Rahman",
      location: "Karachi",
      rating: 5,
      review: "Finding a rare B- negative donor during midnight was a nightmare until I used this platform. Within 15 minutes, a verified donor responded and reached the hospital. Truly life-saving service!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      id: 2,
      name: "Kamran Bilal",
      location: "Lahore",
      rating: 5,
      review: "As a regular donor, I love the premium transparency and sleek onboarding of this app. The ability to switch my availability status with a single toggle keeps my donor privacy safe and active.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      id: 3,
      name: "Dr. Zainab Baloch",
      location: "Islamabad",
      rating: 5,
      review: "We integrated our regional hospital emergency desk pool queries with their network. The verified matching logistics matrix reduces coordination delay by almost 70%. Phenomenal medical utility.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 20 }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-tr from-white via-[#FFF5F5] to-slate-50 relative overflow-hidden" id="testimonials">
      
      {/* Structural Glassmorphic Background Blur Circles */}
      <div className="absolute top-12 left-[-5%] w-[30rem] h-[30rem] bg-red-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-[-5%] w-[25rem] h-[25rem] bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="font-['Inter'] font-bold text-xs text-[#DC2626] uppercase tracking-widest bg-red-50 px-3.5 py-1.5 rounded-full">
            User Stories
          </span>
          <h2 className="font-['Manrope'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight">
            Words From Our <span className="text-[#DC2626]">Community</span>
          </h2>
          <p className="font-['Inter'] font-semibold text-base text-gray-500 max-w-xl mx-auto">
            Real impact stories from verified recipients, individual heroes, and medical professionals worldwide.
          </p>
        </div>

        {/* 3-Card Glassmorphic Flex Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {reviews.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                boxShadow: "0 30px 60px -15px rgba(220,38,38,0.05)",
                borderColor: "rgba(220, 38, 38, 0.15)"
              }}
              className="relative bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              {/* Floating Quote Icon Accent */}
              <div className="absolute top-6 right-6 text-red-500/10 group-hover:text-red-500/20 group-hover:scale-110 transition-all duration-300">
                <Quote className="w-10 h-10 fill-current" />
              </div>

              <div>
                {/* 5-Star Rating Array Map */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Main Review Paragraph Text */}
                <p className="font-['Inter'] font-medium text-sm text-gray-600 leading-relaxed italic mb-8">
                  "{item.review}"
                </p>
              </div>

              {/* User Identity Profile Footer */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/40">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0 group-hover:border-[#DC2626] transition-colors duration-300">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-['Manrope'] font-bold text-base text-gray-900 tracking-tight">
                    {item.name}
                  </h4>
                  <p className="font-['Inter'] font-semibold text-xs text-gray-400">
                    Patient, {item.location}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;