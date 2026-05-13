"use client";

import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState<"close" | "performance">("close");
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
    "Revenue variance of $2.1M driven by enterprise cohort expansion. Shall I update the board narrative?",
    "OpEx increased 8% due to accelerated Q3 marketing spend. Want to view the vendor breakdown?",
    "Headcount flux matches the revised hiring plan. Should I generate the final summary?",
  ];

  const activeWorkflows = activeTab === "close" ? closeWorkflows : performanceWorkflows;
  const currentText = activeWorkflows[workflowIndex];

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
          className="grid grid-cols-2 rounded-xl border border-gray-200 bg-white mb-12 relative overflow-hidden max-w-3xl shadow-sm"
        >
          <button
            onClick={() => setActiveTab("close")}
            className={`relative py-3.5 text-sm font-medium transition-colors duration-300 ${
              activeTab === "close" ? "text-white bg-[#4A2616]" : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Close AI Workbench
          </button>
          <button
            onClick={() => setActiveTab("performance")}
            className={`relative py-3.5 text-sm font-medium transition-colors duration-300 border-l border-gray-100 ${
              activeTab === "performance" ? "text-white bg-[#4A2616]" : "text-gray-600 hover:bg-gray-50"
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
              <p className="text-meeru-orange italic">
                {activeTab === "close"
                  ? "Close faster. Defend every number."
                  : "Explain variance. Drive action."}
              </p>

              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">
                  Output:{" "}
                  <span className="font-normal text-gray-600">
                    {activeTab === "close" ? "Close Package" : "Performance Narrative"}
                  </span>
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {activeTab === "close"
                    ? "MeeruAI's Close AI Workbench automates every step of the period-end process from reconciliation to flux analysis so your team spends less time chasing the close and more time owning it. Every exception is explained with full source tracing. Every variance is tied to its driver. And when leadership asks, your team already has the answer because the Close Package documents not just what changed, but exactly why."
                    : "MeeruAI's Performance AI Workbench connects financial results to operational drivers so your team spends less time explaining variance and more time shaping outcomes. Every metric is grounded in source data. Every narrative is tied to evidence. And when leadership asks why performance changed, your team already has the answer because the Performance Narrative documents not just what happened, but exactly what to do about it."}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {activeTab === "close" ? (
                  <>
                    <span className="px-3 py-1.5 rounded-full border border-gray-200 text-sm text-gray-700 bg-white">
                      Controller
                    </span>
                    <span className="px-3 py-1.5 rounded-full border border-gray-200 text-sm text-gray-700 bg-white">
                      CAO
                    </span>
                    <span className="px-3 py-1.5 rounded-full border border-gray-200 text-sm text-gray-700 bg-white">
                      Accounting teams
                    </span>
                  </>
                ) : (
                  <>
                    <span className="px-3 py-1.5 rounded-full border border-gray-200 text-sm text-gray-700 bg-white">
                      FP&A
                    </span>
                    <span className="px-3 py-1.5 rounded-full border border-gray-200 text-sm text-gray-700 bg-white">
                      CFO
                    </span>
                    <span className="px-3 py-1.5 rounded-full border border-gray-200 text-sm text-gray-700 bg-white">
                      Strategy teams
                    </span>
                  </>
                )}
              </div>

              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                {activeTab === "close" ? (
                  <>
                    <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                      <span className="text-meeru-orange text-xs font-bold">01</span>
                      <h4 className="text-sm font-semibold text-gray-900 mt-2 mb-1">Close Insight</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Every exception explained. Every close period handed off with full context.
                      </p>
                    </div>
                    <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                      <span className="text-meeru-orange text-xs font-bold">02</span>
                      <h4 className="text-sm font-semibold text-gray-900 mt-2 mb-1">Recon Insight</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Every difference source-traced. Patterns surfaced before they become audit findings.
                      </p>
                    </div>
                    <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                      <span className="text-meeru-orange text-xs font-bold">03</span>
                      <h4 className="text-sm font-semibold text-gray-900 mt-2 mb-1">Flux Insight</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Close-side flux explained: What moved, why it moved, and what it means for the period.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                      <span className="text-meeru-orange text-xs font-bold">01</span>
                      <h4 className="text-sm font-semibold text-gray-900 mt-2 mb-1">Variance Insight</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Every variance explained with driver tracing and operational context.
                      </p>
                    </div>
                    <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                      <span className="text-meeru-orange text-xs font-bold">02</span>
                      <h4 className="text-sm font-semibold text-gray-900 mt-2 mb-1">Narrative Insight</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Auto-generated performance narratives with source-traced evidence.
                      </p>
                    </div>
                    <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                      <span className="text-meeru-orange text-xs font-bold">03</span>
                      <h4 className="text-sm font-semibold text-gray-900 mt-2 mb-1">Action Insight</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Recommendations grounded in financial and operational data.
                      </p>
                    </div>
                  </>
                )}
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

              <div className="relative w-full bg-[#FAFAFA] p-6 sm:p-8 flex flex-col min-h-[480px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-4 sm:gap-6 h-full flex-1"
                  >
                    {/* Stats Card */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex-1">
                      <div className="flex items-center justify-between mb-8">
                        <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                          Live Signals
                        </span>
                        <span className="px-3 py-1 bg-[#FFF5F0] text-meeru-orange rounded-full text-[10px] font-bold">
                          {activeTab === "close" ? "Close AI Workbench" : "Performance AI Workbench"}
                        </span>
                      </div>

                      <div className="space-y-6">
                        {(activeTab === "close"
                          ? [
                              { label: "Close tasks", value: 92 },
                              { label: "Recon matched", value: 78 },
                              { label: "Flux explained", value: 64 },
                              { label: "Exceptions", value: 22 },
                            ]
                          : [
                              { label: "Revenue variance", value: 85 },
                              { label: "OpEx drivers", value: 72 },
                              { label: "Headcount flux", value: 94 },
                              { label: "Anomalies", value: 18 },
                            ]
                        ).map((stat, i) => (
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
          className="mt-8 lg:mt-12 rounded-xl bg-[#F8F8F8] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-gray-100"
        >
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase">
                SPANNING BOTH
              </span>
              <h3 className="text-xl font-medium text-gray-900 mt-1">
                Finance command center
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <span className="px-3 py-1.5 bg-[#FFF5F0] text-meeru-orange rounded-md text-[11px] font-semibold tracking-wide">
                Close AI Workbench
              </span>
              <span className="px-3 py-1.5 bg-[#FFF5F0] text-meeru-orange rounded-md text-[11px] font-semibold tracking-wide">
                Performance AI Workbench
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed max-w-xs md:max-w-sm md:text-left">
            One unified view of your finance operations across both workbenches.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
