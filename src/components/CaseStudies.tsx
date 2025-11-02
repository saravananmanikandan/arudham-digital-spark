import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

const caseStudies = [
  {
    title: "Digital Transformation for Leading Bank",
    industry: "Banking",
    description: "Modernized legacy systems and implemented cloud-native solutions, resulting in 40% faster transaction processing.",
    metrics: ["40% Faster Processing", "99.9% Uptime", "3M+ Transactions Daily"],
    color: "border-l-primary",
  },
  {
    title: "E-commerce Platform for Retail Chain",
    industry: "Retail",
    description: "Built a scalable e-commerce platform that handles peak traffic seamlessly during sale events.",
    metrics: ["300% Traffic Increase", "50K+ Daily Orders", "4.8★ Customer Rating"],
    color: "border-l-secondary",
  },
  {
    title: "Travel Booking System Overhaul",
    industry: "Travel",
    description: "Created an intuitive booking system with real-time inventory management and multi-currency support.",
    metrics: ["25% Booking Increase", "15 Countries", "500K+ Bookings/Month"],
    color: "border-l-accent",
  },
];

const CaseStudies = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-[Poppins] mb-4">
            Success <span className="text-accent">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results for real businesses. See how we've helped organizations transform and grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card 
              key={index} 
              className={`border-l-4 ${study.color} hover:shadow-2xl transition-all duration-300 animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <Badge className="w-fit mb-2" variant="secondary">{study.industry}</Badge>
                <CardTitle className="text-xl font-[Poppins]">{study.title}</CardTitle>
                <CardDescription className="text-base">{study.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <span className="font-medium">{metric}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
