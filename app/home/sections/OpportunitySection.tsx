"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function OpportunitySection() {
  const [isInView, setIsInView] = useState(false);

  // Scroll-driven scale for the entire cards grid
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"],
  });
  const gridScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

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
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <motion.section
      className={`relative py-24 border-t border-gray-100 overflow-hidden ${
        isInView ? "opportunity-float" : ""
      }`}
      style={{ backgroundColor: "rgba(249,249,248,0.6)" }}
      aria-label="The Opportunity"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
      onViewportEnter={() => setIsInView(true)}
    >
      {/* Blueprint background — exact WordPress structure */}
      <div className="blueprint-decor" aria-hidden="true">
        <div className="blueprint-grid" />
        <svg
          className="blueprint-svg"
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMaxYMid slice"
        >
          <g className="bp-lines">
            <line x1="200" y1="900" x2="1500" y2="-100" className="bp-line bp-l1" />
            <line x1="400" y1="900" x2="1700" y2="100" className="bp-line bp-l2" />
            <line x1="600" y1="900" x2="1800" y2="200" className="bp-line bp-l3" />
            <line x1="900" y1="900" x2="1900" y2="300" className="bp-line bp-l4" />
            <line x1="1100" y1="900" x2="2000" y2="400" className="bp-line bp-l5" />
            <line x1="800" y1="-50" x2="1750" y2="950" className="bp-line bp-l6" />
            <line x1="1000" y1="-50" x2="1900" y2="950" className="bp-line bp-l7" />
            <line x1="1450" y1="0" x2="1450" y2="900" className="bp-line bp-vert" />
            <line x1="1520" y1="0" x2="1520" y2="900" className="bp-line bp-vert bp-vert-2" />
          </g>
          <g className="bp-nodes">
            <circle cx="1280" cy="320" r="6" className="bp-node bp-node-1" />
            <circle cx="1380" cy="540" r="4" className="bp-node bp-node-2" />
            <circle cx="1180" cy="180" r="5" className="bp-node bp-node-3" />
            <circle cx="1560" cy="700" r="5" className="bp-node bp-node-4" />
            <circle cx="1080" cy="640" r="3" className="bp-node bp-node-5" />
            <circle cx="1450" cy="240" r="14" className="bp-ring" />
          </g>
        </svg>
      </div>

      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, rgba(226,106,69,0.3), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="mb-14">
          <motion.div variants={textVariants}>
            <p className="text-xs font-semibold tracking-[0.2em] text-meeru-orange uppercase mb-4">
              THE OPPORTUNITY
            </p>
            <h2 className="text-3xl md:text-[2.5rem] lg:text-[3.2rem] font-normal text-gray-900 leading-[1.15] mb-8">
              Finance has more tools than{" "}<br className="hidden md:block" />
              ever, yet the work is still{" "}<br className="hidden md:block" />
              manual.
            </h2>
          </motion.div>
          <motion.div variants={textVariants} className="flex flex-col gap-4 text-[15px] text-gray-600 leading-relaxed max-w-2xl">
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
        </div>

        <motion.div
          ref={gridRef}
          style={{ scale: gridScale }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 will-change-transform"
        >
          {/* Card 1 */}
          <article
            className="relative rounded-2xl overflow-hidden group cursor-pointer border border-transparent hover:border-meeru-orange/50 transition-colors duration-500 bg-[#1A1A1A] aspect-[16/10] sm:aspect-[4/5]"
            tabIndex={0}
          >
            <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-10">
              <img
                src="/opportunity-card-1.jpg"
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
          </article>

          {/* Card 2 */}
          <article
            className="relative rounded-2xl overflow-hidden group cursor-pointer border border-transparent hover:border-meeru-orange/50 transition-colors duration-500 bg-[#1A1A1A] aspect-[16/10] sm:aspect-[4/5]"
            tabIndex={0}
          >
            <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-10">
              <img
                src="/opportunity-card-2.jpg"
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
          </article>

          {/* Card 3 */}
          <article
            className="relative rounded-2xl overflow-hidden group cursor-pointer border border-transparent hover:border-meeru-orange/50 transition-colors duration-500 bg-[#1A1A1A] aspect-[16/10] sm:aspect-[4/5]"
            tabIndex={0}
          >
            <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-10">
              <img
                src="/opportunity-card-3.jpg"
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
          </article>
        </motion.div>
      </div>
    </motion.section>
  );
}
