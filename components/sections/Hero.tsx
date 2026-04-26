"use client";

import Image from "next/image";
import { useState } from "react";
import PreOrderModal from "../modals/PreOrderModal";

export default function Hero() {
  const [isPreOrderOpen, setIsPreOrderOpen] = useState(false);

  return (
    <section className="relative flex min-h-[85svh] w-full min-w-0 max-w-full items-center overflow-hidden">
      {/* Background image layer */}
      <div className="absolute inset-0 z-0 min-w-0">
        <Image
          src="/images/hero.png"
          alt="Way Gibb Industrial Hero"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay to darken/tint background for better glass contrast */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Content container */}
      <div className="container relative z-10 mx-auto flex w-full min-w-0 max-w-full items-center px-4 py-16 sm:py-20 lg:py-24 sm:px-6 md:px-8">
        {/* Glass card — the card itself is the glass element */}
        <div
          className="relative w-full max-w-2xl translate-y-4 sm:translate-x-4 sm:translate-y-8 md:translate-x-10 lg:translate-x-20"
          style={{
            /* Fallback for environments where Tailwind backdrop-blur may not work */
          }}
        >
          {/* Glass panel */}
          <div
            className="rounded-2xl sm:rounded-3xl px-6 py-8 sm:px-10 sm:py-12 md:px-14 md:py-14"
            style={{
              background: "rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              boxShadow:
                "0 8px 32px 0 rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255,255,255,0.3)",
            }}
          >
            <div className="text-white">
              {/* Eyebrow label */}
              <div
                className="mb-3 flex w-full justify-between text-[10px] font-bold uppercase text-white/80 sm:mb-4 sm:text-xs tracking-[0.25em]"
                data-aos="fade-down"
                data-aos-duration="700"
                data-aos-delay="100"
                aria-label="DELIVERED RELIABLY"
              >
                {"DELIVERED RELIABLY".split("").map((char, index) => (
                  <span
                    key={index}
                    aria-hidden="true"
                    className={char === " " ? "w-2 sm:w-3 md:w-4" : ""}
                  >
                    {char}
                  </span>
                ))}
              </div>

              {/* Heading */}
              <h1
                className="mb-5 max-w-full break-words font-sans text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                Premium Food &{" "}
                <br className="hidden sm:inline" />
                Building Materials
              </h1>

              {/* Description */}
              <p
                className="mb-5 max-w-sm text-sm font-medium leading-relaxed text-white/85 sm:mb-6 sm:max-w-lg sm:text-base md:text-lg"
                data-aos="fade-up"
                data-aos-duration="750"
                data-aos-delay="320"
              >
                Waygibb Ltd supplies high-quality meat, poultry, and construction
                materials directly to customers through a seamless ordering system
                with instant delivery or scheduled pre-orders.
              </p>

              {/* Italic tagline */}
              <p
                className="mb-8 max-w-xs text-xs font-semibold italic leading-relaxed text-white/70 sm:mb-10 sm:max-w-md sm:text-sm"
                data-aos="fade-up"
                data-aos-duration="750"
                data-aos-delay="420"
              >
                We don&apos;t connect you to suppliers — we supply you directly and
                deliver to your doorstep.
              </p>

              {/* CTA buttons */}
              <div
                className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
                data-aos="fade-up"
                data-aos-duration="750"
                data-aos-delay="520"
              >
                <button
                  type="button"
                  className="w-full rounded-xl bg-white px-8 py-3 text-sm font-bold text-[#E53935] shadow-lg transition-all hover:bg-zinc-100 hover:shadow-white/20 active:scale-95 sm:w-auto sm:px-10 sm:py-3.5 sm:text-base cursor-pointer"
                >
                  Order via App
                </button>
                <button
                  type="button"
                  onClick={() => setIsPreOrderOpen(true)}
                  className="w-full rounded-xl border border-white/30 bg-[#1E1A4B]/70 px-8 py-3 text-sm font-bold text-white shadow-lg backdrop-blur-sm transition-all hover:bg-[#1E1A4B]/90 active:scale-95 sm:w-auto sm:px-10 sm:py-3.5 sm:text-base cursor-pointer"
                >
                  Schedule a Pre-Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PreOrderModal isOpen={isPreOrderOpen} onClose={() => setIsPreOrderOpen(false)} />
    </section>
  );
}
