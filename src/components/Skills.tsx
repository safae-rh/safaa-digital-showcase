import { technicalSkills, softSkills } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Heart } from "lucide-react";

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground animate-fade-in">
          Compétences
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Une expertise technique variée au service de la transformation digitale
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Technical Skills */}
          <Card className="shadow-soft hover:shadow-elevated transition-all bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Code2 className="text-primary" size={28} />
                Compétences Techniques
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {technicalSkills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-foreground mb-3">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="shadow-soft hover:shadow-elevated transition-all bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Heart className="text-accent" size={28} />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="bg-accent/10 text-accent hover:bg-accent/20 transition-colors text-base py-2"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
