import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="relative bg-gradient-to-b from-background to-foreground/5 py-12 border-t border-border/50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SR</span>
              </div>
              <span className="font-semibold text-foreground">Safaa Rhazouli</span>
            </div>
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Safaa Rhazouli. Tous droits réservés.
            </p>
            <p className="text-sm text-muted-foreground/80">
              Ingénieure en Transformation Digitale • Data & Développement Web
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
