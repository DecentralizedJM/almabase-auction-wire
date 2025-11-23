import { TrendingUp, ShieldCheck, Zap, Target } from "lucide-react";

const values = [
  {
    icon: TrendingUp,
    title: "Increase bids with real-time digital bidding",
    description: "Keep guests engaged with instant notifications and competitive bidding pressure.",
  },
  {
    icon: ShieldCheck,
    title: "Eliminate walk-aways via instant auto-pay",
    description: "Winners are charged automatically at close. No manual follow-up required.",
  },
  {
    icon: Zap,
    title: "Cut checkout time from 45 minutes to 45 seconds",
    description: "Staff can focus on the event instead of processing payments and receipts.",
  },
  {
    icon: Target,
    title: "Guarantee accounting accuracy with RE NXT-native workflows",
    description: "Donor crediting, tax receipting, and reconciliation happen automatically.",
  },
];

export const ValueProposition = () => {
  return (
    <section className="section-container bg-secondary/30">
      <div className="grid md:grid-cols-2 gap-8">
        {values.map((value, index) => (
          <div 
            key={index}
            className="bg-card border border-border rounded-2xl p-8 space-y-4 hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] flex items-center justify-center">
              <value.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-semibold">{value.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
