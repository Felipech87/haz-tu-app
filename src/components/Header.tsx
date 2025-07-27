import { Button } from "@/components/ui/button";
import { Sparkles, Code, Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Sparkles className="h-8 w-8 text-primary animate-glow-pulse" />
              <div className="absolute inset-0 h-8 w-8 bg-primary/20 rounded-full blur-xl" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              HazTuApp
            </h1>
          </div>
        </div>
        
        <nav className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            <Code className="h-4 w-4 mr-2" />
            Plantillas
          </Button>
          <Button variant="ghost" size="sm">
            <Zap className="h-4 w-4 mr-2" />
            Ejemplos
          </Button>
          <Button variant="gradient" size="sm">
            Crear App
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;