"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutFounderSection() {
  return (
    <section className="w-full bg-[#F5F5F5] py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.15 }}
          className="flex flex-col md:flex-row items-center gap-12 lg:gap-16"
        >
          {/* Left: quote + attribution + logo */}
          <div className="flex-1 space-y-6">
            <motion.blockquote
              variants={fadeUp}
              className="text-2xl lg:text-3xl text-gray-900 font-light leading-[1.4]"
            >
              <span className="text-meeru-orange font-normal">"</span>We're
              building MeeruAI, so finance leaders never have to choose between
              speed and certainty. Decisions, explained and ready to act on every
              day, in real time."
            </motion.blockquote>

            <motion.p
              variants={fadeUp}
              className="text-xs text-gray-400 font-medium"
            >
              Anji Maram, Founder &amp; CEO of MeeruAI
            </motion.p>

            <motion.div variants={fadeUp}>
              <Image
                src="/meeruai-logo.png"
                alt="MeeruAI"
                width={140}
                height={36}
                className="h-9 w-auto object-contain"
              />
            </motion.div>
          </div>

          {/* Right: photo card */}
          <motion.div
            variants={fadeUp}
            className="flex-shrink-0 relative w-full max-w-[340px] lg:max-w-[400px]"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/Anji-Maram-CEO.jpg"
                alt="Anji Maram"
                width={400}
                height={380}
                className="w-full h-[380px] object-cover object-top"
              />

              {/* MEERUAI badge top-right */}
              <div className="absolute top-3 right-3">
                <span className="px-2 py-1 rounded bg-black/60 text-white text-[9px] font-bold tracking-widest uppercase backdrop-blur-sm">
                  MeeruAI
                </span>
              </div>

              {/* Name overlay bottom */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-sm font-semibold leading-tight">
                  Anji Maram
                </p>
                <p className="text-white/70 text-[10px] font-medium tracking-wider uppercase">
                  Founder &amp; CEO
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
