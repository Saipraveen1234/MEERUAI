"use client";

export default function ArchitectureSection() {
  return (
    <section className="relative w-full bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-meeru-orange uppercase mb-4">
            THE ARCHITECTURE
          </p>
          <h2 className="text-4xl lg:text-5xl font-light leading-[1.15] text-gray-900">
            Built to Complete Finance Work,{" "}
            <span className="block">Not Just Analyze It.</span>
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            Combine your finance data, company context, and AI workbenches into one operating layer that
            helps teams complete work faster, resolve issues sooner, and take action with confidence.
          </p>
        </div>

        <div className="relative rounded-3xl border border-gray-200 bg-white p-8 lg:p-12 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #000 1px, transparent 1px),
                linear-gradient(to bottom, #000 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="space-y-6">
              <h3 className="text-xs font-bold tracking-[0.15em] text-gray-900 uppercase">
                CONNECTS TO ANYTHING
              </h3>
              <div>
                <p className="text-[10px] font-semibold tracking-[0.15em] text-gray-400 uppercase mb-4">
                  DATA SOURCES
                </p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li>ERPs</li>
                  <li>CRMs</li>
                  <li>HRIS</li>
                  <li>Procurement</li>
                  <li>Banking</li>
                  <li>Data warehouses</li>
                  <li>Spreadsheets</li>
                  <li>Unstructured data</li>
                  <li className="text-gray-400 italic">— and more</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-bold tracking-[0.15em] text-gray-900 uppercase">
                FINANCE-GRADE CORE
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-meeru-orange text-white text-xs font-bold shrink-0 mt-0.5">
                    01
                  </span>
                  <span className="text-gray-900 font-medium text-sm">Contextual data model</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 text-gray-500 text-xs font-bold shrink-0 mt-0.5">
                    02
                  </span>
                  <span className="text-gray-700 text-sm">Company-specific ML</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 text-gray-500 text-xs font-bold shrink-0 mt-0.5">
                    03
                  </span>
                  <span className="text-gray-700 text-sm">Finance agents + automation</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 text-gray-500 text-xs font-bold shrink-0 mt-0.5">
                    04
                  </span>
                  <span className="text-gray-700 text-sm">Traceability + human review</span>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 text-center">
                <p className="text-[10px] font-semibold tracking-[0.15em] text-gray-400 uppercase mb-3">
                  BUILT FOR FINANCE-GRADE WORK
                </p>
                <span className="text-2xl font-bold">
                  <span className="text-meeru-orange">Meeru</span>
                  <span className="text-gray-900">AI</span>
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-bold tracking-[0.15em] text-meeru-orange uppercase">
                AI WORKBENCHES
              </h3>
              <div className="space-y-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-meeru-orange text-sm font-bold">01</span>
                    <span className="text-gray-900 font-semibold text-sm">Understand</span>
                  </div>
                  <p className="text-gray-600 text-sm ml-6">Know what changed and why.</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-meeru-orange text-sm font-bold">02</span>
                    <span className="text-gray-900 font-semibold text-sm">Resolve</span>
                  </div>
                  <p className="text-gray-600 text-sm ml-6">
                    Move issues forward with evidence + routing.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-meeru-orange text-sm font-bold">03</span>
                    <span className="text-gray-900 font-semibold text-sm">Complete</span>
                  </div>
                  <p className="text-gray-600 text-sm ml-6">
                    Finish with confidence. Audit-ready work products.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-12 pt-8 border-t border-gray-100 text-center">
            <p className="text-[10px] font-semibold tracking-[0.15em] text-gray-400 uppercase mb-3">
              POWERED BY
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm font-semibold text-gray-900">
              <span>Agentic Suites&trade;</span>
              <span>Autonomy Studio&trade;</span>
              <span>Finance Command Center</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
