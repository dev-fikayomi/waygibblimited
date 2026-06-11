import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhatWeOffer from "@/components/sections/WhatWeOffer";
import AboutSection from "@/components/sections/AboutSection";
import WhatWeDo from "@/components/sections/WhatWeDo";
import HowWeService from "@/components/sections/HowWeService";
import AppShowcase from "@/components/sections/AppShowcase";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full min-w-0 max-w-full flex-col overflow-x-clip">
      <Header />
      <main className="min-w-0 w-full max-w-full flex-grow overflow-x-clip">
        <Hero />
        <WhatWeOffer />
        <AboutSection />
        <WhatWeDo />
        <HowWeService />
        <AppShowcase />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
 