import { 
  Droplets, 
  Mail, 
  Phone, 
  MapPin,
  Globe,      // Global/Website link ke liye
  Share2,     // Social network connect ke liye
  MessageCircle // Support handle ke liye
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "Find Donors", href: "#" },
    { name: "Become A Donor", href: "#" },
    { name: "Blood Requests", href: "#" },
    { name: "Eligibility Quiz", href: "#" }
  ];

  const services = [
    { name: "Emergency Blood Match", href: "#" },
    { name: "Hospital Portal Link", href: "#" },
    { name: "Platelet Apheresis", href: "#" },
    { name: "Plasma Logistics", href: "#" },
    { name: "24/7 Screening Support", href: "#" }
  ];

  const socials = [
    { 
      icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.85z"/></svg>, 
      href: "#" 
    },
    { 
      icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>, 
      href: "#" 
    }
  ];
 
  return (
    <footer className="bg-[#1F2937] text-white pt-20 pb-8 relative overflow-hidden border-t-4 border-[#DC2626]">
      {/* Decorative Subtle Background Nodes */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#DC2626]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Responsive Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-slate-700/60">
          
          {/* Column 1: Logo & Vision Statement */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2.5 group cursor-pointer">
              <div className="w-10 h-10 bg-[#DC2626] rounded-xl flex items-center justify-center shadow-md shadow-red-900/30 group-hover:scale-105 transition-transform duration-300">
                <Droplets className="w-6 h-6 text-white fill-current" />
              </div>
              <span className="font-['Manrope'] font-black text-2xl tracking-tight bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                Pulse<span className="text-[#DC2626]">Bank</span>
              </span>
            </div>
            
            <p className="font-['Inter'] font-medium text-sm text-slate-400 leading-relaxed max-w-sm">
              Our premium centralized logistics matrix bridges the gap between verified blood donors and global healthcare providers securely to optimize response speed in critical seconds.
            </p>

            {/* Social Media Row */}
            <div className="flex items-center gap-3 pt-2">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 hover:bg-[#DC2626] border border-slate-700/50 hover:border-[#DC2626] rounded-xl flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 shadow-sm hover:shadow-red-600/20 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="font-['Manrope'] font-bold text-sm tracking-wider uppercase text-slate-200 border-l-2 border-[#DC2626] pl-3">
              Quick Links
            </h4>
            <ul className="space-y-3 font-['Inter'] font-semibold text-sm text-slate-400">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    className="hover:text-white flex items-center gap-1 group transition-colors duration-200"
                  >
                    <span className="w-0 h-[2px] bg-[#DC2626] group-hover:w-2 transition-all duration-300 rounded-full" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-['Manrope'] font-bold text-sm tracking-wider uppercase text-slate-200 border-l-2 border-[#DC2626] pl-3">
              Core Services
            </h4>
            <ul className="space-y-3 font-['Inter'] font-semibold text-sm text-slate-400">
              {services.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    className="hover:text-white flex items-center gap-1 group transition-colors duration-200"
                  >
                    <span className="w-0 h-[2px] bg-[#DC2626] group-hover:w-2 transition-all duration-300 rounded-full" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-['Manrope'] font-bold text-sm tracking-wider uppercase text-slate-200 border-l-2 border-[#DC2626] pl-3">
              Contact Desk
            </h4>
            
            <div className="space-y-4 font-['Inter'] font-semibold text-sm text-slate-400">
              
              {/* Email link row */}
              <a 
                href="mailto:support@pulsebank.org" 
                className="flex items-center gap-3 hover:text-white group transition-colors duration-200"
              >
                <div className="w-9 h-9 bg-slate-800 rounded-xl flex items-center justify-center text-[#DC2626] group-hover:bg-[#DC2626] group-hover:text-white transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="truncate">support@pulsebank.org</span>
              </a>

              {/* Phone connection row */}
              <a 
                href="tel:+922111125663" 
                className="flex items-center gap-3 hover:text-white group transition-colors duration-200"
              >
                <div className="w-9 h-9 bg-slate-800 rounded-xl flex items-center justify-center text-[#DC2626] group-hover:bg-[#DC2626] group-hover:text-white transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+92 (21) 111-BLOOD</span>
              </a>

              {/* Address indicator row */}
              <div className="flex items-start gap-3 group">
                <div className="w-9 h-9 bg-slate-800 rounded-xl flex items-center justify-center text-[#DC2626] flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="pt-1.5 leading-relaxed">
                  Level 4, Medical Innovation Tower, Block 5, Clifton, Karachi, Pakistan
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright Information */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left font-['Inter'] font-medium text-xs text-slate-500 tracking-wide">
          <p>© {currentYear} PulseBank Emergency Network. All rights reserved.</p>
          <div className="flex items-center gap-6 font-semibold">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors duration-200">SLA Agreement</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;