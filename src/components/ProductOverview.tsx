import { CheckCircle2 } from "lucide-react";
import productMockup from "@/assets/product-dashboard-mockup.png";

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
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-lg">
            <img 
              src={productMockup} 
              alt="Mobile-first silent auction dashboard showing real-time bidding interface"
              className="w-full h-full object-cover"
            />
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
