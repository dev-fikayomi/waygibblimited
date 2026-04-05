import Image from "next/image";

const flowSteps = [
  "Order Placement",
  "Order Scheduling",
  "Processing & Packaging",
  "Delivery",
] as const;

function UpTriangleIcon() {
  return (
    <svg
      className="h-3 w-3 shrink-0 fill-neutral-900 sm:h-3.5 sm:w-3.5"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path d="M12 5.5 20.5 19H3.5L12 5.5z" />
    </svg>
  );
}

export default function HowWeService() {
  return (
    <section id="service" className="overflow-hidden bg-white py-10 sm:py-14 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div
            className="flex min-w-0 flex-col gap-5 sm:gap-6 lg:gap-8"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="border border-violet-200/60 bg-[#F3E8FF] p-4 sm:p-6 md:p-8">
              <h2 className="text-xl font-bold uppercase tracking-tight text-neutral-900 sm:text-2xl md:text-3xl lg:text-4xl">
                HOW WE SERVICE
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-800 sm:mt-4 sm:text-base lg:text-lg">
                At Waygibb Ltd, every order follows a clearly defined process
                designed to ensure accuracy, quality, and timely delivery. From
                the moment you place your order to final delivery, we maintain
                full control at every stage.
              </p>
            </div>

            <div className="border border-violet-200/60 bg-[#F3E8FF] p-4 sm:p-6 md:p-8">
              <h3 className="text-base font-bold uppercase leading-snug tracking-tight text-neutral-900 sm:text-lg md:text-xl lg:text-2xl">
                SPECIAL SERVICE FLOW: MEAT SHARING
              </h3>
              <p className="mt-3 text-sm font-medium text-neutral-800 sm:mt-4 sm:text-base">
                Our meat sharing system follows a structured group process:
              </p>
              <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm leading-relaxed text-neutral-800 marker:text-neutral-900 sm:mt-4 sm:space-y-2 sm:text-base">
                <li>Customers join a plan</li>
                <li>Livestock is sourced</li>
                <li>The animal is processed</li>
                <li>Portions are distributed</li>
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-neutral-800 sm:mt-5 sm:text-base">
                Every step is documented so participants see transparent allocation,
                fair handling, and dependable value from sourcing through delivery.
              </p>
            </div>
          </div>

          <div
            className="relative mx-auto w-full max-w-[340px] justify-self-center overflow-visible sm:max-w-[400px] md:max-w-[440px] lg:mx-0 lg:max-w-[520px] lg:justify-self-end xl:max-w-[560px]"
            data-aos="fade-left"
            data-aos-duration="850"
            data-aos-delay="100"
          >
            <div className="relative overflow-visible">
              <div className="relative h-[380px] w-full overflow-hidden shadow-xl sm:h-[440px] md:h-[480px] lg:h-[540px] xl:h-[580px]">
                <Image
                  src="/images/service.png"
                  alt="Way Gibb service professional with tablet"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 340px, (max-width: 768px) 400px, (max-width: 1024px) 440px, 560px"
                  priority={false}
                />
              </div>

              <div className="pointer-events-none absolute left-0 top-1/2 z-10 w-[min(100%,9rem)] -translate-y-1/2 -translate-x-[10%] sm:w-[min(100%,10.5rem)] sm:-translate-x-[18%] md:w-[min(100%,11.5rem)] md:-translate-x-[24%] lg:w-[min(100%,13rem)] lg:-translate-x-[30%] xl:w-56 xl:-translate-x-[33%]">
                <ul className="pointer-events-auto m-0 flex list-none flex-col gap-2 p-0 sm:gap-3 lg:gap-4">
                  {flowSteps.map((label) => (
                    <li key={label}>
                      <div className="flex flex-col items-center gap-1.5 border border-white/95 bg-white/50 px-2 py-2 shadow-md backdrop-blur-md supports-[backdrop-filter]:bg-white/40 sm:gap-2 sm:px-3 sm:py-3 md:px-4 md:py-3.5">
                        <UpTriangleIcon />
                        <span className="text-center text-[9px] font-bold leading-tight text-neutral-900 sm:text-[11px] md:text-xs lg:text-sm">
                          {label}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
