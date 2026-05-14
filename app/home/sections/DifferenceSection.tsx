"use client";

import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const allLedgerItems = [
  { id: '4000', label: 'GL · 4000', title: 'Revenue', value: '$12.84M', delta: '+8.2%' },
  { id: '5200', label: 'GL · 5200', title: 'COGS', value: '$4.21M', delta: '+2.1%' },
  { id: '6100', label: 'GL · 6100', title: 'Sales & Marketing', value: '$2.96M', delta: '-4.7%' },
  { id: '7300', label: 'GL · 7300', title: 'Variance · OpEx', value: '$184K', delta: 'Δ vs plan' },
  { id: 'close', label: 'CLOSE · D+4', title: 'Status', value: 'Locked', delta: '5 days early' }
];

const interpretations = [
  {
    title: 'Revenue beat plan by $980K',
    text: 'Enterprise renewals closed two weeks early. North America drove 64% of the upside — flag for the board narrative.',
    footer: 'CITED FROM GL · 4000'
  },
  {
    title: 'Margin held at 67.2%',
    text: 'Cloud spend ticked up with new design partners, but unit economics improved. No action required this cycle.',
    footer: 'CITED FROM GL · 5200'
  },
  {
    title: 'S&M efficiency up 11 pts',
    text: 'CAC payback compressed to 9.3 months. Reallocate $180K from paid social into the field motion next quarter.',
    footer: 'CITED FROM GL · 6100'
  },
  {
    title: 'Single driver: contractor over-run',
    text: '94% of the OpEx variance traces to one vendor in EMEA. Cited, audit-ready — drafted for your CFO commentary.',
    footer: 'CITED FROM GL · 7300'
  },
  {
    title: 'Books closed on day 4',
    text: 'Agents reconciled 1,284 journal entries overnight. Your team reviewed 37 exceptions instead of 1,284.',
    footer: 'CITED FROM CLOSE · D+4'
  }
];

