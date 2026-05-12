"use client";

import { ChevronUp, ChevronDown } from "lucide-react";

export default function DifferenceSection() {
  return (
    <section className="relative w-full bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-meeru-orange uppercase mb-4">
          THE DIFFERENCE
        </p>
        <h2 className="text-4xl lg:text-5xl font-light leading-[1.15] text-gray-900 max-w-2xl mb-16">
          Watch the Numbers Land and Discover What they Mean for Your Team.
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-meeru-orange" />
                <span className="text-[10px] font-bold tracking-[0.15em] text-gray-500 uppercase">
                  LIVE LEDGER · Q3 CLOSE
                </span>
              </div>
              <span className="text-xs text-gray-400">02 / 05</span>
            </div>

            <div className="divide-y divide-gray-50">
              <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-4">
                  <span className="text-xs text-gray-400 font-mono">GL · 4000</span>
                  <span className="text-sm text-gray-700">Revenue</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-900">$12.84M</span>
                  <span className="text-xs font-medium text-meeru-orange">+8.2%</span>
                </div>
              </div>
              <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-4">
                  <span className="text-xs text-gray-400 font-mono">GL · 5200</span>
                  <span className="text-sm text-gray-700">COGS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-900">$4.21M</span>
                  <span className="text-xs font-medium text-meeru-orange">+2.1%</span>
                </div>
              </div>
              <div className="px-6 py-16" />
              <div className="px-6 py-16" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase">
                MEERUAI · INTERPRETATION
              </span>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400">02 / 05</span>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-meeru-orange hover:text-meeru-orange transition-colors">
                    <ChevronUp className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-meeru-orange hover:text-meeru-orange transition-colors">
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
              Margin held at 67.2%
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Cloud spend ticked up with new design partners, but unit economics improved. No action
              required this cycle.
            </p>
            <p className="text-[10px] font-bold tracking-[0.15em] text-meeru-orange uppercase">
              —— CITED FROM GL · 5200
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
