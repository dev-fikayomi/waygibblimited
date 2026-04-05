import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Way Gibb Ltd",
  description: "Get in touch with Way Gibb Ltd for any questions, remarks, or support.",
};

const HERO_IMAGE = "/images/about-waygibb.jpg";

export default function ContactUsPage() {
  return (
    <div className="flex min-h-screen w-full min-w-0 max-w-full flex-col overflow-x-clip bg-white">
      <Header />
      
      <main className="min-w-0 w-full max-w-full flex-grow overflow-x-clip bg-neutral-100">
        {/* Hero Section */}
        <section
          className="relative flex min-h-[min(45vh,350px)] w-full min-w-0 items-center justify-center overflow-hidden sm:min-h-[min(50vh,400px)] md:min-h-[min(55vh,480px)]"
          aria-labelledby="contact-us-hero-heading"
        >
          <div className="absolute inset-0 z-0 min-w-0">
            <Image
              src={HERO_IMAGE}
              alt="Way Gibb warehouse and logistics"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            {/* Deep purple gradient overlay mapping to the screenshot */}
            <div className="absolute inset-0 bg-[#3b1578]/55" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3b1578]/50 via-transparent to-[#3b1578]/20" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3b1578]/20 to-[#3b1578]/90" />
          </div>

          <div className="relative z-10 w-full min-w-0 px-4 py-16 text-center sm:px-6 sm:py-20 md:py-24">
            <h1
              id="contact-us-hero-heading"
              className="text-3xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-4xl md:text-5xl lg:text-6xl"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Contact Us/ FAQs
            </h1>
            <p
              className="mx-auto mt-3 max-w-2xl text-sm font-semibold text-white/95 sm:mt-5 sm:text-base md:text-lg"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="80"
            >
              Any question or remarks? Just write us a message!
            </p>
          </div>
        </section>

        {/* Global Contact Component */}
        {/* ContactSection inherently provides the Form, Tabs structure, and bg-neutral-100 matching perfectly! */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
