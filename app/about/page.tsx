import Navbar from "../shared/Navbar";
import AboutHeroSection from "./sections/AboutHeroSection";
import AboutMissionSection from "./sections/AboutMissionSection";
import AboutWorkbenchesSection from "./sections/AboutWorkbenchesSection";
import AboutFounderSection from "./sections/AboutFounderSection";
import CTAFooterSection from "../shared/CTAFooterSection";

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div>
        <AboutHeroSection />
        <AboutMissionSection />
        <AboutWorkbenchesSection />
        <AboutFounderSection />
        <CTAFooterSection />
      </div>
    </main>
  );
}
