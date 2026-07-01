import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  UserPlus,
  LogIn,
  ChevronRight,
} from "lucide-react";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Find Donors", href: "/find-donors" },
  { label: "Become a Donor", href: "/become-donor" },
  { label: "Blood Requests", href: "/blood-requests" },
];

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group relative py-2 text-[15px] font-medium text-gray-600 transition-colors duration-200 hover:text-gray-900 focus-visible:outline-none focus-visible:text-gray-900"
    >
      {children}

      <span
        aria-hidden="true"
        className="absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-red-600 transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
      />
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`  sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-gray-100 bg-white/80 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.08)] backdrop-blur-md"
          : "border-transparent bg-white"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <a
          href="/"
          aria-label="Blood Bank Home"
          className="shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
        >
          <Logo />
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 lg:flex">

          <a
            href="/login"
            className="inline-flex items-center justify-center rounded-xl border-2 border-red-600 bg-white px-5 py-2.5 text-[15px] font-semibold text-red-600 transition-all duration-200 hover:bg-red-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 active:scale-[0.98]"
          >
            Login
          </a>

          <a
            href="/register"
            className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-2.5 text-[15px] font-semibold text-white shadow-sm shadow-red-600/30 transition-all duration-200 hover:bg-red-700 hover:shadow-md hover:shadow-red-600/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 active:scale-[0.98]"
          >
            Register
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-gray-700 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 lg:hidden"
        >
          <Menu className="h-6 w-6" strokeWidth={2} />
        </button>
      </nav>
            {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-gray-900/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
              className="fixed inset-y-0 right-0 z-50 flex h-screen w-full max-w-sm flex-col bg-white shadow-2xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 32,
              }}
            >
              {/* Drawer Header */}
              <div className="flex h-[72px] items-center justify-between border-b border-gray-100 px-5">
                <Logo />

                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.08 + i * 0.05,
                    }}
                    className="group flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-semibold text-gray-800 transition hover:bg-red-50"
                  >
                    {link.label}

                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                ))}
              </div>

              {/* Bottom Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                }}
                className="flex flex-col gap-3 border-t border-gray-100 px-5 py-6"
              >
                <a
                  href="/login"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-red-600 bg-white px-5 py-3.5 text-base font-semibold text-red-600 transition hover:bg-red-50"
                >
                  <LogIn className="h-5 w-5" />
                  Login
                </a>

                <a
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3.5 text-base font-semibold text-white shadow-sm shadow-red-600/30 transition hover:bg-red-700"
                >
                  <UserPlus className="h-5 w-5" />
                  Register
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

          </header>
  );
}