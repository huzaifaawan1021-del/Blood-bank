// import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

const BloodCompatibility = () => {
  const chartData = [
    { type: 'A+', give: 'A+, AB+', receive: 'A+, A-, O+, O-', isUniversal: false },
    { type: 'A-', give: 'A+, A-, AB+, AB-', receive: 'A-, O-', isUniversal: false },
    { type: 'B+', give: 'B+, AB+', receive: 'B+, B-, O+, O-', isUniversal: false },
    { type: 'B-', give: 'B+, B-, AB+, AB-', receive: 'B-, O-', isUniversal: false },
    { type: 'AB+', give: 'AB+ Only', receive: 'Everyone (Universal Recipient)', isUniversal: true, typeTag: 'Recipient' },
    { type: 'AB-', give: 'AB+, AB-', receive: 'AB-, A-, B-, O-', isUniversal: false },
    { type: 'O+', give: 'O+, A+, B+, AB+', receive: 'O+, O-', isUniversal: false },
    { type: 'O-', give: 'Everyone (Universal Donor)', receive: 'O- Only', isUniversal: true, typeTag: 'Donor' },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="compatibility">
      {/* Structural Minimal Gradients */}
      <div className="absolute top-1/3 right-[-5%] w-[35rem] h-[35rem] bg-slate-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-[-5%] w-[30rem] h-[30rem] bg-red-50/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-['Inter'] font-bold text-xs text-[#DC2626] uppercase tracking-widest bg-red-50 px-4 py-1.5 rounded-full">
            Medical Matrix
          </span>
          <h2 className="font-['Manrope'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight">
            Blood Compatibility Chart
          </h2>
          <p className="font-['Inter'] font-semibold text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            Understanding biological matching is vital for safe transfusions. Review the quick guide below.
          </p>
        </div>

        {/* Premium Table / Mobile Cards Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="bg-[#F8FAFC] border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] rounded-2xl overflow-hidden p-3 md:p-0"
        >
          {/* MOBILE VIEW (CARDS) - Screen size < md */}
          <div className="block md:hidden space-y-3">
            {chartData.map((row, index) => (
              <div 
                key={index}
                className={`p-4 rounded-xl border bg-white shadow-sm space-y-3 ${
                  row.isUniversal ? 'border-red-200 bg-red-50/20' : 'border-slate-200/80'
                }`}
              >
                {/* Header: Blood Group Badge & Universal Tag */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="w-10 h-10 bg-red-50 border border-red-100 text-[#DC2626] font-['Manrope'] font-extrabold text-lg rounded-xl flex items-center justify-center shadow-sm">
                      {row.type}
                    </span>
                    <span className="font-['Manrope'] font-bold text-slate-800 text-sm">
                      Blood Type {row.type}
                    </span>
                  </div>

                  {row.isUniversal && (
                    <span className={`font-['Inter'] font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm ${
                      row.typeTag === 'Donor' 
                        ? 'bg-emerald-600 text-white' 
                        : 'bg-blue-600 text-white'
                    }`}>
                      Universal {row.typeTag}
                    </span>
                  )}
                </div>

                {/* Content: Can Donate To & Can Receive From */}
                <div className="grid grid-cols-1 gap-2 pt-1 font-['Inter'] text-xs">
                  <div>
                    <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px] mb-0.5">
                      Can Donate To (Patient)
                    </span>
                    <span className={`font-bold text-slate-800 text-sm ${
                      row.isUniversal && row.typeTag === 'Donor' ? 'text-emerald-700 font-extrabold' : ''
                    }`}>
                      {row.give}
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px] mb-0.5">
                      Can Receive From (Donor)
                    </span>
                    <span className={`font-bold text-slate-800 text-sm ${
                      row.isUniversal && row.typeTag === 'Recipient' ? 'text-blue-700 font-extrabold' : ''
                    }`}>
                      {row.receive}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* DESKTOP VIEW (TABLE) - Screen size >= md */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              
              {/* Premium Red Header */}
              <thead>
                <tr className="bg-[#DC2626]">
                  <th className="font-['Manrope'] font-extrabold text-sm sm:text-base text-white px-6 py-5 tracking-wide uppercase">
                    Blood Group
                  </th>
                  <th className="font-['Manrope'] font-extrabold text-sm sm:text-base text-white px-6 py-5 tracking-wide uppercase">
                    Can Donate To (Patient)
                  </th>
                  <th className="font-['Manrope'] font-extrabold text-sm sm:text-base text-white px-6 py-5 tracking-wide uppercase">
                    Can Receive From (Donor)
                  </th>
                </tr>
              </thead>

              {/* White Rows Body */}
              <tbody className="divide-y divide-slate-100 bg-white">
                {chartData.map((row, index) => (
                  <tr 
                    key={index}
                    className={`transition-colors duration-200 hover:bg-slate-50/80 group ${
                      row.isUniversal ? 'bg-red-50/30 font-bold' : ''
                    }`}
                  >
                    {/* Column 1: Blood Group (Bold Accent) */}
                    <td className="px-6 py-5 z-10 relative">
                      <div className="flex items-center gap-3">
                        <span className="w-9 h-9 bg-red-50 border border-red-100 text-[#DC2626] font-['Manrope'] font-extrabold text-base rounded-xl flex items-center justify-center shadow-sm">
                          {row.type}
                        </span>
                        
                        {/* Beautiful Universal Highlight Tags */}
                        {row.isUniversal && (
                          <span className={`font-['Inter'] font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm ${
                            row.typeTag === 'Donor' 
                              ? 'bg-emerald-600 text-white' 
                              : 'bg-blue-600 text-white'
                          }`}>
                            Universal {row.typeTag}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Column 2: Can Donate To */}
                    <td className={`px-6 py-5 font-['Inter'] font-bold text-sm text-gray-800 ${
                      row.isUniversal && row.typeTag === 'Donor' ? 'text-emerald-700 font-extrabold' : ''
                    }`}>
                      {row.give}
                    </td>

                    {/* Column 3: Can Receive From */}
                    <td className={`px-6 py-5 font-['Inter'] font-bold text-sm text-gray-800 ${
                      row.isUniversal && row.typeTag === 'Recipient' ? 'text-blue-700 font-extrabold' : ''
                    }`}>
                      {row.receive}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </motion.div>

        {/* Below Table: Premium Educational Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 p-5 bg-slate-50 border border-slate-200/80 rounded-2xl flex items-start gap-4"
        >
          <div className="p-2.5 bg-white border border-slate-200 rounded-xl flex-shrink-0 text-[#DC2626] shadow-sm">
            <Info className="w-5 h-5 fill-red-50" />
          </div>
          <div className="space-y-1">
            <h4 className="font-['Manrope'] font-extrabold text-base text-gray-900">
              Critical Match Note
            </h4>
            <p className="font-['Inter'] font-semibold text-sm text-gray-500 leading-relaxed">
              While <span className="text-emerald-600 font-bold">O- negative</span> is recognized globally as the universal donor type because its red blood cells lack A, B, and Rh antigens, individuals with <span className="text-blue-600 font-bold">AB+ positive</span> blood are universal recipients and can safely process red blood cells from any blood type combination during extreme medical emergencies.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BloodCompatibility;