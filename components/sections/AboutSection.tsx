import Image from "next/image";
import Link from "next/link";

const ACCENT_PURPLE = "#4B307E";

const processSteps = [
  { title: "Place Order via App", subtitle: "Download App" },
  { title: "Choose Instant or Pre-Order", subtitle: "Years Of Experience" },
  { title: "We Process & Prepare", subtitle: "Miles Driven" },
  { title: "We Deliver", subtitle: "Miles Driven" },
] as const;

function StepChevronIcon() {
  return (
    <svg
      className="mt-0.5 h-6 w-6 shrink-0 sm:h-8 sm:w-8 lg:h-9 lg:w-9"
      viewBox="0 0 24 24"
      fill={ACCENT_PURPLE}
      aria-hidden
    >
      <path d="M12 18.5 3.5 5.5h17L12 18.5z" />
    </svg>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="bg-white">
      {/* 1. Full-width About Banner with Background Image */}
      <div className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[520px] xl:h-[550px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/about-waygibb.jpg"
          alt="Waygibb Warehouse"
          fill
          className="object-cover"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3b1578]/70 via-[#3b1578]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3b1578]/60 via-transparent to-transparent" />

        {/* Text Content — Bottom Left */}
        <div className="absolute bottom-0 left-0 w-full px-4 pb-8 sm:px-6 sm:pb-10 md:px-12 md:pb-14 lg:px-20">
          <div
            className="max-w-2xl"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70 mb-2 block sm:text-xs sm:tracking-[0.3em] sm:mb-3 md:text-sm">
              A B O U T &nbsp; U S
            </span>
            <h2 className="text-2xl font-extrabold text-white mb-3 leading-tight sm:text-3xl sm:mb-4 md:text-4xl md:mb-5 lg:text-5xl">
              About Waygibb Ltd
            </h2>
            <p className="text-white/80 text-xs leading-relaxed mb-4 max-w-md sm:text-sm sm:mb-5 sm:max-w-lg md:text-base md:mb-6 md:max-w-xl">
              Waygibb Ltd is a supply and distribution company focused on delivering
              essential goods directly to customers without intermediaries.. Waygibb Ltd is
              a supply and distribution company focused on delivering essential goods
              directly to customers without intermediaries..
            </p>

            {/* Purple Highlight Box */}
            <div className="bg-white/10 backdrop-blur-sm border-l-4 border-white/60 px-4 py-3 rounded-xl max-w-sm sm:px-5 sm:py-4 sm:max-w-md md:px-6 md:py-5 md:max-w-lg">
              <p className="text-white font-bold text-xs leading-snug sm:text-sm md:text-base">
                We Control Sourcing, Processing, And
                Logistics — Ensuring Consistency, Quality,
                And Reliability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Steps (produce image + glass cards) + Mission & Vision */}
      <div className="grid grid-cols-1 overflow-visible lg:grid-cols-2">
        <div
          className="flex w-full justify-center overflow-x-visible bg-white px-4 py-8 sm:justify-end sm:px-6 sm:py-12 lg:py-16 lg:pr-10 xl:pr-12"
          data-aos="fade-right"
          data-aos-duration="850"
        >
          <div className="relative w-full max-w-[min(100%,480px)] overflow-visible sm:max-w-[min(100%,520px)] md:max-w-[min(100%,560px)] lg:mr-6 lg:max-w-[min(100%,600px)] xl:max-w-[min(100%,640px)]">
            <div className="relative h-[260px] w-full overflow-hidden rounded-2xl shadow-lg sm:h-[300px] md:h-[340px] lg:h-[370px] xl:h-[390px]">
              <Image
                src="/images/steps.png"
                alt="Fresh produce display"
                fill
                className="object-cover object-right"
                sizes="(max-width: 768px) 100vw, 640px"
              />
            </div>
            <div className="pointer-events-none absolute left-0 top-1/2 z-10 flex w-full -translate-y-1/2 justify-end pl-2 pr-0 sm:pl-3">
              <ul className="pointer-events-auto m-0 flex w-[min(100%,15rem)] translate-x-2 list-none flex-col gap-2 p-0 sm:w-[min(100%,17rem)] sm:translate-x-4 sm:gap-2.5 md:w-[min(100%,18.5rem)] md:translate-x-5 lg:w-[min(100%,20rem)] lg:translate-x-7 lg:gap-3 xl:w-[min(100%,20.5rem)] xl:translate-x-8">
                {processSteps.map((step, index) => (
                  <li key={index} className="relative">
                    <div
                      className="flex gap-2 rounded-xl border border-[#D8C8E6] bg-white/[0.82] px-2.5 py-1.5 shadow-[0_10px_28px_rgba(20,12,48,0.18)] backdrop-blur-md supports-[backdrop-filter]:bg-white/[0.72] sm:gap-2.5 sm:rounded-2xl sm:px-3 sm:py-2 md:gap-3 md:px-4 md:py-2.5 lg:px-4 lg:py-2.5"
                    >
                      <StepChevronIcon />
                      <div className="min-w-0 text-left">
                        <p className="text-sm font-bold leading-snug text-neutral-950 [text-shadow:0_1px_0_rgba(255,255,255,0.9)] sm:text-base lg:text-lg xl:text-xl">
                          {step.title}
                        </p>
                        <p className="mt-0.5 text-xs font-medium leading-snug text-neutral-700 sm:text-sm md:text-base">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col justify-center bg-white px-4 py-10 sm:px-6 sm:py-14 md:px-12 lg:px-14 lg:py-20 xl:px-20"
          data-aos="fade-left"
          data-aos-duration="850"
        >
          <div
            className="mb-8 lg:mb-12"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="700"
          >
            <h3 className="mb-3 text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl sm:mb-4 md:text-4xl">
              Our Mission
            </h3>
            <p className="max-w-lg text-base leading-relaxed text-neutral-700 sm:text-lg">
              To provide dependable access to essential goods through a structured
              and efficient supply system.
            </p>
          </div>

          <div
            className="mb-10 lg:mb-14"
            data-aos="fade-up"
            data-aos-delay="160"
            data-aos-duration="700"
          >
            <h3 className="mb-3 text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl sm:mb-4 md:text-4xl">
              Our Vision
            </h3>
            <p className="max-w-lg text-base leading-relaxed text-neutral-700 sm:text-lg">
              To become a leading direct-to-customer supply brand across multiple
              industries.
            </p>
          </div>

          <div
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            data-aos="fade-up"
            data-aos-delay="240"
            data-aos-duration="700"
          >
            <Link
              href="#"
              className="transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center justify-center gap-3 rounded-xl bg-black px-5 py-2.5 text-white shadow-lg sm:px-6 sm:py-3">
                <svg className="h-6 w-6 shrink-0 fill-current sm:h-7 sm:w-7" viewBox="0 0 24 24">
                  <path d="M18.71,19.5C17.88,20.74,17,21.95,15.66,22c-1.31,0-1.72-0.8-3.27-0.8c-1.54,0-2,0.78-3.27,0.8c-1.31,0.03-2.31-1.33-3.14-2.5 c-1.69-2.45-2.99-6.93-1.23-9.98c0.88-1.5,2.44-2.46,4.13-2.48c1.31-0.03,2.5,0.86,3.32,0.86c0.8,0,2.27-1.1,3.83-0.93 c0.66,0.03,2.5,0.28,3.69,2.01c-0.1,0.05-2.18,1.28-2.16,3.83c0.03,3.06,2.69,4.09,2.72,4.12C19.99,17.15,19.54,18.27,18.71,19.5z M13,3.5c0.73-0.88,1.21-2.1,1.08-3.3c-1.03,0.05-2.29,0.7-3.03,1.58c-0.66,0.78-1.24,2.03-1.11,3.22 C10.99,5.05,12.24,4.4,13,3.5z" />
                </svg>
                <div>
                  <div className="text-[8px] font-bold uppercase leading-none opacity-70 sm:text-[9px]">
                    Download on the
                  </div>
                  <div className="text-sm font-bold leading-tight sm:text-base">App Store</div>
                </div>
              </div>
            </Link>
            <Link
              href="#"
              className="transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center justify-center gap-3 rounded-xl bg-black px-5 py-2.5 text-white shadow-lg sm:px-6 sm:py-3">
                <svg className="h-6 w-6 shrink-0 fill-current sm:h-7 sm:w-7" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91,3.34,2.39,3.84,2.15L13.69,12L3.84,21.85C3.34,21.61,3,21.09,3,20.5z M14.41,12.72L16.55,14.86 L4.41,21.85c-0.14,0.08-0.29,0.13-0.45,0.15L14.41,12.72z M17.26,12L15.12,9.86L17.26,12z M16.55,9.14L14.41,11.28L3.96,1.99 c0.16,0.02,0.31,0.07,0.45,0.15L16.55,9.14z" />
                </svg>
                <div>
                  <div className="text-[8px] font-bold uppercase leading-none opacity-70 sm:text-[9px]">
                    GET IT ON
                  </div>
                  <div className="text-sm font-bold leading-tight sm:text-base">Google Play</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
