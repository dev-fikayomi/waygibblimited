"use client";

import AOS from "aos";
import { useEffect, useState } from "react";

type Tab = "contact" | "faq";

const contactRows = [
  {
    title: "Email Us",
    detail: "info@waygibb.com.ng",
    href: "mailto:info@waygibb.com.ng",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Call Us",
    detail: "09017603145",
    href: "tel:09017603145",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Location",
    detail: "Lagos, Lagos Nigeria",
    href: "https://maps.google.com/?q=Lagos+Nigeria",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
] as const;

const faqItems = [
  {
    q: "How do I place an order?",
    a: "Download the Waygibb app or contact us by phone or email. You can choose instant delivery or schedule a pre-order.",
  },
  {
    q: "What areas do you deliver to?",
    a: "We operate across supported zones in Lagos and expand coverage as our logistics network grows. Ask our team for your location.",
  },
  {
    q: "What is meat sharing?",
    a: "Our controlled bulk meat-sharing programme lets groups join a plan with transparent sourcing, processing, and fair portion distribution.",
  },
];

function ArrowCircle() {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors group-hover:border-white/25 group-hover:bg-white/10">
      <svg className="h-4 w-4 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </span>
  );
}

export default function ContactSection() {
  const [tab, setTab] = useState<Tab>("contact");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    queueMicrotask(() => AOS.refresh());
  }, [tab]);

  return (
    <section id="contact" className="bg-neutral-100 pb-10 pt-8 sm:pb-14 sm:pt-10 md:pb-16 md:pt-12 lg:pb-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-8 md:mb-12 md:flex-row md:items-start md:justify-between lg:mb-14">
          <div
            className="max-w-xl"
            data-aos="fade-up"
            data-aos-duration="750"
          >
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl md:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              Have questions, need assistance, or ready to place an order? Our team
              is available to provide clear answers and reliable support at every
              step.
            </p>
          </div>

          <div
            className="flex shrink-0 flex-wrap items-center gap-6 sm:gap-8"
            role="tablist"
            aria-label="Contact section"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="700"
          >
            <button
              type="button"
              role="tab"
              aria-selected={tab === "contact"}
              onClick={() => setTab("contact")}
              className={`text-sm font-semibold transition-colors sm:text-base ${
                tab === "contact"
                  ? "rounded-full border border-amber-400/80 bg-white px-5 py-2.5 text-neutral-900 shadow-sm sm:px-6"
                  : "rounded-full px-5 py-2.5 text-neutral-500 hover:text-neutral-800 sm:px-6"
              }`}
            >
              Contact Us
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === "faq"}
              onClick={() => setTab("faq")}
              className={`text-sm font-semibold transition-colors sm:text-base ${
                tab === "faq"
                  ? "rounded-full border border-amber-400/80 bg-white px-5 py-2.5 text-neutral-900 shadow-sm sm:px-6"
                  : "rounded-full px-5 py-2.5 text-neutral-500 hover:text-neutral-800 sm:px-6"
              }`}
            >
              Frequent Questions
            </button>
          </div>
        </div>

        {tab === "contact" && (
          <div
            className="rounded-2xl bg-[#050A18] p-4 shadow-xl sm:rounded-3xl sm:p-6 md:p-8 lg:grid lg:grid-cols-5 lg:gap-12 lg:p-10 xl:p-12"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="800"
          >
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
                Get in touch
              </h3>
              <p className="mt-3 text-base text-white/75 sm:text-lg">
                Great innovation starts with a conversation.
              </p>

              <ul className="mt-8 space-y-4">
                {contactRows.map((row) => (
                  <li key={row.title}>
                    <a
                      href={row.href}
                      className="group flex items-center gap-3 rounded-xl bg-[#1c1f28] p-3 transition-colors hover:bg-[#252a36] sm:gap-4 sm:rounded-2xl sm:p-4 md:p-5"
                      {...(row.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-accent">
                        {row.icon}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-white">{row.title}</p>
                        <p className="mt-0.5 text-sm text-white/55">{row.detail}</p>
                      </div>
                      <ArrowCircle />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 lg:col-span-3 lg:mt-0">
              <form
                className="rounded-xl bg-[#252830] p-4 sm:rounded-2xl sm:p-6 md:p-8"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="space-y-4">
                  <label className="sr-only" htmlFor="contact-name">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Name"
                    className="w-full rounded-xl border border-white/10 bg-[#1a1d24] px-4 py-3.5 text-white placeholder:text-white/35 focus:border-accent/60 focus:outline-none focus:ring-1 focus:ring-accent/40"
                  />
                  <label className="sr-only" htmlFor="contact-email">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email"
                    className="w-full rounded-xl border border-white/10 bg-[#1a1d24] px-4 py-3.5 text-white placeholder:text-white/35 focus:border-accent/60 focus:outline-none focus:ring-1 focus:ring-accent/40"
                  />
                  <label className="sr-only" htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Message"
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#1a1d24] px-4 py-3.5 text-white placeholder:text-white/35 focus:border-accent/60 focus:outline-none focus:ring-1 focus:ring-accent/40"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full rounded-xl bg-accent py-4 text-base font-bold text-white transition-colors hover:bg-accent/90 active:scale-[0.99]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}

        {tab === "faq" && (
          <div
            className="rounded-2xl bg-[#050A18] p-4 sm:rounded-3xl sm:p-6 md:p-8 lg:p-10 xl:p-12"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="800"
          >
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Frequently asked questions
            </h3>
            <ul className="mt-8 space-y-6">
              {faqItems.map((item) => (
                <li
                  key={item.q}
                  className="rounded-2xl border border-white/10 bg-[#1c1f28] p-5 sm:p-6"
                >
                  <p className="font-semibold text-white">{item.q}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/65 sm:text-base">
                    {item.a}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
