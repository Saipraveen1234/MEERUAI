"use client";

import { ArrowRight, Linkedin, Instagram, Youtube } from "lucide-react";

export default function CTAFooterSection() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 text-center">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.15] text-gray-900 max-w-4xl mx-auto mb-6">
          Finance finally has a system that finishes the work, not just explains it.
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
          MeeruAI helps finance teams close faster, explain every variance, and act with confidence
          with source-traced evidence, review, and audit-ready execution built in.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-meeru-orange text-white text-sm font-medium hover:bg-opacity-90 transition-colors"
          >
            Request a Demo <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-700 text-sm font-medium hover:border-gray-400 transition-colors"
          >
            Explore the Workbenches <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <footer className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="/meeruai-logo.png"
                  alt="MeeruAI"
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                MeeruAI helps finance teams complete high-stakes work with source-traced AI, from
                accounting close to variance analysis to performance action.
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Certifications</h4>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                  <span className="text-[8px] font-bold text-blue-600 text-center leading-tight">
                    AICPA
                    <br />
                    SOC
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center border border-purple-100">
                  <span className="text-[8px] font-bold text-purple-600 text-center leading-tight">
                    GDPR
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center border border-cyan-100">
                  <span className="text-[8px] font-bold text-cyan-600 text-center leading-tight">
                    ISO
                  </span>
                </div>
              </div>
            </div>

            <div className="md:text-right">
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex items-center md:justify-end gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:border-meeru-orange hover:text-meeru-orange transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:border-meeru-orange hover:text-meeru-orange transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:border-meeru-orange hover:text-meeru-orange transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:border-meeru-orange hover:text-meeru-orange transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-400">
              &copy; 2026 MeeruAI Inc. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <a href="#" className="hover:text-gray-600 transition-colors">
                Privacy
              </a>
              <span>/</span>
              <a href="#" className="hover:text-gray-600 transition-colors">
                Terms
              </a>
              <span>/</span>
              <a href="#" className="hover:text-gray-600 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-meeru-orange text-white flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-colors z-50"
        aria-label="Scroll to top"
      >
        <ArrowRight className="w-5 h-5 -rotate-90" />
      </button>
    </section>
  );
}
