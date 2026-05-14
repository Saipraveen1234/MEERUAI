"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import DemoModal from "./DemoModal";

export default function CTAFooterSection({ showCTA = true }: { showCTA?: boolean }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      {showCTA && (
        <>
          {/* Background radial glow */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FFF0E5] blur-[120px] rounded-full pointer-events-none opacity-80 translate-x-1/3 -translate-y-1/4" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 text-center">
        <motion.h2
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl lg:text-5xl xl:text-[56px] font-light leading-[1.2] text-gray-900 max-w-4xl mx-auto mb-6"
        >
          Finance finally has a system that finishes the work, not just explains it.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-[17px] text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10"
        >
          MeeruAI helps finance teams close faster, explain every variance, and act with confidence
          with source-traced evidence, review, and audit-ready execution built in.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FF7448] text-white text-[15px] font-medium hover:bg-[#FF7448]/90 transition-colors shadow-sm hover:shadow cursor-pointer"
          >
            Request a Demo <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="/#products"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-gray-200 text-gray-600 text-[15px] font-medium hover:border-gray-300 hover:bg-gray-50 transition-colors bg-white/50 backdrop-blur-sm"
          >
            Explore the Workbenches <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
        </>
      )}

      <footer className="relative border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
            {/* Logo and Description */}
            <div>
              <div className="mb-6">
                <img
                  src="/meeruai-logo.png"
                  alt="MeeruAI"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <p className="text-[13px] text-gray-500 leading-relaxed max-w-full md:max-w-[280px]">
                MeeruAI helps finance teams complete high-stakes work with source-traced AI, from
                accounting close to variance analysis to performance action.
              </p>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-[15px] font-medium text-gray-900 mb-6">Certifications</h4>
              <div className="flex items-center gap-3">
                <a href="/trust">
                  <img
                    src="/SOC-logo.png"
                    alt="AICPA SOC Certification"
                    className="w-14 h-14 object-contain hover:scale-105 transition-transform cursor-pointer"
                  />
                </a>
                <a href="/trust">
                  <img
                    src="/gdpr-logo.png"
                    alt="GDPR Certification"
                    className="w-14 h-14 object-contain hover:scale-105 transition-transform cursor-pointer"
                  />
                </a>
                <a href="/trust">
                  <img
                    src="/iso-logo.png"
                    alt="ISO Certification"
                    className="w-14 h-14 object-contain hover:scale-105 transition-transform cursor-pointer"
                  />
                </a>
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="text-[15px] font-medium text-gray-900 mb-6">Follow Us</h4>
              <div className="flex items-center gap-3">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/company/meeruai/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-[10px] bg-[#FFF0EA] border border-[#E8683A]/25 flex items-center justify-center text-[#E8683A] hover:bg-[#FFE8DC] transition-all" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0,0,256,256" fill="currentColor">
                    <g fillRule="nonzero">
                      <g transform="scale(8.53333,8.53333)">
                        <path d="M24,4h-18c-1.105,0 -2,0.895 -2,2v18c0,1.105 0.895,2 2,2h18c1.105,0 2,-0.895 2,-2v-18c0,-1.105 -0.895,-2 -2,-2zM10.954,22h-2.95v-9.492h2.95zM9.449,11.151c-0.951,0 -1.72,-0.771 -1.72,-1.72c0,-0.949 0.77,-1.719 1.72,-1.719c0.948,0 1.719,0.771 1.719,1.719c0,0.949 -0.771,1.72 -1.719,1.72zM22.004,22h-2.948v-4.616c0,-1.101 -0.02,-2.517 -1.533,-2.517c-1.535,0 -1.771,1.199 -1.771,2.437v4.696h-2.948v-9.492h2.83v1.297h0.04c0.394,-0.746 1.356,-1.533 2.791,-1.533c2.987,0 3.539,1.966 3.539,4.522z"/>
                      </g>
                    </g>
                  </svg>
                </a>
                {/* Spotify */}
                <a href="https://open.spotify.com/show/0OuklRHqFeSmkobCgaQR0A" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-[10px] bg-[#FFF0EA] border border-[#E8683A]/25 flex items-center justify-center text-[#E8683A] hover:bg-[#FFE8DC] transition-all" aria-label="Spotify">
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.427.01C6.805-.253 1.224 4.902.961 11.524.698 18.147 5.853 23.728 12.476 23.99c6.622.263 12.203-4.892 12.466-11.514S20.049.272 13.427.01m5.066 17.579a.717.717 0 0 1-.977.268 14.4 14.4 0 0 0-5.138-1.747 14.4 14.4 0 0 0-5.42.263.717.717 0 0 1-.338-1.392c1.95-.474 3.955-.571 5.958-.29 2.003.282 3.903.928 5.647 1.92a.717.717 0 0 1 .268.978m1.577-3.15a.93.93 0 0 1-1.262.376 17.7 17.7 0 0 0-5.972-1.96 17.7 17.7 0 0 0-6.281.238.93.93 0 0 1-1.11-.71.93.93 0 0 1 .71-1.11 19.5 19.5 0 0 1 6.94-.262 19.5 19.5 0 0 1 6.599 2.165c.452.245.62.81.376 1.263m1.748-3.551a1.147 1.147 0 0 1-1.546.488 21.4 21.4 0 0 0-6.918-2.208 21.4 21.4 0 0 0-7.259.215 1.146 1.146 0 0 1-.456-2.246 23.7 23.7 0 0 1 8.034-.24 23.7 23.7 0 0 1 7.657 2.445c.561.292.78.984.488 1.546" />
                  </svg>
                </a>
                {/* Apple Podcasts */}
                <a href="https://podcasts.apple.com/in/podcast/enterprise-decoded/id1889791148" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-[10px] bg-[#FFF0EA] border border-[#E8683A]/25 flex items-center justify-center text-[#E8683A] hover:bg-[#FFE8DC] transition-all" aria-label="Apple Podcasts">
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.365 1.43c0 1.14-.416 2.205-1.184 3.02-.82.86-2.15 1.54-3.37 1.44-.15-1.08.45-2.2 1.22-2.96.84-.86 2.3-1.5 3.33-1.5zM20.3 17.7c-.55 1.25-.82 1.8-1.53 2.93-.99 1.58-2.39 3.55-4.13 3.57-1.55.02-1.95-1.01-4.07-1-2.12.01-2.57 1.03-4.12 1-1.74-.02-3.07-1.83-4.06-3.41C.96 18.12.05 14.74 1.7 12.36c1.01-1.47 2.63-2.39 4.37-2.41 1.66-.03 3.23 1.12 4.07 1.12.83 0 2.69-1.39 4.54-1.18.77.03 2.93.31 4.31 2.31-3.47 1.9-2.91 6.86.31 7.5z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a href="https://www.youtube.com/@EnterpriseDecoded" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-[10px] bg-[#FFF0EA] border border-[#E8683A]/25 flex items-center justify-center text-[#E8683A] hover:bg-[#FFE8DC] transition-all" aria-label="YouTube">
                  <svg className="w-[18px] h-[18px]" viewBox="0,0,256,256" fill="currentColor">
                    <g fillRule="nonzero">
                      <g transform="scale(8.53333,8.53333)">
                        <path d="M15,4c-4.186,0 -9.61914,1.04883 -9.61914,1.04883l-0.01367,0.01563c-1.90652,0.30491 -3.36719,1.94317 -3.36719,3.93555v6v0.00195v5.99805v0.00195c0.00384,1.96564 1.4353,3.63719 3.37695,3.94336l0.00391,0.00586c0,0 5.43314,1.05078 9.61914,1.05078c4.186,0 9.61914,-1.05078 9.61914,-1.05078l0.00195,-0.00195c1.94389,-0.30554 3.37683,-1.97951 3.37891,-3.94727v-0.00195v-5.99805v-0.00195v-6c-0.00288,-1.96638 -1.43457,-3.63903 -3.37695,-3.94531l-0.00391,-0.00586c0,0 -5.43314,-1.04883 -9.61914,-1.04883zM12,10.39844l8,4.60156l-8,4.60156z"/>
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] font-medium text-gray-400">
              &copy; 2026 MeeruAI Inc. All Rights Reserved.
            </p>
            <div className="flex items-center gap-3 text-[11px] font-medium text-gray-400">
              <a href="/privacy" className="hover:text-gray-600 transition-colors">Privacy</a>
              <span className="text-gray-300">/</span>
              <a href="/terms" className="hover:text-gray-600 transition-colors">Terms</a>
              <span className="text-gray-300">/</span>
              <a href="/sitemap.xml" className="hover:text-gray-600 transition-colors">Sitemap</a>
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

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
