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
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ExcellenceSection />
      <TrustedSolutions />
      <ManufacturingStandards />
      <TherapeuticAreas />
      <PharmaceuticalInsights />
      <Footer />
    </div>
  );
};

export default Index;
