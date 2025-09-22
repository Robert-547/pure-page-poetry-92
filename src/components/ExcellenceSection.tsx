import { Button } from "@/components/ui/button";
import molecularBg from "@/assets/molecular-background.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ExcellenceSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center py-16 section-animate">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-card rounded-lg p-6 shadow-lg hover-tilt">
                <div 
                  className="h-64 bg-cover bg-center rounded-lg relative hover-scale"
                  style={{ backgroundImage: `url(${molecularBg})` }}
                >
                  <div className="absolute inset-0 bg-primary/80 rounded-lg flex items-center justify-center">
                    <div className="text-center text-primary-foreground">
                      <h3 className="text-2xl font-bold mb-2">Join the Technology Revolution:</h3>
                      <p className="text-lg">AI-Powered Drug Discovery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Elevating Global Health
              Through <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We leverage cutting-edge technology and stringent quality standards to deliver 
              pharmaceutical solutions that improve lives worldwide. Our commitment to innovation 
              drives us to push the boundaries of medical science.
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground hover-glow">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcellenceSection;