"use client";

import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE = "/images/about-waygibb.jpg";
const SERVICE_IMAGE = "/images/how-we-service.png";
const PLACEHOLDER_1 = "/images/order.png";
const PLACEHOLDER_2 = "/images/order-scheduling.png";
const PLACEHOLDER_3 = "/images/controlled.png  "; // Processing & Packaging
const PLACEHOLDER_4 = "/images/delivery.png"; // Delivery

export default function WhatWeDoContent() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex min-h-[min(45vh,350px)] w-full min-w-0 items-center justify-center overflow-hidden sm:min-h-[min(50vh,400px)] md:min-h-[min(55vh,480px)]"
        aria-labelledby="what-we-do-hero-heading"
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
          <div className="absolute inset-0 bg-[#3b1578]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3b1578]/50 via-transparent to-[#3b1578]/20" />
        </div>

        <div className="relative z-10 w-full min-w-0 px-4 py-16 text-center sm:px-6 sm:py-20">
          <h1
            id="what-we-do-hero-heading"
            className="text-3xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-4xl md:text-5xl lg:text-5xl"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            What We do
          </h1>
          <p
            className="mx-auto mt-2 max-w-2xl text-sm font-semibold text-white/95 sm:mt-3 sm:text-base"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="80"
          >
            How We Service
          </p>
        </div>
      </section>

      <section className="w-full bg-[#fbf9fe] py-14 sm:py-20 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1100px]">
          
          {/* How we Service Block */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-24 lg:mb-32">
            <div 
              className="lg:w-1/2 flex flex-col pt-4 lg:pt-0 lg:pr-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold tracking-tight text-[#3b1578] mb-5 leading-tight">
                How we Service at<br/> WayGibb Ltd.
              </h2>
              
              <div className="text-neutral-700 text-sm sm:text-[15px] leading-relaxed space-y-4">
                <p>
                  At Waygibb Ltd. every order follows a closely defined process designed to ensure accuracy, quality, and timely delivery. From the moment you place your order to final delivery, you maintain full control at every stage.
                </p>
                <p>
                  At Waygibb Ltd. every order follows a closely defined process designed to ensure accuracy, quality, and timely delivery.
                </p>
                <p>
                  From the moment you place your order to final delivery, you maintain full control at every stage.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#"
                  className="bg-[#e94541] hover:bg-[#d83f3b] transition-colors text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg"
                >
                  Download App
                </Link>
                <Link
                  href="/#contact"
                  className="bg-[#3b1578] hover:bg-[#321266] transition-colors text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            
            <div 
              className="lg:w-1/2 relative flex justify-center lg:justify-end"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div className="relative w-[300px] sm:w-[400px] lg:w-[450px] aspect-square lg:aspect-auto lg:h-[450px]">
                <Image 
                  src={SERVICE_IMAGE} 
                  fill 
                  className="object-contain lg:object-right" 
                  alt="Way Gibb Services Collage" 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Stepper Flow container */}
          <div className="flex flex-col gap-24 lg:gap-32 w-full">

            {/* Block 1: Order Placement */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start" data-aos="fade-up" data-aos-duration="800">
              <div className="w-full lg:w-1/2 flex flex-col gap-5">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#3b1578]">Order Placement</h3>
                <div className="relative aspect-video sm:aspect-[2/1] lg:aspect-video w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                  <Image src={PLACEHOLDER_1} fill className="object-cover" alt="Order Placement image"/>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pt-14 xl:pt-16 lg:pl-4">
                <h4 className="text-sm font-bold text-[#1a1a1a] tracking-wider mb-4">START YOUR ORDER WITH EASE</h4>
                <p className="text-neutral-600 text-[13px] sm:text-sm leading-relaxed mb-4">
                  Placing an order with Waygibb Ltd is simple, fast, and straightforward. Master your app for ... From the opening bar screen to building out complex lists, securing exactly what you need is handled seamlessly, assuring peace of mind while creating orders ... giving a platform seamlessly mapping features effortlessly to your goals keeping users in full control...
                </p>
                <p className="text-neutral-600 text-[13px] sm:text-sm leading-relaxed">
                  Placing an order with WayGibb Ltd is simple, fast, and straightforward. Master your app for ... From the opening bar screen to building out complex lists, securing exactly what you need is handled seamlessly, assuring peace of mind while creating orders.
                </p>
              </div>
            </div>

            {/* Block 2: Order Scheduling */}
            <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 items-center lg:items-start" data-aos="fade-up" data-aos-duration="800">
               <div className="w-full lg:w-1/2 flex flex-col gap-5">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#3b1578]">Order Scheduling</h3>
                <div className="relative aspect-video sm:aspect-[2/1] lg:aspect-video w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                  <Image src={PLACEHOLDER_2} fill className="object-cover" alt="Order Scheduling image"/>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pt-14 xl:pt-16 lg:pr-4">
                <h4 className="text-sm font-bold text-[#1a1a1a] tracking-wider mb-4">START YOUR ORDER WITH EASE</h4>
                <p className="text-neutral-600 text-[13px] sm:text-sm leading-relaxed mb-4">
                  Placing an order with Waygibb Ltd is simple, fast, and straightforward. Master your app for ... From the opening bar screen to building out complex lists, securing exactly what you need is handled seamlessly, assuring peace of mind while creating orders ... giving a platform seamlessly mapping features effortlessly to your goals keeping users in full control...
                </p>
                <p className="text-neutral-600 text-[13px] sm:text-sm leading-relaxed">
                  Placing an order with WayGibb Ltd is simple, fast, and straightforward. Master your app for ... From the opening bar screen to building out complex lists, securing exactly what you need is handled seamlessly, assuring peace of mind while creating orders.
                </p>
              </div>
            </div>

            {/* Block 3: Processing & Packaging */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start" data-aos="fade-up" data-aos-duration="800">
               <div className="w-full lg:w-1/2 flex flex-col gap-5">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#3b1578]">Processing &amp; Packaging</h3>
                <div className="relative aspect-video sm:aspect-[2/1] lg:aspect-video w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                  <Image src={PLACEHOLDER_3} fill className="object-cover" alt="Processing and Packaging image"/>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pt-14 xl:pt-16 lg:pl-4">
                <h4 className="text-sm font-bold text-[#1a1a1a] tracking-wider mb-4">START YOUR ORDER WITH EASE</h4>
                <p className="text-neutral-600 text-[13px] sm:text-sm leading-relaxed mb-4">
                  Placing an order with Waygibb Ltd is simple, fast, and straightforward. Master your app for ... From the opening bar screen to building out complex lists, securing exactly what you need is handled seamlessly, assuring peace of mind while creating orders ... giving a platform seamlessly mapping features effortlessly to your goals keeping users in full control...
                </p>
                <p className="text-neutral-600 text-[13px] sm:text-sm leading-relaxed">
                  Placing an order with WayGibb Ltd is simple, fast, and straightforward. Master your app for ... From the opening bar screen to building out complex lists, securing exactly what you need is handled seamlessly, assuring peace of mind while creating orders.
                </p>
              </div>
            </div>

            {/* Block 4: Delivery */}
             <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 items-center lg:items-start" data-aos="fade-up" data-aos-duration="800">
               <div className="w-full lg:w-1/2 flex flex-col gap-5">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#3b1578]">Delivery</h3>
                <div className="relative aspect-video sm:aspect-[2/1] lg:aspect-video w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                   <Image src={PLACEHOLDER_4} fill className="object-cover" alt="Delivery image"/>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pt-14 xl:pt-16 lg:pr-4">
                <h4 className="text-sm font-bold text-[#1a1a1a] tracking-wider mb-4">START YOUR ORDER WITH EASE</h4>
                <p className="text-neutral-600 text-[13px] sm:text-sm leading-relaxed mb-4">
                  Placing an order with Waygibb Ltd is simple, fast, and straightforward. Master your app for ... From the opening bar screen to building out complex lists, securing exactly what you need is handled seamlessly, assuring peace of mind while creating orders ... giving a platform seamlessly mapping features effortlessly to your goals keeping users in full control...
                </p>
                <p className="text-neutral-600 text-[13px] sm:text-sm leading-relaxed">
                  Placing an order with WayGibb Ltd is simple, fast, and straightforward. Master your app for ... From the opening bar screen to building out complex lists, securing exactly what you need is handled seamlessly, assuring peace of mind while creating orders.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
