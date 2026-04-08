import Image from "next/image";
import Link from "next/link";

export default function AppShowcase() {
  return (
    <section
      id="app"
      className="bg-white"
      aria-labelledby="app-showcase-heading"
    >
      <div className="flex min-h-0 flex-col lg:min-h-[400px] lg:flex-row lg:items-stretch">
        <div
          className="relative flex w-full items-center justify-center bg-neutral-100 px-4 py-8 sm:px-8 sm:py-10 lg:w-1/2 lg:justify-end lg:py-12 lg:pl-4 lg:pr-0 xl:pl-6"
          data-aos="fade-right"
          data-aos-duration="850"
        >
          <div className="relative h-[250px] w-full max-w-md translate-y-4 sm:h-[340px] md:h-[420px] md:translate-y-6 lg:h-[min(550px,70vh)] lg:max-w-none lg:translate-y-7 translate-x-14">
            <Image
              src="/images/wygibb.png"
              alt="Way Gibb app on mobile phones"
              fill
              className="object-contain object-right scale-125 lg:origin-right"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 50vw"
              priority={false}
            />
          </div>
        </div>

        <div
          className="flex w-full flex-col justify-center bg-[#f0f0f2] px-4 py-10 sm:px-8 sm:py-12 lg:-ml-2 lg:w-1/2 lg:py-12 lg:pl-4 lg:pr-10 xl:-ml-3 xl:pl-5 xl:pr-14"
          data-aos="fade-left"
          data-aos-duration="850"
          data-aos-delay="120"
        >
          <h2
            id="app-showcase-heading"
            className="text-2xl font-extrabold leading-tight tracking-tight text-primary sm:text-3xl md:text-4xl lg:pl-5 lg:text-5xl xl:pl-6"
          >
            WAY GIBB is more
          </h2>

          <div className="mt-4 inline-flex w-fit max-w-full flex-wrap items-center gap-2 self-start rounded-full bg-[#3b1578] px-4 py-2.5 sm:mt-5 sm:-translate-x-2 sm:gap-2.5 sm:px-6 sm:py-3 md:-translate-x-3 md:gap-3 md:px-7 md:py-3.5 lg:-translate-x-6 lg:px-8 lg:py-4 xl:-translate-x-10 xl:px-9 xl:py-4 2xl:-translate-x-12">
            <span className="text-base font-bold text-accent underline decoration-accent decoration-2 underline-offset-[4px] sm:text-lg sm:underline-offset-[5px] md:text-xl lg:text-[1.65rem] lg:underline-offset-[7px] xl:text-[1.85rem]">
              Personalised
            </span>
            <span className="text-base font-bold text-white sm:text-lg md:text-xl lg:text-[1.65rem] xl:text-[1.85rem]">
              &amp; Instant
            </span>
          </div>

          <p className="mt-1 max-w-md text-sm font-medium leading-relaxed text-primary/80 sm:mt-2 sm:text-base md:text-lg lg:mt-3">
            Download the WAYGIBB APP for faster ordering.
          </p>

          <div className="mt-3 flex flex-col gap-3 sm:mt-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 lg:mt-5">
            <Link
              href="#"
              className="transition-opacity hover:opacity-90 active:opacity-80"
            >
              <div className="flex items-center justify-center gap-3 bg-black px-5 py-2.5 text-white sm:px-6 sm:py-3">
                <svg
                  className="h-6 w-6 shrink-0 fill-current sm:h-8 sm:w-8"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M18.71,19.5C17.88,20.74,17,21.95,15.66,22c-1.31,0-1.72-0.8-3.27-0.8c-1.54,0-2,0.78-3.27,0.8c-1.31,0.03-2.31-1.33-3.14-2.5 c-1.69-2.45-2.99-6.93-1.23-9.98c0.88-1.5,2.44-2.46,4.13-2.48c1.31-0.03,2.5,0.86,3.32,0.86c0.8,0,2.27-1.1,3.83-0.93 c0.66,0.03,2.5,0.28,3.69,2.01c-0.1,0.05-2.18,1.28-2.16,3.83c0.03,3.06,2.69,4.09,2.72,4.12C19.99,17.15,19.54,18.27,18.71,19.5z M13,3.5c0.73-0.88,1.21-2.1,1.08-3.3c-1.03,0.05-2.29,0.7-3.03,1.58c-0.66,0.78-1.24,2.03-1.11,3.22 C10.99,5.05,12.24,4.4,13,3.5z" />
                </svg>
                <div>
                  <div className="text-[9px] font-bold uppercase leading-none opacity-70 sm:text-[10px]">
                    Download on the
                  </div>
                  <div className="text-base font-bold leading-tight sm:text-lg">App Store</div>
                </div>
              </div>
            </Link>
            <Link
              href="#"
              className="transition-opacity hover:opacity-90 active:opacity-80"
            >
              <div className="flex items-center justify-center gap-3 bg-black px-5 py-2.5 text-white sm:px-6 sm:py-3">
                <svg
                  className="h-6 w-6 shrink-0 fill-current sm:h-8 sm:w-8"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M3,20.5V3.5C3,2.91,3.34,2.39,3.84,2.15L13.69,12L3.84,21.85C3.34,21.61,3,21.09,3,20.5z M14.41,12.72L16.55,14.86 L4.41,21.85c-0.14,0.08-0.29,0.13-0.45,0.15L14.41,12.72z M17.26,12L15.12,9.86L17.26,12z M16.55,9.14L14.41,11.28L3.96,1.99 c0.16,0.02,0.31,0.07,0.45,0.15L16.55,9.14z" />
                </svg>
                <div>
                  <div className="text-[9px] font-bold uppercase leading-none opacity-70 sm:text-[10px]">
                    GET IT ON 
                  </div>
                  <div className="text-base font-bold leading-tight sm:text-lg">Google Play</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
