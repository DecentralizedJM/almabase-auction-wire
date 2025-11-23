import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroMockup from "@/assets/hero-mobile-mockup.png";

export const Hero = () => {
  return (
    <section className="section-container pt-32 md:pt-40">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Silent auctions{" "}
              <span className="gradient-text">without the chaos.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Digital bidding, instant checkout and RE NXT-native reconciliation — all inside Almabase.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="group">
              Request Demo
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              See How It Works
            </Button>
          </div>
        </div>
        
        <div className="relative lg:pl-8">
          <div className="relative z-10 animate-fade-in">
            <img 
              src={heroMockup} 
              alt="Mobile bidding interface showing real-time auction"
              className="w-full max-w-md mx-auto drop-shadow-2xl"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
};
