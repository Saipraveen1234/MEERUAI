"use client";

import { ArrowRight, Sparkles, Radio, CheckSquare } from "lucide-react";

const StarburstIcon = () => (
  <svg className="w-28 h-28 text-gray-800" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
    {[...Array(16)].map((_, i) => {
      const angle = (i * Math.PI) / 8;
      const isLong = i % 2 === 0;
      const innerRadius = 2;
      const outerRadius = isLong ? 20 : 14;
      const x1 = 24 + innerRadius * Math.cos(angle);
      const y1 = 24 + innerRadius * Math.sin(angle);
      const x2 = 24 + outerRadius * Math.cos(angle);
      const y2 = 24 + outerRadius * Math.sin(angle);
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
    })}
  </svg>
);

const RadioIcon = () => (
  <svg className="w-28 h-28 text-gray-800" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
    <circle cx="24" cy="42" r="1.5" />
    <circle cx="24" cy="34" r="3.5" />
    <circle cx="24" cy="22" r="5.5" />
    <path d="M16 11 Q 24 3 32 11" />
    <path d="M12 5 Q 24 -5 36 5" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-28 h-28 text-gray-800" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
    <rect x="12" y="10" width="22" height="28" rx="2" />
    <path d="M18 24 L22 28 L30 18" />
    <circle cx="38" cy="36" r="3.5" fill="currentColor" stroke="none" />
  </svg>
);

export default function CapabilitiesSection() {
  const capabilities = [
    {
      num: "01",
      title: "Understand",
      desc: "Know what changed and why",
      icon: <StarburstIcon />,
      hoverText: "Surface every shift across close, variance, and performance with the driver, the source, and the context behind it.",
      pills: ["Variance detection", "Root cause", "Source-linked"],
    },
    {
      num: "02",
      title: "Resolve",
      desc: "Move issues forward with evidence and routing",
      icon: <RadioIcon />,
      hoverText: "Trace exceptions to their source, draft explanations, route to the right owner, and keep momentum without manual chasing.",
      pills: ["Evidence trail", "Smart routing", "Decision prompts"],
    },
    {
      num: "03",
      title: "Complete",
      desc: "Act with confidence",
      icon: <CheckIcon />,
      hoverText: "Finish with reviewed, audit-ready work products with approvals, evidence, and next actions built into every workflow.",
      pills: ["Reviewed work", "Approvals", "Audit-ready"],
    },
  ];

  return (
    <section className="relative w-full py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className="rounded-[2.5rem] p-6 md:p-10 lg:p-16 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #d4d4d4 0%, #e8ddd4 40%, #f5d4c0 70%, #f0c4a8 100%)",
          }}
        >
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-5">
              Understand. Resolve. Complete.
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Three capabilities that help finance move from signal to completed action. Finish with
              confidence. Reviewed, audit-ready work products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.num}
                className="group relative bg-white/60 hover:bg-white/80 backdrop-blur-sm transition-colors duration-300 rounded-2xl p-8 flex flex-col min-h-[300px] md:min-h-[420px] overflow-hidden"
              >
                {/* Static top */}
                <span className="text-meeru-orange text-sm font-medium mb-3">{cap.num}</span>
                <h3 className="text-2xl font-medium text-gray-900 mb-2">{cap.title}</h3>
                <p className="text-meeru-orange text-sm leading-relaxed mb-4">{cap.desc}</p>

                {/* Hover text + pills — visible by default on mobile, hover reveal on desktop */}
                <div className="opacity-100 md:opacity-0 md:translate-y-3 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 delay-150 ease-in-out flex flex-col gap-4">
                  <p className="text-gray-800 text-[13px] leading-relaxed">
                    {cap.hoverText}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cap.pills.map((pill) => (
                      <span
                        key={pill}
                        className="px-3 py-1 rounded-full border border-gray-300 text-gray-600 text-[11px] tracking-wide font-medium bg-white/50"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* SVG + Explore — slides right and fades out on hover (desktop only) */}
                <div className="mt-auto flex items-end justify-between transition-all duration-500 ease-in-out md:group-hover:translate-x-[130%] md:group-hover:opacity-0">
                  <span
                    className="inline-flex items-center gap-2 text-meeru-orange text-sm font-medium cursor-default"
                  >
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                  <div>{cap.icon}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
