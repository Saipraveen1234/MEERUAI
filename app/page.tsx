import Navbar from "./shared/Navbar";
import HeroSection from "./home/sections/HeroSection";
import OpportunitySection from "./home/sections/OpportunitySection";
import MeeruFitsSection from "./home/sections/MeeruFitsSection";
import ArchitectureDiagramSection from "./home/sections/ArchitectureDiagramSection";
import CapabilitiesSection from "./home/sections/CapabilitiesSection";
import ProductsSection from "./home/sections/ProductsSection";
import ProofPointsSection from "./home/sections/ProofPointsSection";
import DifferenceSection from "./home/sections/DifferenceSection";
import CTAFooterSection from "./shared/CTAFooterSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div>
        <HeroSection />
        <OpportunitySection />
        <MeeruFitsSection />
        <ArchitectureDiagramSection />
        <CapabilitiesSection />
        <ProductsSection />
        <ProofPointsSection />
        <DifferenceSection />
        <CTAFooterSection />
      </div>
    </main>
  );
}
