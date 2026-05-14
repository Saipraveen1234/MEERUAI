"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, BarChart2, Settings2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const signals = [
  {
    number: "01",
    tag: "SIGNAL 01",
    title: "Financial Context",
    body: "We understand what data means inside a finance organization. From variance and causality to the business rhythm, we understand, the signal behind the numbers.",
    pills: ["Root cause", "Variance logic"],
    mockupTitle: "Context Engine",
    mockupIcon: TrendingUp,
    mockupChips: ["ERP data", "GL feeds", "Market signals"],
    reverse: false,
  },
  {
    number: "02",
    tag: "SIGNAL 02",
    title: "Structured Decisioning",
    body: "AI that is deterministic, traceable, and audit-ready. Programmatic reasoning built for high-stakes workflows where errors have consequences.",
    pills: ["muAoPS™", "Full traceability"],
    mockupTitle: "Intelligence Layer",
    mockupIcon: BarChart2,
    mockupChips: ["muAoPS™", "Deterministic", "Audit-ready"],
    reverse: true,
  },
  {
    number: "03",
    tag: "SIGNAL 03",
    title: "Execution Workflows",
    body: "Decisions don't stop at insight. MeeruAI converts understanding into durable, repeatable workflows so finance teams buy outcomes, not prompts.",
    pills: ["Workflow-led", "Action-ready"],
    mockupTitle: "Workflow Engine",
    mockupIcon: Settings2,
    mockupChips: ["Automate", "Schedule", "Execute"],
    reverse: false,
  },
];

const stats = [
  { value: 89, suffix: "%", label: "of finance leaders expected to be strategic advisors" },
  { value: 79, suffix: "%", label: "swamped with manual work" },
  { value: 70, suffix: "%", label: "say current tech hinders them" },
];

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const duration = 1400;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function MockupCard({
  title,
  Icon,
  chips,
}: {
  title: string;
  Icon: React.ElementType;
  chips: string[];
}) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 12px 32px rgba(232,104,58,0.15)" }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="bg-[#FEF0E8] border border-[#F0C4A8] rounded-2xl p-5 max-w-[340px] w-full cursor-pointer"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-lg bg-[#F5D5C0] flex items-center justify-center flex-shrink-0">
          <Icon className="w-4 h-4 text-meeru-orange" strokeWidth={1.5} />
        </div>
        <span className="text-xs font-mono font-semibold text-meeru-orange tracking-wide">
          {title}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {chips.map((chip) => (
          <span
            key={chip}
            className="px-3 py-1.5 rounded-lg bg-white/70 border border-[#E8C4A8]/60 text-gray-600 text-[11px] font-medium"
          >
            {chip}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function SignalDot() {
  return (
    <div className="flex-shrink-0 relative flex items-center justify-center w-10 h-10">
      {/* outermost pulse ring */}
      <motion.div
        animate={{ scale: [1, 1.8], opacity: [0.35, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
        className="absolute w-7 h-7 rounded-full border border-meeru-orange"
      />
      {/* middle pulse ring */}
      <motion.div
        animate={{ scale: [1, 1.45], opacity: [0.5, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: 0.3 }}
        className="absolute w-5 h-5 rounded-full border border-meeru-orange"
      />
      {/* static outer ring */}
      <div className="absolute w-6 h-6 rounded-full border-2 border-meeru-orange/35" />
      {/* inner solid */}
      <div className="w-3 h-3 rounded-full bg-meeru-orange relative z-10" />
    </div>
  );
}

export default function AboutWorkbenchesSection() {
  return (
    <section className="relative w-full bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.12 }}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4"
          >
            WHO WE ARE
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-semibold text-gray-900 leading-[1.2] mb-4"
          >
            AI Workbenches
            <br />
            <span className="text-meeru-orange font-bold">for Finance</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-sm lg:text-[15px] text-gray-500 leading-relaxed"
          >
            Not consulting. Not a BI tool. Not generic AI.
            <br />
            A system purpose-built to understand, resolve, and take action.
          </motion.p>
        </motion.div>

        {/* Signal rows */}
        <div className="relative space-y-0">
          {/* Vertical center line */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-meeru-orange/20 hidden lg:block" />

          {signals.map((signal) => {
            const Icon = signal.mockupIcon;
            return (
              <motion.div
                key={signal.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className="relative py-12"
              >
                {/* Background number - hidden on mobile */}
                <div
                  className={`hidden md:block absolute top-1/2 -translate-y-1/2 text-[180px] lg:text-[220px] font-black leading-none select-none pointer-events-none text-meeru-orange/[0.06] ${
                    signal.reverse ? "right-[-2rem]" : "left-[-2rem]"
                  }`}
                >
                  {signal.number}
                </div>

                {/* Row content */}
                <div
                  className={`relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                    signal.reverse ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* Text half */}
                  <div
                    className={`flex-1 flex w-full md:w-auto ${
                      signal.reverse ? "justify-start md:pl-12 lg:pl-16" : "justify-end md:pr-12 lg:pr-16"
                    }`}
                  >
                    <div className={`max-w-full md:max-w-[300px] text-left ${signal.reverse ? "md:text-left" : "md:text-right"}`}>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase text-meeru-orange mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-meeru-orange" />
                        {signal.tag}
                      </span>
                      <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3 leading-snug">
                        {signal.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-4">
                        {signal.body}
                      </p>
                      <div className={`flex flex-wrap gap-2 justify-start ${signal.reverse ? "md:justify-start" : "md:justify-end"}`}>
                        {signal.pills.map((pill) => (
                          <span
                            key={pill}
                            className="px-3 py-1 rounded-full bg-[#FEF0E8] text-meeru-orange text-[11px] font-medium border border-meeru-orange/20"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center dot on the line - hidden on mobile */}
                  <div className="hidden md:block">
                    <SignalDot />
                  </div>

                  {/* Card half */}
                  <div
                    className={`flex-1 flex w-full md:w-auto justify-center md:justify-start ${
                      signal.reverse ? "md:justify-end md:pr-12 lg:pr-16" : "md:justify-start md:pl-12 lg:pl-16"
                    }`}
                  >
                    <MockupCard title={signal.mockupTitle} Icon={Icon} chips={signal.mockupChips} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* The Decision dark card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-10 mx-auto max-w-5xl bg-[#1a1614] rounded-3xl p-8 md:p-14 text-center"
        >
          {/* Icon */}
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 rounded-[20px] bg-[#f86e4226] flex items-center justify-center">
              <div className="w-9 h-9 rounded-full bg-meeru-orange/20 border-2 border-meeru-orange flex items-center justify-center">
                <svg className="w-4 h-4 text-meeru-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
            </div>
          </div>

          {/* OUTPUT badge */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#e0785626] text-meeru-orange text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
            OUTPUT
          </span>

          <h3 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
            Decide and Act
          </h3>
          <p className="text-[15px] text-gray-400 leading-relaxed mb-8 max-w-md mx-auto">
            Context + reasoning + execution, compiled into one.
            <br />
            Not a report you interpret — a decision explained, sourced, and ready to act on.
          </p>

          {/* Action pills */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            {["Explain", "Forecast", "Act"].map((label) => (
              <span
                key={label}
                className="px-3 sm:px-5 py-2 rounded-full border border-meeru-orange/30 text-meeru-orange text-xs sm:text-sm font-medium bg-[#1e0f05] whitespace-nowrap"
              >
                {label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.value}
              variants={fadeUp}
              className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm"
            >
              <p className="text-3xl lg:text-4xl font-bold text-meeru-orange mb-2">
                <CountUp target={s.value} suffix={s.suffix} />
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
