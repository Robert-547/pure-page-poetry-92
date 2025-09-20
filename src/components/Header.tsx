import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-medical rounded-full flex items-center justify-center">
            <span className="text-medical-foreground font-bold text-sm">M</span>
          </div>
          <span className="text-xl font-bold text-foreground">MedPharma</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Manufacturing</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">News</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </div>

        <Button variant="outline" className="hidden md:block">
          Investor Portal
        </Button>
      </nav>
    </header>
  );
};

export default Header;