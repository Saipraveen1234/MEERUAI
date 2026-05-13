"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";

export default function OpportunitySection() {
  const [bgPhase, setBgPhase] = useState("draw");

  useEffect(() => {
    const cycle = setInterval(() => {
      setBgPhase("hide");
      setTimeout(() => setBgPhase("draw"), 1000); 
    }, 5000); 
    return () => clearInterval(cycle);
  }, []);

  const svgVariants: Variants = {
    hide: {},
    draw: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const lineVariants: Variants = {
    hide: {
      pathLength: 0,
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    draw: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const circleVariants: Variants = {
    hide: {
      scale: 0,
      opacity: 0,
      transition: { duration: 0.5 },
    },
    draw: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, type: "spring", bounce: 0.4 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      className="relative py-24 border-t border-gray-100 overflow-hidden"
      style={{ backgroundColor: "rgba(249,249,248,0.6)" }}
      aria-label="The Opportunity"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(226,106,69,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(226,106,69,0.12) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMaxYMid slice"
          variants={svgVariants}
          initial="draw"
          animate={bgPhase}
        >
          <g>
            <motion.line variants={lineVariants} x1="200" y1="900" x2="1500" y2="-100" stroke="rgba(226,106,69,0.25)" strokeWidth="1.8" />
            <motion.line variants={lineVariants} x1="400" y1="900" x2="1700" y2="100" stroke="rgba(226,106,69,0.2)" strokeWidth="1.8" />
            <motion.line variants={lineVariants} x1="600" y1="900" x2="1800" y2="200" stroke="rgba(226,106,69,0.18)" strokeWidth="1.8" />
            <motion.line variants={lineVariants} x1="900" y1="900" x2="1900" y2="300" stroke="rgba(226,106,69,0.15)" strokeWidth="1.8" />
            <motion.line variants={lineVariants} x1="1100" y1="900" x2="2000" y2="400" stroke="rgba(226,106,69,0.12)" strokeWidth="1.8" />
            
            {/* Intersecting lines (top-left to bottom-right) */}
            <motion.line variants={lineVariants} x1="700" y1="-100" x2="1700" y2="900" stroke="rgba(226,106,69,0.2)" strokeWidth="1.8" />
            <motion.line variants={lineVariants} x1="1000" y1="-100" x2="2000" y2="900" stroke="rgba(226,106,69,0.15)" strokeWidth="1.8" />
          </g>
          <g>
            <motion.circle variants={circleVariants} cx="1380" cy="260" r="32" fill="none" stroke="rgba(226,106,69,0.25)" strokeWidth="1.8" />
            <motion.circle variants={circleVariants} cx="1380" cy="540" r="4" fill="rgba(226,106,69,0.3)" />
            <motion.circle variants={circleVariants} cx="1180" cy="380" r="5" fill="rgba(226,106,69,0.3)" />
            <motion.circle variants={circleVariants} cx="1560" cy="700" r="5" fill="rgba(226,106,69,0.3)" />
          </g>
        </motion.svg>
      </div>

      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, rgba(226,106,69,0.3), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 mb-14"
        >
          <motion.div variants={itemVariants}>
            <p className="text-xs font-semibold tracking-[0.2em] text-meeru-orange uppercase mb-4">
              THE OPPORTUNITY
            </p>
            <h2 className="text-3xl md:text-[2.5rem] lg:text-[3.2rem] font-light text-gray-900 leading-[1.15]">
              Finance has more tools than ever,{" "}
              <span className="block">yet the work is still manual.</span>
            </h2>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col justify-end gap-3 text-sm text-gray-600 leading-relaxed">
            <p>
              ERP records the numbers. BI reports what happened. Close tools track the
              process. Generic AI drafts the commentary. MeeruAI helps finance finish the
              work.
            </p>
            <p>
              From close tasks to reconciliations to variance explanations, MeeruAI brings
              data, AI, workflow, evidence, and review into one finance-specific workbench
              experience.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {/* Card 1 */}
          <motion.article
            variants={itemVariants}
            className="relative rounded-2xl overflow-hidden group cursor-pointer border border-transparent hover:border-meeru-orange/50 transition-colors duration-500 bg-[#1A1A1A] aspect-[16/10] sm:aspect-[4/5]"
            tabIndex={0}
          >
            <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-10">
              <img 
                src="https://www.starbridgemarketing.com/meeruai/wp-content/uploads/2026/05/The-Opportunity-card-img1.jpg"
                alt="Close Faster"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 40%, transparent 100%)",
              }}
            />

            {/* Front State */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end transition-opacity duration-500 group-hover:opacity-0">
              <div>
                <span className="text-xs text-meeru-orange font-semibold font-mono block mb-1">01</span>
                <h3 className="text-2xl font-light text-white">Close Faster</h3>
              </div>
            </div>

            {/* Hover State */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div>
                <span className="text-xs text-meeru-orange font-semibold font-mono block mb-2">01</span>
                <h3 className="text-2xl font-light text-white">Close Faster</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Move period-end work forward",
                  "Close tasks, reconciliations, flux analysis",
                  "Routing and review built in",
                  "Evidence preserved in one place",
                ].map((bullet) => (
                  <li key={bullet} className="text-sm text-white/80 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-meeru-orange flex-shrink-0 mt-2" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>

          {/* Card 2 */}
          <motion.article
            variants={itemVariants}
            className="relative rounded-2xl overflow-hidden group cursor-pointer border border-transparent hover:border-meeru-orange/50 transition-colors duration-500 bg-[#1A1A1A] aspect-[16/10] sm:aspect-[4/5]"
            tabIndex={0}
          >
            <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-10">
              <img 
                src="https://www.starbridgemarketing.com/meeruai/wp-content/uploads/2026/05/The-Opportunity-card-img2.jpg" 
                alt="Resolve Issues Sooner" 
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 40%, transparent 100%)",
              }}
            />
            
            {/* Front State */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end transition-opacity duration-500 group-hover:opacity-0">
              <div>
                <span className="text-xs text-meeru-orange font-semibold font-mono block mb-1">02</span>
                <h3 className="text-2xl font-light text-white">Resolve Issues Sooner</h3>
              </div>
            </div>

            {/* Hover State */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div>
                <span className="text-xs text-meeru-orange font-semibold font-mono block mb-2">02</span>
                <h3 className="text-2xl font-light text-white">Resolve Issues Sooner</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Trace exceptions to source data",
                  "Surface drivers and likely explanations",
                  "Catch variances before they slow the close",
                  "Move from flag to resolution faster",
                ].map((bullet) => (
                  <li key={bullet} className="text-sm text-white/80 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-meeru-orange flex-shrink-0 mt-2" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>

          {/* Card 3 */}
          <motion.article
            variants={itemVariants}
            className="relative rounded-2xl overflow-hidden group cursor-pointer border border-transparent hover:border-meeru-orange/50 transition-colors duration-500 bg-[#1A1A1A] aspect-[16/10] sm:aspect-[4/5]"
            tabIndex={0}
          >
            <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-10">
              <img 
                src="https://www.starbridgemarketing.com/meeruai/wp-content/uploads/2026/05/The-Opportunity-card-img3.jpg" 
                alt="Act with Confidence" 
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 40%, transparent 100%)",
              }}
            />
            
            {/* Front State */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end transition-opacity duration-500 group-hover:opacity-0">
              <div>
                <span className="text-xs text-meeru-orange font-semibold font-mono block mb-1">03</span>
                <h3 className="text-2xl font-light text-white">Act with Confidence</h3>
              </div>
            </div>

            {/* Hover State */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div>
                <span className="text-xs text-meeru-orange font-semibold font-mono block mb-2">03</span>
                <h3 className="text-2xl font-light text-white">Act with Confidence</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Reviewed, source-traced work products",
                  "Approvals built into every workflow",
                  "Next actions ready before review",
                  "Audit-ready evidence, by default",
                ].map((bullet) => (
                  <li key={bullet} className="text-sm text-white/80 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-meeru-orange flex-shrink-0 mt-2" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
