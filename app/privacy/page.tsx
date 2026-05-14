import Navbar from "../shared/Navbar";
import CTAFooterSection from "../shared/CTAFooterSection";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900">
              Privacy Policy
            </h1>
          </div>

          {/* Intro */}
          <p className="text-[15px] text-gray-600 leading-relaxed mb-10">
            Meeru AI Inc (Hereafter called "Meeru AI" Company, We, Our, Us) has a comprehensive Data Protection and Privacy Policy plan. Our Privacy Policy published on our website (www.meeruai.com) clearly explains how we collect, process, and use user data (Website Users) provided to us using contact forms or email Ids on the website and through events and campaigns.
          </p>

          <hr className="border-gray-200 my-8" />

          {/* Users' Personal Data on Website */}
          <section className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-4">
              Users' Personal Data on Website
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
              The Contact, Enquiry, and Jobs forms on different pages of the Meeru AI website ask for the following information from users:
            </p>
            <ul className="list-disc pl-5 text-[15px] text-gray-600 leading-relaxed space-y-2">
              <li>Name</li>
              <li>Title</li>
              <li>Company</li>
              <li>Email Id</li>
              <li>Phone</li>
              <li>User's Resume (Careers Page)</li>
            </ul>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Scope and How Data Is Used */}
          <section className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-4">
              Scope and How Data Is Used
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
              Website users contact us through email Ids listed on the website such <a href="mailto:contact@meeru.ai" className="text-meeru-orange hover:underline">contact@meeru.ai</a>, and provide data for reasons such as:
            </p>
            <ul className="list-disc pl-5 text-[15px] text-gray-600 leading-relaxed space-y-2">
              <li>Requesting additional information on our services and solutions</li>
              <li>Subscribing to blog articles</li>
              <li>Seeking jobs</li>
              <li>Downloading case studies</li>
              <li>Verifying ex-employees' backgrounds</li>
              <li>Registering complaints</li>
              <li>Promoting their own products and services</li>
            </ul>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* How We Process and Use the Data */}
          <section className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-4">
              How We Process and Use the Data
            </h2>
            <ul className="list-disc pl-5 text-[15px] text-gray-600 leading-relaxed space-y-2">
              <li>All user data received through the website is stored on the cloud in a safe and secure environment</li>
              <li>Data may be used to send users newsletters, promotional campaigns, our new offerings, or information about events we participate in.</li>
              <li>Users can unsubscribe to our newsletter by clicking on the unsubscribe link in the email newsletter. Your data will be permanently deleted from our database, and you will no longer receive email newsletters from us.</li>
              <li>You can also write back to us at contact@meeru.ai requesting removal of your personal data from our database. Upon such a request, your personal data will be removed permanently from our database.</li>
              <li>Your personal information will not be shared with any public/private organization, or institution for commercial purposes.</li>
              <li>On request, your personal information may be shared with government organizations or law enforcement agencies to comply with legal requirements.</li>
            </ul>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Microsites, Landing Pages, Region/Country-Specific and Subdomain Websites */}
          <section className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-4">
              Microsites, Landing Pages, Region/Country-Specific and Subdomain Websites
            </h2>
            <ul className="list-disc pl-5 text-[15px] text-gray-600 leading-relaxed space-y-2">
              <li>From time to time Meeru AI creates microsites, landing pages, region/country-specific, or subdomain websites on the root domain (meeruai.com)</li>
              <li>Microsites, landing pages, region/country-specific, or subdomain websites are created for special events or to cover our company activities in a particular region.</li>
              <li>These microsites, landing pages, region/country-specific, or subdomain websites may also have forms, wherein your personal information is collected, processed, and used as mentioned above.</li>
              <li>These microsites, landing pages, region/country-specific, or subdomain websites may also have social media and other websites links, and while you may visit those websites by clicking links on our website, microsite, or subdomain website we are not responsible for any of your activities on those external websites.</li>
            </ul>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Third-Party and Social Media Website Links */}
          <section className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-4">
              Third-Party and Social Media Website Links
            </h2>
            <ul className="list-disc pl-5 text-[15px] text-gray-600 leading-relaxed space-y-2">
              <li>Our website may contain links to external websites such as third-party websites, external websites, and social media websites and all these are outside the purview of our privacy policy and statement.</li>
              <li>We encourage our website users to read and review the privacy policies of all such external third-party websites you visit by clicking on their links on our website.</li>
            </ul>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Anti-Spam Policy */}
          <section className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-4">
              Anti-Spam Policy
            </h2>
            <ul className="list-disc pl-5 text-[15px] text-gray-600 leading-relaxed space-y-2">
              <li>Meeru AI recognizes that sending, receiving, transmitting, and distributing spam emails (all unsolicited bulk emails) is a major challenge.</li>
              <li>We take all necessary measures and steps to ensure such spam emails are filtered and deleted.</li>
              <li>We reserve the right to reject and report to relevant authorities any suspicious email we receive for appropriate action.</li>
            </ul>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Data Protection and Confidentiality */}
          <section className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-4">
              Data Protection and Confidentiality
            </h2>
            <ul className="list-disc pl-5 text-[15px] text-gray-600 leading-relaxed space-y-2">
              <li>To protect the data and maintain its confidentiality, we have implemented the SSL certificate for our website and hosted it on the Microsoft Azure Cloud.</li>
              <li>We have put in place all necessary systems, procedures, and implemented internationally accepted best practices to protect all personal information of users from misuse.</li>
              <li>Though all physical, technical, and administrative security measures are taken to protect data and maintain its confidentiality, Meeru AI does not take any responsibility for any data breach that may happen due to technology failure, hacking, or any other unethical means.</li>
            </ul>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* GDPR Compliance */}
          <section className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-4">
              GDPR Compliance
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
              Meeru AI complies by all data privacy regulations and guidelines of the General Data Protection Regulation (GDPR) with regard to:
            </p>
            <ul className="list-disc pl-5 text-[15px] text-gray-600 leading-relaxed space-y-2">
              <li>Collection of users' personal information</li>
              <li>Safety and security of the users' personal information</li>
              <li>Storing, retrieving, and using of personal information</li>
              <li>If you have any concerns regarding your personal data and information, please direct your questions to contact@meeru.ai. We will respond immediately and address your concerns.</li>
            </ul>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* California Consumer Privacy Act (CCPA) Compliance */}
          <section className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-4">
              California Consumer Privacy Act (CCPA) Compliance
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
              The California Consumer Privacy Act (CCPA) was enforced as a law on July 1, 2020, applies to the residents and businesses operating from California State. Meeru AI Inc. as a responsible for-profit company complies and adheres to the CCPA law, the rules, regulations, and guidelines.
            </p>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              If you, the website users, have any concerns regarding your personal data and information, please direct your questions to <a href="mailto:contact@meeru.ai" className="text-meeru-orange hover:underline">contact@meeru.ai</a>. We will respond immediately and address your concerns
            </p>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Privacy Policy Updates */}
          <section className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-4">
              Privacy Policy Updates
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              This Privacy Policy will be updated regularly as per the guidelines of governments' data policy regulations and our company policies. The subscribed users will be notified accordingly. Other users are requested to visit this Privacy Policy for review on updates.
            </p>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Grievance Redressal */}
          <section className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-4">
              Grievance Redressal
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Users visiting our website and contacting us through email Ids mentioned on the website who have any grievance or concerns regarding the safety and security of their personal information provided to us can contact us at <a href="mailto:contact@meeru.ai" className="text-meeru-orange hover:underline">contact@meeru.ai</a>.
            </p>
          </section>
        </div>
      </div>
      <CTAFooterSection />
    </main>
  );
}
