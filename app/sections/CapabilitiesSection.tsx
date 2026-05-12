"use client";

import { ArrowRight, Sparkles, Radio, CheckSquare } from "lucide-react";

export default function CapabilitiesSection() {
  const capabilities = [
    {
      num: "01",
      title: "Understand",
      desc: "Know what changed and why",
      icon: (
        <Sparkles className="w-12 h-12 text-gray-800" strokeWidth={1} />
      ),
    },
    {
      num: "02",
      title: "Resolve",
      desc: "Move issues forward with evidence and routing",
      icon: (
        <Radio className="w-12 h-12 text-gray-800" strokeWidth={1} />
      ),
    },
    {
      num: "03",
      title: "Complete",
      desc: "Act with confidence",
      icon: (
        <CheckSquare className="w-12 h-12 text-gray-800" strokeWidth={1} />
      ),
    },
  ];

  return (
    <section className="relative w-full py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className="rounded-[2.5rem] p-10 lg:p-16 relative overflow-hidden"
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
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 flex flex-col min-h-[320px]"
              >
                <span className="text-meeru-orange text-sm font-medium mb-3">{cap.num}</span>
                <h3 className="text-2xl font-medium text-gray-900 mb-2">{cap.title}</h3>
                <p className="text-meeru-orange text-sm leading-relaxed">{cap.desc}</p>

                <div className="mt-auto pt-10 flex items-end justify-between">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-meeru-orange text-sm font-medium hover:gap-3 transition-all"
                  >
                    Explore <ArrowRight className="w-4 h-4" />
                  </a>
                  <div className="opacity-80">{cap.icon}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
