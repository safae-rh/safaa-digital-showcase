import { aboutText } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground animate-fade-in">
          À propos
        </h2>

        <Card className="max-w-5xl mx-auto shadow-elevated bg-gradient-card border-border/50 animate-scale-in hover:shadow-2xl transition-all duration-500">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-[300px,1fr] gap-8 md:gap-12 items-center">
              {/* Photo professionnelle avec effet */}
              <div className="mx-auto md:mx-0 animate-slide-in-left">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500 animate-glow"></div>
                  <div className="relative">
                    <img 
                      src={profilePhoto} 
                      alt="Safaa Rhazouli - Ingénieure en Transformation Digitale"
                      className="rounded-2xl w-full h-auto shadow-elevated object-cover aspect-[3/4] ring-4 ring-background"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>

              {/* Texte de présentation */}
              <div className="space-y-4 animate-slide-in-right">
                <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
                  {aboutText.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                
                {/* Badges de compétences clés */}
                <div className="flex flex-wrap gap-2 pt-4">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
                    React & Node.js
                  </span>
                  <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium hover:bg-accent/20 transition-colors">
                    Data Analytics
                  </span>
                  <span className="px-4 py-2 bg-tech-blue/10 text-tech-blue rounded-full text-sm font-medium hover:bg-tech-blue/20 transition-colors">
                    IoT & MQTT
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
