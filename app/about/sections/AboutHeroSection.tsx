"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutHeroSection() {
  return (
    <section className="relative w-full bg-white pt-28 lg:pt-32 pb-20 lg:pb-32 overflow-hidden">
      {/* Large wordmark */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full flex items-center justify-center px-4 pt-10 lg:pt-14 pb-4"
      >
        <Image
          src="/meeru-logo-big.png"
          alt="MeeruAI"
          width={1200}
          height={220}
          className="w-full max-w-[1100px] h-auto object-contain"
          priority
        />
      </motion.div>

      {/* Text content */}
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
        className="max-w-3xl mx-auto px-6 lg:px-8 text-center space-y-6 pt-8"
      >
        <motion.p
          variants={fadeUp}
          className="text-xs font-semibold tracking-[0.2em] uppercase text-meeru-orange"
        >
          AI Workbenches for Finance
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-2xl lg:text-3xl xl:text-4xl text-gray-900 font-light leading-[1.35]"
        >
          MeeruAI is redefining how finance teams make better decisions with
          trusted AI that brings{" "}
          <span className="text-meeru-orange font-normal">data</span>,{" "}
          <span className="text-meeru-orange font-normal">workflows</span>, and
          people into one continuous system.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-sm lg:text-base text-gray-500 leading-relaxed"
        >
          <strong className="text-gray-700 font-semibold">Identify</strong> what
          changed,{" "}
          <strong className="text-gray-700 font-semibold">resolve</strong> what
          matters, and help teams{" "}
          <strong className="text-gray-700 font-semibold">move</strong> from
          signal to decision with{" "}
          <strong className="text-gray-700 font-semibold">confidence</strong>.
        </motion.p>
      </motion.div>
    </section>
  );
}
