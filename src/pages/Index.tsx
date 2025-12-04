import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Technology } from "@/components/Technology";
import { Services } from "@/components/Services";
import { Results } from "@/components/Results";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Technology />
      <Services />
      <Results />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
