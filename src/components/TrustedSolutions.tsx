import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TrustedSolutions = () => {
  const sectionRef = useScrollAnimation();
  
  const achievements = [
    {
      title: "Global Reach",
      subtitle: "Since 2015",
      description: "Delivering pharmaceutical excellence to over 50 countries worldwide"
    },
    {
      title: "US FDA Approval",
      subtitle: "2024 Achievement", 
      description: "State-of-the-art manufacturing facility meets the highest FDA standards"
    },
    {
      title: "Innovative Products",
      subtitle: "R&D Excellence",
      description: "Breakthrough therapies developed through advanced research and development"
    },
    {
      title: "Advanced Technology",
      subtitle: "Manufacturing 4.0",
      description: "Cutting-edge automation and quality control systems ensure product excellence"
    },
    {
      title: "Global Expansion",
      subtitle: "Market Leadership",
      description: "Strategic partnerships expanding our therapeutic footprint globally"
    },
    {
      title: "Emerging Markets",
      subtitle: "Access & Affordability",
      description: "Making life-saving medications accessible in developing healthcare markets"
    }
  ];

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center py-16 bg-secondary/30 section-animate">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Delivering Trusted Pharmaceutical
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Solutions Worldwide
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground hover-glow">
            View more about our progress
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow card-hover card-animate">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-foreground mb-2">{achievement.title}</h3>
                <p className="text-sm font-medium text-primary mb-3">{achievement.subtitle}</p>
                <p className="text-muted-foreground text-sm">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedSolutions;