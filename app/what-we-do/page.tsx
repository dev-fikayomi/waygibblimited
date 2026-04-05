import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import WhatWeDoContent from "@/components/sections/WhatWeDoContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Do | Way Gibb Ltd",
  description: "Learn how we service our clients. Every order follows a closely defined process designed to ensure accuracy, quality, and timely delivery.",
};

export default function WhatWeDoPage() {
  return (
    <div className="flex min-h-screen w-full min-w-0 max-w-full flex-col overflow-x-clip bg-white">
      <Header />
      <main className="min-w-0 w-full max-w-full flex-grow overflow-x-clip">
        <WhatWeDoContent />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
