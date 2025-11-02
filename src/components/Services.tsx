import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Lightbulb, Headphones, Cog } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Product Engineering",
    description: "Build scalable, robust products from concept to launch with our expert engineering team.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Cog,
    title: "Custom Solutions",
    description: "Tailored software solutions designed specifically for your unique business challenges.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Lightbulb,
    title: "Consulting Services",
    description: "Strategic technology consulting to help you make informed decisions and drive innovation.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Headphones,
    title: "Support Services",
    description: "Comprehensive support and maintenance to keep your systems running smoothly 24/7.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const Services = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-[Poppins] mb-4">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology services designed to accelerate your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-14 h-14 ${service.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-7 w-7 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-[Poppins]">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
