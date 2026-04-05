import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy | Way Gibb",
  description: "Privacy policy regarding how Waygibb handles your data, logistics tracking, and app usage.",
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            
          </div>
        </section>

        {/* Legal Content Layout */}
        <section className="container mx-auto px-4 pt-12 sm:px-6 md:pt-16 lg:pt-20">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-neutral-800">
              
              <div className="mb-10 lg:mb-12">
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#1E1A4B] sm:text-3xl">
                  1. Information We Collect
                </h2>
                <div className="space-y-4 text-sm leading-relaxed sm:text-base">
                  <p>
                    Waygibb Ltd builds its logistics around accurate, real-time data. To successfully deliver
                    building materials, fresh meats, and electronics directly to you, we collect data you
                    expressly provide when you register an account on our app, place an order, or
                    participate in our Meat Sharing programs.
                  </p>
                  <p>
                    <strong>Core Logistics Data:</strong> This includes your exact fulfillment address, contact numbers, 
                    and drop-off preferences.
                  </p>
                  <p>
                    <strong>System & Tracking Data:</strong> Our application tracks live GPS status only while 
                    a delivery route is actively associated with your active app session to provide you with ETAs.
                  </p>
                </div>
              </div>

              <div className="mb-10 lg:mb-12">
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#1E1A4B] sm:text-3xl">
                  2. Processing of Payment Data
                </h2>
                <div className="space-y-4 text-sm leading-relaxed sm:text-base">
                  <p>
                    We prioritize financial security. Waygibb Ltd does not store raw credit card numbers or 
                    full bank routing details directly on our operational servers. All transactions are rapidly 
                    tokenized and processed by certified, tier-1 financial gateways. We simply retain 
                    the transaction tokens necessary to issue refunds or verify your Meat Sharing deposits.
                  </p>
                </div>
              </div>

              <div className="mb-10 lg:mb-12">
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#1E1A4B] sm:text-3xl">
                  3. Waygibb Zero-Brokerage Policy
                </h2>
                <div className="space-y-4 text-sm leading-relaxed sm:text-base">
                  <p>
                    Because we control our own processing and logistics channels, we have absolutely no
                    need to outsource your data. <strong>We do not sell, rent, or trade your personal information
                    with third-party marketing brokers.</strong>
                  </p>
                  <p>
                    Your data is solely utilized to execute your purchase operations, keep your
                    app dashboard synchronized, and analyze internal delivery routing efficiency so we
                    can serve you faster. Data may occasionally be shared with vetted processing
                    partners (e.g., slaughterhouse verification networks) strictly on a "need-to-know"
                    basis to satisfy your order.
                  </p>
                </div>
              </div>

              <div className="mb-10 lg:mb-12">
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#1E1A4B] sm:text-3xl">
                  4. Your Privacy Rights
                </h2>
                <div className="space-y-4 text-sm leading-relaxed sm:text-base">
                  <p>
                    You retain full control over your footprint within the Waygibb ecosystem. At any
                    moment via the Waygibb App or dashboard, you may request an export of your
                    delivery history or issue a command to instantly delete your operational account.
                  </p>
                  <p>
                    Note that statutory mandates may require us to retain explicit fiscal transaction histories
                    for tax and compliance auditing even after an account deletion.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border-l-4 border-[#3b1578] bg-neutral-50 px-6 py-5 sm:px-8 sm:py-6">
                <h3 className="mb-2 text-lg font-bold text-[#1E1A4B]">
                  Contact The Compliance Team
                </h3>
                <p className="text-sm italic leading-relaxed text-neutral-600">
                  If you have concerns about app permissions, delivery tracking metrics, or how your 
                  data is structured within the Meat Sharing system, please reach out via our primary 
                  Contact page or send an encrypted inquiry to our designated privacy operational
                  desk (privacy@waygibb.com).
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
