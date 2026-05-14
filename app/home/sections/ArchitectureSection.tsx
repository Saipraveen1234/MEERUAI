"use client";

import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";

function MobileArchConnector() {
  return (
    <div className="flex lg:hidden flex-col items-center justify-center relative py-1 my-2">
      {/* Top dot (aa-dot-start) — WordPress uses box-shadow glow, not a separate div */}
      <div
        className="w-2 h-2 rounded-full bg-[#E8683A] z-10"
        style={{ boxShadow: "0 0 10px #E8683A" }}
      />

      {/* Vertical SVG line with dash-flow */}
      <svg width="2" height="40" className="my-1 relative z-0">
        <motion.line
          x1="1"
          y1="0"
          x2="1"
          y2="40"
          stroke="#E8683A"
          strokeWidth="2"
          strokeDasharray="4 4"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -24 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          className="opacity-50"
        />
      </svg>

      {/* Orbiting dot (aa-orbit) — starts invisible so it never overlaps the top dot */}
      <div
        className="absolute left-1/2 top-0 w-1.5 h-1.5 rounded-full bg-[#E8683A] z-20"
        style={{
          boxShadow: "0 0 10px #E8683A",
          opacity: 0,
          animation: "orbit-y 2.4s cubic-bezier(0.65, 0, 0.35, 1) infinite",
          marginLeft: "-3px",
          marginTop: "2px",
        }}
      />

      {/* Bottom dot (aa-dot-end) */}
      <div className="w-2 h-2 rounded-full border-[1.5px] border-[#E8683A] bg-white relative z-10" />
    </div>
  );
}

