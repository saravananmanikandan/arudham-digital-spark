import { Target, Users, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "We push boundaries and embrace cutting-edge technologies to deliver exceptional solutions.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Your success is our success. We work alongside you as a trusted technology partner.",
  },
  {
    icon: Zap,
    title: "Excellence",
    description: "We maintain the highest standards in every project, ensuring quality and reliability.",
  },
];

const About = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-[Poppins] mb-6">
              Empowering Businesses Through <span className="text-primary">Smart Technology</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At Arudham, we believe technology should be an enabler, not a barrier. We partner with businesses 
              to transform challenges into opportunities, delivering solutions that drive real growth and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index} 
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-4 shadow-lg">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-[Poppins] mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
