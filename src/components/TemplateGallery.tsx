import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, 
  BarChart3, 
  Calendar, 
  Users, 
  FileText, 
  Camera,
  Play
} from "lucide-react";

interface Template {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  prompt: string;
}

interface TemplateGalleryProps {
  onSelectTemplate: (prompt: string) => void;
}

const templates: Template[] = [
  {
    id: "ecommerce",
    name: "Tienda Online",
    description: "Plataforma completa de comercio electrónico con carrito y pagos",
    icon: <ShoppingCart className="h-6 w-6" />,
    tags: ["E-commerce", "Pagos", "Inventario"],
    prompt: "Crea una tienda online completa con catálogo de productos, carrito de compras, sistema de pagos con Stripe, gestión de inventario y panel de administración"
  },
  {
    id: "analytics",
    name: "Dashboard Analytics",
    description: "Panel de control con métricas y visualización de datos",
    icon: <BarChart3 className="h-6 w-6" />,
    tags: ["Analytics", "Gráficos", "Métricas"],
    prompt: "Desarrolla un dashboard de analytics con gráficos interactivos, KPIs en tiempo real, filtros de fecha y exportación de reportes en PDF"
  },
  {
    id: "booking",
    name: "Sistema de Reservas",
    description: "Plataforma para gestionar citas y reservas online",
    icon: <Calendar className="h-6 w-6" />,
    tags: ["Reservas", "Calendario", "Notificaciones"],
    prompt: "Construye un sistema de reservas con calendario interactivo, notificaciones por email, gestión de disponibilidad y confirmación automática"
  },
  {
    id: "crm",
    name: "CRM Empresarial",
    description: "Gestión de relaciones con clientes y ventas",
    icon: <Users className="h-6 w-6" />,
    tags: ["CRM", "Ventas", "Clientes"],
    prompt: "Crea un CRM completo con gestión de leads, pipeline de ventas, seguimiento de clientes y reporting de ventas"
  },
  {
    id: "blog",
    name: "Blog Profesional",
    description: "Plataforma de contenido con editor y comentarios",
    icon: <FileText className="h-6 w-6" />,
    tags: ["Blog", "CMS", "SEO"],
    prompt: "Desarrolla un blog profesional con editor de contenido, sistema de comentarios, categorías, SEO optimizado y panel de administración"
  },
  {
    id: "portfolio",
    name: "Portfolio Creativo",
    description: "Sitio web para mostrar trabajos y proyectos",
    icon: <Camera className="h-6 w-6" />,
    tags: ["Portfolio", "Galería", "Contacto"],
    prompt: "Diseña un portfolio creativo con galería de proyectos, animaciones suaves, formulario de contacto y diseño responsive"
  }
];

const TemplateGallery = ({ onSelectTemplate }: TemplateGalleryProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Plantillas populares</h2>
        <Button variant="outline" size="sm">
          Ver todas
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((template) => (
          <Card key={template.id} className="p-4 hover:shadow-lg transition-all duration-300 group">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {template.icon}
                </div>
                <h3 className="font-semibold">{template.name}</h3>
              </div>
              
              <p className="text-sm text-muted-foreground line-clamp-2">
                {template.description}
              </p>
              
              <div className="flex flex-wrap gap-1">
                {template.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <Button 
                onClick={() => onSelectTemplate(template.prompt)}
                className="w-full"
                variant="outline"
                size="sm"
              >
                <Play className="h-3 w-3 mr-2" />
                Usar plantilla
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TemplateGallery;