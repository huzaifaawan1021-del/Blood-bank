// import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building2, Calendar, PhoneCall, AlertCircle, Layers } from 'lucide-react';

const BloodRequests = () => {
  // Real-world scenario realistic dummy data
  const requestsData = [
    {
      id: 1,
      patientName: "Arsalan Ahmed",
      bloodGroup: "O-",
      hospitalName: "Aga Khan University Hospital",
      city: "Karachi",
      urgency: "Critical", // Critical / Urgent / Normal
      requiredUnits: 3,
      timePosted: "10 mins ago"
    },
    {
      id: 2,
      patientName: "Sarah Khan",
      bloodGroup: "A+",
      hospitalName: "Shifa International Hospital",
      city: "Islamabad",
      urgency: "Urgent",
      requiredUnits: 2,
      timePosted: "45 mins ago"
    },
    {
      id: 3,
      patientName: "Muhammad Ali",
      bloodGroup: "B-",
      hospitalName: "Doctor's Hospital",
      city: "Lahore",
      urgency: "Critical",
      requiredUnits: 4,
      timePosted: "1 hour ago"
    },
    {
      id: 4,
      patientName: "Zainab Bibi",
      bloodGroup: "AB+",
      hospitalName: "Allama Iqbal Memorial Hospital",
      city: "Sialkot",
      urgency: "Normal",
      requiredUnits: 1,
      timePosted: "3 hours ago"
    }
  ];

  // Helper function to return precise color styling based on Urgency Levels
  const getUrgencyStyles = (urgency) => {
    switch (urgency) {
      case 'Critical':
        return 'bg-red-500 text-white animate-pulse';
      case 'Urgent':
        return 'bg-amber-500 text-white';
      default:
        return 'bg-slate-100 text-gray-700';
    }
  };

  // Grid container stagger variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 20 } 
    }
  };

  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden" id="blood-requests">
      {/* Visual Decorative Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[35rem] h-[35rem] bg-red-100/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[25rem] h-[25rem] bg-slate-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 text-center md:text-left">
            <span className="font-['Inter'] font-bold text-xs text-[#DC2626] uppercase tracking-widest bg-red-50 px-3.5 py-1.5 rounded-full">
              Live Feed
            </span>
            <h2 className="font-['Manrope'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight">
              Latest Blood Requests
            </h2>
            <p className="font-['Inter'] font-semibold text-base text-gray-500 max-w-xl">
              Active emergency cases waiting for donors. Every transaction is audited and medically verified.
            </p>
          </div>
          
          {/* Live indicator badge */}
          <div className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl shadow-sm self-center md:self-end">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-['Inter'] font-bold text-xs text-gray-600 uppercase tracking-wider">Live Active Cases</span>
          </div>
        </div>

        {/* Responsive Grid Layout (4 Columns standard on desktop) */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {requestsData.map((request) => (
            <motion.div
              key={request.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(220, 38, 38, 0.1)"
              }}
              className="bg-white border border-slate-100 rounded-2xl p-6 flex flex-col justify-between relative transition-all duration-300 group cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.01)]"
            >
              {/* Premium Top Progress Line Accent for Critical Status */}
              {request.urgency === 'Critical' && (
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#DC2626] rounded-t-2xl" />
              )}

              {/* Card Header: Patient & Blood Badge */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="space-y-1">
                    <span className={`font-['Inter'] font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1 ${getUrgencyStyles(request.urgency)}`}>
                      {request.urgency === 'Critical' && <AlertCircle className="w-3 h-3" />}
                      {request.urgency}
                    </span>
                    <h3 className="font-['Manrope'] font-extrabold text-xl text-gray-900 tracking-tight pt-1 group-hover:text-[#DC2626] transition-colors duration-200">
                      {request.patientName}
                    </h3>
                  </div>
                  
                  {/* Large Blood Group Badge */}
                  <div className="w-14 h-14 bg-red-50 border border-red-100 rounded-2xl flex items-center justify-center font-['Manrope'] font-extrabold text-xl text-[#DC2626] shadow-sm flex-shrink-0 group-hover:bg-[#DC2626] group-hover:text-white transition-colors duration-300">
                    {request.bloodGroup}
                  </div>
                </div>

                {/* Card Body: Hospital Metadata Details (High Weight Fonts) */}
                <div className="space-y-3 font-['Inter'] font-bold text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2.5">
                    <Building2 className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span className="truncate" title={request.hospitalName}>{request.hospitalName}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span>{request.city}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Layers className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-900">Required: <span className="text-[#DC2626] font-extrabold">{request.requiredUnits} Units</span></span>
                  </div>
                </div>
              </div>

              {/* Card Footer: Time Stamp & CTA Action Button */}
              <div className="space-y-4 pt-4 border-t border-slate-50 mt-auto">
                <div className="flex items-center gap-2 text-xs font-['Inter'] font-semibold text-gray-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{request.timePosted}</span>
                </div>

                {/* Primary Urgent Button Action */}
                <button className="w-full group/btn flex items-center justify-center gap-2 px-4 py-3 font-['Inter'] font-bold text-sm text-[#DC2626] bg-red-50 hover:bg-[#DC2626] hover:text-white rounded-xl transition-all duration-300 shadow-sm">
                  <PhoneCall className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                  Contact Now
                </button>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default BloodRequests;