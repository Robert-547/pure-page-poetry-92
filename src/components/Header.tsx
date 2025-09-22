import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border header-shrink ${isScrolled ? 'shrunk' : ''}`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover-scale">
            <span className="text-primary-foreground font-bold text-sm">P</span>
          </div>
          <span className="text-xl font-bold text-foreground logo-text transition-all duration-300">Pinnacle</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors nav-link hover-lift">Home</Link>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors nav-link hover-lift">About Us</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors nav-link hover-lift">Manufacturing</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors nav-link hover-lift">Careers</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors nav-link hover-lift">News</a>
          <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors nav-link hover-lift">Contact</Link>
        </div>

        <Button variant="outline" className="hidden md:block hover-glow border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          Investor Portal
        </Button>
      </nav>
    </header>
  );
};

export default Header;