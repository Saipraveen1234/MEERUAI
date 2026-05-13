"use client";

import { motion } from "framer-motion";
import { Users, Target } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const cards = [
  {
    icon: Users,
    title: "AI Built for Me and You",
    body: `"Meeru" means "you". Our belief is simple: that AI should work with people, not replace them. Agents propose, you decide. We design for collaboration across finance, accounting, and operations so teams can move faster with confidence.`,
  },
  {
    icon: Target,
    title: "Why It Matters",
    body: "Finance is being asked to do more with less while maintaining control. Meeru AI helps teams close faster, focus on more strategic work, and trust every number across the finance stack.",
  },
];

export default function AboutMissionSection() {
  return (
    <section className="w-full bg-[#F5F5F5] py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.15 }}
          className="space-y-10"
        >
          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-light text-gray-900 text-center"
          >
            About MeeruAI
          </motion.h2>

          {/* Body paragraph */}
          <motion.p
            variants={fadeUp}
            className="text-base lg:text-[17px] text-gray-600 leading-relaxed"
          >
            MeeruAI is an enterprise-grade, agentic finance orchestration solution for the CFO organization. We unify ERPs, apps, and data so agentic automation helps accelerate the close and explains variances. Built-in controls ensure role-based access, guardrails, and auditability. And because agents work alongside your team as assistants, co-workers, and advisors, you stay firmly in control. At the same time, AI accelerates the close, automates your unique workflows, and surfaces insights you can trust.
          </motion.p>

          {/* Cards */}
          <motion.div
            variants={fadeUp}
            className="grid md:grid-cols-2 gap-6 pt-4"
          >
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <card.icon className="w-6 h-6 text-meeru-orange" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {card.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
