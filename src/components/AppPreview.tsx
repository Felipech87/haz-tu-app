import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Eye, 
  Code, 
  Download, 
  Smartphone, 
  Monitor, 
  Tablet,
  CheckCircle,
  Circle
} from "lucide-react";

interface AppPreviewProps {
  isGenerating: boolean;
  generatedApp: {
    name: string;
    description: string;
    components: string[];
    preview: string;
  } | null;
}

const AppPreview = ({ isGenerating, generatedApp }: AppPreviewProps) => {
  const [selectedDevice, setSelectedDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [generationProgress, setGenerationProgress] = useState(0);

  useEffect(() => {
    if (isGenerating) {
      setGenerationProgress(0);
      const interval = setInterval(() => {
        setGenerationProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [isGenerating]);

  const getDeviceClass = () => {
    switch (selectedDevice) {
      case 'mobile':
        return 'max-w-sm mx-auto';
      case 'tablet':
        return 'max-w-2xl mx-auto';
      default:
        return 'w-full';
    }
  };

  if (isGenerating) {
    return (
      <Card className="p-6 h-full flex flex-col items-center justify-center">
        <div className="text-center space-y-4">
          <div className="relative">
            <div className="h-16 w-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto" />
            <div className="absolute inset-0 h-16 w-16 bg-primary/10 rounded-full blur-xl" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Generando tu aplicación</h3>
            <p className="text-sm text-muted-foreground">
              Creando componentes y estructura...
            </p>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${generationProgress}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground">
              {Math.round(generationProgress)}% completado
            </p>
          </div>
        </div>
      </Card>
    );
  }

  if (!generatedApp) {
    return (
      <Card className="p-6 h-full flex flex-col items-center justify-center">
        <div className="text-center space-y-4">
          <Eye className="h-16 w-16 text-muted-foreground/50 mx-auto" />
          <div>
            <h3 className="text-lg font-semibold text-muted-foreground">
              Vista previa de la aplicación
            </h3>
            <p className="text-sm text-muted-foreground">
              Escribe un prompt para generar tu aplicación
            </p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {/* App Info */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{generatedApp.name}</h3>
          <p className="text-sm text-muted-foreground">{generatedApp.description}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Code className="h-4 w-4 mr-2" />
            Ver Código
          </Button>
          <Button variant="success" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Descargar
          </Button>
        </div>
      </div>

      {/* Device Preview Controls */}
      <div className="flex items-center gap-2">
        <Button
          variant={selectedDevice === 'desktop' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedDevice('desktop')}
        >
          <Monitor className="h-4 w-4" />
        </Button>
        <Button
          variant={selectedDevice === 'tablet' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedDevice('tablet')}
        >
          <Tablet className="h-4 w-4" />
        </Button>
        <Button
          variant={selectedDevice === 'mobile' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedDevice('mobile')}
        >
          <Smartphone className="h-4 w-4" />
        </Button>
      </div>

      {/* Preview Frame */}
      <Card className="p-4">
        <div className={`transition-all duration-300 ${getDeviceClass()}`}>
          <div className="border rounded-lg overflow-hidden bg-background">
            <div 
              className="min-h-[400px] p-6"
              dangerouslySetInnerHTML={{ __html: generatedApp.preview }}
            />
          </div>
        </div>
      </Card>

      {/* Components List */}
      <Card className="p-4">
        <h4 className="font-semibold mb-3 flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-success" />
          Componentes generados
        </h4>
        <div className="flex flex-wrap gap-2">
          {generatedApp.components.map((component, index) => (
            <Badge key={index} variant="secondary" className="flex items-center gap-1">
              <Circle className="h-2 w-2 fill-current" />
              {component}
            </Badge>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default AppPreview;