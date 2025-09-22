import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExcellenceSection from "@/components/ExcellenceSection";
import TrustedSolutions from "@/components/TrustedSolutions";
import ManufacturingStandards from "@/components/ManufacturingStandards";
import TherapeuticAreas from "@/components/TherapeuticAreas";
import PharmaceuticalInsights from "@/components/PharmaceuticalInsights";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="scroll-container">
      <Header />
      <div className="scroll-section pt-20">
        <HeroSection />
      </div>
      <div className="scroll-section">
        <ExcellenceSection />
      </div>
      <div className="scroll-section">
        <TrustedSolutions />
      </div>
      <div className="scroll-section">
        <ManufacturingStandards />
      </div>
      <div className="scroll-section">
        <TherapeuticAreas />
      </div>
      <div className="scroll-section">
        <PharmaceuticalInsights />
      </div>
      <div className="scroll-section">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
