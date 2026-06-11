import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DeleteAccountForm from "./DeleteAccountForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request to Delete Account | Way Gibb",
  description: "Request the deletion of your Way Gibb application account and associated customer data.",
};

export default function RequestToDeleteAccountPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center bg-[#1E1A4B] py-16 sm:py-24 lg:py-32 overflow-hidden">
          {/* Deep purple gradient matching other content subpages */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#3b1578] to-[#1E1A4B] opacity-90" />
          <div
            className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay"
            aria-hidden
          />
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-4xl md:text-5xl lg:text-6xl">
              Delete Account
            </h1>
          </div>
        </section>

        {/* Form Component */}
        <DeleteAccountForm />
      </main>

      <Footer />
    </div>
  );
}
