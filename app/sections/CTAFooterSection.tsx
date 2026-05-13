"use client";

import { ArrowRight, Linkedin, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";

export default function CTAFooterSection() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FFF0E5] blur-[120px] rounded-full pointer-events-none opacity-80 translate-x-1/3 -translate-y-1/4" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 text-center"
      >
        <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-[56px] font-light leading-[1.2] text-gray-900 max-w-4xl mx-auto mb-6">
          Finance finally has a system that finishes the work, not just explains it.
        </motion.h2>
        <motion.p variants={fadeUp} className="text-[17px] text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
          MeeruAI helps finance teams close faster, explain every variance, and act with confidence
          with source-traced evidence, review, and audit-ready execution built in.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FF7448] text-white text-[15px] font-medium hover:bg-[#FF7448]/90 transition-colors shadow-sm hover:shadow"
          >
            Request a Demo <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-gray-200 text-gray-600 text-[15px] font-medium hover:border-gray-300 hover:bg-gray-50 transition-colors bg-white/50 backdrop-blur-sm"
          >
            Explore the Workbenches <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>

      <footer className="relative border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Logo and Description */}
            <div>
              <div className="flex items-center mb-6">
                <img
                  src="https://www.starbridgemarketing.com/meeruai/wp-content/uploads/2026/05/meeru-m-coral.png"
                  alt="M"
                  className="h-8 w-auto object-contain"
                />
                <span className="text-[26px] font-bold tracking-tight text-gray-900 -ml-1">eeruAI</span>
              </div>
              <p className="text-[13px] text-gray-500 leading-relaxed max-w-[280px]">
                MeeruAI helps finance teams complete high-stakes work with source-traced AI, from
                accounting close to variance analysis to performance action.
              </p>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-[15px] font-medium text-gray-900 mb-6">Certifications</h4>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#5DB4E5] to-[#3B8BEB] flex items-center justify-center text-white shadow-sm hover:scale-105 transition-transform relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 rounded-full border border-white/20"></div>
                  <span className="text-[9px] font-bold text-center leading-tight tracking-wider z-10">
                    AICPA<br />SOC
                  </span>
                </div>
                <div className="w-14 h-14 rounded-full bg-[#3B4C85] flex flex-col items-center justify-center text-white shadow-sm hover:scale-105 transition-transform border border-white/20 relative overflow-hidden">
                  <div className="absolute w-full h-full border-[3px] border-dashed border-[#C5A866] rounded-full opacity-60 scale-90"></div>
                  <span className="text-[10px] font-bold text-center leading-tight tracking-wider z-10">
                    GDPR
                  </span>
                </div>
                <div className="w-14 h-14 rounded-full bg-[#4682E8] flex items-center justify-center text-white shadow-sm hover:scale-105 transition-transform border border-white/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 rounded-full border border-white/20"></div>
                  <span className="text-[14px] font-bold tracking-widest z-10">
                    ISO
                  </span>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="text-[15px] font-medium text-gray-900 mb-6">Follow Us</h4>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-[10px] border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-500 hover:border-meeru-orange hover:text-meeru-orange hover:bg-white transition-all shadow-sm"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-[10px] border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-500 hover:border-meeru-orange hover:text-meeru-orange hover:bg-white transition-all shadow-sm"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-[10px] border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-500 hover:border-meeru-orange hover:text-meeru-orange hover:bg-white transition-all shadow-sm"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-[10px] border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-500 hover:border-meeru-orange hover:text-meeru-orange hover:bg-white transition-all shadow-sm"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] font-medium text-gray-400">
              &copy; 2026 MeeruAI Inc. All Rights Reserved.
            </p>
            <div className="flex items-center gap-3 text-[11px] font-medium text-gray-400">
              <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
              <span className="text-gray-300">/</span>
              <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
              <span className="text-gray-300">/</span>
              <a href="#" className="hover:text-gray-600 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-12 h-12 rounded-full bg-[#FF7448] text-white flex items-center justify-center shadow-lg hover:bg-[#FF7448]/90 hover:scale-105 transition-all z-50"
        aria-label="Scroll to top"
      >
        <ArrowRight className="w-5 h-5 -rotate-90" />
      </button>
    </section>
  );
}
