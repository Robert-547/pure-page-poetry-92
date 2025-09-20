import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PharmaceuticalInsights = () => {
  const articles = [
    {
      title: "A Deep Dive into Pharma Third-Party Manufacturing for Emerging Medicines",
      category: "Manufacturing"
    },
    {
      title: "CDMO Pharma Companies Revolutionizing Drug Development and Oversize Drugs",
      category: "Drug Development" 
    },
    {
      title: "Emerging Trends in Oncology Medicine Manufacturing Solutions",
      category: "Oncology"
    },
    {
      title: "How Oncology & Antibiotics Companies Are Shaping the Global Supplying Trend",
      category: "Supply Chain"
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dive into insightful articles on{" "}
            <span className="text-accent">pharmaceutical manufacturing trends</span>{" "}
            and practices.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {articles.map((article, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow cursor-pointer hover-lift h-full flex flex-col">
              <CardHeader className="flex-grow">
                <div className="text-sm text-medical font-medium mb-2">{article.category}</div>
                <CardTitle className="text-base font-semibold text-foreground leading-tight">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-auto">
                <p className="text-sm text-muted-foreground">Read More</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            View More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PharmaceuticalInsights;