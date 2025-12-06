import { FloatingHearts } from "@/components/FloatingHearts";
import { HeroSection } from "@/components/HeroSection";
import { HappyMoments } from "@/components/HappyMoments";
import { WhyYoureAmazing } from "@/components/WhyYoureAmazing";
import { FunCorner } from "@/components/FunCorner";
import { LoveNotes } from "@/components/LoveNotes";
import { HappyForever } from "@/components/HappyForever";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <FloatingHearts />
      <HeroSection />
      <HappyMoments />
      <WhyYoureAmazing />
      <FunCorner />
      <LoveNotes />
      <HappyForever />
      <Footer />
    </div>
  );
};

export default Index;
