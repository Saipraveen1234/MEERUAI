import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import OpportunitySection from "./sections/OpportunitySection";
import MeeruFitsSection from "./sections/MeeruFitsSection";
import ArchitectureSection from "./sections/ArchitectureSection";
import CapabilitiesSection from "./sections/CapabilitiesSection";
import ProductsSection from "./sections/ProductsSection";
import ProofPointsSection from "./sections/ProofPointsSection";
import DifferenceSection from "./sections/DifferenceSection";
import CTAFooterSection from "./sections/CTAFooterSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div>
        <HeroSection />
        <OpportunitySection />
        <MeeruFitsSection />
        <ArchitectureSection />
        <CapabilitiesSection />
        <ProductsSection />
        <ProofPointsSection />
        <DifferenceSection />
        <CTAFooterSection />
      </div>
    </main>
  );
}
