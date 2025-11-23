import { Users, FileSpreadsheet, Award } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Staff load drops dramatically on gala night",
    description: "Your team can focus on hospitality instead of managing bid sheets and checkout lines.",
  },
  {
    icon: FileSpreadsheet,
    title: "No spreadsheets for tax or reconciliation",
    description: "Everything flows directly into RE NXT with proper coding and attribution.",
  },
  {
    icon: Award,
    title: "Donor-crediting handled automatically",
    description: "Soft credits, tribute gifts, and recognition levels all process correctly, every time.",
  },
];

export const AdvancementTeams = () => {
  return (
    <section className="section-container bg-trust-bg/50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Purpose-built for Advancement Operations.
        </h2>
        <p className="text-xl text-muted-foreground">
          We understand your workflows because we built this for you
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="bg-card rounded-xl p-8 space-y-4 border border-trust-border hover:border-primary/50 transition-colors"
          >
            <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center">
              <benefit.icon className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-semibold">{benefit.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
