"use client";

export default function MeeruFitsSection() {
  return (
    <section className="relative w-full bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-meeru-orange uppercase mb-4">
          WHERE MEERUAI FITS
        </p>
        <h2 className="text-4xl lg:text-[3.25rem] font-light leading-[1.1] text-gray-900 max-w-3xl mb-8">
          The AI Workbench Layer Your Finance Stack Is Missing
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-4 text-gray-600 leading-relaxed max-w-xl">
            <p>
              ERP systems record what happened. BI tools report what changed. Close tools track
              what still needs to be done.
            </p>
            <p>
              MeeruAI helps finance complete the work across systems. It connects to your existing
              stack, grounds every answer in your company context, and moves finance work from
              signal to explanation to reviewed action.
            </p>

            <div className="space-y-3 mt-10">
              <div className="rounded-xl border border-orange-200 bg-meeru-orange-light p-5 relative">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-4 rounded-sm bg-meeru-orange mt-1 shrink-0" />
                    <div>
                      <img 
                        src="/meeruai-logo.png" 
                        alt="MeeruAI" 
                        className="h-5 w-auto object-contain mb-1" 
                      />
                      <p className="text-sm text-gray-600">
                        System of action: What needs to happen next, and how work gets done.
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-meeru-orange border border-orange-200 whitespace-nowrap">
                    Understand + Resolve + Complete
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 mt-1.5" />
                    <div>
                      <h4 className="text-base font-semibold text-gray-900">BI tools</h4>
                      <p className="text-sm text-gray-500 mt-0.5">
                        System of reporting: What is happening
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500 border border-gray-200 whitespace-nowrap">
                    Report only
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300 mt-1.5" />
                    <div>
                      <h4 className="text-base font-semibold text-gray-900">ERP systems</h4>
                      <p className="text-sm text-gray-500 mt-0.5">
                        System of record: What happened
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500 border border-gray-200 whitespace-nowrap">
                    Record only
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-12 right-0 w-[350px] opacity-[0.08] select-none pointer-events-none z-0">
              <img 
                src="https://www.starbridgemarketing.com/meeruai/wp-content/uploads/2026/05/meeru-m-coral.png" 
                alt="" 
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="lg:pt-24 relative z-10">
              <blockquote className="relative">
                <p className="text-3xl lg:text-4xl font-light text-gray-900 leading-snug">
                  &ldquo;ERP records. BI reports.{" "}
                  <span className="text-meeru-orange">MeeruAI gets the work done.</span>&rdquo;
                </p>
              </blockquote>
              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="text-gray-600 leading-relaxed">
                  For the first time, finance has a system that goes beyond visibility. It
                  identifies what changed, resolves what matters most, and helps teams move from
                  signal to decision and action with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
