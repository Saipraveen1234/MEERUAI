import Navbar from "../shared/Navbar";
import CTAFooterSection from "../shared/CTAFooterSection";

export default function TrustCenterPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">

          <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Trust Center — Coming Soon
          </h1>

          <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
            At MeeruAI, trust, security, and compliance are foundational to how we build our products for the Office of the CFO.
          </p>

          <p className="text-[15px] text-gray-600 leading-relaxed mb-3">
            We are currently working towards industry-standard certifications and compliance programs, including:
          </p>
          <ul className="list-disc pl-5 text-[15px] text-gray-600 leading-relaxed space-y-2 mb-6">
            <li>SOC 2</li>
            <li>ISO 27001</li>
            <li>GDPR Readiness</li>
          </ul>

          <p className="text-[15px] text-gray-600 leading-relaxed mb-3">
            Our comprehensive Trust Center will be live soon and will include details on:
          </p>
          <ul className="list-disc pl-5 text-[15px] text-gray-600 leading-relaxed space-y-2 mb-6">
            <li>Security practices</li>
            <li>Compliance posture</li>
            <li>Data privacy standards</li>
            <li>Governance controls</li>
            <li>Infrastructure and operational safeguards</li>
          </ul>

          <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
            For any immediate questions regarding security, compliance, or certifications, please reach out to:{" "}
            <a href="mailto:contact@meeru.ai" className="text-meeru-orange hover:underline">
              contact@meeru.ai
            </a>
          </p>

          <p className="text-[15px] text-gray-600 leading-relaxed">
            Thank you for your patience as we continue building an enterprise-grade, secure, and trusted platform.
          </p>

        </div>
      </div>
      <CTAFooterSection showCTA={false} />
    </main>
  );
}
