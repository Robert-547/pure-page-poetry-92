import { Button } from "@/components/ui/button";
import globalNetwork from "@/assets/global-network.jpg";

const ManufacturingStandards = () => {
  return (
    <section className="min-h-screen flex items-center py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              We Maintain the Highest
              Standards in <span className="text-medical">Medicine Manufacturing</span>{" "}
              and <span className="text-success">Pharmaceutical Services</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our state-of-the-art facilities, certified by leading global regulatory bodies, 
              ensure that every product meets the strictest quality and safety standards. 
              We are committed to advancing healthcare through innovative manufacturing processes.
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Read More
            </Button>
          </div>
          
          <div className="relative">
            <div 
              className="h-80 bg-cover bg-center rounded-lg shadow-lg"
              style={{ backgroundImage: `url(${globalNetwork})` }}
            >
              <div className="absolute inset-0 bg-primary/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingStandards;