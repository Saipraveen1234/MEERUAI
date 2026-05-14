"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import DemoModal from "../../shared/DemoModal";

const SUBHEADLINE = "Close faster. Explain every variance. Act with confidence.";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Start typing after the heading fades in
  useEffect(() => {
    const timer = setTimeout(() => setHasStarted(true), 800);
    return () => clearTimeout(timer);
  }, []);

  // Typing effect
  useEffect(() => {
    if (!hasStarted) return;

    let index = 0;
    const timer = setInterval(() => {
      if (index <= SUBHEADLINE.length) {
        setTypedText(SUBHEADLINE.substring(0, index));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(timer);
      }
    }, 40);

    return () => clearInterval(timer);
  }, [hasStarted]);

  return (
    <section className="relative w-full bg-white pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl lg:max-w-5xl">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.15 }}
            className="space-y-8"
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl lg:text-5xl xl:text-6xl font-light leading-snug md:leading-[1.1] text-gray-900 lg:whitespace-nowrap"
            >
              AI Workbenches for the Office of the CFO
            </motion.h1>

            <motion.div variants={fadeUp} className="relative min-h-[2.5rem]">
              <p className="text-xl lg:text-[28px] text-gray-500 font-light leading-relaxed max-w-full lg:whitespace-nowrap">
                <span>{typedText}</span>
                {!isTypingComplete && (
                  <span className="inline-block w-[2px] h-[1em] bg-meeru-orange ml-[2px] align-middle animate-pulse" />
                )}
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="w-12 h-1 bg-meeru-orange rounded-full" />

            <motion.p variants={fadeUp} className="text-[14px] lg:text-[17px] text-gray-500 leading-relaxed max-w-2xl">
              MeeruAI helps finance teams complete high-stakes work with source-traced AI, from
              accounting close to variance analysis to performance action.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FF7448] text-white text-[15px] font-medium hover:bg-[#FF7448]/90 transition-colors shadow-sm hover:shadow cursor-pointer"
              >
                Request a Demo <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-gray-200 text-gray-600 text-[15px] font-medium hover:border-gray-300 hover:bg-gray-50 transition-colors bg-white/50 backdrop-blur-sm"
              >
                Explore the Workbenches <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Video section hidden temporarily until video is ready
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
          */}
        </div>
      </div>
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
