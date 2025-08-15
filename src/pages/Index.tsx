import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ResourceCorner } from "@/components/ResourceCorner";
import { DailyPrompt } from "@/components/DailyPrompt";
import { CommunityStories } from "@/components/CommunityStories";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />
      
      <main className="pt-20">
        <HeroSection />
        
        <div id="resources">
          <ResourceCorner />
        </div>
        
        <div id="support">
          <DailyPrompt />
        </div>
        
        <div id="community">
          <CommunityStories />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
