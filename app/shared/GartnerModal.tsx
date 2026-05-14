"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Copy, Check, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GartnerModal({ isOpen, onClose }: GartnerModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleCopy = () => {
    navigator.clipboard.writeText("FES26EDC");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal — full-screen on mobile, centered wide card on desktop */}
          <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center sm:p-6">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-white w-full sm:max-w-2xl rounded-t-2xl sm:rounded-2xl shadow-2xl max-h-[92vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="px-6 pt-6 pb-5 border-b border-gray-100">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold tracking-[0.18em] text-meeru-orange uppercase mb-2">
                      Gartner Finance Symposium/XPO™ 2026
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
                      Meet MeeruAI at{" "}
                      <span className="text-meeru-orange">Booth #721.</span>
                    </h2>
                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                      Live demos, peer-level conversations, and an exclusive attendee discount. Come see how finance teams close faster, explain every variance, and act with confidence.
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors shrink-0 mt-0.5"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="px-6 py-5 space-y-4">
                {/* Info grid — 2-col on mobile, 4-col on sm+ */}
                <div className="grid grid-cols-2 sm:grid-cols-4 border border-gray-200 rounded-xl overflow-hidden">
                  {[
                    { label: "DATES", value: "May 27–29" },
                    { label: "LOCATION", value: "National Harbor, MD" },
                    { label: "BOOTH", value: "#721", highlight: true },
                    { label: "YEAR", value: "2026" },
                  ].map((item, i) => (
                    <div
                      key={item.label}
                      className={`px-4 py-3 ${
                        i % 2 === 0 ? "border-r border-gray-200" : ""
                      } sm:border-r sm:last:border-r-0 border-b sm:border-b-0 border-gray-200 last:border-b-0 [&:nth-child(3)]:border-b-0`}
                    >
                      <p className="text-[9px] font-bold tracking-[0.12em] text-gray-400 uppercase mb-1">
                        {item.label}
                      </p>
                      <p className={`text-sm font-semibold ${item.highlight ? "text-meeru-orange" : "text-gray-800"}`}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Discount code */}
                <div className="bg-gray-900 rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0 sm:justify-between">
                  <div>
                    <p className="text-[9px] font-bold tracking-[0.15em] text-gray-400 uppercase mb-1">
                      Attendee Discount Code
                    </p>
                    <p className="text-3xl font-bold text-white tracking-widest">FES26EDC</p>
                    <p className="text-[11px] text-gray-400 mt-1">
                      Apply at checkout when registering for your Gartner FES 2026 pass
                    </p>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="self-start sm:self-auto flex items-center gap-2 px-5 py-2.5 rounded-lg bg-meeru-orange text-white text-sm font-semibold hover:bg-meeru-orange/90 transition-colors shrink-0"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    {copied ? "Copied!" : "Copy Code"}
                  </button>
                </div>

                {/* Session card */}
                <div className="bg-orange-50 border border-orange-100 rounded-xl px-5 py-4">
                  <p className="text-[9px] font-bold tracking-[0.15em] text-meeru-orange uppercase mb-2">
                    ● Exclusive Session · Moderated by MeeruAI
                  </p>
                  <p className="text-base font-bold text-gray-900 leading-snug mb-2">
                    CFO Boardroom: From Insight to Action — How Finance Leaders Are Executing with AI
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">
                    A candid, off-stage conversation with Gordon Lee, CAO at DoorDash, on what&apos;s actually working in AI in finance — what changed first, and what he&apos;d do differently.
                  </p>
                  <a
                    href="https://www.gartner.com/en/conferences/na/cfo-finance-us/sessions/detail/4748961-CFO-Circle-How-Finance-Leaders-Are-Executing-with-AI-Moderated-by-MeeruAI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors inline-flex items-center gap-1"
                  >
                    Reserve your seat on Gartner <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href="https://www.gartner.com/en/conferences/na/cfo-finance-us/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full bg-meeru-orange text-white text-sm font-semibold hover:bg-meeru-orange/90 transition-colors"
                  >
                    Book a Meeting at Booth #721 <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.gartner.com/en/conferences/na/cfo-finance-us"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-gray-300 transition-colors"
                  >
                    About the conference <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Footer */}
                <p className="text-center text-xs text-gray-400 pb-2">
                  New to FES?{" "}
                  <a href="#" className="text-meeru-orange font-medium hover:underline">
                    Learn more about Gartner FES 2026
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
