import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85svh] w-full min-w-0 max-w-full items-center overflow-hidden">
      <div className="absolute inset-0 z-0 min-w-0">
        <Image
          src="/images/hero.png"
          alt="Way Gibb Industrial Hero"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto flex w-full min-w-0 max-w-full items-center px-4 py-16 sm:py-20 lg:py-24 sm:px-6 md:px-8">
        <div className="relative w-full min-w-0 max-w-3xl translate-y-4 sm:translate-x-4 sm:translate-y-8 md:translate-x-10 lg:translate-x-20">
          <div className="absolute -inset-x-4 -inset-y-6 -z-10 rounded-2xl border border-white/20 bg-white/20 backdrop-blur-[6px] shadow-xl sm:-inset-x-8 sm:-inset-y-8 sm:rounded-[2rem] md:-inset-x-16 md:-inset-y-12 lg:-inset-x-20 md:rounded-[3rem]" />

          <div className="text-primary">
            <div className="inline-block max-w-full">
              <div
                className="mb-3 flex w-full justify-between text-[10px] font-bold uppercase text-primary sm:mb-4 sm:text-xs"
                data-aos="fade-down"
                data-aos-duration="700"
                data-aos-delay="100"
                aria-label="DELIVERED RELIABLY"
              >
                {"DELIVERED RELIABLY".split("").map((char, index) => (
                  <span key={index} aria-hidden="true" className={char === " " ? "w-2 sm:w-3 md:w-4" : ""}>
                    {char}
                  </span>
                ))}
              </div>
              <h1
                className="mb-5 max-w-full break-words font-sans text-3xl font-extrabold leading-[1.1] tracking-tight text-primary sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                Premium Food &{" "}
                <br className="hidden sm:inline" />
                Building Materials
              </h1>
            </div>
            <p
              className="mb-6 max-w-sm text-sm font-medium leading-relaxed text-primary/90 sm:mb-8 sm:max-w-lg sm:text-base md:text-lg"
              data-aos="fade-up"
              data-aos-duration="750"
              data-aos-delay="320"
            >
              Waygibb Ltd supplies high-quality meat, poultry, and construction
              materials directly to customers through a seamless ordering system
              with instant delivery or scheduled pre-orders.
            </p>

            <p
              className="mb-8 max-w-xs text-xs font-semibold italic leading-relaxed text-primary sm:mb-12 sm:max-w-md sm:text-sm"
              data-aos="fade-up"
              data-aos-duration="750"
              data-aos-delay="420"
            >
              We don&apos;t connect you to suppliers we supply you. directly and
              deliver to your doorstep
            </p>

            <div
              className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-5"
              data-aos="fade-up"
              data-aos-duration="750"
              data-aos-delay="520"
            >
              <button
                type="button"
                className="w-full rounded-xl bg-white px-8 py-3 text-sm font-bold text-[#E53935] shadow-xl shadow-white/10 transition-all hover:bg-zinc-100 active:scale-95 sm:w-auto sm:px-10 sm:py-3.5 sm:text-base"
              >
                Order via App
              </button>
              <button
                type="button"
                className="w-full rounded-xl border border-white/10 bg-[#1E1A4B] px-8 py-3 text-sm font-bold text-white shadow-xl shadow-[#1E1A4B]/20 transition-all hover:bg-[#1E1A4B]/90 active:scale-95 sm:w-auto sm:px-10 sm:py-3.5 sm:text-base"
              >
                Schedule a Pre-Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
