import { Quote } from "lucide-react";

const universities = [
  "Stanford University",
  "MIT",
  "Yale University",
  "Duke University",
  "Princeton",
  "Cornell University",
];

export const SocialProof = () => {
  return (
    <section className="section-container">
      <div className="space-y-16">
        <div className="text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            Chosen by 500+ advancement teams
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {universities.map((uni, index) => (
              <div 
                key={index}
                className="flex items-center justify-center h-16 text-foreground/70 font-semibold text-sm hover:opacity-100 transition-opacity"
              >
                {uni}
              </div>
            ))}
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-12 border border-border relative">
            <Quote className="w-12 h-12 text-primary/30 absolute top-8 left-8" />
            <div className="relative z-10 pt-8">
              <p className="text-2xl md:text-3xl font-medium text-foreground mb-8 leading-relaxed">
                This is the first auction system that finally works with our accounting. Everything reconciles perfectly in RE NXT, and our staff can actually enjoy the event.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20" />
                <div>
                  <p className="font-semibold">Director of Advancement Operations</p>
                  <p className="text-sm text-muted-foreground">Leading Research University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
