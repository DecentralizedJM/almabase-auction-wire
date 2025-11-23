import { FileText, TrendingDown, FileWarning } from "lucide-react";

const problems = [
  {
    icon: FileText,
    title: "Paper bid sheets",
    description: "Crowding, cheating, and manual tallying eat up staff time and reduce accuracy.",
  },
  {
    icon: TrendingDown,
    title: "Slow checkout & walk-aways",
    description: "Winners leave without paying, creating revenue leakage and reconciliation headaches.",
  },
  {
    icon: FileWarning,
    title: "No automation",
    description: "Tax receipting, donor crediting, and RE NXT reconciliation are all manual processes.",
  },
];

export const ProblemSection = () => {
  return (
    <section className="section-container bg-trust-bg/50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Silent auctions today are operational nightmares.
        </h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {problems.map((problem, index) => (
          <div 
            key={index}
            className="bg-card border border-trust-border rounded-xl p-8 space-y-4 hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
              <problem.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">{problem.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