export default function ArchitectureSection() {
  const [activeCoreIndex, setActiveCoreIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCoreIndex((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const coreFeatures = [
    "Contextual data model",
    "Company-specific ML",
    "Finance agents + automation",
    "Traceability + human review",
  ];

  return (
    <section className="relative w-full bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold tracking-[0.2em] text-meeru-orange uppercase mb-4">
            THE ARCHITECTURE
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-light leading-[1.15] text-gray-900">
            Built to Complete Finance Work,{" "}
            <span className="block">Not Just Analyze It.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-gray-600 leading-relaxed">
            Combine your finance data, company context, and AI workbenches into one operating layer that
            helps teams complete work faster, resolve issues sooner, and take action with confidence.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl border border-gray-200 bg-white p-8 lg:p-12 overflow-hidden shadow-sm"
        >
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #000 1px, transparent 1px),
                linear-gradient(to bottom, #000 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative grid lg:grid-cols-3 gap-0 lg:gap-12 z-10 items-stretch">
            {/* COLUMN 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              animate={{
                boxShadow: [
                  "0 0 15px rgba(232,104,58,0.05)",
                  "0 0 30px rgba(232,104,58,0.15)",
                  "0 0 15px rgba(232,104,58,0.05)",
                ],
                borderColor: [
                  "rgba(232,104,58,0.1)",
                  "rgba(232,104,58,0.3)",
                  "rgba(232,104,58,0.1)",
                ],
              }}
              className="bg-white/50 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border-2 shadow-sm flex flex-col h-full"
            >
              <h3 className="text-xs font-bold tracking-[0.15em] text-gray-900 uppercase mb-8">
                CONNECTS TO ANYTHING
              </h3>
              <div className="flex-1">
                <p className="text-[10px] font-semibold tracking-[0.15em] text-gray-400 uppercase mb-4">
                  DATA SOURCES
                </p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li>ERPs</li>
                  <li>CRMs</li>
                  <li>HRIS</li>
                  <li>Procurement</li>
                  <li>Banking</li>
                  <li>Data warehouses</li>
                  <li>Spreadsheets</li>
                  <li>Unstructured data</li>
                  <li className="text-gray-400 italic">— and more</li>
                </ul>
              </div>
            </motion.div>

            {/* Mobile Connector: Col 1 → Col 2 */}
            <MobileArchConnector />

            {/* COLUMN 2 (CENTER) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative h-full"
            >
              {/* === DESKTOP ANIMATED CONNECTORS (hidden on mobile) === */}
              {/* Left Connector */}
              <div className="absolute top-[55%] -left-12 w-12 flex items-center justify-between -translate-y-1/2 hidden lg:flex pointer-events-none z-10">
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-meeru-orange rounded-full blur-[3px] scale-[2] opacity-60" />
                  <div className="w-2 h-2 rounded-full bg-meeru-orange relative z-10" />
                </div>
                <svg className="flex-1 h-2 mx-1" preserveAspectRatio="none">
                  <motion.line
                    x1="0" y1="4" x2="100%" y2="4"
                    stroke="#E8683A" strokeWidth="1.5" strokeDasharray="4 4"
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -16 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="opacity-50"
                  />
                </svg>
                <div className="w-1.5 h-1.5 rounded-full border-[1.5px] border-meeru-orange bg-white relative z-10 flex-shrink-0" />
              </div>

              {/* Right Connector */}
              <div className="absolute top-[55%] -right-12 w-12 flex items-center justify-between -translate-y-1/2 hidden lg:flex pointer-events-none z-10">
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-meeru-orange rounded-full blur-[3px] scale-[2] opacity-60" />
                  <div className="w-2 h-2 rounded-full bg-meeru-orange relative z-10" />
                </div>
                <svg className="flex-1 h-2 mx-1" preserveAspectRatio="none">
                  <motion.line
                    x1="0" y1="4" x2="100%" y2="4"
                    stroke="#E8683A" strokeWidth="1.5" strokeDasharray="4 4"
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -16 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="opacity-50"
                  />
                </svg>
                <div className="w-1.5 h-1.5 rounded-full border-[1.5px] border-meeru-orange bg-white relative z-10 flex-shrink-0" />
              </div>

              {/* Bottom Connector */}
              <div className="absolute -bottom-[3rem] left-1/2 h-[3rem] flex flex-col items-center justify-between -translate-x-1/2 hidden lg:flex pointer-events-none z-10">
                <div className="relative flex-shrink-0 mt-1">
                  <div className="absolute inset-0 bg-meeru-orange rounded-full blur-[3px] scale-[2] opacity-60" />
                  <div className="w-2 h-2 rounded-full bg-meeru-orange relative z-10" />
                </div>
                <svg className="flex-1 w-2 my-1" preserveAspectRatio="none">
                  <motion.line
                    x1="4" y1="0" x2="4" y2="100%"
                    stroke="#E8683A" strokeWidth="1.5" strokeDasharray="4 4"
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -16 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="opacity-50"
                  />
                </svg>
                <div className="w-1.5 h-1.5 rounded-full border-[1.5px] border-meeru-orange bg-white relative z-10 flex-shrink-0 mb-1" />
              </div>
              {/* =========================== */}

              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 15px rgba(232,104,58,0.1)",
                    "0 0 40px rgba(232,104,58,0.35)",
                    "0 0 15px rgba(232,104,58,0.1)",
                  ],
                  borderColor: [
                    "rgba(232,104,58,0.2)",
                    "rgba(232,104,58,0.6)",
                    "rgba(232,104,58,0.2)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white rounded-3xl p-6 lg:p-8 border-2 relative overflow-hidden h-full flex flex-col justify-between"
              >
                <h3 className="text-xs font-bold tracking-[0.15em] text-gray-900 uppercase mb-8 text-center lg:text-left">
                  FINANCE-GRADE CORE
                </h3>
                <div className="relative space-y-2 flex-1">
                  {coreFeatures.map((feature, idx) => {
                    const isActive = idx === activeCoreIndex;
                    return (
                      <div
                        key={idx}
                        className="relative flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors"
                        onClick={() => setActiveCoreIndex(idx)}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeCoreHighlight"
                            className="absolute inset-0 bg-meeru-orange/10 rounded-xl shadow-[0_0_15px_rgba(232,104,58,0.15)]"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                        <span
                          className={`relative z-10 inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold shrink-0 transition-colors duration-300 ${
                            isActive
                              ? "bg-meeru-orange text-white shadow-sm"
                              : "text-gray-500 bg-gray-50 border border-gray-100"
                          }`}
                        >
                          0{idx + 1}
                        </span>
                        <span
                          className={`relative z-10 text-sm font-medium transition-colors duration-300 ${
                            isActive ? "text-gray-900" : "text-gray-500"
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="relative pt-6 mt-6 border-t border-gray-100 text-center">
                  <p className="text-[10px] font-semibold tracking-[0.15em] text-gray-400 uppercase mb-4">
                    BUILT FOR FINANCE-GRADE WORK
                  </p>
                  <div className="flex items-center justify-center">
                    <img
                      src="/meeru-m-coral.png"
                      alt="M"
                      className="h-8 w-auto object-contain mr-0.5"
                    />
                    <span className="text-[28px] font-extrabold text-gray-900 tracking-tight leading-none">
                      eeru<span className="font-bold">AI</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Mobile Connector: Col 2 → Col 3 */}
            <MobileArchConnector />

            {/* COLUMN 3 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              animate={{
                boxShadow: [
                  "0 0 15px rgba(232,104,58,0.05)",
                  "0 0 30px rgba(232,104,58,0.15)",
                  "0 0 15px rgba(232,104,58,0.05)",
                ],
                borderColor: [
                  "rgba(232,104,58,0.1)",
                  "rgba(232,104,58,0.3)",
                  "rgba(232,104,58,0.1)",
                ],
              }}
              className="bg-meeru-orange/[0.02] backdrop-blur-sm rounded-3xl p-6 lg:p-8 border-2 flex flex-col h-full relative"
            >
              <h3 className="text-xs font-bold tracking-[0.15em] text-meeru-orange uppercase mb-8">
                AI WORKBENCHES
              </h3>
              <div className="flex-1 flex flex-col justify-between">
                <div className="pb-6 border-b border-meeru-orange/10">
                  <div className="flex items-baseline gap-2 mb-1.5">
                    <span className="text-meeru-orange text-lg font-medium">01</span>
                    <span className="text-gray-900 font-semibold text-lg tracking-tight">Understand</span>
                  </div>
                  <p className="text-gray-500 text-[15px] leading-relaxed">Know what changed and why.</p>
                </div>

                <div className="py-6 border-b border-meeru-orange/10">
                  <div className="flex items-baseline gap-2 mb-1.5">
                    <span className="text-meeru-orange text-lg font-medium">02</span>
                    <span className="text-gray-900 font-semibold text-lg tracking-tight">Resolve</span>
                  </div>
                  <p className="text-gray-500 text-[15px] leading-relaxed">
                    Move issues forward with evidence + routing.
                  </p>
                </div>

                <div className="pt-6">
                  <div className="flex items-baseline gap-2 mb-1.5">
                    <span className="text-meeru-orange text-lg font-medium">03</span>
                    <span className="text-gray-900 font-semibold text-lg tracking-tight">Complete</span>
                  </div>
                  <p className="text-gray-500 text-[15px] leading-relaxed">
                    Finish with confidence. Audit-ready work products.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Connector: Col 3 → Powered By */}
          <MobileArchConnector />

          {/* BOTTOM ROW: POWERED BY */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="relative mx-auto w-full max-w-sm bg-white rounded-2xl p-8 border border-meeru-orange/10 shadow-sm text-center"
          >
            <p className="text-[10px] font-semibold tracking-[0.15em] text-gray-400 uppercase mb-5">
              POWERED BY
            </p>
            <div className="flex flex-col items-center justify-center gap-4 text-sm font-semibold text-gray-900">
              <span>Agentic Suites&trade;</span>
              <span>Autonomy Studio&trade;</span>
              <span>Finance Command Center</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
