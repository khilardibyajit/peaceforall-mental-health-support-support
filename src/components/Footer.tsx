import { Heart, Shield, Users } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary/5 border-t border-border/50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Solace Hub</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Providing immediate access to emotional support and reliable mental health resources 
              in a safe, comforting environment.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              Emergency Support
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Vandrevala Foundation: <span className="text-foreground font-medium">+91 9999 666 555</span></p>
              <p>Available 24×7×365</p>
              <p>Free & Confidential</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              Our Mission
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>✓ Immediate crisis support access</p>
              <p>✓ Trusted resource curation</p>
              <p>✓ Daily wellness encouragement</p>
              <p>✓ Community connection</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-accent" fill="currentColor" /> for mental health awareness
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            If you're experiencing a mental health emergency, please contact emergency services immediately.
          </p>
        </div>
      </div>
    </footer>
  );
};