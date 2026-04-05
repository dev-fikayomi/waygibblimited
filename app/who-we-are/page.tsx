import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AppShowcase from "@/components/sections/AppShowcase";
import ContactSection from "@/components/sections/ContactSection";
import WhoWeAreContent from "@/components/sections/WhoWeAreContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Are | Way Gibb Ltd",
  description: "Learn more about Way Gibb Ltd, a supply and distribution company focused on delivering essential goods directly to customers.",
};

export default function WhoWeArePage() {
  return (
    <div className="flex min-h-screen w-full min-w-0 max-w-full flex-col overflow-x-clip bg-white">
      <Header />
      <main className="min-w-0 w-full max-w-full flex-grow overflow-x-clip">
        <WhoWeAreContent />
        <AppShowcase />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
