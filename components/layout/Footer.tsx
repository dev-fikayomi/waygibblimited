import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/what-we-sell", label: "What we Sell" },
  { href: "/who-we-are", label: "Who we Are" },
  { href: "/what-we-do", label: "What we Do" },
  { href: "/contact-us", label: "Contact Us" },
] as const;

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/waygibbb?igsh=MTczZnZ1a2h6eHg0bg%3D%3D&utm_source=qr",
    icon: (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden>
        <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10.5 4a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@waygibb?is_from_webapp=1&sender_device=pc",
    icon: (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden>
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.95v7.4c-.01 2.72-1.39 5.37-3.69 6.81-2.26 1.4-5.26 1.6-7.73.53-2.18-.94-3.83-2.82-4.44-5.06-.57-2.18-.08-4.59 1.25-6.42 1.35-1.84 3.48-3.05 5.76-3.32v4.13c-1.22.18-2.37.93-3.1 1.95-.69 1-.95 2.3-.68 3.49.25 1.15 1 2.16 2.01 2.74 1.18.66 2.66.75 3.96.22 1.18-.49 2.02-1.57 2.37-2.81.08-.34.12-.69.12-1.04v-16.6z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      className="bg-[#050A18] text-white"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[min(55%,580px)] lg:block"
          aria-hidden
        >
          <Image
            src="/images/map.png"
            alt=""
            fill
            className="object-cover object-right opacity-[0.35]"
            sizes="580px"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-5 md:px-6 lg:pb-10 lg:pt-9">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 xl:gap-10">
            <div className="flex max-w-xs flex-col gap-3 sm:max-w-sm">
              <Link href="/" className="inline-block w-fit bg-white p-1 shadow-sm">
                <Image
                  src="/images/waygibb-logo.png"
                  alt="Way Gibb"
                  width={32}
                  height={40}
                  className="h-auto w-[1.125rem] object-contain sm:w-5"
                  priority={false}
                />
              </Link>
              <h2 className="text-base font-bold leading-snug text-white">
                The Logistics Company That Always Delivers
              </h2>
              <p className="text-xs leading-relaxed text-white/65">
                Waygibb connects customers to essential goods through direct sourcing and reliable logistics safely and securely. We provide you with premium fulfillment services on all scales.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                {socialLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:border-white/40 hover:bg-white/10"
                  >
                    <span className="sr-only">{item.name}</span>
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-white">
                Menu
              </h3>
              <ul className="mt-3 flex flex-col gap-2">
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-xs font-semibold text-white/75 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-white">
                Terms
              </h3>
              <ul className="mt-3 flex flex-col gap-2">
                <li>
                  <Link
                    href="/terms"
                    className="text-xs font-semibold text-white/75 transition-colors hover:text-white"
                  >
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-xs font-semibold text-white/75 transition-colors hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="relative z-10">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-white">
                Contact info
              </h3>
              <ul className="mt-3 flex flex-col gap-2">
                <li>
                  <Link
                    href="https://maps.google.com/?q=Lagos+Nigeria"
                    className="text-xs font-semibold text-white/75 transition-colors hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Map Location
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-5 md:px-6">
          <p className="text-center text-[11px] text-white/50 sm:text-xs">
            waygibb © 2025 | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
