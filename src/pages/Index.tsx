import { useState } from "react";
import Header from "@/components/Header";
import PromptEditor from "@/components/PromptEditor";
import AppPreview from "@/components/AppPreview";
import TemplateGallery from "@/components/TemplateGallery";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedApp, setGeneratedApp] = useState<{
    name: string;
    description: string;
    components: string[];
    preview: string;
  } | null>(null);

  const handleGenerate = async (prompt: string) => {
    setIsGenerating(true);
    setGeneratedApp(null);
    
    toast({
      title: "Generando aplicación",
      description: "Esto puede tomar unos minutos...",
    });

    // Simular generación de aplicación
    setTimeout(() => {
      const mockApp = {
        name: "Mi Nueva App",
        description: "Aplicación generada con IA basada en tu prompt",
        components: [
          "Header",
          "Navigation", 
          "Content Area",
          "Sidebar",
          "Footer",
          "Modal Component",
          "Form Validation"
        ],
        preview: `
          <div class="min-h-[400px] bg-gradient-to-br from-purple-50 to-blue-50 p-6">
            <div class="max-w-4xl mx-auto">
              <header class="text-center mb-8">
                <h1 class="text-3xl font-bold text-gray-900 mb-4">Aplicación Generada</h1>
                <p class="text-gray-600">Esta es una vista previa de tu aplicación generada con IA</p>
              </header>
              
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div class="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 class="font-semibold text-lg mb-2">Funcionalidad 1</h3>
                  <p class="text-gray-600 text-sm">Descripción de la primera funcionalidad implementada</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 class="font-semibold text-lg mb-2">Funcionalidad 2</h3>
                  <p class="text-gray-600 text-sm">Descripción de la segunda funcionalidad implementada</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 class="font-semibold text-lg mb-2">Funcionalidad 3</h3>
                  <p class="text-gray-600 text-sm">Descripción de la tercera funcionalidad implementada</p>
                </div>
              </div>
              
              <div class="bg-white p-6 rounded-lg shadow-sm border text-center">
                <h3 class="font-semibold text-lg mb-2">¡Tu aplicación está lista!</h3>
                <p class="text-gray-600 mb-4">Basada en el prompt: "${prompt}"</p>
                <button class="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors">
                  Descargar Código
                </button>
              </div>
            </div>
          </div>
        `
      };
      
      setGeneratedApp(mockApp);
      setIsGenerating(false);
      
      toast({
        title: "¡Aplicación generada!",
        description: "Tu aplicación ha sido creada exitosamente.",
      });
    }, 3000);
  };

  const handleSelectTemplate = (prompt: string) => {
    handleGenerate(prompt);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/40" />
        
        <div className="relative container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            Crea aplicaciones con
            <span className="bg-gradient-primary bg-clip-text text-transparent"> IA</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-slide-up">
            Describe tu idea y nosotros generamos el código completo de tu aplicación web
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="editor" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="editor">Editor de Prompts</TabsTrigger>
            <TabsTrigger value="templates">Plantillas</TabsTrigger>
          </TabsList>
          
          <TabsContent value="editor">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <PromptEditor onGenerate={handleGenerate} isGenerating={isGenerating} />
              </Card>
              
              <div>
                <AppPreview isGenerating={isGenerating} generatedApp={generatedApp} />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="templates">
            <TemplateGallery onSelectTemplate={handleSelectTemplate} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
