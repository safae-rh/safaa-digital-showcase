import { personalInfo } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Download, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground animate-fade-in">
            Contact
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Prêt à collaborer ? N'hésitez pas à me contacter pour discuter de vos projets
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-elevated bg-gradient-card border-border/50 hover:shadow-2xl transition-all duration-500">
          <CardContent className="p-8 md:p-12">
            <div className="text-center space-y-10">

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="group flex flex-col items-center gap-4 p-6 rounded-xl hover:bg-gradient-to-br hover:from-primary/10 hover:to-primary/5 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative p-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
                      <Mail className="text-primary" size={28} />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-foreground mb-1">Email</div>
                    <div className="text-sm text-foreground/70 break-all">{personalInfo.email}</div>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="group flex flex-col items-center gap-4 p-6 rounded-xl hover:bg-gradient-to-br hover:from-primary/10 hover:to-primary/5 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative p-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
                      <Phone className="text-primary" size={28} />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-foreground mb-1">Téléphone</div>
                    <div className="text-sm text-foreground/70">{personalInfo.phone}</div>
                  </div>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-4 p-6 rounded-xl hover:bg-gradient-to-br hover:from-primary/10 hover:to-primary/5 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative p-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
                      <Linkedin className="text-primary" size={28} />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-foreground mb-1">LinkedIn</div>
                    <div className="text-sm text-foreground/70">Voir mon profil</div>
                  </div>
                </a>

                <div className="flex flex-col items-center gap-4 p-6 rounded-xl border border-border/50">
                  <div className="p-4 rounded-full bg-gradient-to-br from-accent/20 to-accent/10">
                    <MapPin className="text-accent" size={28} />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-foreground mb-1">Localisation</div>
                    <div className="text-sm text-foreground/70">{personalInfo.location}</div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a href={personalInfo.cvPath} download>
                  <Button 
                    size="lg"
                    className="group relative bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-xl transition-all hover:scale-105 px-8 py-6 text-lg font-semibold overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Download className="group-hover:translate-y-1 transition-transform" size={20} />
                      Télécharger mon CV
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
