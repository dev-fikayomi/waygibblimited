import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Terms and Conditions | Way Gibb",
  description: "Terms and conditions for using Waygibb's logistics, ordering, and delivery services.",
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1 pb-20">
        {/* Sleek Legal Hero Header */}
        <section className="relative flex items-center justify-center bg-[#1E1A4B] py-16 sm:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#3b1578] to-[#1E1A4B] opacity-90" />
          <div
            className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay"
            aria-hidden
          />
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-4xl md:text-5xl lg:text-6xl">
              Terms & Conditions
            </h1>
          </div>
        </section>

        {/* Legal Content Layout */}
        <section className="container mx-auto px-4 pt-12 sm:px-6 md:pt-16 lg:pt-20">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-neutral-800">
              
              <div className="mb-10 lg:mb-12">
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#1E1A4B] sm:text-3xl">
                  1. Agreement Overview
                </h2>
                <div className="space-y-4 text-sm leading-relaxed sm:text-base">
                  <p>
                    Welcome to Waygibb Ltd ("Company", "we", "our", "us"). These Terms and
                    Conditions ("Terms") automatically govern your use of the Waygibb mobile
                    application, website, and integrated logistic delivery services
                    (collectively, the "Services").
                  </p>
                  <p>
                    By activating an account or scheduling a delivery, you acknowledge that you
                    understand and agree to abide by these Terms. If you do not accept these
                    Terms in their entirety, you must refrain from using the Services.
                  </p>
                </div>
              </div>

              <div className="mb-10 lg:mb-12">
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#1E1A4B] sm:text-3xl">
                  2. Sourcing & Delivery Logistics
                </h2>
                <div className="space-y-4 text-sm leading-relaxed sm:text-base">
                  <p>
                    Waygibb Ltd acts as the primary fulfillment and direct delivery agent. Instead
                    of merely connecting you with third-party vendors, we take absolute
                    responsibility for sourcing, packaging, and securely dropping off the product
                    to your designated address.
                  </p>
                  <p>
                    <strong>Delivery Schedules:</strong> We offer both instant deliveries and
                    scheduled pre-orders. Delivery timestamps are estimates; environmental
                    and traffic conditions may necessitate route adjustment. The Waygibb App
                    will actively update ETAs in real-time.
                  </p>
                  <p>
                    <strong>Acceptance of Delivery:</strong> For fresh produce and bulk
                    building materials, customers or their assigned representatives must be
                    present at drop-off to approve custody unless explicit "leave-at-door"
                    authorization is digitally granted via the App.
                  </p>
                </div>
              </div>

              <div className="mb-10 lg:mb-12">
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#1E1A4B] sm:text-3xl">
                  3. The Meat Sharing System
                </h2>
                <div className="space-y-4 text-sm leading-relaxed sm:text-base">
                  <p>
                    Our exclusive Controlled Bulk System (Meat Sharing) lets consumer groups
                    structure bulk livestock purchases. Once a sharing bracket is funded, the
                    livestock is sourced and professionally processed at standard verified
                    facilities.
                  </p>
                  <p>
                    Participants acknowledge that slight deviations in exact weight distribution
                    may naturally occur due to biological yield formatting, but Waygibb promises
                    transparent scaling. Once processed, your proportional package constitutes
                    a final non-refundable share.
                  </p>
                </div>
              </div>

              <div className="mb-10 lg:mb-12">
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#1E1A4B] sm:text-3xl">
                  4. Payment & Pricing Models
                </h2>
                <div className="space-y-4 text-sm leading-relaxed sm:text-base">
                  <p>
                    All fiat transactions are securely processed through vetted compliance
                    authorities integrated into the Waygibb ecosystem. Prices for building
                    materials, fresh poultry, and electronics may fluctuate due to real-time market
                    dynamics before final checkout completion.
                  </p>
                  <p>
                    Orders are legally binding once the checkout button is pressed, and relevant
                    funds are locked or transferred. Refunds are constrained strictly to scenarios
                    where Waygibb severely breaches fulfillment obligations.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border-l-4 border-[#3b1578] bg-neutral-50 px-6 py-5 sm:px-8 sm:py-6">
                <h3 className="mb-2 text-lg font-bold text-[#1E1A4B]">
                  Standard Clause of Liability
                </h3>
                <p className="text-sm italic leading-relaxed text-neutral-600">
                  To the maximum extent permitted by applicable law, Waygibb Ltd limits liability
                  concerning structural defects in third-party produced electronics or raw building
                  materials beyond the immediate scope of our logistics damage. We guarantee
                  transport security; material warranties remain strictly tied to the originating
                  manufacturer.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
