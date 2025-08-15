import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const stories = [
  {
    text: "Taking that first step to reach out was the hardest part. Now I know I'm stronger than I thought.",
    theme: "Courage"
  },
  {
    text: "The simple breathing exercise helped me through my most anxious moment today.",
    theme: "Mindfulness"
  },
  {
    text: "Knowing that help is just a call away gave me the comfort I needed to keep going.",
    theme: "Hope"
  },
  {
    text: "I learned that healing isn't linear, and that's perfectly okay.",
    theme: "Acceptance"
  },
  {
    text: "Finding this community reminded me that I'm not alone in this journey.",
    theme: "Connection"
  }
];

export const CommunityStories = () => {
  // Rotate story based on current hour to provide variety throughout the day
  const currentStory = stories[new Date().getHours() % stories.length];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-muted/20 to-accent/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Voices of Hope
          </h2>
          <p className="text-lg text-muted-foreground">
            Anonymous words of comfort and strength from our community.
          </p>
        </div>

        <Card className="p-8 md:p-12 text-center bg-card/90 backdrop-blur-sm border border-border/50 shadow-[var(--shadow-comfort)]">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-accent/20 rounded-full">
              <Quote className="w-6 h-6 text-accent" />
            </div>
          </div>
          
          <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-6">
            "{currentStory.text}"
          </blockquote>
          
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            {currentStory.theme}
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Every story shared helps light the way for someone else.
          </p>
        </Card>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Would you like to share your own story of hope? 
            <span className="text-primary"> Coming soon.</span>
          </p>
        </div>
      </div>
    </section>
  );
};