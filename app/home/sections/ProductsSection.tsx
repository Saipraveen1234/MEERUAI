"use client";

import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState<"close" | "performance">("performance");
  const [workflowIndex, setWorkflowIndex] = useState(0);

  useEffect(() => {
    setWorkflowIndex(0);
  }, [activeTab]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWorkflowIndex((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const closeWorkflows = [
    "3 reconciliations are unmatched and blocking close. Want me to escalate to the preparer?",
    "Intercompany variance widened 12% vs last period — driver: APAC FX revaluation. Show breakdown?",
    "Accrual flux of $1.4M traced to delayed vendor invoices. Want me to draft the journal?",
  ];

  const performanceWorkflows = [
    "EMEA pipeline is drifting 6% below plan. Top driver: deal slippage in financial services. Want a forecast redo?",
    "Revenue variance of $2.1M driven by enterprise cohort expansion. Shall I update the board narrative?",
    "OpEx increased 8% due to accelerated Q3 marketing spend. Want to view the vendor breakdown?",
  ];

  const activeWorkflows = activeTab === "close" ? closeWorkflows : performanceWorkflows;
  const currentText = activeWorkflows[workflowIndex];

  // Chart data
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
  const planData = [30, 33, 36, 39, 42, 45, 48, 51];
  const actualData = [32, 38, 43, 48, 46, 55, 65];

  const chartWidth = 400;
  const chartHeight = 140;
  const padding = { left: 10, right: 10, top: 10, bottom: 20 };
  const innerWidth = chartWidth - padding.left - padding.right;
  const innerHeight = chartHeight - padding.top - padding.bottom;

  const maxVal = 75;
  const xScale = (i: number) => padding.left + (i / (months.length - 1)) * innerWidth;
  const yScale = (v: number) => padding.top + innerHeight - (v / maxVal) * innerHeight;

  const actualPoints = actualData.map((v, i) => `${xScale(i)},${yScale(v)}`).join(" ");
  const planPoints = planData.map((v, i) => `${xScale(i)},${yScale(v)}`).join(" ");

  // Area path for actual (close the loop at bottom)
  const areaPath = `
    M ${xScale(0)},${yScale(actualData[0])}
    ${actualData.map((v, i) => `L ${xScale(i)},${yScale(v)}`).join(" ")}
    L ${xScale(actualData.length - 1)},${padding.top + innerHeight}
    L ${xScale(0)},${padding.top + innerHeight}
    Z
  `;

  return (
    <section className="relative w-full bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold tracking-[0.2em] text-meeru-orange uppercase mb-4"
        >
          THE PRODUCTS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl lg:text-5xl font-light leading-[1.15] text-gray-900 max-w-2xl mb-10"
        >
          Two AI Workbenches. Two finance jobs. One trusted foundation.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative grid grid-cols-1 sm:grid-cols-2 rounded-xl border border-gray-300 bg-white mb-12 overflow-hidden w-full p-1 gap-1"
        >
          <button
            onClick={() => setActiveTab("close")}
            className={`relative py-3.5 px-6 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeTab === "close"
                ? "bg-[#1C0F07] text-white shadow-sm"
                : "text-gray-500 hover:text-gray-700 bg-transparent"
            }`}
          >
            Close AI Workbench
          </button>
          <button
            onClick={() => setActiveTab("performance")}
            className={`relative py-3.5 px-6 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeTab === "performance"
                ? "bg-[#1C0F07] text-white shadow-sm"
                : "text-gray-500 hover:text-gray-700 bg-transparent"
            }`}
          >
            Performance AI Workbench
          </button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-light text-gray-900">
                {activeTab === "close" ? "Close AI Workbench" : "Performance AI Workbench"}
              </h3>
              <p className="text-meeru-orange italic text-sm">
                {activeTab === "close"
                  ? "Close faster. Defend every number."
                  : "Turn signals into action."}
              </p>

              <div>
                <p className="text-sm font-bold text-gray-900 mb-3">
                  Output:{" "}
                  <span className="font-normal">
                    {activeTab === "close" ? "Close Package" : "Performance Package"}
                  </span>
                </p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {activeTab === "close"
                    ? "MeeruAI's Close AI Workbench automates every step of the period-end process — from reconciliation to flux analysis — so your team spends less time chasing the close and more time owning it. Every exception is explained with full source tracing. Every variance is tied to its driver. And when leadership asks, your team already has the answer."
                    : "Turn signals into action. MeeruAI's Performance AI Workbench continuously gathers signals across revenue, margin, and flux then goes further, translating each shift into a clear operational root cause and a defined path forward. Not a report to review. A system that surfaces what matters, explains what's driving it, and equips your team to act before the question is even asked."}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {(activeTab === "close"
                  ? ["Controller", "CAO", "Accounting teams"]
                  : ["CFO", "Head of FP&A", "Finance leaders"]
                ).map((label) => (
                  <span key={label} className="px-3 py-1.5 rounded-full border border-gray-200 text-sm text-gray-700 bg-white">
                    {label}
                  </span>
                ))}
              </div>

              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                {(activeTab === "close"
                  ? [
                      { num: "01", title: "Close Insight", desc: "Every exception explained. Every close period handed off with full context." },
                      { num: "02", title: "Recon Insight", desc: "Every difference source-traced. Patterns surfaced before they become audit findings." },
                      { num: "03", title: "Flux Insight", desc: "Close-side flux explained: what moved, why it moved, what it means for the period." },
                    ]
                  : [
                      { num: "01", title: "Revenue Performance", desc: "Revenue story explained by segment, product, and geography before the board asks." },
                      { num: "02", title: "Margin Performance", desc: "Margin pressure traced to its cost driver flagged early, explained fully." },
                      { num: "03", title: "Flux Performance", desc: "Performance-level flux connected to business context, not just what changed, but why it matters." },
                    ]
                ).map((card) => (
                  <div key={card.num} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <span className="text-meeru-orange text-xs font-bold">{card.num}</span>
                    <h4 className="text-sm font-semibold text-gray-900 mt-2 mb-1">{card.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative"
          >
            <div className="rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden ring-1 ring-black/5">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50/80 backdrop-blur-sm">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-4 text-xs text-gray-400 font-mono">
                  meeru.ai / {activeTab === "close" ? "close-ai-workbench" : "performance-ai-workbench"}
                </span>
              </div>

              <div className="relative w-full bg-[#FAFAFA] p-6 sm:p-8 flex flex-col min-h-[420px] md:min-h-[520px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-4 sm:gap-6 h-full flex-1"
                  >
                    {activeTab === "performance" ? (
                      <>
                        {/* Revenue Chart Card */}
                        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex-1">
                          <div className="flex items-center justify-between mb-6">
                            <span className="text-[11px] font-semibold tracking-[0.15em] text-gray-500 uppercase">
                              REVENUE · PLAN VS ACTUAL
                            </span>
                            <span className="px-3 py-1.5 bg-[#FFF5F0] text-meeru-orange rounded-lg text-[10px] font-bold">
                              Performance AI Workbench
                            </span>
                          </div>

                          <div className="flex items-baseline gap-3 mb-6">
                            <span className="text-[32px] font-light text-gray-900 tracking-tight">$84M</span>
                            <span className="text-sm font-medium text-meeru-orange">+13.5% vs plan</span>
                          </div>

                          {/* SVG Chart */}
                          <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-auto" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="actualGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#FF7448" stopOpacity="0.15" />
                                <stop offset="100%" stopColor="#FF7448" stopOpacity="0" />
                              </linearGradient>
                            </defs>

                            {/* Area fill under actual */}
                            <path d={areaPath} fill="url(#actualGradient)" />

                            {/* Plan line (dashed grey) */}
                            <polyline
                              points={planPoints}
                              fill="none"
                              stroke="#9CA3AF"
                              strokeWidth="1.5"
                              strokeDasharray="4 4"
                            />

                            {/* Actual line (solid orange) */}
                            <polyline
                              points={actualPoints}
                              fill="none"
                              stroke="#FF7448"
                              strokeWidth="2"
                            />

                            {/* Data points on actual line */}
                            {actualData.map((v, i) => (
                              <circle
                                key={`actual-${i}`}
                                cx={xScale(i)}
                                cy={yScale(v)}
                                r="3.5"
                                fill="white"
                                stroke="#FF7448"
                                strokeWidth="2"
                              />
                            ))}
                          </svg>

                          {/* X-axis labels */}
                          <div className="flex justify-between mt-2 px-1">
                            {months.map((m) => (
                              <span key={m} className="text-[10px] text-gray-400 font-medium">{m}</span>
                            ))}
                          </div>

                          {/* Legend */}
                          <div className="flex items-center gap-4 mt-5">
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-[2px] bg-meeru-orange rounded-full" />
                              <span className="text-[11px] text-gray-500 font-medium">Actual</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-[2px] bg-gray-400 rounded-full" style={{ backgroundImage: "repeating-linear-gradient(90deg, #9CA3AF 0, #9CA3AF 3px, transparent 3px, transparent 6px)" }} />
                              <span className="text-[11px] text-gray-500 font-medium">Plan</span>
                            </div>
                          </div>
                        </div>

                        {/* Intelligence Workflow Card */}
                        <div className="rounded-xl border border-orange-100 bg-white p-5 shadow-sm">
                          <div className="flex items-center gap-2 mb-3">
                            <Sparkles className="w-4 h-4 text-meeru-orange" />
                            <span className="text-[11px] font-medium text-meeru-orange tracking-wide">
                              MeeruAI · Intelligence workflow
                            </span>
                          </div>
                          <div key={workflowIndex} className="text-[13px] text-gray-700 leading-relaxed font-medium min-h-[40px]">
                            {currentText.split(" ").map((word, i) => (
                              <motion.span
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.1, delay: i * 0.05 }}
                                className="inline-block mr-1"
                              >
                                {word}
                              </motion.span>
                            ))}
                          </div>
                          <div className="flex gap-1.5 mt-4">
                            {[0, 1, 2].map((i) => (
                              <div
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${
                                  i === workflowIndex ? "bg-meeru-orange" : "bg-gray-200"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Stats Card for Close */}
                        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex-1">
                          <div className="flex items-center justify-between mb-8">
                            <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                              Live Signals
                            </span>
                            <span className="px-3 py-1 bg-[#FFF5F0] text-meeru-orange rounded-full text-[10px] font-bold">
                              Close AI Workbench
                            </span>
                          </div>

                          <div className="space-y-6">
                            {[
                              { label: "Close tasks", value: 92 },
                              { label: "Recon matched", value: 78 },
                              { label: "Flux explained", value: 64 },
                              { label: "Exceptions", value: 22 },
                            ].map((stat, i) => (
                              <div key={stat.label}>
                                <div className="flex justify-between items-end mb-2">
                                  <span className="text-[13px] font-medium text-gray-600">{stat.label}</span>
                                  <span className="text-sm font-bold text-gray-900">{stat.value}%</span>
                                </div>
                                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${stat.value}%` }}
                                    transition={{ duration: 1.2, delay: 0.1 + i * 0.1, ease: "easeOut" }}
                                    className="h-full bg-meeru-orange rounded-full"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Intelligence Workflow Card */}
                        <div className="rounded-xl border border-orange-100 bg-white p-5 shadow-sm">
                          <div className="flex items-center gap-2 mb-3">
                            <Sparkles className="w-4 h-4 text-meeru-orange" />
                            <span className="text-[11px] font-medium text-meeru-orange tracking-wide">
                              MeeruAI · Intelligence workflow
                            </span>
                          </div>
                          <div key={workflowIndex} className="text-[13px] text-gray-700 leading-relaxed font-medium min-h-[40px]">
                            {currentText.split(" ").map((word, i) => (
                              <motion.span
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.1, delay: i * 0.05 }}
                                className="inline-block mr-1"
                              >
                                {word}
                              </motion.span>
                            ))}
                          </div>
                          <div className="flex gap-1.5 mt-4">
                            {[0, 1, 2].map((i) => (
                              <div
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${
                                  i === workflowIndex ? "bg-meeru-orange" : "bg-gray-200"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Finance Command Center Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 lg:mt-12 rounded-2xl bg-white border border-gray-200 p-6 md:p-8 grid md:grid-cols-[300px_1fr] gap-8 md:gap-12 items-center shadow-sm"
        >
          {/* Left */}
          <div className="space-y-3">
            <span className="text-[10px] font-bold tracking-[0.18em] text-gray-400 uppercase">
              SPANNING BOTH
            </span>
            <h3 className="text-lg font-medium text-gray-900">
              Finance command center
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-[#FFF0EA] text-meeru-orange rounded-full text-[11px] font-medium">
                Close AI Workbench
              </span>
              <span className="px-3 py-1.5 bg-[#FFF0EA] text-meeru-orange rounded-full text-[11px] font-medium">
                Performance AI Workbench
              </span>
            </div>
          </div>

          {/* Right */}
          <p className="text-sm text-gray-600 leading-relaxed">
            Ask questions naturally. Get deterministic, source-linked answers. Track priorities, unresolved issues, decisions, approvals, and workflow momentum across the Office of the CFO. The Command Center lets finance teams investigate, draft, route, approve, and act from a single place — while workflows run automatically in the background.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
