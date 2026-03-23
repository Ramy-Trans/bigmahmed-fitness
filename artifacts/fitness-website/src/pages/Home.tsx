import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { Transformations } from "@/components/Transformations";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { LeadForm } from "@/components/LeadForm";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="w-full bg-background min-h-screen text-foreground">
      <Navbar />
      <Hero />
      <SocialProof />
      <Transformations />
      <Features />
      <HowItWorks />
      <About />
      <Pricing />
      <Testimonials />
      <LeadForm />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
