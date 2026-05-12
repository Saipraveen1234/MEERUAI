"use client";

import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.15 }}
            className="space-y-8"
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.1] text-gray-900"
            >
              AI Workbenches for the Office of the CFO
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl lg:text-2xl text-gray-500 font-light leading-relaxed"
            >
              Close faster. Explain every variance. Act with confidence.
            </motion.p>

            <motion.div variants={fadeUp} className="w-12 h-1 bg-meeru-orange rounded-full" />

            <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed max-w-lg">
              From accounting close to performance action. MeeruAI helps finance teams complete
              high-stakes work with source-traced AI, from accounting close to variance analysis to
              performance action.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-meeru-orange text-white text-sm font-medium hover:bg-meeru-orange/90 transition-colors"
              >
                Request a Demo <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-700 text-sm font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                Explore the Workbenches <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-2xl aspect-video group cursor-pointer">
              <div className="absolute inset-0">
                <Image
                  src="/hero_video_poster.png"
                  alt="MeeruAI Finance Dashboard"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <button
                    className="w-16 h-16 rounded-full bg-meeru-orange flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto"
                    aria-label="Play demo video"
                  >
                    <Play className="w-7 h-7 text-white ml-1" fill="white" />
                  </button>
                </div>
              </div>

              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 text-white text-xs font-medium backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  2 min
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-xs text-white/70 font-medium mb-1">Watch the demo</p>
                <p className="text-sm text-white font-medium">
                  MeeruAI — Decision Intelligence for Finance
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
