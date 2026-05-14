"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ProofPointsSection() {
  const [isInView, setIsInView] = useState(false);

  const sectionVariants = {
    hidden: {
      opacity: 0,
      x: -64,
      y: 72,
      scale: 0.965,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] as const,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <motion.section
      className={`relative w-full bg-white py-20 lg:py-28 overflow-hidden ${
        isInView ? "proof-float" : ""
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
      onViewportEnter={() => setIsInView(true)}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div variants={childVariants}>
          <p className="text-xs font-semibold tracking-[0.2em] text-meeru-orange uppercase mb-4">
            PROOF POINTS
          </p>
          <h2 className="text-4xl lg:text-5xl font-light leading-[1.15] text-gray-900 mb-12">
            Early proof that the model works
          </h2>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 lg:p-12 mb-8 relative"
        >
          <span className="absolute top-6 left-6 text-6xl text-meeru-orange leading-none font-serif">
            &ldquo;
          </span>
          <blockquote className="pl-8 pt-4">
            <p className="text-2xl lg:text-3xl font-light text-gray-900 italic leading-snug max-w-3xl">
              Two years of internal LLM development couldn&apos;t produce what MeeruAI demoed in one
              session.
            </p>
            <footer className="mt-6 text-gray-600">
              &mdash; Fortune 500 Finance Team
            </footer>
          </blockquote>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={sectionVariants}
        >
          <motion.div
            variants={childVariants}
            className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-8"
          >
            <h3 className="text-lg font-semibold text-meeru-orange mb-3 leading-snug">
              30% finance operating efficiency gain
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Less manual investigation, commentary, routing, and evidence gathering across targeted
              workflows.
            </p>
          </motion.div>

          <motion.div
            variants={childVariants}
            className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-8"
          >
            <h3 className="text-lg font-semibold text-meeru-orange mb-3 leading-snug">
              Reduce Tool Dependency
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Reduce reliance on separate close, reconciliation, reporting, and workflow systems.
            </p>
          </motion.div>

          <motion.div
            variants={childVariants}
            className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-8"
          >
            <h3 className="text-lg font-semibold text-meeru-orange mb-3 leading-snug">
              Weeks to days close compression
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Close work accelerated while preserving evidence, review, and audit-ready support.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
