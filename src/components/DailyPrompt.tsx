import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCw } from "lucide-react";
import { useState } from "react";

const prompts = [
  "Take 5 minutes to breathe deeply and notice how your body feels right now.",
  "Write down one thing you're grateful for today, no matter how small.",
  "Step outside and feel the sunlight or fresh air on your skin for a moment.",
  "Send a kind message to someone you care about.",
  "Listen to a song that makes you feel peaceful or happy.",
  "Practice saying one positive thing about yourself in the mirror.",
  "Take a short walk, even if it's just around your room or garden.",
  "Drink a glass of water mindfully, paying attention to the taste and temperature.",
  "Stretch your arms above your head and take three deep breaths.",
  "Look around and name five things you can see, four you can touch, three you can hear.",
  "Give yourself permission to rest for 10 minutes without feeling guilty.",
  "Write down one small thing you accomplished today and celebrate it."
];

export const DailyPrompt = () => {
  const [currentPrompt, setCurrentPrompt] = useState(() => {
    const today = new Date().getDate();
    return prompts[today % prompts.length];
  });

  const getNewPrompt = () => {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    setCurrentPrompt(prompts[randomIndex]);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Today's Self-Care Moment
          </h2>
          <p className="text-lg text-muted-foreground">
            A gentle suggestion to nurture your wellbeing, one small step at a time.
          </p>
        </div>

        <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-card to-muted/30 border border-border/50 shadow-[var(--shadow-comfort)]">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
          </div>
          
          <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8">
            "{currentPrompt}"
          </blockquote>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="comfort" size="lg">
              I'll try this today
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg"
              onClick={getNewPrompt}
              className="gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Get another prompt
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Small steps can lead to meaningful changes in how you feel.
          </p>
        </Card>
      </div>
    </section>
  );
};