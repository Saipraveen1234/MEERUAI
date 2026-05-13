"use client";

export default function ProofPointsSection() {
  return (
    <section className="relative w-full bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-meeru-orange uppercase mb-4">
          PROOF POINTS
        </p>
        <h2 className="text-4xl lg:text-5xl font-light leading-[1.15] text-gray-900 mb-12">
          Early proof that the model works
        </h2>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 lg:p-12 mb-8 relative">
          <span className="absolute top-6 left-6 text-6xl text-meeru-orange leading-none font-serif">
            &ldquo;
          </span>
          <blockquote className="pl-8 pt-4">
            <p className="text-2xl lg:text-3xl font-light text-gray-900 italic leading-snug max-w-3xl">
              Two years of internal LLM development couldn&apos;t produce what MeeruAI demoed in one
              session.
            </p>
            <footer className="mt-6 text-gray-600">
              &mdash; Fortune 500 Finance Team
            </footer>
          </blockquote>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-8">
            <h3 className="text-lg font-semibold text-meeru-orange mb-3 leading-snug">
              30% finance operating efficiency gain
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Less manual investigation, commentary, routing, and evidence gathering across targeted
              workflows.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-8">
            <h3 className="text-lg font-semibold text-meeru-orange mb-3 leading-snug">
              Reduce Tool Dependency
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Reduce reliance on separate close, reconciliation, reporting, and workflow systems.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-8">
            <h3 className="text-lg font-semibold text-meeru-orange mb-3 leading-snug">
              Weeks to days close compression
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Close work accelerated while preserving evidence, review, and audit-ready support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
