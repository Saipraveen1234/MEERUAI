import Navbar from "../shared/Navbar";
import CTAFooterSection from "../shared/CTAFooterSection";

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-[0.2em] text-meeru-orange uppercase mb-4">
              TERMS OF USE
            </p>
            <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900">
              Terms
            </h1>
          </div>

          {/* Intro */}
          <p className="text-[15px] text-gray-600 leading-relaxed mb-10">
            You consent to these terms by using any of the content, products, solutions, or services, and mobile applications provided by this website{" "}
            <a
              href="https://www.meeruai.com/"
              className="text-meeru-orange hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              (https://www.meeruai.com/)
            </a>
            . If you disagree to be restrained by all these Terms, including our Privacy Policy included here by reference, please do not access the Services. This agreement entails using compulsory arbitration on a personal basis to settle conflicts rather than jury trials. It restricts the assistance open to you in a dispute.
          </p>

          {/* Legal Complaints */}
          <section className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-4">
              Legal Complaints
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Meeru AI respects intellectual property rights and abides by them. If you think that Content under the Services violates your copyright, please follow our process for making a copyright violation request.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-4">
              Intellectual Property
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
              The Content (text, videos), data, designs, and all materials displayed on the website are guarded by intellectual property and other laws. You must comply with all such laws and relevant copyright, trademark, or other statutory notices or stipulations. Subject to these Terms, you may enter and use the Services only for your personal, non-commercial usage. We reserve all additional rights to the Services and Content. You may not duplicate, copy, share, distribute, exhibit, perform, or produce plagiarized works of the Services or Content without our consent. You also may not sell or sublicense this limited right to use the Services.
            </p>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              In the event that you find any content on our website (text, audio, video, music, graphics, infographics, animation) that may have been listed/displayed on our website inadvertently, that you believe is violating or infringing the copyrights, please write to{" "}
              <a
                href="mailto:contact@meeru.ai"
                className="text-meeru-orange hover:underline"
              >
                contact@meeru.ai
              </a>
              . We will independently verify and take all and immediate remedial action and inform you accordingly.
            </p>
          </section>

          {/* Content on Social Media Channels */}
          <section className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-4">
              Content on Social Media Channels
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
              Meeru AI leverages all social media channels—LinkedIn, Twitter, Facebook, YouTube, Instagram—to disseminate quality information/content on the services, solutions the company offers. This information/content could be in the form of text, audio, videos, graphics, animation, and infographics.
            </p>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
              While we do our best to ensure all information/content is genuine, unique, and original in all respects, in the event that you find any content on our website (text, audio, video, music, graphics, infographics, animation) that may have been listed/displayed on our website inadvertently, that you believe is violating or infringing copyrights, please write in to{" "}
              <a
                href="mailto:contact@meeru.ai"
                className="text-meeru-orange hover:underline"
              >
                contact@meeru.ai
              </a>
              . We will independently verify and take all and immediate remedial action and inform you accordingly.
            </p>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
              <strong className="text-gray-800">Viral Distribution:</strong> We may provide approval to you for redistribution of specific content for individual, non-commercial usage. We will classify the content that you are authorized to redistribute and outline ways in which you may redistribute it. We may withdraw this permission at any time. If you redistribute content, you must alter or remove such openly posted content and correct or erase it immediately upon our request.
            </p>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              <strong className="text-gray-800">Commercial Licenses:</strong> You must get our written consent for commercial use of the Content or the Services. If you want to license content from the Services, please reach out to us at{" "}
              <a
                href="mailto:contact@meeru.ai"
                className="text-meeru-orange hover:underline"
              >
                contact@meeru.ai
              </a>
            </p>
          </section>

          {/* Disclaimer */}
          <section className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-4">
              Disclaimer
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
              Meeru AI expressly denies, in any way and for any purpose, any guarantees concerning any part of any content included on the website and expressly alerts the website visitor not to place any confidence whatsoever on the data or statements held within this website, without confirming/verifying the authenticity of the data from independent sources.
            </p>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Meeru AI does not take any accountability for periodically updating the website content herein and does not take any responsibility whatsoever in any matter emerging due to any action that would prompt a website user to place faith in the data or statements made open on this website.
            </p>
          </section>

          {/* Acceptable Use */}
          <section className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-4">
              Acceptable Use
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              All pages on the website have been created to display content in a unique format and look. Unless we authorize you, you accept not to access the Services utilizing any interface other than ours. We may refuse authorization to link to the Services for any reason at our discretion. Without restricting any other stipulation in these Terms, you may not use the Services to do/assist the following: warn, malign, stalk, hurt, or harass other persons or engage in unlawful activities; link to the Services from a site or forward any material that is unsuitable, profane, obscene, offensive, false, disparaging, slanderous, indecent, illegal, sexually explicit, discriminatory, that advocates violence, racial prejudice, or terrorism, or that we believe, in our discretion, to be otherwise unacceptable; express the Services, present the Services in connection with an unofficial logo or mark, or do anything that could incorrectly suggest a link between Meeru AI and any third party or potentially deny us of revenue; infringe any person&apos;s or entity&apos;s statutory rights, send material that disrupts or deceives such rights, or withdraw or change intellectual property or other legal notices; transmit files, sell goods or services without our consent; intervene with others using the Services or otherwise interrupt the Services; transmit, handle, or access individually identifiable data about other users without the permission of those users and Meeru AI; engage in unapproved spidering, block any access controls, access any part of the Services that we have not allowed you to access, link to password-protected areas, try to access or use another user&apos;s account or data, or permit anyone else to use your account or use credentials.
            </p>
          </section>

          {/* Third-Party Content */}
          <section className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-4">
              Third-Party Content
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
              We often provide third-party content or link to third-party websites on our website. We do not fundamentally support or assess third-party content and websites. We do not assume liability for their activities or imperfections. You should examine third parties&apos; terms of use and privacy policies before you utilize services listed on the third-party websites.
            </p>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Contact Us Please e-mail us at:{" "}
              <a
                href="mailto:contact@meeru.ai"
                className="text-meeru-orange hover:underline"
              >
                contact@meeru.ai
              </a>{" "}
              if you have any issues with our Terms of Use. We will respond at the earliest.
            </p>
          </section>
        </div>
      </div>
      <CTAFooterSection />
    </main>
  );
}
