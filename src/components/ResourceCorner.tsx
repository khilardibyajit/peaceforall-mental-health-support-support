import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Heart, Users, BookOpen, Shield } from "lucide-react";

const resources = [
  {
    title: "National Institute of Mental Health",
    description: "Comprehensive mental health information and research-based resources",
    url: "https://www.nimh.nih.gov/health/find-help",
    icon: BookOpen,
    category: "Official Resources"
  },
  {
    title: "NAMI - Support & Education",
    description: "Mental health support, education, and advocacy resources",
    url: "https://www.nami.org/Support-Education",
    icon: Users,
    category: "Community Support"
  },
  {
    title: "Mental Health Coalition",
    description: "Comprehensive resource library and advocacy tools",
    url: "https://www.mentalhealthcoalition.org/",
    icon: Heart,
    category: "Advocacy"
  },
  {
    title: "Crisis Text Line",
    description: "24/7 text-based crisis support for immediate help",
    url: "https://www.crisistextline.org/",
    icon: Shield,
    category: "Crisis Support"
  }
];

export const ResourceCorner = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Carefully curated mental health organizations offering reliable information, 
            self-help tools, and professional support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <Card key={index} className="p-6 h-full bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-card transition-all duration-300 shadow-[var(--shadow-gentle)] hover:shadow-[var(--shadow-comfort)]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {resource.category}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-3 text-lg">
                    {resource.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">
                    {resource.description}
                  </p>
                  
                  <Button 
                    variant="resource" 
                    size="sm"
                    onClick={() => window.open(resource.url, '_blank')}
                    className="w-full justify-between"
                  >
                    Visit Resource
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};