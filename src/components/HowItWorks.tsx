const steps = [
  {
    number: "01",
    title: "Guests browse items & bid on mobile",
    description: "Clean, intuitive interface works on any device. No app downloads needed.",
  },
  {
    number: "02",
    title: "Real-time notifications keep them engaged",
    description: "Instant alerts when outbid. Competitive pressure drives higher final bids.",
  },
  {
    number: "03",
    title: "Winners auto-checkout. Staff stays free.",
    description: "Payments process automatically. Tax receipts generate instantly. Done.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
        <p className="text-xl text-muted-foreground">
          Three simple steps to a stress-free auction night
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
        {/* Connection lines for desktop */}
        <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary -z-10" 
             style={{ width: "calc(100% - 12rem)", left: "6rem" }} />
        
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-bold text-white">{step.number}</span>
                </div>
                <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 -z-10 blur-xl" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
