import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medical-lab.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center bg-gradient-to-r from-secondary to-muted section-animate">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-2xl text-left">
          <div className="mb-6 card-animate">
            <div className="inline-flex items-center bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold text-sm mb-4 hover-glow">
              🏆 US FDA APPROVAL
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Our state-of-the-art manufacturing plant
              in Baddi has received the prestigious{" "}
              <span className="text-accent">US FDA APPROVAL</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              This milestone marks our unwavering commitment to
              excellence in specialty drug production.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 card-animate">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground hover-glow">
              Learn More
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground hover-glow">
              View Facility
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;