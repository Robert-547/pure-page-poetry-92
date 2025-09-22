import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TherapeuticAreas = () => {
  const sectionRef = useScrollAnimation();
  
  const therapeuticAreas = [
    {
      title: "Oncology",
      description: "Advanced cancer treatments and innovative oncology solutions for improved patient outcomes."
    },
    {
      title: "Cardiovascular", 
      description: "Comprehensive cardiac medications and therapies for heart health and vascular wellness."
    },
    {
      title: "Anti-infectives",
      description: "Cutting-edge antibiotics and antiviral treatments to combat infectious diseases effectively."
    },
    {
      title: "Diabetes",
      description: "Innovative diabetes management solutions and medications for better glucose control."
    }
  ];

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center py-16 bg-muted/50 section-animate">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pioneering Solutions Across
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Multiple Therapeutic Areas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {therapeuticAreas.map((area, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow h-full card-float card-animate">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            With over 80 finished products, we are committed to making a positive impact in 
            patients' lives globally. Our diverse portfolio spans multiple therapeutic areas, 
            ensuring comprehensive healthcare solutions.
          </p>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground hover-glow">
              Explore Product Range
            </Button>
        </div>
      </div>
    </section>
  );
};

export default TherapeuticAreas;