export default function DifferenceSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % 5);
  const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + 5) % 5);

  const visibleLedgerItems = allLedgerItems.slice(0, currentSlide + 1);
  const currentInterpretation = interpretations[currentSlide];
  const slideCounter = `0${currentSlide + 1} / 05`;

  return (
    <section className="relative w-full bg-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs font-semibold tracking-[0.2em] text-meeru-orange uppercase mb-4"
        >
          THE DIFFERENCE
        </motion.p>
        <div className="relative mb-10 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[34px] lg:text-5xl font-light leading-[1.15] text-gray-900 max-w-4xl"
          >
            Watch the Numbers Land and Discover What they Mean for Your Team.
          </motion.h2>
          {/* Mobile nav arrows - floating bottom right */}
          <div className="absolute bottom-1 right-0 flex gap-2 lg:hidden">
            <button 
              onClick={handlePrev}
              className="w-[34px] h-[34px] rounded-full border border-meeru-orange/30 bg-white text-meeru-orange flex items-center justify-center hover:bg-meeru-orange hover:text-white transition-colors"
              style={{ boxShadow: '0 0 16px rgba(248, 110, 66, 0.3)' }}
            >
              <ChevronUp className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNext}
              className="w-[34px] h-[34px] rounded-full border border-meeru-orange/30 bg-white text-meeru-orange flex items-center justify-center hover:bg-meeru-orange hover:text-white transition-colors"
              style={{ boxShadow: '0 0 16px rgba(248, 110, 66, 0.3)' }}
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Ledger */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-gray-200 bg-white overflow-hidden flex flex-col shadow-sm min-h-[380px]"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-meeru-orange" />
                <span className="text-[10px] font-bold tracking-[0.15em] text-gray-500 uppercase">
                  LIVE LEDGER · Q3 CLOSE
                </span>
              </div>
              <span className="text-xs text-gray-400 font-medium transition-all">{slideCounter}</span>
            </div>

            <div className="divide-y-2 divide-gray-100 flex-1">
              <AnimatePresence initial={false}>
                {visibleLedgerItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-between px-6 py-4 overflow-hidden bg-white"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[11px] text-gray-400 font-mono w-24 shrink-0 uppercase">{item.label}</span>
                      <span className="text-[13px] text-gray-700 font-medium">{item.title}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[13px] font-bold text-gray-900">{item.value}</span>
                      <span className="text-[11px] font-bold text-meeru-orange">{item.delta}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Column - Interpretation */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col pt-2"
          >
            <div className="flex items-center justify-between mb-10">
              <span className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase">
                MEERUAI · INTERPRETATION
              </span>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-400 font-medium tabular-nums transition-all">{slideCounter}</span>
                <div className="flex gap-2">
                  <button 
                    onClick={handlePrev}
                    className="w-9 h-9 rounded-full border border-orange-200 bg-white text-meeru-orange flex items-center justify-center hover:bg-meeru-orange hover:text-white transition-colors"
                    style={{ boxShadow: '0 0 16px rgba(248, 110, 66, 0.55)' }}
                  >
                    <ChevronUp className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="w-9 h-9 rounded-full border border-orange-200 bg-white text-meeru-orange flex items-center justify-center hover:bg-meeru-orange hover:text-white transition-colors"
                    style={{ boxShadow: '0 0 16px rgba(248, 110, 66, 0.55)' }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="relative min-h-[220px]">
              <AnimatePresence>
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute inset-0"
                >
                  <h3 className="text-[32px] lg:text-4xl font-light text-gray-900 mb-6 leading-tight">
                    {currentInterpretation.title}
                  </h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed mb-8">
                    {currentInterpretation.text}
                  </p>
                  <p className="text-[10px] font-bold tracking-[0.15em] text-meeru-orange uppercase flex items-center gap-3">
                    <span className="w-10 h-[1px] bg-meeru-orange/40"></span>
                    {currentInterpretation.footer}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Mobile layout - unified stacked cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:hidden rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm"
        >
          {/* Header bar */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-white">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-meeru-orange" />
              <span className="text-[10px] font-bold tracking-[0.15em] text-gray-500 uppercase">
                LIVE LEDGER · Q3 CLOSE
              </span>
            </div>
            <span className="text-xs text-gray-400 font-medium transition-all">{slideCounter}</span>
          </div>

          {/* Stacked unified cards — fixed height to prevent layout jump */}
          <div className="pb-2">
            {allLedgerItems.map((item, index) => {
              const interp = interpretations[index];
              const isVisible = index <= currentSlide;
              return (
                <motion.div
                  key={item.id}
                  initial={false}
                  animate={{ opacity: isVisible ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className={`px-5 py-6 bg-white overflow-hidden transition-colors duration-500 ${!isVisible ? 'pointer-events-none' : ''} ${index > 0 ? (isVisible ? 'border-t border-gray-100' : 'border-t border-transparent') : ''}`}
                >
                    {/* Ledger row */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-4 min-w-0">
                        <span className="text-[11px] text-gray-400 font-medium tracking-wide shrink-0 uppercase">{item.label}</span>
                        <span className="text-[14px] text-gray-600 font-normal truncate">{item.title}</span>
                      </div>
                      <div className="flex items-center gap-3 shrink-0 ml-3">
                        <span className="text-[14px] font-bold text-gray-900">{item.value}</span>
                        <span className="text-[11px] font-bold text-meeru-orange">{item.delta}</span>
                      </div>
                    </div>

                    {/* Interpretation */}
                    <h3 className="text-[22px] font-normal text-gray-900 mb-3 leading-[1.3]">
                      {interp.title}
                    </h3>
                    <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
                      {interp.text}
                    </p>
                    <p className="text-[10px] font-bold tracking-[0.15em] text-meeru-orange uppercase flex items-center gap-3">
                      <span className="w-10 h-[1px] bg-meeru-orange/40"></span>
                      {interp.footer}
                    </p>
                  </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
