import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Sparkles, Loader2 } from "lucide-react";

interface PromptEditorProps {
  onGenerate: (prompt: string) => void;
  isGenerating: boolean;
}

const PromptEditor = ({ onGenerate, isGenerating }: PromptEditorProps) => {
  const [prompt, setPrompt] = useState("");

  const handleGenerate = () => {
    if (prompt.trim() && !isGenerating) {
      onGenerate(prompt);
    }
  };

  const templatePrompts = [
    "Crea una landing page para una startup tecnológica",
    "Desarrolla un dashboard de analytics con gráficos",
    "Diseña una app de tareas pendientes minimalista",
    "Construye un portfolio personal moderno",
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold">Describe tu aplicación</h2>
      </div>
      
      <div className="space-y-3">
        <Textarea
          placeholder="Describe la aplicación que quieres crear... Por ejemplo: 'Crea una tienda online para vender ropa con carrito de compras y sistema de pagos'"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="min-h-[120px] resize-none"
          disabled={isGenerating}
        />
        
        <div className="flex flex-wrap gap-2">
          {templatePrompts.map((template, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => setPrompt(template)}
              disabled={isGenerating}
              className="text-xs"
            >
              {template}
            </Button>
          ))}
        </div>
        
        <Button
          onClick={handleGenerate}
          disabled={!prompt.trim() || isGenerating}
          className="w-full"
          variant="gradient"
          size="lg"
        >
          {isGenerating ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Generando aplicación...
            </>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              Generar Aplicación
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default PromptEditor;