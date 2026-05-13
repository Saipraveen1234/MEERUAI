"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const inputGroups = [
  {
    tag: "CONNECTS TO ANYTHING",
    title: "Data Sources",
    chips: ["SAP", "Oracle", "NetSuite", "Salesforce"],
  },
  {
    tag: "SPEAKS FINANCE",
    title: "Natural Language",
    chips: ["Query interface", "Deterministic", "Context-aware"],
  },
  {
    tag: "OPERATIONAL SIGNALS",
    title: "Workbench Inputs",
    chips: ["Close tasks", "Reconciliations", "Flux data"],
  },
];

const coreRows = [
  { num: "01", label: "COMPANY CONTEXTUAL DATA MODEL" },
  { num: "02", label: "COMPANY-SPECIFIC ML" },
  { num: "03", label: "FINANCE AGENTS + AUTOMATION" },
  { num: "04", label: "TRACEABILITY + HUMAN REVIEW" },
];

const workbenches = [
  {
    title: "Understand",
    sub: "Know what changed and why.",
    chips: ["Variance detection", "Pattern matching", "Auto-classification"],
  },
  {
    title: "Resolve",
    sub: "Move issues forward with evidence and routing.",
    chips: ["NL queries", "Audit trail", "Decision prompts"],
  },
  {
    title: "Complete",
    sub: "Act with confidence. Reviewed, audit-ready work products.",
    chips: ["Close", "Performance", "Flux Analysis"],
  },
];

function AnimatedDashedLine() {
  return (
    <div className="flex items-center flex-1">
      <svg className="w-full h-[2px]" preserveAspectRatio="none">
        <motion.line
          x1="0" y1="1" x2="100%" y2="1"
          stroke="#E8683A"
          strokeWidth="1.5"
          strokeDasharray="5 4"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -18 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          opacity={0.5}
        />
      </svg>
    </div>
  );
}

