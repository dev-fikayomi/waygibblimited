"use client";

import Image from "next/image";

const HERO_IMAGE = "/images/about-waygibb.jpg";
const FRESH_MEAT_IMAGE = "/images/freshhhhh.png";
const MEAT_SHARING_IMAGE = "/images/meatttt.png";
const BUILDING_MATERIALS_IMAGE = "/images/materials.png";
const ELECTRONICS_IMAGE = "/images/electronics.png";

const PRODUCTS = [
  { name: "Cement", subtitle: "100% Quality", image: "/images/cement.png" },
  { name: "Frozen Fish", subtitle: "In different sizes", image: "/images/forzen-fish.png" },
  { name: "Frozen Chicken", subtitle: "100%", image: "/images/frozen-chicken.png" },
  { name: "Electric Blender", subtitle: "Good Quality", image: "/images/electric blender.png" },
  { name: "Head Phones", subtitle: "Great Quality", image: "/images/head-phones.png" },
  { name: "Rods", subtitle: "Great Quality", image: "/images/rods.png" }
];

export default function WhatWeSellContent() {
  return (
    <>
      <section
        className="relative flex min-h-[min(55vh,420px)] w-full min-w-0 items-center justify-center overflow-hidden sm:min-h-[min(60vh,480px)] md:min-h-[min(65vh,560px)]"
        aria-labelledby="what-we-sell-hero-heading"
      >
        <div className="absolute inset-0 z-0 min-w-0">
          <Image
            src={HERO_IMAGE}
            alt="Way Gibb warehouse, fleet, and distribution facility"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#3b1578]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3b1578]/50 via-transparent to-[#3b1578]/20" />
        </div>

        <div className="relative z-10 w-full min-w-0 px-4 py-16 text-center sm:px-6 sm:py-20 md:py-24">
          <h1
            id="what-we-sell-hero-heading"
            className="text-3xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-4xl md:text-5xl lg:text-6xl"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            What We Sell
          </h1>
          <p
            className="mx-auto mt-4 max-w-2xl text-base font-semibold text-white/95 sm:mt-5 sm:text-lg md:text-xl"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="80"
          >
            Premium Food &amp; Building Materials
          </p>
        </div>
      </section>

      <section
        className="w-full min-w-0 bg-secondary py-10 sm:py-12 lg:py-16"
        aria-labelledby="fresh-meat-heading"
      >
        <div className="container mx-auto max-w-full px-4 sm:px-6">
          <div 
            className="overflow-hidden rounded-2xl border border-zinc-200/60 bg-white shadow-sm sm:rounded-3xl p-6 lg:p-8 xl:p-10"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="grid grid-cols-1 items-stretch gap-8 md:gap-10 lg:grid-cols-2 lg:gap-10 xl:gap-12">
              <div
                className="order-1 flex min-w-0 flex-col justify-center"
              >
                <div className="mb-6 lg:mb-8">
                  <h2
                    id="fresh-meat-heading"
                    className="text-2xl font-extrabold tracking-tight text-[#3b1578] sm:text-3xl lg:text-4xl"
                  >
                    FRESH MEAT
                  </h2>
                  <p className="mt-2 text-base font-medium text-neutral-700 sm:text-lg">
                    Premium Frozen Foods, Preserved to Perfection
                  </p>
                </div>

                <div className="flex-1 rounded-2xl border border-zinc-200 p-6 sm:p-8">
                  <h3 className="mb-4 text-base font-bold text-neutral-900 sm:text-lg">
                    Premium Frozen Foods, Preserved to Perfection
                  </h3>
                  
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-800">
                    <p>
                      Our frozen food products are carefully selected, hygienically processed, and preserved under controlled conditions to maintain freshness, taste, and nutritional value.
                    </p>
                    <p>
                      From storage to delivery, every step is managed to ensure your products arrive in excellent condition. High-quality frozen chicken and turkey, hygienically processed and preserved under strict temperature control — delivered fresh and ready when you need them. Our frozen food products are carefully selected, hygienically processed, and preserved under controlled conditions to maintain freshness, taste, and nutritional value.
                    </p>
                    
                    <div className="pt-2 text-neutral-900">
                      <p className="mb-3 font-bold tracking-widest text-xs sm:text-sm uppercase">WHAT SETS OUR FROZEN FOODS APART</p>
                      <ul className="list-none space-y-2.5 text-neutral-800">
                        <li>Proper cold-chain handling from processing to delivery</li>
                        <li>Hygienic packaging and storage</li>
                        <li>Consistent quality you can trust</li>
                        <li>Reliable availability with pre-order options</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="order-2 flex min-w-0 flex-col"
              >
                <div className="relative h-full min-h-[300px] w-full overflow-hidden rounded-2xl lg:min-h-[400px]">
                  <Image
                    src={FRESH_MEAT_IMAGE}
                    alt="Way Gibb staff with fresh meat, poultry, and delivery logistics"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full min-w-0 bg-secondary pb-10 sm:pb-12 lg:pb-16"
        aria-labelledby="meat-sharing-heading"
      >
        <div className="container mx-auto max-w-full px-4 sm:px-6">
          <div 
            className="overflow-hidden rounded-2xl bg-[#3b1578] shadow-sm sm:rounded-3xl p-6 lg:p-8 xl:p-10 border border-[#3b1578]"
            data-aos="fade-up"
            data-aos-duration="750"
          >
            <div className="grid grid-cols-1 items-stretch gap-8 md:gap-10 lg:grid-cols-2 lg:gap-10 xl:gap-12">
              <div
                className="order-1 flex min-w-0 flex-col"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div className="relative h-full min-h-[300px] w-full overflow-hidden rounded-2xl lg:min-h-full">
                  <Image
                    src={MEAT_SHARING_IMAGE}
                    alt="Community meat sharing at market"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div
                className="order-2 flex min-w-0 flex-col"
                data-aos="fade-up"
                data-aos-duration="850"
                data-aos-delay="100"
              >
                <div className="mb-6 lg:mb-8">
                  <h2
                    id="meat-sharing-heading"
                    className="text-2xl font-extrabold tracking-tight text- sm:text-3xl lg:text-4xl"
                  >
                    MEAT SHARING &amp; BULK PURCHASE
                  </h2>
                  <p className="mt-2 text-base text-white/90 sm:text-lg">
                    Smarter Buying. Better Value. Shared Advantage.
                  </p>
                </div>

                <div className="flex-1 rounded-2xl border border-white/10 p-6 sm:p-8">
                  <h3 className="mb-4 text-base font-bold text-white sm:text-lg">
                    Smarter Buying. Better Value. Shared Advantage.
                  </h3>
                  
                  <div className="space-y-4 text-[15px] leading-relaxed text-white/90">
                    <p>
                      Our meat sharing system is designed to give you access to premium livestock at a more affordable cost through structured group purchasing.
                    </p>
                    <p>
                      Waygibb Ltd manages the entire process — from sourcing to processing and distribution — ensuring fairness, quality, and transparency at every stage. For customers who prefer larger quantities, we offer direct bulk purchase options with the same level of quality control and reliable delivery.
                    </p>
                    <p>
                      Ideal for families, businesses, and events requiring consistent supply.
                    </p>
                    
                    <div className="pt-2">
                      <p className="mb-3 font-bold text-white tracking-widest text-xs sm:text-sm uppercase">HOW IT WORKS</p>
                      <ul className="list-inside list-disc space-y-2 pl-0.5 text-white/90 marker:text-white/60">
                        <li>Customers join a shared purchase plan</li>
                        <li>Once the required number of participants is reached, livestock is sourced</li>
                        <li>The animal is processed under strict hygiene standards</li>
                        <li>Portions are distributed fairly to each participant</li>
                      </ul>
                    </div>
                    
                    <div className="pt-2">
                      <p className="mb-3 font-bold text-white tracking-widest text-xs sm:text-sm uppercase">WHAT YOU BENEFIT</p>
                      <ul className="list-inside list-disc space-y-2 pl-0.5 text-white/90 marker:text-white/60">
                        <li>Reduced cost through shared purchasing</li>
                        <li>Guaranteed quality and controlled processing</li>
                        <li>Transparent and fair portion distribution</li>
                        <li>Reliable delivery without middlemen</li>
                        <li>Flexible participation through scheduled plans</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Sell Products Slider */}
      <section
        className="w-full min-w-0 bg-white py-10 sm:py-12 lg:py-16 overflow-hidden"
        aria-labelledby="what-we-sell-grid-heading"
      >
        <div className="container mx-auto max-w-full px-4 sm:px-6">
          <div className="mb-6 lg:mb-10" data-aos="fade-up">
            <h2
              id="what-we-sell-grid-heading"
              className="text-2xl font-bold text-neutral-900 sm:text-3xl"
            >
              What we Sell
            </h2>
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 20s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="marquee-track">
          {[...PRODUCTS, ...PRODUCTS].map((product, index) => (
            <div
              key={index}
              className="mx-3 sm:mx-4 flex-shrink-0 w-[190px] sm:w-[230px] lg:w-[260px] flex flex-col overflow-hidden rounded-xl bg-zinc-50 border border-zinc-100 shadow-sm"
            >
              <div className="relative aspect-square w-full bg-zinc-100 p-2">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg overflow-hidden"
                  sizes="220px"
                />
              </div>
              <div className="p-3 sm:p-4 bg-zinc-50/50">
                <h3 className="text-sm font-bold text-neutral-900 sm:text-base">{product.name}</h3>
                <p className="mt-0.5 text-xs text-neutral-500">{product.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Building Materials Section */}
      <section
        className="w-full min-w-0 bg-secondary pb-10 sm:pb-12 lg:pb-16"
        aria-labelledby="building-materials-heading"
      >
        <div className="container mx-auto max-w-full px-4 sm:px-6">
          <div 
            className="overflow-hidden rounded-2xl border border-zinc-200/60 bg-white shadow-sm sm:rounded-3xl p-6 lg:p-8 xl:p-10"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="grid grid-cols-1 items-stretch gap-8 md:gap-10 lg:grid-cols-2 lg:gap-10 xl:gap-12">
              <div
                className="order-1 flex min-w-0 flex-col justify-center"
              >
                <div className="mb-6 lg:mb-8">
                  <h2
                    id="building-materials-heading"
                    className="text-2xl font-extrabold tracking-tight text-[#3b1578] sm:text-3xl lg:text-4xl uppercase"
                  >
                    BUILDING MATERIALS
                  </h2>
                  <p className="mt-2 text-base font-medium text-neutral-700 sm:text-lg">
                    Reliable Materials for Strong Foundations
                  </p>
                </div>

                <div className="flex-1 rounded-2xl border border-zinc-200 p-6 sm:p-8">
                  <h3 className="mb-4 text-base font-bold text-neutral-900 sm:text-lg">
                    Reliable Materials for Strong Foundations
                  </h3>
                  
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-800">
                    <p>
                      Waygibb Ltd supplies essential construction materials directly to your site, ensuring consistent quality, stable pricing, and dependable delivery.
                    </p>
                    <p>
                      From sourcing to dispatch, every stage is managed to support your project without delays or uncertainty.
                    </p>
                    <div className="space-y-2">
                      <p><span className="font-semibold text-neutral-900">Sand:</span> Clean, well-sourced sand suitable for a wide range of construction needs — delivered in the right quantity, when you need it.</p>
                      <p><span className="font-semibold text-neutral-900">Granite:</span> Durable, high-quality granite with consistent grading, ideal for structural strength and long-lasting results.</p>
                      <p><span className="font-semibold text-neutral-900">Iron Rods:</span> Reliable, quality-checked iron rods designed to meet construction standards and provide the strength your project requires.</p>
                    </div>
                    
                    <div className="pt-2 text-neutral-900">
                      <p className="mb-3 font-bold tracking-widest text-xs sm:text-sm uppercase">WHAT SETS OUR MATERIALS APART</p>
                      <ul className="list-inside list-disc space-y-2.5 text-neutral-800 marker:text-neutral-400">
                        <li>Direct supply with no middlemen</li>
                        <li>Consistent quality and verified materials</li>
                        <li>Reliable availability for ongoing projects</li>
                        <li>Timely delivery to your location</li>
                        <li>Flexible ordering with pre-schedule options</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="order-2 flex min-w-0 flex-col"
              >
                <div className="relative h-full min-h-[300px] w-full overflow-hidden rounded-2xl lg:min-h-[400px]">
                  <Image
                    src={BUILDING_MATERIALS_IMAGE}
                    alt="Bags of cement and other building materials stacked high"
                    fill
                    className="object-cover object-center"
                    quality={100}
                    sizes="100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Electronics & Accessories Section */}
      <section
        className="w-full min-w-0 bg-secondary pb-10 sm:pb-12 lg:pb-16"
        aria-labelledby="electronics-heading"
      >
        <div className="container mx-auto max-w-full px-4 sm:px-6">
          <div 
            className="overflow-hidden rounded-2xl bg-[#3b1578] shadow-sm sm:rounded-3xl p-6 lg:p-8 xl:p-10 border border-[#3b1578]"
            data-aos="fade-up"
            data-aos-duration="750"
          >
            <div className="grid grid-cols-1 items-stretch gap-8 md:gap-10 lg:grid-cols-2 lg:gap-10 xl:gap-12">
              <div
                className="order-1 flex min-w-0 flex-col"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div className="relative h-full min-h-[300px] w-full overflow-hidden rounded-2xl bg-white p-4 lg:min-h-full">
                  <Image
                    src={ELECTRONICS_IMAGE}
                    alt="Everyday tech - electronics and accessories"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div
                className="order-2 flex min-w-0 flex-col justify-center"
                data-aos="fade-up"
                data-aos-duration="850"
                data-aos-delay="100"
              >
                <div className="mb-6 lg:mb-8">
                  <h2
                    id="electronics-heading"
                    className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl uppercase"
                  >
                    ELECTRONICS &amp; ACCESSORIES
                  </h2>
                  <p className="mt-2 text-base text-white/90 sm:text-lg">
                    Everyday Tech, Delivered with Convenience
                  </p>
                </div>

                <div className="flex-1 rounded-2xl border border-white/10 p-6 sm:p-8">
                  <h3 className="mb-4 text-base font-bold text-white sm:text-lg">
                    Everyday Tech, Delivered with Convenience
                  </h3>
                  
                  <div className="space-y-4 text-[15px] leading-relaxed text-white/90">
                    <p>
                      As part of our convenience offering, Waygibb Ltd provides a selection of essential electronics and accessories — delivered through the same reliable system you trust.
                    </p>
                    <p>
                      Carefully selected and quality-checked, our products are available to support your everyday needs. Delivered with the same reliability as our core products. Every item is supplied directly and handled with care to ensure a smooth experience.
                    </p>
                    
                    <div className="pt-2">
                      <p className="mb-3 font-bold text-white tracking-widest text-xs sm:text-sm uppercase">WHAT YOU CAN EXPECT</p>
                      <ul className="list-inside list-disc space-y-2.5 pl-0.5 text-white/90 marker:text-white/60">
                        <li>Carefully selected, quality-checked products</li>
                        <li>Convenient access alongside your primary orders</li>
                        <li>Reliable delivery through our trusted system</li>
                        <li>Simple and straightforward ordering process</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
