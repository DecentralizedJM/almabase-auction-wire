import { CheckCircle2 } from "lucide-react";

const features = [
  "Integrated bidder registration",
  "Real-time bidding + notifications",
  "Mobile browsing of items",
  "Auto checkout & payments",
  "Built-in tax logic & receipting",
  "Seamless RE NXT sync",
];

export const ProductOverview = () => {
  return (
    <section className="section-container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-border">
            <div className="space-y-4">
              <div className="h-8 bg-primary/20 rounded w-3/4" />
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-20 bg-card border border-border/50 rounded-lg shadow-sm" />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-8 order-1 lg:order-2">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              A unified, mobile-first solution built for university advancement teams.
            </h2>
          </div>
          
          <div className="grid gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-feature-icon shrink-0 mt-0.5" />
                <span className="text-lg text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
