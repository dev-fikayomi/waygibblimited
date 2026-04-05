import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AppShowcase from "@/components/sections/AppShowcase";
import ContactSection from "@/components/sections/ContactSection";
import WhatWeSellContent from "@/components/sections/WhatWeSellContent";

export const metadata: Metadata = {
  title: "What We Sell | Way Gibb",
  description:
    "Premium frozen foods, fresh meat, and meat sharing & bulk purchase programmes—delivered with the same sourcing and logistics standards as Way Gibb.",
};

export default function WhatWeSellPage() {
  return (
    <div className="flex min-h-screen w-full min-w-0 max-w-full flex-col overflow-x-clip">
      <Header />
      <main className="min-w-0 w-full max-w-full flex-grow overflow-x-clip">
        <WhatWeSellContent />
        <AppShowcase />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
