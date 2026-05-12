"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Product", href: "#products" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-0"
          : "bg-white py-1"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center">
            <img
              src="/meeruai-logo.png"
              alt="MeeruAI"
              className="h-8 lg:h-9 w-auto"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-meeru-orange transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <div className="relative">
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="group flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${resourcesOpen ? "rotate-180 text-meeru-orange" : ""}`} />
              </button>
              <AnimatePresence>
                {resourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-4 w-48 bg-white rounded-xl border border-gray-100 shadow-xl py-2"
                  >
                    <a href="#" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-meeru-orange-light hover:text-meeru-orange transition-colors">Blog</a>
                    <a href="#" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-meeru-orange-light hover:text-meeru-orange transition-colors">Case Studies</a>
                    <a href="#" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-meeru-orange-light hover:text-meeru-orange transition-colors">Documentation</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-meeru-orange text-white text-sm font-medium hover:bg-meeru-orange/90 transition-colors shadow-sm hover:shadow"
            >
              Request a Demo <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-gray-700 hover:text-meeru-orange transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-base font-medium text-gray-700 hover:text-meeru-orange transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <a href="#" className="text-base font-medium text-gray-600 hover:text-meeru-orange transition-colors">
                  Resources
                </a>
                <a
                  href="#"
                  className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl bg-meeru-orange text-white text-sm font-medium"
                >
                  Request a Demo <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
