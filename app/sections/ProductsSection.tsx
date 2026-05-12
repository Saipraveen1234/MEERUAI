"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState<"close" | "performance">("close");

  return (
    <section className="relative w-full bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-meeru-orange uppercase mb-4">
          THE PRODUCTS
        </p>
        <h2 className="text-4xl lg:text-5xl font-light leading-[1.15] text-gray-900 max-w-2xl mb-10">
          Two AI Workbenches. Two finance jobs. One trusted foundation.
        </h2>

        <div className="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-1 mb-12">
          <button
            onClick={() => setActiveTab("close")}
            className={`px-8 py-2.5 rounded-md text-sm font-medium transition-all ${
              activeTab === "close"
                ? "bg-meeru-brown text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Close AI Workbench
          </button>
          <button
            onClick={() => setActiveTab("performance")}
            className={`px-8 py-2.5 rounded-md text-sm font-medium transition-all ${
              activeTab === "performance"
                ? "bg-meeru-brown text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Performance AI Workbenchh
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-6">
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
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-4 text-xs text-gray-400">
                  meeru.ai / {activeTab === "close" ? "close-ai-workbench" : "performance-ai-workbench"}
                </span>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase">
                    LIVE SIGNALS
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-meeru-orange-light text-meeru-orange border border-orange-200">
                    {activeTab === "close" ? "Close AI Workbench" : "Performance AI Workbench"}
                  </span>
                </div>

                <div className="space-y-4">
                  {activeTab === "close" ? (
                    <>
                      <SignalBar label="Close tasks" value={92} />
                      <SignalBar label="Recon matched" value={78} />
                      <SignalBar label="Flux explained" value={64} />
                      <SignalBar label="Exceptions" value={22} />
                    </>
                  ) : (
                    <>
                      <SignalBar label="Variance explained" value={88} />
                      <SignalBar label="Drivers mapped" value={74} />
                      <SignalBar label="Narrative drafted" value={61} />
                      <SignalBar label="Actions pending" value={18} />
                    </>
                  )}
                </div>

                <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-meeru-orange" />
                    <span className="text-xs font-medium text-meeru-orange">
                      MeeruAI · Intelligence workflow
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {activeTab === "close"
                      ? "Accrual flux of $1.4M traced to delayed vendor invoices. Want me to draft the journal?"
                      : "Revenue variance of $2.1M driven by enterprise cohort expansion. Shall I update the board narrative?"}
                  </p>
                  <div className="flex gap-1.5 mt-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                    <div className="w-1.5 h-1.5 rounded-full bg-meeru-orange" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SignalBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-gray-700">{label}</span>
        <span className="text-sm font-semibold text-gray-900">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
        <div
          className="h-full rounded-full bg-meeru-orange transition-all duration-700"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
