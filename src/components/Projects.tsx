import { projects } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Target, Wrench, TrendingUp } from "lucide-react";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground animate-fade-in">
          Projets
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Découvrez mes réalisations en développement et transformation digitale
        </p>

        <div className="max-w-6xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="shadow-soft hover:shadow-elevated transition-all bg-gradient-card border-border/50 overflow-hidden"
            >
              <div className="border-l-4 border-primary">
                <CardHeader className="bg-primary/5">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2 text-foreground">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {project.context}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="ml-4 border-primary/30 text-primary">
                      Projet {index + 1}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="pt-6 space-y-6">
                  {/* Mission */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-foreground">
                      <Target className="text-primary" size={20} />
                      <h4 className="font-semibold">Mission</h4>
                    </div>
                    <p className="text-foreground/80 pl-7">{project.mission}</p>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-foreground">
                      <Wrench className="text-primary" size={20} />
                      <h4 className="font-semibold">Technologies</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-7">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-foreground">
                      <CheckCircle2 className="text-accent" size={20} />
                      <h4 className="font-semibold">Résultats</h4>
                    </div>
                    <ul className="space-y-2 pl-7">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start gap-2 text-foreground/80">
                          <CheckCircle2 className="text-accent mt-0.5 flex-shrink-0" size={16} />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                    <div className="flex items-start gap-2">
                      <TrendingUp className="text-accent mt-0.5 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Impact</h4>
                        <p className="text-foreground/80">{project.impact}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
