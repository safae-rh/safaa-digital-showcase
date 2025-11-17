import { personalInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Code2, Database, Zap } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.75), rgba(30, 58, 138, 0.5), rgba(0, 0, 0, 0.85)), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-pulse"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10 pt-20">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 text-sm font-medium mb-4">
            <Sparkles size={16} className="text-primary" />
            <span>Ingénieure en Transformation Digitale</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-primary/90 to-white bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>
          
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {personalInfo.title}
              </span>
            </h2>
            <p className="text-2xl md:text-3xl font-medium text-white/90">
              {personalInfo.subtitle}
            </p>
          </div>

          <p className="text-xl md:text-2xl text-white/80 italic max-w-3xl mx-auto mt-8 leading-relaxed">
            « {personalInfo.tagline} »
          </p>

          {/* Tech stack icons */}
          <div className="flex items-center justify-center gap-6 mt-8 opacity-70">
            <div className="flex items-center gap-2 text-white/80">
              <Code2 size={24} />
              <span className="text-sm font-medium">React & Node.js</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/40"></div>
            <div className="flex items-center gap-2 text-white/80">
              <Database size={24} />
              <span className="text-sm font-medium">Data Analytics</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/40"></div>
            <div className="flex items-center gap-2 text-white/80">
              <Zap size={24} />
              <span className="text-sm font-medium">IoT & AI</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mt-12">
            <Button 
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group relative bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-2xl transition-all hover:scale-105 px-8 py-6 text-lg font-semibold overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Voir mes projets
                <ArrowDown className="group-hover:translate-y-1 transition-transform" size={20} />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="group bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 shadow-xl transition-all hover:scale-105 px-8 py-6 text-lg font-semibold"
            >
              <span className="relative z-10">Me contacter</span>
            </Button>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-all animate-bounce group"
          aria-label="Scroll to about section"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">Découvrir</span>
            <ArrowDown size={32} />
          </div>
        </button>
      </div>
    </section>
  );
};
