"use client";

export default function OpportunitySection() {
  return (
    <section
      className="relative py-24 border-t border-gray-100 overflow-hidden"
      style={{ backgroundColor: "rgba(249,249,248,0.6)" }}
      aria-label="The Opportunity"
    >
      {/* Exact background from live site */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(226,106,69,0.12) 1px, transparent 1px), linear-gradient(rgba(226,106,69,0.12) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        {/* SVG geometric overlay */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMaxYMid slice"
        >
          <g>
            <line
              x1="200"
              y1="900"
              x2="1500"
              y2="-100"
              stroke="rgba(226,106,69,0.25)"
              strokeWidth="1.8"
            />
            <line
              x1="400"
              y1="900"
              x2="1700"
              y2="100"
              stroke="rgba(226,106,69,0.2)"
              strokeWidth="1.8"
            />
            <line
              x1="600"
              y1="900"
              x2="1800"
              y2="200"
              stroke="rgba(226,106,69,0.18)"
              strokeWidth="1.8"
            />
            <line
              x1="900"
              y1="900"
              x2="1900"
              y2="300"
              stroke="rgba(226,106,69,0.15)"
              strokeWidth="1.8"
            />
            <line
              x1="1100"
              y1="900"
              x2="2000"
              y2="400"
              stroke="rgba(226,106,69,0.12)"
              strokeWidth="1.8"
            />
            <line
              x1="800"
              y1="-50"
              x2="1750"
              y2="950"
              stroke="rgba(226,106,69,0.18)"
              strokeWidth="1.8"
            />
            <line
              x1="1000"
              y1="-50"
              x2="1900"
              y2="950"
              stroke="rgba(226,106,69,0.15)"
              strokeWidth="1.8"
            />
            <line
              x1="1450"
              y1="0"
              x2="1450"
              y2="900"
              stroke="rgba(226,106,69,0.18)"
              strokeWidth="1.8"
              strokeDasharray="8 6"
            />
            <line
              x1="1520"
              y1="0"
              x2="1520"
              y2="900"
              stroke="rgba(226,106,69,0.15)"
              strokeWidth="1.8"
              strokeDasharray="8 6"
            />
          </g>
          <g>
            <circle cx="1280" cy="320" r="6" fill="rgba(226,106,69,0.35)" />
            <circle cx="1380" cy="540" r="4" fill="rgba(226,106,69,0.3)" />
            <circle cx="1180" cy="180" r="5" fill="rgba(226,106,69,0.3)" />
            <circle cx="1560" cy="700" r="5" fill="rgba(226,106,69,0.3)" />
            <circle cx="1080" cy="640" r="3" fill="rgba(226,106,69,0.25)" />
            <circle
              cx="1450"
              cy="240"
              r="14"
              fill="none"
              stroke="rgba(226,106,69,0.35)"
              strokeWidth="1.6"
            />
          </g>
        </svg>
      </div>

      {/* Top border line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(226,106,69,0.3), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 mb-14">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-meeru-orange uppercase mb-4">
              THE OPPORTUNITY
            </p>
            <h2 className="text-[2.5rem] md:text-[3.2rem] font-light text-brand-darker leading-[1.15]">
              Finance has more tools than ever,{" "}
              <span className="block">yet the work is still manual.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-3 text-sm text-brand-dark/75 leading-relaxed">
            <p>
              ERP records the numbers. BI reports what happened. Close tools track the
              process. Generic AI drafts the commentary. MeeruAI helps finance finish the
              work.
            </p>
            <p>
              From close tasks to reconciliations to variance explanations, MeeruAI brings
              data, AI, workflow, evidence, and review into one finance-specific workbench
              experience.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1 */}
          <article
            className="relative rounded-2xl overflow-hidden group cursor-pointer"
            style={{ aspectRatio: "4/5" }}
            tabIndex={0}
            aria-label="Close Faster"
          >
            <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
              <div className="w-full h-full bg-[#2a1a14]" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.25) 50%, transparent 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs text-meeru-orange font-semibold font-mono block mb-1">
                  01
                </span>
                <h3 className="text-2xl font-light text-white">Close Faster</h3>
              </div>
            </div>
            <div className="absolute inset-0 bg-[#1A1A1A] flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div>
                <span className="text-xs text-meeru-orange font-semibold font-mono block mb-2">
                  01
                </span>
                <h3 className="text-2xl font-light text-white">Close Faster</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Move period-end work forward",
                  "Close tasks, reconciliations, flux analysis",
                  "Routing and review built in",
                  "Evidence preserved in one place",
                ].map((bullet) => (
                  <li
                    key={bullet}
                    className="text-sm text-white/80 flex items-start gap-2.5"
                  >
                    <span
                      className="w-2 h-2 rounded-full bg-meeru-orange flex-shrink-0 mt-1.5"
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Card 2 */}
          <article
            className="relative rounded-2xl overflow-hidden group cursor-pointer"
            style={{ aspectRatio: "4/5" }}
            tabIndex={0}
            aria-label="Resolve Issues Sooner"
          >
            <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
              <div className="w-full h-full bg-[#1a1410]" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.25) 50%, transparent 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs text-meeru-orange font-semibold font-mono block mb-1">
                  02
                </span>
                <h3 className="text-2xl font-light text-white">Resolve Issues Sooner</h3>
              </div>
            </div>
            <div className="absolute inset-0 bg-[#1A1A1A] flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div>
                <span className="text-xs text-meeru-orange font-semibold font-mono block mb-2">
                  02
                </span>
                <h3 className="text-2xl font-light text-white">Resolve Issues Sooner</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Trace exceptions to source data",
                  "Surface drivers and likely explanations",
                  "Catch variances before they slow the close",
                  "Move from flag to resolution faster",
                ].map((bullet) => (
                  <li
                    key={bullet}
                    className="text-sm text-white/80 flex items-start gap-2.5"
                  >
                    <span
                      className="w-2 h-2 rounded-full bg-meeru-orange flex-shrink-0 mt-1.5"
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Card 3 */}
          <article
            className="relative rounded-2xl overflow-hidden group cursor-pointer"
            style={{ aspectRatio: "4/5" }}
            tabIndex={0}
            aria-label="Act with Confidence"
          >
            <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
              <div className="w-full h-full bg-[#1a1a14]" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.25) 50%, transparent 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs text-meeru-orange font-semibold font-mono block mb-1">
                  03
                </span>
                <h3 className="text-2xl font-light text-white">Act with Confidence</h3>
              </div>
            </div>
            <div className="absolute inset-0 bg-[#1A1A1A] flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div>
                <span className="text-xs text-meeru-orange font-semibold font-mono block mb-2">
                  03
                </span>
                <h3 className="text-2xl font-light text-white">Act with Confidence</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Reviewed, source-traced work products",
                  "Approvals built into every workflow",
                  "Next actions ready before review",
                  "Audit-ready evidence, by default",
                ].map((bullet) => (
                  <li
                    key={bullet}
                    className="text-sm text-white/80 flex items-start gap-2.5"
                  >
                    <span
                      className="w-2 h-2 rounded-full bg-meeru-orange flex-shrink-0 mt-1.5"
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
