import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-calm.jpg";

export const HeroSection = () => {
  const handleEmergencyCall = () => {
    // Vandrevala Foundation helpline
    window.open('tel:+919999666555', '_self');
  };

  const handleEmergencyWhatsApp = () => {
    // Vandrevala Foundation WhatsApp
    window.open('https://wa.me/919999666555', '_blank');
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-muted">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          You're not alone.
          <span className="block text-primary mt-2">We're here to help.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Immediate access to emotional support, trusted resources, and gentle daily care for your mental wellbeing.
        </p>

        {/* Emergency Help Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            variant="emergency" 
            size="lg"
            onClick={handleEmergencyCall}
            className="text-lg px-8 py-6 h-auto min-w-[200px]"
          >
            <Phone className="w-5 h-5" />
            Need Help Now?
            <span className="block text-sm font-normal opacity-90">Call 24x7</span>
          </Button>
          
          <Button 
            variant="gentle" 
            size="lg"
            onClick={handleEmergencyWhatsApp}
            className="text-lg px-8 py-6 h-auto min-w-[200px]"
          >
            <MessageCircle className="w-5 h-5" />
            Chat Support
            <span className="block text-sm font-normal opacity-90">WhatsApp 24x7</span>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          Free confidential support via Vandrevala Foundation • Available 24×7×365
        </p>
      </div>
    </section>
  );
};