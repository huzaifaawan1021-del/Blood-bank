import { motion } from "framer-motion";


export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-600 shadow-sm shadow-red-600/30">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          aria-hidden="true"
        >
          {/* Blood drop */}
          <path
            d="M20 4C20 4 9 17.5 9 25.5C9 31.85 13.925 37 20 37C26.075 37 31 31.85 31 25.5C31 17.5 20 4 20 4Z"
            fill="white"
          />
          {/* Heartbeat line through the drop */}
          <motion.path
            d="M11 24.5H15.5L18 19L21.5 30L24 24.5H29"
            stroke="#DC2626"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeInOut", delay: 0.15 }}
          />
        </svg>
      </span>

      <span className="flex flex-col leading-none">
        <span className="text-[17px] font-extrabold tracking-tight text-gray-900">
          Blood<span className="text-red-600">Bank</span>
        </span>
        <span className="mt-0.5 text-[11px] font-medium tracking-wide text-gray-400">
          Give Blood, Save Lives
        </span>
      </span>
    </div>
  );
}