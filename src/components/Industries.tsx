import { Building2, ShoppingBag, Plane, Palmtree, GraduationCap, Truck } from "lucide-react";

const industries = [
  { icon: Building2, name: "Banking & Finance", color: "from-primary to-primary-dark" },
  { icon: ShoppingBag, name: "Retail & E-commerce", color: "from-secondary to-secondary-light" },
  { icon: Plane, name: "Travel", color: "from-accent to-primary" },
  { icon: Palmtree, name: "Tourism & Hospitality", color: "from-primary to-secondary" },
  { icon: GraduationCap, name: "Education", color: "from-secondary to-accent" },
  { icon: Truck, name: "Logistics", color: "from-accent to-secondary" },
];

const Industries = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-[Poppins] mb-4">
            Industries We <span className="text-secondary">Serve</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deep expertise across multiple sectors to deliver industry-specific solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl p-8 bg-card border border-border hover:border-transparent transition-all duration-300 animate-fade-in-up hover:shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold font-[Poppins] group-hover:text-primary transition-colors">
                    {industry.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
