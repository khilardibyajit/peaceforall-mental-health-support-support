import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const Header = () => {
  const handleEmergencyCall = () => {
    window.open('tel:+919999666555', '_self');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">P</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground">Peace of Mind</h1>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#resources" className="text-muted-foreground hover:text-foreground transition-colors">
              Resources
            </a>
            <a href="#support" className="text-muted-foreground hover:text-foreground transition-colors">
              Daily Care
            </a>
            <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors">
              Community
            </a>
          </nav>

          <Button 
            variant="emergency" 
            size="sm"
            onClick={handleEmergencyCall}
            className="gap-2"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Crisis Help</span>
          </Button>
        </div>
      </div>
    </header>
  );
};