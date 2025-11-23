import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { ProductOverview } from "@/components/ProductOverview";
import { ValueProposition } from "@/components/ValueProposition";
import { HowItWorks } from "@/components/HowItWorks";
import { AdvancementTeams } from "@/components/AdvancementTeams";
import { SocialProof } from "@/components/SocialProof";
import { BottomCTA } from "@/components/BottomCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSection />
      <ProductOverview />
      <ValueProposition />
      <HowItWorks />
      <AdvancementTeams />
      <SocialProof />
      <BottomCTA />
    </main>
  );
};

export default Index;
