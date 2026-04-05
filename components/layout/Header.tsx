"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/what-we-sell", label: "What we Sell" },
  { href: "/who-we-are", label: "Who we Are" },
  { href: "/what-we-do", label: "What we Do" },
  { href: "/contact-us", label: "Contact Us" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close drawer on resize to desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = () => { if (mq.matches) setOpen(false); };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="bg-white border-b border-zinc-100 sticky top-0 z-50 py-2 shadow-sm">
      <div
        className="container mx-auto flex h-14 min-w-0 max-w-full items-center justify-between gap-2 px-4 sm:px-6"
        data-aos="fade-down"
        data-aos-duration="600"
        data-aos-easing="ease-out-cubic"
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="relative h-14 w-14">
            <Image
              src="/images/waygibb-logo.png"
              alt="Way Gibb Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2 gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[#1E1A4B] hover:text-accent transition-colors tracking-tight whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Order Now Button */}
          <Link href="/contact-us">
            <button className="bg-[#1E1A4B] text-white px-5 py-2 sm:px-8 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all hover:opacity-90 active:scale-95 shadow-lg shadow-[#1E1A4B]/20">
              Order Now
            </button>
          </Link>

          {/* Mobile Hamburger */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
          >
            <div className="flex h-5 w-6 flex-col justify-between">
              <span
                className={`block h-0.5 w-full rounded bg-[#1E1A4B] transition-all duration-300 ${
                  open ? "translate-y-[9px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full rounded bg-[#1E1A4B] transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full rounded bg-[#1E1A4B] transition-all duration-300 ${
                  open ? "-translate-y-[9px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Drawer */}
      <nav
        className={`fixed top-0 right-0 z-50 flex h-full w-[280px] max-w-[85vw] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-zinc-100 px-5 py-4">
          <span className="text-base font-bold text-[#1E1A4B]">Menu</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-zinc-100"
          >
            <svg className="h-5 w-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col gap-1 px-4 py-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-semibold text-[#1E1A4B] transition-colors hover:bg-zinc-50"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto border-t border-zinc-100 px-5 py-5">
          <Link href="/contact-us" onClick={() => setOpen(false)} className="block w-full">
            <button
              className="w-full bg-[#1E1A4B] text-white py-3 rounded-full font-bold text-sm transition-all hover:opacity-90 active:scale-95 shadow-lg shadow-[#1E1A4B]/20"
            >
              Order Now
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