export default function ArchitectureDiagramSection() {
  const [activeRow, setActiveRow] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 0.85", "start 0.35"],
  });

  const cardScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const cardRadius = useTransform(scrollYProgress, [0, 1], [28, 0]);

  useEffect(() => {
    const t = setInterval(() => setActiveRow((p) => (p + 1) % 4), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="relative w-full bg-white py-20 lg:py-28 overflow-hidden"
      initial={{ opacity: 0, x: -64, y: 72, scale: 0.965 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.15 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold tracking-[0.2em] text-meeru-orange uppercase mb-4">
            THE ARCHITECTURE
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-semibold leading-[1.15] text-gray-900 mb-5">
            Built to Complete Finance Work,{" "}
            <span className="block">Not Just Analyze It.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 leading-relaxed text-[15px] max-w-prose mx-auto">
            Combine your finance data, company context, and AI workbenches into one operating layer that helps teams complete work faster, resolve issues sooner, and take action with confidence.
          </motion.p>
        </motion.div>

        {/* Main diagram card */}
        <motion.div
          ref={cardRef}
          className="border border-gray-200 bg-[#FAFAFA] p-6 lg:p-8 shadow-sm relative overflow-hidden"
          style={{
            scale: cardScale,
            borderRadius: cardRadius,
            transformOrigin: "center top",
            willChange: "transform, border-radius",
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        >
          {/* Single 3-col grid: each col owns its badge/logo + content */}
          <div className="relative z-10 grid lg:grid-cols-3 gap-4 lg:gap-6">

            {/* ── LEFT COL ── */}
            <div className="flex flex-col gap-3 self-stretch">
              {/* Badge */}
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-meeru-orange/40 text-meeru-orange text-[10px] font-semibold tracking-[0.12em] uppercase bg-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-meeru-orange" />
                  INPUTS TO MEERUAI
                </span>
              </div>
              {inputGroups.map((g) => (
                <div
                  key={g.tag}
                  className="flex-1 bg-white rounded-2xl border border-gray-200 p-4 shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
                >
                  <p className="text-[9px] font-bold tracking-[0.18em] uppercase text-meeru-orange mb-1.5">
                    {g.tag}
                  </p>
                  <p className="text-sm font-semibold text-gray-800 mb-2.5">{g.title}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {g.chips.map((c) => (
                      <span
                        key={c}
                        className="px-2.5 py-1 rounded-lg border border-gray-200 text-[11px] text-gray-500 bg-gray-50"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* ── CENTER COL ── */}
            <div className="flex flex-col gap-2 pt-8">
              {/* Logo */}
              <div className="flex justify-center h-[34px] items-center mb-1">
                <div className="flex items-center gap-1">
                  <img
                    src="https://www.starbridgemarketing.com/meeruai/wp-content/uploads/2026/05/meeru-m-coral.png"
                    alt="M"
                    className="h-8 w-auto object-contain"
                  />
                  <span className="text-[26px] font-extrabold text-gray-900 tracking-tight leading-none">
                    eeru<span className="font-bold">AI</span>
                  </span>
                </div>
              </div>

              {/* Connector line */}
              <div className="hidden lg:flex items-center gap-0 mb-1">
                <div className="flex-shrink-0 relative w-3 h-3 flex items-center justify-center">
                  <div className="absolute w-3 h-3 rounded-full bg-meeru-orange opacity-20 scale-[2]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-meeru-orange relative z-10" />
                </div>
                <AnimatedDashedLine />
                <div className="flex-shrink-0 w-3 h-3 rounded-full border-2 border-meeru-orange bg-white" />
              </div>

              {/* Row cards */}
              {coreRows.map((row, i) => {
                const isActive = i === activeRow;
                return (
                  <motion.div
                    key={row.num}
                    onClick={() => setActiveRow(i)}
                    animate={
                      isActive
                        ? { borderColor: "#E8683A", backgroundColor: "#FFF8F5" }
                        : { borderColor: "#E5E7EB", backgroundColor: "#FFFFFF" }
                    }
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl border-2 cursor-pointer"
                  >
                    <span
                      className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold border-2 transition-colors duration-300 ${
                        isActive
                          ? "bg-white border-meeru-orange text-meeru-orange"
                          : "bg-white border-gray-200 text-gray-400"
                      }`}
                    >
                      {row.num}
                    </span>
                    <span
                      className={`text-[11px] font-bold tracking-[0.07em] uppercase transition-colors duration-300 ${
                        isActive ? "text-gray-900" : "text-gray-400"
                      }`}
                    >
                      {row.label}
                    </span>
                  </motion.div>
                );
              })}

              {/* Dot indicators */}
              <div className="flex items-center justify-center gap-1.5 pt-1">
                {coreRows.map((_, i) => (
                  <motion.div
                    key={i}
                    animate={
                      i === activeRow
                        ? { width: 14, backgroundColor: "#E8683A" }
                        : { width: 8, backgroundColor: "#D1D5DB" }
                    }
                    transition={{ duration: 0.3 }}
                    className="h-2 rounded-full"
                  />
                ))}
              </div>
            </div>

            {/* ── RIGHT COL ── */}
            <div className="flex flex-col gap-3 self-stretch">
              {/* Badge */}
              <div className="flex justify-end">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-meeru-orange/40 text-meeru-orange text-[10px] font-semibold tracking-[0.12em] uppercase bg-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-meeru-orange" />
                  AI WORKBENCHES
                </span>
              </div>
              {workbenches.map((w) => (
                <div key={w.title} className="flex-1 bg-white rounded-2xl border border-gray-200 p-4 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                  <p className="text-sm font-semibold text-gray-900 mb-0.5">{w.title}</p>
                  <p className="text-xs text-gray-500 mb-2.5 leading-relaxed">{w.sub}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {w.chips.map((c) => (
                      <span
                        key={c}
                        className="px-2.5 py-1 rounded-lg border border-gray-200 text-[11px] text-gray-500 bg-gray-50"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom: POWERED BY */}
          <div className="relative z-10 mt-6 pt-5 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gray-400 mb-1 sm:mb-0">
              POWERED BY
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {["Agentic Suites™", "Autonomy Studio™", "Finance Command Center"].map((label) => (
                <span
                  key={label}
                  className="px-3.5 py-1.5 rounded-full border border-meeru-orange/40 text-meeru-orange text-[11px] font-medium bg-white"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
