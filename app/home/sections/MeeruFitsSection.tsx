"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const QUOTE_TEXT = "ERP records. BI reports. MeeruAI gets the work done.";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: -32,
    scale: 0.96,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  },
};

export default function MeeruFitsSection() {
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.3 });

  // Intersection Observer to trigger typing when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Typing effect
  useEffect(() => {
    if (!isInView) return;

    let index = 0;
    const timer = setInterval(() => {
      if (index <= QUOTE_TEXT.length) {
        setTypedText(QUOTE_TEXT.substring(0, index));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(timer);
      }
    }, 45);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section ref={sectionRef} className="relative w-full bg-white py-20 lg:py-32 overflow-hidden">
      {/* Background M Logo with Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[800px] pointer-events-none z-0">
        {/* Soft radial glow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FF7448]/15 blur-[100px] rounded-full" />
        {/* M logo positioned top right */}
        <img 
          src="/meeru-m-coral.png"
          alt="" 
          className="absolute right-[-5%] top-0 h-[40%] w-auto object-contain opacity-40"
          style={{
            transform: "translateX(-20%)",
            maskImage: "linear-gradient(to right, transparent 0%, black 60%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 60%)"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <p className="text-xs font-semibold tracking-[0.2em] text-meeru-orange uppercase mb-4">
          WHERE MEERUAI FITS
        </p>
        <h2 className="text-4xl lg:text-[3rem] font-light leading-[1.15] text-gray-900 max-w-3xl mb-12">
          The AI Workbench Layer Your Finance Stack Is Missing
        </h2>

        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-24 items-start">
          {/* Left Column */}
          <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed max-w-xl">
            <p>
              ERP systems record what happened. BI tools report what changed. Close tools track
              what still needs to be done.
            </p>
            <p>
              MeeruAI helps finance complete the work across systems. It connects to your existing
              stack, grounds every answer in your company context, and moves finance work from
              signal to explanation to reviewed action.
            </p>

            <div ref={cardsRef} className="space-y-3 mt-12">
              {/* MeeruAI Card — data-reveal="2" (animates last) */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate={cardsInView ? "visible" : "hidden"}
                transition={{ duration: 0.7, delay: 0.3 + 2 * 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-xl border border-orange-200 bg-[#FFF5F2] p-5 relative"
              >
                {/* Glow shadow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-radial from-[#FF7448]/10 to-transparent opacity-0 data-[visible=true]:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div>
                    <img src="/meeruai-logo.png" alt="MeeruAI" className="h-[22px] w-auto object-contain mb-3" />
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-meeru-orange mt-1.5 shrink-0" />
                      <p className="text-[11px] text-gray-600 leading-relaxed max-w-full md:max-w-[220px]">
                        System of action: What needs to happen next, and how work gets done.
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[9px] font-medium text-meeru-orange border border-orange-200 bg-transparent tracking-widest uppercase mt-1">
                    Understand + Resolve + Complete
                  </span>
                </div>
              </motion.div>

              {/* BI Tools Card — data-reveal="1" (animates second) */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate={cardsInView ? "visible" : "hidden"}
                transition={{ duration: 0.7, delay: 0.3 + 1 * 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-xl border border-gray-100 bg-gray-50/80 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-[14px] font-semibold text-gray-800 mb-2">BI tools</h4>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" />
                      <p className="text-[11px] text-gray-500 leading-relaxed">
                        System of reporting: What is happening
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[9px] font-medium text-gray-500 border border-gray-200 bg-transparent tracking-widest uppercase mt-1">
                    Report only
                  </span>
                </div>
              </motion.div>

              {/* ERP Systems Card — data-reveal="0" (animates first) */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate={cardsInView ? "visible" : "hidden"}
                transition={{ duration: 0.7, delay: 0.3 + 0 * 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-xl border border-gray-100 bg-gray-50/80 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-[14px] font-semibold text-gray-800 mb-2">ERP systems</h4>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" />
                      <p className="text-[11px] text-gray-500 leading-relaxed">
                        System of record: What happened
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[9px] font-medium text-gray-500 border border-gray-200 bg-transparent tracking-widest uppercase mt-1">
                    Record only
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column (Quote Card) */}
          <div className="lg:w-[460px] lg:mt-8">
            <div className="rounded-[1.5rem] border border-[#FF7448]/20 bg-white/90 backdrop-blur-sm p-6 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="text-[1.65rem] font-normal text-gray-900 leading-[1.3] tracking-tight mb-6 min-h-[3.5rem]">
                <span className="text-gray-900">"{typedText}</span>
                {!isTypingComplete && (
                  <span className="inline-block w-[2px] h-[1.2em] bg-meeru-orange ml-[1px] align-middle animate-pulse" />
                )}
                <span className="text-gray-900">"</span>
              </h3>
              <p className="text-[13px] leading-relaxed text-gray-600">
                For the first time, finance has a system that goes beyond visibility. It
                identifies what changed, resolves what matters most, and helps teams move from
                signal to decision and action with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
