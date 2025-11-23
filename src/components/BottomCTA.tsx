import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export const BottomCTA = () => {
  return (
    <section className="section-container">
      <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRDMC00IDAgMTAuMjEgMCAxMnMxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAgMThjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0xOCAwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
        
        <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Make your next gala run itself.
          </h2>
          <p className="text-xl md:text-2xl text-white/90">
            Join hundreds of advancement teams who've eliminated auction chaos
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white text-primary hover:bg-white/90 hover:text-primary border-0 shadow-xl"
            >
              <Mail className="mr-2" />
              Request Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary"
            >
              Talk to Sales
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
